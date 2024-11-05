import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "reference/api-example",
    },
    {
      type: "category",
      label: "Utils",
      link: {
        type: "doc",
        id: "reference/utils",
      },
      items: [
        {
          type: "doc",
          id: "reference/get-root",
          label: "Get the API root",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
