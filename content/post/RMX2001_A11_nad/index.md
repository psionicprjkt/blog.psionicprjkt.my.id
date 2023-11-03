---
title: Nusantara Project LTS (Android-11) for RMX2001
description: Custom ROM for Realme 6, 6s, 6i and Narzo (RMX2001/02/03)
date: 2022-10-21
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
* 2022-10-21
  * SELinux Enforcing
  * Merge 07/08/09/10 2022 ASB
  * Added more Dirac Presets
  * Fixup missing string about
  * Passes SafetyNet out-of-the-box
  * Re-adjusted status bar paddings
  * Updated Camera Go v3.8.466520855
  * Cleanup unused overlay configuration
  * Change default wallpaper (thanks wallfever)
  * Merge realmeDirac into realmeParts
  * Rebrand realmePart to AdditionalSettings
  * Fixed CABC QS stuck/crash/can’t changes
  * Fixed Dirac QS stuck/crash/can’t changes
  * Update icon app & launcher AdditionalSettings

## Downloads
[⬇️ Download (Vanilla)](https://sourceforge.net/projects/psionicprjkt/files/RMX2001/NusantaraROM-A11/Nusantara-LTS-11-RMX2001-21102022-OFFICIAL-0549.zip/download) | [⬇️ Download (GApps)](https://sourceforge.net/projects/psionicprjkt/files/RMX2001/NusantaraROM-A11/Nusantara-LTS-11-RMX2001-Gapps-21102022-OFFICIAL-0652.zip/download) | [🌆 Screenshot](https://photos.app.goo.gl/hH1WaKAbpAsbUbJV8)

```
FILE: Nusantara-LTS-11-RMX2001-21102022-OFFICIAL-0549.zip
MD5SUM: 0a72a196065acd2248033f6995015f7b
FILESIZE: 790 MB (Vanilla)
```

```
FILE: Nusantara-LTS-11-RMX2001-Gapps-21102022-OFFICIAL-0652.zip
MD5SUM: d474f9ebc03e32b6ea49b4e98f7f00cd
FILESIZE: 1.2 GB (GApps)
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
* 2022-05-15
  * SELinux Enforcing
  * Passes SafetyNet out-of-the-box
  * Updated Camera Go v3.8.466520855
  * Update our custom perf profile (realmeParts)
  * Update CABC configs from realmeUI v1.0 (realmeParts)
  * Update fastcharge firmware after boot (do like rui thing)
  * Included 64MP Enabler & Bufferfix (thanks to Wyroczen)
  * Fixed AOSP WFD with MTK fixes (thanks to Erfanoabdi)
  * Fixed av/media resources (inc Instagram low-quality/reels)
  * Fixed some sepolicy denials (for p-gapps, realmeDirac & dt2w)

* 2022-05-15
  * Fixup! DT2W (typo)
  * Included 64MP Enabler RMX2001
  * (Additional Settings) Update parts icon

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
