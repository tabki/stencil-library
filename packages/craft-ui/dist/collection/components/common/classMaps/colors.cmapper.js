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
export default colorClassMap;
