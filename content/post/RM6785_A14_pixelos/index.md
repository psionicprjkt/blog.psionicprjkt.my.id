---
title: PixelOS (Android-14) for RM6785
description: Custom ROM for Realme 6/6i(Indian)/6s/7/Narzo/Narzo 20 Pro/Narzo 30 4G (RM6785)
date: 2023-12-16
slug: ROM/RM6785/PixelOS/A14
image: main.jpg
categories:
    - UNOFFICIAL
tags:
    - ROM
---

## About ROM
PixelOS is an AOSP based ROM, with Google apps included and all Pixel goodies, a fork of Pixel Experience with improvements on the top of it. The Pixel Experience team deserves a lot of credit for their efforts, and we owe them a debt of gratitude for making this ROM possible.

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
* 2023-12-12
  * DDecember 2023 ASB
  * Fixed Voice over LTE (VoLTE)
  * Fixed Basic and Device Integrity 
  * Added Spoof Bootloader Locked
  * Upstreamed Kernel to v4.14.333
  * Updated ViPER-RE driver to v0.6.1
  * Import LMKD and Bluetooth props from other Android 14 mtk devices

## Downloads
[⬇️ Download](https://sourceforge.net/projects/psionicprjkt/files/RM6785/PixelOS-A14/PixelOS_RM6785-14.0-20231215-1047.zip/download) | [🌆 Screenshot](https://photos.app.goo.gl/ecuWdSBtz7cPX5o9A)

```
FILE: PixelOS_RM6785-14.0-20231215-1047.zip
MD5SUM: 0ff3bd3d5ccdf527daae730132622c9f
FILESIZE: 1.92 GB (Inc. GApps)
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
