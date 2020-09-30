import React from "react";

const title = "Interactive";

const description = `
  Elevates the card when user hovers over the card.
  `;

const cards = [
  <ui-card elevation={0} interactive>
    <ui-card-content>Elevation 0</ui-card-content>
  </ui-card>,
  <ui-card elevation={1} interactive>
    <ui-card-content>Elevation 1</ui-card-content>
  </ui-card>,
  <ui-card elevation={2} interactive>
    <ui-card-content>Elevation 2</ui-card-content>
  </ui-card>,
  <ui-card elevation={3} interactive>
    <ui-card-content>Elevation 3 </ui-card-content>
  </ui-card>
];

const htmlSnippet = () => [...cards];

const liveSnippet = () => (
  <ui-grid>
    {cards.map(card => <ui-grid-item size={4}>{card}</ui-grid-item>)}
  </ui-grid>
);

export default {
  title: title,
  description: description,
  liveSnippet: liveSnippet,
  htmlSnippet: htmlSnippet
};
