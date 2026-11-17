---
title: Bir çizimi lazere gönderin
summary: Her katmanın ne yapacağını seçin (kes, çizgi çiz, gravürle, doldur, resim), başın hareketlerini önizleyin, GRBL lazer modu G-code'unu kaydedin veya işi çerçeveledikten sonra tarayıcıdan gönderin.
keywords: lazer, lazer kesici, lazer gravür, GRBL, G-code, gravür, doldurma, dithering, resim gravürü, çizgi çizme, kesme, Web Serial, Linux, işi çerçevele, güç, hız, geçiş
from: 327b3c46
---

{{ui:Lazer}} paneli, bir çizimin katmanlarını GRBL çalıştıran bir lazer için bir programa çevirir (çoğu hobi ve küçük atölye diyot ve CO2 denetleyicisi). PartCraft'ta {{ui:Dışa aktar}} › {{ui:Lazer programı…}} seçin, sonra {{ui:DXF'ten dış hatlar ekle…}}: dış hatlar ve delikler CUT katmanına gelir. Sac metal parçalarının düz açınımları (büküm çizgileri BEND katmanında) bu sürümde bulunmayan tam çekirdeği gerektirir. Ayarlar parça veya montaj dosyasına kaydedilir.

:::warning
Her ayarı önce hurdada test edin, lazerinize uygun göz koruyucu takın, varsa kapağı kapalı tutun ve çalışan bir lazeri asla yalnız bırakmayın. Bir katmanın başladığı sayılar yer tutucudur, herhangi bir malzeme için öneri değildir.
:::

## Her katmanın ne yapacağını seçin

Çizimin her katmanı bir satırdır. {{ui:Yapar}} onu **Kes**, **Çizgi çiz**, **Çizgileri gravürle**, **Şekilleri doldur**, **Resmi gravürle** veya **Gönderilmez** olarak ayarlar; ayrıca bir {{ui:Güç %}}, bir {{ui:Hız mm/dk}} ve bir {{ui:Geçiş}} sayısı ile.

- **Doldurma** kapalı şekillerin içini, {{ui:Çizgi aralığı}} kadar aralıklı çizgilerle yakar; {{ui:Açı}}, iki yön veya tek yön ile; lazer açıldığında kafa hızda olsun diye bir taşma payı vardır; çapraz taralama 90° ile ikinci bir geçiş ekler. Deliği olan bir şekil, deliğin yerinde açık kalır.
- **Resmi gravürle** bir resmi noktalara çevirir (Floyd–Steinberg, Atkinson, sıralı veya bir eşikte düz siyah beyaz) ya da *Gri tonlar* ile değişken güce çevirir.
- Sıra: önce resimler ve doldurmalar, sonra çizgi gravürü, sonra çizgiler, sonra kesimler; böylece kesilen parça gravür sırasında kaymaz. Aynı katman içinde yollar **içten dışa** çalışır (bir delik, içinde bulunduğu levhadan önce), en yakını sonra.

## Önizleyin, sonra kaydedin

Önizleme, başın ne yaptığını çizer: yakılan çizgiler renkli, hızlı hareketler gri ve yakılan her şeyin etrafında yeşil bir kutu. Altında boyut, yanma uzunluğu ve bir süre tahmini gösterilir (ivmelenme olmadan; gerçek bir makine daha uzun sürer). {{ui:G-code kaydet…}} GRBL lazer modu G-code'unu yazar: `$32=1`, S değerleriyle `M4` (veya `M3`), `G0` ve `G1` hareketleri, sonunda `M5`. İşin sol alt köşesi X0 Y0'dır, çizimin başlangıç noktasını seçmediğiniz sürece. Makinenizin iş sıfırını orada ayarlayın. G-code, GRBL'in belgelenmiş lazer modunu izler; henüz gerçek bir lazerde denenmedi.

## Tarayıcıdan gönderin

Chrome ve Edge'de {{ui:Bağlan…}} lazerin USB bağlantı noktasını seçmenizi ister. Bir düğmeye basana kadar hiçbir şey bağlanmaz veya gönderilmez. Önce {{ui:İşi çerçevele}} düğmesine basın: kafa, lazer **kapalı** olarak (veya bir işaretçi için ayarladığınız düşük güçte) işin kutusunu izler; böylece nereyi yakacağını görürsünüz. Ancak o zaman {{ui:İşi gönder}} açılır ve bir şeyi değiştirirseniz yeniden kapanır. {{ui:Duraklat}} kafayı tutar, {{ui:Durdur}} de tutar, denetleyiciyi sıfırlar (lazer kapanır) ve `M5` gönderir. Web Serial'in olmadığı yerlerde (Firefox, Safari ve web görünümünde henüz olmadığı için CadCraft Studio) G-code'u kaydedin ve lazerinizin kendi programıyla gönderin.

## Henüz yapılmadı

Diğer denetleyicilerin biçimleri (Ruida, Marlin lazerleri, üretici dosyaları), sekmeler ve giriş ve çıkış çizgileri, kerf ofseti, malzeme kütüphaneleri, döner ve Z eksenleri, kamera hizalaması.
