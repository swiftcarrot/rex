# rex

rex is a data layer for relational model

Project Status:

## Documentation

Please visit [https://rex.caitouyun.com](https://rex.caitouyun.com) for the latest documentation, tutorial, and more.

<!-- ```hcl
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
``` -->

## Contributing

[contribute page](https://rex.caitouyun.com/contribute)

- Report an issue:
- Documentation:

## License

Rex is [Apache 2.0 licensed](https://github.com/swiftcarrot/rex/blob/main/LICENSE).

The rex documentation (e.g., `.md` files in the `/website` folder) is Creative Commons licensed.
