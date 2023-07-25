import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Sample from "./Sample";

describe('renders the Sample component', () => {
    test('renders the heading element', () => {
        render(<Sample />);
        const headingElement = screen.getByText(/hello world/i);
    
        expect(headingElement).toBeInTheDocument();
    });

    test('renders "Please click the Toggle button" if the button is not clicked', () => {
        render(<Sample />);
        
        const outputElement = screen.getByText('Please click the Toggle button', {exact: false});
        expect(outputElement).toBeInTheDocument();
    });

    test('renders "You just clicked Toggle button!" on clicking the button', () => {
        render(<Sample />);
        
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);

        const paraElement = screen.getByText('You just clicked Toggle button!', {exact: false});
        const inputElement = screen.getByPlaceholderText('enter your name', {exact: false});

        expect(paraElement).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
    });

    test('does not render "Please click the Toggle button" if the button is clicked', () => {
        render(<Sample />);
        
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);

        const paraElement = screen.queryByText('Please click the Toggle button', {exact: false});
        expect(paraElement).toBeNull()
    })
})

