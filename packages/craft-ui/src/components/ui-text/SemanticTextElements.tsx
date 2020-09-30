/*
  Semantic Elements
  - - -
  Given a correct TextElementType, getSemanticElement should
  return a functional component which wraps the corresponding
  html5 element.
  This module does not deal with any styling logic
*/

// @flow
import { TextElementType } from "./types";

const H1 = ({ className }) => (
  <h1 class={className}>
    <slot />
  </h1>
);

const H2 = ({ className }) => (
  <h2 class={className}>
    <slot />
  </h2>
);

const H3 = ({ className }) => (
  <h3 class={className}>
    <slot />
  </h3>
);

const H4 = ({ className }) => (
  <h4 class={className}>
    <slot />
  </h4>
);

const H5 = ({ className }) => (
  <h5 class={className}>
    <slot />
  </h5>
);

const H6 = ({ className }) => (
  <h6 class={className}>
    <slot />
  </h6>
);

const P = ({ className }) => (
  <p class={className}>
    <slot />
  </p>
);

const Span = ({ className }) => (
  <span class={className}>
    <slot />
  </span>
);

export const getSemanticTextElement = (type: TextElementType) => {
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
