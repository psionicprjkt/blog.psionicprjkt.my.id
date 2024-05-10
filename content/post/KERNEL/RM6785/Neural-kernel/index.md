---
title: Neural Kernel for RM6785
description: Custom Kernel for Realme 6/6i(Indian)/6s/7/Narzo/Narzo 20 Pro/Narzo 30 4G (RM6785)
date: 2024-05-09
slug: KERNEL/RM6785/Neural
image: main.jpg
tags:
    - KERNEL
---

## About Kernel
```
Neural Kernel for RM6785
Custom Kernel for Realme 6/6i(Indian)/6s/7/Narzo/Narzo 20 Pro/Narzo 30 4G (RM6785)
for Custom ROM based realmeUI-2.0
```

## Latest Changelog
* 2024-05-09
  * Upstreamed Kernel to v4.14.344
  * Improve perf with Clang Polly
  * Improve perf with inline optimization
  * Optimize subsystems with -O3
  * Updated KernelSU v0.9.4

## Downloads
* [⬇️ Neural-kernel-RM6785-09052024-R2.zip](https://sourceforge.net/projects/psionicprjkt/files/KERNEL/RM6785/Neural-kernel-RM6785-09052024-R2.zip/download)
* [⬇️ Neural-kernel-RM6785-09052024-R2-ksu.zip](https://sourceforge.net/projects/psionicprjkt/files/KERNEL/RM6785/Neural-kernel-RM6785-09052024-R2-ksu.zip/download)

```
FILE: Neural-kernel-RM6785-09052024-R2.zip (Normal/Non-KSU)
FILE: Neural-kernel-RM6785-09052024-R2-ksu.zip (Inc. KernelSU)
FILESIZE: 27.1 MB (Both)
```

## Info & Sources
* Device Info
  * Kernel: 4.14.x
  * Chipset: Mediatek MT6785 Helio G90T - ARMv8.2-A (64-bit)

* Sources
  * [psionicprjkt](https://github.com/psionicprjkt)
  * [officialputuid](https://github.com/officialputuid)
  * [realme-mt6785-devs](https://github.com/realme-mt6785-devs)

### Support Group
[psionicprjktchat](https://t.me/psionicprjktchat) | [psionicprjkt channel](https://t.me/psionicprjkt) | [psionicprjktlogs](https://t.me/psionicprjktlogs) managed by [officialputuid](https://t.me/officialputuid)

## Old Changelog
* 2024-05-05
  * Bump version to R2
  * Added TCP BBRv2 (default still BBRv1)
  * Enable all available CPU_FREQ_GOV*
  * Switch to stable AOSP clang 18.0.1
  * Switch kernel timer to 50 Hz
  * Updated KernelSU v0.9.3 

* 2024-04-19
  * Introducing Neural Kernel R1
  * Upstreamed Kernel to v4.14.343
  * BBR as default TCP Congestion
  * Enable all available TCP Congestion
  * Compiled with ZyC clang 19.0.0
  * Support for U-QPR2 Custom ROMs
  * WireGuard v1.0.20220627 integration
  * gpufreq max to 821MHz for R6 Series
  * Added KernelSU v0.9.2 (11682) 
  * fs: Backport path_umount KSU <GKI>
  * Kernel timer set to 300 Hz
  * Fix random reboot, process systemui isn't responding/hotspot bug in QRP1/QPR2 ROMs
