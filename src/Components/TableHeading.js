import React from "react";

export default function TableHeading({tableHeading}) {
  return (
    <thead>
      <tr>
        <th>{tableHeading}</th>
      </tr>
    </thead>
  );
}
