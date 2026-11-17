---
title: Kopyalama, yapıştırma ve çoğaltma
summary: Eskiz geometrisi, özellikler ve montaj parçalarını kopyalayın; tıkladığınız yere ya da olduğu yere yapıştırın; tek adımda çoğaltın ve bir kopyayla neyin gelip neyin gelmediğini öğrenin.
keywords: kopyala, yapıştır, kes, çoğalt, pano, olduğu yere yapıştır, tümünü seç, seçimi kaldır, sil, ctrl c, ctrl v, ctrl d, örnek, bileşen, eskiz kopyala, özellik kopyala, parça kopyala
from: 611307d7
---

{{ui:Düzenle}} grubu araç çubuğunda {{ui:Geri al}}, {{ui:Yinele}}, {{ui:Kopyala}} ve {{ui:Yapıştır}} bulunur; ayrıca {{ui:Daha fazla}} menüsünde {{ui:Kes}}, {{ui:Kopyala}}, {{ui:Yapıştır}}, {{ui:Olduğu yere yapıştır}}, {{ui:Çoğalt}}, {{ui:Sil}}, {{ui:Tümünü seç}} ve {{ui:Seçimi kaldır}} vardır; her birinin tuşu da yanındadır. Ne kopyaladıkları bulunduğunuz yere bağlıdır: açık bir eskizde geometri, geçmişte bir özellik ya da bir montajda bir parça.

Kullanılamayan bir öğe soluk görünür: üzerine gelin, ipucu nedenini söyler; örneğin "Önce eskiz geometrisi seçin" ya da "Pano Sketch2 ve Extrude2 öğelerini tutuyor: özellikler geçmişe yapıştırılır, bu yüzden önce eskizden çıkın".

| Eylem | Tuş | Eskizde | Geçmişte | Montajda |
|---|---|---|---|---|
| Kopyala | {{key:Mod+C}} | Seçili noktalar ve eğriler | Seçili eskiz, ekstrüzyon, döndürme ya da delik (eskiziyle birlikte) | Seçili parça |
| Kes | {{key:Mod+X}} | Kopyala, sonra sil | Kopyala, sonra özelliği sil | Kopyala, sonra parçayı kaldır |
| Yapıştır | {{key:Mod+V}} | Kopya işaretçiyi izler; nereye gideceğine tıklayın | Kopyayı geçmişin sonuna ekler | Diğer parçaların yanına yeni bir kopya |
| Olduğu yere yapıştır | {{key:Mod+Shift+V}} | Aynı koordinatlarda | Yapıştır ile aynı | Kopyalanan parçayla aynı yerde |
| Çoğalt | {{key:Mod+D}} | Tek seferde kopyala ve taşı; pano olduğu gibi kalır | Hemen sonrasına ikinci bir kopya | Diğer parçaların yanına ikinci bir kopya |
| Sil | {{key:Delete}} | Seçim | Özellik (başkaları kullanıyorsa sorar) | Parça ya da birleşim |
| Tümünü seç | {{key:Mod+A}} | Eskizdeki her şey | Yok | Yok |
| Seçimi kaldır | {{key:Esc}} | Seçimi temizler | Seçimi ve seçilen öğeleri temizler | Seçimi temizler |

Her yapıştırma, çoğaltma ve kesme geri alma listesinde tek bir adımdır: {{key:Mod+Z}} onu geri alır, {{key:Mod+Y}} yeniden koyar.

## Bir eskizde

1. Kopyalanacakları seçin: tıklayın, daha fazlası için {{key:Shift}}+tıklayın, bir pencere sürükleyin ya da her şey için {{key:Mod+A}}'ya basın.
2. {{key:Mod+C}}'ye basın ya da {{ui:Kopyala}} seçeneğini belirleyin. Durum çubuğu neyin kopyalandığını söyler.
3. {{key:Mod+V}}'ye basın ya da {{ui:Yapıştır}} seçeneğini belirleyin. Kesikli bir kopya işaretçiyi izler; ortasından tutulur. Noktalara yapışır: kopyalanan bir dairenin merkezini bir noktaya koymak için o noktaya tıklayın.
4. Gideceği yere tıklayın. Yapıştırılan geometri seçili kalır, böylece onu hemen sürükleyebilir ya da ilişki ekleyebilirsiniz. {{key:Esc}} yapıştırmayı iptal eder.

Kopyayla birlikte gelenler:

- Kopyalanan bir çizgi, daire ya da yay kendi uç noktalarını ve merkezini getirir.
- **Kopyalanan öğeler arasındaki** ilişkiler ve ölçüler gelir: kopyalanan bir dikdörtgen hâlâ bir dikdörtgendir, boyutlarıyla birlikte.
- Kopyalamadığınız geometriye ve başlangıç noktasına olan ilişkiler düşer. Durum çubuğu bunları sayar: "Kopyanın dışındaki geometriye 2 ilişki gelmeyecek". Yani yapıştırılan kopya, onu ilişkiler ya da ölçülerle bağlayana kadar serbestçe taşınabilir.
- Sabit bir nokta yeni konumunda sabit kalır.

{{ui:Olduğu yere yapıştır}} kopyayı tam orijinalin koordinatlarına koyar; bu eskizde ya da başka bir eskizde. Bir profili bir eskizden diğerine getirmek için kullanışlıdır. Aynı eskizde kopya orijinalin üzerine gelir; onu uzaklaştırmak için sürükleyin.

{{ui:Çoğalt}} ({{key:Mod+D}}) seçimi kopyalar ve hemen yerleştirmeye başlar; panodakilere dokunmaz.

:::tip
Bir delik merkezini ya da yuvayı birkaç kez tekrar etmek için bir kez kopyalayın, birkaç kez yapıştırın: her {{key:Mod+V}} işaretçiyi izleyen yeni bir kopya başlatır.
:::

## Geçmişte

1. Geçmişte bir eskize, ekstrüzyona, döndürmeye ya da deliğe tıklayın.
2. {{key:Mod+C}} onu kopyalar. Eskiz tabanlı bir özellik eskiziyle birlikte kopyalanır.
3. {{key:Mod+V}} kopyayı geçmişin sonuna ekler (geri sardıysanız geri sarma çubuğunda), Sketch3 ve Extrude2 gibi yeni adlarla.

Kopya, orijinalle aynı düzlemde ya da yüzeyde durur; bu yüzden onun üzerine inşa eder ve parça aynı görünür. Kopyayı taşımak için yeni eskizi seçin ve sağ paneldeki düzlemini değiştirin ya da eskizi açıp profili sürükleyin ya da yeniden ölçülendirin.

- **Başka bir parçaya** yapıştırmak için o parçayı açın ve {{key:Mod+V}}'ye basın. Kopyanın eskizi o parçada olmayan bir yüzeydeyse, ön düzleme konur ve durum çubuğu bunu söyler.
- {{ui:Çoğalt}}, aynı parça içinde kopyalama ve yapıştırmayı tek adımda yapar.
- {{ui:Kes}} özelliği kopyalar, sonra siler (başka özellikler kullanıyorsa önce sorar).

Örüntüler, aynalar, köşe yuvarlatmalar, pahlar, kabuklar ve içe aktarılmış katılar kopyalanamaz: bu parçada seçilen kenarlara, yüzeylere ya da özelliklere bağlıdırlar. Bunun yerine üzerine inşa edildikleri eskizi ya da özelliği kopyalayın ya da {{ui:Doğrusal}} ya da {{ui:Dairesel}} ile örüntüleyin.

## Bir montajda

1. Görünümde ya da soldaki listede bir parçaya tıklayın.
2. {{ui:Çoğalt}} ({{key:Mod+D}}) seçeneğini belirleyin ya da {{key:Mod+C}} ardından {{key:Mod+V}}'ye basın.

Yeni kopya **aynı parçadır**: birini düzenleyin, her kopya değişir. Montajdaki her şeyin 20 mm sağında, kopyalanan parçayla aynı yöne dönük olarak görünür ve bir birleşim onu yerleştirene kadar orada kalır. {{ui:Olduğu yere yapıştır}} ({{key:Mod+Shift+V}}) onu kopyalanan parçanın tam olduğu yere koyar; onu taşımak için birleştirin (kaydırıcı birleşiminin ofseti onu iter).

Başka bir montajdan kopyalanan bir parçayı yapıştırmak, parçayı da getirir; bu, dosyasından {{ui:Ekle}} ile aynıdır. Montaj grubundaki {{ui:Kopya ekle}}, {{ui:Çoğalt}} ile aynı şeyi yapar ve hiçbir şey seçili değilken de çalışır (son parçayı kopyalar).

## Pano

- Bu PartCraft'ın kendi panosudur, bilgisayarınınki değil: PartCraft geometrisini başka bir programa ya da metni PartCraft görünümlerine yapıştıramazsınız.
- Bu tarayıcıda tutulur, böylece başka bir PartCraft sekmesi kopyaladığınızı yapıştırabilir. Açılmış bir dosya gibi okunur ve denetlenir; bozuk ya da başka sürümden olan her şey reddedilir.
- Büyük bir içe aktarılmış STEP dosyası olan bir parça, tarayıcının tutmak için çok büyük olabilir: yalnızca bu sekmede yapıştırılır.
- Bir sayı kutusunda ya da yardım aramasında {{key:Mod+C}} ve {{key:Mod+V}} metni her zamanki gibi kopyalar ve yapıştırır.

Çizim sayfasında kopyalama ve yapıştırma henüz kullanılamıyor; {{ui:Sil}} ve {{ui:Seçimi kaldır}} seçili sembolde çalışır. Bkz. [Henüz yapılmayanlar](topic:not-built-yet).
