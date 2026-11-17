---
title: Denklemler iki yönlü
summary: Bir parametreyi değiştirin, parça onu izler; bağımlı bir sayıya yeni bir boyut yazın ve PartCraft, birden fazla parametre değişebiliyorsa hangisinin olduğunu sorarak arkasındaki parametreyi hesaplar.
keywords: denklemler, geriye çöz, bağımlı ölçü, iki yönlü, ters, hedef arama, parametreler, bağlı değerler, hangi parametre
from: 82dc0269
---

Bir denklem, örneğin **Extrude1 derinliği = thick + extra**, iki yönde de çalışır.

## İleri: parametreyi değiştirin

{{ui:Parameters}} sekmesinde `thick` değerini 20'den 30'a değiştirin. Extrude1'in derinliği 30 + extra olur ve parça yeniden oluşur.

## Geriye: bağımlı sayıyı değiştirin

1. Geçmişte "Extrude1"e tıklayın. Its **Depth (mm)** kutusu **ƒ** gösterir: bir denklem onu yönlendirir.
2. İstediğiniz boyutu yazın, örneğin `40`, ve {{key:Enter}} tuşuna basın.

PartCraft, denklemin arkasındaki parametreyi gerektiği kadar adımla çözer (`depth = hub_h`, `hub_h = disc_t + 50`: bir yükseklik yazmak `disc_t`'yi değiştirir). Durum çubuğu neyin değiştiğini söyler, örneğin extra'nın 5'ten 15'e gittiğini.

Bir sayıyı iki ya da daha fazla parametre yönlendirdiğinde, bir kutu **Hangi parametre değişmeli?** diye sorar ve onları listeler. Birini seçin; diğerleri değerlerini korur. {{ui:Cancel}} hiçbir şeyi değiştirmez.

Aynısı bir eskizde de çalışır: bağımlı bir ölçüye çift tıklayın, bir değer yazın, {{key:Enter}} tuşuna basın. Ayrıca parametre tablosunun **Değer** sütununda da çalışır; kendisi bir ifade olan bir parametre için.

## Ne zaman olmaz

- Tam sayı olması gereken (bir örüntü sayısı) ya da aralıkta kalması gereken (360°'ye kadar bir açı) bir sayı, hiçbir şey değişmeden reddedilir.
- Yalnızca sabit sayılardan oluşan bir denklemin (`=40`) değiştirilecek bir parametresi yoktur: yazdığınız sayı onun yerini alır.
- Parametrenin hiçbir değeri yazdığınız boyutu vermiyorsa durum çubuğu bunu söyler ve hiçbir şey değişmez.
- Yeni değerle çözülemeyen bir eskiz önceki değerlerini korur ve durum çubuğu eskizin adını yazar.

Her değişiklik, her iki yönde de {{key:Mod+Z}} ve {{key:Mod+Y}} için tek bir adımdır.
