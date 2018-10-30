import React from 'react';
import ErrorMessage from '../';
import { shallow } from 'enzyme';

describe('ErrorMessage', () => {
	let wrapper;
	beforeEach(() => {
    const mockUser = { id: 1, loggedIn: true }
		wrapper = shallow(<ErrorMessage closeError={jest.fn()} user={mockUser}/>)
	});

	it('Should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
