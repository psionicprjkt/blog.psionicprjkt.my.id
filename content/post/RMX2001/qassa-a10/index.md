---
title: QASSA v2.2 (Android-10) for RMX2001
description: Custom ROM for Realme 6, 6s, 6i and Narzo (RMX2001/02/03)
date: 2023-08-14
slug: ROM/RMX2001/QASSA-ROM/A10
image: main.jpg
categories:
    - UNOFFICIAL
tags:
    - ROM
---

## About ROM
#keepQASSA
You already know what Q mean!

## Whats Working
F-I | F-II | S-I | S-II
---------|---------|---------|---------
SELinux | Video/Screen/Audio REC | ✓ | ✓
RIL (Data,SMS,Calls) | Audio | ✓ | ✓
Userdata encryption[FDE] | GPS | ✓ | ✓
Fingerprint sensor | NFC | ✓ | ✓ (EU)
WiFi (2.4Ghz/5Ghz) | Sensors | ✓ | ✓
Bluetooth | Video Playback | ✓ | ✓
Camera | VoLTE | ∂ (Partial) | ✓

### Known Issues
* IMS (ViLTE, VoWiFi)
* Extra cameras

## Latest Changelog
* 2023-08-14
  * Juli 2023 ASB
  * Cleanup some properties
  * Silence spammy all logtags
  * Minor animation improvements
  * Minor performance improvements

## Downloads
[⬇️ Download](https://sourceforge.net/projects/psionicprjkt/files/RMX2001/QASSA-A10/qassa-Sisu-v2.2-RMX2001-20230813-0620-GApps.zip/download) | [🌆 Screenshot](https://photos.app.goo.gl/2a9L3gAKo5FfV1568)

```
FILE: qassa-Sisu-v2.2-RMX2001-20230813-0620-GApps.zip
MD5SUM: 3a6e7443a4245e307c41b0c978e44ebe
FILESIZE: 998.5 MB (GApps)
```

## Instructions
* If you are coming form any ROM based realmeUI-1.0 (cleanflash)
  * Boot into custom recovery
  * Format Data
  * Flash ROM &  Flash Gapps (Optional)
  * Reboot your device once the installation is done

* If you use the same ROM (dirtyflash)
  * Boot into custom recovery
  * Flash ROM &  Flash Gapps (Optional)
  * Reboot your device once the installation is done

## Info & Sources
* Device Info
  * Kernel: 4.14.x
  * Chipset: Mediatek MT6785 Helio G90T - ARMv8.2-A (64-bit)

* Sources
  * [psionicprjkt](https://github.com/psionicprjkt)
  * [officialputuid](https://github.com/officialputuid)

### Support Group
[psionicprjktchat](https://t.me/psionicprjktchat) | [psionicprjkt channel](https://t.me/psionicprjkt) | [psionicprjktlogs](https://t.me/psionicprjktlogs) managed by [officialputuid](https://t.me/officialputuid)

## Old Changelog
* 2023-07-23
  * June 2023 ASB

* 2023-03-08
  * Fixed Battery Usage
  * Set CABC off by default 
  * Added Shelter for work profiles
  * Fixed Ok Google w/screen on/off
  * Fixed system icons in lockscreen

* 2023-02-25
  * February 2023 ASB
  * Fix can't connect wifi with 5ghz
  * Update architecture cpu varitans
  * Misc improvements

* 2022-10-15
  * October 2022 ASB
  * SELinux Enforcing
  * Passes SafetyNet out-of-the-box
  * Re-adjusted status bar paddings
  * Cleanup unused overlay configuration
  * Update icon app & launcher AdditionalSettings
  * Minor performance improvements

* 2022-09-15
  * Fix VoLTE
  * Enable Dex2oat
  * Cleanup early SF configurations (smooth improve)

* 2022-09-13
  * September 2022 ASB
  * SELinux Enforcing
  * Passes SafetyNet out-of-the-box
  * AES-256-XTS File Based Encryption (FBE)
  * Added & Fixed Engineer Mode
  * Updated ImsService from phh/stableQ
  * Updated Camera Go v3.8.466520855
  * Updated blobs and configs from B.65_0650_202108181729
  * Fixed Double Tap To Wake (on/off)
