import React from "react";

const title = "Status";

const description = `
  badge to signify http <code>status</code>. API for this badge is the same as
  the badge found in core components. Status will be included with label.

  `;

const liveSnippet = () => [
  <tru-http-status-badge status="200" />,
  <tru-http-status-badge status="302" />,
  <tru-http-status-badge status="404" />,
  <tru-http-status-badge
    status="500"
    label="Something really went wrong"
    size="normal"
  />
];

const htmlSnippet = liveSnippet;

export default {
  title: title,
  description: description,
  liveSnippet: liveSnippet,
  htmlSnippet: htmlSnippet
};
