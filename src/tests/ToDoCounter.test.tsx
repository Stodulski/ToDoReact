import { render, screen } from '@testing-library/react';
import { ToDoCounter } from '../components/ToDoCounter'; 
import '@testing-library/jest-dom';

describe('ToDoCounter Component', () => {
  it('should render the correct number of tasks pending', () => {
    const toDoList = [
      { id: 1, text: 'Learn React', completed: false },
      { id: 2, text: 'Write tests', completed: false },
    ];

    render(<ToDoCounter toDoList={toDoList} />);

    expect(screen.getByText('Tareas pendientes:')).toBeInTheDocument();
    
    expect(screen.getByText('2')).toBeInTheDocument(); 
  });

  it('should render 0 when toDoList is empty', () => {
    const toDoList: Array<{ id: number; text: string; completed: boolean }> = [];

    render(<ToDoCounter toDoList={toDoList} />);

    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
