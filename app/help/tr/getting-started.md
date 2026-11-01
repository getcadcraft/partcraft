---
title: PartCraft'a başlangıç
summary: PartCraft'ın bugün ne yaptığı, tarayıcınızın neye ihtiyaç duyduğu ve eskizden kaydedilmiş dosyaya on dakikada ilk parçanız.
keywords: başlangıç, ilk çalıştırma, hızlı başlangıç, giriş, öğretici, ilk parça, plaka, parametrik, parça modelleyici
from: 5f0a668d
---

PartCraft, CadCraft ailesinin parametrik parça ve montaj uygulamasıdır. 2B bir eskiz çizer, onu ilişkiler ve ölçülerle sabitler, ekstrüzyon, döndürme ve delik gibi özelliklerle katıya çevirir ve sonradan herhangi bir sayıyı değiştirirsiniz: parça geçmişinden yeniden kurulur. Parçalar sonra montajlara girer; orada birleşimler onları yerleştirir ve hareketi denetlemenizi sağlar.

Bu sürümün yaptıkları:

| İş | Elde ettiğiniz |
|---|---|
| Eskizler | Çizgiler, dikdörtgenler, daireler, yaylar, noktalar ve eksen çizgileri; ilişkiler ve ölçülerle ve canlı bir durumla: eksik, tam veya fazla tanımlı |
| Katı özellikler | Ekstrüzyon, kesme, döndürme, döndürerek kesme, basit ve havşalı delikler, doğrusal ve dairesel örüntüler, ayna, düz yüzeyler arasındaki düz kenarlarda köşe yuvarlatma ve pah kırma, düz yüzeylerde kabuk ve eğim. Süpürmeler, loftlar ve kesin bir çekirdek gerektiren diğer özellikler bu sürümde henüz yapılmadı: bkz. [Henüz yapılmadı](topic:not-built-yet) |
| Geçmiş | Herhangi bir özelliğin sayılarını düzenleme, bastırma, geri sarma, yeniden sıralama ve silme; geri alma ile |
| Montajlar | Rijit, döner ve kayar birleşimlerle bağlanan parçalar, bir çakışma denetimi ve bir hareket denetimi |
| Çizimler | Üç görünümlü, bir izometrikli, bir kesitli, bir detay görünümlü, toplam ölçülü, datumlu, özellik denetim çerçeveli ve yüzey pürüzlülüğü simgeli A3 sayfa; PDF olarak dışa aktarılır |
| Dosyalar | Kendi parça ve montaj dosyaları; STL, 3MF, yüzeyli STEP, DXF ve PDF çıkışı |

Her şey tarayıcınızda, bilgisayarınızda çalışır. **Hiçbir şey yüklenmez.** Dosyaların gittiği yer için bkz. [Dosyalar: açma, kaydetme ve dışa aktarma](topic:files).

## Neye ihtiyacınız var

- **WebGL** (3B grafik) ve **WebAssembly** açık, güncel bir Chrome, Edge, Firefox veya Safari. İkisi de varsayılan olarak açıktır. Katı geometri, uygulamayla birlikte yüklenen bir WebAssembly örgü çekirdeği tarafından kurulur: bkz. [Örgü çekirdeği](topic:solid-kernels).
- En kolayı fare. Dokunmatik yüzey çalışır, dokunmatik ekranlar da görüntüleme ve basit eskiz için çalışır: bkz. [Dokunmatik yüzey, dokunma ve küçük ekranlar](topic:trackpad-and-touch).
- En az 1280 piksel genişliğinde bir ekran araç çubuğunun tamamını tek satırda gösterir. Daha dar pencereler araç çubuğunu yana kaydırır; telefonda paneller alttaki bir çubuktan sayfa olarak açılır.

Tarayıcılar hakkında daha fazlası: [Tarayıcılar ve bilgisayarlar](common:browsers).

:::note
PartCraft tarayıcıda ve masaüstünde CadCraft Studio içinde çalışır. Bulutta kaydetme henüz yok: parçaları bilgisayarınızdan açar ve dosya olarak ona geri kaydedersiniz.
:::

## PartCraft'ı açın

1. PartCraft'ı açın.
2. Ekran "Katı çekirdeği yükleniyor…" derken bekleyin. İlk seferde bu biraz sürer.
3. Üç temel düzlemli boş bir 3B görünüm, solda geçmiş ("Part1", sonra Ön düzlem, Üst düzlem, Sağ düzlem) ve görünümde "Bir parça başlatın" başlıklı bir kutu görürsünüz.
4. Durum çubuğunun sağ ucuna yakın çip "Örgü çekirdeği" der: PartCraft bu sürümde her parçayı örgü çekirdeğiyle kurar, bu yüzden yuvarlak yüzeyler düz yüzeycikler olur. Hemen modellemeye başlayabilirsiniz.

Görünüm tarayıcının 3B gösteremediğini ya da çekirdeğin yüklenmediğini söylüyorsa bkz. [Sorun giderme](topic:troubleshooting#the-app-does-not-start).

## İlk parçanız: delikli bir plaka

10 mm kalınlığında, içinden 6 mm'lik bir delik geçen 60 × 40 mm bir plaka yapacaksınız. Birimler milimetredir.

### Dış çizgiyi eskizleyin

1. Soldaki geçmişte **Ön düzlem** üzerine tıklayın. Düzlem görünümde vurgulanır.
2. Araç çubuğunda {{ui:Eskiz}} seçeneğini seçin ya da {{key:S}} tuşuna basın. Görünüm düzleme dik bakacak şekilde döner ve Çizgi aracı etkindir.
3. Dikdörtgen aracı için {{key:R}} tuşuna basın.
4. İşaretçiyi başlangıç noktasına (artı işaretli küçük kırmızı daire) götürün. Küçük bir kare onun yakalandığını gösterir. Tıklayın.
5. Yukarı ve sağa gidin ve yeniden tıklayın. Bir dikdörtgeniniz var. Çizgileri mavidir: mavi, hâlâ hareket edebilecekleri anlamına gelir.

### Ölçülerini verin

1. Ölçülendirme aracı için {{key:D}} tuşuna basın.
2. Üst çizgiye tıklayın, sonra biraz üstüne tıklayın. Geçerli uzunlukla bir sayı kutusu açılır.
3. `60` yazın ve {{key:Enter}} tuşuna basın. Dikdörtgen 60 mm genişliğe gelir.
4. Sol çizgiye tıklayın, sonra biraz soluna tıklayın. `40` yazın ve {{key:Enter}} tuşuna basın.

Görünümün sol üstündeki çip artık **Tam tanımlı** der ve çizgiler mürekkep rengine döner (Kâğıt temasında siyah, Model temasında açık). Her nokta ve ölçü sabittir.

:::tip
Dikdörtgene başlangıç noktasından uzakta başladıysanız çip hâlâ "Eksik tanımlı · 2 serbestlik derecesi" der. Seç için {{key:S}} tuşuna basın, bir köşeye tıklayın, başlangıç noktasına {{key:Shift}}+tıklayın, sonra sağ panelde {{ui:• Çakışık}} seçeneğini seçin.
:::

### Ekstrüde edin

1. Araç çubuğunda {{ui:Çık}} seçeneğini seçin ya da eskiz kapanana kadar {{key:Esc}} tuşuna basın (genellikle iki kez).
2. {{ui:Ekstrüzyon}} seçeneğini seçin. 10 mm'lik bir katı görünür. Geçmişe "Extrude1" eklenir ve altında girintili "Sketch1" durur.
3. Sağ panel ekstrüzyonun ayarlarını gösterir. Kalınlığı değiştirmek için **Derinlik (mm)** alanına yeni bir sayı yazıp {{key:Enter}} veya {{key:Tab}} tuşuna basın. Parça hemen yeniden kurulur.

### Deliği ekleyin

1. Plakanın önündeki büyük düz yüzeye (ekstrüzyonun ucu) tıklayın. Yüzeyin tamamı vurgulanır ve sağ panel **Yüzey** der.
2. Sağ panelde {{ui:Bu yüzeyde eskiz}} seçeneğini seçin.
3. Nokta aracı için {{key:P}} tuşuna basın ve yüzeyin ortasına yakın bir yere tıklayın.
4. {{ui:Çık}} seçeneğini seçin.
5. {{ui:Delik}} seçeneğini seçin. Plakadan 6 mm'lik bir delik geçer. İsterseniz sağ panelde **Çap (mm)** değerini değiştirin.

Sol alttaki **Parça** kutusu artık bir hacim, bir yüzey alanı, boyutu (60 × 40 × 10 mm) ve "Baştan sona delikler: 1" gösterir.

### Kaydedin

1. {{key:Mod+S}} tuşlarına basın ya da {{ui:Kaydet}} seçeneğini seçin.
2. Tarayıcınız `Part1.partcraft.json` dosyasını indirilenler klasörüne indirir. Dosya tüm geçmişi tutar: düzenlemeye devam etmek için {{ui:Aç}} ile yeniden açın.

Önce parçayı yeniden adlandırmak için görünümde boş bir yere tıklayın ki hiçbir şey seçili olmasın ve sağ panelde yeni bir **Ad** yazın.

## Sonra nereye

- [İlk eskizinizi çizin](topic:sketch-basics) ve [Bir eskizi tam tanımlayın](topic:relations-dimensions) eskiz aracını düzgünce açıklar.
- [Bir parçayı geçmişi üzerinden değiştirme](topic:edit-history) yaptığınızı nasıl düzenleyeceğinizi gösterir.
- [Yuvarlatma, pah kırma ve içini boşaltma](topic:fillet-chamfer-shell) ve [Bir çizim yapın](topic:drawing-pdf) parçayı tamamlar. [Henüz yapılmadı](topic:not-built-yet) bu sürümün süpürme ve loft gibi yapmadıklarını listeler.
- [Başka bir parametrik modelleyiciden geliyorsanız](topic:coming-from) burada farklı çalışan alışkanlıkları listeler.
- [Tuşlar ve fare](topic:keyboard) kısayolların tam listesidir.
- [Bu yardımı kullanma](common:help).
