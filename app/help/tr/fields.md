---
title: Alanlar: mesafe olarak şekiller
summary: Bir alanın ne olduğu (bir şeklin yüzeyine uzaklık olarak saklanması), bir betikte ilkel şekiller, mantıksal işlemler, kafesler ve minimal yüzeylerle nasıl oluşturulacağı, bir gövdeye nasıl dönüştüğü ve aynı betiğin neden her zaman aynı baytları verdiği.
keywords: alan, işaretli mesafe, sdf, voksel, gyroid, tpms, kafes, mantıksal işlem, ofset, kabuk, harmanlama, dual contouring, deterministik, su geçirmez, manifold, tuğla
from: faab7480
---

Bir **alan**, bir şekli herhangi bir noktadan yüzeyine olan uzaklıkla tanımlar: içeride negatif, yüzeyde sıfır, dışarıda pozitif. Yarıçapı 5 olan bir küre, "merkeze olan uzaklık eksi 5"tir. Şekilleri birleştirmek, uzaklıklar üzerinde aritmetiktir: birleşim, ikisinden küçük olanıdır; kesişim büyük olanıdır; bir şekli bir diğerinden çıkarmak, birincinin ile ikincinin eksisinin büyüğüdür. Bir şekli 1 mm büyütmek, uzaklıktan 1 çıkarır; içi boş bir duvar, uzaklığın içe katlanmış halidir.

Bu yüzden alanlar kafesler, kanallar ve kademeli duvarlar için uygundur: bir gyroid'in yüzeyi "sinüs toplamı sıfırdır"dır ve parça boyunca 1'den 3 mm'ye kalınlaşan bir duvar, parça boyunca değişen bir sayıdır.

## Alandan gövdeye

`to_body(field, h)`, alanı birbirinden `h` milimetre aralıklı bir ızgarada örnekler; yalnızca yüzeye yakın noktaları tutar (8 × 8 × 8 tuğladan oluşan seyrek bir ızgara) ve yüzeyi **dual contouring** ile oluşturur: her yüzey hücresi için bir köşe, yüzey düzlemlerinin buluştuğu yere konur; böylece keskin bir kenar bir voksel içinde keskin kalır. Yüzey kapalıdır ve her kenar tam olarak iki üçgen tarafından paylaşılır; rapor bunu söyler. Yaklaşık üç vokselden ince bir özellik daralabilir; bu durumda rapor, gövdeyi gizlemek yerine kapalı bir katı olmadığını söyler.

Voksel boyutu doğruluktur: çapı 25 voksel olan bir kürenin hacmi, yüzdenin birkaç yüzde biri içindedir; bir duvar yalnızca vokselleri kadar doğrudur. Izgara ne kadar kabaysa o kadar hızlı çalışır.

## Her zaman aynı bayt

Bir alanda saat ya da rastgele sayı yoktur. Bir gyroid'in sinüs ve kosinüsü ile kütüphanedeki her üstel, logaritma ve kuvvet, Node, Chrome, Firefox ve Safari'nin aynı bitleri vermesi için düz aritmetikten hesaplanır; ızgara sabit bir sırayla dolaşılır. Bu yüzden aynı betik ve aynı girdiler, herhangi bir bilgisayarda ve herhangi bir sayıda worker iş parçacığında, bayt bayt aynı örgüleri ve veri tablolarını verir. Bu test edilmiştir; Node'a karşı bir tarayıcı da dahil.

## Sonraki adımlar

[Bir üretici yazma](topic:write-a-generator) alanlarla bir parça oluşturur; [Mühendislik kütüphanesi](topic:engineering-library) bunu boyutlandırır.
