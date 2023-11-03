---
title: StyxProject v1.7 (Android-11) for RMX2001
description: Custom ROM for Realme 6, 6s, 6i and Narzo (RMX2001/02/03)
date: 2021-08-18
slug: ROM/RMX2001/StyxProject/A11
image: main.png
categories:
    - UNOFFICIAL
    - DISCONTINUE
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
[⬇️ Download](https://github.com/PutuDevelopers/updates/releases/tag/styxOS-1.7-Athena-RMX2001) | [🌆 Screenshot](https://t.me/psionicprjkt/152) | [XDA Thread](https://forum.xda-developers.com/t/rom-11-unofficial-styx-project-18-08-2021.4321283/)

```
FILE: styxOS-1.7-Athena-RMX2001-UNOFFICIAL-20210818-0556
MD5SUM: -
FILESIZE: 721 MB (Vanilla)
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
* 2021-05-06
  * Latest Sources, SecPatch (5 June 2021)
  * Source Built Kernel
  * Mei Security Patch + Enfrorcing
  * Added RealmeParts -> Additional Settings
  * Safetynet can't fix (for now!)
