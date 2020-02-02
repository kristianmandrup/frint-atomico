import { AppName } from './AppName';
import { Interval } from './Interval';
import { Counter } from './Counter';
import html from 'atomico/html'

export default () => {
    return html`<div>
        <p>Hello World from <strong>RootApp</strong>!</p>

        <AppName />

        <Interval />

        <Counter />
      </div>`;
}
