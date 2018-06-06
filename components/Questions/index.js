/**
 *
 * Questions
 *
 */
import React from 'react';
import PT from 'prop-types';
import { Grid, Segment } from 'semantic-ui-react';
import InternalLink from '../InternalLink';


const options = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
};

const Questions = ({ children, questions }) =>
  <Grid container centered stackable stretched columns={4}>
    {/* language=CSS */}
    <style jsx>
      {`
          .created-at--padding {
              padding-top: 0.5vw;
          }
      `}
    </style>
    <Grid.Row>
      {
        questions.map((index, key) =>
          <Grid.Column key={key} style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
            <Segment style={{ height: '100%' }}>
              <div className='flex-no-height'>
                <InternalLink
                  href={{ pathname: '/question', query: { queryId: index.url } }}
                  as={`/questions/${index.url.split('/')[2]}`} //todo fix this piece of code to be more readable
                >
                  <div className='text--md'>
                    {index.question}
                  </div>
                </InternalLink>
                <div className='bottom' />
                <div className='text--sm color--sec created-at--padding'>
                  Created at: {new Date(index.published_at).toLocaleDateString('en', options)}
                </div>
                <div className='text--sm color--sec'>
                  Choices: {index.choices.length}
                </div>
              </div>
            </Segment>
          </Grid.Column>)
      }
    </Grid.Row>
  </Grid>;

Questions.defaultProps = {};

Questions.propTypes = {};

export default Questions;