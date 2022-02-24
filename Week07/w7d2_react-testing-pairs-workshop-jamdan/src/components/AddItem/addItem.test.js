import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import AddItem from './';

const testProps = {
	addToList: jest.fn(),
	buttonText: 'anything',
};
test('Testing if when passing down a buttonText prop it renders a button with the right text inside', () => {
	const { getByTestId } = render(<AddItem {...testProps} />);
	const actual = getByTestId('adding-button');
	expect(actual).toBeInTheDocument();
});
test('Testing if when passing down a buttonText prop it renders a button with the right text inside', () => {
	const { getByTestId } = render(<AddItem {...testProps} />);
	const actual = getByTestId('adding-button');
	expect(actual).toHaveTextContent('anything');
});
test('testing if when the butten is pressed the addToList function is called', () => {
	const { getByTestId } = render(<AddItem {...testProps} />);
	const button = getByTestId('adding-button');
	fireEvent.click(button);
	expect(testProps.addToList).toHaveBeenCalled();
});
