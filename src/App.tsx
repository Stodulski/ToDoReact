import { ToDoForm } from './components/ToDoForm'
import { ToDoCounter } from './components/ToDoCounter'
import { ToDoContainer } from './components/ToDoContainer'
import { useState } from 'react'
import useToDo from './hooks/useToDo'

export const App = () => {
  const { toDoList, addToDo, toggleComplete } = useToDo()

  const [newTask, setNewTask] = useState('')

  const handleAddTask = () => {
    if (newTask.trim() === '') return
    addToDo(newTask)
    setNewTask('')
  }

  return (
    <div className='flex justify-start gap-y-5 items-center flex-col w-full min-h-screen py-10 px-2 max-w-2xl mx-auto '>
      <h1 className='font-semibold text-3xl mb-5'>To Do App</h1>
      <ToDoForm
        newTask={newTask}
        setNewTask={setNewTask}
        handleAddTask={handleAddTask}
      />
      <ToDoCounter toDoList={toDoList} />
      <ToDoContainer toDoList={toDoList} toggleComplete={toggleComplete} />
    </div>
  )
}
