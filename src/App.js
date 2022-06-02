import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("saveExpenses")) {
      setExpenses(JSON.parse(localStorage.getItem("saveExpenses")));
    }
  }, []);

  useEffect(() => {
    if (expenses) {
      localStorage.setItem("saveExpenses", JSON.stringify(expenses));
    }
  }, [expenses]);

  const handleNewExpense = (newExpense) => {
    setExpenses([newExpense, ...expenses]);
  };

  const deleteRow = (expenseId) => {
    setExpenses(expenses.filter((expense) => expense.id !== expenseId));
  };

  return (
    <div>
      <div className="container-md">
        <h1 className="text-center mt-3">EXPENSE TRACKER</h1>
        <ExpenseForm handleNewExpense={handleNewExpense} />
        <ExpenseList expenses={expenses} deleteRow={deleteRow} />
      </div>
    </div>
  );
};

export default App;
