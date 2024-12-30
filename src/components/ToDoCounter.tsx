import { ToDoCounterProps } from "../types"
export const ToDoCounter: React.FC<ToDoCounterProps> = ({ toDoList }) => {
  return (
    <div className='flex gap-2'>
      <p>Tareas pendientes:</p>
      <span className='font-bold'>{toDoList.length}</span>
    </div>
  )
}
