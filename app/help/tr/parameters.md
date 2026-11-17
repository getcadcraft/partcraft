---
title: Bir parçayı parametrelerle yönetin
summary: Önemli boyutları (genişlik, kalınlık, cıvata boyutu) adlandırın, her özellik numarasını ya da eskiz ölçülendirmesini = ile onlara bağlayın ve tüm parçayı tek bir tablodan değiştirin.
keywords: parametreler, nerede kullanıldı, kullanan, genel değişkenler, değişkenler, denklemler, tasarım amacı, yönlendiren ölçülendirmeler, bağlantı, ifade, formül, bir ölçüyü adlandırma, bağlı değerler
from: 58c646ea
---

Parametre, adlandırılmış bir sayıdır, örneğin `width = 120` ya da `margin = bolt * 1.5`. Bir derinliği, bir delik çapını, bir örüntü sayısını ya da bir eskiz ölçülendirmesini ona bağlayın; parametreyi değiştirdiğinizde hepsi tek adımda değişir. Tasarım amacını kafanızda değil, parçanın içinde tutmanın yolu budur.

## Parametre ekleyin

1. Sağ panelde {{ui:Parametreler}} sekmesine tıklayın.
2. **Değişkenler** altında "ad" kutusuna bir ad yazın, örneğin `width`.
3. Sonraki kutuya değerini yazın, örneğin `120`, sonra {{key:Enter}} tuşuna basın (ya da {{ui:Ekle}}'ye tıklayın).

Bir değer, bir sayı ya da diğer parametrelerin bir ifadesi olabilir: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. **Değer** sütunu neye eşit olduğunu gösterir. Bir ad bir harf ya da `_` ile başlar ve yalnızca harf, rakam ve `_` içerir; fonksiyon ve birim adları (`sin`, `mm`, `pi`) reddedilir, `a = b` ve `b = a` gibi bir döngü de öyle.

## Bir sayıyı bir parametreye bağlayın

1. Geçmişte bir özelliğe tıklayın, örneğin "Extrude1". Ayarları {{ui:Özellikler}} sekmesinde görünür.
2. **Derinlik (mm)** gibi bir sayı kutusunda `=` ve bir ifade yazın: `=thick` ya da `=width / 4`.
3. {{key:Enter}} tuşuna basın.

Kutu artık sonucu gösterir ve etiketinin yanında bir **ƒ** düğmesi belirir. Denklemi görmek için üzerine gelin. Eskiz ölçülendirmeleri de aynı şekilde çalışır: hem bir özelliğin **Eskiz ölçülendirmeleri** listesinde hem de açık bir eskizin ölçülendirme kutusunda (bir ölçülendirmeye çift tıklayın, `=width` yazın, {{key:Enter}} tuşuna basın).

Bağlayabileceğiniz sayılar: ekstrüzyon derinliği, döndürme açısı, delik çapı, derinlik ve havşa boyutları, örüntü sayısı, aralık ve açı, köşe yuvarlatma yarıçapı, pah mesafesi, kabuk duvar kalınlığı, her eskiz ölçülendirmesi ve daha yeni özelliklerin boyutları (ikinci derinlik, konik, havşa, referans düzlemi mesafesi, eğim açısı ve diğerleri).

## Bir parametreyi değiştirin

**Parametreler** sekmesinde, **İfade** sütununa yeni bir değer ya da ifade yazın ve {{key:Enter}} tuşuna basın. Ona bağlı her şey değişir ve parça tek adımda yeniden oluşur: {{key:Mod+Z}} onu geri alır.

Bir sayıyı öteki uçtan değiştirmek için bkz. [Her iki yönde denklemler](topic:equations-two-way).

## Bir parametrenin nerede kullanıldığını görün

**Parametreler** sekmesinde her parametrenin altında, onu neyin kullandığını söyleyen bir satır vardır:

- onun yönlendirdiği sayılar, örneğin **Extrude1 derinlik** ya da **Sketch1 D2 (mesafe)**. Birine tıklayın: özelliğini seçer ve özelliklerini gösterir;
- **diğer parametreler üzerinden** yönlendirdiği sayılar, örneğin `d = h + 2` ve `h = w / 2` olduğunda **Hole1 çapı (h, d üzerinden)**;
- ifadeleri onu kullanan **parametreler**, onu ayarlayan **yapılandırmalar** ve onu okuyan **betikler** (bkz. [Betik yazın ve çalıştırın](topic:craftscript)).

"Henüz kullanılmadı." bir şeyin onu kullanmadığı anlamına gelir: sormadan silebilirsiniz.

## Bağlantıyı kaldırma, yeniden adlandırma, silme

- **Bir sayının bağlantısını kaldırın:** **ƒ** düğmesine tıklayın ya da **Denklemler** listesinde {{ui:Bağlantıyı kaldır}}. Mevcut değerini korur ve artık hiçbir parametre onu değiştirmez.
- **Bir parametreyi yeniden adlandırın:** **Ad** kutusuna yeni bir ad yazın. Onu kullanan her ifade yeniden yazılır.
- **Bir parametreyi silin:** satırındaki × işaretine tıklayın. Bir şey onu kullanıyorsa, PartCraft önce mevcut değerini o ifadelere yazıp yazmayacağını sorar.
- **Bir özelliği silmek** onun sayılarının denklemlerini düşürür; durum çubuğu hangileri olduğunu söyler.

:::note
Parametreler `.partcraft.json` dosyasında saklanır (dosya sürüm 3 olarak). Parametresiz bir parça, daha önce olduğu gibi kaydedilir.
:::

## İfadeler

| Yazın | Anlamı |
|---|---|
| `120`, `12.5`, `1e3` | bir sayı (milimetre ya da bir açı için derece) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | başka birimlerde bir uzunluk, milimetreye çevrilir |
| `30deg`, `0.5rad` | bir açı, dereceye çevrilir |
| `+ - * / %` ve `^` | aritmetik; `^` bir kuvvettir, `-2^2` −4'tür |
| `sin cos tan asin acos atan atan2` | dereceler cinsinden trigonometri |
| `sqrt pow exp ln log abs sign` | diğer fonksiyonlar |
| `ceil floor int round(x, digits) min max` | yuvarlama ve sınırlar |
| `if(test, a, b)` ile `< <= > >= == !=` | bir seçim: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Adlar büyük-küçük harfe duyarlıdır: `Width` ve `width` iki ayrı parametredir.

Ayrıca bkz. [Yapılandırmalar ve tasarım tabloları](topic:design-tables) ve [Betikler ve komut satırı](topic:scripts-and-cli).
