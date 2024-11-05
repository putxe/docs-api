/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  openApiSidebar: [
    {
      type: "category",
      label: "API reference",
      link: {
        type: "generated-index",
        title: "API reference",
        description: "API reference",
        slug: "/reference",
      },
      items: require("./docs/reference/sidebar.ts"),
    },
  ],
};

export default sidebars;
