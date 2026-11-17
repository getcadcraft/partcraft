---
title: Başka bir parametrik modelleyiciden geçiş
summary: Masaüstü parametrik parça modelleyicilerinin alışkanlıklarının PartCraft'a nasıl karşılık geldiği ve deneyimli kullanıcıları ilk saatte şaşırtan farklılıklar.
keywords: geçiş, taşıma, tanıdık, özellik yöneticisi, tasarım ağacı, akıllı ölçü, katı ekleme ekstrüzyonu, kesme ekstrüzyonu, delik sihirbazı, eşleştirmeler, çakışma algılama, geri sarma çubuğu, özellik paneli, fare, farklılıklar
from: fbacaee1
---

Parçalarınızı SolidWorks'te tasarlıyorsanız, PartCraft'ın fikirlerinin çoğu tanıdık gelecektir: Ön, Üst ve Sağ düzlemlerde eskizler, ilişkiler ve akıllı ölçüler; geri sarma çubuklu bir özellik geçmişi ve eşleştirmelerle yerleştirilen montajlar. Onlara ulaşma biçimi bazı yerlerde farklı ve bu ilk sürüm daha azını yapıyor. Bu sayfa alışkanlıklarınızı eşleştirir ve sürprizleri listeler.

## Alışkanlıklar, eşlenmiş

| Alışık olduğunuz | PartCraft'ta |
|---|---|
| Soldaki tasarım ağacı | Soldaki geçmiş: önce düzlemler, sonra özellikler; bir özelliği kullanan eskizler o özelliğin altında girintili |
| Ön, Üst ve Sağ düzlemler | Aynısı; başlangıç noktasından geçen üç düzlem. Ön, XY düzlemidir; Üst, XZ; Sağ, YZ. Y yukarı bakar |
| Bir düzlem ya da düz yüzey üzerinde eskiz, sonra çıkmak için onay köşesi | {{ui:Eskiz}} ({{key:S}}) seçili bir düzlemde ya da düz yüzeyde; kapanana kadar {{ui:Çık}} ya da {{key:Esc}} |
| Akıllı ölçü | {{ui:Ölçülendirme}} ({{key:D}}). Bir ya da iki öğeye tıklayın, sonra sayının nereye gideceğini belirtin. Yerleştirdiğiniz yer yatay, dikey ya da hizalı olanı seçer |
| Özellik panelinde ilişkiler ekleme | Öğeleri seçin, sonra sağ paneldeki ilişki düğmeleri (Çakışık, Yatay, Paralel, Teğet, Eşit vb.) |
| Eskiz çizerken otomatik ilişkiler | Yakalamalar çakışık, eğri üzerinde nokta, yatay ve dikey ilişkiler ekler |
| Mavi / siyah / kırmızı eskiz renkleri | Aynı fikir: mavi tam tanımlı değil, siyah tam tanımlı, kırmızı fazla tanımlı. Çip kalan serbestlik derecelerini gösterir |
| Döndürmeler için merkez çizgisi | {{ui:Merkez çizgisi}} ({{key:N}}); {{ui:Döndürme}} başka bir eksen seçmediğiniz sürece ilk merkez çizgisini kullanır |
| Eskizde köşe yuvarlatma | {{ui:Köşe yuvarlat}} ({{key:F}}) bir eskizde: köşeye tıklayın, yarıçapı yazın |
| Yapı geometrisi anahtarı | {{ui:Yapı}} ({{key:Q}}) |
| Ekstrüzyonla katı ekleme | {{ui:Ekstrüzyon}}: Kör, Orta düzlem, Yüzeye / sonrakine / köşeye kadar, yüzeyden ofset, ikinci yön, konikleştirme, tek kontur (Bölgeleri seç) |
| Ekstrüzyonla kesme | {{ui:Kes}}: Tümünden geçerek olarak başlar; bir cep için Kör'e geçin |
| Döndürmeyle katı ekleme / kesme | {{ui:Döndürme}} / {{ui:Daha fazla}} › {{ui:Döndürme kesmesi}} |
| Referans düzlemi / eksen / nokta | {{ui:Daha fazla}} › {{ui:Düzlem}}, {{ui:Eksen}}, {{ui:Nokta}} (bkz. [Referans düzlemleri, eksenler ve noktalar](topic:reference-geometry)) |
| Süpürülmüş / loft ile katı ekleme ya da kesme, eğim | Düz yüzeylerde {{ui:Daha fazla}} › {{ui:Eğim}} (bkz. [Süpürme, loft ve eğim](topic:sweep-loft-draft)). {{ui:Süpürme}} ve {{ui:Loft}} bu sürümde henüz yapılmadı (tam çekirdek gerektirirler) |
| Delik Sihirbazı | Her serbest eskiz noktasında {{ui:Delik}}: basit, karşı delik, karşı koni (90° / 82°) ya da ISO metrik M2–M24 dişli; geçen ya da kör |
| Doğrusal / dairesel örüntü, ayna | {{ui:Doğrusal}}, {{ui:Dairesel}}, {{ui:Ayna}} (özellikler ya da tüm gövde) |
| Kenarlarda köşe yuvarlatma ve pah kırma | {{ui:Köşe yuvarlat}} / {{ui:Pah kır}}: bir kenara tıklayın, daha fazlası için {{key:Shift}}+tıklayın, sonra düğme. Tek bir yarıçap; eşit, iki mesafeli ya da mesafe-açılı pahlar. Bu sürümde yalnızca iki düz yüzey arasındaki düz kenarlar ve bir köşede buluşan yuvarlatmalar geçişli (mitred) yapılır. Eskizde eğri kenarları yuvarlatın ya da pahlayın ({{ui:Köşe yuvarlat}}, bir eskizde {{key:F}}) |
| Kabuk | {{ui:Kabuk}}: açmak için düz yüzeylere tıklayın, sonra düğme. Tek bir duvar kalınlığı |
| STEP dosyası açma | {{ui:Aç}}: üçgenler olarak okunur, üzerine inşa edilecek bir katı gövde ([STEP dosyası açma](topic:import-step)) |
| Özelliği düzenleyin, sonra Tamam | Özelliğe tıklayın; sağdaki sayıları değiştirin; yazdıkça yeniden oluşturulur. Tamam yok, İptal yok: {{key:Mod+Z}} kullanın |
| Eskizi düzenleme | Geçmişte eskize çift tıklayın |
| Yeniden oluşturma | Her değişiklikten sonra otomatik. Yeniden oluşturma tuşu yok |
| Bastır / bastırmayı kaldır | Sağ panelde {{ui:Bastır}} / {{ui:Bastırmayı kaldır}} |
| Geri sarma çubuğunu sürükleme | Bir özellikte {{ui:Buraya geri sar}}; dönmek için "Geri sarma çubuğu · ileri sar" yazısına tıklayın |
| Ağaçta bir özelliği sürükleyerek sıralama | {{ui:Yukarı taşı}} / {{ui:Aşağı taşı}} ya da {{key:Alt+Up}} / {{key:Alt+Down}}; bir bağımlılığı bozacaksa nedeniyle birlikte reddedilir |
| Ölçüleri modelde çift tıklayarak düzenleme | Özelliği seçin: eskizinin ölçüleri sağ panelde listelenir |
| Eşleştirmeler: çakışık, eşmerkezli, mesafe, açı | {{ui:Birleşim}} ({{key:J}}): her parçada bir düz yüzey seçin; birleşim onları yüz yüze yerleştirir. Bir eksende **Merkez** eşmerkezli gibi davranır; **Ofset** mesafe gibi; **Açı** açı gibi |
| Sabit bileşen | İlk parça sabitlenir; {{ui:Sabitlenmiş parça yap}} bunu değiştirir |
| Bileşen ekleme | {{ui:Kopya ekle}} ya da {{ui:Çoğalt}} (başka bir kopya) ya da {{ui:Ekle}} (bir parça dosyasından) |
| Montajda parçayı düzenleme | {{ui:Parçayı düzenle}}, sonra {{ui:Geri}} |
| Girişim algılama | {{ui:Çakışma}} |
| Bir bileşeni hareket ettirerek hareketi görme | Döner ya da kaydırıcı birleşimin açı ya da ofset kaydırıcısını sürükleyin; {{ui:Hareketi çakışmalar için kontrol et}} onu tarar. Birleşimi olmayan bir parça: **Elle taşı** (sürüklenecek oklar ya da yazılan değerler) |
| Ölç / İncele | {{ui:Görünümler}}, sonra {{ui:Ölç}} ({{key:M}}): mesafeler, açılar, yarıçaplar, alanlar; {{ui:Kütle özellikleri}} |
| Patlatılmış görünüm, malzeme listesi | Hiçbir şey seçili olmayan bir montajda sağ panelde **Patlatılmış görünümler** ve **Malzeme listesi** |
| Kütle özellikleri | **Parça** kutusu: çokgen katının hacmi, yüzey alanı, boyut (yuvarlak parçalarda biraz düşük). Kütle yok: henüz malzeme yok |
| Kaydet, STEP olarak farklı kaydet | {{ui:Kaydet}} bir `.partcraft.json` indirir; {{ui:Dışa aktar}} STL, 3MF, tam STEP (AP242 ya da AP214), çokgen STEP, DXF ve bir PDF çizim sunar |
| Parçadan çizim yapma | {{ui:Çizim}}: üç görünüm, izometrik, bir kesit, bir detay, referanslar, geometrik tolerans çerçeveleri ve yüzey işaretleriyle otomatik bir A3 sayfası. Yalnızca genel boyutlar ölçülendirilir |
| Orta tuşla sürükleyerek döndürme | Burada **sol tuşla sürükleme** döndürür. Orta ya da sağ tuşla sürükleme kaydırır. Tekerlek işaretçide yakınlaştırır |
| Görünüm yönü, Dik bak | {{ui:Görünümler}} menüsü; seçili bir yüzey, düzlem ya da eskiz için {{ui:Dik bak}} |
| Sığdır (F) | {{key:F}} ya da {{ui:Sığdır}} (bir eskizde {{key:F}} Köşe yuvarlat aracıdır) |
| Sağ tık menüleri | Yok. Sağ sürükleme kaydırır; bir eskizde sağ tık bir çizgi zincirini bitirir |

:::tip
SolidWorks alışkanlıklarınız varsa, {{ui:Ayarlar}} › {{ui:PartCraft}} › {{ui:Menüler, tuşlar ve fare}} bölümünden {{ui:Özellik ağacı}} menü stilini seçin: Özellikler, Eskiz, Yüzeyler, Değerlendirme, Çizim, Montaj ve Görünüm sekmelerinden oluşan bir şerit; orta tuş yörüngede döndürür, {{key:Shift}} ve orta tuş kaydırır, sol tuş yalnızca seçer. Bkz. [Menüler, tuşlar ve fare](topic:menus-keys-and-mouse).
:::

## İnsanları takıldırabilen farklılıklar

**Tüm eskiz profildir.** Ekstrüzyon ve döndürme eskizdeki her kapalı döngüyü kullanır. Bir özellik için bir eskizin tek bir bölgesini ya da tek bir konturunu seçemezsiniz. Özellik başına bir eskiz kullanın.

**Bir özelliğin hangi eskizi aldığı.** Bir özellik, az önce kapattığınız ya da geçmişte seçili olan eskizi kullanır. Hiçbir şey seçili değilken, henüz hiçbir özelliğin kullanmadığı en yeni eskizi alır. Yanlış olanı aldıysa doğru eskizi seçin ve özelliği yeniden seçin.

**Değişiklikler yazarken uygulanır.** Tamam ve İptal içeren bir özellik iletişim kutusu yoktur. Her sayı anında yeniden oluşturur ve geri dönüş yolu {{key:Mod+Z}}'dir. Geri alma listesi eskiz düzenlemelerini, özellikleri ve ayarları birlikte kapsar.

**Fazla tanımlı olan asla sessizce kalmaz.** Sürülen (referans) ölçü yoktur. Diğer ilişkilerle zaten sabitlenmiş bir ölçü, fazla tanımlı olarak bildirilir ("zaten dolaylı olarak belirlenmiş. Silin."). Çelişen bir ölçü geometriye dokunmaz ve kırmızıya döner. Birini silin ya da geri alın.

**Süpürme ve loftlar henüz yapılmadı; köşe yuvarlatmaların, pahların, kabukların ve eğimlerin sınırları var.** Bu PartCraft sürümü her parçayı ağ çekirdeğiyle oluşturur; durum çubuğundaki çip her zaman "Mesh kernel" yazar. Köşe yuvarlatmalar ve pahlar yalnızca iki düz yüzey arasındaki düz kenarlarda çalışır; yuvarlatmalar bir köşede buluştuğunda geçişli yapılır, harmanlanmaz. Kabuklar açılır, eğimler yalnızca düz yüzeylerde eğilir. Tam çekirdek gerektiren özellikler tıklanabilir kalır, ama seçildiğinde "henüz yapılmadı" der. Bkz. [Ağ çekirdeği](topic:solid-kernels) ve [Henüz yapılmayanlar](topic:not-built-yet).

**İki düğme Köşe yuvarlat adını taşır.** Bir eskizde {{ui:Köşe yuvarlat}} ({{key:F}}) bir eskiz köşesini yuvarlatır. Parçada, Özellikler grubundaki {{ui:Köşe yuvarlat}} katı kenarları yuvarlatır (bu sürümde iki düz yüzey arasındaki düz kenarlar). Bu sürümde süpürme ya da loft yoktur: bkz. [Henüz yapılmayanlar](topic:not-built-yet).

**Delikler serbest noktalar ister.** {{ui:Delik}}, Nokta aracıyla yapılmış noktalarda delik açar. Daire merkezleri ve çizgi uçları sayılmaz.

**Tümünden geçerek yalnızca kesmeler içindir.** Bir katı ekleme bir derinlik ister. "Köşeye / yüzeye / sonrakine kadar" bitiş koşulları henüz yok.

**Katı çokgendir.** Ağ çekirdeği yuvarlak yüzeyleri düz çokgenlerden oluşturur; bu yüzden görünüm, hacimler, STL ve 3MF dışa aktarımları bunlardan yapılır: parçanın panelindeki **Eğriler** onları daha ince yapar. Tam STEP dışa aktarımı böyle değildir: yuvarlak yüzeyleri gerçek yüzeylerinde yazar.

**Yalnızca milimetre.** Henüz inç ayarı yok. İnç ölçülerini yazarken 25.4 ile çarpın.

**Y yukarı bakar.** Ön düzlem size bakar ve Üst parçaya yukarıdan bakar, beklediğiniz gibi; ama dünyanın yukarı ekseni Y'dir. STL, 3MF ve tam STEP dışa aktarımları Z yukarı olacak şekilde döndürülür; çokgen STEP Y yukarıyı korur.

**Eşleştirmeler yüzeylerdir, geometri çiftleri değil.** Bir birleşim her zaman yüz yüze konan iki düz yüzeyle başlar. Bir delikteki pim için, deliğin çevresindeki düz yüzeyi ve pimin omuzunu seçin, sonra **Merkez**'i deliğin ekseni ve pimin döndürme ekseni olarak ayarlayın. Birleşimlere ulaşmayan parçalar eklendikleri yerde kalır; onları sürükleyemezsiniz. Bir döngüdeki birleşimler çözülmez.

**Kaydetme bir indirmedir.** Sürekli üzerine yazdığınız bir dosya yoktur. Her kayıt indirme klasörünüzde yeni bir dosyadır. Önce parçayı adlandırın ve dosyalarınızı bir proje klasöründe tutun.

**Bağlam menüleri yok, komut yöneticisi sekmeleri yok.** Her şey araç çubuğunda ve sağ panelde; araç çubuğu yaptığınız işe göre değişir: eskiz araçları yalnızca bir eskizde, montaj araçları yalnızca bir montajda görünür.

**Bir eskizde tuşlar tek harflidir.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} ve {{key:S}} araçları değiştirici olmadan seçer. Bkz. [Tuşlar ve fare](topic:keyboard).
