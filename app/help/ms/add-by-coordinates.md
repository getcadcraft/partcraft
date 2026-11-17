---
title: Tambah geometri lakaran dengan menaip koordinat
summary: Gunakan Tambah mengikut koordinat dalam panel lakaran untuk meletakkan garisan, garis pusat, segi empat tepat, bulatan dan titik pada kedudukan yang tepat, dengan papan kekunci sahaja.
keywords: koordinat, input ditaip, kemasukan papan kekunci, kemasukan berangka, kedudukan tepat, x y, koordinat mutlak, kebolehcapaian, tanpa tetikus
from: 5e6c1656
---

Apabila anda sudah tahu nombornya, menaipnya lebih pantas daripada mengklik dan memberi dimensi. **Tambah mengikut koordinat** terdapat dalam panel kanan setiap kali lakaran dibuka. Ia juga membolehkan anda membina lakaran tanpa penunjuk langsung.

Koordinat dalam milimeter, mengikut paksi lakaran itu sendiri: x ke kanan dan y ke atas apabila anda melihat lakaran, dengan (0, 0) pada asalan (bulatan merah dengan silang).

## Tambah bentuk

1. Buka lakaran (lihat [Lukis lakaran pertama anda](topic:sketch-basics)).
2. Dalam panel kanan, tatal ke **Tambah mengikut koordinat**.
3. Pilih bentuk dalam **Tambah**: Garisan, Garis pusat, Segi empat tepat, Bulatan atau Titik.
4. Isi kotak:

| Bentuk | Kotak |
|---|---|
| Garisan | **Dari x, y** dan **Ke x, y** |
| Garis pusat | **Dari x, y** dan **Ke x, y** |
| Segi empat tepat | **Sudut x, y** dan **Sudut bertentangan x, y** |
| Bulatan | **Pusat x, y** dan **Jejari** |
| Titik | **Pada x, y** |

5. Pilih {{ui:Tambah}}, atau tekan {{key:Enter}} dalam mana-mana kotak.

Bentuk itu muncul dan bar status berkata, sebagai contoh, "Segi empat tepat ditambah." Kotak dikosongkan, sedia untuk yang seterusnya. Setiap penambahan ialah satu langkah {{ui:Buat asal}}.

Taip sepasang nombor sebagai dua nombor yang dipisahkan koma atau ruang: `0, 0`, `25 -10` atau `12.5,40`. Nombor negatif dan perpuluhan dibenarkan. Jejari mesti lebih daripada sifar. Jika sesuatu tidak dibaca sebagai nombor, bar status berkata: 'Taip koordinat sebagai "x, y" dan jejari melebihi sifar.'

## Contoh: garis besar plat berslot, ditaip

1. Buka lakaran pada **satah Front**.
2. **Tambah**: Segi empat tepat. **Sudut x, y**: `-50, -30`. **Sudut bertentangan x, y**: `50, 30`. {{key:Enter}}.
3. **Tambah**: Bulatan. **Pusat x, y**: `-30, 0`. **Jejari**: `5`. {{key:Enter}}.
4. **Pusat x, y**: `30, 0`. **Jejari**: `5`. {{key:Enter}}.
5. Pilih {{ui:Keluar lakaran}}, kemudian {{ui:Ekstrud}}: plat 100 × 60 dengan dua lubang 10 mm.

## Geometri yang ditaip diletakkan, tidak diikat

Koordinat yang ditaip meletakkan geometri di tempat yang betul, tetapi ia **bukan hubungan**. Bentuk kekal biru (kurang ditakrifkan) dan boleh bergerak jika anda menyeretnya atau menukar dimensi lain:

- segi empat tepat yang ditaip datang dengan sudut, hubungan mengufuk dan menegaknya sendiri, seperti yang dilukis, tetapi tiada apa yang mengikatnya ke asalan;
- garisan yang ditaip tidak mempunyai hubungan mengufuk atau menegak, walaupun anda menaip garisan rata;
- pusat bulatan yang ditaip adalah bebas.

Untuk menjadikan lakaran sepenuhnya ditakrifkan, tambah dimensi dan hubungan selepas itu (lihat [Takrifkan lakaran sepenuhnya](topic:relations-dimensions)). Contohnya, pilih sudut segi empat tepat dan asalan, kemudian pilih {{ui:• Koinsiden}}, atau berikan dimensi kepada pusat bulatan dari asalan.

:::note
Tanpa penunjuk, anda boleh sampai setakat ini: alihkan ke baris satah dalam sejarah dengan {{key:Tab}} dan kekunci anak panah, tekan {{key:Enter}} untuk memilihnya, tekan {{key:S}} untuk melakar, tambah bentuk di sini, dan capai **Sunting** di sebelah setiap dimensi serta {{ui:Keluar lakaran}} dengan {{key:Tab}}. Memilih geometri, dan oleh itu menambah hubungan atau dimensi baharu, masih memerlukan klik atau ketikan dalam binaan ini.
:::

## Had

- Lengkok belum boleh ditaip lagi. Lukiskannya dengan alat Lengkok, atau taip bulatan dan gunakan hubungan.
- Tiada koordinat relatif (dari titik terakhir) atau koordinat kutub (panjang dan sudut) dalam kotak ini.
- Geometri yang ditaip tidak melekat pada titik sedia ada. Taip koordinat yang sama dengan titik sedia ada, kemudian tambah hubungan {{ui:• Koinsiden}} antara keduanya jika ia mesti kekal bersambung.
