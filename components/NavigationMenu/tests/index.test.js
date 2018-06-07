/* eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';
import NavigationMenu from '../index';

describe('Snapshot Testing', () => {
  it('NavigationMenu', () => {
    const component = shallow(<NavigationMenu />);
    expect(component).toMatchSnapshot();
  });
});

