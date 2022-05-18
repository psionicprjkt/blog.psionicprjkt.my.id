---
title: PixelOS (Android-12L) for RM6785
description: Custom ROM for Realme 6/6i(Indian)/6s/7/Narzo/Narzo 20 Pro/Narzo 30 4G (RM6785)
date: 2022-05-18
slug: ROM/RM6785/PixelOS/A12
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
* IPv6 Tethering
* Native video calling (ViLTE)
* Voice over WiFi (VoWiFi)

## Latest Changelog
* 2022-05-18
  * May 2022 ASB
  * Silence spammy all logtags
  * Update value for Brightness Doze / AOD
  * Update haptics & Improve UI performance
  * Update apns-conf from stock/RMX2001_C18
  * Update build fingerprint from stock/RMX2001_C18 
  * Switch to skiaglthreaded renderthread backend
  * Fixed low mic volume & location indicator fp
  * [AS] Added summary about CABC & Perf Profile
  * [AS] Disable selectable for summary desc/text
  * [AS] Drop Screen Refresh Rate (Already on Display)
  * [Kernel] Merge kernel 4.14.279 stable release
  * [Kernel] oppo_charger: Fix slow charge while screen is on
  * [Kernel] oppo_charger: Silence diagnostic messages (dmesg) spam

## Downloads
[⬇️ Download](https://www.pling.com/p/1793481) | [🌆 Screenshot](https://t.me/psionicprjkt) | [XDA Thread](https://forum.xda-developers.com)

```
FILE: PixelOS_RM6785-12.1-20220517-1241.zip
MD5SUM: 8cf4455141e654e1794a79d34ab3915e
FILESIZE: 1.8 GB (Inc. GApps)
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
* 2022-04-16
  * April 2022 ASB
  * Enforcing SELinux
  * Tune ZRAM performance
  * Kang AIDL vibrator service from Ronin
  * Updated power HAL from R7 RUI3
  * Improve power HAL configs from Begonia
  * Fix/Cleanup deprecated overlays items
  * Fix KPOC/offline charging (w/Pixel-Charging)
  * Hide GPS logs/debugging by default
  * Metadata partition corruption protection
  * Entire C code is now optimised with armv8-2a-dotprod
  * Inc. FaceUnlock, QuickTap & Touchscreen Gestures
  * Enable perf media stagefright configuration 
  * Additional Settings Changes:
  * Update path for CABC (rUI-2)
  * Update WM. LayoutParams
  * Added back Game Mode
  * Enable Perf Mode if Game Mode ON
  * Drop unsupported/unused (DCD/HBM/sRGB)

* 2022-02-14
  * Import/Update Power HAL configs from C17
  * Fix a derp in default pinner overlay
  * Added missing liboemcrypto'so (Fixed Widevine L1)

* 2022-02-13
  * February 2022 ASB
  * Update blobs from C17
  * Added monet bootanimation
  * Fixed fingerprint (No need rename)
  * Added realmeDirac (thanks to @sarthakroy2002)
  * Additional Settings:
  * (A.S) Bringback perf profile
  * (A.S) Bringback old FPS info design
  * (A.S) Added icon for Ambient Display

* 2022-02-04
  * January 2022 ASB
  * Remove all prebuilts apk
  * Passed Safetynet by default
  * Fix built-in screen recording
  * Update BUILD_FP from C17
  * Import prop config* from C17
  * Import overlays config* from C17
  * Import WifiResOverlay config* from C17
  * Added f2fs support for userdata partition
  * configs: Boost stune on app launch & top-app
  * Switch to skiaglthreaded renderthread backend
  * Enable Quick Tap & Touchscreen gestures (System→Gestures)
  * Rebrand realmeParts to Additional Settings
  * (A.S) Cleanup & update icon
  * (A.S) Drop Double-tap to wake (Move → Display)
  * (A.S) Drop Screen refresh rate (Move → Display)

* 2022-01-03
  * Rebranded RM6785
  * December 2021 ASB
  * Included bufferfix (vf lens)
  * Passed Safetynet by default
  * Fix brightness slider behaviour
  * Fix battery usage & display fliker
  * FIx Near-field communication (NFC)
  * Added Doodle, GCamGO, PMC, Xrecorder
  * Added Freeform Multiwindow (dev option)
  * Added Always-On Display (off by default)
  * Added min-max refresh rate config (display)
  * Added OpenGL ES and update Vulkan dEQP feature flags
  * Fix coordinates physical power & fp sensor values (fp indicator)
