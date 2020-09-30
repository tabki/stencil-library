import React from "react";
import { storiesOf } from "@storybook/react";
import * as Docs from "../../../components";

import standaloneExample from "./example.standalone";
import sizesExample from "./example.sizes";

storiesOf("Core", module)
  .addDecorator(story => Docs.storyTemplate(story))
  .add("Badges", () => (
    <Docs.PageWrapper>
      <Docs.Example
        title={standaloneExample.title}
        description={standaloneExample.description}
        liveSnippet={standaloneExample.liveSnippet}
        htmlSnippet={standaloneExample.htmlSnippet}
      />
      <ui-divider line="none" />
      <Docs.Example
        title={sizesExample.title}
        description={sizesExample.description}
        liveSnippet={sizesExample.liveSnippet}
        htmlSnippet={sizesExample.htmlSnippet}
      />
    </Docs.PageWrapper>
  ));
