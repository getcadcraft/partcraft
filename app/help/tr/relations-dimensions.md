---
title: Eskizi ilişkiler ve ölçülendirmelerle tam tanımlama
summary: Sağ paneldeki ilişkileri ve Ölçülendirme aracıyla ölçülendirmeleri ekleyin, eksik tanımlı, tam tanımlı ve fazla tanımlı renklerini okuyun ve fazla tanımlı bir eskizi düzeltin.
keywords: ilişkiler, kısıtlamalar, ölçülendirmeler, akıllı ölçülendirme, tam tanımlı, eksik tanımlı, fazla tanımlı, serbestlik dereceleri, çakışık, yatay, dikey, paralel, dik, teğet, eşit, eşmerkezli, orta nokta, sabitle, çakışma, fazlalık
from: e76d047a
---

Bir eskiz, her nokta ve her ölçü ilişkilerle ve ölçülendirmelerle sabitlendiğinde **tam tanımlı** olur. Tam tanımlı bir eskiz yalnızca bir sayıyı değiştirdiğinizde değişir; böylece parça, sonradan düzenlediğinizde öngörülebilir davranır. PartCraft sizi bir eskizi tam tanımlamaya zorlamaz, ama ne kadar yakın olduğunuzu her zaman gösterir.

## Eskiz durumunu okuma

Durum üç yerde gösterilir: görünümün sol üstündeki çip, sağ panelin üstündeki ileti ve geçmişteki bayrak.

| Durum | Çip | Geometri rengi | Anlamı |
|---|---|---|---|
| Eksik tanımlı | "Eksik tanımlı · 3 serbestlik derecesi" | Mavi | Bazı geometri hâlâ hareket edebilir. Yönünü görmek için mavi geometriyi sürükleyin |
| Tam tanımlı | "Tam tanımlı" | Mürekkep (Kâğıt'ta siyah, Model'de açık) | Her nokta ve ölçü sabittir |
| Fazla tanımlı | "Fazla tanımlı" | İlgili ilişkilerde kırmızı | Bazı ilişkiler birbiriyle çelişir ya da biri diğerlerinden zaten dolaylı olarak sağlanıyor |

Yapı geometrisi durumu ne olursa olsun gri ve kesikli çizilir. Seçili öğeler turuncudur. "Serbestlik derecesi", bir şeyin hâlâ hareket edebileceği bir yoldur: serbest bir nokta ikiye sahiptir (sola-sağa ve yukarı-aşağı), serbest bir daire üçe sahiptir (merkezi ve yarıçapı).

Sağ paneldeki iletinin altındaki açıklama renkleri yineler.

## Ölçülendirme ekleme

1. {{key:D}} tuşuna basın ya da {{ui:Ölçülendirme}} seçeneğini belirleyin.
2. Neyi ölçeceğinize tıklayın:
   - **bir çizgi**: uzunluğu;
   - **bir daire**: çapı; **bir yay**: yarıçapı;
   - **iki nokta** (bir uç noktası, bir merkez, serbest bir nokta ya da orijin): aralarındaki mesafe;
   - **bir nokta ve bir çizgi**: noktadan çizgiye olan mesafe;
   - **iki paralel çizgi**: aralarındaki mesafe; **açılı iki çizgi**: aralarındaki açı.
3. İlk öğeden sonra durum çubuğu "İkinci bir öğeye tıklayın ya da ölçülendirmenin gideceği yere tıklayın." der. İkinci öğeye tıklayın ya da sayının yerini istediğiniz boş alana tıklayın.
4. Geçerli değeri gösteren bir sayı kutusu açılır. Boyutu yazıp {{key:Enter}} tuşuna basın. {{key:Esc}} ölçülen değeri korur.

Eğik bir çizgi ya da iki nokta için **sayıyı nereye koyduğunuz türü belirler**: yatay bir mesafe elde etmek için yukarıya ya da aşağıya, dikey bir mesafe için sola ya da sağa, gerçek (hizalı) mesafe için başka bir yere koyun.

Kutu, milimetre ya da derece cinsinden düz sayıları kabul eder, örneğin `25`, `12.5` veya `1e3`. Baştaki `⌀`, `Ø` ya da `R` ile sondaki `mm` ya da `°` yok sayılır. Açılar 0 ile 180 derece arasındadır. `20+5` gibi aritmetik kabul edilmez; bir ölçüyü bir değişkene ya da formüle bağlamak için başına `=` koyun.

Bir ölçülendirmeyi sonradan değiştirmek için eskizde sayısına çift tıklayın ya da sağ paneldeki listede yanındaki **Düzenle** seçeneğini belirleyin.

:::tip
Ayrıca önce geometriyi seçebilirsiniz (Seç aracı) ve sağ paneldeki bir ölçülendirme düğmesini belirleyebilirsiniz: {{ui:Mesafe}}, {{ui:Yatay mesafe}}, {{ui:Dikey mesafe}}, {{ui:Yarıçap}}, {{ui:Çap}} ya da {{ui:Açı}}. Yalnızca seçime uyanlar gösterilir. Bir daireye çap yerine yarıçap vermenin yolu budur.
:::

## İlişki ekleme

İlişkiler bir araçla değil, sağ panelden eklenir.

1. Seç için {{key:S}} tuşuna basın.
2. Bir öğeye tıklayın; ilişki iki öğe gerektiriyorsa ikinci öğeye {{key:Shift}}+tıklayın. Orijin de seçilebilir.
3. Sağ panel "Seçili: çizgi l3, nokta p1" yazar ve uyan her ilişki için bir düğme gösterir, örneğin {{ui:∥ Paralel}} ya da {{ui:• Çakışık}}.
4. Düğmeye tıklayın. Eskiz hemen çözülür.

Hiçbir ilişki uymazsa panel şunu yazar: "Bu seçime uyan ilişki yok. Bir ya da iki öğe seçin (Shift+tıklama ekler)."

İlişkilerin tam listesi, her birinin neye ihtiyaç duyduğu ve ne yaptığı [Eskiz ilişkileri ve ölçülendirmeler](topic:sketch-relations) konusundadır.

İlişkiler eskizde geometrinin yanında küçük simgeler olarak görünür (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Çakışık noktalar, geometri seçili değilse ya da ilişki sorunluysa gizlenir. İlişkiyi seçmek için bir simgeye tıklayın.

## Örnek: L biçimli bir braket profili

1. **Ön düzlem** üzerine eskiz yapın. Çizgi aracıyla orijinde başlayın ve bir L'nin altı köşesine tıklayın; sonunda yine orijinde bitirin. İlk noktaya tıkladığınızda zincir kendiliğinden biter.
2. Yatay ya da dikeye yakın çizilen çizgiler zaten H ve V ilişkilerine sahiptir; ancak son çizgi hariç: var olan bir noktada biten bir çizgi otomatik ilişki almaz. {{key:S}} tuşuna basın, bu son çizgiye tıklayın ve sağ paneldeki {{ui:V Dikey}} seçeneğini belirleyin. Çip "Eksik tanımlı · 4 serbestlik derecesi" yazar.
3. {{key:D}} tuşuna basın. Alt çizgiye tıklayın, altına tıklayın, `80` yazın, {{key:Enter}}.
4. Sol çizgiye tıklayın, solunda bir yere tıklayın, `60` yazın, {{key:Enter}}.
5. Üstteki kısa çizgiyi `20` ile ve içteki dikey çizgiyi `45` ile aynı şekilde ölçülendirin.
6. Çip artık **Tam tanımlı** yazar ve tüm L mürekkep rengine döner.

## Fazla tanımlı bir eskizi düzeltme

Yeni bir ilişki ya da ölçülendirme diğerleriyle çeliştiğinde PartCraft hiçbir şeyi taşımaz. Geometri olduğu gibi kalır, ilgili ilişkiler kırmızıya döner ve durum çubuğu onları adlandırır:

- "Fazla tanımlı: Yatay, Mesafe 40 birlikte karşılanamaz. Geri alın ya da birini silin." İlişkiler çelişir.
- "Fazla tanımlı: Paralel zaten dolaylı olarak sağlanıyor. Silin." İlişki bir şey eklemez: diğerleri onu zaten zorunlu kılar. (Örneğin bir dikdörtgenin kenarları zaten paraleldir.)

Düzeltmek için:

1. Son değişikliği geri almak için {{key:Mod+Z}} tuşuna basın, ya da
2. sağ paneldeki **İlişkiler ve ölçülendirmeler** listesinde kırmızı öğeyi bulun (içinde bulunduğu grup açık ve kırmızıdır) ve yanındaki **Sil** seçeneğini belirleyin. Eskizde simgesine ya da sayısına tıklayıp {{key:Delete}} tuşuna da basabilirsiniz.

:::note
Bu yapıda "yönlendirilen" (referans) ölçülendirme yoktur. Yalnızca diğer ilişkilerin zaten sabitlediği bir boyutu bildirecek bir ölçülendirme, fazla tanımlı sayılır. Bunun yerine boyutları panelde okuyun: bir çizgi seçin ve Ölçülendirme düğmelerine bakın ya da ekstrüzyondan sonra parça bilgilerini kontrol edin.
:::

Gerçek bir çelişkisi olan fazla tanımlı bir eskiz, onu kullanan özelliğin başarısız olmasına neden olur ("Fazla tanımlı: 1 ilişki birlikte karşılanamaz.") ve geçmişte **⚠ hata** olarak işaretlenir. Yalnızca fazlalık olan bir eskiz yine oluşturulur, ancak ⚠ uyarısıyla.

## Serbest olanı bulmak için sürükleyin

Seç aracındayken mavi herhangi bir noktayı ya da çizgiyi sürükleyin. Çözücü, her ilişkiyi koruyarak onu olabildiğince az hareket ettirir. Bir sürükleme bir ilişkiyi bozacaksa geometri geri döner. Hâlâ hangi ölçülendirmenin eksik olduğunu görmenin en hızlı yolu budur.

## İlişkiler listesi

Hiçbir şey seçili değilken sağ panel **İlişkiler ve ölçülendirmeler** listesini gösterir. Her satırda şunlar bulunur:

- **Düzenle** (yalnızca ölçülendirmeler): sayı kutusunu açar;
- **Seç**: eskizde onu seçer;
- **Sil**: onu kaldırır.

Birden çok görünen aynı türdeki ilişkiler tek bir satırı paylaşır; örneğin orijine bağlı bir dikdörtgen için "Çakışık × 5". Açmak için satıra tıklayın: her ilişki, bağladığı şeylere göre listelenir ("nokta p2, nokta p4") ve kendi **Seç** ve **Sil** seçenekleriyle gelir. Satırın kendisinde ise:

- **Seç**: hepsini eskizde seçer;
- **Tümünü sil**: hepsini tek adımda kaldırır ({{key:Mod+Z}} onları geri getirir).

Fazla tanımlı bir ilişki içeren bir grup kendiliğinden açılır ve adı kırmızı olur. Ölçülendirmeler her zaman satır başına bir tane, değerleriyle listelenir.

Geometri seçiliyken liste yalnızca **Seçimdeki ilişkileri** gösterir.
