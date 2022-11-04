---
title: Nusantara Project v4.9 (Android-12L) for RM6785
description: Custom ROM for Realme 6/6i(Indian)/6s/7/Narzo/Narzo 20 Pro/Narzo 30 4G (RM6785)
date: 2022-09-28
slug: ROM/RM6785/NusantaraProject-ROM/A12
image: main.png
categories:
    - OFFICIAL
    - DISCONTINUE
tags:
    - ROM
---

## About ROM
The name ” Nusantara ” itself is taken from one of the initials in the country of Indonesia.

The project was started in 2020 by one of the specialist developers in this field, he is Genkzsz11. With the problems with the previous team, he decided to leave and try to change the structural total of his new team by inviting developers from Indonesia who had previously been competent in this field. Initially only a few developers joined, but in time went by finally many Indonesian developers and some developers outside Indonesia tried to register to join the Nusantara Project team.

Nusantara Project is an Android OS provider with many customization features and is lightweight. 100% Free and secure because it uses Android Open Source Project (AOSP) resources.

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
* 2022-09-28
  * September 2022 ASB
  * Fixed IPv6 tethering
  * Add more Dirac Presets
  * Drop MediaTek Log deps
  * Enabled dynamic refresh rate
  * Fixed lag while playing 1080p/2K videos
  * Drop perf profile, Add Back Game Mode Perf
  * Updated CABC configurations from stock RUI
  * Updated lawnchair/icons to latest release (official)
  * Updated vendor blobs and fw to RMX2002_11.C.19
  * Minor performance improvements

## Downloads
[⬇️ Download](https://www.pling.com/p/1500429) | [🌆 Screenshot](https://photos.app.goo.gl/Hd9vN1E8KKV5zAqP7)

```
FILE: Nusantara-v4.9-12L-RM6785-Gapps-28092022-OFFICIAL-0607.zip
MD5SUM: 6e3edfa4e81d1fe803a386fe417f200f
FILESIZE: 1.7 GB (GApps)
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
* 2022-05-17
  * May 2022 ASB
  * Stop nfc_hal HIDL on non-NFC devices
  * Update apns-conf from stock/RMX2001_C18
  * Update build fingerprint from stock/RMX2001_C18 
  * Update haptics & Improve UI performance
  * (AS) Added summary about CABC & Perf Profile
  * (AS) Disable selectable for summary desc/text
  * (AS) Drop Screen Refresh Rate (Already on Display)
  * [Kernel] oppo_charger: Fix slow charge while screen is on
  * [Kernel] oppo_charger: Silence diagnostic messages (dmesg) spam
  * [NOTE] Only Vanilla Build
  * [NOTE] Use NikGApps A12L/SL (https://s.id/14y28)

* 2022-04-22
  * April 2022 ASB
  * Enforcing SELinux
  * Tune ZRAM performance
  * Enabled ZRAM writeback
  * Kang AIDL vibrator service from Ronin
  * [POWER] Updated power HAL from R7 RUI3
  * [POWER] Boost stune on app launch
  * [POWER] Allow raising sched_boost to 6 levels
  * [POWER] Boost foreground to maximum when launching an app 
  * [POWER] Added & Improve interaction hint
  * [POWER] Improve power HAL configs from Begonia
  * Fix/Cleanup deprecated overlays items
  * Fix KPOC/offline charging (w/Pixel-Charging)
  * Metadata partition corruption protection
  * Import props configuration from RMX2001_C18
  * Add support for f2fs on userdata & cahce partition
  * Entire C code is now optimised with armv8-2a-dotprod
  * Inc. FaceUnlock, QuickTap & Touchscreen Gestures
  * [Additional] Update path for CABC (rUI-2)
  * [Additional] Update WM. LayoutParams (FPSInfo)
  * [NOTE] Only Vanilla Build
  * [NOTE] Use NikGApps A12L/SL (https://s.id/14y28)

* 2022-02-19
  * February 2022 ASB
  * Added realmeDirac
  * Fixed DRM Widevine L1
  * Fixed built-in screen recorder
  * Fixed fingerprint (no need rename)
  * Fixed offline charging & use pixel animation
  * Import/Update Power HAL configs from stock
  * Import overlay & props from stock
  * Import apns-configs from stock
  * Switch & Update Lawnchair/icons
  * Misc & performance improvements

* 2022-01-17
  * January 2022 ASB
  * Fixed battery usage
  * Remove all prebuilts apk
  * Inlined latest Pixelated launcher
  * Misc & performance improvements
  * Added f2fs support for userdata partition
  * Rebrand realmeParts to Additional Settings
  * (A.S) Cleanup & update icon
  * (A.S) Drop Double-tap to wake
  * (A.S) Drop Screen refresh rate

* 2021-12-26
  * Rebranded RM6785
  * December 2021 ASB
  * Passed Safetynet by default
  * Included bufferfix (vf lens)
  * Added & Enable fpsInfoSysNode
  * Fixed brightness slider behaviour
  * Update blobs from RMX2001_11_C.15
  * Shipped Lawnchair, Doodle, Xrecorder
  * Added Freeform Multiwindow (dev option)
  * Added Always-On Display (off by default)
  * Added min-max refresh rate config (display)
  * Added Natural and Boosted display color modes
  * Fix coordinates physical power & fp sensor values
