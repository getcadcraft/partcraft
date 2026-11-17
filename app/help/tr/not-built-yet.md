---
title: Henüz yapılmayan özellikler
summary: Bu PartCraft sürümünün henüz yapmadıkları, bükülü süpürmelerden inç gösterimine, çizim ölçülendirmelerinden alt montajlara kadar; bugün bunların yerine ne yapılacağıyla birlikte.
keywords: eksik, henüz değil, sınırlar, sınırlılıklar, yol haritası, kesin çekirdek, köşe yuvarlatma, pah, kabuk, süpürme, loft, STEP içe aktarma, simülasyon, üretim, bükülü süpürme, loft uç teğetliği, yüz yuvarlatma, denklemler, inç, çizim ölçülendirmeleri, alt montajlar, bulut, tablet, telefon
from: 9b868162
---

PartCraft erken bir sürüm. Bu sayfa, aramayasın diye, bu sürümün yapmadığı şeyleri ve bugün bunların yerine ne yapılacağını listeler. Burada hiçbir şeyin bir tarihi yok.

## Kesin çekirdek gerektirir

Bu sürüm her parçayı örgü çekirdeğiyle ([Örgü çekirdeği](topic:solid-kernels)) oluşturur. Aşağıdakilerin tümü henüz bu sürümde olmayan bir kesin geometri çekirdeği gerektirir. Bu özelliklerle kaydedilmiş parçalar yine açılır: özellikler geçmişte kalır, yapılmadı olarak işaretlenir ve kaydederken korunur.

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| {{ui:Köşe yuvarlat}} ve {{ui:Pah kır}} yuvarlak kenarlarda; kenar boyunca yarıçapı değişen köşe yuvarlatmalar; birleştikleri yerde düzgünce karışan yuvarlatmalar (örgü çekirdeği onları köşeden keser) | Köşe yuvarlat ve Pah kır düz yüzeyler arasındaki düz kenarlarda çalışır; diğer köşeleri ekstrüzyondan önce eskizde yuvarlatın ({{ui:Köşe yuvarlat}} eskizde, {{key:F}}) |
| {{ui:Kabuk}} eğri yüzeyleri açarken; farklı kalınlıklarda duvarlar | Düz yüzeyleri açın; bir duvarın daha kalın olması gereken yerlerde ekstrüzyonlarla malzeme ekleyin |
| Eğri yüzeylerde {{ui:Süpürme}}, {{ui:Loft}}, {{ui:Eğim}}; bir yüzeye, sonraki yüzeye ya da bir köşeye kadar ekstrüzyon; konik ekstrüzyonlar | Ekstrüde edin ya da döndürün, gerektiğinde adım adım; ölçtüğünüz bir derinliğe ekstrüde edin |
| {{ui:Takviye}}, {{ui:Taban flanşı}}, {{ui:Kenar flanşı}} ve açınımlar | Levhayı ya da takviyenin profilini ekstrüde edin |
| Yüzeyler: bir {{ui:Form}}'u parçaya bitirmek, {{ui:Yama}}, {{ui:Yüzey loftu}}, {{ui:Gordon yüzeyi}}, {{ui:Dikiş}}, {{ui:Kalınlaştır}}, {{ui:Ofset yüzeyi}}, {{ui:Yüzeyi uzat}}, {{ui:Yüzeyi kırp}} | Kullanılamaz |
| Birden çok gövde: {{ui:Birleştir}}, {{ui:Gövdeyi taşı}}, {{ui:Gövdeyi ölçekle}}, {{ui:Yol örüntüsü}}, yeni gövde oluşturan özellikler | Tek katı; örüntüler ve ayna özellikleri kopyalar |
| Yüzeylerdeki eskizler, düzlemler, eksenler ve noktalar; yalnızca kesin çekirdeğin bulabildiği yüzeyler (bir yuvarlatmayla oluşan yüzey, bir delik duvarı, içe aktarılmış bir katının yüzü) | Temel düzlemlere, referans düzlemlerine ve ekstrüzyonların ile döndürmelerin düz yüzlerine eskiz çizin |
| Bir üretken tasarım sonucu parça olarak açılmış ya da bir parçaya eklenmiş (düzenlenebilir bir içe aktarılmış katı olur) | Sonucu STL ya da STEP olarak indirin |
| Açılan bir STEP dosyasının eğri yüzlerini kesin yüzeyler olarak düzenlemek; bir STEP dosyasından spline, süpürülmüş ve döndürülmüş yüzlerin kesin STEP'i, spline kenarlar, modellenmiş dişler, STL / OBJ / 3MF gövdeleri ve montajlar; diğer parça modelleyicileri için STEP | {{ui:Aç}}, STEP'i üçgenler olarak okur ve dosyanın düz yüzlerini, silindirlerini, konilerini, küreleri ve torusları dışa aktarma için korur ([STEP dosyası aç](topic:import-step)); {{ui:Dışa aktar}} › {{ui:STEP AP242 (kesin katı)}} her analitik yüzü kesin olarak yazar ve bunları yüzler olarak korur ([Dışa aktar](topic:export-files#for-other-cad-programs-step)); başka bir parça modelleyicisi için makro yazmaya devam eder |
| Çizim görünümlerinde gerçek yaylar | Görünümler ve kesit görünümleri yüzlerden çizilir |
| Kesin hacimler, alanlar ve mesafeler | {{ui:Ölç}} yüzlü katının sayılarını verir; yuvarlak parçalarda biraz düşük çıkar; daha ince bir **Eğriler** ayarı onları yaklaştırır |

Aşağıdaki tablolardaki bazı satırlar bu özelliklerden birini, bir şeyi çevirmenin yolu olarak önerir. Bu öneriler kesin çekirdek geri geldiğinde geçerlidir.

## Özellikler

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| Yüz yuvarlatmaları, tam yuvarlatmalar, bir kenar boyunca noktalarda ayarlanmış yarıçaplı yuvarlatmalar | Sabit ya da doğrusal değişken {{ui:Köşe yuvarlat}}; birden çok köşe yuvarlatma özelliği |
| Farklı duvar kalınlıklı kabuklar | Tek bir {{ui:Kabuk}} kalınlığı; bir duvarın daha kalın olması gereken yerlerde ekstrüzyonla malzeme ekleyin |
| Serbest biçimli (spline) yüzeylerde eğim | {{ui:Eğim}} düz, silindirik ve konik yüzeylerde çalışır |
| Bükülü süpürmeler, ince duvarlı ve yüzey süpürmeleri; {{ui:Loft}} özelliğinde uç teğetliği; tek kılavuz raylı loft; spline yollar | Sabit yönelimli ya da bir uç ölçekli {{ui:Süpürme}}; iki ya da daha fazla kılavuz raylı loft: bkz. [Süpürme, loft ve eğim](topic:sweep-loft-draft) |
| Yaylardan ya da spline'lardan takviyeler; eskize göre kare büyütülmüş takviyeler (üst görünümden); takviyelerde eğim; tek eskizden birden çok takviye | Bir çizgi zincirinden, takviyenin kendi düzleminde {{ui:Takviye}}: bkz. [Takviyeler ve köşe levhaları](topic:rib) |
| Bir eğri yüzeye "kadar"; bir eğri yüzeyde duran "sonrakine kadar" | Düz bir yüzeye ya da bir referans düzlemine kadar |
| Karşı delinmiş delikler, inç ve boru dişleri, konik dişler, diş çıkış boşlukları ve pahlı diş başlangıçları | Küçük derinlikte karşı delme; ISO metrik ve trapez dişler, kozmetik ya da modellenmiş: bkz. [Millerdeki ve deliklerdeki dişler, çizili veya modellenmiş](topic:threads) |
| İnce özellik ekstrüzyonları | Profilin iki duvarını da çizin |
| Örüntü kopyaları tek tek atlanmış, dolgu örüntüleri | Ayrı özellikler kullanın; bir eğri boyunca örüntüler: {{ui:Yol örüntüsü}} |
| Kopyalanan örüntüler, aynalar, köşe yuvarlatmaları, pahlar, kabuklar ve içe aktarılmış katılar | Üzerine kurulduğu eskizi ya da özelliği kopyalayın ya da örüntüleyin |
| Bir formun ekstrem noktalarında kesin (G1) teğetlik; bir formun yamalarını daha büyük yüzlere birleştirmek | Formun Seviyesini yükseltin: yaklaşık yamalar küçülür; bkz. [Form ile serbest biçimli şekiller](topic:form-surfaces) |
| Tek bir özellikte birbirinden ayrı birden çok kapalı parçadan oluşan bir form; formlar arasında köprüler | Form özelliği başına bir kapalı parça; bunları Birleştir ile birleştirin |
| Görünümde yüzey gövdelerini seçmek (kırpma ve yama noktaları hariç); yüzey yuvarlatmaları; kırpmayı kaldırma; G2 yamalar; eğri komşularına teğet Gordon yüzeyleri (düzlemlere ve düz yüzlere teğet olanlar yapılır) | Özelliğin panelinde ada göre seçin; önce kalınlaştırın, sonra katıyı yuvarlatın |
| Geçmişte bir gövde listesi; gizli gövdeleri dışa aktarmalardan çıkarmak | Parça panelindeki gövde listesinde gövdeleri yeniden adlandırın ve gizleyin; bir gövdeyi dışarıda bırakmak için onu yapan özelliği silin ya da bastırın |
| Silindirleri ve konileri analitik tutan düzgün olmayan bir ölçekleme; ofset yüzeylerin düzgün olmayan ölçeklenmesi | {{ui:Gövdeyi ölçekle}} eğri yüzleri kapalı B-spline'lara çevirir (0,0000004 mm içinde); düzgün ölçekleme kesin kalır |
| Yüzey gövdelerini birleştirme; Minkowski toplamları | Önce {{ui:Dikiş}} ya da {{ui:Kalınlaştır}}, sonra {{ui:Birleştir}} |
| Tolerans analizi: köşe dönen tolerans zincirleri (2B ve 3B vektör döngüleri), geometriden hesaplanan duyarlılıklar, diğer dağılımlarla Monte Carlo, eskiz ölçülendirmelerinde boyut toleransları, malzeme durumundan bonus tolerans | Montajda {{ui:Tolerans zinciri}}: tek yön, en kötü durum ve RSS, toleransları yazarak, başlık bloğunun genel toleransından ya da GD&T çerçevelerinden: bkz. [Tolerans zincirleri](topic:tolerance-stackup) |
| Yerleştirme: kesim sırası ve giriş çizgileri, ortak kenarların bir kez kesilmesi, birlikte tutulması gereken parçalar; rulo artık parçaları, projeler arası paylaşılan stok | Aralık, kenar payları, döndürmeler ve lif yönüyle {{ui:Düz parçaları sacların üzerine yerleştir…}}: bkz. [Düz parçaları saclara yerleştirme](topic:nest-flat-parts); artan plakalar saklanır ve önce kullanılır: bkz. [Kırpıntıları saklayın ve yeniden kullanın](topic:nest-offcuts); kesimi kesici yazılımınızda planlayın |
| Sac metal: kıvrımlar, kaydırmalar, köşegen ve kontur flanşları; eğri kenarlardaki flanşlar ya da bükülü bir taban flanşının yüzlerindeki flanşlar; eskizle çizilmiş büküm; köşe kapatmaları; şekillendirme takımları; bir katıyı sac metale çevirmek; içinde kesikler olan bükülü bir taban flanşının açınımı; büküm tabloları | {{ui:Taban flanşı}} (bir levha ya da bükülü bir profil), düz kenarlarında büküm boşaltmalı {{ui:Kenar flanşı}} ve K-faktörlü açınım: bkz. [Sac metal](topic:sheet-metal) |
| Montajlarda eğim analizi; ayırma çizgisini bulma; duvar kalınlığı analizi | Tasarımdaki parçada {{ui:Eğim analizi}}: bkz. [Kalıplama ve döküm için eğimi denetleyin](topic:draft-analysis); bir montajın her parçasını kontrol etmek için her birini açın |

## Eskizler

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| Elipsler, teğet yaylar, konikler, belirli dereceli ya da ağırlıklı spline'lar (NURBS) | Spline'lar (kübik), yaylar ve daireler Teğet ilişkileriyle |
| Bir spline üzerindeki nokta (bir ilişki), eğrilik (G2) ilişkileri | Spline'ın kendi noktasını geçmesi gereken yere koyun |
| Sonraki değişikliklerle izleyen spline ofset kopyaları; keskin spline köşeli zincirlerin ofsetleri | Değişiklikten sonra yeniden ofset alın; önce köşeyi yuvarlatın |
| Orijinale bağlı kalan örüntü kopyaları; bir eğri boyunca örüntüler | Değişiklikten sonra yeniden örüntüleyin |
| Serbest biçimli ya da eğik dairesel kenarları yansıtma; parçayı izleyen yansıtılmış geometri | Düz ve paralel dairesel kenarları yansıtın, sonra ölçülendirin |
| Tahrik edilen (referans) ölçülendirmeler | Boyutları panelden ya da parça bilgilerinden okuyun |
| Eşdoğrusal ilişkiler | 0 mesafeyle paralel |
| Başka bir programa yapıştırma (sistem panosu) | DXF, STEP, STL ya da 3MF dışa aktarın |
| Yayları, bağıl ya da kutupsal koordinatları yazma | Çizgi ve daire yazın; yayları Yay aracıyla çizin |
| İşaretçi olmadan geometri seçme | Bir tıklama ya da dokunma gerekir |

## Parametreler ve birimler

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| Malzemeleri değiştiren yapılandırmalar; özellikleri kapatan bir CSV tasarım tablosu | Yapılandırmalar parametreleri ayarlar ve özellikleri açıp kapatır: bkz. [Yapılandırmalar ve tasarım tabloları](topic:design-tables); `partcraft variants` kayıtlı yapılandırmaları ada göre varyant olarak oluşturur, kapalı özellikler dahil: bkz. [Yapılandırmalarınızdan varyant paketi oluşturun](topic:variant-pack) |
| En yeni özelliklerin kendi panelindeki sayılar üzerinde denklemler (düzlem, süpürme, eğim ve benzerleri) | Bunları bir betikte ya da `partcraft set` ile yazın ([Betikler ve komut satırı](topic:scripts-and-cli)) |
| Parçanın inç cinsinden gösterilmesi | Boyutlar milimetre olarak gösterilir; bir sayı kutusuna ya da ifadeye `2in` yazın, 50.8 olur |

## Dosyalar

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| İçe aktarılmış bir STEP katısının kendi özelliklerini düzenlemek (geçmişsiz gelir) | Kendi özelliklerinizle malzeme ekleyin ya da kesin |
| STEP'ten renkleri, adları, montaj yapısını ve PMI'yi okumak | Kullanılamaz |
| glTF, OBJ, IGES, Parasolid dışa aktarma; 3B bir parçanın DWG'si (yalnızca varyant paketi DWG yazar: çizim sayfası) | Örgüler için STL ya da 3MF; katılar için STEP; 2B için DXF |
| IGES, DXF ya da diğer programların kendi dosyalarını açmak (`.3dm` dosyaları tek gövde olarak açılır: [Bir .3dm modelini katı gövde olarak açın](topic:open-3dm-files)) | STEP isteyin ya da kapalı bir STL, OBJ ya da 3MF örgüsü: [STL, OBJ ya da 3MF açın](topic:open-meshes) |
| Dışa aktarılan STEP'te montaj yapısı (parça adlarıyla bir ağaç) | Montaj STEP'i, yerleştirilmiş katıların tek bir bileşiğidir |
| Tarayıcının indirmesi olmadan seçtiğiniz bir klasöre kaydetme | Tarayıcının indirme ayarlarında "nereye kaydedileceğini sor"u açın |

## Çizimler

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| Üç genel boyut dışındaki ölçülendirmeler (delik boyutları, konumları, boyut toleransları) | PDF'i işaretleyin ya da DXF dışa aktarıp bir 2B CAD programında ölçülendirin |
| Birden fazla kesit ya da detay; hizalı, kopmuş ve yardımcı görünümler | Çizim başına bir kesit ve bir detay |
| Sayfadaki serbest metin, notlar ve tablolar (başlık ve revizyon blokları dışında) | Yüzey işlem notu ya da PDF'e eklenen metin |
| Birinci açı izdüşümü, hareketli görünümler, dikey sayfalar | Üçüncü açı, otomatik yerleşim, yatay A4–A0 ve ANSI A–E sayfaları |
| Canlı kesit görünümü: aynı anda birden çok düzlem ya da bir kesit kutusu, kesilen yer etrafında bir dış hat, kesitin dosyaya kaydedilmesi | {{ui:Görünümler}} › {{ui:Kesit görünümü}} ile her seferinde bir düzlem; bkz. [Kesit görünümüyle içini görün](topic:section-view) |
| Kendi ölçülendirmeli ya da balonlu, taşınabilir birden fazla görünümü olan montaj çizimleri | Otomatik balonlar ve parça listesiyle bir izometrik (ya da patlatılmış) görünüm |
| GD&T ve yüzey işlemi sembollerinin kopyalanması ve yapıştırılması | Her birini Datum, Çerçeve ya da Yüzey işlemi ile yerleştirin |
| Kılavuzlar: Illustrate'in {{ui:Başka bir dosyadan…}} seçeneğindeki STEP dosyaları, doğrudan ModelCraft ya da BimCraft'tan gelen bir model, yol izleyicisinin kalitesinde resimler, bir PDF içinde etkileşimli 3B | STEP'i Design'da açın ve kılavuzu {{ui:Açık parçadan}} ile başlatın; modeli glTF (.glb) olarak kaydedin; 3B görünümün PNG resimleri; etkileşimli 3B dosya: bkz. [Illustrate'te kılavuz başlatın](topic:illustrate) |

## Montajlar

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| Dişli, kremayer, kam ve vida eklemleri; yalnızca bir koniyle sınırlı bilye eklemi; eğri yüzlerdeki ya da noktalar arasındaki eklemler | Düz yüzlerdeki rijit, döner, kayıcı, silindirik, düzlemsel, bilye ve yuva-pim eklemleri, her değer kendi sınırlarıyla: bkz. [Montaj oluşturma](topic:build-assembly) |
| Parçaları döndüren patlatılmış adımlar ve eklemlerin yerleştirdiği parçaları sürükleme | Düz patlatma adımları; bir parçayı elle taşımak için eklemi kaldırın |
| Alt montajlar | Yalnızca bir seviye parça |
| Dişliler, kamlar, temas | Kullanılamaz |

## Üretim

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| Eğri yüzlerin 3B kabası, 3B uyarlanabilir temizleme, kalan işleme; su hattı, kalem, radyal ve spiral bitirme; uyarlanabilir geçişler yaylar olarak yazılmış | 2,5 eksen yüz, cep, 2B uyarlanabilir, kontur, delme ve pah: bkz. [Takım yolları ve G-code oluşturun](topic:manufacture); tüm modelin Parallel ve Scallop bitirmesi: bkz. [3B bitirme](topic:finish-3d) |
| 4 ve 5 eksenli takım yolları, tornalama, sondalama | Her seferinde bir yüz kurulumu, Kurulum sekmesinde takım ekseniyle |
| Tutucu ve gövde çarpışma denetimleri | Kanal uzunluğu uyarılarını izleyin ve kontrol biriminizin simülatöründe denetleyin |
| Sondalama, takım ömrü ve alt program döngüleri; bir post'ta 4. ve 5. eksen ile torna kodları; başka programların post dosyalarını yüklemek | PartCraft'ın kendi biçiminde bir post yazın ya da değiştirin: bkz. [Düzenleyebileceğiniz post işlemciler](topic:post-processors) |
| İnç G-code (G20) | Yalnızca milimetre (G21) |

## Simülasyon ve üretken tasarım

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| Doğrusal olmayan çalışmalar: akma, büyük sapmalar, parçalar arası temas, yorulma | Doğrusal statik ve doğal frekanslar: bkz. [Gerilme ve sehim denetleyin](topic:simulation); güvenlik katsayısını 1'in çok üstünde tutun |
| Doğrusal olmayan burkulma (kusurlar, burkulma sonrası, ani atlama) | Bol paylı doğrusal burkulma yük katsayıları: bkz. [Isı, termal gerilme ve burkulma](topic:thermal-and-buckling) |
| Yüzeyler arası ışınım (görünüm faktörleri), temas direnci, sıcaklığa bağlı malzemeler, termal gerilmede atalet (termal şok dalgaları) | Çevreye ışınım, zamanla kararlı ya da yarı-statik termal gerilme, sabit özellikler: bkz. [Isı, termal gerilme ve burkulma](topic:thermal-and-buckling) |
| Geçici ısı ve termal yüklü çalışmalar için otomatik iyileştirme; hata küçük olduğunda ağı kabalaştırma; yerel bir nicelikte hedef (tek bir noktadaki en yüksek gerilme) | Statik, burkulma, doğal frekans ve kararlı termal çalışmalar için **Otomatik iyileştir**, tüm parçadaki hata üzerinde: bkz. [Gerilme ve sehim denetleyin](topic:simulation); aksi halde eleman boyutunu düşürün |
| Rulman ve cıvata yükleri, uzaktan kuvvetler, momentler, yaylar, belirlenmiş yer değiştirmeler | Yüzlerdeki kuvvetler ve basınçlar, yerçekimi; sabit ve sürtünmesiz yüzeyler |
| Montajların simülasyonu; yöne göre değişen malzemeler (basılmış katmanlar, kompozitler) | Bir parça, bir izotropik malzeme |
| Dörtyüzlü çalışmalar, ısı transferi ve üretken tasarım için birden çok çözücü iş parçacığı; çapraz köken yalıtımlı olmayan bir sayfadaki iş parçacıkları | Vokselli çalışmalar, burkulma, zamana bağlı gerilme ve laminer akış, sayfa izin verdiğinde iş parçacıklarını kullanır: bkz. [PartCraft ayarları](topic:settings) |
| Türbülanslı akış (tasarım doğruluğu: Spalart–Allmaras modeli deneysel olarak eklidir: boru sürtünmesi %30 ila 34 %, geri adım yeniden bağlanması 21 ila 39 % kısa; planlanan: duvarlara yakın daha ince hücreler), akışta ısı, zamana bağlı (zamanla doğru) akış, serbest yüzeyler, Newtonyen olmayan akışkanlar, dönen parçalar | Newtonyen bir akışkanın laminer, kararlı, izotermal akışı ya da nitel desenler için deneysel türbülanslı model: bkz. [Akışkan akışını simüle edin](topic:flow-simulation); Reynolds sayısı laminerin ötesine geçtiğinde panel uyarır |
| Üretken tasarımda gerilme sınırları ve üretim kuralları (çıkıntılar, frezeleme yönleri); tek bir şekilde birden çok malzeme | Bir hacim için en sert şekil; sonucu Simülasyonda denetleyin: bkz. [Yüklerden şekil büyütme](topic:generative-design) |
| Bir sonucun düzenlenebilir (pürüzsüz, parametrik) bir katı olarak sunulması | STL, yüzlü STEP ya da sonucu içe aktarılmış yüzlü bir katı olarak bir parça |
| Elektrikli makine tasarımı: bir statorda dönen bir rotor, açıya karşı tork, doygun çelik, diz noktasını aştığında gücünü kaybeden mıknatıslar, girdap akımları ve demir ile bakır kayıpları; 3 boyutta ya da eğri örgülerde manyetik alanlar | Analiz kütüphanesinde bir ızgarada doğrusal 2B manyetostatik: bobinler, demir, geri tepme hattında kalıcı mıknatıslar, aralıklar, endüktans ve çekme: bkz. [İki boyutta manyetik alanlar](topic:magnetic-fields-2d) |

## Betikler

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| Betik düzenleyicide fare üstü yardım, kesme noktaları ve adım adım ilerleme | Bul, katla ve tamamla hazır (bkz. [Betik yazın ve çalıştırın](topic:craftscript)); geri kalanı için kendi düzenleyiciniz: Betik grubundaki {{ui:Kaydet}} ve {{ui:Aç}} betikleri içeri ve dışarı taşır; yerleşik fonksiyonlar [CraftScript dili](topic:craftscript-language) bölümünde listelenir |
| Bir betikte kesme noktaları ve adım adım ilerleme | Yol boyunca `disp` ve `fprintf`; {{key:Mod+Enter}} seçili birkaç satırı birlikte çalıştırır |
| Bir betiğin gösterdiği alanlar ve grafikler Design çalışma alanında çizilir; betiklerin parçanın parametrelerini değiştirmesi | Betik çalışma alanında gösterilirler; betikler parametreleri `param` ile okur (bkz. [Betik yazın ve çalıştırın](topic:craftscript)), bunları {{ui:Parametreler}} sekmesinde değiştirir |
| Grafiklerle yan yana resimler ve tablolar; kaydetmeden önce bir grafiği düzenlemek (yakınlaştırma, eksen sınırları) | Yan yana grafikleri gösterir; bir grafiği PNG, SVG ya da CSV olarak kaydedin ve başka yerde bitirin |
| numpy ve diğer Python paketleri; çevrimdışı Python; betik düzenleyicide Python katlama; Pascal Script | Python'un standart kütüphanesi, CraftScript ve Lua: bkz. [Python'da betikler](topic:craftscript-python) |
| Lua fonksiyonlarını yerleşik fonksiyonlara geçirmek; betik çalışırken oluşturulan bir adla Lua'dan kütüphane fonksiyonu çağırmak | Kütüphane fonksiyonunun adını betiğe yazın (`cs.static_tet(…)`) ya da bir CraftScript betiğinden çağırın |

## Uygulama

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| Bulut kaydetme, paylaşma ve sürüm geçmişi | Henüz yok. Dosyaları bilgisayarınıza kaydedin ve sürümleri adlarıyla tutun |
| PartCraft'ın iPad ve iPhone'da yüklü bir uygulama olarak kullanılması | Cihazın tarayıcısında PartCraft kullanın; Android'de ve masaüstünde ayrıca CadCraft Studio içinde de çalışır (getcadcraft.com/download) |
| Bağlam (sağ tık) menüleri | Araç çubuğu ve sağ panel |
| Taze bir başlangıçtan tam çevrimdışı çalışma | Yalnızca uygulama çevrimdışı kullanım için kaydedildikten sonra: bkz. [Çevrimdışı çalışma](common:offline) |

Neyi en çok özlediğinizi sitenin destek sayfası üzerinden bildirin: bir sonrakinin şeklini o belirler.

## Mühendis (üreticiler ve alanlar)

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| Üretilen ısı eşanjöründe başlıklar, bağlantı uçları ve bağlantı parçaları; malzeme dayanımı için sıcaklık eğrileri; manifoldda te kayıpları | Üreticiler çekirdeği ve boruları oluşturur; Design'da bağlantı parçaları ekleyin; malzemenin oda sıcaklığı değerlerini bir güvenlik katsayısıyla kullanın |
| Ekleme dizininden tek tıkla üretici eklemek | Mühendis çalışma alanında {{ui:Aç}} bir dosyadan bir üretici ekler |
| Üreticinin kendi voksel boyutundan daha ince bir alan dosyası; `.vdb` dosyalarını okumak | Bir betikten daha ince bir alan kaydedin; `.vdb` yazılır, okunmaz |
| Basınçlı kap kuralı hesapları | Seçtiğiniz güvenlik katsayısıyla ders kitabı ince duvar ve kalın duvar formülleri; bir kod payı değil |
| Diğer uygulamalar için üreticiler | Bu sürümde yalnızca PartCraft |
