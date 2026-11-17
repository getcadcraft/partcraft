---
title: STEP dosyası açın ve üzerinde çalışın
summary: Bir tedarikçinin ya da başka bir CAD programının STEP modelini katı gövde olarak PartCraft'a getirin; yeni bir parça olarak ya da geçerli parçaya ekleyerek. Hangi yönün yukarı olduğunu ayarlayın ve üzerine eskizler ile özellikler ekleyin.
keywords: step, stp, içe aktarma, step aç, ap203, ap214, ap242, tedarikçi modeli, basit katı, içe aktarılmış katı, yukarı eksen, z yukarı, y yukarı, üçgenler, fasetli, montaj step
from: ca0eca5f
---

PartCraft STEP dosyalarını (`.step` ya da `.stp`, AP203, AP214 ve AP242) üzerine eskiz çizebileceğiniz, kesebileceğiniz, delebileceğiniz ve kendi özelliklerinizle birleştirebileceğiniz **katı gövdeler** olarak açar. Gövdenin kendi geçmişi yoktur: oluşturulduğu ölçüleri değiştiremezsiniz; yalnızca ona ekleyebilir ya da ondan kesebilirsiniz.

Bu sürüm her parçayı ağ çekirdeğiyle oluşturur; bu nedenle bir STEP dosyası **üçgenler olarak okunur**: düz yüzeyler düz kalır, eğri yüzeyler (silindirler, koniler, küreler, toruslar, B-spline yüzeyler) birçok küçük düz yüzeye dönüşür. Hacmi, kesin hacme yüzde birden daha az bir farkla gelir. Eğri yüzeyleri kesin tutmak için kesin bir çekirdek gerekir; bu sürümde yoktur.

## STEP dosyası açın

1. {{ui:Aç}} seçin ya da {{key:Mod+O}} tuşlarına basın ve `.step` ya da `.stp` dosyasını seçin. Ya da dosyayı 3B görünüme bırakın.
2. PartCraft dosyayı okur ve ne bulduğunu gösterir, örneğin: "AP214 dosyası: 1 katı, 10 yüzey, üçgenler olarak okundu." Altında üçgen sayısı, bıraktığı ya da birleştirdiği şeyler ve sonucun kapanıp kapanmadığı yer alır.
3. **Dosyadaki yukarı** alanını kontrol edin. Bir STEP dosyası kendi birimini belirtir (milimetre, inç, metre…); PartCraft bunu milimetreye çevirir, bu yüzden **Dosyadaki birimler** alanında Milimetre görünür ve yanında "dosya bunu söylüyor" yazar. **Buradaki boyut** ne kadar büyük olacağını gösterir.
4. Boş bir parça için {{ui:Gövde olarak aç}}, parçanın zaten özellikleri varsa {{ui:Bu parçaya ekle}} ya da {{ui:Yeni parça}} seçeneğini seçin. Ekleme, **Bunu şunun için kullan** alanında ne yapılacağını sorar: ekle, kes ya da yalnızca örtüşmeyi tut.

Geçmişe bir **Imported1** özelliği eklenir ve durum çubuğu örneğin şunu yazar: "plate.step bir katı gövde: 57995.937 mm³, eskiz çizilecek 6 düz yüzey."

## Montaj STEP dosyası

Bir montaj, dosyanın parçaları yerleştirdiği her parçayla **tek bir gövde** olarak gelir ("dosyada yerleştirilmiş 3 parça bulundukları yerde gelir"). İki kez kullanılan bir parça iki kez gelir. Parçaların adları ve montaj ağacı korunmaz.

## Hangi yönün yukarı olduğunu ayarlayın

Çoğu CAD programı Z yukarı kullanır; PartCraft Y yukarı kullanır. Varsayılan olarak PartCraft dosyayı, Z'si burada yukarı gösterecek şekilde çevirir. Parça yan yatmış gelirse **Imported1**'i seçin ve **Dosyadaki yukarı** alanını **Y yukarı** olarak ayarlayın. **Dosyadaki birimler** ve **Bunu şunun için kullan** da orada değiştirilebilir; her değişiklik tek bir geri alma adımıdır.

## Üzerine ekleme yapın

- Gövdenin düz bir yüzeyine tıklayın ve {{ui:Bu yüzeyde eskiz}} seçin. STEP modelinin düz yüzeyleri, gövde yeniden oluşturulduğunda yerlerini korur.
- Kesimleri, delikleri, çıkıntıları, dizileri ve aynaları herhangi bir parçadaki gibi ekleyin.
- **Parça** kutusunda boyutunu kontrol edin: hacim, yüzey alanı, boyut.

Bu sürümde, herhangi bir parçada olduğu gibi, köşe yuvarlatma, pah kırma ve kabuk için kesin çekirdek gerekir ([Ağ çekirdeği](topic:solid-kernels)).

## Nerede saklanır

Üçgenler `.partcraft.json` dosyasının **içinde** saklanır; böylece parça dosyası kendi kendine yeterlidir: STEP dosyasına tekrar ihtiyacınız yoktur.

## İletiler

| İleti | Ne anlama gelir |
|---|---|
| '"part.stp" bir STEP dosyası değil (ISO-10303-21 ile başlamıyor).' | Dosya düz STEP metni değil. Gönderenden bir AP203, AP214 ya da AP242 STEP dosyası isteyin |
| "STEP dosyası okunamadı: veri bölümü eksik ya da bozuk." | Dosya kesik ya da bozuk. Yeniden kopyalayın |
| "STEP dosyasında içe aktarılacak katı ya da yüzey gövdesi yok." | Dosyada yalnızca çizimler, noktalar ya da veriler var. Bir katı isteyin |
| "Bu STEP dosyası burada içe aktarılamayacak kadar büyük (60 MB'dan fazla)." ve okuyucunun diğer sınırları (girdiler, yüzeyler, üçgenler) | Modeli kaynağında sadeleştirin ya da parçaları tek tek gönderin |
| "… dosyadaki bozuk satırlar atlandı." | Bazı satırlar okunamadı; geri kalanı içe aktarıldı. Gövdeyi kontrol edin |
| "… yüzey üçgenlere dönüştürülemedi ve dışarıda bırakıldı." | Bu yüzeyler boşluk bırakır; PartCraft bunları doldurmayı dener. Gövde kapanmazsa eklenmez |
| "… okunmayan türde yüzeyler (…) atlandı." | Nadir bir yüzey türü. Düz ya da B-spline yüzeylerli modeli isteyin |
| "Kapanmıyor …" | Yüzeyler kapalı bir katı oluşturmuyor (bir yüzey modeli ya da eksik yüzeyler). PartCraft açıklıkları gösterir ve hiçbir şey eklemez |

## Sınırlar

- Eğri yüzeyler, bu sürümün oluşturduğu her parçada olduğu gibi küçük düz yüzeyler olarak çizilir ve ölçülür. PartCraft dosyanın kendi düz yüzeylerini, silindirlerini, koniklerini, küreleri ve torusları gövdeyle birlikte tutar; bu yüzden {{ui:Dışa aktar}} › {{ui:STEP AP242 (kesin katı)}} bunları, delikleri delik olarak ve eklediğiniz özelliklerle birlikte gerçek yüzeyler olarak yazar. Dosyada spline, süpürme ya da devrim yüzeyi olarak verilen yüzeyler dışa aktarımda küçük yüzey olarak kalır. 0.9.1 öncesinde kaydedilmiş bir parçanın tutulan yüzeyleri yoktur: bunları almak için STEP dosyasını yeniden açın.
- {{ui:Dışa aktar}} › {{ui:Eskizin ya da düz yüzeyin DXF'i}} seçildiğinde ve bir düz yüzey seçiliyken, dosyadaki yuvarlak bir delik gerçek bir daire olarak yazılır.
- Renkler, gövde adları, montaj yapısı ve PMI (dosyadaki toleranslar) okunmaz.
- STEP'in yanında PartCraft STL, OBJ ve 3MF ağlarını ([STL, OBJ ya da 3MF açın](topic:open-meshes)) ve `.3dm` dosyalarını ([.3dm modeli açın](topic:open-3dm-files)) katı gövdeler olarak açar. IGES ve diğer programların kendi dosyaları desteklenmez.
- Kesin çekirdekle derlenmiş bir yapıdan gelen bir STEP katısı içeren bir parça STEP metnini saklar; bu sürüm bu özelliği atlar ("henüz yapılmadı"). Üçgenler olarak içe aktarmak için STEP dosyasını yeniden açın.
