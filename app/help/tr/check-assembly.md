---
title: Montajı çakışmalar ve hareket için kontrol edin
summary: Üst üste binen parçaları Çakışma ile bulun, herhangi bir birleşimin değerlerini sürükleyerek hareketi izleyin ve bir birleşimi aralığı boyunca tarayarak parçaların nerede çarpıştığını bulun.
keywords: girişim, girişim algılama, çakışma, çarpışma, üst üste binme, dişli geçme, dişli derinlik uyuşmazlığı, değen yüzeyler, gizle, filtre, hareket, hareket çalışması, tarama, hareket aralığı, kontrol
from: 9c98db46
---

İki kontrol yerleştirilmiş parçalar üzerinde çalışır: **Çakışma** şu anda üst üste binen malzemeleri arar; **hareket kontrolü** bir birleşimi aralığı boyunca hareket ettirir ve yol boyunca üst üste binmeleri arar.

## Girişim kontrolü

1. Bir montajı açın ya da oluşturun (bkz. [Bir montaj oluşturun](topic:build-assembly)).
2. {{ui:Çakışma}} seçeneğini belirleyin.

Durum çubuğu sonucu bildirir:

- "3 parça arasında girişim yok (… ms)." Hiçbir şey üst üste binmiyor.
- "Girişim: Flange1 ve Flange2: Üst üste binme, 2.5 mm³." Her çift, sonucun türü ve paylaştıkları hacim.

Soldaki **Montaj** kutusu **Girişim** gösterir: "Yok", "2 sonuç" (gösterilenler) ya da "Kontrol edilmedi". Hiçbir şey seçili değilken sağ panel **Girişim** altında her sonucu listeler.

Sonuç, montaj her değiştiğinde temizlenir. Bir birleşimi taşıdıktan sonra {{ui:Çakışma}} seçeneğini yeniden çalıştırın. Her parça çifti diğer her parçayla karşılaştırılır; bu yüzden büyük montajlar daha uzun sürer.

### Sonuç türleri

| Tür | Anlamı |
|---|---|
| **Üst üste binme** | Parçalar hacim paylaşır: gerçek bir çakışma. |
| **Dişli derinlik uyuşmazlığı** | Paylaşılan hacim bir parçanın dişinin içinde, ama diğerinin ötesinde: bir cıvatanın deliğinden daha derin dişlenmesi ya da dişli bir delikte düz bir gövde. |
| **Dişli geçme (kozmetik dişler)** | Paylaşılan hacim iki parçanın dişlerinin içinde: dişli bir delikte bir cıvata. Kozmetik dişler dişin tam boyutunda çizilir, bu yüzden her zaman biraz üst üste binerler. |
| **Değen yüzeyler** | Paylaşılan hacim yok, ama yüzeyler temas halinde (0.001 mm içinde). |

Modellenmiş dişler (bkz. [Millerde ve deliklerde dişler, çizilmiş ya da modellenmiş](topic:threads)) gerçek geometridir: paylaştıkları şey bir **Üst üste binme**dir.

### İhtiyaç duymadığınızı gizleyin

**Girişim** altında **Göster** her tür için bir kutuya sahiptir: yalnızca önemli çakışmaları görmek için **Dişli geçme** ve **Değen yüzeyler**i işaretsiz bırakın. Bir sonucun yanındaki **Bu çifti gizle** o parça çiftini türü ne olursa olsun gizler. Gizli sonuçlar sayılır ("filtreler tarafından gizlenen 2 sonuç") ve **Gizli çiftleri yeniden göster** çiftleri geri getirir. Durum çubuğu gizli sonuçları da sayar.

Filtreler montajla birlikte kaydedilir ve her değişiklik bir {{key:Mod+Z}} adımıdır. **Bir birleşimi çakışmalar için tara** (aşağıda) de bunları kullanır. Filtreli bir montaj sürüm 4 olarak kaydedilir; eski PartCraft sürümleri filtreleri kaybetmek yerine bunu açmayı reddeder.

## Hareketi izleyin

1. Soldaki listede hareket eden bir birleşim seçin (rijit hariç her biri).
2. **Açı (°)** ya da **Ofset (mm)** gibi değerlerden birinin altındaki kaydırıcıyı sürükleyin. Sürüklediğinizde parça hareket eder.
3. Bırakın. Yeni konum korunur ve {{key:Mod+Z}} ile geri alınabilir.

Kutuya bir açı ya da ofset yazıp {{key:Enter}}'a da basabilirsiniz.

Kapalı bir döngüdeki (bir bağlantı) birleşim tüm döngüyü hareket ettirir: sürüklediğiniz değer korunur ve döngünün diğer birleşimleri onu izler (bkz. [Kapalı döngüler](topic:build-assembly#closed-loops-linkages)).

## Çakışmalar için bir birleşimi tarayın

1. Hareket eden bir birleşim seçin.
2. Birden çok değeri olan bir birleşim için (silindirik, düzlemsel, küresel, pim yuvada), **Hareketleri kontrol et** içinde hangisinin taranacağını seçin.
3. {{ui:Hareketi çakışmalar için kontrol et}} seçeneğini belirleyin.

PartCraft o değeri 24 eşit adımda 25 konumdan geçirir; diğerleri olduğu gibi kalır: −180° ile 180° arasında bir açı (−90° ile 90° arasında bir eğim), eksi ile artı en büyük parçanın boyutu arasında bir uzunluk. Bildirir:

- "Açı (°) için -180 ile 180 arasında hiçbir yerde çakışma yok (25 konum kontrol edildi)."
- "25 konumun 6'sında çakışma var; ilki Açı (°) 45'te (12.4 mm³)." İlk çakışan konum ve oradaki üst üste binme.

Düğme rijit birleşimler için soluk görünür; onlar hareket etmez. Tarama yalnızca konumları kontrol eder, aralarındaki yolu değil: ince bir parça iki adım arasında diğerinden geçebilir.

:::note
Temas ve yerçekimi henüz yapılmadı. Sınır olmadan tarama tüm aralığı kapsar. Değere **Sınırlar** verirseniz (bkz. [Parça listesi, patlatılmış görünümler ve hareketli parçalar](topic:assembly-bom-explode)), tarama yalnızca onları kapsar; böylece 90° açılan bir menteşe 90° boyunca kontrol edilir.
:::

## Hareket çalışması

**Montaj › Hareket** bir birleşimin değerini, verdiğiniz bir süre boyunca bir başlangıçtan bir bitişe sürer (sabit hız, yumuşatılmış, sinüs ya da git ve geri dön), montajı her adımda birleşimleri ve kapalı döngüleriyle yerleştirir ve hangi çakışmaların olduğunu ve parçaların ne kadar yaklaştığını bildirir. **Nokta ekle** bir parçanın ortasını ya da üzerine tıkladığınız bir noktayı izler; kart konumunu, hızını ve ivmesini, birleşimin değerini ve açıklığı zamana karşı çizer. **CSV kaydet** ve **Grafiği kaydet** bunları dışa yazar. Hız ve ivme kaydedilen konumlardan hesaplanır, bu yüzden adımlar arasındaki keskin bir tepe düşük okunur: daha fazla adım kullanın.

**Çalıştır**'dan sonra **Çalıştırmada adım adım ilerle** çubuğu montajı herhangi bir adıma taşır (zaman, değer ve o adımda parçaların çakışıp çakışmadığı yanında gösterilir). Birleşim kendi değerini korur ve **Modele dön** montajı geri koyar. Çalışmanın ayarları montaj dosyasına kaydedilir; sonuçları yeniden **Çalıştır** ile üretilir.

## Temas çalışması

**Montaj › Temas**, parçalar birbirine bastırdığında bir montajın yüklerini nasıl taşıdığını gösterir. Her parça kendi **Simülasyon** çalışmasından kendi destek, yük ve malzemesini getirir (bir parçada sabit bir yüzey, diğerinde bir kuvvet); burada siz çiftleri seçersiniz. **Çift ekle**'ye, ardından **A tarafını seç**'e ve bir parçanın yüzeylerine tıklayın; **B tarafını seç**'e ve farklı bir parçanın yüzeylerine tıklayın. Seçili bir yüzeye tıklamak onu seçimden çıkarır; Esc ya da **Bitti** seçimi bitirir. Bir çift **Sürtünmesiz** (parçalar bastırır ama kayar) ya da **Bağlı** (birlikte kalırlar) olabilir. Sertlik çarpanı, batmaya karşı ne kadar direnç gösterileceğini belirler (20 iyi bir başlangıçtır, sert bir çelik yığını için 1000).

**Çöz** yükü adımlarla çalıştırır ve temas kuvvetini, en derin batmayı, en büyük hareketi ve en büyük gerilmeyi gösterir. Hiçbir çifte girmeyen bir parça dışarıda bırakılır ve kart bunu söyler. Sürtünmesiz temas bir parçayı yana doğru tutmaz: her parçaya kendi Simülasyon çalışmasında bir destek verin ya da bağlayın; yoksa adımlar oturmayabilir. Çiftler ve ayarlar montaj dosyasına kaydedilir.

**CalculiX girdi dosyasını dışa aktar** aynı modeli bir CalculiX girdi dosyası (.inp) olarak yazar. CalculiX, sizin kurup çalıştırdığınız ayrı bir programdır. **CalculiX sonuçlarını oku (.frd)** ardından yer değiştirmeleri bu montajın ağı üzerinde geri okur ve başka bir ağ için yapılmış bir dosyayı reddeder. Buradaki çözücü plastik davranışı destekler ama açık dinamik değildir; buradaki hiçbir şey onaylı bir analiz değildir. Önemli olan her şeyi bir mühendise kontrol ettirin.
