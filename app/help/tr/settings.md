---
title: PartCraft ayarları
summary: Hangi fare düğmesinin görünümü döndürdüğünü seçin, bir izleme paneli kaydırmasının parçayı döndürmesini ve kaydırmasını sağlayın, eskiz çizerken otomatik ilişkileri açıp kapatın ve simülasyon çözücülerinin kaç iş parçacığı kullanacağını ayarlayın.
keywords: ayarlar, tercihler, seçenekler, fare, orta düğme, tekerlek düğmesi, yörünge, döndür, çevir, izleme paneli, dokunmatik yüzey, kaydırma, kaydırma hareketi, pinç, ilişkiler, kısıtlamalar, otomatik kısıtla, otomatik ilişkiler, yakalama, çakışık, iş parçacığı, çözücü iş parçacıkları, çekirdek, işlemci, çok iş parçacıklı, daha hızlı çözme, paralel
from: 759edcaf
---

Uygulama çubuğundaki dişli simgesine ya da {{key:Mod+,}} tuşuna basarak {{ui:Ayarlar}} penceresini açın. İlk sekme olan {{ui:PartCraft}}, bu uygulamaya ait ayarları tutar; {{ui:Genel}} ise her CadCraft uygulamasının ortak kullandığı ayarları tutar (tema, araç çubuğu, paneller). PartCraft ayarları yalnızca bu uygulamada geçerlidir: burada değiştirirsiniz ve bu tarayıcı bunları hatırlar. {{ui:PartCraft ayarlarını sıfırla}} her şeyi başlangıç değerlerine döndürür.

## Görünümü döndürme

- **Sol düğme** (başlangıç): parçayı döndürmek için sol düğmeyle sürükleyin; kaydırmak için sağ ya da orta düğmeyle sürükleyin.
- **Orta düğme**: tekerleğe basıp sürükleyerek parçayı döndürün; orta düğmeyle birlikte {{key:Shift}} (ya da {{key:Ctrl}}, ya da ⌘) basılı tutun ya da sağ düğmeyle sürükleyerek kaydırın. Sol düğme yalnızca yüzeyleri, kenarları ve düzlemleri seçer; bu yüzden az hareket eden bir tıklama parçayı asla döndürmez. Birçok CAD programı bu şekilde çalışır.

Tekerlek her iki durumda da işaretçinin olduğu yere doğru yakınlaştırır. Bir eskizde sağ ve orta düğmeler eskizi her zamanki gibi kaydırır.

## Kaydırma: fare tekerleği ya da izleme paneli

- **Anlaşılsın** (başlangıç): PartCraft kaydırmayı izler. Bir izleme panelinin gönderdiği gibi yana ya da ince taneli kaydırma parçayı döndürür; tam tekerlek tıkları yakınlaştırır.
- **Fare tekerleği**: kaydırma her zaman işaretçiye doğru yakınlaştırır.
- **İzleme paneli**: iki parmakla kaydırarak parçayı döndürün, {{key:Shift}} tuşunu basılı tutup kaydırarak kaydırın, sıkıştırarak yakınlaştırın. Bir eskizde iki parmakla kaydırma eskizi kaydırır.

Sıkıştırma her seçenekte yakınlaştırır. "Anlaşılsın" fareniz ya da izleme paneniz için yanlış tahmin ederse, sahip olduğunuzu seçin. Daha fazlası için bkz. [İzleme paneli, dokunma ve küçük ekranlar](topic:trackpad-and-touch).

## Eskiz çizerken: çizerken ilişki ekleme

**Çizerken ilişki ekle** (başlangıçta açık): bir noktaya yakalanan bir tıklama, yeni noktayı onunla çakışık yapar; bir eğrinin üzerine tıklama noktayı o eğrinin üzerine koyar; neredeyse yatay ya da dik çizilen bir çizgi yatay ya da düşey olur. Bkz. [İlişkiler ve ölçüler](topic:relations-dimensions).

Geometriyi, ona bağlamadan diğer geometrinin yakınına yerleştirmek istediğinizde kapatın. İmleç yine noktalara ve eğrilere yakalanır, ama hiçbir şey birleştirilmez: zincir halinde çizilen çizgiler uçlarını paylaşmaz, bu yüzden bir sürükleme onları ayırabilir. İstediğiniz ilişkileri sağ paneldeki listeden kendiniz ekleyin. Kapalı bir profil, uçları birleştiğinde yine de ekstrüde edilir.

:::note
Ayar yalnızca yeni çizimin eklediklerini değiştirir. Bir eskizdeki mevcut ilişkiler kalır ve köşe yuvarlat aracı yine kendi teğet yayını ve yarıçapını oluşturur.
:::

## Eskiz çizerken: çizerken ölçülendirme

**Çizerken ölçülendir** (başlangıçta açık): bir çizgi, dikdörtgen, daire ya da yay çizilirken bir sayı yazmak, imlecin yanındaki boyut kutusunu doldurur ({{key:Tab}} sonraki kutuya geçer) ve {{key:Enter}} şekli o boyutta çizer; yazdığınız her boyut için sürücü bir ölçü eklenir. Kapalıyken çizerken sayı yazmak hiçbir şey yapmaz ve şekiller yalnızca tıklamalarla çizilir. Bkz. [Çizerken boyutu yazın](topic:sketch-basics#type-the-size-as-you-draw).

## Köşe göstergesi

3B görünümün köşesinde ne gösterileceği: **Görünüm küpü** (başlangıç; sağ üstte — bakmak istediğiniz yönden bir yüzeye, kenara ya da köşeye tıklayın, yörüngeye almak için sürükleyin, modeli döndürmek için pusula halkasını sürükleyin), **Eksen simgesi** (sol altta, görünümle birlikte dönen küçük bir X, Y, Z işareti: X kırmızı, Y yeşil, Z mavi) ya da **Yok**. Eskiz çizerken ya da çizim sayfasında ikisi de gösterilmez. Bkz. [Görünüm küpü](topic:view-cube).

## Çözücü iş parçacıkları

Simülasyon çözücülerinin kaç iş parçacığı kullanabileceği. **Otomatik** (başlangıç), bilgisayarın mantıksal işlemci sayısından bir eksik (en fazla 16) alır; böylece bir çalışma çözülürken sayfa duyarlı kalır. Ya da bir sayı seçin. Büyük voksel çalışmaları, burkulma, zamana bağlı gerilme ve akış birkaç iş parçacığında daha hızlı çözülür (zamanlamalarımızda 80,000 küp için 4 iş parçacığında yaklaşık 2×, boşta bir bilgisayarda daha fazla); yaklaşık 20,000 bilinmeyenin altındaki modeller tek iş parçacığında kalır, çünkü iş parçacıklarını başlatmanın maliyeti kazandırdığından fazlasıdır. İş parçacıklı bir çözüm, tek iş parçacığıyla aynı yanıtı verir (yuvarlamaya kadar: toplamlar farklı bir sırayla eklenir). Her çalışmanın sonuç listesi, **Çözücü** altında nedeniyle birlikte **N iş parçacığı** ya da **1 iş parçacığı** gösterir.

İş parçacıklarının, sayfanın **köken arası yalıtılmış** olmasını gerektirir (tarayıcı çalışanların belleği ancak o zaman paylaşmasına izin verir). Laboratuvar sayfası öyledir; değilse ayar bunu söyler ("Bu sayfa köken arası yalıtılmış değil, bu yüzden seçilse bile çözücüler tek iş parçacığında çalışır.") ve her çözüm tek iş parçacığı kullanır. Başka her şey aynı çalışır ve yanıtlar aynıdır.

Laminer akış çalışmaları da iş parçacıklarını kullanır (54,000 akışkan hücresi için 4 iş parçacığında yaklaşık 2.5×, son basamağına kadar aynı yanıt). İkinci dereceden dörtyüzlü çözücü ve ısı transferi tek iş parçacığında çalışır: test bilgisayarımızda bunları iş parçacıklarına bölmek daha yavaş ölçüldü (çözücüleri bellek hızı ve bölünemeyen bir adım sınırlar).

### Kendi web sunucunuzda

PartCraft'ı kendi sunucunuzdan çalıştırıyorsanız, sunulduğu haliyle çalışır. Çözücü iş parçacıkları için sunucunun PartCraft sayfasıyla birlikte iki başlık göndermesini sağlayın:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Apache'de, klasörün `.htaccess` dosyasında (mod_headers gerekir):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

nginx'te, PartCraft'ı sunan `location` içinde:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Sayfayı yenileyin: Ayarlar › Çözücü iş parçacıkları, bilgisayarınızın sayısıyla birlikte **Otomatik** seçeneğini sunar. İkinci başlık, tarayıcının sayfanın başka bir siteden yüklediği ve buna izin vermeyen her şeyi reddetmesini sağlar; bu, PartCraft kendi başına çalıştığında sorun değildir (her şeyi kendi klasöründen yükler).
