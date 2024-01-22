---
title: awakenOS (Android-14) for RM6785
description: Custom ROM for Realme 6/6i(Indian)/6s/7/Narzo/Narzo 20 Pro/Narzo 30 4G (RM6785)
date: 2024-01-22
slug: ROM/RM6785/awakenOS/A14
image: main.jpg
categories:
    - UNOFFICIAL
tags:
    - ROM
---

## About ROM
Awaken OS brings consistent, fluent and smooth experience with all your must-have customizations, for you, for the community, for everyone.

## Whats Working
F-I | F-II | S-I | S-II
---------|---------|---------|---------
SELinux | Video/Screen/Audio REC | ✓ | ✓
RIL (Data,SMS,Calls) | Audio | ✓ | ✓
Userdata encryption[FDE] | GPS | ✓ | ✓
Fingerprint sensor | NFC | ✓ | ✓ (EU)
WiFi (2.4Ghz/5Ghz) | Sensors | ✓ | ✓
Bluetooth | Video Playback | ✓ | ✓
Camera | VoLTE | ✓ | ✓

### Known Issues
* Native video calling (ViLTE) and Voice over WiFi (VoWiFi)

## Latest Changelog
* 2024-01-22
  * Updated psionic Lab v3.6 (https://telegra.ph/psionic-Lab-v35-35-01-09)
  * Updated KernelSU to v0.7.6
  * Fixed Basic and Device Integrity
  * Fixed charging status in Lockscreen
  * Compiled w/clang 18.0.0 (+FLTO -O3)

## Downloads
[⬇️ Download](https://sourceforge.net/projects/psionicprjkt/files/RM6785/AwakenOS-A14/awaken-4.2-ursa-RM6785-unofficial-0419-20240122.zip/download) | [🌆 Screenshot](https://photos.app.goo.gl/FVVmtXY8CQ8CJadC8)

```
FILE: awaken-4.2-ursa-RM6785-unofficial-0419-20240122.zip
MD5SUM: de27fd8093f1ff8a4deb3059b744998d
FILESIZE: 1.93 GB (Inc. GApps)
```

## Instructions
* If you are coming form any ROM based realmeUI-1.0 (cleanflash)
  * Boot into custom recovery
  * Format Data
  * Flash ROM &  Flash Gapps (Optional)
  * Flash custom recovery based realmeUI-2.0
  * Reboot your device once the installation is done

* If you are on any ROM based realmeUI-2.0 (cleanflash)
  * Boot into custom recovery
  * Flash ROM &  Flash Gapps (Optional)
  * Format Data
  * Reboot your device once the installation is done

* If you use the same ROM (dirtyflash)
  * Boot into custom recovery
  * Flash ROM &  Flash Gapps (Optional)
  * Reboot your device once the installation is done

## Info & Sources
* Device Info
  * Kernel: 4.14.x
  * Chipset: Mediatek MT6785V/CD - MT6785V/CC - ARMv8.2-A (64-bit)

* Sources
  * [psionicprjkt](https://github.com/psionicprjkt)
  * [officialputuid](https://github.com/officialputuid)
  * [realme-mt6785-devs](https://github.com/realme-mt6785-devs)

### Support Group
[psionicprjktchat](https://t.me/psionicprjktchat) | [psionicprjkt channel](https://t.me/psionicprjkt) | [psionicprjktlogs](https://t.me/psionicprjktlogs) managed by [officialputuid](https://t.me/officialputuid)

## Old Changelog
* 2024-01-14
  * Switch to User Build
  * Drop psionic Lab / Parts
  * Standalone realme Dirac
  * Standalone BessLoudness
  * Set off BessLoudness by default
  * BBR as default TCP Congestion
  * Pixel Charging as default KPOC
  * Include ViPER-RE drivers v0.6.1
  * Upstreamed Kernel to v4.14.336
  * Compiled w/Clang 17.0.4 + Full LTO
  * gpufreq 821MHz only for R6 Series

* 2024-01-09
  * January 2024 ASB
  * Updated psionic Lab v3.5 (https://telegra.ph/psionic-Lab-v35-35-01-09)
  * Updated KernelSU to v0.7.5
  * Fixed Basic and Device Integrity
  * Added Spoof Bootloader Locked
  * Upstreamed Kernel to v4.14.335
