---
title: Before you install
description: Safety, trust, signing, build channels, and vehicle compatibility.
---

:::caution[Park before setup]
Do not install, configure, or interact with third-party applications while driving.
:::

MG4Suite is independent software with no warranty and no affiliation with SAIC Motor or MG
Motor. A head unit is part of a vehicle environment: treat installation and every vehicle
setting change more seriously than an ordinary phone app.

## Choose a release channel

| Channel | Behaviour | Best for |
| --- | --- | --- |
| Stable | No self-updater; install manually | Normal use after you have tested compatibility |
| Unstable | Pre-release testing builds; updater may be present | Testers who accept regressions |

Download APKs only from the project's own GitHub Releases page. Android accepts an update
only when its signing certificate matches the installed app. A certificate or application
ID migration may require uninstalling the old version first; read that project's release
notes before upgrading.

## Vehicle-write policy

MG4 Control and MG4 Tasker can change supported vehicle settings. Road-behaviour writes are
allowed only when speed is confirmed at **0 km/h**. If speed cannot be read, the operation
fails closed and the app must show the refusal. Multi-step writes are serialized so two
operations cannot interleave.

MG4 ABRP Uploader is read-only. MG4 Simple Launcher and MG4 Swipe Launcher have no vehicle
access.

## Before your first drive

1. Verify the APK source and release notes.
2. Install and configure while parked.
3. Confirm that the interface fits and remains readable on your firmware.
4. Test every function you intend to use before relying on it.
5. Keep a known way to return to the stock launcher and Android settings.
