---
title: Tasker conditions and actions
description: The complete EVTasker catalogue, with purpose and firmware-availability guidance.
---

Every condition a rule can test and every action it can run. EVTasker shows only the entries
supported by the detected firmware, so this page is the full set rather than the set your car
offers. Runtime support still depends on the services and hardware present, so use the
[on-vehicle diagnostic](/EVSuite_site/tutorial/tasker-rules/#validate-capabilities-on-the-car)
before relying on a rule.

The authoritative per-entry list is
[generated from the catalogue enums](https://github.com/malys/EVTasker/blob/master/EVHardware/docs/catalogue.md)
and regenerated on every test run, and the per-generation grid beside it is the
[firmware compatibility matrix](https://github.com/malys/EVTasker/blob/master/EVHardware/docs/firmware-matrix.md).
This page follows them.

## Conditions

### Context

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
| Wi-Fi network | Matches the name of the network the head unit has joined |
| Call in progress | Tests whether the head unit has taken the call audio route |
| Drive duration | Compares the minutes elapsed since the ignition came on |
| Random chance | Matches with a configured probability in percent |
| Doors locked | Tests the reported door-lock state |
| Front door open | Tests whether either front door is standing open |
| Data used today | Compares the head unit's data usage since midnight |
| Data used this month | Compares the head unit's data usage since the first of the month |

### Environment

| Condition | Description |
| --- | --- |
| Outside temperature | Compares the reported exterior temperature |
| Weather | Matches the sky where the car is, picked from a list: clear, cloudy, rain, snow, thunderstorm, fog, or wind |

### Driving

| Condition | Description |
| --- | --- |
| Ignition state | Matches locked, off, accessory, running, or starting state |
| Gear in P | Tests whether the vehicle reports Park |
| Speed | Compares current vehicle speed |
| Drive mode | Matches Eco, Normal, Sport, Snow, or Custom |
| Regeneration | Matches the reported regeneration level |
| Odometer | Compares the total distance the car reports |
| Energy saving | Tests whether energy-saving mode is enabled |

### Energy

| Condition | Description |
| --- | --- |
| Battery level | Compares the traction-battery percentage |
| Charging | Tests whether current is flowing |
| Charge limit | Compares the configured charge limit |
| Charging state | Matches unplugged, charging (AC or DC), plugged in but not charging, complete, or fault |
| Scheduled charging on | Tests whether the charging schedule is enabled |
| Charging starts at | Compares the scheduled window's start time |
| Charging stops at | Compares the scheduled window's end time |
| Remaining range | Compares the cluster's own remaining-range estimate |
| Battery pre-heating on | Tests whether battery pre-heating is running |

### Climate and windows

| Condition | Description |
| --- | --- |
| Climate on | Tests whether the climate system is running |
| Air conditioning on | Tests the A/C compressor state |
| Climate AUTO on | Tests automatic climate mode |
| Air recirculation on | Tests cabin-air recirculation |
| Fan speed | Compares the reported blower level |
| Set temperature | Compares the driver-side climate target |
| Passenger temperature | Compares the passenger-side target, which differs only under dual zone |
| ECON mode on | Tests the climate ECON state |
| Windscreen defroster on | Tests the front defroster |
| Rear window defroster on | Tests the rear defroster |
| A window is open | Tests whether any supported window is open |
| Window opening | Compares the widest-open window's position |
| Driver / passenger window opening | Compares one front window's own position |
| Rear left / rear right window opening | Compares one rear window's own position |

### Comfort

| Condition | Description |
| --- | --- |
| Left / right seat heating | Compares each front seat-heating level |
| Steering-wheel heating | Tests steering heating |
| Screen brightness | Compares display brightness |

### Audio

| Condition | Description |
| --- | --- |
| Media playing | Tests whether anything is coming out of the speakers, whichever app plays it |
| Radio playing | Tests whether the **tuner** is playing — a different question from the one above |
| Media volume | Compares the head unit's media volume |

### Driver assistance

| Condition | Description |
| --- | --- |
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

### Profile

| Action | Description |
| --- | --- |
| Apply a profile | Applies a saved EVProfile profile through the protected bridge |
| Ask for a profile | Opens the EVProfile profile picker |

### Driving

| Action | Description |
| --- | --- |
| Drive mode | Selects a supported drive mode |
| Regeneration | Selects a regeneration level |
| One pedal driving | Enables or disables one-pedal driving |
| Energy saving | Enables or disables energy-saving mode |

### Comfort

| Action | Description |
| --- | --- |
| Left / right seat heating | Sets each supported front-seat heating level |
| Steering-wheel heating | Sets the supported steering-heating level |
| Screen brightness | Sets head-unit display brightness |

### Climate and windows

| Action | Description |
| --- | --- |
| Climate on/off | Starts or stops the climate system |
| Cabin temperature | Sets a target from 17–33 °C, including the vehicle's LO/HI endpoints |
| Passenger temperature | Sets the passenger-side target |
| Air conditioning | Enables or disables A/C |
| ECON mode | Enables or disables climate ECON |
| Climate AUTO | Enables or disables automatic climate control |
| Air recirculation | Selects the recirculation state |
| Fan level | Sets the blower level |
| Windscreen / rear-window defroster | Controls the respective defroster |
| All windows, and each window on its own | Sets a window closed or open — offered only after the on-car window probe establishes what the commands do |
| Door locks | Locks or unlocks supported doors |

### Energy

| Action | Description |
| --- | --- |
| Charge limit | Sets the traction-battery charge limit |
| Allow charging | Enables or prevents charging |
| Scheduled charging | Enables or disables the charging schedule |
| Charging window | Sets the schedule start and end time |
| Battery pre-heating | Enables or disables supported battery pre-heating |

### Audio

| Action | Description |
| --- | --- |
| Media volume | Sets the head unit's media volume |
| Media volume, step | Raises or lowers the volume by a number of steps |
| Left / right balance | Sets audio balance |
| Front / rear fader | Sets audio fader |
| Tone | Sets supported tone controls |
| Bose sound profile | Selects a supported Bose sound mode |
| 3D effect | Sets the supported spatial-audio effect |
| Speed-adaptive volume | Sets volume compensation by speed |
| Play the radio | Resumes the last radio station without opening its screen |
| Radio: band, station and play | Puts the tuner on AM, FM or **DAB**, optionally on a typed frequency, and optionally starts playback — see below |
| Next / previous radio station | Steps through the tuner's own list, on whichever band it is on |
| Silence the radio | Mutes the tuner specifically, not whichever source owns the audio |
| Radio play/pause | Toggles the tuner on the play state it reports, and sends nothing when it will not report one |
| Open the radio screen | Brings up the radio screen — **when stopped only** |

### Driver assistance

| Action | Description |
| --- | --- |
| Emergency braking (AEB) | Enables or disables AEB |
| AEB mode | Selects alert-only or alert-and-braking mode |
| AEB sensitivity | Sets AEB sensitivity |
| Stability control (ESC) | Enables or disables stability control |
| Drowsiness warning, and its sensitivity | Controls the driver-attention warning |
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

### System

| Action | Description |
| --- | --- |
| Launch an app | Opens a selected installed application |
| Show a notification | Displays a local notification with configured text |
| Speak a message | Uses the installed text-to-speech engine |
| Navigate to | Opens an available navigation app with coordinates, a place, or an address |
| Ask for confirmation | Asks a yes/no question full-screen and stops the rule unless it is answered yes — see below |
| Send a text message | Sends through the paired phone over Bluetooth MAP |
| Enable / disable a rule | Turns another of your rules on or off, for the next trigger |
| Media control | Play/pause or skip a track on whichever source owns the audio |
| Bluetooth / Wi-Fi | Turns the head unit's radios on or off |
| Call webhook | Sends an HTTPS GET or POST request; POST may include JSON |
| Wait | Pauses the ordered sequence for 1–60 seconds without touching the vehicle |
| Call a number or a contact | Places a call through the vehicle's paired-phone hands-free service |

Vehicle-behaviour actions are marked **When stopped only** and fail closed when speed is
unreadable. The catalogue deliberately contains no vehicle-power-off action.

## Radio: one action for band, station and playback

*Media playing* and *Radio playing* are not the same condition, and both exist on purpose. The
first reads the head unit's audio state, which is **false while the radio plays** — the tuner's
stream is not the music one — so it calls a car with the radio on silent. Use *Radio playing*
for a rule that changes station or silences the news, and *Media playing* for a rule that must
not talk over whatever the driver put on.


Band, frequency and playback are three parts of one instruction, so they are one action:

- **Band** — AM, FM or DAB. Naming a band with no frequency is a complete instruction: the
  tuner moves to that band and lands on the station this car was last heard on there.
- **Frequency** — typed the way a driver says it. `103.5`, `FM 103,5` and `1080 AM` all land.
  Text that names no station is reported as such rather than tuned to something near it, and a
  frequency that disagrees with the band picked above it is refused rather than resolved.
- **Enable radio** — whether the tuner starts playing. Off leaves the station set and silent.

**DAB is reachable only as a band.** A DAB service is addressed by an ensemble and a service
id, not by a frequency, so there is nothing to type — the editor removes the frequency field
once DAB is chosen, and *next / previous station* then moves along the band.

## Confirmation: what silence means

*Ask for confirmation* shows its question full-screen and runs the rest of the rule only on
yes. "No", and leaving the question, stop the rule.

By default nobody answering is also a no: the actions behind a confirmation are the ones you
did not want applied unattended. The switch **No answer counts as yes** turns that around, for
rules that act unless they are stopped — "close the windows in five minutes?" wants to be
answered by silence, where "unlock the doors?" does not. It never applies to a question that
could not be shown: another prompt holding the screen is not somebody declining to answer.

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

The diagnostic remains the source of truth for the connected vehicle.
