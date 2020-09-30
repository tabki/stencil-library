import React from "react";

const title = "Standalone";

const description = `
  comes in different colors!.

  `;

const liveSnippet = () => [
  <ui-badge color="primary" label="Primary" />,
  <ui-badge color="red" label="Red" />,
  <ui-badge color="green" label="Green" />,
  <ui-badge color="blue" label="Blue" />,
  <ui-badge color="orange" label="Orange" />,
  <ui-badge color="darkpurple" label="Purple" />
];

const htmlSnippet = liveSnippet;

export default {
  title: title,
  description: description,
  liveSnippet: liveSnippet,
  htmlSnippet: htmlSnippet
};
