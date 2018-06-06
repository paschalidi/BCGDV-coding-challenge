import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Questions from '../components/Questions';
import NewQuestionModal from '../components/NewQuestionModal';
import * as actions from '../store/poll-store/actions';
import { initStore } from '../store/configure';
import withRedux from 'next-redux-wrapper';
import { getEveryQuestion } from '../utils/api';


class Index extends React.Component {
  static async getInitialProps() {
    const res = (await getEveryQuestion()).data;
    return { questions: res };
  }

  componentWillMount() {
    this.props.saveFetch(this.props.questions);
  }

  render() {
    const { qs } = this.props;
    if (!qs) return <Layout title={'BCGDV-challenge'} />;
    return (
      <Layout title={'BCGDV-challenge'}>
        <Header title={'Questions'} />
        <NewQuestionModal />
        <Questions questions={qs} />
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.polls };
}

export default withRedux(initStore, mapStateToProps, actions)(Index);
