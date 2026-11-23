---
title: "Takım yollarını ve G kodunu oluşturun (İmalat)"
summary: "Ham malzemeyi ve bir iş orijinini ayarlayın, takımları seçin, yüzleri seçerek yüzey, cep, kontur, delme ve pah işlemleri ekleyin; parçayı 3D olarak bütünüyle bitirin (paralel, scallop), malzemeyi modele karşı yanlış kesim ve çevrim süresi için simüle edin ve üç yerleşik post'tan birinden ya da kendi düzenlediğiniz birinden G kodu indirin."
keywords: "tam step, atölye için step, iş koordinatları, cam devir, paralel, scallop, 3d yüzey işlemi, bitirme, bilyalı uç, takım kütüphanesi, postu düzenle, özel post, post düzenleyici, uyarlanabilir, uyarlanabilir temizleme, sabit katılım, trokoidal, hsm, yüksek hızlı işleme, imalat, CAM, takım yolu, G kodu, NC, CNC, freze, frezeleme, cep, kontur, profil, yüzey alma, delme, peck, G83, G81, G73, pah, iş ofseti, G54, post işlemci, GRBL, LinuxCNC, besleme ve hızlar, simülasyon, yanlış kesim, çevrim süresi"
from: f8a03be8
---

İmalat çalışma alanı parçayı takım yollarına çevirir ve bunları G kodu olarak yazar. İşlemlerin çoğu **2.5 eksenli** frezelemedir: takım dik tutulur, duvarlar dik olarak aşağı, tabanlar düz kesilir. **3D kaba** ve **Kalan** eğri parçaları 3D olarak temizler ([3D kaba işleme ve artık işleme](topic:rough-3d)); **Paralel** ve **Scallop** onları bitirir ([3D yüzey işlemi](topic:finish-3d)). Döner eksenli bir makinede her işlem eğik bir takımla yapılabilir; iki işlem ise kesim sırasında döner eksenleri hareket ettirir ([4 ve 5 eksenli işleme](topic:multi-axis)). Bir torna için işlemler ([Torna](topic:turning)) ve bir dokunma probu için işlemler ([Prob](topic:probing)) vardır. Parçaya ağ çekirdeğinin verdiği adlandırılmış yüzeylerde çalışır (bkz. [Ağ çekirdeği](topic:solid-kernels)).

Laboratuvar derlemesi: her programı kontrolcünüzün kendi simülatöründe kontrol edin ve önce malzemenin üzerinde havada çalıştırın.

## Kurulum

1. İş alanı seçicisinden **İmalat**'ı seçin, ardından {{ui:Yeni bağlama}}.
2. **Bağlama** sekmesinde şunları seçin:
   - **Takım ekseni (+Z)**: takımın parçaya hangi yönde baktığı. Dünya +Y (PartCraft'ın yukarısı) varsayılandır; bu durumda makine X'i dünya X'idir ve makine Y'si dünya −Z'dir.
   - **İş orijini (G54)**: bir ham malzeme köşesi ya da merkezi, üst ya da alt, modelin üst merkezi ya da model orijini.
   - **Ham malzeme**: bir kutu ya da bir silindir; ya model artı payları (yanlar, üst, alt) ya da sabit bir boyut.
   - **Malzeme** (başlangıç besleme ve hızlarını belirler), **post** (kontrolcü), makinenin en yüksek mil devri, hızlı hareket hızı ve takım değişim süresi, soğutma ve program numarası.

## Takımlar

**Takımlar** sekmesi kütüphaneyi tutar: düz, bilyalı ve yuvarlak uçlu parmak frezeler, matkaplar, pah frezeleri ve yüz frezeleri; her birinin T numarası, çapı, diş sayısı ve diş boyu vardır (uygulandığı yerde ayrıca köşe yarıçapı, uç ya da pah açısı).

Takımlarım tarayıcıda kaydedilebilir ve bir dosya olarak bilgisayarlar arasında taşınabilir: bkz. [Takım kütüphanesi](topic:tool-library).

İş mili devri ve besleme malzemeden gelir: n = 1000 × kesme hızı / (π × çap), besleme = n × diş sayısı × talaş yükü (matkaplarda: n × devir başına besleme). Sayılar yayımlanmış aralıklardan alınmış temkinli başlangıç değerleridir, makinenize göre ayarlanmamıştır; bunları geçersiz kılmak için takım üreticinizin kesme hızını, talaş yükünü, devri ya da beslemeyi yazın. Devir makinenin en yüksek değerini geçtiğinde orada tutulur ve besleme talaş yükünü koruyacak şekilde izler.

## İşlem ekleme

Her araç çubuğu düğmesi bir işlem ekler ve geometri gerektiriyorsa seçime başlar: görünümde yüzlere ya da kenarlara tıklayın (birini bırakmak için yeniden tıklayın), sonra {{ui:Seçim bitti}} ya da {{key:Esc}}.

| İşlem | Seçim | Ne yapar |
|---|---|---|
| {{ui:Yüzey}} | yok | Ham malzemenin tamamı üzerinde, kenarlarının dışına ve modelin üstüne kadar zigzag geçişler |
| {{ui:Cep}} | düz bir taban yüzü, yuvarlak bir delik ya da kapalı bir kenar zinciri | Bölgeyi her derinlik adımında içten dışa ofset geçişlerle temizler; tabanın içindeki adalar (içeride dik duran yüzler) bırakılır; dışında her yerden açık olan bir taban (dışarıda daha yüksek bir şey yoktur) ham malzeme kenarına kadar temizlenir |
| {{ui:Uyarlanabilir}} | Cep ile aynı | Aynı bölgeyi her biri ayarladığınız bir genişlikte kesen geçişlerle temizler (**Katılım**, çapın bir kesri); kesici köşelerde bile hiçbir zaman tam genişlikte bir oluk almaz; sarmal ile girer ve her seviyede duvarları bitirir. Dar kesimler daha derin bir adım ve daha yüksek besleme izin verir |
| {{ui:Kontur}} | düz bir yüz (dış hattı), yuvarlak bir yüz ya da kenarlar | Dış hattı takım yarıçapı kadar ofsetleyerek dışarıda ya da içeride takip eder; giriş ve çıkış yaylarıyla ve isteğe bağlı sekmelerle |
| {{ui:Delme}} | delikler (deliğin duvarına ya da kenarına tıklayın) | Her deliği sabit bir çevrimle deler: kademeli (G83), delme (G81) ya da talaş kırma (G73); ya da bir çap verip o boyuttaki her deliği deler |
| {{ui:Pah kır}} | bir yüzün dış hattı ya da kenarlar | Pah frezesini kenar boyunca çalıştırır, böylece ayarladığınız genişliği keser |
| {{ui:Paralel}} | yok (bütün model) | Herhangi bir açıda paralel çizgilerle 3D bitirme; bilyalı, yuvarlak uçlu ya da düz uçlu parmak freze ile yüzeyi izler. Bkz. [3D yüzey işlemi](topic:finish-3d) |
| {{ui:Scallop}} | yok (bütün model) | Yüzey üzerinde birbirinden ayarlı bir mesafede geçişlerle 3D bitirme; aralarındaki sırt istediğiniz yüksekliktedir |

İşlemi listeden seçerek takımını, yüksekliklerini (güvenlik, geri çekme, besleme yüksekliği, üst, alt), adım derinliğini, adım aralığını, bırakılacak malzemeyi, bitirme geçişini, giriş biçimini (sarmal, rampa ya da dalış), frezeleme yönünü, sekmeleri ya da çevrimi değiştirebilirsiniz. {{ui:Yukarı}} ve {{ui:Aşağı}} sırayı değiştirir, {{ui:Bastır}} işlemi dışarıda bırakır, {{ui:Sil}} kaldırır. Her şey geri alma geçmişindedir ve parça dosyasına kaydedilir.

Bir cebin adım aralığı en fazla takım çapının yarısıdır; böylece tabanının her noktası bir takım yarıçapı içinde bir geçişe yakındır. İçteki köşeler takımın yarıçapını korur.

**Uyarlanabilir temizleme** kesicinin katılımını bir değere yakın tutar. 0.15 çap katılımı yaklaşık 46° bir katılım açısıdır: kesici kenarının malzemedeki yayı. Buna karşılık ofsetli bir cep ilk geçişinde tam genişlikte keser ve her iç köşede daha fazla sarılır. Geçişler arasında takım, kesilmemiş havadan geçtiği yerde indirili kalır, başka yerde kesilmemiş havada kalkar ve iner. Geçişler bölge üzerinde ince bir ızgarada hesaplanır (hücreler takım yarıçapının yaklaşık on ikide biri), bu yüzden katılım ayarlanandan bir hücre kadar geniş olabilir; duvarlar tam olarak bitirilir. Büyük bir açık bölge çok sayıda kısa hareketli uzun bir program yapar.

## Simüle et

Takım yolları her değişiklikten sonra yeniden oluşturulur (parçanın da). {{ui:Simüle et}} ayrıca bütün program bittikten sonra kalan ham malzemeyi gösterir. Panel şunları gösterir:

- **Çevrim süresi**: besleme hareketleri kendi beslemelerinde, hızlı hareketler bağlamanın hızlı hareket oranında düz çizgiler olarak, artı takım değişim süresi. Gerçek makineler hızlanır, bu yüzden daha uzun sürer.
- **Yanlış kesimler**: takımın parçanın yüzeyinin 0.02 mm altına indiği yerler. Kırmızı işaretler bunları görünümde gösterir.
- **Parça üzerinde kalan malzeme**.

Ham malzeme, üstünün bir yükseklik haritasıdır (Z-harita), bu nedenle alt kesimleri gösteremez. Takımı programın boyunca hareket ettirmek için **Oynatma**'yı sürükleyin. Görünümde besleme hareketleri düz, hızlı hareketler kesikli çizilir; her işlem için bir renk.

**Simüle edilen ham malzemeyi göster** açıkken ham malzeme modele karşı hücre hücre renklendirilir: **yeşil** modelin üzerinde olduğu yerde (0.02 mm içinde), **kırmızı** takımın modele girdiği yerde, modelin üzerinde malzeme kaldığı yerde ince bir kabuk için **sarı**, daha fazlası için **turuncu**, 1 mm ve üzerinde kesilmemiş ham malzemenin **gri**sine doğru solar. Renkler her değişiklikte, panelde sayılarla aynı yükseklik haritasından yeniden oluşturulur; bu nedenle yeşil ve kırmızı, Yanlış kesimler satırıyla uyuşur. Bir pah bilerek modele girer ve kenarı boyunca kırmızı gösterir.

## G kodunu yazma

**Post** altında kontrolcüyü seçin ve {{ui:G kodunu indir}} düğmesine basın (ya da araç çubuğundaki {{ui:Post}}):

| Kontrolcü | Dosya | Notlar |
|---|---|---|
| Fanuc tipi ISO | .nc | %, O numarası, satır numaraları, T M6 ile G43 H, sabit çevrimler |
| GRBL | .nc | Takım değiştirici ya da sabit çevrim yok: takım değişimi M0 ile durur, delme düz hareketler olarak yazılır |
| LinuxCNC | .ngc | T M6 ile G43 H, sabit çevrimler, M2 |
| Fanuc tipi torna | .nc | Torna programları için: X çap olarak, devir başına besleme, G50 sınırı altında G96, G32 diş açma |
| LinuxCNC torna | .ngc | Torna programları için: G7 çapları, G95, G96, G33 diş açma; sıfır noktası hareketi yazmaz |
| Kendi postunuz | herhangi | Yazdığınız ya da değiştirdiğiniz bir post: {{ui:Postu düzenle…}}, {{ui:Yeni post…}}, {{ui:Post dosyasını içe aktar…}} |

Her dosya programın, ham malzemenin, iş ofsetinin ve takımların açıklamalarıyla başlar. Koordinatlar milimetre cinsinden, 3 ondalıklıdır. {{ui:Takım yolu CSV}} ve {{ui:Takım yolu JSON}} hareketlerin kendisini dışa aktarır.

**Kesmeden önce çıktıyı makinenizin kendi simülatöründe kontrol edin ve önce ham malzemenin üzerinde havada çalıştırın.** Yerleşik üç post, kontrolcülerin belgelenmiş davranışını izleyen başlangıç noktalarıdır; belirli bir makinede kanıtlanmamışlardır. Değiştirdiğiniz bir post sizindir ve kanıtlaması size aittir. Nasıl yazılacağı: [Post işlemciler](topic:post-processors).

## Tam STEP atölye için

**İşlemler** sekmesindeki G kodu düğmelerinin altında, {{ui:Tam STEP (iş koordinatları)}} `<part>-work.step` dosyasını indirir: parça tam bir katı olarak (delikler ve çıkıntılar için gerçek silindirler, kenarları için gerçek daireler), orijini bu bağlamanın iş orijininde ve Z takım ekseni boyunca olacak şekilde. Bunlar G kodunun kullandığı koordinatlardır; bu yüzden bir atölyenin kendi CAM programı ya da kontrolcüsü modeli, programı kaydırmadan programla hizalar. Dosya yalnızca parçayı içerir, ham malzemeyi ya da takım yollarını içermez.

{{ui:Dışa aktar}} › {{ui:STEP AP242 (kesin katı)}} aynı katıyı parçanın kendi konumunda (Z yukarıda) yazar: bkz. [Baskı, STEP ve DXF için dışa aktarma](topic:export-files#for-other-cad-programs-step).

## Sınırlar

- Cepler, konturlar, delme ve pahlar 2.5 eksenlidir. Eğri parçalar kendi işlemleriyle 3D olarak kabaca işlenir ve bitirilir ([3D kaba işleme ve artık işleme](topic:rough-3d), [3D yüzey işlemi](topic:finish-3d)). Uyarlanabilir temizleme 2D'dir (düz tabanlar).
- Eğik takımlar, 5 eksen ve 4. eksen bitirme, torna ve prob vardır; her birinin kendi sınırları vardır ve **hiçbiri bir makinede çalıştırılmamıştır**: bkz. [4 ve 5 eksenli işleme](topic:multi-axis), [Torna](topic:turning) ve [Prob](topic:probing).
- Tutucular ve saplar çarpışma için denetlenmez; kesim, diş boyundan daha derinse bir uyarı çıkar.
- Besleme ve hızlar başlangıç değerleridir. Post düzenlenebilir bir metindir, ama yalnızca hareketlerin nasıl yazılacağını belirler; takım yolunu değiştiremez, eksen ekleyemez ya da makinenizi bilemez ([Post işlemciler](topic:post-processors) neyi yapamadığını listeler).

## Programı bir makineye gönderme

Masaüstündeki CadCraft Studio'da, Studio'da bir makine kuruluyken, **G kodunu indir** düğmesinin yanında **Bir makineye gönder…** görünür ve aynı programı ağınızdaki makineye yükler. PartCraft'tan asla başlatılmaz: temiz olduğunda makinede başlatın. Tarayıcıda bu düğme gösterilmez (bir web sayfası ağınızdaki bir makineye ulaşamaz): bunun yerine programı indirin.
