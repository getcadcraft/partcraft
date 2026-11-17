---
title: Akışkan akışını simüle edin (Akış çalışması)
summary: Bir parçanın içindeki kanallardan ya da bir kutu içinde etrafından geçen akış, girişler, çıkışlar, hava, su veya kendi akışkanınız; ardından hareketli bir kesit düzleminde hız ve basınç, akım çizgileri, yüzey basıncı, basınç düşüşü, kütle dengesi, sürükleme ve kaldırma, ve laminer yöntemin neyi söyleyebildiği ve neyi söyleyemediği.
keywords: akış, CFD, akışkan, hesaplamalı akışkanlar dinamiği, akış simülasyonu, hava, su, viskozite, yoğunluk, Reynolds sayısı, laminer, türbülanslı, basınç düşüşü, basınç kaybı, giriş, çıkış, kapak, tapa, hız, debi, hacimsel akış, litre bölü dakika, statik basınç, akım çizgileri, kesit düzlemi, sürükleme, kaldırma, sürükleme katsayısı, kaldırma katsayısı, ön alan, dış akış, iç akış, boru, kanal, manifold, nozul, kafes Boltzmann, artık, yakınsama
from: 7dc75f29
---

Bir **Akış** çalışması, akışkanın parçanızın içindeki kanallardan (**iç**) veya etrafından (**dış**) nasıl hareket ettiğini hesaplar. Varsayılan olarak **laminer, sıkıştırılamaz, izotermal ve Newtonyen** çalışır: yoğunluğu ve viskozitesi sabit kalan bir akışkanın düzgün akışı; ısı, türbülans ya da yerçekimi yoktur. Yalnızca nitel desenler için bir **deneysel** türbülanslı model de bulunur (aşağıya bakın). Model, parça için ağ çekirdeğinin verdiği adlandırılmış yüzeylerde çalışır (bkz. [Ağ çekirdeği](topic:solid-kernels)).

**Çalışma alanı** kutusunda **Simülasyon**’u seçin, yoksa **Yeni çalışma** düğmesine basın ve **Tür** değerini **Akış (CFD)** olarak ayarlayın. **Akış modeli**, **Laminer** (varsayılan) ya da **Türbülanslı (Spalart–Allmaras, deneysel)** seçeneğidir: aşağıdaki **Türbülanslı akış (deneysel)** bölümüne bakın. Çalışmanın yapısal ayarları korunur, bu yüzden geri dönebilirsiniz. Akış ayarları parça dosyasına kaydedilir ve her değişiklik geri alınabilir.

## Akışkanı ve hücreleri seçin

- **Akışkan**: 20 °C'de hava ya da su veya **Özel**, yani kendi yoğunluğunuz (kg/m³) ve dinamik viskozitenizle (Pa·s). Hava, ideal gaz yasasını ve Sutherland yasasını kullanır (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); su IAPWS değerlerini kullanır (998.21 kg/m³, 1.0016 mPa·s).
- **Hücre boyutu**: akışkan alanı eşit küplerle doldurulur. Otomatik boyut için boş bırakın; panel ızgarayı gösterir. Her açıklık ve kanal, faydalı sayılar için **en az 8 ila 10 hücre genişliğinde** olmalıdır; daha küçük hücreler daha doğrudur ama daha yavaştır (iki kat ince, yaklaşık 16 kat iş demektir).
- **Duvarlar**: **Enterpolasyonlu** (varsayılan) hücreler arasındaki eğri duvarları izler; **Geri sekmeli** duvarları küp basamak yapısı gibi ele alır.

## Parça içindeki akış

Akışkan alanı kapalı olmalıdır. Panelde bir **Giriş** ve bir **Çıkış** ekleyin, ardından görünümde yüzeylerine tıklayın:

1. **Bir açıklığın çevresindeki düz yüzey**: boru ucundaki kenar, bir bağlantı yüzeyi. PartCraft, açıklığın deliğini orada bir kapakla kapatır. Bu yüzeydeki her delik o açıklığa aittir; bu yüzden bir giriş ve bir çıkış aynı yüzeyde açılıyorsa, bunlardan birinin üzerine bunun yerine ince bir kapak modelleyin.
2. **Bir kapağın iç yüzeyi**: diğer CAD araçlarındaki gibi. Açıklığın üzerine ince bir levha (bir ekstrüzyon) modelleyin ve akışkana değen yüzeyini seçin.

Bir giriş için **hız** (m/s, açıklık boyunca eşit, parçaya doğru) ya da **hacimsel akış** (L/min) ayarlayın. Bir çıkış için **statik basıncı** (Pa, gösterge) ayarlayın. Bir açıklık açık bırakılırsa ya da bir duvar bir hücreden inceyse, iç kısım dış kısımla birleşir ve çözüm "Kapalı akışkan alanı yok" mesajıyla durur.

## Parça etrafındaki akış

**Akış** ayarını **Dış** olarak, **Hız**'ı, akışın yöneldiği yönü ve kutunun akış yönünde, akışın tersinde ve yanlara ne kadar uzandığını ayarlayın (boşsa: parçanın en büyük boyutunun sırasıyla 1, 3 ve 1 katı). Akışın girdiği kutu yüzeyi bir giriş akışıdır, çıktığı yüzey 0 Pa'da bir çıkış akışıdır ve akış boyunca uzanan yüzeyler kaymalıdır. Çok küçük bir kutu, akışı parçanın yanından sıkıştırır ve sürüklemeyi artırır. **Referans alanı**, sürükleme ve kaldırma katsayılarının kullandığı alandır (boşsa: akış yönünden görülen parçanın ön alanı). Kaldırma, başka bir yön seçmediğiniz sürece +Y boyunca ölçülür.

## Çözün ve sonuçları okuyun

**Hesapla**'ya basın. Çözüm, adım sayısı, artık ve artık grafiğiyle arka planda çalışır; **Durdur** onu sonlandırır. Artık (hız alanının her adımda ne kadar değiştiği) hedefin altına indiğinde ve basınç düşüşü ya da sürükleme yerleştiğinde durur. Adım sınırına önce ulaşırsa panel kırmızı renkte **Yakınsamadı** yazar: sayılar son durumdur, kararlı bir yanıt değildir.

- **Kesit düzlemi**: model üzerinde bir düzlemde hız ya da statik basınç. Normalini (X, Y ya da Z) seçin ve kaydırıcıyı sürükleyerek taşıyın. Değerleri okumak için üzerine gelin.
- **Akım çizgileri**: iç akışta girişlerden, dış akışta ise kesit düzlemindeki kutunun akış girişi ucu boyunca bir tarak dizisinden.
- **Parça**: katı, geçirgen (düzlemi içeride görmek için), yüzey basıncı ya da gizli.
- **Tablo**: Reynolds sayısı, basınç düşüşü (girişlerdeki ortalama statik basınç eksi çıkışlardaki), her açıklığın akışı ve ortalama basıncı, parça üzerindeki kuvvet, sürükleme ve kaldırma ile katsayıları ve referans alanı (dış akış), kütle dengesi (giriş akışı ile çıkış akışının karşılaştırılması), ağ ve çözücü.

## Türbülanslı akış (deneysel)

**Akış modeli › Türbülanslı (Spalart–Allmaras, deneysel)** zaman ortalamalı türbülanslı akışı çözer (kararlı RANS). Spalart–Allmaras modeli her hücrede bir girdap viskozitesi verir ve duvarlara yakın hücreler, ince tabakayı çözmek yerine Spalding'in duvar yasasını kullanır. Her yerde tam türbülanslıdır (laminer bölge ya da geçiş yoktur).

**Doğruluk denetimlerinden geçemedi.** Panel, sonuçlar ve tablo her türbülanslı çalışmada bunu söyler ve uyarı kapatılamaz. Bunu **nitel akış desenleri** için kullanın (akışın ayrıldığı, geri döndüğü ya da hızlandığı yerler), **tasarım sayıları için değil**.

| Denetim | Referans | Sonuç |
|---|---|---|
| Düz kanal sürtünmesi, ilk hücre y⁺ 49 / 98'de | Dean korelasyonu | +3.3 % / +4.7 % |
| Çözümlenmiş duvarlı kanal (y⁺ ≈ 3), Re_τ 180: hacimsel hız | Moser, Kim & Mansour DNS | −1 % |
| Düz kanal, y⁺ 7–15 veya 190–380 | Dean korelasyonu | +9 ile +22 % |
| Küp hücrelerden geçen boru sürtünmesi, tam gelişmiş, 10–30 hücre genişliğinde | Colebrook | 30 ile 34 % fazla |
| Geriye bakan basamağın arkasında yeniden birleşme, basamak yüksekliği başına 6–14 hücre | Driver & Seegmiller, 6.26 basamak yüksekliği | 21 ile 39 % kısa |

Sonuçlar, daha ince hücrelerle yalnızca yavaş iyileşir. Çözümden sonra tablo **ilk hücre y⁺** değerini gösterir (duvar hücreleri üzerinden en küçük, ortalama ve en büyük) ve denetlenen 1 ile 400 aralığının dışında uyarır; yaklaşık 30 ile 300 arasını hedefleyin. **Çalışma süresi:** otomatik hücreler, en fazla bir dizüstü bilgisayar çekirdeğinde birkaç dakika sürecek şekilde boyutlandırılır (panel, ızgara ve adım sınırı için en kötü durumu gösterir; küçük bir boru 20 saniyeden kısa sürede yerleşir). Hücre boyutunu yarıya indirmek yaklaşık 16 kat daha uzun sürer. Parça üzerindeki kuvvetler, açıklıklar ya da kutu üzerindeki momentum dengesinden gelir.

**Şimdiye kadarki çalışma:** duvar hücreleri artık kendi kayma gerilmelerini duvar yasasıyla eşleştiriyor. Bu, boru ve basamak hatalarını yukarıdaki değerlere indirdi, düz kanal sonuçlarını değiştirmeden. Bu, tasarım sayıları için yeterli değildi. Sonraki adım, duvarlara yakın daha ince hücrelerdir.

## Neyi söyleyebilir, neyi söyleyemez

- **Laminer model** yalnızca laminerdir. Borularda akış, yaklaşık 2,000 ile 4,000 arasındaki bir Reynolds sayısının üzerinde türbülanslı hale gelir; kör cisimlerin arkasında iz, yaklaşık 50'nin üzerinde girdap saçmaya başlar. Panel bu noktalarda uyarır. Türbülanslı akış için laminer sonuç basınç düşüşünü olduğundan az tahmin eder ve sürüklemeyi yanlış hesaplar. Deneysel türbülanslı model (yukarıda) türbülanslı akışı nitel olarak kapsar; sayıları henüz güvenilir değildir.
- **Yöntem:** kararlı duruma kadar çalıştırılan kafes Boltzmann yöntemi (D3Q19, iki gevşeme zamanlı çarpışma). İçeride hafifçe sıkıştırılabilir; PartCraft yoğunluk değişimlerini birkaç yüzdeyle sınırlar. Akış hücreler için çok hızlıysa başlamayı reddeder ve hücrelerin ne kadar küçük olması gerektiğini söyler.
- **Karşılaştırıldığı:** bir parçadan geçen boruda Hagen–Poiseuille akışı (20 hücre genişliğinde basınç gradyanı 1 % içinde), Ghia ve ark.'nın kapak tahrikli boşluğu (kapak hızının 0.75 % içinde) ve Schäfer–Turek silindir kıyaslaması (çap başına 10 hücrede sürükleme 1 % içinde).
- Modellenmeyenler: ısı transferi, tasarım doğruluğunda türbülans (türbülanslı model deneyseldir), serbest yüzeyler, kavitasyon, yerçekimi, hareketli parçalar, Newtonyen olmayan akışkanlar, pürüzlü duvarlar. Laboratuvar sürümü: önemli sonuçları başka bir yöntemle denetleyin.
