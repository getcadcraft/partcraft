---
title: Ciri corak dan cermin
summary: Ulang ciri dalam satu baris dengan Linear, pusingkan sekitar paksi dengan Bulatan, dan salin ciri atau seluruh jasad merentasi satah dengan Cermin.
keywords: corak, corak linear, corak bulatan, tatasusunan kutub, tatasusunan, cermin, simetri, salin ciri, bulatan bolt, benih, cermin jasad
from: 702e9edb
---

Corak dan cermin menyalin ciri yang telah anda bina. Salinan itu sebahagian daripada sejarah: jika anda menukar yang asal, salinan akan mengikutinya.

Apa yang disalin ialah apa yang ciri itu lakukan: corak boss menambah bahan, corak potongan atau lubang mengeluarkannya. Corak boleh dicorakkan dan dicerminkan semula. Pepejal STEP yang diimport boleh disalin; fillet, chamfer dan shell tidak boleh.

## Corak linear

1. Pilih ciri untuk disalin dalam sejarah (contohnya Lubang atau Potongan). Jika tiada apa dipilih, ciri pepejal terakhir digunakan.
2. Pilih {{ui:Linear}}. Tiga salinan muncul berjarak 20 mm sepanjang X.
3. Dalam panel kanan, tetapkan:

| Tetapan | Fungsi | Lalai |
|---|---|---|
| **Ciri untuk disalin** | Tandakan setiap ciri untuk disalin. Hanya ciri di atas corak yang disenaraikan | Ciri yang dipilih |
| **Arah** | Paksi X, paksi Y, paksi Z, garisan atau garis pusat daripada mana-mana lakaran terdahulu, paksi putaran, atau tepi yang dipilih | Paksi X |
| **Jarak (mm)** | Jarak antara jiran | 20 |
| **Bilangan** | Jumlah keseluruhan, **termasuk yang asal** (1 hingga 1000) | 3 |
| **Songsangkan arah** | Salinan pergi ke arah sebaliknya | Mati |

### Guna tepi sebagai arah

1. Klik tepi lurus bahagian dalam paparan. Panel kanan menyatakan **Tepi** dan menunjukkan panjangnya.
2. Pilih {{ui:Linear}}: corak berjalan sepanjang tepi itu.

Atau pilih corak, pilih tepi, dan pilih "Tepi dipilih (guna yang dipilih sekarang)" dalam **Arah**. Tepi yang dipilih ditetapkan di ruang: ia tidak mengikut perubahan kemudian. Garisan lakaran mengikut lakarannya.

## Corak bulatan

1. Pilih ciri untuk disalin (contohnya satu lubang berhampiran tepi cakera).
2. Pilih {{ui:Bulatan}}. Enam salinan muncul berjarak sama sepanjang bulatan.
3. Tetapkan:

| Tetapan | Fungsi | Lalai |
|---|---|---|
| **Ciri untuk disalin** | Sama seperti Linear | Ciri yang dipilih |
| **Paksi** | Paksi X, Y atau Z, garisan lakaran, paksi putaran, atau tepi yang dipilih | Paksi putaran terakhir jika ada, jika tidak paksi Y |
| **Sudut (°)** | 360 menjarakkan salinan sama rata sepanjang bulatan. Nilai kurang menyebarkannya merentasi sudut itu, dengan yang pertama dan terakhir di hujung | 360 |
| **Bilangan** | Jumlah keseluruhan, termasuk yang asal | 6 |
| **Songsangkan arah** | Berpusing ke arah sebaliknya | Mati |

Paksi dunia melalui asalan. Untuk cakera yang tidak berpusat pada asalan, guna garis pusat lakaran atau paksi putaran.

### Contoh: lapan lubang bolt bagi flens

1. Putar flens (lihat [Putar bahagian berpusing](topic:revolve)) sekitar paksi Y.
2. Lakar pada permukaan atas rata flens, letakkan satu titik pada bulatan bolt, dan buat Lubang.
3. Dengan Lubang dipilih, pilih {{ui:Bulatan}}. Paksinya sudah "Paksi bagi Revolve1".
4. Tetapkan **Bilangan** kepada `8`.

## Cermin

1. Pilih ciri untuk dicerminkan dalam sejarah, atau tidak pilih apa-apa untuk mencerminkan **seluruh jasad setakat dibina**.
2. Pilih {{ui:Cermin}}. Ia mencerminkan merentasi **Satah kanan**.

Untuk mencerminkan seluruh jasad merentasi muka bahagian, klik muka rata itu dahulu, kemudian pilih {{ui:Cermin}}. (Mengklik muka membersihkan pilihan sejarah, jadi ini sentiasa mencerminkan seluruh jasad.)

Tetapan dalam panel kanan:

- **Cermin**: tandakan **Seluruh jasad (setakat dibina)**, atau nyahtanda dan tandakan ciri untuk disalin.
- **Satah cermin**: Satah depan, Satah atas, Satah kanan, muka yang digunakannya sekarang ("Muka bagi Extrude1" atau "Satah tetap"), atau "Muka yang dipilih sekarang". Untuk mencerminkan ciri terpilih merentasi muka: pilih Cermin dalam sejarah, klik muka dalam paparan, dan pilih "Muka yang dipilih sekarang".

Mencerminkan seluruh jasad merentasi muka menggandakan bahagian, contohnya kurungan separuh menjadi kurungan penuh.

## Mesej

- "Bina ciri untuk disalin dahulu." atau "Bina pepejal dahulu." Tiada pepejal untuk disalin lagi.
- "Pilih ciri untuk disalin." Setiap kotak **Ciri untuk disalin** dikosongkan.
- "Extrude2 tiada pepejal untuk disalin." Ciri itu gagal atau digantung.
- "Fillet1 mengubah tepi atau dinding jasad; ia tidak boleh disalin. Salin ciri yang membentuk pepejal (ekstrud, putaran, lubang, import)." Fillet, chamfer dan shell tidak boleh dicorakkan atau dicerminkan; corakkan dahulu, kemudian fillet.
- "Tiada jasad untuk dicerminkan lagi."

:::note
Salinan corak tidak boleh dilangkau satu demi satu, dan corak tidak boleh mengikuti lengkung lakaran. Corak dan cermin lakaran belum dibina lagi: lukis geometri lakaran berulang dengan tangan atau dengan **Tambah mengikut koordinat**.
:::
