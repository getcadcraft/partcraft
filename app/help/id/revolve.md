---
title: Merevolusi part bubutan
summary: Sketsa setengah profil di samping garis tengah, revolusi menjadi part bulat, pilih sumbu dan sudut, dan gunakan potongan revolusi untuk alur.
keywords: revolusi, boss revolusi, potongan revolusi, part bubutan, mesin bubut, poros, sumbu, garis tengah, alur, sudut, potong revolusi
from: 593b6929
---

{{ui:Revolusi}} memutar profil mengelilingi sumbu, seperti part yang dibuat di mesin bubut: poros, puli, flensa, kenop. Potongan revolusi (di menu {{ui:Lainnya}} grup Fitur) memutar profil untuk menghapus material, untuk alur dan lekukan.

## Merevolusi poros bertingkat

1. Buat sketsa di **Bidang depan**.
2. Tekan {{key:N}} untuk {{ui:Garis tengah}}. Mulai dari titik asal dan klik titik lurus ke kanan, misalnya 100 mm. Ini adalah sumbu. Garisnya putus-putus: geometri konstruksi bukan bagian dari profil.
3. Tekan {{key:L}} untuk Garis. Gambar profil **setengah** di atas garis tengah sebagai satu loop tertutup: mulai di garis tengah, naik, lanjutkan, lalu turun kembali ke garis tengah, lalu sepanjang garis itu kembali ke titik awal. Ujungnya harus bertemu: loop harus tertutup.
4. Beri dimensi pada jari-jari (tinggi di atas garis tengah) dan panjangnya. Tinggi 10 di atas garis tengah menghasilkan diameter 20.
5. Pilih {{ui:Keluar}}.
6. Pilih {{ui:Revolusi}}. Poros muncul, satu putaran penuh.

Profil harus tetap di satu sisi sumbu. Jika memotong: "Profil memotong sumbu. Letakkan di satu sisi garis tengah." Tepi profil boleh berada pada sumbu.

## Pengaturan

| Pengaturan | Fungsi | Bawaan |
|---|---|---|
| **Operasi** | Boss (tambah material), Cut (buang material), Irisan (simpan bagian yang tumpang tindih) atau Bodi baru | Boss untuk {{ui:Revolusi}}, Cut untuk {{ui:Lainnya}} › {{ui:Potongan revolusi}} |
| **Sudut (°)** | Seberapa jauh diputar, dari sedikit di atas 0 sampai 360 | 360 |
| **Sumbu** | Garis tengah pertama, atau garis atau garis tengah apa pun di sketsa, didaftar sebagai "Garis tengah 1 (l1)" atau "Garis 3 (l3)" | Garis tengah pertama |

Sudut sebagian membuat baji, diputar dari bidang sketsa ke satu arah.

Jika sketsa tidak memiliki garis tengah dan **Sumbu** tetap pada Garis tengah pertama: "Gambar garis tengah (garis konstruksi) di sketsa untuk direvolusi terhadapnya." Anda juga bisa memilih garis solid dari profil sebagai sumbu.

## Memotong alur

1. Dengan poros sudah dibangun, buka sketsa baru di **Bidang depan** (bidang yang sama dengan sketsa poros).
2. Gambar garis tengah di sepanjang sumbu yang sama: mulai dari titik asal dan buat datar agar mendapat H, atau ketik dengan **Tambah dengan koordinat** (misalnya dari `0, 0` ke `100, 0`). Sketsa baru tidak bisa menempel ke garis sketsa lain.
3. Gambar persegi panjang kecil tertutup yang menumpang tindih dengan tepi poros tempat alur dibuat.
4. Pilih {{ui:Keluar}}, lalu {{ui:Lainnya}} › {{ui:Potongan revolusi}}.

## Muka hasil revolusi dalam rakitan

Revolusi memiliki sumbu yang dapat dipakai fitur dan rakitan lain:

- pola **Melingkar** memakai sumbu revolusi terakhir secara default (lihat [Fitur pola dan cerminan](topic:patterns-mirror));
- dalam rakitan, sambungan antara muka hasil revolusi dimulai sebagai sambungan **revolute**, dan **Pusatkan pada** menawarkan "Axis of Revolve1" (lihat [Membuat rakitan](topic:build-assembly)).

## Kurva sebenarnya dan faset

PartCraft membangun revolusi dengan kernel mesh (chip bilah status bertuliskan "Kernel mesh"): bentuk bulat berupa faset datar, 64 per putaran secara default, dan volume sedikit lebih kecil dari nilai sebenarnya (sekitar 0.16 % pada 64). Tampilan serta ekspor STL, 3MF, dan STEP terdiri dari faset tersebut: atur **Kurva** (klik ruang kosong, lalu panel kanan) ke Halus (128) atau Sangat halus (256) untuk hasil yang lebih halus. Silinder, kerucut, dan torus sebenarnya memerlukan kernel eksak: belum dibuat di versi ini. Lihat [Kernel mesh](topic:solid-kernels).
