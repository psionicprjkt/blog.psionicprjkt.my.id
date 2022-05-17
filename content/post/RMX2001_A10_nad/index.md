---
title: Nusantara Project eLTS (Android-10) for RMX2001
description: Custom ROM for Realme 6, 6s, 6i and Narzo (RMX2001/02/03)
date: 2022-05-15
slug: ROM/RMX2001/NusantaraProject-ROM/A10
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
Camera | VoLTE | ∂ (Partial) | ✓

### Known Issues
* Night light flickers
* IMS (ViLTE, VoWiFi)
* Extra cameras

## Latest Changelog
* 2022-05-16
  * May 2022 ASB
  * Change codename Wasabi → RMX2001
  * Included 64MP Enabler RMX2001
  * Update value for Brightness Doze / AOD
  * Update default wallpaper & system apps
  * Update PRODUCT_MODEL to nemo/sarter
  * Realme internal codename nemo/sarter (Realme 6/6s/6i India/Narzo)
  * Improved battery backup & UI performance
  * (Additional Settings) Update parts icon
  * (AS) Fixup USB-OTG can't enable (off by default)
  * (AS) Disable selectable for summary desc/text

## Downloads
[⬇️ Download](https://www.pling.com/p/1793594) | [🌆 Screenshot](https://t.me/psionicprjkt/358) | [XDA Thread](https://forum.xda-developers.com)

```
FILE: Nusantara-eLTS-10-RMX2001-16052022-OFFICIAL-0907.zip
MD5SUM: 2581a1a1c97fb349e6ec6f7827bd153d
FILESIZE: 613 MB (Vanilla)
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
* 2022-03-19
  * March 2022 ASB
  * SELinux Enforcing
  * Passes SafetyNet out-of-the-box
  * AES-256-XTS File Based Encryption (FBE)
  * Added & Fixed Engineer Mode
  * Updated ImsService from phh/stableQ
  * Updated blobs and configs from B.65_0650_202108181729
  * Enable Call Recording (AOSP Dialer)
  * Fixed Offline-Charging (KPOC)
  * Fixed rounded/statusbar padding 
  * Fixed Double Tap To Wake (on/off)
  * Fixed RIL (Radio Interface Layer)
  * Drop Snap, Added Gcam GO
  * Rebrand devicesettings to Additional Settings
  * [AS] Move to Settings/System
  * [AS] Cleanup unused features
