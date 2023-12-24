import React, { useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
const axios = require("axios");
import { useAccount } from "wagmi";
import { createUser } from "@/data/action/userActions";

const ConnectWallet = () => {
  const { address } = useAccount();



  const [data, setData] = React.useState({
    username: "",
    address: address,
    avatar: "",
    desc: "",
  });

  const CreateUser = async () => {
    await createUser(data)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
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
            CreateUser();
          }
        }, [connected]);

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
