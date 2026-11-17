---
title: Pustaka analisis
summary: Pustaka skrip analisis yang boleh dibaca dalam ruang kerja Skrip: apa yang ada dalam setiap kumpulan, membuka fungsi secara baca sahaja, pengepalanya dengan kaedah, rujukan dan semakan, membuat salinan sendiri, dan cara salinan mengambil alih daripada fungsi pustaka.
keywords: pustaka, craftlib, analisis, elektromagnet, statik, modal, terma, pengoptimuman topologi, top88, SIMP, elektromagnetik, elektrostatik, magnetostatik, bendalir, Boltzmann kekisi, LBM, jejaring, voksel, tetrahedra, rujukan, semakan, pengesahan, salin, bayang
from: bf993859
---

Pustaka analisis ialah set skrip, setiap satu ialah fungsi yang boleh anda baca dari atas ke bawah: cara matriks kekukuhan dipasang, di mana syarat sempadan diletakkan, penyelesai mana yang dijalankan, dan cara keputusan dikira. Tiada apa-apa dalamnya yang tersembunyi dalam kotak hitam; hanya gelung dalaman yang pantas (matriks unsur, penyelesai jarang, penjejaringan) yang dibina dalam.

## Mula dengan contoh

Kumpulan **Contoh** mengandungi lima skrip pendek yang menggunakan pustaka dari awal hingga akhir. Klik satu, tekan {{ui:Buka (baca sahaja)}}, kemudian {{key:F5}}: setiap satu mengosongkan paparan, menunjukkan keputusan pada kanvas dan plot dalam paparan sub.

| Contoh | Apa yang ditunjukkan |
|---|---|
| Tegasan julur | Bar keluli 100 × 10 × 10 mm di bawah beban hujung 100 N: tegasan von Mises pada bar yang telah berubah bentuk, dan pesongan hujung berbanding teori rasuk pada empat saiz unsur (diplot) |
| Topologi rasuk MBB | Pengoptimuman topologi 60 × 20 yang klasik: reka bentuk terbentuk, pematuhan menurun, susun atur akhir (94 lelaran, pematuhan 203.19) |
| Medan kapasitor | Dua plat lebar 4 mm, berjarak 1 mm: potensi dan medan, kapasitans dengan kesan tepi berbanding nilai ideal dan formula Palmer |
| Aliran saluran | Aliran Boltzmann kekisi melepasi tiang dalam saluran: medan halaju dan sejarah penumpuan |
| Elektromagnet | Teras besi berbentuk C dengan jurang udara dan gegelung: ketumpatan fluks, medan dalam jurang berbanding formula litar magnet, kearuhan dan tarikan merentasi jurang. Dijelaskan langkah demi langkah dalam [Medan magnet dalam 2-D](topic:magnetic-fields-2d) |
| Magnet kekal | Teras yang sama dengan magnet kekal dan bukannya gegelung: titik kerja magnet, medan dalam jurang berbanding litar magnet, berapa banyak fluks yang bocor, dan tarikan. Dalam [Medan magnet dalam 2-D](topic:magnetic-fields-2d#permanent-magnets) |

## Kumpulan

| Kumpulan | Fungsi | Apa yang dilakukannya |
|---|---|---|
| Penjejaringan | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Kotak dan silinder sebagai heksahedra, kiub atau tetrahedra; kiub atau tetrahedra bagi mana-mana model (bahagian, badan, STL yang dimuatkan); isi padu unsur dan kualiti; memilih nod pada satah atau muka |
| Tegasan statik | `static_voxel`, `static_tet` | Tegasan statik linear pada kiub atau pada tetrahedra 10 nod: sesaran, tegasan, von Mises, tindak balas |
| Bingkai | `frame3d` | Bingkai 3D daripada rasuk, tiang dan tupang dengan kaedah kekukuhan langsung: pelepasan hujung, sokongan dan spring, beban sepanjang anggota; sesaran, tindak balas, daya hujung anggota. {{ui:Eksport sebagai CraftScript}} bagi DetailCraft dan BimCraft menulis keseluruhan model untuknya. Alat bantu analisis, bukan semakan kod |
| Getaran | `modal_tet` | Frekuensi semula jadi dan bentuk mod |
| Haba | `heat_steady`, `heat_transient`, `heat_system` | Pengaliran keadaan mantap dan fana dengan suhu tetap, input haba, penjanaan, fluks dan perolakan |
| Pengoptimuman topologi | `top88`, `top99`, `topopt3d` | Kod 2-D 88 dan 99 baris yang diterbitkan, dan kaedah yang sama dalam 3-D pada kiub |
| Elektromagnetik | `poisson2d`, `magnetostatic2d` | Elektrostatik 2-D (potensi, medan, kapasitans, cas) dan magnetostatik (potensi vektor, ketumpatan fluks, magnet kekal) |
| Aliran bendalir | `lbm2d`, `lbm3d` | Aliran Boltzmann kekisi: 2-D ditulis dalam skrip, 3-D pada kernel aliran PartCraft sendiri |

Pengepala setiap fungsi memberikan argumen tepatnya. Unit ialah unit kajian PartCraft melainkan pengepala menyatakan sebaliknya: milimeter, newton, megapascal, tan per milimeter padu untuk ketumpatan, watt dan kelvin untuk haba. Fungsi elektromagnet dan Boltzmann kekisi berfungsi dalam mana-mana unit yang konsisten; pengepala mereka menyatakan caranya.

## Bagaimana pustaka diperiksa

Pengepala setiap fungsi berakhir dengan **semakan**: kes kecil dengan jawapan yang diketahui. Ujian PartCraft menjalankan setiap satu daripadanya, dan di mana PartCraft mempunyai kajian sendiri untuk tugas yang sama, jawapan skrip dibandingkan dengan kajian itu pada jejaring yang sama:

- pesongan hujung julur berbanding teori rasuk (dalam 0.2 % dengan kiub, 0.05 % dengan tetrahedra), dan berbanding penyelesai ruang kerja **Simulasi** pada jejaring yang sama (sama hingga banyak digit);
- frekuensi pertama julur berbanding teori rasuk (0.24 % lebih rendah, seperti yang dijangka bagi rasuk pendek) dan berbanding penyelesai modal **Simulasi**;
- haba: dinding satah yang dipanaskan dengan tepat, badan kecil yang menyejuk mengikut formula kapasiti terkumpul, suhu slab yang pudar seperti yang diramalkan teori;
- pengoptimuman topologi: `top88` menghasilkan semula 94 lelaran dan pematuhan 203.1925 dalam kertas (dan 218.8032 dengan penapis ketumpatan); `topopt3d` berakhir pada pematuhan yang sama dengan ruang kerja **Generatif** dengan tetapan yang sama;
- kapasitans kapasitor dan medan solenoid panjang berbanding nilai buku teks, medan jurang elektromagnet berbanding formula litar magnet, serta magnet kekal berbanding magnet bulat di udara dan magnet yang ditutup oleh penutup besi;
- aliran saluran berbanding profil parabola yang tepat.

## Baca satu fungsi

1. Buka tab **Pustaka** bagi panel skrip.
2. Klik satu fungsi. Pengepalanya menunjukkan: apa yang dikiranya, kaedah, unit, andaian dan had, **rujukan** (buku atau kertas, dengan nombor persamaan) dan **semakan**, iaitu kes kecil dengan jawapan yang diketahui yang dijalankan oleh ujian PartCraft sendiri.
3. {{ui:Buka (baca sahaja)}} membuka keseluruhan skrip dalam tab dengan sempadan putus-putus. Anda boleh menjalankannya, memilih dan menjalankan sebahagian daripadanya, tetapi tidak boleh mengubahnya.

## Ubah satu fungsi

Tekan {{ui:Buat salinan}} (atau **Buat salinan untuk disunting** di atas tab baca sahaja). Salinan ialah skrip dalam bahagian anda dengan nama yang sama, jadi ia disimpan bersama bahagian itu, dan **setiap panggilan kepada fungsi itu kini menggunakan salinan anda**. Penyunting memberitahu anda perkara ini di atas skrip. Namakan semula salinan untuk mengekalkan kedua-duanya.

## Guna satu fungsi

Panggil fungsi pustaka dari mana-mana skrip dengan namanya, seperti fungsi terbina dalam:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Keputusan kembali sebagai nilai dalam ruang kerja; plot dan medan yang ditunjukkan muncul dalam paparan dan paparan sub.

Analisis statik bagi bahagian yang terbuka, contohnya, mengambil beberapa baris:

```
v = voxel_mesh(part(), 2);                   % kiub 2 mm
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % pegang bahagian bawah
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N ke bawah pada bahagian atas
r = static_voxel(v, 210000, 0.3, bc);       % keluli
```

`r` memegang sesaran, tegasan dan tindak balas; tegasan von Mises dilukis pada bahagian yang telah berubah bentuk. Bagi bahagian melengkung, gunakan `tet_mesh` dan `static_tet`, yang juga boleh membebankan dan memegang keseluruhan muka (`face_nodes`).

:::note
Fungsi pustaka ditulis dalam CraftScript, dan skrip Lua memanggilnya melalui `cs` seperti fungsi terbina dalam: `cs.static_tet(t, 200000, 0.3, bc)` (lihat [Skrip dalam Lua](topic:craftscript-lua)). Setiap fungsi menyelesaikan satu bahan dan satu kes beban; pengepala menyenaraikan apa lagi yang tidak diliputi.
:::
