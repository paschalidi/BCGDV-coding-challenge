/* eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';
import Header from '../index';

describe('Snapshot Testing', () => {
  it('Header', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});

