---
title: ArrowOS A11 for RMX2001
description: Custom ROM for Realme 6, 6s, 6i and Narzo (RMX2001/02/03)
date: 2021-06-18
slug: ROM/RMX2001/ArrowOS/A11
image: ArrowOS.png
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
* 2021-06-18
  * Latest Sources, SecPatch (5 June 2021)
  * Adjust padding statusbar overlay
  * Added some Google Pixel permission for GPhoto Unli
  * Using fp Realme 6 to get same graphic on games by default
  * RealmeParts: Cleanup & Fix tint color icon

## Downloads
[⬇️ Download](#DISCONTINUE) | [🌆 Screenshot](https://t.me/SYNTXchannel/109) | [XDA Thread](https://forum.xda-developers.com/t/rom-11-unofficial-arrowos-11-0-18-06-2021-discontinued.4244049)

```
FILE: -
MD5SUM: -
FILESIZE: -
```

## Info & Sources
* Device Info
  * Kernel: 4.14.x
  * Chipset: Mediatek MT6785 Helio G90T - ARMv8.2-A (64-bit)

* Sources
  * Common Tree: [android_device_realme_mt6785-common](https://github.com/officialputuid/android_device_realme_mt6785-common)
  * Device Tree: [android_device_realme_RMX2001](https://github.com/officialputuid/android_device_realme_RMX2001)
  * Kernel Tree: [android_kernel_realme_RMX2001](https://github.com/officialputuid/android_kernel_realme_RMX2001)
  * Proprietary blobs: [proprietary_vendor_realme](https://github.com/officialputuid/proprietary_vendor_realme)
>  Special Thanks to [SamarV121](https://github.com/SamarV-121) for Tree & [HimanshuTyagi](https://github.com/ManshuTyagi) for Many Help

### Support Group
[@SYNTXChat](https://t.me/SYNTXchat) | [SYNTXChannel](https://t.me/SYNTXchannel) | [SYNTXLogs](https://t.me/SYNTXlogs) managed by [officialputuid](https://t.me/officialputuid)


## Old Changelog
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
