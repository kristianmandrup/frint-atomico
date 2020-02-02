import html from 'atomico/html'
import composeHandlers from 'frint-component-utils/lib/composeHandlers';
import RegionHandler from 'frint-component-handlers/lib/RegionHandler';

import AtomicoHandler from './AtomicoHandler';

export default (ctx) => {
  const { handler } = ctx

  const beforeCreate = () => {
    ctx.handler = composeHandlers(
      AtomicoHandler,
      RegionHandler,
      {
        component: this,
      },
    );
  }

  const data = () => {
    return handler.getInitialData();
  }

  const updated = () => handler.afterUpdate();

  const beforeMount = () => {
    handler.app = this.app; // context is resolved only now
    handler.beforeMount();
  }
  
  const beforeDestroy = () => {
    handler.beforeDestroy();
  }
  
  const render = (h) => { // eslint-disable-line
    const  { listForRendering } = ctx
    if (listForRendering.length === 0) {
      return null;
    }

    const renderedItems = listForRendering.map((item) => {
      const { name } = item; // eslint-disable-line

      // @TODO: what to do with `key`? is it needed in Vue, like React?
      return `<host><${name}></${name}></host>`
    })
    return html`<div>${renderedItems}</div>`
  }

  return {
    name: 'Region',
    inject: ['app'],
    props: [
      'name',
      'uniqueKey',
      'data',
    ],
    render,
    beforeDestroy,
    updated,
    beforeCreate,
    beforeMount,
    data
  }  
};
