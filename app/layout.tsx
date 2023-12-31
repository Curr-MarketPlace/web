'use client'
import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import { useState } from 'react'
import LeftBar from '@/components/leftbar/Leftbar'
import Searchbar from '@/components/searchbar/Searchbar'
import { ThemeProvider } from 'next-themes'
import BottomBar from '@/components/bottomBar/BottomBar'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Drawer from '@/components/drawer/Drawer'
// ******* Wallet Kitt****

import '@rainbow-me/rainbowkit/styles.css'
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
  connectorsForWallets
} from '@rainbow-me/rainbowkit'
import {
  injectedWallet,
  rainbowWallet,
  walletConnectWallet
} from '@rainbow-me/rainbowkit/wallets'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum, zora } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, zora],
  [publicProvider()]
)
// const  projectId = "P"
const connectors = connectorsForWallets([
  {
    groupName: 'Populer',
    wallets: [injectedWallet({ chains })]
  }
])

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})
// ***** Wallet Kit *****
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'normal']
})
const poppins = Poppins({
  weight: ['400', '500'],
  style: ['normal', 'normal'],
  subsets: ['latin']
})

export default function RootLayout ({
  children,
  etc
}: {
  children: React.ReactNode
  etc: any
}) {
  const [drawer, setDrawer] = useState(false)
  const handleDrawer = (veri: any) => {
    setDrawer(veri)
  }
  return (
    <Provider store={store}>
      <html lang='en'>
        <title>'Create Next App'</title>
        <body className={` ${poppins.className}`}>
          <ThemeProvider attribute='class'>
            <WagmiConfig config={wagmiConfig}>
              <RainbowKitProvider chains={chains}>
                <main>
                  <div
                    className={`flex fixed dark:bg-[#121212] bg-[#F9F6FE]  h-[100vh] w-[100vw] 
               
              `}
                  >
                    <LeftBar />
                    <div className='flex   w-[100vw] h-[100vh] md:w-[82vw] flex-col'>
                      <div
                        className={`h-auto px-5 py-4 flex w-full items-center  ease-in-out duration-300 bg-[#F9F6FE]  dark:bg-[#121212]  ${
                          drawer ? 'translate-x-3/4' : ' translate-x-'
                        }  `}
                      >
                        <Searchbar drawerHidden={handleDrawer} />
                      </div>
                      <Drawer />

                      <div
                        className={`flex flex-col justify-center  md:flex-row  h-full  md:h-[88vh] w-auto ease-in-out duration-300 
                    ${drawer ? 'translate-x-3/4' : ' '} 

                  `}
                      >
                        <div
                          className={`main-children pb-[40%] md:pb-0 md:pl-6 flex flex-col justify-center h-full md:h-full  md:min-h-[77vh]  w-full
                    `}
                        >
                          {children}
                        </div>
                        <BottomBar />
                      </div>
                    </div>
                  </div>
                </main>
              </RainbowKitProvider>
            </WagmiConfig>
          </ThemeProvider>
        </body>
      </html>
    </Provider>
  )
}
