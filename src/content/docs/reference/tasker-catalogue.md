---
title: Tasker conditions and actions
description: The complete MG4 Tasker catalogue, with purpose and firmware-availability guidance.
---

MG4 Tasker shows only entries supported by the detected firmware. A dash in the source
compatibility matrix means an app-local feature that does not depend on vehicle firmware;
it does not mean unsupported. Runtime support still depends on the services and hardware
present in the car, so use the [on-vehicle diagnostic](/MG4Suite/tutorial/tasker-rules/#validate-capabilities-on-the-car)
before relying on a rule.

## Conditions

| Condition | Description |
| --- | --- |
| Bluetooth phone connected | Tests whether one selected paired phone is connected |
| Any Bluetooth device connected | Tests whether at least one Bluetooth device is connected |
| Phone on board (Bluetooth) | Confirms a connected phone remained present after the car started moving |
| Bluetooth hands-free phone | Identifies the phone currently selected for hands-free calls |
| Time of day | Matches a configured daily time range |
| Day of week | Matches selected weekdays |
| Exact date | Matches a calendar date |
| Firmware generation | Matches SWI68, SWI69, SWI131, SWI132, SWI133, or SWI165 |
| Near a place | Compares the last known vehicle position with a saved point and radius |
| Physical buttons | Matches a short or long press on phone, centre, directional/OK, source, volume, track, mute, star, or assistant buttons |
| Outside temperature | Compares the reported exterior temperature |
| Ignition state | Matches locked, off, accessory, running, or starting state |
| Gear in P | Tests whether the vehicle reports Park |
| Speed | Compares current vehicle speed |
| Drive mode | Matches Eco, Normal, Sport, Snow, or Custom |
| Regeneration | Matches the reported regeneration level |
| Energy saving | Tests whether energy-saving mode is enabled |
| Battery level | Compares the traction-battery percentage |
| Charging | Tests whether the vehicle is charging |
| Charge limit | Compares the configured charge limit |
| Climate on | Tests whether the climate system is running |
| Air conditioning on | Tests the A/C compressor state |
| Climate AUTO on | Tests automatic climate mode |
| Air recirculation on | Tests cabin-air recirculation |
| Fan speed | Compares the reported blower level |
| Set temperature | Compares the climate target temperature |
| A window is open | Tests whether any supported window is open |
| Window opening | Compares the reported window position |
| Doors locked | Tests the reported door-lock state |
| Left / right seat heating | Compares each front seat-heating level |
| Steering-wheel heating | Tests or compares steering heating |
| Media volume | Compares the head unit's media volume |
| Screen brightness | Compares display brightness |
| Emergency braking (AEB) | Tests whether AEB is enabled |
| AEB mode | Matches alert-only or alert-and-braking mode |
| AEB sensitivity | Matches low, standard, or high sensitivity |
| ELK mode | Matches off, warning, assist, or emergency lane keeping |
| ELK sensitivity | Matches the lane-assistance sensitivity |
| ACC / TJA mode | Matches adaptive cruise or traffic-jam assistance mode |
| Speed limiter | Matches off, manual, or intelligent limiter mode |
| Traffic sign recognition (TSR) | Tests whether sign recognition is enabled |
| Overspeed alarm | Tests the overspeed warning state |
| Speed limit tone | Tests the speed-limit-change tone state |
| ADAS sound warning | Tests the driver-assistance sound-warning state |

An unavailable reading makes the rule **not evaluable**. It does not count as false and
does not send execution into an ELSE branch.

## Actions

| Action | Description |
| --- | --- |
| Launch an app | Opens a selected installed application |
| Show a notification | Displays a local notification with configured text |
| Speak a message | Uses the installed text-to-speech engine |
| Navigate to | Opens an available navigation app with coordinates, a place, or an address |
| Call webhook | Sends an HTTPS GET or POST request; POST may include JSON |
| Wait | Pauses the ordered sequence for 1–60 seconds without touching the vehicle |
| Apply a profile | Applies a saved MG4 Control profile through the protected bridge |
| Ask for a profile | Opens the MG4 Control profile picker |
| Drive mode | Selects a supported drive mode |
| Regeneration | Selects a regeneration level |
| One pedal driving | Enables or disables one-pedal driving |
| Energy saving | Enables or disables energy-saving mode |
| Left / right seat heating | Sets each supported front-seat heating level by toggle and confirmation |
| Steering-wheel heating | Sets the supported steering-heating level |
| Screen brightness | Sets head-unit display brightness |
| Climate on/off | Starts or stops the climate system |
| Cabin temperature | Sets a target from 17–33 °C, including the vehicle's LO/HI endpoints |
| Air conditioning | Enables or disables A/C |
| Climate AUTO | Enables or disables automatic climate control |
| Air recirculation | Selects the recirculation state |
| Fan level | Sets the blower level |
| Windscreen / rear-window defroster | Controls the respective defroster |
| Windows | Sets a supported window position |
| Door locks | Locks or unlocks supported doors |
| Charge limit | Sets the traction-battery charge limit |
| Allow charging | Enables or prevents charging |
| Scheduled charging | Enables or disables the charging schedule |
| Charging window | Sets the schedule start and end time |
| Battery pre-heating | Enables or disables supported battery pre-heating |
| Media volume | Sets the head unit's media volume |
| Left/right balance | Sets audio balance |
| Front/rear fader | Sets audio fader |
| Tone | Sets supported tone controls |
| Bose sound profile | Selects a supported Bose sound mode |
| 3D effect | Sets the supported spatial-audio effect |
| Speed-adaptive volume | Sets volume compensation by speed |
| Play the radio | Resumes the last radio station without opening its screen |
| Tune the radio | Tunes an AM or FM frequency |
| Emergency braking (AEB) | Enables or disables AEB |
| AEB mode | Selects alert-only or alert-and-braking mode |
| AEB sensitivity | Sets AEB sensitivity |
| ELK mode | Selects the lane-assistance mode |
| ELK sensitivity | Sets lane-assistance sensitivity |
| ACC / TJA mode | Selects adaptive cruise or traffic-jam assistance mode |
| Speed limiter | Selects the supported limiter mode |
| Traffic sign recognition (TSR) | Enables or disables sign recognition |
| Overspeed alarm | Enables or disables the overspeed warning |
| Speed limit tone | Enables or disables the speed-limit-change tone |
| ADAS sound warning | Enables or disables the general ADAS sound warning |
| Lane-departure sound warning | Controls the supported lane-departure audible warning |
| Lane-departure steering vibration | Controls the supported steering vibration warning |
| Call a number | Places a call through the vehicle's paired-phone hands-free service |
| Call a contact | Stores and calls a number selected from the shared Bluetooth phone book |

Vehicle-behaviour actions are marked **When stopped only** and fail closed when speed is
unreadable. The catalogue deliberately contains no vehicle-power-off action.

## Firmware highlights

- Context conditions and local actions are firmware-independent, but still need their
  Android capability: Bluetooth, location, notifications, a speech engine, or an app able
  to handle the intent.
- Seat and steering heating: SWI133, SWI68, and SWI165.
- Battery, charging, climate-power, windows, locks, radio, and calls: primarily SWI68 and
  SWI165, subject to successful runtime service binding.
- ACC/TJA and speed limiter: all listed generations except SWI133.
- Overspeed alarm and speed-limit tone: SWI133 and SWI132.
- ADAS sound warning: all listed generations except SWI133.
- Lane-departure sound and vibration: SWI132.
- Fine audio controls: SWI69, SWI131, and SWI132.

The authoritative per-entry grid is generated from MG4Hardware annotations and is available
in the [firmware compatibility matrix](https://github.com/malys/MG4Tasker/blob/master/MG4Hardware/docs/firmware-matrix.md).
The diagnostic remains the source of truth for the connected vehicle.
