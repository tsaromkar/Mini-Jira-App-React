import React, { useCallback, useEffect, useState } from "react";
import styles from "../main.css";
import Input from "./Input";
import TodoTable from "./TodoTable";
import { STATUS, getSessionData, removeSessionData, setSessionData, EMPTY_JSON_STRUCTURE } from "../utils";

const Home = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState(EMPTY_JSON_STRUCTURE);
  const [isMounted, setIsMounted] = useState(false)

  // sets value of input
  const handleSetValue = useCallback((value) => setValue(value), [value]);

  // adds todo to array
  const handleAddTodo = useCallback(() => {
    if (value === "") {
      alert("Please enter a todo");
      return;
    }
    const todo = {id: todos.todoList.length + 1, todo: value, status: STATUS.Todo}
    setTodos(todos => {
      const newTodos = {...todos, todoList: [...todos.todoList, todo]};
      setSessionData(newTodos);
      return newTodos;
    })
    handleSetValue("")
  }, [todos, handleSetValue, value])

  // clears todos
  const handleClearTodos = () => {
    removeSessionData();
  }

  useEffect(() => {
    const sessionData = getSessionData();
    if (!isMounted && sessionData) {
      setTodos(sessionData)
      setIsMounted(true)
    }
  }, [])

  // on enter pressed
  useEffect(() => {
    const eventName = 'keydown';
    const eventListener = (event) => {
      if (event.key === 'Enter') handleAddTodo()
    }
    const el = document.getElementById('input');
    el.addEventListener(eventName, eventListener)

    return () => {
      el.removeEventListener(eventName, eventListener)
    }
  }, [value, handleAddTodo])

  return (
    <div>
      <Input value={value} handleSetValue={handleSetValue} handleAddTodo={handleAddTodo} handleClearTodos={handleClearTodos} />
      <TodoTable todoList={todos.todoList} inProgressList={todos.inProgressList} doneList={todos.doneList} />
    </div>
  );
};

export default Home;
