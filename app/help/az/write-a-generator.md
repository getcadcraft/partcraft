---
title: Generator yazmaq
summary: Generator — girişlərini elan edən şərh sətirləri olan CraftScript, Lua və ya Python skriptidir. Girişlərin formaya necə çevrildiyi, skriptin nə qoymalı olduğu (gövdə, vərəq, problemlər), kiçik tam nümunə və skriptinizi generator kimi necə açmaq.
keywords: generator, yazmaq, skript, craftscript, başlıq, giriş, @input, @generator, gövdə, vərəq, problemlər, to_body, mfg_check, məlumat vərəqi, nümunə, qəfəs, field
from: ed8a5ed8
---

Generator — yuxarıda bir neçə şərh sətiri olan adi skriptdir ([CraftScript](topic:craftscript), Lua və ya Python). PartCraft şərhləri oxuyur və formanı yaradır; skriptiniz girişləri artıq təyin olunmuş dəyişənlər kimi oxuyur.

## Başlıq

Bunları şərh sətirlərinə yazın (CraftScript-də `%`, Lua-da `--`, Python-da `#`):

```
% @generator İstilik dəyişdiricisi
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Kütləvi axın"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Səth"
% @input solid: = true
% @input note: = "text"
```

Giriş `ad: vahid = defolt` şəklindədir, ardınca istəyə görə `[min .. max]` diapazonu (rəqəmlər onun içində saxlanılır), seçimlər siyahısı `{a, b, c}` və dırnaqda etiket gəlir. Vahid formadan üçün yalnız etiketdir: **dəyər həmin vahiddə gəlir**, ona görə SI-yə çevirmək istəyən skript çevirməlidir; `to_si(value, 'kg/s', 'kg/s')` isə vahidin düşündüyünüz mənanı verdiyini yoxlayır. Ad hərflərdən, rəqəmlərdən və alt xətdən ibarətdir; `body`, `sheet` və `problems` ayrılmışdır.

## Skriptin qoyduqları

| Dəyişən | Nədir |
|---|---|
| `body` | **Tələb olunur.** Səth şəbəkəsi, adətən `[body, info] = to_body(field, h)`-dən. İşləmə bitəndə təmir olunur və yoxlanılır. |
| `sheet` | İstəyə bağlı. Hər sahəsi ədəd və ya mətn, ya da `value`, `unit`, `ref` və `note` olan struktur. Məlumat vərəqinə çevrilir. |
| `problems` | İstəyə bağlı. `mfg_check(field, 'sls', struct(), h)`-dən `problems` hüceyrəsi və ya öz yazılarınız. Yoxlamalara və Problemlər siyahısına gedir. |

## Tam kiçik nümunə

```
% Divarlı boş kub.
% @generator Boş kub
% @input side: mm = 12 [4 .. 40] "Tərəf"
% @input wall: mm = 1.5 [0.5 .. 5] "Divar"
% @input h: mm = 0.5 [0.25 .. 2] "Voksel ölçüsü"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'şəbəkədən');
```

Bu, qapalı kub yaradır və yoxlama daxili bağlı boşluğu toz prosesi üçün xəta kimi göstərir. Voksel ölçüsü `h` ən incə istədiyiniz divarın ən çox üçdə biri olsun: təxminən üç vokseldən az olduqda divar etibarlı olmur.

## Fildlər

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (profildən fırlanma cismi), `tpms` (gyroid, Schwarz P və almaz səthləri, hüceyrə ölçüsü və divarı detalın boyunca dəyişə bilən), `lattice` və `lattice_beams`, `along` (yol boyunca yumru kanal), məntiqi əməliyyatlar `field_union`, `field_intersect`, `field_subtract`, hamar `field_blend`, habelə `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` nöqtələrdə işarəli məsafəni verir (daxildə mənfi), `field_voxel` həlledicilər üçün vokselləri verir. [Fildlər](topic:fields) onların nə olduğunu izah edir.

Bilmək faydalı olan məhdudiyyətlər: təbəqə divarı hüceyrənin təxminən dörddə birindən qalındırsa, kanalları bağlayır; üç vokseldən incə element sıxıla bilər; `along` yumru konusları birləşdirir, ona görə radius tez dəyişdikdə şişkinlik qalır (profil üçün `field_revolve` istifadə edin).

## Skripti generator kimi açın

{{ui:Mühəndis}} iş sahəsində {{ui:Aç}} klikləyin və faylı seçin. `@generator` və ya `@input` sətiri olmayan skript rədd edilir: təyin ediləcək heç nə olmazdı. Generator bu brauzerdə saxlanılır (20-yə qədər) və {{ui:Çıxar}} onu silir. Ondan başlanan gövdə skriptin surətini daşıyır, ona görə detal ondan asılı deyil.

Fayl bir neçə generator da saxlaya bilər: JSON paketi `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
