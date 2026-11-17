---
title: Pustaka alatan
summary: Simpan alatan yang anda gunakan dalam pelayar supaya setiap bahagian boleh memilikinya, dan pindahkan pustaka alatan antara komputer sebagai fail JSON.
keywords: pustaka alatan, alatan, eksport, import, JSON, simpan alatan, nombor T, pemotong hujung, alatan bengkel
from: 8b9f2483
---

Tab **Alatan** dalam Manufacture menyenaraikan alatan bahagian itu. Di bawah **Pustaka alatan** anda boleh menyimpan alatan anda sendiri melebihi satu bahagian:

- {{ui:Simpan alatan ini}} menambah alatan yang dipilih ke **Alatan disimpan saya**; {{ui:Simpan semua alatan bahagian ini}} menambah semuanya. Alatan disimpan saya dikekalkan dalam pelayar ini dan tersedia untuk setiap bahagian. Alatan yang sudah anda simpan (jenis, saiz, alur dan penggantian yang sama) tidak akan disimpan dua kali.
- {{ui:Tambah ke bahagian ini}} memasukkan alatan disimpan yang dipilih ke dalam bahagian. Jika nombor T-nya sudah digunakan oleh alatan lain dalam bahagian, ia mendapat nombor kosong seterusnya dan panel memberitahu anda. {{ui:Alih keluar daripada pustaka saya}} membuangnya daripada senarai disimpan (bukan daripada bahagian yang sudah memilikinya).
- {{ui:Eksport alatan…}} menulis alatan bahagian sebagai fail `.json`; {{ui:Import alatan…}} menambah alatan daripada fail sebegitu ke dalam bahagian, dengan peraturan yang sama (alatan yang sudah ada dilangkau, dan nombor T yang telah diambil dialihkan). Fail itu menyimpan saiz, alur, bahan dan penggantian suapan serta kelajuan yang anda taip; ia tidak mempunyai id. Gunakannya untuk memindahkan alatan bengkel ke komputer lain atau untuk memberikannya kepada rakan sekerja.

Jika pelayar tidak dapat mengekalkan pustaka (storan dimatikan, atau penuh), penyimpanan akan memberitahu anda dan **Eksport alatan** ialah cara untuk menyimpan fail. Fail mesti merupakan pustaka alatan PartCraft versi ini atau lebih lama, dengan paling banyak 500 alatan bersaiz sah; apa-apa lain ditolak dengan sebab.

Kelajuan pemotongan dan beban cip yang datang bersama alatan ialah nilai permulaan; lihat [Hasilkan laluan alat dan G-code](topic:manufacture).
