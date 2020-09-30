/*! Built with http://stenciljs.com */
const { h } = window.trustyle;

const colorClassMap = (propName, baseClassName = "") => {
    return {
        [propName]: {
            primary: baseClassName.concat(" --primary"),
            red: baseClassName.concat(" --red"),
            green: baseClassName.concat(" --green"),
            blue: baseClassName.concat(" --blue"),
            orange: baseClassName.concat(" --orange"),
            yellow: baseClassName.concat(" --yellow"),
            darkpurple: baseClassName.concat(" --darkpurple")
        }
    };
};

const surfaceSizeClassMap = (propName) => {
    var baseClassName = "ui-surface";
    return {
        [propName]: {
            s: baseClassName.concat(" --size-small"),
            m: baseClassName.concat(" --size-medium"),
            l: baseClassName.concat(" --size-large"),
            xl: baseClassName.concat(" --size-xlarge --shape-circle")
        }
    };
};

export default colorClassMap;
export { surfaceSizeClassMap as default$1 };
