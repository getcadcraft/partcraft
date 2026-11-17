---
title: Gulung balik dan ke hadapan melalui sejarah
summary: Naik dan turunkan bar rollback satu ciri pada satu masa untuk melihat bahagian dibina, selitkan ciri di tengah, dan kembali ke penghujung.
keywords: rollback, gulung balik, gulung ke hadapan, bar rollback, langkah melalui sejarah, selit ciri, bekukan, sejarah
from: 9a366cae
---

Bar rollback menentukan berapa banyak sejarah yang dibina. Ciri di bawah bar ditandakan kelabu dan tidak dibina; ciri baharu dimasukkan di bar.

## Langkah satu ciri pada satu masa

Dengan bahagian dipaparkan (tiada lakaran atau lukisan dibuka):

| Tindakan | Hasil |
|---|---|
| {{key:[}} atau butang anak panah atas di sebelah nama bahagian | Bar bergerak naik satu ciri |
| {{key:]}} atau butang anak panah bawah | Bar bergerak turun satu ciri |
| {{key:End}} atau butang bar ke penghujung | Setiap ciri dibina semula |

Bar status menyatakan di mana bar berada, contohnya "Bar rollback selepas Sketch1: 1 daripada 2 ciri dibina". Butang dimatikan apabila bar tidak boleh bergerak lebih jauh ke arah itu.

Anda juga boleh memilih {{ui:Roll back to here}} pada mana-mana ciri, atau klik **Bar rollback · gulung ke hadapan** dalam sejarah.

## Selit ciri di tengah

1. Langkah bar ke belakang sehingga ia berada di tempat ciri baharu sepatutnya.
2. Tambah ciri itu: ia masuk di bar.
3. Tekan {{key:End}} untuk membina baki sejarah di atasnya.

Setiap gerakan bar ialah langkah yang boleh anda buat asal dengan {{key:Mod+Z}}. Kedudukan bar disimpan dalam fail, jadi bahagian boleh dihantar dalam keadaan digulung balik. Alat baris arahan juga menggerakkannya: `partcraft rollback part.json` dan `partcraft forward part.json --end`.
