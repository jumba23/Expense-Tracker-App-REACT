import React, { useEffect, useState } from "react";
import 'bootstrap-5.0.1-dist/css/bootstrap.css';

const ListExpenses = (props) => {
  const [expenseId, setSelectedExpense] = useState("");

  useEffect(() => {
    props.onDeleteAction(expenseId);
  }, [expenseId]);

  return (
    <table className="table">
        <thead className="table-secondary">
            <tr>
              <th scope="col">Location</th>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
              <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody class="table table-striped fs-4">
         {props.list.map((newExpense) => (
           <tr key={newExpense.id}>
              <td>{newExpense.location}</td>
              <td>{newExpense.description}</td>
              <td>${newExpense.amount}</td>
              <td>{newExpense.date}</td>
              <td><button type="button" class="btn btn-outline-danger btn-sm rounded-0" onClick={() => setSelectedExpense(newExpense.id)}> X </button></td>
            </tr>
          ))}
          </tbody>
    </table>
  );
};
export default ListExpenses;
