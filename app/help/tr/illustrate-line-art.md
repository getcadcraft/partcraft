---
title: "Teknik çizimler: çizgi çizimleri, resimler ve sayfalar"
summary: Herhangi bir görünümü üç çizgi kalınlığıyla vektör çizgi çizimi (SVG ya da PDF) olarak dışa aktarın; gizli çizgiler kesik çizgili ya da hiç yok, kesilen yüzeyler taralı ve isteğe bağlı dolgularla; ya da PNG olarak. Birden fazla görünümü tek bir sayfaya yerleştirin.
keywords: illustrate, çizgi çizimi, teknik çizim, svg, pdf, png, gizli çizgiler, siluet, tarama, sayfa, dışa aktarma
from: 0e9bea63
---

{{ui:Çıktı}} grubundaki {{ui:Dışa aktar}} dışa aktarma iletişim kutusunu açar:

- {{ui:Ne}}: sahnenin şu anki hali, tek bir görünüm ya da tüm görünümler.
- {{ui:Biçim}}: **PDF** ya da **SVG** (vektör çizgi çizimi; ikisi de aynı çizimden yazılır), **çizgi çizimlerinin PNG'si** ya da **3B görünümün PNG resmi** (en fazla 4096 piksel genişlikte) ve [etkileşimli 3B dosya](topic:illustrate-interactive).
- {{ui:Sayfalar}}: her sayfada bir görünüm ya da her görünüm adının altında olacak şekilde tek sayfada hepsi. {{ui:Kâğıt}}: A4, A3, Letter ya da Tabloid.
- {{ui:Gizli çizgiler}}: kesik çizgili ya da hiç yok. {{ui:Dolgular}}: görünümün görünüşü gibi, yok, düz renkler ya da gölgeli. {{ui:Yumuşak kenarları da çiz}} ayrıntı çizgileri ekler.

Çizgi çizimi üç kalınlığa sahiptir: dış hatlar (siluetler, açık kenarlar ve kesit hatları), keskin kenarlar ve ayrıntı çizgileri. Bir kesitin ya da kutu kesitin kesilen yüzeyleri taralıdır. Patlatılmış görünümlerde her parçanın bulunduğu yerden çıkan zincir çizgili izler çizilir; balonlar, açıklamalar, parça listesi ve büyüteç de çizilir.

Çizgi çizimi, parça şekillerinden ağ yöntemiyle hesaplanır (PartCraft'ın çizim sayfasının kesin çekirdek olmadan kullandığı yöntemle aynı); bu nedenle eğri yüzeyler, model tuttukları gibi, küçük düz yüzeyler olarak çizilir.

## Henüz yapılmadı

- Yol izleyicinin kalitesindeki resimler (ModelCraft'ın render motoru) burada sunulmaz; PNG resimler 3B görünümün kendi görünümüdür.
