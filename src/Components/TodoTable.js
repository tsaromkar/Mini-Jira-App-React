import React from 'react'
import Table from "./Table";

export default function TodoTable({todoList, inProgressList, doneList}) {
  console.log(todoList)
  return (
    <div id="todoContainer">
        <Table tableHeading="Todo" todos={todoList}/>
        <Table tableHeading="In Progress" todos={inProgressList}/>
        <Table tableHeading="Done" todos={doneList}/>
    </div>
  )
}
