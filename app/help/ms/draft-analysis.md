---
title: Semak cerun tarik untuk pengacuanan dan tuangan
summary: Warnakan bahagian mengikut sudut cerun tariknya berbanding arah tarikan acuan, lihat muka mana yang terlepas, mana yang memerlukan lebih cerun tarik dan mana yang terlepas dari separuh acuan yang lain, dengan bahagian luas setiap satu.
keywords: analisis cerun tarik, cerun tarik, tirus, acuan, mold, die casting, pengacuanan suntikan, arah tarikan, garisan pemisah, undercut, lepaskan, semak cerun tarik
from: 6a106f83
---

Bahagian yang dibuat dalam acuan, die atau tuangan pasir memerlukan **cerun tarik**: dinding yang dicondongkan sedikit supaya bahagian itu meluncur keluar. **Analisis cerun tarik** mewarnakan setiap muka mengikut kadar condongnya daripada arah acuan dibuka (**tarikan**).

## Hidupkannya

1. Dalam ruang kerja Reka bentuk, buka {{ui:Views}} dan pilih {{ui:Draft analysis}}.
2. Tetapkan **Pull** (tarikan): arah acuan dibuka, sepanjang X, Y atau Z ke mana-mana arah, atau **Square to a picked face** (persegi kepada muka yang dipilih): tekan {{ui:Pick a face}} dan klik muka rata bahagian itu.
3. Tetapkan **Minimum draft**, dalam darjah: condong terkecil yang diperlukan oleh proses anda (selalunya 1° hingga 3°).

Bahagian itu diwarnakan:

| Warna | Maksud |
|---|---|
| Hijau: **Positive draft** | Condong ke arah tarikan sekurang-kurangnya minimum: terlepas dari separuh acuan ini |
| Oker: **Needs draft** | Dalam had minimum sama ada arah, seperti dinding tegak: tambahkan cerun tarik di sini |
| Merah: **Negative draft** | Condong menjauhi tarikan sekurang-kurangnya minimum: terlepas dari separuh acuan yang lain, atau ialah undercut jika bahagian itu perlu keluar dari satu separuh |

Bahagian luas permukaan bagi setiap kelas ditunjukkan di sebelahnya. **Reverse the pull** (balikkan tarikan) melihat dari separuh acuan yang lain: hijau dan merah bertukar.

Muka melengkung dinilai titik demi titik, jadi silinder yang terbaring merentasi tarikan menunjukkan satu jalur yang memerlukan cerun tarik di sepanjang sisinya.

Warna mengikut bahagian apabila anda mengubahnya. {{key:Esc}} atau {{ui:Close}} mematikan analisis; tiada apa yang disimpan dalam bahagian.

:::tip
Untuk menambah cerun tarik, gunakan ciri {{ui:Draft}} pada muka oker (lihat [Sapuan, loft dan cerun tarik](topic:sweep-loft-draft)), kemudian semak semula.
:::
