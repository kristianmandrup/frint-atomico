import html from 'atomico/html'
import { observe, streamProps } from 'frint-atomico';
import { useState } from 'atomico';

const Component = ({appName: string}) =>{
  const [interval, setInterval] = useState(0)
  return html`<div>
    <p>
      Hello World from <strong>{appName}</strong>!
      With interval: {interval}.
    </p>
  </div>`
};

export const Root = observe(function (app) {
  return streamProps()
    .set('appName', app.getName())
    .set(
      app.get('region').getData$(),
      data => ({ interval: data.interval })
    )
    .get$();
})(Component);
