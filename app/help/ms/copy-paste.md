---
title: Salin, tampal dan pendua
summary: Salin geometri lakaran, ciri dan bahagian himpunan; tampal di tempat anda klik atau di tempat yang sama; pendua dalam satu langkah; dan apa yang ikut bersama salinan serta apa yang tidak.
keywords: salin, tampal, potong, pendua, papan keratan, tampal di tempat yang sama, pilih semua, nyahpilih semua, padam, ctrl c, ctrl v, ctrl d, contoh, komponen, salin lakaran, salin ciri, salin bahagian
from: 611307d7
---

Kumpulan {{ui:Sunting}} dalam bar alat mengandungi {{ui:Buat asal}}, {{ui:Buat semula}}, {{ui:Salin}}, {{ui:Tampal}} dan menu {{ui:Lagi}} dengan {{ui:Potong}}, {{ui:Salin}}, {{ui:Tampal}}, {{ui:Tampal di tempat yang sama}}, {{ui:Pendua}}, {{ui:Padam}}, {{ui:Pilih semua}} dan {{ui:Nyahpilih semua}}, setiap satu dengan kekuncinya. Apa yang disalin bergantung pada tempat anda berada: geometri dalam lakaran terbuka, ciri dalam sejarah, atau bahagian dalam himpunan.

Item yang malap tidak boleh bertindak sekarang. Letakkan kursor di atasnya: tooltipnya memberitahu sebabnya, contohnya "Pilih geometri lakaran dahulu" atau "Papan keratan memegang Sketch2 dan Extrude2: ciri ditampal ke dalam sejarah, jadi keluar dari lakaran dahulu".

| Tindakan | Kekunci | Dalam lakaran | Dalam sejarah | Dalam himpunan |
|---|---|---|---|---|
| Salin | {{key:Mod+C}} | Titik dan lengkung yang dipilih | Lakaran, ekstrud, revolusi atau lubang yang dipilih (bersama lakarannya) | Bahagian yang dipilih |
| Potong | {{key:Mod+X}} | Salin, kemudian padam | Salin, kemudian padam ciri | Salin, kemudian alih keluar bahagian |
| Tampal | {{key:Mod+V}} | Salinan mengikut penunjuk; klik di mana ia pergi | Menambah salinan di hujung sejarah | Salinan baharu di sebelah bahagian lain |
| Tampal di tempat yang sama | {{key:Mod+Shift+V}} | Pada koordinat yang sama | Sama seperti Tampal | Di tempat yang sama dengan bahagian yang disalin |
| Pendua | {{key:Mod+D}} | Salin dan alih dalam satu langkah; papan keratan dibiarkan | Salinan kedua tepat selepas anda | Salinan kedua di sebelah bahagian lain |
| Padam | {{key:Delete}} | Pilihan | Ciri (bertanya jika ciri lain menggunakannya) | Bahagian atau sambungan |
| Pilih semua | {{key:Mod+A}} | Setiap perkara dalam lakaran | Tidak tersedia | Tidak tersedia |
| Nyahpilih semua | {{key:Esc}} | Mengosongkan pilihan | Mengosongkan pilihan dan mod pilih | Mengosongkan pilihan |

Setiap tampal, pendua dan potong ialah satu langkah dalam senarai buat asal: {{key:Mod+Z}} membatalkannya, {{key:Mod+Y}} mengembalikannya.

## Dalam lakaran

1. Pilih apa yang hendak disalin: klik, {{key:Shift}}+klik untuk lebih, seret tetingkap, atau tekan {{key:Mod+A}} untuk semuanya.
2. Tekan {{key:Mod+C}} atau pilih {{ui:Salin}}. Bar status memberitahu apa yang disalin.
3. Tekan {{key:Mod+V}} atau pilih {{ui:Tampal}}. Salinan putus-putus mengikuti penunjuk, dipegang dari tengahnya. Ia melekat pada titik: letakkan pusat bulatan yang disalin pada titik dengan mengklik titik itu.
4. Klik di tempat ia pergi. Geometri yang ditampal kekal dipilih, jadi anda boleh menyeretnya atau menambah hubungan kepadanya serta-merta. {{key:Esc}} membatalkan tampalan.

Yang ikut bersama:

- Garisan, bulatan atau lengkung yang disalin membawa titik hujung dan pusatnya sendiri.
- Hubungan dan dimensi **antara item yang disalin** ikut bersama: segi empat tepat yang disalin masih segi empat tepat, dengan saiznya.
- Hubungan **kepada geometri yang tidak anda salin**, dan kepada asalan, digugurkan. Bar status mengira: "2 hubungan kepada geometri di luar salinan tidak akan ikut bersama". Jadi salinan yang ditampal bebas bergerak sehingga anda mengikatnya dengan hubungan atau dimensi.
- Titik tetap kekal tetap, pada kedudukan barunya.

{{ui:Tampal di tempat yang sama}} meletakkan salinan tepat pada koordinat asal, dalam lakaran ini atau yang lain: berguna untuk membawa profil dari satu lakaran ke lakaran lain. Dalam lakaran yang sama salinan terletak di atas asal; seretnya pergi.

{{ui:Pendua}} ({{key:Mod+D}}) menyalin pilihan dan mula meletakkannya serta-merta, tanpa menyentuh apa yang ada pada papan keratan.

:::tip
Untuk mengulang pusat lubang atau slot beberapa kali, salin sekali dan tampal beberapa kali: setiap {{key:Mod+V}} memulakan salinan baharu yang mengikuti penunjuk.
:::

## Dalam sejarah

1. Klik lakaran, ekstrud, revolusi atau lubang dalam sejarah.
2. {{key:Mod+C}} menyalinnya. Ciri berasaskan lakaran disalin bersama lakarannya.
3. {{key:Mod+V}} menambah salinan di hujung sejarah (di bar gulung balik apabila anda telah menggulung balik), dengan nama baharu seperti Sketch3 dan Extrude2.

Salinan terletak pada satah atau muka yang sama dengan asal, jadi ia dibina di atasnya dan bahagian kelihatan sama. Pilih lakaran baharu dan tukar satahnya dalam panel kanan, atau buka dan seret atau dimensikan semula profilnya, untuk mengalihkan salinan.

- Tampal ke **bahagian lain**: buka bahagian itu dan tekan {{key:Mod+V}}. Apabila lakaran salinan berada pada muka yang tidak dimiliki bahagian itu, ia pergi ke satah Front, dan bar status memberitahu anda.
- {{ui:Pendua}} menyalin dan menampal dalam satu langkah, dalam bahagian yang sama.
- {{ui:Potong}} menyalin ciri, kemudian memadamnya (bertanya dahulu jika ciri lain menggunakannya).

Corak, cermin, fillet, chamfer, cangkerang dan pepejal yang diimport tidak boleh disalin: ia bergantung pada tepi, muka atau ciri yang dipilih dalam bahagian ini. Salin lakaran atau ciri yang mereka dibina di atasnya, atau corakkan dengan {{ui:Linear}} atau {{ui:Bulatan}}.

## Dalam himpunan

1. Klik bahagian dalam pandangan atau dalam senarai di sebelah kiri.
2. Pilih {{ui:Pendua}} ({{key:Mod+D}}), atau {{key:Mod+C}} kemudian {{key:Mod+V}}.

Salinan baharu ialah **bahagian yang sama**: sunting satu dan setiap salinan berubah. Ia muncul 20 mm di sebelah kanan segala yang sudah ada dalam himpunan, dipusingkan sama seperti salinan itu, dan kekal di situ sehingga sambungan meletakkannya. {{ui:Tampal di tempat yang sama}} ({{key:Mod+Shift+V}}) meletakkannya tepat di mana bahagian yang disalin berada; sambungkannya untuk mengalihkannya (ofset sambungan gelongsor menolaknya sepanjang paksi).

Menampal bahagian yang disalin daripada himpunan lain membawa bahagian itu bersama, sama seperti {{ui:Selit}} daripada failnya. {{ui:Tambah salinan}} dalam kumpulan Himpunan melakukan perkara yang sama seperti {{ui:Pendua}}, dan berfungsi dengan tiada apa dipilih (ia menyalin bahagian terakhir).

## Papan keratan

- Ia ialah papan keratan PartCraft sendiri, bukan milik komputer: anda tidak boleh menampal geometri PartCraft ke program lain, atau teks ke dalam pandangan PartCraft.
- Ia disimpan dalam penyemak imbas ini, supaya tab PartCraft lain boleh menampal apa yang anda salin. Ia dibaca semula dan disemak seperti fail yang dibuka; apa-apa yang rosak atau daripada versi lain ditolak.
- Bahagian dengan fail STEP yang diimport besar mungkin terlalu besar untuk disimpan oleh penyemak imbas: ia kemudian hanya ditampal dalam tab ini.
- Dalam kotak nombor atau carian bantuan, {{key:Mod+C}} dan {{key:Mod+V}} menyalin dan menampal teks seperti biasa.

Pada helaian lukisan, salin dan tampal belum tersedia lagi; {{ui:Padam}} dan {{ui:Nyahpilih semua}} berfungsi pada simbol yang dipilih. Lihat [Belum dibina](topic:not-built-yet).
