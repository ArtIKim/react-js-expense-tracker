import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);

    const income = transactions
        .filter((transaction) => transaction.amount > 0)
        .reduce((acc, transaction) => {
            acc += transaction.amount;

            return acc;
        }, 0);

    const expense = transactions
        .filter((transaction) => transaction.amount < 0)
        .reduce((acc, transaction) => {
            acc += Math.abs(transaction.amount);

            return acc;
        }, 0);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">
                    +$
                    {income}
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">
                    -$
                    {expense}
                </p>
            </div>
        </div>
    );
};
