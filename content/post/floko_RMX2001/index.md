---
title: FlokoROM v4 for RMX2001
description: Custom ROM for Realme 6, 6s, 6i and Narzo (RMX2001/02/03)
date: 2021-06-21
slug: ROM/RMX2001/FlokoROM/v4
image: FlokoROM.png
categories:
    - UNOFFICIAL
    - DISCONTINUE
tags:
    - ROM
---

## About ROM
FlokoROM is released at least once a month. Updates include latest security patch, and new features. Now FlokoROM v4 is based on Android 11.
FlokoROM is based on AOSP, the Android Open Source Project. There is no bloatware, spyware, or annoying notifications from OEMs. Taste clean Android Experience.
FlokoROM has many customization features. such as Network activity indicator, OmniSwitch Recents, Transparency and so on.

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
* 2021-06-21
  * Latest Sources, SecPatch (5 June 2021)
  * Added some Google Pixel permission for GPhoto Unli
  * Using fp Realme 6 to get same graphic on games by default
  * Fixed Blur, long press key reboot, & audio in Wifi calls
  * Drop Bromite Browser, Matlog, Audio Rec LOS
  * Added GCam GO, OOS Launcher, Via, Audio Rec & Pulse Music
  * Added RealmeParts (Realme Settings)
    * RealmeParts: Disable apps on launcher
    * RealmeParts: Add Title Fps (Ex: fps: 90)
    * RealmeParts: Cleanup unused functions [dc,hbm,srgb]
    * RealmeParts: Move to system section [settings/system/R]
  * Replaced GameMode with PerformanceProfile along with the addition of PowerSaving profile

## Downloads
[⬇️ Download](#DISCONTINUE) | [🌆 Screenshot](https://t.me/SYNTXchannel/120) | [XDA Thread](https://forum.xda-developers.com/t/rom-11-unofficial-flokorom-v4-0-21-06-2021-discontinued.4281703)

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
* 0000-00-00
  * -
