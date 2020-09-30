import ClassMap from "../common/classMaps/ClassMap";
import colorClassMapper from "../common/classMaps/colors.cmapper";
import surfaceSizingClassMapper from "../common/classMaps/surface.cmapper";

const _classMap = {};

export const classMap = new ClassMap(_classMap)
  .extendWith(colorClassMapper("color", "ui-badge"))
  .extendWith(surfaceSizingClassMapper("size"));

console.warn(classMap);
