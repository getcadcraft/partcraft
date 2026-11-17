---
title: Çelik profillerden çerçeveler
summary: Bir veya daha fazla eskizin çizgileri boyunca çelik profiller yerleştirerek kaynaklı bir çerçeve oluşturun: gönyeli veya alın köşeler, birleştiği yerde kesilmiş elemanlar, uç kapakları, köşe levhaları ve uzunlukları ile uç açılarını içeren bir kesim listesi.
keywords: kaynaklı yapı, yapısal eleman, çerçeve, çelik çerçeve, boru, kare boru, hss, rhs, shs, boru, chs, geniş flanşlı, i profil, w kiriş, ipe, hea, heb, kanal, upn, köşebent, gönye, alın birleşimi, ağız kesimi, uç kapağı, köşe levhası, kesim listesi
from: 59071e5a
---

Bir **Yapısal eleman**, seçtiğiniz eskizlerin her çizgisi boyunca bir çelik profil yerleştirir. Çerçeveyi çizgi olarak çizin (her çizgi bir elemandır), sonra profili seçin: elemanlar oluşturulur, köşeleri kırpılır ve uzatılır ve bir kesim listesi her parçanın ne uzunlukta ve hangi açıyla kesileceğini söyler.

## Bir çerçeve yapın

1. Bir eskizde çerçeveyi çizgi olarak çizin, örneğin üst düzlemde bir dikdörtgen. Yapı olarak işaretlenmiş çizgiler dışarıda bırakılır.
2. Eskiz seçiliyken {{ui:Daha fazla}} › {{ui:Yapısal eleman}} öğesini seçin. Eskizin her çizgisi bir elemanı alır.
3. Panelde profilin **Aile** ve **Boyut** değerini seçin. Aileler AISC tablolarıdır (W, S, C, L, HSS boru, Boru) ve EN 10365 (IPE, HEA, HEB, UPN).

### 3D'de bir çerçeve

Birden fazla eskizin çizgileri tek bir çerçeve oluşturur: bir üst dikdörtgen üstteki bir düzlemde çizilir, ayakları ise dik duran düzlemlerde çizilir ve uçlarında 3D'de birleşirler. Panelde **Çizgileri boyunca** başlığı altında, elemanların izleyeceği her eskizi işaretleyin. Bir mikrometre içinde buluşan uçlar birleştirilir.

## Profili çizgisi üzerinde ayarlayın

- **Döndür (°)** profili kendi çizgisi etrafında çevirir. Bir kiriş derinliği dik olarak durur (dikey bir elemanda derinlik ön tarafa bakar).
- **Çizgi üzerinde** profilin hangi noktasının çizgiye oturacağını seçer: merkez, ya da profil dış hattının bir köşesi veya bir kenarının ortası. "Alt orta", çerçeveyi eskiz düzleminin içinden değil, üstüne koyar.

## Köşeler ve birleşimler

| Elemanların birleştiği yer | Ne olur |
|---|---|
| İki eleman uç uca, **Köşeler: Gönyeli** | İkisi de aralarındaki yarım düzlemde kesilir, bir resim çerçevesi gibi |
| İki eleman uç uca, **Köşeler: Alın** | İlk eleman ikinci elemanın uzak yüzüne kadar devam eder; ikinci eleman ilkin yakın yüzünde düz kesilir |
| Bir eleman diğerinin ortasında biter (T) | Diğer elemanın dış yüzüne oturacak şekilde kesilir |
| Üç veya daha fazla eleman bir noktada biter | İlk eleman diğerlerinin ötesine düz geçer; diğerleri ona oturacak şekilde kesilir |

İlk eleman, çizgisi önce gelen elemandır: çizgiler çizildikleri sırayı korur, eskizler de işaretlendikleri sırayla.

## Uç kapakları ve köşe levhaları

- **Uç kapakları**, her serbest ucu, profil dış hattında ve sizin belirlediğiniz kalınlıkta bir levhayla, ucun dışında kapatır.
- **Köşe levhaları**, iki elemanın bir açıyla buluştuğu her köşeye üçgen bir levha koyar: **Köşe levhası boyutu** köşeden her eleman boyunca, **Köşe levhası kalınlığı** ise köşe düzleminin ortasında, enine ölçülür.

## Kesim listesi

Panel her parçayı listeler; özdeş parçalar gruplanır: profil, uzunluk (uzun nokta uzun noktaya, testere için işaretleyeceğiniz gibi), her ucun nasıl kesildiği (düz, düz dan bir açı veya oturacak şekilde kesim) ve hangi elemanlara ait oldukları. Uç kapakları ve köşe levhaları boyutlarıyla listelenir. {{ui:Kesim listesini kaydet (CSV)}} onu bir elektronik tabloya kaydeder.

Yuvarlak köşeli bir boruya oturacak şekilde kesilen bir eleman, o borunun köşe yarıçapına birkaç milimetre girer; bu nedenle uzun nokta uzunluğu, yüzler arasındaki boşluktan birkaç milimetre fazladır.

## Sınırlar

- Elemanlar yalnızca düz çizgileri izler; eskizdeki yaylar ve spline'lar dışarıda kalır.
- Birleşimler kesilir, kaynaklanmaz: kaynak dikişi çizilmez ve çerçeve tek bir katıdır.
- Profiller tablonun boyutlarından çizilir: W profilleri kök kaynağıyla, S profilleri ve kanallar paralel flanşlarla, borular köşe yarıçaplarıyla; delikler, uç hazırlıkları ve kaynak aralıkları sizin için yapılmaz.
- Yapısal elemanlar örgü çekirdeğiyle oluşturulur. Kesin çekirdek açıkken (yalnızca geliştiriciler), bunu söylerler ve oluşturulmazlar.
