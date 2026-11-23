---
title: "4 ve 5 eksenli işleme"
summary: "PartCraft'a makinenin hangi döner eksenlere sahip olduğunu söyleyin, her sıradan işlem için takımı eğin, bir yüzeyi kesim sırasında eğilen bir bilyalı parmak freze ile bitirin ya da 4. eksende parçayı takımın altında döndürün. G koduna ne yazılacağı ve neyin kanıtlanmadığı."
keywords: "5 eksen, beş eksen, 4 eksen, dördüncü eksen, çok eksenli, multiaxis, 3+2, indekslemeli, konumsal, eğim, eğik takım, döner, trunnion, tabla, kafa, A ekseni, B ekseni, C ekseni, TCP, RTCP, takım uç noktası, G43.4, ters zaman, G93, kinematik, mafsal, swarf, öncü açı"
from: c4f1c491
---

İmalat, takımı bir açıyla tutabilir ve kesim sırasında döner eksenleri hareket ettirebilir. Bunu üç şey yapar, en basitinden başlayarak.

**Burada hiçbir şey bir makinede çalıştırılmadı.** Yollar testlerle geometriye karşı denetlenir ve G kodu geri okunur, ama yerleşik postlar kontrolcülerin belgelenmiş kodlarını izler, önümüzdeki herhangi bir makineyi değil. Bir programı kontrolcünüzün kendi simülatöründe ve havada, metale girmeden önce kanıtlayın.

## Makinenin döner eksenleri

**Bağlama** sekmesinde, {{ui:Döner eksenler}} makinenin ne olduğunu söyler:

| Seçim | Makine |
|---|---|
| Yok (3 eksen) | Düz bir freze. Takımın eğik olması gereken her işlem uyarı verir ve post bunu yazmayı reddeder. |
| A (X etrafında döner) | X boyunca bir döner eksen: 4. eksen tablası ya da indeksleyici. Takım yalnızca Y–Z düzleminde eğilebilir. |
| B (Y etrafında döner) | Y boyunca bir döner eksen. Takım yalnızca X–Z düzleminde eğilebilir. |
| A ve C | X etrafında bir eğim ekseni; Z etrafında bir dönüşü taşıyan ya da taşınan: bir yatırma tablası ya da bir kafa. |
| B ve C | Aynısı, eğim Y etrafında. |

Sonra:

- **Taşıyan**: {{ui:Tabla (parça döner)}} ya da {{ui:Kafa (takım döner)}}. Bir tabla, aynı yüzü takımın altına getirmek için ters yönde döner; bu yüzden her açının işareti buna göre belirlenir.
- **Kontrolcü takım ucunu yolda tutar (TCP)**: açıkken programdaki X Y Z parçanın kendi koordinatlarındaki takım ucudur ve geri kalanını kontrolcü yapar (yerleşik Fanuc tipi ve LinuxCNC postları takım boyu için `G43.4` yazar). Kapalıyken, bir tabla makinesinde PartCraft, döndürülen tablanın parçayı taşıdığı gibi X Y Z yazar; verdiğiniz **döner merkez** etrafında (iş koordinatlarında; iş orijini merkezdeyse 0, 0, 0). Bir kafa makinesi TCP açık olmalıdır: aksi halde program makinenin pivot uzunluğunu gerektirir, PartCraft bunu bilmez.
- **Eğim sınırı**: eğim ekseninin ne kadar gittiği.

Makineler hangi yönü pozitif saydıklarında farklılık gösterir. Bir eksen sizinkinde ters dönüyorsa, bir post kopyasında işareti değiştirin ([Düzenleyebileceğiniz post işlemciler](topic:post-processors)).

## Sıradan bir işlem için eğik takım

Her frezeleme işleminin (yüz, cep, uyarlanabilir, kontur, delme, pah, paralel, scallop, 3D kaba, artık) bir **Takım eğimi** ve **Şu yöne eğ** vardır: yalnızca o işlem için takımın yönü, kurulumun takım ekseninden ölçülür. Bu 3+2 işlemedir: döner eksenler bir konuma gider ve üç eksen keserken orada kalır.

- İki açıyı yazın ya da {{ui:Takımı bir yüzeye dik getir}} düğmesine basıp düz bir yüze tıklayın: takım doğrudan ona bakacaktır.
- İşlemin yüzlerini ve kenarlarını her zamanki gibi seçin. Bir taban ya da bir deliğin ne olduğu eğik takım boyunca belirlenir.
- O yön için ham malzeme, döndürülmüş ham malzemeyi tutan kutudur; böylece o taraftan yükseklikler ve açıklıklar güvenlidir.

G kodunda, işlemden önce takım yukarı çıkar, döner eksenler döner ve takım ilk noktasının üzerine iner. Tabla makinesinde TCP olmadan yaylar yay kalır ve sabit delme çevrimleri çevrim kalır (yazılan çerçeve yalnızca Z etrafında döndürülür). TCP ile eğik bir düzlemde yaylar kısa çizgilere, çevrimler de temsil ettikleri hareketlere dönüşür.

Malzeme simülasyonu eğik bir yönü **ayrı başına** çalıştırır: o işlemin, kendi tarafından görülen bütün ham malzemeden ne kestiğini gösterir ve orada yanlış kesimleri bulur, ama diğer yönlerden yapılan kesimler taşınmaz.

## 5 eksen bitirme

İmalat araç çubuğundaki {{ui:Daha fazla}} bu işlemi ve bir sonrakini **İşlemler** sekmesinin en üstünde listeler.

{{ui:5 eksen}}, [paralel yüzey işleminin](topic:finish-3d) **gidişte eğilen bir bilyalı parmak freze** ile yapılmış halidir. Bilya bir küreyle keser ve küre, takım merkezi etrafında hangi yöne eğilirse eğilsin aynıdır; bu yüzden bilya 3 eksenli geçişin verdiği yolu tam olarak izler ve yalnızca takımın yönü değişir:

- **Yüzeye doğru**: 1 = yüzeye dik, 0 = dik, aradaki her değer.
- **İleri eğim**: kesim yönünde derece, böylece bilyanın hareketsiz merkezi kesmeyi yapmaz.
- **En çok eğim**: takım, kurulumun ekseninden bundan daha fazla asla eğilmez.

Gövdenin modele dokunacağı yerlerde eğim, temizleninceye kadar geri alınır ve işlem bunun kaç noktada olduğunu söyler. Her geçiş düz bir yükselişle girilir ve çıkılır.

## Döner bitirme (4. eksen)

{{ui:Döner}}, **iş X** boyunca bir döner eksende tutulan bir parça içindir. Parça döner ve her zaman eksene bakan bir bilyalı parmak freze yüzeyini izler:

- **Geçişler**: {{ui:Eksen boyunca}} (X boyunca çizgiler, bir adım dönme aralıklı) ya da {{ui:Parça etrafında}} (halkalar, X'te bir adım aralıklı).
- **Eksen Y / Z'de**: eksenin nerede olduğu. Boş bırakılırsa ham malzemenin ortası. Tabla makinesinde TCP olmadan bu, Bağlama'daki döner merkez olmalıdır; değilse işlem uyarır.
- **{{ui:Başlangıç / Bitiş X}}** ve **{{ui:Başlangıç / Bitiş açısı}}**: kesilecek uzunluğun ve dönüşün bölümü.

Topun eksenin üzerindeki yüksekliği her noktada, o taraftan, parçanın ağı üzerinde bir kürenin tam düşüşüdür.

## Sınırlar

- 5 eksen ve döner bitirme yalnızca **bilyalı parmak freze** alır. Yan kesim (kurallı bir duvarda takımın yanı), yüzeyin kendi yönleri boyunca akış çizgileri, çok eksenli kaba işleme ve çarpışmadan kaçınmak için otomatik eğim seçimi yoktur.
- 5 eksen ve döner yollar **malzeme simülasyonundan geçmez**; bu bir yükseklik haritasıdır ve eğilen bir kesimi tutamaz.
- 5 eksen bitirmede gövde, modele üstten bakıldığında denetlenir; tutucu, mil ve makinenin kendisi hiçbir yerde denetlenmez.
- Döner bitirme yalnızca takımın eksene bakarken görebildiği şeyi keser.
- 5 eksen bitirme büyük bir parçada hesaplanması bir dakika ya da daha uzun sürer: gövde her geçişteki her noktada denetlenir.
- Döner eksenler doğrusal eksenlerle birlikte hareket ettiğinde ve TCP kapalıyken, yerleşik postlar beslemeyi ters zaman (`G93`) olarak yazar, sonra `G94`'e döner.
- Eğik bir iş düzlemi kodu (`G68.2` ve benzeri) yazılmaz; makineye özgü sınırlar, açma ya da çarpışma bölgeleri bilinmez.
