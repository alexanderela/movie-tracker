import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App/>);
  });

  it('Should render like snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
