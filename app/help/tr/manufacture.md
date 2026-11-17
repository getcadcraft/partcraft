---
title: Takım yolları ve G-code oluşturun (İmalat)
summary: Ham malzemeyi ve iş başlangıcını ayarlayın, takımları seçin, yüzey, cep, kontur, delme ve pah işlemleri ekleyin (yüzeyleri seçerek); bütün modeli 3B bitirin (Paralel, Scallop); ham malzemeyi modele karşı simüle ederek oyukları ve çevrim süresini kontrol edin; üç hazır postadan birinden veya kendi düzenlediğiniz postadan G-code indirin.
keywords: tam step, atölye step, iş koordinatları, cam devri, paralel, scallop, 3B bitirme, bitirme, bilye uçlu, takım kütüphanesi, postu düzenle, özel post, post düzenleyici, uyarlanabilir, uyarlanabilir temizleme, sabit angajman, trokoidal, hsm, yüksek hızlı işleme, imalat, CAM, takım yolu, G-code, NC, CNC, freze, frezeleme, cep, kontur, profil, yüzey işleme, delme, peck, G83, G81, G73, pah, ham malzeme, iş ofseti, G54, post işlemci, GRBL, LinuxCNC, besleme ve hızlar, simülasyon, oyuk, çevrim süresi
from: beeb29aa
---

İmalat çalışma alanı, parçayı 3 eksenli bir freze tezgâhı için takım yollarına çevirir ve bunları G-code olarak yazar. Çoğu işlem **2.5 eksenlidir**: takım dik kalır, duvarlar dik kesilir ve tabanlar düz. **Paralel** ve **Scallop**, eğri yüzeyleri 3B olarak bitirir (bkz. [3B bitirme](topic:finish-3d)); takım yine dik kalır (üç eksen, eğim yok). Parçanın ağ çekirdeğinin verdiği adlandırılmış yüzeyler üzerinde çalışır (bkz. [Ağ çekirdeği](topic:solid-kernels)).

Laboratuvar sürümü: her programı kendi kontrolcünüzün simülatöründe kontrol edin ve önce ham malzemenin üstünde havada çalıştırın.

## Kurulum

1. İş alanı değiştiricisinde **İmalat**'ı seçin, sonra {{ui:Yeni bağlama}}.
2. **Kurulum** sekmesinde şunları seçin:
   - **Takım ekseni (+Z):** takımın parçaya doğru hangi yöne baktığı. Dünya +Y (PartCraft'ın yukarısı) varsayılandır; bu durumda makine X'i dünya X'tir ve makine Y dünya −Z'dir.
   - **İş başlangıcı (G54):** ham malzemenin bir köşesi veya merkezi, üst veya alt, modelin üst merkezi ya da model başlangıcı.
   - **Ham malzeme:** bir kutu veya silindir; ya model artı payları (yanlar, üst, alt) ya da sabit bir boyut.
   - **Malzeme** (başlangıç besleme ve hızlarını ayarlar), **post** (kontrol), makinenin en yüksek mil hızı, hızlı ilerleme oranı ve takım değiştirme süresi, soğutma ve program numarası.

## Takımlar

**Takımlar** sekmesi kütüphaneyi tutar: düz, bilye ve burun yuvarlak parmak frezeler, matkaplar, pah frezeleri ve yüzey frezeleri; her birinin bir T numarası, çapı, ağızları ve ağız uzunluğu vardır (ayrıca uygulandığı yerde köşe yarıçapı, uç veya pah açısı).

Takımlarım tarayıcıda kaydedilebilir ve bir dosya olarak bilgisayarlar arasında taşınabilir: bkz. [Takım kütüphanesi](topic:tool-library).

Mil hızı ve besleme malzemeden gelir: n = 1000 × kesme hızı / (π × çap), besleme = n × ağız sayısı × talaş yükü (matkaplarda: n × devir başına besleme). Sayılar, yayımlanmış aralıklardan alınmış muhafazakâr başlangıç değerleridir, makineniz için ayarlanmamıştır; takım üreticinizin kesme hızını, talaş yükünü, devir veya beslemesini yazarak bunları geçersiz kılın. Hız makinenin en yükseğini geçince orada tutulur ve besleme talaş yükünü koruyacak şekilde izler.

## İşlem ekleyin

Her araç çubuğu düğmesi bir işlem ekler ve geometri gerektiriyorsa seçim başlatır: görünümde yüzeylere veya kenarlara tıklayın (bir tanesini bırakmak için yeniden tıklayın), sonra {{ui:Seçim bitti}} veya {{key:Esc}}.

| İşlem | Seçim | Ne yapar |
|---|---|---|
| {{ui:Yüzey}} | hiçbir şey | Tüm ham malzemenin üzerinde, kenarlarının ötesinde, modelin üstüne kadar zikzak geçişler |
| {{ui:Cep}} | düz bir taban yüzeyi, yuvarlak bir delik veya kapalı bir kenar zinciri | Bölgeyi her derinlik adımında, içten dışa ofset geçişlerle temizler; adalar (taban içinde yukarı duran yüzeyler) bırakılır; etrafı açık bir taban (dışarıda daha yüksek bir şey yok) ham malzeme kenarına kadar temizlenir |
| {{ui:Uyarlanabilir}} | Cep ile aynı | Her biri ayarlanmış bir genişlikte kesen geçişlerle aynı bölgeyi temizler (**Angajman**, çapın bir oranı); böylece takım köşelerde bile tam genişlikte oluk açmaz; bir helezonla iner ve her seviyede duvarları bitirir. Dar kesimler daha derin bir adıma ve daha yüksek bir beslemeye izin verir |
| {{ui:Kontur}} | düz bir yüzey (dış hattı), yuvarlak bir yüzey veya kenarlar | Dış hattı takım yarıçapı kadar ofsetle izler; dışa veya içe doğru, giriş ve çıkış yayları ve isteğe bağlı tutamaklarla |
| {{ui:Delme}} | delikler (deliğin duvarına veya kenarına tıklayın) | Her deliği sabit bir çevrimle deler: peck (G83), delme (G81) veya talaş kırma (G73); ya da o boyuttaki her deliği delmek için bir çap verin |
| {{ui:Pah kır}} | bir yüzeyin dış hattı veya kenarları | Bir pah frezesini kenar boyunca çalıştırır, böylece ayarladığınız genişliği keser |
| {{ui:Paralel}} | hiçbir şey (bütün model) | Herhangi bir açıda paralel çizgilerle 3B bitirme; bilye, burun yuvarlak veya düz parmak frezeyle yüzeyi izler. Bkz. [3B bitirme](topic:finish-3d) |
| {{ui:Scallop}} | hiçbir şey (bütün model) | Yüzey üzerinde birbirinden belirli bir mesafe ayrık geçişlerle 3B bitirme; aralarındaki sırt istediğiniz yüksekliğe sahip olur |

İşlemi listeden seçerek takımını, yüksekliklerini (güvenlik, geri çekme, besleme yüksekliği, üst, alt), adım derinliğini, adım aralığını, bırakılacak ham malzemeyi, bitirme geçişini, girişi (helezon, rampa veya dalma), tırmanma frezelemesini, tutamakları veya çevrimi değiştirebilirsiniz. {{ui:Yukarı}} ve {{ui:Aşağı}} sırayı değiştirir, {{ui:Bastır}} işlemi dışarıda bırakır, {{ui:Sil}} kaldırır. Her şey geri alma geçmişindedir ve parça dosyasında kaydedilir.

Bir cebin adım aralığı en fazla takım çapının yarısıdır; böylece tabanının her noktası bir geçişin bir takım yarıçapı içinde kalır. İç köşeler takımın yarıçapını korur.

**Uyarlanabilir temizleme** kesicinin angajmanını tek bir değere yakın tutar. Çapın 0.15'i olan bir angajman, yaklaşık 46° angajman açısıdır: kesicinin kenarının malzemedeki yayı. Buna karşılık ofset bir cep ilk geçişinde tam genişlikte keser ve her iç köşede daha fazla döner. Geçişler arasında takım, kesilmiş boşluk içinde hareket ettiği yerde aşağıda kalır; diğer yerlerde kesilmiş boşluk içinde kalkar ve iner. Geçişler bölge üzerindeki ince bir ızgarada hesaplanır (hücreler takım yarıçapının yaklaşık on ikide biri), bu yüzden angajman ayarlanandan yaklaşık bir hücre kadar genişleyebilir; duvarlar tam olarak bitirilir. Büyük bir açık bölge, çok sayıda kısa hareketli uzun bir program yapar.

## Simüle edin

Takım yolları her değişiklikten sonra yeniden yapılır (parçanın değişikliğinden sonra da). {{ui:Simüle et}} ayrıca programın tamamından sonra kalan ham malzemeyi gösterir. Panel şunları gösterir:

- **Çevrim süresi**: besleme hareketleri kendi beslemelerinde, hızlı hareketler kurulumun hızlı ilerleme oranında düz çizgiler olarak, artı takım değiştirme süresi. Gerçek makineler ivmelenir, bu yüzden daha uzun sürer.
- **Oyuklar**: takımın parçanın yüzeyinin 0.02 mm altına indiği yerler. Kırmızı işaretler bunları görünümde gösterir.
- **Parça üzerinde kalan ham malzeme**.

Ham malzeme bir yükseklik haritasıdır (bir Z haritası), bu yüzden altkesimleri gösteremez. Takımın programda hareketini izlemek için **Oynatma**'yı sürükleyin. Görünümde besleme hareketleri düz, hızlı hareketler kesikli çizgilerle gösterilir; her işlem için bir renk.

**Simüle edilmiş ham malzemeyi göster** açıksa ham malzeme, modele karşı hücre hücre renklendirilir: modelin üzerindeyse **yeşil** (0.02 mm içinde), takım modele girdiyse **kırmızı**, ve model üzerinde ham malzeme kaldıysa ince bir kabuk için **sarı**, daha fazlası için **turuncu**, 1 mm ve üzeri kesilmemiş ham malzemenin **grisine** solar. Renkler her değişiklikte, panelde sayılarla aynı yükseklik haritasından yeniden yapılır; böylece yeşil ve kırmızı, Oyuklar satırıyla uyuşur. Pah bilerek modele girer ve kenarı boyunca kırmızı gösterir.

## G-code'u post edin

**Post** altında kontrolü seçin ve {{ui:G kodunu indir}} (veya araç çubuğunda {{ui:Post}}) düğmesine basın:

| Kontrol | Dosya | Notlar |
|---|---|---|
| Fanuc tarzı ISO | .nc | %, O numarası, satır numaraları, G43 H ile T M6, sabit çevrimler |
| GRBL | .nc | Takım değiştirici veya sabit çevrim yok: takım değişimi M0 ile durur, delme düz hareketler olarak yazılır |
| LinuxCNC | .ngc | G43 H ile T M6, sabit çevrimler, M2 |
| Kendi postunuz | herhangi | Sizin yazdığınız veya değiştirdiğiniz bir post: {{ui:Postu düzenle…}}, {{ui:Yeni post…}}, {{ui:Post dosyasını içe aktar…}} |

Her dosya programın, ham malzemenin, iş ofsetinin ve takımların açıklamalarıyla başlar. Koordinatlar milimetre cinsinden, 3 ondalık basamakla yazılır. {{ui:Takım yolu CSV}} ve {{ui:Takım yolu JSON}} hareketlerin kendisini dışa aktarır.

**Çıktıyı kesmeden önce makinenizin kendi simülatöründe kontrol edin ve önce ham malzemenin üstünde havada çalıştırın.** Üç hazır post, kontrollerin belgelenmiş davranışını izleyen başlangıç noktalarıdır; belirli bir makinede kanıtlanmış değildir. Değiştirdiğiniz bir post sizindir ve kanıtlamak da size aittir. Nasıl yazılacağı: [Post işlemciler](topic:post-processors).

## Atölye için tam STEP

G-code düğmelerinin altında, **İşlemler** sekmesinde, {{ui:Tam STEP (iş koordinatları)}} `<part>-work.step` dosyasını indirir: parça tam bir katı olarak (delikler ve çıkıntılar için gerçek silindirler, kenarları için gerçek daireler), başlangıç noktası bu kurulumun iş başlangıcında ve Z takım ekseni boyunca. Bunlar G-code'un kullandığı koordinatlardır; böylece bir atölyenin kendi CAM programı veya denetleyicisi modeli programla hizalar, modeli taşımadan. Dosya yalnızca parçayı içerir; ham malzemeyi ve takım yollarını içermez.

{{ui:Dışa aktar}} › {{ui:STEP AP242 (kesin katı)}} aynı katıyı parçanın kendi konumunda (Z yukarı) yazar: bkz. [Baskı, STEP ve DXF için dışa aktarma](topic:export-files#for-other-cad-programs-step).

## Sınırlar

- Cepler, konturlar, delme ve pahlar 2.5 eksenlidir. Eğri yüzeyler 3B olarak bitirilebilir ([paralel ve scallop](topic:finish-3d)) ama 3B olarak kaba işlenemez (bitirene kadar bir koni basamak olarak kalır) ve kalıntı işleme yoktur. Uyarlanabilir temizleme 2B'dir (düz tabanlar).
- Yalnızca üç eksen: eğim yok, tornalama yok, muayene yok.
- Tutucular ve saplar çarpışma için kontrol edilmez; bir kesim ağız uzunluğundan derin olduğunda uyarı çıkar.
- Besleme ve hızlar başlangıç değerleridir. Post düzenlenebilir bir metindir, ama yalnızca hareketlerin nasıl yazılacağına karar verir; takım yolunu değiştiremez, eksen ekleyemez ya da makinenizi bilemez ([Post işlemciler](topic:post-processors) yapamadıklarını listeler).

## Programı bir makineye gönderin

Masaüstündeki CadCraft Studio'da, Studio'da kurulmuş bir makineyle, **Makineye gönder…** **G kodunu indir** yanında görünür ve aynı programı ağınızdaki makineye yükler. PartCraft'tan asla başlatılmaz: makine hazır olduğunda makinede başlatın. Bir tarayıcıda düğme gösterilmez (bir web sayfası ağınızdaki bir makineye ulaşamaz): bunun yerine programı indirin.
