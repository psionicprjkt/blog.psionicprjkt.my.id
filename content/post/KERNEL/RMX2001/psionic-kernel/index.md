---
title: psionic Kernel for RMX2001
description: Custom Kernel for Realme 6, 6s, 6i and Narzo (RMX2001/02/03)
date: 2024-03-22
slug: KERNEL/RMX2001/psionic
image: main.png
tags:
    - KERNEL
    - DISCONTINUE
---

## About Kernel
```
psionic Kernel for RMX2001
Custom Kernel for Realme 6, 6s, 6i and Narzo (RMX2001/02/03)
for Custom ROM based realmeUI-1.0 (android 11)
```

## Latest Changelog
* 2024-03-22
  * Update version to r3
  * Disable power-related debugging
  * Improve net & tcp connections
  * kernel-sched: Reduce latency
  * Update KernelSU to v0.9.2 (11682)
  * fs: Backport path_umount KSU <GKI>
  * Drop more MTK debugging features

## Downloads
* [⬇️ psionic-kernel-RMX2001-22032024-r3.zip](https://sourceforge.net/projects/psionicprjkt/files/KERNEL/RMX2001/psionic-kernel-RMX2001-22032024-r3.zip/download)
* [⬇️ psionic-kernel-RMX2001-22032024-r3-ksu.zip](https://sourceforge.net/projects/psionicprjkt/files/KERNEL/RMX2001/psionic-kernel-RMX2001-22032024-r3-ksu.zip/download)

```
FILE: psionic-kernel-RMX2001-08012024-release.zip
FILESIZE: 13 MB (Both)
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
* 2024-04-26
  * Updated KernelSU to v0.8.1 (11569)

* 2024-02-24
  * Update version to r2
  * Import WireGuard v1.0.20220627
  * Updated KernelSU to v0.8.0 + latest main branch (11553)
  * Disabled software CRCs for perf
  * Disable more logspams

* 2024-01-21
  * Updated KernelSU to v0.7.6 (11458)

* 2024-01-08
  * Updated KernelSU to v0.7.5

* 2024-01-01
  * Updated KernelSU (https://t.me/KernelSU/57) to v0.7.2
  * Silence more debug / log spams
  * gpufreq: Adjust Max Frequency to 821MHz

* 2023-12-25
  * Base lineage kernel
  * Updated KernelSU to v0.7.1
  * Fix sulist KernelSU gone after restart
  * gpufreq: Unlock all available GPU freq
  * cpufreq: Overclock BIG Cluster to 2.2Ghz
  * Thanks to @Fskhriii for testing

* 2023-10-15
  * Base lineage kernel by SamarV-121
  * Added KernelSU support v0.6.9
  * Fixed IPv6 tethering
  * KernelSU App (Control SU) (app: https://github.com/tiann/KernelSU/releases)
