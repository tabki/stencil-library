import React from "react";
import injectSheet from "react-jss";

const styles = {
  container: {
    width: "80%",
    margin: "0 auto",
    marginTop: "3rem"
  },
  page: {
    minHeight: "100%"
  }
};

const PageWrapper = ({ classes, children }) => (
  <div className={classes.page}>
    <div className={classes.container}>{children}</div>
  </div>
);

export default injectSheet(styles)(PageWrapper);
