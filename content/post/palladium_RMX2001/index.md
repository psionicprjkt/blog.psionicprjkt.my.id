---
title: PalladiumOS v1.5 for RMX2001
description: Custom ROM for Realme 6, 6s, 6i and Narzo (RMX2001/02/03)
date: 2021-10-16
slug: ROM/RMX2001/PalladiumOS/v1.5
image: PalladiumOS.png
categories:
    - OFFICIAL
tags:
    - ROM
---

## About ROM
Palladium OS is a Custom ROM based on Android 11 and the element palladium.Palladium OS is a community-driven OS. Anyone can request or remove a feature. This flexible system is implemented by a system app,the PalladiumOS-Community with which the users can interact/create polls and posts for discussion. Lastly, this is complemented by the Meteor Drop OTAs. These are exclusive OTAs which add new features and easter eggs inside the OS based on the suggestions from pdC. Enough pondering now, hop in and experience Android at its finest!

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
* 2021-10-16
  * October ASB (android-11.0.0_r46)
  * Disable edge limit control globally
  * Update WifiOverlay from stock rUI2.0
  * realmeParts: Remove SmartCharging notification

## Downloads
[⬇️ Download](https://www.pling.com/p/1513489/) | [🌆 Screenshot](https://t.me/SYNTXchannel/210) | [XDA Thread](https://forum.xda-developers.com/t/rom-11-official-palladiumos-v1-5-16-10-2021.4273873/)

```
FILE: - Palladium-v1.5-RMX2001-20211016-OFFICIAL-VANILLA.zip (MD5SUM: 9cf865ddb4e57f34cd9d65db5a7707f6)
      - Palladium-v1.5-RMX2001-20211016-OFFICIAL-GAPPS.zip (MD5SUM: 85c83e62b9c16a33d6435c2a0dff4805)
FILESIZE: 703 MB (Vanilla), 1 GB (GApps)
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
* 2021-09-07
  * Latest Source, SecPatch (5 August 2021)
  * Added realme-Dirac & realme-Parts
  * Added GcamGO & PMControl Prebuilt-apps
  * Compile Kernel with Proton-clang v13.0
  * Update status bar pading overlay (portrait & landscape)
  * Added support for unlimited backup on Google Photos
  * Fix some sepolicy neverallow (rild, fingerprint, etc)
  * realmeDirac: Fix tint color icon & Correct icon on QS tile

* 2021-05-014
  * Latest Sources & SecPatch
  * SELinux Enforcing
  * Source built kernel
  * Passes safetynet without Magisk
  * Make padding in overlay status bar look good
  * Fixes can't wakeup device in offline charging mode
  * Added RealmeParts → Additional Settings

* 2021-05-08
  * Initial Unofficial Build
