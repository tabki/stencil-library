import React from "react";
import injectSheet from "react-jss";
import brace from "brace";
import AceEditor from "react-ace";
import jsxToString from "jsx-to-string";
import ReactDOMServer from "react-dom/server";
var beautify_html = require("js-beautify").html;
import SectionTitle from "./SectionTitle";
import "brace/mode/html";
import "brace/theme/xcode";

const HTMLView = ({ height, componentToDisplay }) => {
  const componentMarkup = ReactDOMServer.renderToStaticMarkup(
    componentToDisplay()
  );

  const formattedComponentMarkup = beautify_html(componentMarkup);
  return (
    <div>
      <ui-divider line="dashed" />
      <AceEditor
        height={height || "200px"}
        width="100%"
        mode="html"
        theme="xcode"
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: false }}
        readOnly={true}
        value={formattedComponentMarkup}
      />
    </div>
  );
};

export default HTMLView;
