import React from "react";

const title = "Basic";

const description = `
  Basic dropdown menu. Menu position can be set depending on your use case

  `;

const liveSnippet = () => (
  <ui-dropdown>
    <ui-button type="thin" slot="ui-dropdown-toggle">
      Open Menu
    </ui-button>
    <ui-dropdown-item>Hello</ui-dropdown-item>
    <ui-dropdown-item>Hello</ui-dropdown-item>
    <ui-dropdown-item>Hello</ui-dropdown-item>
  </ui-dropdown>
);

const htmlSnippet = liveSnippet;

export default {
  title: title,
  description: description,
  liveSnippet: liveSnippet,
  htmlSnippet: htmlSnippet
};
