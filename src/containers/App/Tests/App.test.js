import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App user={{id: 1, loggedIn: true}}/>);
  });

  it('Should render like snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
