import { IClassMap } from "./types";
export default class ClassMap implements IClassMap {
    map: Object;
    constructor(classMap: Object);
    extendWith(classMapExtension: Object): this;
}
