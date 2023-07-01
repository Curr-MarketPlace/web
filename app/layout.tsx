"use client"
import LeftBar from './components/leftbar/Leftbar'
import Rightbar from './components/rightbar/Rightbar'
import Searchbar from "./components/searchbar/Searchbar"

import './globals.css'
import { Inter } from 'next/font/google'

// wallet kit

import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  zora,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, zora],
  [
    alchemyProvider({ apiKey: "process.env.ALCHEMY_ID" }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

// kitt
const inter = Inter({ subsets: ['latin'], weight:["400","500"],style:["normal","normal"]})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (

    <html lang="en">
      <body className={inter.className}>
      <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <div className='flex fixed flex-row h-[100%] w-[100%]'>
        <LeftBar/>
        <div className='bg-[#F9F6FE] pl-6 flex flex-col h-full w-[57%]'>
               <Searchbar/>

        {children}
        </div>
        <Rightbar/>
        </div>
        </RainbowKitProvider>
      </WagmiConfig>
        </body>
    </html>
  )
}
