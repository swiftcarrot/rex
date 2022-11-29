---
title: Java
description: rex-client-java
---

- define schema
- code generation `client.generator = "rex-client-java"`

## Create Client

```java
Client client = new Client();
Client client = new Client("development");
```

## Create One

```java
PostChange newPost1 = ChangePost().setTitle("post title #1");
PostChange newPost2 = ChangePost().setTitle("post title #2");
UserChange newUser := ChangeUser()
	.setName("test")
	.setEmail("test@example.com")
	.setPosts(newPost1, newPost2);

user, err := client.CreateUser(newUser);
```

## Create Multiple ?

```java
users = client.CreateUsers(new UserChange(), new UserChange())
```

## Insert All ??

## Find By Primary Key

```java
User user := client.findUser(1);
```

### Find Multiple By Primary Key ?

```java
List<User> users = client.findUser(1, 2)
```

## Query Builder

```java
UserQuery userQuery = client.queryUser();

List<User> users = userQuery.all();
```

### First

```java
User user = userQuery.first();
```

### Conditions

```java
userQuery = userQuery.where(UserName.eq("test"), UserEmail.eq("test@example.com"));

userQuery = userQuery.where(UserID.in(long[]{1, 2}));
```

### Field Selection

### Pluck?

### Query Batching

### Select Distinct

### Limit and Offset

### Count

### Joins

### Aggregation

### Exists

### Raw Query

### Query Assocations

```java
userQuery = userQuery.includePosts();

userQuery = userQuery.includePosts(postQuery -> {
	postQuery.limit(3)
});
```

## Update One

```java
User user = client.FindUser(1)
UserChange userChange = ChangeUser().setName("new name")

user.Update(userChange)
```

### Update an Attribute to nil

```java
UserChange userChange = ChangeUser().setNullableName(null)
user.Update(userChange)
```

## Update Multiple

```java
UserQuery userQuery = client.queryUser().limit(10)

int rowsAffected = userQuery.updateAll(BuildUser().setName("))
```

## Upsert

```java

```

## Delete One

```java
User user = client.FindUser(1)
user.delete()

client.DeleteUser(1)
```

## Delete Multiple

```java
UserQuery userQuery = client.queryUser().limit(10)
rowsAffected = userQuery.deleteAll()
```

## Transactions

```java

```

## Locking

## Error Handling
