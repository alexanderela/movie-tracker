import React from 'react';
import { shallow } from 'enzyme';
import { Login }  from '../';

describe('Login', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login loginUser={jest.fn()}/>);
  });

  it('Should render like snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
