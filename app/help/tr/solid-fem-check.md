---
title: Solid FEM: tek bir parçanın gerilme denetimi
summary: Solid FEM eklentisini açın, bir parçayı örgüleyin, 3D görünümde sabit yüzeyleri ve bir yükü seçin, çözün ve model üzerinde yer değiştirme ile von Mises gerilmesini okuyun.
keywords: solid fem, sonlu eleman, fea, gerilme, von mises, yer değiştirme, sabit yüzey, yük, basınç, yerçekimi, doğal frekans, mod şekli, örgü, eklenti
from: 8b7e6ba2
---

## Ne yapacaksınız

Bir katı parçayı bir yük altında denetleyin: nerede yer değiştirdiğini ve gerilmenin nerede en yüksek olduğunu görün. Çalışma doğrusal ve elastiktir, bu nedenle bir denetim yardımcısıdır; sonuçları mühendisiniz gözden geçirir.

## Adımlar

1. {{ui:Ayarlar}} › {{ui:Eklentiler}} öğesini seçin ve {{ui:Solid FEM}} öğesini açın (siz açana kadar kapalıdır). Sağ paneldeki {{ui:Solid FEM}} sekmesini açın.
2. {{ui:Malzeme}} altında bir malzeme seçin veya {{ui:Özel}} seçip Poisson oranını, yoğunluğu ve akma gerilmesini yazın.
3. {{ui:Sabit yüzey ekle}} öğesine basın, 3D görünümde tutulan yüzeylere tıklayın, sonra {{ui:Seçim bitti}} öğesine basın.
4. {{ui:Kuvvet ekle}}, {{ui:Basınç ekle}} veya {{ui:Yerçekimi ekle}} ile bir yük ekleyin ve yüzeylerini aynı şekilde seçin.
5. {{ui:Parçayı örgüle}} öğesine, ardından {{ui:Çöz}} öğesine basın. Frekans istiyorsanız önce {{ui:Çalışma}} altından {{ui:Doğal frekanslar}} seçin.
6. {{ui:Sonuçlar}} ve {{ui:Uyarılar}} bölümlerini okuyun, ardından von Mises gerilmesini, yer değiştirmeyi veya bir mod şeklini modelde çizmek için {{ui:Modelde göster}} öğesine basın; {{ui:Gösterimi kaldır}} onu kaldırır.

## Notlar

- Sayfa, sabit bir eleman sayısına kadar çözer; eleman boyutunuz çok ince olduğunda durum satırı bunu bildirir.
- Sabit yüzeylerde, yük noktalarında ve keskin köşelerde gerilme, örgü inceltildikçe artar. Bir tepe değere güvenmeden önce inceltin ve karşılaştırın.
- Her değişiklik tek bir geri alma adımıdır ve ayarlar parça dosyasına kaydedilir.
- Akma ve temas çalışmaları için bkz. [Gerilme ve sehim denetimi](topic:simulation).
