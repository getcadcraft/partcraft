---
title: Lua ile betikler
summary: Betik çalışma alanı betiklerini Lua 5.4'te yazın: yerleşik fonksiyonların cs tablosu, değer olarak dizilerle indeksleme ve aritmetik, paylaşılan ws çalışma alanı, sonuçları yazdırma ve gösterme ve kapalı olan özellikler.
keywords: Lua, Lua 5.4, betik, dil, cs tablosu, ws, çalışma alanı, userdata, tensör, dizi, matris, yazdır, göster, korumalı alan
from: 82c668b3
---

Lua, [Betik çalışma alanı](topic:craftscript) için ikinci dildir. Düzenleyicinin üstündeki dil kutusundan **Lua**'yı seçin (bir `.lua` dosyası kendiliğinden Lua'da açılır). Lua ve CraftScript aynı değişkenleri ve aynı yerleşik fonksiyonları paylaşır; bu yüzden bir Lua betiği, bir CraftScript betiğinin ürettiklerini kullanabilir ve tersi de geçerlidir.

## Temeller

```
-- her yerleşik fonksiyon cs tablosunda
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- 1 tabanlı, CraftScript gibi
print(K(1, 1), #K)             -- bir öğe; öğe sayısı

-- çalışma alanı: her betiğin gördüğü aynı değişkenler
ws.total = K(1, 1) * 2
print(ws.total)

-- bir fonksiyondan birden çok sonuç
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<ad>(…)` herhangi bir yerleşik fonksiyonu çağırır ve ilk sonucunu döndürür; `cs.call(ad, n, …)` `n` sonuç döndürür.
- `cs.tensor({1, 2, 3})` bir satır, `cs.tensor({{1, 2}, {3, 4}})` bir matris yapar.
- Diziler, seyrek matrisler, örgüler ve alanlar yöntemleri olan değerlerdir: `t(i, j)` ya da `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (devrik), `t:totable()`. `+ - * / ^` CraftScript'te ne anlama geliyorsa aynısını ifade eder (`*` matris çarpımıdır); `t:times(u)` öğe öğe çarpar.
- 1×1 bir dizi olan bir sayı, düz bir Lua sayısı olarak gelir.
- `ws.name` paylaşılan çalışma alanını okur ve yazar. Betiğinizin geride bıraktığı genel değişkenler de betik bittiğinde oraya düşer.
- `print(…)` konsola yazar; `cs.show(f)`, `cs.plot(y)` ve diğer gösterme fonksiyonları CraftScript'teki gibi çalışır.

## Analiz kütüphanesini çağırın

Analiz kütüphanesinin fonksiyonlarına (Kütüphane sekmesi) ve parçanızın kendi betiklerinin tanımladığı CraftScript fonksiyonlarına da `cs` üzerinden ulaşılır:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- iki çıktı
```

Bunlar betik başlamadan önce bulunur, bu yüzden adı betiğin içine yazın: `cs.static_tet(` ya da `cs.call('static_tet', …)`. Betik çalışırken oluşturulan bir ad yalnızca yerleşik fonksiyonlara ulaşır. `cs.struct({ … })` ile kurulan bir yapı bir CraftScript yapısıdır; bunların bir Lua listesi (`{ cs.struct(…), … }`) bir hücredir ve kütüphanenin ayarlarının beklediği budur. Bir kütüphane fonksiyonunun içinde bir şey ters giderse, ileti fonksiyonu ve satırını adlandırır ve sizi onu çağıran satırınıza yönlendirir.

## Kapalı olanlar

Betikler dosyalara, ağa ya da sayfaya erişemez: `io`, `os` (saat hariç), `require`, `dofile`, `loadfile` ve `debug` kaldırılmıştır. Verileri getirmek için Betik çalışma alanındaki Aç komutunu ve değişkenleri kullanın. Adım bütçesi ve Durdur, CraftScript'teki gibi çalışır.
