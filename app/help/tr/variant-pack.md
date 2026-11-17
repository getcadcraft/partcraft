---
title: Yapılandırmalarınızdan bir varyant paketi oluşturma
summary: Bir parçanın her yapılandırmasını ya da seçtiğiniz birkaçını tek seferde oluşturun: her biri için STEP, IFC, DWG ve önizleme; parametre tablosu ve varyantlarıyla birlikte tek bir kütüphane öğesi olarak.
keywords: varyant paketi, varyantlar, yapılandırmalar, parça ailesi, toplu dışa aktarma, her boyut, step, ifc, dwg, önizleme, tablo, csv, json, kütüphane, konfigüratör, ürün konfigüratörü, katalog, öğe json
from: 9a6db99f
---

## Ne yapacaksınız

Bir parçanın **her boyutunu tek seferde** teslim edin: her yapılandırma için bir STEP, IFC ve DWG dosyası ile bir resim; her birinin ne olduğunu gösteren bir tablo ve hepsini tek sayfada bir araya getiren bir kütüphane öğesi.

Önce **yapılandırmaları** olan bir parçaya ihtiyacınız var ([Yapılandırmalar ve tasarım tabloları](topic:design-tables) bölümüne bakın). Bir özelliği kapatan bir yapılandırma, örneğin delikli ve deliksiz bir levha, kendi varyantı olur.

## Adımlar

1. Parçayı açın. {{ui:Parametreler}} sekmesinde **Yapılandırmalar**'ı bulun.
2. {{ui:Varyant paketi…}} seçeneğine tıklayın.
3. Oluşturulacak yapılandırmaları (hepsi işaretli gelir) ve yazılacak dosyaları işaretleyin: STEP, IFC, DWG, bir önizleme ve kütüphane öğesi.
4. {{ui:Paketi oluştur}} seçeneğine tıklayın. Durum satırı varyantlar oluşturuldukça sayar; parçanız değişmez.
5. Tek bir zip dosyası indirilir: `<part> variants.zip`.

## Zip dosyasında neler var

| Dosya | Nedir |
|---|---|
| `<name>.step` | Yapılandırma bir STEP katısı olarak. |
| `<name>.ifc` | IFC4, oluşturulmuş gövdeli tek bir öğe; parçanın parametreleri özellik olarak eklenmiş, değer o yapılandırmaya ait. |
| `<name>.dwg` | Ön, üst, sağ ve izometrik görünümler tam boyutta bir çizim sayfası olarak. |
| `<name>.svg` | Bunun izometrik bir çizgi resmi. |
| `variants.csv`, `variants.json` | Parametre tablosu: her varyantın kimliği, adı ve her parametrenin değeri, kapattığı özellikler, dosyaları, hacmi ve boyutu. |
| `<part>.item.json` | Parça, varyantlarıyla birlikte tek bir kütüphane öğesi olarak (aşağıya bakın). |
| `README.txt` | Ne oluşturulduğu, aşağıdaki notlar ve oluşturulamayan her şey. |

Dosyalar yapılandırmanın adıyla adlandırılır. Oluşturulamayan bir yapılandırma (bu değerlerle yapılamayan bir özellik) dosyalarda ve tabloda yer almaz; README'de ve zip kaydedildikten sonra gelen bir iletide listelenir. Diğerleri yine de yazılır.

## Bilmeniz iyi olacaklar

- **STEP**, derlemenizde tam çekirdek açıksa kesindir. Bu olmadan STEP köşelidir (düz üçgenler) ve README bunu söyler.
- **DWG** bir 3B model değil, bir çizim sayfasıdır. Çizgileri örgüden (mesh) gelir; bu yüzden eğri bir kenar birçok kısa çizgi olur.
- **Kütüphane öğesi**, kütüphanenin kendi eksenlerinde, varyant başına bir gövde ve bir taban izi taşır: Z yukarı, ön −Y yönünde ve ekleme noktası altta arkanın orta noktasında. Plan, her varyantın sınırlayıcı dikdörtgenidir. Bir öğe en fazla 8 MB olabilir; bu yüzden çok ağır bir varyant kendi boyutunda bir kutuya dönüşür ve README kaç tane olduğunu söyler.
- Parçanın etkin yapılandırması, öğenin varsayılan varyantı olur.
- Bağlantı noktaları (borular ve kanallar için) PartCraft'tan ayarlanmaz.

## Varyantları bir kütüphane sayfasına koyun

Sitede **Kütüphane › Yükle** yerinden `<part>.item.json` dosyasını yükleyin. Kategorisini, lisansını ve kendi atıf satırınızı seçin; öğe, varyantlarıyla birlikte bir Kütüphane öğesi olur. BimCraft'ta yerleştirirken hangi varyantın kullanılacağı sorulur ve Swap diğerlerini sunar. Ziyaretçilerin seçenekleri seçtiği, 3B görünümü gördüğü ve bir varyant indirdiği sayfa şimdilik **personel önizlemesi**dir: henüz herkese açık değildir.

## Komut satırından

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` yapılandırmaların adlarını verir; `--formats` şunlardan herhangi birini alır: `step`, `ifc`, `dwg`, `preview`; `--no-item` kütüphane öğesini dışarıda bırakır. Bir klasör, bir zip ya da ikisini birden yazar ve bir varyant oluşturulamadığında 1 koduyla çıkar. Bkz. [Betikler ve komut satırı](topic:scripts-and-cli).
