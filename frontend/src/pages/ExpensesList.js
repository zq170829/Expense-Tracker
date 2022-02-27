import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExpenses, reset } from "../features/expenses/expenseSlice";
import Spinner from "../Components/Spinner";
import ExpenseItem from "../Components/ExpenseItem";
import BackButton from "../Components/BackButton";
// import { Doughnut } from "react-chartjs-2";

function ExpensesList() {
  const { expenses, isLoading, isSuccess, isError } = useSelector(
    (state) => state.expense
  );

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset);
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getExpenses());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  const total = expenses
    .reduce((acc, currVal) => {
      return currVal.type === "Education"
        ? acc - currVal.amount
        : acc + currVal.amount;
    }, 0)
    .toFixed(2);

  // const expenseColors = ["#000000", "#60b644", "#ff4361", "#fabb47"];

  // const expenseCategories = [
  //   { type: "Bills", amount: 0, color: expenseColors[0] },
  //   { type: "Car", amount: 0, color: expenseColors[1] },
  //   { type: "Clothes", amount: 0, color: expenseColors[2] },
  //   { type: "Travel", amount: 0, color: expenseColors[3] },
  // ];

//   const filteredExpense=[];
// expenses.reduce(function(res, value){
//   if(!res[value.category]) {
//     res[value.category] = {category: value.category, amount :0};
//     filteredExpense.push(res[value.category])
//   }
//   res[value.category].amount += value.amount;
//   return res;
// }, {})

  // expenses.forEach((t) => {
  //   const category = expenseCategories.find((c) => c.type === t.category);
  //   if (category) {
  //     category.amount += t.amount;
  //   }
  // });
  // const filteredCategories = expenseCategories.filter((c) => c.amount > 0);

  // const chartData = {
  //   datasets: [
  //     {
  //       data: filteredCategories.map((c) => c.amount),
  //       backgroundColor: filteredCategories.map((c) => c.color),
  //     },
  //   ],
  //   labels: filteredCategories.map((c) => c.type),
  // };

  // const colors = ["#123123", "#154731", "#165f40", "#16784f"];

  return (
    <div className="pt-5">
      <BackButton url="/my-dashboard" />
      <h1 className="">My Total Expenses: ${total}</h1>
      <div className="tickets">
        <div className="ticket-headings">
          <div>Date</div>
          <div>Category</div>
          <div>Amount</div>
          <div></div>
        </div>
        {expenses.map((expense) => (
          <ExpenseItem key={expense._id} expense={expense} />
        ))}
      </div>
      {/* <Doughnut data={filteredExpense} /> */}
    </div>
  );
}

export default ExpensesList;
