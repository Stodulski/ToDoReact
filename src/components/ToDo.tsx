import { ToDoProps } from '../types'
export const ToDo: React.FC<ToDoProps> = ({
  text,
  id,
  completed,
  toggleComplete
}) => {
  const handleCheckboxChange = () => {
    toggleComplete(id)
  }
  return (
    <div className='flex w-full justify-between items-center  py-2.5 px-5 rounded-xl border border-zinc-500'>
      <span className='font-bold'>{id}</span>
      <p
        className={`truncate px-6 ${completed && 'line-through'}`}
        title={text}
      >
        {text}
      </p>
      <input
        type='checkbox'
        className='scale-[1.5] rounded-lg cursor-pointer'
        checked={completed}
        onChange={handleCheckboxChange}
      />
    </div>
  )
}
