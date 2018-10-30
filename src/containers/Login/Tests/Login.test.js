import React from 'react';
import { shallow } from 'enzyme';
import { Login }  from '../';

describe('Login', () => {
  let wrapper;
  let mockEvent;

  beforeEach(() => {
  	const mockFunc = jest.fn()
    wrapper = shallow(<Login loginUser={mockFunc} setFavorites={mockFunc}/>);
    mockEvent = { 
    	preventDefault: jest.fn(), 
    	target: {name: 'name', value: 'Alex'} 
    }
  });

  it('Should render like snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  describe('handleChange', () => {
	  it('Sets state upon invocation of handleChange', () => {
	  	wrapper.instance().handleChange(mockEvent)
	  	expect(wrapper.state().name).toEqual('Alex')
	  });

  })

  describe('submitLogin', () => {
	  xit('Invokes loginUser if loginAttempt is successful', () => {
	  	
	  });

	  xit('Invokes setFavorites if loginAttempt is successful', () => {
	  	
	  });

	  it('Sets error state if loginAttempt fails', () => {
	  	window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
	  		status: 400
	  	}))
	  	const response = 'Email and Password did not match'
	  	wrapper.instance().submitLogin(mockEvent)
	  	expect(wrapper.state().error).toEqual(response)
	  });
  })

  describe('toggleCreate', () => {
	  xit('Sets error state if create state is true and fetch response fails', () => {
	  	
	  });

	  xit('Clears inputs if create state is true and fetch response fails', () => {
	  	
	  });

	  xit('Sets create and error states if create state is false and fetch response succeeds', () => {
	  	
	  });
  })

  describe('newUserResponse', () => {
	  xit('Invokes API.createUser upon invocation of newUserResponse', () => {
	  	
	  });
  })

  describe('clearInputs', () => {
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
  })
});
