export const mapPropsToClasses = (baseClassName, propClassMap) => (props) => {
    const classes = [baseClassName, props.class];
    const obj = Object.getOwnPropertyNames(props);
    Object.getOwnPropertyNames(props).forEach(prop => {
        if (propClassMap[prop]) {
            const htmlClass = propClassMap[prop][props[prop]];
            classes.push(htmlClass);
        }
    });
    return classes.join(" ");
};
export default mapPropsToClasses;
