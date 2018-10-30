import React from 'react';
import ErrorMessage from '../';
import { shallow } from 'enzyme';

describe('ErrorMessage', () => {
	let wrapper;
	beforeEach(() => {
		const closeError = jest.fn
		wrapper = shallow(<ErrorMessage closeError={closeError}/>)
	});

	it('Should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});