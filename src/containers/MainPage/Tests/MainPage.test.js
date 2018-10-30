import React from 'react';
import { shallow } from 'enzyme';
import { MainPage } from '../';

describe('MainPage', () => {
	let wrapper;
	let mockEvent;
	let clearFavorites;
	let signOut;
	let handleSignOut;

	const mockUser = {id: 31, loggedIn: true}
	const mockMovies = [{
		backdrop: "mock.jpg",
		favorite: false,
		id: 335983,
		overview: "Mock description",
		poster: "mock.jpg",
		rating: 6.6,
		releaseDate: "10/03/2018",
		title: "Venom"
	},
	{
		backdrop: "mock.jpg",
		favorite: false,
		id: 300001,
		overview: "Mock description.",
		poster: "mock.jpg",
		rating: 6.6,
		releaseDate: "10/03/2018",
		title: "Halloween"
	}]

  beforeEach(() => {
  	clearFavorites = jest.fn()
  	signOut = jest.fn()
  	handleSignOut = jest.fn()
  	wrapper = shallow(<MainPage 
  		user={mockUser} 
  		movies={mockMovies}
  		clearFavorites={clearFavorites}
  		signOut={signOut}/>)
		mockEvent = Object.assign(jest.fn(), {preventDefault: () => {}})
  });

  it('Should render like snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
