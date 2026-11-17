---
title: Örüntü ve ayna özellikleri
summary: Özellikleri Doğrusal ile sıra halinde yineleyin, Dairesel ile bir eksen etrafında döndürün ve Ayna ile özellikleri ya da tüm gövdeyi bir düzlem boyunca kopyalayın.
keywords: örüntü, doğrusal örüntü, dairesel örüntü, kutupsal dizi, dizi, ayna, simetrik, özellikleri kopyala, cıvata dairesi, tohum, gövdeyi aynala
from: 702e9edb
---

Örüntüler ve aynalar, daha önce oluşturduğunuz özellikleri kopyalar. Kopyalar geçmişin bir parçasıdır: orijinali değiştirirseniz kopyalar da onu izler.

Neyin kopyalandığı, özelliğin ne yaptığına bağlıdır: bir çıkıntı örüntüsü malzeme ekler, bir kesme ya da delik örüntüsü malzeme çıkarır. Örüntüler yeniden örüntülenebilir ve yeniden aynalanabilir. İçe aktarılmış bir STEP katısı da kopyalanabilir; köşe yuvarlatmaları, pah kırmalar ve kabuklar kopyalanamaz.

## Doğrusal örüntü

1. Geçmişte kopyalanacak özelliği seçin (örneğin bir Delik ya da bir Kesme). Hiçbir şey seçili değilse son katı özellik kullanılır.
2. {{ui:Doğrusal}} seçin. X ekseni boyunca 20 mm aralıklarla üç kopya görünür.
3. Sağ panelde şunları ayarlayın:

| Ayar | Ne yapar | Varsayılan |
|---|---|---|
| **Kopyalanacak özellikler** | Kopyalanacak her özelliği işaretleyin. Yalnızca örüntünün üstündeki özellikler listelenir | Seçili özellik |
| **Yön** | X ekseni, Y ekseni, Z ekseni, önceki bir eskizdeki bir çizgi ya da merkez çizgisi, bir döndürmenin ekseni ya da seçilen bir kenar | X ekseni |
| **Aralık (mm)** | Komşular arasındaki mesafe | 20 |
| **Sayı** | **Orijinal dahil** toplam sayı (1 ile 1000 arası) | 3 |
| **Yönü ters çevir** | Kopyalar diğer yöne gider | Kapalı |

### Bir kenarı yön olarak kullanın

1. Görünümde parçanın düz bir kenarına tıklayın. Sağ panelde **Kenar** yazar ve uzunluğunu gösterir.
2. {{ui:Doğrusal}} seçin: örüntü o kenar boyunca ilerler.

Ya da örüntüyü seçin, bir kenar belirtin ve **Yön** alanında "Seçilen kenar (şimdi seçileni kullan)" seçeneğini belirleyin. Seçilen bir kenar uzayda sabittir: sonraki değişikliklerle birlikte değişmez. Bir eskiz doğrusu ise eskizini izler.

## Dairesel örüntü

1. Kopyalanacak özelliği seçin (örneğin bir diskin kenarına yakın bir delik).
2. {{ui:Dairesel}} seçin. Altı kopya çevrenin tamamında eşit aralıklarla görünür.
3. Ayarlayın:

| Ayar | Ne yapar | Varsayılan |
|---|---|---|
| **Kopyalanacak özellikler** | Doğrusal'daki gibi | Seçili özellik |
| **Eksen** | X, Y ya da Z ekseni, bir eskiz çizgisi, bir döndürmenin ekseni ya da seçilen bir kenar | Varsa son döndürmenin ekseni, yoksa Y ekseni |
| **Açı (°)** | 360 kopyaları çevrenin tamamına eşit dağıtır. Daha küçük bir değer, onları o açıya yayar; ilk ve son kopya uçlarda olur | 360 |
| **Sayı** | Orijinal dahil toplam sayı | 6 |
| **Yönü ters çevir** | Ters yöne döner | Kapalı |

Dünya eksenleri orijinden geçer. Orijine merkezli olmayan bir disk için bir eskiz merkez çizgisi ya da bir döndürmenin ekseni kullanın.

### Örnek: bir flanşın sekiz cıvata deliği

1. Flanşı Y ekseni etrafında döndürün (bkz. [Tornalanmış bir parçayı döndürün](topic:revolve)).
2. Flanşın düz üst yüzeyine eskiz çizin, bir noktayı cıvata dairesi üzerine koyun ve bir Delik oluşturun.
3. Delik seçiliyken {{ui:Dairesel}} seçin. Eksen zaten "Revolve1 ekseni" olarak belirlidir.
4. **Sayı** alanını `8` yapın.

## Ayna

1. Geçmişte aynalanacak özelliği seçin ya da **şu ana kadar oluşturulan tüm gövdeyi** aynalamak için hiçbir şey seçmeyin.
2. {{ui:Ayna}} seçin. **Sağ düzlem** boyunca aynalar.

Tüm gövdeyi bunun yerine parçanın bir yüzeyi boyunca aynalamak için önce o düz yüzeye tıklayın, sonra {{ui:Ayna}} seçin. (Bir yüzeye tıklamak geçmiş seçimini temizler; bu yüzden bu her zaman tüm gövdeyi aynalar.)

Sağ paneldeki ayarlar:

- **Ayna**: **Şu ana kadar oluşturulan tüm gövde** kutusunu işaretleyin ya da işareti kaldırıp kopyalanacak özellikleri işaretleyin.
- **Ayna düzlemi**: Ön düzlem, Üst düzlem, Sağ düzlem, şu an kullandığı yüzey ("Extrude1 özelliğinin bir yüzeyi" ya da "Sabit bir düzlem") ya da "Şimdi seçilen yüzey". Seçili özellikleri bir yüzey boyunca aynalamak için: geçmişte Ayna'yı seçin, görünümde yüzeye tıklayın ve "Şimdi seçilen yüzey" seçeneğini belirleyin.

Tüm gövdeyi bir yüzey boyunca aynalamak parçayı ikiye katlar; örneğin yarım bir braketi tam bir braket yapar.

## İletiler

- "Önce kopyalanacak bir özellik oluşturun." ya da "Önce bir katı oluşturun." Henüz kopyalanacak bir katı yok.
- "Kopyalanacak özellikleri seçin." Tüm **Kopyalanacak özellikler** kutuları temizlendi.
- "Extrude2 kopyalanacak bir katı içermiyor." Bu özellik başarısız oldu ya da bastırıldı.
- "Fillet1 gövdenin kenarlarını ya da duvarlarını değiştirir; kopyalanamaz. Katı oluşturan özellikleri kopyalayın (ekstrüzyonlar, döndürmeler, delikler, içe aktarmalar)." Köşe yuvarlatmalar, pah kırmalar ve kabuklar örüntülenemez ya da aynalanamaz; önce örüntüleyin, sonra köşe yuvarlatın.
- "Aynalanacak bir gövde henüz yok."

:::note
Örüntü kopyaları tek tek atlanamaz ve bir örüntü bir eskiz eğrisini izleyemez. Eskiz örüntüleri ve aynaları da henüz yapılmadı: tekrarlanan eskiz geometrisini elle ya da **Koordinatlarla ekle** ile çizin.
:::
