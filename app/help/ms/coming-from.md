---
title: Datang dari pemodel parametrik lain
summary: Bagaimana tabiat pemodel bahagian parametrik desktop dipetakan kepada PartCraft, dan perbezaan yang menjatuhkan pengguna berpengalaman dalam jam pertama.
keywords: pertukaran, migrasi, biasa, pengurus ciri, pokok reka bentuk, dimensi pintar, ekstrud timbul, ekstrud potong, wizard lubang, padanan, pengesanan gangguan, bar gulung balik, pengurus sifat, tetikus, perbezaan
from: fbacaee1
---

Jika anda mereka bentuk bahagian dalam SolidWorks, kebanyakan idea PartCraft akan biasa kepada anda: lakaran pada satah Front, Top dan Right, hubungan dan dimensi pintar, sejarah ciri dengan bar gulung balik, dan himpunan yang diletakkan dengan padanan. Cara anda mencapainya berbeza di beberapa tempat, dan binaan pertama ini melakukan kurang. Halaman ini memetakan tabiat anda dan menyenaraikan kejutannya.

## Tabiat, dipetakan

| Anda biasa dengan | Dalam PartCraft |
|---|---|
| Pokok reka bentuk di sebelah kiri | Sejarah di sebelah kiri: satah, kemudian ciri, dengan lakaran bertakuk di bawah ciri yang menggunakannya |
| Satah Front, Top dan Right | Tiga yang sama, melalui asalan. Front ialah satah XY, Top ialah XZ, Right ialah YZ; Y menghala ke atas |
| Lakaran pada satah atau muka, kemudian sudut pengesahan untuk keluar | {{ui:Lakaran}} ({{key:S}}) pada satah atau muka rata yang dipilih; {{ui:Keluar}} atau {{key:Esc}} sehingga ia tertutup |
| Smart Dimension | {{ui:Dimensi}} ({{key:D}}). Klik satu atau dua item, kemudian di mana nombor diletakkan. Di tempat anda meletakkannya, ia memilih mengufuk, menegak atau sejajar |
| Add Relations dalam panel sifat | Pilih item, kemudian butang hubungan dalam panel kanan (Koinsiden, Mengufuk, Selari, Tangen, Sama dan sebagainya) |
| Hubungan automatik semasa melakar | Snap menambah hubungan koinsiden, titik-atas-lengkung, mengufuk dan menegak |
| Warna lakaran biru / hitam / merah | Idea yang sama: biru kurang ditakrifkan, hitam ditakrifkan sepenuhnya, merah ditakrifkan berlebihan. Cip menunjukkan darjah kebebasan yang tinggal |
| Garis pusat untuk revolusi | {{ui:Garis pusat}} ({{key:N}}); {{ui:Revolusi}} menggunakan garis pusat pertama melainkan anda memilih paksi lain |
| Fillet lakaran | {{ui:Fillet}} ({{key:F}}) dalam lakaran: klik sudut, taip jejari |
| Suis geometri binaan | {{ui:Binaan}} ({{key:Q}}) |
| Timbul ekstrud | {{ui:Ekstrud}}: Buta, Tengah satah, Sehingga muka / seterusnya / bucu, Ofset dari muka, arah kedua, tirus, satu kontur (Pilih kawasan) |
| Potongan ekstrud | {{ui:Potong}}: bermula sebagai Tembus semua; tukar kepada Buta untuk poket |
| Timbul / potongan revolusi | {{ui:Revolusi}} / {{ui:Lagi}} › {{ui:Potongan putar}} |
| Satah / paksi / titik rujukan | {{ui:Lagi}} › {{ui:Satah}}, {{ui:Paksi}}, {{ui:Titik}} (lihat [Satah, paksi dan titik rujukan](topic:reference-geometry)) |
| Timbul atau potongan sapuan / loft, cerun tarik | {{ui:Lagi}} › {{ui:Cerun tarik}} pada muka rata (lihat [Sapuan, loft dan cerun tarik](topic:sweep-loft-draft)). {{ui:Sweep}} dan {{ui:Loft}} belum dibina dalam versi ini (ia memerlukan kernel tepat) |
| Wizard Lubang | {{ui:Lubang}} pada setiap titik lakaran yang longgar: mudah, kaunter, kaunter sudut (90° / 82°) atau benang ISO metrik M2–M24 yang diberi benang, tembus atau buta |
| Corak lurus / bulat, cermin | {{ui:Linear}}, {{ui:Bulatan}}, {{ui:Cermin}} (ciri atau seluruh jasad) |
| Fillet dan chamfer pada tepi | {{ui:Fillet}} / {{ui:Chamfer}}: klik tepi, {{key:Shift}}+klik lagi, kemudian butang. Satu jejari; chamfer sama, dua jarak atau jarak-sudut. Dalam versi ini hanya tepi lurus antara dua muka rata, dan lengkung yang bertemu di sudut dipotong serong. Bundarkan atau serongkan tepi melengkung dalam lakaran ({{ui:Fillet}} dalam lakaran, {{key:F}}) |
| Cangkerang | {{ui:Cangkerang}}: klik muka rata untuk dibuka, kemudian butang. Satu ketebalan dinding |
| Buka fail STEP | {{ui:Buka}}: dibaca sebagai segi tiga, jasad pepejal untuk dibina ([Buka fail STEP](topic:import-step)) |
| Sunting ciri, kemudian OK | Klik ciri; tukar nombor di sebelah kanan; ia dibina semula semasa anda menaip. Tiada OK, tiada Batal: gunakan {{key:Mod+Z}} |
| Sunting lakaran | Klik dua kali lakaran dalam sejarah |
| Bina semula | Automatik selepas setiap perubahan. Tiada kekunci bina semula |
| Gantung / nyahgantung | {{ui:Gantung}} / {{ui:Nyahgantung}} dalam panel kanan |
| Seret bar gulung balik | {{ui:Gulung balik ke sini}} pada ciri; klik "Bar gulung balik · gulung ke hadapan" untuk kembali |
| Seret ciri dalam pokok untuk menyusun semula | {{ui:Alih ke atas}} / {{ui:Alih ke bawah}} atau {{key:Alt+Up}} / {{key:Alt+Down}}; ditolak dengan sebab apabila ia akan memecahkan kebergantungan |
| Sunting dimensi dengan klik dua kali pada model | Pilih ciri: dimensi lakarannya disenaraikan dalam panel kanan |
| Padanan: koinsiden, sepusat, jarak, sudut | {{ui:Sambungan}} ({{key:J}}): pilih muka rata pada setiap bahagian; sambungan meletakkannya muka ke muka. **Pusat pada** paksi bertindak seperti sepusat; **Ofset** seperti jarak; **Sudut** seperti sudut |
| Komponen tetap | Bahagian pertama ditanah; {{ui:Jadikan bahagian yang ditetapkan}} menukarnya |
| Masukkan komponen | {{ui:Tambah salinan}} atau {{ui:Pendua}} (salinan lain) atau {{ui:Selit}} (daripada fail bahagian) |
| Sunting bahagian dalam himpunan | {{ui:Sunting bahagian}}, kemudian {{ui:Kembali}} |
| Pengesanan gangguan | {{ui:Pertembungan}} |
| Mengalihkan komponen untuk melihat pergerakan | Seret peluncur sudut atau ofset sambungan berputar atau gelongsor; {{ui:Semak pergerakan untuk pertembungan}} menyapunya. Bahagian tanpa sambungan: **Alih dengan tangan** (anak panah untuk diseret, atau nilai ditaip) |
| Ukur / Periksa | {{ui:Pandangan}}, kemudian {{ui:Ukur}} ({{key:M}}): jarak, sudut, jejari, luas; {{ui:Sifat jisim}} |
| Pandangan letupan, BOM | Dalam himpunan dengan tiada apa dipilih: **Pandangan letupan** dan **Senarai bahan** dalam panel kanan |
| Sifat jisim | Kotak **Bahagian**: isipadu, luas permukaan, saiz, bagi pepejal berfasaet (sedikit rendah pada bahagian bulat). Tiada jisim: belum ada bahan |
| Simpan, Simpan sebagai STEP | {{ui:Simpan}} memuat turun `.partcraft.json`; {{ui:Eksport}} mempunyai STL, 3MF, STEP tepat (AP242 atau AP214), STEP berfasaet, DXF dan lukisan PDF |
| Buat lukisan daripada bahagian | {{ui:Lukisan}}: helaian A3 automatik dengan tiga pandangan, isometrik, satu keratan, satu perincian, datum, bingkai kawalan ciri dan simbol kemasan. Hanya saiz keseluruhan didimensikan |
| Seret tengah untuk memutar | **Seret kiri** memutar di sini. Seret tengah atau kanan untuk memanning. Roda zum pada penunjuk |
| Orientasi pandangan, Normal kepada | Menu {{ui:Pandangan}}; {{ui:Normal to}} untuk muka, satah atau lakaran yang dipilih |
| Zum untuk muat (F) | {{key:F}}, atau {{ui:Fit}} (dalam lakaran, {{key:F}} ialah alat Fillet) |
| Menu klik kanan | Tiada. Seret kanan memanning; dalam lakaran, klik kanan menamatkan rantai garisan |

:::tip
Jika tangan anda biasa dengan SolidWorks, pilih gaya menu {{ui:Pokok ciri}} dalam {{ui:Tetapan}} › {{ui:PartCraft}} › {{ui:Menu, kekunci dan tetikus}}: reben tab Ciri, Lakaran, Permukaan, Penilaian, Lukisan, Himpunan dan Pandangan, butang tengah mengorbit, {{key:Shift}} dan butang tengah memanning, dan butang kiri hanya memilih. Lihat [Menu, kekunci dan tetikus](topic:menus-keys-and-mouse).
:::

## Perbezaan yang menjatuhkan orang

**Keseluruhan lakaran ialah profil.** Ekstrud dan Revolusi menggunakan setiap gelung tertutup dalam lakaran. Anda tidak boleh memilih satu kawasan atau satu kontur lakaran untuk satu ciri. Gunakan satu lakaran bagi setiap ciri.

**Lakaran mana yang diambil ciri.** Ciri menggunakan lakaran yang baru anda tutup atau yang dipilih dalam sejarah. Dengan tiada apa dipilih, ia mengambil lakaran terbaru yang belum digunakan mana-mana ciri. Jika anda mendapat yang salah, pilih lakaran yang betul dan pilih ciri semula.

**Perubahan dikenakan semasa anda menaip.** Tiada dialog ciri dengan OK dan Batal. Setiap nombor membina semula serta-merta, dan {{key:Mod+Z}} ialah jalan kembali. Senarai buat asal meliputi suntingan lakaran, ciri dan tetapan sekaligus.

**Takrifan berlebihan tidak dibenarkan berdiam diri.** Tiada dimensi dipacu (rujukan). Dimensi yang sudah tersirat oleh hubungan lain dilaporkan sebagai ditakrifkan berlebihan ("sudah tersirat. Padam."). Dimensi yang bercanggah membiarkan geometri tidak berubah dan bertukar merah. Padam satu, atau buat asal.

**Sapuan dan loft belum dibina; fillet, chamfer, cangkerang dan cerun tarik mempunyai had.** Versi PartCraft ini membina setiap bahagian dengan kernel jejaring; cip bar status sentiasa berkata "Kernel jejaring". Fillet dan chamfer berfungsi pada tepi lurus antara dua muka rata, dan apabila bundaran bertemu di sudut ia dipotong serong, bukan dicampur. Cangkerang dibuka, dan cerun tarik hanya menyerong muka rata. Ciri yang memerlukan kernel tepat kekal boleh diklik, tetapi berkata "belum dibina" apabila dipilih. Lihat [Kernel pepejal](topic:solid-kernels) dan [Apa yang belum dibina](topic:not-built-yet).

**Dua butang dipanggil Fillet.** Dalam lakaran, {{ui:Fillet}} ({{key:F}}) membundarkan sudut lakaran. Pada bahagian, {{ui:Fillet}} dalam kumpulan Ciri membundarkan tepi pepejal (tepi lurus antara muka rata dalam versi ini). Tiada sapuan atau loft dalam versi ini: lihat [Apa yang belum dibina](topic:not-built-yet).

**Lubang memerlukan titik longgar.** {{ui:Lubang}} menebuk pada titik yang dibuat dengan alat Titik. Pusat bulatan dan hujung garisan tidak dikira.

**Tembus semua hanya untuk potongan.** Timbul memerlukan kedalaman. Tiada syarat hujung "sehingga bucu / permukaan / seterusnya" lagi.

**Bahagian berfasaet.** Kernel jejaring membina muka bulat daripada fasets rata, jadi pandangan, isipadu, eksport STL dan 3MF semuanya dibuat daripadanya: **Lengkung** dalam panel bahagian menjadikannya lebih halus. Eksport STEP tepat tidak: ia menulis muka bulat pada permukaan sebenar mereka.

**Milimeter sahaja.** Tiada tetapan inci lagi. Darabkan saiz inci dengan 25.4 apabila anda menaipnya.

**Y menghala ke atas.** Satah Front menghadap anda dan Top memandang bahagian dari atas, seperti yang anda jangkakan, tetapi paksi ke atas dunia ialah Y. Eksport STL, 3MF dan STEP tepat dipusingkan kepada Z ke atas; STEP berfasaet kekal Y ke atas.

**Padanan ialah muka, bukan pasangan geometri.** Sambungan sentiasa bermula daripada dua muka rata yang diletakkan muka ke muka. Untuk pin dalam lubang, pilih muka rata di sekeliling lubang dan bahu pin, kemudian tetapkan **Pusat pada** kepada paksi lubang dan paksi revolusi pin. Bahagian yang tidak dicapai sambungan kekal di tempat ia dimasukkan; anda tidak boleh menyeretnya. Sambungan dalam gelung tidak diselesaikan.

**Menyimpan ialah muat turun.** Tiada fail yang anda terus tulis ganti. Setiap simpanan ialah fail baharu dalam folder muat turun anda. Namakan bahagian dahulu, dan simpan fail anda dalam folder projek.

**Tiada menu konteks, tiada tab pengurus arahan.** Segalanya berada pada bar alat dan panel kanan, dan bar alat berubah mengikut apa yang anda lakukan: alat lakaran hanya muncul dalam lakaran, alat himpunan hanya dalam himpunan.

**Kekunci ialah huruf tunggal dalam lakaran.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} dan {{key:S}} memilih alat tanpa pengubah suai. Lihat [Kekunci dan tetikus](topic:keyboard).
