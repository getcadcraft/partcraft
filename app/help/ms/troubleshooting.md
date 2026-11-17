---
title: Penyelesaian masalah
summary: Masalah yang mungkin anda hadapi dalam PartCraft, daripada aplikasi yang tidak bermula kepada ciri yang gagal, lakaran yang tidak dapat diselesaikan, fail yang tidak dapat dibuka dan sambungan yang berkelakuan tidak betul, dengan mesej yang anda lihat dan penyelesaiannya.
keywords: masalah, ralat, bantuan, tidak berfungsi, gagal, kegagalan, ranap, kosong, webgl, webassembly, kernel, belum dibina, terlalu ditakrifkan, profil terbuka, tidak dapat dibuka, tiada apa berlaku, arah salah, perlahan
from: 7728542c
---

Apabila sesuatu tidak berfungsi, baca **bar status** di bahagian bawah dahulu: PartCraft memberitahu anda di sana sebab ia menolak atau apa yang dijangkakannya seterusnya. Ciri yang gagal juga memaparkan mesejnya di bahagian atas panel kanannya dan apabila anda menghalakan kursor pada barisnya dalam sejarah.

## Aplikasi tidak bermula

### "Pelayar ini tidak boleh memaparkan 3D (WebGL dimatikan atau tiada), jadi PartCraft tidak boleh berjalan di sini."

**Punca:** pelayar mematikan, menyekat atau tidak menyokong grafik 3D (WebGL) oleh pemacu grafik.

**Penyelesaian:**

:::chromium
Buka `chrome://settings/system` (atau `edge://settings/system` dalam Edge) dan hidupkan "Use graphics acceleration when available", kemudian mulakan semula pelayar. Jika ia sudah hidup, semak `chrome://gpu` untuk status WebGL, dan kemas kini pemacu grafik anda.
:::

:::firefox
Buka `about:support` dan lihat Graphics, WebGL. Jika ia disekat, kemas kini pemacu grafik. Dalam `about:config`, `webgl.disabled` mesti `false`.
:::

:::safari
WebGL sentiasa hidup dalam Safari terkini. Kemas kini macOS (Safari dikemas kini bersamanya). Jika masih gagal, cuba Chrome atau Firefox pada Mac yang sama untuk mengetepikan perkakasan grafik.
:::

Desktop jauh dan sesetengah mesin maya tidak mempunyai WebGL. Cuba pada komputer itu sendiri.

### "Kernel pepejal tidak dimuatkan: …"

**Punca:** kernel geometri (program WebAssembly) tidak dapat diambil atau dimulakan. Biasanya sambungan terputus semasa aplikasi dimuatkan, WebAssembly dimatikan oleh dasar syarikat atau tetapan pengukuhan pelayar, atau pelayar terlalu lama.

**Penyelesaian:** muat semula halaman semasa dalam talian. Jika ia terus gagal, cuba pelayar terkini yang lain. Dalam Firefox, `javascript.options.wasm` dalam `about:config` mesti `true`. Luar talian, aplikasi dan kernelnya hanya dimuatkan jika bar aplikasi telah menunjukkan **Sedia luar talian** sebelum anda kehilangan sambungan ({{ui:Simpan untuk luar talian}} semasa dalam talian; lihat [Bekerja luar talian](common:offline)).

### Butang luar talian berkata "Tidak dapat simpan" atau "Luar talian tidak tersedia"

**Tidak dapat simpan**: sesetengah fail tidak dimuat turun. Klik untuk cuba lagi semasa dalam talian; sambungan yang perlahan atau berbayar mungkin memerlukan percubaan kedua. **Luar talian tidak tersedia**: tetingkap pelayar ini tidak dapat menyimpan salinan luar talian (tetingkap peribadi dan sesetengah komputer terurus menyekatnya). Gunakan tetingkap biasa, atau biarkan tab terbuka.

### PartCraft luar talian tetapi sudah lapuk

Klik **Sedia luar talian** semasa dalam talian dan pilih {{ui:Simpan semula (dapatkan versi terkini)}}.

### "Sweep: belum dibina. Ia memerlukan kernel tepat, …"

Mesej penuhnya ialah "<Nama>: belum dibina. Ia memerlukan kernel tepat, yang tiada dalam versi PartCraft ini. Bantuan › Apa yang belum dibina menerangkan apa yang perlu dilakukan sebaliknya." Anda melihatnya apabila memilih Sweep, Loft, Rib, flens logam kepingan, ciri permukaan, Gabung, Alih jasad, Skala jasad atau Corak laluan, dan untuk perkara lain yang hanya kernel tepat boleh lakukan. Tiada yang salah dengan pelayar atau bahagian anda: versi PartCraft ini membina setiap bahagian dengan kernel jejaring. Lihat [Apa yang belum dibina](topic:not-built-yet) untuk apa yang perlu dilakukan sebaliknya, dan [Kernel jejaring](topic:solid-kernels).

### "Memuatkan kernel pepejal…" tidak pernah hilang

Tunggu sebentar pada sambungan yang perlahan: kernel dan pustaka 3D dimuat turun kali pertama. Kemudian muat semula. Jika halaman itu sendiri menunjukkan ralat, lihat di atas.

## Tiada apa berlaku apabila saya tekan kekunci

- Kekunci tidak berfungsi semasa kursor berada dalam kotak dalam panel. Klik dalam pandangan 3D atau tekan {{key:Esc}} selepas menaip (atau {{key:Tab}} untuk keluar).
- Kekunci anak panah dan {{key:Plus}}/{{key:Minus}} memusing dan menzum pandangan hanya selepas anda klik dalam pandangan.
- Dialog sedang terbuka: jawab dahulu.
- Dalam lakaran, {{key:F}} ialah alat Fillet, bukan Muat. Gunakan butang {{ui:Muat}}.

## Butang bar alat kelabu

- Butang ciri menjadi kelabu semasa lakaran dibuka. Tutup lakaran dahulu.
- Alat lakaran hanya berfungsi di dalam lakaran.
- {{ui:Buat asal}} dan {{ui:Buat semula}} menjadi kelabu apabila tiada apa untuk dibuat asal atau dibuat semula.
- {{ui:Himpunan}} memerlukan bahagian dengan pepejal. {{ui:Sambungan}} memerlukan dua bahagian dalam himpunan. {{ui:Sunting bahagian}} memerlukan bahagian dipilih.
- {{ui:STEP AP242 (pepejal tepat)}} dan {{ui:STEP AP214 (pepejal tepat)}} menjadi kelabu dalam himpunan: eksport setiap bahagian. Program lain menolak fail tepat: cuba {{ui:STEP AP214 (pepejal tepat)}}, kemudian {{ui:STEP (berfaset, kernel jejaring)}}, dan beritahu kami melalui {{ui:Bantuan}} › {{ui:Laporkan masalah}}.
- {{ui:Sweep}}, {{ui:Loft}} dan ciri lain yang memerlukan kernel tepat tidak menjadi kelabu: ia kekal boleh diklik, tip alatnya berakhir dengan "belum dibina (memerlukan kernel tepat)", dan mengkliknya memberitahu anda dalam bar status. Lihat [Apa yang belum dibina](topic:not-built-yet).
- {{ui:Lukisan}} memerlukan bahagian dengan pepejal, dan menjadi kelabu semasa lakaran dibuka.
- Item {{ui:Eksport}} menjadi kelabu dalam himpunan: himpunan belum boleh dieksport. Tutupnya, atau sunting bahagian, untuk mengeksport.

## Masalah lakaran

### Lakaran tidak membenarkan saya menambah hubungan

"Tiada hubungan sesuai untuk pilihan ini. Pilih satu atau dua item (Shift+klik menambah)." Hubungan itu memerlukan pilihan yang berbeza. Lihat [Hubungan dan dimensi lakaran](topic:sketch-relations) untuk apa yang diperlukan setiap satu.

### "Terlalu ditakrifkan: … tidak boleh dipenuhi kesemuanya. Buat asal, atau padam salah satu daripadanya."

**Punca:** hubungan atau dimensi baharu bercanggah dengan yang sudah ada. Lakaran tidak bergerak.

**Penyelesaian:** {{key:Mod+Z}}, atau padam salah satu item merah dalam senarai panel kanan (pilih **Padam** di sebelahnya).

### "Terlalu ditakrifkan: … sudah tersirat. Padamnya."

**Punca:** hubungan itu tidak menambah apa-apa: yang lain sudah memaksanya (contohnya Selari pada dua sisi segi empat, atau dimensi yang sudah tetap). Tiada dimensi dipacu dalam binaan ini.

**Penyelesaian:** padamnya. Ciri tetap dibina, dengan amaran.

### "Item-item ini tidak boleh didimensikan bersama."

Anda mengklik, contohnya, titik dan bulatan. Dimensikan ke titik pusat bulatan.

### "Fillet memerlukan sudut tempat tepat dua garisan bertemu." / "Jejari itu terlalu besar untuk garisan ini."

Klik tepat pada titik sudut bagi dua garisan pepejal. Gunakan jejari yang lebih kecil daripada yang dibenarkan oleh garisan yang lebih pendek.

### Geometri melompat kembali apabila saya menyeretnya

Seretan itu akan memecahkan hubungan atau dimensi, jadi PartCraft meletakkannya semula. Hanya geometri biru (kurang ditakrifkan) boleh dialihkan.

### "Lakaran ini tidak dapat dibuka: Memerlukan Extrude2, yang gagal."

Lakaran itu terletak pada muka ciri yang belum dibina. Betulkan ciri itu dahulu, atau nyahbatalkan penindasannya, atau majukan.

## Masalah ciri

| Mesej | Punca | Penyelesaian |
|---|---|---|
| "Buat lakaran dahulu: pilih satah, Lakaran, lukis profil tertutup, Keluar." | Tiada lakaran tidak digunakan dengan lengkung, dan tiada yang dipilih | Lukis lakaran, atau pilih lakaran yang hendak digunakan dalam sejarah |
| "Lakaran tiada profil tertutup untuk diekstrud." (atau "untuk diputar") | Tiada gelung tertutup garisan pepejal | Tutup jurang; tukar semula garisan binaan dengan {{key:Q}} |
| "Profil terbuka: hujung di (x, y) tidak bercantum dengan apa-apa." | Jurang pada titik itu | Buka lakaran, seret hujung ke jirannya supaya ia ditarik |
| "Profil bercabang di (x, y): lebih daripada dua hujung bertemu di sana." | Tiga garisan atau lebih bertemu di satu titik | Padam garisan tambahan, atau tukarkannya kepada binaan |
| "Gelung tertutup memerlukan sekurang-kurangnya tiga sisi atau satu lengkung." | Dua garisan ke depan dan ke belakang | Lukis semula gelung |
| "Tembus semua ialah untuk potongan. Gunakan kedalaman untuk boss." | Boss ditetapkan kepada Tembus semua | Tetapkan Tamat kepada Buta atau Satah tengah |
| "Tiada apa untuk dipotong di sebelah lakaran itu. Cuba arah yang satu lagi." | Potongan menghala jauh dari bahan | Tanda Arah terbalik |
| "Tiada apa untuk dipotong lagi." / "Tiada apa untuk digerudi lagi." | Tiada pepejal sebelum ciri ini | Buat boss dahulu, atau alihkan ciri ke bawah |
| "Lukis garis tengah (garisan binaan) dalam lakaran untuk diputar mengelilinginya." | Revolve tanpa paksi | Tambah garis tengah, atau pilih garisan dalam Paksi |
| "Profil merentasi paksi. Kekalkannya di satu sisi garis tengah." | Profil di kedua-dua belah paksi | Lukis semula separuh profil |
| "Letakkan titik lakaran di tempat lubang akan dibuat (alat Titik), kemudian buat lubang." | Tiada titik longgar dalam lakaran | Tambah titik dengan {{key:P}} |
| "Kaunterbor mesti lebih lebar daripada lubang." | Kaunterbor ⌀ tidak lebih besar daripada Diameter | Buat kaunterbor lebih lebar |
| "Kaunterbor mesti lebih cetek daripada lubang." | Kaunterbor lebih dalam daripada lubang buta | Buatkannya lebih cetek, atau lubang lebih dalam |
| "Pilih ciri untuk disalin." | Corak atau cermin tanpa apa-apa ditanda | Tanda ciri di bawah Ciri untuk disalin |
| "Extrude2 tiada pepejal untuk disalin." | Ciri yang disalin gagal atau dimatikan | Betulkan atau nyahbatalkan penindasannya |
| "Memerlukan Sketch3, yang gagal." | Ciri yang bergantung padanya belum dibina | Betulkan ciri yang dinamakan |
| "Muka tempat ia berada sudah tiada (Extrude1 belum dibina)." | Muka lakaran tidak lagi wujud | Betulkan ciri itu, atau padam lakaran dan lakar semula |
| "Tiada apa-apa tertinggal daripada bahagian selepas ini." | Potongan mengeluarkan semua bahan | Semak saiz dan arah potongan |
| "Kernel pepejal tidak dapat membina ini (…)." atau "Kernel pepejal tidak dapat menggabungkan ini dengan jasad." | Kernel menolak geometri | Buat asal, atau ubah saiz sedikit; muka yang bersentuhan tepat boleh menyebabkannya |
| "Sweep: belum dibina. Ia memerlukan kernel tepat, yang tiada dalam versi PartCraft ini." (juga Loft, Rib dan yang lain) | Ciri yang dibuat dalam binaan terdahulu dan hanya kernel tepat boleh membinanya. Ia kekal dalam sejarah dan disimpan semula tanpa berubah | Tindas atau padamnya; lihat [Apa yang belum dibina](topic:not-built-yet) untuk apa yang perlu dilakukan sebaliknya |
| "Pembundaran 5 mm tidak muat di sini (…)." / "Canfer 2 mm …" | Saiz terlalu besar untuk muka di sebelah tepi, atau sudut tidak boleh dicampurkan | Saiz yang lebih kecil, atau kurang tepi setiap ciri |
| "Fillet: dalam versi ini hanya tepi lurus di antara dua muka rata (kernel jejaring membinanya). Bundarkan atau serongkan tepi melengkung dalam lakaran." (juga Chamfer) | Tepi yang dipilih bulat, seperti bibir lubang, atau terletak pada muka melengkung | {{ui:Pilih tepi}} dan buangnya; bundarkan atau serongkan sudut itu dalam lakaran sebaliknya |
| "Fillet dengan jejari yang berubah sepanjang tepi: belum dibina (memerlukan kernel tepat). Berikan satu jejari." | **Jejari berubah** ditanda | Nyahtanda dan berikan satu jejari |
| "Fillet oleh kernel jejaring: di tempat tepi bulat bertemu, ia dipotong serong, bukan dicampurkan." (⚠, amaran) | Tepi yang dipilih bertemu di satu sudut; pembundaran bertemu di sana sebagai lipatan tajam | Tiada apa untuk diperbaiki: bahagian sudah dibina. Fillet lebih sedikit tepi jika lipatan itu penting |
| "Tepi yang ia bundarkan sudah hilang: tepi di antara Extrude1 dan Cut2." | Perubahan awal telah mengeluarkan tepi | {{ui:Pilih tepi}}, buang tepi merah, pilih yang baharu |
| "Pilih tepi dalam pandangan, kemudian tambahkannya." | Fillet atau chamfer tiada tepi | {{ui:Pilih tepi}} |
| "Pilih muka untuk dibuang (terbuka), kemudian cangkerang." | Cangkerang tiada muka terbuka | {{ui:Pilih muka}} |
| "Cangkerang tidak dapat dibuat dengan ketebalan ini (…)." | Dinding lebih tebal daripada bahagian nipis model atau jejari fillet | Dinding yang lebih nipis, atau fillet yang lebih besar |
| "Cangkerang: dalam versi ini ia hanya membuka muka rata (kernel jejaring membinanya)." | Muka terbuka melengkung | {{ui:Pilih muka}} dan buangnya; buka muka rata sahaja |
| "Draft: dalam versi ini muka rata sahaja (kernel jejaring membinanya)." | Muka yang dicerun tarik ialah silinder, kon atau muka bentuk bebas | Buangnya; cerun tarik muka rata sahaja |
| "Muka yang dibukanya sudah hilang (…)." | Perubahan awal telah mengeluarkan muka | {{ui:Pilih muka}} semula |
| "Fillet1 mengubah tepi atau dinding jasad; ia tidak boleh disalin. …" | Corak atau cermin menyalin fillet, chamfer atau cangkerang | Nyahtanda; corakkan potongan dahulu, kemudian fillet |
| "Ia terletak pada muka yang hanya kernel tepat boleh cari: belum dibina dalam versi ini." | Lakaran pada muka yang tidak dapat dikesan oleh kernel jejaring, seperti yang dibuat dalam binaan terdahulu | Lakar pada satah asas atau muka rata satu extrude, dan letakkannya dengan dimensi |
| "Ia menggunakan muka atau tepi pepejal, yang hanya kernel tepat boleh cari: belum dibina dalam versi ini." | Satah, paksi atau titik rujukan pada muka atau tepi pepejal | Buatnya daripada satah asas, titik lakaran atau koordinat sebaliknya |
| "Extrude sehingga muka, muka seterusnya atau bucu: belum dibina (memerlukan kernel tepat)." / "Taper: belum dibina (memerlukan kernel tepat)." | Syarat tamat atau taper yang hanya kernel tepat boleh bina | Gunakan kedalaman Buta atau Satah tengah yang anda ukur; biarkan Taper pada 0 |

## Masalah memilih

- "Muka itu melengkung. Pilih muka rata atau satah untuk dilakar." Lakaran memerlukan muka rata. Lakar pada satah asas dan letakkan lakaran dengan dimensi sebaliknya.
- Muka berkata "Tetap di tempat dipilih": ia tidak dibuat oleh tepi lakaran (contohnya muka salinan corak), jadi lakaran padanya kekal di tempatnya apabila bahagian berubah.
- Tepi sukar disentuh: zum masuk. Tepi menang berbanding muka di sebelahnya apabila penunjuk tepat di atasnya.

## Masalah fail

| Mesej | Penyelesaian |
|---|---|
| 'PartCraft membuka fail .partcraft.json sendiri, eksport daripada makro CadCraft untuk SolidWorks (.cadcraft-sw.json) dan fail STEP. "bracket.igs" bukan salah satu daripada ini.' | Hanya fail tersebut dikenali (dan jejaring STL, OBJ dan 3MF, serta fail `.3dm`) |
| '"part.stp" bukan fail STEP (ia tidak bermula dengan ISO-10303-21).' | Fail itu bukan teks STEP |
| "Fail STEP itu terlalu besar (melebihi 60 MB) untuk diimport di sini." | Permudahkannya di sumbernya |
| "Fail itu terlalu besar untuk menjadi bahagian PartCraft." pada bahagian yang anda simpan sendiri | Pepejal STEP besar yang diimport dalam binaan terdahulu menjadikan fail bahagian melebihi 50 MB. Gunakan salinan lama yang tidak mengandunginya |
| "Fail itu terlalu besar untuk menjadi bahagian PartCraft." | Fail melebihi 50 MB; ia bukan fail PartCraft |
| "Ini bukan fail PartCraft (ia bukan JSON)." / "Ini bukan fail PartCraft." | Fail itu rosak atau kepunyaan program lain |
| "Fail ini disimpan oleh PartCraft yang lebih baharu (versi fail …); yang ini membaca versi …" | Buka dalam PartCraft yang lebih baharu |
| "Extrude2: kedalaman tidak sah." (atau nilai lain) | Fail itu disunting dengan tangan atau rosak. Gunakan salinan lama |
| Selit dalam himpunan memaparkan "Part1.partcraft.json tiada pepejal untuk diselit." | Fail bahagian tiada pepejal. Buka, bina pepejal, simpan, dan selit semula |

**Fail yang saya simpan tiada di tempat yang saya jangka.** Menyimpan ialah muat turun: cari dalam folder muat turun pelayar anda, atau buka senarai muat turun dari bar alat pelayar. Lihat [Di mana fail anda pergi](common:your-files).

**Saya membuka bahagian tetapi himpunan masih di skrin.** Bahagian dimuatkan di belakang himpunan. Pilih {{ui:Tutup}} untuk menutup himpunan dan melihat bahagian. Tutup himpunan sebelum membuka fail bahagian.

## Masalah lukisan

| Mesej | Penyelesaian |
|---|---|
| "Bina pepejal dahulu, kemudian buat lukisannya." | Bina bahagian dahulu |
| "Tiada ruang pada helaian untuk: perincian. Jadikan perincian lebih kecil atau buang satu pandangan." | **Jejari perincian** atau **Skala perincian** yang lebih kecil, atau buang keratan |
| "Perincian diambil dari pandangan depan, atas, kanan atau keratan." | Klik pada salah satu pandangan itu |
| "Klik pada salah satu pandangan." | Klik itu mengenai kertas kosong |
| "Kedudukan memerlukan sekurang-kurangnya satu rujukan datum." dan mesej bingkai yang lain | Tetapkan datum yang diminta panel, atau pilih ciri lain |
| "Pandangan lukisan tidak dapat dibuat: …" | Buat asal perubahan terakhir. Jika ia terus berlaku, simpan, muat semula dan buka semula bahagian |

## Masalah himpunan

| Mesej | Penyelesaian |
|---|---|
| "Bina pepejal dahulu, kemudian masukkannya ke dalam himpunan." | Bahagian belum mempunyai pepejal |
| "Masukkan bahagian kedua dahulu (Tambah salinan, Selit, atau Sunting › Pendua)." | Sambungan memerlukan dua bahagian |
| "Pilih muka pada bahagian yang berbeza." | Kedua-dua muka sambungan mesti berada pada bahagian yang berbeza |
| "Muka itu melengkung. Pilih muka rata …" | Sambungan bermula dari muka rata. Kemudian gunakan **Pusat pada** untuk lubang atau paksi putaran |
| "Bracket2 tidak bersambung dengan bahagian berasas, jadi ia kekal di tempat ia diletakkan." | Tambah sambungan dari bahagian itu kepada bahagian yang telah diletakkan |
| "Revolute3 menutup gelung yang tidak boleh ditutup: ia tersasar sebanyak 2.000 mm. Semak muka, ofset dan had sambungan gelung." | Bahagian tidak dapat bertemu semuanya: semak panjang, muka yang digunakan setiap sambungan, ofset (bahagian yang disusun muka ke muka mesti sepakat dalam kedalaman) dan had; atau buang satu sambungan daripada gelung |
| "Muka yang digunakan sambungan ini sudah hilang daripada Bracket." / "Paksi yang digunakan sambungan ini sudah hilang daripada Bracket." | Bahagian telah disunting. Buang sambungan dan buat semula |
| "Paksi berjalan sepanjang muka, jadi ia tidak boleh menetapkan pusat sambungan." | Pilih paksi yang merentasi muka, atau "Asal muka" |
| "Himpunan mengekalkan sekurang-kurangnya satu bahagian. Tutupnya sebaliknya." | Gunakan {{ui:Tutup}} |

**Bahagian bersambung tetapi di tempat yang salah.** Tetapkan **Pusat pada** untuk kedua-dua belah sambungan kepada lubang atau paksi putaran yang sepatutnya sejajar, kemudian laraskan **Sudut (°)** dan **Ofset (mm)**.

## Ia perlahan

- Tetapkan **Lengkung** kepada Normal atau Kasar semasa memodel; tukar kepada Halus sebelum mengeksport.
- Bilangan corak yang besar (ratusan salinan) mengambil masa untuk dibina semula pada setiap perubahan. Tindas corak semasa anda bekerja pada ciri lain.
- Clash dan semakan gerakan membandingkan setiap pasangan bahagian; himpunan besar mengambil masa lebih lama.
- Tutup tab berat lain. PartCraft berjalan pada pemproses dan grafik komputer anda sendiri.

## Masih buntu

Simpan fail anda dahulu ({{key:Mod+S}}), kemudian muat semula halaman dan buka semula. Jika ciri masih gagal, pilih ciri itu, baca mesejnya, dan cuba {{key:Mod+Z}} kembali ke keadaan baik yang terakhir.
