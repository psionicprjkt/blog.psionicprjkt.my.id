---
title: Neural Kernel for RM6785
description: Custom Kernel for Realme 6/6i(Indian)/6s/7/Narzo/Narzo 20 Pro/Narzo 30 4G (RM6785)
date: 2024-06-05
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
* 2024-06-05
  * Upstreamed Kernel to v4.14.348

## Downloads
* [⬇️ Neural-kernel-RM6785-05062024-b0ba341.zip](https://sourceforge.net/projects/psionicprjkt/files/KERNEL/RM6785/Neural-kernel-RM6785-05062024-b0ba341.zip/download)
* [⬇️ Neural-kernel-RM6785-05062024-b0ba341-ksu.zip](https://sourceforge.net/projects/psionicprjkt/files/KERNEL/RM6785/Neural-kernel-RM6785-05062024-b0ba341-ksu.zip/download)
* [⬇️ Neural-kernel-RM6785-05062024-7bdb7b4-ksu-oc.zip](https://sourceforge.net/projects/psionicprjkt/files/KERNEL/RM6785/Neural-kernel-RM6785-05062024-7bdb7b4-ksu-oc.zip/download)

```
FILE: Neural-kernel-RM6785-05062024-b0ba341.zip (Normal/Non-KSU)
FILE: Neural-kernel-RM6785-05062024-b0ba341-ksu.zip (Inc. KernelSU)
FILE: Neural-kernel-RM6785-05062024-7bdb7b4-ksu-oc.zip (Inc. KernelSU + Overclock)
FILESIZE: 23.2 MB
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
* 2024-06-04
  * Upstreamed Kernel to v4.14.347

* 2024-06-03
  * Upstreamed Kernel to v4.14.346

* 2024-06-02
  * Updated KernelSU v0.9.5

* 2024-05-31
  * Upstreamed Kernel to v4.14.345

* 2024-05-27
  * Drop Neural version, use codename
  * Enable nintendo switch controller driver
  * treewide: Use power efficient wq
  * Overclock BIG Cluster 2200 Mhz (OC)
  * Overclock GPU 900 Mhz (OC)
  * Updated KernelSU (main 11868)

* 2024-05-09
  * Upstreamed Kernel to v4.14.344
  * Improve perf with Clang Polly
  * Improve perf with inline optimization
  * Optimize subsystems with -O3
  * Updated KernelSU v0.9.4

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
