import ClassMap from "../common/classMaps/ClassMap";
import colorClassMapper from "../common/classMaps/colors.cmapper";
import surfaceSizingClassMapper from "../common/classMaps/surface.cmapper";
const _classMap = {
    type: {
        full: " --full",
        thin: " --thin",
        hollow: " --hollow",
        dashed: " --dashed",
        danger: " --danger"
    }
};
export const classMap = new ClassMap(_classMap)
    .extendWith(colorClassMapper("color", "ui-button"))
    .extendWith(surfaceSizingClassMapper("size"));
