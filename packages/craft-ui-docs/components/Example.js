import React from "react";
import * as Docs from "./index";
import injectSheet from "react-jss";

const styles = {
  htmlButtonContainer: {
    paddingRight: "1rem",
    paddingBottom: "1rem",
    display: "flex",
    justifyContent: "flex-end"
  }
};

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      htmlViewOpen: false
    };
  }

  toggleHtmlView = () => {
    this.setState({
      htmlViewOpen: !this.state.htmlViewOpen
    });
  };

  render() {
    const title = this.props.title || "";
    const description = this.props.description || "";

    const Div = () => <div />;
    const LiveSnippet = this.props.liveSnippet || Div;

    const HtmlSnippet = this.props.htmlSnippet;

    return (
      <ui-card elevation={0}>
        <ui-card-content padding={2}>
          <LiveSnippet />
        </ui-card-content>
        <ui-divider padding={1} label={title} />
        <ui-card-content padding={2}>
          <ui-text
            dangerouslySetInnerHTML={{ __html: this.props.description }}
          />
        </ui-card-content>

        <div className={this.props.classes.htmlButtonContainer}>
          <ui-text clickable onClick={this.toggleHtmlView} weight="bold">
            {this.state.htmlViewOpen ? "Hide" : "Show"} HTML
          </ui-text>
        </div>

        <div>
          {this.state.htmlViewOpen && (
            <Docs.HTMLView componentToDisplay={HtmlSnippet} />
          )}
        </div>
      </ui-card>
    );
  }
}

export default injectSheet(styles)(Example);
