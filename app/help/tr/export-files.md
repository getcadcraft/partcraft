---
title: Baskı, STEP ve DXF için dışa aktarma
summary: Parçayı 3B baskı için STL ya da 3MF olarak, diğer CAD ve CAM programları için kesin bir STEP katısı olarak, bir eskizi ya da düz bir yüzeyi lazer ve su jeti kesimi için DXF olarak dışa aktarın.
keywords: dışa aktar, farklı kaydet, ifc, bim, özellik kümeleri, stl, 3mf, 3B baskı, dilimleyici, step, stp, kesin step, b-rep, ap242, ap214, cam, makine atölyesi, frezeleme, dxf, lazer, su jeti, cnc, açınım, profil, örgü, facet
from: e1de71d5
---

Dışa aktarımlar, başka biçimlerdeki kopyalardır. `.partcraft.json` dosyasını da saklayın: PartCraft'ın yeniden açıp düzenleyebildiği tek dosya budur.

Tüm dışa aktarımlar, ekrandaki parça üzerinde ve milimetre cinsinden çalışır. Bir montajda STL, 3MF, STEP ve Çizim (PDF) tüm montajı dışa aktarır: bkz. [Parça listesi, patlatılmış görünümler ve hareketli parçalar](topic:assembly-bom-explode). Henüz katı yoksa: "Henüz dışa aktarılacak bir katı yok."

## 3B baskı için: STL ya da 3MF

1. İsteğe bağlı: yuvarlak yüzeyler pürüzsüz olsun diye, hiçbir şey seçili olmayacak şekilde boş bir alana tıklayın ve sağ paneldeki **Eğriler** ayarını **İnce (tur başına 128)** ya da **Çok ince (tur başına 256)** olarak seçin. STL ve 3MF her zaman üçgenlerden oluşur.
2. {{ui:Dışa aktar}} seçeneğini, ardından {{ui:STL, 3B baskı için}} ya da {{ui:3MF, 3B baskı için}} seçeneğini seçin.
3. Dosya indirilir. Durum çubuğu, örneğin şunu yazar: "Part1.stl dışa aktarıldı (ikili, mm, Z yukarı, 1536 üçgen)."

İki biçim de yazıcıların ve dilimleyicilerin beklediği gibi **Z yukarı** olarak yazılır. PartCraft'ın kendi dünyası Y yukarıdır, bu yüzden dışa aktarma parçayı döndürür: PartCraft'ta yukarı gösteren (Üst düzleme dik) şey dilimleyicide de yukarı gösterir ve Üst düzlemde çizilmiş bir parça yazıcı tablasına düz yatar. Gerekirse son yönlendirmeyi dilimleyicinizde ayarlayın.

3MF, dilimleyicilerin birimleriyle birlikte okuduğu, daha yeni ve daha küçük bir biçimdir. Bir program 3MF almıyorsa STL kullanın.

Önce parçanın kapalı olduğunu, yazıcınızın tablasına sığdığını ve düz bir yüzeyde durduğunu denetlemek için {{ui:Dışa aktar}} › {{ui:3B baskı için denetle (STL ya da 3MF)…}} seçeneğini kullanın: bkz. [Bir parçayı 3B baskıya hazırlama](topic:print-3d).

## Diğer CAD programları için: STEP

{{ui:Dışa aktar}} seçeneğini, ardından {{ui:STEP AP242 (kesin katı)}} seçeneğini seçin. Parçayı milimetre cinsinden, Z yukarı döndürülmüş tek bir kesin katı olarak yazar. Yuvarlak yüzeyler gerçek silindir, koni, küre ve torus olarak yazılır; kenarları da gerçek dairelerdir, böylece öteki program bir deliği delik olarak seçebilir. Bir STEP dosyasından açılmış bir gövde, o dosyanın düz yüzeylerini, silindirlerini, konilerini, kürelerini ve toruslarını korur; bunlar da kesin olarak dışa çıkar. Böyle bir yüzeyi olmayan yüzeyler (bir spline'ın yan yüzü, modellenmiş bir dişli, bir STL, OBJ ya da 3MF örgüsünden gelen bir gövde, bir STEP dosyasının spline'ı, süpürülmüş ve döndürülmüş yüzeyler) aynı katı içinde düz facet olarak kalır ve durum çubuğu kaç tane olduğunu söyler. Durum çubuğu, örneğin şunu yazar: "Flange.step dışa aktarıldı (AP242, kesin katı, mm, Z yukarı): 14 yüzey gerçek yüzeylerinde (10 silindirik, 1 konik, 0 küresel, 0 torus), 0 uydurulmuş kenar eğrisi." Yalnızca katıyı içerir: geçmiş, eskiz ve çizim yoktur. Öteki program yalnızca AP214 okuyorsa {{ui:STEP AP214 (kesin katı)}} seçeneğini seçin: aynı katı, o eski şemada yazılır.

Kesin olanlar ve olmayanlar:

- Düz yüzeyler, silindirler (delikler, çıkıntılar, düz kenarlardaki yuvarlatmalar), koniler (havşalar, konikler), küreler ve toruslar kesindir; düz, dairesel ve eliptik kenarları da kesindir. **Eğriler** ayarı bunları değiştirmez.
- İki yuvarlak yüzeyin kesiştiği yerde (bir milin içinden açılmış bir delik), kenar her iki yüzeye 0.00001 mm içinde uydurulmuş pürüzsüz bir eğridir; "uydurulmuş kenar eğrileri" bunları sayar.
- Parçanın içindeki kapalı bir boşluk, katının bir boşluğu olarak yazılır. Birbirinden ayrı birkaç gövde, birkaç katı olarak yazılır.
- Montaj henüz kesin STEP olarak yazılmaz: her parçayı ayrı dışa aktarın.

Dosyalar OpenCascade ile geri okunarak denetlendi; OpenCascade geçerli katılar bildirir ve hacimleri elle hesaplanmış değerlerle eşleşir. Henüz her CAD ya da CAM programında açılmadı. Bir program bir dosyayı reddederse, {{ui:STEP (yüzeyli, örgü çekirdeği)}} aynı şekli düz yüzeyler olarak yazar (PartCraft'ın kendi eksenlerinde, Y yukarı) ve lütfen {{ui:Yardım}} › {{ui:Sorun bildir}} yoluyla bize bildirin.

İşleme için, Üretim çalışma alanı da kesin katıyı kurulumun kendi iş koordinatlarında yazar: bkz. [Takım yolları ve G-code oluşturma](topic:manufacture#exact-step-for-the-shop).

## BIM programları için: tüm özellikleriyle IFC

{{ui:Dışa aktar}} seçeneğini, ardından {{ui:IFC 4 (tüm özelliklerle)}} seçeneğini seçin. Parçayı bina ve tesis modelleri için bir IFC 4 öğesi olarak yazar; şekli üçgenler olarak (Z yukarı, milimetre) ve PartCraft'ın parça hakkında bildiği her şey özellik kümeleri olarak yazılır:

| Özellik kümesi | İçerir |
|---|---|
| **PartCraft_Part** | Ad, malzeme ve yoğunluğu, etkin yapılandırma, gövde sayısı; bir montajda ayrıca parça numarası ve açıklama |
| **PartCraft_Parameters** | Parçanın her parametresi değeriyle birlikte; bir formülün ifadesi ve bir not, özelliğin açıklamasındadır |
| **PartCraft_TitleBlock** | Doldurduğunuz çizim künyesi alanları (başlık, çizim numarası, revizyon, firma, çizen, kontrol eden ve onaylayan, tarih, yüzey işlemi, genel tolerans) ve sayfa boyutu |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Hacim, yüzey alanı, kütle (bir malzemeyle) ve genel boyut |

Malzeme bir IFC malzemesi olarak eklenir, çizim numarası da öğenin etiketi olur. Bir montajda her parça, özelliklerini taşıyan bir tip olarak bir kez yazılır; her kopya ise montajın yerleştirdiği yere konur ve kendi değerleri **PartCraft_Instance** içindedir: adı, malzeme listesindeki kalem numarası ve sabitlenmiş parça olup olmadığı.

## Lazer, su jeti ya da CNC profilleri için: DXF

İki tür DXF vardır; ikisi de R12 sürümündedir ve her CAD ve CAM programı bunları açar:

### Bir eskiz

1. Geçmişte eskizi seçin (ya da açık olsun).
2. {{ui:Dışa aktar}} seçeneğini, ardından {{ui:Eskizin ya da düz yüzeyin DXF'i}} seçeneğini seçin. (Eskizin sağ panelinde de {{ui:DXF olarak dışa aktar}} bulunur.)

Eskizin kendi koordinatlarında `<parça> - <eskiz>.dxf` dosyasını alırsınız: çizgiler, gerçek yaylar ve daireler **PROFILE** katmanında, yapı geometrisi **CONSTRUCTION** katmanında, serbest noktalar **POINTS** katmanında olur.

### Katının düz bir yüzeyi

1. Görünümde düz bir yüzeye tıklayın (örneğin delikli bir levhanın üstü).
2. Sağ paneldeki {{ui:Yüzeyi DXF olarak dışa aktar}} seçeneğini ya da {{ui:Dışa aktar}}, ardından {{ui:Eskizin ya da düz yüzeyin DXF'i}} seçeneğini seçin.

`<parça> - face.dxf` dosyasını alırsınız: yüzeyin dış hatları ve içindeki her delik. Yuvarlak bir delik (bir silindirin yüzeyle kesiştiği tam daire: açılmış bir delik ya da açılmış bir STEP dosyasının deliği) kendi merkezi ve yarıçapıyla gerçek bir daire olarak yazılır. Diğer her dış hat kapalı bir polyline'dır ve yuvarlak kenarları (köşe yuvarlatmaları, yuvalar, yaylar) facet'lerle yazılır; bu yüzden kesici onları yakından izleyecekse önce **Eğriler** ayarını İnce yapın. Durum çubuğu kaç dış hat olduğunu, bunların kaçının gerçek daire olduğunu ve yüzeyin alanını söyler.

Ne bir eskiz ne de düz bir yüzey seçiliyse: "DXF dışa aktarmak için bir eskiz açın ya da seçin, ya da düz bir yüzey seçin."

## Bir çizim

PDF çiziminin kendi adım adım rehberi vardır: [Bir çizim sayfası oluşturma](topic:drawing-pdf).

## Kullanılamayan biçimler

glTF, OBJ, IGES ve Parasolid bu sürümde dışa aktarılmaz. DWG yalnızca varyant paketi tarafından, bir çizim sayfası olarak yazılır: bkz. [Yapılandırmalarınızdan bir varyant paketi oluşturma](topic:variant-pack). Ayrıca bkz. [Dosya biçimleri](topic:file-formats).
