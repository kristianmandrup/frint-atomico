import { BehaviorSubject } from 'rxjs';
import html from 'atomico/html'
import { observe, streamProps } from 'frint-atomico';

export function getProps$(app) {
  const counter$ = new BehaviorSubject(0);

  return streamProps()
    .set(
      counter$,
      x => ({ value: x })
    )
    .set('setValue', (value) => counter$.next(value))
    .get$();
}

export const Component = () => {
    return html`<div>
        <p>
          Counter: {this.value}
          <button on-click={() => this.setValue(this.value + 1)}>+</button>
          /
          <button on-click={() => this.setValue(this.value - 1)}>-</button>
        </p>
      </div>
    `;
};

export const Counter = observe(getProps$)(Component);
