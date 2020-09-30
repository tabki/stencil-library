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
  <ui-badge color="primary" size="s" label="small" />,
  <ui-badge color="primary" size="m" label="normal" />,
  <ui-badge color="primary" size="l" label="large" />,
  <ui-badge color="primary" size="xl" label="xlarge" />
];

const htmlSnippet = liveSnippet;

export default {
  title: title,
  description: description,
  liveSnippet: liveSnippet,
  htmlSnippet: htmlSnippet
};
