---
title: Pustaka analisis
summary: Pustaka skrip analisis yang mudah dibaca di ruang kerja Skrip: isi setiap grup, membuka fungsi secara baca-saja, header-nya dengan metode, referensi, dan pemeriksaan, membuat salinan milik Anda, serta bagaimana salinan menggantikan fungsi pustaka.
keywords: pustaka, craftlib, analisis, elektromagnet, statis, modal, termal, optimasi topologi, top88, SIMP, elektromagnetika, elektrostatika, magnetostatika, fluida, lattice Boltzmann, LBM, mesh, voxel, tetrahedra, referensi, pemeriksaan, verifikasi, salinan, bayangan
from: bf993859
---

Pustaka analisis adalah kumpulan skrip, masing-masing berupa fungsi yang dapat Anda baca dari atas ke bawah: bagaimana matriks kekakuan dirakit, di mana kondisi batas diletakkan, solver mana yang dijalankan, dan bagaimana hasilnya dihitung. Tidak ada yang disembunyikan di dalam kotak hitam; hanya loop dalam yang cepat (matriks elemen, solver jarang, meshing) yang dibangun sebagai bawaan.

## Mulai dengan contoh

Grup **Contoh** berisi lima skrip pendek yang menggunakan pustaka dari awal sampai akhir. Klik salah satu, tekan {{ui:Buka (hanya baca)}}, lalu {{key:F5}}: setiap skrip membersihkan tampilan, menampilkan hasil pada kanvas, dan plot di sub-tampilan.

| Contoh | Yang ditampilkan |
|---|---|
| Tegangan cantilever | Batang baja 100 × 10 × 10 mm di bawah beban ujung 100 N: tegangan von Mises pada batang yang berubah bentuk, dan defleksi ujung terhadap teori balok pada empat ukuran elemen (diplot) |
| Topologi balok MBB | Optimasi topologi klasik 60 × 20: desain yang terbentuk, compliance yang turun, tata letak akhir (94 iterasi, compliance 203.19) |
| Field kapasitor | Dua pelat lebar 4 mm, berjarak 1 mm: potensial dan field, kapasitansi dengan fringing terhadap nilai ideal dan rumus Palmer |
| Aliran saluran | Aliran lattice Boltzmann melewati tiang dalam saluran: field kecepatan dan riwayat konvergensi |
| Elektromagnet | Inti besi berbentuk C dengan celah udara dan kumparan: rapat fluks, field di celah terhadap rumus rangkaian magnet, induktansi, dan gaya tarik melintasi celah. Dijelaskan dalam [Medan magnet 2-D](topic:magnetic-fields-2d) |
| Magnet permanen | Inti yang sama dengan magnet permanen sebagai pengganti kumparan: titik kerja magnet, field di celah terhadap rangkaian magnet, seberapa banyak fluks yang bocor, dan gaya tarik. Dijelaskan dalam [Medan magnet 2-D](topic:magnetic-fields-2d#permanent-magnets) |

## Grup

| Grup | Fungsi | Yang dilakukannya |
|---|---|---|
| Meshing | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Kotak dan silinder sebagai hexahedra, kubus atau tetrahedra; kubus atau tetrahedra dari model apa pun (bagian, bodi, STL yang dimuat); volume dan kualitas elemen; memilih node pada bidang atau muka |
| Tegangan statis | `static_voxel`, `static_tet` | Tegangan statis linear pada kubus atau pada tetrahedra 10-node: perpindahan, tegangan, von Mises, reaksi |
| Rangka | `frame3d` | Rangka 3D dari balok, kolom, dan bresing dengan metode kekakuan langsung: pelepasan ujung, tumpuan dan pegas, beban sepanjang batang; perpindahan, reaksi, gaya ujung batang. {{ui:Ekspor sebagai CraftScript}} pada DetailCraft dan BimCraft menulis seluruh model untuk fungsi ini. Alat bantu analisis, bukan pemeriksaan kode |
| Getaran | `modal_tet` | Frekuensi alami dan bentuk mode |
| Panas | `heat_steady`, `heat_transient`, `heat_system` | Konduksi tunak dan transien dengan temperatur tetap, masukan panas, pembangkitan, fluks, dan konveksi |
| Optimasi topologi | `top88`, `top99`, `topopt3d` | Kode 2-D 88 dan 99 baris yang telah dipublikasikan, dan metode yang sama dalam 3-D pada kubus |
| Elektromagnetika | `poisson2d`, `magnetostatic2d` | Elektrostatika 2-D (potensial, field, kapasitansi, muatan) dan magnetostatika (potensial vektor, rapat fluks, magnet permanen) |
| Aliran fluida | `lbm2d`, `lbm3d` | Aliran lattice Boltzmann: 2-D ditulis langsung dalam skrip, 3-D pada kernel aliran milik PartCraft sendiri |

Header setiap fungsi memuat argumen yang tepat. Satuan mengikuti studi PartCraft kecuali header menyatakan lain: milimeter, newton, megapascal, ton per milimeter kubik untuk massa jenis, watt dan kelvin untuk panas. Fungsi elektromagnetik dan lattice Boltzmann bekerja dengan satuan apa pun yang konsisten; header-nya menjelaskan caranya.

## Cara pustaka diperiksa

Header setiap fungsi diakhiri dengan **pemeriksaan**: kasus kecil dengan jawaban yang sudah diketahui. Pengujian PartCraft menjalankan semuanya, dan jika PartCraft memiliki studi sendiri untuk pekerjaan yang sama, jawaban skrip dibandingkan dengan studi tersebut pada mesh yang sama:

- defleksi ujung cantilever terhadap teori balok (dalam 0.2 % dengan kubus, 0.05 % dengan tetrahedra), dan terhadap solver ruang kerja **Simulasi** pada mesh yang sama (sama hingga banyak digit);
- frekuensi pertama cantilever terhadap teori balok (0.24 % lebih rendah, seperti yang diharapkan untuk balok pendek) dan terhadap solver modal **Simulasi**;
- panas: dinding bidang yang dipanaskan secara tepat, bodi kecil yang mendingin sesuai rumus kapasitas terkumpul, dan temperatur pelat yang meluruh sesuai teori;
- optimasi topologi: `top88` mereproduksi 94 iterasi dan compliance 203.1925 dari makalah (dan 218.8032 dengan filter kerapatan); `topopt3d` berakhir pada compliance yang sama dengan ruang kerja **Generatif** dengan pengaturan yang sama;
- kapasitansi kapasitor dan field solenoida panjang terhadap nilai di buku teks, field celah elektromagnet terhadap rumus rangkaian magnet, dan magnet permanen terhadap magnet bulat di udara serta magnet yang ditutup penahan besi;
- aliran saluran terhadap profil parabola eksak.

## Membaca fungsi

1. Buka tab **Pustaka** pada panel skrip.
2. Klik sebuah fungsi. Header-nya menampilkan: apa yang dihitung, metodenya, satuan, asumsi dan batasan, **referensi** (buku atau makalah, dengan nomor persamaan), dan sebuah **pemeriksaan**: kasus kecil dengan jawaban yang sudah diketahui yang dijalankan oleh pengujian PartCraft sendiri.
3. {{ui:Buka (hanya baca)}} membuka seluruh skrip dalam tab dengan garis putus-putus. Anda dapat menjalankannya, memilih dan menjalankan sebagian darinya, tetapi tidak dapat mengubahnya.

## Mengubah satu fungsi

Tekan {{ui:Buat salinan}} (atau **Buat salinan untuk diedit** di atas tab baca-saja). Salinan adalah skrip di bagian Anda dengan nama yang sama, sehingga disimpan bersama bagian tersebut, dan **setiap pemanggilan fungsi itu kini menggunakan salinan Anda**; editor menyatakannya di atas skrip. Ganti nama salinan untuk menyimpan keduanya.

## Menggunakan fungsi

Panggil fungsi pustaka dari skrip mana pun dengan namanya, seperti fungsi bawaan:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Hasilnya kembali sebagai nilai di ruang kerja; plot dan field yang ditampilkannya muncul di tampilan dan sub-tampilan.

Analisis statis pada bagian yang terbuka, misalnya, membutuhkan beberapa baris:

```
v = voxel_mesh(part(), 2);                   % kubus 2 mm
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % tahan bagian bawah
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N ke bawah pada bagian atas
r = static_voxel(v, 210000, 0.3, bc);       % baja
```

`r` menyimpan perpindahan, tegangan, dan reaksi; tegangan von Mises digambar pada bagian yang berubah bentuk. Untuk bagian melengkung gunakan `tet_mesh` dan `static_tet`, yang juga dapat membebani dan menahan seluruh muka (`face_nodes`).

:::note
Fungsi pustaka ditulis dalam CraftScript, dan skrip Lua memanggilnya melalui `cs` seperti fungsi bawaan: `cs.static_tet(t, 200000, 0.3, bc)` (lihat [Skrip Lua](topic:craftscript-lua)). Setiap fungsi menyelesaikan satu material dan satu kasus beban; header mencantumkan apa lagi yang tidak tercakup.
:::
