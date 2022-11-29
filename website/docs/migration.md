---
title: Database Migration
---

## Generate Migration from Schema Changes

```hcl
model "User" {
  column "avatar" {
    type = string
  }
}

```

```sh
rex g migration <migration name>
```

## Running Migrations

```sh
rex db:migrate
```

```sh
rex db:rollback
```
