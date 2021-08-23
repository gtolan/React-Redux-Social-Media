import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';



describe('App', () => {

  test('renders App component', () => {
    render(<App />);
    expect(screen.getByText('Posts')).toBeInTheDocument();
  });

  //Shows the add task button if showAddTask is true
  test('Shows the add task button', ()=>{
    render(<App />);
    expect(screen.getByText('Submit'))
   // expect(queryByTestId('add-task-form')).toBeInTheDocument()
  })

  test('Shows the add task form on load', ()=>{
    const {queryByTestId} = render(<App />);
   // expect(screen.getByText('Add'))
   expect(queryByTestId('add-task-form')).toBeInTheDocument()
  })

});