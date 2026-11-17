---
title: Düz parçaları saclara yerleştirme
summary: Düz parçaları plakalara ya da bir rulo üzerine, PartCraft'ın bulabildiği en az fireyle yerleştirin; verdiğiniz aralıktan asla daha yakın olmadan. Yerleşimi lazer, plazma, su jeti ya da router için DXF olarak kaydedin.
keywords: yerleştirme, yerleştir, sac, plaka, rulo, lazer, plazma, su jeti, router, kesim, verim, malzeme kullanımı, hurda, fire, aralık, kerf, lif yönü, haddeleme yönü, dxf, açınım, dış hatlar
from: 8dcce1a6
---

**Yerleştirme** (nesting), birçok düz parçayı sacın üzerine, sacta en az malzeme artacak şekilde yerleştirir. PartCraft parçaları birer birer yerleştirir; her birini, sacın kullanılan uzunluğunun en kısa kalacağı yere koyar, birkaç sırayı dener ve birkaç saniyede sonuçlanır, en iyisini tutar. Parçalar birbirinin deliklerine ve bir L ya da U'nun içindeki boşluğa oturabilir.

## Açın

- {{ui:Dışa aktar}} › {{ui:Düz parçaları sacların üzerine yerleştir…}} komutu, parçanın açınımıyla açar; bir montajda ise her sac metal parçanın açınımıyla, kopya sayısı kadar parçayla açar.
- Bir sac metal parçada, açınımın altındaki {{ui:Düze aç}} ve ardından {{ui:Sacların üzerine yerleştir…}} komutlarını kullanın.
- {{ui:DXF'ten dış hatlar ekle…}} komutu, bir DXF dosyasındaki her kapalı dış hattı parça olarak ekler: CadCraft'tan DXF olarak kaydedilmiş bir çizim ya da kesim makinenizin kendi yazılımından bir dosya. Bir dış hattın içindeki dış hat, onda bir delik olur. Uç uca birleşen çizgiler ve yaylar tek bir dış hat sayılır. İnç, santimetre ya da metre cinsindeki dosyalar milimetreye çevrilir.

:::note
Sac metali düzleştirmek için tam bir geometri çekirdeği gerekir (bkz. [Sac metal](topic:sheet-metal)). DXF dosyasından gelen dış hatlar her zaman çalışır.
:::

## Ayarlayın

Her parça için **kaç adet** gerektiğini ve **lif yönünü** girin: {{ui:Herhangi bir yön}}, tek yönde ilerlemesi gereken fırçalanmış ya da haddelenmiş sac için {{ui:Sac boyunca (çizildiği gibi)}}, ya da {{ui:Sacın enine}}.

**Saclar** altında:

- **Stok**: belirli uzunlukta ve genişlikte {{ui:Plakalar}} (ve kaç tane olduğu; 0 = gerektiği kadar) ya da gerekli uzunlukta, belirli genişlikte {{ui:Bir rulo}}.
- **Kenar payı**, sacın her kenarında boş bırakılır (kelepçeler için ya da düzensiz bir kenar için).
- **Parçalar arası boşluk**, iki kesim çizgisi arasındaki en küçük mesafedir: en az kesicinizin kerf'i kadar, artı malzemenin gerektirdiği kadar.
- **Döndürmeler**: bir parçanın döndürülebileceği açılar; varsayılan olarak her 90°. Az döndürme daha hızlı çalışır; çok döndürme sacı daha iyi kullanabilir.
- **Parçalar ters çevrilebilir** seçeneği bir parçanın baş aşağı yerleştirilmesine izin verir. Sac metal için kapalı tutun: ters çevrilmiş bir açınım diğer yöne bükülür.

{{ui:Yerleştir}} düğmesine basın. Önizlemede her sac görünür; bilgilerde kaç plaka (ya da rulonun ne kadarı) kullanıldığı ve parçaların malzemenin ne kadarını kapladığı yazar. Sığmayan her şey adıyla belirtilir.

## Kaydedin

{{ui:DXF kaydet}} yerleşimi bir DXF (R12, milimetre) olarak yazar; her sac bir öncekinin altına gelecek şekilde sıralanır: sac dış hatları SHEET katmanında, parçalar PARTS katmanında (yaylar yay olarak korunur), her parçanın adı LABELS katmanında.

:::tip
Birkaç farklı parçayı karıştırmak, genellikle aynı parçadan çok sayıda kopya yerleştirmekten daha iyi yerleşir: küçük parçalar büyüklerin arasındaki boşlukları doldurur.
:::

## Sacları kesin (G-code)

**Dışa aktar › Yerleştirilmiş sacları G-code'a** komutu, yerleştirilmiş bir DXF'i (bu uygulamadan ya da CadCraft'taki Cabinets eklentisinin saclarından) okur ve seçtiğiniz post işlemciden her sac için bir program üretir: önce delikler ve kesikler, sonra dış hatlar; her kesim, takımın yarıçapı kadar parçanın dışından, sacı delip 1 mm daha geçecek şekilde yapılır; isterseniz köprülerle. Post listesi, yerleşik post işlemcilerle Manufacture çalışmanızın kendi post işlemcilerinden oluşur. Çalıştırmadan önce her programı bir simülatörde kontrol edin: delme ve cepler yapılmaz.

## Denetleyin

PartCraft her yerleşimi, aradığı ızgara üzerinde değil, gerçek şekiller üzerinde yeniden denetler: hiçbir iki parça aralıktan daha yakın değil, hiçbir şey kenar paylarında değil. Kesimi planlamaz: giriş (lead-in) çizgileri, kesim sırası, ortak kenarların bir kez kesilmesi ve artan sacın korunması kesici yazılımınızın işidir. Kesmeden önce DXF'i orada kontrol edin.
