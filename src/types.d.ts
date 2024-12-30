export default interface ToDoInterface {
  id: number
  text: string
  completed: boolean
}

export interface ToDoProps {
  text: string
  id: number
  completed: boolean
  toggleComplete: (id: number) => void
}

export interface ToDoFormProps {
  newTask: string
  setNewTask: React.Dispatch<React.SetStateAction<string>>
  handleAddTask: () => void
}

export interface ToDoCounterProps {
  toDoList: { id: number; text: string; completed: boolean }[]
}

export interface ToDoContainerProps {
  toDoList: { id: number; text: string; completed: boolean }[]
  toggleComplete: (id: number) => void
}
