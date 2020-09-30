import React from "react";

const title = "Basic";

const description = `
  Basic input
  `;

const liveSnippet = () => [
  <ui-popover trigger="click" placement="top" />,
  <ui-popover placement="bottom" />,
  <ui-popover placement="left" />,
  <ui-popover placement="right" />
];

const htmlSnippet = liveSnippet;

export default {
  title: title,
  description: description,
  liveSnippet: liveSnippet,
  htmlSnippet: htmlSnippet
};
