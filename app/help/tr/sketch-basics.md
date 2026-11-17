---
title: İlk eskizinizi çizin
summary: Bir düzlemde veya düz bir yüzeyde eskiz açın, çizgi, dikdörtgen, daire, yay, nokta ve merkez çizgileri çizin, bir köşeyi yuvarlatın, seçin, sürükleyin ve silin.
keywords: eskiz, çiz, çizgi, dikdörtgen, daire, yay, nokta, merkez çizgisi, yapı, köşe yuvarlat, eskizde köşe yuvarlatma, köşe yuvarlatma, yakalama, seç, pencere, sürükle, profil
from: 28be7436
---

Her katı bir eskizle başlar: bir düzlemde düz bir çizim. Bu rehber çizim araçlarını anlatır. Eskizi ilişkiler ve ölçülerle sabitlemek [Eskizi tam tanımlama](topic:relations-dimensions) konusunda anlatılır.

## Eskiz başlatın

Eskizi bir temel düzlemde veya parçanın düz herhangi bir yüzeyinde yapabilirsiniz.

1. Nerede eskiz yapacağınızı seçin:
   - bir temel düzlem: geçmişte **Ön düzlem**, **Üst düzlem** veya **Sağ düzlem** öğesine tıklayın ya da görünümde düzleme tıklayın;
   - düz bir yüzey: görünümde yüzeye tıklayın. Tüm yüzey vurgulanır.
2. Araç çubuğunda {{ui:Eskiz}} öğesini seçin veya {{key:S}} tuşuna basın. (Bir yüzey seçiliyken sağ panelde {{ui:Bu yüzeyde eskiz}} öğesini de seçebilirsiniz; bir düzlemle {{ui:Üzerine eskiz}}.)

Görünüm düzleme dik hale gelir, eskiz araçları araç çubuğunda belirir ve Çizgi aracı hazır olur. Hiçbir şey seçili değilken {{ui:Eskiz}} tuşuna basarsanız temel düzlemler gösterilir ve durum çubuğu "Eskiz çizmek için bir düzlem veya düz bir yüzey tıklayın. Esc durdurur." yazar.

:::note
Eğri bir yüzey eskizi taşıyamaz: "Bu yüzey eğri. Eskiz çizmek için düz bir yüzey veya bir düzlem seçin."
:::

**Bir yüzeydeki eskiz o yüzeyi izler.** Yüzey bir eskiz kenarından veya bir ekstrüzyonun ucundan oluşturulduysa, özellik değiştiğinde yeni eskiz de taşınır (daha derin bir oyuk, tabanındaki eskizi de beraberinde götürür). Panel yüzeyin "Seçildiği yerde sabit" olduğunu söylüyorsa eskiz, yüzeyin o anki konumunda kalır.

## Çizim araçları

Her aracın bir araç çubuğu düğmesi ve bir tuşu vardır. Aynı düğmeyi tekrar seçin, {{key:S}} tuşuna basın veya Seç'e dönmek için {{key:Esc}} tuşuna basın.

| Araç | Tuş | Nasıl çizilir |
|---|---|---|
| {{ui:Çizgi}} | {{key:L}} | Başlangıca tıklayın, sonra her sonraki noktaya tıklayın. Çizgiler uç uca zincirlenir. Zinciri {{key:Esc}}, {{key:Enter}}, sağ tıklama veya çift tıklama ile bitirin. Var olan bir noktaya tıklamak da zinciri bitirir |
| {{ui:Dikdörtgen}} | {{key:R}} | Bir köşeye, sonra karşı köşeye tıklayın. Köşelerde birleşen, ikisi yatay ikisi dikey dört çizgi elde edersiniz |
| {{ui:Daire}} | {{key:C}} | Merkeze, sonra çember üzerinde bir noktaya tıklayın |
| {{ui:Yay}} | {{key:A}} | Merkeze, sonra başlangıca, sonra bitişe tıklayın. Yay, işaretçiyi merkezin etrafında hareket ettirdiğiniz yönde çizilir |
| {{ui:Nokta}} | {{key:P}} | Tıklayın. Tek başına bir nokta, {{ui:Delik}} için bir delik merkezi işaretler |
| {{ui:Merkez çizgisi}} | {{key:N}} | Çizgi gibi, bir seferde bir parça. Kesikli çizilir; yapı geometrisidir, döndürme ekseni veya referans olarak kullanılır |
| {{ui:Köşe yuvarlat}} | {{key:F}} | İki çizginin buluştuğu bir köşeye tıklayın, yarıçapı yazın ve {{key:Enter}} tuşuna basın |
| {{ui:Spline}} | {{key:B}} | Eğrinin geçtiği noktalara tıklayın; {{key:Enter}} bitirir, ilk noktaya tıklamak eğriyi kapatır. Bkz. [Spline'lar, kırpma, ofset ve diğer eskiz araçları](topic:sketch-tools) |
| {{ui:Kırp}} | {{key:T}} | En yakın kesişimlere kadar kaldırılacak eğri parçasına tıklayın |
| {{ui:Ölçülendirme}} | {{key:D}} | Bkz. [Eskizi tam tanımlama](topic:relations-dimensions) |

Çizerken işaretçinin yanındaki küçük bir kutu uzunluğu, boyutu, çapı veya yarıçapı gösterir.

### Çizerken boyutu yazın

Bir çizginin, dikdörtgenin, dairenin veya yayın ilk tıklamasından sonra, tıklamak yerine boyutu yazabilirsiniz. Bir sayı yazmak, işaretçinin yanındaki kutuyu o sayıyla açar:

| Araç | Kutular ({{key:Tab}} sonrakine geçer) | {{key:Enter}} tuşunda ne olur |
|---|---|---|
| {{ui:Çizgi}}, {{ui:Merkez çizgisi}} | Uzunluk, sonra eskizin X ekseninden Açı (°) | Çizgi o uzunlukta çizilir, işaretçiye doğru veya yazdığınız açıda; zincir ucundan devam eder |
| {{ui:Dikdörtgen}} | Genişlik, sonra Yükseklik | Dikdörtgen ilk köşeden işaretçiye doğru çizilir; yazmadığınız boyut işaretçiden gelir |
| {{ui:Daire}} | Çap | Daire o çapta çizilir |
| {{ui:Yay}} | Merkezden sonra Yarıçap, başlangıçtan sonra Yay açısı (°) | Başlangıç merkezden o kadar uzaklaşır; sonra yay, işaretçiyi hareket ettirdiğiniz yönde o kadar döner |

Yazdığınız her boyut aynı adımda bir **yönlendiren ölçülendirme** olur, böylece eskiz ölçülendirilmiş çıkar: {{key:Mod+Z}} şekli ve ölçülendirmelerini birlikte geri alır. {{key:Enter}} yerine tıklamak, yazdıklarınızı tutar ve kalanı tıklamadan alır. {{key:Esc}} kutuyu kapatır ve işaretçiye döner.

Yalnızca tıklamayla çizmek istiyorsanız bunu {{ui:Ayarlar}} › {{ui:PartCraft}} › **Çizerken ölçülendir** bölümünden kapatın. Bkz. [PartCraft ayarları](topic:settings).

Araç çubuğunun sonundaki {{ui:Daha fazla}}; kontrol noktalı spline'ı, {{ui:Uzat}}, {{ui:Ofset}}, {{ui:Ayna}}, {{ui:Çokgen}}, {{ui:Yuva}}, eskiz örüntülerini ve {{ui:Kenarı projeksiyonla al}} öğesini barındırır: bkz. [Spline'lar, kırpma, ofset ve diğer eskiz araçları](topic:sketch-tools).

### Yakalama

Yakalama, ilişkileri sizin yerinize ekler; böylece eskiz taşındığında birlikte kalır:

- Bir **uç nokta veya orijin** üzerinde küçük bir kare görünür. Yeni nokta onunla çakışık yapılır.
- Bir **çizgi, daire veya yay** üzerinde küçük bir artı işareti görünür. Yeni nokta o eğrinin üzerine yerleştirilir.
- Yatayına veya dikeyine 3 dereceden yakın bir çizgi o konuma yakalanır ve yatay veya dikey ilişki alır. Etiket "H" veya "V" gösterir.

Yakalamadan kaçınmak için noktaya veya eğriye daha uzaktan tıklayabilmek üzere yakınlaştırın.

## Bir köşeyi yuvarlatın

1. {{key:F}} tuşuna basın veya {{ui:Köşe yuvarlat}} öğesini seçin.
2. İki çizginin buluştuğu köşe noktasına tıklayın.
3. Önerilen yarıçapı gösteren bir kutu açılır. Yarıçapı yazın ve {{key:Enter}} tuşuna basın.

Her iki çizgi kırpılır ve bir yarıçap ölçülendirmeli teğet yay ile birleştirilir. Görebileceğiniz iletiler: "Köşe yuvarlatma, tam olarak iki çizginin buluştuğu bir köşe gerektirir." ve "Bu yarıçap bu çizgiler için çok büyük."

:::tip
Eskizde köşe yuvarlatma, profilin bir köşesini yuvarlar; böylece ekstrüzyon yuvarlatılmış dikey kenarlar alır. Katının kendi kenarlarını yuvarlatmak için (örneğin bir plakanın üst kenarları) parçadaki {{ui:Köşe yuvarlat}} özelliğini kullanın: bkz. [Yuvarlat, pah kır ve içini boşalt](topic:fillet-chamfer-shell). Eskizde araç çubuğundaki Köşe yuvarlat eskiz aracıdır; parçada ise bir özelliktir.
:::

## Yapı geometrisi

Yapı çizgileri, daireleri ve yayları kesikli ve gridir. Eskizi yönlendirirler, ama ekstrüde veya döndürülen profilin parçası değildirler.

1. Çizgileri, daireleri veya yayları seçin.
2. {{key:Q}} tuşuna basın veya {{ui:Yapı}} öğesini seçin. Geri almak için tekrar basın.

## Seçin, sürükleyin ve silin

Seçim için {{key:S}} tuşuna basın ({{key:Esc}} ile hiçbir araç etkin olmayana kadar basmak da aynı işi görür).

- Bir noktayı, çizgiyi, daireyi, yayı, ilişki simgesini veya ölçülendirmeyi seçmek için tıklayın. {{key:Shift}}+tıklama seçime ekler veya seçimden çıkarır. Windows ve Linux'ta {{key:Ctrl}}+tıklama aynısını yapar; Mac'te ⌘+tıklama.
- Boş alanda sürükleyerek bir pencere çizin: tamamen içinde kalan her şey seçilir.
- Bir noktayı veya çizgiyi taşımak için sürükleyin. Çözücü taşınırken her ilişkiyi ve ölçülendirmeyi korur; yani yalnızca serbest geometri hareket eder. Bir dairenin kenarını sürükleyerek yarıçapını değiştirin.
- Etiketi taşımak için bir ölçülendirmenin sayısını sürükleyin.
- {{key:Delete}} veya {{key:Backspace}} tuşuna basın ya da sağ panelde {{ui:Sil}} öğesini seçin: seçimi siler. Geometriyi silmek, üzerindeki ilişkileri de siler.

## Eskizde yakınlaştırma ve kaydırma

- Tekerleği çevirerek işaretçinin olduğu yere yakınlaştırın.
- Kaydırmak için orta veya sağ düğmeyle sürükleyin.
- Araç çubuğundaki veya sağ paneldeki {{ui:Sığdır}}, eskizi görünüme sığdırır. Eskizde {{key:F}} tuşu Köşe yuvarlat aracıdır, Sığdır değil.

## Eskizi kapatın

Araç çubuğunda {{ui:Çık}} öğesini, sağ panelde {{ui:Eskizden çık}} öğesini seçin ya da eskiz kapanana kadar {{key:Esc}} tuşuna basın. Her {{key:Esc}} önce devam eden işlemi iptal eder, sonra Seç'e döner, sonra seçimi temizler; bir sonrakisi eskizi kapatır.

Eskiz seçili kalır, böylece sonraki {{ui:Ekstrüzyon}} veya {{ui:Döndürme}} onu kullanır.

## İyi bir profil nasıl olur

{{ui:Ekstrüzyon}} ve {{ui:Döndürme}}, eskizin katı (yapı olmayan) çizgilerinin, dairelerinin, yaylarının ve spline'larının **her kapalı döngüsünü** kullanır. Döngülerin içindeki döngüler delik olur.

- Her uç, tam olarak bir başka uçla birleşmelidir. "Profil açık: (12.5, 40) konumundaki uç hiçbir şeye bağlı değil." iletisi yeri adlandırır.
- Bir noktada üç uç birleşmemelidir: "Profil (0, 20) konumunda dallanıyor: orada ikiden fazla uç birleşiyor."
- Noktalar ve yapı geometrisi profil tarafından yok sayılır.

Sonraki adım: [Eskizi ilişkiler ve ölçülerle tam tanımlama](topic:relations-dimensions).

## Fotoğraftan bir eskiz

**Özellikler › Daha fazla › Fotoğraftan eskiz…** (veya özellik ağacı şeridindeki Eskiz grubu), düz bir zemin üzerindeki düz bir parçanın fotoğrafını (dış hattını ve deliklerini) ya da bir kalem çizimini çizgiler, yaylar ve dairelerden oluşan bir eskize izler. Eskizin doğru boyutta olması için bir uzunluk belirtin (genişlik, yükseklik veya en uzun kenar), bulunanları önizlemede kontrol edin ve **Eskizi oluştur** seçin; aynı geri alma adımında ekstrüde de edebilir. İzleme bu bilgisayarda yapılır. Köşe yarıçapları yaklaşık %5 içinde gelir, bir iki piksellik ayrıntılar kaybolur; eğik çekilmiş veya parça üzerinde gölge olan fotoğraflar düzeltilmez: parçayı karşıdan, dengeli ışıkla fotoğraflayın.
