/* eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';
import NewQuestionModal from '../index';

describe('Snapshot Testing', () => {
  it('NewQuestionModal', () => {
    const component = shallow(<NewQuestionModal />);
    expect(component).toMatchSnapshot();
  });
});

