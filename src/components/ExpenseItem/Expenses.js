import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpenseFilter from "../NewExpense/ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={(e) => setFilteredYear(e)}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpenseList items = {filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
