import React from "react";

const title = "Type";

const description = `
  Different styles are applied to each type.
  Options available are:
    <code>full</code>,
    <code>thin</code>,
    <code>hollow</code>,
    <code>dashed</code>,
    <code>danger</code>
  `;

const liveSnippet = () => [
  <ui-button type="full">Full</ui-button>,
  <ui-button type="thin">Thin</ui-button>,
  <ui-button type="hollow">Hollow</ui-button>,
  <ui-button type="dashed">Dashed</ui-button>,
  <ui-button type="danger">Danger</ui-button>
];

const htmlSnippet = liveSnippet;

export default {
  title: title,
  description: description,
  liveSnippet: liveSnippet,
  htmlSnippet: htmlSnippet
};
