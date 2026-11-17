---
title: Özellikler ve seçenekleri
summary: Araç çubuğundaki her özellik; ayarları, varsayılanları ve sınırlarıyla, ekstrüzyondan yuvarlatmaya, kabuğa ve içe aktarılan STEP katılarına kadar; tüm özelliklerin ortak eylemleri ve parça ayarları.
keywords: özellikler, henüz yapılmadı, ekstrüzyon, kesim, döndürme, döndürme kesmesi, delik, karşı delik, doğrusal örüntü, dairesel örüntü, ayna, köşe yuvarlatma, pah kırma, kabuk, içe aktarma, seçenekler, varsayılanlar, ayarlar, çözünürlük, eğriler, facet, bastırma, geri sarma
from: ab3a598e
---

Özellikler, oluşturuldukları sırayla geçmişte listelenir ve yukarıdan aşağıya doğru yeniden oluşturulur. Her biri türüne göre bir numarayla adlandırılır: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft her özelliği örgü çekirdeğiyle oluşturur. Köşe yuvarlatma ve pah kırma, iki düz yüzey arasındaki düz kenarlarda çalışır; Kabuk ise düz yüzeyleri açar. İçe aktarılan katılar, bu sürümde bulunmayan bir kesin çekirdek gerektirir: bunlar henüz yapılmadı ve aşağıdaki bölümleri, önceki bir sürümde oluşturulmuş ve bunları koruyan bir parça olarak anlatır. Bkz. [Örgü çekirdeği](topic:solid-kernels) ve [Henüz yapılmayanlar](topic:not-built-yet).

## Eskiz (Sketch)

| Ayar | Notlar |
|---|---|
| Düzlem | Ön, Üst ya da Sağ düzlem ya da düz bir yüzey. Gösterilir, değiştirilmez: bir eskizi taşımak için yenisini oluşturun |
| Durum | Tam tanımlı, Eksik tanımlı (serbestlik dereceleriyle), Fazla tanımlı ya da Boş |
| Geometri, İlişkiler | Kaç eğri, nokta ve ilişki olduğu |
| Yönlendiren ölçüler | Eskizin her ölçüsü, düzenlenebilir |

Düğmeler: {{ui:Eskizi düzenle}}, {{ui:DXF olarak dışa aktar}}.

## Ekstrüzyon ve kesim

{{ui:Ekstrüzyon}} ve {{ui:Kes}} aynı özelliği oluşturur; yalnızca farklı ayarlarla başlarlar.

| Ayar | Seçenekler | Ekstrüzyon başlangıcı | Kes başlangıcı |
|---|---|---|---|
| İşlem | Çıkıntı (malzeme ekler), Kes (malzemeyi kaldırır), Kesişim (örtüşen kısmı tutar), Yeni gövde (bu sürümde henüz yapılmadı) | Çıkıntı | Kes |
| Bitiş | Kör (bir derinlik), Orta düzlem (iki yönde), Baştan sona | Kör | Baştan sona |
| Derinlik (mm) | 0'dan büyük, 1,000,000'a kadar | 10 | 10 |
| Yönü ters çevir | Kapalı / açık | Kapalı | Kapalı |

- Profil: eskizdeki katı çizgilerin, dairelerin ve yayların her kapalı döngüsü. Döngülerin içindeki döngüler deliktir.
- Baştan sona yalnızca kesimler için çalışır. Seçilen tarafta parçanın tamamından geçer.
- Bir kesim, eskiz düzleminin dışa bakan tarafının aksine, malzemenin içine girer; Ters çevir bunu değiştirir.

## Döndürme ve döndürme kesmesi

| Ayar | Seçenekler | Varsayılan |
|---|---|---|
| İşlem | Çıkıntı, Kes | Çıkıntı ({{ui:Döndürme}}), Kes ({{ui:Daha fazla}} › {{ui:Döndürme kesmesi}}) |
| Açı (°) | 0'dan büyük, 360'a kadar | 360 |
| Eksen | İlk merkez çizgisi, eskizin herhangi bir çizgisi ya da merkez çizgisi, ya da eskizin düzleminde yer alan bir eksen özelliği | İlk merkez çizgisi |

- Profil eksenin tek bir tarafında kalmalıdır. Eksene dokunabilir.
- Bir döndürmenin ekseni, dairesel örüntüler ve montaj birleşimleri tarafından kullanılabilir.

## Delik

| Ayar | Seçenekler | Varsayılan |
|---|---|---|
| Tür | Basit, Karşı delik | Basit |
| Çap (mm) | 0'dan büyük | 6 |
| Baştan sona | Açık / kapalı | Açık |
| Derinlik (mm) | Baştan sona kapalıyken | 10 |
| Karşı delik ⌀ | Delikten geniş | 11 |
| Karşı delik derinliği | Kör bir delikten sığ | 6 |
| Yönü ters çevir | Kapalı / açık | Kapalı |

- Eskizdeki serbest her nokta için bir delik (Nokta aracıyla yapılmış noktalar). Panel kaç tane olduğunu gösterir.
- Delikler eskiz düzlemine dik olarak, malzemenin içine açılır.
- Her deliğin ekseni montaj birleşimleri tarafından kullanılabilir ("Hole1, hole 2").

## Doğrusal örüntü

| Ayar | Seçenekler | Varsayılan |
|---|---|---|
| Kopyalanacak özellikler | Üstündeki herhangi bir katı özellik | Seçili özellik, yoksa son katı özellik |
| Yön | X ekseni, Y ekseni, Z ekseni; önceki bir eskizin bir çizgisi; bir döndürmenin ekseni; seçilmiş bir kenar | X ekseni (ya da eklediğinizde seçilen kenar) |
| Aralık (mm) | Herhangi bir sayı | 20 |
| Sayı | 1'den 1000'e kadar, özgün dahil | 3 |
| Yönü ters çevir | Kapalı / açık | Kapalı |

## Dairesel örüntü

| Ayar | Seçenekler | Varsayılan |
|---|---|---|
| Kopyalanacak özellikler | Doğrusal ile aynı | Doğrusal ile aynı |
| Eksen | Yukarıdaki Yön ile aynı | Son döndürmenin ekseni, yoksa Y ekseni (ya da seçilen kenar) |
| Açı (°) | 0'dan büyük, 360'a kadar. 360, kopyaları çevre boyunca eşit aralıklarla dizer; daha az ise açıya yayar | 360 |
| Sayı | 1'den 1000'e kadar, özgün dahil | 6 |
| Yönü ters çevir | Kapalı / açık | Kapalı |

## Ayna

| Ayar | Seçenekler | Varsayılan |
|---|---|---|
| Ayna | Gövdenin tamamı (şimdiye kadar oluşturulduğu gibi) ya da seçilen özellikler | Seçili özellik, yoksa gövdenin tamamı |
| Ayna düzlemi | Ön, Üst ya da Sağ düzlem; düz bir yüzey | Sağ düzlem ya da eklediğinizde seçilen düz yüzey |

## Köşe yuvarlatma ve pah kırma

Bu sürümde örgü çekirdeği bunları, iki düz yüzey arasındaki düz kenarlarda (dış ya da iç köşeler) tek bir yarıçapla oluşturur. Yuvarlak bir kenar şunu söyler: "Köşe yuvarlatma: bu sürümde yalnızca iki düz yüzey arasındaki düz kenarlar (örgü çekirdeği bunları oluşturur). Eskizde eğri kenarları yuvarlatın ya da pahlayın."; yuvarlatılmış kenarların bir köşede buluştuğu yerlerde gönyeli kesilirler ve özellik şunu uyarır: "Örgü çekirdeğiyle köşe yuvarlatma: yuvarlatılmış kenarların buluştuğu yerlerde gönyeli kesilirler, harmanlanmazlar." Pah kırma türlerinin tümü (eşit mesafe, iki mesafe, mesafe ve açı, **Tarafları çevir** ile) çalışır. Bkz. [Yuvarlatma, pah kırma ve içini boşaltma](topic:fillet-chamfer-shell).

| Ayar | Seçenekler | Varsayılan |
|---|---|---|
| Yarıçap (mm) (Köşe yuvarlatma) | 0'dan büyük | 2 |
| Mesafe (mm) (Pah kırma) | 0'dan büyük, iki yüzeyde de aynı | 1 |
| Kenarlar | Seçilmiş kenarlar; her biri birleştirdiği iki yüzeyle listelenir ("Extrude1 uç yüzeyi × Extrude1 yan"), **Kaldır** ile | Eklediğinizde seçilen kenarlar |

- Düğmeyi seçmeden önce kenarları seçin ({{key:Shift}}+tıklama, birden çok için), ya da hiçbir şey seçmeden seçip sonra kenarlara tıklayın.
- {{ui:Kenarları seç}} (ya da özelliğe çift tıklayın) kenarları değiştirir.
- Kenarlar birleştirdikleri iki yüzeyle tutulur; bu yüzden üstteki boyut değişikliklerinde de korunurlar.

## Kabuk

Örgü çekirdeği oluşturur. Yalnızca düz yüzeyler açılabilir ("Kabuk: bu sürümde yalnızca düz yüzeyleri açar (örgü çekirdeği oluşturur)."); farklı kalınlıktaki duvarlar henüz yapılmadı. Bkz. [Yuvarlatma, pah kırma ve içini boşaltma](topic:fillet-chamfer-shell).

| Ayar | Seçenekler | Varsayılan |
|---|---|---|
| Duvar (mm) | 0'dan büyük | 2 |
| Duvarlar dışa doğru büyür (yüzeyler içeride kalır) | Kapalı: duvarlar içeri gider. Açık: duvarlar dışarı gider | Kapalı |
| Açık yüzeyler | Kaldırılan yüzeyler, en az bir tane, **Kaldır** ile | Eklediğinizde seçilen yüzeyler |

{{ui:Yüzeyleri seç}}, açık yüzeyleri değiştirir.

## İçe aktarılan katı

Bir STEP, STL, OBJ ya da 3MF dosyası açılarak oluşturulur: kendi geçmişi olmayan, üçgenlerden oluşan bir katı gövde ([Bir STEP dosyasını açma](topic:import-step), [Bir STL, OBJ ya da 3MF açma](topic:open-meshes)). Geldiği dosyayı ve içe aktarmanın onardığı şeyleri gösterir; **Dosyadaki birimler**, **Dosyada yukarı** ve **Şunun için kullan** düzenlenebilir kalır. Kesin çekirdeği olan eski bir sürümle içe aktarılmış bir STEP katısı, geçmişte henüz yapılmadı olarak işaretli kalır; onu üçgenler olarak getirmek için STEP dosyasını yeniden açın.

| Ayar | Seçenekler | Varsayılan |
|---|---|---|
| Dosyada yukarı | Z yukarı (çoğu CAD), Y yukarı | Z yukarı |

Örüntüler ve aynalar içe aktarılan bir katıyı kopyalayabilir, ancak bir köşe yuvarlatmayı, pah kırmayı ya da kabuğu kopyalayamaz.

## Her özelliğin sahip olduğu şeyler

Her özelliğin panelinin altında:

| Düğme | İşlevi |
|---|---|
| {{ui:Bastır}} / {{ui:Bastırmayı kaldır}} | Kapatır ya da açar. Buna ihtiyaç duyan özellikler, kapalıyken oluşturulmaz |
| {{ui:Buraya geri sar}} | Yalnızca bunun üstündeki özellikleri oluşturur. Yeni özellikler geri sarma çubuğuna eklenir |
| {{ui:Yukarı taşı}} / {{ui:Aşağı taşı}} | Yeniden sıralar; kullandığı hiçbir şey altında kalacaksa değil. Aksi halde nedeniyle birlikte soluk gösterilir |
| {{ui:Sil}} | Siler ve (sorulduktan sonra) bunu kullanan her özelliği de siler |
| Ad | Yeniden adlandırır (en fazla 60 karakter) |

Eskizli özellikler de **Eskiz ölçüleri** listeler; bunlar yerinde düzenlenebilir.

## Geçmişteki durumlar

| Durum | Gösterim | Anlamı |
|---|---|---|
| Oluşturuldu | Normal | Her şey yolunda |
| Uyarı | ⚠ | Oluşturuldu, ama kontrol edilecek bir şey var: "Fazla tanımlı: 1 ilişki gerekli değil." ya da "Bundan sonra parçadan hiçbir şey kalmadı." |
| Hata | ⚠ hata, kırmızı | Oluşturulamadı; ileti nedenini söyler |
| Henüz yapılmadı | ⚠ henüz yapılmadı | Başarısız olmuş, bastırılmış ya da geri sarılmış bir özelliğe ihtiyaç duyar ya da bu sürümde bulunmayan kesin bir çekirdek gerektirir ("Süpürme: henüz yapılmadı. …") |
| Bastırıldı | kapalı | Kapatıldı |
| Geri sarıldı | soluk, geri sarma çubuğunun altında | İleri sarana kadar oluşturulmaz |

## Parça ayarları

Hiçbir şey seçili olmayacak şekilde boş alana tıklayın. Sağ panel **Parça**'yı gösterir:

- **Ad**: parçanın adı; dosya adlarında ve çizimin künyesinde kullanılır (en fazla 120 karakter).
- **Eğriler**: aşağıya bakın.

### Eğri çözünürlüğü

Örgü çekirdeği katının kendisini düz facet'lerden oluşturur; bu yüzden görünüm, STL, 3MF, yüzeyli STEP, hacim ve çizim görünümlerinin tümü **Eğriler**'i izler: tam bir turda kaç facet olduğunu.

| Ayar | Tur başına facet | Yuvarlak bir şeklin hacmi |
|---|---|---|
| Kaba (tur başına 32) | 32 | Gerçek değerin yaklaşık %0.64 altında |
| Normal (tur başına 64) | 64 | Yaklaşık %0.16 altında (varsayılan) |
| İnce (tur başına 128) | 128 | Yaklaşık %0.04 altında |
| Çok ince (tur başına 256) | 256 | Yaklaşık %0.01 altında |

Daha ince eğriler daha pürüzsüz dışa aktarmalar ve görünümler, ama daha yavaş yeniden oluşturmalar sağlar. Ayar, parça dosyasına kaydedilir.

## Henüz yapılmadı

Değişken yarıçaplı köşe yuvarlatmalar, yuvarlak kenarlarda köşe yuvarlatmalar ve pahlar, eğri yüzeyleri açan kabuklar, eğri yüzeylerde eğim, süpürme, loft, kaburga, kesin eğri yüzeyli STEP katıları, yeni gövdeler, konikler, bir yüzeye ya da köşe noktasına "kadar" bitişler ve katının yüzey ve kenarlarındaki referanslar, kesin bir çekirdek gerektirir; bu sürümde bulunmayan bir çekirdek. Ayrıca henüz yapılmadı: dişli ve havşalı delikler. Bkz. [Henüz yapılmayanlar](topic:not-built-yet).
