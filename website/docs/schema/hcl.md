---
title: HCL
description: Rex uses HCL for schema definition
---

A rex schema describes the relational model of the application. It contains one or multiple clients. Each client represents a database connection with its models. Below is an example of schema. [HCL](https://github.com/hashicorp/hcl) is used for a rex schema.

```hcl
client "db" {
}
```
