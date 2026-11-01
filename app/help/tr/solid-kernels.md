---
title: Örgü çekirdeği
summary: PartCraft'ın bu sürümü her parçayı tarayıcınızda çalışan bir örgü çekirdeğiyle kurar. Bunun yuvarlak yüzeyler, hacimler ve dosyalar için ne anlama geldiği, çalıştığının nasıl anlaşılacağı ve hangi özelliklerin kesin bir çekirdeği beklediği.
keywords: çekirdek, örgü, manifold, kesin, b-rep, yüzeyli, eğriler, opencascade, occt, yuvarlatma kesin çekirdek ister, henüz yapılmadı, çevrimdışı, webassembly
from: 68d32d16
---

Geometri çekirdeği, geçmişinizi bir katıya çeviren motordur. PartCraft'ın bu sürümünün bir tanesi var: **örgü çekirdeği** (manifold-3d). Bilgisayarınızda küçük bir WebAssembly programı olarak çalışır ve uygulama açıldıktan kısa süre sonra hazırdır. Parçanızla ilgili hiçbir şey hiçbir yere gönderilmez.

| | Örgü çekirdeği |
|---|---|
| Yuvarlak şekiller | Düz yüzeycikler. Parça panelindeki **Eğriler** ne kadar ince olacağını belirler |
| Hacimler ve alanlar | Yüzeycikli katınki; yuvarlak parçalarda biraz düşük |
| Eskizler, ekstrüzyon, kesme, döndürme, delikler, örüntüler, ayna, referans düzlemleri | Evet |
| Köşe yuvarlatma ve pah kırma | Düz yüzeyler arasındaki düz kenarlarda; birleşen yuvarlatmalar gönyelenir |
| Kabuk ve eğim | Kabuk düz yüzeyleri açar (tam duvar kalınlığı); eğim düz yüzeyleri yatırır |
| Dışa aktarmalar | STL, 3MF, STEP (yüzeyli), çizim PDF'i ve DXF |
| Çizim görünümleri | Yüzeycikler üzerinden çizilir, kesit görünümleri dahil |
| Yüzeyler ve kenarlar | Türüne göre adlandırılmış ve bilinir (düz, silindir, koni, küre, simit; doğru, daire); eskizlerden alınır: Simülasyon, Üretken ve İmalat çalışma alanları, Ölç, seçme ve delik tablosu bunları kullanır |

Durum çubuğunun sağ ucuna yakın çip, parçanızı kurarken **Örgü çekirdeği** der.

## Kesin bir çekirdeği bekleyenler

Kesin (B-rep) bir çekirdek gerçek daireleri, silindirleri ve koniyi ve herhangi bir kenarda düzgün köşe yuvarlatmalarını korur; süpürmeler, loftlar, yüzeyler, sac metal, kaburgalar, birkaç gövde, STEP içe aktarma ve kesin STEP dışa aktarma bunun üzerine kurulur. PartCraft'ın önceki laboratuvar sürümleri bunun için OpenCascade kullanıyordu. Lisansı (LGPL), her uygulamanın Apache-2.0 olduğu ve yalnızca izin verici lisanslı kütüphaneler kullandığı bu yayına uymaz; bu yüzden dahil değildir. Bunların hiçbirinin tarihi yoktur.

O zamana kadar bu özellikler, seçtiğinizde **Henüz yapılmadı** der: durum çubuğu nedenini verir ve düğmelerinin ipuçları "henüz yapılmadı (kesin çekirdek gerektirir)" ile biter. [Henüz yapılmadı](topic:not-built-yet) her birini, onun yerine ne yapılacağıyla listeler.

Önceki bir sürümde bunlarla yapılmış bir parça yine de açılır. Bu özellikler geçmişte yapılmadı diye işaretli kalır (nedeni için birinin üzerinde bekleyin), parçanın geri kalanı kurulur ve kaydetme onları değiştirmeden korur.

## Yuvarlak yüzeyler ve Eğriler

Örgü çekirdeği bir daireyi çokgen olarak çizer. Parça panelindeki **Eğriler**, tam bir daireye kaç kenar verileceğini belirler; daha çok kenar daha düzgün görünür ve gerçek değere daha yakın ölçülür, ama kurması daha uzun sürer. {{ui:Ölç}} ile elde edilen hacimler, alanlar ve mesafeler bu yüzeycikli katınkilerdir: bir delik veya çıkıntı için yuvarlak şeklinkinden biraz daha küçüktürler.

## Çevrimiçi ve çevrimdışı

Örgü çekirdeği uygulamanın kendi indirmesinin parçasıdır. Bağlantı olmadan çalışmak için çevrimiçiyken PartCraft'ı çevrimdışı kullanım için kaydedin: uygulama çubuğunda {{ui:Çevrimdışı için kaydet}} seçeneğini seçin ve **Çevrimdışı hazır** diyene kadar bekleyin. Ayrıntılar: [Çevrimdışı çalışma](common:offline).
