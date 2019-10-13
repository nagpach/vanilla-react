import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';


import GridItem from './GridItem';

let module;
let stories = storiesOf('Molecules/Layout and Containers/GridItem', module);

stories.addDecorator(jsxDecorator);

stories.add('Default', () => (
  <GridItem>
    <div className='fpo'>Grid item</div>
  </GridItem>
));
