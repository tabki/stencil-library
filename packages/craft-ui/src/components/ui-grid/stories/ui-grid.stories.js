import React from "react";
import { storiesOf } from "@storybook/react";
import * as Docs from "../../../components";

import wrapExample from "./example.wrap";
import responsiveExample from "./example.responsive";

storiesOf("Core", module)
  .addDecorator(story => Docs.storyTemplate(story))
  .add("Grid", () => (
    <Docs.PageWrapper>
      <Docs.Example
        title={wrapExample.title}
        description={wrapExample.description}
        liveSnippet={wrapExample.liveSnippet}
        htmlSnippet={wrapExample.htmlSnippet}
      />
      <ui-divider line="none" />
      <Docs.Example
        title={responsiveExample.title}
        description={responsiveExample.description}
        liveSnippet={responsiveExample.liveSnippet}
        htmlSnippet={responsiveExample.htmlSnippet}
      />
    </Docs.PageWrapper>
  ));
