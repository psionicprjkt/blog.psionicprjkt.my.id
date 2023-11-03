---
title: PixelOS (Android-13) for RM6785
description: Custom ROM for Realme 6/6i(Indian)/6s/7/Narzo/Narzo 20 Pro/Narzo 30 4G (RM6785)
date: 2023-10-05
slug: ROM/RM6785/PixelOS/A13
image: main.png
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
* 2023-10-05
  * Backport October 2023 ASB
  * Add back realmeDirac (settings/sounds)
  * Include ViperFX-RE blobs (app not included)
  * Fixed random bluetooth disconnection
  * Upstreamed kernel to version 4.14.326
  * Import powerhint from Rosemary
  * Silence OpenGLRenderer log spam
  * Address more sepolicy denials

## Downloads
[⬇️ Download](https://sourceforge.net/projects/psionicprjkt/files/RM6785/PixelOS-A13/PixelOS_RM6785-13.0-20231004-1250.zip/download) | [🌆 Screenshot](https://photos.app.goo.gl/Y4K4vTEjfN19gvMb6)

```
FILE: PixelOS_RM6785-13.0-20231004-1250.zip
MD5SUM: 337c3cf654208acd241c2dbc1d723d84
FILESIZE: 1.7 GB (Inc. GApps)
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
* 2023-09-21
  * September 2023 ASB
  * Switch to user build
  * Drop AdditionalSettings & VIPER
  * Upstreamed kernel to version 4.14.325
  * Fixed scroll lag that occurred when notifications appeared
  * Updated KernelSU to latest stable tag
  * Pixel Charging Animation by default

* 2023-08-23
  * August 2023 ASB
  * Upstreamed kernel to 4.14.323
  * Disable some debugging features
  * More silence MTK logspam
  * Added KernelSU support
  * Added Force LTE+ CA toggle
  * Added MTK Engineer mode in A.S
  * Follow CABC configs from stock
  * CABC → Screen Battery Optimization 
  * Use Bessloudness from hw/mtk
  * Minor animation improvements
  * Minor performance improvements

* 2022-10-27
  * October 2022 ASB
  * Update apns-conf from N20P-A12
  * Update media_codecs* from N20P-A12 (Fixed mediaplayback issue)
  * Added realmeDirac & realmeParts
  * Enable perf_profile if Game Mode ON
  * Disabled boosts on power saving mode
