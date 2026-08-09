---
title: MG4 Control
description: Manual vehicle settings and reusable driving profiles.
---

![MG4 Control driving settings dashboard on the Automotive emulator](../../../assets/screenshots/control-dashboard.png)

[Source code](https://github.com/malys/MG4Control) · [Releases](https://github.com/malys/MG4Control/releases) · [Issue tracker](https://github.com/malys/MG4Control/issues)

MG4 Control is the suite's manual vehicle-settings app. It groups supported driving,
comfort, and assistance settings into a head-unit interface and lets you save combinations
as profiles.

## What it does

- Changes supported driving mode, regeneration, one-pedal, heating, and ADAS settings
- Saves and applies named profiles
- Detects firmware capabilities rather than presenting one universal catalogue
- Displays refusals and diagnostics in the car, without requiring ADB
- Can open MG4 Tasker when automation is installed

Vehicle writes are high-risk and gated. Park before making changes, confirm the result on
the vehicle, and keep safety-system changes reversible.

The emulator uses an unsupported synthetic firmware ID, so this screenshot shows Control's
explicit compatibility mode. It demonstrates layout only; it does not prove that a setting
is available on a particular car.

## Install

Use a signed APK from [GitHub Releases](https://github.com/malys/MG4Control/releases), then
follow [Sideload an APK](/MG4Suite/tutorial/sideload/). MG4 Control uses privileged car
interfaces and therefore has stricter signing and firmware requirements than an ordinary
Android application.
