import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default () => {
  const { expenses, isLoading, isSuccess, isError } = useSelector(
    (state) => state.expense
  );

  const dispatch = useDispatch();
  const total = expenses.reduce((acc, currVal) => {
    return currVal.type === "Education"
      ? acc - currVal.amount
      : acc + currVal.amount;
  }, 0);

  return (
    <div>
      <h4>Your Total Expense:</h4>
      <p>${total}</p>
    </div>
  );
};