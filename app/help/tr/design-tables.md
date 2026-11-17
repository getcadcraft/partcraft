---
title: Yapılandırmalar ve tasarım tabloları
summary: Bir parçanın birden çok boyutunu ve sürümünü, parça dosyasında kaydedilen adlandırılmış yapılandırmalar olarak tutun; her birinde özellikleri açıp kapatın, aralarında tek tıkla geçin, bunları bir CSV tasarım tablosu olarak içe ya da dışa aktarın ya da hepsini komut satırından üretin.
keywords: tasarım tablosu, yapılandırmalar, yapılandırma, boyutlar, parça ailesi, csv, elektronik tablo, varyantlar, tablo güdümlü, parça ailesi, bastır, bastırılmış, bir özelliği kapat, seçenekler, var ya da yok, yapılandırıcı
from: 17249afb
---

Bir **yapılandırma**, parçanın bir boyutudur: parametreleri için adlandırılmış bir değer kümesi. Parça yapılandırmalarını kendi dosyasında tutar, böylece onlarla birlikte taşınır. Bir **tasarım tablosu** ise aynı şeyin CSV dosyasıdır: her yapılandırma için bir satır.

Yapılandırmalar **parametreleri** belirler; bu yüzden önce onları ekleyin (bkz. [Parçayı parametrelerle yönetin](topic:parameters)). Bir yapılandırma düz sayı olan parametreleri saklar; diğerlerinden hesaplanan parametreler (örneğin `area = w * d`) kendiliğinden izler.

## Bir yapılandırma kaydedin

1. {{ui:Parametreler}} sekmesinde, parçanın bir boyutu için parametreleri ayarlayın.
2. **Yapılandırmalar** altında bir ad yazın (örneğin `Büyük`) ve {{ui:Geçerli değerleri kaydet}} ya da {{key:Enter}} tuşuna basın.

Yeni yapılandırma **etkin** olarak işaretlenir. Sonradan bir parametreyi değiştirirseniz **etkin, o zamandan beri değiştirildi** yazar; böylece parçanın artık ona uymadığını bilirsiniz.

## Geçiş yapın, güncelleyin, yeniden adlandırın, silin

- {{ui:Uygula}} parametreleri o yapılandırmanın değerlerine ayarlar ve parçayı yeniden oluşturur.
- {{ui:Güncelle}} geçerli değerleri o yapılandırmaya kaydeder.
- Birini yeniden adlandırmak için yeni adı kutusuna yazın ve {{key:Enter}} tuşuna basın.
- {{ui:Sil}} yapılandırmayı kaldırır. Parametreler değerlerini korur.

Bunların her biri tek bir adımdır: {{key:Mod+Z}} geri döndürür. Bir parametreyi yeniden adlandırırsanız her yapılandırma yeni adı izler; birini silerseniz onların içinden düşer.

## Bir yapılandırmada özellikleri açıp kapatın

Bir yapılandırma ayrıca hangi özelliklerin kapalı olduğunu da tutar; böylece bir parça, bir şeyin **var** ve **yok** olduğu hâllerle de bulunabilir: montaj delikleri, bir pah, bir çıkıntı.

1. Özelliği kapatın: geçmişte tıklayın, sonra {{ui:Özellikler}} içindeki {{ui:Bastır}} düğmesine basın.
2. Yapılandırmayı her zamanki gibi kaydedin, örneğin `Delik yok`. Satırı kapattığı özellikleri listeler.
3. Özelliği yeniden açın ({{ui:Bastırmayı kaldır}}) ve başka bir yapılandırma kaydedin, örneğin `Delikli`.

Herhangi bir yapılandırma bir özelliği kapattığında, bir yapılandırmayı uygulamak o yapılandırmanın özelliklerini kapatır ve **diğer her özelliği açar**; parametre değerleriyle birlikte, tek adımda. Özelliklerden hiçbiri kapatılmadan önce kaydedilmiş bir yapılandırma "hepsi açık" sayılır. {{ui:Güncelle}} özellikleri, şu anda olduğu gibi, değerlerle birlikte kaydeder.

Yapılandırmaları özellik kapatan bir parça, daha yeni bir dosya sürümü olarak kaydedilir: eski bir PartCraft, dosyayı onlarsız açmak yerine dosyanın daha yeni bir sürümden olduğunu söyler.

:::note
CSV tasarım tablosu yalnızca parametre değerlerini taşır. Bir tabloyu bir yapılandırmanın üzerine içe aktarmak, değerlerini değiştirir ve kapattığı özellikleri korur; komut satırındaki `--table` yalnızca değerleri üretir.
:::

Parça dosyası, yapılandırmalarla ve hangisinin etkin olduğuyla birlikte kaydedilir. Parça, kaydedildiği değerlerle açılır.

## Bir tasarım tablosunu içe ya da dışa aktarın

Bir tasarım tablosu, her parametre için bir sütun ve her yapılandırma için bir satır olan bir CSV dosyasıdır:

```
name,width,thick,bolt
small,100,6,6.6
medium,140,8,8.5
large,200,12,13
```

İlk sütun `name`, `config` ya da `configuration` olarak adlandırılabilir; diğer her sütun parçanın bir parametresinin adı olmalıdır. Hücreler sayıdır; isterseniz birimleriyle (`8in`). Boş bir hücre o parametreyi satırdan çıkarır.

- {{ui:CSV içe aktar}} her satırı bir yapılandırma olarak ekler. Mevcut bir yapılandırmanın adını taşıyan bir satır onu değiştirir. İçe aktarma tek adımdır.
- {{ui:CSV dışa aktar}} yapılandırmaları yazar. Henüz hiç yoksa, geçerli değerlerden bir satır yazar; bu, bir elektronik tablo için başlangıç noktasıdır.

Bir elektronik tablonun formül olarak okuyacağı bir yapılandırma adı (`=`, `+`, `-` ya da `@` ile başlayan), başında bir `'` ile yazılır.

## Her boyut bir kerede

{{ui:Varyant paketi…}} **Yapılandırmalar** altında, her yapılandırmayı ya da seçilmiş birkaçını, parametrelerinin bir tablosuyla birlikte tek bir zip içinde STEP, IFC, DWG ve bir önizleme olarak oluşturur: bkz. [Yapılandırmalarınızdan bir varyant paketi oluşturun](topic:variant-pack).

Komut satırı aracı, bir CSV tasarım tablosunun her satırı için bir dosya üretir:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Önce yapılandırmaları CSV olarak dışa aktarın, sonra o dosyayı `--table` ile verin. Bkz. [Betikler ve komut satırı](topic:scripts-and-cli). Bir betik olarak kaydedilmiş bir parça, yapılandırmalarını bir `configs json …` satırında tutar.
