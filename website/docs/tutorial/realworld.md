---
title: RealWorld project with rex
---

## The "RealWorld" Project

- RealWorld project - "The mother of all demo apps"
- https://github.com/gothinkster/realworld
- https://demo.realworld.io/

source: [github.com/swiftcarrot/realworld-rex](https://github.com/swiftcarrot/realworld-rex)

## Create Rex Schema

### Define client

```hcl
client "db" {
  adapter = "postgresql"
  generator = "rex-client-go"
}
```

### Define Base Models

```hcl
model "User" {
  column "email" {
    type = string
  }
  column "username" {
    type = string
  }
  column "password" {
    type = string
  }
  column "image" {
    type = string
    default = "https://api.realworld.io/images/smiley-cyrus.jpeg"
  }
  column "bio" {
    type = text
  }

  has_many "articles" {
    through = "user_articles"
  }
  has_many "comments" {}
}

model "Article" {
  column "slug" {
    type = string
  }
  column "title" {
    type = string
  }
  column "description" {
    type = string
  }
  column "tagList" {
    type = integer
    array = true
  }

  has_many "comments" {}
  has_many "users" {
    through = "user_articles"
  }
}


model "Comment" {
  column "body" {
    type = text
  }

  belongs_to "article" {}
  belongs_to "user" {}
}

```

### Add Association Models

```hcl
model "UserArticle" {}
model "UserFavorite" {}
model "UserFollow" {}
```

## Setup Database

Create database with

```sh
rex db:create
```

Generate the initial migration with

```sh
rex g migration init
```

Run database migrtion,

```sh
rex db:migrate
```

## Generate go client

```sh
rex g client
```

## Create API server with chi router

https://github.com/go-chi/chi

```go
type Server struct {
  client *db.Client
}
```

## Authentication

## Articles
