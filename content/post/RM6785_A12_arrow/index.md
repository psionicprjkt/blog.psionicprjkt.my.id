---
title: ArrowOS (Android-12L) for RM6785
description: Custom ROM for Realme 6/6i(Indian)/6s/7/Narzo/Narzo 20 Pro/Narzo 30 4G (RM6785)
date: 2022-10-25
slug: ROM/RM6785/ArrowOS/A12
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
Camera | VoLTE | ✓ | ✓

### Known Issues
* Native video calling (ViLTE)
* Voice over WiFi (VoWiFi)
* USB Audio

## Latest Changelog
* 2022-10-25
  * October 2022 ASB
  * Kernel lineage .295
  * Fixed CABC QS stuck/crash
  * Update icon app & launcher (Parts)

## Downloads
[⬇️ Download](https://sourceforge.net/projects/psionicprjkt/files/RM6785/ArrowOS-A12L/Arrow-v12.1-RM6785-UNOFFICIAL-20221024-GAPPS.zip/download) | [🌆 Screenshot](https://photos.app.goo.gl/eXXWi7WXkjqSPAEA9)

```
FILE: Arrow-v12.1-RM6785-UNOFFICIAL-20221024-GAPPS.zip
MD5SUM: 6d9dc9cc4f14214ecb14638a0c629a32
FILESIZE: 1.4 GB (GApps)
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
* 2022-10-03
  * September 2022 ASB
  * Fixed IPv6 tethering
  * Add more Dirac Presets
  * Drop MediaTek Log deps
  * Introduce MtkInCallService
  * Enabled dynamic refresh rate
  * Increase VC volume steps to 15
  * Added MTK input boosts (Touch Boost)
  * Update status bar start|top padding
  * Update status_bar_height from RMX2001_C19
  * Fixed lag while playing 1080p/2K videos
  * Added support for Wifi display (Miracast)
  * Improve interaction power configurations
  * Drop perf profile, Add Back Game Mode Perf
  * Updated CABC configurations from stock RUI
  * Updated vendor blobs and fw to RMX2002_11.C.19
  * Import Tethering overlay configs from RMX2001_C19
  * Import frameworks overlay configs from RMX2001_C19
  * Minor performance improvements

* 2022-01-06
  * Initial Build
