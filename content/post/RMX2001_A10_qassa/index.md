---
title: QASSA v2.1 (Android-10) for RMX2001
description: Custom ROM for Realme 6, 6s, 6i and Narzo (RMX2001/02/03)
date: 2023-02-25
slug: ROM/RMX2001/QASSA-ROM/A10
image: main.png
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
* Night light flickers
* IMS (ViLTE, VoWiFi)
* Extra cameras

## Latest Changelog
* 2023-02-25
  * February 2023 ASB
  * Fix can't connect wifi with 5ghz
  * Update architecture cpu varitans
  * Misc improvements

## Downloads
[⬇️ Download](https://sourceforge.net/projects/psionicprjkt/files/RMX2001/QASSA-A10/qassa-v2.1-RMX2001-20230225-0637-GApps.zip/download) | [🌆 Screenshot](https://photos.app.goo.gl/2a9L3gAKo5FfV1568)

```
FILE: qassa-v2.1-RMX2001-20221015-0300-GApps.zip
MD5SUM: fccb4e6d6f2c341a8d1d93c840788c1f
FILESIZE: 950 MB (GApps)
```

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
