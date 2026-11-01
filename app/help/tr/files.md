---
title: Dosyalar: açma, kaydetme ve dışa aktarma
summary: PartCraft'ın açtığı ve kaydettiği parça ve montaj dosyaları, her dışa aktarma biçimi ve neyi koruduğu, dosyaların gittiği yer ve çevrimdışı ya da tarayıcılar arasında nelerin değiştiği.
keywords: aç, kaydet, dışa aktar, indir, dosya, partcraft.json, montaj dosyası, stl, 3mf, step, dxf, pdf, dosyalarım nerede, çevrimdışı, farklı kaydet
from: c15c2c48
---

PartCraft bilgisayarınızdaki dosyalar üzerinde çalışır. Bir parçayı asla yüklemez ve hesap ya da bulut depolama söz konusu değildir. Bulutta kaydetme henüz yok.

## PartCraft'ın açtıkları

| Dosya | Uzantı | Nasıl |
|---|---|---|
| Bir PartCraft parçası | `.partcraft.json` | {{ui:Aç}}, {{key:Mod+O}} ya da 3B görünüme bırakma |
| Bir PartCraft montajı | `.partcraft-asm.json` | Aynısı: PartCraft hangi tür olduğunu görür |
| Bir STEP katısı | `.step`, `.stp` | Üçgenler olarak okunan katı gövde: [Bir STEP dosyasını açma ve üzerine kurma](topic:import-step) |

STL, OBJ ve 3MF örgüleri de katı gövde olarak açılır ([Bir STL, OBJ veya 3MF açma](topic:open-meshes)), `.3dm` dosyaları da ([Bir .3dm modeli açma](topic:open-3dm-files)). DXF, IGES ve diğer programların kendi parça dosyaları açılamaz (bkz. [Henüz yapılmadı](topic:not-built-yet)).

Açarken kurallar:

- Bir parça veya montaj dosyasının adı `.json` ile bitmelidir ve dosya 50 MB'tan küçük olmalıdır.
- Dosyalar bir şey gösterilmeden önce denetlenir. Hasarlı ya da düzenlenmiş bir dosya sade bir nedenle reddedilir, örneğin "Bu bir PartCraft dosyası değil."
- Daha yeni bir PartCraft ile kaydedilmiş dosya reddedilir: "Bu dosya daha yeni bir PartCraft ile kaydedilmiş (dosya sürümü 3); bu sürüm 2 sürümünü okur." Daha eski dosyalar açılır.
- Ekrandaki parçanın kaydedilmemiş değişiklikleri varsa PartCraft önce sorar: {{ui:İptal}}, {{ui:Değişiklikleri at}} veya {{ui:Önce kaydet}}.

## Kaydetme

{{ui:Kaydet}} ya da {{key:Mod+S}} ekrandakini kaydeder:

- Bir parçada: `<parça adı>.partcraft.json`; tüm geçmiş (eskizler, ilişkiler, ölçüler, özellikler, geri sarma konumu), çizim sayfasının kesit, detay ve GD&T notları ve daha önceki bir sürümde içe aktarılmış bir STEP katısının tam metni. Bu sürümün kuramadığı özellikler değiştirilmeden geri kaydedilir. Katının kendisi saklanmaz; PartCraft dosya açıldığında onu geçmişten yeniden kurar.
- Bir montajda: `<montaj adı>.partcraft-asm.json`, **içindeki her parçayla**. Tek dosya montajın tamamını taşır; böylece onu tek başına gönderebilirsiniz.

Kaydetme bir **indirmedir**. Tarayıcınız dosyayı indirilenler klasörüne koyar ya da sormaya ayarladıysanız nereye koyacağını sorar. Yeniden kaydetmek yeni bir indirme yapar; tarayıcı eskisinin yerine geçmek yerine ona `Part1 (1).partcraft.json` gibi bir ad verebilir. Dosyaları {{pick:mac=Finder|windows=Dosya Gezgini|linux=dosya yöneticiniz}} içinde istediğiniz gibi yeniden adlandırın veya taşıyın.

Parça adındaki harfler, rakamlar, boşluklar, `_`, `.` ve `-` dışındaki karakterler dosya adında `_` olur.

:::tip
Çoğu tarayıcıda her indirmenin nereye kaydedileceğini soran bir ayar vardır. Her seferinde bir "Farklı kaydet" seçimi istiyorsanız açın: Chrome ve Edge'de ayarlarda İndirilenler altındadır; Firefox'ta Genel, Dosya ve Uygulamalar altında; Safari'de Genel, Dosya yükleme konumu altında.
:::

İndirmelerin gittiği yer ve dosyaları güvende tutma hakkında daha fazlası: [Dosyalarınızın gittiği yer](common:your-files).

## Dışa aktarma

{{ui:Dışa aktar}} menüsü başka biçimleri yazar. Her biri bir indirmedir ve parçanın adını taşır.

| Menü öğesi | Dosya | İçindekiler |
|---|---|---|
| {{ui:STL, 3B baskı için}} | `<ad>.stl` | Katının üçgenlerinin ikili STL'si, milimetre, **Z yukarı** |
| {{ui:3MF, 3B baskı için}} | `<ad>.3mf` | Katı tek nesne olarak 3MF, milimetre, **Z yukarı** |
| {{ui:STEP AP242 (kesin katı)}} | `<ad>.step` | Bu sürümde henüz yapılmadı (soluk): kesin bir çekirdek gerektirir |
| {{ui:STEP AP214 (kesin katı)}} | `<ad>.step` | Bu sürümde henüz yapılmadı (soluk) |
| {{ui:STEP (yüzeyli, örgü çekirdeği)}} | `<ad>.step` | Örgüden düz yüzeylerden oluşan bir katı: **yuvarlak yüzeyler birçok küçük düz yüzeycik olur**. Milimetre, PartCraft'ın kendi eksenlerinde (Y yukarı). Bu sürümde diğer CAD programları için kullanılacak STEP |
| {{ui:Eskizin ya da düz yüzeyin DXF'i}} | `<ad> - <eskiz>.dxf` veya `<ad> - face.dxf` | DXF R12. Bir eskiz: eskizin kendi koordinatlarında çizgiler, yaylar, daireler ve noktalar; PROFILE, CONSTRUCTION ve POINTS katmanlarında. Seçilen bir düz yüzey: dış çizgileri kapalı çoklu çizgiler olarak (yuvarlak kenarlar yüzeycikleri olarak) |
| {{ui:Çizim (PDF): görünümler, kesit, detay, GD&T}} | `<ad> - drawing.pdf` | A3 çizim sayfası: üç görünüm, izometrik, ayarlandıysa kesit ve detay, toplam ölçüler, GD&T simgeleri, künye |

:::note
{{ui:STEP AP242 (kesin katı)}} ve {{ui:STEP AP214 (kesin katı)}} bu sürümde henüz yapılmadı: {{ui:STEP (yüzeyli, örgü çekirdeği)}} kullanın. Doğru şekle ve hacme sahiptir, ama her yuvarlak yüzey birçok düz yüzeycik olduğundan diğer programlar bir deliği silindir olarak seçemez. Önemliyse önce **Eğriler** ayarını inceltin.
:::

- Dışa aktarmalar ekrandaki parçanındır. Dışa aktarma bir montajda kapalıdır; henüz montaj dışa aktarma yok.
- STL, 3MF, yüzeyli STEP ve yüzey DXF'i her zaman yüzeycikten oluşur. **Eğriler** ayarı (hiçbir şey seçili değilken sağ panelde) bunların ne kadar ince olduğunu, tur başına 32 ile 256 yüzeycik arasında belirler. Pürüzsüz bir baskı için STL veya 3MF dışa aktarmadan önce İnce veya Çok ince seçin.
- PDF çizimi okuyucunun yerleşik Helvetica yazı tipini kullanır. Gösteremediği karakterler "?" olarak basılır.

Adım adım: [Baskı, STEP ve DXF için dışa aktarma](topic:export-files) ve [Bir çizim sayfası yapma](topic:drawing-pdf).

## Kaydedilmemiş çalışma

- PartCraft, her değişiklikten kısa süre sonra açık parçanın veya montajın bir kurtarma kopyasını bu tarayıcıda tutar; böylece bir çökme ya da kapanan sekme onu kaybettirmez: PartCraft'ı bir sonraki açışınızda "Çalışmanızı kurtaralım mı?" diye sorar. Bu bir kaydetme değildir: çalışmanızı saklamak için bir dosyaya kaydedin. Bkz. [Kaydedilmemiş çalışmayı kurtarma](common:recover).
- Kaydedilmemiş değişikliklerle sekmeyi kapatmaya ya da yenilemeye çalışırsanız tarayıcı "Siteden ayrılınsın mı?" diye sorar. Bu tarayıcının kendi kutusudur; PartCraft sözcüklerini değiştiremez.
- {{ui:Yeni}}, {{ui:Aç}} ve bir montajı kapatma, kaydedilmemiş değişiklikleri atmadan önce sorar.

## Çevrimiçi ve çevrimdışı

Her şey bilgisayarınızda olur: örgü çekirdeği (bir WebAssembly programı) uygulamayla birlikte indirilir ve geometriyi yerelde kurar, dosyalar diskinizden okunur ve diskinize yazılır. Hiçbir parça verisi ağdan geçmez. Bkz. [Örgü çekirdeği](topic:solid-kernels).

Hiç bağlantı olmadan çalışmak için çevrimiçiyken PartCraft'ı çevrimdışı kullanım için kaydedin: uygulama çubuğunda {{ui:Çevrimdışı için kaydet}} seçeneğini seçin ve **Çevrimdışı hazır** diyene kadar sayarken ("212 dosyadan 40 kaydediliyor") bekleyin. Kaydedilen kopya 3B kütüphaneyi ve örgü çekirdeğini içerir; böylece sonrasında modelleme, kaydetme, her dışa aktarma ve çizimler çevrimdışı çalışır. **Kaydedilemedi** diyorsa çevrimiçiyken yeniden denemek için tıklayın; **Çevrimdışı kullanım yok** bu tarayıcı penceresinin kopya tutamadığı anlamına gelir (gizli pencereler ve bazı yönetilen bilgisayarlar). Kopya kaydedilmişken **Çevrimdışı hazır** düğmesine tıklamak {{ui:Yeniden kaydet (en yeni sürümü al)}} ve {{ui:Çevrimdışı kopyayı kaldır}} seçeneklerini sunar. Ayrıntılar: [Çevrimdışı çalışma](common:offline).

:::online
Çevrimiçisiniz. Çevrimdışı kullanım için kaydetmeseniz bile, PartCraft yüklendikten ve durum çubuğundaki çip "Örgü çekirdeği" dedikten sonra bağlantı kopsa da çalışmaya devam edebilirsiniz. Yalnızca yeniden çevrimiçi olana kadar sayfayı yenilemeyin.
:::

:::offline
Çevrimdışısınız. PartCraft zaten açıksa çalışmaya devam edin; kaydetme ve dışa aktarma yine çalışır. Uygulama çubuğu **Çevrimdışı hazır** diyorsa PartCraft sıfırdan da bağlantı olmadan açılır; aksi hâlde bu sekmeyi yenilemeyin.
:::

## Tarayıcılar arasındaki farklar

- **İndirmeler.** Her tarayıcının kendi indirilenler klasörü ve sormanın kendi yolu vardır. Bir tarayıcı bu sitenin dosya indirip indiremeyeceğini sorarsa izin verin, yoksa kaydetme ve dışa aktarma çalışamaz.
- **Sürükleyip bırakma** ile bir dosyayı görünüme bırakma Chrome, Edge, Firefox ve Safari'de çalışır.
- **Telefon veya tabletten dosyalar.** iPhone ve iPad'de Aç, Dosyalar uygulamasını gösterir; kaydedilen dosyalar Dosyalar, İndirilenler içine gider. Android'de İndirilenler klasörüne gider.

Dosyaların içeriğinde tarayıcılar veya işletim sistemleri arasında bir fark yoktur.
