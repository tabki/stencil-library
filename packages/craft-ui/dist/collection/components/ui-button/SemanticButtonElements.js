/*
  Semantic Button Elements
  - - -
  Given a correct ButtonElementType ,
  the getSemanticElement
*/
const Button = ({ className, label }) => (h("button", { class: className },
    h("slot", null)));
const A = ({ className, label }) => (h("a", { class: className },
    h("slot", null)));
const InputSubmit = ({ className, label }) => (h("button", { value: label, type: "submit", class: className },
    h("slot", null)));
const InputReset = ({ className, label }) => (h("button", { value: label, type: "reset", class: className },
    h("slot", null)));
export const getSemanticButtonElement = (type) => {
    var semanticElement;
    switch (type) {
        case "button":
            semanticElement = Button;
            break;
        case "anchor":
            semanticElement = A;
            break;
        case "submit":
            semanticElement = InputSubmit;
            break;
        case "reset":
            semanticElement = InputReset;
            break;
        default:
            semanticElement = Button;
    }
    return semanticElement;
};
export default getSemanticButtonElement;
