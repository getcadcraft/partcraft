---
title: Süpürme, loft ve eğim
summary: Kapalı bir profili eskiz eğrilerinden ya da model kenarlarından oluşan bir yol boyunca süpürün, farklı düzlemlerdeki kesitlerden loft yapın ve yüzeylere eğim ekleyin; seçenekler, kesin sonuçlar ve iletilerle birlikte.
keywords: süpürme, süpürülmüş katı, süpürülmüş kesim, boru, yol, loft, loft katı, harmanlama kesitleri, doğrusal, eğim, eğim açısı, konik yüzeyler, nötr düzlem, çekme yönü, kalıplama
from: 9d637981
---

:::note
**Bu sürümde** süpürme ve loft henüz yapılmadı: kesin bir geometri çekirdeği gerektirirler; bu PartCraft sürümünde böyle bir çekirdek yoktur. [Henüz yapılmayanlar](topic:not-built-yet) bunun yerine ne yapılacağını söyler; Süpürme ve Loft bölümleri bunları kesin bir çekirdekle çalıştıkları şekliyle anlatır. **Eğim çalışır**: düz yüzeylerde çalışır; örgü çekirdeği bunu oluşturur ve kesin bir çekirdeğin vereceği sonucun aynısını verir.
:::

Üçü de Özellikler grubunun {{ui:Daha fazla}} menüsündedir (bkz. [Örgü çekirdeği](topic:solid-kernels)). Her biri malzeme ekleyebilir, malzeme kesebilir, yalnızca örtüşen kısmı tutabilir (**Kesişim**) ya da bir **Yeni gövde** oluşturabilir (süpürme ve loft için: paneldeki **İşlem**).

## Süpürme

Süpürme, kapalı bir profili bir yol boyunca hareket ettirir: borular, tutamaçlar, tel yaylar, raylar.

1. **Yolu** tek bir eskizde çizin: uç uca eklenmiş çizgiler ve yaylar (ya da aşağıda anlatıldığı gibi model kenarlarını kullanın).
2. **Profili** yolun bir ucundan geçen düzlemde başka bir eskizde çizin; örneğin ön düzlemde çizilmiş bir yolun başlangıcında üst düzlemde bir daire.
3. Profil eskizini seçin ve {{ui:Daha fazla}}, sonra {{ui:Süpürme}} seçeneğini seçin. Diğer en son eskiz yol olur.

Panelde:

| Ayar | Ne yapar |
|---|---|
| **Yol** | Yolu oluşturan eskizleri işaretleyin (birkaç eskiz uç uca birleşerek tek bir 3B yol oluşturur); **Model kenarlarını seç** parçanın kenarlarını ekler |
| **Yönelim** | Yolu izle (varsayılan), Frenet, Sabit (kesitler profile paralel kalır), Bir yönü koru, Bir kılavuz eğri boyunca |
| **Uç ölçeği** | Profil uçta bu boyuta doğrusal olarak büyür ya da küçülür (1 = sabit) |

Yoldaki keskin köşeler gönye kesimle birleştirilir. Yarıçapı 5 olan bir daire, 100 mm uzunluğundaki bir çizgi boyunca süpürüldüğünde tam olarak 2500π mm³ hacminde bir silindir olur; yarıçapı 50 olan bir çeyrek yay boyunca süpürüldüğünde ise 625π² mm³ hacminde bir çeyrek simit (torus) olur.

## Loft

Loft, farklı düzlemlerdeki iki veya daha fazla kesit arasında harmanlama yapar.

1. Her kesiti kendi eskizinde çizin (her biri tek bir kapalı döngü), temel düzlemlerde, referans düzlemlerinde (bkz. [Referans düzlemleri, eksenler ve noktalar](topic:reference-geometry)) ya da yüzeylerde.
2. {{ui:Daha fazla}}, sonra {{ui:Loft}} seçeneğini seçin. Kullanılmamış her tek döngülü eskiz, geçmiş sırasına göre bir kesit olur.

Panel kesitleri sırayla listeler (**Yukarı** sırayı değiştirir, **Kaldır** birini çıkarır); **Bir eskiz ekle** bir eskiz daha ekler, **Bir yüzey seç** parçanın düz bir yüzeyini ekler. **Doğrusal** seçeneği, akıcı bir harmanlama yerine kesitler arasında düz yüzeyler oluşturur. İki kare arasında ikisi de aynı kesik piramittir (30 mm yükseklikte 40 mm'lik bir kareden 20 mm'lik bir kareye: tam olarak 28000 mm³).

Farklı sayıda kenarı olan kesitler (kareden üçgene) OpenCascade tarafından eşleştirilir; bu, yan yüzeyleri bükebilir ve özellik sizi uyarır. En temiz sonuç için aynı sayıda kenarı olan kesitleri, eşleşen köşelerden başlayarak çizin.

### Yol rayları

Yol rayları, loftun yan yüzeylerinin ilk kesitten son kesite kadar izlemesi gereken eğrilerdir; kendi çizdiğiniz bir şişkinlik, bel ya da genişleme için kullanılır.

1. İki veya daha fazla ray çizin: ilk kesitten son kesite uzanan ve her kesiti bir kez kesen açık eğriler (çizgiler, yaylar, splineler). Tek bir eskiz birden fazla ray içerebilir: içindeki her ayrı zincir kendi rayıdır. Bir rayın her kesitle gerçekten buluşması için uçlarını kesitlerin noktalarına yakalayın.
2. Loft panelinde **Yol rayları** altında, rayları içeren eskizleri işaretleyin ya da {{ui:Ray olarak model kenarlarını seçin}} düğmesine tıklayıp parçanın kenarlarına tıklayın (Esc bitirir).

Raylarla loft, kesitlerden ve raylardan geçen bir Gordon yüzeyidir (bkz. [Eğri ağı üzerinden yüzeyler](topic:gordon-surfaces)); iki ucu düz kapatılarak katıya dönüştürülür. Panel, rayları ne kadar yakından izlediğini gösterir. Bu durumda her kesit bir eskiz olmalıdır (bir nokta ya da yüzey ray alamaz) ve **Doğrusal** uygulanmaz. Bir kesiti 0.01 mm'den fazla kaçıran bir ray, aradaki boşlukla birlikte reddedilir.

Denetlendi: 40 mm aralıklı iki daire (çapları 20 mm ve 10 mm) ile dört düz ray, kesik koninin hacmini 0.000002 % hata payıyla verir; 5 mm dışa şişen yaylar, her rayı 0.00001 mm içinde izleyen bir fıçı şekli verir.

## Eğim

Eğim, bir parçanın kalıptan rahatça çıkabilmesi için yüzeyleri eğer.

1. {{ui:Daha fazla}}, sonra {{ui:Eğim}} seçeneğini seçin (ya da önce yüzeylere {{key:Shift}}+tıklayın). Hiçbir şey seçilmemişse seçim kipindesiniz: eğdirmek istediğiniz her yüzeye tıklayın, sonra {{ui:Bitti}}.
2. **Açı (°)**, **Nötr düzlem** (yüzeylerin boyutunu koruduğu yer) ve **Çekme yönü** (varsayılan olarak nötr düzlemin normali) değerlerini ayarlayın.

Pozitif bir açı yüzeyi çekme yönünde içe doğru eğer ve malzeme kaldırır; negatif bir açı ise malzeme ekler. Nötr düzlem başlangıçta Üst düzlem olarak gelir. Bu sürümde yalnızca düz yüzeylere eğim uygulanabilir: bir silindir, koni ya da serbest biçimli bir yüzey için "Eğim: bu sürümde yalnızca düz yüzeyler (örgü çekirdeği oluşturur)." iletisi görünür. 100 × 100 × 50 bir bloğun dört yan yüzü tabanı etrafında 5° eğdirildiğinde, tam olarak h/3·(a² + b² + ab) hacimli bir kesik piramit olur; burada b = a − 2h·tan 5°.

## İletiler

| İleti | Ne yapılmalı |
|---|---|
| "Profilin düzlemi yolun bir ucundan geçmelidir …" | Profil eskizini yolun başına (ya da sonuna) taşıyın |
| "Yolda boşluk var: eğrileri uç uca birleşmiyor …" | Yolun eğrilerini birleştirin; ayrı eskizlerde uçları tam olarak buluşmalıdır |
| "Bir loft kesiti tam olarak tek bir kapalı döngü gerektirir" | Eskizi bölün ya da fazla döngüyü kaldırın |
| "… bu nötr düzlem etrafında eğimlendirilemez …" | Yüzey nötr düzleme paralel ya da onunla kesişmiyor |
| "Eğim: bu sürümde yalnızca düz yüzeyler (örgü çekirdeği oluşturur)." | Seçilen bir yüzey eğridir. Onu kaldırın; yalnızca düz yüzeylere eğim uygulayın |

:::note
Henüz yapılmadı: bükülmüş süpürmeler, ince cidarlı ve yüzey süpürmeleri, loft yol rayları ve uç teğetliliği, silindirlerde, konilerde ve serbest biçimli yüzeylerde eğim.
:::
