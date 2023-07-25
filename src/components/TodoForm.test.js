import {fireEvent, render as rtlRender, screen, act} from '@testing-library/react';
import TodoForm from './TodoForm';
import { Provider } from 'react-redux';
import store from '../store';

const render = component => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
)

describe('renders the TodoForm component', () => {
    test('renders the input component', () => {
        render(<TodoForm />);
        const inputElement = screen.getByPlaceholderText('Enter your todos . . .');
        expect(inputElement).toBeInTheDocument();
    });

    test('renders the Add Button', () => {
        render(<TodoForm />);
        const addBtn = screen.getByRole('button');
        expect(addBtn).toBeInTheDocument();
    });

    test('form is not submitted if input is empty', async () => {
        render(<TodoForm />);

        const inputElement = screen.getByPlaceholderText('Enter your todos . . .'); 
        const addBtn = screen.getByTestId('add');

        await act (async () => {fireEvent.change(inputElement, {target: {value: ''}})});     

        await act (async () => {fireEvent.click(addBtn)})

        const errorElement = screen.getByTestId('error');  
        expect(errorElement).toBeInTheDocument()      
        
    });

    test('form is submitted if input is not empty', async () => {
        render(<TodoForm />);

        const inputElement = screen.getByPlaceholderText('Enter your todos . . .'); 
        const addBtn = screen.getByTestId('add');

        await act (async () => {fireEvent.change(inputElement, {target: {value: 'learn react'}})});     

        await act (async () => {fireEvent.click(addBtn)})

        const errorElement = screen.queryByTestId('error');  
        expect(errorElement).toBeNull()      
        
    })
})