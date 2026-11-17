---
title: Tolerans zincirleri
summary: Bir montajın parçaları arasından bir yüzey zinciri seçin ve sonundaki boşluğun ne kadar değişebileceğini görün; en kötü durum ve RSS ile, en çok etkili boyutlar önce sıralanmış olarak.
keywords: tolerans zinciri, tolerans yığını, tolerans analizi, boyut zinciri, döngü, boşluk, geçme, en kötü durum, rss, kareler toplamının karekökü, istatistiksel tolerans, katkı yapanlar, hassasiyet, gd&t, genel tolerans, iso 2768
from: cbdb3159
---

Bir **tolerans zinciri**, birkaç parça boyunca uzanan bir zincirdeki boyutları toplar; her parça toleransları içinde herhangi bir yerde üretildiğinde bir sonucun (genellikle bir boşluğun) ne kadar değişebileceğini görmek için.

## Zinciri seçin

1. Bir montaj açın ve Montaj grubunda {{ui:Tolerans zinciri}} seçeneğini seçin. Görünümün üzerinde bir kart açılır.
2. Zincirin **boyunca** ne ölçüleceğini seçin: montajın X, Y ya da Z'si, ya da {{ui:İlk yüzeyin normali}}.
3. {{ui:Zinciri seç}} düğmesine basın ve zincirin geçtiği yüzeylere **sırayla** tıklayın: boşluğun bir tarafından başlayın, parçalardan geçin ve boşluğun öbür tarafında bitirin.
4. {{ui:Bitti}} ya da Enter'a basın. Backspace son tıklamayı geri alır; Esc iptal eder.

Aynı parçaya iki tıklama, o parçanın boyutunu (zincir boyunca mesafesini) oluşturur. Başka bir parçaya tıklama, parçaların buluştuğu yerde bir **arayüz** oluşturur; bir tolerans yazmadığınız sürece toleransı yoktur. Halkalar, zincirin gidişine göre toplar ya da çıkarır ve döngüyü kapatır: nominal boşluk, modelin gösterdiğidir.

Ayrıca {{ui:Halka ekle}} ile elle bir halka ekleyebilir; nominal değerini, toleransını ve ekleyip (+) ya da çıkarıp (−) çıkarmadığını yazabilirsiniz.

## Her halkaya toleransını verin

Her halkanın bir **üst** ve bir **alt** sapması vardır (örneğin +0.1 ve −0.05). **Tolerans kaynağı**, bunları parçadan doldurur:

- **Genel tolerans**: parçanın künye Tolerans alanı (bkz. [PDF'e çizim](topic:drawing-pdf)); ±0.1, +0.2/-0.1 ya da ISO 2768-f, -m, -c veya -v değerini okuduğunda (ISO 2768-1 doğrusal toleransları, halkanın boyutuna göre). Bir parçanın genel toleransı, zincir seçildiğinde hemen kullanılır.
- **GD&T**: parçanın çiziminde herhangi bir özellik kontrol çerçevesi. Konum, profil ve salgı bölgeleri ± yarım tolerans değerini verir. Yönelim ya da form toleransı genellikle zaten boyut toleransının içinde yer alır: yalnızca zincir denetlenen yüzeye değdiğinde ekleyin. Ⓜ ya da Ⓛ ile bölge belirtilen boyutunda alınır; bonus tolerans sayılmaz.
- **Yazılan**: yazdığınız herhangi sayılar.

## Sonuçları okuyun

- **Boşluk, nominal** ve toleranslar eşit değilse **Boşluk, ortalama**: +0.2/−0 ve +0/−0.1 aralığın ortasını kaydırır.
- **En kötü durum**: her tolerans aynı anda sınırında. Boşluk bunun dışına asla çıkamaz.
- **RSS** (kareler toplamının karekökü): her tolerans, normal bir dağılımın üç standart sapması olarak alınır ve kareleri toplamının karekökü olarak eklenir. Çoğu montaj en kötü durumun epey içinde kalır; seri üretilen parçalar için olağan tahmin budur.
- Her zaman içeride kalıp kalmadığını ve RSS'nin bir milyonda kaç montajın dışarıda olmasını beklediğini görmek için **Boşluk en az** ve **Boşluk en çok** değerlerini girin.
- **#** sütunu, halkaları RSS içindeki **paylarına** göre sıralar: en büyük farkı yaratmak için ilk olanları sıkılaştırın.

{{ui:CSV kaydet}} halkaları, paylarını ve sonuçları yazar. Tolerans zincirleri montaj dosyasına kaydedilir ve her değişiklik {{key:Mod+Z}} için tek bir adımdır.

:::note
Bir tolerans zinciri tek yönlüdür. Zincir boyunca açıları ya da dönüşleri izlemez ve boyut toleranslarını eskizlerden okumaz: bunları yazılmış toleranslar olarak ya da künye üzerinden verin.
:::
