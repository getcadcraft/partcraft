---
title: "Henüz yapılmayanlar"
summary: "Bu PartCraft derlemesinin henüz yapmadığı her şey; bükümlü süpürmelerden inç gösterimine, çizim ölçülendirmesine ve alt montajlara kadar; bugün bunun yerine ne yapılacağıyla birlikte."
keywords: "eksik, henüz değil, sınırlar, sınırlamalar, yol haritası, kesin çekirdek, köşe yuvarlat, pah, kabuk, süpürme, loft, STEP içe aktarma, simülasyon, imalat, bükümlü süpürme, loft uç teğetliliği, yüz köşe yuvarlatma, denklemler, inç, çizim ölçülendirmesi, alt montajlar, bulut, tablet, telefon"
from: 97b10a29
---

PartCraft erken bir derlemedir. Bu sayfa henüz yapmadıklarını listeler, böylece aramazsınız; ve bugün bunun yerine ne yapacağınızı. Hiçbirinin bir tarihi yoktur.

## Tam bir çekirdek gerektirir

Bu sürüm her parçayı ağ çekirdeği ile kurar (bkz. [Ağ çekirdeği](topic:solid-kernels)). Aşağıdakilerin hepsi, bu sürümde henüz olmayan tam bir geometri çekirdeği gerektirir. Bu özelliklerle kaydedilmiş parçalar yine açılır: özellikler geçmişte kalır, yapılmadı olarak işaretlenir ve kaydettiğinizde korunur.

| Henüz yapılmadı | Bugün bunun yerine |
|---|---|
| {{ui:Köşe yuvarlat}} ve {{ui:Pah kır}} yuvarlak kenarlarda; kenar boyunca yarıçapı değişen köşe yuvarlatmalar; yan yana gelen yuvarlatmaların yumuşakça karıştırılması (ağ çekirdeği bunları keserek birleştirir) | Köşe yuvarlat ve Pah kır düz yüzler arasındaki düz kenarlarda çalışır; diğer köşeleri ekstrüzyondan önce eskizde yuvarlayın ({{ui:Köşe yuvarlat}} bir eskizde, {{key:F}}) |
| {{ui:Kabuk}} eğri yüzleri açarken; farklı kalınlıktaki duvarlar | Düz yüzleri açın; bir duvarın kalın olması gerekiyorsa ekstrüzyonlarla malzeme ekleyin |
| {{ui:Süpürme}}, {{ui:Loft}}, {{ui:Eğim}} eğri yüzlerde; bir yüze, sonraki yüze ya da bir köşeye kadar ekstrüzyon; konik ekstrüzyonlar | Ekstrüde edin ya da döndürün, gerekirse adımlarla; ölçtüğünüz bir derinliğe kadar ekstrüde edin |
| {{ui:Takviye}}, {{ui:Taban flanşı}}, {{ui:Kenar flanşı}} ve düz açınımlar | Levhayı ya da takviyenin profilini ekstrüde edin |
| Yüzeyler: bir {{ui:Form}}'u parçaya bitirme, {{ui:Yama}}, {{ui:Yüzey loftu}}, {{ui:Gordon yüzeyi}}, {{ui:Dikiş}}, {{ui:Kalınlaştır}}, {{ui:Ofset yüzeyi}}, {{ui:Yüzeyi uzat}}, {{ui:Yüzeyi kırp}} | Mevcut değil |
| Birden çok gövde: {{ui:Birleştir}}, {{ui:Gövdeyi taşı}}, {{ui:Gövdeyi ölçekle}}, {{ui:Yol örüntüsü}}, yeni bir gövde yapan özellikler | Tek bir katı; örüntüler ve ayna özellikleri |
| Eskizler, düzlemler, eksenler ve yüzlerdeki noktalar; yalnızca tam bir çekirdeğin bulabildiği yüzeylerde (köşe yuvarlatmayla yapılmış bir yüz, bir delik duvarı, içe aktarılmış bir katının yüzü) | Temel düzlemlerde, referans düzlemlerinde ve ekstrüzyon ile döndürmelerin düz yüzlerinde eskiz yapın |
| Bir üretken tasarım sonucunu parça olarak açma ya da ona ekleme (içe aktarılmış bir katı olur) | Sonucu STL ya da STEP olarak indirin |
| Açılmış bir STEP dosyasının eğri yüzlerini kesin yüzeyler olarak düzenleme; bir STEP dosyasından eğri, süpürülmüş ve döndürülmüş yüzlerin kesin STEP'i, spline kenarlar, modellenmiş dişler, STL / OBJ / 3MF gövdeleri ve montajlar; diğer parça modelleyicileri için STEP | {{ui:Aç}} STEP'i üçgenler olarak okur ve dışa aktarma için dosyanın düz yüzlerini, silindirlerini, konilerini, kürelerini ve torusları korur ([STEP dosyası açma](topic:import-step)); {{ui:Dışa aktar}} › {{ui:STEP AP242 (kesin katı)}} her analitik yüzü kesin olarak yazar ve bunları yüzey olarak tutar ([Dışa aktar](topic:export-files#for-other-cad-programs-step)); başka bir parça modelleyicisi için makro yine yazar |
| Çizim görünümlerinde gerçek yaylar | Görünümler ve kesit görünümler yüzeylerden çizilir |
| Kesin hacimler, alanlar ve mesafeler | {{ui:Ölç}} faceted katının sayılarını verir, yuvarlak parçalarda biraz düşük; daha ince bir **Eğriler** ayarı onları yaklaştırır |

Bu sayfanın aşağıdaki tablolarındaki bazı satırlar bu özelliklerden birini başka bir şeyin yolu olarak önerir. Bu öneriler, tam çekirdek geri geldiğinde geçerlidir.

## Özellikler

| Henüz yapılmadı | Bugün bunun yerine |
|---|---|
| Yüz köşe yuvarlatmaları, tam yuvarlak köşe yuvarlatmaları, bir kenar boyunca noktalarda ayarlanmış yarıçaplı köşe yuvarlatmaları | Sabit ya da doğrusal değişken {{ui:Köşe yuvarlat}}; birkaç köşe yuvarlatma özelliği |
| Kalınlıkları farklı kabuklar | Tek bir {{ui:Kabuk}} kalınlığı; bir duvarın kalın olması gerekiyorsa ekstrüzyonlarla malzeme ekleyin |
| Serbest biçimli (spline) yüzeylerde eğim | {{ui:Eğim}} düz, silindirik ve konik yüzeyler üzerinde çalışır |
| Bükümlü süpürmeler, ince cidarlı ve yüzey süpürmeleri; Loft özelliğinde uç teğetliliği; tek kılavuz raylı bir loft; spline yollar | {{ui:Süpürme}} sabit yönelimle ya da uç ölçeğiyle; iki ya da daha fazla kılavuz raylı bir loft: bkz. [Süpürme, loft ve eğim](topic:sweep-loft-draft) |
| Yaylardan ya da splinelardan takviyeler; eskize dik olarak büyütülen takviyeler (üst görünümden); takviyelerde eğim; bir eskizden birden fazla takviye | {{ui:Takviye}}, takviyenin kendi düzleminde tek bir çizgi zincirinden: bkz. [Takviyeler ve köşe levhaları](topic:rib) |
| Bir eğri yüzeye "ya kadar", bir eğri yüzde duran "sonrakine kadar" | Düz bir yüze ya da bir referans düzlemine kadar |
| Karşıdan delinmiş delikler, inç ve boru dişleri, konik dişler, diş çıkış boşlukları ve pahlı diş başlangıçları | Küçük derinlikli havşa; ISO metrik ve trapez dişler, kozmetik ya da modellenmiş: bkz. [Miller ve deliklerde dişler, çizilmiş ya da modellenmiş](topic:threads) |
| İnce özellik ekstrüzyonları | Profilin iki duvarını da çizin |
| Desen kopyalarını tek tek atlamak, dolgu desenleri | Ayrı özellikler kullanın; bir eğri boyunca desenler: {{ui:Yol örüntüsü}} |
| Kopyalama desenleri, aynalar, köşe yuvarlatmalar, pahlar, kabuklar ve içe aktarılmış katılar | Üzerine kurulu eskizi ya da özelliği kopyalayın ya da desenleyin |
| Bir {{ui:Form}}'un olağandışı noktalarında kesin (G1) teğetlik; bir formun yamalarını daha büyük yüzlerde birleştirme | Formun Seviyesini artırın: yaklaşık yamalar küçülür; bkz. [Form ile serbest biçimli şekiller](topic:form-surfaces) |
| Bir Form özelliğinde birden çok ayrı kapalı parça; formlar arasında köprüler | Form özelliği başına bir kapalı parça; onları Join ile birleştirin |
| Görünümde yüzey gövdelerini seçmek (kırpma ve yama noktaları hariç); yüzey yuvarlatmaları; kırpmayı geri alma; G2 yamalar; eğri komşulara teğet Gordon yüzeyleri (düzlemlere ve düz yüzlere teğet kuruludur) | Özelliğin panelinde adlarıyla seçin; önce kalınlaştırın, sonra katıyı yuvarlatın |
| Geçmişte bir gövde listesi; dışa aktarmalarda gizli gövdeleri dışarıda bırakma | Parça panelinin gövde listesinde gövdeleri yeniden adlandırın ve gizleyin; bir gövdeyi dışarıda bırakmak için onu yapan özelliği silin ya da bastırın |
| Silindirleri ve konileri analitik tutan tekdüze olmayan bir ölçek; ofset yüzeylerin tekdüze olmayan ölçeklenmesi | {{ui:Gövdeyi ölçekle}} eğri yüzeyleri kapalı B-splinelara çevirir (0.0000004 mm içinde); tekdüze bir ölçek kesin kalır |
| Yüzey gövdelerini birleştirme; Minkowski toplamları | Önce {{ui:Dikiş}} ya da {{ui:Kalınlaştır}}, sonra {{ui:Birleştir}} |
| Tolerans analizi: köşe dönen zincirler (2D ve 3D vektör döngüleri), geometriden hesaplanan hassasiyetler, başka dağılımlarla Monte Carlo, eskiz ölçülerinde boyut toleransları, malzeme durumundan bonus tolerans | Bir montajda {{ui:Tolerans zinciri}}: tek yön, en kötü durum ve RSS, toleranslar yazılır, başlık bloğunun genel toleransından ya da GD&T çerçevelerinden: bkz. [Tolerans zincirleri](topic:tolerance-stackup) |
| Yerleştirme: kesim sırası ve giriş payları, paylaşılan kenarları bir kez kesme, birlikte tutulması gereken parçalar; rulo artıkları, projeler arasında paylaşılan malzeme | {{ui:Düz parçaları sacların üzerine yerleştir…}} aralık, kenar boşlukları, döndürmeler ve lifle: bkz. [Düz parçaları saclara yerleştirme](topic:nest-flat-parts); kalan levhalar tutulur ve önce kullanılır: bkz. [Artıkları tutma ve yeniden kullanma](topic:nest-offcuts); kesimi kesici yazılımınızda planlayın |
| Sac metal: hemler, kaymalar, köşeli ve kontur flanşlar; kıvrımlı kenarlardaki ya da bükülmüş taban flanşının yüzlerindeki flanşlar; çizilmiş bükümler; köşe kapamaları; şekillendirme takımları; katıyı sac metale çevirme; üzerinde kesikler olan bükülmüş taban flanşının açınımı; bükme tabloları | {{ui:Taban flanşı}} (bir levha ya da bükülmüş bir profil), bir levhanın düz kenarlarında {{ui:Kenar flanşı}} bükme boşaltmalarıyla ve K-faktörlü düz açınım: bkz. [Sac metal](topic:sheet-metal) |
| Montajlarda eğim analizi; ayırma çizgisini bulma; duvar kalınlığı analizi | Parçada {{ui:Eğim analizi}}: bkz. [Kalıp ve döküm için eğim denetimi](topic:draft-analysis); bir montajın her parçasını denetlemek için her birini açın |

## Eskizler

| Henüz yapılmadı | Bugün bunun yerine |
|---|---|
| Elipsler, teğet yaylar, konikler, belirli dereceli ya da ağırlıklı splineler (NURBS) | Splineler (kübik), Teğet ilişkileriyle yaylar ve daireler |
| Bir spline üzerinde bir nokta (bir ilişki), eğrilik (G2) ilişkileri | Bir spline'ın kendi noktasını geçmesi gereken yere koyun |
| Sonraki değişikliklere uyan spline ofsetleri; keskin spline köşeli zincirlerin ofsetleri | Değişiklikten sonra yeniden ofsetleyin; önce köşeyi yuvarlayın |
| Orijinale bağlı kalan desen kopyaları; bir eğri boyunca desenler | Bir değişiklikten sonra yeniden deseni oluşturun |
| Serbest biçimli ya da eğik dairesel kenarları yansıtma; parçayı izleyen yansıtılmış geometri | Düz ve paralel dairesel kenarları yansıtın, sonra boyutlandırın |
| Tahrikli (referans) ölçüler | Boyutları panelden ya da parça bilgilerinden okuyun |
| Eş doğrusallık ilişkileri | 0 mesafeyle paralel |
| Başka bir programa yapıştırma (sistem panosu) | DXF, STEP, STL ya da 3MF dışa aktarın |
| Yayları yazma; göreli ya da kutupsal koordinatlar | Çizgileri ve daireleri yazın; yayları Yay aracıyla çizin |
| Bir işaretçi olmadan geometri seçme | Bir tıklama ya da dokunma gerekir |

## Parametreler ve birimler

| Henüz yapılmadı | Bugün bunun yerine |
|---|---|
| Malzemeleri değiştiren konfigürasyonlar; özellikleri kapatan bir CSV tasarım tablosu | Konfigürasyonlar parametreleri ayarlar ve özellikleri açıp kapatır: bkz. [Konfigürasyonlar ve tasarım tabloları](topic:design-tables); `partcraft variants` kayıtlı konfigürasyonları adlarıyla derler, kapatılmış özellikler dahil: bkz. [Konfigürasyonlarınızdan bir varyant paketi yapın](topic:variant-pack) |
| En yeni özelliklerin kendi panellerindeki sayılar üzerinde denklemler (düzlem, süpürme, eğim ve benzerleri) | Bunları bir betikte ya da `partcraft set` ile yazın ([Betikler ve komut satırı](topic:scripts-and-cli)) |
| Parça inç cinsinden gösterilmesi | Boyutlar milimetre cinsinden gösterilir; bir sayı kutusuna ya da ifadeye `2in` yazın, 50.8 olur |

## Dosyalar

| Henüz yapılmadı | Bugün bunun yerine |
|---|---|
| Bir STEP katısının kendi özelliklerini düzenleme (geçmişi olmadan gelir) | Kendi özelliklerinizle malzeme ekleyin ya da kesin |
| STEP'ten renkleri, adları, montaj yapısını ve PMI'yi okuma | Mevcut değil |
| glTF, OBJ, IGES, Parasolid dışa aktarma; bir 3D parçanın DWG'si (yalnızca varyant paketi bir DWG yazar: çizim sayfası) | Ağlar için STL ya da 3MF; katılar için STEP; 2D için DXF |
| IGES, DXF ya da başka programların kendi dosyalarını açma (`.3dm` dosyaları tek bir gövde olarak açılır: [.3dm modelini katı gövde olarak açın](topic:open-3dm-files)) | STEP isteyin ya da kapalı bir STL, OBJ ya da 3MF ağı: [STL, OBJ ya da 3MF açın](topic:open-meshes) |
| Dışa aktarılan STEP'te montaj yapısı (parça adlarıyla bir ağaç) | Montaj STEP'i, yerleştirilmiş katıların tek bir bileşiğidir |
| Tarayıcının indirmesi olmadan seçtiğiniz bir klasöre kaydetme | Tarayıcının indirme ayarlarında "kaydedilecek yeri sor" seçeneğini açın |

## Çizimler

| Henüz yapılmadı | Bugün bunun yerine |
|---|---|
| Üç genel boyutun ötesinde ölçüler (delik boyutları, konumlar, boyut toleransları) | PDF'i işaretleyin ya da DXF dışa aktarıp bir 2D CAD programında ölçülendirin |
| Birden fazla kesit ya da ayrıntı; hizalı, kırılmış ve yardımcı görünümler | Çizim başına bir kesit ve bir ayrıntı |
| Sayfa üzerinde serbest metin, notlar ve tablolar (başlık ve revizyon blokları dışında) | Bitirme notu ya da PDF'e eklenen metin |
| Birinci açı izdüşümü, hareketli görünümler, dikey sayfalar | Üçüncü açı, otomatik yerleşim, yatay A4–A0 ve ANSI A–E sayfaları |
| Canlı kesit görünümü: aynı anda birden fazla düzlem ya da bir kesit kutusu, kesit çevresinde bir hat, kesitin dosyada kaydedilmesi | {{ui:Görünümler}} › {{ui:Kesit görünümü}}'nden bir seferde bir düzlem; bkz. [Kesit görünümüyle içini görün](topic:section-view) |
| Taşınabilir balonlu montaj çizimleri; daha fazla görünüm, ölçü | Otomatik balonlar ve parça listesiyle bir izometrik (ya da açılmış) görünüm |
| GD&T ve yüzey işaretlerinin kopyalanıp yapıştırılması | Her birini Datum, Frame ya da Finish ile yerleştirin |
| Kılavuzlar: Illustrate'in {{ui:Başka bir dosyadan…}} seçeneğindeki STEP dosyaları, doğrudan ModelCraft ya da BimCraft'tan gelen bir model, yol izleyicinin kalitesinde resimler, bir PDF içinde etkileşimli 3B | STEP'i Tasarım'da açın ve kılavuzu {{ui:Açık parçadan}} başlatın; modeli glTF (.glb) olarak kaydedin; 3B görünümün PNG resimleri; etkileşimli 3B dosyası: bkz. [Illustrate'te kılavuz başlatın](topic:illustrate) |

## Montajlar

| Henüz yapılmadı | Bugün bunun yerine |
|---|---|
| Dişli, kremayer, kam ve vida eklemleri; yalnızca bir koniyle sınırlı küresel eklem; eğri yüzeylerde ya da noktalar arasında eklemler | Düz yüzlerde rijit, döner, kayar, silindirik, düzlemsel, küresel ve pim-yuvası eklemleri, her değer kendi sınırlarıyla: bkz. [Montaj kurma](topic:build-assembly) |
| Parçaları döndüren patlatma adımları ve eklemlerin yerleştirdiği parçaları sürükleme | Düz patlatma adımları; bir parçayı elle taşımak için bir eklemi kaldırın |
| Alt montajlar | Yalnızca bir seviye parça |
| Dişliler, kamlar, temas | Mevcut değil |

## İmalat

| Henüz yapılmadı | Bugün bunun yerine |
|---|---|
| 3B uyarlanabilir temizleme ve 3B'de ofset kaba işleme; su hattı, kalem, radyal ve spiral bitirme; yay olarak yazılmış uyarlanabilir geçişler | 3B kaba işleme düz sıralarla ve artık işleme: bkz. [3D kaba işleme ve artık işleme](topic:rough-3d); Paralel ve Scallop bitirme: bkz. [3D yüzey işlemi](topic:finish-3d); 2.5 eksen yüz, cep, 2D uyarlanabilir, kontur, delme ve pah: bkz. [Takım yolları ve G kodu oluşturma](topic:manufacture) |
| Yan kesim, akış hattı ve çok eksenli kaba işleme yolları, eğik iş düzlemi kodları (G68.2), tutucu ve makine çarpışma denetimleri; 5 eksen ve döner kesimlerin simülasyonu | Herhangi bir işlem için eğik bir takım, 5 eksen bitirme bilyalı parmak frezeyle ve 4. eksen döner bitirme: bkz. [4 ve 5 eksenli işleme](topic:multi-axis) |
| Bir torna üzerinde iç delme ve iç dişler, G71/G76 çevrimleri, tornalama yollarında yaylar, canlı takımlar, alt iş mili | Dış tornalama: yüzey alma, kaba, bitirme, oluk, ayırma, diş, merkez üzerinde delme: bkz. [Torna üzerinde tornalama](topic:turning) |
| Bir açının ya da köşenin prob ile dokunulması, takım ayarlayıcı, bir boyutu bir toleransa karşı ölçme | İş ofsetini ayarlamak için bir yüzü, bir yanı, bir deliği ya da bir çıkıntıyı prob ile dokunma: bkz. [Prob](topic:probing) |
| Tutucu ve sap çarpışma denetimleri | Oluk uzunluğu uyarılarını izleyin ve kontrolcünüzün simülatöründe denetleyin |
| Bir postta takım ömrü ve alt program çevrimleri; başka programların post dosyalarını yükleme | PartCraft'ın kendi biçiminde bir post yazın ya da değiştirin: bkz. [Düzenleyebileceğiniz post işlemciler](topic:post-processors) |
| İnç G kodu (G20) | Yalnızca milimetre (G21) |

## Simülasyon ve üretken tasarım

| Henüz yapılmadı | Bugün bunun yerine |
|---|---|
| Doğrusal olmayan çalışmalar: akma, büyük sehimler, parçalar arası temas, yorulma | Doğrusal statik ve doğal frekanslar: bkz. [Gerilme ve sehim denetimi](topic:simulation); güvenlik katsayısını 1'in çok üzerinde tutun |
| Doğrusal olmayan burkulma (kusurlar, burkulma sonrası, anlık geçiş) | Doğrusal burkulma yük katsayıları, geniş bir marjla: bkz. [Isı, termal gerilme ve burkulma](topic:thermal-and-buckling) |
| Yüzeyler arası ışınım (görünüm faktörleri), temas direnci, sıcaklığa bağlı malzemeler, termal gerilmede atalet (termal şok dalgaları) | Çevreye ışınım, zamanla kararlı ya da kuazi-statik termal gerilme, sabit özellikler: bkz. [Isı, termal gerilme ve burkulma](topic:thermal-and-buckling) |
| Geçici ısı ve termal yüklü çalışmalar için otomatik iyileştirme; hatanın küçük olduğu yerlerde ağı kabalaştırma; yerel bir nicelik üzerinde hedef (tek bir noktada doruk gerilme) | Statik, burkulma, doğal frekans ve kararlı termal çalışmalar için **Otomatik iyileştir**, bütün parça üzerindeki hata üzerinden: bkz. [Gerilme ve sehim denetimi](topic:simulation); aksi halde eleman boyutunu düşürün |
| Cıvata ve rulman yükleri, uzak kuvvetler, momentler, yaylar, belirlenmiş yer değiştirmeler | Yüzeylerde kuvvetler ve basınçlar, yerçekimi; sabit ve sürtünmesiz yüzeyler |
| Montajların simülasyonu; yöne göre farklılaşan malzemeler (basılmış katmanlar, kompozitler) | Bir parça, bir izotropik malzeme |
| Dörtyüzlü çalışmalar, ısı transferi ve üretken tasarım için birden çok çözücü iş parçacığı; çapraz köken yalıtımlı olmayan bir sayfadaki herhangi bir iş parçacığı | Voksel çalışmaları, burkulma, zamanla gerilme ve laminer akış, sayfanın izin verdiği yerde iş parçacıklarını kullanır: bkz. [PartCraft ayarları](topic:settings) |
| Tasarım doğruluğunda türbülanslı akış (Spalart–Allmaras modeli deneysel olarak vardır: boru sürtünmesi %30 ila 34 yüksek, geri basamak yeniden tutunması %21 ila 39 kısa; planlanan: duvarlara yakın daha ince hücreler), akışta ısı, zamana bağlı (zamanla doğru) akış, serbest yüzeyler, Newtonyen olmayan akışkanlar, dönen parçalar | Bir Newtonyen akışkanın laminer, kararlı, izotermal akışı ya da nitel desenler için deneysel türbülans modeli: bkz. [Akışkan akışını simüle edin](topic:flow-simulation); panel Reynolds sayısı laminerin ötesine geçtiğinde uyarır |
| Üretken tasarımda gerilme sınırları ve üretim kuralları (çıkıntılar, frezeleme yönleri); bir şekilde birden çok malzeme | Bir hacim için en sert şekil; sonucu Simülasyon'da denetleyin: bkz. [Yüklerden bir şekil büyütme](topic:generative-design) |
| Sonucun düzenlenebilir (pürüzsüz, parametrik) bir katı olarak açılması | STL, yüzeyli STEP ya da sonucun içe aktarılmış yüzeyli bir katı olduğu bir parça |
| Elektrik makinesi tasarımı: bir statorda dönen bir rotor, açıya karşı tork, doyan çelik, dizinin ötesinde güç kaybeden mıknatıslar, girdap akımları ve demir ile bakır kayıpları; 3 boyutta ya da eğri ağlarda manyetik alanlar | Analiz kütüphanesinde bir ızgara üzerinde doğrusal 2B manyetostatik: bobinler, demir, geri tepme doğrusunda kalıcı mıknatıslar, boşluklar, endüktans ve çekme: bkz. [2B manyetik alanlar](topic:magnetic-fields-2d) |

## Betikler

| Henüz yapılmadı | Bugün bunun yerine |
|---|---|
| Betik düzenleyicide üzerine gelince yardım, kesme noktaları ve adım adım ilerleme | Bul, katla ve tamamla vardır (bkz. [Betik yazma ve çalıştırma](topic:craftscript)); geri kalanı için kendi düzenleyiciniz: Betikler grubundaki {{ui:Kaydet}} ve {{ui:Aç}} betikleri dışarı ve içeri taşır; yerleşik işlevler [CraftScript dili](topic:craftscript-language) içinde listelenir |
| Kesme noktaları ve bir betik boyunca adım adım ilerleme | Yol boyunca `disp` ve `fprintf`; {{key:Mod+Enter}} bir seferde birkaç seçili satır çalıştırır |
| Bir betiğin gösterdiği alanlar ve grafikler Tasarım çalışma alanında çizilir; betikler parçanın parametrelerini değiştirir | Betik çalışma alanında gösterilirler; betikler parametreleri `param` ile okur (bkz. [Betik yazma ve çalıştırma](topic:craftscript)), bunları {{ui:Parametreler}} sekmesinde değiştirir |
| Grafiklerle yan yana resimler ve tablolar; kaydetmeden önce bir grafiği düzenleme (yakınlaştırma, eksen sınırları) | Yan yana grafikleri gösterir; bir grafiği PNG, SVG ya da CSV olarak kaydedin ve başka yerde bitirin |
| numpy ve diğer Python paketleri; çevrimdışı Python; düzenleyicide Python katlama; Pascal Script | Python'un standart kütüphanesi, CraftScript ve Lua: bkz. [Python ile betikler](topic:craftscript-python) |
| Lua işlevlerini yerleşik işlevlere geçirme; Lua'dan bir kütüphane işlevini, betik çalışırken kurulan bir adla çağırma | Kütüphane işlevinin adını betiğe yazın (`cs.static_tet(…)`) ya da bir CraftScript betiğinden çağırın |

## Uygulama

| Henüz yapılmadı | Bugün bunun yerine |
|---|---|
| Bulut kaydetme, paylaşma ve sürüm geçmişi | Henüz yok. Dosyaları bilgisayarınıza kaydedin ve sürümleri adlarıyla tutun |
| iPad ve iPhone'a kurulu bir uygulama olarak PartCraft | Cihazın tarayıcısında PartCraft'ı kullanın; Android'de ve masaüstünde CadCraft Studio içinde de çalışır (getcadcraft.com/download) |
| Bağlam (sağ tık) menüleri | Araç çubuğu ve sağ panel |
| Temiz bir başlangıçtan tamamen çevrimdışı çalışma | Yalnızca uygulama çevrimdışı kullanım için kaydedildiğinde: bkz. [Çevrimdışı çalışma](common:offline) |

Sitenin destek sayfası üzerinden en çok neyi özlediğinizi bildirin: bundan sonra neyin geleceğini o belirler.

## Engineer (üreteçler ve alanlar)

| Henüz yapılmadı | Bugün bunun yerine |
|---|---|
| Oluşturulan ısı eşanjöründe başlıklar, portlar ve bağlantı parçaları; malzeme mukavemetinin sıcaklık eğrileri; manifolddaki te kayıpları | Üreteçler çekirdeği ve boruları kurar; Tasarım'da bağlantı parçaları ekleyin; malzemenin oda sıcaklığı değerlerini bir güvenlik katsayısıyla kullanın |
| Ekleme dizininden tek tıkla üretici eklemek | Engineer çalışma alanında {{ui:Aç}}, bir dosyadan bir üretici ekler |
| Üretecin kendi voksel boyutundan daha ince bir alan dosyası; `.vdb` dosyalarını okuma | Bir betikten daha ince bir alan kaydedin; `.vdb` yazılır, okunmaz |
| Basınçlı kap kod hesaplamaları | Ders kitabı ince ve kalın cidar formülleri, sizin seçtiğiniz güvenlik katsayısıyla; bir kod marjı değil |
| Diğer uygulamalar için üreteçler | Bu sürümde yalnızca PartCraft |
