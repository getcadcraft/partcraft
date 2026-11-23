---
title: "0.9'da yenilikler (önceki)"
summary: "PartCraft 0.9 yüzler arasında köşe yuvarlatmalar ve katılara kalınlaştırma, binlerce parçalık montajlar, revizyonlu bir Dokümanlar kasası, bir Solid FEM gerilme eklentisi, on yay yöntemi, İngiltere çelik boyutları, bir Baskı aşaması ve reçine baskı eklentileri ekler."
keywords: "0.9'da yenilikler, yenilikler, önceki sürüm, yüzler arası köşe yuvarlatma, yuvarlanan top, birden fazla kenar köşe yuvarlatma, kalınlaştır, yüzeylerden katı, step kabuk, iges katı, tarama köşe yuvarlatmaları, büyük montaj, hafif görüntüleme, 20000 parça, dokümanlar, kasa, check out, revizyon, sürüm, nerede kullanıldı, rhino bağlantısı, grasshopper, 3dm, imleçler, fabrika zemini, iş kuyruğu, solid fem, sonlu elemanlar, von Mises, doğal frekans, yay yöntemleri, İngiltere çelik profilleri, baskı aşaması, reçine, GOO, CTB, tabla, düze aç, değişiklikler, 0.8, 0.8.1, sürüm, yeni özellikler, canlı analiz, düzenlerken güncelle, ne önce kırılır, yük katsayısı, doğrusal olmayan, akma, plastik gerinim, temas, calculix, hareket çalışması, açıklık, yüzeyler, NURBS, düzgünleştir, gövde, üretici, üretilen gövde, fotoğraftan eskiz, baskı için ölçekleme, baskı için bölme, büzülme, iç içe saclar, G kodu, çizim, delik ölçülendirme, asistan, MCP, diller, araç çubuğu satırları"
from: 1dafd7c8
---

Bu, PartCraft 0.9'da 0.8.1'e göre neyin değiştiğidir. Yüzeyler artık katılara kapanır, binlerce parçalı montajlar kullanılabilir kalır, bir Dokümanlar kasası revizyonları tutar ve bir Solid FEM eklentisi bir parçadaki gerilmeyi denetler. Her madde nerede bulunacağını söyler.

## 0.9.1'de yeni

- **Kesin STEP dışa aktarma.** {{ui:Dışa aktar}} › {{ui:STEP AP242 (kesin katı)}} ve {{ui:STEP AP214 (kesin katı)}} artık çalışır. Delikler, çıkıntılar, köşe yuvarlatmalar, koniler, küreler ve torusler gerçek yüzeylerinde, kenarları gerçek dairelerle yazılır; böylece başka bir CAD ya da CAM programı bir deliği delik olarak seçebilir. Spline kenarlar, modellenmiş dişler ve içe aktarılmış ağlar aynı katıda düz yüzey olarak kalır. Bkz. [Baskı, STEP ve DXF için dışa aktarma](topic:export-files#for-other-cad-programs-step).
- **STEP içeri, kesin STEP dışarı.** Açtığınız bir STEP dosyası kendi düz yüzlerini, silindirlerini, konilerini, kürelerini ve torusları korur; böylece {{ui:Dışa aktar}} › {{ui:STEP AP242 (kesin katı)}} bunları gerçek yüzeyler olarak geri yazar, yüzey olarak değil. Cıvata delikli bir tedarikçi kirişi, içine kestiğiniz her şeyle birlikte girdiği yüzlerle çıkar. Dosyanın spline, süpürülmüş ve döndürülmüş yüzeyleri yüzey olarak kalır; STL, OBJ ve 3MF gövdeleri de öyle. Daha önce kaydedilmiş bir parça için STEP dosyasını yeniden açın. Bkz. [STEP dosyası açma ve üzerine inşa etme](topic:import-step).
- **Yüz DXF'inde gerçek daireler.** Düz bir yüz seçilmiş {{ui:Dışa aktar}} › {{ui:Eskizin ya da düz yüzün DXF'i}} artık yuvarlak delikleri, deliğin kendi merkezi ve yarıçapıyla daire olarak yazar; lazer, plazma ya da su jeti tablası için. Diğer yuvarlak kenarlar hâlâ yüzeydir.
- **Atölye için kesin STEP.** {{ui:İmalat}}'ta {{ui:Tam STEP (iş koordinatları)}}, parçayı bağlamanın iş orijininde ve Z takım ekseni boyunca olacak şekilde yazar; G kodunun kullandığı koordinatlar. Bkz. [Takım yolları ve G kodu oluşturma](topic:manufacture#exact-step-for-the-shop).

## Yeni

### Yüzeyler ve katılar

- **Yüzler arasında köşe yuvarlatma.** {{ui:Yüzeyler}}'i {{ui:Çalışma alanı}} kutusundan seçin, sonra {{ui:Yüzler arasında köşe yuvarlat}}. Bir katının iki yüzünü seçin, yarıçapı yazın ({{ui:Uçtaki yarıçap (mm, 0 = aynı)}} ise kenar boyunca değişen bir yarıçap için). Sonuç satırı, köşe yuvarlatmanın ideal yuvarlanan toptan ne kadar uzak olduğunu söyler; sığmayan bir yarıçap ise yüzü adıyla belirtilerek reddedilir. {{ui:Birden fazla kenarı yuvarlat}} birçok kenarı bir adımda yuvarlar; üç yuvarlatılmış kenarın düz yüzlerde buluştuğu yerde küre köşe için {{ui:Köşeler (üçünün birleştiği yerde küre yaması)}} işaretleyin. Bkz. [Serbest yüzeyler (NURBS)](topic:nurbs-surfaces).
- **Katıya kalınlaştırma.** Aynı çalışma alanındaki {{ui:Katı olarak kalınlaştır}} bir yüzeye kalınlık verir; {{ui:Diğer taraf}} onu diğer yöne büyütür. Bir katlanma ya da kendini kesme, yüzey ve yer adıyla belirtilerek reddedilir.
- **Yüzeylerden katılar.** Kırpılmış yüzeyler birleşim, çıkarma ve kesişim ile birleştirilebilir ve parçaya tek bir geri alma adımı olarak yerleştirilir. STEP bir katıyı tek bir kapalı kabuk olarak, IGES ise tek bir katı olarak yazar; ikisi de katı olarak geri okunur. Yüzler kenar kenar eşleşmezse dosya ayrı yüzler alır ve durum satırı bunu söyler. Katılar düğüm düzenleyicisinde de yapılabilir; bkz. [Düğüm düzenleyici](topic:nodes).
- **Taramalarda kenar ve değişken yuvarlatmalar.** Bir taramaya yüzey uydurduğunuzda, kenar köşe yuvarlatmaları (toruslar) ve neredeyse düz bir kenar boyunca değişken yarıçaplı yuvarlatmalar da aranır ve yarıçaplarıyla listelenir. Yalnızca uydurulmuş taramalarda denenmiştir.

### Montajlar, dokümanlar ve bağlantılar

- **Büyük montajlar.** Kopya olan parçalar tek bir ağı paylaşır ve {{ui:Görünümler}} › {{ui:Hafif görüntüleme}} görünümü kutularla çizer, böylece görünüm hareket etmeye devam eder (çok büyük montajlarda kendiliğinden açılır; seçim ve bağlantılar yine gerçek parçaları kullanır). Parça ağacı ilk satırlarını ve kalanlar için bir {{ui:700 tane daha göster}} düğmesini gösterir. Montaj dosyaları 50.000 örneğe ve 100.000 bağlantıya kadar tutabilir. Bkz. [Montaj oluşturma](topic:build-assembly).
- **Dokümanlar.** **Dosya** grubundaki {{ui:Dokümanlar…}}, bir proje klasörü üzerinde bir iletişim kutusu açar: check out ve check in, revizyon harfleri, durumlar (devam eden iş, inceleme için, yayımlanmış, eskimiş), geçmiş, nerede kullanıldığı ve malzeme listesi. Bkz. [Dokümanlar ve revizyonlar (kasa)](topic:documents-walkthrough).
- **Canlı Rhino bağlantısı.** Tek bir betik, `cadcraft_link.py`, bir Rhino ya da Grasshopper belgesini izler ve yalnızca değişeni PartCraft'a gönderir; orada içe aktarılan bir özellik yeni şekle göre yeniden oluşur. Tek yönlüdür ve Studio gerektirir. Bkz. [Canlı .3dm bağlantısı](topic:live-3dm-link).
- **Birbirlerinin imlecini görün.** Paylaşılan bir oturumda herkesin imleci adı ve seçtiği özellikle birlikte görünür. Bkz. [Başkalarıyla canlı çalışma](topic:work-live).
- **Fabrika zemini.** {{ui:Ayarlar}} › {{ui:Eklentiler}} içinde Fabrika zemini eklentisini açın. {{ui:İmalat}}'ta bir program gönderdikten sonra sekmesi {{ui:Fabrika iş kuyruğuna ekle}} ya da {{ui:İş dosyası olarak kaydet}} yapabilir. Asla bir makineye göndermez ve onu başlatmaz.

### Analiz ve parçalar

- **Solid FEM eklentisi.** {{ui:Ayarlar}} › {{ui:Eklentiler}} içinde {{ui:Solid FEM}}'i açın (siz açana kadar kapalıdır) ve sağ panelde bir {{ui:Solid FEM}} sekmesi belirir. {{ui:Parçayı örgüle}}, 3B görünümde sabit yüzeyleri ve yükleri seçin, {{ui:Çöz}}'e basın ve yer değiştirmeyi, von Mises gerilmesini ya da bir mod şeklini {{ui:Modelde göster}} ile çizin. Bkz. [Solid FEM: bir gerilme denetimi](topic:solid-fem-check).
- **Eskizlerde on yolla yay.** Eskiz araç çubuğunda {{ui:Yay}}'ın yanındaki ok şunları listeler: 3 nokta, Başlangıç Merkez Bitiş, Başlangıç Merkez Açı, Başlangıç Merkez Uzunluk, Başlangıç Bitiş Açı, Başlangıç Bitiş Yön, Başlangıç Bitiş Yarıçap, Merkez Başlangıç Bitiş, Merkez Başlangıç Açı, Merkez Başlangıç Uzunluk ve Devam. Bkz. [On yöntemle yay çizme](topic:sketch-arc-methods).
- **İngiltere çelik boyutları.** Kaynaklı yapılar 976 İngiltere kesitini kullanabilir (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); `305x165x40 UB` gibi bir boyut yazın. Bkz. [Yapısal elemanlar](topic:structural-members).

### Baskı

- **Baskı aşaması.** Araç çubuğundaki {{ui:Baskı aşaması}} düğmesi (3D Print eklentisi, varsayılan olarak açık), parçanın gövdelerini kesikli bir tablaya koyar: {{ui:Düze aç}}, {{ui:90° döndür}}, {{ui:Tablaya diz}}, {{ui:Tümünü tablaya sığdır}}, {{ui:Katmanları önizle}}, sonra USB üzerinden {{ui:3D yazıcıya gönder}}; Klipper (Moonraker), OctoPrint ya da PrusaLink ile. Siz onaylayana kadar hiçbir şey gönderilmez ve parçanız asla değiştirilmez. Bir STL ya da 3MF dosyası için bkz. [3D baskıya hazır bir parça](topic:print-3d).
- **Reçine baskısı.** {{ui:Ayarlar}} › {{ui:Eklentiler}} içindeki eklentiler, siz açana kadar hepsi kapalıdır: bir reçine dilimleyici, bir pozlama testi ve Elegoo GOO, SL1, Chitubox CBDDLP/CTB ve Anycubic dosya biçimleri. Dilimleme bir çalışan iş parçacığında çalışır, böylece sayfa yanıt vermeye devam eder.

## Her uygulamada

- Her üzerine gelme ipucu bir Bootstrap araç ipucudur.
- Başlangıç ipucunun bir kapatma düğmesi vardır; kapalı kalır.
- Sığmayan sekme satırı yana kayar, kesilmez.
- Tarayıcı sekmesi, PartCraft | CadCraft'tan önce açık belgenin adını gösterir.
- {{ui:Ayarlar}}, çalışma {{ui:Düzen}}ini bir seçenek listesi olarak gösterir ve dil kutusu derlemenin sahip olduğu her dili listeler.
- Ağırlık ve Sıcaklık, Birimler ayarlarında birim türleridir.

## Düzeltilenler

- Eskiz Yay menüsü artık her yöntemi listeler.
- Eklenti araç çubuğu ve tarayıcı sekme başlığı 2026-11-09'da düzeltildi.

## Dürüst sınırlar

- Tam STEP, OpenCascade'de okundu (geçerli katılar, elle hesaplanan hacimlere eşit hacimler). Henüz her CAD ya da CAM programında açılmadı ve bir montaj tam STEP olarak yazılmaz.
- Gerçek bir yazıcıda hiçbir şey basılmadı. Dilimleme, G kodu ve reçine dosyaları kendi programlarımız ya da bir sahte yazıcı tarafından geri okundu; reçine biçimlerinin hiçbiri bir yazıcıya yüklenmedi, yazıcı boyutları ve pozlamalar başlangıç noktalarıdır.
- Solid FEM doğrusal, izotropik ve elastiktir; parça başına bir malzeme; temas, akma ya da burkulma yoktur. Sabit yüzeylerde ve keskin köşelerde gerilme ağa bağlıdır. Bir denetim yardımcısıdır, bir mühendis tarafından gözden geçirilmemiştir.
- Büyük montaj süreleri GPU'su olmayan bir sunucudan gelir; 20.000 parçalık tam ayrıntılı bir çerçeve orada yine de saniyeler sürer.
- Köşe yuvarlatmalar yüzey çiftleri üzerinde çalışır; genel bir köşe karışımı yoktur ve birbirine değmeyen yüzeyler arasında köşe yuvarlatma yoktur.
- Rhino bağlantısı hiç gerçek Rhino ya da Grasshopper içinde çalıştırılmadı. Dokümanlar, bir klasörü iki program kullandı; bir ağ paylaşımı üzerinde iki kişi değil.
- Bir gerçek taramaya yüzey uydurma henüz elle denetlenmedi. İngilizce dışındaki diller makine taslağıdır.
- Windows yükleyicileri kod imzalı değildir ve macOS disk görüntüsü noterize edilmemiştir. Bkz. [Sorun giderme](topic:troubleshooting).

Önceki değişiklikler için [0.7'de yenilikler](topic:whats-new-0-7).

## Önceki: 0.8 ve 0.8.1

Bu, PartCraft 0.8 ve 0.8.1'de 0.7'ye göre neyin değiştiğidir. Simülasyon düzenlerken yanıt verir ve neyin önce kırılacağını söyler, montajlar hareket çalışmaları alır ve yeni çalışma alanları serbest yüzeyleri ve fizikten boyutlandırılmış parçaları yapar. 0.8.1 küçük bir düzeltme sürümüdür.

### Yeni

**Simülasyon**

- **Düzenlerken güncelle.** Çözüm bloğunda {{ui:Düzenlerken güncelle}}'yi işaretleyin ve yanıtlar düzenlemelerinizi izler. Bir boyutu, bir yükü ya da malzemeyi değiştirin; dört kat büyük elemanlarla yapılmış hızlı bir yanıt hemen belirir; yaklaşık bir saniye durduğunuzda çalışmanın kendi iyileştirilmiş yanıtı onun yerini alır. Sonuçlar hangisine baktığınızı söyler. Bir çelik konsolda hızlı yanıt, iyileştirilmiş yanıta göre sehimde %1 ve gerilmede yaklaşık %4 içindeydi. Bkz. [Gerilme ve sehim denetimi](topic:simulation#update-while-you-edit-live).
- **Ne önce kırılır.** Statik ya da burkulma çalışması için, **Kır** bloğundaki {{ui:Önce ne kırılır?}} parçanın pes edene kadar yükleri ölçeklendirir. En kötüden başlayarak listeler: ilk akmaya yük katsayısı (gerilmenin doruk yaptığı yerde kırmızı bir işaretle) ve burkulmaya yük katsayısı. 1'in altındaki bir katsayı, parçanın yüklendiği haliyle zaten pes ettiği anlamına gelir ve Sorunlar bir hata gösterir. Katsayılar doğrusal bir çalışmadan gelir, bu yüzden yalnızca onun kadar iyidirler. Bkz. [Gerilme ve sehim denetimi](topic:simulation#find-out-what-breaks-first-break-it).
- **Akma ve temas.** İki çalışma türü daha: malzemenin akma gerilmesine kadar düz çizgisini izleyip sonra daha yassı bir eğime geçtiği doğrusal olmayan bir çalışma (plastik gerinim çizilir) ve ayrı parçaların birbirini ittiği (sürtünmesiz) ya da yapıştığı (bağlı) bir temas çalışması. Yerleşemeyen bir yük adımı ya da birbirinin içine fazla batan parçalar Sorunlar panelinde görünür. Sürtünme, büyük kayma, büyük dönmeler, büyük sehimler ve yorulma çözülmez. Bkz. [Gerilme ve sehim denetimi](topic:simulation#yielding-and-contact-nonlinear-studies).
- **CalculiX için dosyalar.** {{ui:Dışa aktar}} › {{ui:CalculiX dosyası (.inp)}} çalışmayı, sizin kurup kendiniz çalıştırdığınız ayrı bir program olan CalculiX için kaydeder; {{ui:Dışa aktar}} › {{ui:CalculiX sonuçları (.frd)}} onun sonuç dosyasını aynı ağa geri okur. PartCraft o programı asla başlatmaz ve dosya kaydedildikten sonra parça değiştiyse bunu söyler.

**Montajlar**

- **Hareket çalışmaları.** {{ui:Montaj}} › {{ui:Hareket}} bir eklemin değerini verdiğiniz bir zaman boyunca sürer (sabit hız, yumuşatılmış, sinüs ya da git-gel), montajı her adımda eklemleri ve kapalı döngüleriyle yerleştirir ve neyin çarptığını ve parçaların ne kadar yaklaştığını raporlar. {{ui:Nokta ekle}} bir noktanın konumunu, hızını ve ivmesini, eklemin değerini ve açıklığı zamana karşı çizer; {{ui:CSV kaydet}} ve {{ui:Grafiği kaydet}} bunları dışarı yazar. {{ui:Çalıştır}}'dan sonra çalıştırma çubuğundaki Adım adım, montajı herhangi bir adıma taşır. Çalışmanın ayarları montaj dosyasında kaydedilir. Hız ve ivme kaydedilen konumlardan gelir; bu yüzden keskin bir doruk düşük okunuyorsa daha fazla adım kullanın. Bkz. [Montajı çarpışma ve hareket için denetleme](topic:check-assembly#a-motion-study).

**Serbest yüzeyler ve fizikten parçalar**

- **Bir Yüzeyler çalışma alanı.** NURBS eğrileri ve yüzeyleri için {{ui:Yüzeyler}}'i {{ui:Çalışma alanı}} kutusundan seçin; parçanın yanında {{ui:Eğri}}, {{ui:Loft}}, {{ui:Süpürme}}, {{ui:Eşleşme}} ve {{ui:Zebra}} bulunur. Süreklilik (G0, G1 ya da G2) kesin yüzeyler üzerinde ölçülür ve istediğinizden daha kötü bir kenar, Sorunlar'da bir Eşleşme düzeltmesiyle listelenir. {{ui:Düzgünleştir}} gövde çizgilerinde büküm noktalarını ve eğrilik sıçramalarını ölçer ve adil olmayanları toleransınız içinde yeniden kurar. Yüzeyler parça dosyasında kaydedilir ve parçanın özelliklerini değiştirmez. Bkz. [Serbest yüzeyler (NURBS)](topic:nurbs-surfaces).
- **Engineer çalışma alanı.** İş alanı seçicisinden {{ui:Engineer}}'i seçin, bir üretici seçin ve {{ui:Yeni}}'ye tıklayın: bir betik, bir parçayı ne yapması gerektiğinden boyutlandırır (taşınacak ısı, akışlar, basınç, malzeme, baskı süreci) ders kitabı formülleriyle ve onu kurar; sonra kullandığı sayıları kaynaklarıyla, üretim denetimleriyle ve analiz araçları için dosyalarla geri verir. Aynı girdiler herhangi bir bilgisayarda aynı parçayı verir. Üretici parçada tutulur ve bir parçayı açmak asla bir betik çalıştırmaz. Bkz. [Fizikten parçalar: üreticiler](topic:engineer-generators) ve [Bir üretici yazma](topic:write-a-generator).

**Eskiz, çizim ve imalat**

- **Fotoğraftan eskiz.** {{ui:Özellikler}} › {{ui:Daha fazla}} › {{ui:Fotoğraftan eskiz…}}, düz bir zemin üzerindeki düz bir parçanın bir resmini (dış hat ve delikler) ya da bir kalem çizimini çizgilere, yaylara ve dairelere çevirir. Bir uzunluk verirsiniz, önizlemeyi denetlersiniz ve eskizi yaparsınız. Bkz. [Eskiz temelleri](topic:sketch-basics#a-sketch-from-a-photo).
- **Baskı için ölçekleme ve bölme.** {{ui:Dışa aktar}} › {{ui:Baskı için ölçekle (STL veya 3MF)…}} parçayı değiştirmeden eksen başına ölçekler, örneğin bir büzülme payı için. {{ui:Dışa aktar}} › {{ui:Baskı için böl (parça zip'i)…}} yatağınız için çok büyük olan bir parçayı numaralı parçalara ayırır; bunlar pimler, anahtarlar, kuyruk kırlangıçları, kılavuz delikler ya da mıknatıs cepleriyle birbirine bağlanır. Bkz. [3D baskı](topic:print-3d).
- **İç içe sacları G koduna.** {{ui:Dışa aktar}} › {{ui:İç içe yerleştirilmiş saclar, G koduna}} iç içe bir DXF'i okur ve seçtiğiniz post ile her sac için bir program yapar: önce delikler ve kesikler, sonra dış hatlar. Giriş payları, kesim sırasını ya da ortak kenarları planlamaz. Bkz. [Düz parçaları saclara yerleştirme](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Çizimler kendi kendine daha çok şey yapar.** {{ui:Sayfa}} › {{ui:Otomatik}}, görünümleri 1:1'e kadar en büyük standart ölçekte tutan en küçük A boyutu sayfayı seçer. {{ui:Delikleri ölçülendir}} her deliğe bir merkez işareti, her boyut için bir not ve görünümün sol alt köşesinden konumları yerleştirir. Bkz. [Çizim yapma](topic:drawing-pdf).

**Her uygulamada**

- **Diller.** Uygulamalar 54 dilde gelir. İngilizce dışındakiler, ana dili konuşan biri okuyana kadar makine taslağıdır.
- **Araç çubuğu satırları.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Araç çubuğu satırları}} Sarma (önceki gibi), 2 satır ya da 1 satır seçer; sığmayan bir çubuk yana kayar. PartCraft'ın Özellik şeridi en çok kullanılan takımı büyük gösterir ve çeşitleri bir bölünmüş düğmenin arkasına saklar.
- **Yapay zekânızı bağlayın.** Studio, kendi asistanınızı sekiz uygulamanın tümüne bağlamak için merkezdir; uygulama başına yalnızca okuma, öneri ya da düzenleme izni vardır. Bağlı bir asistan bir cümleden (örneğin bir yük için bir braket) bir parçayı boyutlandırabilir, çalışmasını ve her denetimi gösterebilir ve onu kurabilir; ne denetlemediğini de bildirir (gerilme yığılması, yorulma, plastiklerde sünme). Bkz. [Yapay zekâ asistanıyla PartCraft kullanma](topic:use-with-ai-assistants).

### 0.8.1'de düzeltilenler

- **Tam ekran imleç donması.** Üzerine gelme seçimi artık kısıtlanır. Nedeni en iyi tahminimizdir ve bildiren kişiyle doğrulanmadı.
- **Çalışma zamanında dil.** Studio ve paketli sürümler çalışırken dili değiştirebilir; öncesinde yalnızca İngilizceydi. Bu her platformda henüz denenmedi: dil değişmiyorsa bize bildirin.

### Bu sürümde henüz yok

- Yapay zekânızı bağlama henüz tamamlanmadı: Studio içinde tek tıkla bağlantı, tarayıcı yapay zekâsı için barındırılan bağlayıcı, Studio içinde kendi API anahtarınız ve yayımlanmış MCP paketi vaat edilmiyor. Studio'nun kendi yapay zekâsı yoktur.
- Studio kod imzalı değildir: Windows uyarabilir, macOS sağ tık ve sonra Aç ister. Bkz. [Sorun giderme](topic:troubleshooting).
- Tolerans zincirleri hâlâ tek yönlü: bkz. [Tolerans zincirleri](topic:tolerance-stackup).
- Kalanı [Henüz yapılmayanlar](topic:not-built-yet) sayfasında listelenmiştir.

Önceki değişiklikler için [0.7'de yenilikler](topic:whats-new-0-7).
