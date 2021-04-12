import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h4>Your Balance</h4>
            <h1>
                $
                {transactions.reduce((acc, transaction) => {
                    acc += transaction.amount;
                    return acc;
                }, 0)}
            </h1>
        </>
    );
};
