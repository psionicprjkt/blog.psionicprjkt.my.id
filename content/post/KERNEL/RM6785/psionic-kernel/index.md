---
title: psionic Kernel for RM6785
description: Custom Kernel for Realme 6/6i(Indian)/6s/7/Narzo/Narzo 20 Pro/Narzo 30 4G (RM6785)
date: 2024-04-07
slug: KERNEL/RM6785/psionic
image: main.png
tags:
    - KERNEL
    - DISCONTINUE
---

## About Kernel
```
psionic Kernel for RM6785
Custom Kernel for Realme 6/6i(Indian)/6s/7/Narzo/Narzo 20 Pro/Narzo 30 4G (RM6785)
for Custom ROM based realmeUI-2.0
```

## Latest Changelog
* 2024-04-07
  * Upstreamed kernel to v4.14.341
  * Compiled with -O3 optimization and LLVM Polly
  * Reduces power consumption during suspended state

## Downloads
* [⬇️ psionic-kernel-RM6785-08012024-release.zip](https://s.id/20ua6)
* [⬇️ psionic-kernel-RM6785-08012024-release-ksu.zip](https://s.id/20tuC)

```
FILE: psionic-kernel-RM6785-19012024-release.zip (Normal/Non-KSU)
FILE: psionic-kernel-RM6785-19012024-release-ksu.zip (Inc. KernelSU)
FILESIZE: 23 MB (Both)
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
* 2024-04-02
  * Update version to r2
  * Added patch to support U-QPR2
  * Update KernelSU to v0.9.2-S (11749)

* 2024-03-23
  * Upstreamed kernel to v4.14.340

* 2024-03-22
  * Update KernelSU to v0.9.2 (11682)

* 2024-03-20
  * Update version to r4
  * Improve network connections
  * Updated KernelSU to v0.9.0 (11657)
  * fs: Backport path_umount KSU <GKI>

* 2024-03-17
  * Update version to r3
  * Upstreamed kernel to v4.14.339 (OpenELA)
  * Compiled with AOSP Clang 18.0.1
  * Reduce / set low log buff debugging
  * Disable power-related debugging
  * Improve net & tcp connections
  * kernel-sched: Reduce latency
  * Drop scheduler switch debugging
  * Switch kernel timer freq to 300HZ
  * Disable CONFIG_SCHEDSTATS
  * gen4m: Disable WLAN wakelocks
  * Improve sched-tune from stock RUI1
  * Drop more MTK debugging features
  * Updated KernelSU to latest (11629)

* 2024-02-26
  * Updated KernelSU to v0.8.1 (11569)

* 2024-02-24
  * Updated KernelSU to v0.8.0 + latest main branch (11553)

* 2024-02-11
  * Update version to r2
  * Switch back to stable clang 17.0.4
  * Import WireGuard v1.0.20220627
  * Disabled software CRCs for perf
  * Reduce ged_ge for memory efficiency
  * Reduce ged_kpi for perf efficiency
  * Disable WALT scheduling
  * Disable more logspams

* 2024-01-25
  * Switch to r1b1
  * Compiled with WeebX-Clang 19.0.0

* 2024-01-19
  * Initial rebase r1
  * BBR as default TCP Congestion
  * gpufreq max 821MHz for R6 Series
  * Updated KernelSU to v0.7.6 (11458)
  * Compiled w/clang 18.0.0 (+FLTO -O3)

* 2024-01-11
  * Upstreamed kernel to v4.14.336

* 2023-12-21
  * Upstreamed kernel to v4.14.335
  * Compiled with AOSP Clang 18.0.0
  * Silence more log and debug spams
  * Import GPU GED config from rUI1.0
  * Updated KernelSU to v0.7.5

* 2023-12-21
  * Upstreamed kernel to v4.14.334

* 2023-12-14
  * Upstreamed kernel to v4.14.333
  * Compiled with AOSP Clang 17.0.4
  * Import some config from rui1.0
  * Use 250 for Kernel Timer (like rui1.0)
  * Silence more log spams

* 2023-12-09
  * Upstreamed kernel to v4.14.332

* 2023-11-29
  * Upstreamed kernel to v4.14.331
  * gpufreq: Unlock all freq

* 2023-11-21
  * Upstreamed kernel to v4.14.330
  * Updated KernelSU to v0.7.1

* 2023-11-10
  * Upstramed kernel to v4.14.329

* 2023-10-26
  * Upstreamed kernel to v4.14.328
  * Enable more TCP Congestion (all list: bbr,bic,cdg,cubic,dctcp,highspeed,htcp,hybla,illinois,lp,nv,reno,scalable,vegas,veno,westwood,yeah)
  * To display a list of available TCP congestion controls ( su -c sysctl net.ipv4.tcp_available_congestion_control )
  * To change it ( ex: su -c echo bbr > /proc/sys/net/ipv4/tcp_congestion_control )
  * To display currently used ( su -c sysctl net.ipv4.tcp_congestion_control )

* 2023-10-24
  * Updated KernelSU to v0.7.0
  * Updated [Security, SU, Module & Kernel (https://t.me/KernelSU/55)]

* 2023-10-12
  * Upstreamed kernel to 4.14.327
  * Updated KernelSU to latest stable tag v0.6.9
  * Fix very important security (vulnerability (https://t.me/KernelSU/53))

* 2023-09-25
  * Upstreamed kernel to 4.14.326
  * Updated KernelSU to latest stable tag 

* 2023-09-02
  * Upstreamed kernel to 4.14.325

* 2023-08-21
  * Upstreamed kernel to 4.14.323

* 2023-08-16
  * Upstreamed kernel to 4.14.322

* 2023-08-13
  * Upstreamed kernel to 4.14.320
  * wlan: Fix wifi random disconnection
  * drivers: Supress oplus_charger logging

* 2023-04-24
  * KernelSU support
  * Enable overlayfs configs
  * Upstreamed kernel to 4.14.311
  * Compile w/Azure Clang 15.0

* 2023-03-19
  * Added KernelSU support

* 2023-03-18
  * Upstreamed kernel to 4.14.310

* 2023-03-14
  * Merge branch 'android-4.14-stable' v4.14.309
  * Compiled with Default AOSP Clang 14.0.6
  * Patching system's build prop for fuse passthrough
  * driver:power:oplus: Supress oplus_charger logging
  * fs/fuse: shortcircuit: Disable logging
  * drivers: mtk-power: spm: Silence logspam
  * cpu: Silence log spam when a CPU is brought up
  * drivers: mtk-vcu: Silence logspam
  * printk: Don't allow userspace to write to /dev/kmsg
  * kernel: Fix cpufreq times memory leaks

* 2023-02-27
  * https://pastebin.ubuntu.com/p/nmnp3dPw9V/

* 2023-02-26
  * https://pastebin.ubuntu.com/p/QSfZdwWpr9/

* 2023-02-17
  * https://psionicprjkt.pages.dev/Kernel-RM6785_changelog.txt
