---
title: Ilustrasi teknis: line art, gambar, dan lembar
summary: Ekspor tampilan apa pun sebagai line art vektor (SVG atau PDF) dengan tiga tebal garis, garis tersembunyi dibuat putus-putus atau dihilangkan, muka potongan yang diarsir, dan isian opsional, atau sebagai PNG; letakkan beberapa tampilan pada satu lembar.
keywords: illustrate, line art, ilustrasi teknis, svg, pdf, png, garis tersembunyi, siluet, hatch, lembar, ekspor
from: 0e9bea63
---

{{ui:Ekspor}} pada grup {{ui:Keluaran}} membuka dialog ekspor:

- {{ui:Apa}}: scene seperti sekarang, satu tampilan, atau semua tampilan.
- {{ui:Sebagai}}: **PDF** atau **SVG** (line art vektor; keduanya ditulis dari gambar yang sama), **PNG dari line art**, atau **gambar PNG dari tampilan 3D** (lebar hingga 4096 piksel), dan [file 3D interaktif](topic:illustrate-interactive).
- {{ui:Halaman}}: satu tampilan per halaman, atau semua tampilan pada satu lembar dengan namanya di bawahnya. {{ui:Kertas}}: A4, A3, Letter, atau Tabloid.
- {{ui:Garis tersembunyi}}: dibuat putus-putus atau dihilangkan. {{ui:Isian}}: sesuai tampilan, tidak ada, warna datar, atau berbayang. {{ui:Juga gambar tepi lunak}} menambahkan garis detail.

Line art memiliki tiga tebal garis: garis luar (siluet dan tepi terbuka, serta garis potongan), tepi tajam, dan garis detail. Muka potongan dari potongan bidang atau potongan kotak diarsir. Tampilan terurai diberi jejak garis rantai dari tempat setiap part berada; balon, anotasi, daftar part, dan kaca pembesar ikut digambar.

Line art dihitung dari bentuk part dengan metode mesh (metode yang sama dengan yang dipakai lembar gambar PartCraft tanpa kernel eksak), sehingga muka lengkung digambar berdasarkan faset-fasetnya, sebagaimana model menyimpannya.

## Belum dibuat

- Gambar dengan kualitas path tracer (renderer ModelCraft) belum disediakan di sini; gambar PNG memakai tampilan 3D itu sendiri.
