---
title: Validation
description: Add validation to rex models
---

```hcl
model "Person" {
  validates "terms_of_service" {
    acceptance = true
    message    = "must be abided"
  }

  validates "name" {
    length {
      minimum = 2
    }
  }

  validates "name" "login" "email" {
    presence = true
  }

  validates "email" {
    uniqueness = true
    message    = "email is required"
  }
}
```

## Custom Validator
