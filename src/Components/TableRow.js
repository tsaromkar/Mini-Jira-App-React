import React from 'react'

export default function TableRow({todoItem}) {
  const {id, todo, status} = {...todoItem}
//   console.log(id)
  return (
    <tr id={id} className={status}>
      <td id={id} className={status}>
        {todo}
      </td>
    </tr>
  )
}
