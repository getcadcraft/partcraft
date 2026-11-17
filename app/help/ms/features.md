---
title: Ciri dan pilihannya
summary: Setiap ciri dalam bar alat dengan tetapan, lalai dan hadnya, daripada ekstrud hingga fillet, cangkerang dan pepejal STEP yang diimport, tindakan yang dikongsi setiap ciri, dan tetapan bahagian.
keywords: ciri, belum dibina, ekstrud, potong, putar, potongan putar, lubang, kaunterbor, tatasusunan linear, tatasusunan bulat, pencerminan, fillet, chamfer, cangkerang, import, pilihan, lalai, tetapan, resolusi, lengkung, fasetan, gantung, gulung balik
from: ab3a598e
---

Ciri disenaraikan dalam sejarah mengikut susunan ia dibuat, dan dibina semula dari atas ke bawah. Setiap satu dinamakan mengikut jenisnya dengan nombor: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft membina setiap ciri dengan kernel jejaring. Fillet dan Chamfer berfungsi pada tepi lurus antara dua muka rata, dan Cangkerang membuka muka rata. Pepejal yang diimport memerlukan kernel tepat, yang tiada dalam versi ini: ia belum dibina, dan bahagian di bawah menerangkannya sebagai bahagian yang dibuat dalam binaan terdahulu yang masih menyimpannya. Lihat [Kernel jejaring](topic:solid-kernels) dan [Apa yang belum dibina](topic:not-built-yet).

## Lakaran

| Tetapan | Nota |
|---|---|
| Satah | Satah Front, Top atau Right, atau muka rata. Dipaparkan, tidak diubah: untuk mengalih lakaran, buat yang baharu |
| Keadaan | Takrif penuh, Kurang takrif (dengan darjah kebebasan), Terlebih takrif, atau Kosong |
| Geometri, Hubungan | Berapa banyak lengkung, titik dan hubungan |
| Dimensi pemacu | Setiap dimensi lakaran, boleh disunting |

Butang: {{ui:Edit lakaran}}, {{ui:Eksport sebagai DXF}}.

## Ekstrud dan Potong

{{ui:Ekstrud}} dan {{ui:Potong}} menghasilkan ciri yang sama, bermula dengan tetapan berbeza.

| Tetapan | Pilihan | Ekstrud bermula pada | Potong bermula pada |
|---|---|---|---|
| Operasi | Tonjolan (tambah bahan), Potong (buang bahan), Persilangan (kekalkan pertindihan), Jasad baharu (belum dibina dalam versi ini) | Tonjolan | Potong |
| Akhir | Buta (satu kedalaman), Satah tengah (kedua-dua arah), Tembus semua | Buta | Tembus semua |
| Kedalaman (mm) | Melebihi 0, sehingga 1,000,000 | 10 | 10 |
| Songsang arah | Mati / hidup | Mati | Mati |

- Profil: setiap gelung tertutup garisan pepejal, bulatan dan lengkok dalam lakaran. Gelung di dalam gelung ialah lubang.
- Tembus semua hanya berfungsi untuk potongan. Ia menembusi bahagian sepenuhnya pada sisi yang dipilih.
- Potongan masuk ke dalam bahan, menjauhi sisi luar satah lakaran; Songsang menterbalikkannya.

## Putar dan potongan putar

| Tetapan | Pilihan | Lalai |
|---|---|---|
| Operasi | Tonjolan, Potong | Tonjolan ({{ui:Putar}}), Potong ({{ui:Lagi}} › {{ui:Potongan putar}}) |
| Sudut (°) | Melebihi 0, sehingga 360 | 360 |
| Paksi | Garis tengah pertama, mana-mana garisan atau garis tengah lakaran, atau ciri paksi yang terletak dalam satah lakaran | Garis tengah pertama |

- Profil mesti kekal di satu sisi paksi. Ia boleh menyentuhnya.
- Paksi putaran boleh digunakan oleh Tatasusunan bulat dan oleh sambungan himpunan.

## Lubang

| Tetapan | Pilihan | Lalai |
|---|---|---|
| Jenis | Mudah, Kaunterbor | Mudah |
| Diameter (mm) | Melebihi 0 | 6 |
| Tembus semua | Hidup / mati | Hidup |
| Kedalaman (mm) | Apabila Tembus semua dimatikan | 10 |
| Diameter kaunterbor ⌀ | Lebih lebar daripada lubang | 11 |
| Kedalaman kaunterbor | Lebih cetek daripada lubang buta | 6 |
| Songsang arah | Mati / hidup | Mati |

- Satu lubang pada setiap titik longgar lakaran (titik yang dibuat dengan alat Point). Panel menunjukkan berapa banyak.
- Lubang digerudi tegak lurus pada satah lakaran, ke dalam bahan.
- Paksi setiap lubang boleh digunakan oleh sambungan himpunan ("Hole1, hole 2").

## Tatasusunan linear

| Tetapan | Pilihan | Lalai |
|---|---|---|
| Ciri untuk disalin | Mana-mana ciri pepejal di atasnya | Ciri yang dipilih, jika tiada, ciri pepejal terakhir |
| Arah | Paksi X, paksi Y, paksi Z; garisan lakaran terdahulu; paksi putaran; tepi yang dipilih | Paksi X (atau tepi yang dipilih semasa anda menambahnya) |
| Jarak (mm) | Sebarang nombor | 20 |
| Bilangan | 1 hingga 1000, termasuk asal | 3 |
| Songsang arah | Mati / hidup | Mati |

## Tatasusunan bulat

| Tetapan | Pilihan | Lalai |
|---|---|---|
| Ciri untuk disalin | Seperti Linear | Seperti Linear |
| Paksi | Seperti Arah di atas | Paksi putaran terakhir, jika tiada, paksi Y (atau tepi yang dipilih) |
| Sudut (°) | Melebihi 0, sehingga 360. 360 menjarakkan salinan sama rata sekeliling; kurang menyebarkannya merentasi sudut | 360 |
| Bilangan | 1 hingga 1000, termasuk asal | 6 |
| Songsang arah | Mati / hidup | Mati |

## Pencerminan

| Tetapan | Pilihan | Lalai |
|---|---|---|
| Cermin | Seluruh jasad (seperti yang dibina setakat ini), atau ciri yang dipilih | Ciri yang dipilih, jika tiada, seluruh jasad |
| Satah cermin | Satah Front, Top atau Right; muka rata | Satah Right, atau muka rata yang dipilih semasa anda menambahnya |

## Fillet dan Chamfer

Dalam versi ini kernel jejaring membinanya pada tepi lurus antara dua muka rata (sudut luar atau dalam), dengan satu jejari. Tepi bulat menyatakan "Fillet: dalam versi ini hanya tepi lurus antara dua muka rata (kernel jejaring membinanya). Bulatkan atau serongkan tepi melengkung dalam lakaran."; di tempat tepi membulat bertemu di sudut, ia dipotong serong, dan ciri memberi amaran "Fillet oleh kernel jejaring: di tempat tepi membulat bertemu, ia dipotong serong, bukan dicampur." Semua jenis Chamfer (jarak sama, dua jarak, jarak dan sudut, dengan **Tukar sisi**) berfungsi. Lihat [Bulat, serong dan berongga](topic:fillet-chamfer-shell).

| Tetapan | Pilihan | Lalai |
|---|---|---|
| Jejari (mm) (Fillet) | Melebihi 0 | 2 |
| Jarak (mm) (Chamfer) | Melebihi 0, sama pada kedua-dua muka | 1 |
| Tepi | Tepi yang dipilih, setiap satu disenaraikan mengikut dua muka yang dihubungkannya ("Extrude1 end face × Extrude1 side"), dengan **Alih keluar** | Tepi yang dipilih semasa anda menambahnya |

- Pilih tepi sebelum memilih butang ({{key:Shift}}+klik untuk beberapa), atau pilihnya tanpa apa-apa dipilih dan klik tepi kemudian.
- {{ui:Pilih tepi}} (atau klik dua kali ciri itu) menukar tepi.
- Tepi dikekalkan oleh dua muka yang dihubungkannya, jadi ia kekal walaupun saiz berubah di peringkat terdahulu.

## Cangkerang

Kernel jejaring membinanya. Hanya muka rata boleh dibuka ("Cangkerang: dalam versi ini ia hanya membuka muka rata (kernel jejaring membinanya)."); dinding dengan ketebalan berbeza belum dibina. Lihat [Bulat, serong dan berongga](topic:fillet-chamfer-shell).

| Tetapan | Pilihan | Lalai |
|---|---|---|
| Dinding (mm) | Melebihi 0 | 2 |
| Dinding tumbuh ke luar (muka kekal di dalam) | Mati: dinding masuk ke dalam. Hidup: dinding keluar ke luar | Mati |
| Muka terbuka | Muka yang dialih keluar, sekurang-kurangnya satu, dengan **Alih keluar** | Muka yang dipilih semasa anda menambahnya |

{{ui:Pilih muka}} menukar muka terbuka.

## Pepejal yang diimport

Dihasilkan dengan membuka fail STEP, STL, OBJ atau 3MF: jasad pepejal segi tiga tanpa sejarah sendiri ([Buka fail STEP](topic:import-step), [Buka STL, OBJ atau 3MF](topic:open-meshes)). Ia menunjukkan fail asalnya dan apa yang diperbaiki oleh import; **Unit dalam fail**, **Ke atas dalam fail** dan **Guna untuk** kekal boleh disunting. Pepejal STEP yang diimport oleh binaan lama yang mempunyai kernel tepat kekal dalam sejarah ditanda sebagai belum dibina; buka semula fail STEP untuk mengimportnya sebagai segi tiga.

| Tetapan | Pilihan | Lalai |
|---|---|---|
| Ke atas dalam fail | Z ke atas (kebanyakan CAD), Y ke atas | Z ke atas |

Tatasusunan dan pencerminan boleh menyalin pepejal yang diimport, tetapi bukan fillet, chamfer atau cangkerang.

## Apa yang ada pada setiap ciri

Di bahagian bawah panel setiap ciri:

| Butang | Fungsi |
|---|---|
| {{ui:Gantung}} / {{ui:Nyahgantung}} | Matikan atau hidupkannya. Ciri yang memerlukannya tidak dibina semasa ia dimatikan |
| {{ui:Gulung balik ke sini}} | Bina hanya ciri di atas yang ini. Ciri baharu dimasukkan di bar gulung balik |
| {{ui:Alih ke atas}} / {{ui:Alih ke bawah}} | Susun semula, apabila tiada apa yang digunakannya akan berada di bawahnya. Dilorekkan dengan sebab jika tidak |
| {{ui:Padam}} | Padamkannya, dan (selepas bertanya) setiap ciri yang menggunakannya |
| Nama | Namakan semula (sehingga 60 aksara) |

Ciri dengan lakaran juga menyenaraikan **Dimensi lakaran**, boleh disunting di tempatnya.

## Keadaan dalam sejarah

| Keadaan | Dipaparkan sebagai | Maksud |
|---|---|---|
| Dibina | Normal | Semuanya baik |
| Amaran | ⚠ | Dibina, dengan sesuatu untuk disemak: "Terlebih takrif: 1 hubungan tidak diperlukan." atau "Tiada apa yang tinggal daripada bahagian selepas ini." |
| Ralat | ⚠ ralat, merah | Tidak dapat dibina; mesej menyatakan sebabnya |
| Belum dibina | ⚠ belum dibina | Memerlukan ciri yang gagal, digantung atau digulung balik, atau memerlukan kernel tepat, yang tiada dalam versi ini ("Sweep: belum dibina lagi. …") |
| Digantung | mati | Dimatikan |
| Digulung balik | dilorekkan, di bawah bar gulung balik | Tidak dibina sehingga anda menggulung ke hadapan |

## Tetapan bahagian

Klik ruang kosong supaya tiada apa dipilih. Panel kanan memaparkan **Bahagian**:

- **Nama**: nama bahagian, digunakan untuk nama fail dan blok tajuk lukisan (sehingga 120 aksara).
- **Lengkung**: lihat di bawah.

### Resolusi lengkung

Kernel jejaring membina pepejal itu sendiri daripada fasetan rata, jadi paparan, STL, 3MF, STEP berfaset, isipadu dan paparan lukisan semuanya mengikut **Lengkung**: berapa banyak fasetan setiap pusingan penuh.

| Tetapan | Fasetan setiap pusingan | Isipadu bentuk bulat |
|---|---|---|
| Kasar (32 setiap pusingan) | 32 | Kira-kira 0.64 % di bawah nilai benar |
| Normal (64 setiap pusingan) | 64 | Kira-kira 0.16 % di bawah (lalai) |
| Halus (128 setiap pusingan) | 128 | Kira-kira 0.04 % di bawah |
| Sangat halus (256 setiap pusingan) | 256 | Kira-kira 0.01 % di bawah |

Lengkung yang lebih halus memberi eksport dan paparan yang lebih licin, dan pembinaan semula yang lebih perlahan. Tetapan disimpan dalam fail bahagian.

## Belum dibina lagi

Fillet berjejari berubah, fillet dan chamfer pada tepi bulat, cangkerang yang membuka muka melengkung, cerun tarik pada muka melengkung, sweep, loft, rib, pepejal STEP dengan muka melengkung tepat, jasad baharu, tirus, "hingga" muka atau bucu, dan rujukan pada muka dan tepi pepejal memerlukan kernel tepat, yang tiada dalam versi ini. Juga belum dibina: lubang berulir dan lubang kaunter tirus. Lihat [Apa yang belum dibina](topic:not-built-yet).
