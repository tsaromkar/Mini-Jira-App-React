import React from "react";

export default function Input({value, handleSetValue, handleAddTodo, handleClearTodos}) {
  const handleSetInputValue = (e) => handleSetValue(e.target.value);

  return (
    <div>
      <label>Enter a todo:</label>
      <input
        id="input"
        type="text"
        value={value}
        onChange={handleSetInputValue}
      />
      <button id="addTodo" onClick={handleAddTodo}>Add Todo</button>
      <button id="clearTodos" onClick={handleClearTodos}>Clear All Todos</button>
    </div>
  );
}
