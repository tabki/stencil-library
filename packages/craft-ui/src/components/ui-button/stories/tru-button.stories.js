import React from "react";
import { storiesOf } from "@storybook/react";
import * as Docs from "../../../components";

import typeExample from "./example.type";
import colorsExample from "./example.colors";

storiesOf("Core", module)
  .addDecorator(story => Docs.storyTemplate(story))
  .add("Buttons", () => (
    <Docs.PageWrapper>
      <Docs.Example
        title={typeExample.title}
        description={typeExample.description}
        liveSnippet={typeExample.liveSnippet}
        htmlSnippet={typeExample.htmlSnippet}
      />
      <ui-divider line="none" />
      <Docs.Example
        title={colorsExample.title}
        description={colorsExample.description}
        liveSnippet={colorsExample.liveSnippet}
        htmlSnippet={colorsExample.htmlSnippet}
      />
    </Docs.PageWrapper>
  ));
