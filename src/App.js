import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ListExpenses from "./components/ListExpenses";
import "bootstrap-5.0.1-dist/css/bootstrap.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const handleNewExpense = (newExpense) => {
    setExpenses([newExpense, ...expenses]);
  };

  const handleRemoveListItem = (expenseId) => {
    setExpenses(expenses.filter((expense) => expense.id !== expenseId));
  };

  return (
    <div className="App">
      <div className="container-md">
        <h1 className="text-center">EXPENSE TRACKER</h1>
        <ExpenseForm onSubmitNewExpense={handleNewExpense} />
        <ListExpenses list={expenses} onDeleteAction={handleRemoveListItem} />
      </div>
    </div>
  );
};

export default App;
