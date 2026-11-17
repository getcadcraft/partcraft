---
title: Rusuk dan gusset
summary: Kukuhkan bahagian dengan rusuk yang dilukis sebagai satu garisan: ia diisi dari garisan ke dinding, pada ketebalan yang ditetapkan merentasi satah lakaran, pada sisi yang anda pilih.
keywords: rusuk, gusset, web, pengukuh, pendakap, kurungan, sokongan sudut, dinding nipis, kukuhkan
from: 5c218881
---

:::note
**Belum dibina dalam versi ini.** Rusuk memerlukan kernel geometri tepat, yang tidak dimiliki versi PartCraft ini: ia membina setiap bahagian dengan kernel mesh. [Apa yang belum dibina](topic:not-built-yet) menerangkan apa yang perlu dilakukan sebaliknya. Bahagian lain halaman ini menerangkannya seperti cara ia berfungsi dengan kernel tepat.
:::

**Rusuk** (atau gusset) ialah dinding nipis yang mengukuhkan bahagian, seperti segi tiga di dalam sudut kurungan L. Anda hanya melukis tepi bebasnya: PartCraft mengisi ruang antara garisan itu dan dinding. Ia memerlukan **kernel tepat** (lihat [Kernel mesh](topic:solid-kernels)).

## Tambah rusuk

1. Buat satah melalui tengah tempat rusuk pergi (untuk kurungan L sedalam 40, satah 20 di hadapan lakarannya: lihat [Satah, paksi dan titik rujukan](topic:reference-geometry)).
2. Lakar pada satah itu **satu garisan** dari dinding ke dinding — atau beberapa garisan hujung ke hujung untuk tepi rusuk yang bengkok. Garisan boleh berhenti sebelum sampai ke dinding: hujungnya dilanjutkan sehingga bertemu dengannya.
3. Pilih lakaran dan pilih {{ui:Lagi}} › {{ui:Rib}}.

Rusuk mengisi dari garisan ke dinding pada sisi ke arah tengah bahagian, supaya gusset jatuh di sudut dalam. Jika sisi itu terbuka dan sisi yang lain tertutup, PartCraft membalikkannya untuk anda dan memberitahu anda.

## Tetapan

- **Ketebalan (mm)** ialah ketebalan rusuk merentasi satah lakaran. Ia boleh dipacu oleh parameter.
- **Ketebalan** (pilihan di bawahnya): **Berpusat pada satah lakaran**, **Di hadapan satah** (sepanjang normalnya) atau **Di belakang satah**.
- **Balik** mengisi sisi lain garisan.

## Mesej

- **Di sisi ini tepi rusuk tidak pernah bertemu jasad** — tiada apa yang tertutup di ruang sebelah itu: tandakan atau nyahtandakan **Balik**, atau alihkan garisan supaya dinding membataskannya.
- **Rusuk memerlukan satu rantai garisan terbuka dalam lakarannya** — lakaran mempunyai bentuk tertutup, lengkok atau lengkung, atau garisan yang tidak bersambung hujung ke hujung.
- **Tepi rusuk berjalan di dalam jasad di situ** — garisan terletak di dalam pepejal; lukislah di ruang terbuka antara dinding.
