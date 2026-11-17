---
title: Tumbuhkan bentuk daripada beban (Generatif)
summary: Pilih muka yang dipegang dan dikenakan beban, kawasan yang hendak dikekalkan dan yang hendak dikosongkan, isipadu sasaran dan bahan, dan jana hasil: bentuk paling tegar yang ditemui bagi setiap isipadu, disemak semula sebagai pepejal, dibandingkan dalam jadual dan dimuat turun sebagai STL, STEP atau bahagian baharu.
keywords: reka bentuk generatif, pengoptimuman topologi, SIMP, ringan, kekisi, bentuk organik, hasil, bandingkan, jisim, pecahan isipadu, pelihara, kekal dalam, halangan, kekal kosong, ruang reka bentuk, saiz minimum ahli, STL, pencetakan 3D
from: 5b91fa8e
---

Ruang kerja Generatif mengeluarkan bahan yang tidak diperlukan oleh beban. Anda menyatakan di mana bahagian dipegang dan dikenakan beban, apa yang mesti kekal dan apa yang mesti kekal kosong; PartCraft mencari bentuk paling tegar bagi setiap isipadu sasaran (**pengoptimuman topologi**), menyemak semula setiap satu sebagai pepejal dengan bahan sebenar, dan menunjukkan hasil secara bersebelahan. Ia berfungsi pada muka bernama yang diberi oleh kernel jejaring kepada bahagian (lihat [Kernel jejaring](topic:solid-kernels)).

Pilih **Generatif** dalam kotak **Ruang kerja**. Bahagian anda tidak diubah; kajian disimpan di dalam fail bahagian.

## Sediakan kajian

1. Tekan **Kajian baharu** dalam panel kanan.
2. **Ruang**: *Bahagian seperti sedia ada* mengeluarkan bahan daripada bahagian anda; *Kotak di sekeliling bahagian* menumbuhkan bentuk di dalam kotak yang lebih besar daripada bahagian sebanyak **Margin kotak**.
3. **Saiz elemen**: biarkan kosong untuk saiz automatik (kira-kira 8,000 kubus), atau taip satu. Saiz yang lebih halus memberi bentuk yang lebih halus dan mengambil masa lebih lama.
4. **Ahli minimum**: ahli yang lebih nipis daripada kira-kira dua kali nilai ini tidak terbentuk. Kosong bermakna satu setengah kubus.
5. Tandakan satu hingga enam **Isipadu sasaran** (bahagian ruang reka bentuk yang boleh diisi bentuk) dan satu hingga empat **Bahan**. Setiap isipadu dijana sekali; setiap bahan disemak pada bentuk itu (bentuk paling tegar tidak bergantung pada bahan, tetapi jisim, tegasan dan faktor keselamatannya bergantung).

## Matlamat

- {{ui:Tetap}}: klik muka yang dipegang. **Muka tanpa geseran** daripada senarai **Tambah** panel hanya memegang muka merentasi dirinya sendiri (gunakannya untuk satah simetri).
- {{ui:Daya}}: klik muka yang dikenakan beban, kemudian taip jumlah daya dan pilih arahnya dalam panel. **Tekanan** terdapat dalam senarai **Tambah**.
- {{ui:Pelihara}}: klik muka yang persekitarannya mesti kekal pepejal, dan tetapkan sedalam mana (**Kekalkan pepejal dalam**) — contohnya di sekeliling lubang bolt. Muka yang anda tetapkan atau bebankan sentiasa dikekalkan.
- {{ui:Halangan}}: klik muka yang persekitarannya mesti kekal kosong, dan tetapkan sejauh mana (**Kekalkan kosong dalam**) — ruang untuk aci atau alat.

Tekan **Selesai memilih** atau {{key:Esc}} selepas mengklik muka. Warna hijau dan merah menunjukkan kawasan.

## Jana dan bandingkan

Tekan {{ui:Jana}}. Panel menunjukkan kemajuan dan masa yang tinggal; **Henti** membatalkan. Setiap hasil muncul dalam jadual **Hasil**: isipadu sasaran, bahan, **jisim**, **tegasan terbesar**, **sesaran terbesar** dan **faktor keselamatan** (had alah ÷ tegasan), semuanya daripada penyelesaian semula bentuk siap sebagai kubus pepejal dengan bahan sebenar.

Pilih satu hasil untuk melihatnya dalam pandangan (bahagian disembunyikan; tandakan **Tunjukkan bahagian melaluinya** untuk melihat kedua-duanya). Di bawah jadual: berapa lelaran yang diambil dan sama ada ia stabil, kekakuannya sebagai pepejal berbanding nilai pengoptimum sendiri, dan permukaannya.

## Gunakan hasil

- **STL**: jejaring segi tiga tertutup, sedia untuk pencetakan 3D.
- **STEP (bermuka)**: permukaan yang sama sebagai pepejal STEP yang dibuat daripada muka rata.
- **Fail bahagian baharu**: bahagian PartCraft yang satu cirinya ialah hasil sebagai pepejal diimport. Buka untuk melakar di atasnya, memotong lubang atau menyemaknya dalam Simulasi. Ia bermuka (beribu muka rata), bukan bentuk yang boleh disunting.
- **Tambah pada bahagian ini** menyambungkan hasil kepada bahagian; ia hanya aktif untuk ruang reka bentuk kotak (dengan bahagian itu sendiri sebagai ruang, hasil terletak di dalam bahagian).

**Fail bahagian baharu** dan **Tambah pada bahagian ini** belum dibina dalam versi ini: hasil menjadi pepejal diimport, yang memerlukan kernel tepat. Muat turun STL dan STEP (bermuka) berfungsi.

## Sejauh mana boleh dipercayai

- Ia mengoptimumkan **kekakuan** bagi isipadu yang diberi. Belum ada had tegasan dan tiada peraturan pembuatan (tonjolan, arah pengisaran, saiz lubang minimum): semak hasil yang dipilih dalam [Simulasi](topic:simulation) dan laraskan.
- Ahli nipis yang lebar satu atau dua kubus ialah anggaran: gunakan saiz elemen yang lebih kecil untuk bahagian langsing.
- Kaedah ini ialah SIMP dengan penapis ketumpatan, unjuran ambang dan kemas kini kriteria keoptimuman; tegasan dan pesongan yang dilaporkan ialah bagi hasil sebagai kubus, yang jujur tetapi kasar pada bucu tajam.

## Berkaitan

- [Semak tegasan dan pesongan (Simulasi)](topic:simulation)
- [Eksport untuk pencetakan, STEP dan DXF](topic:export-files)
- [Apa yang belum dibina](topic:not-built-yet)
