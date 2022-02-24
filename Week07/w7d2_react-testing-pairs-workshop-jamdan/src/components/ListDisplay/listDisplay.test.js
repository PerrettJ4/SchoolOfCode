import React from 'react';
import { render } from '@testing-library/react';

import ListDisplay from './';
const testProps = {
	tickItem: jest.fn(),
	list: [
		{ name: 'a', completed: true },
		{ name: 'b', completed: true },
		{ name: 'c', completed: true },
	],
};
test('when given an array of objects, should return number of list items equal to array length', () => {
	const { getByTestId } = render(<ListDisplay {...testProps} />);
	const actual = getByTestId('skrr');
	expect(actual).toBeInTheDocument();
});
test('Testing if when passing down a buttonText prop it renders a button with the right text inside', () => {
	const { getAllByTestId } = render(<ListDisplay {...testProps} />);
	const actual = getAllByTestId('list-item');
	expect(actual.length).toEqual(3);
});
