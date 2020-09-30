import React from "react";
import { storiesOf } from "@storybook/react";
import PageWrapper from "../../components/PageWrapper";
import PageTitle from "../../components/PageTitle";
import SectionTitle from "../../components/SectionTitle";
import HtmlView from "../../components/HtmlView";
import storyTemplate from "../../components/storyTemplate";

import * as Docs from "../../components";

const CodeSnippet = () => (
  <tru-list-card-grid>
    <tru-list-card-item id="metric_1">Content 1</tru-list-card-item>
    <tru-list-card-item id="metric_2">Content 2</tru-list-card-item>
    <tru-list-card-item id="metric_3">Content 3</tru-list-card-item>
  </tru-list-card-grid>
);

storiesOf("TruRating/Patterns", module)
  .addDecorator(story => storyTemplate(story))
  .add("tru-list-card-item", () => (
    <PageWrapper>
      <PageTitle title="List-Card Item" />
      <CodeSnippet />
      <HtmlView componentToDisplay={CodeSnippet} />
    </PageWrapper>
  ));
