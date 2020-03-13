import React from 'react';

import { Card } from './Card';

export default { 
  title: 'Molecules/Blocks/Card'
};

export const Default = () => <Card>This is the card body.</Card>;

export const  Dark = () => (
  <Card
    theme='dark'
    title='Dark Card Title'
    description='This is the card description'
  >
    This is the card body.
  </Card>
);
