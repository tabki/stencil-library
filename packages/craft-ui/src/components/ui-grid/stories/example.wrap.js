import React from "react";

const title = "Wrap";

const description = `
     <code>wrap</code> enables the grid to wrap your grid columns, so that
     you may put any number and any size of grid columns into your grid. This is
     good for dynamic content (e.g. varying sets of card items)
  `;

const liveSnippet = () => [
  <ui-grid cols={12} gutter={1} testing wrap>
    <ui-grid-item size={3} xs={12} sm={8} md={6} lg={4} xl={3}>
      size 3 xs 12 sm 8 md 6 lg 4 xl 3
    </ui-grid-item>
    <ui-grid-item size={3} xs={12} sm={8} md={6} lg={4} xl={3}>
      size 3 xs 12 sm 8 md 6 lg 4 xl 3
    </ui-grid-item>
    <ui-grid-item size={3} xs={12} sm={8} md={6} lg={4} xl={3}>
      size 3 xs 12 sm 8 md 6 lg 4 xl 3
    </ui-grid-item>

    <ui-grid-item size={3} xs={12} sm={8} md={6} lg={4} xl={3}>
      size 3 xs 12 sm 8 md 6 lg 4 xl 3
    </ui-grid-item>
    <ui-grid-item size={3} xs={12} sm={8} md={6} lg={4} xl={3}>
      size 3 xs 12 sm 8 md 6 lg 4 xl 3
    </ui-grid-item>
    <ui-grid-item size={3} xs={12} sm={8} md={6} lg={4} xl={3}>
      size 3 xs 12 sm 8 md 6 lg 4 xl 3
    </ui-grid-item>
  </ui-grid>
];

const htmlSnippet = liveSnippet;

export default {
  title: title,
  description: description,
  liveSnippet: liveSnippet,
  htmlSnippet: htmlSnippet
};
