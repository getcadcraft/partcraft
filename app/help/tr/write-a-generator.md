---
title: Üretici yazma
summary: Bir üretici, girdilerini bildiren yorum satırları olan bir CraftScript, Lua ya da Python betiğidir. Girdilerin nasıl bir forma dönüştüğü, betiğin geriye neyi bırakması gerektiği (gövde, sayfa, sorunlar), küçük ve eksiksiz bir örnek ve betiğinizi üretici olarak nasıl açacağınız.
keywords: üretici, yazma, betik, craftscript, başlık, girdi, @input, @generator, gövde, sayfa, sorunlar, to_body, mfg_check, veri sayfası, örnek, kafes, alan
from: ed8a5ed8
---

Bir üretici, başında birkaç yorum satırı bulunan olağan bir betiktir ([CraftScript](topic:craftscript), Lua ya da Python). PartCraft yorum satırlarını okur ve formu oluşturur; betiğiniz girdileri, zaten ayarlanmış değişkenler olarak okur.

## Başlık

Bunları yorum satırlarına yazın (CraftScript'te `%`, Lua'da `--`, Python'da `#`):

```
% @generator Isı eşanjörü
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Kütlesel debi"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Yüzey"
% @input solid: = true
% @input note: = "text"
```

Bir girdi `name: unit = default` biçimindedir; ardından isteğe bağlı olarak bir aralık `[min .. max]` (sayılar bunun içinde tutulur), bir seçenek listesi `{a, b, c}` ve tırnak içinde bir etiket gelebilir. Birim yalnızca form için bir etikettir: **değer bu birimde gelir**. Bu yüzden SI birimi isteyen bir betik dönüştürme yapmalıdır; `to_si(value, 'kg/s', 'kg/s')` ise birimin sizin düşündüğünüz anlama geldiğini de denetler. Ad; harf, rakam ve alt çizgiden oluşur. `body`, `sheet` ve `problems` ayrılmıştır.

## Betiğin bıraktıkları

| Değişken | Ne |
|---|---|
| `body` | **Zorunlu.** Bir yüzey örgüsü; genellikle `[body, info] = to_body(field, h)` ile üretilir. Çalışma bittiğinde onarılır ve denetlenir. |
| `sheet` | İsteğe bağlı. Bir yapı (struct): her alan bir sayı ya da metin olabilir, ya da `value`, `unit`, `ref` ve `note` alanlarına sahip bir yapı olabilir. Veri sayfasına dönüşür. |
| `problems` | İsteğe bağlı. `mfg_check(field, 'sls', struct(), h)` çağrısından gelen `problems` hücresi ya da kendi girdileriniz. Bunlar denetimlere ve Sorunlar listesine gider. |

## Eksiksiz küçük bir örnek

```
% Duvarlı içi boş bir küp.
% @generator İçi boş küp
% @input side: mm = 12 [4 .. 40] "Kenar"
% @input wall: mm = 1.5 [0.5 .. 5] "Duvar"
% @input h: mm = 0.5 [0.25 .. 2] "Voksel boyutu"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'of the mesh');
```

Kapalı bir kutu üretir; denetim, toz işlemi için kapalı iç kısmını hata olarak bildirir. Voksel boyutu `h`, istediğiniz en ince duvarın üçte birinden fazla olmasın: yaklaşık üç vokselin altındaki bir duvar güvenilir değildir.

## Alanlar

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (bir profilden dönel katı), `tpms` (gyroid, Schwarz P ve elmas yüzeyleri; hücre boyutu ve duvar parça boyunca değişebilir), `lattice` ve `lattice_beams`, `along` (bir yol boyunca yuvarlak kanal), boolean işlemleri `field_union`, `field_intersect`, `field_subtract`, düzgün `field_blend`, ve `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` noktalarda işaretli uzaklığı verir (içeride negatif); `field_voxel` çözücüler için vokselleri verir. [Alanlar](topic:fields) bunların ne olduğunu açıklar.

Bilinmesi yararlı sınırlar: bir levha duvarı, hücrenin yaklaşık dörtte birinden kalınsa kanalları kapatır; yaklaşık üç vokselden ince bir özellik sıkışabilir; `along` yuvarlak koniler birleştirir, bu yüzden yarıçap hızlı değişirse bir şişkinlik kalır (bir profil için `field_revolve` kullanın).

## Betiğinizi üretici olarak açın

{{ui:Engineer}} çalışma alanında {{ui:Open}} düğmesine tıklayın ve dosyayı seçin. `@generator` ya da `@input` satırı olmayan bir betik reddedilir: ayarlanacak bir şey olmaz. Üretici bu tarayıcıda saklanır (en çok 20 tane) ve {{ui:Remove}} onu siler. Ondan başlatılan bir gövde betiğin bir kopyasını taşır, böylece parça ona bağlı kalmaz.

Bir dosya birden çok üretici de içerebilir: `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}` biçiminde bir JSON paketi.
