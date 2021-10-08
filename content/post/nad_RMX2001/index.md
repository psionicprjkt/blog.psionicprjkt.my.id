---
title: Nusantara Project v3.3 for RMX2001
description: Custom ROM for Realme 6, 6s, 6i and Narzo (RMX2001/02/03)
date: 2021-10-08
slug: ROM/RMX2001/Nusantara-Project/v3.3
image: Nusantara-Project.png
categories:
    - OFFICIAL
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
Camera | VoLTE | ∂ (Partial) | ∂ (Partial)

### Known Issues
* Night light flickers
* IMS (ViLTE, VoWiFi)
* Extra cameras

## Latest Changelog
* 2021-10-08
  * October ASB (android-11.0.0_r46)
  * Strip off some debug packages
  * Added several Android GO config
  * Disable edge limit control globally
  * Reduce any bug and lags in waking up
  * Shipped with SYNTXforce-究極-R1 Kernel
  * Added several cahced config from Redfin

## Downloads
[⬇️ Download](https://www.pling.com/p/1500429/#files-panel) | [🌆 Screenshot](https://t.me/SYNTXchannel/167) | [XDA Thread](https://forum.xda-developers.com/t/rom-11-official-nusantaraproject-v3-1-30-07-2021.4240463)

```
FILE: Nusantara_v3.2-11-RMX2001-30082021-OFFICIAL-0832
MD5SUM: 709be3921fda6cfc7a0f5e7251bc9fc8
FILESIZE: 707.27 MB (Vanilla)
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
* 2021-08-30
  * Latest Sources & Secpacth (August 2021)
  * Remove Some Prebuilt & Added PMControls
  * Set & Enable GBoard padding & corners
  * Compile Kernel with Proton-clang v13.0
  * Improved status bar (landscape) padding
  * Set QS, Google, Dialer & Full Gesture by default
  * realmeDirac: Fix icon on QS tile
  * realmeParts: Add FPS overlay on QS tile

* 2021-07-29
  * Latest Sources & Secpacth
  * Fix FPS info on QS (system)
  * Update status bar pading overlay
  * Added realme-Dirac Sound Enhancer
  * Address some denials, more improvements & bug fixes
  * Added support for unlimited backup on Google Photos
  * Added prebuilt-apps (AudioREC,SoundREC,DuckDuckGO)
  * Replaced GameMode with PerformanceProfile along with the addition of PowerSaving profile

* 2021-06-14
  * Build inc. NusantaraPapers
  * RealmeParts: Cleanup & Fix tint color icon

* 2021-05-18
  * SELinux Enforcing + Passes safetynet
  * Source built kernel + added performance profile
  * Make padding in overlay status bar look like rUI
  * Fixes can't wakeup device in offline charging mode
  * Added RealmeParts (Realme Settings)
    * RealmeParts: Disable apps on launcher
    * RealmeParts: Cleanup unused functions
    * RealmeParts: Move to system section [settings/system/]
    * RealmeParts: Fix FPS overlay + Add Title Fps (Ex: Fps: 90

* 2021-04-22
  * Source Built Kernel
  * Added RealmeParts -> Additional Settings
  * [AS] Disable Apps On Launcher
  * [AS] Fix FPS Overlay

* 2021-04-16
  * Fix Screen Recording Make System UI Crash
  
* 2021-04-02
  * Enabled Blur by Default
  * Add back devicesettings (realmeparts)
  * Updated power profile config (+battery usage)
