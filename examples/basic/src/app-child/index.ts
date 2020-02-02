import { createApp } from 'frint';
import { RegionService } from 'frint-atomico';

import { Root } from './Root';

export default createApp({
  name: 'ChildApp',

  providers: [
    {
      name: 'component',
      useValue: Root,
    },
    {
      name: 'region',
      useClass: RegionService,
    },
  ],
});
