/*! Built with http://stenciljs.com */
const { h } = window.trustyle;

const mapPropsToClasses = (baseClassName, propClassMap) => (props) => {
    const classes = [baseClassName, props.class];
    Object.getOwnPropertyNames(props).forEach(prop => {
        if (propClassMap[prop]) {
            const htmlClass = propClassMap[prop][props[prop]];
            classes.push(htmlClass);
        }
    });
    return classes.join(" ");
};

export { mapPropsToClasses };
