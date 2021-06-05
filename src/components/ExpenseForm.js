import React, { useState } from "react";
import 'bootstrap-5.0.1-dist/css/bootstrap.css';

const ExpenseForm = (props) => {
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
    const newDate = enteredDate.split("-");
    const day = newDate[2];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthFormated = months[newDate[1] - 1];
    const year = newDate[0];
    const dateFormat = `${monthFormated}/${day}/${year}`;
    return dateFormat;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newExpense = {
        id: Date.now(),
        location: enteredLocation,
        description: enteredDescription,
        amount: enteredAmount,
        date: formatDate(),
    }
     
    props.onSubmitNewExpense(newExpense);
    setLocation("");
    setDescription("");
    setAmount("");
    setDate("");
  };

  return (
    <form className="row g-3 mt-3" onSubmit={submitHandler}>
       <div className="row justify-content-md-center">
        <div className="col-md-4">
          <label htmlFor="location" >Location</label>
          <input
            className="form-control"
            id="location"
            type="text"
            placeholder="Where"
            onChange={locationHandler}
            value={enteredLocation}
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
            required
          />
        </div>
        </div>
        <div className="row justify-content-md-center">
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
