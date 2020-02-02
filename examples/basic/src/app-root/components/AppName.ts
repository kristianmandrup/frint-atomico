import html from 'atomico/html'
import { observe, streamProps } from 'frint-atomico';

export function getProps$(app) {
  return streamProps()
    .set('appName', app.getName())
    .get$();
}

export const Component = () => html`<div>
  <p>AppName: {this.appName}</p>
</div>`;


export const AppName = observe(getProps$)(Component);
