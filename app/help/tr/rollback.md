---
title: Geçmiş boyunca geri sarma ve ileri alma
summary: Geri sarma çubuğunu bir seferde bir özellik yukarı ve aşağı hareket ettirerek parçanın oluşturulmasını izleyin, geçmişin ortasına özellik ekleyin ve sona geri dönün.
keywords: geri sarma, geri sar, ileri al, geri sarma çubuğu, geçmişte adım adım ilerle, özellik ekle, dondur, geçmiş
from: 9a366cae
---

Geri sarma çubuğu, geçmişin ne kadarının oluşturulacağını belirler. Altındaki özellikler soluk gösterilir ve oluşturulmaz; yeni özellikler çubuğa eklenir.

## Bir seferde bir özellik adım adım ilerleyin

Parça ekrandayken (hiçbir eskiz ya da çizim açık değilken):

| Yap | Sonuç |
|---|---|
| {{key:[}} ya da parça adının yanındaki yukarı ok düğmesi | Çubuk bir özellik yukarı çıkar |
| {{key:]}} ya da aşağı ok düğmesi | Çubuk bir özellik aşağı iner |
| {{key:End}} ya da çubuğu sona getiren düğme | Her özellik yeniden oluşturulur |

Durum çubuğu çubuğun nerede olduğunu söyler, örneğin "Geri sarma çubuğu Sketch1 sonrasında: 2 özellikten 1 tanesi oluşturuldu." Çubuk o yönde daha fazla ilerleyemediğinde düğmeler kapalı olur.

Ayrıca herhangi bir özellikte {{ui:Buraya geri sar}} seçebilir ya da geçmişte **Geri sarma çubuğu · ileri al** öğesine tıklayabilirsiniz.

## Geçmişin ortasına bir özellik ekleyin

1. Çubuk, yeni özelliğin ait olduğu yere gelene kadar çubuğu geri sarın.
2. Özelliği ekleyin: çubuğa eklenir.
3. Geri kalan geçmişi onun üzerine oluşturmak için {{key:End}} tuşuna basın.

Çubuğun her hareketi, {{key:Mod+Z}} ile geri alabileceğiniz bir adımdır. Çubuğun yeri dosyaya kaydedilir; bu yüzden bir parça geri sarılmış olarak gönderilebilir. Komut satırı aracı da onu hareket ettirir: `partcraft rollback part.json` ve `partcraft forward part.json --end`.
