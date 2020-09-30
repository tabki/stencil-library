import { IClassMap }  from "./types";

export const mapPropsToClasses = (
  baseClassName: String,
  classMap: IClassMap
) => (props: any) => {
  const classes = [baseClassName, props.class];
  const obj = Object.getOwnPropertyNames(props);
const classMapObj = classMap.map
  Object.getOwnPropertyNames(props).forEach(prop => {
    if (classMapObj[prop]) {
      const htmlClass = classMapObj[prop][props[prop]];
      classes.push(htmlClass);
    }
  });

  return classes.join(" ");
};

export default mapPropsToClasses;
