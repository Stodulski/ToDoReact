import { render, screen, fireEvent } from '@testing-library/react';
import { ToDoForm } from '../components/ToDoForm';

describe('ToDoForm Component', () => {
  let newTask: string;
  const setNewTask = jest.fn();
  const handleAddTask = jest.fn();

  beforeEach(() => {
    newTask = '';
    setNewTask.mockClear();
    handleAddTask.mockClear();
  });

  it('should render input and button correctly', () => {
    render(
      <ToDoForm
        newTask={newTask}
        setNewTask={setNewTask}
        handleAddTask={handleAddTask}
      />
    );

    expect(screen.getByPlaceholderText('To Do')).toBeInTheDocument();

    expect(screen.getByText('Agregar')).toBeInTheDocument();
  });

  it('should update the input value when typed', () => {
    render(
      <ToDoForm
        newTask={newTask}
        setNewTask={setNewTask}
        handleAddTask={handleAddTask}
      />
    );

    const inputElement = screen.getByPlaceholderText('To Do');

    fireEvent.change(inputElement, { target: { value: 'New task' } });

    expect(setNewTask).toHaveBeenCalledWith('New task');
  });

  it('should call handleAddTask when button is clicked', () => {
    render(
      <ToDoForm
        newTask={"Test"}
        setNewTask={setNewTask}
        handleAddTask={handleAddTask}
      />
    );

    const buttonElement = screen.getByText('Agregar');

    fireEvent.click(buttonElement);

    expect(handleAddTask).toHaveBeenCalled();
  });

  it('should not call handleAddTask if input is empty', () => {
    render(
      <ToDoForm
        newTask={newTask}
        setNewTask={setNewTask}
        handleAddTask={handleAddTask}
      />
    );

    const buttonElement = screen.getByText('Agregar');

    fireEvent.click(buttonElement);

    expect(handleAddTask).not.toHaveBeenCalled();
  });
});
