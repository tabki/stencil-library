import React from "react";

const title = "Colors";

const description = `
  Each <code>type</code> can be customised to have a different color.
  Options available are:
    <code>primary</code>,
    <code>red</code>,
    <code>green</code>,
    <code>blue</code>,
    <code>orange</code>,
    <code>purple</code>,
  `;

const liveSnippet = () => [
  <ui-button color="primary">Primary</ui-button>,
  <ui-button color="red">Red</ui-button>,
  <ui-button type="thin" color="green">
    Green
  </ui-button>,
  <ui-button type="hollow" color="blue">
    Blue
  </ui-button>,
  <ui-button type="dashed" color="orange">
    Orange
  </ui-button>,
  <ui-button color="purple">Purple</ui-button>
];

const htmlSnippet = liveSnippet;

export default {
  title: title,
  description: description,
  liveSnippet: liveSnippet,
  htmlSnippet: htmlSnippet
};
