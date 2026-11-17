---
title: Yüklerden şekil üretme (Üretken)
summary: Tutulan ve yüklenen yüzeyleri, tutulacak ve boş bırakılacak bölgeleri, hedef hacimleri ve malzemeleri seçin; sonuçları üretin: her hacim için bulunan en rijit şekiller, katı olarak yeniden denetlenmiş, bir tabloda karşılaştırılmış ve STL, STEP ya da yeni bir parça olarak indirilmiş.
keywords: üretken tasarım, topoloji optimizasyonu, SIMP, hafifletme, kafes, organik şekil, sonuçlar, karşılaştır, kütle, hacim oranı, koru, içeride tut, engel, dışarıda tut, tasarım alanı, minimum eleman boyutu, STL, 3B baskı
from: 5b91fa8e
---

Üretken çalışma alanı, yüklerin ihtiyaç duymadığı malzemeyi kaldırır. Parçanın nerede tutulduğunu ve yüklendiğini, neyin kalması ve neyin boş kalması gerektiğini belirtirsiniz; PartCraft her hedef hacim için en rijit şekli bulur (**topoloji optimizasyonu**), her birini gerçek malzemeyle katı olarak yeniden denetler ve sonuçları yan yana gösterir. Ağ çekirdeğinin parça için verdiği adlandırılmış yüzeylerde çalışır (bkz. [Ağ çekirdeği](topic:solid-kernels)).

**Çalışma alanı** kutusunda **Üretken**'i seçin. Parçanız değişmez; çalışma parça dosyasının içine kaydedilir.

## Çalışmayı kurun

1. Sağ paneldeki **Yeni çalışma**'ya basın.
2. **Alan**: *Parça olduğu gibi* parçanızdan malzeme kaldırır; *Parçanın etrafında bir kutu* ise **Kutu payı** kadar parçadan büyük bir kutunun içinde bir şekil büyütür.
3. **Eleman boyutu**: otomatik boyut için (yaklaşık 8,000 küp) boş bırakın ya da bir değer yazın. Daha ince boyutlar daha ince şekiller verir ve daha uzun sürer.
4. **Minimum eleman**: bunun yaklaşık iki katından ince elemanlar oluşmaz. Boş, bir buçuk küp demektir.
5. Bir ila altı **Hedef hacim** (şeklin doldurabileceği tasarım alanının payı) ve bir ila dört **Malzeme** işaretleyin. Her hacim bir kez üretilir; her malzeme o şekil üzerinde denetlenir. En rijit şekil malzemeye bağlı değildir, ama kütlesi, gerilmesi ve emniyet katsayısı bağlıdır.

## Hedefler

- {{ui:Sabit}}: tutulan yüzeylere tıklayın. Panelin **Ekle** listesinden bir **Sürtünmesiz yüzey**, bir yüzeyi yalnızca kendi düzlemi boyunca tutar (simetri düzlemleri için kullanın).
- {{ui:Kuvvet}}: yüklenen yüzeylere tıklayın, sonra toplam kuvveti yazın ve panelde yönünü seçin. **Basınç**, **Ekle** listesindedir.
- {{ui:Koru}}: çevresinin katı kalması gereken yüzeylere tıklayın ve ne kadar derin olduğunu (**Şu kadar içinde katı tut**) ayarlayın; örneğin cıvata deliklerinin çevresinde. Sabitlediğiniz ya da yüklediğiniz yüzeyler her zaman korunur.
- {{ui:Engel}}: çevresinin boş kalması gereken yüzeylere tıklayın ve ne kadar uzakta olduğunu (**Şu kadar içinde boş tut**) ayarlayın; bir mil ya da bir takım için yer.

Yüzeylere tıkladıktan sonra **Seçimi bitir** ya da {{key:Esc}} tuşuna basın. Yeşil ve kırmızı tonlar bölgeleri gösterir.

## Üretin ve karşılaştırın

{{ui:Üret}} düğmesine basın. Panel ilerlemeyi ve kalan süreyi gösterir; **Durdur** iptal eder. Her sonuç **Sonuçlar** tablosunda görünür: hedef hacim, malzeme, **kütle**, **en büyük gerilme**, **en büyük yer değiştirme** ve **emniyet katsayısı** (akma ÷ gerilme). Hepsi, bitmiş şeklin gerçek malzemeyle katı küpler olarak yeniden çözülmesinden gelir.

Görünümde görmek için bir sonuç seçin (parça gizlenir; ikisini de görmek için **Parçayı içinden göster**'i işaretleyin). Tablonun altında: kaç yineleme sürdüğü ve yerleşip yerleşmediği, katı olarak rijitliği ile optimize edicinin kendi değeri ve yüzeyi.

## Bir sonucu kullanın

- **STL**: 3B baskıya hazır, kapalı bir üçgen ağ.
- **STEP (yüzeyli)**: düz yüzeylerden oluşan bir STEP katısı olarak aynı yüzey.
- **Yeni parça dosyası**: tek özelliği sonucun içe aktarılmış bir katı olarak yer aldığı bir PartCraft parçası. Üzerinde eskiz yapmak, delik açmak ya da Simülasyon'da denetlemek için açın. Yüzeyli yapıdadır (binlerce düz yüzey), düzenlenebilir bir şekil değildir.
- **Bu parçaya ekle** sonucu parçaya birleştirir; yalnızca bir kutu tasarım alanında açıktır (alan olarak parçanın kendisi seçildiğinde sonuç parçanın içinde yer alır).

**Yeni parça dosyası** ve **Bu parçaya ekle**, bu sürümde henüz yapılmadı: sonuç, kesin bir çekirdek gerektiren içe aktarılmış bir katı olur. STL ve STEP (yüzeyli) indirmeleri çalışır.

## Ne kadar güvenilir

- Verilen hacim için **rijitliği** optimize eder. Henüz gerilme sınırları ve üretim kuralları (çıkıntılar, frezeleme yönleri, minimum delik boyutları) yoktur: seçilen bir sonucu [Simülasyon](topic:simulation) içinde denetleyin ve ayarlayın.
- Bir ya da iki küp genişliğindeki ince elemanlar yaklaşıktır: narin parçalar için daha küçük bir eleman boyutu kullanın.
- Yöntem, bir yoğunluk filtresi, eşik izdüşümü ve optimallik ölçütü güncellemeleriyle SIMP'tir. Bildirilen gerilme ve sapma, sonucun küpler olarak değeridir; bu dürüst ama keskin köşelerde kabadır.

## İlgili

- [Gerilme ve sapmayı denetleyin (Simülasyon)](topic:simulation)
- [Baskı, STEP ve DXF için dışa aktarma](topic:export-files)
- [Henüz yapılmayanlar](topic:not-built-yet)
