---
title: YAAP (Android-12L) for RM6785
description: Custom ROM for Realme 6/6i(Indian)/6s/7/Narzo/Narzo 20 Pro/Narzo 30 4G (RM6785)
date: 2022-03-28
slug: ROM/RM6785/YAAP/A12
image: main.png
categories:
    - UNOFFICIAL
    - DISCONTINUE
tags:
    - ROM
---

## About ROM
YAAP is a project founded by Adhitya Mohan (@poad42) and Ido Ben-Hur (@idoybh) with the goal of staying close to AOSP in design goals, offer a clean interface, do as much as original development as possible and avoid becoming a kitchen sink and cherry picked mess.

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

## Latest Changelog
* 2022-03-28
  * Initial Build
  * March 2022 ASB
  * Enforcing SELinux
  * Tune ZRAM performance
  * Kang AIDL vibrator service from Ronin
  * Hide GPS logs/debugging by default
  * Update apns-conf from stock C17
  * Merge realmeDirac into Additional Settings
  * Fixup! features Additional Settings

## Downloads
[⬇️ Download](https://sourceforge.net/projects/psionicprjkt/files/RM6785/YAAP-A12L/YAAP-12-HOMEMADE-RM6785-20220328.zip/download) | [🌆 Screenshot](https://t.me/psionicprjkt/370) | [XDA Thread](https://forum.xda-developers.com)

```
FILE: YAAP-12-HOMEMADE-RM6785-20220328.zip
MD5SUM: 0f72730350fee80165a8e3d4d71d8bd5
FILESIZE: 1.6 GB (GApps)
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
