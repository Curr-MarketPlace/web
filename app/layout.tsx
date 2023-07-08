"use client";
import LeftBar from "@/components/leftbar/Leftbar";
import Rightbar from "@/components/rightbar/Rightbar";
import Searchbar from "@/components/searchbar/Searchbar";

import "./globals.css";
import { Inter } from "next/font/google";

// ******* Wallet Kitt**** 

import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, zora } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, zora],
  [alchemyProvider({ apiKey: "process.env.ALCHEMY_ID" }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

// ***** Wallet Kit *****
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "normal"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({
  children,
  etc,
}: {
  children: React.ReactNode;
  etc: any;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiConfig config={wagmiConfig}>
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
            <div className="flex fixed  bg-[#F9F6FE]  h-full w-full">
              <LeftBar />
              <div className="flex h-full w-[82%] flex-col">
                <Searchbar />

                <div className="flex flex-row pb-6 h-[88%] w-full">
                  <div className="main-children pl-6  flex flex-col items-end min-h-[88%] h-full min-w-[70%] w-full">
                    {children}
                  </div>
                  <Rightbar />
                </div>
              </div>
            </div>
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
