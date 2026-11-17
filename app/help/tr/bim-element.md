---
title: Bir BimCraft öğesi tasarlayın ve geri kaydedin
summary: BimCraft'tan gönderilen bir parça, etrafındaki binayla birlikte, gri ve salt okunur olarak açılır. Değiştirin, sonra BimCraft yeni şekli kabul edebilsin diye geri kaydedin.
keywords: bimcraft, bim, öğe, gönder, geri kaydet, bağlantı, bina, bağlam, komşular, destek, braket, ifc, kabul
from: 0978fe53
---

## Yapacaklarınız

BimCraft modelinden gelen bir parça üzerinde, binadaki yerinde çalışın ve yeni şekli kaynağına geri gönderin.

## Adımlar

1. BimCraft'ta bir öğe seçin ve {{ui:Parça bağlantıları}} › {{ui:PartCraft'a gönder}} seçeneğini belirleyin. PartCraft onu yeni bir parça olarak açar. Durum çubuğu bunun bir BIM öğesi olduğunu belirtir.
2. Çevresindeki öğeler (3 m içinde) gri çizilir. Bunlar tasarımı onlara göre yapmanız için oradadır. Onları seçemez ya da değiştiremezsiniz ve parça dosyasında kaydedilmezler.
3. Parçayı diğer parçalar gibi değiştirin: kes, ekle, delik aç, ayna. Orijini ve eksenleri öğenin kendisine aittir; böylece parça geldiği yere geri döner.
4. {{ui:Dosya}} › {{ui:Dışa aktar}} › {{ui:BimCraft'a geri kaydet}} seçeneğini belirleyin. Durum çubuğu hangi revizyonu gönderdiğinizi belirtir.
5. BimCraft'ta öğe, orada biri kabul edene kadar değişmiş olarak görünür.

## Görecekleriniz

- Parça, bağlantısını dosyada tutar. Daha sonra açtığınızda durum çubuğu hâlâ bir BIM öğesi olduğunu söyler. Gri bina, tarayıcı hâlâ gönderildiği paketi tuttuğu sürece geri gelir.
- Yeniden geri kaydetmek revizyon 2, 3 vb. gönderir. BimCraft en yenisini tutar.

## Bilmeniz iyi olacak noktalar

- Şekil, öğenin kendi eksenlerinde milimetre cinsinden bir ağ olarak geri gider. Özellikler PartCraft'ta kalır.
- {{ui:BimCraft'a geri kaydet}}, BimCraft'tan gelmemiş bir parça için hiçbir şey yapmaz.
- Henüz katısı olmayan bir parçanın gönderecek bir şeyi yoktur.
- İki uygulama da aynı tarayıcıda açık olmalıdır: hiçbir şey yüklenmez, iki sayfa öğeyi aralarında aktarır.
