---
title: Referans düzlemleri, eksenler ve noktalar
summary: Bir yüzeyden ofsetli, açılı, üç noktadan geçen, orta düzlem, bir silindire teğet, bir kenara dik ya da bir kenar ve bir noktadan geçen düzlemler yapın; eksenler; kenar orta noktalarında, kesişimlerde ve düzlem köşelerinde noktalar; bunların üzerine eskiz yapın ve döndürme ekseni, örüntü yönü ve ayna düzlemi olarak kullanın.
keywords: datum, nesneler arası, orta nokta, kesişim noktası, kenar ve noktadan geçen düzlem, referans düzlemi, çalışma düzlemi, yapı düzlemi, veri düzlemi, ofset düzlem, açılı düzlem, orta düzlem, teğet düzlem, referans ekseni, yapı ekseni, veri ekseni, referans noktası, çalışma noktası, düzlem üzerine eskiz
from: e7eb6fc1
---

Referans geometrisi, özelliklerinizi üzerine kurduğunuz iskeledir: yüzey olmayan bir yere eskiz yapmak için bir **düzlem**, döndürme ya da örüntü için bir **eksen**, bir ekstrüzyonu durdurmak için bir **nokta**. Kendi malzemesi yoktur. Düzlemler görünümde soluk kareler, eksenler kesikli çizgiler, noktalar küçük çarpılar olarak gösterilir; üçü de geçmişe eklenir ve bir ölçü üst tarafta değiştiğinde neyden oluştuklarını izler.

Bunlar Özellikler grubunun {{ui:Daha fazla}} menüsündedir: {{ui:Düzlem}}, {{ui:Eksen}}, {{ui:Nokta}}.

## Düzlem oluşturma

1. Bir düzlemden başlamak için (isteğe bağlı) düz bir yüzeye ya da geçmişteki bir taban düzleme tıklayın.
2. {{ui:Daha fazla}}, sonra {{ui:Düzlem}} seçeneğini belirleyin. Seçtiğiniz şeyden (ya da üst düzlemden) parçanın boyutunun %20'si kadar uzakta bir ofset düzlem olarak başlar.
3. Sağ panelde **Tür** ve referanslarını seçin:

| Tür | Referanslar | Sayılar |
|---|---|---|
| Bir düzlemden ya da yüzeyden ofset | **Düzlemden** | **Mesafe (mm)**, diğer taraf için negatif |
| Açılı, bir kenardan ya da eksenden geçen | **Düzlemden**, **Etrafında döndür** (dünya ekseni, bir eksen özelliği ya da seçilmiş düz bir kenar) | **Açı (°)** |
| Üç noktadan geçen | **Nokta 1**, **Nokta 2**, **Nokta 3** | — |
| İki düzlem arasında orta düzlem | **Birinci düzlem**, **İkinci düzlem** (paralelse: tam ortada; kesişiyorsa: açıyı ikiye bölen düzlem) | — |
| Bir silindire teğet | **Silindir** (silindirik bir yüzey), **Yakın nokta** (hangi taraf) | — |
| Bir kenara bir noktada dik | **Kenar**, **Noktada** (düzlem, kenarın ona en yakın noktasından ve ayrıca bu noktadan geçer) | — |
| Bir kenar ve bir noktadan geçen | **Düz kenar** (ya da bir eksen), **Noktadan geçen** | — |
| Bir kenara orta noktasında dik | **Kenar** (üzerindeki orta noktada ona dik), ya da kenar yoksa **Nokta 1** ve **Nokta 2** (ikisinin tam ortasındaki düzlem) | — |

Her referansın bir **Seç** düğmesi vardır: düğmeye basın, sonra görünümde tıklayın. Bir düzlem yuvası bir taban düzlem, bir referans düzlemi ya da düz bir yüzey alır; bir nokta yuvası bir kenarın ucunu (o uca yakın tıklayın), bir nokta özelliğini ya da bir yüzeyde bir noktayı alır; bir kenar yuvası bir kenar alır. Seçimi iptal etmek için {{key:Esc}} tuşuna basın. **Normali çevir** düzlemi ters çevirir (üzerindeki eskizin hangi yöne baktığını).

Bu sürümde bir kenar ya da silindir yüzeyi gerektiren bir yuva (Silindire teğet ve Kenar yuvaları) "henüz yapılmadı" yanıtı verir: bunun yerine noktalar ya da bir eksen kullanın.

## Düzlem üzerine eskiz yapma

Düzlemi seçin (geçmişte ya da görünümde karesine tıklayarak) ve {{ui:Eskiz}} seçeneğini ya da panelindeki **Üzerine eskiz yap** seçeneğini belirleyin. Eskiz düzlemi izler: düzlemin mesafesini değiştirdiğinizde eskiz ve üzerindeki her özellik de birlikte hareket eder.

## Eksenler ve noktalar

- {{ui:Eksen}}: iki noktadan geçen, bir silindirin ya da koninin ekseni, iki düzlemin kesiştiği yer, düz bir kenar boyunca (ya da dairesel bir kenarın ekseni) ya da bir noktadan geçerek bir yüzeye dik.
- {{ui:Nokta}}: koordinatlarda, bir köşede ya da eskiz noktasında, dairesel bir kenarın merkezinde ve ayrıca "nesneler arasındaki" noktalarda:

| Nokta türü | Referanslar |
|---|---|
| Bir kenarın orta noktası (ya da iki nokta arası) | **Kenar** (uzunluğunun tam ortasında; yaylar ve eğriler için de), ya da kenar yoksa **Nokta 1** ve **Nokta 2** |
| Bir kenar ya da eksenin bir yüzey ya da düzlemle kesiştiği yer | **Kenar** (düz ya da eğri) ya da bir eksen ve **Düzlemle kesişir** (bir düzlem ya da düz yüzey) ya da **Ya da bir yüzey** (düz yüzey ya da silindir). Bir daire bir düzlemi iki kez, bir çizgi bir silindiri iki kez keser: **Diğer kesişim** ikinciyi alır |
| Üç düzlemin kesiştiği yer | **Birinci**, **İkinci** ve **Üçüncü düzlem** (düzlemler ya da düz yüzeyler) |

Referansları uymadığında her biri açık bir iletiyle başarısız olur: düzleme paralel bir çizgi, silindiri ıskalayan bir çizgi, düzleme ulaşmayan bir kenar, tek bir noktada buluşmayan üç düzlem, bir düzlemi sabitlemesi gereken çizgi üzerindeki bir nokta.

Bunları diğer özelliklerde kullanın:

| Nerede | Nasıl |
|---|---|
| Döndürme | **Eksen**: listeden eksen özelliğini seçin (eskizin düzleminde yer almalıdır) |
| Dairesel örüntü | **Eksen**: eksen özelliği |
| Doğrusal örüntü | **Yön**: bir eksen özelliği ya da bir düzlem (normali) |
| Ayna | **Ayna düzlemi**: bir referans düzlemi |
| Ekstrüzyon | **Son**: Yüzeye ya da düzleme kadar, Köşe noktasına kadar (bir nokta özelliği). Bu sürümde henüz yapılmadı (tam bir çekirdek gerektirir) |
| Eğim | **Nötr düzlem** |

## Bir referans yoksa

Artık var olmayan bir yüzeyden yapılmış bir düzlem, bunu adlandıran bir iletiyle başarısız olur; örneğin "Oturduğu yüzey Extrude1'de yok." Başka bir yüzeye asla taşınmaz. Üzerindeki eskizler ve özellikler, yeni bir referans seçene kadar "henüz yapılmadı" olarak işaretlenir; parçanın geri kalanı olduğu gibi kalır.

:::note
Bu sürüm her parçayı örgü çekirdeğiyle oluşturur; bu çekirdek taban düzlemlerden, bir ekstrüzyon ya da döndürmeyle oluşturulan düz yüzeylerden, eskiz noktalarından, koordinatlardan ve diğer referans özelliklerinden düzlemler, eksenler ve noktalar üretir. Bir kenar, bir kenarın ucu ya da eğri bir yüzey gerektiren her şey tam bir çekirdek gerektirir: bu sürümde henüz yapılmadı ("Katının yalnızca tam bir çekirdeğin bulabileceği bir yüzeyini ya da kenarını kullanır: bu sürümde henüz yapılmadı.").
:::
