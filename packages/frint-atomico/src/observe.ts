import composeHandlers from 'frint-component-utils/lib/composeHandlers';
import ObserveHandler from 'frint-component-handlers/lib/ObserveHandler';

import AtomicoHandler from './AtomicoHandler';

export default (handler) => observe(getProps$) => {
  return function (Component) {
    return {
      name: 'Observed' + Component.name,
      inject: ['app'],
      beforeCreate() {
        handler = composeHandlers(
          AtomicoHandler,
          ObserveHandler,
          {
            component: this,
            getProps$: getProps$,
          },
        );
      },
      data() {
        return {};
      },
      beforeMount() {
        handler.app = this.app; // context is resolved only now
        // Invoked each time the custom element is appended into a document-connected element. 
        handler.connectedCallback();
      },
      beforeDestroy() {
        // Invoked each time the custom element is disconnected from the document's DOM.
        handler.disconnectedCallback();
      },
      render(h) { // eslint-disable-line        
      },
    };
  };
}
