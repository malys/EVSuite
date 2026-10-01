---
title: Before you install
description: Safety, trust, signing, build channels, and vehicle compatibility.
---

:::caution[Park before setup]
Do not install, configure, or interact with third-party applications while driving.
:::

EVSuite is independent software with no warranty and no affiliation with SAIC Motor or MG
Motor. A head unit is part of a vehicle environment: treat installation and every vehicle
setting change more seriously than an ordinary phone app.

MG, MG4 and related marks belong to their respective owners. They are used solely to
identify compatibility with certain vehicles; no official origin, certification or
approval is claimed.

## Choose a release channel

| Channel | Behaviour | Best for |
| --- | --- | --- |
| Stable | No self-updater; install manually | Normal use after you have tested compatibility |
| Unstable | Pre-release testing builds; OTA suspended during audit | Testers who accept regressions |

Where both channels are offered, stable and unstable use different Android application IDs.
Android therefore treats them as **two separate apps**: they can coexist, but permissions,
rules, profiles, favourites, tokens, and other settings must be configured separately.

Download APKs only from the project's own GitHub Releases page. Android accepts an update
only when its signing certificate matches the installed app. A certificate or application
ID migration may require uninstalling the old version first; read that project's release
notes before upgrading.

When moving from unstable to stable, install and configure stable first if you need to check
or copy settings, then preferably uninstall unstable. Keeping both makes it easy to configure
or launch the wrong copy. See [Switch between stable and unstable](/EVSuite_site/tutorial/release-channels/).

## Vehicle-write policy

EVProfile and EVTasker can change supported vehicle settings. Road-behaviour writes are
allowed only when speed is confirmed at **0 km/h**. If speed cannot be read, the operation
fails closed and the app must show the refusal. Multi-step writes are serialized so two
operations cannot interleave.

EVABRPUploader is read-only. EVLauncher and EVSwipe have no vehicle
access.

## Before your first drive

1. Verify the APK source and release notes.
2. Install and configure while parked.
3. Confirm that the interface fits and remains readable on your firmware.
4. Test every function you intend to use before relying on it.
5. Keep a known way to return to the stock launcher and Android settings.
