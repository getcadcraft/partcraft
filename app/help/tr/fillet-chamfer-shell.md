---
title: Köşe yuvarlat, Pah kır ve Kabuk ile yuvarlatma, pah kırma ve içini boşaltma
summary: Düz kenarları seçin ve sabit ya da değişken yarıçaplı köşe yuvarlatmalar ile eşit, iki mesafeli ya da mesafe-açılı pahlar ekleyin; Kabuk ile açılacak yüzeyleri seçerek parçayı içi boş yapın; bir özelliğin kullandığı kenarları ya da yüzeyleri değiştirin ve olağan hataları düzeltin.
keywords: köşe yuvarlatma, yuvarlatma, harmanlama, pah, pah kırma, kabuk, içi boş, duvar kalınlığı, kenarlar, yüzeyler, kenar seç, shift tıklama, açık yüzey, kesin çekirdek, örgü çekirdeği, henüz yapılmadı
from: e41c1c12
---

:::note
**Bu sürümde** PartCraft köşe yuvarlatmaları ve pahları örgü çekirdeğiyle, yalnızca **iki düz yüzey arasındaki düz kenarlarda** oluşturur: kutu kenarları ile ekstrüzyon ve kesimlerin düz kenarları, dış ya da iç köşeler (iç köşe malzeme ekler). Delik kenarları gibi yuvarlak kenarlar ve kenar boyunca değişen bir yarıçap henüz yapılmadı. İki yuvarlatılmış kenarın bir köşede buluştuğu yerde yuvarlatmalar gönyeli kesilir (keskin bir kıvrım oluşturur), harmanlanmaz. **Kabuk** de çalışır, örgü çekirdeğiyle oluşturulur: yalnızca düz yüzeyleri açar, farklı duvar kalınlıklı kabuklar henüz yapılmadı ve çok sayıda yuvarlak yüzeyi olan parçalarda yavaştır. Bkz. [Henüz yapılmayanlar](topic:not-built-yet).
:::

{{ui:Köşe yuvarlat}} kenarları yuvarlar, {{ui:Pah kır}} onları pahlar ve {{ui:Kabuk}} parçayı içi boş yapar. Üçü de katının kenarları ve yüzeyleri üzerinde çalışır ve örgü çekirdeğiyle oluşturulur. Yuvarlatmaları, her yuvarlak yüzey gibi facet'lidir (**Eğriler** ne kadar ince olacağını belirler); yuvarlak yüzeyler, seçip ölçebileceğiniz silindirlerdir (bkz. [Örgü çekirdeği](topic:solid-kernels)).

## Kenarları yuvarlatma veya pahlama

### Önce kenarları seçin

1. Parçanın bir kenarına tıklayın. Tüm kenar vurgulanır ve sağ panel **Kenar**'ı gösterir: türü (Düz, Daire ya da yay, Eğri), uzunluğu ve arasında bulunduğu yüzeyler.
2. Daha fazla kenar eklemek için {{key:Shift}}+tıklayın. Her biri işaretlenir; işaretli bir kenarı bırakmak için {{key:Shift}}+tıklayın. Panel başlığı sayar ("4 kenar") ve durum çubuğu şunu yazar: "4 kenar seçildi. Köşe yuvarlat ya da Pah kır onları yuvarlar; Shift+tıklama daha fazla seçer, Esc temizler."
3. Araç çubuğundaki {{ui:Köşe yuvarlat}} ya da {{ui:Pah kır}} seçeneğini ya da sağ paneldeki aynı düğmeleri seçin.

Özellik, seçilen tüm kenarlarla eklenir: 2 mm'lik bir yuvarlatma ya da 1 mm'lik bir pah. Durum çubuğu, örneğin şunu yazar: "Fillet1 eklendi (4 kenar). Boyutunu sağdan değiştirin; Kenarları seç, hangilerinin değişeceğini belirler."

### Ya da önce özelliği ekleyin

1. Hiçbir şey seçmeden {{ui:Köşe yuvarlat}} ya da {{ui:Pah kır}} seçeneğini seçin.
2. PartCraft seçim moduna girer: sağ panel başlığı "Fillet1: seçim yapılıyor" der, parça köşe yuvarlatmadan önceki haliyle görünür (panel bunu söyler) ve araç çubuğu {{ui:Bitti}} gösterir.
3. Eklemek için her kenara tıklayın; çıkarmak için yeniden tıklayın. Durum çubuğu bunları sayar.
4. {{ui:Bitti}} seçeneğini (ya da paneldeki {{ui:Seçim bitti}}) seçin ya da {{key:Esc}} ya da {{key:Enter}} tuşuna basın.

### Ayarlar

| Ayar | Köşe yuvarlat | Pah kır |
|---|---|---|
| Boyut | **Yarıçap (mm)**, varsayılan 2 | Her iki yüzeyde de kenardan geriye **Mesafe (mm)**, varsayılan 1 |
| **Kenarlar** | Kaç tane | Kaç tane |

Aşağıdaki liste her kenarı birleştirdiği iki yüzeyle adlandırır, örneğin "Kenar 1: Extrude1 uç yüzeyi × Extrude1 yan". **Kaldır** birini çıkarır. {{ui:Kenarları seç}} yeniden seçime döner. Geçmişte özelliğe çift tıklamak da aynısını yapar.

Kenarlar birleştirdikleri iki yüzeyle hatırlanır; bu yüzden geçmişte daha önce bir boyutu değiştirdiğinizde de doğru kenarda kalırlar.

### Değişken yuvarlatmalar ve pah türleri

- **Değişken yarıçap** (köşe yuvarlatma): bu sürümde henüz yapılmadı ("Yarıçapı kenar boyunca değişen bir köşe yuvarlatma: henüz yapılmadı (kesin bir çekirdek gerektirir). Ona tek bir yarıçap verin."). Kesin bir çekirdekle çalışırken işaretleyin ve **Bitiş yarıçapı (mm)** ayarlayın. Yarıçap, her kenarın bir ucundaki **Yarıçap**'tan diğer ucundaki **Bitiş yarıçapı**na doğrusal olarak değişir; **Uçları değiştir** bunu tersine çevirir.
- **Tür** (pah kırma): **Eşit mesafe**, **İki mesafe** (diğer yüzeyde bir **İkinci mesafe**) ya da **Mesafe ve açı** (bir yüzeyde mesafe, bu yüzeye **Açı (°)** ile pah). **Tarafları çevir**, ilk mesafeyi diğer yüzeye koyar.

## Bir parçayı içi boşaltma (Kabuk)

1. Açık bırakılacak düz yüzeye tıklayın, örneğin bir kutunun üstü. Ya da birden çok yüzey için {{key:Shift}}+tıklayın.
2. Araç çubuğundaki {{ui:Kabuk}} seçeneğini ya da yüzeyin panelindeki {{ui:Kabuk, bu yüzeyi açıyor}} seçeneğini seçin.

Parça, seçilen yüzeyler açık olacak şekilde 2 mm'lik bir duvar olur. Ayarlar:

| Ayar | Ne yapar | Varsayılan |
|---|---|---|
| **Duvar (mm)** | Duvar kalınlığı | 2 |
| **Duvarlar dışa doğru büyür (yüzeyler içeride kalır)** | İşaretliyse: duvarlar dışarıya eklenir, böylece içerisi parçanın boyutunu korur | Kapalı: duvarlar içeri gider ve dış kısım boyutunu korur |
| **Açık yüzeyler** | Kaç yüzeyin kaldırıldığı | (boş) |

İçeri doğru olduğunda duvarlar tam olarak duvar kalınlığındadır: dış köşeler keskin kalır, iç köşeler yuvarlanır (yarıçap = duvar) ve parçadan geçen bir delik çevresinde bir duvar tüpü alır. Dışa doğru olduğunda duvarlar orijinal yüzeyin dışına eklenir; orijinal yüzey, ki bu içi boşluk olur, ve dış kenarlar yuvarlanmış çıkar. İç yüzeyler, ofset ettikleri yüzeylerin adıyla adlandırılır; böylece onları seçebilirsiniz.

Yalnızca düz yüzeyler açılabilir: eğri bir yüzey seçerseniz "Kabuk: bu sürümde yalnızca düz yüzeyleri açar (örgü çekirdeği oluşturur)." der. Çok sayıda yuvarlak yüzeyi olan parçalarda kabuk yavaştır (bin üçgen başına birkaç saniye): tasarım yaparken daha kaba bir **Eğriler** ayarı kullanın.

{{ui:Yüzeyleri seç}}, hangi yüzeylerin açık olduğunu değiştirir; kenar seçmekle aynı şekilde. Liste her birini adlandırır, örneğin "Yüzey 1: Extrude1 uç yüzeyi". Açık yüzeyi olmayan bir kabuğa izin verilmez: "Kaldırılacak (açık bırakılacak) yüzeyleri seçin, sonra kabuk oluşturun."

## Sıra önemlidir

Özellikler yukarıdan aşağıya oluşturulur. Kabuktan önce gelen bir köşe yuvarlatma, parçayla birlikte kabuklanır; bu yüzden iç kısım da yuvarlatılmış köşelere sahip olur. Kabuktan sonra gelen bir köşe yuvarlatma ise yalnızca seçtiğiniz kenarları yuvarlar. Özellikleri {{ui:Yukarı taşı}} ve {{ui:Aşağı taşı}} ile taşıyın (bkz. [Parçayı geçmişi üzerinden değiştirme](topic:edit-history)).

Örüntüler ve aynalar bir köşe yuvarlatmayı, pah kırmayı ya da kabuğu kopyalayamaz: "Fillet1, gövdenin kenarlarını ya da duvarlarını değiştirir; kopyalanamaz. Katı oluşturan özellikleri kopyalayın (ekstrüzyonlar, döndürmeler, delikler, içe aktarmalar)." Önce delikleri ya da kesimleri örüntüleyin, sonra tüm kopyaların kenarlarını tek bir köşe yuvarlatmayla yuvarlatın.

## Hata olduğunda

| İleti | Ne yapmalı |
|---|---|
| "5 mm'lik bir yuvarlatma buraya sığmıyor (kenarlardan birinin yanındaki bir yüzey için çok büyük ya da kenarlar, çekirdeğin harmanlayamayacağı bir köşede buluşuyor)." | Daha küçük bir yarıçap kullanın ya da seferde daha az kenar yuvarlatın (birkaç köşe yuvarlatma özelliği, en küçüğü en son) |
| "Yuvarlattığı kenar yok: Extrude1 ile Cut2 arasındaki kenar." | Daha önceki bir değişiklik o kenarı kaldırdı. {{ui:Kenarları seç}} seçeneğini seçin, kırmızı kenarı kaldırın ve yenisini seçin |
| "Kabuk bu kalınlıkta yapılamadı (…)." | Duvar, modelin dar bir kısmından ya da bir köşe yuvarlatmanın yarıçapından kalın. Duvarı inceltin ya da köşe yuvarlatmaları duvardan büyük yapın |
| "Bu yüzeyin geçmişin izleyebileceği bir adı yok; başka birini seçin." | Bir özellik tarafından oluşturulmuş bir yüzey seçin (çoğu yüzey böyledir) |
| "Köşe yuvarlatma: bu sürümde yalnızca iki düz yüzey arasındaki düz kenarlar (örgü çekirdeği bunları oluşturur). Eskizde eğri kenarları yuvarlatın ya da pahlayın." (Pah kırma için de geçerli) | Seçilen bir kenar yuvarlak (örneğin bir delik kenarı) ya da eğri bir yüzeyde. {{ui:Kenarları seç}} ile onu kaldırın ve bunun yerine eskizde o köşeyi yuvarlatın ya da pahlayın |
| "Kenar boyunca yarıçapı değişen bir köşe yuvarlatma: henüz yapılmadı (kesin bir çekirdek gerektirir). Ona tek bir yarıçap verin." | **Değişken yarıçap** işaretini kaldırın |
| "Örgü çekirdeğiyle köşe yuvarlatma: yuvarlatılmış kenarların buluştuğu yerlerde gönyeli kesilirler, harmanlanmazlar." (geçmişte ⚠) | Bir uyarı, hata değil: parça oluşturulmuştur. Seçilen kenarlar bir köşede buluşur ve yuvarlatmalar orada keskin bir kıvrımda birleşir. Daha az kenar yuvarlatın ya da kıvrımı kabul edin |
| "Kabuk: bu sürümde yalnızca düz yüzeyleri açar (örgü çekirdeği oluşturur)." | Açık bir yüzey eğridir. {{ui:Yüzeyleri seç}} ile onu kaldırın; yalnızca düz yüzeyleri açın |

## Sınırlar

Bu sürümde köşe yuvarlatmalar ve pahlar yalnızca iki düz yüzey arasındaki düz kenarlarda, tek yarıçapla çalışır; bir köşede buluşan yuvarlatmalar gönyeli kesilir. Kabuklar yalnızca düz yüzeyleri açar. Kesin bir çekirdekle, değişken bir köşe yuvarlatma her kenar boyunca doğrusal olarak değişir (özellik başına bir kural; kenar üzerindeki noktalara ayarlanmış yarıçap yok). Yüzey köşe yuvarlatmaları, tam yuvarlak köşe yuvarlatmalar ve farklı duvar kalınlıklı kabuklar henüz yapılmadı.
