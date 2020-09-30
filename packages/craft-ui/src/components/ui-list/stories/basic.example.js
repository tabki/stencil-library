import React from "react";

const title = "Basic";

const description = `
  Basic list.

  `;

const liveSnippet = () => (
  <ui-list>
    <ui-list-item>List Item</ui-list-item>
    <ui-list-item>List Item</ui-list-item>
    <ui-list-item>List Item</ui-list-item>
  </ui-list>
);

const htmlSnippet = liveSnippet;

export default {
  title: title,
  description: description,
  liveSnippet: liveSnippet,
  htmlSnippet: htmlSnippet
};
