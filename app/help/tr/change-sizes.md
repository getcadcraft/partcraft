---
title: Eskiz açmadan boyutları değiştirin
summary: Bir parçayı sağ paneldeki sayılardan yönlendirin: eskiz ölçüleri, derinlikler, sayılar ve açılar; doğru sayıların parçayı yönlendirmesi için parçayı nasıl planlayacağınız ve parametreler ile denklemlerin nerede devreye girdiği.
keywords: parametreler, yönlendiren ölçüler, tasarım amacı, boyut değiştir, denklemler, genel değişkenler, tasarım tablosu, yapılandırmalar, yeniden boyutlandır, ölçüyü değiştir
from: c2ae1a32
---

PartCraft parçasındaki her boyut, sonradan değiştirebileceğiniz bir sayıdır: eskizlerindeki ölçüler ve özelliklerinin ayarları. Bir eskizin ölçülerini değiştirmek için eskizi açmanız gerekmez.

## Sağ paneldeki bir eskiz ölçüsünü değiştirme

1. Geçmişte bir özelliğe tıklayın, örneğin "Extrude1".
2. Ekstrüzyonun kendi ayarlarının altında **Eskiz ölçüleri (Sketch1)** eskizinin her ölçüsünü listeler: "Mesafe", "Çap", "Açı (°)" vb.
3. Bir kutuya yeni bir değer yazın ve {{key:Enter}} ya da {{key:Tab}}'a basın.

Eskiz yeni değerle çözülür ve tüm parça yeniden oluşturulur. Eskizin kendisini seçmek, aynı listeyi **Yönlendiren ölçüler** olarak gösterir.

Yarıçap ya da çap sıfırdan büyük olmalıdır; açı 0 ile 180 derece arasında olmalıdır. Değilse durum çubuğu bunu söyler.

:::tip
Hangi kutu hangisi? Kutular, ölçülerin oluşturulma sırasına göre listelenir. Emin değilseniz eskizi açın (çift tıklayın), tuvaldeki ölçüye çift tıklayın ve orada değiştirin.
:::

## Ana sayıyı hemen yazın

Geçmişte bir özellik seçin (ya da ekleyin) ve bir sayı yazın: sayı özelliğin ana kutusuna girer; yani en sık değiştirdiğiniz kutuya (bir ekstrüzyonun **Derinlik**i, bir döndürmenin **Açı**sı, bir deliğin **Çap**ı, bir örüntünün **Sayı**sı, bir köşe yuvarlatmanın **Yarıçap**ı, bir kabuğun duvarı). Ayarlamak için {{key:Enter}}'a, eskisini korumak için {{key:Esc}}'e basın. Bir ekstrüzyon eklediğinizde durum çubuğu bunu söyler: "Extrude1 eklendi. Sağdaki sayıları değiştirin ya da şimdi derinlik için bir sayı yazın."

## Geçmişteki sayıyı değiştirme

Her özelliğin geçmiş satırı, adının yanında ana sayısını gösterir: "Extrude1 25 mm", "Hole1 Ø6.6 thru", "Fillet1 R2", "LPattern1 4 × 20 mm". Sayıya çift tıklayın (ya da satırı seçip {{key:F2}}'ye basın); orada bir kutu açılır. Yeni değeri yazın ve {{key:Enter}}'a basın; {{key:Esc}} eskisini korur. Bu, tam olarak sağdaki özellik kutusu gibi çalışır: aynı sınırlar, `=width/2` gibi bir denklem için `=` ve geri almak için tek bir adım.

Bir ekstrüzyonda, delikte ya da örüntüde satırın herhangi bir yerine çift tıklamak kutuyu açar. Köşe yuvarlatma, pah kırma, kabuk, eğim ya da dişli bir özellikte ada çift tıklamak hâlâ kenarları ya da yüzeyleri seçmeye gider; bu yüzden sayının kendisine çift tıklayın. Eskizlerin satırda sayısı yoktur: çift tıklamak eskizi açar.

## Görünümde sürükleyin

Geçmişte bir ekstrüzyon seçin (ya da görünümde tıklayıp satırını seçin); uç yüzeyinde turuncu bir ok durur ve yanındaki bir kutuda derinlik yazar. Oku sürükleyin: parça sürüklediğiniz sürece izler ve bırakınca yeni derinlik tek bir adım olarak ayarlanır ({{key:Mod+Z}} onu geri koyar). Sürüklerken {{key:Esc}}'e basarak başladığınız yere dönün. Derinlik, boyutunun onda biri kadar adımlarla değişir: 25 mm bir ekstrüzyonda 1 mm, 3 mm birinde 0.1 mm.

Bir döndürme, dönüşünün ucunda eğri bir ok alır: açıyı değiştirmek için onu eksen etrafında sürükleyin; 1° ile 360° arasında tam dereceler halinde.

Ya da oku yanındaki kutuya tıklayıp bir değer (ya da `=` ve bir denklem) yazın ve {{key:Enter}}'a basın. **Tümünden geçerek** ya da **bir yüzeye kadar** biten bir ekstrüzyonda veya bir denklemin yönettiği bir değerde ok yoktur: bunları sağdan değiştirin.

## Parçayı yöneten sayılar

| Nerede | Neyi değiştirebilirsiniz |
|---|---|
| Eskiz | Her ölçü: uzunluklar, mesafeler, yarıçaplar, çaplar, açılar |
| Ekstrüzyon ve kesme | Derinlik, bitiş koşulu, yön, ekleme ya da kesme |
| Döndürme ve döndürme kesmesi | Açı, eksen, ekleme ya da kesme |
| Delik | Çap, derinlik, tümünden geçerek, karşı delik çapı ve derinliği |
| Köşe yuvarlatma, pah kırma, kabuk | Yarıçap, mesafe, duvar kalınlığı ve yönü, ve hangi kenarlar ya da yüzeyler |
| Doğrusal ve dairesel | Sayı, aralık ya da açı, yön ya da eksen |
| Parça | Eğriler (yuvarlak şekillerin ne kadar ince çokgenlendiği) |
| Çizim | Kesitin nerede kestiği, detayın boyutu ve ölçeği, GD&T değerleri |

## Parçayı, doğru sayılar onu yönlendirecek şekilde planlama

Verdiğiniz sayılar, değiştirebildiğiniz sayılardır. Birkaç alışkanlık sonraki değişikliklerin düzgün davranmasını sağlar:

- **İş için önemli olanı ölçülendirin.** Bir delik bir kenardan 15 mm uzakta kalmalıysa, onu başlangıç noktasından değil, o kenardan ölçülendirin.
- **Eskizleri tam tanımlayın.** Böylece bir değişiklik yalnızca olması gerekeni hareket ettirir (bkz. [Eskizi tam tanımlayın](topic:relations-dimensions)).
- **Amaç için ilişkileri kullanın.** İki delikte Eşit, tek bir çapın ikisini de yönettiği anlamına gelir. Simetrik şekiller için başlangıç noktasını orta çizgiye koyun ya da Orta nokta kullanın.
- **Özelliklerle oluşturulmuş yüzeylerde eskiz yapın.** Bir ekstrüzyonun uç yüzeyindeki bir eskiz, derinlik değiştiğinde hareket eder.
- **Kopyalamak yerine örüntüleyin.** Sekiz kez örüntülenmiş tek bir deliğin değiştirilecek tek bir çapı vardır.

## Tek sayılardan öte

- **Birkaç şeyi yöneten tek bir sayı:** parametre ve denklemleri kullanın: [Parametrelerle bir parçayı yönlendirin](topic:parameters).
- **Bir parçanın birkaç boyutu:** her birini bir [yapılandırma](topic:design-tables) olarak kaydedin; parça dosyasında saklanırlar.
- **Bir sayı kutusunda aritmetik:** `=40/2` ya da `=width / 2` yazın. Bu bir denklem yapar; bkz. [Her iki yönde denklemler](topic:equations-two-way).
- **İnç birimleri:** parça milimetre gösterir. `=` ile bir sayı kutusunda ya da bir parametrede `2in` değeri 50.8 olur.

Bkz. [Henüz yapılmayanlar](topic:not-built-yet).
