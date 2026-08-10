---
title: Install an APK
description: Transfer and install a signed MG4Suite release while parked.
---

Use this guide after you can [open Android Settings](/MG4Suite/tutorial/settings-access/).
You need the stable APK from the selected application's GitHub Releases page and a USB drive.

1. Open the application's GitHub **Releases** page on another trusted device.
2. Choose the stable APK unless you explicitly want a pre-release test build. Stable and
   unstable are separate apps and do not share their configuration.
3. Copy the APK to a USB drive.
4. On the parked vehicle, open Android Settings using the previous tutorial.
5. Enable **Install unknown apps** only for the file source you will use.
6. Search Settings for **storage**, open the USB drive, and select the APK.
7. Read Android's package and permission prompt, then install.
8. Open the app and test it before driving.

:::tip[Updates]
Install an update over an existing app only when the package ID and signing certificate
match. If release notes require a one-time uninstall, settings stored inside that app may
be lost.
:::

If you install several MG4Suite apps, install and configure **MG4 Swipe Launcher last**.
When it first opens, it automatically discovers MG4 Simple Launcher if Simple Launcher is
already present.

When finished, remove the USB drive and disable unnecessary installation permissions.

Next: [understand release channels and migrations](/MG4Suite/tutorial/release-channels/).
