/*
  Semantic Button Elements
  - - -
  Given a correct ButtonElementType ,
  the getSemanticElement
*/

import { ButtonElementType } from "./types";

const Button = ({ className, label }) => (
  <button class={className}>
    <slot />
  </button>
);

const A = ({ className, label }) => (
  <a class={className}>
    <slot />
  </a>
);

const InputSubmit = ({ className, label }) => (
  <button value={label} type="submit" class={className}>
    <slot />
  </button>
);

const InputReset = ({ className, label }) => (
  <button value={label} type="reset" class={className}>
    <slot />
  </button>
);

export const getSemanticButtonElement = (type: ButtonElementType) => {
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
