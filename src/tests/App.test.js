import { render, screen, waitFor, findByText } from '@testing-library/react';
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
//
  test('Shows the add task form on load', ()=>{
    const {queryByTestId} = render(<App />);
   // expect(screen.getByText('Add'))
   expect(queryByTestId('add-task-form')).toBeInTheDocument()
  })

  test('Shows No posts before fetch', async() => {
    render(<App/>)
    expect(screen.getByText('No posts'))
  })

  test('Shows list of Posts after fetch', async() => {
    render(<App/>)
    const item = await waitFor(() => screen.findByText(4));
    expect(item).toHaveClass('list-item')
  })

  test('Renders posts with testid equal to text content', async() => {
    render(<App/>)
    const item = await waitFor(() => screen.getByTestId('list-item-4'));
    expect(item).toHaveTextContent('4')
  })

});