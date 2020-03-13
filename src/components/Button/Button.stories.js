import React, { PropTypes } from 'react';
import { Button } from './Button';

export default { 
  title: 'Molecules/Buttons/Button'
};

export const Default =  () => (
  <Button onClick={() => console.log('clicked!!')} />
);

export const Secondary =  () => <Button issecondary text='Secondary Button' />;

export const  IconBefore = () => (
  <Button iconname='plus' text={'Icon Before'} />
);

export const  IconAfter = () => (
  <Button iconnameafter='minus' text='Icon After' />
);

export const  IconOnly = () => <Button iconname='minus' text={false} />;
