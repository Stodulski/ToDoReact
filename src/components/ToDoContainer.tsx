import { ToDo } from './ToDo'
import { ToDoContainerProps } from '../types'
export const ToDoContainer: React.FC<ToDoContainerProps> = ({
  toDoList,
  toggleComplete
}) => {
  return (
    <div className='w-[90%] mx-auto sm:w-full flex flex-col gap-2'>
      {toDoList.map(toDo => (
        <ToDo
          text={toDo.text}
          id={toDo.id}
          completed={toDo.completed}
          toggleComplete={toggleComplete}
          key={toDo.id}
        />
      ))}
    </div>
  )
}
