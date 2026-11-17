---
title: Tindanan toleransi
summary: Pilih rantai muka melalui bahagian dalam himpunan dan lihat sejauh mana jurang di hujungnya boleh berubah, kes terburuk dan RSS, dengan dimensi yang paling mempengaruhi disenaraikan dahulu.
keywords: tindanan toleransi, stackup, analisis toleransi, rantai toleransi, rantai dimensi, gelung, jurang, kelonggaran, kes terburuk, rss, root sum square, toleransi statistik, penyumbang, kepekaan, gd&t, toleransi am, iso 2768
from: cbdb3159
---

**Tindanan** menambah dimensi di sepanjang rantai melalui beberapa bahagian untuk melihat sejauh mana hasil, biasanya jurang, boleh berubah apabila setiap bahagian dibuat di mana-mana dalam toleransinya.

## Pilih rantai

1. Buka himpunan dan pilih {{ui:Tindanan toleransi}} dalam kumpulan Himpunan. Kad terbuka di atas pandangan.
2. Pilih arah rantai **diukur sepanjang**: X, Y atau Z himpunan, atau {{ui:Normal muka pertama}}.
3. Tekan {{ui:Pilih rantai}} dan klik muka yang dilalui rantai, **mengikut urutan**: mulakan di satu sisi jurang, lalui bahagian, dan akhiri di sisi jurang yang satu lagi.
4. Tekan {{ui:Selesai}} atau Enter. Backspace membatalkan klik terakhir; Esc membatalkan.

Dua klik pada bahagian yang sama membentuk dimensi bahagian itu (jaraknya sepanjang rantai). Klik pada bahagian lain membentuk **antara muka** di tempat bahagian-bahagian itu bertemu; ia tidak mempunyai toleransi melainkan anda menaipnya. Pautan menambah atau menolak mengikut arah rantai, dan ia menutup gelung: jurang nominal ialah apa yang ditunjukkan model.

Anda juga boleh {{ui:Tambah pautan}} secara manual dan menaip nominalnya, toleransinya, dan sama ada ia menambah (+) atau menolak (−).

## Berikan toleransi kepada setiap pautan

Setiap pautan mempunyai sisihan **atas** dan **bawah** (contohnya +0.1 dan −0.05). **Toleransi daripada** mengisinya daripada bahagian:

- **Toleransi am**: medan Toleransi pada blok tajuk bahagian (lihat [Lukisan kepada PDF](topic:drawing-pdf)), apabila ia dibaca ±0.1, +0.2/-0.1 atau ISO 2768-f, -m, -c atau -v (toleransi linear ISO 2768-1, mengikut saiz pautan). Toleransi am bahagian digunakan serta-merta apabila rantai dipilih.
- **GD&T**: mana-mana bingkai kawalan ciri pada lukisan bahagian. Zon kedudukan, profil dan larian memberi ± separuh toleransi. Toleransi orientasi atau bentuk biasanya sudah berada dalam toleransi saiz: tambahkannya hanya di tempat rantai bertemu permukaan yang dikawal. Dengan Ⓜ atau Ⓛ, zon diambil pada saiz yang dinyatakan; toleransi bonus tidak dikira.
- **Ditaip**: sebarang nombor yang anda taip.

## Baca hasil

- **Jurang, nominal** dan, apabila toleransi tidak sama, **Jurang, min** — +0.2/−0 dan +0/−0.1 menggerakkan tengah julat.
- **Kes terburuk**: setiap toleransi pada hadnya serentak. Jurang tidak boleh berada di luar nilai ini.
- **RSS** (punca kuasa dua jumlah): setiap toleransi diambil sebagai tiga sisihan piawai bagi taburan normal, dan dijumlahkan sebagai punca kuasa dua hasil tambah kuasa duanya. Kebanyakan himpunan jatuh jauh di dalam kes terburuk; inilah anggaran lazim untuk bahagian yang dibuat secara besar-besaran.
- Berikan **Jurang sekurang-kurangnya** dan **Jurang paling banyak** untuk melihat sama ada kes terburuk sentiasa kekal di dalam, dan berapa banyak himpunan dalam sejuta yang dijangka RSS berada di luar.
- Lajur **#** menyusun pautan mengikut **bahagiannya** dalam RSS: ketatkan yang pertama untuk memberi perbezaan terbesar.

{{ui:Simpan CSV}} menulis pautan, bahagian mereka dan hasilnya. Tindanan disimpan dalam fail himpunan, dan setiap perubahan ialah satu langkah untuk {{key:Mod+Z}}.

:::note
Tindanan adalah satu arah. Ia tidak mengikut sudut atau pusingan sepanjang rantai, dan ia tidak membaca toleransi saiz daripada lakaran: berikan toleransi tersebut sebagai toleransi yang ditaip atau melalui blok tajuk.
:::
