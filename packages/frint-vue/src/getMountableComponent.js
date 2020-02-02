import { h, html } from "atomico";

export default function getMountableComponent(app) {
  const AppComponent = {
    name: app.name,
    inject: ["app"],
    ...app.get("component")
  };

  return {
    provide: {
      app: app
    },
    render(h) {
      // eslint-disable-line
      return html`
        <app-component></app-component>
      `;
    }
  };
}
