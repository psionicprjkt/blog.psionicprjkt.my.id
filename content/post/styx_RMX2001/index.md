---
title: StyxProject v1.7 for RMX2001
description: Custom ROM for Realme 6, 6s, 6i and Narzo (RMX2001/02/03)
date: 2021-08-18
slug: ROM/RMX2001/StyxProject/v1.7
image: StyxProject.png
categories:
    - UNOFFICIAL
tags:
    - ROM
---

## About ROM
Styx Project is a distribution that aims to be really minimalistic and beautiful right out of the box. We merge patches from master and other sources to give you the best performance out of your device.
We work on the ROM to make it extremely stable; we believe in the user not facing any issues regarding their device, flash and forget.
The ROM doesn't ship with any sort of bloat, and many hardening patches are in the process of being merged to give you the most secure and bloatfree experience possible.
With AOSP security patches, Linux and CodeAurora tags being merged within hours of its release, you are sure to receive the latest security fixes and updates on your device as soon as possible!

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
* Offline charging (KPOC)
> But it can still be charged, only the animation doesn’t work!

## Latest Changelog
* 2021-08-18
  * Initial User Build
  * Fixed safetynet by default
  * Added realme-Dirac & realme-Parts
  * Latest Sources & Secpacth (August 2021)
  * Update status bar pading overlay (portrait & landscape)
  * Added support for unlimited backup on Google Photos
  * Compile kernel with clang 11 with ThinLTO enabled (improves performance)

## Downloads
[⬇️ Download](https://github.com/PutuDevelopers/updates/releases/tag/styxOS-1.7-Athena-RMX2001) | [🌆 Screenshot](https://t.me/SYNTXchannel/152) | [XDA Thread](https://forum.xda-developers.com/t/rom-11-unofficial-styx-project-18-08-2021.4321283/)

```
FILE: styxOS-1.7-Athena-RMX2001-UNOFFICIAL-20210818-0556
MD5SUM: -
FILESIZE: 721 MB (Vanilla)
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
* 2021-05-06
  * Latest Sources, SecPatch (5 June 2021)
  * Source Built Kernel
  * Mei Security Patch + Enfrorcing
  * Added RealmeParts -> Additional Settings
  * Safetynet can't fix (for now!)
