---
title: PixelExperience A11 for RMX2001
description: Custom ROM for Realme 6, 6s, 6i and Narzo (RMX2001/02/03)
date: 2021-02-05
slug: ROM/RMX2001/PixelExperience/A11
image: PE.png
categories:
    - UNOFFICIAL
    - DISCONTINUE
tags:
    - ROM
---

## About ROM
PixelExperience is an AOSP based ROM, with Google apps included and all Pixel goodies (launcher, wallpapers, icons, fonts, boot animation). Our mission is to offer the maximum possible stability and security, along with essential and useful features for the proper functioning of the device, Based on Android 10/11.

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
* 2021-02-05
  * Latest Sources, SecPatch (5 February 2021)
  * Fix Fingerprint Gone After Reboot
  * Fix & Tune some Brightnes Overlay
  * Remove Minimum Screen Rate on Display
  * Recode Device Settings to Additional Settings

## Downloads
[⬇️ Download](#DISCONTINUE) | [🌆 Screenshot](https://t.me/SYNTXchannel/) | [XDA Thread](https://forum.xda-developers.com/t/rom-11-unofficial-pixelexperience-plus-26-03-2021-discontinued.4246375)

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
* 2021-01-28
  * Fist Build, Jan Sec Patch
  * Latest DT & Latest PE Sources
