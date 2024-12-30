import { ToDoFormProps } from '../types'

export const ToDoForm: React.FC<ToDoFormProps> = ({
  newTask,
  setNewTask,
  handleAddTask
}) => {
  return (
    <div className='self-start w-full flex flex-col gap-2 sm:flex-row justify-evenly items-center'>
      <input
        type='text'
        className='outline-none p-3 px-4 rounded-xl border w-[90%] border-zinc-500 sm:w-[70%]'
        placeholder='To Do'
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <button
        onClick={handleAddTask}
        className='py-3 px-5 hover:bg-blue-400 bg-blue-300 w-[90%]  rounded-xl border border-zinc-500 sm:w-[30%] grid place-content-center'
        disabled={newTask.length === 0} 
      >
        Agregar
      </button>
    </div>
  )
}
