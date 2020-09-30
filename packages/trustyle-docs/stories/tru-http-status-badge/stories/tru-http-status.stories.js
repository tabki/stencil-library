import React from "react";
import { storiesOf } from "@storybook/react";
import * as Docs from "../../../components";

import statusExample from "./example.status";

storiesOf("TruRating/Utils", module)
  .addDecorator(story => Docs.storyTemplate(story))
  .add("HTTP Status Badge", () => (
    <Docs.PageWrapper>
      <Docs.Example
        title={statusExample.title}
        description={statusExample.description}
        liveSnippet={statusExample.liveSnippet}
        htmlSnippet={statusExample.htmlSnippet}
      />
      <ui-divider line="none" />
    </Docs.PageWrapper>
  ));
