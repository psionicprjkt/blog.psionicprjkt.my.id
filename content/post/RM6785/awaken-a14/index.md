---
title: awakenOS (Android-14) for RM6785
description: Custom ROM for Realme 6/6i(Indian)/6s/7/Narzo/Narzo 20 Pro/Narzo 30 4G (RM6785)
date: 2024-04-21
slug: ROM/RM6785/awakenOS/A14
image: main.jpg
categories:
    - UNOFFICIAL
tags:
    - ROM
---

## About ROM
Awaken OS brings consistent, fluent and smooth experience with all your must-have customizations, for you, for the community, for everyone.

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
* 2024-04-21
  * April 2024 ASB (QPR2)
  * Added JamesDSP driver v6.0
  * Added Refresh Rate mode QS tile
  * Fix switch data QST gone after restart
  * Fix audio effects not applying (A14)
  * Updated psionic Lab v3.7 (https://telegra.ph/psionic-Lab-v35-35-01-09) (Fix QPR2)
  * Updated to latest pixel off-charging
  * Updated KernelSU to v0.9.2
  * Upstreamed Kernel to v4.14.343
  * Compiled with ZyC clang 19.0.0
  * Note: "If apps are FC after dirty flash (from Awaken Feb QPR1), go to 'Settings -> Reset option -> Reset app preferences' and remember to re-enable permissions.""

## Downloads
[⬇️ Download](https://sourceforge.net/projects/psionicprjkt/files/RM6785/AwakenOS-A14/awaken-4.4-ursa-RM6785-unofficial-0556-20240421.zip/download) | [🌆 Screenshot](https://photos.app.goo.gl/FVVmtXY8CQ8CJadC8)

```
FILE: awaken-4.4-ursa-RM6785-unofficial-0556-20240421.zip
MD5SUM: eacefb4d09e33ab3940e8cad527db355
FILESIZE: 1.97 GB (Inc. GApps)
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
* 2024-02-16
  * February 2024 ASB
  * Shipped with psionic kernel r2 (https://t.me/psionicprjktlogs/471)
  * Added Basic Call Recorder v1.60

* 2024-01-22
  * Updated psionic Lab v3.6 (https://telegra.ph/psionic-Lab-v35-35-01-09)
  * Updated KernelSU to v0.7.6
  * Fixed Basic and Device Integrity
  * Fixed charging status in Lockscreen
  * Compiled w/clang 18.0.0 (+FLTO -O3)

* 2024-01-14
  * Switch to User Build
  * Drop psionic Lab / Parts
  * Standalone realme Dirac
  * Standalone BessLoudness
  * Set off BessLoudness by default
  * BBR as default TCP Congestion
  * Pixel Charging as default KPOC
  * Include ViPER-RE drivers v0.6.1
  * Upstreamed Kernel to v4.14.336
  * Compiled w/Clang 17.0.4 + Full LTO
  * gpufreq 821MHz only for R6 Series

* 2024-01-09
  * January 2024 ASB
  * Updated psionic Lab v3.5 (https://telegra.ph/psionic-Lab-v35-35-01-09)
  * Updated KernelSU to v0.7.5
  * Fixed Basic and Device Integrity
  * Added Spoof Bootloader Locked
  * Upstreamed Kernel to v4.14.335
