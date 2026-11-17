---
title: Sac metal: flanşlar ve açınım
summary: Sac metal parçasını bir eskizden başlatın (düz bir levha ya da bükülmüş bir profil), kalınlığını, büküm yarıçapını ve K faktörünü bir kez ayarlayın, kenarlarından flanşları büküm boşaltmalarıyla yukarı bükün ve kesim için DXF olarak düz açın.
keywords: düz açınım, açma, gelişim, gelişmiş uzunluk, büküm payı, büküm hattı, lazer için dxf, lazer kesim, sac metal, taban flanşı, kenar flanşı, flanş, büküm, büküm yarıçapı, K faktörü, kalınlık, sac kalınlığı, boşaltma, büküm boşaltma, kanal, konsol, muhafaza, bükülmüş sac
from: 144bd0f6
---

:::note
**Bu sürümde henüz yapılmadı.** Sac metal, bu PartCraft sürümünde bulunmayan kesin bir geometri çekirdeği gerektirir: her parçayı ağ çekirdeğiyle oluşturur. [Henüz yapılmayanlar](topic:not-built-yet) ne yapılacağını anlatır. Sayfanın geri kalanı, kesin bir çekirdekle nasıl çalıştığını anlatır.
:::

Sac metal parçaları bir **Taban flanşı** ile başlar. Bu, tüm parça için sacı belirler: **kalınlığını**, **iç büküm yarıçapını** ve **K faktörünü**. Bundan sonraki her **Kenar flanşı** aynı sayılarla bükülür; böylece parça açılabilen tek bir sac olarak kalır. İkisi de **kesin çekirdek** gerektirir (bkz. [Ağ çekirdeği](topic:solid-kernels)).

## Taban flanşıyla başlama

1. Bir eskiz çizin. Düz bir levha için **kapalı bir profil** kullanın (bir dikdörtgen ya da deliklerle birlikte kapalı herhangi bir dış çizgi). Sacın kenar görünümü olarak çizilmiş bir L, U ya da Z için **tek açık bir çizgi zinciri** kullanın.
2. Özellik geçmişinde eskizi seçin.
3. Özellikler grubunda {{ui:Daha fazla}} açın ve {{ui:Taban flanşı}} seçin.

Sağdaki panelde:

- **Kalınlık (mm)** sacın kalınlığıdır.
- **Büküm yarıçapı (mm)** her bükümün iç yarıçapıdır. 0 keskin bir iç köşe verir; dış taraf yine bir kalınlık yarıçapıyla döner.
- **K faktörü**, nötr tabakanın sacın içinde nerede olduğunu söyler: 0 (iç yüzey) ile 0.5 (orta) arasında. Düz açıldığında ne kadar uzun olacağına karar verir. Varsayılan 0.44'tür; atölyeniz ya da malzeme tedarikçiniz kendinizinkini verebilir.
- **Derinlik (mm)**, bükülmüş bir profilin eskiz düzleminden ne kadar uzağa uzandığıdır. Bir levha bunu yok sayar.
- **Bükümlerin dışındaki kalınlık**: açık bir profil sacın bir yüzeyidir. Varsayılan olarak kalınlık ilk bükümün iç tarafına konur; böylece çizdiğiniz çizgiler kanalın dış tarafı olur. İçeri koymak için işaretleyin. Sonuç, hangi uçtan çizdiğinizden bağımsız aynıdır.

Açık bir zincirin her köşesi bir büküm olur. Bükümlerini tutamayacak kadar kısa bir çizgi bunu söyler ve gereken uzunluğu gösterir.

## Kenar flanşı bükme

1. Sacın üst ya da alt yüzeyinin düz bir kenarına tıklayın (ince kenarlar değil, uzun kenarlar).
2. {{ui:Daha fazla}} › {{ui:Kenar flanşı}} seçin. Hiçbir kenar seçilmemişse PartCraft bir tane tıklamanızı bekler; Esc iptal eder.

Flanş, bu kenarın yüzeyinden sacın iç yarıçapı etrafında yukarı bükülür ve sonra düz uzanır. Panelde:

- **Açı (°)**, ne kadar büküldüğüdür: 1 ile 180 arası. 90 kare bir flanştır.
- **Uzunluk (mm)**, bükümden sonraki düz kolu.
- **Ters yönde bük**, flanşı diğer yüzeyden büker (yukarı yerine aşağı).
- **Başlangıçta ofset** ve **Sonda ofset**, flanşı kenarın her iki ucundan kısaltır.
- **Büküm boşaltma**: bir uç ofsetlendiğinde, bükümün orada metali yırtmaması için yanına sacta bir yuva kesilir. **Boşaltma genişliği** yuvanın genişliğini ayarlar; derinliği büküm yarıçapı artı kalınlıktır. Köşenin kesilmeden kalması için **Yok** seçin.

Kenarı daha sonra değiştirmek için panelde {{ui:Seç}} düğmesine basın ve başka birine tıklayın.

:::tip
Kalınlık ve yarıçap için parametreler kullanın (bkz. [Parametreler ve denklemler](topic:parameters)); böylece sac kalınlığı değiştiğinde her flanş bir kerede güncellenir.
:::

## Düz açma

İki panel de **Açınım** ile biter. {{ui:Düze aç}} düğmesine basın:

- Bir önizleme sacı açılmış halde gösterir; her bükümün orta çizgisi kesikli çizilir.
- **Boyut** ve **Alan**, düz boşluğun boyutu ve alanıdır.
- Her büküm yönüyle (taban flanşının eskiz tarafından bakıldığında **yukarı** ya da **aşağı**), açısı ve iç yarıçapıyla listelenir.

Her büküm, içinden geçen sacın nötr tabakasının uzunluğunu alır, **büküm payı**: açı (radyan cinsinden) × (iç yarıçap + K faktörü × kalınlık). Yani 2 mm'lik bir sacın 2 mm yarıçaplı ve K faktörü 0.44 olan 90° bükümü, düz sacı 4.52 mm artırır.

Düz bir levhada delikler, kesikler ve büküm boşaltmaları, gerçekte nerede olduklarında düzde görünür; bunun içinde bir flanştan geçen delikler de vardır.

Birçoğunu kesmek için düz açınımın altındaki {{ui:Sacların üzerine yerleştir…}} düğmesine basın: bkz. [Düz parçaları sacların üzerine yerleştirin](topic:nest-flat-parts). Bükülmüş bir taban flanşı tek bir dikdörtgen olarak açılır: gelişmiş uzunluğu × derinliği, her köşe için bir büküm çizgisiyle.

{{ui:DXF kaydet}}, düz açınımı bir lazer, pres ya da su jeti için milimetre cinsinden kaydeder:

- **OUTLINE** katmanındaki dış çizgi, çizgi, yay ve daire olarak;
- **BEND** katmanındaki büküm çizgileri, kesikli;
- **BEND_NOTES** katmanında her büküm için bir not, örneğin "UP 90° R2".

Bir şeyi değiştirirseniz düz açınım kaybolur; yeni olanı için {{ui:Düze aç}} düğmesine yeniden basın.

:::note
Kesmeden önce K faktörünü atölyenizle kontrol edin: düzün uzunluğu buna bağlıdır ve malzemeye, kalınlığa ve takıma göre değişir.
:::

## İletiler

- **Sac metalin önünde bir taban flanşı olmalı**: bir taban flanşından önce bir kenar flanşı eklenmiş. Onu bir taban flanşının altına taşıyın ya da önce bir taban flanşı ekleyin.
- **Bir kenar flanşı düz bir kenar gerektirir**: flanşlar yalnızca çizgiler boyunca bükülür; eğri kenarlar henüz bunu alamaz.
- **Bu kenar, sacın kalınlığındaki bir yüzeyde değil**: kenar, üst ya da alt olmayan bir yüzeye (örneğin bir deliğin duvarına) ait. Üst ya da alt yüzeyin bir kenarını seçin.
- **Ofsetler kenardan hiçbir şey bırakmıyor**: iki ofset birlikte tüm kenarı ya da daha fazlasını kaplıyor.
- **Bükülmüş bir taban flanşındaki kenar flanşları henüz düz açılamaz**: bir düz levhayla başlayın ve her şeyi kenar flanşlarıyla yukarı bükün; bunlar açılır.
- **Bükülmüş bir taban flanşından sonra yapılan kesimler ve delikler henüz açınımında gösterilmiyor**: bükülmüş bir profilin açınımı yalnızca gelişmiş dikdörtgenidir.
