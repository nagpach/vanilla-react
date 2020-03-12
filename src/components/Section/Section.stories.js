import React from 'react';

import { Section } from './Section';

export default { 
  title: 'Organisms/Sections/Section'
}

export const Default = () => (
  <Section
    title='Section Title'
    description='This is a description of what the section is'
  >
    <div className='fpo'>
      This is the section body, where you can put any content or include other
      components.
      <div className='fpo'>Subcomponent</div>
      <div className='fpo'>Subcomponent</div>
      <div className='fpo'>Subcomponent</div>
    </div>
  </Section>
);
