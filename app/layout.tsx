'use client'
import './globals.css'
import { Inter } from 'next/font/google'

import LeftBar from '@/components/leftbar/Leftbar'
import Rightbar from '@/components/rightbar/Rightbar'
import Searchbar from '@/components/searchbar/Searchbar'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import BottomBar from '@/components/bottomBar/BottomBar'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { drawerOff } from './redux/drawer/drawerSlice'
import { useDispatch } from 'react-redux'
import Popup from '@/components/popup/Popup'

// ******* Wallet Kitt****

// import "@rainbow-me/rainbowkit/styles.css";
// import {
//   getDefaultWallets,
//   RainbowKitProvider,
//   lightTheme,
// } from "@rainbow-me/rainbowkit";
// import { configureChains, createConfig, WagmiConfig } from "wagmi";
// import { mainnet, polygon, optimism, arbitrum, zora } from "wagmi/chains";
// import { alchemyProvider } from "wagmi/providers/alchemy";
// import { publicProvider } from "wagmi/providers/public";
//

// const { chains, publicClient } = configureChains(
//   [mainnet, polygon, optimism, arbitrum, zora],
//   [alchemyProvider({ apiKey: "process.env.ALCHEMY_ID" }), publicProvider()]
// );

// const { connectors } = getDefaultWallets({
//   appName: "My RainbowKit App",
//   projectId: "YOUR_PROJECT_ID",
//   chains,
// });

// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient,
// });

// ***** Wallet Kit *****
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'normal']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children,
  etc
}: {
  children: React.ReactNode
  etc: any
}) {
  // const dispatch = useDispatch()

  return (
    <Provider store={store}>
      <html lang='en'>
        <body className={` ${inter.className}`}>
          {/* <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider
            chains={chains}
            coolMode  
            theme={lightTheme({
              accentColor: "#7b3fe4",
              accentColorForeground: "white",
              borderRadius: "medium",
              fontStack: "system",
              overlayBlur: "small",
            })}
            {...etc}
          >
          </RainbowKitProvider> 
        </WagmiConfig> */}
          <ThemeProvider attribute='class'>
            <main>
              <div
                className='flex fixed dark:bg-[#121212] bg-[#F9F6FE]  h-[100vh] w-[100vw]'
                // onClick={() => dispatch(drawerOff())}
              >
                <LeftBar />
                <div className='flex h-full w-[100vw] md:w-[82vw] flex-col'>
                  <Searchbar />
                  <Popup />

                  <div className='flex flex-col justify-center md:flex-row md:pb-6 h-[100vh]  md:h-[88vh] w-full '>
                    <div className='main-children md:pl-6  flex flex-col justify-center h-[80vh] md:h-full  md:min-h-[77vh]  w-full'>
                      {children}
                    </div>
                    <BottomBar />
                  </div>
                </div>
              </div>
            </main>
          </ThemeProvider>
        </body>
      </html>
    </Provider>
  )
}
