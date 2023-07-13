import Image from 'next/image'
import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { IoIosArrowDown } from 'react-icons/io';
const searchbar = () => {
  return (

    <div className='flex flex-row m-6'>

    <div className="search-button  flex relative justify-start items-center w-full min-h-[12%] ">
      <div className='h-6 w-6  ml-4 flex justify-center items-center absolute'>
           <Image
           src={"/vector.png"}
           alt='adsa'
           width={25}
           height={20}
           />
      </div>
<input  
className=" w-full p-3 pl-14 focus:outline-double focus:outline-[#901BB7] text-sm placeholder-purple-700 border-2 !border-[#901BB7] rounded-full bg-gray-50 " placeholder="Search ..." required></input>
      </div>

<div className="connect-and-profile-button  w-[42%] min-h-[12%] flex justify-end items-center gap-5">

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
            <button className="connectWallet bg-white py-2 px-3 rounded-lg dark:text-white dark:bg-[#D463F9]
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
          <div style={{ display: 'flex', gap: 12 }} className='dark:bg-[#D463F9] first-letter:bg-white border-2 p-2 border-[#901BB7] rounded-lg'>
            <button
              onClick={openChainModal}
              style={{ display: 'flex', alignItems: 'center' }}
              className='dark:hover:bg-purple-500 hover:bg-gray-200 rounded-md '
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

            <button onClick={openAccountModal} 
              className='flex flex-row items-center gap-1 dark:hover:bg-purple-500 hover:bg-gray-200 rounded-md -m-[2px]'
            
            type="button">
              {account.displayName}
              {account.displayBalance
                ? ` (${account.displayBalance})`
                : ''}
                <IoIosArrowDown/>
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
    className="relative inline-flex items-center justify-center w-11 h-11 overflow-hidden
 bg-gray-100 rounded-full  border-2 border-purple-500 hover:border-4 hover:border-purple-500"
  >
    <Image src={"/unnamed.jpg"} alt="asd" className="rounded-full object-cover" width={38} height={38} />
   
  </div>

  
</div>
</div>
  )
}

export default searchbar