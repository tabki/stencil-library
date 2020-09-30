import React from "react";
import { storiesOf } from "@storybook/react";
import * as Docs from "../../../components";

import basicExample from "./example.basic";

storiesOf("Core", module)
  .addDecorator(story => Docs.storyTemplate(story))
  .add("Inputs", () => (
    <Docs.PageWrapper>
      <Docs.Example
        title={basicExample.title}
        description={basicExample.description}
        liveSnippet={basicExample.liveSnippet}
        htmlSnippet={basicExample.htmlSnippet}
      />
      <ui-divider line="none" />
    </Docs.PageWrapper>
  ));
