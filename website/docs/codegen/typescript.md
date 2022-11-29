---
title: TypeScript
description: rex-client-typescript
---

- define schema
- code generation `client.generator = "rex-client-typescript"`
- how to use context api

## Create Client

`db.NewClient` with automatically read config by `REX_ENV`, set to `"development"` if missing.

```typescript
const db = require("./db");

client = db.newClient();
client = db.newClientWithEnv("development");
```

## Create One

```typescript
newPost1 = db.buildPost().setTitle("post title #1");
newPost2 = db.buildPost().setTitle("post title #2");
newUser = db
  .buildUser()
  .setName("Wang Zuo")
  .setEmail("wangzuo@swiftcarrot.com")
  .setPosts(newPost1, newPost2);

user = client.CreateUser(newUser);
```

## Create Multiple

```typescript
users = client.createUsers(db.BuildUser(), db.BuildUser());
```

## Insert All ??

suport bulk insert without timestamps and callbacks (rails insert_all)

## Find By Primary Key

```typescript
user = client.findUser(1);
```

## Query Builder

```typescript
userQuery = client.queryUser();

users = userQuery.all();
```

### First

```typescript
user = userQuery.first();
```

### Conditions

```typescript
userQuery = userQuery.where(
  db.UserName.eq("Wang Zuo"),
  db.UserEmail.eq("wangzuo@swiftcarrot.com")
);

userQuery = userQuery.where(db.UserID.In([1, 2, 3]));
```

### Query Associations

```typescript
userQuery = userQuery.includePosts();
userQuery = userQuery.includePosts((q) => {
  return q.Limit(3); // first 3 posts for each user
});

users = userQuery.all();
```

### Count

```typescript
total = userQuery.count();
```

### Joins

```typescript
userQuery.joins(); // ???
```

### Aggregation

```typescript
userQuery.groupBy().aggregate(db.UserScore.Sum()); // ???
```

## Update One

```typescript
user = client.findUser(1);
input = db.buildUser().setName("new name");

user.update(input);
```

## Update Multiple

```typescript
userQuery = client.queryUser().limit(10);
input = db.buildUser().setName("new name");

rowsAffected = userQuery.updateAll(input);
```

## Upsert

```typescript

```

## Delete One

```typescript
user = client.findUser(1);
user.delete();

client.deleteUser(1);
```

## Delete Multiple

```typescript
userQuery = client.queryUser().limit(10);

rowsAffected = userQuery.deleteAll();
```

## Transactions

```typescript

```
