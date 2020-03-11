import React from 'react';
import { addParameters, configure, addDecorator } from '@storybook/react';
import atomicTheme from './atomicTheme';
import '../src/css/style.scss';

addParameters({
    options: {
        theme: atomicTheme,
    }
  });