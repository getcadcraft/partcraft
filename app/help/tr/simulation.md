---
title: Gerilme ve sehimi denetleyin (Simülasyon)
summary: Bir malzeme seçin, yüzeyleri sabitleyin, kuvvetler, basınçlar ya da parçanın kendi ağırlığını ekleyin, çözün ve von Mises gerilmesini, yer değiştirmeyi, güvenlik katsayısını, tepkileri ve doğal frekansları modelde okuyun; yöntemin neyi söyleyebildiğini ve neyi söyleyemediğini de bilin.
keywords: simülasyon, FEA, canlı analiz, düzenlerken güncelle, kır, önce ne kırılır, yük katsayısı, doğrusal olmayan, plastisite, akma, plastik gerinim, bilineer, temas, temas çifti, penaltı, yapışık, sürtünmesiz temas, CalculiX, .inp, .frd, sonlu elemanlar, gerilme, gerinim, von Mises, yer değiştirme, sehim, güvenlik katsayısı, emniyet katsayısı, akma, tepki, yük, kuvvet, basınç, yerçekimi, öz ağırlık, sabit, sürtünmesiz, mesnet, malzeme, çelik, alüminyum, titanyum, ABS, PLA, naylon, doğal frekans, modal, titreşim, ağ, eleman boyutu, dörtyüzlü, dörtyüzlüler, dörtyüzlü ağ, voksel, ağ kalitesi, asal gerilme, eşdeğer gerinim, hata tahmini, eğri yüzeyler, delikler, köşe yuvarlatmaları, uyarlamalı, otomatik iyileştirme, h-uyarlamalı, yakınsama, ağ yakınsaması, kesin yüzey, küre, koni, simit, spline, serbest biçimli
from: 6f2fdec1
---

Simülasyon çalışma alanı, modellediğiniz parça için "bu yük altında eğilir mi, kırılır mı?" sorusunu yanıtlar. **Doğrusal statik** bir çalışmadır (küçük sehimler, malzeme elastik kalır) ya da **doğal frekans** çalışmasıdır; parçanın yüzeylerini izleyen ikinci dereceden dörtyüzlülerden oluşan bir ağ üzerinde çözülür (ya da isterseniz eşit küçük küplerden). Ağ çekirdeğinin parçaya verdiği adlandırılmış yüzeyler üzerinde çalışır (bkz. [Ağ çekirdeği](topic:solid-kernels)).

Araç çubuğunun solundaki **Çalışma alanı** kutusundan **Simülasyon** seçin. Parçanız değişmez; çalışma parça dosyasının içine kaydedilir ve ona yapılan her değişiklik geri alınabilir.

## Çalışma kurma

1. Sağ paneldeki **Yeni çalışma** düğmesine basın.
2. **Malzeme** seçin. Panel rijitliğini (E), Poisson oranını, yoğunluğu ve akma dayanımını gösterir. Değerler tipik el kitabı rakamlarıdır; tedarikçinizin sertifikalı değerleri farklı olabilir.
3. **Ağ** türünü seçin:
   - **Dörtyüzlü (doğru)**, varsayılan: dış yüzeyleri parçanın yüzeylerinde yer alan 10 düğümlü dörtyüzlüler; delikler, köşe yuvarlatmaları ve diğer yuvarlak yüzeylerde eğri kenarlarla. Düz, silindirik, konik, küresel ve simit biçimli yüzeylerdeki, döndürülmüş ve ekstrüde edilmiş yüzeylerdeki ve serbest biçimli (B-spline) yüzeylerdeki düğümler kesin yüzey üzerinde oturur; başka her türden yüzey kendi görüntü ağını izler ve sonuç tablosu kaç yüzeyin bunu yaptığını söyler. Ağ, eğri yüzeylerin, ince duvarların ve keskin kenarların yakınında kendiliğinden daha incelir.
   - **Voksel küpler (hızlı)**: parça eşit küplerle doldurulur. Hızlıdır, ama eğri yüzeyler basamaklı olur. Dörtyüzlü ağ var olmadan önce kaydedilmiş çalışmalar bunu korur.
4. **Eleman boyutu** boş bırakılırsa otomatik bir boyut kullanılır (yaklaşık 12,000 dörtyüzlü ya da 20,000 küp); ya da milimetre cinsinden bir değer yazın. Panel, daha ince noktalar eklenmeden önce bunun yaklaşık kaç eleman yaptığını gösterir. Dörtyüzlülerle **Eğri yüzeylerde daha küçük elemanlar** (varsayılan olarak açık), gerilmenin genellikle en yüksek olduğu delikleri ve köşe yuvarlatmalarını iyileştirir.

### Otomatik iyileştirme

Dörtyüzlülerle, durağan ya da burkulma çalışmasında (termal yük olmadan), doğal frekans çalışmasında ve kararlı termal çalışmada **Otomatik iyileştir (uyarlamalı)** sunulur. İşaretleyin ve ayarlayın:

- **Hedef hata (%)**: tahmini hata bunun altına düştüğünde çözme durur (başlangıçta %1).
- **En fazla geçiş**: çalıştırabileceği en fazla çözüm sayısı (başlangıçta 5, en fazla 10).

Her geçişte çözüm yapılır, en büyük tahmini hataya sahip elemanlar bulunur, bunlar bölünür (ağı bütün tutmak için gereken en az komşuyla birlikte) ve yeniden çözülür. Eğri yüzeylerdeki yeni düğümler kesin yüzeye yerleşir. Sonuçlarda her geçiş için elemanları, bilinmeyenleri, tahmini hatayı, en yüksek gerilmeyi (ya da sıcaklığı) ve yer değiştirmeyi (ya da ısı akısını) gösteren bir tablo ve grafik çıkar; ayrıca durma nedenini açıklayan bir satır: hedefe ulaşıldı, geçişler bitti, bir sonraki ağ çok büyük olurdu ya da bir geçiş başarısız oldu (o zaman son iyi geçişi görürsünüz).

Tahmini bir tahmin olarak okuyun. Bu tahmin (Zienkiewicz–Zhu; kesin yanıtlarla karşılaştırıldığında gerçek hatanın yaklaşık 0.6 ile 0.95'ini gösterir) hatayı **tüm parça** üzerinden ölçer; bu yüzden bir delikte ya da köşe yuvarlatmasında gerilme zirvesi, tahmin küçük göründüğünde genellikle hâlâ biraz yanlıştır: bir gerilme yoğunlaşması için hedefi %1'in altına koyun ve zirvenin geçişten geçişe nasıl yerleştiğini izleyin. Keskin bir iç köşede ya da sabit bir yüzeyin kenarında gerçek gerilme sonsuzdur; tahmin oraya asla ulaşmaz: geçişler bunun yerine biter.

**Doğal frekanslar ve burkulma.** Bir doğal frekans çalışmasında tahmin, istediğiniz her modu kapsar, her biri eşit sayılır; tablo ve grafik ilk iki frekansı izler. Yalnızca düz yüzeyleri olan bir parçada bir frekans geçişten geçişe yalnızca düşebilir (her ağ bir öncekini içerir); eğri yüzeyler de gerçek şekillerine yaklaşır, bu da bir frekansı az miktarda her iki yöne de oynatabilir. Burkulmada tahmin ön gerilmeyi ve burkulma modlarını kapsar, tablo ise yük katsayılarını izler. 100 × 10 × 10 mm'lik bir çelik çubukta kontrol edildi: ilk frekans dört geçişte 812.4'ten 811.9 Hz'e yerleşir, Euler–Bernoulli'nin (kesmeyi yok sayar) 0.4 % altında; kolonun yük katsayısı Euler'e göre 0.5 % içinde.

## Tutma ve yükleme

Her çalışma en az bir mesnet ve gerilme için en az bir yük gerektirir.

1. Araç çubuğunda {{ui:Sabit}} tuşuna basın. Yeni mesnet seçilir ve yüzeyleri bekler: sabit tutulacak yüzeylere tıklayın (bir yüzeyi bırakmak için yeniden tıklayın). Bitince **Seçimi bitir** ya da {{key:Esc}} tuşuna basın. Mavi koniler tutulan yüzeyleri işaretler.
2. {{ui:Kuvvet}} tuşuna basın ve kuvvetin etkidiği yüzeylere tıklayın. Panelde **Toplam kuvvet**i newton cinsinden yazın ve **Yönü**nü seçin: yüzeye doğru ya da bir eksen boyunca. Kuvvet, seçilen yüzeylere alanlarına göre paylaştırılır. Turuncu oklar bunu gösterir.
3. Yüzeylere doğru iten bir basınç için MPa (N/mm²) cinsinden {{ui:Basınç}} tuşuna basın; negatif bir basınç çeker.

Daha fazla tür panelin **Ekle** listesinde: bir **Sürtünmesiz yüzey** (yüzey kendi üzerinde kayabilir ama ondan uzaklaşamaz; simetri düzlemleri ve pürüzsüz mesnetler için kullanın) ve **Yerçekimi** (parçanın kendi ağırlığı, 9.81 m/s², seçtiğiniz yönde).

Parçayı kaymaya ya da dönmeye serbest bırakan bir mesnet reddedilir ve hangi hareketin serbest bırakıldığını söyler.

## Çözme ve sonuçları okuma

{{ui:Çöz}} tuşuna basın. İş arka planda çalışır; **Durdur** onu iptal eder. Sonra:

- Parça **von Mises gerilmesine** göre renklenir; **Göster** içinden **Yer değiştirme** ya da **Güvenlik katsayısı** seçin. Gösterge ölçeği verir.
- Değerleri okumak için imleci parçanın üzerine getirin.
- **Deforme şekil** seçeneğini işaretleyerek parçanın bükülmüş halini görün (hareket **Ölçek** ile büyütülür; gerçek olan tablodakidir).
- Tablo en büyük gerilmeyi ve nerede olduğunu, en büyük yer değiştirmeyi, en küçük **güvenlik katsayısını** (akma dayanımı ÷ von Mises gerilmesi; 1'in altında malzeme akar), uygulanan yükü, mesnetlerdeki **tepkileri** (yükü dengelerler) ve kullanılan ağı listeler.

Doğal frekanslar için bu **Türü** seçin, **Mod** sayısını belirleyin ve çözün. Her mod frekansını ve şeklini gösterir (şekiller en büyük hareketlerine göre 1'e ölçeklenir).

Parçayı değiştirirseniz sonuçlar güncel olmadığı işaretlenir: yeniden çözün.

## Akma ve temas (doğrusal olmayan çalışmalar)

İki çalışma türü daha, "malzeme elastik kalır" sınırını aşar:

- **Doğrusal olmayan (malzeme akar)** malzemenin düz çizgisini akma gerilmesine kadar izler, sonra daha yassı bir eğim (**Akmadan sonraki eğim**, boş bırakılırsa E'nin %1'i). Yük **Yük adımları** içinde uygulanır; yerleşmeyen bir adım kendiliğinden yarıya indirilir. Sonuçlar grafiklere **Plastik gerinim** ekler ve yükün ne kadarının taşındığını söyler. Bir adım hâlâ yerleşemezse, çalışma son iyi adımda durur ve ⚠ Sorunlar paneli nerede olduğunu gösterir: parça orada dayanımını tüketmiştir (göçme) ya da adımlar çok büyüktür.
- **Parçalar arasında temas** parçanın ayrı parçalarının birbirine bastırmasına izin verir. Bir **Temas çifti** ekleyin; A tarafının yüzeylerini (bastıran yüzeyler) {{ui:Yüzeyleri seç}} ile, sonra B tarafının yüzeylerini {{ui:B tarafı yüzeylerini seç}} ile seçin. **Sürtünmesiz** parçalar iter, kayar ve ayrılır; **yapışık** parçalar yapışık kalır. Her parça ayrı ayrı ağlanır, bu yüzden aralarındaki küçük bir boşluk sorun değildir. Temas bir penaltı yöntemidir: parçalar birbirine biraz batar (**penaltı katsayısı** × E ÷ eleman boyutu, temasın ne kadar sert olduğunu belirler). Tablo en derin batmayı gösterir; Sorunlar paneli bu, eleman boyutunun %1'inden fazla olduğunda uyarır: katsayıyı artırın ya da daha küçük elemanlar kullanın.

İkisi de dörtyüzlü ağı kullanır. Sürtünme, büyük kayma ve büyük dönmeler burada çözülmez.

## CalculiX ile çalıştırma

**Dışa aktar › CalculiX dosyası (.inp)** (ya da paneldeki {{ui:CalculiX dosyası kaydet (.inp)}}) çalışmayı CalculiX için bir girdi dosyası olarak kaydeder; CalculiX ayrı bir programdır, kendiniz kurup çalıştırırsınız: aynı ağ, malzeme, mesnetler, yükler ve temas çiftleri, mm, N ve MPa cinsinden. Çalıştırın, sonra **Dışa aktar › CalculiX sonuçları (.frd)** sonuç dosyasını aynı ağa geri okur ve yer değiştirmeyi (dosyada gerilmeler varsa von Mises gerilmesini de) gösterir. Bu arada parçayı ya da eleman boyutunu değiştirdiyseniz ağ aynı olmaz ve PartCraft bunu söyler: yeni bir dosya kaydedin.

## Ona ne kadar güvenmeli

PartCraft çözücüsünü el formülleriyle denetler (bir konsolun uç sehimi PL³/3EI %1 içinde, bir çubuğun uzaması PL/AE tam olarak, bir konsolun ilk frekansı %3 içinde, bir plakadaki delik etrafındaki gerilme). Yine de şu sınırları akılda tutun:

- **Ağ.** Dörtyüzlülerle PartCraft bir konsolun sehimini ve eğilme gerilmesini (%0.3 içinde), bir plakadaki delikte gerilmeyi (Kt, yaklaşık %1 içinde), basınç altındaki kalın bir boruyu (Lamé, %0.3 içinde) ve ilk frekansı (%0.4 içinde) denetler. Tablo **ağ kalitesini** (eleman yüzleri arasındaki en küçük ve en büyük açılar; yaklaşık 10°'nin altında bir eleman zayıftır) ve bir **tahmini gerilme hatasını** gösterir: birkaç yüzdeden fazlaysa daha küçük bir eleman boyutuyla yeniden çözün ya da bunu **Otomatik iyileştir** yapsın. Delikli bir plakada ve iki kenar çentikli bir çubukta, otomatik iyileştirme ders kitabındaki Kt'ye %1 içinde ulaştı; tüm ağı incelterek gerekenin yaklaşık altıda biri kadar bilinmeyenle. Voksel küplerle bir delik ya da köşe yuvarlatması küp boyutunda bir basamaktır, bu yüzden oradaki gerilme kabadır.
- **Keskin iç köşeler ve sabit yüzeylerin kenarları gerçek bir zirve gerilmesine sahip değildir.** Oradaki değer, elemanlar küçüldükçe artmaya devam eder. Gerilmeleri bu tür yerlerden biraz uzakta okuyun ya da modelde köşeyi yuvarlatın.
- **Okunacak sonuçlar.** Von Mises gerilmesi, yer değiştirme ve güvenlik katsayısının yanında dörtyüzlü bir çalışma **en büyük ve en küçük asal gerilmeyi** (çekme ve basma) ve **eşdeğer gerinimi** gösterir. Elemanları görmek için **Ağı göster** seçeneğini işaretleyin.
- **Statik çalışmalar doğrusal ve elastiktir.** Akma ve temas için yukarıdaki doğrusal olmayan çalışma türlerini kullanın; büyük sehimler ve yorulma çözülmez. Isı, termal gerilme ve doğrusal burkulma kendi çalışma türleridir: bkz. [Isı, termal gerilme ve burkulma](topic:thermal-and-buckling).
- **Her malzeme her yönde aynıdır.** 3B baskılı plastikler katmanları boyunca daha zayıftır, genellikle üçte bir ya da daha fazla.
- Bu bir laboratuvar sürümüdür: önemli parçaları başka bir yolla denetleyin.

## Düzenlerken güncelle (Canlı)

Çöz bloğundaki **Düzenlerken güncelle** seçeneğini işaretleyin; Simülasyon yanıtları düzenlemelerinizi izler. Bir boyutu, bir yükü, malzemeyi ya da ortamı değiştirin; çalışmanın kendi elemanlarından dört kat büyük elemanlarla yapılmış bir **hızlı yanıt** hemen görünür; bir an (bir saniye kadar) durduğunuzda çalışmanın kendi **iyileştirilmiş yanıtı** onun yerini alır. Sonuçlar hangisine baktığınızı ("Hızlı yanıt" ya da "İyileştirilmiş yanıt") ve eleman boyutunu söyler. Hızlı yanıt yön ve boyut için iyidir: bir çelik konsolda sehimde iyileştirilmiş olanın %1 içinde, gerilmede yaklaşık %4 içindeydi. Kullanacağınız sayılar için iyileştirilmiş olana güvenin. Durağan, doğal frekans, termal ve burkulma çalışmaları bu şekilde çalışır; Canlı bir görünüm ayarıdır ve parçada kaydedilmez. Kendiniz bastığınız bir Çöz, bir sonraki düzenlemeye kadar olduğu gibi kalır.

## Önce neyin kırılacağını bulun (Kır)

Durağan ya da burkulma çalışması için **Kır** bloğundaki **Önce ne kırılır?** düğmesine basın. PartCraft çalışmanın yüklerini (kuvvetler, basınçlar ve ağırlık birlikte) parça pes edene kadar ölçekler ve en kötüden başlayarak şunları listeler: **akmaya kadar yük katsayısı** (bugünkü yükler üzerinden, en yüksek von Mises gerilmesinin malzemenin akma dayanımına ulaştığı katsayı; bunun olduğu yer kırmızı bir işaretle gösterilir) ve aynı mesnet ve yükler için **burkulmaya kadar yük katsayısı**. 4.3 katsayısı, parçanın akmadan önce yükünün 4.3 katını taşıdığı anlamına gelir; **1'in altında bir katsayı, yüklüyken zaten pes ettiği anlamına gelir** ve bu Sorunlar listesinde bir hata olarak görünür (en zayıf bulgu, her şey sağlam olsa bile bir not olarak gösterilir). Katsayılar, eleman boyutunuzdaki dörtyüzlüler üzerinde doğrusal bir çalışmadan gelir; bu yüzden o çalışma kadar iyidirler: sabit bir yüzeyde ya da keskin bir köşede gerilmenin gerçek bir zirvesi yoktur (aşağıya bakın) ve akma katsayısı orada temkinli tarafta kalır. Asistanınız aynı denetimi `break_run` aracıyla çalıştırabilir.

## İlgili konular

- [Isı, termal gerilme ve burkulma](topic:thermal-and-buckling)
- [Yüklerden şekil büyütme (Üretken)](topic:generative-design)
- [Mesafeleri, açıları ve kütleyi ölçün](topic:measure)
- [Henüz yapılmayanlar](topic:not-built-yet)
