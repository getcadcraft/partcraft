---
title: Sorun giderme
summary: PartCraft'ta karşılaşabileceğiniz sorunlar: uygulamanın açılmaması, özelliklerin başarısız olması, çözülmeyen eskizler, açılmayan dosyalar ve sorunlu birleşimler; gördüğünüz ileti ve çözümüyle birlikte.
keywords: sorun, hata, yardım, çalışmıyor, başarısız, çökme, boş, webgl, webassembly, çekirdek, henüz yapılmadı, aşırı tanımlı, açık profil, açılamıyor, hiçbir şey olmuyor, yanlış yön, yavaş
from: 7728542c
---

Bir şey çalışmadığında önce alttaki **durum çubuğunu** okuyun: PartCraft, neden reddettiğini ya da sonra neyi beklediğini orada söyler. Başarısız bir özellik, iletisini ayrıca panelinin üst kısmında ve geçmişteki satırının üzerine geldiğinizde gösterir.

## Uygulama açılmıyor

### "Bu tarayıcı 3B gösteremiyor (WebGL kapalı ya da yok), bu yüzden PartCraft burada çalışamaz."

**Neden:** tarayıcıda 3B grafikler (WebGL) kapalı, engellenmiş ya da grafik sürücüsü tarafından desteklenmiyor.

**Çözüm:**

:::chromium
`chrome://settings/system` adresini açın (Edge'de `edge://settings/system`) ve "Mümkün olduğunda grafik hızlandırmayı kullan" seçeneğini açın, sonra tarayıcıyı yeniden başlatın. Zaten açıksa, WebGL durumu için `chrome://gpu` adresine bakın ve grafik sürücünüzü güncelleyin.
:::

:::firefox
`about:support` adresini açın ve Grafik, WebGL bölümüne bakın. Engellenmişse grafik sürücüsünü güncelleyin. `about:config` içinde `webgl.disabled` değeri `false` olmalıdır.
:::

:::safari
Güncel Safari'de WebGL her zaman açıktır. macOS'u güncelleyin (Safari onunla birlikte güncellenir). Hâlâ başarısızsa, grafik donanımını dışarıda bırakmak için aynı Mac'te Chrome ya da Firefox deneyin.
:::

Uzak masaüstleri ve bazı sanal makinelerde WebGL yoktur. Bilgisayarın kendisinde deneyin.

### "Katı çekirdeği yüklenemedi: …"

**Neden:** geometri çekirdeği (bir WebAssembly programı) alınamadı ya da başlatılamadı. Genellikle yükleme sırasında bağlantı koptu, WebAssembly bir şirket politikası ya da tarayıcı güvenlik ayarı ile kapalı, ya da tarayıcı çok eski.

**Çözüm:** sayfayı çevrimiçiyken yeniden yükleyin. Hâlâ başarısız olursa, başka bir güncel tarayıcı deneyin. Firefox'ta `about:config` içinde `javascript.options.wasm` değeri `true` olmalıdır. Çevrimdışıyken uygulama ve çekirdek yalnızca bağlantıyı kaybetmeden önce uygulama çubuğu **Çevrimdışı hazır** diyorsa yüklenir ({{ui:Çevrimdışı için kaydet}} çevrimiçiyken; bkz. [Çevrimdışı çalışma](common:offline)).

### Çevrimdışı düğmesi "Kaydedilemedi" ya da "Çevrimdışı kullanılamıyor" diyor

**Kaydedilemedi**: bazı dosyalar indirilmedi. Çevrimiçiyken tekrar denemek için tıklayın; yavaş ya da kotalı bir bağlantı ikinci bir deneme gerektirebilir. **Çevrimdışı kullanılamıyor**: bu tarayıcı penceresi çevrimdışı bir kopya tutamaz (gizli pencereler ve bazı yönetilen bilgisayarlar bunu engeller). Normal bir pencere kullanın ya da sekmeyi açık tutun.

### PartCraft çevrimdışı ama güncel değil

Çevrimiçiyken **Çevrimdışı hazır** düğmesine tıklayın ve {{ui:Yeniden kaydet (en yeni sürümü al)}} seçeneğini seçin.

### "Süpürme: henüz yapılmadı. Kesin bir çekirdek gerektirir, …"

Tam ileti şöyledir: "<Name>: henüz yapılmadı. Kesin bir çekirdek gerektirir; bu PartCraft sürümünde yoktur. Yardım › Henüz yapılmayanlar bunun yerine ne yapılacağını söyler." Bunu Süpürme, Loft, Kaburga, bir sac metal flanşı, bir yüzey özelliği, Birleştir, Gövdeyi taşı, Gövdeyi ölçekle ya da Yol örüntüsü seçtiğinizde görürsünüz; yalnızca kesin bir çekirdeğin yaptığı diğer şeyler için de görürsünüz. Tarayıcınızda ya da parçanızda bir sorun yoktur: PartCraft'ın bu sürümü her parçayı örgü çekirdeği ile oluşturur. Bunun yerine ne yapacağınız için bkz. [Henüz yapılmayanlar](topic:not-built-yet) ve [Örgü çekirdeği](topic:solid-kernels).

### "Katı çekirdeği yükleniyor…" hiç geçmiyor

Yavaş bir bağlantıda biraz bekleyin: çekirdek ve 3B kütüphanesi ilk seferde indirilir. Sonra sayfayı yeniden yükleyin. Sayfanın kendisi bir hata gösteriyorsa, yukarıya bakın.

## Bir tuşa bastığımda hiçbir şey olmuyor

- Bir kutunun içinde imleç varken tuşlar çalışmaz. Yazdıktan sonra 3B görünüme tıklayın ya da Esc tuşuna basın (ya da Tab ile çıkın).
- Ok tuşları ve {{key:Plus}}/{{key:Minus}} görünümü yalnızca görünüme tıkladıktan sonra döndürür ve yakınlaştırır.
- Bir iletişim kutusu açıksa: önce onu yanıtlayın.
- Bir eskizde {{key:F}}, Sığdır değil, Köşe yuvarlatma aracıdır. {{ui:Sığdır}} düğmesini kullanın.

## Bir araç çubuğu düğmesi gri

- Bir eskiz açıkken özellik düğmeleri grileşir. Önce eskizi kapatın.
- Eskiz araçları yalnızca bir eskizin içinde çalışır.
- {{ui:Geri al}} ve {{ui:Yinele}}, geri alınacak ya da yinelenecek bir şey yoksa grileşir.
- {{ui:Montaj}} bir katı içeren bir parça ister. {{ui:Birleşim}} montajda iki parça ister. {{ui:Parçayı düzenle}} seçili bir parça ister.
- {{ui:STEP AP242 (kesin katı)}} ve {{ui:STEP AP214 (kesin katı)}} bir montajda grileşir: her parçayı ayrı ayrı dışa aktarın. Başka bir program kesin dosyayı reddederse {{ui:STEP AP214 (kesin katı)}} deneyin, sonra {{ui:STEP (yüzeyli, örgü çekirdeği)}}, ve {{ui:Yardım}} › {{ui:Sorun bildir}} yoluyla bize bildirin.
- {{ui:Süpürme}}, {{ui:Loft}} ve kesin çekirdek gerektiren diğer özellikler grileşmez: tıklanabilir kalırlar, ipuçları "henüz yapılmadı (kesin çekirdek gerektirir)" ile biter ve tıklamak bunu durum çubuğunda söyler. Bkz. [Henüz yapılmayanlar](topic:not-built-yet).
- {{ui:Çizim}} bir katı içeren bir parça ister ve bir eskiz açıkken grileşir.
- Bir montajda {{ui:Dışa aktar}} öğeleri grileşir: montajlar henüz dışa aktarılamaz. Kapatın ya da dışa aktarmak için bir parçayı düzenleyin.

## Eskiz sorunları

### Eskizde bir ilişki ekleyemiyorum

"Bu seçimle uyan bir ilişki yok. Bir ya da iki öğe seçin (Shift+tıklama ekler)." İlişki farklı bir seçim gerektirir. Her birinin neye ihtiyacı olduğu için bkz. [Eskiz ilişkileri ve ölçüleri](topic:sketch-relations).

### "Aşırı tanımlı: … hepsi karşılanamaz. Geri alın ya da birini silin."

**Neden:** yeni ilişki ya da ölçü, zaten olanlarla çelişiyor. Eskiz hareket etmedi.

**Çözüm:** {{key:Mod+Z}}, ya da sağ panelin listesinde kırmızı öğelerden birini silin (yanındaki **Sil** seçeneğini seçin).

### "Aşırı tanımlı: … zaten ima ediliyor. Silin."

**Neden:** ilişki hiçbir şey eklemiyor: diğerleri onu zaten zorunlu kılıyor (örneğin bir dikdörtgenin iki kenarında Paralel, ya da zaten sabitlenmiş bir ölçü). Bu sürümde tahrikli ölçü yoktur.

**Çözüm:** silin. Özellik yine de bir uyarıyla oluşturulur.

### "Bu öğeler birlikte ölçülendirilemez."

Bir nokta ile bir daire gibi, örneğin tıkladınız. Bunun yerine dairenin merkez noktasına ölçü verin.

### "Bir yuvarlatma, tam olarak iki çizginin buluştuğu bir köşe gerektirir." / "Bu yarıçap bu çizgiler için çok büyük."

Tam olarak iki düz çizginin köşe noktasına tıklayın. Kısa çizginin izin verdiğinden daha küçük bir yarıçap kullanın.

### Sürüklediğimde geometri geri zıplıyor

Sürükleme bir ilişkiyi ya da bir ölçüyü bozardı, bu yüzden PartCraft onu geri koyar. Yalnızca mavi (eksik tanımlı) geometri hareket edebilir.

### "Bu eskiz açılamıyor: Extrude2 gerekli, ve o başarısız."

Eskiz, henüz yapılmamış bir özelliğin yüzeyinde duruyor. Önce o özelliği düzeltin, ya da bastırmasını kaldırın, ya da ileri alın.

## Özellik sorunları

| İleti | Neden | Çözüm |
|---|---|---|
| "Önce bir eskiz oluşturun: bir düzlem seçin, Eskiz, kapalı bir profil çizin, Çıkış." | Kullanılmamış, eğrileri olan eskiz yok ve seçili de değil | Bir eskiz çizin ya da geçmişte kullanılacak eskizi seçin |
| "Eskizde çıkarılacak kapalı bir profil yok." (ya da "döndürülecek") | Katı çizgilerin kapalı bir döngüsü yok | Boşlukları kapatın; yapı çizgilerini {{key:Q}} ile geri çevirin |
| "Profil açık: (x, y) noktasındaki bir uç hiçbir şeye bağlı değil." | O noktada bir boşluk | Eskizi açın, ucu komşusuna sürükleyin ki yapışsın |
| "Profil (x, y) noktasında dallanıyor: orada ikiden fazla uç birleşiyor." | Aynı noktada üç ya da daha fazla çizgi birleşiyor | Fazla çizgiyi silin ya da yapı çizgisine çevirin |
| "Kapalı bir döngü en az üç kenar ya da bir eğri gerektirir." | İki çizgi ileri geri gidiyor | Döngüyü yeniden çizin |
| "Tümünden geçir yalnızca kesimler içindir. Bir çıkıntı için bir derinlik kullanın." | Çıkıntı için bitişi Tümünden geçir olarak ayarlanmış | Bitişi Kör ya da Orta düzlem olarak ayarlayın |
| "Eskizin bu tarafında kesilecek bir şey yok. Diğer yönü deneyin." | Kesim malzemeden uzağa bakıyor | **Ters yön** kutusunu işaretleyin |
| "Kesilecek bir şey henüz yok." / "Delinecek bir şey henüz yok." | Bu özelliğin öncesinde katı yok | Önce bir çıkıntı yapın, ya da özelliği aşağı taşıyın |
| "Döndürmek için eskizde bir merkez çizgisi (yapı çizgisi) çizin." | Eksensiz döndürme | Bir merkez çizgisi ekleyin ya da Eksen'de bir çizgi seçin |
| "Profil eksenin ötesine geçiyor. Merkez çizgisinin bir tarafında tutun." | Profil eksenin iki tarafında | Profilin yarısını yeniden çizin |
| "Delik noktalarını koyun (Nokta aracı), sonra deliği yapın." | Eskizde serbest nokta yok | Noktaları {{key:P}} ile ekleyin |
| "Havşa, delikten geniş olmalı." | Havşa çapı, Çap'tan büyük değil | Havşayı daha geniş yapın |
| "Havşa, delikten sığ olmalı." | Havşa, kör bir delikten daha derin | Daha sığ yapın ya da deliği daha derin yapın |
| "Kopyalanacak özellikleri seçin." | Hiçbir şey işaretlenmemiş bir örüntü ya da ayna | Özellikler altında kopyalanacak bir özelliği işaretleyin |
| "Extrude2 kopyalanacak bir katıya sahip değil." | Kopyalanan özellik başarısız ya da kapalı | Düzeltin ya da bastırmasını kaldırın |
| "Sketch3 gerekli, ve o başarısız." | Bağlı olduğu bir özellik yapılmadı | Adı geçen özelliği düzeltin |
| "Bu özelliğin üstünde durduğu yüzey yok (Extrude1 yapılmadı)." | Eskizin yüzeyi artık yok | Bu özelliği düzeltin ya da eskizi silip yeniden çizin |
| "Bundan sonra parçadan geriye hiçbir şey kalmadı." | Bir kesim tüm malzemeyi kaldırdı | Kesimin boyutunu ve yönünü kontrol edin |
| "Katı çekirdek bunu oluşturamadı (…)." ya da "Katı çekirdek bunu gövde ile birleştiremedi." | Çekirdek geometriyi reddetti | Geri alın ya da boyutları biraz değiştirin; tam olarak birbirine değen yüzeyler buna neden olabilir |
| "Süpürme: henüz yapılmadı. Kesin bir çekirdek gerektirir, bu PartCraft sürümünde yoktur." (Loft, Kaburga ve diğerleri de) | Daha önceki bir sürümde yapılmış, yalnızca kesin bir çekirdeğin yapabileceği bir özellik. Geçmişte kalır ve değişmeden geri kaydedilir | Bastırın ya da silin; bunun yerine ne yapılacağı için bkz. [Henüz yapılmayanlar](topic:not-built-yet) |
| "Bu yere 5 mm'lik bir yuvarlatma sığmıyor (…)." / "2 mm'lik bir pah …" | Boyut, kenarın yanındaki bir yüzey için çok büyük ya da köşe harmanlanamıyor | Daha küçük boyut ya da özellik başına daha az kenar |
| "Yuvarlatma: bu sürümde yalnızca iki düz yüzey arasındaki düz kenarlar (örgü çekirdeği bunları oluşturur). Eğri kenarları eskizde yuvarlatın ya da pahlayın." (Pah da aynı şekilde) | Seçilen bir kenar yuvarlak, örneğin bir deliğin kenarı, ya da eğri bir yüzeyde | {{ui:Kenarları seç}} ile seçip kaldırın; bunun yerine köşeyi eskizde yuvarlatın ya da pahlayın |
| "Kenar boyunca yarıçapı değişen bir yuvarlatma: henüz yapılmadı (kesin bir çekirdek gerektirir). Tek bir yarıçap verin." | **Değişken yarıçap** işaretli | İşaretini kaldırın ve tek bir yarıçap verin |
| "Yuvarlatma: örgü çekirdeği ile yuvarlatılmış kenarların buluştuğu yerde köşeler gönye ile kesilir, harmanlanmaz." (⚠, bir uyarı) | Seçilen kenarlar bir köşede buluşuyor; yuvarlatmalar orada keskin bir çatlakta birleşiyor | Düzeltilecek bir şey yok: parça oluşturuldu. Çatlak önemliyse daha az kenarı yuvarlatın |
| "Kenarı yuvarlatılan bir kenar yok: Extrude1 ile Cut2 arasındaki kenar." | Daha önceki bir değişiklik kenarı kaldırdı | {{ui:Kenarları seç}}, kırmızı kenarı kaldırın, yeni olanı seçin |
| "Kenarları görünümde seçin, sonra ekleyin." | Yuvarlatma ya da pahın kenarı yok | {{ui:Kenarları seç}} |
| "Kaldırılacak yüzeyleri seçin (açık), sonra kabuk oluşturun." | Kabuğun açık yüzeyi yok | {{ui:Yüzeyleri seç}} |
| "Kabuk bu kalınlıkta yapılamadı (…)." | Duvar, modelin ince bir kısmından ya da bir yuvarlatma yarıçapından kalın | Daha ince bir duvar ya da daha büyük yuvarlatmalar |
| "Kabuk: bu sürümde yalnızca düz yüzeyleri açar (örgü çekirdeği oluşturur)." | Açılan bir yüzey eğri | {{ui:Yüzeyleri seç}} ile seçip kaldırın; yalnızca düz yüzeyleri açın |
| "Eğim: bu sürümde yalnızca düz yüzeyler (örgü çekirdeği oluşturur)." | Eğimlenen bir yüzey silindir, koni ya da serbest biçimli bir yüzey | Kaldırın; yalnızca düz yüzeylere eğim uygulayın |
| "Açılan bir yüzey yok (…)." | Daha önceki bir değişiklik yüzeyi kaldırdı | {{ui:Yüzeyleri seç}} ile yeniden seçin |
| "Fillet1 gövdenin kenarlarını ya da duvarlarını değiştirir; kopyalanamaz. …" | Bir örüntü ya da ayna yuvarlatma, pah ya da kabuğu kopyalar | İşaretini kaldırın; önce kesimleri örüntüleyin, sonra yuvarlatın |
| "Bu, yalnızca kesin bir çekirdeğin bulabildiği bir yüzeyde: bu sürümde henüz yapılmadı." | Örgü çekirdeğinin bulamadığı bir yüzeyde eskiz, örneğin daha önceki bir sürümde yapılmış | Bir temel düzlemde ya da bir ekstrüzyonun düz yüzeyinde eskiz yapın ve ölçülerle konumlandırın |
| "Katının bir yüzeyini ya da kenarını kullanır; bunu yalnızca kesin bir çekirdek bulabilir: bu sürümde henüz yapılmadı." | Katının bir yüzeyinde ya da kenarında bir referans düzlemi, ekseni ya da noktası | Bunun yerine temel düzlemlerden, eskiz noktalarından ya da koordinatlardan yapın |
| "Bir yüzeye, bir sonraki yüzeye ya da bir köşeye kadar ekstrüzyon: henüz yapılmadı (kesin bir çekirdek gerektirir)." / "Konik: henüz yapılmadı (kesin bir çekirdek gerektirir)." | Yalnızca kesin bir çekirdeğin yapabildiği bir bitiş koşulu ya da konik | Ölçtüğünüz bir Kör ya da Orta düzlem derinliği kullanın; Konik değerini 0 bırakın |

## Seçim sorunları

- "Bu yüzey eğri. Eskiz yapmak için düz bir yüzey ya da bir düzlem seçin." Eskizler düz bir yüzey ister. Bir temel düzlemde eskiz yapın ve eskizi ölçülerle konumlandırın.
- "Seçildiği yerde sabit" yazan bir yüzey, bir eskiz kenarıyla oluşturulmamıştır (örneğin bir örüntü kopyasının yüzeyi); bu yüzden üzerindeki bir eskiz parça değişse de yerinde kalır.
- Kenarlara isabet etmek zordur: yakınlaştırın. İmleç tam üzerindeyken bir kenar, yanındaki yüzeyin önüne geçer.

## Dosya sorunları

| İleti | Çözüm |
|---|---|
| 'PartCraft kendi .partcraft.json dosyalarını, SolidWorks için CadCraft makrosunun dışa aktardığı dosyaları (.cadcraft-sw.json) ve STEP dosyalarını açar. "bracket.igs" bunların hiçbiri değil.' | Yalnızca bu dosyalar tanınır (ve STL, OBJ ve 3MF ağları ile .3dm dosyaları) |
| '"part.stp" bir STEP dosyası değil (ISO-10303-21 ile başlamıyor).' | Dosya STEP metni değil |
| "Bu STEP dosyası burada içe aktarılamayacak kadar büyük (60 MB'den büyük)." | Kaynağında sadeleştirin |
| "Bu dosya bir PartCraft parçası olamayacak kadar büyük." (kendi kaydettiğiniz parçada) | Daha önceki bir sürümde içe aktarılan büyük bir STEP katı parça dosyasını 50 MB'ın üzerine çıkardı. Bu olmadan önceki bir kopyayı kullanın |
| "Bu dosya bir PartCraft parçası olamayacak kadar büyük." | Dosya 50 MB'den büyük; bu bir PartCraft dosyası değil |
| "Bu bir PartCraft dosyası değil (JSON değil)." / "Bu bir PartCraft dosyası değil." | Dosya bozuk ya da başka bir programın |
| "Bu dosya daha yeni bir PartCraft ile kaydedildi (dosya sürümü …); bu sürüm … okur." | Daha yeni PartCraft ile açın |
| "Extrude2: derinlik hatalı." (ya da başka bir değer) | Dosya elle düzenlenmiş ya da bozulmuş. Daha önceki bir kopya kullanın |
| Montajda Ekle, "Part1.partcraft.json dosyasında eklenecek bir katı yok." der. | Parça dosyasında katı yok. Açın, bir katı oluşturun, kaydedin ve yeniden ekleyin |

**Kaydettiğim dosya beklediğim yerde değil.** Kaydetme bir indirmedir: tarayıcınızın indirilenler klasörüne bakın ya da tarayıcının araç çubuğundaki indirme listesini açın. Bkz. [Dosyalarınız nereye gider](common:your-files).

**Bir parçayı açtım ama montaj hâlâ ekranda.** Parça, montajın arkasında yüklendi. Montajı kapatmak ve parçayı görmek için {{ui:Kapat}} seçin. Parça dosyalarını açmadan önce montajları kapatın.

## Çizim sorunları

| İleti | Çözüm |
|---|---|
| "Önce bir katı oluşturun, sonra çizimini yapın." | Önce parçayı oluşturun |
| "Sayfada detay için yer yok. Detayı küçültün ya da bir görünüşü kaldırın." | Daha küçük **Detay yarıçapı** ya da **Detay ölçeği**, ya da kesiti kaldırın |
| "Bir detay ön, üst, sağ ya da kesit görünüşünden alınır." | Bu görünüşlerden birine tıklayın |
| "Görünüşlerden birine tıklayın." | Tıklama boş kâğıda yapıldı |
| "Konum en az bir veri referansı gerektirir." ve diğer çerçeve iletileri | Panelin istediği veri referanslarını ayarlayın ya da başka bir özellik seçin |
| "Çizim görünüşleri yapılamadı: …" | Son değişikliği geri alın. Devam ederse kaydedin, sayfayı yeniden yükleyin ve parçayı yeniden açın |

## Montaj sorunları

| İleti | Çözüm |
|---|---|
| "Önce bir katı oluşturun, sonra bir montaja yerleştirin." | Parçanın henüz katısı yok |
| "Önce ikinci bir parça ekleyin (Kopya ekle, Ekle ya da Düzenle › Çoğalt)." | Bir birleşim iki parça gerektirir |
| "Farklı bir parçadaki bir yüzey seçin." | Bir birleşimin iki yüzeyi farklı parçalarda olmalı |
| "Bu yüzey eğri. Düz bir yüzey seçin …" | Birleşimler düz yüzeylerden başlar. Bir delik ya da döndürme ekseni için **Merkez** ayarını kullanın |
| "Bracket2 zemine oturtulmuş parçaya bağlı değil, bu yüzden olduğu yerde kalır." | Yerleştirilmiş bir parçaya bu parçadan bir birleşim ekleyin |
| "Revolute3 kapanamayacak bir döngü oluşturuyor: 2.000 mm kadar sapmış. Döngünün birleşimlerinin yüzeylerini, ofsetlerini ve sınırlarını kontrol edin." | Parçalar hepsi birbirine değemez: uzunlukları, her birleşimin kullandığı yüzeyleri, ofsetleri (yüzeye yüzeye istiflenen parçalar derinlikte uymalı) ve sınırları kontrol edin; ya da döngünün bir birleşimini kaldırın |
| "Bu birleşimin kullandığı yüzey Bracket'tan kaybolmuş." / "Bu birleşimin kullandığı eksen Bracket'tan kaybolmuş." | Parça düzenlendi. Birleşimi kaldırın ve yeniden oluşturun |
| "Eksen yüzey boyunca uzanıyor, bu yüzden birleşimin merkezini ayarlayamaz." | Yüzeyi kesen bir eksen seçin ya da "Yüzeyin kendi başlangıcı" |
| "Bir montaj en az bir parça tutar. Bunun yerine kapatın." | {{ui:Kapat}} kullanın |

**Parçalar birleşti ama yanlış yerde.** Birleşimin iki tarafı için **Merkez** ayarını, hizalanması gereken delik ya da döndürme eksenlerine ayarlayın, sonra **Açı (°)** ve **Ofset (mm)** değerlerini düzeltin.

## Yavaş

- Modellerken **Eğriler** ayarını Normal ya da Kaba yapın; dışa aktarmadan önce İnce'ye geçin.
- Büyük örüntü sayıları (yüzlerce kopya) her değişiklikte yeniden oluşturulması uzun sürer. Diğer özellikler üzerinde çalışırken örüntüyü bastırın.
- Çakışma ve hareket denetimi her parça çiftini karşılaştırır; büyük montajlar daha uzun sürer.
- Diğer ağır sekmeleri kapatın. PartCraft kendi bilgisayarınızın işlemcisi ve grafiği üzerinde çalışır.

## Hâlâ takıldınız mı

Önce dosyanızı kaydedin ({{key:Mod+S}}), sonra sayfayı yeniden yükleyin ve dosyayı tekrar açın. Bir özellik hâlâ başarısız olursa, onu seçin, iletisini okuyun ve son iyi duruma dönmek için {{key:Mod+Z}} deneyin.
