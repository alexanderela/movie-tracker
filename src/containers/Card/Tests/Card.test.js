import React from 'react';
import { shallow } from 'enzyme';
import { Card } from '../';
import * as API from '../../../utilities/API';
jest.mock('../../../utilities/API');

describe('Card', () => {
  let wrapper;
  let expected;
  let mockFavorites;
  let mockUser; 
  let received;
  let mockMovie;
  let toggleFavorite;

  beforeEach(() => {
    mockMovie = {
      movie: {
        favorite: false,
        id: 123456,
        title: 'Movie Title',
        poster: 'Movie Poster',
        overview: 'Movie Overview',
        releaseData: 'Movie Release Date',
        rating: 'Movie Rating'
      }}
    mockUser = {id: 31, loggedIn: false}
    toggleFavorite = jest.fn()
    wrapper = shallow(<Card 
                        movie={mockMovie} 
                        user={mockUser} 
                        toggleFavorite={toggleFavorite}
                      />);
  });

  it('Should render like snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('returns undefined upon invocation of handleFavorite if user is not logged in', async () => {
    expected = undefined;
    received = await wrapper.instance().handleFavorite(mockMovie)
    expect(received).toEqual(expected)
  })

  it('invokes removeFavorite upon invocation of handleFavorite if favorites exist', async () => {
    mockUser = {id: 31, loggedIn: true}
    mockMovie = {title: 'the departed', favorite: true}  
    wrapper = shallow(<Card 
                        movie={mockMovie} 
                        user={mockUser} 
                        toggleFavorite={toggleFavorite}
                      />);
    await wrapper.instance().handleFavorite(mockMovie)
    expect(API.removeFavorite).toHaveBeenCalled()   
  })

  it('invokes addFavorite upon invocation of handleFavorite if favorites dont exist', async () => {
    mockUser = {id: 31, loggedIn: true}
    mockMovie = {title: 'the departed', favorite: false}    
    wrapper = shallow(<Card 
                        movie={mockMovie} 
                        user={mockUser} 
                        toggleFavorite={toggleFavorite}
                      />);
    await wrapper.instance().handleFavorite(mockMovie)  
    expect(API.addFavorite).toHaveBeenCalled()
  })

  it('invokes toggleFavorite upon invocation of handleFavorite', async () => {
    mockUser = {id: 31, loggedIn: true}
    wrapper = shallow(<Card 
                        movie={mockMovie} 
                        user={mockUser} 
                        toggleFavorite={toggleFavorite}
                      />);
    await wrapper.instance().handleFavorite(mockMovie)
    expect(wrapper.instance().props.toggleFavorite).toHaveBeenCalled()    
  })
});
