export type TextElementType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";

export type FontWeight = "light" | "normal" | "bold";

export type TextElementOptions = {
  smallCaps?: boolean;
  weight?: FontWeight;
};
