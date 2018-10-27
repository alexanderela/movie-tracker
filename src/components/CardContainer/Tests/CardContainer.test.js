import React from 'react';
import CardContainer from '../';
import { shallow } from 'enzyme';

describe('CardContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CardContainer movies={[]}/>);
  });

  it('Should render like snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
