---
title: Nusantara Project v5.5 (Android-13) for RM6785
description: Custom ROM for Realme 6/6i(Indian)/6s/7/Narzo/Narzo 20 Pro/Narzo 30 4G (RM6785)
date: 2023-02-14
slug: ROM/RM6785/NusantaraProject-ROM/A13
image: main.png
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
Camera | VoLTE | ✓ | ✓

### Known Issues
* Native video calling (ViLTE)
* Voice over WiFi (VoWiFi)

## Latest Changelog
* 2022-10-10
  * February 2023 ASB
  * Improved auto brightness
  * Improved brightness slider curve
  * Fixed SafetyNet out-of-the-box
  * Fixed double click vibration effect
  * Fixed weak vibrations on calls, notif & alarms
  * Implement ClearSpeaker
  * Move realmeDirac to Parts
  * Implement again Performance Profiles
  * Fixed status bar top in landscape mode
  * Configure padding b/l/r on GBoard 
  * Revert changes wifi configs from rUI-1
  * Drop CameraGO (Default Aperture)
  * Upstreamed kernel to 4.14.305

## Downloads
[⬇️ Download](https://sourceforge.net/projects/psionicprjkt/files/RM6785/NAD-13/Nusantara-v5.5-13-RM6785-Gapps-13022023-OFFICIAL-1141.zip/download) | [🌆 Screenshot](https://photos.app.goo.gl/9ZFnWftemQa8cjAS6)

```
FILE: Nusantara-v5.5-13-RM6785-Gapps-13022023-OFFICIAL-1141.zip
MD5SUM: 0d837984e7c968596103f92c583b53bb
FILESIZE: 1.4 GB (GApps)
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
* 2022-10-10
  * January 2023 ASB
  * Fixed video playback crash
  * Switched to pixel power-libperfmgr HAL
  * Build Aperture Cam + Enabled AUX
  * Fixed buzzed brightness slider
  * Upstreamed kernel to 4.14.304
  * Pixel offline charging by default
  * Import some wifi configs from rUI-1
  * Import diract audio effects configs
  * Fix display animation while AOD
  * Fix can't connect wifi with 5ghz

* 2022-10-10
  * Initial A13
  * October 2022 ASB
  * Upstream kernel .295
  * Fixed laggy screen recording
  * Added realmeDirac & realmeParts
