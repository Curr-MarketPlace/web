import React, { useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
const axios = require("axios");
import { useAccount } from "wagmi";

const ConnectWallet = () => {
  const { address } = useAccount();

  const testFunc = async () => {
    // POST isteği gönderilecek endpoint URL'si
    const endpointURL = "http://localhost:45501/user/create";

    // Gönderilecek veri
    const postData = {
      username: "mel",
      description: "b ",
      publicKey: address,
    };

    // Axios ile POST isteği gönderme
    axios
      .post(endpointURL, postData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // Başarılı bir şekilde cevap alındığında işlemleri burada yapabilirsiniz.
        console.log("Cevap:", response.data);
      })
      .catch((error) => {
        // Hata durumunda işlemleri burada yapabilirsiniz.
        console.error("Hata:", error);
      });
  };

  return (
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
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
          useEffect(() => {
            if (connected) {
            testFunc()
            }
          }, [connected])
          
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    className="connectWallet bg-white py-2 px-3 rounded-lg dark:text-white dark:bg-[#D463F9]
                 text-[#901BB7] font-semibold text-xs"
                    onClick={openConnectModal}
                    type="button"
                  >
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
              if (connected) {
                console.log("addres:", account.address);
              }
              return (
                <div
                  style={{ display: "flex", gap: 12 }}
                  className="dark:bg-[#D463F9] first-letter:bg-white border-2 p-2  border-[#901BB7] rounded-lg"
                >
                  <button
                    onClick={openChainModal}
                    style={{ display: "flex", alignItems: "center" }}
                    className="dark:hover:bg-purple-500 gap-1 hover:bg-gray-200 rounded-md -m-[2px]"
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 18,
                          height: 18,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            style={{ width: 18, height: 18 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                    <IoIosArrowDown />
                  </button>

                  <button
                    onClick={openAccountModal}
                    className="flex flex-row items-center gap-1 dark:hover:bg-purple-500 hover:bg-gray-200 rounded-md -m-[2px]"
                    type="button"
                  >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}
                    <IoIosArrowDown />
                  </button>
                  {/* <button
                
                onClick={testFunc}>
                  
                  post test button</button> */}
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default ConnectWallet;
