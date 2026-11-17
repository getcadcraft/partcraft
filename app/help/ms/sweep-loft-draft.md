---
title: Sweep, loft dan cerun tarik
summary: Sweep profil tertutup sepanjang laluan lengkung lakaran atau tepi model, loft melalui keratan pada satah berbeza, dan tambah cerun tarik pada muka; dengan pilihan, hasil tepat dan mesejnya.
keywords: sweep, boss sweep, potongan sweep, paip, laluan, loft, boss loft, campurkan keratan, berlurus, cerun tarik, sudut cerun tarik, muka meruncing, satah neutral, arah tarikan, acuan
from: 9d637981
---

:::note
**Dalam versi ini** sweep dan loft belum dibina: ia memerlukan kernel geometri tepat, yang tiada dalam versi PartCraft ini. [Apa yang belum dibina](topic:not-built-yet) menerangkan apa yang perlu dilakukan sebaliknya; bahagian Sweep dan Loft menerangkannya seperti cara ia berfungsi dengan kernel tepat. **Cerun tarik berfungsi** pada muka rata: kernel jejaring membinanya, dengan hasil yang sama seperti yang diberikan kernel tepat.
:::

Ketiga-tiganya terdapat dalam menu {{ui:Lagi}} kumpulan Ciri (lihat [Kernel jejaring](topic:solid-kernels)). Setiap satu boleh menambah bahan, memotong bahan, mengekalkan hanya bahagian yang bertindih (**Persilangan**) atau membuat **Jasad baharu** (sweep dan loft: **Operasi** dalam panel).

## Sweep

Sweep menggerakkan profil tertutup sepanjang laluan: paip, pemegang, spring wayar, landasan.

1. Lukis **laluan** dalam satu lakaran: garisan dan lengkok yang bercantum hujung ke hujung (atau guna tepi model, di bawah).
2. Lukis **profil** dalam lakaran lain yang satahnya melalui satu hujung laluan, contohnya bulatan pada satah atas di permulaan laluan yang dilukis pada satah depan.
3. Pilih lakaran profil dan pilih {{ui:Lagi}}, kemudian {{ui:Sweep}}. Lakaran lain yang paling baharu menjadi laluan.

Dalam panel:

| Tetapan | Fungsinya |
|---|---|
| **Laluan** | Tandakan lakaran yang membentuk laluan (beberapa lakaran bercantum hujung ke hujung menjadi satu laluan 3D); **Pilih tepi model** menambah tepi bahagian |
| **Orientasi** | Ikut laluan (lalai), Frenet, Tetap (keratan kekal selari dengan profil), Kekalkan satu arah, Sepanjang lengkung panduan |
| **Skala akhir** | Profil membesar atau mengecil secara linear kepada saiz ini di hujung (1 = malar) |

Sudut tajam dalam laluan dibentuk sebagai sambungan serong. Bulatan berjejari 5 yang di-sweep sepanjang garisan 100 mm ialah silinder dengan tepat 2500π mm³; sepanjang lengkok suku berjejari 50, ia ialah torus suku dengan 625π² mm³.

## Loft

Loft mencampurkan dua atau lebih keratan pada satah yang berbeza.

1. Lukis setiap keratan dalam lakarannya sendiri (satu gelung tertutup setiap satu), pada satah asas, satah rujukan (lihat [Satah rujukan, paksi dan titik](topic:reference-geometry)) atau muka.
2. Pilih {{ui:Lagi}}, kemudian {{ui:Loft}}. Setiap lakaran satu-gelung yang belum digunakan menjadi keratan, mengikut urutan sejarah.

Panel menyenaraikan keratan mengikut urutan (**Naik** menyusun semula, **Alih keluar** membuang satu); **Tambah lakaran** menambah satu lagi, **Pilih muka** menambah muka rata bahagian. **Berlurus** membuat muka rata di antara keratan dan bukannya campuran licin. Di antara dua segi empat sama, kedua-duanya ialah frustum yang sama (segi empat sama 40 mm kepada 20 mm sepanjang 30 mm: tepat 28000 mm³).

Keratan dengan bilangan sisi yang berbeza (segi empat sama kepada segi tiga) dipadankan oleh OpenCascade, yang mungkin memutarkan muka sisi; ciri itu memberi amaran. Lukis keratan dengan bilangan sisi yang sama, bermula dari bucu yang sepadan, untuk hasil yang paling kemas.

### Rel panduan

Rel panduan ialah lengkung yang mesti diikuti oleh sisi loft dari keratan pertama hingga yang terakhir, untuk bonjolan, pinggang atau cerun keluar yang anda lukis sendiri.

1. Lukis dua atau lebih rel: lengkung terbuka (garisan, lengkok, splin) yang bermula dari keratan pertama hingga yang terakhir dan merentasi setiap keratan sekali. Satu lakaran boleh memuatkan beberapa rel: setiap rantai berasingan dalamnya ialah rel sendiri. Lukis rel supaya ia benar-benar bertemu setiap keratan: tarik (snap) hujungnya ke titik keratan.
2. Dalam panel Loft, di bawah **Rel panduan**, tandakan lakaran yang memuatkannya, atau klik {{ui:Pilih tepi model sebagai landasan}} dan klik tepi bahagian (Esc menamatkan).

Dengan rel, loft ialah permukaan Gordon melalui keratan dan rel (lihat [Permukaan melalui rangkaian lengkung](topic:gordon-surfaces)), ditutup rata di kedua-dua hujung menjadi pepejal. Panel menyatakan sejauh mana ia mengikutinya. Setiap keratan kemudian mesti menjadi lakaran (titik atau muka tidak boleh menerima rel), dan **Berlurus** tidak terpakai. Rel yang tersasar daripada keratan lebih 0.01 mm ditolak, dengan jurang ditunjukkan.

Diperiksa: dua bulatan (20 mm dan 10 mm merentasi 40 mm) dengan empat rel lurus memberi isi padu frustum kon dalam lingkungan 0.000002 %; lengkok yang membonjol 5 mm memberi tong yang mengikuti setiap rel dalam lingkungan 0.00001 mm.

## Cerun tarik

Cerun tarik memiringkan muka supaya bahagian keluar dari acuan.

1. Pilih {{ui:Lagi}}, kemudian {{ui:Cerun tarik}} (atau {{key:Shift}}+klik muka dahulu). Tanpa apa-apa dipilih, anda berada dalam mod pilih: klik setiap muka untuk dimiringkan, kemudian {{ui:Selesai}}.
2. Tetapkan **Sudut (°)**, **Satah neutral** (tempat muka mengekalkan saiznya) dan **Arah tarikan** (normal satah neutral secara lalai).

Sudut positif mencondongkan muka ke dalam sepanjang tarikan dan membuang bahan; sudut negatif menambahnya. Satah neutral bermula sebagai satah Atas. Dalam versi ini hanya muka rata boleh dicerun tarik: muka silinder, kon atau bentuk bebas akan memaparkan "Cerun tarik: dalam versi ini muka rata sahaja (kernel jejaring membinanya)." Empat sisi blok 100 × 100 × 50 yang dicerun tarik 5° tentang bahagian bawahnya menjadi frustum dengan tepat h/3·(a² + b² + ab), dengan b = a − 2h·tan 5°.

## Mesej

| Mesej | Apa yang perlu dilakukan |
|---|---|
| "Satah profil mesti melalui satu hujung laluan …" | Alihkan lakaran profil ke permulaan (atau hujung) laluan |
| "Laluan ada jurang: lengkungnya tidak bercantum hujung ke hujung …" | Cantumkan lengkung laluan; dalam lakaran berasingan hujungnya mesti bertemu tepat |
| "Keratan loft memerlukan tepat satu gelung tertutup" | Pisahkan lakaran, atau buang gelung tambahan |
| "… tidak boleh dicerun tarik tentang satah neutral ini …" | Muka itu selari dengan satah neutral atau tidak menyentuhnya |
| "Cerun tarik: dalam versi ini muka rata sahaja (kernel jejaring membinanya)." | Muka yang dipilih melengkung. Buangnya; cerun tarik muka rata sahaja |

:::note
Belum dibina: sweep yang memutar, sweep dinding nipis dan sweep permukaan, rel panduan loft dan tangensi hujung, cerun tarik pada silinder, kon dan muka bentuk bebas.
:::
