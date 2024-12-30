import { render, screen } from '@testing-library/react';
import { ToDoContainer } from '../components/ToDoContainer';

describe('ToDoContainer', () => {
  const mockToggleComplete = jest.fn();
  
  const mockToDoList = [
    { id: 1, text: 'Learn React Testing', completed: false },
    { id: 2, text: 'Write tests for components', completed: true }
  ];

  it('should render the list of ToDos', () => {
    render(<ToDoContainer toDoList={mockToDoList} toggleComplete={mockToggleComplete} />);
    
    expect(screen.getByText('Learn React Testing')).toBeInTheDocument();
    expect(screen.getByText('Write tests for components')).toBeInTheDocument();
  });
});
