---
title: PixelOS (Android-13) for RM6785
description: Custom ROM for Realme 6/6i(Indian)/6s/7/Narzo/Narzo 20 Pro/Narzo 30 4G (RM6785)
date: 2023-11-11
slug: ROM/RM6785/PixelOS/A13
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
  * December 2023 ASB
  * Updated KernelSU to v0.7.1
  * Upstreamed Kernel to v4.14.332
  * Fixed misspick Force LTE CA feature
  * Disable some debug/logging feature
  * Set default volume panel on the left side
  * Updated driver ViPER4Android-RE to v0.6.1
  * psionic Lab: Added Set & Lock GPU freq, Logcat Disabler, Indonesian translations & Improve icons
  * Kernel changes: Compiled with AOSP Clang 17.0.4, Import some config from rui1.0, Use 250 to Kernel Timer (like rui1.0) & Silence more log spams

## Downloads
[⬇️ Download](https://sourceforge.net/projects/psionicprjkt/files/RM6785/PixelOS-A13/PixelOS_RM6785-13.0-20231212-0311.zip/download) | [🌆 Screenshot](https://photos.app.goo.gl/Y4K4vTEjfN19gvMb6)

```
FILE: PixelOS_RM6785-13.0-20231212-0311.zip
MD5SUM: c63af8dc1f59955c9beb8a4923d43fb2
FILESIZE: 1.69 GB (Inc. GApps)
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
* 2023-11-12
  * November November 2023 ASB
  * Updated KernelSU to v0.7.0
  * Upstreamed kernel to v4.14.329
  * Fixed CPU freq being locked in Power Save mode, causing lags in certain scenarios [HotFix]
  * Optimized & Increase caching of apps from android-14
  * Rebranded parts to Psionic Lab v2.0
  * Updated parts* with new features
  * Minor animation improvements

* 2023-10-05
  * Backport October 2023 ASB
  * Add back realmeDirac (settings/sounds)
  * Include ViperFX-RE blobs (app not included)
  * Fixed random bluetooth disconnection
  * Upstreamed kernel to version 4.14.326
  * Import powerhint from Rosemary
  * Silence OpenGLRenderer log spam
  * Address more sepolicy denials

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
