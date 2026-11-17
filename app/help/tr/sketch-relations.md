---
title: Eskiz ilişkileri ve ölçüleri
summary: Bir PartCraft eskizinin sahip olduğu her ilişki ve ölçü, her biri için neyin seçileceği, simgesi ve çözümlemede nasıl davrandığı.
keywords: ilişkiler, kısıtlamalar, çakışık, yatay, dikey, paralel, dik, teğet, eşit, eşmerkezli, orta nokta, sabitle, mesafe, yatay mesafe, dikey mesafe, yarıçap, çap, açı, simgeler, glifler
from: 9831e7be
---

İlişkiler geometrinin diğer geometriye göre nasıl durduğunu sabitler. Ölçüler boyutları sabitler. Bir ilişki eklemek için Seç aracıyla ({{key:S}}) öğeleri seçin ve sağ paneldeki düğmesini seçin; bir ölçü eklemek için Ölçülendirme aracını ({{key:D}}) veya sağ paneldeki ölçü düğmelerini kullanın. Nasıl çalışılacağı: [Eskizi tam tanımlama](topic:relations-dimensions).

Aşağıdaki "eğri" bir daire veya bir yaydır. Orijin bir nokta sayılır.

## İlişkiler

| Düğme | Simge | Seçin | Etkisi |
|---|---|---|---|
| {{ui:• Çakışık}} | • (yalnızca seçiliyken veya sorun varsa görünür) | İki nokta | Noktalar birleşir |
| {{ui:• Çakışık}} | • | Bir nokta ve bir çizgi | Nokta çizgi üzerinde (veya uzantısında) durur |
| {{ui:• Çakışık}} | • | Bir nokta ve bir eğri | Nokta daire veya yay üzerinde durur |
| {{ui:H Yatay}} | H | Bir çizgi veya iki nokta | Çizgi düzdür veya iki nokta aynı yükseklikte olur |
| {{ui:V Dikey}} | V | Bir çizgi veya iki nokta | Çizgi dikeydir veya noktalar birinin üstünde olur |
| {{ui:∥ Paralel}} | ∥ | İki çizgi | Çizgiler aynı yönde gider |
| {{ui:⊥ Dik}} | ⊥ | İki çizgi | Çizgiler dik açıyla buluşur |
| {{ui:T Teğet}} | T | Bir çizgi ve bir eğri | Çizgi, eğriyi kesmeden ona dokunur |
| {{ui:T Teğet}} | T | İki eğri | Çizildiği gibi, dışarıdan veya içeriden dokunurlar |
| {{ui:T Teğet}} | T | Bir spline ve uçlarından birine değen bir çizgi, yay veya spline | Spline o ucu diğer eğrinin yönünde terk eder |
| {{ui:= Eşit}} | = | İki çizgi | Aynı uzunlukta |
| {{ui:= Eşit}} | = | İki eğri | Aynı yarıçapta |
| {{ui:◎ Eşmerkezli}} | ◎ | İki eğri | Aynı merkez |
| {{ui:◎ Eşmerkezli}} | ◎ | Bir nokta ve bir eğri | Nokta eğrinin merkezinde durur |
| {{ui:M Orta nokta}} | M | Bir nokta ve bir çizgi | Nokta çizginin ortasında durur |
| {{ui:↔ Simetrik}} | ↔ | İki nokta ve bir çizgi | Noktalar çizgiye göre ayna görüntüsüdür ({{ui:Ayna}} bunları ekler) |
| {{ui:⚓ Sabitle}} | ⚓ | Bir nokta, bir çizgi, bir eğri veya bir spline | Şu anda olduğu yerde tam olarak tutar (spline için: noktaları) |

Buradaki çizgilere merkez çizgileri de dahildir. Çizim, bazı ilişkileri sizin yerinize ekler: bir noktaya yakalamak onu çakışık yapar, bir eğriye yakalamak noktayı o eğrinin üzerine koyar, neredeyse yatay veya dikey çizgiler H veya V alır ve bir dikdörtgenin dört köşesi birleştirilir: ikisi H, ikisi V.

**Sabitle**, bir şeyin hareket etmesini durdurmanın hızlı bir yoludur, ama parça bu durumda başka bir yerdeki ölçü değişikliğini izleyemez. Orijine olan ölçülere tercih edin.

## Ölçüler

| Düğme | Seçin | Ölçer | Gösterilen |
|---|---|---|---|
| {{ui:Mesafe}} | Bir çizgi | Uzunluğu | Mesafe 40 |
| {{ui:Mesafe}} | İki nokta | Aralarındaki düz mesafe | Mesafe 40 |
| {{ui:Mesafe}} | Bir nokta ve bir çizgi | Noktadan çizgiye, çizgiye dik mesafe | Mesafe 40 |
| {{ui:Mesafe}} | İki paralel çizgi | Aralarındaki boşluk | Mesafe 40 |
| {{ui:Yatay mesafe}} | İki nokta veya bir çizgi | Yalnızca sağ-sol mesafesi | Yatay mesafe 40 |
| {{ui:Dikey mesafe}} | İki nokta veya bir çizgi | Yalnızca yukarı-aşağı mesafesi | Dikey mesafe 40 |
| {{ui:Yarıçap}} | Bir daire veya yay | Yarıçapı | Yarıçap R10 |
| {{ui:Çap}} | Bir daire veya yay | Çapı | Çap ⌀20 |
| {{ui:Açı}} | Paralel olmayan iki çizgi | Aralarındaki açı, 0 ile 180 derece | Açı 30° |

Ölçülendirme aracıyla PartCraft, neye tıkladığınıza ve sayıyı nereye yerleştirdiğinize göre türü seçer:

| Tıkladığınız | Elde ettiğiniz |
|---|---|
| Bir çizgi | Uzunluğu; eğik bir çizgide, sayı çizginin üstüne veya altına konursa yatay, yanına konursa dikey |
| Bir daire | Çap |
| Bir yay | Yarıçap |
| İki nokta | Mesafe; eğik bir çizgi gibi yatay veya dikey |
| Bir nokta ve bir çizgi | Noktadan çizgiye mesafe |
| İki çizgi | Açı; paralelseler mesafe |
| Bir nokta ve bir daire | Hiçbir şey: "Bu öğeler birlikte ölçülendirilemez." Bunun yerine dairenin merkez noktasına ölçülendirin |

**Ofset** (mesafe olarak gösterilir) Ofset aracıyla yapılır: kopyalanan bir çizgiyi bu mesafede paralel tutar veya kopyalanan bir yayı ya da daireyi, o kadar büyük ya da küçük yarıçapla eşmerkezli tutar. Aynı ofsetin diğer parçaları bir **O** ilişkisi taşır ve tek Ofset ölçüsünü izler. Bkz. [Spline'lar, kırpma, ofset ve diğer eskiz araçları](topic:sketch-tools).

Ölçü değerleri milimetre (veya derece) cinsindendir, asla negatif olmaz. Yarıçap ve çap sıfırdan büyük olmalıdır. Mesafeler için 0 değerine izin verilir: birbirine 0 uzaklıktaki iki nokta çakışıktır.

## Çözümleme nasıl davranır

- **En az hareket.** Bir değer değiştiğinde çözücü geometriyi mümkün olduğunca az hareket ettirir. Hiçbir uç tutulmuyorsa, uzunluğu değişen bir çizgi iki ucundan eşit büyür.
- **Ters dönme yok.** Bir noktadan çizgiye mesafeler, yatay ve dikey mesafeler, açılar ve teğetlik, hangi tarafta oluşturuldularsa o tarafı hatırlar. Bir değeri değiştirmek geometriyi diğer tarafa asla çevirmez.
- **Çelişkiler hiçbir şeyi değiştirmez.** İlişkiler birbiriyle çelişirse eskiz olduğu gibi kalır ve çelişen ilişkiler kırmızıya döner.
- **Gereksiz ilişkiler** (diğerleri tarafından zaten sağlanan) durum çubuğunda adlandırılır ("zaten sağlanıyor. Silin." ) ve özellik yine oluşturulur, ama bir uyarıyla.
- **Teğet birleşimler.** Bir köşe yuvarlatma yayı, çizgileriyle ortak bir uç noktada birleştiğinde, teğetlik orada iyi tanımlı kalan bir biçimde çözülür; böylece eskizde köşe yuvarlatmalar fazla tanımlı görünmez.

## Henüz kullanılamıyor

Doğrusal, eş yarıçaplı ve delme ilişkileri; bir spline üzerindeki nokta; yönlendirilmeyen (referans) ölçüler; koordinat ve yay uzunluğu ölçüleri; ölçüler arasındaki denklemler. Doğrusal çizgiler için Paralel ile 0 mesafeyi birlikte kullanın.
