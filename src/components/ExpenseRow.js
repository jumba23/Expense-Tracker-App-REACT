import React from "react";

const ExpenseRow = ({ expenses, deleteRow }) => {
  return expenses.map((newExpense) => (
    <tr key={newExpense.id}>
      <td class="align-middle">{newExpense.location}</td>
      <td class="align-middle">{newExpense.description}</td>
      <td class="align-middle">${newExpense.amount}</td>
      <td class="align-middle">{newExpense.date}</td>
      <td class="align-middle">
        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={() => deleteRow(newExpense.id)}
        >
          {" "}
          X{" "}
        </button>
      </td>
    </tr>
  ));
};

export default ExpenseRow;
