---
title: Lukis lakaran pertama anda
summary: Buka lakaran pada satah atau muka rata, lukis garisan, segi empat tepat, bulatan, lengkok, titik dan garis pusat, bundarkan sudut, pilih, seret dan padam.
keywords: lakaran, lukis, garisan, segi empat tepat, bulatan, lengkok, titik, garis pusat, binaan, fillet, fillet lakaran, bundarkan sudut, snap, pilih, tetingkap, seret, profil
from: 28be7436
---

Setiap pepejal bermula sebagai lakaran: lukisan rata pada satah. Panduan ini meliputi alat lukisan. Mengikat lakaran dengan kekangan dan dimensi dibincangkan dalam [Takrifkan sepenuhnya lakaran](topic:relations-dimensions).

## Mula lakaran

Anda boleh melakar pada satah asas atau pada mana-mana muka rata bahagian.

1. Pilih tempat untuk melakar:
   - satah asas: klik **Satah depan**, **Satah atas** atau **Satah kanan** dalam sejarah, atau klik satah dalam paparan;
   - muka rata: klik muka dalam paparan. Keseluruhan muka diserlahkan.
2. Pilih {{ui:Lakaran}} dalam bar alat atau tekan {{key:S}}. (Dengan muka dipilih, anda juga boleh pilih {{ui:Lakaran pada muka ini}} dalam panel kanan; dengan satah, {{ui:Lakaran di atasnya}}.)

Paparan menghadap satah secara tegak, alat lakaran muncul dalam bar alat, dan alat Garisan sedia digunakan. Jika anda tekan {{ui:Lakaran}} tanpa memilih apa-apa, satah asas dipaparkan dan bar status berkata "Klik satah atau muka rata untuk melakar. Esc berhenti."

:::note
Muka melengkung tidak boleh memegang lakaran: "Muka itu melengkung. Pilih muka rata atau satah untuk melakar."
:::

**Lakaran pada muka akan mengikut muka itu.** Jika muka dibuat oleh tepi lakaran atau hujung ekstrud, lakaran baharu bergerak apabila ciri berubah (poket yang lebih dalam membawa lakaran di lantainya bersamanya). Jika panel berkata muka itu "Tetap di tempat dipilih", lakaran kekal di tempat muka itu sekarang.

## Alat lukisan

Setiap alat ada butang bar alat dan kekunci. Pilih butang yang sama sekali lagi, tekan {{key:S}}, atau tekan {{key:Esc}} untuk kembali ke Pilih.

| Alat | Kekunci | Cara melukis |
|---|---|---|
| {{ui:Garisan}} | {{key:L}} | Klik titik mula, kemudian klik setiap titik seterusnya. Garisan bersambung hujung ke hujung. Tamatkan rantaian dengan {{key:Esc}}, {{key:Enter}}, klik kanan atau klik dua kali. Klik titik sedia ada juga menamatkannya |
| {{ui:Segi empat tepat}} | {{key:R}} | Klik satu bucu, kemudian bucu bertentangan. Anda mendapat empat garisan bercantum pada bucu, dua mengufuk dan dua menegak |
| {{ui:Bulatan}} | {{key:C}} | Klik pusat, kemudian satu titik pada bulatan |
| {{ui:Lengkok}} | {{key:A}} | Klik pusat, kemudian mula, kemudian akhir. Lengkok bergerak mengikut arah anda menggerakkan penunjuk mengelilingi pusat |
| {{ui:Titik}} | {{key:P}} | Klik. Titik sendirian menandakan pusat lubang untuk {{ui:Lubang}} |
| {{ui:Garis pusat}} | {{key:N}} | Seperti garisan, satu segmen pada satu masa. Dilukis putus-putus; ia geometri binaan, digunakan sebagai paksi putar atau rujukan |
| {{ui:Fillet}} | {{key:F}} | Klik sudut tempat dua garisan bertemu, taip jejari, tekan {{key:Enter}} |
| {{ui:Splin}} | {{key:B}} | Klik titik yang dilalui lengkung; {{key:Enter}} menamatkan, klik pada titik pertama menutupnya. Lihat [Splin, pangkas, ofset dan alatan lakaran lain](topic:sketch-tools) |
| {{ui:Pangkas}} | {{key:T}} | Klik bahagian lengkung untuk dibuang, sehingga persilangan terdekat |
| {{ui:Dimensi}} | {{key:D}} | Lihat [Takrifkan sepenuhnya lakaran](topic:relations-dimensions) |

Semasa anda melukis, kotak kecil di sebelah penunjuk menunjukkan panjang, saiz, diameter atau jejari.

### Taip saiz semasa melukis

Selepas klik pertama garisan, segi empat tepat, bulatan atau lengkok, anda boleh taip saiz dan bukannya mengkliknya. Menaip nombor membuka kotak di sebelah penunjuk dengan nombor itu di dalamnya:

| Alat | Kotak ({{key:Tab}} bergerak ke seterusnya) | Apa yang berlaku pada {{key:Enter}} |
|---|---|---|
| {{ui:Garisan}}, {{ui:Garis pusat}} | Panjang, kemudian Sudut (°) dari paksi X lakaran | Garisan dilukis sepanjang itu, ke arah penunjuk atau pada sudut yang ditaip; rantaian diteruskan dari hujungnya |
| {{ui:Segi empat tepat}} | Lebar, kemudian Tinggi | Segi empat tepat dilukis dari bucu pertama ke arah penunjuk; saiz yang tidak anda taip datang daripada penunjuk |
| {{ui:Bulatan}} | Diameter | Bulatan dilukis pada diameter itu |
| {{ui:Lengkok}} | Jejari selepas pusat, kemudian Sudut lengkok (°) selepas mula | Mula berada sejauh itu dari pusat; kemudian lengkok bergerak sejauh itu mengelilingi, mengikut arah anda menggerakkan penunjuk |

Setiap saiz yang anda taip menjadi **dimensi pemacu** dalam langkah yang sama, supaya lakaran keluar dengan saiz. {{key:Mod+Z}} membuang bentuk dan dimensinya sekali. Klik dan bukan tekan {{key:Enter}} mengekalkan apa yang anda taip dan mengambil selebihnya daripada klik. {{key:Esc}} menutup kotak dan kembali ke penunjuk.

Matikan ini dalam {{ui:Tetapan}} › {{ui:PartCraft}} › **Dimensi semasa melukis** jika anda hanya mahu melukis dengan klik. Lihat [Tetapan PartCraft](topic:settings).

{{ui:Lagi}}, di hujung alat lakaran, mengandungi splin titik kawalan, Panjangkan, Ofset, Cermin, Poligon, Slot, corak lakaran dan Unjurkan tepi: lihat [Splin, pangkas, ofset dan alatan lakaran lain](topic:sketch-tools).

### Snap

Snap menambah kekangan untuk anda, supaya lakaran kekal bercantum apabila ia bergerak:

- Pada **titik hujung atau asalan**, sebuah segi empat kecil dipaparkan. Titik baharu dibuat sama tempat dengannya.
- Pada **garisan, bulatan atau lengkok**, tanda silang kecil dipaparkan. Titik baharu diletakkan pada lengkung itu.
- Garisan dalam lingkungan 3 darjah dari mengufuk atau menegak akan snap kepadanya dan mendapat kekangan mengufuk atau menegak. Label menunjukkan "H" atau "V".

Untuk mengelakkan snap, zum masuk supaya anda klik lebih jauh dari titik atau lengkung.

## Bundarkan sudut

1. Tekan {{key:F}} atau pilih {{ui:Fillet}}.
2. Klik titik sudut tempat dua garisan bertemu.
3. Kotak dibuka dengan jejari yang dicadangkan. Taip jejari dan tekan {{key:Enter}}.

Kedua-dua garisan dipangkas dan dicantumkan oleh lengkok tangen dengan dimensi jejari. Mesej yang mungkin anda lihat: "Fillet memerlukan sudut tempat tepat dua garisan bertemu." dan "Jejari itu terlalu besar untuk garisan ini."

:::tip
Fillet lakaran membundarkan sudut profil, supaya ekstrud mendapat tepi menegak yang dibundarkan. Untuk membundarkan tepi pepejal itu sendiri (contohnya tepi atas plat), gunakan ciri {{ui:Fillet}} pada bahagian: lihat [Bundarkan, serongkan dan rongga](topic:fillet-chamfer-shell). Dalam lakaran, Fillet pada bar alat ialah alat lakaran; pada bahagian, ia ialah ciri.
:::

## Geometri binaan

Garisan, bulatan dan lengkok binaan dilukis putus-putus dan kelabu. Ia membimbing lakaran tetapi bukan sebahagian profil yang diekstrud atau diputar.

1. Pilih garisan, bulatan atau lengkok.
2. Tekan {{key:Q}} atau pilih {{ui:Binaan}}. Tekan sekali lagi untuk menukarnya kembali.

## Pilih, seret dan padam

Tekan {{key:S}} (atau {{key:Esc}} sehingga tiada alat aktif) untuk Pilih.

- Klik titik, garisan, bulatan, lengkok, simbol kekangan atau dimensi untuk memilihnya. {{key:Shift}}+klik menambah pada pilihan atau membuangnya. Pada Windows dan Linux {{key:Ctrl}}+klik melakukan perkara yang sama; pada Mac, ⌘+klik.
- Seret pada ruang kosong untuk melukis tetingkap: semua yang berada sepenuhnya di dalamnya dipilih.
- Seret titik atau garisan untuk mengalihkannya. Penyelesai mengekalkan setiap kekangan dan dimensi semasa ia bergerak, jadi hanya geometri bebas yang bergerak. Seret tepi bulatan untuk menukar jejarinya.
- Seret nombor dimensi untuk mengalihkan label.
- Tekan {{key:Delete}} atau {{key:Backspace}}, atau pilih {{ui:Padam}} dalam panel kanan, untuk memadam pilihan. Memadam geometri turut memadam kekangan padanya.

## Zum dan pan dalam lakaran

- Gulung roda untuk zum pada penunjuk.
- Seret dengan butang tengah atau kanan untuk pan.
- {{ui:Muat}} dalam bar alat atau panel kanan memuatkan lakaran dalam paparan. Dalam lakaran, kekunci {{key:F}} ialah alat Fillet, bukan Muat.

## Tutup lakaran

Pilih {{ui:Keluar}} dalam bar alat atau {{ui:Keluar lakaran}} dalam panel kanan, atau tekan {{key:Esc}} sehingga lakaran tertutup. Setiap {{key:Esc}} mula-mula membatalkan apa yang sedang berjalan, kemudian kembali ke Pilih, kemudian mengosongkan pilihan, dan yang seterusnya menutup lakaran.

Lakaran kekal dipilih, jadi {{ui:Ekstrud}} atau {{ui:Putar}} seterusnya menggunakannya.

## Apa yang menjadikan profil yang baik

{{ui:Ekstrud}} dan {{ui:Putar}} menggunakan **setiap gelung tertutup** bagi garisan, bulatan, lengkok dan splin pepejal (bukan binaan) lakaran. Gelung di dalam gelung menjadi lubang.

- Setiap hujung mesti bertemu tepat dengan satu hujung lain. "Profil terbuka: hujung pada (12.5, 40) tidak bercantum dengan apa-apa." menamakan tempatnya.
- Tiada tiga hujung boleh bertemu pada satu titik: "Profil bercabang pada (0, 20): lebih daripada dua hujung bertemu di situ."
- Titik dan geometri binaan diabaikan oleh profil.

Seterusnya: [Takrifkan sepenuhnya lakaran dengan kekangan dan dimensi](topic:relations-dimensions).

## Lakaran daripada foto

**Ciri › Lagi › Lakaran daripada foto…** (atau kumpulan Lakaran dalam reben pokok ciri) mengesan gambar bahagian rata atas tanah biasa — garis luar dan lubangnya — atau lukisan pen menjadi lakaran garisan, lengkok dan bulatan. Nyatakan satu panjang (lebar, tinggi atau sisi terpanjang) supaya lakaran mempunyai saiz yang betul, semak apa yang dijumpainya dalam pratonton, dan pilih **Buat lakaran**; ia juga boleh mengekstrudnya, dalam langkah buat asal yang sama. Ia dikesan pada komputer ini. Jejari sudut kembali dalam lingkungan kira-kira 5 %, butiran sepiksel atau dua hilang, dan foto yang diambil secara condong atau dengan bayang merentasi bahagian tidak diluruskan: ambil foto bahagian secara tegak lurus dengan cahaya sekata.
