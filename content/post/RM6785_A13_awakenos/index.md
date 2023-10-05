---
title: awakenOS (Android-13) for RM6785
description: Custom ROM for Realme 6/6i(Indian)/6s/7/Narzo/Narzo 20 Pro/Narzo 30 4G (RM6785)
date: 2023-09-16
slug: ROM/RM6785/awakenOS/A13
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
* 2023-09-16
  * September 2023 ASB
  * Upstreamed kernel to version 4.14.325
  * Imported props configuration from RMX2002_C19
  * Fixed scroll lag that occurred when notifications appeared
  * Merged Bessloudness into AdditionalSettings
  * Switched to VIPER-RE v5.2 (https://t.me/WSTprojects/1735)

## Downloads
[⬇️ Download](https://sourceforge.net/projects/psionicprjkt/files/RM6785/AwakenOS-13/awaken-3.9-triton_void-RM6785-unofficial-2356-20230915.zip/download) | [🌆 Screenshot](https://photos.app.goo.gl/fkP9TsYhnxXbDn9dA)

```
FILE: awaken-3.9-triton_void-RM6785-unofficial-2356-20230915.zip
MD5SUM: a8fd4b07c32668e6b2cc4fde6ad64928
FILESIZE: 1.93 GB (Inc. GApps)
```

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
* 2023-09-02
  * August 2023 ASB
  * Upstreamed kernel to 4.14.323
  * Disable some debugging features
  * More silence MTK logspam
  * Added Force LTE+ CA toggle
  * Added MTK Engineer mode in A.S
  * Follow CABC configs from stock
  * CABC → Screen Battery Optimization
  * Fix sepolicy for CABC/SBO properly
  * Use Bessloudness from hw/mtk
