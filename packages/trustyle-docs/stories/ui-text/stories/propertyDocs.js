const propertyDocs = [
  {
    name: "<code>type</code>",
    desc: `The HTML element type that will be rendered. Possible options:
      <code>h1</code>,
      <code>h2</code>,
      <code>h3</code>,
      <code>h4</code>,
      <code>h5</code>,
      <code>span</code>,
      <code>p</code>,
      `,
    type: "string",
    default: "<code>span</code>"
  },
  {
    name: "<code>color</code>",
    desc: `Shading of the text. Possible options:
      <code>normal</code>,
      <code>light</code>,
      <code>lightest</code>,
    `,
    type: "string",
    default: "<code>normal</code>"
  },
  {
    name: "<code>transform</code>",
    desc: `CSS Text transform text. Possible options:
      <code>uppercase</code>,
      <code>lowercase</code>,
    `,
    type: "string",
    default: "<code>-</code>"
  },
  {
    name: "<code>spacing</code>",
    desc: `letter spacing of the fonts. Possible options:
      <code>normal</code>,
      <code>wide</code>
    `,
    type: "string",
    default: "<code>normal</code>"
  }
];

export default propertyDocs;
