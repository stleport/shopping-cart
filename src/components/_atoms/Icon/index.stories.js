import React from 'react';

import { storiesOf } from '@storybook/react';
import Icon from '.';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Icon', module)
  .add('with text', () => <Icon src="" fill="white" alt="" className="" >Hello Icon</Icon>);
