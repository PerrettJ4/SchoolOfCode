import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ClearList from './';

const testProps = {
	clearList: jest.fn(),
	buttonText: 'another button',
};
test('Testing if when passing down a buttonText prop it renders a button with the right text inside', () => {
	const { getByTestId } = render(<ClearList {...testProps} />);
	const actual = getByTestId('somethingNew');
	expect(actual).toBeInTheDocument();
});
test('Testing if when passing down a buttonText prop it renders a button with the right text inside', () => {
	const { getByTestId } = render(<ClearList {...testProps} />);
	const actual = getByTestId('somethingNew');
	expect(actual).toHaveTextContent('another button');
});
test('testing that when the button is clicked, the clearList function is called', () => {
	const { getByTestId } = render(<ClearList {...testProps} />);
	const button = getByTestId('somethingNew');
	fireEvent.click(button);
	expect(testProps.clearList).toHaveBeenCalled();
});
