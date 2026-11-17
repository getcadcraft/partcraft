---
title: Parçayı 3B baskıya hazırlayın
summary: Bir parçanın ya da montajın kapalı olduğunu, yazıcınıza sığdığını ve bir taban üzerinde durduğunu denetleyin; ardından dilimleyiciniz için STL ya da 3MF olarak indirin.
keywords: 3B baskı, 3 boyutlu yazdırma, yazıcı, baskı, dilimleyici, stl, 3mf, su geçirmez, kapalı, manifold, tabla, tabla boyutu, yapı tablası, sarkma, destekler, taban, milimetre, dışa aktar, dişler, boşluk
from: 90d81dff
---

Bir dilimleyici kapalı bir şekil ister: delik yok, her yüzey dışarı bakar, kendi içinden geçen bir şey yok. PartCraft'ın oluşturduğu parçalar yapıları gereği kapalıdır; bu yüzden denetim çoğunlukla size boyutu, parçanın yazıcınızın tablasına sığıp sığmadığını, düz bir yüzey üzerinde durup durmadığını ve ne kadarının sarktığını söyler.

## Denetleyin ve indirin

1. İsteğe bağlı, bir kez: {{ui:Ayarlar}} › PartCraft › **3B yazıcı** kısmında yazıcınızın tablasını ayarlayın: milimetre cinsinden genişlik, derinlik ve yükseklik. Bu denetimi atlamak için bunları boş bırakın.
2. {{ui:Dışa aktar}} seçin, ardından {{ui:3B baskı için denetle (STL ya da 3MF)…}} seçin.

   İletişim kutusu "Baskıya hazır" ya da "Baskıya hazır değil" yazar, yanlış olan her şeyi listeler ve tabladaki boyutu (X × Y × Z, milimetre cinsinden), hacmi ve üçgen sayısını verir.

3. **3MF indir** ya da **STL indir** düğmesine tıklayın. Dosya, {{ui:Dışa aktar}} › {{ui:3MF, 3B baskı için}} ya da {{ui:STL, 3B baskı için}} ile aynıdır.

Bir montajda denetim ve dosyalar, yerleştirildiği her kopyayla birlikte tüm montajı kapsar.

Parça, dışa aktarımın yazdığı gibi dik durur halde denetlenir: PartCraft'ta yukarı bakan taraf (Üst düzleme dik olan) tablada da yukarı bakar. Üst düzlemde eskizlenmiş bir parça düz yatar.

## Denetimin söyleyebilecekleri

**Baskıya hazır değil** (dilimleyici reddedebilir ya da yanlış yazdırabilir): delikler (yalnızca bir tarafında yüzey bulunan kenarlar), üç ya da daha fazla yüzeyin paylaştığı kenarlar, ters yönlere bakan yüzeyler, içi dışına dönmüş bir gövde ya da kendi içinden geçen bir gövde. PartCraft'ta oluşturulan bir parça bunları asla göstermemelidir; bir tanesi gösteriyorsa bkz. [Sorun giderme](topic:troubleshooting).

**Uyarılar** (yazdırılır, ama önce bir göz atın):

- **Yazıcınızın tablasından büyük**, tablada 90° döndürülse bile.
- **Altta düz duran hiçbir şey yok**: bir yüzey tablaya oturacak şekilde parçayı dilimleyicinizde döndürün; aksi halde destek ya da raft gerekir.
- **Dikeyden 45°'den fazla dışa eğiliyor**: bu yüzeyler olduğu gibi dururken destek ister. Başka bir yukarı yönü daha az destek gerektirebilir.
- **Ayrı gövdeler çakışıyor** ya da **yüzey yüzeye değiyor**: dilimleyiciler genellikle bunları birleştirir. Özellikler › Daha fazla içinde {{ui:Birleştir}} bunları tek bir gövdede birleştirir. Bkz. [Gövdeler](topic:bodies).
- **Genişliği 1 mm'den küçük**: parçanın boyutlarını kontrol edin.

## Baskıya uygun dişler

Modellenmiş bir diş gerçek bir diş olarak basılır. Basılmış bir cıvatanın basılmış bir somunun içine girmesi için ona biraz **Boşluk** verin: bkz. [Dişler](topic:threads).

## Pürüzsüz yuvarlak yüzeyler

STL ve 3MF üçgenlerden oluşur. Daha pürüzsüz yuvarlak yüzeyler için hiçbir şey seçili olmayacak şekilde boş bir alana tıklayın ve dışa aktarmadan önce sağ panelde **Eğriler** ayarını **İnce (tur başına 128)** ya da **Çok ince (tur başına 256)** yapın. Daha fazla üçgen daha büyük dosyalar oluşturur.

## Daha büyük, daha küçük ya da parçalar halinde

- **Dışa aktar › Baskı için ölçekle (STL ya da 3MF)…** parçayı, kendisini değiştirmeden eksen başına ölçeklendirilmiş olarak kaydeder: bir döküm modeli için yüzde olarak bir **çekme payı** (boyut × (1 + s), ya da tam boyut ÷ (1 − s)) ya da düz çarpanlar; orta noktaya, en alt köşeye, tabanın orta noktasına ya da orijine göre.
- **Dışa aktar › Baskı için böl (parçaların zip dosyası)…** yazıcınız için çok büyük olan bir parçayı, verdiğiniz tablaya her biri sığan parçalara böler. Bunlar pim, kama, kırlangıç kuyruğu, dübel deliği ya da mıknatıs yuvaları ile birleşir (belirlediğiniz boşlukla); her parça ve birleşim numaralandırılır ve parçalar, bir montaj sayfasıyla birlikte bir zip dosyasında STL ya da 3MF olarak kaydedilir. Parçanın kendisi değişmez.

## Kontrol edilmeyenler

Duvar kalınlığı, nozulunuzun çizebileceğinden küçük ayrıntılar ve dilimleyicinin destekleri nasıl yerleştireceği. Bunları dilimleyiciniz gösterir.
