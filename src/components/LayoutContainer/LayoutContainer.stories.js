import React from 'react';

import { jsxDecorator } from 'storybook-addon-jsx';

import LayoutContainer from './LayoutContainer';

export default {
  title: 'Molecules/Layout and Containers/Layout Container'
}

//stories.addDecorator(jsxDecorator);

export const Default = () => (
  <LayoutContainer>
    <p>
            A Layout Container caps the width of the content to the maximum
            width and centers the container
    </p>
  </LayoutContainer>
);

export const Narrow = () => (
  <LayoutContainer variant='narrow'>
    <p>
            A Layout Container caps the width of the content to the maximum
            width and centers the container
    </p>
  </LayoutContainer>
);

export const  VeryNarrow = () => (
  <LayoutContainer variant='very-narrow'>
    <p>
            A Layout Container caps the width of the content to the maximum
            width and centers the container
    </p>
  </LayoutContainer>
);

export const Centered =  () => (
  <LayoutContainer align='center'>
    <p>
            A Layout Container caps the width of the content to the maximum
            width and centers the container
    </p>
  </LayoutContainer>
);
