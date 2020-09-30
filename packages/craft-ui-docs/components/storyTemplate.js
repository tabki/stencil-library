import React from "react";
import { ThemeProvider } from "styled-components";

const storyTemplate = story => (
  <ThemeProvider
    theme={{
      space: [0, 14, 24, 18, 24],
      breakpoints: [32, 48, 64]
    }}
  >
    {story()}
  </ThemeProvider>
);

export default storyTemplate;
