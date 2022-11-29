// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    "introduction",
    {
      type: "category",
      label: "Quick Start",
      link: {
        type: "generated-index",
      },
      items: [
        "quick-start/installation",
        "quick-start/schema",
        "quick-start/go",
        "quick-start/java",
        "quick-start/typescript",
      ],
    },
    {
      type: "category",
      label: "Schema Syntax",
      link: {
        type: "generated-index",
      },
      items: [
        "schema/hcl",
        "schema/client",
        "schema/model",
        "schema/association",
        "schema/validation",
      ],
    },
    "migration",
    {
      type: "category",
      label: "Code Generation",
      link: {
        type: "generated-index",
      },
      items: [
        "codegen/client",
        "codegen/query",
        "codegen/change",
        "codegen/transaction",
        "codegen/locking",
        "codegen/error",
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
