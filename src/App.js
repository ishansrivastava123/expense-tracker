import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/ExpenseItem/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  
  const [expense,setExpenses] = useState([]);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items = {expense}/>
    </div>
  );
}

export default App;
