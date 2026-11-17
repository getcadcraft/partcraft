---
title: Bir eğri ağı üzerinden yüzeyler (Gordon yüzeyi)
summary: Eskizlerde çizilmiş ya da model kenarlarından alınmış bir profil ve kılavuz eğri ızgarasından geçen tek bir pürüzsüz yüzey oluşturun; profiller kapalıysa onu katıya kapatın; neyin kesin, neyin oturtulmuş olduğu ve bir ağın oturmadığı zamanki mesajlar.
keywords: teğet, g1, teğetlik, teğet sürekliliği, ayna düzlemi, gordon yüzeyi, eğri ağı, sınır yüzeyi, ağ yüzeyi, profiller, kılavuzlar, kılavuz eğriler, kılavuzlu loft, kılavuz raylar, kabuk, transfinite, coons, B-spline yüzey, serbest biçimli yüzey
from: ada3cb8b
---

:::note
**Bu sürümde henüz yapılmadı.** Gordon yüzeyi, PartCraft'ın bu sürümünde bulunmayan kesin bir geometri çekirdeği gerektirir: her parçayı ağ çekirdeğiyle oluşturur. [Henüz yapılmayanlar](topic:not-built-yet) bunun yerine ne yapılacağını anlatır. Sayfanın geri kalanı, kesin bir çekirdekle nasıl çalıştığını anlatır.
:::

Bir **Gordon yüzeyi**, bir ağın her eğrisinden geçen tek bir yüzeydir: bir yöne giden bir **profiller** kümesi ve diğer yöne giden bir **kılavuzlar** kümesi; bir net'in iplikleri gibi kesişirler. Doğrudan kontrol ettiğiniz birkaç kesit eğrisinden bir gövdeyi, çamurluğu ya da bir kolu bu şekilde biçimlendirirsiniz. **Kesin çekirdek** gerektirir (bkz. [Ağ çekirdeği](topic:solid-kernels)).

## Ağı çizin

1. **Profilleri** çizin: yan yana uzanan iki ya da daha fazla eğri, örneğin paralel düzlemlerdeki kesitler. Çizgiler, yaylar, daireler ve spline'ların hepsi çalışır; uç uca birleşmiş bir eğri zinciri tek bir eğri sayılır.
2. **Kılavuzları** çizin: profilleri kesen iki ya da daha fazla eğri. Her kılavuz her profili bir kez, her profil de her kılavuzu bir kez kesmelidir.
3. Eğrilerin gerçekten buluştuğundan emin olun. Bir kılavuzun eskizini, eğrisi profillerin noktalarından geçecek şekilde çizin (izdüşüm noktalarına yakalayın ya da koordinatları yazın). Ağ, **Tolerans** değerine kadar boşlukları kabul eder (başlangıçta 0.01 mm).

Tek bir eskiz birden fazla eğri içerebilir: içindeki her ayrı zincir kendi eğrisidir. Örneğin, tüm kılavuzları üst düzlemdeki tek bir eskizde çizebilirsiniz.

## Yüzeyi oluşturun

1. Özellikler grubunda {{ui:Daha fazla}} seçin, sonra {{ui:Gordon yüzeyi}}.
2. PartCraft, henüz kimsenin kullanmadığı eskizleri alır: birincisine paralel düzlemlerdekiler **profil** olur, diğerleri **kılavuz**. Sağdaki listeyi denetleyin ve her eskizi **Profiller**, **Kılavuzlar** ya da **Kullanılmıyor** olarak ayarlayın.
3. Parçanın kenarlarını kullanmak için **Kenarları profil olarak seç** (ya da **kılavuz olarak**) düğmesine tıklayın, görünümde kenarlara tıklayın, sonra Esc tuşuna basın.

Sonuç bir **yüzey gövdesi**dir. {{ui:Kalınlaştır}} onu bir katıya çevirir, {{ui:Dikiş}} onu diğer yüzeylere diker ve {{ui:Yüzeyi kırp}} onu keser.

### Katıya kapatın

Profiller kapalı eğriler (daireler, kapalı spline'lar, kapalı zincirler) olduğunda ve ilk ve son profil her biri bir düzlemde düz yattığında, **Katıya kapat** seçeneğini işaretleyin. Uçlar düz yüzeylerle kapatılır ve kapalı şekil, diğer özellikler gibi birleşir, keser, kesişir ya da yeni bir gövde olur. Kılavuz eğrileri izleyen bir loft bu şekilde yapılır. Kapalı kılavuzlarla da aynı şekilde çalışır.

## Bir kenar boyunca bir düzleme teğet

Bir Gordon yüzeyi eğrilerinden geçer, ama tek başına karşılaştığı şeyin eğimiyle eşleşmez. Bir kenardan bir düzleme **teğet** (G1) ayrılmasını sağlamak için (örneğin bir ayna düzlemi, böylece yansıtılmış kopya bir kıvrım olmadan birleşir) ya da büyüdüğü düz bir yüzeye:

1. Gordon özelliğini seçin. **Teğet olduğu** altında, {{ui:Bir düzlem ekle…}} içinden bir düzlem seçin (Ön, Üst, Sağ ya da bir referans düzlemi), ya da görünümde düz bir yüzey seçip {{ui:Seçilen düz yüzeyi ekle}} düğmesine basın.
2. PartCraft, o düzlemde yer alan ağın sınır eğrisini bulur ve yüzey ondan düzleme teğet olarak ayrılır.

Bir düzlem iki sınır eğrisini tutuyorsa (her iki ucun altındaki bir taban), onu iki kez ekleyin: her kopya sıradakini alır. En fazla dört düzlem, kenar başına bir.

Rapor, her düzlemin yüzeyi hangi eğri boyunca teğet yaptığını ve yüzeyin o düzlemle önce karşılaştığı en dik açıyı söyler. Zaten o eğriden düzleme teğet ayrılan kılavuzlar tam olarak izlenir. Ondan uzaklaşarak yükselen kılavuzlar kenara yakın dar bir bantta bükülür ve raporun "şu değere kadar her eğriyi izler" değeri ne kadar olduğunu söyler: tam uyum için kılavuzları kenardan düz çizin.

## Neyin kesin, neyin oturtulmuş olduğu

Panel bunlardan hangisinin geçerli olduğunu ve yüzeyin eğrilerinizden ne kadar saptığını söyler.

- **Kesin**: her eğri polinom olduğunda (çizgiler, spline'lar ve onların zincirleri) ve kılavuzlar tüm profilleri aynı parametrelerde kestiğinde, yüzey tam olarak bu eğrilerin Gordon yüzeyidir. Bikübik bir yüzeyden kesilmiş bir iso eğri ağı o yüzeyi geri verir; dört düz çizgi ise düz ya da burulmuş (bilineer) bir yama verir.
- **Oturtulmuş**: yaylar, daireler ve parçanın kenarları polinom değildir; farklı parametrelerde kesişen eğrilerin kesişimleri hizalanacak şekilde yeniden zamanlanması gerekir. Bu eğriler, ağın boyutunun on milyonda birine kadar (100 mm'lik bir parça için yaklaşık 0.00001 mm) kübik B-spline'larla oturtulur. Yaylar ve çizgilerden yapılmış bir silindir yama, gerçek silindirden 0.00001 mm içinde kalır.

Eğriler arasında yüzey yöntemin verdiği şeydir: profiller arası harmanlanmış, artı kılavuzlar arası harmanlanmış, eksi kesişim noktalarının harmanı. Bir eğrinin keskin bir köşesi olduğu yerler dışında her yerde pürüzsüzdür. İki Gordon yüzeyi bir sınır eğrisini paylaştığında, kenar kenara (G0) birleşirler, teğet değil.

## Bir ağ oturmadığında

| Mesaj | Ne yapılmalı |
|---|---|
| "… birleşmiyor: 0.4 mm aralıkla geçiyorlar" | O profil ile kılavuzun kesişmesini sağlayın ya da **Tolerans** değerini yükseltin |
| "… 2 kez buluşuyor" | Bir kılavuz her profili yalnızca bir kez kesebilir: döngü yapan bir eğriyi bölün ya da daha az profil kullanın |
| "… farklı bir sırada" ya da "kendi üzerine katlanıyor" | İki kılavuz birbirini keser (ya da iki profil). Aileler yan yana uzanmalıdır |
| "en az iki profil ve iki kılavuz" | Eğri ekleyin ya da daha fazla eskizi Profiller ya da Kılavuzlar olarak ayarlayın |
| "açık ve kapalı eğrileri karıştırıyor" | Tüm profilleri açık ya da tümünü kapalı yapın (kılavuzlar için de aynısı) |
| "Bir uç … düz değil, bu yüzden kapatılamaz" | İlk ve son kapalı profili her biri bir düzlemde çizin ya da **Katıya kapat** seçeneğini kapalı bırakın |

## Sınırlar

- Ağ başına bir B-spline yüzeyi: komşu yüzeylere G1 ya da G2 teğetlik yok.
- Kapalı bir ağın dikişi, ilk kılavuzda, kenar kenara birleşir ama teğet değildir.
- Loft özelliğinin kendisinde kılavuz rayları yoktur; bunun yerine katıya kapatılmış bir Gordon yüzeyi kullanın.
- Çok dalgalı eğriler ya da bir eğri boyunca kesişimlerin diğerine göre çok düzensiz aralıklı olması, oturtmak için çok fazla nokta gerektirebilir; özellik bunu o zaman söyler.
