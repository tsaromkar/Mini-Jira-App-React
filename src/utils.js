export const STATUS = {
  Todo: "Todo",
  InProgress: "InProgress",
  Done: "Done",
}

export const todos = {
  todoList: [
    {id: 1, todo: "dsa", status: STATUS.Todo},
    {id: 4, todo: "react native", status: STATUS.Todo},
  ],
  inProgressList: [
   {id: 2, todo: "javascript", status: STATUS.InProgress},
  ],
  doneList: [
    {id: 3, todo: "react", status: STATUS.Done},
  ]
}

export const EMPTY_JSON_STRUCTURE = {
      todoList: [],
      inProgressList: [],
      doneList: []
    }

const TODOLIST = "todoList"

export const setSessionData = (todos) => {
  sessionStorage.setItem(TODOLIST, JSON.stringify(todos))
} 

export const getSessionData = () => {
  const todos = JSON.parse(sessionStorage.getItem(TODOLIST))
  if (todos) return todos
  return EMPTY_JSON_STRUCTURE
}

export const removeSessionData = (todos) => {
  sessionStorage.removeItem(TODOLIST)
  window.location.reload()
} 
