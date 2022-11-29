---
title: Association
description: Define associations between tables
---

```hcl
model "Author" {
}

model "Book" {
}

```

## The Types of Associations

- `belongs_to`
- `has_one`
- `has_many`
- `has_many through`
- `has_one through`

### `belongs_to` Association

```hcl
model "Book" {
  belongs_to "author" {}
}
```

add an optional database-level foreign key constraint

```hcl
model "Book" {
  belongs_to "author" {
    foreign_key = true
  }
}
```

### `has_one` Association

```hcl
model "Supplier" {
  has_one "account" {}
}
```

### `has_many` Association

```hcl
model "Author" {
  has_many "books" {}
}
```

### `has_many through` Association

```hcl
model "Physician" {
  has_many "appointments" {}
  has_many "patients" {
    through = "appointments"
  }
}

model "Appointment" {
  belongs_to "physician" {}
  belongs_to "patient" {}
}

model "Patient" {
  has_many "appointments" {}
  has_many "physicians" {
    through = "appointments"
  }
}
```

### `has_one through` Association
