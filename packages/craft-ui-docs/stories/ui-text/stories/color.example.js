import React from "react";

const title = "Color";

const description = `
  Each <code>type</code> is based on the corresponding html tag.
  for text you can uppercase
  <code>span</code> and <code>p</code>.
  Headings available in  <code>h1</code> - <code>h6</code>.
  `;

const liveSnippet = () => [
  <ui-text color="normal">Light</ui-text>,
  <ui-text color="light">Light</ui-text>,
  <ui-text color="lightest">Light</ui-text>
];

const htmlSnippet = liveSnippet;

export default {
  title: title,
  description: description,
  liveSnippet: liveSnippet,
  htmlSnippet: htmlSnippet
};
