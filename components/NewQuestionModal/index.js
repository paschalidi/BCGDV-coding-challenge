/**
 *
 * NewQuestionModal
 *
 */
import React from 'react';

import PT from 'prop-types';
import * as actions from '../../store/poll-store/actions';
import { initStore } from '../../store/configure';
import withRedux from 'next-redux-wrapper';

import { Grid, Button, Input, Modal } from 'semantic-ui-react';
import { postSingleQuestion, getEveryQuestion } from '../../utils/api';


class NewQuestionModal extends React.Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleSubmit = async () => {
    await this.props.makeNewQuestionBody();

    await postSingleQuestion(this.props.newQuestionBody);
    await this.props.saveFetch((await getEveryQuestion()).data);
    return this.setState({ modalOpen: false });
  };

  postQuestion = async (body) => postSingleQuestion(body);

  render() {
    const { numberOfChoices, choices, newQuestionTitle } = this.props;
    return (
      <div>
        <Button fluid secondary onClick={this.handleOpen}>Create new Question</Button>
        <Modal open={this.state.modalOpen} style={{ margin: '0 auto !important' }}>
          <Modal.Header>Create new Question</Modal.Header>
          <Modal.Content>
            <Grid container>
              <Grid.Row column={1}>
                <Grid.Column textAlign='center'>
                  <div>
                    Number of choice(s)
                  </div>
                  <Button.Group>
                    <Button icon='minus' onClick={this.props.decrementChoices} />
                    <Button.Or text={numberOfChoices} />
                    <Button icon='plus' onClick={this.props.incrementChoices} />
                  </Button.Group>
                  <div>
                    Max choices : 10
                  </div>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row column={1}>
                <Grid.Column>
                  <div className='text--md bold'> Question</div>
                  <Input
                    onChange={(e) => this.props.setNewQuestionTitle(e.target.value)}
                    placeholder='Question...' fluid
                  />
                </Grid.Column>
              </Grid.Row>

              {
                new Array(numberOfChoices).fill(0).map((_, key) =>
                  <Grid.Row column={1} key={key}>
                    <Grid.Column>
                      <div className='text--md bold'>Choice {key + 1}</div>
                      <Input
                        onChange={(e) => this.props.setChoice(key, e.target.value)}
                        placeholder={`Choice ${key + 1}`} fluid
                      />
                    </Grid.Column>
                  </Grid.Row>
                )
              }
              <Grid.Row column={1}>
                <Grid.Column>
                  <Button
                    fluid
                    disabled={Object.keys(choices).length != numberOfChoices || newQuestionTitle.length == 0}
                    onClick={() => this.handleSubmit()}
                  >
                    Submit Question
                  </Button>
                  <div className='text--sm color--sec'>* All fields must be filled in order for the question to be submited</div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Content>
        </Modal>

      </div>
    );
  }
}

NewQuestionModal.defaultProps = { numberOfChoices: 2, newQuestionTitle: '', choices: 2 };

NewQuestionModal.propTypes = {
  numberOfChoices: PT.number,
  choice: PT.number,
  newQuestionTitle: PT.string
};

function mapStateToProps(state) {
  return { ...state.polls };
}

export default withRedux(initStore, mapStateToProps, actions)(NewQuestionModal);