import { Web3Auth } from "@web3auth/modal";

//Initialize within your constructor
const web3auth = new Web3Auth({
  clientId: "BJ92yd1bYpwDimPRlH68vgFkdLHlfpMcSaurHJPXnfv_mykHAeHuX5jWroB6lYMCB7aH7MSfEiAmd2ekppDsCBs", // Get your Client ID from Web3Auth Dashboard
  chainConfig: {
    chainNamespace: "eip155",
    chainId: "0x5", // Please use 0x5 for Goerli Testnet
    rpcTarget: "https://rpc.ankr.com/eth",
  },
});

await web3auth.initModal();