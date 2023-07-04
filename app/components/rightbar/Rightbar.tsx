"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import Topcreator from "./Topcreator";
import Featuredcreators from "./Featuredcreators";
import History from "./History";
import SettingsModal from "./comp/SettingsModal"
import { ConnectButton } from '@rainbow-me/rainbowkit';

const index = () => {
  const [showMyModal, setshowMyModal] = useState(false)

      const handleOnClose = ()=> setshowMyModal(false)
      
  return (
    <div className="bg-[#F9F6FE] overflow-y-auto h-[100%] w-[25%] flex flex-col items-center relative ">
      <div className="w-full min-h-[12%] flex justify-end items-center gap-5 pr-6">

      <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button className="connectWallet bg-white py-2 px-3 rounded-lg 
                   text-[#901BB7] font-semibold text-xs" onClick={openConnectModal} type="button">
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>

                  <button onClick={openAccountModal} type="button">
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
        {/* <div
          className="relative inline-flex items-center justify-center w-9 h-9 overflow-hidden
        rounded-full  border-2 border-purple-500 hover:border-4 hover:border-purple-500"
        >
          <FaBell className="text-2xl hover:text-xl" color="#3E0AD4" />
        </div> */}
        <div
        onClick={()=>setshowMyModal(true)}
          className="relative inline-flex items-center justify-center w-11 h-11 overflow-hidden
       bg-gray-100 rounded-full  border-2 border-purple-500 hover:border-4 hover:border-purple-500"
        >
          <Image src={"/unnamed.jpg"} alt="asd" className="rounded-full object-cover" width={38} height={38} />
         
        </div>
      </div>

      <SettingsModal onClose={handleOnClose}  visible={showMyModal}/>
      <Topcreator/>
      <Featuredcreators/>
      <History/>
     

    </div>
  );
};

export default index;
