import React from 'react';
import { action } from '@storybook/addon-actions';
import { IconGrid } from './IconGrid';


export default {
  component: IconGrid,
  title: 'Atoms/Icons/IconGrid',
  excludeStories: /.*Data$/,
};

export const Default = () =>  <IconGrid />
