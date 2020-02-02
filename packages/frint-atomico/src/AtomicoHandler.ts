import getMountableComponent from './getMountableComponent';

const handler: any = (component) => {
  const getData = (key: string): any {
      return component[key];
  }

  const setData = (key: string, value: any) {
    return component[key] = value;
  }
  
  const getProps = () {
      return Object
        .keys()
        .reduce((acc, key) => {
          return {
            ...acc,
            key: component[key],
          };
        }, {});
  }

  const getProp = (key: string) {
    return component[key];
  }

  return {
    getData,
    setData,
    getProps,
    getProp,
    getMountableComponent
  }
}

export default handler;
