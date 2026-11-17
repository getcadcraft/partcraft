---
title: Kajian magnet bagi lakaran
summary: Tukar profil tertutup lakaran anda kepada model magnet rata (besi, magnet, gegelung), lihat medan, dan baca daya serta tork pada satu jasad.
keywords: magnet, magnetik, magnetostatik, medan, ketumpatan fluks, daya, tork, gegelung, yoke, besi, lengkung B-H, magnet kekal, penggerak, motor, solenoid, maxwell
from: 604efc3b
---

Gunakan {{ui:Lagi}} dalam bar alat {{ui:Ciri}} › {{ui:Kajian magnet lakaran…}} pada bahagian yang mempunyai lakaran. Setiap bentuk tertutup dalam lakaran yang anda tandakan ialah satu kawasan model rata; kajian mengira medan magnet B, daya dan tork pada jasad yang anda pilih.

## Langkah

1. Lukiskan jasad sebagai bentuk tertutup dalam lakaran: yoke besi, magnet, gegelung. Jasad yang bersentuh berkongsi tepi, jadi letakkannya dalam lakaran yang berbeza; jasad yang berdiri berasingan, atau terletak di dalam satu sama lain (tingkap dalam yoke), boleh berkongsi satu lakaran. Simpan lakaran pada satah yang sama.
2. Buka kajian dan tandakan lakaran untuk digunakan. Setiap profil tertutup mendapat satu baris, dinomborkan. Nyatakan apa ia: {{ui:Udara}}, {{ui:Besi}} (kebolehtelapan, atau lengkung B–H yang ditaip sebagai pasangan B dalam tesla dan H dalam A/m), {{ui:Magnet kekal}} (Br dalam tesla, arahnya sebagai sudut dari paksi x lakaran, dan kebolehtelapan pemulihannya) atau {{ui:Gegelung}} (jumlah arus melalui profilnya, lilitan kali ampere; tanda menunjukkan arah ia mengalir).
3. Tandakan {{ui:Daya dan tork pada jasad ini}} untuk jasad yang anda mahu. Berikan kedalaman bahagian keluar dari lakaran.
4. Pilih mesh dan udara di sekeliling model, kemudian {{ui:Jalankan}}.

## Apa yang anda patut lihat

- Ketumpatan fluks |B| ke atas model, daripada biru gelap (rendah) hingga merah (tinggi), dengan profil dinomborkan.
- Medan terkuat dan di mana ia berada, bilangan segi tiga, dan untuk setiap jasad yang anda tandakan, daya sepanjang x dan y serta tork mengelilingi tengahnya, bagi kedalaman yang anda berikan.
- {{ui:Simpan keputusan (CSV)}} menulis nombor-nombor itu.

## Perlu diketahui

- Ia ialah model rata yang stabil: semuanya bagi setiap meter kedalaman, tanpa arus pusar dan tanpa histerisis, dan magnet ialah garis pemulihan lurus (ia tidak boleh dinyahmagnetkan).
- Model terletak dalam kotak udara yang tepinya ialah dinding. Bandingkan dua saiz kotak udara, dan mesh Normal serta Fine: daya yang diambil daripada medan di sekeliling jasad hanya sebaik mesh di situ.
- Besi dengan kebolehtelapan sahaja tidak pernah tepu. Apabila medan melebihi 2 T, kajian menaikkan ⚠ dalam senarai {{ui:Masalah}}: berikan besi lengkung B–H. Nombor dalam baris baharu ialah contoh (besi μr 2000, magnet 1.2 T), bukan data lembaran sesuatu bahan.
- Jasad memerlukan ruang di sekelilingnya untuk menerima daya: jika jasad lain terlalu dekat, kajian akan memberitahu.
- Alat bantu lukisan, bukan kelulusan kejuruteraan.

## Seterusnya

- [Medan magnet dalam 2-D (tutorial)](topic:magnetic-fields-2d)
