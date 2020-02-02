import getMountableComponent from './getMountableComponent';

const handler: any = {
  getData(key: string): any {
    return this.component[key];
  },
  setData(key: string, value: any) {
    return this.component[key] = value;
  },
  getProps() {
    return Object
      .keys(this.component)
      .reduce((acc, key) => {
        return {
          ...acc,
          key: this.component[key],
        };
      }, {});
  },
  getProp(key: string) {
    return this.component[key];
  },
  getMountableComponent,
}

export default handler;
