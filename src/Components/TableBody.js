import React from "react";
import TableRow from "./TableRow";

export default function TableBody({ todos }) {

  return (
    <tbody>
      {todos.map(todo => <TableRow key={todo.id} todoItem={todo} />)}
    </tbody>
  );
}
