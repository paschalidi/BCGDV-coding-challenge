/**
 *
 * Test
 *
 */
import React from 'react';
import PT from 'prop-types';
import * as actions from '../../store/app-store/actions';
import { connect } from 'react-redux';
import { initStore } from '../../store/configure';
import withRedux from 'next-redux-wrapper';
import {} from 'semantic-ui-react';


class Test extends React.Component {
  render() {
    return (
      <div>
        {/* language=CSS */}
        <style jsx>
          {` `}
        </style>
        <p>Test!!</p>
      </div>
    );
  }
}

Test.defaultProps = {};

Test.propTypes = {};

function mapStateToProps(state) {
//  return { ...state.reducer };
}

export default withRedux(initStore, mapStateToProps, actions)(Test);