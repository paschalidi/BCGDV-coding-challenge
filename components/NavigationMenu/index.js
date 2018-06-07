/**
 *
 * NavigationMenu
 *
 */
import React from 'react';
import { Button } from 'semantic-ui-react';
import InternalLink from '../InternalLink';


const NavigationMenu = () =>
  <div>
    <InternalLink href={`/`}>
      <Button secondary fluid>Back</Button>
    </InternalLink>
  </div>;

export default NavigationMenu;