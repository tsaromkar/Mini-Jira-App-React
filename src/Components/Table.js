import React from "react";
import TableHeading from "./TableHeading";
import TableBody from "./TableBody";

export default function Table({ tableHeading, todos}) {

  return (
    <table>
      <TableHeading tableHeading={tableHeading} />
      <TableBody todos={todos}/> 
    </table>
  );
}
