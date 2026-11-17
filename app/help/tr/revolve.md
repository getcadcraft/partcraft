---
title: Tornalanmış bir parçayı döndürün
summary: Bir merkez çizgisinin yanında profilin yarısını çizin, onu yuvarlak bir parçaya döndürün, ekseni ve açıyı seçin ve oluklar için bir döndürme kesmesi kullanın.
keywords: döndürme, döndürülmüş çıkıntı, döndürme kesmesi, tornalanmış parça, torna, mil, eksen, merkez çizgisi, oluk, açı, rev cut
from: 593b6929
---

{{ui:Döndürme}} bir profili bir eksen etrafında döndürür, tıpkı bir torna tezgâhında yapılmış bir parça gibi: miller, kasnaklar, flanşlar, düğmeler. {{ui:Döndürme kesmesi}} (Özellikler grubunun {{ui:Daha fazla}} menüsünde) oluklar ve oyuklar için malzeme kaldırmak üzere bir profili döndürür.

## Basamaklı bir mili döndürün

1. **Ön düzlem** üzerinde eskiz çizin.
2. {{key:N}} tuşuna basarak {{ui:Merkez çizgisi}} seçin. Orijinde başlayın ve sağa doğru düz bir noktaya tıklayın, örneğin 100 mm uzağa. Bu eksendir. Kesik çizgilidir: yapı geometrisi profilin parçası değildir.
3. {{key:L}} tuşuna basarak Çizgi'yi seçin. Merkez çizginin üstünde **yarım** profili tek bir kapalı döngü olarak çizin: merkez çizgide başlayın, yukarı çıkın, bir basamak atlayın ve merkez çizgiye geri inin, sonra başlangıca dönün. Uçları birleşmelidir: döngü kapalı olmalıdır.
4. Yarıçapları (merkez çizginin üstündeki yükseklikleri) ve uzunlukları ölçülendirin. Merkez çizginin 10 üstündeki bir yükseklik 20 çapı verir.
5. {{ui:Çık}} seçin.
6. {{ui:Döndürme}} seçin. Mil, tam bir turla belirir.

Profil eksenin bir tarafında kalmalıdır. Kesişirse: "Profil eksenle kesişiyor. Onu merkez çizginin bir tarafında tutun." Bir profil kenarı eksen üzerinde olabilir.

## Ayarlar

| Ayar | Ne yapar | Varsayılan |
|---|---|---|
| **İşlem** | Çıkıntı (malzeme ekler), Kesme (malzeme kaldırır), Kesişim (örtüşmeyi korur) ya da Yeni gövde | {{ui:Döndürme}} için Çıkıntı, {{ui:Daha fazla}} › {{ui:Döndürme kesmesi}} için Kesme |
| **Açı (°)** | Ne kadar döndürüleceği, 0'ın hemen üstünden 360'a kadar | 360 |
| **Eksen** | İlk merkez çizgisi ya da eskizdeki herhangi bir çizgi ya da merkez çizgisi, "Merkez çizgisi 1 (l1)" ya da "Çizgi 3 (l3)" olarak listelenir | İlk merkez çizgisi |

Kısmi bir açı, eskiz düzleminden tek bir yönde döndürülen bir kama oluşturur.

Eskizde merkez çizgisi yoksa ve **Eksen**'i İlk merkez çizgisi'nde bırakırsanız: "Etrafında döndürmek için eskize bir merkez çizgisi (yapı çizgisi) çizin." Ayrıca profilin katı bir çizgisini eksen olarak da seçebilirsiniz.

## Oluk kesin

1. Mil oluşturulmuşken, **Ön düzlem** üzerinde yeni bir eskiz açın (milin eskizinin olduğu aynı düzlem).
2. Aynı eksen boyunca bir merkez çizgisi çizin: orijinde başlayın ve yatay tutun ki bir H ilişkisi alsın, ya da **Koordinatlarla ekle** ile yazın (örneğin `0, 0` noktasından `100, 0` noktasına). Yeni bir eskiz, başka bir eskizin çizgilerine yapışamaz.
3. Oluğun gideceği milin kenarıyla örtüşen küçük kapalı bir dikdörtgen çizin.
4. {{ui:Çık}} seçin, ardından {{ui:Daha fazla}} › {{ui:Döndürme kesmesi}} seçin.

## Montajlardaki döndürülmüş yüzeyler

Bir döndürmenin, diğer özellikler ve montajların kullanabileceği bir ekseni vardır:

- bir **Dairesel** örüntü, varsayılan olarak son döndürmenin eksenini kullanır (bkz. [Örüntü ve ayna özellikleri](topic:patterns-mirror));
- bir montajda, döndürmelerle yapılmış yüzeyler arasındaki bir birleşim başlangıçta bir **döner** birleşim olur ve **Üzerine ortala** seçeneği "Revolve1 ekseni"ni sunar (bkz. [Montaj oluşturun](topic:build-assembly)).

## Gerçek eğriler ve fasetler

PartCraft bir döndürmeyi ağ çekirdeğiyle oluşturur (durum çubuğu çipi "Ağ çekirdeği" yazar): yuvarlak şekiller düz yüzeylerdir (fasetler), varsayılan olarak tur başına 64 tane ve hacimler gerçek değerin biraz altındadır (64'te yaklaşık 0.16 %). Görünüm, STL, 3MF ve STEP dışa aktarımları bu fasetlerden oluşur: daha pürüzsüz olanlar için **Eğriler**'i (boş bir alana tıklayın, sonra sağ panel) İnce (128) ya da Çok ince (256) yapın. Gerçek silindirler, koniler ve toruslar tam bir çekirdek gerektirir: bu sürümde henüz yapılmadı. Bkz. [Ağ çekirdeği](topic:solid-kernels).
