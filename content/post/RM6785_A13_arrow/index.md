---
title: ArrowOS (Android-13) for RM6785
description: Custom ROM for Realme 6/6i(Indian)/6s/7/Narzo/Narzo 20 Pro/Narzo 30 4G (RM6785)
date: 2022-10-29
slug: ROM/RM6785/ArrowOS/A13
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
* 2022-10-29
  * Upstream kernel .296
  * Update apns-conf from N20P-A12
  * Update media_codecs* from N20P-A12
  * Added realmeDirac & realmeParts
  * Enable perf_profile if Game Mode ON
  * Minor performances improvements

## Downloads
[⬇️ Download](https://sourceforge.net/projects/psionicprjkt/files/RM6785/ArrowOS-13/Arrow-v13.0-RM6785-UNOFFICIAL-20221029-GAPPS.zip/download) | [🌆 Screenshot](https://photos.app.goo.gl/JgTXNyGBh3nuipJo6)

```
FILE: Arrow-v13.0-RM6785-UNOFFICIAL-20221029-GAPPS.zip
MD5SUM: 9a24d87f415a08473a6bcc9ad742c6d6
FILESIZE: 1.3 GB (GApps)
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
* 2022-10-14
  * October 2022 ASB
  * Upstream kernel .295
  * Disabled boosts on power saving mode
  * Merge realmeDirac into realmeParts
  * Rebrand realmePart to AdditionalSettings
  * Add Back Device Performance Profiles
  * Fixed CABC QS stuck/crash/can't changes
  * Fixed Dirac QS stuck/crash/can't changes
  * Enable faeture Qr Code Scanner On LockScreen
  * Update icon app & launcher AdditionalSettings
