export const createElement(tagname: string, attributes: any) {
  const element = document.createElement(tagname)
  Object.keys(attributes).map((key) => element.setAttribute(key, attributes[key]))
  return element;
}
export const renderElementAt(id: string, tagname: string, attrs: any) {
  var containerdiv = document.querySelector("#" + id);
  const element = createElement(tagname, attrs);
  containerdiv.appendChild(element);
  return containerdiv.innerHTML;
}

