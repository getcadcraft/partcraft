---
title: Spline'lar, kırpma, ofset ve diğer eskiz araçları
summary: Uydurma noktalı ve kontrol noktalı spline'lar çizin, eğrileri kırpın ve uzatın, bir zinciri ofsetleyin, bir merkez çizgisine göre aynalayın, çokgen ve yuva ekleyin, eskiz geometrisini örüntüleyin ve model kenarlarını projeksiyonla alın.
keywords: spline, uydurma noktası, kontrol noktası, b-spline, nurbs, eğri, kırp, uzat, ofset, ayna, simetrik, çokgen, altıgen, yuva, örüntü, doğrusal örüntü, dairesel örüntü, projeksiyon, kenarı projeksiyonla al, dahil et, öğeleri dönüştür
from: 3ecb166a
---

Bu araçlar açık bir eskizde çalışır. {{ui:Spline}} ve {{ui:Kırp}} araç çubuğundadır. Diğerleri eskiz araçlarının sonundaki {{ui:Daha fazla}} altındadır. Her araç tek bir geri alma adımıdır ve {{key:Esc}} onu durdurur. Temel çizim araçları için bkz. [İlk eskizinizi çizin](topic:sketch-basics).

## Spline'lar

Spline, pürüzsüz bir eğridir. İki türü vardır.

| Araç | Tuş | Nasıl çizilir |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | Eğrinin geçtiği noktalara tıklayın. {{key:Enter}}, {{key:Esc}}, sağ tıklama veya çift tıklama ile bitirin. Eğriyi kapatmak için ilk noktaya tekrar tıklayın |
| {{ui:Kontrol noktalı spline}} ({{ui:Daha fazla}} altında) | | Kontrol noktalarına tıklayın. Eğri onlara doğru çekilir ama yalnızca ilk ve son noktada dokunur. Kesikli kontrol çokgeni, çizerken ve sonrasında görünür |

- **Noktalar eskiz noktalarıdır.** Onları sürükleyin veya diğer noktalar gibi ilişki ve ölçü verin. Bir spline'ın ilk noktası bir çizginin ucuna yakalanabilir; bu, onları çakışık ilişkiyle birleştirir.
- **Bir uçta teğet.** Bir spline'ın ucuna değen bir çizgi, yay veya spline seçin, ardından spline'ı seçip {{ui:T Teğet}} öğesini seçin. Spline'ın uç yönü artık çizgiyi izler. Spline'ın uçlarından uzak bir teğet reddedilir: "Spline'a teğet olmak için çizgi, yay veya spline'ın uçlarından birine değmesi gerekir."
- **Uçlar.** Teğet ilişkisi yoksa, uydurma noktalı bir spline'ın uçları doğaldır (en uçta eğrilik yoktur). Eğri kübiktir ve her noktadan geçer; aralıklar noktalar arasındaki mesafelerle belirlenir.
- **Kapalı spline'lar** tek başına bir profil oluşturur. Açık spline'lar, çizgileri ve yayları diğer eğriler gibi kapalı bir döngüde birleştirir.
- Bir spline'ın içindeki bir noktayı silmek, o noktayı kaldırır ve spline'ı korur; spline en az iki noktası (kapalıysa üç) kaldığı sürece.

Ekstrüzyon ve döndürme, spline'ı kısa düz parçalardan örgü çekirdeğiyle oluşturur (gerçek eğriler kesin bir çekirdek gerektirir: bu sürümde henüz yapılmadı). DXF dışa aktarımı, spline'ı eğriden 0,01 mm'den fazla sapmayan bir çokgen olarak yazar, çünkü DXF R12'de spline öğesi yoktur.

## Kırpma ve uzatma

| Araç | Tuş | Nasıl |
|---|---|---|
| {{ui:Kırp}} | {{key:T}} | Bir eğriye işaret edin: gidecek parça en yakın kesişimlere kadar kırmızı görünür. Kaldırmak için tıklayın. Hiçbir şeyi kesmeyen bir eğri bütünüyle kaldırılır |
| {{ui:Uzat}} ({{ui:Daha fazla}} altında) | {{key:E}} | Uzatmak için uca yakın bir çizgi veya yaya tıklayın. Bir sonraki karşılaştığı eğriye kadar büyür. Önünde engel yoksa "Bu uç ulaşacak bir şey bulamıyor." |

Kırp ve Uzat çizgiler, yaylar, daireler ve spline'lar üzerinde çalışır (Uzat: çizgiler ve yaylar).

- Kırpılan bir **daire** bir yaya dönüşür. Yarıçap veya çap ölçüsü yaya geçer.
- Bir çizginin ortasını kırpmak, aynı düz çizgi üzerinde kalan iki çizgi bırakır. Bir yayın ortasını kırpmak, aynı merkezli ve bir eş ilişkisi olan iki yay bırakır.
- Kırpılan bir **spline**, eski eğriyi tam olarak izleyen bir kontrol noktalı spline'a dönüşür. Korunan bir uçtaki teğet ilişkisi kalır.
- Yeni uç, onu kesen eğriye yerleştirilir (çizgi, yay veya daire üzerine ya da onun ucuyla çakışık). Spline'lar bir nokta tutamaz, bu yüzden kesen bir spline ilişki eklemez.

**Artık uymayan ilişkiler kaldırılır** ve durum çubuğu kaç tane olduğunu söyler. Örneğin kırpılan bir çizgideki uzunluk ölçüsü kaldırılır, ama yatay veya paralel ilişkiler kalır.

## Ofset

1. {{ui:Daha fazla}} altındaki {{ui:Ofset}} öğesini seçin veya {{key:O}} tuşuna basın.
2. Bir çizgiye, yaya, daireye veya spline'a tıklayın. Tüm zinciri vurgulanır: uç uca birleşmiş, üç veya daha fazlasının birleştiği bir noktaya kadar tüm eğriler. Zincirin yalnızca bir kısmını ofsetlemek için önce o eğrileri seçin, sonra Ofset'i seçip birine tıklayın.
3. İşaretçiyi kopyanın gideceği tarafa taşıyın. Kesikli bir önizleme izler. İki taraf için {{key:B}} tuşuna basın.
4. Tıklayın, mesafeyi yazın ve {{key:Enter}} tuşuna basın.

Çizgiler ve yaylar tam olarak ofsetlenir. Köşeler buluşana kadar uzatılır veya kırpılır. Kopyanın tek bir **Ofset** ölçüsü vardır ve diğer parçalar onu izler: tüm kopyayı değiştirmek için ölçüye çift tıklayın. Zincir için fazla büyük bir mesafe reddedilir, örneğin "Bu mesafe bu zincir için fazla büyük: bir taraf içe doğru dönerdi."

Bir **spline**, gerçek ofsetten 0,001 mm içinde yeni bir uydurma noktalı spline ile ofsetlenir. Bu kopya sabittir: sonraki değişikliklerin ardından güncellenmez ve bir Ofset ölçüsü yoktur. Bir zincirdeki spline'ın uçlarında düzgün (teğet) birleşimler gerekir.

## Ayna

1. Seç ile neyin aynalanacağını seçin.
2. {{ui:Daha fazla}} altındaki {{ui:Ayna}} öğesini seçin veya {{key:M}} tuşuna basın.
3. Ayna alınacak çizgiye veya merkez çizgisine tıklayın.

Aynalanan her nokta orijinaliyle bir **Simetrik** ilişki alır, böylece orijinal değiştiğinde kopya da izler. Ayna çizgisi üzerinde duran noktalar ortaktır ve aynalanan daireler bir Eşit ilişkisi alır. Hiçbir şey seçili değilse, aynalanacak öğelere tıklayın, {{key:Enter}} tuşuna basın, sonra ayna çizgisine tıklayın.

## Çokgenler ve yuvalar

| Araç | Nasıl |
|---|---|
| {{ui:Çokgen}} | Merkeze, sonra bir köşeye tıklayın, ardından kenar sayısını yazın (3 ile 64 arası). Kenarlar eşittir ve köşeler bir yapı dairesi üzerinde durur. Çokgenin boyutunu belirlemek için daireyi ölçülendirin |
| {{ui:Yuva}} | Bir ucun merkezine, sonra diğer ucun merkezine tıklayın, ardından genişliği belirlemek için tıklayın. İki çizgi, iki eşit yarım daireye teğettir |

## Eskiz örüntüleri

Önce geometriyi seçin, sonra:

- {{ui:Doğrusal örüntü}}: bir başlangıç noktasına, sonra ilk kopyanın gideceği yere tıklayın, ardından kopya sayısını yazın (orijinal dahil).
- {{ui:Dairesel örüntü}}: merkeze tıklayın, sonra kopya sayısını yazın; tam bir tur boyunca eşit aralıkla yayılır.

Kopyalar, seçili geometri arasındaki ilişkileri de beraberinde getirir (dairesel örüntü yatay ve dikey ilişkileri dışarıda bırakır). Kopyalar orijinale bağlı değildir: birini değiştirirseniz diğerleri olduğu gibi kalır.

## Parçanın kenarlarını projeksiyonla alın

1. {{ui:Daha fazla}} altındaki {{ui:Kenarı projeksiyonla al}} öğesini seçin.
2. Eskizin arkasındaki parçanın düz veya dairesel bir kenarına tıklayın.

Kenar, eskiz düzlemine tam olarak kopyalanır ve sabitlenir (Sabitle ilişkisi). Parçadaki sonraki değişikliklerin ardından güncellenmez. {{key:Q}} tuşuna basarak yapı geometrisine çevirin. Eskiz düzlemine eğik bir daire bir elipse projeksiyonlanır, bu yüzden reddedilir. Serbest biçimli kenarlar ve doğrudan eskizden dışarı doğru uzanan kenarlar da reddedilir. Projeksiyon kesin bir çekirdek gerektirir: bu sürümde henüz yapılmadı.
