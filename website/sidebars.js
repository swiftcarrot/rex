// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    "introduction",
    {
      type: "category",
      label: "Getting Started",
      link: {
        type: "generated-index",
      },
      items: [
        "getting-started/installation",
        "getting-started/schema",
        "getting-started/client",
      ],
    },
    {
      type: "category",
      label: "Schema Spec",
      link: {
        type: "generated-index",
      },
      items: [
        "schema/hcl",
        "schema/client",
        "schema/model",
        // "schema/type",
        "schema/association",
        // "schema/validation",
      ],
    },
    "migration",
    {
      type: "category",
      label: "Client API",
      link: {
        type: "generated-index",
      },
      items: [
        "client/create",
        "client/read",
        "client/write",
        "client/database",
        "client/transaction",
        "client/locking",
        "client/error",
      ],
    },
    "cli",
    {
      type: "category",
      label: "Tutorial",
      link: {
        type: "generated-index",
      },
      items: ["tutorial/realworld"],
    },
  ],
};

module.exports = sidebars;
