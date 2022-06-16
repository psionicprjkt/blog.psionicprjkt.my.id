---
title: Nusantara Project LTS (Android-11) for RMX2001
description: Custom ROM for Realme 6, 6s, 6i and Narzo (RMX2001/02/03)
date: 2022-05-15
slug: ROM/RMX2001/NusantaraProject-ROM/A11
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
Camera | VoLTE | ∂ (Partial) | ✓

### Known Issues
* Night light flickers
* IMS (ViLTE, VoWiFi)
* Extra cameras

## Latest Changelog
* 2022-05-15
  * Fixup! DT2W (typo)
  * Included 64MP Enabler RMX2001
  * (Additional Settings) Update parts icon

## Downloads
[⬇️ Download](https://www.pling.com/p/1793596) | [🌆 Screenshot](https://t.me/psionicprjktchat) | [XDA Thread](https://forum.xda-developers.com/t/rom-11-official-nusantaraproject-v3-4-14-11-2021.4240463)

```
FILE: Nusantara-LTS-11-RMX2001-15052022-OFFICIAL-0508.zip
MD5SUM: d052caefcfad86a2d71b888e882a6d88
FILESIZE: 714 MB (Vanilla)
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
* 2022-03-13
  * May 2022 ASB
  * Included bufferfix
  * De-commonize tree from mt6785-common (RMX2001)
  * Update value for Brightness Doze / AOD
  * Implement/Adapt DT2W on device-tree
  * Rebrand RealmeParts to Additional Settings (AS)
  * (AS) Update & Fix tint color icons
  * (AS) Fix can't allow perms if fps info on
  * (AS) Added icon for Ambient Display Gestures
  * (AS) Added summary about CABC & Perf Profile
  * (AS) Disable selectable for summary desc/text
  * (AS) Drop unsupported/unused features (DC/HBM/sRGB)
  * (AS) Drop Double-Tap to wake switch (now @Display)
  * [Kernel] oppo_charger: Fix slow charge while screen is on
  * [Kernel] oppo_charger: Silence diagnostic messages (dmesg) spam

* 2022-03-13
  * March 2022 ASB
  * Added NusaPapers
  * Default: Lawnchair/icons
  * Added my configs vendor/extra
  * Update cstm configs QS Tile 12/12
  * Cleanup & Revert useless commit
  * Set arch variant to armv8-2a-dotprod
  * [RP] Drop FPSInfo (Better inbuilt fpsinfo @QS)
  * [RP] Update home icon & Added ambient icon
  * [Kernel] Regen & Change LV to psionicprjkt
  * [Kernel] Added builder name instead of android@build

* 2021-11-14
  * November 2021 ASB
  * Cleanup some props
  * Disable some gms service
  * Arrange default tiles in qs
  * Drop GCamGO, Added Open Camera
  * Shipped with SYNTXforce-Kernel

* 2021-10-08
  * October ASB (android-11.0.0_r46)
  * Strip off some debug packages
  * Added several Android GO config
  * Disable edge limit control globally
  * Reduce any bug and lags in waking up
  * Shipped with SYNTXforce-究極-R1 Kernel
  * Added several cahced config from Redfin

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
