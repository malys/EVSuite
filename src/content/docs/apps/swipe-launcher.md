---
title: MG4 Swipe Launcher
description: Open a chosen app from a bottom-edge swipe gesture.
---

![MG4 Swipe Launcher permission setup on the Automotive emulator](../../../assets/screenshots/swipe-launcher.png)

[Source code](https://github.com/malys/MG4SwipeLauncher) · [Releases](https://github.com/malys/MG4SwipeLauncher/releases) · [Issue tracker](https://github.com/malys/MG4SwipeLauncher/issues)

MG4 Swipe Launcher provides two bottom-edge swipe areas. One performs Back and the other
opens a chosen application, with an option to swap the sides. It pairs naturally with MG4
Simple Launcher but can target another app.

The app uses Android accessibility and overlay capabilities, but no vehicle interface.
Because the stock steering-wheel key broadcast is not authenticated, MG4Suite does not
treat it as a trusted control channel.

## Configure deliberately

- Choose the target application.
- Decide whether Back belongs on the left or right.
- Keep the visible swipe labels until the layout is familiar.
- Do not use an overlay while the vehicle is moving.

See [Replace the home screen](/MG4Suite/tutorial/launchers/) for the combined launcher setup.
