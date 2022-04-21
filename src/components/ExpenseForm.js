import React, { useState } from "react";
import "bootstrap/css/bootstrap.css";

const ExpenseForm = ({ handleNewExpense }) => {
  const [enteredLocation, setLocation] = useState("");
  const [enteredDescription, setDescription] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  const locationHandler = (e) => {
    setLocation(e.target.value);
  };

  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const formatDate = () => {
    let date = new Date(enteredDate);
    const options = {
      dateStyle: "medium",
      timeZone: "UTC",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Date.now(),
      location: enteredLocation,
      description: enteredDescription,
      amount: enteredAmount,
      date: formatDate(),
    };

    handleNewExpense(newExpense);
    setLocation("");
    setDescription("");
    setAmount("");
    setDate("");
  };

  return (
    <form className="row g-3 mt-3" onSubmit={handleSubmit}>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <label htmlFor="location">Location</label>
          <input
            className="form-control"
            id="location"
            type="text"
            placeholder="Where"
            onChange={locationHandler}
            value={enteredLocation}
            autoComplete="off"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="description">Description</label>
          <input
            className="form-control"
            id="description"
            type="text"
            placeholder="Expense Descrition"
            onChange={descriptionHandler}
            value={enteredDescription}
            autoComplete="off"
            required
          />
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-md-4">
          <label htmlFor="amount">Amount</label>
          <input
            className="form-control"
            id="amount"
            type="number"
            min="0.01"
            step="0.01"
            placeholder="$$$"
            onChange={amountHandler}
            value={enteredAmount}
            autoComplete="off"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="date">Date</label>
          <input
            className="form-control"
            id="date"
            type="date"
            onChange={dateHandler}
            value={enteredDate}
            autoComplete="off"
            required
          />
        </div>
      </div>
      <div className="col-12 text-center">
        <button type="submit" className="btn btn-primary mt-3">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
