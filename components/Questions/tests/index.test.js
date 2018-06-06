/* eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';
import Questions from '../index';

describe('Snapshot Testing', () => {
  it('Questions', () => {
    const component = shallow(<Questions />);
    expect(component).toMatchSnapshot();
  });
});

