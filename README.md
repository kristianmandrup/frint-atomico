# frint-atomico

[![npm](https://img.shields.io/npm/v/frint-atomico.svg)](https://www.npmjs.com/package/frint-atomico) [![Build Status](https://img.shields.io/travis/frintjs/frint-atomico/master.svg)](http://travis-ci.org/frintjs/frint-atomico) [![Join the chat at https://gitter.im/frintjs/frintjs](https://badges.gitter.im/frintjs/frintjs.svg)](https://gitter.im/frintjs/frintjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> Atomico.js integration with FrintJS

For documentation about FrintJS, visit [https://frint.js.org](https://frint.js.org).

## Quick start

Find examples [here](https://github.com/kristianmandrup/frint-atomico/tree/master/examples).

```js
See example in [codepen](https://codepen.io/uppercod/pen/XLqyVO)

```js
import html from "atomico/html";
import { customElement } from "atomico";
import { from } from 'rxjs';

const MyTag = (props) => html`<h1>Hi! ${props.value}</h1>`;

const MyTagComponent = (props) => ({
  render(props) => MyTag(props),
  props,
  props$: from(props)
}

MyTag.props = {
  value: { type: String, value: "Atomico" }
};

customElement("my-tag", MyTag);
```

Using component factory

```js
const createComponent = (name, customElementRenderFn, initialData = {}) => ({  
  name,
  render(props) => customElementRenderFn(props),
  props,
  props$: from(props),
  getInitialData() => initialData
})
```

## Packages

* [frint-atomico](./packages/frint-atomico): For creating Vue-compatible reactive components.

Packages implementing [frint-router](https://frint.js.org/packages/frint-router) will arrive in future.

## Authors

* [Fahad Ibnay Heylaal](https://github.com/fahad19)

## License

MIT
