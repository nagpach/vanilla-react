import React from 'react';
import Grid from './Grid';
import GridItem from '../GridItem';

import '../../css/scss/utilities/_spacing.scss';

export default { 
  title: 'Molecules/Layout and Containers/Grid'
};

export const Default = () => (
  <Grid>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
);

export const SidebySide = () => (
  <Grid variant='side-by-side'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
);

export const  twoUpGrid =  () => (
  <Grid variant='2up'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
);

twoUpGrid.story = {
  name: '2 up grid'
}

export const onetothreeUpgrid  =  () => (
  <Grid variant='1-to-3up'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
);

onetothreeUpgrid.story = { name: '1 to 3up grid'}

export const threeUpGrid =  () => (
  <Grid variant='3up'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
);

threeUpGrid.story = { name:'3up grid' };

export const fourUpGrid =  () => (
  <Grid variant='4up'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
);
fourUpGrid.story = { name:'4up grid' };


export const GridSpacingNone =  () => (
  <Grid variant='2up' gap='none'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
);

export const GridSpacingSmall = () => (
  <Grid variant='2up' gap='small'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
);

export const GridSpacingLarge = () => (
  <Grid variant='2up' gap='large'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
);

export const GridSpacingXl = () => (
  <Grid variant='2up' gap='xl'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
);

export const GridRowSpacingNone =  () => (
  <Grid variant='2up' rowGap='none'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
);

export const GridRowSpacingSmall =  () => (
  <Grid variant='2up' rowGap='small'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
);

export const GridRowSpacingLarge =   () => (
  <Grid variant='2up' rowGap='large'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
);

export const gridRowSpacingXL =  () => (
  <Grid variant='2up' rowGap='xl'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
);

gridRowSpacingXL.story = { name:'Grid row spacing xl'}

export const gridColumnSpacingNone =  () => (
  <Grid variant='2up' colGap='none'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
);

gridColumnSpacingNone.story = { name:'Grid column spacing none'}

export const gridColumnSpacingSmall =  () => (
  <Grid variant='2up' colGap='small'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
);

gridColumnSpacingSmall.story = { name:'Grid column spacing small'}

export const gridColumnSpacingL = () => (
  <Grid variant='2up' colGap='large'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
);

gridColumnSpacingL.story = { name:'Grid column spacing large'}

export const gridColumnSpacingXL =  () => (
  <Grid variant='2up' colGap='xl'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
);

gridColumnSpacingXL.story = { name:'Grid column spacing xl'}
