/**
 *
 * question
 *
 */
import React from 'react';
import * as actions from '../store/poll-store/actions';
import { initStore } from '../store/configure';
import withRedux from 'next-redux-wrapper';

import { Grid, Segment, Dimmer, Loader, Button } from 'semantic-ui-react';

import Layout from '../components/Layout/index';
import Header from '../components/Header';
import NavigationMenu from '../components/NavigationMenu';
import { getSingleQuestion, vote } from '../utils/api';


class Question extends React.Component {

  static async getInitialProps({ query }) {
    const res = (await getSingleQuestion(query.queryId)).data;
    return {
      item: res,
      queryId: query.queryId
    };
  }

  state = {
    loading: false,
    activeIndex: null,
    activeUrl: null,
    isButtonDisabled: true
  };

  componentWillMount() {
    this.props.saveQuestionState(this.props.item);
  }

  postVote = async (url) => {
    this.setState({ loading: true });
    await vote(url);
    await this.props.saveQuestionState((await getSingleQuestion(this.props.queryId)).data);
    this.setState({
      loading: false,
      activeIndex: null,
      activeUrl: null,
      isButtonDisabled: true
    });
  };

  getPercentage = (votes) => {
    if (this.props.q.totalVotes === 0) return 0;
    return ((votes / this.props.q.totalVotes) * 100).toFixed(2);
  };

  render() {
    const { q } = this.props;
    const { loading, activeIndex, activeUrl, isButtonDisabled } = this.state;

    if (!q) return <Layout title={'BCGDV-challenge'} />;
    return (
      <Layout title={q.question}>
        <NavigationMenu />
        <Header width={10} title={'Details'} subtitle={`Question: ${q.question}`} />

        <Grid container centered stackable columns={1}>
          {
            q.choices.map((index, key) =>
              <Grid.Column width={10} key={key}>
                {
                  loading
                    ?
                    <Segment style={{ padding: 0 }}>
                      <Grid container centered columns={1}>
                        <Grid.Column>1
                          <Dimmer active inverted>
                            <Loader />
                          </Dimmer>
                        </Grid.Column>
                      </Grid>
                    </Segment>
                    :
                    <Segment
                      style={{ padding: 0, cursor: 'pointer' }}
                      onClick={() => this.setState({
                        activeUrl: index.url,
                        activeIndex: key,
                        isButtonDisabled: false
                      })}
                      className={key === activeIndex ? 'inverted tertiary color green' : ''}
                    >
                      <Grid container centered columns={3}>
                        <Grid.Column><b>{index.choice}</b></Grid.Column>
                        <Grid.Column>votes: <b>{index.votes}</b></Grid.Column>
                        <Grid.Column>perc.: <b>{this.getPercentage(index.votes)}%</b></Grid.Column>
                      </Grid>
                    </Segment>
                }
              </Grid.Column>
            )
          }
          <Grid.Column width={10}>
            <Button
              secondary
              disabled={isButtonDisabled}
              fluid
              onClick={() => this.postVote(activeUrl)}
            >Submit Choise</Button>
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.polls };
}

export default withRedux(initStore, mapStateToProps, actions)(Question);
