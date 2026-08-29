---
title: Choose your apps
description: Start with what you want to do and install only the apps you need.
---

You do not need to install every EVSuite app. Start with the result you want:

| I want to… | Install | What it changes |
| --- | --- | --- |
| Adjust supported vehicle settings and save profiles | [EVProfile](/EVSuite/apps/profile/) | Can read and change vehicle settings while parked |
| Run actions automatically when conditions are met | [EVTasker](/EVSuite/apps/tasker/) | Can run local actions and supported vehicle changes |
| Send live vehicle data to A Better Routeplanner | [EVABRPUploader](/EVSuite/apps/abrp/) | Reads telemetry and sends it to ABRP; never changes the vehicle |
| Replace the original home screen with large app shortcuts | [EVLauncher](/EVSuite/apps/launcher/) | Changes which app Android opens as Home; no vehicle access |
| Open an app or go Back with a bottom-edge swipe | [EVSwipe](/EVSuite/apps/swipe/) | Uses accessibility and overlay access; no vehicle access |
| Watch battery, range and consumption, and record trips | [EVChargePilot](/EVSuite/apps/chargepilot/) | Reads telemetry and stores trips on the head unit; never changes the vehicle, never uses the network |

## Common combinations

- **ABRP only:** install EVABRPUploader.
- **Manual vehicle controls:** install EVProfile.
- **Automation:** install EVTasker. Add EVProfile only if a rule needs to apply a
  profile saved in Control.
- **Simpler navigation:** install EVLauncher. Add EVSwipe if you also
  want bottom-edge shortcuts.

## Before downloading

The apps target the SAIC MG4 head unit running Android Automotive OS 9. Available vehicle
features differ between firmware versions. Screenshots show the interface in an emulator;
they do not guarantee that every feature works on your car.

Next: [read the safety information before installing](/EVSuite/start/safety/).
