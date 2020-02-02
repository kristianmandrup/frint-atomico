import { Observable } from 'rxjs';
import html from 'atomico/html'
import { observe, streamProps, Region } from 'frint-atomico';

export function getProps$(app) {
  return streamProps()
    .set(
      Observable.interval(500),
      x => ({ interval: x })
    )
    .get$();
}

export const Component = () => {
    return html`<div>
        <p>Interval: {this.interval}</p>

        <Region name="sidebar" data={{interval: this.interval}} />
      </div>`;
};

export const Interval = observe(getProps$)(Component);
