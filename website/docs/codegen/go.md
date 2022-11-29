---
title: Go
description: rex-client-go
---

- define schema
- code generation `client.generator = "rex-client-go"`

## Create Client

`db.NewClient` with automatically read config by `REX_ENV`, set to `"development"` if missing.

```go
client, err := db.NewClient()
client, err := db.NewClientWithEnv("development")
```

## Create

```go
newPost1 := db.ChangePost().SetTitle("post title #1")
newPost2 := db.ChangePost().SetTitle("post title #2")
newUser := db.ChangeUser().
	SetName("test").
	SetEmail("test@example.com").
	SetPosts(newPost1, newPost2)

user, err := client.CreateUser(newUser)
user, err := client.CreateUserContext(ctx, newUser)
```

## Insert All

`InsertAll` methods generates batch insert sql with `ON CONLICT DO NOTHING` by default. Creating with association will not work with `InsertAll`, which requires `Create` in an iteration.

```go
ids, err := client.InsertAllUser(
	db.ChangeUser().SetName("user #1"),
	db.ChangeUser().SetName("user #2"),
)
```

It converts into following sql,

```sql
INSERT INTO users(name) VALUES('user #1', 'user #2') ON CONFLICT DO NOTHING RETURNING id;
```

## Find By Primary Key

```go
user, err := client.FindUser(1);
user, err := client.FindUserContext(ctx, 1);
```

## Query Builder

Create query builder with `Query` method, query builder can be used to fetch, update, and delete records.

```go
userQuery := client.QueryUser()
userQuery := client.QueryUserContext(ctx)
```

### All

Return all records from query

```go
userQuery := client.QueryUser()
userQuery := client.QueryUserContext(ctx)

users, err := userQuery.All()
```

### First

Return the first record from query

```go
user, err := userQuery.First()
```

### Conditions

Rex generates query conditions based on colum types.

- `EQ` -
- `In` -

```go
userQuery = userQuery.Where(db.ColumnUserID.In([]int{1, 2, 3}))
```

Multiple arguments in `Where` will convert into sql `AND`,

```go
userQuery = userQuery.Where(
	db.ColumnUserName.EQ("test"),
	db.ColumnUserEmail.EQ("test@example.com"),
)
```

### Field Selection

```go
userQuery = userQuery.Select(db.UserID, db.UserName, db.UserEmail)
users, err := userQuery.All() // missing attribute?
```

### Pluck?

```go
emails, err := userQuery.Pluck(db.UserEmail).AllString()
```

### Query Batching

```go

```

### Select Distinct

### Ordering

```go
userQuery = userQuery.Order(db.ColumnUserCreatedAt.Desc(), db.ColumnUserID.Asc())
```

```sql
ORDER BY users.created_at DESC, users.id ASC
```

### Limit and Offset

```go
userQuery = userQuery.Limit(10).Offset(5)
```

### Count

```go
total, err := userQuery.Count()
```

### Joins ?

```go
userQuery.RawJoins("user_posts on users_posts.user_id = users.id")
userQuery.Joins(db.TableUserPosts) // ?

userQuery.Joins().Where()
```

### Aggregation ?

- [ ] select count
- [ ] select sum()
- [ ] select max()

```go
userQuery.GroupBy().Aggregate(db.ColumnUserScore.Sum()) // ???
```

### Exists

```go
exists, err := userQuery.Exists()
```

### Raw Query ?

```go
userQuery.Raw("select ...")
userQuery.SelectRaw("")
userQuery.WhereRaw("")
userQuery.OrderRaw("")
```

### Query Associations

```go
userQuery, err := userQuery.IncludePosts()
userQuery := userQuery.IncludePosts(func (q *postQuery) {
	return q.Limit(3) // first 3 posts for each user
})

users, err := userQuery.All()
```

## Update One

Updating record is also implemented via the `Change` object.

```go
user, err := client.FindUser(1)
userChange := db.ChangeUser().SetName("new name")

err := user.Update(userChange)
err := user.UpdateContext(ctx, userChange)
```

### Update an Attribute to nil

Rex generates `setNillable` methods to support set a field to null.

```go
userChange := db.ChangeUser().setNillableName(nil)

err := user.Update(userChange)
```

## Update Multiple

Update multiple records is done with `UpdateAll` method from query builder.

```go
userQuery := client.QueryUser().Limit(10)
userChange := db.ChangeUser().SetName("new name")

rowsAffected, err := userQuery.UpdateAll(userChange)
```

## Upsert

```go

```

## Delete One

```go
user, err := client.FindUser(1)
err := user.Delete()
err := user.DeleteContext(ctx)

err := client.DeleteUser(1)
err := client.DeleteUserContext(ctx, 1)
```

## Delete Multiple

Delete multiple records is also done with `DeleteAll` method from query builder, similar to `UpdateAll`

```go
userQuery := client.QueryUser().Limit(10)

rowsAffected, err := userQuery.DeleteAll()
```

## Transactions

```go
tx, err := client.Tx(tx)

user, err := tx.CreateUser(db.ChangeUser())
if err != nil {
	err = tx.Rollback();
}

err = tx.Commit()
```

## Locking?

```go
post, err := client.FindPost(1)
err = post.Lock("FOR UPDATE NOWAIT")
err = post.Update(db.ChangePost().IncrementLikeCount(1))
```

## Error Handling
