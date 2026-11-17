---
title: Ekstrud tonjolan dan potong tembusnya
summary: Tukar lakaran kepada pepejal dengan Ekstrud, tetapkan kedalaman buta, satah tengah, hingga atau dua arah, cerun tarik atau tirus, atau satu kontur lakaran, kemudian lakar pada muka dan Potong poket atau slot tembus.
keywords: ekstrud, tonjolan, tonjolan diekstrud, potong, potongan diekstrud, poket, tembus semua, buta, satah tengah, songsang, kedalaman, potong-ekstrud, tonjolan-ekstrud, pad, hingga muka, hingga muka seterusnya, hingga bucu, ofset dari permukaan, arah 2, dua arah, cerun tarik semasa ekstrud, tirus, kontur, kawasan, kontur dipilih
from: 3b13ff10
---

{{ui:Ekstrud}} menolak profil tertutup lakaran terus keluar dari satahnya untuk menghasilkan bahan. {{ui:Potong}} melakukan perkara yang sama tetapi membuang bahan. Kedua-duanya ciri yang sama di bawahnya; anda boleh menukar satu kepada yang lain kemudian.

## Ekstrud tonjolan

1. Lukis profil tertutup dan tutup lakaran (lihat [Lukis lakaran pertama anda](topic:sketch-basics)). Ia kekal dipilih.
2. Pilih {{ui:Ekstrud}}.

Pepejal 10 mm muncul, "Extrude1" menyertai sejarah dengan lakarannya menjorok di bawahnya, dan bar status menyatakan "Extrude1 ditambah. Tukar nombornya di sebelah kanan."

**Lakaran mana yang digunakan:** lakaran yang baru anda tutup, atau lakaran yang dipilih dalam sejarah. Jika tiada apa dipilih, PartCraft mengambil lakaran terkini yang belum digunakan oleh mana-mana ciri. Jika tiada langsung: "Buat lakaran dahulu: pilih satah, Lakaran, lukis profil tertutup, Keluar."

### Tetapkan kedalaman dan arah

Dalam panel kanan:

| Tetapan | Pilihan | Lalai |
|---|---|---|
| **Operasi** | Tonjolan (tambah bahan), Potong (buang bahan), Persilangan (kekalkan pertindihan), Jasad baharu (belum dibina dalam versi ini: ia memerlukan kernel tepat) | Tonjolan |
| **Akhir** | Buta (satu kedalaman), Satah tengah (kedua-dua arah), Tembus semua, Hingga muka atau satah, Hingga muka seterusnya, Hingga bucu, Ofset dari muka | Buta |
| **Kedalaman (mm)** | Sebarang saiz melebihi sifar (dipaparkan untuk Buta dan Satah tengah) | 10 |
| **Songsang arah** | Tumbuh ke sisi lain satah lakaran (tidak dipaparkan untuk Satah tengah) | Mati |

Taip nombor dan tekan {{key:Enter}} atau {{key:Tab}}: bahagian dibina semula serta-merta. **Satah tengah** meletakkan separuh kedalaman di setiap sisi lakaran.

### Hingga muka, muka seterusnya atau bucu

Belum dibina dalam versi ini: setiap hujung "hingga" memerlukan kernel tepat, dan ciri itu menyatakan "Ekstrud hingga muka, muka seterusnya atau bucu: belum dibina (ia memerlukan kernel tepat)." Gunakan kedalaman Buta yang anda ukur. Dengan kernel tepat, hujung berfungsi seperti berikut:

- **Hingga muka atau satah**: **Hingga** menerima muka rata (Pilih, kemudian klik) atau satah rujukan. Muka yang selari dengan lakaran memberi kedalaman tepat; muka condong memotong hujung pada cerun. Jika muka berada di belakang lakaran: "… Cuba Songsang arah."
- **Hingga muka seterusnya**: berhenti pada muka rata pertama jasad yang ditemui ekstrusi (muka melengkung tidak disokong di sini: ia menyatakannya).
- **Hingga bucu**: berhenti sama aras dengan bucu (klik berhampiran hujung tepi) atau ciri titik.
- **Ofset dari muka**: seperti Hingga muka, berhenti **Ofset (mm)** sebelum muka itu (diukur tegak lurus pada muka).

### Dua arah, tirus, satu kontur

- **Arah kedua** (Buta): juga mengekstrud **Kedalaman kedua (mm)** ke sisi lain lakaran.
- **Tirus (°)**: sisi condong ke dalam semasa bergerak (negatif: ke luar), seperti cerun tarik; satu arah sahaja. Belum dibina dalam versi ini (ia memerlukan kernel tepat): biarkan pada 0.
- **Kawasan**: **Pilih kawasan**, kemudian klik di dalam gelung untuk diekstrud; hanya kawasan itu digunakan (bulatan di dalam segi empat: klik di dalam bulatan untuk silinder, di antara keduanya untuk plat berlubang). **Semua** kembali kepada setiap gelung.

Di bawahnya, **Dimensi lakaran** menyenaraikan dimensi pemacu lakaran, supaya anda boleh menukar saiz profil tanpa membuka lakaran.

:::note
**Tembus semua hanya untuk potongan.** Tonjolan yang ditetapkan kepada Tembus semua gagal dengan "Tembus semua ialah untuk potongan. Gunakan kedalaman untuk tonjolan." Menukar ciri daripada Potong kembali kepada Tonjolan menukar Tembus semua kepada Buta untuk anda.
:::

## Potong poket

1. Klik muka rata yang ingin anda potong. Ia diserlahkan, dan panel kanan menyatakan **Muka**.
2. Pilih {{ui:Lakaran pada muka ini}} (atau {{ui:Lakaran}} dalam bar alat).
3. Lukis garis luar poket, contohnya segi empat tepat, dan beri dimensinya.
4. Pilih {{ui:Keluar}}.
5. Pilih {{ui:Potong}}. Ia bermula sebagai **Tembus semua**: ia membuang bahan sepenuhnya melalui bahagian.
6. Untuk poket, tetapkan **Akhir** kepada **Buta (satu kedalaman)** dan taip **Kedalaman (mm)**.

Potongan masuk ke dalam bahan, menjauhi muka yang anda lakar. Jika bar status menyatakan "Tiada apa untuk dipotong di sisi lakaran itu. Cuba arah lain.", tandakan **Songsang arah**.

Lakaran pada lantai poket mengikut lantai: tukar kedalaman poket dan lakaran bergerak bersamanya.

## Tarik atau tolak keseluruhan muka

Untuk menjadikan muka menonjol lebih jauh atau tenggelam, anda tidak perlu melukis garis luarnya. Klik muka rata, kemudian dalam panel kanan:

- {{ui:Ekstrud dari muka}} menarik muka keluar: PartCraft menambah lakaran pada muka yang memegang garis luarnya (lubang pada muka kekal sebagai lubang) dan Ekstrud sebanyak 10 mm.
- {{ui:Potong ke dalam}} menolak muka masuk: lakaran yang sama dan Potong separuh jalan ke dalam bahagian.

Kedua-duanya ialah satu langkah: {{key:Mod+Z}} membuang lakaran dan ciri bersama-sama. Ciri baharu dipilih, jadi taip nombor serta-merta dan tekan {{key:Enter}} untuk kedalamannya. Garis luar disalin sebagai garisan dan lengkok tetap: ia tidak mengikut perubahan kemudian pada muka. Jika sebahagian garis luar tidak dapat disalin (lengkung bentuk bebas), lakaran dibuka dengan apa yang dapat disalin; selesaikannya, kemudian pilih {{ui:Keluar}} dan {{ui:Ekstrud}} atau {{ui:Potong}}.

## Profil dengan pulau

Lakaran boleh mengandungi beberapa gelung tertutup. Gelung bersebelahan menjadi tonjolan (atau potongan) berasingan; gelung di dalam gelung lain menjadi lubang melalui tonjolan. Contohnya, segi empat tepat dengan dua bulatan di dalamnya diekstrud sebagai plat dengan dua lubang.

Untuk menggunakan sebahagian gelung sahaja, pilihnya dengan **Kawasan** (di atas); ciri lain boleh menggunakan gelung lain bagi lakaran yang sama.

## Sunting kemudian

- Klik "Extrude1" dalam sejarah untuk memaparkan semula tetapannya.
- Klik dua kali lakarannya (menjorok di bawahnya) untuk membuka lakaran; tutupnya untuk membina semula.
- Lihat [Tukar bahagian melalui sejarahnya](topic:edit-history) untuk menggantung, menggulung balik, menyusun semula dan memadam.

## Mesej lazim

| Mesej | Apa yang perlu dilakukan |
|---|---|
| "The sketch has no closed profile to extrude." | Lakaran tiada gelung tertutup garisan pepejal. Tutup jurang, atau tukar semula garisan pembinaan dengan {{key:Q}} |
| "The profile is open: an end at (x, y) is not joined to anything." | Buka lakaran dan sambungkan hujung itu ke garisan seterusnya |
| "There is nothing to cut yet." | Potongan memerlukan pepejal untuk dipotong. Buat tonjolan dahulu |
| "Nothing is left of the part after this." | Potongan membuang semuanya. Semak saiz dan arahnya |

Lagi dalam [Penyelesaian masalah](topic:troubleshooting).
