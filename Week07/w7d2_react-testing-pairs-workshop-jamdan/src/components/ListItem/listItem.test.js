import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ListItem from './';

const testProps = {
	name: 'Man`s not hot',
	completed: true,
	tickItem: jest.fn(),
};
const testProps2 = {
	name: 'Man`s not hot',
	completed: false,
	tickItem: jest.fn(),
};

test('testing that when the component is called with the name prop , the innerText of the li is what it needs to be', () => {
	const { getByTestId } = render(<ListItem {...testProps} />);
	const li = getByTestId('thisIsALi');
	expect(li).toHaveTextContent('Man`s not hot');
});
test('testing that the classList of the li contains the class tickedItem when completed is equal to true', () => {
	const { getByTestId } = render(<ListItem {...testProps} />);
	const li = getByTestId('thisIsALi');
	expect(li).toHaveClass('tickedItem');
});
test('testing that the classList of the li contains the class tickedItem when completed is equal to true', () => {
	const { getByTestId } = render(<ListItem {...testProps2} />);
	const li = getByTestId('thisIsALi');
	expect(li).toHaveClass('untickedItem');
});
test('testing that when the li is clicked the function tickItem is called', () => {
	const { getByTestId } = render(<ListItem {...testProps2} />);
	const li = getByTestId('thisIsALi');
	fireEvent.click(li);
	expect(testProps2.tickItem).toHaveBeenCalled();
});
