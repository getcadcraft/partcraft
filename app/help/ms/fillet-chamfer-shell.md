---
title: Bulat, serong dan berongga dengan Fillet, Chamfer dan Cangkerang
summary: Pilih tepi dan tambah fillet berjejari malar atau berubah serta chamfer sama, dua jarak atau jarak-sudut, berongga bahagian dengan Cangkerang dengan memilih muka yang dibuka, tukar tepi atau muka yang digunakan ciri, dan betulkan kegagalan biasa.
keywords: fillet, bulat, adunan, chamfer, serong, cangkerang, berongga, ketebalan dinding, tepi, muka, pilih tepi, shift klik, muka terbuka, kernel tepat, kernel jejaring, belum dibina
from: e41c1c12
---

:::note
**Dalam versi ini** PartCraft membina fillet dan chamfer dengan kernel jejaring, pada **tepi lurus antara dua muka rata** sahaja: tepi kotak dan tepi lurus ekstrud serta potongan, sudut luar atau dalam (sudut dalam menerima bahan tambahan). Tepi bulat seperti bibir lubang, dan jejari yang berubah sepanjang tepi, belum dibina. Di tempat dua tepi bulat bertemu di sudut, bulatan itu dipotong serong (mereka bertemu pada lekuk tajam), tidak dicampur. **Cangkerang** juga berfungsi, dibina oleh kernel jejaring: ia hanya membuka muka rata, cangkerang dengan ketebalan dinding berbeza belum dibina, dan ia perlahan pada bahagian yang mempunyai banyak muka bulat. Lihat [Apa yang belum dibina](topic:not-built-yet).
:::

{{ui:Fillet}} membulatkan tepi, {{ui:Chamfer}} menyerongkannya dan {{ui:Cangkerang}} memberongga bahagian. Ketiga-tiganya berfungsi pada tepi dan muka pepejal serta dibina oleh kernel jejaring. Bulatannya difasetkan seperti setiap muka bulat (**Lengkung** menetapkan betapa halusnya); muka bulat ialah silinder yang boleh anda pilih dan ukur (lihat [Kernel jejaring](topic:solid-kernels)).

## Fillet atau chamfer tepi

### Pilih tepi dahulu

1. Klik tepi bahagian. Keseluruhan tepi diserlahkan, dan panel kanan menyatakan **Tepi**: jenisnya (Lurus, Bulatan atau lengkok, Lengkung), panjang dan muka yang dilaluinya.
2. Untuk menambah lebih banyak tepi, {{key:Shift}}+klik padanya. Setiap satu ditanda; {{key:Shift}}+klik tepi yang ditanda untuk melepaskannya. Tajuk panel mengira mereka ("4 edges") dan bar status menyatakan "4 edges picked. Fillet or Chamfer rounds them; Shift+click picks more, Esc clears."
3. Pilih {{ui:Fillet}} atau {{ui:Chamfer}} dalam bar alat, atau butang yang sama dalam panel kanan.

Ciri ditambah dengan semua tepi yang dipilih: fillet 2 mm, atau chamfer 1 mm. Bar status menyatakan, contohnya, "Fillet1 ditambah (4 edges). Tukar saiznya di sebelah kanan; Pilih tepi menukar tepi yang mana."

### Atau tambah ciri dahulu

1. Dengan tiada apa dipilih, pilih {{ui:Fillet}} atau {{ui:Chamfer}}.
2. PartCraft masuk ke mod pemilihan: tajuk panel kanan menyatakan "Fillet1: picking", bahagian dipaparkan seperti sebelum fillet (panel menyatakannya), dan bar alat memaparkan {{ui:Selesai}}.
3. Klik setiap tepi untuk menambahnya; klik lagi untuk melepaskannya. Bar status mengira mereka.
4. Pilih {{ui:Selesai}} (atau {{ui:Selesai memilih}} dalam panel), atau tekan {{key:Esc}} atau {{key:Enter}}.

### Tetapan

| Tetapan | Fillet | Chamfer |
|---|---|---|
| Saiz | **Jejari (mm)**, lalai 2 | **Jarak (mm)** ke belakang dari tepi pada kedua-dua muka, lalai 1 |
| **Tepi** | Berapa banyak | Berapa banyak |

Senarai di bawah menamakan setiap tepi mengikut dua muka yang dihubungkannya, seperti "Edge 1: Extrude1 end face × Extrude1 side". **Alih keluar** membuang satu. {{ui:Pilih tepi}} kembali kepada pemilihan. Klik dua kali ciri dalam sejarah berfungsi sama.

Tepi diingat mengikut dua muka yang dihubungkannya, jadi ia kekal pada tepi yang betul apabila anda menukar dimensi awal dalam sejarah.

### Fillet berubah dan jenis chamfer

- **Jejari berubah** (fillet): belum dibina dalam versi ini ("A fillet whose radius changes along the edge: not built yet (it needs an exact kernel). Give it one radius."). Dengan kernel tepat: tandakannya dan tetapkan **Jejari akhir (mm)**. Jejari berubah secara linear daripada **Jejari** di satu hujung setiap tepi kepada **Jejari akhir** di hujung yang lain; **Tukar hujung** membalikkannya.
- **Jenis** (chamfer): **Jarak sama**, **Dua jarak** (**Jarak kedua** pada muka lain) atau **Jarak dan sudut** (jarak pada satu muka, serong pada **Sudut (°)** ke muka itu). **Tukar sisi** meletakkan jarak pertama pada muka lain.

## Cangkerang bahagian

1. Klik muka rata yang hendak dibiarkan terbuka, contohnya bahagian atas kotak. Atau {{key:Shift}}+klik beberapa muka.
2. Pilih {{ui:Cangkerang}} dalam bar alat, atau {{ui:Cangkerang, membuka muka ini}} dalam panel muka itu.

Bahagian menjadi dinding 2 mm dengan muka yang dipilih terbuka. Tetapan:

| Tetapan | Fungsinya | Lalai |
|---|---|---|
| **Dinding (mm)** | Ketebalan dinding | 2 |
| **Dinding tumbuh ke luar (muka kekal di dalam)** | Ditandakan: dinding ditambah di luar, jadi bahagian dalam mengekalkan saiz bahagian | Mati: dinding masuk ke dalam dan bahagian luar mengekalkan saiznya |
| **Muka terbuka** | Berapa banyak muka dialih keluar | |

Ke dalam, dinding tepat sebesar ketebalan dinding: sudut luar kekal tajam, sudut dalam menjadi bulat (jejari = dinding), dan lubang yang melalui bahagian mendapat tiub dinding di sekelilingnya. Ke luar, dinding ditambah di luar permukaan asal, yang menjadi rongga, dan tepi luar menjadi bulat. Muka dalaman dinamakan mengikut muka yang diofsetkannya, jadi anda boleh memilihnya.

Hanya muka rata boleh dibuka: memilih yang melengkung menyatakan "Cangkerang: dalam versi ini ia hanya membuka muka rata (kernel jejaring membinanya)." Cangkerang perlahan pada bahagian yang mempunyai banyak muka bulat (beberapa saat setiap seribu segi tiga): gunakan tetapan **Lengkung** yang lebih kasar semasa anda mereka bentuk.

{{ui:Pilih muka}} menukar muka mana yang terbuka, dengan cara yang sama seperti memilih tepi. Senarai menamakan setiap satu, contohnya "Face 1: Extrude1 end face". Cangkerang tanpa muka terbuka tidak dibenarkan: "Pick the faces to remove (open), then shell."

## Susunan penting

Ciri dibina dari atas ke bawah. Fillet sebelum cangkerang dicangkerangkan bersama bahagian, jadi bahagian dalam turut mendapat sudut bulat. Fillet selepas cangkerang hanya membulatkan tepi yang anda pilih. Alihkan ciri dengan {{ui:Alih ke atas}} dan {{ui:Alih ke bawah}} (lihat [Tukar bahagian melalui sejarahnya](topic:edit-history)).

Tatasusunan dan pencerminan tidak boleh menyalin fillet, chamfer atau cangkerang: "Fillet1 changes the body's edges or walls; it cannot be copied. Copy the features that make solids (extrudes, revolves, holes, imports)." Corakkan lubang atau potongan dahulu, kemudian fillet semua tepi salinan dalam satu fillet.

## Apabila gagal

| Mesej | Apa yang perlu dilakukan |
|---|---|
| "A 5 mm round does not fit here (it is too big for a face next to one of the edges, or the edges meet in a corner the kernel cannot blend)." | Gunakan jejari yang lebih kecil, atau fillet kurang tepi sekali gus (beberapa ciri fillet, yang terkecil terakhir) |
| "An edge it rounds is gone: the edge between Extrude1 and Cut2." | Perubahan terdahulu telah membuang tepi itu. Pilih {{ui:Pilih tepi}}, alih keluar tepi merah dan pilih yang baharu |
| "The shell could not be made with this thickness (…)." | Dinding lebih tebal daripada bahagian sempit model, atau daripada jejari fillet. Buat dinding lebih nipis, atau fillet lebih besar daripada dinding |
| "That face has no name the history can follow; pick another." | Pilih muka yang dibuat oleh ciri (kebanyakan muka) |
| "Fillet: in this version only straight edges between two flat faces (the mesh kernel builds them). Round or bevel curved edges in the sketch." (juga Chamfer) | Tepi yang dipilih ialah bulat, seperti bibir lubang, atau terletak pada muka melengkung. Alih keluarnya dengan {{ui:Pilih tepi}}, dan bulatkan atau serongkan sudut itu dalam lakaran sebaliknya |
| "A fillet whose radius changes along the edge: not built yet (it needs an exact kernel). Give it one radius." | Nyahtandakan **Jejari berubah** |
| "Fillet by the mesh kernel: where rounded edges meet they are mitred, not blended." (⚠ dalam sejarah) | Amaran, bukan ralat: bahagian dibina. Tepi yang dipilih bertemu di sudut, dan bulatannya bertemu di sana pada lekuk tajam. Fillet kurang tepi, atau terima lekuk itu |
| "Shell: in this version it opens flat faces only (the mesh kernel builds it)." | Muka yang dibuka itu melengkung. Gunakan {{ui:Pilih muka}} dan alih keluarnya; buka hanya muka rata |

## Had

Dalam versi ini fillet dan chamfer hanya berfungsi pada tepi lurus antara dua muka rata, dengan satu jejari, dan bulatan yang bertemu di sudut dipotong serong. Cangkerang hanya membuka muka rata. Dengan kernel tepat, fillet berubah berubah secara linear sepanjang setiap tepi (satu undang-undang setiap ciri; tiada set jejari pada titik sepanjangnya). Fillet muka, fillet bulat penuh dan cangkerang dengan ketebalan dinding berbeza belum dibina.
