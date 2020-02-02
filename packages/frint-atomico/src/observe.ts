import composeHandlers from 'frint-component-utils/lib/composeHandlers';
import ObserveHandler from 'frint-component-handlers/lib/ObserveHandler';

import AtomicoHandler from './AtomicoHandler';

export default (ctx: any) => (getProps$: any) => {
  var { handler, app } = ctx
  return (Component) => {
    const { name } = Component
    return {
      name: 'Observed' + name,
      inject: ['app'],
      beforeCreate() {
        handler = composeHandlers(
          AtomicoHandler,
          ObserveHandler,
          {
            component: this,
            getProps$,
          },
        );
      },
      data() {
        return handler.getInitialData();
      },
      beforeMount() {
        handler.app = app; // context is resolved only now
        // Invoked each time the custom element is appended into a document-connected element. 
        handler.connectedCallback();
      },
      beforeDestroy() {
        // Invoked each time the custom element is disconnected from the document's DOM.
        handler.disconnectedCallback();
      },
      render(h) { // eslint-disable-line        
        return Component.render()
      },
    };
  };
}
