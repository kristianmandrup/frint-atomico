import getMountableComponent from './getMountableComponent';

const arrToObj = (arr: any[]) => {
  const keys = arr.filter((item, index) => index % 2 === 0)
  const values = arr.filter((item, index) => index % 2 === 1)
  return keys.reduce((acc, key, index) => {
    acc[key] = values[i]
    return acc
  }, {})  
}

const attrKeys = (arr: any[]) => {
  return arr.filter((item, index) => index % 2 === 0)
 

// component is a Custom Element, ie. a DOM element
// See Element attributes - https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes
// See Working with DOM element attributes: https://css-tricks.com/working-with-attributes-on-dom-elements/
const handler: any = (component) => {
  const getKeys = (): string[] => attrKeys(component.attributes)

  const getData = (key: string): any => component.getAttribute(key)

  const setData = (key: string, value: any) =>
    component.setAttribute(key, value);
  }
  
  const getProps = () => getKeys()
    .reduce((acc, key) => {
      return {
        ...acc,
        [key]: getData(key),
      };
    }, {});

  const getProp = (key: string) => getData(key);

  return {
    getData,
    setData,
    getProps,
    getProp,
    getMountableComponent
  }
}

export default handler;
