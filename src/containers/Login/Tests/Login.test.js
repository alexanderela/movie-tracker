import React from 'react';
import { shallow } from 'enzyme';
import { Login }  from '../';

describe('Login', () => {
  let wrapper;
  let mockEvent;
  beforeEach(() => {
    wrapper = shallow(<Login loginUser={jest.fn()}/>);
    mockEvent = { 
    	preventDefault: jest.fn(), 
    	target: {name: 'name', value: 'Alex'} 
    }
  });

  it('Should render like snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Sets state upon invocation of handleChange', () => {
  	wrapper.instance().handleChange(mockEvent)
  	expect(wrapper.state().name).toEqual('Alex')
  });

  xit('Invokes loginUser if loginAttempt is successful', () => {
  	
  });

  xit('Invokes setFavorites if loginAttempt is successful', () => {
  	
  });

  xit('Sets error state if loginAttempt fails', () => {
  	
  });

  xit('Sets error state if create state is true and fetch response fails', () => {
  	
  });

  xit('Clears inputs if create state is true and fetch response fails', () => {
  	
  });

  xit('Sets create and error states if create state is false and fetch response succeeds', () => {
  	
  });

  xit('Invokes API.createUser upon invocation of newUserResponse', () => {
  	
  });

  it('Clears inputs', () => {
  	wrapper.setState({
      email: 'test',
      password: 'test',
      name: 'test'        
    })   
    wrapper.instance().clearInputs()
    expect(wrapper.state().email).toEqual('')
    expect(wrapper.state().password).toEqual('')
    expect(wrapper.state().name).toEqual('')
  });
});
