---
title: Parçaları başka parça modelleyicilerine ve onlardan taşıyın
summary: Bir parçayı, canlı bir özellik ağacıyla yeniden kuran bir makro olarak başka bir parça modelleyicisine gönderin. Adlandırılmış STEP ve başka bir modelleyicinin dışa aktardığı özellik listesini açmak, bu sürümde henüz yapılmadı.
keywords: makro, henüz yapılmadı, swb, vba, özellik ağacı, gidiş-dönüş, makroyu dışa aktar, cadcraft-sw.json, adlandırılmış step, ap214, genel değişkenler, denklemler, yerel parça
from: 97ca61da
---

PartCraft, parçaları SolidWorks ile iki yönlü alışverişe sokar; kimsenin okuyamadığı bir dosya biçimi kullanmadan:

- **Dışarı:** SolidWorks'ün parçayı kendisinin, özellik özellik, eskizleri, ilişkileri, ölçüleri, genel değişkenleri ve denklemleriyle oluşturması için çalıştıracağı bir makro (`.swb`, düz metin). Ölü bir katı değil, canlı bir özellik ağacına sahip yerel bir parça elde edersiniz.
- **Geri:** SolidWorks içinde çalıştırdığınız bir makro, parçanın özelliklerini ve denklemlerini bir `.cadcraft-sw.json` dosyasına yazar. Bu dosyayı PartCraft'ta açmak bu sürümde henüz yapılmadı (kesin bir çekirdek gerektirir).

:::warning
Bunların hiçbiri henüz SolidWorks'te denenmedi. SolidWorks yalnızca Windows'ta ve lisansla çalışır; PartCraft bu makroları hiçbir zaman orada çalıştırmadı. Makrolar SolidWorks API belgelerinden yazıldı ve burada yalnızca yapısı denetlendi. Sorun bildirmeniz beklenir; makronun yazdığı günlük hangi adımın başarısız olduğunu söyler.
:::

PartCraft bir `.sldprt` dosyası yazamaz: bu biçim kapalıdır. Yerel bir parça elde etmenin yolu makrodur.

## Parçayı makro olarak gönderin

1. Parçayı açın.
2. {{ui:Dışa aktar}} öğesini, ardından {{ui:SolidWorks için makro (.swb)}} öğesini seçin. PartCraft `<part>.swb` dosyasını indirir; durum çubuğu bunun "tam çekirdek olmadan yazıldığını" söyler.
3. Bir iletişim kutusu, makronun kaç özellik, genel değişken ve denklem oluşturacağını söyler ve bıraktığı her şeyi listeler. Bu sürümde yanına STEP dosyası yazılmaz: bir tane gerekiyorsa {{ui:Dışa aktar}}, ardından {{ui:STEP (yüzeyli, örgü çekirdeği)}} seçin.
4. SolidWorks'te **Tools > Macro > Run** seçin, `.swb` dosyasını seçin ve bekleyin. Makro, varsayılan parça şablonunuzdan yeni bir parça oluşturur, milimetreyi ayarlar ve her özelliği oluşturur.
5. Sonunda bir ileti kaç adımın tamamlandığını, kaçının başarısız olduğunu ve kaçının PartCraft gövdesiyle eşleştiğini söyler. Tam günlük, `<part> macro log.txt`, makronun yanına yazılır.

Makronun oluşturduğu şeyler:

| PartCraft | Yeni parçada |
|---|---|
| Ön, Üst veya Sağ düzlemde eskiz | O düzlemde bir eskiz; çizgileri, yayları, daireleri, noktaları, ilişkileri ve ölçüleriyle (PartCraft'taki gibi adlandırılmış, örneğin `k7`) |
| Bir yüzeyde eskiz | Üzerindeki bir noktayla seçilen aynı yüzeyde bir eskiz |
| Sabit bir düzlemde eskiz | Üç noktadan geçen bir referans düzlemi ve üzerinde eskiz |
| Ekstrüzyon, kesme (sınırlı, tümü boyunca, orta düzlem, iki yön, konik) | Boss-extrude veya cut-extrude |
| Döndürme, döndürülmüş kesme | Aynı merkez çizgisi etrafında döndürme |
| Delik (basit, karşıdelik, havşa, dişli) | Kendi eskizleriyle bir veya iki kesme (dişli delik, matkap çapı olarak; diş yok) |
| Doğrusal ve dairesel örüntü, ayna | Doğrusal örüntü, dairesel örüntü, ayna (özellik veya gövde olarak) |
| Köşe yuvarlatma, pah, kabuk | Aynı kenarlarda ve yüzeylerde köşe yuvarlatma, pah ve kabuk; noktalarla seçilir |
| Parametreler ve denklemler | Yeniden adlandırılmış ölçüler üzerinde genel değişkenler ve denklemler |
| Bastırılmış özellikler, geri alma çubuğu | Aynı şekilde bastırılır; geri alma çubuğu aynı yerde |

Her katı özellikten sonra makro, gövdenin hacmini ve boyutunu PartCraft'ınkilerle karşılaştırır. Farklılarsa, o özelliğin yönünü bir kez çevirip yeniden denetler; bu daha iyi değilse geri çevirir ve günlüğe "Check" yazar.

### Dışarıda bırakılanlar

İletişim kutusu ve makronun başı, aktarılmayan her şeyi nedeniyle birlikte listeler. Bugün bunlar: içe aktarılmış katılar (bunun yerine STEP ekleyin), süpürmeler, loftlar, eğimler, referans eksenleri ve noktaları, "şuna kadar" bitiş koşulları, bir kontürün yalnızca bir kısmını ekstrüde etme ve bunlara bağlı her şey. Spline'lar, noktalarından geçen eğrilere dönüşür. Bu sürümde kesin çekirdek olmadığı için yüzeylerdeki eskizler ve kenar ya da yüzey seçen özellikler de dışarıda kalır.

## Adlandırılmış bir STEP gönderin

Bu sürümde henüz yapılmadı: {{ui:SolidWorks için STEP (adlandırılmış, AP214)}} kesin bir çekirdek gerektirir ve bunu seçmek "SolidWorks için STEP: henüz yapılmadı. …" der. Kesin çekirdekle dosya parçanın adını, milimetreyi ve parça rengini taşır; parçaları SolidWorks'ün gösterdiği gibi, Y ekseni yukarı olacak şekilde yazar ({{ui:STEP AP214 (kesin katı)}} düz dışa aktarımı Z eksenini yukarı alır). Adlardaki aksanlı harfler aksanlarını kaybeder; düz ASCII dışındaki karakterler `_` olur.

## Bir parçayı geri getirin

Dosyayı PartCraft'ta açmak (3. adım) bu sürümde henüz yapılmadı: "SolidWorks dışa aktarımı açılıyor: henüz yapılmadı. …" der. CadCraft çizim uygulaması dosyayı yine açar ve eskizlerini alır.

1. {{ui:Dosya}} > {{ui:Dışa aktar}} > {{ui:Parçaları geri getirmek için makroyu dışa aktar (.swb)}} seçerek `CadCraftExport.swb` dosyasını indirin ve parçalarınızın yanına koyun.
2. SolidWorks'te parçayı açın, **Tools > Macro > Run** seçin ve `CadCraftExport.swb` dosyasını seçin. Parçanın yanına `<part>.cadcraft-sw.json` yazar ve parçayı hiç değiştirmez.
3. PartCraft'ta {{ui:Aç}} öğesini seçin ve bu dosyayı seçin ya da 3D görünüme bırakın.
4. Kesin bir çekirdekle PartCraft parçayı özellik özellik yeniden kurar ve ne yaptığını gösterir: örneğin "SolidWorks'ten taşınan 5 özelliğin 5'i (Flange.SLDPRT)", taşıyamadığı her özellik ("Taşınmadı: Sweep1 (Sweep)." ) ve hacmin SolidWorks'ün yazdığıyla eşleşip eşleşmediği.
5. {{ui:Kaydet}} ile bir PartCraft parçası olarak kaydedin.

Eskizler bir temel düzlemin üzerindeyse o düzleme, varsa parçanın eşleşen düz yüzeyine (böylece sonraki düzenlemeleri izlerler), aksi halde sabit bir düzleme yerleşir. Köşe yuvarlatmaların, pahların ve kabukların kenarları ve yüzeyleri noktalardan bulunur ve adlandırılmış referanslar olarak tutulur. Genel değişkenler parametre olur (boşluk içeren adlar alt çizgi alır: "Bolt count" `Bolt_count` olur) ve denklemler aynı ölçüler üzerinde denklem olur. Hiçbir şey tahmin edilmez: karşılığı olmayan her şey listelenir.

CadCraft çizim uygulaması aynı dosyayı açar ve eskizlerini alır.

:::note
Biçim `cadcraft-sw-export` sürüm 1'dir: milimetre ve derece cinsinden düz JSON. Daha yeni bir makrodan gelen veya geçerli olmayan bir dosya, nedeniyle birlikte reddedilir.
:::
