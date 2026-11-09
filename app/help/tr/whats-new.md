---
title: Yenilikler: 0.8 ve 0.8.1
summary: PartCraft 0.8, düzenlerken canlı analiz, "Önce ne kırılır?" denetimi, dış çözücü için dosyalarla akma ve temas çalışmaları, montajlar için hareket çalışmaları, serbest biçimli yüzeyler için bir Yüzeyler çalışma alanı, Mühendis çalışma alanında fizikten boyutlandırılan parçalar, fotoğraftan eskiz, baskı dışa aktarımları, iç içe saclardan G koduna ve delikleri kendiliğinden ölçülendiren çizimler ekliyor. 0.8.1 tam ekranda imleç donmasını düzeltiyor.
keywords: yenilikler, ne var ne yok, sürüm notları, değişiklik günlüğü, değişiklikler, 0.8, 0.8.1, sürüm, yeni özellikler, canlı analiz, düzenlerken güncelleme, kırılan, önce ne kırılır, yük katsayısı, doğrusal olmayan, akma, plastik şekil değiştirme, temas, calculix, hareket çalışması, boşluk, yüzeyler, nurbs, düzgünleştir, gemi gövdesi, zebra, mühendis, üreteç, üretilmiş gövde, fotoğraftan eskiz, baskı için ölçekle, baskı için böl, çekme, iç içe saclar, g-code, çizim, delikleri ölçülendir, asistan, mcp, diller, araç çubuğu satırları
from: 62e4dce2
---

Bu, PartCraft 0.8 ve 0.8.1 sürümlerinde 0.7'ye göre neyin değiştiğini gösterir. Simülasyon, siz düzenlerken yanıt verir ve neyin ilk kırılacağını söyler; montajlar hareket çalışmalarına kavuşur; yeni çalışma alanları serbest biçimli yüzeyler ile fizikten boyutlandırılan parçalar oluşturur. 0.8.1 küçük bir düzeltme sürümüdür.

## Yeni

### Simülasyon

- **Düzenlerken güncelle.** {{ui:Çöz}} bloğundaki {{ui:Düzenlerken güncelle}} seçeneğini işaretleyin; yanıtlar düzenlemelerinizi izler. Bir boyutu, bir yükü ya da malzemeyi değiştirdiğinizde, dört kat büyük elemanlarla yapılmış hızlı bir yanıt hemen görünür; yaklaşık bir saniye durduğunuzda, çalışmanın kendi incelenmiş yanıtı onun yerine geçer. Sonuçlar, hangisine baktığınızı belirtir. Bir çelik konsolda hızlı yanıt, incelenmiş yanıta göre sehimde %1 ve gerilmede yaklaşık %4 içindeydi. Bkz. [Gerilme ve sehim denetimi](topic:simulation#update-while-you-edit-live).
- **Önce ne kırılır.** Statik ya da burkulma çalışması için, **{{ui:Kır}}** bloğundaki {{ui:Önce ne kırılır?}} seçeneği, parça pes edene kadar yükleri ölçekler. En kötüden başlayarak listeler: ilk akmaya kadar yük katsayısı (gerilmenin doruk yaptığı yerde kırmızı işaretle) ve burkulmaya kadar yük katsayısı. 1'in altındaki bir katsayı, parçanın yüklü hâliyle zaten pes ettiği anlamına gelir ve Sorunlar bir hata gösterir. Katsayılar doğrusal bir çalışmadan gelir, dolayısıyla yalnızca o çalışma kadar iyidirler. Bkz. [Gerilme ve sehim denetimi](topic:simulation#find-out-what-breaks-first-break-it).
- **Akma ve temas.** İki çalışma türü daha: malzemenin akma gerilimine kadar düz çizgisini izleyip ardından daha yassı bir eğime geçtiği doğrusal olmayan bir çalışma (plastik şekil değiştirme grafikle gösterilir) ve ayrı parçaların birbirini ittiği (sürtünmesiz) ya da yapışık kaldığı bir temas çalışması. Yerleşemeyen bir yük adımı ya da birbirine fazla batan parçalar, Sorunlar panelinde görünür. Sürtünme, büyük kayma, büyük dönüşler, büyük sehimler ve yorulma çözülmez. Bkz. [Gerilme ve sehim denetimi](topic:simulation#yielding-and-contact-nonlinear-studies).
- **CalculiX için dosyalar.** {{ui:Dışa aktar}} › {{ui:CalculiX dosyası (.inp)}} çalışmayı, kendi kurup çalıştıracağınız ayrı bir program olan CalculiX için kaydeder; {{ui:Dışa aktar}} › {{ui:CalculiX sonuçları (.frd)}} onun sonuç dosyasını aynı ağ üzerine geri okur. PartCraft bu programı asla başlatmaz ve dosya kaydedildikten sonra parça değiştiyse bunu belirtir.

### Montajlar

- **Hareket çalışmaları.** {{ui:Montaj}} › {{ui:Hareket}}, bir birleşimin değerini sizin verdiğiniz süre boyunca sürer (sabit hız, yumuşatılmış, sinüs ya da gidiş-dönüş), montajı her adımda birleşimleri ve kapalı döngüleriyle yerleştirir ve parçaların nerede çakıştığını ve ne kadar yaklaştığını bildirir. {{ui:Nokta ekle}}, bir noktanın konumunu, hızını ve ivmesini, birleşimin değerini ve boşluğu zamana karşı çizer; {{ui:CSV kaydet}} ve {{ui:Grafiği kaydet}} bunları dışa yazar. {{ui:Çalıştır}} seçeneğinden sonra, koşu çubuğundaki adım adım ilerleme montajı herhangi bir adıma taşır. Çalışmanın ayarları montaj dosyasına kaydedilir. Hız ve ivme kaydedilen konumlardan hesaplanır; bu yüzden keskin bir doruk düşük görünüyorsa daha fazla adım kullanın. Bkz. [Montajı çakışma ve hareket açısından denetleme](topic:check-assembly#a-motion-study).

### Serbest biçimli yüzeyler ve fizikten parçalar

- **Bir Yüzeyler çalışma alanı.** {{ui:Çalışma alanı}} kutusundan {{ui:Yüzeyler}} seçin; parçanın yanında NURBS eğrileri ve yüzeyleri için {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} ve {{ui:Zebra}} bulunur. Süreklilik (G0, G1 ya da G2) tam yüzeyler üzerinde ölçülür; istediğinizden kötü bir kenar, Sorunlar panelinde bir Match düzeltmesiyle listelenir. {{ui:Fair}}, gemi gövde eğrilerinde dönüm noktalarını ve eğrilik sıçramalarını ölçer ve uyumsuz olanları sizin toleransınız dâhilinde yeniden oluşturur. Yüzeyler parça dosyasına kaydedilir ve parçanın özelliklerini değiştirmez. Bkz. [Serbest biçimli yüzeyler (NURBS)](topic:nurbs-surfaces).
- **Mühendis çalışma alanı.** Çalışma alanı değiştiricisinden {{ui:Engineer}} seçin, bir üreteç seçin ve {{ui:Yeni}} düğmesine tıklayın: bir betik, parçanın ne yapması gerektiğinden (ısıyı taşımak, akışlar, basınç, malzeme, baskı süreci) yola çıkarak parçayı boyutlandırır, ders kitabı formülleriyle oluşturur ve sonra kullandığı değerleri kaynaklarıyla, üretim denetimlerini ve analiz araçları için dosyaları geri verir. Aynı girdiler, herhangi bir bilgisayarda aynı parçayı verir. Üreteç parçanın içinde tutulur ve bir parçayı açmak hiçbir zaman bir betik çalıştırmaz. Bkz. [Fizikten parçalar: üreteçler](topic:engineer-generators) ve [Üreteç yazma](topic:write-a-generator).

### Eskiz, çizim ve üretim

- **Fotoğraftan eskiz.** {{ui:Özellikler}} › {{ui:Daha fazla}} › {{ui:Fotoğraftan eskiz…}}, düz bir zemin üzerindeki düz bir parçanın (dış hat ve delikler) ya da bir kalem çizimin resmini çizgilere, yaylara ve dairelere dönüştürür. Tek bir uzunluk verirsiniz, önizlemeyi denetlersiniz ve eskizi oluşturursunuz. Bkz. [Eskiz temelleri](topic:sketch-basics#a-sketch-from-a-photo).
- **Baskı için ölçekleme ve bölme.** {{ui:Dışa aktar}} › {{ui:Baskı için ölçekle (STL veya 3MF)…}}, parçayı değiştirmeden eksen başına ölçekler; örneğin bir çekme payı için. {{ui:Dışa aktar}} › {{ui:Baskı için böl (parça zip'i)…}}, yatağınıza sığmayacak kadar büyük bir parçayı, kama çıkıntıları, kamalar, kuyruk kırlangıç geçmeler, dübel delikleri ya da mıknatıs yuvalarıyla birleşen numaralı parçalara böler. Bkz. [3B yazdırma](topic:print-3d).
- **İç içe saclardan G koduna.** {{ui:Dışa aktar}} › {{ui:İç içe yerleştirilmiş saclar, G koduna}}, iç içe yerleştirilmiş bir DXF'i okur ve seçtiğiniz post işlemcisi üzerinden sac başına bir program üretir: önce delikler ve boşluklar, sonra dış hatlar. Giriş hatlarını, kesme sırasını ya da ortak kenarları planlamaz. Bkz. [Düz parçaları saclara yerleştirme](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Kendi kendine daha fazlasını yapan çizimler.** {{ui:Sayfa}} › {{ui:Otomatik}}, görünümleri en büyük standart ölçeğe kadar (1:1'e dek) tutan en küçük A boyutlu sayfayı seçer. {{ui:Delikleri ölçülendir}}, her deliğe bir merkez işareti, boyut başına bir çağrı ve görünümün sol alt köşesinden konumları ekler. Bkz. [Çizim yapma](topic:drawing-pdf).

### Her uygulamada

- **Diller.** Uygulamalar 54 dilde sunulur. İngilizce dışındaki diller, ana dili İngilizce olmayan biri gözden geçirene kadar makine taslağıdır.
- **Araç çubuğu satırları.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Araç çubuğu satırları}}, Sarma (önceki gibi), 2 satır ya da 1 satır seçeneklerinden birini seçmenize olanak tanır; sığmayan bir çubuk yana doğru kayar. PartCraft'ın Özellik şeridi en çok kullanılan aracı büyük gösterir ve türevleri bir bölünmüş düğmenin arkasına saklar.
- **Yapay zekânızı bağlayın.** Studio, kendi asistanınızı sekiz uygulamanın tümüne bağlamak için merkezdir; her uygulama için salt okuma, öneri ya da düzenleme izni verirsiniz. Bağlı bir asistan, bir cümleden (örneğin bir yük için braket) bir parçayı boyutlandırabilir, işlemini ve her denetimi gösterebilir ve parçayı oluşturabilir; kontrol etmediği şeyleri (gerilme yığılması, yorulma, plastiklerde sünme) bildirir. Bkz. [PartCraft'ı bir yapay zekâ asistanıyla kullanma](topic:use-with-ai-assistants).

## 0.8.1 sürümünde düzeltilenler

- **Tam ekranda imleç donması.** Üzerine gelme seçimi artık sınırlandırıldı. Nedeni en iyi tahminimizdir ve bildiren kişiyle doğrulanmadı.
- **Çalışma zamanında dil.** Studio ve paketlenmiş sürümler, çalışırken dil değiştirebilir; önceden yalnızca İngilizce idi. Bu, her platformda henüz test edilmedi: dil değişmezse bize bildirin.

## Bu sürümde henüz yok

- Yapay zekânızı bağlama tamamlanmadı: Studio içinde tek tıkla bağlantı, tarayıcı yapay zekâsı için barındırılan bağlayıcı, Studio içinde kendi API anahtarınız ve yayımlanmış MCP paketi vaat edilmiyor. Studio'nun kendi yapay zekâsı yoktur.
- Studio kod imzalı değildir: Windows uyarabilir, macOS ise sağ tıklayıp Aç seçmenizi ister. Bkz. [Sorun giderme](topic:troubleshooting).
- Tolerans zincirleri hâlâ tek yönlüdür: bkz. [Tolerans zincirleri](topic:tolerance-stackup).
- Geri kalanı [Henüz yapılmayanlar](topic:not-built-yet) sayfasında listelenmiştir.

Önceki değişiklikler için bkz. [0.7 sürümündeki yenilikler](topic:whats-new-0-7).
