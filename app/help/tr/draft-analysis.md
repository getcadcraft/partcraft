---
title: Kalıplama ve döküm için eğim denetimi
summary: Parçayı, bir kalıbın çekme yönüne göre eğim açısıyla renklendirin; hangi yüzeylerin kolayca çıktığını, hangilerinin daha fazla eğime ihtiyaç duyduğunu ve hangilerinin kalıbın diğer yarısından çıktığını, her birinin yüzey alanındaki payıyla birlikte görün.
keywords: eğim analizi, eğim, konik, kalıp, mold, basınçlı döküm, enjeksiyon kalıplama, çekme yönü, ayırma hattı, geri kesim, kalıptan çıkarma, eğimi denetle
from: 6a106f83
---

Kalıpta, basınçlı kalıpta ya da kum dökümle üretilen parçalar **eğim** gerektirir: parçanın kayarak çıkabilmesi için hafifçe eğilmiş duvarlar. **Eğim analizi** her yüzeyi, kalıbın açıldığı yönden (**çekme**) ne kadar uzaklaştığına göre renklendirir.

## Açın

1. Tasarım çalışma alanında {{ui:Views}} seçeneğini açın ve {{ui:Draft analysis}} seçeneğini seçin.
2. **Çekme** ayarını yapın: kalıbın açıldığı yön, X, Y ya da Z ekseninde iki yönden biri ya da **Seçilmiş bir yüze dik**: {{ui:Pick a face}} düğmesine basın ve parçanın düz bir yüzeyine tıklayın.
3. **En az eğim**'i derece cinsinden ayarlayın: sürecinizin ihtiyaç duyduğu en az eğim (çoğu zaman 1° ile 3°).

Parça şu şekilde renklendirilir:

| Renk | Anlamı |
|---|---|
| Yeşil: **Pozitif eğim** | Çekme yönüne en az minimum kadar eğimli: kalıbın bu yarısından kolayca çıkar |
| Okr: **Eğim gerekli** | Her iki yönde de minimum içinde, örneğin dikey bir duvar: buraya eğim ekleyin |
| Kırmızı: **Negatif eğim** | Çekme yönünden en az minimum kadar uzaklaşmış: kalıbın diğer yarısından çıkar ya da parça bir yarıdan çıkacaksa bir geri kesimdir |

Her sınıfın parçanın yüzey alanındaki payı yanında gösterilir. **Çekme yönünü ters çevir** kalıbın diğer yarısından bakar: yeşil ve kırmızı yer değiştirir.

Eğri yüzeyler nokta nokta değerlendirilir; bu yüzden çekme yönüne dik uzanan bir silindir, yanlarında eğim gerektiren bir bant gösterir.

Renkler, parçayı değiştirdikçe onu izler. {{key:Esc}} ya da {{ui:Close}} analizi kapatır; parçaya hiçbir şey kaydedilmez.

:::tip
Eğim eklemek için, okr renkli yüzeylerde {{ui:Draft}} özelliğini kullanın (bkz. [Süpürme, loft ve eğim](topic:sweep-loft-draft)), sonra yeniden denetleyin.
:::
