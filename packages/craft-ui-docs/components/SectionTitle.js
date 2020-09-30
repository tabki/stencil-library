import React from "react";

const SectionTitle = ({ title }) => (
  <div>
    <ui-text spacing="wide" transform="uppercase" weight="bold" type="h4">
      {title}
    </ui-text>
    <hr />
  </div>
);

export default SectionTitle;
