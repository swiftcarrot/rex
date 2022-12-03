---
title: Custom Type
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Custom JSON type

Rex schema support custom type besides arbitrary `JSON`.

```hcl
model "Order" {
    column "info" {
        type = JSON
    }
}
```

With `type`, rex supports schema defintion for JSON column

```hcl
type "OrderItem" {
    attribute "product" {
        type = string
        null = false
    }
    attribute "qty" {
        type = integer
        null = false
    }
}

type "OrderInfo" {
    attribute "customer" {
        type = string
        null = false
    }
    attribute "items" {
        type  = "OrderItem"
        array = true
        null  = false
    }
}

model "Order" {
    column "info" {
        type = "OrderInfo"
        null = false
    }
}
```

Rex will create a `JSON` column and generates following types.

<Tabs groupId="generator">
  <TabItem value="go" label="Go" default>

```go
type OrderItem struct {
    Product string `json:"product"`
    Qty     int `json:"qty"`
}

type OrderInfo struct {
    Customer string `json:"customer"`
    Items    []OrderItem `json:"items"`
}

type Order struct {
    Info OrderInfo `json:"info"`
}
```

  </TabItem>
  <TabItem value="java" label="Java">

```java
```

  </TabItem>
  <TabItem value="typescript" label="TypeScript">

```typescript
```

  </TabItem>
</Tabs>

Custom JSON type in data change

<Tabs groupId="generator">
  <TabItem value="go" label="Go" default>

```go
orderChange := client.ChangeOrder().SetInfo(db.OrderInfo{
    Customer: "test customer",
    Items: []db.OrderItem{
        db.OrderItem{
            Product: "test product",
            Qty:     12,
        },
    },
})
```

  </TabItem>
  <TabItem value="java" label="Java">

```java
```

  </TabItem>
  <TabItem value="typescript" label="TypeScript">

```typescript
```

  </TabItem>
</Tabs>
