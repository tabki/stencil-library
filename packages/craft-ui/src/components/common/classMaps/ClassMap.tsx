import { IClassMap } from "./types";

export default class ClassMap implements IClassMap {
  map: Object;
  constructor(classMap: Object) {
    this.map = classMap;
  }
  extendWith(classMapExtension: Object) {
    this.map = Object.assign(this.map, classMapExtension);
    return this;
  }
}
