/*! Built with http://stenciljs.com */
const { h } = window.trustyle;

const mapPropsToClasses = (baseClassName, classMap) => (props) => {
    const classes = [baseClassName, props.class];
    const classMapObj = classMap.map;
    Object.getOwnPropertyNames(props).forEach(prop => {
        if (classMapObj[prop]) {
            const htmlClass = classMapObj[prop][props[prop]];
            classes.push(htmlClass);
        }
    });
    return classes.join(" ");
};

class ClassMap {
    constructor(classMap) {
        this.map = classMap;
    }
    extendWith(classMapExtension) {
        this.map = Object.assign(this.map, classMapExtension);
        return this;
    }
}

export default ClassMap;
export { mapPropsToClasses };
