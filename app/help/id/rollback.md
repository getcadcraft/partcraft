---
title: Mundur dan maju melalui riwayat
summary: Gerakkan bilah rollback naik dan turun satu fitur setiap kali untuk melihat part dibangun, sisipkan fitur di tengah, dan kembali ke akhir.
keywords: rollback, mundur, maju, bilah rollback, langkah melalui riwayat, sisipkan fitur, bekukan, riwayat
from: 9a366cae
---

Bilah rollback menentukan seberapa banyak riwayat yang dibangun. Fitur di bawahnya diredupkan dan tidak dibangun; fitur baru masuk di bilah.

## Melangkah satu fitur setiap kali

Dengan part tampil di layar (tidak ada sketsa atau gambar yang terbuka):

| Lakukan | Hasil |
|---|---|
| {{key:[}} atau tombol panah atas di sebelah nama part | Bilah bergerak naik satu fitur |
| {{key:]}} atau tombol panah bawah | Bilah bergerak turun satu fitur |
| {{key:End}} atau tombol bilah ke akhir | Setiap fitur dibangun kembali |

Bilah status menampilkan posisi bilah, misalnya "Bilah rollback setelah Sketch1: 1 dari 2 fitur dibangun". Tombol nonaktif saat bilah tidak dapat bergerak lebih jauh ke arah itu.

Anda juga bisa memilih {{ui:Kembalikan ke sini}} pada fitur mana pun, atau klik **Bilah rollback · maju** di riwayat.

## Menyisipkan fitur di tengah

1. Mundurkan bilah sampai berada di tempat fitur baru seharusnya.
2. Tambahkan fitur: ia masuk di bilah.
3. Tekan {{key:End}} untuk membangun sisa riwayat di atasnya.

Setiap pergeseran bilah dapat diurungkan dengan {{key:Mod+Z}}. Posisi bilah disimpan di file, sehingga part dapat dikirim dalam keadaan mundur. Alat baris perintah juga memindahkannya: `partcraft rollback part.json` dan `partcraft forward part.json --end`.
