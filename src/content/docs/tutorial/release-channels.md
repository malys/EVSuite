---
title: Switch between stable and unstable
description: Understand side-by-side channels, duplicate configuration, and a clean migration to stable.
---

Stable and unstable builds are deliberately separate Android applications. The unstable
build adds `.unstable` to the stable application ID, so Android can install both at once and
an unstable update cannot replace the stable app.

| Channel | Updates | Configuration |
| --- | --- | --- |
| Stable | Manual, from a tagged release | Its own permissions and app data |
| Unstable | Pre-release channel; may update itself | A second, independent set of permissions and app data |

This separation is useful for testing, but it means configuration is not shared. Configure
each installed copy: ABRP credentials, Tasker rules, launcher favourites, accessibility
access, overlay access, defaults, and other app settings belong only to that copy.

:::note[MG4 Control variants]
MG4 Control currently publishes online and offline release variants instead of the common
stable/unstable pair. They also have distinct IDs (`com.mg4.control` and
`com.mg4.control.offline`) and can coexist, with separate configuration.
:::

## Move from unstable to stable

1. Park the vehicle and disable automation or background services in the unstable copy.
2. Export or note any settings the app supports exporting. Never include ABRP secrets in a
   screenshot or support report.
3. Install the stable APK from the project's tagged GitHub Release.
4. Open stable and grant only the permissions it needs.
5. Recreate or import the configuration, then test it as a fresh installation.
6. For Tasker or Control, test refusal paths and vehicle actions while parked before enabling
   automation.
7. Preferably uninstall the unstable copy once stable is validated. This prevents duplicate
   services, rules, launchers, or nearly identical icons from causing confusion.

If both copies must remain installed for testing, name rules and profiles clearly, enable
background operation in only the intended copy, and verify Android's Home, accessibility,
and overlay selections.

## Recommended suite installation order

1. Install the vehicle or telemetry apps you need: MG4 Control, MG4 Tasker, and MG4 ABRP
   Uploader.
2. Install and configure MG4 Simple Launcher, including a tested route to Files and Settings.
3. Install **MG4 Swipe Launcher last**. At first open it automatically discovers an installed
   MG4 Simple Launcher; confirm the correct channel before granting accessibility and overlay
   access.
