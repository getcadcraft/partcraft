---
title: Serbest biçimli yüzeyler (NURBS)
summary: Parçanın yanında pürüzsüz eğriler ve yüzeyler (loft, süpürme, eğri ağları, dört kenarlı yamalar, karışımlar, kırpmalar); G0, G1 ve G2 sürekliliği kesin yüzeylerde ölçülür; birleştirme, çıkarma ve kesişimli katılar parçaya dönüştürülür; zebra ve eğrilik görünümleri; bir taramaya uydurulan yüzeyler, hata ölçümüyle; STEP ve IGES dosyaları. Parça dosyasında saklanır.
keywords: nurbs, tarama, ters mühendislik, uydurma, örgüden yüzeye, nokta bulutu, stl, kırpma, kırpılmış, delik, kesme, katı, katılar, boolean, birleşim, çıkarma, kesişim, fark, dikiş, kapalı, dönüştürme, serbest biçim, yüzey, yüzeyler, b-spline, bspline, eğri, spline, loft, süpürme, ray, ağ, coons, yama, karışım, eşleşme, süreklilik, g0, g1, g2, teğet, eğrilik, zebra, kontrol noktaları, düğümler, derece, step, iges, class a, gövde, düzeltme
from: 64ed5196
---

**Yüzeyler** çalışma alanı, ürün kabukları, otomobil gövdeleri ve tekne gövdeleri gibi işlerde kullanılan türde pürüzsüz eğriler ve yüzeyler üretir: NURBS, diğer yüzey modelleyicilerinin kullandığı matematiğin aynısı. Her şey, gördüğünüz üçgenlerde değil, kesin yüzeylerde ölçülür. Boyutlar, PartCraft'ın geri kalanında olduğu gibi milimetredir.

**Çalışma alanı** kutusundan **Yüzeyler**'i seçin. Araç çubuğunda {{ui:Eğri}}, {{ui:Loft}}, {{ui:Süpürme}}, {{ui:Eşleşme}} ve {{ui:Zebra}} bulunur; her komut sağdaki panelde yer alır. Bir komut neye ihtiyacı olduğunu söyler: görünümde eğrilere ya da yüzeylere tıklayın (bir kenar ya da uç istediğinde ona yakın) ya da listeden seçin; noktaları yazın ya da parçanın yüzlerinde tıklayın (parçanın dışına denk gelirlerse zemin düzlemine düşerler), sonra Enter'a basın.

Eğriler ve yüzeyler parça dosyasında katının yanında saklanır. Parçanın özelliklerini değiştirmezler: panelin kendi **Geri al** ve **Yinele** düğmeleri vardır, komut başına bir adım.

## Eğriler

- **Noktalardan eğri** tıkladığınız her noktadan geçer. **Kontrol noktalarından eğri** bunun yerine bir kafes noktayı izler.
- **Düğüm ekle**, **Derecesini yükselt** ve **Derecesini düşür** bir eğriyi taşımadan tarifini değiştirir (düşürme, eğri toleranstan fazla hareket edecekse reddedilir). **Eğriyi yeniden oluştur** ona yeni bir kontrol noktası sayısı verir ve ne kadar hareket ettiğini söyler.
- **Eğri eşleştir**, bir eğrinin ucunu başka bir eğrinin ucuna G0 (dokunma), G1 (aynı yön) ya da G2 (ayrıca aynı eğrilik) ile eşleştirir. **Eğri karıştır**, iki uç arasına G1 ya da G2 ile yeni bir eğri ekler.

## Yüzeyler

- **Loft** iki ya da daha fazla eğriden geçer, **Kurallı yüzey** iki eğri arasında, **Eğriden ekstrüzyon**, **Eğriden döndürme**.
- **Bir ray boyunca süpürme** bir profili bükmeden bir yol boyunca taşır; **İki ray boyunca süpürme** profilin uçlarını iki rayda tutar. Süpürmeler uydurulur: sonuç, gerçek süpürmeye ne kadar yakın kaldığını söyler.
- **Eğri ağından yüzey** bir ızgara eğriden geçer (her biri diğerlerini birer kez keser). **Dört kenardan yama** köşelerinde buluşan dört eğriyi doldurur.
- **Yüzey eşleştir** bir yüzey kenarını komşusuyla G0, G1 ya da G2 ile buluşturur; **Yüzey karıştır** iki kenar arasına bir yüzey ekler.
- **Yüzey ofseti**, **Yüzeyi uzat** (yüzey gittiği şekilde devam eder), **Yüzeyi yeniden oluştur**.

## Kaliteyi denetleme

**Ortak kenarlar** tablosu, iki yüzeyin paylaştığı her kenarı, aralığı (mm), aralarındaki açıyı (°) ve eğrilik sıçramasını (1/mm) ve bunun G0, G1 ya da G2 olup olmadığını listeler. İstediğinizden kötü bir kenar, bir **Eşleşme** düzeltmesiyle **Sorunlar**da görünür. **Zebra** çizgileri ve **eğrilik** renkleri kesin yüzeyden gelir: bir kenar boyunca kesintisiz devam eden çizgiler G1 anlamına gelir; genişliğini de koruyan çizgiler G2 anlamına gelir.

G0–G2 her kenar başına 33 noktada ölçülür. **G3 ve "class A" kalitesi ölçülmez** ve iddia edilmez.

## Yüzeyi kırpma

**Kırp** grubu bir yüzeyi şeklini değiştirmeden keser: yüzey tüm kontrol noktalarını korur ve yalnızca dış hattın içindeki kısım gösterilir, sayılır ve yazılır. **Dikdörtgene kırp** ve **Daireyle kırp**, yüzeyin her yöndeki bir payında (0 ile 1 arası) çalışır, bu yüzden görünümde seçim gerektirmezler; **Eğriyle kırp** yüzey üzerinde duran kapalı bir eğri alır (yüzeye yansıtılır ve açıksa ya da toleranstan fazla uzaktaysa sözel olarak reddedilir). Dış hattın içini kaldırmak için **Delik aç** kutusunu işaretleyin; yalnızca içi tutmak için boş bırakın. Bir yüzeyde bir tutulan dış hat ve istediğiniz kadar delik olabilir; başka bir dış hatla kesişen bir dış hat reddedilir. **Kırpmayı kaldır** tüm yüzeyi yeniden gösterir. Panelin Geri al'ı bir kırpmayı diğer adımlar gibi geri alır.

STEP kırpmayı yüzün sınırları olarak, IGES ise kırpılmış yüzey olarak (varlık 144) taşır; ikisi de geri okur.

## Katılar ve Boolean'lar

**Katılar** grubu yüzeyleri kapalı gövdelere çevirir ve birleştirir. Burada bir katı, panelin kendi yüzeylerinden oluşan ve birlikte bir hacmi kapatan bir kümedir; yüzleri kendi kırpmalarıyla birlikte kesin NURBS yüzeyler olarak kalır.

- **Kutu katısı**, **Silindir katısı** ve **Küre katısı** yazılan boyutlardan (mm) bir tane oluşturur: altı düz yüzlü bir kutu, yuvarlak bir yan ve iki düz uçtan oluşan, daireye kırpılmış bir silindir, tek bir döndürülmüş yüzeyden bir küre.
- **Yüzeylerden katı** kendi yaptığınız yüzeyleri gruplar. Onları seçin ya da hiçbirini seçmeyerek henüz bir katıda olmayan gösterilen her yüzeyi kullanın. Tolerans içinde birbirine dikilirler: kapanmazlarsa hiçbir şey değişmez ve panel kaç kenarın açık kaldığını ve ne kadar yakın buluşmaları gerektiğini söyler.
- **Birleşim**, **Çıkar** (ikinci katı birinciden alınır) ve **Kesişim** (yalnızca ikisinin ortak olan kısmı) iki katı alır: görünümde her birinin bir yüzüne tıklayın ya da **Katılar** listesinde **Seç**'e basın. **İki katıyı tut** kutusunu işaretlerseniz onlar sonucun yanında kalır.

Bir Boolean her yüzü kendi kesin yüzeyinde tutar ve onu kesişim boyunca yeni kırpma dış hatlarıyla keser. Sonuç satırı ölçülen sayıları verir: katı motorunun noktalarının kesin yüzeylere oturması için ne kadar taşınması gerektiği (asla toleranstan fazla değil), kesişim noktalarının iki yüzeye ne kadar yakın olduğu (genellikle milimetrenin birkaç milyonda biri), hacim ve yeni yüzlerin kesin yüzeylerinden yeniden dikildiğinde yeniden kapanıp kapanmadığı. Hacimler toleransta (siz başka bir değer seçmediyseniz 0,05 mm) üçgenler üzerinde ölçülür; bu yüzden bir kürenin ya da silindirin hacmi kesin hacmin biraz altında okunur: daha küçük bir tolerans daha yakın sonuç verir. Temiz yapılamayan bir Boolean (katılar hiçbir şey paylaşmıyorsa, bir dış hat kendini kesecekse) sözel olarak reddedilir ve hiçbir şeyi değiştirmez. Bir Boolean, panelin **Geri al**'ında bir adımdır.

**Katılar** listesinde **Grubu çöz** yüzleri düz yüzeyler olarak tutar; çöp kutusu katıyı ve yüzlerini kaldırır.

## Köşe yuvarlatma ve kalınlaştırma

**Yüzeyler arası köşe yuvarlat** tek bir katının iki yüzünün buluştuğu kenarı yuvarlar: iki yüzü seçin (görünümde ya da listedeki **Seç** ile), **yarıçapı** ve kenar boyunca değişen bir yarıçap için **uçtaki yarıçapı** yazın (0 tek bir yarıçap tutar). Bu yarıçapta bir top, kenar boyunca her iki yüzü de değecek şekilde yuvarlanır; köşe yuvarlatma, topun her noktada geriye bıraktığı kesin dairesel yaydır, tek bir yüzeye birleştirilmiştir ve iki yüz topun dokunduğu yerde kırpılır. Dış bir kenar malzeme kaybeder, iç bir köşe kazanır. Sonuç satırı ölçülenleri verir: köşe yuvarlatma yüzeyinin, oluşturulduğu noktalar arasında yuvarlanan topa ne kadar uzak olduğu (toleransın dörtte biri içinde kalana kadar nokta eklenir), dokunma çizgileri boyunca köşe yuvarlatmanın her yüzle yaptığı en büyük açı ve bir Birleşim ile aynı sayılar. Sığmayan bir yarıçap (top bir yüzeyden çıkacaksa ya da bir yüz yarıçaptan daha sıkı kıvrılıyorsa) yüzü adlandırılarak reddedilir ve hiçbir şey değişmez.

**Birden çok kenarı yuvarlat** tek adımda birçok kenarı yuvarlar: ilk kenarın iki yüzünü, sonra sonraki kenarın iki yüzünü seçin ve böyle devam edin (bir yüz birkaç çiftte olabilir, örneğin bir kutunun üst yüzü dördünde); tüm kenarlar yazdığınız yarıçapı alır. Her yuvarlama katı olduğu haliyle hesaplanır, sonra birbiri ardına kesilirler; bu yüzden sıra önemli değildir. İki yuvarlatılmış kenarın keskin kalan diğer kenarlarla bir köşede buluştuğu yerde iki köşe yuvarlatma kesişim eğrisi boyunca birbirine girer (bir kırışıklık). Üç düz yüzün dik birbirine değen üç yuvarlak dış kenarının tek bir yarıçapla buluştuğu yerde köşe, üç köşe yuvarlatmaya teğet tek bir **küre yamasıdır** (köşeyi kırışık olarak almak için **Köşeler** kutusunu kaldırın); her iki ucu da bu tür köşe olan bir kenarın uzunluğu en az yarıçapın iki katı olmalıdır. Sonuç satırı kaç kenarın yuvarlandığını ve köşelerin nasıl çıktığını söyler. İç kenarlar da birlikte yuvarlanabilir, ama tekrar kapanmayan bir sonuç yalnızca bildirilir (satır bunu söyler), bu yüzden kontrol edin.

**Katıya kalınlaştır** bir yüzeye kalınlık verir: onu seçin, **kalınlığı** yazın ve diğer yöne büyütmek için **Diğer taraf** kutusunu işaretleyin. Ofset yüz yüzeye uydurulur ve ona karşı ölçülür (sonuç satırı kalınlıktan en büyük farkı verir); duvarlar her kenarı ve her kırpma dış hattını izler. Yüzey o taraftaki kalınlıktan daha sıkı kıvrılıyorsa ya da yüzeyin başka bir kısmı kalınlıktan daha yakınsa, yüzey ve yer adlandırılarak reddedilir ve hiçbir şey değişmez.

## Katıyı parçaya dönüştürme

**Dönüştür** (Yüzeyler araç çubuğunda) ya da **Katılar** listesindeki **Parçaya dönüştür**, katıyı, açılan bir STL'in olduğu gibi parçanın bir gövdesi yapar: katıyı seçin, parçaya **eklensin**, ondan **kesilsin** ya da onunla **kesişsin** mi ve toleransı (üçgenlerin kesin yüzeylerden ne kadar uzak olabileceği) seçin. Parçanın Geri al'ında bir adımdır ve özellik listesinde katının adını taşıyan bir içe aktarma olarak görünür. Parça üçgenleri tutar, bu yüzden yüzeyler olmadan açılır ve yeniden oluşur; kesin katı Yüzeyler'de kalır, bu yüzden değişiklikten sonra yeniden dönüştürebilirsiniz.

## Dosyalar

**STEP** (AP242) ya da **IGES**'i eğriler ve yüzeyler tam olduğu gibi (B-spline eğriler ve yüzeyler, üçgene çevrilmeden) dışa aktarın. Her yüzey kendi kırpmasıyla kendi yüzü olur; bir katı, diğer CAD programlarının beklediği gibi her kenarı iki yüzüyle paylaşan tek bir kapalı kabuk olarak yazılır (durum satırı kaç katının bu şekilde çıktığını söyler). IGES'te aynı katı tek bir manifold katı B-rep'idir (kapalı kabuk 514 üzerinde varlık 186, yüzler 510, döngüler 508, tek bir kenar listesi 504 ve tek bir köşe listesi 502); yüzleri kenar kenar eşleşmeyen bir katı ayrı yüzler olarak yazılır ve satır bunu söyler. **İçe aktar…** bu tür katıyı STEP'ten ve IGES'ten bir katı olarak geri okur.

## Gövde hatlarını düzeltme

**Düzelt** (Yüzeyler araç çubuğunda) her eğriyi kesin şekli üzerinde ölçer (**dönüm noktalarını**, yani bir yönde bükülmekten diğerine geçtiği yeri; en büyük eğriliği; düğümlerindeki eğrilik sıçramalarını ve pürüzlülüğünü) ve dönüm noktası ya da sıçrama olanları, verdiğiniz toleransta kalan en az kontrol noktasıyla ve dönüm noktası eklemeden yeniden oluşturur. İstasyonları, su hatlarını ve kıç kesitlerini eğri olarak çizin, düzeltin, sonra gövdeyi istasyonlardan **Loft** ile oluşturun ve **Zebra** ile denetleyin. Düzeltilmemiş eğriler de **Sorunlar**da **Bu eğriyi düzelt** düzeltmesiyle görünür. Yön değiştirmesi istenen bir çizgi (S şekilli bir kesit) o tek dönüm noktasını korur. Geminin deplasmanı, merkezleri ve doğrultucu kolları katıdan gelir: hidrostatik aracına bakın.

## Bir taramadan yüzeyler (ters mühendislik)

Taranmış örgüyü tutan parçayı açın (açılmış bir STL ya da parçaya dönüştürülmüş bir gövde), **Çalışma alanı** kutusundan **Yüzeyler**'i seçin ve **Tarama** grubunda **Yüzeyleri taramaya uydur**'u seçin; parçanın oluşturulmuş örgüsü taramadır. Araç **düzlemleri**, **silindirleri**, **küreleri** ve **konileri** arar (bir işlenmiş parçanın yapıldığı kesin yüzeyler; her satır bulduğu yarıçapı ya da yarım açıyı gösterir); **yuvarlatmaları** bulur (yuvarlatılmış kenarlar ve köşeler: iki ya da daha fazla başka yüze teğet uzanan küçük bir silindir ya da küre, yarıçapı ve birleştirdiği yüzlerle birlikte); **kenar yuvarlatmalarını** (bir torus: düz bir yüzün bir silindir ya da koniyle buluştuğu yuvarlak kenar, yarıçapı ve halka yarıçapıyla birlikte) ve **değişken yuvarlatmaları** (boyunca yarıçapı değişen bir kenar, her ucundaki yarıçapla birlikte) bulur; pürüzsüz ve hafif eğri bir parçaya **tek bir serbest biçimli yama** uydurur ve her yüzü, geldiği tarama parçasının dış hattına kadar keser; delikler ve köşeler korunur. Seçenekler: **tolerans** (bir tarama noktasının bir düzlemden ya da silindirden ne kadar uzakta olup hâlâ ona ait sayılacağı, mm cinsinden ve serbest biçimli yama için hedef), **en küçük parça** (yüzey alanının bir payı) ve **en fazla yüz**. Aynı tarama ve seçenekler her zaman aynı yüzleri verir.

Sonuç bir tablodur, her yüz için bir satır: türü, kaynaklandığı üçgen sayısı ve **taramadan yüze ölçülen** hata (rms, en büyüğü ve toleransın içindeki noktaların payı). Ölçülen noktalar taramanın köşeleri ve her üçgenin orta noktasıdır. Hata tersinden ölçülmez (yüzden taramaya), bu yüzden taramanın ötesine uzanan bir yüz görünmez. Tablonun altındaki not, ne kadar alanın uydurmak için çok küçük olduğunu da söyler. Görünümde tarama noktaları **sapma haritası** ile renklendirilir: yüzde mavi, tolerans yarısında yeşil, toleransta ya da üzerinde kırmızı (sapma haritasını gizlemek için **Sapma haritasını göster**'i kaldırın). Kendi üzerine katlanan parçalar (örneğin serbest biçimli yamalarla uydurulmuş kapalı bir boru) uydurulmamış olarak listelenir, asla tek bir yüzeye zorlanmaz.

**Yüzeyleri bir katıya dik**, katıda olmayan gösterilen her yüzeyi tek bir kapalı katıya diker. Tarama yüzleri yalnızca taramanın kendi hatası içinde buluşur, bu yüzden kapanan en küçük birleşme mesafesini dener (sizin ayarladığınız **dikiş mesafesi**'nden asla fazla değil) ve yüzler kapanmazsa sözel olarak reddeder. Hiçbir boşluğu asla yamamaz. Köşeleri yuvarlatılmış bir kutu, yuvarlatmaları ayrı yüzler olarak bulunduğunda dikilir; kapanan birleşme mesafesi sonuçta yazılır. Katı ardından Birleşim, Çıkar, Kesişim ve **Parçaya dönüştür** ile çalışır.

Yapmadıkları: bir **kenar yuvarlatması** (torus) yalnızca zaten bulunmuş bir silindir ya da koninin ekseni etrafında aranır; bir **değişken yuvarlatma** yalnızca oldukça düz bir kenar boyunca aranır (kesitleri bir yöne dik kesilir); başka yerlerde pürüzsüz yeterliyse serbest biçimli yama olarak çıkar, değilse dışarıda bırakılır; küreler, koniler ve yuvarlatmalar rastgele örnekleme ile bulunur, bu yüzden çok küçük (birkaç üçgenlik) biri kaçabilir; sapma haritası taramadan yüzlere mesafeyi gösterir, tersini değil; çok büyük taramalar (300.000 üçgenin üzerinde) burada reddedilir. Tam dönüşlü bir silindirin yüzleri deliklerin etrafından kesilir, dikiş hiçbir deliğin olmadığı yere konur. Herhangi bir yüzü, taramanıza karşı kontrol etmeden güvenmeyin.

## Henüz yapılmadı

Kesin yüzeylerin köşelerinde ya da farklı yarıçaplarla buluşan kenarların yuvarlatılması (bir köşe karışımı); buluşmayan yüzler arasında bir yuvarlatma; eğik ya da eğri bir yüzde biten bir iç yuvarlatma; Boolean'lar ve köşe yuvarlatmaları üçgen olmadan yüzeyler üzerinde hesaplanan (burada katı motoru tolerans içinde üçgenler üzerinde çalışır ve her nokta sonra kesin yüzeylere geri konur); yüzeyler değiştiğinde onu izleyen parçaya dönüştürülmüş bir gövde; bir Boolean dışında bir yüzeyi başka bir yüzeyle kırpmak; dörtten fazla kenarlı delikleri doldurmak; eğrileri yüzeylere yansıtmak.
