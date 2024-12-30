import { useState } from 'react'

import ToDoInterface from '../types'

const useToDo = () => {
  const [toDoList, setToDoList] = useState<ToDoInterface[]>([
    { id: 1, text: 'To Do de prueba', completed: false }
  ])

  const addToDo = (text: string) => {
    const newToDo: ToDoInterface = {
      id: toDoList.length + 1,
      text,
      completed: false
    }
    setToDoList([...toDoList, newToDo])
  }

  const toggleComplete = (id: number) => {
    setToDoList(prevToDoList =>
      prevToDoList.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  return { toDoList, addToDo, toggleComplete }
}

export default useToDo
