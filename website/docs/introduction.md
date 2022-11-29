---
sidebar_position: 1
title: Introduction
---

# Introduction

rex is a data layer for relational models

```hcl
client "db" {
  generator = "rex-client-go"
  adapter   = "postgresql"

  config "development" {
    database = "blog_development"
    user     = "postgres"
    password = "postgres"
  }
  config "production" {
    url = env("DATABASE_URL")
  }

  model "Post" {
    column "title" {
      type = string
    }
    column "content" {
      type = text
    }
  }
}
```
