---
title: Isı, termal gerilme ve burkulma
summary: Sabit sıcaklıklardan, ısı akısından, ısı gücünden, taşınımdan ve ışınımdan (kararlı ya da zamanla) bir parçadaki sıcaklıkları bulun; sıcaklık artışıyla bir gerilme çalışması yükleyin ve ince bir parçanın hangi yükte burkulacağını bulun; her yöntemin neyi söyleyip neyi söyleyemeyeceğiyle birlikte.
keywords: termal, ısı transferi, ısı, sıcaklık, iletim, taşınım, film katsayısı, ışınım, yayıcılık, ısı akısı, ısı gücü, ısı üretimi, ısı emici, geçici, zaman, soğuma, ısınma, Crank-Nicolson, kapalı Euler, ısı dengesi, termal gerilme, zamana bağlı termal gerilme, geçici termal gerilme, su verme, termal şok, gerilme geçmişi, en kötü zaman, termal genleşme, genleşme katsayısı, burkulma, Euler burkulması, yük çarpanı, kritik yük, kolon, narin, özdeğer
from: 1a1b7545
---

Bu çalışmalar, statik gerilme ve doğal frekanslarla birlikte Simülasyon çalışma alanında bulunur (bkz. [Gerilme ve sapma denetimi (Simülasyon)](topic:simulation)). Bunları panelin **Tür** kutusundan seçin. Hepsi aynı küçük küp ağını ve aynı malzeme listesini kullanır; her kütüphane malzemesinin bir ısıl iletkenliği, bir özgül ısısı ve bir genleşme katsayısı vardır (tipik el kitabı değerleri, **Özellikler** altında gösterilir).

## Termal: ısı nereye gider?

1. **Tür** olarak **Termal (ısı transferi)** seçin.
2. Panelin **Ekle** listesinden termal koşulları ekleyin, sonra bunların yüzeylerine tıklayın (mesnet ve yüklerde olduğu gibi):
   - **Sabit sıcaklık**: yüzey °C cinsinden bir sıcaklıkta tutulur.
   - **Isı akısı**: yüzeye akan W/m² (negatif değer dışarı akar). Küplerin basamaklı bir yüzey oluşturduğu yerlerde bile yüzeyin gerçek alanına etki eder.
   - **Isı gücü**: watt cinsinden toplam değer; seçilen yüzeylere alanlarına göre paylaştırılır. Bir ısıtıcı ya da bilinen güçteki bir çip için kullanın.
   - **Taşınım**: bir sıcaklıktaki hava ya da sıvı ısıyı h W/(m²·K) ile uzaklaştırır. Tipik h değerleri: durgun hava 5–10, fan 25–100, su 500–10,000. PartCraft h'yi hesaplamaz: bu çalışmada akışkan akışı yoktur.
   - **Işınım**: yüzey, 0 ile 1 arasında bir yayıcılıkla, bir sıcaklıktaki çevreye ışınım yapar. **Doğrusallaştırılmıştır** (ışınım, sıcaklığa bağlı bir katsayı olarak yazılır ve oturana kadar yeniden çözülür) ve yalnızca çevreye gider: yüzeyler birbirleriyle ısı alışverişi yapmaz.
3. **Isı üretimi** (W/m³) bütün parçayı içeriden ısıtır; örneğin dirençli bir parça.
4. **Çöz** düğmesine basın. Parça sıcaklığa göre renklendirilir; ısının nereden aktığını görmek için **Göster** listesinden **Isı akısı**nı seçin. İkisini de okumak için parçanın üzerine gelin.

Kararlı ısı akışı için ısının gidecek bir yer gerekir: en az bir sabit sıcaklık, taşınım ya da ışınım. Yalnızca ısı alan bir parçanın kararlı bir hâli yoktur; bunun yerine geçici yapın.

Tablo en düşük ve en yüksek sıcaklığı ve nerede olduklarını, en büyük ısı akısını ve **ısı dengesini** listeler: her koşula giren ya da çıkan ısı (sabit bir sıcaklık, sağlaması ya da emmesi gereken miktarı sayar), üretilen ısı, giren ve çıkanların toplamları ve **dengesizlik**. Dengesizlik, giren ısının çok küçük bir kesri olmalıdır; büyükse sonuca güvenilmez.

### Zamana bağlı (geçici)

**Geçici** kutusunu işaretleyin ve bir **Başlangıç sıcaklığı** (bütün parça bu sıcaklıkta başlar), bir **Zaman aralığı** ile bir **Zaman adımı** sayısı girin. **Kapalı Euler** sağlamdır; **Crank–Nicolson** aynı adımlarda daha doğrudur ama ani bir değişimden sonra dalgalanabilir. Çözdükten sonra her anda sıcaklıkları görmek için **Zaman** kaydırıcısını sürükleyin (renk ölçeği her an için aynı kalır). Isı dengesi, depolanan ısıyı da içerir.

## Termal gerilme: sıcaklık değişimi parçaya ne yapar?

Bir **Statik gerilme** (ya da **Burkulma**) çalışmasında **Termal yük** ayarını yapın:

- **Tekdüze sıcaklık değişimi**: bütün parça bu kadar kelvin ısınır (ya da negatif bir sayıyla soğur).
- **Termal koşullardan sıcaklıklar**: aynı çalışmaya termal koşullar ekleyin; kararlı sıcaklıklar önce aynı ağ üzerinde çözülür, sonra parça α·(T − **gerilmesiz sıcaklık**) kadar genleşir.
- **Zamana bağlı sıcaklıklar (geçici çalıştırma)**: termal koşullar ekleyin, sonra geçici termal çalışmada olduğu gibi bir **Başlangıç sıcaklığı**, **Zaman aralığı**, **Zaman adımları** ve **Zaman adımlaması** girin. Sıcaklıklar aynı ağ üzerinde (küpler ya da dörtyüzlüler) zamana göre çözülür ve her anın sıcaklıklarında yapılan bir statik çözüm o anın gerilmesini verir. **Gerilme için**:
  - **En kötü zaman** (başlangıç): **Gerilme çözümleri**, başlangıç dahil, çalışma boyunca eşit aralıklarla dağılmış anları çözer (aksi değiştirilmedikçe 21, en fazla 51). Sonuçlar en büyük von Mises gerilmesinin olduğu anda açılır; tablo bu anı adlandırır, küçük bir grafik zamana karşı tepe gerilmesini gösterir ve **Zaman** kaydırıcısı çözülen her andaki gerilmeyi gösterir (renk ölçeği en kötü anınkiyle aynı kalır).
  - **Seçilen tek bir zaman**: tek bir an; verdiğiniz **Zaman (s)** değerine en yakın zaman adımı. Bir burkulma çalışması her zaman seçilen tek bir zaman alır (ayarlamadığınız sürece çalışmanın sonu).

Su verilen (sıcaktan soğuğa daldırılan) ya da aniden ısıtılan bir parça, içi ve yüzeyi en çok farklılaştığında en fazla gerilmeye maruz kalır: çoğu zaman tam başlangıçta. Tutulan bir sıcaklık ilk andan itibaren ani bir değişim gibi uygulanır; bu yüzden tam başlangıçtaki gerilme eleman boyutuna bağlıdır (değişimi yalnızca birkaç eleman görür). Bunu "çok yüksek" olarak okuyun ve ağın çözebildiği değerler için kaydırıcının sonraki anlarına bakın. Gerilme yarı-statiktir: atalet yok, ani değişimden kaynaklanan titreşim yok.

Serbestçe büyüyebilen bir parçanın termal gerilmesi yoktur: hareket etmesini durduracak kadar tutun (örneğin dik açılarda üç sürtünmesiz yüzey). İki duvar arasında tutulursa sıkışır: rijit duvarlar arasında 50 K ısıtılan bir çelik çubuk yaklaşık 117 MPa gerilme taşır. Termal yükler kendilerini dengeler; bu yüzden tepkiler yine yalnızca mekanik yükleri dengeler.

## Burkulma: narin bir parça ne zaman yenik düşer?

1. **Tür** olarak **Burkulma (doğrusal)** seçin ve statik çalışmada olduğu gibi mesnet ve yükleri ekleyin.
2. **Bulunacak yük çarpanlarını** (kaç burkulma modu) ayarlayın.
3. **Çöz** düğmesine basın. Her modun bir **yük çarpanı** vardır: ideal parçanın burkulduğu, yüklerinizin katı. 3'lük bir yük çarpanı, yüklerinizin üç katı demektir; **1'in altındaki bir yük çarpanı, uyguladığınız yüklerde burkulacağı anlamına gelir**. Tablo ayrıca her çarpandaki toplam yükü verir. Mod şekli nasıl burkulduğunu gösterir (boyutunun bir anlamı yoktur).

**Doğrusal burkulma, gerçek burkulma yükünü olduğundan fazla tahmin eder.** Mükemmel bir parça varsayar: tamamen düz, artık gerilmesiz ve elastik. Gerçek parçaların küçük kusurları vardır ve önce akabilir; ince cidarlı kabuklar ise doğrusal değerin bir kesrinde burkulabilir. Geniş bir pay bırakın; ince bir kabuk için 3'e yakın ya da 3'ün altındaki bir yük çarpanını uyarı sayın.

## Ne kadar güvenilir?

PartCraft bu çözücüleri el formülleriyle denetler: iki sıcaklık arasındaki bir çubuk (kesin), bir soğutma kanadı (0.3 K içinde), kendi kendini ısıtan bir levha (kesin), zamanla soğuyan bir küp (Crank–Nicolson ile 0.1 % içinde), bir ucundan aniden ısıtılan bir çubuk, serbestçe ısıtılmış bir çubuk (gerilme yok, ΔL = αLΔT), duvarlar arasında tutulan bir çubuk (σ = −EαΔT), zamanla su verilmiş bir levha (klasik seri çözümüne karşı; küplerde 1 % içinde, dörtyüzlülerde levhanın merkezinde 2.1 %, yüzeyinde 0.5 %), uzun bir çalıştırmanın son anı (kararlı termal gerilmeye karşı; milyonda bire kadar aynı) ve Euler kolonları (sabit–serbest 1 % içinde, mafsallı–mafsallı 1.5 % içinde). Şunları aklınızda tutun:

- **Sabit malzeme değerleri.** İletkenlik, özgül ısı ve genleşme burada sıcaklıkla değişmez; birkaç yüz derecede 10–30 % değişebilirler. Rijitlik de değişmez.
- **Zamana bağlı gerilme yarı-statiktir ve elastiktir**: her an bir statik çözümdür (atalet yok) ve akma yoktur; bu yüzden yüzeyi akıtacak bir su verme, bunun yerine akma sınırının üzerinde bir gerilme gösterir.
- **Taşınım katsayıları sizin girdinizdir**; bir hava ya da su akışından hesaplanmazlar.
- **Temas direnci yok**: parça tek bir katıdır.
- **Yalnızca doğrusal burkulma**: kusur yok, akma yok, burkulma sonrası davranış yok.
- Küplerin basamaklı yapısı ve keskin iç köşeler, termal gerilmeleri diğer gerilmelerle aynı şekilde etkiler (bkz. [Gerilme ve sapma denetimi (Simülasyon)](topic:simulation)).
- Bu deneysel bir sürümdür: önemli parçaları başka bir yolla denetleyin.

## İlgili

- [Gerilme ve sapma denetimi (Simülasyon)](topic:simulation)
- [Henüz yapılmayanlar](topic:not-built-yet)
