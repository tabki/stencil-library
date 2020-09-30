import ClassMap from "../common/classMaps/ClassMap";
// import colorClassMap from '../common/classMaps/colors.classmap';
//
// const _classMap = {
//   size: {
//     small: "ui-badge-size--small",
//     normal: "ui-badge-size--normal",
//     large: "ui-badge-size--large",
//     xlarge: "ui-badge-size--xlarge"
//   }
// };
//
// export const classMap = new ClassMap(_classMap)
//   .extendWith(colorClassMap('ui-badge'))

const _arrowBoxClassMap = {
  placement: {
    top: "ui-arrow-box_placement--top",
    bottom: "ui-arrow-box_placement--bottom",
    left: "ui-arrow-box_placement--left",
    right: "ui-arrow-box_placement--right"
  }
};

export const arrowBoxClassMap = new ClassMap(_arrowBoxClassMap);
