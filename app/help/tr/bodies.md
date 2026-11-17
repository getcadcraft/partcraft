---
title: Gövdeleri birleştirin, taşıyın ve ölçekleyin; yol örüntüleri
summary: Ayrı gövdeler oluşturun, sonradan birleştirin, kesin ya da kesişimlerini alın; taşıyın, döndürün, hizalayın veya kopyalayın; eşit ya da X, Y ve Z ile ölçekleyin; özellikleri ve gövdeleri bir eğri boyunca kopyalayın.
keywords: gövde, gövdeler, çoklu gövde, yeni gövde, birleştir, boolean, kes, kesişim, çıkar, birleşim, araçları tut, gövdeyi taşı, gövdeyi kopyala, gövdeyi döndür, hizala, taşı, ölçekle, eşit olmayan ölçek, gerdir, afin, yol örüntüsü, eğri boyunca örüntü, yol boyunca dizi, eğriye bağlı örüntü
from: 6b1ea820
---

:::note
**Bu sürümde henüz yapılmadı.** Birden çok gövdeyle çalışmak tam bir geometri çekirdeği gerektirir; PartCraft'ın bu sürümünde böyle bir çekirdek yoktur: her parçayı ağ çekirdeğiyle oluşturur. [Henüz yapılmayanlar](topic:not-built-yet) ne yapmanız gerektiğini anlatır. Sayfanın geri kalanı, tam çekirdekle nasıl çalıştığını anlatır.
:::

Bir parça birden fazla katı içerebilir. Her ayrı katı bir **gövdedir**. Çoğu özellik dokunduğu her gövdeye ekler ya da ondan çıkarır; bu sayfadaki araçlar seçtiğiniz bütün gövdeler üzerinde çalışır. Bunlar Özellikler grubunun {{ui:Daha fazla}} menüsündedir: {{ui:Birleştir}}, {{ui:Gövdeyi taşı}}, {{ui:Gövdeyi ölçekle}} ve {{ui:Yol örüntüsü}}. Hepsi tam çekirdek (OpenCascade) gerektirir.

## Ayrı bir gövde oluşturma

Bir ekstrüzyonun ya da döndürmenin **İşlem** ayarını sağ panelde **Yeni gövde** olarak belirleyin (süpürme ve loft da bunu içerir). Yeni katı, diğerleriyle üst üste bindiği yerde bile ayrı kalır. **Kesişim** yalnızca yeni şeklin mevcut olanla ortak kısmını tutar.

Gövdeler, onları başlatan özelliğin adıyla adlandırılır: "Extrude2". Bir kopya, orijinalinin ve onu kopyalayan özelliğin adıyla adlandırılır: "Extrude2, copy 1 of Move1". Önceki özelliklerdeki boyutları değiştirdiğinizde adlar aynı kalır; böylece bir gövdeyi kullanan özellikler onu bulmaya devam eder. İki veya daha fazla gövde olduğunda parça paneli (boş alana tıklayın) bunları hacimleriyle listeler.

## Gövdeyi yeniden adlandırma veya gizleme

Parça panelini görmek için görünümde boş alana tıklayın. Gövde listesi (parçada iki veya daha fazla gövde varsa gösterilir), her satırda bir ad kutusu ve bir {{ui:Gizle}} düğmesi içerir.

- **Yeniden adlandırma:** kutuya yeni bir ad yazın ve {{key:Enter}}'a basın ya da başka yere tıklayın. Böylece her panel bu adı kullanır: Birleştir, Gövdeyi taşı ve örüntüler. Kutuyu boşaltırsanız gövdeyi oluşturan özelliğin adına geri dönülür.
- **Gizleme:** satırındaki {{ui:Gizle}} düğmesine tıklayın. Gövde görünümden çıkar ve tıklamalar onun içinden geçer; böylece arkasındaki yüzeyleri seçebilirsiniz. {{ui:Göster}} onu geri getirir; {{ui:Tümünü göster}} gizli olan her gövdeyi geri getirir.

Gizleme yalnızca görünümü değiştirir. Gizli bir gövde yine oluşturulur, hacimde ve ölçümlerde sayılır ve STL, 3MF ile STEP dışa aktarmalarında kaydedilir. Adlar ve gizli gövdeler parça dosyasına kaydedilir ve her değişiklik {{ui:Geri al}} için bir adımdır.

## Gövdeleri birleştirme

1. **Hedef** gövdenin bir yüzeyinde Shift+tıklayın, sonra her **araç** gövdesinin bir yüzeyinde.
2. {{ui:Daha fazla}} seçeneğini, ardından {{ui:Birleştir}} seçeneğini belirleyin.
3. Sağ panelde **İşlem**i seçin:

| İşlem | Sonuç |
|---|---|
| Birleştir | Hedef ve araçlar tek bir gövde olur |
| Kes | Araçlar hedeften çıkarılır |
| Kesişim | Hedefin ve her aracın ortak olarak paylaştığı kısım tutulur |

**Hedef gövde** adını koruyan gövdedir. **Araç gövdeleri** kutusunu işaretleyin ya da kaldırın, ya da **Görünümde seç** kullanıp yüzeylerine tıklayın. **Araç gövdelerini tut** araçları yerlerinde bırakır (bir kalıp ve onun özü için kullanışlıdır). Bir araç gövdesi önceki bir birleştirme ile zaten tüketilmişse, panel başka bir gövde seçmek yerine bunu söyler.

## Gövde taşıma veya kopyalama

1. {{ui:Daha fazla}} seçeneğini, ardından {{ui:Gövdeyi taşı}} seçeneğini belirleyin. En yeni gövde işaretlidir; taşımak istediklerinizi işaretleyin.
2. **Taşıma** türünü seçin:

| Taşıma | Ayarladığınız |
|---|---|
| Öteleme | Milimetre cinsinden **ΔX**, **ΔY**, **ΔZ** |
| Noktadan noktaya | **Başlangıç** ve **Bitiş**: bir kenarın ucuna, bir nokta öğesine ya da bir yüzeydeki bir yere yakın tıklayın |
| Bir eksen etrafında döndürme | **Eksen** (X, Y, Z, bir eksen öğesi ya da **Seç**: düz bir kenar, bir daire ya da bir silindir) ve **Açı (°)** |
| Bir yüzeyi bir yüzeye ya da düzleme hizalama | **Taşınacak yüzey** (gövdenin düz bir yüzeyi), **Üzerine** (düz bir yüzey ya da bir düzlem) |

Hizalama gövdeyi, bir yüzeyi diğer yüzeyin üzerine gelecek şekilde, yüzeye yüzeye döndürür; sonra yalnızca o yüzeyin normali doğrultusunda kaydırır. **Aynı yön** onu ters yönde döndürür. **Kopyala** orijinali tutar ve taşınmış kopyayı yeni bir gövde olarak ekler.

## Gövdeyi ölçekleme

1. {{ui:Daha fazla}} seçeneğini, ardından {{ui:Gövdeyi ölçekle}} seçeneğini belirleyin ve gövdeleri işaretleyin.
2. Bir **Ölçek** yazın ya da **Tekdüze** kutusunun işaretini kaldırıp **Ölçek X**, **Ölçek Y** ve **Ölçek Z** yazın (dünya eksenleri boyunca).
3. **Merkez**, yerinde kalan noktadır: gövdelerin kutusunun merkezi ya da seçtiğiniz bir nokta.

Tekdüze ölçekleme tamdır. Tekdüze olmayan ölçekleme daireleri elipslere çevirir: bir silindir eliptik bir silindire dönüşür. Bunu hiçbir analitik yüzey tutamaz; bu yüzden eğri yüzeyler 0.0000004 mm'den fazla sapmayan B-spline yüzeylere dönüşür. Düz yüzeyler ve düz kenarlar tam kalır. Panel ne olduğunu söyler. Ölçek çarpanları sıfırdan büyük olmalıdır (bunun yerine {{ui:Ayna}} ile aynalayın).

## Bir yol boyunca kopyalama

1. Geçmişte kopyalanacak özelliği seçin ya da en yeni gövdeyi kopyalamak için hiçbir şey seçmeyin.
2. {{ui:Daha fazla}} seçeneğini, ardından {{ui:Yol örüntüsü}} seçeneğini belirleyin. Kullanılmamış en yeni eskiz yol olarak alınır.
3. Sağ panelde şunları ayarlayın:

| Ayar | Ne yapar |
|---|---|
| **Kopyala** | Gövdeler (her kopya yeni bir gövde) ya da Özellikler (orijinal gibi birleştirilmiş ya da kesilmiş) |
| **Yol** | Eskizleri işaretleyin ya da **Model kenarlarını seç**; parçalar uçtan uca birleşmelidir |
| **Sayı** | Orijinal dahil toplam sayı |
| **Aralık** | Eşit (açık bir yolun ucuna kadar ya da kapalı bir yolun tamamı boyunca yayılır) ya da belirli bir mesafe |
| **Yönelim** | Yolu izle (her kopya onunla birlikte döner) ya da Sabit (kopyalar paralel kalır) |
| **Yönü ters çevir** | Yolda diğer yöne git |

Kopyalar, yolun orijinale en yakın geçtiği yerde başlar ve eğri boyunca uzunluğa göre aralıklı yerleştirilir.

Doğrusal ve dairesel örüntüler de gövde kopyalayabilir: panelinde **Gövdeleri kopyala** kutusunu işaretleyin ve gövdeleri seçin; her kopya yeni bir gövdedir.

## Sınırlar

- Gövdeler tam çekirdek ister; ağ çekirdeği tek bir katı tutar ve bunu söyler.
- Tekdüze olmayan ölçekleme eğri yüzeyleri yakın B-spline yaklaşımlara çevirir (yukarıya bakın); tam silindirlere ya da konilere dönüştürmez. Ofset yüzeyler şimdilik bu şekilde ölçeklenemez.
- Bükülen bir 3D eğrinin yolunu izlemek kopyayı bükmeden taşır; düz yollarda dönüş tamdır.
- Birleştir yalnızca katılar üzerinde çalışır. Yüzey gövdeleri {{ui:Dikiş}} ile birleştirilir.

Nesneler arasındaki noktalar ve düzlemler için bkz. [Referans düzlemleri, eksenler ve noktalar](topic:reference-geometry), ayrıca [Örüntü ve ayna özellikleri](topic:patterns-mirror).
