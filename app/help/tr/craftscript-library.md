---
title: Analiz kütüphanesi
summary: Betik çalışma alanındaki okunabilir analiz betiklerinin kütüphanesi: her grupta ne olduğu, bir fonksiyonu salt okunur açmak, yöntem, kaynaklar ve denetim içeren başlığı, kendi kopyanızı yapmak ve kopyanın kütüphane fonksiyonunun yerine nasıl geçtiği.
keywords: kütüphane, craftlib, analiz, elektromıknatıs, statik, modal, termal, topoloji optimizasyonu, top88, SIMP, elektromanyetik, elektrostatik, manyetostatik, akışkan, kafes Boltzmann, LBM, örgü, voksel, dört yüzlü, kaynaklar, denetim, doğrulama, kopya, gölge
from: bf993859
---

Analiz kütüphanesi, her biri baştan sona okunabilen bir fonksiyon olan betiklerden oluşur: rijitlik matrisinin nasıl kurulduğu, sınır koşullarının nereye konduğu, hangi çözücünün çalıştığı, sonuçların nasıl hesaplandığı. İçinde gizli bir kutu yoktur; yalnızca hızlı iç döngüler (eleman matrisleri, seyrek çözücüler, örgü oluşturma) yerleşiktir.

## Bir örnekle başlayın

**Örnekler** grubunda uçtan uca kütüphaneyi kullanan beş kısa betik vardır. Birine tıklayın, {{ui:Aç (salt okunur)}} düğmesine basın, sonra {{key:F5}} tuşuna basın: her biri görünümü temizler, tuvalde bir sonuç ve alt ekranlarda bir grafik gösterir.

| Örnek | Gösterdiği |
|---|---|
| Konsol gerilmesi | 100 × 10 × 10 mm boyutlarında çelik bir çubuk, 100 N uç yükü altında: deforme olmuş çubuk üzerinde von Mises gerilmesi ve dört eleman boyutunda kiriş teorisine karşı uç sapması (grafik olarak) |
| MBB kiriş topolojisi | Klasik 60 × 20 topoloji optimizasyonu: tasarımın oluşması, uyumluluğun düşüşü, son yerleşim (94 yineleme, uyumluluk 203.19) |
| Kapasitör alanı | 4 mm genişliğinde, 1 mm aralıklı iki levha: potansiyel ve alan, kenar etkili kapasitans ile ideal değer ve Palmer formülü |
| Kanal akışı | Bir kanaldaki bir direğin etrafından kafes Boltzmann akışı: hız alanı ve yakınsama geçmişi |
| Elektromıknatıs | Hava aralıklı ve bobinli C biçimli bir demir çekirdek: akı yoğunluğu, aralıktaki alan manyetik devre formülüne karşı, endüktans ve aralık boyunca çekme kuvveti. [2-B'de manyetik alanlar](topic:magnetic-fields-2d) içinde adım adım anlatılır |
| Kalıcı mıknatıs | Bobin yerine kalıcı mıknatıs içeren aynı çekirdek: mıknatısın çalışma noktası, aralıktaki alan manyetik devreye karşı, ne kadar akının sızdığı, çekme kuvveti. [2-B'de manyetik alanlar](topic:magnetic-fields-2d#permanent-magnets) içinde |

## Gruplar

| Grup | Fonksiyonlar | Ne yaparlar |
|---|---|---|
| Örgü oluşturma | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Kutular ve silindirler altı yüzlü olarak; küpler ya da dört yüzlüler, herhangi bir modelin (parça, bir gövde, yüklenmiş bir STL) üzerinde; eleman hacimleri ve kalitesi; bir düzlemde ya da yüzeyde düğüm seçimi |
| Statik gerilme | `static_voxel`, `static_tet` | Küpler ya da 10 düğümlü dört yüzlüler üzerinde doğrusal statik gerilme: yer değiştirmeler, gerilmeler, von Mises, tepkiler |
| Çerçeveler | `frame3d` | Doğrudan rijitlik yöntemiyle, kirişler, kolonlar ve çaprazlardan oluşan 3B çerçeveler: uç serbestlikleri, mesnetler ve yaylar, eleman boyunca yükler; yer değiştirmeler, tepkiler, eleman uç kuvvetleri. DetailCraft ve BimCraft'ın {{ui:CraftScript olarak dışa aktar}} komutu bunun için bütün bir modeli yazar. Bir analiz yardımcısıdır, bir kod denetimi değildir |
| Titreşim | `modal_tet` | Doğal frekanslar ve mod şekilleri |
| Isı | `heat_steady`, `heat_transient`, `heat_system` | Sabit sıcaklıklar, ısı girdisi, üretim, akı ve taşınımla kararlı ve geçici iletim |
| Topoloji optimizasyonu | `top88`, `top99`, `topopt3d` | Yayımlanmış 88 ve 99 satırlık 2-B kodlar ve aynı yöntemin küpler üzerinde 3-B hâli |
| Elektromanyetik | `poisson2d`, `magnetostatic2d` | 2-B elektrostatik (potansiyel, alan, kapasitans, yük) ve manyetostatik (vektör potansiyeli, akı yoğunluğu, kalıcı mıknatıslar) |
| Akışkan akışı | `lbm2d`, `lbm3d` | Kafes Boltzmann akışı: 2-B betiğin içinde açıkça yazılmış, 3-B PartCraft'ın kendi akış çekirdeğinde |

Her fonksiyonun başlığı tam argümanlarını verir. Birimler, başlık aksini söylemedikçe PartCraft çalışmalarınınkidir: milimetre, newton, megapaskal, yoğunluk için küp milimetre başına ton, ısı için watt ve kelvin. Elektromanyetik ve kafes Boltzmann fonksiyonları her tutarlı birimle çalışır; başlıkları nasıl olduğunu söyler.

## Kütüphane nasıl denetlenir

Her fonksiyonun başlığı bir **denetim** ile biter: bilinen bir cevabı olan küçük bir durum. PartCraft'ın testleri bunların hepsini çalıştırır; PartCraft'ın aynı iş için kendi çalışması varsa, betiğin cevabı aynı örgü üzerinde o çalışmayla karşılaştırılır:

- konsolun uç sapması kiriş teorisine karşı (küplerle %0,2 içinde, dört yüzlülerle %0,05 içinde) ve aynı örgü üzerinde **Simülasyon** çalışma alanının çözücülerine karşı (çoğu basamağa kadar aynı);
- konsolun ilk frekansı kiriş teorisine karşı (kısa bir kiriş için beklendiği gibi %0,24 düşük) ve **Simülasyon**'un modal çözücüsüne karşı;
- ısı: ısıtılmış düz bir duvar tam olarak; küçük bir cismin toplu kapasite formülünün dediği gibi soğuması; bir levhanın sıcaklığının teorinin dediği gibi sönmesi;
- topoloji optimizasyonu: `top88` makalenin 94 yinelemesini ve uyumluluk 203.1925'i (yoğunluk filtresiyle 218.8032) yeniden üretir; `topopt3d` aynı ayarlarla **Üretken** çalışma alanıyla aynı uyumlulukta biter;
- bir kapasitörün kapasitansı ve uzun bir solenoidin alanı ders kitabı değerlerine karşı; elektromıknatısın aralık alanı manyetik devre formülüne karşı; kalıcı mıknatıslar havadaki yuvarlak bir mıknatısa ve demir bir tutucuyla kapatılmış bir mıknatısa karşı;
- kanal akışı tam parabolik profile karşı.

## Bir fonksiyonu okuyun

1. Betik panelinin **Kütüphane** sekmesini açın.
2. Bir fonksiyona tıklayın. Başlığı şunları gösterir: neyi hesapladığı, yöntemi, birimleri, varsayımları ve sınırları, **kaynaklar** (kitap ya da makale, denklem numaralarıyla) ve bir **denetim**: PartCraft'ın kendi testlerinin çalıştırdığı, bilinen bir cevabı olan küçük bir durum.
3. {{ui:Aç (salt okunur)}} tüm betiği kesik kenarlı bir sekmede açar. Çalıştırabilir, parçalarını seçip çalıştırabilirsiniz, ama değiştiremezsiniz.

## Birini değiştirin

{{ui:Kopya oluştur}} düğmesine basın (salt okunur bir sekmenin üstünde **Düzenlemek için kopya oluştur**). Kopya, parçanızda aynı adı taşıyan bir betiktir; bu yüzden parçayla birlikte kaydedilir ve **o fonksiyonu çağıran her çağrı artık sizin kopyanızı kullanır**. Düzenleyici bunu betiğin üstünde belirtir. İkisini de tutmak için kopyayı yeniden adlandırın.

## Birini kullanın

Bir kütüphane fonksiyonunu, yerleşik bir fonksiyon gibi, adıyla herhangi bir betikten çağırın:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Sonuçlar çalışma alanında değer olarak geri gelir; fonksiyonun gösterdiği grafikler ve alanlar görünümde ve alt ekranlarda belirir.

Açık parçanın statik analizi, örneğin, birkaç satır tutar:

```
v = voxel_mesh(part(), 2);                   % 2 mm küpler
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % alt yüzü tut
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % üste 500 N aşağı
r = static_voxel(v, 210000, 0.3, bc);       % çelik
```

`r` yer değiştirmeleri, gerilmeleri ve tepkileri tutar; von Mises gerilmesi deforme olmuş parça üzerinde çizilir. Eğrisel parçalar için `tet_mesh` ve `static_tet` kullanın; bunlar bütün yüzleri de yükleyip tutabilir (`face_nodes`).

:::note
Kütüphanenin fonksiyonları CraftScript ile yazılmıştır ve bir Lua betiği, yerleşik fonksiyonlar gibi, bunları `cs` üzerinden çağırır: `cs.static_tet(t, 200000, 0.3, bc)` (bkz. [Lua ile betikler](topic:craftscript-lua)). Her fonksiyon bir malzemeyi ve bir yük durumunu çözer; başlıklar kapsanmayan diğer şeyleri listeler.
:::
