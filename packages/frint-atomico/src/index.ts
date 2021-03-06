import streamProps from 'frint-component-utils/lib/streamProps';
import RegionService from 'frint-component-handlers/lib/RegionService';

import getMountableComponent from './getMountableComponent';
import render from './render';
import Region from './Region';
import observe from './observe';
import AtomicoHandler from './AtomicoHandler';

module.exports = { // eslint-disable-line
  streamProps,
  RegionService,

  getMountableComponent,
  render,
  Region,
  observe,
  AtomicHandler,
};
