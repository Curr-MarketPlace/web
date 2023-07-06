import { createStore } from "storken";

export const [Storken, { useStorken }] = createStore({
  initialValues: {
    account: "" as any,
    balance: "" as any,
    testStorken: "" as any,
    contract: "" as any,
    amount: "" as any,
    displayRightBar: true as boolean
  },
});

export default { Storken, useStorken };


// şeklinde kullanılır

// import { useStorken } from "../data/storken";

// const [contract, setContract] = useStorken<any>("contract");
