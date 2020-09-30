import React from "react";
import { storiesOf } from "@storybook/react";
import * as Docs from "../../../components";

import elevationExample from "./example.elevation";
import interactiveExample from "./example.interactive";

storiesOf("Core", module)
  .addDecorator(story => Docs.storyTemplate(story))
  .add("Cards", () => (
    <Docs.PageWrapper>
      <Docs.Example
        title={elevationExample.title}
        description={elevationExample.description}
        liveSnippet={elevationExample.liveSnippet}
        htmlSnippet={elevationExample.htmlSnippet}
      />
      <ui-divider line="none" />
      <Docs.Example
        title={interactiveExample.title}
        description={interactiveExample.description}
        liveSnippet={interactiveExample.liveSnippet}
        htmlSnippet={interactiveExample.htmlSnippet}
      />
    </Docs.PageWrapper>
  ));
