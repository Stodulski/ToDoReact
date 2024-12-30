import { render, screen, fireEvent } from '@testing-library/react';
import { ToDo } from '../components/ToDo';

describe('ToDo Component', () => {
  const mockToggleComplete = jest.fn();

  const props = {
    id: 1,
    text: 'Learn React Testing',
    completed: false,
    toggleComplete: mockToggleComplete,
  };

  beforeEach(() => {
    mockToggleComplete.mockClear(); 
  });

  it('should render ToDo correctly', () => {
    render(<ToDo {...props} />);
    
    expect(screen.getByText('Learn React Testing')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('should apply line-through class when completed is true', () => {
    const completedProps = { ...props, completed: true };
    render(<ToDo {...completedProps} />);
    
    const textElement = screen.getByText('Learn React Testing');
    expect(textElement).toHaveClass('line-through');
  });

  it('should call toggleComplete when checkbox is clicked', () => {
    render(<ToDo {...props} />);
    
    const checkbox = screen.getByRole('checkbox');
    
    fireEvent.click(checkbox);
    
    expect(mockToggleComplete).toHaveBeenCalledWith(1);
  });

  it('should display checkbox as checked when completed is true', () => {
    const completedProps = { ...props, completed: true };
    render(<ToDo {...completedProps} />);
    
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('should display checkbox as unchecked when completed is false', () => {
    render(<ToDo {...props} />);
    
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });
});
