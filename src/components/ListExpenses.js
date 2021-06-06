import React from "react";
import "bootstrap-5.0.1-dist/css/bootstrap.css";

const ListExpenses = (props) => {
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
        {props.list.map((newExpense) => (
          <tr key={newExpense.id}>
            <td class="align-middle">{newExpense.location}</td>
            <td class="align-middle">{newExpense.description}</td>
            <td class="align-middle">${newExpense.amount}</td>
            <td class="align-middle">{newExpense.date}</td>
            <td class="align-middle">
              <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={() => props.onDeleteAction(newExpense.id)}>{" "}X{" "}</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};
export default ListExpenses;
