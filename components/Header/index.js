/**
 *
 * Header
 *
 */
import React from 'react';
import PT from 'prop-types';
import { Grid } from 'semantic-ui-react';


const Header = ({ title, subtitle, width = 16 }) =>
  <div className='background-color--white header aligner'>
    {/* language=CSS */}
    <style jsx>
      {`
          .aligner {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-align: center;
              -webkit-align-items: center;
              -ms-flex-align: center;
              align-items: center;
              -webkit-box-pack: center;
              -ms-flex-pack: center;
          }

          .header {
              height: 40vh;
          }

          .details--padding {
              padding-left: 4px;
          }
      `}
    </style>
    <Grid container centered stackable columns={1}>
      <Grid.Row>
        <Grid.Column width={width}>
          <div className='text--lg'>{title}</div>
        </Grid.Column>
        {
          subtitle
          &&
          <Grid.Column width={width}>
            <div className='text--md color--sec details--padding'>{subtitle}</div>
          </Grid.Column>
        }
      </Grid.Row>
    </Grid>
  </div>;

export default Header;