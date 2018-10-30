import React from 'react';
import { shallow } from 'enzyme';
import { Card } from '../';

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

  xit('invokes addFavorite upon invocation of handleFavorite if favorites exist', async () => {
    mockMovie = [{title: 'the departed', favorite: true}, {title: 'fargo', favorite: true}]
    const addFavorite = jest.fn()
    const spy = jest.spyOn(wrapper.instance(), 'addFavorite')
    await wrapper.instance().handleFavorite(mockMovie)
    expect(spy).toHaveBeenCalled()    
  })

  xit('invokes addFavorite upon invocation of handleFavorite if favorites dont exist', () => {
    mockMovie = [{title: 'the departed', favorite: false}, {title: 'fargo', favorite: false}]    
  })

  it('invokes toggleFavorite upon invocation of handleFavorite', async () => {
    mockUser = {id: 31, loggedIn: true}
    wrapper.instance().handleFavorite(mockMovie)
    expect(wrapper.props().toggleFavorite).toHaveBeenCalled()    
  })
});
