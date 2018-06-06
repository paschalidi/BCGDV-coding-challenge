/**
*
* test
*
*/
import React from 'react';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';
import Layout from '../components/Layout/index';
import {} from 'semantic-ui-react';


class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
    //   header,
    } = this.state;
    return (
      <Layout title="Test">
        {/* language=CSS */} <style jsx>{``}</style>
        Hello from test mobile!!
      </Layout>
    );
  }
}

export default (Test);