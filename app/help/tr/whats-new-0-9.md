---
title: Yenilikler: 0.9
summary: PartCraft 0.9; yüzeyler arası köşe yuvarlatma ve yüzeylerden katı kalınlaştırma, binlerce parçalık montajlar, revizyonlu bir Belgeler kasası, bir Solid FEM gerilme eklentisi, on yay yöntemi, İngiltere çelik profilleri, bir Baskı aşaması ve reçineli baskı eklentileri ekliyor.
keywords: yenilikler, sürüm notları, değişiklik günlüğü, 0.9, yüzeyler arası köşe yuvarlatma, yuvarlanan top, kenarları yuvarlatma, kalınlaştırma, yüzeylerden katı, step kabuk, iges katı, tarama köşe yuvarlatma, büyük montaj, hafif görüntüleme, 20000 parça, belgeler, kasa, check out, revizyon, sürüm, nerede kullanıldı, rhino bağlantısı, grasshopper, 3dm, imleçler, fabrika zemini, iş kuyruğu, solid fem, sonlu elemanlar, von mises, doğal frekans, yay yöntemleri, 3 noktalı yay, İngiltere çelik profilleri, mavi kitap, baskı aşaması, reçine, goo, ctb, tabla, düze aç, yenilikler, değişiklikler, 0.8, 0.8.1, sürüm, yeni özellikler, canlı analiz, düzenlerken güncelle, neyi kırar, yük faktörü, doğrusal olmayan, akma, plastik şekil değiştirme, temas, calculix, hareket çalışması, boşluk, yüzeyler, nurbs, düzgünleştir, gövde, mühendis, üreteç, üretilen gövde, fotoğraftan eskiz, baskı için ölçekleme, baskı için bölme, çekme payı, iç içe sac, g-kodu, çizim, delikleri ölçülendirme, asistan, mcp, diller, araç çubuğu satırları
from: 96d9fbfa
---

Bu, PartCraft 0.8.1 ile karşılaştırıldığında PartCraft 0.9'da neyin değiştiğidir. Serbest biçimli yüzeyler artık katılara kapanıyor, binlerce parçalı montajlar kullanılabilir kalıyor, bir Belgeler kasası revizyonları tutuyor ve bir Solid FEM eklentisi bir parçadaki gerilmeyi denetliyor. Her madde nerede bulacağınızı belirtir.

## 0.9.1'de yeni

- **Kesin STEP dışa aktarma.** {{ui:Dışa aktar}} › {{ui:STEP AP242 (kesin katı)}} ve {{ui:STEP AP214 (kesin katı)}} artık çalışıyor. Delikler, çıkıntılar, yuvarlatmalar, koniler, küreler ve simitler gerçek yüzeylerinde, kenarları gerçek daireler olarak yazılır; böylece başka bir CAD veya CAM programı bir deliği delik olarak tanıyabilir. Spline kenarlar, modellenmiş dişler ve içe aktarılmış örgüler aynı katıda düz yüzey parçaları olarak kalır. Bkz. [Baskı, STEP ve DXF için dışa aktarma](topic:export-files#for-other-cad-programs-step).
- **STEP içeri, kesin STEP dışarı.** Açtığınız bir STEP dosyası kendi düz yüzeylerini, silindirlerini, konilerini, küreleri ve simitlerini korur; böylece {{ui:Dışa aktar}} › {{ui:STEP AP242 (kesin katı)}} bunları yüzey yerine gerçek yüzeyler olarak geri yazar. Cıvata delikli bir tedarikçi kirişi, geldiği yüzeylerle ve üzerine eklediğiniz her şeyle birlikte çıkar. Dosyanın spline, süpürülmüş ve döndürülmüş yüzeyleri düz yüzey parçaları olarak kalır; STL, OBJ ve 3MF gövdeleri de öyle. Daha önce kaydedilmiş bir parça için STEP dosyasını yeniden açın. Bkz. [STEP dosyası açın ve üzerine geliştirin](topic:import-step).
- **Yüzeyden DXF'te gerçek daireler.** Düz bir yüzey seçiliyken {{ui:Dışa aktar}} › {{ui:Eskizin ya da düz yüzeyin DXF'i}} yuvarlak delikleri, deliğin kendi merkezi ve yarıçapıyla daire olarak yazar; lazer, plazma ya da su jeti masası için uygundur. Diğer yuvarlak kenarlar hâlâ düz yüzey parçası olarak kalır.
- **Atölye için kesin STEP.** {{ui:İmalat}} içinde {{ui:Tam STEP (iş koordinatları)}}, parçayı kurulumun iş başlangıcında başlayan orijinle ve Z ekseni takım eksenine gelecek şekilde yazar; G kodunun kullandığı koordinatlar bunlardır. Bkz. [Takım yolları ve G kodu üretin](topic:manufacture#exact-step-for-the-shop).

## Yeni

### Yüzeyler ve katılar

- **Yüzeyler arası köşe yuvarlatma.** {{ui:Çalışma alanı}} kutusunda {{ui:Yüzeyler}} seçin, ardından {{ui:Yüzeyler arasında köşe yuvarlat}}. Tek bir katının iki yüzeyini seçin, yarıçapı yazın ({{ui:Uçtaki yarıçap (mm, 0 = aynı)}} alanıyla kenar boyunca değişen bir yarıçap da verebilirsiniz). Sonuç satırı yuvarlatmanın ideal yuvarlanan toptan ne kadar uzak olduğunu söyler; yerine oturmayan bir yarıçap, yüzeyi adıyla anılarak reddedilir. {{ui:Birden fazla kenarı yuvarlat}} birçok kenarı tek adımda yuvarlar; düz yüzeylerin üç yuvarlatılmış kenarının buluştuğu yerde küre köşesi için {{ui:Köşeler (üçünün birleştiği yerde küre yaması)}} kutusunu işaretleyin. Bkz. [Serbest biçimli yüzeyler (NURBS)](topic:nurbs-surfaces).
- **Katı olarak kalınlaştırma.** Aynı çalışma alanındaki {{ui:Katı olarak kalınlaştır}} bir yüzeye kalınlık verir; {{ui:Diğer taraf}} onu diğer yöne doğru büyütür. Bir kıvrım ya da kendini kesme, yüzey ve yer adı belirtilerek reddedilir.
- **Yüzeylerden katılar.** Kırpılmış yüzeyler birleştirme, çıkarma ve kesişim ile birleştirilip parçaya tek bir geri alma adımı olarak işlenebilir. STEP bir katıyı tek kapalı kabuk olarak, IGES ise tek katı olarak yazar; ikisi de katı olarak geri okunur. Yüzeyler kenar kenar eşleşmezse dosyaya ayrı yüzeyler yazılır ve durum satırı bunu bildirir. Katılar düğüm düzenleyicide de oluşturulabilir; bkz. [Düğüm düzenleyici](topic:nodes).
- **Taramalarda kenar ve değişken yuvarlatmalar.** Bir taramaya yüzey uydurduğunuzda, kenar yuvarlatmaları (simitler) ve oldukça düz bir kenar boyunca değişken yarıçaplı yuvarlatmalar da aranır ve yarıçaplarıyla listelenir. Bu yalnızca uydurulmuş taramalarda sınanmıştır.

### Montajlar, belgeler ve bağlantılar

- **Büyük montajlar.** Kopya olan parçalar tek bir örgüyü paylaşır; {{ui:Görünümler}} › {{ui:Hafif görüntüleme}} görünümün hareket etmeye devam etmesi için kutular çizer (çok büyük montajlarda kendiliğinden açılır; seçme ve birleşimler gerçek parçaları kullanmaya devam eder). Parça ağacı ilk satırlarını gösterir ve kalanlar için {{ui:700 tane daha göster}} düğmesi çıkar. Montaj dosyaları 50.000 örneğe ve 100.000 birleşime kadar tutabilir. Bkz. [Montaj oluşturun](topic:build-assembly).
- **Belgeler.** **Dosya** grubundaki {{ui:Belgeler…}} bir proje klasörü üzerinde bir iletişim kutusu açar: kontrol al ve kontrol et, revizyon harfleri, durumlar (çalışma sürüyor, incelemeye hazır, yayımlandı, eskimiş), geçmiş, nerede kullanıldığı ve malzeme listesi. Bkz. [Belgeler ve revizyonlar (kasa)](topic:documents-walkthrough).
- **Canlı Rhino bağlantısı.** Tek bir betik, `cadcraft_link.py`, bir Rhino ya da Grasshopper belgesini izler ve yalnızca değişeni PartCraft'a gönderir; orada içe aktarılmış bir özellik yeni şekle göre yeniden oluşur. Tek yönlüdür ve Studio gerektirir. Bkz. [Canlı .3dm bağlantısı](topic:live-3dm-link).
- **Birbirinizin imlecini görün.** Paylaşılan bir oturumda her kişinin imleci adı ve seçtiği özellikle birlikte görünür. Bkz. [Başkalarıyla canlı çalışın](topic:work-live).
- **Fabrika zemini.** {{ui:Ayarlar}} › {{ui:Eklentiler}} içinde Fabrika zemini eklentisini açın. {{ui:İmalat}} içinde bir program yayımladıktan sonra o sekme {{ui:Fabrika iş kuyruğuna ekle}} ya da {{ui:İş dosyası olarak kaydet}} seçeneğini sunabilir. Hiçbir zaman bir makineye gönderilmez ve makine başlatılmaz.

### Analiz ve parçalar

- **Solid FEM eklentisi.** {{ui:Ayarlar}} › {{ui:Eklentiler}} içinde {{ui:Solid FEM}} seçeneğini açın (siz açana kadar kapalıdır); sağ panelde bir {{ui:Solid FEM}} sekmesi belirir. {{ui:Parçayı örgüle}}, 3B görünümde sabit yüzeyleri ve yükleri seçin, {{ui:Çöz}} deyin, ardından {{ui:Modelde göster}} ile yer değiştirme, von Mises gerilmesi ya da bir mod şeklini çizdirin. Bkz. [Solid FEM: bir gerilme denetimi](topic:solid-fem-check).
- **Eskizde yay, on yolla.** Eskiz araç çubuğunda {{ui:Yay}} yanındaki ok; 3 Nokta, Başlangıç Merkez Son, Başlangıç Merkez Açı, Başlangıç Merkez Uzunluk, Başlangıç Son Açı, Başlangıç Son Yön, Başlangıç Son Yarıçap, Merkez Başlangıç Son, Merkez Başlangıç Açı, Merkez Başlangıç Uzunluk ve Devam listesini açar. Bkz. [Yayı on yöntemle çizin](topic:sketch-arc-methods).
- **İngiltere çelik profilleri.** Kaynaklı parçalar 976 İngiliz profil kullanabilir (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); `305x165x40 UB` gibi bir ölçü yazın. Bkz. [Yapısal elemanlar](topic:structural-members).

### 3B baskı

- **Baskı aşaması.** Araç çubuğundaki {{ui:Baskı aşaması}} düğmesi (3B Baskı eklentisi, varsayılan olarak açık) parçanızın gövdelerini kesikli bir tablaya yerleştirir: {{ui:Düze aç}}, {{ui:90° çevir}}, {{ui:Tablaya diz}}, {{ui:Tümünü tablaya sığdır}}, {{ui:Katmanları önizle}}, ardından USB, Klipper (Moonraker), OctoPrint veya PrusaLink üzerinden {{ui:3B yazıcıya gönder}}. Siz onaylayana kadar hiçbir şey gönderilmez ve parçanız hiçbir zaman değiştirilmez. Bunun yerine bir STL ya da 3MF dosyası için bkz. [Parçayı 3B baskıya hazırlayın](topic:print-3d).
- **Reçineli baskı.** {{ui:Ayarlar}} › {{ui:Eklentiler}} içinde, hepsi siz açana kadar kapalı olan eklentiler: bir reçine dilimleyici, bir pozlama testi ve Elegoo GOO, SL1, Chitubox CBDDLP/CTB ve Anycubic dosya biçimleri. Dilimleme bir çalışan iş parçacığında çalıştığı için sayfa yanıt vermeye devam eder.

## Her uygulamada

- Her üzerine gelme ipucu bir Bootstrap araç ipucudur.
- Başlangıç ipucunun bir kapatma düğmesi vardır; kapalı kalır.
- Sığmayan bir panel sekme satırı kesilmek yerine yatay kayar.
- Tarayıcı sekmesi, PartCraft | CadCraft adından önce açık belgenin adını gösterir.
- {{ui:Ayarlar}}, çalışma alanı {{ui:Düzen}} seçeneğini seçim listesi olarak gösterir; dil kutusu derlemenin içerdiği tüm dilleri listeler.
- Ağırlık ve Sıcaklık, Birimler ayarlarında birim türleridir.

## Düzeltilenler

- Eskiz Yay menüsü artık her yöntemi listeler.
- Eklenti araç çubuğu ve tarayıcı sekmesi başlığı 2026-11-09 tarihinde düzeltildi.

## Dürüst sınırlar

- Kesin STEP, OpenCascade içinde geri okundu (geçerli katılar, elle hesaplananlara eşit hacimler). Henüz her CAD ya da CAM programında açılmadı; bir montaj kesin STEP olarak yazılmaz.
- Gerçek bir yazıcıda hiçbir şey basılmadı. Dilimleme, G kodu ve reçine dosyaları kendi programlarımız ya da bir sahte yazıcı tarafından geri okundu; reçine biçimlerinin hiçbiri bir yazıcıya yüklenmedi ve yazıcı boyutları ile pozlamalar başlangıç değerleridir.
- Solid FEM doğrusal, izotrop ve elastiktir; parça başına bir malzeme vardır; temas, akma ya da burkulma yoktur. Sabit yüzeylerde ve keskin köşelerde gerilme, örgüye bağlıdır. Bir denetim yardımcısıdır, bir mühendis tarafından incelenmemiştir.
- Büyük montaj süreleri GPU'su olmayan bir sunucudan alınmıştır; 20.000 parçalık tam ayrıntılı bir kare orada yine de saniyeler sürer.
- Köşe yuvarlatmaları yüzey çiftleri üzerinde çalışır; genel bir köşe karışımı yoktur ve birbirine değmeyen yüzeyler arasında köşe yuvarlatma yoktur.
- Rhino bağlantısı gerçek Rhino ya da Grasshopper içinde hiç çalıştırılmadı. Belgeler, bir ağ paylaşımında iki kişi tarafından değil, aynı klasörde iki program tarafından denendi.
- Gerçek bir taramaya yüzey uydurma, el ile kontrol edilmedi. İngilizce dışındaki diller makine taslağıdır.
- Windows yükleyicileri kod imzalı değildir ve macOS disk imajı notarize edilmemiştir. Bkz. [Sorun giderme](topic:troubleshooting).

Önceki değişiklikler için bkz. [0.7 Yenilikler](topic:whats-new-0-7).

## Önceki: 0.8 ve 0.8.1

Bu, PartCraft 0.7 ile karşılaştırıldığında 0.8 ve 0.8.1'de neyin değiştiğidir. Simülasyon siz düzenlerken yanıt verir ve ilk neyin kırılacağını söyler, montajlar hareket çalışmaları alır ve yeni çalışma alanları yüzeyleri ve fiziğe göre boyutlandırılmış parçaları yapar. 0.8.1 küçük bir düzeltme sürümüdür.

### Yeni

**Simülasyon**

- **Düzenlerken güncelle.** Çöz bölümündeki {{ui:Düzenlerken güncelle}} kutusunu işaretleyin; düzenlemeleriniz yanıtları izler. Bir boyutu, bir yükü ya da malzemeyi değiştirin; dört kat büyük elemanlarla yapılmış hızlı bir yanıt hemen belirir. Yaklaşık bir saniye durduğunuzda, çalışmanın kendi incelenmiş yanıtı onun yerine geçer. Sonuçlar hangisine baktığınızı söyler. Çelik bir konsolda hızlı yanıt, sapmada incelenmiş yanıtın %1'i, gerilmede yaklaşık %4'ü içindeydi. Bkz. [Gerilme ve sapmayı denetleyin](topic:simulation#update-while-you-edit-live).
- **Neyi kırar.** Statik ya da burkulma çalışmasında, **Kır onu** bölümündeki {{ui:Önce ne kırılır?}} parça pes edene kadar yükleri ölçekler. En kötüden başlayarak, ilk akmaya kadar yük faktörünü (gerilmenin tepe yaptığı yerde kırmızı işaretle) ve burkulmaya kadar yük faktörünü listeler. 1'in altındaki bir faktör, parçanın yüklendiği haliyle zaten pes ettiği anlamına gelir ve Sorunlar bir hata gösterir. Faktörler doğrusal bir çalışmadan gelir, dolayısıyla onun kadar iyidirler. Bkz. [Gerilme ve sapmayı denetleyin](topic:simulation#find-out-what-breaks-first-break-it).
- **Akma ve temas.** İki çalışma türü daha: malzemenin akma gerilmesine kadar düz çizgisini izleyip sonra daha yassı bir eğimle devam ettiği, plastik şekil değiştirmenin çizildiği doğrusal olmayan bir çalışma; ayrı parçaların birbirini ittiği (sürtünmesiz) ya da yapışık kaldığı (bağlı) bir temas çalışması. Yerleşemeyen bir yük adımı ya da birbirine çok fazla batan parçalar, Sorunlar panelinde görünür. Sürtünme, büyük kayma, büyük dönüş, büyük sapma ve yorulma çözülmez. Bkz. [Gerilme ve sapmayı denetleyin](topic:simulation#yielding-and-contact-nonlinear-studies).
- **CalculiX girdileri.** {{ui:Dışa aktar}} › {{ui:CalculiX girdi dosyası (.inp)}} çalışmayı, sizin kurup kendiniz çalıştırdığınız ayrı bir program olan CalculiX için kaydeder; {{ui:Dışa aktar}} › {{ui:CalculiX sonuçları (.frd)}} sonuç dosyasını aynı örgü üzerine geri okur. PartCraft bu programı hiçbir zaman başlatmaz ve girdi kaydedildikten sonra parça değiştiyse bunu bildirir.

**Montajlar**

- **Hareket çalışmaları.** {{ui:Montaj}} › {{ui:Hareket}} bir birleşimin değerini sizin verdiğiniz bir süre boyunca sürer (sabit hız, yumuşatılmış, sinüs ya da git-gel), montajı her adımda birleşimleri ve kapalı döngüleriyle yerleştirir ve hangi parçaların çakıştığını ve ne kadar yaklaştığını bildirir. {{ui:Nokta ekle}} bir noktanın konumunu, hızını ve ivmesini, birleşim değerini ve boşluğu zamana karşı çizer; {{ui:CSV kaydet}} ve {{ui:Grafiği kaydet}} bunları dışarı yazar. {{ui:Çalıştır}}'dan sonra çalıştırma çubuğundaki Adım denetimi montajı herhangi bir adıma taşır. Çalışmanın ayarları montaj dosyasına kaydedilir. Hız ve ivme kaydedilen konumlardan hesaplanır; keskin bir tepe düşük okunuyorsa daha fazla adım kullanın. Bkz. [Montajı çakışmalar ve hareket için denetleyin](topic:check-assembly#a-motion-study).

**Fizikten yüzeyler ve parçalar**

- **Yüzeyler çalışma alanı.** Parçanın yanında NURBS eğrileri ve yüzeyleri için {{ui:Çalışma alanı}} kutusundan {{ui:Yüzeyler}} seçin: {{ui:Eğri}}, {{ui:Loft}}, {{ui:Süpürme}}, {{ui:Eşleşme}} ve {{ui:Zebra}}; süreklilik (G0, G1 ya da G2) kesin yüzeylerde ölçülür, istediğinizden kötü bir kenar ise Sorunlar'da bir Eşleşme düzeltmesiyle listelenir. {{ui:Düzgünleştir}} gövde çizgilerinde dönüm noktalarını ve eğrilik sıçramalarını ölçer ve düzgün olmayanları toleransınız içinde yeniden kurar. Yüzeyler parça dosyasına kaydedilir ve parçanın özelliklerini değiştirmez. Bkz. [Serbest biçimli yüzeyler (NURBS)](topic:nurbs-surfaces).
- **Mühendis çalışma alanı.** Çalışma alanı değiştiricisinden {{ui:Mühendis}} seçin, bir üreteç seçin ve {{ui:Yeni}}'ye tıklayın: bir betik, parçayı ne yapması gerektiğinden (ısıtıp taşımak, akışlar, basınç, malzeme, baskı süreci) yola çıkarak ders kitabı formülleriyle boyutlandırır ve kurar; sonra kullandığı sayıları kaynaklarıyla, üretim denetimlerini ve analiz araçları için dosyaları geri verir. Aynı girdiler her bilgisayarda aynı parçayı verir. Üreteç parçada tutulur ve bir parçayı açmak hiçbir zaman bir betik çalıştırmaz. Bkz. [Fizikten parçalar: üreteçler](topic:engineer-generators) ve [Üreteç yazın](topic:write-a-generator).

**Eskiz, çizim ve üretim**

- **Fotoğraftan eskiz.** {{ui:Özellikler}} › {{ui:Daha fazla}} › {{ui:Fotoğraftan eskiz…}}, düz bir zemin üzerindeki düz bir parçanın (dış hat ve delikler) ya da bir kalem çiziminin resmini çizgilere, yaylara ve dairelere dönüştürür. Tek bir uzunluk verirsiniz, önizlemeyi denetler ve eskizi oluşturursunuz. Bkz. [Eskiz temelleri](topic:sketch-basics#a-sketch-from-a-photo).
- **Baskı için ölçekleme ve bölme.** {{ui:Dışa aktar}} › {{ui:Baskı için ölçekle (STL veya 3MF)…}} parçayı değiştirmeden eksen başına ölçekler; örneğin bir çekme payı için. {{ui:Dışa aktar}} › {{ui:Baskı için böl (parça zip'i)…}} tablanıza sığmayacak kadar büyük bir parçayı, çiviler, anahtarlar, kuyruk kırlangıçları, kama delikleri ya da mıknatıs cepleriyle birleşen numaralı parçalara böler. Bkz. [3B baskı](topic:print-3d).
- **İç içe sacları G koduna dönüştürme.** {{ui:Dışa aktar}} › {{ui:İç içe yerleştirilmiş saclar, G koduna}} iç içe yerleştirilmiş bir DXF'i okur ve seçtiğiniz son işlemci üzerinden her sac için bir program üretir: önce delikler ve boşluklar, sonra dış hatlar. Giriş ve çıkış yollarını, kesme sırasını ya da ortak kenarları planlamaz. Bkz. [Düz parçaları saclara yerleştirin](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Kendiliğinden daha fazla iş yapan çizimler.** {{ui:Sayfa}} › {{ui:Otomatik}}, görünümleri 1:1'e kadar en büyük standart ölçekte tutan en küçük A boyutu sayfayı seçer. {{ui:Delikleri ölçülendir}} her deliğe bir merkez işareti, boyut başına bir çağrı ve görünümün sol alt köşesinden konumları koyar. Bkz. [Çizim yapın](topic:drawing-pdf).

**Her uygulamada**

- **Diller.** Uygulamalar 54 dilde gelir. İngilizce dışındakiler, bir ana dil konuşanı okuyana kadar makine taslağıdır.
- **Araç çubuğu satırları.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Araç çubuğu satırları}} Kaydır (eskisi gibi), 2 satır ya da 1 satır seçeneklerini sunar; sığmayan bir çubuk yatay kayar. PartCraft'ın Özellik şeridi en çok kullanılan aracı büyük gösterir ve çeşitleri bölünmüş bir düğmenin arkasına gizler.
- **Yapay zekânızı bağlayın.** Studio, kendi asistanınızı sekiz uygulamanın tümüne bağlamak için merkezdir; her uygulama için yalnızca okuma, öneri ya da düzenleme izni verirsiniz. Bağlı bir asistan, bir yük için bir braket gibi bir cümleden parçayı boyutlandırabilir, çalışmasını ve her denetimi gösterebilir ve onu kurabilir; denetlemediği şeyleri de bildirir (gerilme yığılması, yorulma, plastiklerde sürünme). Bkz. [PartCraft'ı bir yapay zekâ asistanıyla kullanın](topic:use-with-ai-assistants).

### 0.8.1'de düzeltilenler

- **Tam ekran imleç donması.** Üzerine gelerek seçme artık sınırlandırılmıştır. Nedeni en iyi okumamızdır ve bildiren kişiyle doğrulanmamıştır.
- **Çalışma sırasında dil.** Studio ve paketlenmiş sürümler çalışırken dil değiştirebilir; önceden yalnızca İngilizceydi. Bu, her platformda henüz sınanmadı: dil değişmezse bize bildirin.

### Bu sürümde henüz yok

- Yapay zekâ bağlantısı tamamlanmadı: Studio içinde tek tıkla bağlanma, tarayıcı yapay zekâsı için barındırılan bağlayıcı, Studio içinde kendi API anahtarınız ve yayımlanmış MCP paketi vaat edilmiyor. Studio'nun kendi yapay zekâsı yoktur.
- Studio kod imzalı değildir: Windows uyarabilir, macOS sağ tıklayıp Aç ister. Bkz. [Sorun giderme](topic:troubleshooting).
- Toleranslı yığınlar hâlâ tek yönlüdür: bkz. [Tolerans yığınları](topic:tolerance-stackup).
- Geri kalanı [Henüz yapılmayanlar](topic:not-built-yet) sayfasında listelenmiştir.

Önceki değişiklikler için bkz. [0.7 Yenilikler](topic:whats-new-0-7).
