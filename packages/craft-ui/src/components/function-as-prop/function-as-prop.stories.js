{
  /* <button>
    Fire event - Prop
</button>import React from "react";
import { storiesOf } from "@storybook/react";
import PageWrapper from "../../components/PageWrapper";
import PageTitle from "../../components/PageTitle";
import SectionTitle from "../../components/SectionTitle";
import HtmlView from "../../components/HtmlView";
import { Flex, Box } from "grid-styled";
import storyTemplate from "../../components/storyTemplate";
import { Row, Col } from "antd";

const someFunction = word => {
  return console.warn(word);
};

// const Listen = () => <div>hi</div>;
class Listen extends React.Component {
  constructor(props) {
    super(props);
  }
  handleResize(e) {
    console.warn("yay!", e.detail);
  }
  componentDidMount() {
    window.addEventListener("testing123", this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener("testing123", this.handleResize);
  }
  render() {
    const WebComponent = this.props.children;
    return React.cloneElement(this.props.children);
  }
}

const ListItemsSnippet = () => (
  <tru-list-card-grid>
    <tru-list-card-item id="metric_1" someHandler={someFunction}>
      Content 1
    </tru-list-card-item>
    <tru-list-card-item
      events={{ test: lol => console.warn(lol) }}
      id="metric_2"
    >
      Content 2
    </tru-list-card-item>
    <tru-list-card-item id="metric_3">Content 3</tru-list-card-item>
    <tru-list-card-item id="metric_4">Content 3</tru-list-card-item>
  </tru-list-card-grid>
);

storiesOf("Extras/List Items", module)
  .addDecorator(story => storyTemplate(story))
  .add("tru-list-card-item", () => (
    <PageWrapper>
      <PageTitle title="List-Card Item" />

      <ListItemsSnippet />

      <Listen function={someFunction}>
        <tru-list-card-item someHandler="function">hi</tru-list-card-item>
      </Listen>

      <HtmlView componentToDisplay={ListItemsSnippet} />
    </PageWrapper>
  )); */
}
