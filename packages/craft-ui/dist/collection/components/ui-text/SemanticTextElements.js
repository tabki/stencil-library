/*
  Semantic Elements
  - - -
  Given a correct TextElementType, getSemanticElement should
  return a functional component which wraps the corresponding
  html5 element.
  This module does not deal with any styling logic
*/
const H1 = ({ className }) => (h("h1", { class: className },
    h("slot", null)));
const H2 = ({ className }) => (h("h2", { class: className },
    h("slot", null)));
const H3 = ({ className }) => (h("h3", { class: className },
    h("slot", null)));
const H4 = ({ className }) => (h("h4", { class: className },
    h("slot", null)));
const H5 = ({ className }) => (h("h5", { class: className },
    h("slot", null)));
const H6 = ({ className }) => (h("h6", { class: className },
    h("slot", null)));
const P = ({ className }) => (h("p", { class: className },
    h("slot", null)));
const Span = ({ className }) => (h("span", { class: className },
    h("slot", null)));
export const getSemanticTextElement = (type) => {
    var semanticElement;
    switch (type) {
        case "h1":
            semanticElement = H1;
            break;
        case "h2":
            semanticElement = H2;
            break;
        case "h3":
            semanticElement = H3;
            break;
        case "h4":
            semanticElement = H4;
            break;
        case "h5":
            semanticElement = H5;
            break;
        case "h6":
            semanticElement = H6;
            break;
        case "p":
            semanticElement = P;
            break;
        case "span":
            semanticElement = Span;
            break;
        default:
            semanticElement = P;
    }
    return semanticElement;
};
export default getSemanticTextElement;
