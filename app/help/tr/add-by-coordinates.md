---
title: Koordinatları yazarak eskiz geometrisi ekleyin
summary: Eskiz panelindeki Koordinatlarla ekle özelliğini kullanarak çizgi, merkez çizgisi, dikdörtgen, daire ve noktaları tam konumlarına yalnızca klavyeyle yerleştirin.
keywords: koordinatlar, yazılı girdi, klavye girişi, sayısal giriş, tam konum, x y, mutlak koordinatlar, erişilebilirlik, fare yok
from: 5e6c1656
---

Sayıları biliyorsanız, onları yazmak tıklayıp ölçülendirmekten daha hızlıdır. **Koordinatlarla ekle** bölümü, bir eskiz açık olduğunda sağ panelde bulunur. Ayrıca hiç işaretçi kullanmadan da eskiz oluşturmanızı sağlar.

Koordinatlar milimetre cinsindendir ve eskizin kendi eksenlerindedir: eskize baktığınızda x sağa, y yukarı doğrudur ve (0, 0) başlangıç noktasındadır (çarpı işaretli kırmızı daire).

## Şekil ekleme

1. Bir eskiz açın (bkz. [İlk eskizinizi çizin](topic:sketch-basics)).
2. Sağ panelde **Koordinatlarla ekle** bölümüne kaydırın.
3. **Ekle** kutusundan şekli seçin: Çizgi, Merkez çizgisi, Dikdörtgen, Daire veya Nokta.
4. Kutuları doldurun:

| Şekil | Kutular |
|---|---|
| Çizgi | **Başlangıç x, y** ve **Bitiş x, y** |
| Merkez çizgisi | **Başlangıç x, y** ve **Bitiş x, y** |
| Dikdörtgen | **Köşe x, y** ve **Karşı köşe x, y** |
| Daire | **Merkez x, y** ve **Yarıçap** |
| Nokta | **Konum x, y** |

5. {{ui:Ekle}} düğmesini seçin ya da herhangi bir kutuda {{key:Enter}} tuşuna basın.

Şekil görünür ve durum çubuğu örneğin "Bir dikdörtgen eklendi." yazar. Kutular bir sonraki şekil için boşalır. Her ekleme tek bir geri alma adımıdır.

Bir çifti iki sayı olarak yazın; virgül ya da boşlukla ayırın: `0, 0`, `25 -10` veya `12.5,40`. Negatif sayılar ve ondalıklar kullanılabilir. Yarıçap sıfırdan büyük olmalıdır. Bir değer sayı olarak okunamazsa durum çubuğu şunu söyler: 'Koordinatları "x, y" biçiminde ve sıfırdan büyük bir yarıçap girin.'

## Örnek: yarıklı bir levha dış hattı, yazılarak

1. **Ön düzlem** üzerinde bir eskiz açın.
2. **Ekle**: Dikdörtgen. **Köşe x, y**: `-50, -30`. **Karşı köşe x, y**: `50, 30`. {{key:Enter}}.
3. **Ekle**: Daire. **Merkez x, y**: `-30, 0`. **Yarıçap**: `5`. {{key:Enter}}.
4. **Merkez x, y**: `30, 0`. **Yarıçap**: `5`. {{key:Enter}}.
5. {{ui:Eskizden çık}} seçeneğini, ardından {{ui:Ekstrüzyon}} seçeneğini belirleyin: iki adet 10 mm delikli 100 × 60 bir levha.

## Yazılan geometri yerleştirilir, bağlanmaz

Yazılan koordinatlar geometriyi doğru yere koyar, ancak **ilişki değildir**. Şekiller mavi kalır (tam tanımlı değil) ve sürüklerseniz ya da başka bir ölçüyü değiştirirseniz hareket edebilir:

- yazılan bir dikdörtgen, çizilmiş olan gibi kendi köşe, yatay ve düşey ilişkilerini getirir; ancak hiçbir şey onu başlangıç noktasına bağlamaz;
- yazılan bir çizginin, yatay bir çizgi yazsanız bile, yatay ya da düşey ilişkisi yoktur;
- yazılan bir dairenin merkezi serbesttir.

Eskizi tam tanımlı yapmak için sonradan ölçü ve ilişki ekleyin (bkz. [Eskizi tam tanımlayın](topic:relations-dimensions)). Örneğin bir dikdörtgen köşesi ile başlangıç noktasını seçip {{ui:• Çakışık}} seçeneğini belirleyin ya da daire merkezlerini başlangıç noktasından ölçülendirin.

:::note
İşaretçi olmadan bu kadarını yapabilirsiniz: {{key:Tab}} ve ok tuşlarıyla geçmişteki bir düzlem satırına gidin, seçmek için {{key:Enter}}'a basın, eskiz için {{key:S}}'e basın, buraya şekil ekleyin ve her ölçünün yanındaki **Düzenle** düğmesine ulaşıp {{key:Tab}} ile {{ui:Eskizden çık}} seçeneğine gelin. Geometri seçmek ve bu nedenle ilişki ya da yeni ölçü eklemek bu sürümde hâlâ bir tıklama ya da dokunma gerektirir.
:::

## Sınırlar

- Yaylar henüz yazılarak girilemez. Yay aracıyla çizin ya da bir daire yazıp ilişkileri kullanın.
- Bu kutuda göreli koordinatlar (son noktadan) ya da kutupsal koordinatlar (uzunluk ve açı) yoktur.
- Yazılan geometri mevcut noktalara yapışmaz. Birleşik kalmaları gerekiyorsa aynı koordinatları yazın, ardından aralarına {{ui:• Çakışık}} ilişkisi ekleyin.
