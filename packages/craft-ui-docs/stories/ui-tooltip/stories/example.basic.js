import React from "react";

const title = "Basic";

const description = `
  Basic input
  `;

const liveSnippet = () => [
  <ui-tooltip placement="top" />,
  <ui-tooltip placement="bottom" />,
  <ui-tooltip placement="left" />,
  <ui-tooltip placement="right" />
];

const htmlSnippet = liveSnippet;

export default {
  title: title,
  description: description,
  liveSnippet: liveSnippet,
  htmlSnippet: htmlSnippet
};
