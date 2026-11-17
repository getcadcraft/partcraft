---
title: Illustrate'te bir kılavuz başlatın
summary: Illustrate çalışma alanı tasarımlarınızdan kılavuzlar oluşturur: görünümler, balonlu ve parça listeli patlatılmış çizgi çizimleri, adım adım talimatlar, animasyonlar ve bir müşterinin CAD olmadan açabileceği 3B dosya. Bir kılavuz kendi başına bir dosyadır.
keywords: illustrate, kılavuz, teknik çizim, dokümantasyon, patlatılmış görünüm, parça listesi, talimatlar, partcraft-manual
from: e447e0ab
---

**Illustrate**, bir tasarımın çevresindeki belgeler için çalışma alanıdır: balonlu ve parça listeli patlatılmış görünümler, kılavuzlar için çizgi çizimleri, adım adım talimatlar, animasyonlar ve bir müşterinin CAD olmadan açabileceği 3B dosya. Araç çubuğunun başındaki {{ui:Çalışma alanı}} seçicisinden {{ui:Illustrate}} seçin.

Bir **kılavuz** kendi başına bir dosyadır (`<name>.partcraft-manual.json`). Her parçanın bir kopyasını, ürün ağacını, parçaların özelliklerini ve nereden geldiklerine dair bir bağlantıyı tutar; böylece tasarım devam ederken kılavuz üzerinde çalışabilirsiniz. Tasarım değiştiğinde, [Tasarımdan güncelleme](topic:illustrate-update) değişiklikleri getirir.

## Bir tane başlatın

{{ui:Kılavuz}} grubunda {{ui:Yeni}} seçeneğine tıklayın, ardından:

- {{ui:Açık parçadan}}: Design'da açık olan parça.
- {{ui:Açık montajdan}}: bir montaj açıkken bunun yerine gösterilir; parçaları, yerleri, parça numaraları, malzemeleri ve patlatılmış görünümleri birlikte gelir.
- {{ui:Bir montaj dosyasından…}}: kaydedilmiş bir `.partcraft-asm.json`; PartCraft önce parçalarını oluşturur.
- {{ui:Başka bir dosyadan…}}: glTF (.glb, .gltf), OBJ, STL ya da 3MF. Dosyanın ağacı ve adları korunur; bir parçanın kopyaları (aynı şeklin iki kez yerleştirilmesi) miktarlı tek bir parça olur. STL ve OBJ dosyaları birimlerini belirtmez, bu yüzden sorulur. STL dosyaları Z yukarı olarak okunur; glTF ve 3MF kendi yönünü belirtir.

Bir kılavuz açıkken Illustrate, kılavuzun kendi parça kopyalarını gösterir; Design'da açık olan parça ya da montaj, Design'a dönülene kadar gizlenir.

## Kaydetme ve açma

{{ui:Kılavuz}} grubundaki {{ui:Kaydet}} (ya da {{key:Mod+S}}) kılavuzu kaydeder; {{ui:Aç}} bir kılavuzu açar. Illustrate'teki her değişiklik, kılavuzun kendi geçmişinde bir adımdır: Illustrate açıkken {{ui:Geri al}} ve {{ui:Yinele}} kılavuz üzerinde işlem yapar.

## Henüz yapılmadı

- STEP dosyaları henüz {{ui:Başka bir dosyadan…}} seçeneğinde açılmıyor. Bunun yerine STEP dosyasını Design'da açın (katı bir gövde olarak gelir: bkz. [STEP dosyası açın](topic:import-step)) ve kılavuzu {{ui:Açık parçadan}} seçeneğiyle başlatın ya da glTF, 3MF, OBJ ya da STL olarak kaydedin.
- ModelCraft ve BimCraft henüz bir modeli doğrudan Illustrate'e aktaramaz: glTF (.glb) olarak kaydedin ve {{ui:Başka bir dosyadan…}} seçeneğini kullanın.

Sonraki: [Görünümler ve görsel stiller](topic:illustrate-views).
