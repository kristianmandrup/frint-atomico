import composeHandlers from 'frint-component-utils/lib/composeHandlers';
import ObserveHandler from 'frint-component-handlers/lib/ObserveHandler';

import AtomicoHandler from './AtomicoHandler';

export default function observe(getProps$) {
  return function (Component) {
    return {
      name: 'Observed' + Component.name,
      inject: ['app'],
      beforeCreate() {
        this._handler = composeHandlers(
          AtomicoHandler,
          ObserveHandler,
          {
            component: this,
            getProps$: getProps$,
          },
        );
      },
      data() {
        return this._handler.getInitialData();
      },
      beforeMount() {
        this._handler.app = this.app; // context is resolved only now
        // Invoked each time the custom element is appended into a document-connected element. 
        this._handler.connectedCallback();
      },
      beforeDestroy() {
        // Invoked each time the custom element is disconnected from the document's DOM.
        this._handler.disconnectedCallback();
      },
      render(h) { // eslint-disable-line
        return  {...{props: this.computedProps}} />;
      },
    };
  };
}
