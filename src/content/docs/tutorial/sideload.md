---
title: 2. Sideload an APK
description: Transfer and install a signed MG4Suite release while parked.
---

1. Open the application's GitHub **Releases** page on another trusted device.
2. Choose the stable APK unless you explicitly want a pre-release test build.
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

When finished, remove the USB drive and disable unnecessary installation permissions.
