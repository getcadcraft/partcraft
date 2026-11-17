---
title: Nesting part datar pada lembaran
summary: Susun part datar di atas pelat atau gulungan dengan limbah sesedikit mungkin yang bisa dicari PartCraft, tidak lebih dekat dari jarak yang Anda tentukan, lalu simpan tata letaknya sebagai DXF untuk laser, plasma, waterjet, atau router.
keywords: nesting, nest, lembaran, pelat, gulungan, laser, plasma, waterjet, router, pemotongan, pemanfaatan, pemakaian material, sisa, limbah, jarak, kerf, serat, arah rol, dxf, pola bentangan, garis luar
from: 8dcce1a6
---

**Nesting** menempatkan banyak part datar pada satu lembaran sehingga material yang tersisa sedikit mungkin. PartCraft menata part satu per satu, masing-masing di tempat yang membuat panjang lembaran terpakai paling pendek, mencoba beberapa urutan dan berputar dalam beberapa detik, lalu menyimpan hasil terbaik. Part boleh masuk ke dalam lubang part lain dan ke dalam rongga huruf L atau U.

## Buka

- {{ui:Export}} › {{ui:Nest flat parts on sheets…}} membuka fitur ini dengan pola bentangan part, atau — dalam assembly — dengan pola bentangan setiap part sheet metal, sebanyak jumlah salinannya.
- Pada part sheet metal, pilih {{ui:Lay flat}} lalu {{ui:Nest on sheets…}} di bawah pola bentangan.
- {{ui:Add outlines from a DXF…}} menambahkan setiap garis luar tertutup dalam file DXF sebagai part: gambar dari CadCraft yang disimpan sebagai DXF, atau file dari perangkat lunak mesin potong Anda sendiri. Garis luar di dalam garis luar lain menjadi lubang. Garis dan busur yang tersambung ujung ke ujung dihitung sebagai satu garis luar. File dalam inci, sentimeter, atau meter diubah menjadi milimeter.

:::note
Membentangkan sheet metal memerlukan kernel geometri yang tepat (lihat [Sheet metal](topic:sheet-metal)). Garis luar dari file DXF selalu bisa dipakai.
:::

## Atur

Untuk setiap part, isi **berapa banyak** yang Anda butuhkan dan **seratnya**: {{ui:Any direction}}, {{ui:Along the sheet (as drawn)}} untuk lembaran yang disikat atau digulung dan harus searah, atau {{ui:Across the sheet}}.

Di bawah **Lembaran**:

- **Stok**: {{ui:Plates}} dengan panjang dan lebar tertentu (dan berapa banyak yang Anda miliki; 0 = sebanyak yang dibutuhkan), atau {{ui:A roll}} dengan lebar tertentu, sepanjang yang dibutuhkan.
- **Margin tepi** dibiarkan kosong di setiap tepi lembaran (untuk klem, atau tepi yang tidak rata).
- **Jarak antar part** adalah jarak terkecil antara dua garis potong: minimal kerf mesin potong Anda, ditambah yang dibutuhkan material.
- **Putaran**: sudut yang boleh dipakai untuk memutar part, setiap 90° secara default. Putaran lebih sedikit berjalan lebih cepat; lebih banyak dapat memanfaatkan lembaran lebih baik.
- **Part boleh dibalik** membuat part bisa diletakkan terbalik. Matikan untuk sheet metal: pola bentangan yang dibalik akan menekuk ke arah sebaliknya.

Tekan {{ui:Nest}}. Pratinjau menampilkan setiap lembaran; fakta menyebutkan berapa pelat (atau berapa bagian gulungan) yang dipakai dan berapa banyak material yang diambil part. Setiap yang tidak muat akan disebutkan namanya.

## Simpan

{{ui:Save DXF}} menulis tata letak sebagai DXF (R12, milimeter), satu lembaran di bawah lembaran berikutnya: garis luar lembaran pada layer SHEET, part pada PARTS (busur tetap sebagai busur), dan nama setiap part pada LABELS.

:::tip
Mencampur beberapa part biasanya memberi nesting yang lebih baik daripada banyak salinan dari satu part: part kecil mengisi celah di antara part besar.
:::

## Potong lembaran (G-code)

**Ekspor › Lembaran hasil nesting ke G-code** membaca DXF hasil nesting (yang ini, atau lembaran dari add-on Cabinets di CadCraft) dan membuat satu program per lembaran melalui post yang Anda pilih: lubang dan potongan dibuat terlebih dahulu, lalu garis luar, setiap potongan berjarak radius mata pahat di luar part, menembus lembaran dan 1 mm lebih dalam, dengan tab jika Anda memintanya. Daftar post terdiri dari post bawaan dan post milik studi Manufacture Anda sendiri. Periksa setiap program di simulator sebelum menjalankannya: pengeboran dan kantong tidak dibuat.

## Yang perlu diperiksa

PartCraft memeriksa ulang setiap tata letak pada bentuk sebenarnya (bukan pada grid yang dipakai saat pencarian): tidak ada dua part yang lebih dekat dari jarak yang ditentukan, dan tidak ada yang berada di dalam margin. PartCraft tidak merencanakan pemotongan: lead-in, urutan pemotongan, pemotongan tepi bersama sekali saja, dan penyimpanan sisa lembaran adalah tugas perangkat lunak mesin potong Anda. Periksa DXF di sana sebelum memotong.
