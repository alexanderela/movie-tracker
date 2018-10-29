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

  it('Sets state upon invocation of handleChange', () => {

  });

  it('Invokes loginUser if loginAttempt is successful', () => {
  	
  });

  it('Invokes setFavorites if loginAttempt is successful', () => {
  	
  });

  it('Sets error state if loginAttempt fails', () => {
  	
  });

  it('Sets error state if create state is true and fetch response fails', () => {
  	
  });

  it('Clears inputs if create state is true and fetch response fails', () => {
  	
  });

  it('Sets create and error states if create state is false and fetch response succeeds', () => {
  	
  });

  it('Invokes API.createUser upon invocation of newUserResponse', () => {
  	
  });

  it('Clears inputs', () => {
  	
  });
});
