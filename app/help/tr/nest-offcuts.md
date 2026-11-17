---
title: Kırpıntıları saklayın ve yeniden kullanın
summary: Bir yerleştirmeden sonra her sacın kalanı, bir stok listesinde numaralı bir artık parça olur; sonraki yerleştirme önce artık parçaları, sonra tam sacları kullanır.
keywords: yerleştirme, kırpıntı, artık parça, stok, artan, sac, plaka, yeniden kullanım, malzeme, kalınlık, CSV
from: 7a68d4b8
---

Parçaları plakalara yerleştirdiğinizde, her plakanın kullanılabilir artığı (ince şeritler değil) bir **artık parça** olarak saklanabilir: malzemesi, kalınlığı, boyutu ve geldiği işle birlikte numaralandırılmış bir dış hat (R-0001, R-0002 …). Liste dosyayla birlikte kaydedilir ve bir CSV olarak kaydedilebilir.

## Yeniden kullanın

**Malzemeyi** ve **kalınlığı** girin, {{ui:Önce artık parçaları kullan}} seçeneğini açık bırakın ve yerleştirin. Aynı malzeme ve kalınlıktaki artık parçalar en küçükten başlayarak denenir; sığan parçalar, artık parçanın kendi dış hattının içine ve kenarından uzakta yerleştirilir; sığmayanlar yeni plakalara gider. İş raporu hangi artık parçaların kullanıldığını ve geriye ne kaldığını söyler. {{ui:Artanları artık parça olarak kaydet}} açıkken, {{ui:Bu işi stoka ekle}} komutu bunu stok listesine yazar: kullanılmış bir artık parça **Kullanıldı** (işle birlikte) olarak işaretlenir ve bir daha önerilmez; ondan geriye kalan, kaynağını hatırlayan yeni bir artık parça olur.

## Artık parça nedir

Artık, ayarladığınız aralıkla ölçülür (hiçbir parça kesime bu mesafeden daha yakın değildir). Plakanın yirmide birinden dar şeritler ve yüzde 2 %'sinden küçük parçalar hurdadır; atölyeniz daha küçük parçaları tutuyorsa her iki sınırı da değiştirin. Parçaların içindeki delikler parçaların kendisine aittir ve saklanmaz. Rulonun artık parçası yoktur.

## Çizimde

Bir yerleşimin DXF'i, her artık parçanın dış hattını REMNANTS katmanında, numarasını ortasında gösterecek şekilde çizer; böylece parçalar kesilirken işaretlenebilir.

Henüz yapılmadı: artık parçanın lif yönü, barkod ya da etiket sayfası, rulo artık parçaları, projeler arası paylaşılan stok.
