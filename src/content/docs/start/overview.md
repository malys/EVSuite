---
title: What MG4Suite is
description: Understand the six projects and choose only the parts you need.
---

MG4Suite is a collection of optional, open-source projects for the SAIC MG4 infotainment
system. Each part has a narrow responsibility and can be installed or used independently.

| Project | Purpose | Vehicle access |
| --- | --- | --- |
| [MG4 Control](/MG4Suite/apps/control/) | Manual settings and driving profiles | Reads and writes; writes are safety-gated |
| [MG4 Tasker](/MG4Suite/apps/tasker/) | Local rule automation | Reads and writes; writes are safety-gated |
| [MG4 ABRP Uploader](/MG4Suite/apps/abrp/) | ABRP live telemetry | Read-only |
| [MG4 Simple Launcher](/MG4Suite/apps/simple-launcher/) | Replacement home screen | None |
| [MG4 Swipe Launcher](/MG4Suite/apps/swipe-launcher/) | Bottom-edge app shortcut | None |
| [MG4Hardware](/MG4Suite/apps/hardware/) | Shared vehicle integration library | Used by the three vehicle-aware apps |

## Why separate apps?

You install only the capability you want. Stable builds remain offline unless networking
is the application's core purpose, as it is for ABRP telemetry. The shared MG4Hardware
library keeps firmware routing, property access, and safety rules out of the app layer.

## Supported environment

- SAIC MG4 head unit
- Android Automotive OS 9 on MT2712
- Firmware generations SWI68, SWI69, SWI131, SWI132, SWI133, and SWI165, with capability
  differences handled explicitly
- Landscape interface, designed around the 1920×720 usable head-unit area

Emulator screenshots demonstrate the interface, not vehicle compatibility. Always verify
vehicle-facing functions on the exact firmware generation installed in the car.
