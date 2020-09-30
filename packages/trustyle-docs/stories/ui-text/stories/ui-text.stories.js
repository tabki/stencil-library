import React from "react";
import { storiesOf } from "@storybook/react";
import * as Docs from "../../../components";
import propertyDocs from "./propertyDocs";

import typesExample from "./types.example.js";

storiesOf("Core", module).add("Text", () => (
  <Docs.PageWrapper>
    <Docs.Example
      title={typesExample.title}
      description={typesExample.description}
      liveSnippet={typesExample.liveSnippet}
      htmlSnippet={typesExample.htmlSnippet}
    />
    <Docs.ApiReference properties={propertyDocs} />
  </Docs.PageWrapper>
));
