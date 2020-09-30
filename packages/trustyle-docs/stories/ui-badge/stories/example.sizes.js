import React from "react";

const title = "Sizes";

const description = `
  Available options: 
    <code>small</code>,
    <code>normal</code>,
    <code>large</code>,
    <code>xlarge</code>,
`;

const liveSnippet = () => [
  <ui-badge color="primary" size="small" label="small" />,
  <ui-badge color="primary" size="normal" label="normal" />,
  <ui-badge color="primary" size="large" label="large" />,
  <ui-badge color="primary" size="xlarge" label="xlarge" />
];

const htmlSnippet = liveSnippet;

export default {
  title: title,
  description: description,
  liveSnippet: liveSnippet,
  htmlSnippet: htmlSnippet
};
