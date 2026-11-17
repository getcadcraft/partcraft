---
title: Takviyeler ve köşe levhaları
summary: Tek bir çizgi olarak çizilmiş bir takviye ile parçayı güçlendirin: çizgiden duvarlara kadar, eskiz düzlemi boyunca ayarlanmış bir kalınlıkta, seçtiğiniz tarafta dolar.
keywords: takviye, köşe levhası, ağ, takviye elemanı, çapraz, braket, köşe desteği, ince duvar, güçlendirmek
from: 5c218881
---

:::note
**Bu sürümde henüz yapılmadı.** Takviye, bu sürümde olmayan tam bir geometri çekirdeği gerektirir: PartCraft her parçayı ağ çekirdeğiyle oluşturur. [Henüz yapılmayanlar](topic:not-built-yet) ne yapılacağını anlatır. Bu sayfanın geri kalanı, takviyenin tam bir çekirdekle nasıl çalıştığını anlatır.
:::

Bir **takviye** (ya da köşe levhası), bir parçayı sertleştiren ince bir duvardır; örneğin bir L braketin köşesindeki üçgen gibi. Yalnızca serbest kenarını çizersiniz: PartCraft, o çizgi ile duvarlar arasındaki boşluğu doldurur. **Tam çekirdek** gerektirir (bkz. [Ağ çekirdeği](topic:solid-kernels)).

## Takviye ekleyin

1. Takviyenin gideceği yerin ortasından geçen bir düzlem oluşturun (40 derinliğindeki bir L braket için, eskizinin 20 önünde bir düzlem: bkz. [Referans düzlemleri, eksenleri ve noktaları](topic:reference-geometry)).
2. Bu düzlem üzerinde duvardan duvara **tek bir çizgi** çizin — ya da eğilmiş bir takviye kenarı için uç uca birkaç çizgi. Çizgi duvarlara kadar uzanmayabilir: uçları, duvarlarla buluşana kadar uzatılır.
3. Eskizi seçin ve {{ui:Daha fazla}} › {{ui:Takviye}} seçin.

Takviye, çizgiden duvarlara doğru, parçanın ortasına bakan tarafta dolar; böylece bir köşe levhası iç köşeye oturur. Bu taraf açıksa ve diğer taraf kapalıysa, PartCraft onu sizin için çevirir ve bunu söyler.

## Ayarlar

- **Kalınlık (mm)** takviyenin eskiz düzlemi boyunca kalınlığıdır. Bir parametreyle yönlendirilebilir.
- **Kalınlık** (altındaki seçim): **Eskiz düzleminin ortasında**, **Düzlemin önünde** (normali boyunca) ya da **Düzlemin arkasında**.
- **Ters çevir** çizginin diğer tarafını doldurur.

## İletiler

- **Bu tarafta takviyenin kenarı gövdeyle hiç buluşmaz** — o taraftaki boşlukta hiçbir şey kapanmaz: **Ters çevir**'i işaretleyin ya da kaldırın, ya da çizgiyi duvarların sınırladığı bir yere taşıyın.
- **Bir takviyenin eskizinde tek bir açık doğru zinciri olmalıdır** — eskizde kapalı bir şekil, bir yay ya da bir spline var ya da doğrular uç uca birleşmiyor.
- **Takviyenin kenarı orada gövdenin içinden geçer** — çizgi katının içinde yer alır; duvarlar arasındaki açık alanda çizin.
