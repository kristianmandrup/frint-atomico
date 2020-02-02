import { h } from "atomico";
import getMountableComponent from "./getMountableComponent";

export default function render(app, el) {
  const Component = getMountableComponent(app);
  return Component;
}
