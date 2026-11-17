---
title: Bentuk bebas dengan Bentuk, dan ciri permukaan
summary: Tolak dan tarik sangkar kawalan yang licin dalam ruang kerja Bentuk, lipat tepi, guna simetri, semak dan siapkan menjadi pepejal atau permukaan tepat, kemudian tampal, loft, jahit, tebalkan, ofset, panjangkan dan pangkas permukaan dalam Reka bentuk. Apa yang tepat dan apa yang dianggarkan.
keywords: bentuk, bentuk bebas, t-spline, subdivisi, catmull-clark, sangkar, quadball, lipatan, simetri, zebra, kelengkungan, permukaan, tampalan, isi, permukaan loft, jahit, tebalkan, permukaan ofset, panjangkan, pangkas
from: 0d326ef4
---

:::note
**Belum dibina dalam versi ini.** Menyiapkan bentuk ke dalam bahagian, dan ciri permukaan, memerlukan kernel geometri tepat, yang versi PartCraft ini tidak ada: ia membina setiap bahagian dengan kernel jejaring. [Apa yang belum dibina](topic:not-built-yet) menerangkan apa yang perlu dilakukan sebaliknya. Bahagian selebihnya halaman ini menerangkannya seperti cara ia berfungsi dengan kernel tepat.
:::

Ruang kerja **Bentuk** menghasilkan bentuk organik. Anda menyunting **sangkar**, jaringan kasar bucu, tepi dan muka. Bentuknya ialah permukaan licin yang dikawal oleh sangkar (had permukaan Catmull–Clark), jadi menggerakkan satu bucu melengkungkan permukaan dengan lembut di sekelilingnya. Apabila ia kelihatan betul, **Kemasan** menambahnya ke sejarah bahagian sebagai ciri *Bentuk*, dan kernel tepat menukarnya kepada permukaan B-spline sebenar. Anda kemudian boleh membulatkannya, memotongnya, menggabungkannya dengan ciri lain dan mengeksportnya sebagai STEP.

Pilih **Bentuk** dalam senarai **Ruang kerja** di sebelah kiri bar alat.

## Mulakan sangkar

1. Tetapkan **Saiz** dan **Pembahagian** dalam panel kanan. Pembahagian ialah bilangan muka bagi setiap sisi.
2. Klik {{ui:Kotak}}, {{ui:Quadball}} atau {{ui:Satah}} dalam bar alat. Panel juga mempunyai **Silinder**, **Torus** dan **Muka mengikut klik**.

- **Quadball** ialah sangkar kotak yang dipasang supaya titik bucunya terletak pada sfera. Di antara titik-titik itu permukaan berada sedikit di dalam sfera: kira-kira 0.4 % isipadu kurang dengan 2 pembahagian.
- **Satah** adalah terbuka, jadi ia menjadi badan permukaan (lihat "Ciri permukaan dalam Reka bentuk" di bawah).
- **Muka mengikut klik**: klik 4 titik pada satah atas (tanah) atau pada bucu sangkar untuk membuat satu muka. Muka yang berkongsi bucu akan bercantum. Tekan {{key:Enter}} selepas 3 titik untuk segi tiga, atau {{key:Esc}} untuk berhenti.

Sangkar anda yang belum siap disimpan bersama fail bahagian, jadi anda boleh menutup fail dan menyambung kemudian.

## Pilih dan alih

- Klik bucu, tepi atau muka sangkar. {{key:Shift}}+klik menambah atau melepaskan item. {{key:Esc}} mengosongkan pilihan.
- Gizmo muncul di tengah pilihan. Seret anak panah untuk bergerak sepanjangnya, atau segi empat sama untuk bergerak dalam satah itu. Tekan {{key:W}} untuk alih, {{key:E}} untuk putar dan {{key:R}} untuk skala, atau guna butang dalam panel. {{ui:Gizmo}} dalam bar alat menukar antara mereka.
- **Susutan lembut** (mm) juga menarik bucu dalam jarak itu, yang pudar secara lancar hingga tiada di tepi jarak itu.
- Setiap seretan ialah satu langkah buat asal: {{key:Ctrl+Z}} dan {{key:Ctrl+Y}} berfungsi seperti biasa.

## Ubah sangkar

Butang **Ubah suai** dalam panel bertindak ke atas pilihan:

| Butang | Fungsinya |
|---|---|
| {{ui:Ekstrud}} | Muka yang dipilih bergerak keluar sejauh **Jarak ekstrud**, sepanjang normalnya, dengan muka sisi baharu. Tepi terbuka yang dipilih menumbuhkan muka baharu ke luar. |
| {{ui:Gelung tepi}} / Masukkan gelung tepi | Membahagikan gelang muka empat sisi yang melintasi tepi yang dipilih, separuh di sepanjangnya. Lebih banyak gelung memberi lengkung yang lebih ketat. |
| Masukkan titik | Menambah bucu di tengah tepi yang dipilih. |
| Subbahagi | Membahagikan setiap muka yang dipilih kepada muka empat sisi di sekeliling tengahnya. |
| Jambatan | Menyambungkan dua muka yang dipilih, atau dua bukaan (pilih satu tepi terbuka pada setiap satu), dengan tiub muka. Kedua-duanya memerlukan bilangan tepi yang sama. |
| Isi lubang | Menutup bukaan melalui tepi terbuka yang dipilih dengan satu muka. |
| Kimpal | Menggabungkan bucu yang dipilih menjadi satu, di tengahnya. |
| Ratakan | Mengalihkan bucu yang dipilih ke satah yang paling sesuai dengannya. |
| Padam | Mengeluarkan muka, tepi (dua muka bercantum) atau bucu yang dipilih. |

## Tepi tajam, simetri dan paparan

- {{ui:Lipatan}} menjadikan tepi yang dipilih tajam. **Berat lipatan** 10 ialah tajam sepenuhnya. Berat yang lebih kecil kekal tajam untuk sebilangan langkah penghalusan dan kemudian melembut, yang memberi bulatan ketat dan bukan lipatan keras. **Nyahlipat** menjadikannya licin semula. **Bucu tajam** mengunci satu bucu supaya permukaan melalui titik itu dengan satu titik.
- **Simetri** mencerminkan sangkar merentasi X, Y atau Z = 0. Ia mengekalkan sisi positif, mencerminkannya, dan menyambungkan kedua-dua separuh. Selepas itu, suntingan di mana-mana sisi berlaku pada kedua-duanya. Bucu pada satah cermin kekal di situ.
- {{ui:Paparan}} bertukar antara **Licin** (permukaan yang akan menjadi ciri itu) dan {{ui:Kotak}} (muka sangkar itu sendiri).
- **Analisis**: **Jalur zebra** memantulkan cahaya berjalur dari pandangan semasa. Ia melengkung licin merentasi permukaan licin dan pecah pada lipatan. **Kelengkungan min** mewarnakan kawasan cembung merah, kawasan cekung biru dan kawasan rata putih. Ia diukur pada jejaring yang dipaparkan dengan formula kotangen, jadi ia ialah panduan, bukan ukuran.

## Semak dan siapkan

- **Semak tepat** menukar sangkar dalam kernel tepat tanpa mengubah bahagian anda. Ia melaporkan berapa banyak tampalan B-spline yang dibuat oleh sangkar, berapa banyak yang tepat, dan sama ada hasilnya ialah pepejal tertutup yang sah serta isipadunya.
- {{ui:Kemasan}} menambah ciri *Bentuk* ke dalam sejarah, atau mengemas kini bentuk yang anda sunting, dan membawa anda kembali ke Reka bentuk. Sangkar tertutup menjadi pepejal. **Operasi**nya dalam panel Reka bentuk boleh ialah Badan baharu, Cantum, Potong atau Persilangan. Sangkar terbuka menjadi badan permukaan.
- Untuk menukar bentuk kemudian, pilih ia dalam sejarah dan klik **Sunting dalam Bentuk**. Badan yang dibina disembunyikan semasa anda menyunting sangkarnya.
- **Buang** membuang sangkar tanpa menyentuh sejarah.

## Apa yang tepat dan apa yang dianggarkan

Setiap muka empat sisi sangkar, diperhalusi bila perlu, menjadi satu tampalan B-spline bikubik.

- Di mana setiap bucu muka adalah *sekata* (empat tepi bertemu di dalam permukaan, atau tiga pada tepi terbuka atau sepanjang lipatan), tampalan itu ialah permukaan subbahagi yang **tepat**. Ujian menyemaknya hingga 1e-9 mm.
- Di sekeliling **titik luar biasa** (tiga, lima atau lebih tepi bertemu, bucu muka tiga atau lima sisi, atau hujung lipatan) tiada tampalan polinomial tepat. Di situ tampalan mengambil titik tepat dan satah tangen pada bucu itu serta lengkung tepi jiran, jadi tampalan masih bertemu tanpa jurang. Kesinambungan tangen merentasi tepi yang bertemu pada titik itu adalah anggaran. Panel Bentuk dan panel ciri memberi sudut terbesar, biasanya di bawah 2°. **Tahap** yang lebih tinggi dalam panel ciri menjadikan tampalan ini lebih kecil dan lebih rapat.
- Lipatan tajam ialah tepi sebenar pepejal, jadi anda boleh membulatkannya.
- Setiap tampalan ialah mukanya sendiri, jadi bentuk mempunyai banyak muka dan garisan dilukis di antara mereka.

## Ciri permukaan dalam Reka bentuk

Arahan permukaan terdapat dalam menu {{ui:Lagi}} Reka bentuk, di bawah ciri. Ia memerlukan kernel tepat. Badan permukaan dilukis lut sinar dalam biru. Ia bukan sebahagian daripada pepejal sehingga anda menebalkan atau menjahitnya.

| Arahan | Fungsinya |
|---|---|
| Tampalan | Mengisi gelung tepi tertutup. {{key:Shift}}+klik tepi pepejal dahulu, atau pilih badan permukaan untuk mengisi bukaannya. **Tangen (G1)** menjadikan tampalan bertemu permukaan itu dengan licin. |
| Permukaan loft | Permukaan melalui satu rantai lengkung bagi setiap lakaran (terbuka atau tertutup), mengikut urutan sejarah. |
| Jahit | Menjahit badan permukaan sepanjang tepi kongsinya. Jika ia tertutup, hasilnya ialah pepejal, dengan Operasi seperti ciri lain. |
| Tebalkan | Memberi badan permukaan ketebalan: sepanjang normalnya, berlawanan dengannya, atau separuh ke setiap arah. Hasilnya ialah pepejal. |
| Permukaan ofset | Salinan badan permukaan yang dialihkan sepanjang normalnya. Yang asal kekal. |
| Permukaan panjang | Menumbuhkan permukaan satu muka melepasi tepi yang anda pilih. |
| Pangkas permukaan | Memotong badan permukaan di tempat badan permukaan lain, atau pepejal, merentasinya. Klik **Pilih titik pada keping** untuk memilih keping mana yang hendak dikekalkan, atau kekalkan semua yang lain. |

Jahit, Tebalkan, Panjangkan dan Pangkas menggunakan badan permukaan tempat mereka bermula. Ciri kemudian menggunakan yang baharu.

Had setakat ini: bentuk dengan beberapa keping tertutup berasingan tidak menukar kepada satu pepejal; kawasan sekata tidak digabungkan menjadi permukaan yang lebih besar; dan lihat [Apa yang belum dibina](topic:not-built-yet).
