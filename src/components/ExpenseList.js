import React from "react";
import ExpenseRow from "./ExpenseRow";
import "bootstrap/css/bootstrap.css";

const ListExpenses = ({ expenses, deleteRow }) => {
  return (
    <div className="container">
      <table className="table table-striped table-hover text-center mt-5">
        <thead className="table-secondary">
          <tr>
            <th>Location</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table">
          <ExpenseRow expenses={expenses} deleteRow={deleteRow} />
        </tbody>
      </table>
    </div>
  );
};
export default ListExpenses;
