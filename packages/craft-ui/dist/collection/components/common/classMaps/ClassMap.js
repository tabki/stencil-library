export default class ClassMap {
    constructor(classMap) {
        this.map = classMap;
    }
    extendWith(classMapExtension) {
        this.map = Object.assign(this.map, classMapExtension);
        return this;
    }
}
