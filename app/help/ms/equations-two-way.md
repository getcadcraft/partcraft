---
title: Persamaan dua hala
summary: Tukar parameter dan bahagian mengikut; taip saiz baharu ke dalam nombor yang dipacu dan PartCraft mengira parameter di sebaliknya, bertanya yang mana satu apabila beberapa boleh berubah.
keywords: persamaan, selesai ke belakang, dimensi dipacu, dua hala, sebaliknya, goal seek, parameter, nilai dipaut, parameter yang mana
from: 82dc0269
---

Persamaan seperti **Extrude1 depth = thick + extra** berfungsi dalam kedua-dua arah.

## Ke hadapan: tukar parameter

Pada tab {{ui:Parameters}}, tukar `thick` daripada 20 kepada 30. Kedalaman Extrude1 menjadi 30 + extra, dan bahagian itu dibina semula.

## Ke belakang: tukar nombor yang dipacu

1. Klik "Extrude1" dalam sejarah. Kotak **Kedalaman (mm)** memaparkan **ƒ**: persamaan memacunya.
2. Taip saiz yang anda mahu, contohnya `40`, dan tekan {{key:Enter}}.

PartCraft menyelesaikan parameter di sebalik persamaan itu, melalui seberapa banyak langkah yang diperlukan (`depth = hub_h`, `hub_h = disc_t + 50`: menaip ketinggian menukar `disc_t`). Bar status memberitahu apa yang berubah, contohnya bahawa extra berubah daripada 5 kepada 15.

Apabila dua atau lebih parameter memacu nombor itu, kotak bertanya **Parameter yang mana patut berubah?** dan menyenaraikannya. Klik satu; yang lain mengekalkan nilainya. {{ui:Cancel}} tidak mengubah apa-apa.

Perkara yang sama berfungsi dalam lakaran: klik dua kali dimensi yang dipacu, taip nilai, tekan {{key:Enter}}. Ia juga berfungsi dalam lajur **Nilai** pada jadual parameter, untuk parameter yang sendiri ialah ungkapan.

## Apabila ia tidak boleh

- Nombor yang mesti bulat (bilangan corak) atau kekal dalam julat (sudut sehingga 360°) ditolak sebelum apa-apa berubah.
- Persamaan nombor tetap sahaja (`=40`) tiada parameter untuk diubah: nombor yang anda taip menggantikannya.
- Jika tiada nilai parameter yang memberikan saiz yang anda taip, bar status memberitahu dan tiada apa berubah.
- Lakaran yang tidak boleh diselesaikan dengan nilai baharu mengekalkan nilai sebelumnya, dan bar status menamakan lakaran itu.

Setiap perubahan, dalam mana-mana arah, ialah satu langkah untuk {{key:Mod+Z}} dan {{key:Mod+Y}}.
