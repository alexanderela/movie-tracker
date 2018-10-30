import React from 'react';
import { shallow } from 'enzyme';
import { Login }  from '../';
import * as API from '../../../utilities/API';
jest.mock('../../../utilities/API');

describe('Login', () => {
  let wrapper;
  let mockEvent;
  let mockUser;
  let mockCredentials;
  let mockFunc;

  beforeEach(() => {
  	mockFunc = jest.fn()
    mockUser = {id: 31, loggedIn: false}
    mockCredentials = {email: '12345@gmail.com', password: 12345}
    wrapper = shallow(<Login loginUser={jest.fn()} setFavorites={mockFunc}/>);
    mockEvent = { 
    	preventDefault: jest.fn(), 
    	target: {name: 'name', value: 'Alex'} 
    }
    wrapper.setState({create: true})
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
	  it('Invokes loginUser if loginAttempt is successful', async () => {
      await wrapper.instance().submitLogin(mockEvent)
	  	expect(wrapper.instance().props.loginUser).toHaveBeenCalled()
	  });

	  it('Invokes setFavorites if loginAttempt is successful', async () => {
      const expected = []
      await wrapper.instance().submitLogin(mockEvent)	  	
      expect(wrapper.instance().props.setFavorites).toHaveBeenCalledWith(expected)
	  });

	  it('Sets error state if loginAttempt fails', async () => {
	  	const response = 'Email and Password did not match'
	  	await wrapper.instance().submitLogin(mockEvent)
	  	expect(wrapper.state().error).toEqual(response)
	  });
  })

  describe('toggleCreate', () => {
	  it('Sets create and error states if create state is false and fetch response succeeds', async () => {
      const expected = ''
      await wrapper.instance().toggleCreate(mockEvent)
      expect(wrapper.state().create).toBe(false)
      expect(wrapper.state().error).toBe(expected)
	  });

    it('Sets error state if create state is true and fetch response fails', async () => {
      const expected = 'Email has already been used'
      await wrapper.instance().toggleCreate(mockEvent)
      expect(wrapper.state().error).toBe(expected)     
    });

    it('Clears inputs if create state is true and fetch response fails', async () => {
      await wrapper.instance().toggleCreate(mockEvent)
      expect(wrapper.state().email).toEqual('')
      expect(wrapper.state().password).toEqual('')
      expect(wrapper.state().name).toEqual('')        
    });

  })

  describe('newUserResponse', () => {
	  it('Invokes API.createUser upon invocation of newUserResponse', async () => {
      await wrapper.instance().newUserResponse(mockEvent)	  	
      expect(API.createUser).toHaveBeenCalled()
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
