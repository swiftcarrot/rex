# rex

rex is a data layer for relational model

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

```sh
REX_ENV=development rex db:create
rex g client
rex g migration init
rex db:migrate
rex db:rollback
rex db:drop
```

## Language and Database Support

| generator             | adapter   | status |
| --------------------- | --------- | ------ |
| rex-client-go         | sqlite    |        |
|                       | mysql     |        |
|                       | postgresl |        |
| rex-client-java       | sqlite    |        |
|                       | mysql     |        |
|                       | postgresl |        |
| rex-client-typescript | sqlite    |        |
|                       | mysql     |        |
|                       | postgresl |        |

# License

Rex is [Apache 2.0 licensed](./LICENSE).

The rex documentation (e.g., `.md` files in the `/website` folder) is Creative Commons licensed.
