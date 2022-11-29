---
title: Model and Column
description: Create table with rex by defining model and columns
---

## Model Attributes

- `table_name` - database table name for model
- `timestamps` - add `created_at` and `updated_at` columns, true by default

## Define Table Columns

- default columns: id, created_at, updated_at

### Column Attributes

- `type` - column type
- `array` - whether the field is array type
- `null` - whether the field is nullable, true by default
- `default` - column default value

### Column Type

| rex data type          | sql data type | sql data type (array) |
| ---------------------- | ------------- | --------------------- |
| pk                     |               |                       |
| id                     |               |                       |
| string                 |               |                       |
| text                   |               |                       |
| integer                |               |                       |
| float                  |               |                       |
| decimal                |               |                       |
| boolean                |               |                       |
| json                   | json          |                       |
| jsonb                  | jsonb         |                       |
| enum(”admin, “member”) |               |                       |
