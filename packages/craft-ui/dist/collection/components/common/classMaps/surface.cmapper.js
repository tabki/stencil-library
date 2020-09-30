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
export default surfaceSizeClassMap;
