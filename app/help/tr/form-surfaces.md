---
title: Form ile serbest biçimli şekiller ve yüzey özellikleri
summary: Form çalışma alanında pürüzsüz bir kontrol kafesini itip çekin, kenarları keskinleştirin, simetri kullanın, denetleyin ve kesin bir katı ya da yüzeye dönüştürün; ardından Tasarım'da yüzeyleri yamalayın, loft uygulayın, dikin, kalınlaştırın, ofsetleyin, uzatın ve kırpın. Neyin kesin, neyin yaklaşık olduğu.
keywords: form, serbest biçim, T-spline, alt bölümleme, catmull-clark, kafes, quadball, keskin kenar, simetri, zebra, eğrilik, yüzey, yama, doldurma, loft yüzeyi, dikiş, kalınlaştır, ofset yüzeyi, uzat, kırp
from: 0d326ef4
---

:::note
**Bu sürümde henüz yapılmadı.** Bir formu parçaya bitirmek ve yüzey özelliklerinin kesin bir geometri çekirdeği gerektirmesi; PartCraft'ın bu sürümünde bu yok: her parçayı ağ çekirdeğiyle oluşturur. [Henüz yapılmayanlar](topic:not-built-yet) bunun yerine ne yapılacağını anlatır. Sayfanın geri kalanı, bunları kesin bir çekirdekle nasıl çalıştığını anlatır.
:::

**Form** çalışma alanı organik şekiller üretir. Bir **kafesi** düzenlersiniz: köşeler, kenarlar ve yüzeylerden oluşan kaba bir ağ. Şekil, kafesin kontrol ettiği pürüzsüz yüzeydir (Catmull–Clark limit yüzeyi); dolayısıyla bir köşeyi taşımak, yüzeyi çevresinde yumuşakça büker. Doğru göründüğünde **{{ui:Yüzey işlemi}}**, parça geçmişine bir *Form* özelliği ekler ve kesin çekirdek bunu gerçek B-spline yüzeylerine dönüştürür. Ardından köşesini yuvarlatabilir, kesebilir, diğer özelliklere birleştirebilir ve STEP olarak dışa aktarabilirsiniz.

Araç çubuğunun solundaki **Çalışma alanı** listesinden **Form**'u seçin.

## Kafes başlatın

1. Sağ paneldeki **Boyut** ve **Bölümler** değerlerini ayarlayın. Bölümler, her kenarın kaç yüzey alacağıdır.
2. Araç çubuğunda {{ui:Kutu}}, {{ui:Quadball}} ya da {{ui:Düzlem}} düğmesine tıklayın. Panelde ayrıca **Silindir**, **Torus** ve **Tıklamalarla yüzeyler** bulunur.

- Bir **quadball**, köşe noktaları bir küre üzerinde duracak şekilde oturtulmuş bir kutu kafesidir. Bu noktalar arasında yüzey küreden biraz içeride kalır: 2 bölümle yaklaşık 0.4 % daha az hacim.
- Bir **Düzlem** açıktır, bu yüzden bir yüzey gövdesi olur (aşağıdaki "Tasarımda yüzey özellikleri" bölümüne bakın).
- **Tıklamalarla yüzeyler**: bir yüzey oluşturmak için üst (zemin) düzlemde ya da kafesin köşelerinde 4 nokta tıklayın. Köşe paylaşan yüzeyler birleşir. Üçgen için 3 noktadan sonra {{key:Enter}} tuşuna, ya da durdurmak için {{key:Esc}} tuşuna basın.

Tamamlanmamış kafesiniz parça dosyasıyla birlikte kaydedilir; dosyayı kapatıp daha sonra devam edebilirsiniz.

## Seçin ve taşıyın

- Kafesin bir köşesine, kenarına ya da yüzeyine tıklayın. {{key:Shift}}+tıklama öğe ekler ya da çıkarır. {{key:Esc}} seçimi temizler.
- Seçimin ortasında bir gizmo belirir. Bir oku sürükleyerek onun boyunca, ya da bir kareyi sürükleyerek o düzlemde taşıyın. Taşımak için {{key:W}}, döndürmek için {{key:E}} ve ölçeklemek için {{key:R}} tuşuna basın ya da paneldeki düğmeleri kullanın. Araç çubuğundaki {{ui:Gizmo}} bunlar arasında geçiş yapar.
- **Yumuşak düşüş** (mm) ayrıca o mesafe içindeki köşeleri çeker; etkisi o mesafenin kenarında yumuşakça sıfıra iner.
- Her sürükleme tek bir geri alma adımıdır: {{key:Ctrl+Z}} ve {{key:Ctrl+Y}} her zamanki gibi çalışır.

## Kafesi değiştirin

Paneldeki **Değiştir** düğmeleri seçim üzerinde çalışır:

| Düğme | Ne yapar |
|---|---|
| {{ui:Ekstrüzyon}} | Seçilen yüzeyler, normalleri boyunca **Ekstrüzyon mesafesi** kadar dışarı taşınır ve yeni yan yüzeyler oluşur. Seçilen açık kenarlar dışarıya doğru yeni yüzeyler büyütür. |
| {{ui:Kenar döngüsü}} / Kenar döngüsü ekle | Seçilen kenarı kesen dört kenarlı yüzeylerin halkasını, yarı yolda böler. Daha fazla döngü daha sıkı eğriler verir. |
| Nokta ekle | Seçilen kenarın ortasına bir köşe ekler. |
| Alt bölümle | Seçilen her yüzeyi, ortasının çevresinde dört kenarlı yüzeylere böler. |
| Köprü | İki seçilen yüzeyi ya da iki açıklığı (her birinde bir açık kenar seçin) bir yüzey tüpüyle birleştirir. İkisinin de kenar sayısı aynı olmalıdır. |
| Deliği doldur | Seçilen açık kenar boyunca açıklığı tek bir yüzeyle kapatır. |
| Kaynakla birleştir | Seçilen köşeleri ortalarında tek bir köşede birleştirir. |
| Düzleştir | Seçilen köşeleri, onlara en uygun düzleme taşır. |
| Sil | Seçilen yüzeyleri, kenarları (iki yüzey birleşir) ya da köşeleri kaldırır. |

## Keskin kenarlar, simetri ve görünüm

- {{ui:Keskin kenar}} seçilen kenarları keskin yapar. **Keskin kenar ağırlığı** 10 tamamen keskin demektir. Daha küçük bir ağırlık, o kadar iyileştirme adımı boyunca keskin kalır, sonra yumuşar; bu da sert bir kıvrım yerine sıkı bir yuvarlak verir. **Keskinliği kaldır** bunları yeniden pürüzsüz yapar. **Keskin köşe** bir köşeyi sabitler; böylece yüzey onu bir noktayla geçer.
- **Simetri**, kafesi X, Y ya da Z = 0 boyunca aynalar. Pozitif tarafı tutar, onu aynalar ve iki yarıyı birleştirir. Bundan sonra, iki taraftan birinde yapılan bir düzenleme ikisinde de gerçekleşir. Ayna düzlemindeki köşeler orada kalır.
- {{ui:Görünüm}}, **Pürüzsüz** (özelliğin olacağı yüzey) ile **Kutu** (kafes yüzeylerinin kendisi) arasında geçiş yapar.
- **Analiz**: **Zebra çizgileri**, geçerli görünümden çizgili bir ışığı yansıtır. Pürüzsüz bir yüzeyde yumuşakça bükülür ve bir keskin kenarda kırılır. **Ortalama eğrilik**, dışbükey alanları kırmızı, içbükey alanları mavi ve düz alanları beyaz gölgelendirir. Görüntülenen ağ üzerinde kotanjant formülüyle ölçülür, bu yüzden bir kılavuzdur, bir ölçüm değildir.

## Denetleyin ve bitirin

- **Kesin denetle**, parçanızı değiştirmeden kafesi kesin çekirdekte dönüştürür. Kafesin kaç B-spline yama oluşturduğunu, kaçının kesin olduğunu ve sonucun kapalı, geçerli bir katı olup olmadığını ve hacmini bildirir.
- {{ui:Yüzey işlemi}} geçmişe bir *Form* özelliği ekler ya da düzenlediğiniz formu günceller ve sizi Tasarım'a geri götürür. Kapalı bir kafes bir katı olur. Tasarım panelindeki **İşlem** şunlardan biri olabilir: Yeni gövde, Birleştir, Kes ya da Kesişim. Açık bir kafes bir yüzey gövdesi olur.
- Bir formu sonra değiştirmek için geçmişte seçin ve **Form'da düzenle** düğmesine tıklayın. Kafesini düzenlerken oluşturulmuş gövde gizlenir.
- **Vazgeç**, geçmişe dokunmadan kafesi atar.

## Neyin kesin, neyin yaklaşık olduğu

Kafesin dört kenarlı her yüzeyi, gerektiğinde inceltilerek, bir bikübik B-spline yamasına dönüşür.

- Bir yüzeyin her köşesi *düzenli* olduğunda (yüzeyin içinde dört kenar birleşir ya da açık bir kenarda ya da bir keskin kenar boyunca üç), yama **tam olarak** alt bölümleme yüzeyidir. Testler bunu 1e-9 mm'ye kadar denetler.
- Bir **olağanüstü nokta** çevresinde (birleşen üç, beş ya da daha fazla kenar; üç ya da beş kenarlı bir yüzeyin köşesi ya da bir keskin kenarın ucu) kesin bir polinom yama yoktur. Orada yama, o köşedeki kesin noktayı ve teğet düzlemi ile komşu kenar eğrilerini alır; böylece yamalar yine boşluksuz birleşir. Noktada birleşen kenarlar boyunca teğet sürekliliği yaklaşıktır. Form paneli ve özelliğin paneli en büyük açıyı verir; genellikle 2°'nin altında. Özelliğin panelindeki daha yüksek bir **Düzey**, bu yamaları daha küçük ve daha yakın yapar.
- Keskin kıvrımlar katının gerçek kenarlarıdır, bu yüzden onları yuvarlatabilirsiniz.
- Her yama kendi yüzeyidir; bu yüzden bir formun çok yüzeyi vardır ve aralarında çizgiler çizilir.

## Tasarımda yüzey özellikleri

Yüzey komutları, Tasarım'ın {{ui:Daha fazla}} menüsünde, özelliklerin altındadır. Kesin çekirdek gerektirirler. Yüzey gövdeleri mavi ve geçirgen olarak çizilir. Onları kalınlaştırana ya da dikene kadar katının parçası değildirler.

| Komut | Ne yapar |
|---|---|
| Yama | Kapalı bir kenar döngüsünü doldurur. Önce katının kenarlarında {{key:Shift}}+tıklama yapın ya da açıklığını doldurmak için bir yüzey gövdesi seçin. **Teğet (G1)** yamanın o yüzeyle yumuşakça birleşmesini sağlar. |
| {{ui:Loft yüzeyi}} | Her eskiz için bir eğri zinciri (açık ya da kapalı) boyunca bir yüzey, geçmiş sırasıyla. |
| {{ui:Dikiş}} | Yüzey gövdelerini ortak kenarları boyunca diker. Kapanırlarsa sonuç, diğer özellikler gibi bir İşlem ile bir katı olur. |
| {{ui:Kalınlaştır}} | Bir yüzey gövdesine kalınlık verir: normali boyunca, ona karşı ya da her iki yana yarısı kadar. Sonuç bir katıdır. |
| Ofset yüzeyi | Bir yüzey gövdesinin, normalleri boyunca taşınmış bir kopyası. Orijinal kalır. |
| Yüzeyi uzat | Tek yüzeyli bir yüzeyi, seçtiğiniz kenarların ötesine büyütür. |
| {{ui:Yüzeyi kırp}} | Bir yüzey gövdesini, başka bir yüzey gövdesi ya da katı onu kestiği yerden keser. Hangi parçanın tutulacağını seçmek için **Parçada bir nokta seçin** düğmesine tıklayın ya da diğer her şeyi tutun. |

Dikiş, Kalınlaştır, Uzat ve Yüzeyi kırp, başladıkları yüzey gövdesini tüketir. Sonraki özellikler yenisini kullanır.

Bugünkü sınırlar: birden fazla ayrı kapalı parçası olan formlar tek bir katıya dönüşmez; düzenli alanlar daha büyük yüzeylerde birleştirilmez; ve [Henüz yapılmayanlar](topic:not-built-yet) bölümüne bakın.
