---
title: Buka bahagian piawai
summary: Mulakan bahagian daripada bolt, skru, nat, washer, pin, galas atau kunci yang bersaiz mengikut piawainya, dengan setiap saiz jadual piawai sebagai konfigurasi.
keywords: bahagian piawai, bolt, skru, heks, nat, washer, pin, dowel, galas, galas bebola, kunci, kunci selari, pengikat, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, templat, pustaka
from: b9e2811f
---

PartCraft membuka bahagian mekanikal lazim yang sedia dibuat: dimensinya datang daripada jadual piawai, dan setiap saiz dalam jadual ialah konfigurasi yang boleh anda tukar.

## Buka satu

1. Klik {{ui:Bahagian piawai}} dalam kumpulan Fail.
2. Dalam {{ui:Bahagian}}, pilih jenisnya, contohnya {{ui:Skru kepala heks (ISO 4017)}}.
3. Dalam {{ui:Saiz}}, pilih saiznya, contohnya `M10 × 40`.
4. Klik {{ui:Buka}}.

Bahagian dibuka sebagai bahagian baharu yang belum disimpan. Simpan untuk mengekalkannya ({{key:Mod+S}}).

| Bahagian | Piawai | Parameter |
|---|---|---|
| Skru kepala heks, bolt heks | ISO 4017, ISO 4014, ASME B18.2.1 (inci) | `d` saiz benang, `s` merentasi rata, `k` tinggi kepala, `l` panjang |
| Nat heks | ISO 4032, ASME B18.2.2 (inci) | `d`, `s`, `height` |
| Washer biasa | ISO 7089 | `d1` dalam, `d2` luar, `h` ketebalan |
| Pin selari | ISO 2338 | `d`, `l` |
| Galas bebola alur dalam | ISO 15 | `d` lubang, `D` luar, `B` lebar |
| Kunci selari | DIN 6885-1, bentuk A | `b` lebar, `h` tinggi, `l` panjang |

## Tukar saiz

Setiap saiz ialah konfigurasi (lihat [Konfigurasi dan jadual reka bentuk](topic:design-tables)): buka {{ui:Parameter}} dan pilih yang lain, atau tukar parameter, seperti `l` untuk skru yang lebih panjang, dan simpannya sebagai konfigurasi anda sendiri.

## Apa yang dimodelkan

- Skru dan bolt: kepala heksagon dan batang licin. Nat: heksagon dengan lubang bersaiz nominal benang. Benang tidak dimodelkan; tambah satu dengan {{ui:Benang}} jika anda memerlukannya (lihat [Benang](topic:threads)).
- Pin: silinder biasa; cantuman hujung dibiarkan.
- Galas: sampul luar sahaja (cincin lubang, diameter luar dan lebar), yang anda perlukan untuk meletakkannya.
- Kunci: kunci hujung bulat.

Bahan bahagian ialah keluli, jadi panel jisim menunjukkan beratnya. Gear belum ada di sini lagi: PartCraft tiada ciri gigi, dan cakera bukan gear. CadCraft melukis gear mengikut konvensyen lukisan, dan pustaka mempunyainya sebagai lukisan.
