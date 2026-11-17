---
title: Betikleri yazın ve çalıştırın (Betik çalışma alanı)
summary: Betik çalışma alanı adım adım: bir CraftScript ya da Lua betiği yazın, F5 ile çalıştırın, konsolu okuyun, sonraki betik için sonuçları değişkenlerde tutun, örgüleri, alanları ve grafikleri gösterin, bir çalıştırmayı durdurun ve betikleri parçayla birlikte kaydedin.
keywords: betik, betik yazma, modelleme sırasında betik, ayırma, ikinci ekran, ikinci monitör, param, params, betiklerde parametreler, CraftScript, Lua, kod, program, düzenleyici, konsol, REPL, komut satırı, çalıştır, F5, seçimi çalıştır, durdur, değişkenler, çalışma alanı, grafik, alan, örgü, gösterge, alt ekran, analiz, otomasyon, matris, sayısal
from: d0003e89
---

**Önizleme.** Betik yazma PartCraft 0.3 ile yenidir ve bir önizlemedir: dil, kütüphane ve betiklerin kaydedilme biçimi hâlâ değişebilir; şimdi yazılan betiklerin sonradan küçük düzenlemelere ihtiyacı olabilir. Neyin bozulduğunu bize bildirin.

Betik çalışma alanı, parçanın yanında kendi hesaplarınızı çalıştırır: küçük toplamlar, bütün analizler ya da [analiz kütüphanesi](topic:craftscript-library) içindeki betikler. Betikler **CraftScript** (MATLAB'a çok benzeyen bir matris dili, bkz. [CraftScript dili](topic:craftscript-language)) ya da **Lua** (bkz. [Lua ile betikler](topic:craftscript-lua)) ya da **Python** (bkz. [Python ile betikler](topic:craftscript-python)) ile yazılır.

Araç çubuğunun solundaki **Çalışma alanı** kutusundan **Betik**'i seçin. Parça değişmez. Sağ panel betik paneline dönüşür (olağandan geniştir; genişliğini değiştirmek için kenarını sürükleyin ya da {{ui:⋯}} menüsüyle ikinci bir ekrana taşıyın, bkz. [Panelleri düzenleyin](common:arrange-panels)).

## Modelleme yaparken betik yazın

Bir betik yazmak için Tasarım çalışma alanından ayrılmanız gerekmez. Tasarım'da sağ panelin {{ui:Betik}} sekmesi aynı düzenleyiciyi, konsolu, değişkenleri ve kütüphaneyi, aynı betiklerle tutar. Özellik ağacı ve görünüm çalışmaya devam eder: seçmek için bir özelliğe tıklayın, düzenlemek için bir eskize çift tıklayın, görünümü çevirin, sonra {{ui:Betik}} sekmesine dönüp {{key:F5}} tuşuna basın.

Bir betiğin **gösterdikleri** (örgüler, alanlar, grafikler, tablolar) Tasarım'da modelinizin üstüne çizilmez: konsol bunu söyler; Betik çalışma alanına geçtiğinizde hepsi orada olur.

{{ui:Ayır}}, {{ui:Çalıştır}} yanında, tüm paneli kendi penceresine taşır; örneğin ikinci bir ekranda, böylece düzenleyici ve tam görünüm yan yana durur. {{ui:Geri koy}} onu yeniden yerleştirir. Bkz. [Panelleri düzenleyin](common:arrange-panels).

## İlk betiğinizi çalıştırın

1. Düzenleyiciye yazın, örneğin:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'Bir sinüs')
   disp(max(y))
   ```

2. {{key:F5}} tuşuna basın (ya da {{ui:Çalıştır}}). Düzenleyicinin altındaki konsol betiğin yazdırdıklarını ve "… s içinde tamamlandı" satırını gösterir. Grafik 3B görünümün altındaki **alt ekranlarda** görünür.
3. Noktalı virgül içermeyen bir satır, MATLAB'deki gibi değerini yazdırır: `a = 3` `a = 3` yazar; `a = 3;` hiçbir şey yazmaz.
4. Betiğin yalnızca bir kısmını çalıştırmak için satırları seçin ve {{key:Mod+Enter}} tuşuna basın ({{ui:Seçim}}). Hiçbir şey seçili değilse imlecin olduğu satırı çalıştırır.
5. Konsolun altındaki satır (`>>` sonrası), {{key:Enter}} tuşuna her bastığınızda bir deyim çalıştırır. {{key:Up}} ve {{key:Down}} önceki satırları geri getirir.

## Bul, katla ve tamamla

- **Bul ve değiştir.** {{key:Mod+F}} (ya da değiştirmek için {{key:Mod+H}}) tuşuna basın. Kodun üstünde bir çubuk açılır: aranacak şeyi yazın; eşleşmeler vurgulanır ve sayı nerede olduğunuzu söyler. Kutunun yanındaki düğmeler büyük/küçük harfe duyarlı (**Aa**), yalnızca tam sözcükleri bulur (**W**) ve düzenli ifade kullanır (**.\***; değiştirme alanında `$1`, ilk grubun eşleştirdiğini geri koyar). {{ui:Değiştir}} geçerli eşleşmeyi değiştirir, {{ui:Tümü}} her eşleşmeyi tek bir adımda değiştirir ve {{key:Mod+Z}} ile geri alınır.
- **Katlama.** Bir satır numarasının yanındaki ▾ işaretine tıklayın ya da imleç bir `function`, `if`, `for`, `while`, `switch` ya da `try` satırındayken {{key:Mod+Shift+[}} tuşuna basın (Lua: `function`, `do`, `if`, `repeat`); iç satırları gizler, satır kaç satır olduğunu söyler. ▸ ya da {{key:Mod+Shift+]}} onu yeniden açar. Katlama yalnızca satırları gizler: Çalıştır, Kaydet, kopyalama ve satır numaraları hepsi her satırı saymaya devam eder; katlı bir satıra yazmak onu önce açar.
- **Tamamlama.** Bir adın iki harfini yazın ya da {{key:Mod+Space}} tuşuna basın: bir liste sahip olduğunuz değişkenleri, dilin fonksiyonlarını (argümanlarıyla), anahtar sözcükleri ve betikte zaten geçen adları gösterir. Okları kullanarak seçin ve {{key:Enter}} ya da {{key:Tab}} tuşuna basın.

## Bir şey ters giderse

- Bir hata sorunu ve satırını adlandırır: satır düzenleyicide kırmızıyla işaretlenir ve konsoldaki **Satır n** sizi oraya götürür.
- Bitmeyen bir döngü: {{ui:Durdur}} (araç çubuğu ya da panel) tuşuna basın. Betik hemen durur; değişkenler o çalıştırmadan önceki değerlerini korur.
- Her çalıştırmanın bir adım bütçesi de vardır (varsayılan 2 milyar adım; panelde **Çalıştırma seçenekleri** altından değiştirin). Bunu aşan bir çalıştırma bir iletiyle durur.

## Değişkenler betikten betiğe taşınır

Bir betiğin yaptığı her üst düzey değişken **Değişkenler** sekmesine düşer (ad, tür, boyut, en küçük ve en büyük değer) ve dilden bağımsız olarak bir sonraki betik için orada kalır. Bir betik örgüleyip, bir sonrakinin çözmesi ve üçüncüsünün çizmesi bu şekilde olur.

- Göstermek için bir değişkene tıklayın: örgüler, alanlar ve modeller 3B görünümde, diziler ise alt ekranlarda bir tablo olarak gösterilir (bir vektör ya da matris için ayrıca bir çizgi grafiği ya da renk haritası).
- {{ui:JSON olarak kaydet}}, {{ui:CSV olarak kaydet}} (bir sayı tablosu) ve {{ui:HDF5 olarak kaydet}} onu indirir; {{ui:Sil}} kaldırır; {{ui:Tümünü temizle}} çalışma alanını boşaltır.
- Dosyada tutmak için **Değişkenleri parçayla birlikte kaydet** kutusunu işaretleyin (32 MB'a kadar; daha büyükleri yalnızca bu ziyaret için kalır). Böyle bir parçayı açtığınızda panel onları yüklemeyi önerir.

## Örgüler, alanlar ve grafikler

- `show(m)` bir örgü çizer; `show(f)` bir alanı, göstergesiyle birlikte kendi örgüsü üzerinde renklendirir. Görünümün sol üstündeki **Gösterilen** listesi her öğeyi gizler ({{ui:eye}}) ya da kaldırır; parçanın kendisini de gizler ya da gösterir. Göstergenin altına bir aralık yazın (**Başlangıç**, **bitiş**) ya da {{ui:Otomatik}} tuşuna basın; bir vektör ya da gerilme alanı hangi bileşenin gösterileceğini de sunar.
- `show(f, 'deform', u, 'scale', 50)`, bir yer değiştirme alanı `u` ile hareket ettirilmiş örgüyü çizer ve 50 kez büyütür (`scale` olmadan, modelin boyutunun yaklaşık %8'i kadar).
- Gösterilen bir örgüye tıklayın: en yakın düğüm, eleman ve oradaki alan değerleri alt ekranlarda görünür (**Seçilen**).
- `plot`, `imagesc` ve `table`, bir çizgi grafiğini, 2-B bir dizinin renk haritasını ya da bir tabloyu alt ekranlara koyar. Önceki bir grafikle aynı `'id'` (ya da başlık) değerine sahip bir grafik onu değiştirir; böylece bir döngü tek bir yakınsama grafiğini güncelleyebilir. `'append', true` ona bir eğri ekler. {{ui:Temizle}} alt ekranları boşaltır; ok onları katlar.
- İki ya da daha fazla grafik olduğunda {{ui:Yan yana}}, hepsini aynı anda gösterir (en yeni altısı); bir tablonun ya da resmin sekmesine tıklamak yalnızca onu tek başına gösterir.
- Her grafiğin altında {{ui:PNG}}, {{ui:SVG}} ve {{ui:CSV}} vardır. PNG ve SVG, tema ne olursa olsun, grafiği beyaz zemin üzerine kâğıt renkleriyle basar (PNG 1600 × 1000 piksel; SVG bulanıklaşmadan ölçeklenir). CSV sayılarını her basamağıyla tutar: eğriler x'i paylaşıyorsa x için bir sütun ve her eğri için bir sütun; aksi hâlde eğri adıyla her nokta için bir satır.
- {{key:F}} ya da {{ui:Sığdır}} görünümü gösterilenlere sığdırır.

## Dosyalar

- Betik grubundaki {{ui:Aç}} (ya da görünüme ya da panele dosya bırakın): `.craft`, `.lua` ve `.py` dosyaları yeni betik olarak açılır (çalışmazlar); veri dosyaları (STL, OBJ, CSV, JSON, NPY, HDF5) dosya adlarıyla değişkenlere yüklenir.
- Betik grubundaki {{ui:Kaydet}} geçerli betiği dosya olarak indirir.
- Betik grubundaki {{ui:Yeni}} (ya da sekmelerin yanındaki {{ui:+}}) başka bir betik başlatır. Bir sekmeye çift tıklayarak yeniden adlandırın; {{ui:×}} onu kaldırır (bunu geri alabilirsiniz).

## Parçanın parametrelerini okuyun

Bir betik, parçanın parametrelerini (bkz. [Parçayı parametrelerle yönetin](topic:parameters)) ada göre okur:

```
w = param('width');     % bir parametrenin değeri, mm cinsinden (ya da derece, ya da düz bir sayı)
p = params();           % hepsi, bir yapı olarak: p.width, p.height
```

Lua ve Python'da bunlar `cs.param('width')` ve `cs.params()` olur. Betikler parametreleri yalnızca okur: onları {{ui:Parametreler}} sekmesinde değiştirin. Betiğin sekmesinin altındaki bir satır, `param('…')` ile okuduğu parametreleri listeler ve parçada bulunmayanları işaretler; {{ui:Parametreler}} sekmesi betiği her birinin altında listeler. Betik çalışırken oluşturulan bir ad, örneğin `param(name)`, listelenmez.

## Betikler parçanın içinde kaydedilir

Sekmelerdeki her betik parçada tutulur; bu yüzden Dosya grubundaki {{ui:Kaydet}} onları parçayla birlikte kaydeder ve değişiklikleri geri alınabilir. Bir parçayı açmak betiklerini **asla çalıştırmaz**: konsol kaç tane taşıdığını söyler ve yalnızca {{ui:Çalıştır}} tuşuna bastığınızda çalışırlar. Başka birinin parçası herhangi bir betik taşıyabilir: çalıştırmadan önce okuyun. Betikler bu bilgisayarda arka planda, ağ erişimi olmadan çalışır ve sayfaya dokunamaz.

## İlgili konular

- [CraftScript dili](topic:craftscript-language)
- [Lua ile betikler](topic:craftscript-lua)
- [Python ile betikler](topic:craftscript-python)
- [Analiz kütüphanesi](topic:craftscript-library)
- [Kendi analizinizi yazın](topic:craftscript-own-analysis)
