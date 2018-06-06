/* eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';
import Test from '../index';

describe('Snapshot Testing', () => {
  it('Test', () => {
    const component = shallow(<Test />);
    expect(component).toMatchSnapshot();
  });
});

