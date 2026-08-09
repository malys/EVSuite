---
title: MG4Hardware library
description: Shared, firmware-aware vehicle access and safety policy for MG4 applications.
---

[Source code](https://github.com/malys/MG4Hardware) · [Releases](https://github.com/malys/MG4Hardware/releases) · [Issue tracker](https://github.com/malys/MG4Hardware/issues)

MG4Hardware is a developer library, not an APK. It is the suite's source of truth for
vehicle-property access, supported firmware generations, condition and action catalogues,
diagnostics, and safety gates.

## Contract

- Consumers do not copy vehicle property IDs or Binder transaction codes.
- Firmware differences are routed explicitly through `FirmwareInfo`.
- Road-behaviour writes are refused unless speed is confirmed at 0 km/h.
- An unreadable speed fails closed.
- Vehicle writes are serialized so multi-step sequences cannot interleave.
- Refusal and failure results are structured for apps to show to the user.

Applications track the head of MG4Hardware `master`. A library change is released first;
each consuming app then updates its submodule pointer and proves it still builds and tests.
