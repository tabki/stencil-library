import React from "react";

const title = "Headings";

const description = `
  Each <code>type</code> is based on the corresponding html tag.
  for text you can uppercase
  <code>span</code> and <code>p</code>.
  Headings available in  <code>h1</code> - <code>h6</code>.
  `;

const liveSnippet = () => [
  <ui-text type="h1">Heading 1</ui-text>,
  <ui-text type="h2">Heading 2</ui-text>,
  <ui-text type="h3">Heading 3</ui-text>,
  <ui-text type="h4">Heading 4</ui-text>,
  <ui-text type="h5">Heading 5</ui-text>,
  <ui-text type="h6">Heading 6</ui-text>,
  <ui-text type="span">Span </ui-text>,
  <ui-text type="p">Paragraph text </ui-text>
];

const htmlSnippet = liveSnippet;

export default {
  title: title,
  description: description,
  liveSnippet: liveSnippet,
  htmlSnippet: htmlSnippet
};
