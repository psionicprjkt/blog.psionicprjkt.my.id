---
title: ArrowOS (Android-11) for RMX2001
description: Custom ROM for Realme 6, 6s, 6i and Narzo (RMX2001/02/03)
date: 2022-10-17
slug: ROM/RMX2001/ArrowOS/A11
image: main.png
categories:
    - UNOFFICIAL
    - DISCONTINUE
tags:
    - ROM
---

## About ROM
ArrowOS is an AOSP based project started with the aim of keeping things simple, clean and neat. We added just the right and mostly used stuff that will be actually USEFUL at the end of the day, aiming to deliver smooth performance with better battery life.

## Whats Working
F-I | F-II | S-I | S-II
---------|---------|---------|---------
SELinux | Video/Screen/Audio REC | ✓ | ✓
RIL (Data,SMS,Calls) | Audio | ✓ | ✓
Userdata encryption[FDE] | GPS | ✓ | ✓
Fingerprint sensor | NFC | ✓ | ✓ (EU)
WiFi (2.4Ghz/5Ghz) | Sensors | ✓ | ✓
Bluetooth | Video Playback | ✓ | ✓
Camera | VoLTE | ∂ (Partial) | ∂ (Partial)

### Known Issues
* Night light flickers
* IMS (ViLTE, VoWiFi)
* Extra cameras

## Latest Changelog
* 2022-10-17
  * October 2022 ASB
  * Added more Dirac Presets
  * Passes SafetyNet out-of-the-box
  * Re-adjusted status bar paddings
  * Updated Camera Go v3.8.466520855
  * Cleanup unused overlay configuration
  * Merge realmeDirac into realmeParts
  * Rebrand realmePart to AdditionalSettings
  * Fixed CABC QS stuck/crash/can’t changes
  * Fixed Dirac QS stuck/crash/can’t changes
  * Update icon app & launcher AdditionalSettings


## Downloads
[⬇️ Download](https://sourceforge.net/projects/psionicprjkt/files/RMX2001/ArrowOS-A11/Arrow-v11.0-RMX2001-UNOFFICIAL-20221017-GAPPS.zip/download) | [🌆 Screenshot](https://photos.app.goo.gl/pmLYrc1w682ZGnDX6)

```
FILE: Arrow-v11.0-RMX2001-UNOFFICIAL-20221017-GAPPS.zip
MD5SUM: 87b75d3dacdf96a786aa52ca487b0134
FILESIZE: 1.1 GB (GApps)
```

## Info & Sources
* Device Info
  * Kernel: 4.14.x
  * Chipset: Mediatek MT6785 Helio G90T - ARMv8.2-A (64-bit)

* Sources
  * [psionicprjkt](https://github.com/psionicprjkt)
  * [officialputuid](https://github.com/officialputuid)

### Support Group
[psionicprjktchat](https://t.me/psionicprjktchat) | [psionicprjkt channel](https://t.me/psionicprjkt) | [psionicprjktlogs](https://t.me/psionicprjktlogs) managed by [officialputuid](https://t.me/officialputuid)


## Old Changelog
* 2021-06-18
  * Latest Sources, SecPatch (5 June 2021)
  * Adjust padding statusbar overlay
  * Added some Google Pixel permission for GPhoto Unli
  * Using fp Realme 6 to get same graphic on games by default
  * RealmeParts: Cleanup & Fix tint color icon

* 2021-05-18
  * Latest Sources, SecPatch (5 May 2021)
  * SELinux Enforcing + Passes safetynet
  * Source built kernel + added performance profile
  * Fixes can't wakeup device in offline charging mode
  * Added RealmeParts (Realme Settings)
    * RealmeParts: Disable apps on launcher
    * RealmeParts: Cleanup unused functions
    * RealmeParts: Added Double-tap to wake (on/off)
    * RealmeParts: Move to system section [settings/system/R]
    * RealmeParts: Fix FPS overlay + Add Title Fps (Ex: Fps: 90)

* 2021-04-22
  * Source built Kernel
  * Passes safetynet without Magisk
  * Added RealmeParts → Additional Settings

* 2021-04-07
  * April Security Patch
  * Update FP to Redfin Android 12 (Pixel 5)
  * Fixed Screen Record make SystemUI Crash
 
* 2021-04-04
  * Now EngineerMode Working
  * Passes Safetynet Without Magisk
  * Updated Power Profile Config (+battery usage)
  * Added Option to switch refresh rates in Display Settings

* 2021-03-08
  * Initial Build
  * March Security Patch
  * Use Redfin March 2021 FP
  * ArrowOS Source Upstream (RQ2A.210305.007)
  * Added Always On Display, Gcam GO & Smart Charging
  * Recode Overlay, Density, Misc improvements and much more
  * Drop Additional Setting, Move Screen Refresh Rate to Display
  * Fixed Ok Google, Gallery Crash, Audio No Sound & Video Playback Issue
