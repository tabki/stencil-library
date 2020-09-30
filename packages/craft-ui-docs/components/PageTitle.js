import React from "react";
import injectSheet from "react-jss";

const styles = {};

const PageTitle = ({ title }) => (
  <div>
    <ui-text
      weight="bold"
      spacing="wide"
      transform="uppercase"
      color="light"
      type="h3"
    >
      {title}
    </ui-text>
    <hr />
  </div>
);

export default injectSheet(styles)(PageTitle);
