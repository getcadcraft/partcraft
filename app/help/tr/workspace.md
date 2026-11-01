---
title: PartCraft ekranı
summary: Her çubuğa ve panele bir bakış: araç çubuğu ve nasıl değiştiği, geçmiş, parça bilgileri, 3B görünüm, özellikler paneli ve durum çubuğu.
keywords: ekran, düzen, araç çubuğu, geçmiş, özellik ağacı, özellikler, panel, durum çubuğu, arayüz, tur, tam ekran
from: 7394fc49
---

Ekran beş bölümden oluşur: üstte araç çubuğu, solda geçmiş, ortada 3B görünüm, sağda özellikler paneli ve altta durum çubuğu. Hepsinin üstünde CadCraft uygulama çubuğu durur.

## Uygulama çubuğu

En üstteki ince çubuk PartCraft'a değil, CadCraft sitesine aittir. Uygulama adını ve nerede çalıştığını, bir sürüm menüsünü, **PartCraft hakkında**, ekran kipi düğmesini ve Kâğıt / Model tema anahtarını gösterir.

- **Kâğıt**, açık bir sayfada koyu çizgilerdir. **Model**, koyu bir zeminde açık çizgilerdir. Eskiz renkleri temayı izler.
- {{ui:Ayarlar}} (dişli veya {{key:Mod+,}}) bir {{ui:PartCraft}} sekmesi içerir: görünümü hangi fare düğmesinin döndürdüğü, fare tekerleği veya dokunmatik yüzey ve eskiz sırasında ilişkiler. Bkz. [PartCraft ayarları](topic:settings).
- Ekran kipi düğmesi veya {{key:Ctrl+Shift+F}} normal, tam ekran ve çubukları gizli tam ekran arasında dolaşır. Çubuklar gizliyken onları geri getirmek için işaretçiyi üst kenara götürün (veya oraya dokunun). {{key:Esc}} normale döndürür. Bu tuş Mac'te de ⌘ değil, {{key:Ctrl+Shift+F}} tuşudur.

## Araç çubuğu

Araç çubuğu gruplanmıştır. Ne yaptığınıza göre değişir, böylece tek satıra sığar:

| Grup | Düğmeler | Ne zaman görünür |
|---|---|---|
| Dosya | {{ui:Yeni}}, {{ui:Aç}}, {{ui:Kaydet}}, {{ui:Dışa aktar}} (bir menü) | Her zaman |
| Eskiz | {{ui:Eskiz}} | Hiçbir eskiz açık değilken |
| Eskiz | {{ui:Çık}}, {{ui:Çizgi}}, {{ui:Dikdörtgen}}, {{ui:Daire}}, {{ui:Yay}}, {{ui:Nokta}}, {{ui:Merkez çizgisi}}, {{ui:Köşe yuvarlat}}, {{ui:Ölçülendirme}}, {{ui:Yapı}} | Yalnızca bir eskiz açıkken |
| Özellikler | {{ui:Ekstrüzyon}}, {{ui:Kes}}, {{ui:Döndürme}}, {{ui:Delik}}, {{ui:Doğrusal}}, {{ui:Dairesel}}, {{ui:Ayna}}, {{ui:Köşe yuvarlat}}, {{ui:Pah kır}}, {{ui:Kabuk}}, {{ui:Daha fazla}} (bir menü: Döndürme kesmesi, Düzlem, Eksen, Nokta, Süpürme, Loft, Eğim) | Parçada; bir eskiz veya çizim açıkken değil. Köşe yuvarlat ve Pah kır iki düz yüzey arasındaki düz kenarlarda, Kabuk ve Eğim düz yüzeylerde çalışır. Süpürme ve Loft bu sürümde henüz yapılmadı (kesin bir çekirdek gerektirirler); tıklamak bunu söyler |
| Özellikler | {{ui:Bitti}} | Yalnızca bir köşe yuvarlatma, pah, kabuk veya eğim için kenar ya da yüzey seçerken |
| Çizim | {{ui:Çizim}} | Parçada (parçanın bir katısı olduğunda kullanılabilir) |
| Çizim | {{ui:Datum}}, {{ui:Çerçeve}}, {{ui:Yüzey işlemi}}, {{ui:Detay}}, {{ui:PDF}}, {{ui:Geri}} | Yalnızca çizim sayfasında |
| Montaj | {{ui:Montaj}} | Parçada (parçanın bir katısı olduğunda kullanılabilir) |
| Montaj | {{ui:Kopya ekle}}, {{ui:Ekle}}, {{ui:Birleşim}}, {{ui:Çakışma}}, {{ui:Parçayı düzenle}}, {{ui:Kapat}} | Yalnızca bir montajda |
| Montaj | {{ui:Geri}} | Bir montajdan bir parçayı düzenlerken |
| Düzenle | {{ui:Geri al}}, {{ui:Yinele}}, {{ui:Kopyala}}, {{ui:Yapıştır}}, {{ui:Daha fazla}} (bir menü: Kes, Kopyala, Yapıştır, Olduğu yere yapıştır, Çoğalt, Sil, Tümünü seç, Seçimi kaldır) | Her zaman; her öğe içinde bulunduğunuz eskiz, geçmiş veya montaj üzerinde çalışır |
| Görünüm | {{ui:Sığdır}}, {{ui:Dik bak}}, {{ui:Görünümler}} (bir menü: Ölç, Kütle özellikleri, Kesit, Eğim, Zebra, Eğrilik, {{ui:Taban düzlemleri}}, sonra İzometrik, Ön, Arka, Üst, Alt, Sağ, Sol) | Her zaman |

Ne yaptığını ve tuşunu görmek için bir düğmenin üzerinde bekleyin. Soluk bir düğme şu an kullanılamaz: örneğin bir eskiz açıkken özellik düğmeleri ya da montajda iki parça olmadan önce {{ui:Birleşim}}.

Düzenle grubundaki {{ui:Daha fazla}} menüsü her düzenleme eylemini tuşuyla listeler. Kopyalama ve yapıştırmanın neyin üzerinde çalıştığı bulunduğunuz yere göre değişir; bkz. [Kopyalama, yapıştırma ve çoğaltma](topic:copy-paste). Soluk bir öğenin ipucu neden şu an çalışamadığını söyler.

{{ui:Dışa aktar}} menüsü {{ui:STL, 3B baskı için}}, {{ui:3MF, 3B baskı için}}, {{ui:STEP AP242 (kesin katı)}}, {{ui:STEP AP214 (kesin katı)}}, {{ui:STEP (yüzeyli, örgü çekirdeği)}}, {{ui:STEP AP214 (parçalı, örgü çekirdeği)}}, {{ui:Eskizin ya da düz yüzeyin DXF'i}} ve {{ui:Çizim (PDF): görünümler, kesit, detay, GD&T}} öğelerini içerir. Kesin iki STEP öğesi soluktur: bu sürümde henüz yapılmadılar, bu yüzden {{ui:STEP (yüzeyli, örgü çekirdeği)}} kullanın.

## Geçmiş (sol)

Soldaki panel parçanın özellik geçmişidir; PartCraft yeniden kurmayı bu listeyi yukarıdan aşağıya izleyerek yapar.

- Başlık parçanın adıdır (yeniden adlandırana kadar "Part1").
- **Ön düzlem**, **Üst düzlem** ve **Sağ düzlem** ilk gelir. Seçmek için birine tıklayın; görünümde vurgulanır.
- Altlarında özellikleriniz yapıldıkları sırayla gelir. Bir özelliğin kullandığı eskiz o özelliğin altında girintili durur.
- Bir satırın sağ ucundaki bayrak durumunu söyler:

| Bayrak | Anlamı |
|---|---|
| (yok) | Kuruldu ve bir eskiz tam tanımlı |
| − | Eksik tanımlı bir eskiz (hâlâ hareket edebilir) |
| + | Fazla tanımlı bir eskiz |
| ⚠ | Kuruldu, bir uyarıyla (okumak için üzerinde bekleyin) |
| ⚠ hata | Özellik başarısız oldu. Nedenini okumak için üzerinde bekleyin ya da tıklayın |
| ⚠ kurulmadı | Özellik, başarısız olmuş ya da kapalı başka bir özelliğe ihtiyaç duyuyor |
| kapalı | Bastırılmış |

- Her özellik adından sonra ana sayısını gösterir, örneğin bir Ekstrüzyon için "25 mm" ya da bir delik için "Ø6.6 baştan sona". Orada değiştirmek için sayıya çift tıklayın ya da satırda {{key:F2}} tuşuna basın. Bkz. [Ölçüleri değiştirme](topic:change-sizes).
- Sağda düzenlemek için bir özelliğe tıklayın. Açmak için bir eskize çift tıklayın.
- Geri sardığınızda listede bir **Geri sarma çubuğu · ileri sar** satırı belirir. Altındaki özellikler soluktur ve kurulmaz.
- Bir satır odaktayken {{key:Up}} ve {{key:Down}} satırlar arasında gezinir, {{key:Alt+Up}} / {{key:Alt+Down}} geçmişin izin verdiği yerde özelliğin kendisini taşır.

Bir montajda aynı panel bunun yerine **Parçaları** (ilki "sabit" işaretlidir) ve **Birleşimleri** listeler.

### Parça bilgileri

Geçmişin altında **Parça** kutusu katının **Hacmini**, **Yüzey alanını**, **Boyutunu (X × Y × Z)**, **Baştan sona deliklerini**, **Gövdelerini**, **Üçgenlerini**, **Özelliklerinin** sayısını ve kaçının **Başarısız** olduğunu listeler. Hacimler ve alanlar örgü çekirdeğinin kurduğu yüzeycikli katınkilerdir; yuvarlak şekillerde gerçek değerin biraz altındadır (bkz. [Özellikler ve seçenekleri](topic:features#curves-resolution)).

Bir montajda kutunun başlığı **Montaj** olur: Parçalar, Örnekler, Birleşimler, Bağlı değil, Çakışma.

## 3B görünüm (orta)

Görünüm katıyı, taban düzlemlerini ve henüz bir özellik tarafından kullanılmamış her eskizi gösterir.

Parça boşken taban düzlemleri tam çizilir. Parçanın bir katısı olduğunda geri çekilirler: parçayı örtmesinler diye soluk çizilirler ve tıklamalar onlardan geçip parçaya gider. Nereye eskiz yapacağınızı seçerken (hiçbir şey seçili değilken {{ui:Eskiz}}) ve geçmişte birini seçtiğinizde tam olarak geri gelirler. {{ui:Görünümler}} › {{ui:Taban düzlemleri}} onları tamamen gizler; nereye eskiz yapacağınızı seçerken yine görünürler. PartCraft bu seçimi hatırlar.

- Parçayı döndürmek için sürükleyin, kaydırmak için sağ veya orta düğmeyle sürükleyin, işaretçinin bulunduğu yere yakınlaşmak için tekerleği çevirin. Ayrıntılar [Tuşlar ve fare](topic:keyboard) konusunda.
- Bir yüzeyin, kenarın veya düzlemin yandığını görmek için üzerinde bekleyin. Seçmek için tıklayın. Yüzeyler bütün olarak vurgulanır, kenarlar bütün olarak çizilir ve seçilir. {{key:Shift}}+tıklama birkaç kenar veya yüzey toplar. İşaretli kalırlar.
- Sağ üstteki görünüm küpü parçayla birlikte döner: oradan bakmak için bir yüze, kenara veya köşeye tıklayın, döndürmek için sürükleyin, ev düğmesi başlangıca döner. Bkz. [Görünüm küpü](topic:view-cube).
- Seçili bir Ekstrüzyon uç yüzeyinde turuncu bir ok, bir Döndürme dönüşünün sonunda eğri bir ok gösterir: derinliği veya açıyı değiştirmek için onu sürükleyin ya da yanındaki kutuya yazın. Bkz. [Ölçüleri değiştirme](topic:change-sizes#drag-it-in-the-view).
- Bir parça boşken **Bir parça başlatın** başlıklı bir kutu ilk adımları listeler.
- Açmak için bir `.partcraft.json` veya `.partcraft-asm.json` dosyasını görünümün herhangi bir yerine bırakın. Oraya bırakılan bir `.step`, `.stp`, `.stl`, `.obj`, `.3mf` veya `.3dm` dosyası katı gövde olarak açılır.

### Kenar veya yüzey seçerken

Hiçbir şey seçili değilken {{ui:Köşe yuvarlat}}, {{ui:Pah kır}} veya {{ui:Kabuk}} sonrasında (ya da böyle bir özellikte {{ui:Kenarları seç}} ile) parça o özellikten önceki hâliyle görünür. Eklemek veya çıkarmak için kenarlara ya da yüzeylere tıklayın; işaretleri neyin içeride olduğunu gösterir. {{ui:Bitti}} veya {{key:Esc}} bitirir. Bkz. [Yuvarlatma, pah kırma ve içini boşaltma](topic:fillet-chamfer-shell).

### Çizim sayfasında

{{ui:Çizim}}, 3B görünümün yerine A3 çizim sayfasını koyar. Tekerlek yakınlaştırır, sağ veya orta düğmeyle sürükleme kaydırır, {{key:F}} sığdırır. Bkz. [Bir çizim yapın](topic:drawing-pdf).

### Bir eskiz açıkken

Görünüm eskiz düzlemine dik bakacak şekilde döner ve üstte bir 2B eskiz katmanı belirir. Parça yalnızca bu eskizden önce yapılan özellikleri gösterir. Sol üstteki bir şerit eskizin durum çipini ("Tam tanımlı", "Eksik tanımlı · 3 serbestlik derecesi" vb.) ve "Extrude1'in bir yüzeyinde Sketch2" gibi adını gösterir.

## Özellikler paneli (sağ)

Sağdaki panel seçili olanı gösterir ve başlığı ona ad verir:

- **Parça** (hiçbir şey seçili değil): parçanın **Adı** ve **Eğriler** ayarı.
- Bir düzlem: bir {{ui:Üzerine eskiz}} düğmesi.
- Bir **Yüzey**: ne tür olduğu (Düz yüzey, yarıçapı ve ekseniyle Silindir, Koni, Küre veya Simit), alanı, hangi özelliğin yaptığı ve bir düz yüzey için {{ui:Bu yüzeyde eskiz}}, {{ui:Dik bak}}, {{ui:Yüzeyi DXF olarak dışa aktar}}, {{ui:Bundan ekstrüde et}}, {{ui:İçine kes}} ve {{ui:Burada delik}} (bkz. [Bütün bir yüzeyi çekme veya itme](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- Bir **Kenar**: türü (doğru, merkezi ve yarıçapıyla bir daire veya bir eğri), uzunluğu ve arasında bulunduğu iki yüzey ("Extrude1 uç yüzeyi ve Extrude1 yanı" gibi), {{ui:Köşe yuvarlat}} ve {{ui:Pah kır}} düğmeleriyle.
- {{key:Shift}} ile seçilmiş birkaç kenar veya yüzey: kaç tane olduğu, kenarlar için {{ui:Köşe yuvarlat}} ve {{ui:Pah kır}} ile ve {{ui:Temizle}}.
- Bir özellik: sayıları ve seçenekleri, eskizinin ölçüleri, sonra {{ui:Bastır}}, {{ui:Buraya geri sar}}, {{ui:Yukarı taşı}}, {{ui:Aşağı taşı}}, {{ui:Sil}} ve **Adı**.
- Açık bir eskiz: durumu, seçime ekleyebileceğiniz ilişkiler, ilişkiler ve ölçüler listesi, **Koordinatlarla ekle** ve {{ui:Eskizden çık}}, {{ui:Sığdır}} ve {{ui:DXF olarak dışa aktar}}.
- Çizim sayfasında: kesit ve detay ayarları ya da seçili GD&T simgesi.
- Bir montajda: montaj, seçili parça veya seçili birleşim.

Her sayı kutusu {{key:Enter}} veya {{key:Tab}} tuşuna bastığınızda ya da başka yere tıkladığınızda etkili olur. Parça hemen yeniden kurulur; Tamam düğmesi yoktur. Geri dönmek için {{key:Mod+Z}} kullanın.

## Durum çubuğu (alt)

- Solda, işaretçinin eskizdeki koordinatları (yalnızca bir eskiz açıkken).
- Ortada iletiler: sırada ne yapılacağı ve bir şeyin neden reddedildiği. Hiçbir şey olmuyor gibi göründüğünde okuyun.
- Sağa yakın, çekirdek çipi: bu sürümde her zaman "Örgü çekirdeği". Ne anlama geldiğini görmek için üzerinde bekleyin. Bkz. [Örgü çekirdeği](topic:solid-kernels).
- Sağda bir çip: parça yeniden kurulurken "Yeniden oluşturuluyor…", sonra her şey yolundaysa "… ms'de yeniden oluşturuldu" ya da "1 özellik başarısız". Bir montajda "… ms'de yerleştirildi" der ya da birleşim sorunlarını sayar.

Ayrıca bkz. [Illustrate'te bir kılavuz başlatma](topic:illustrate): parçalarınızdan ve montajlarınızdan montaj kılavuzları yapan çalışma alanı.

## Dar ekranda

Telefon gibi 760 piksel genişliğe kadar, görünüm ekranı korur: araç çubuğu yana kayan tek bir satırdır ve paneller alttaki bir çubuktan sayfa olarak açılır. {{ui:Araçlar}} araç çubuğunu gizler ve {{ui:Taşı}} onu alta koyar. Bkz. [Dokunmatik yüzey, dokunma ve küçük ekranlar](topic:trackpad-and-touch).
