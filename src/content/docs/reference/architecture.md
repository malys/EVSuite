---
title: Architecture and safety
description: How suite applications share vehicle access without becoming one monolith.
---

```text
EVProfile ─────┐
                 ├── EVHardware ── Android car and SAIC runtime services
EVTasker ──────┤
                 │
EVABRPUploader┘

EVLauncher    no vehicle access
EVSwipe     no vehicle access
```

EVHardware owns firmware dispatch, vehicle primitives, the rule catalogue, diagnostics,
and safety gates. The apps own interaction and orchestration. They do not copy raw property
IDs, Binder transactions, or safety decisions from the library.

Vehicle calls are firmware-aware. Runtime behaviour still has to be verified on each
supported generation because service export, caller authentication, and readable properties
can differ.

The suite is intentionally not a super-app. Each APK retains a narrow capability boundary,
its own releases, and its own permissions. Stable/offline variants exclude updater code and
network permission by construction, except where network access is the core function.
