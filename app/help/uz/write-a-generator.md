---
title: Generator yozish
summary: Generator — bu izoh qatorlari bilan boshlanadigan CraftScript, Lua yoki Python skripti. Unda kirishlar qanday shaklga aylanishi, skript nimani qoldirishi kerakligi (tana, varaq, muammolar), kichik toʻliq misol va skriptni generator sifatida qanday ochish koʻrsatilgan.
keywords: generator, yozish, skript, craftscript, sarlavha, kiritish, @input, @generator, tana, varaq, muammolar, to_body, mfg_check, maʼlumotlar varaqi, misol, panjara, maydon
from: ed8a5ed8
---

Generator — bu boshida bir necha izoh qatori boʻlgan oddiy skript ([CraftScript](topic:craftscript), Lua yoki Python). PartCraft izohlarni oʻqiydi va shaklni yaratadi; skriptingiz kirishlarni tayyor oʻzgaruvchilar sifatida oʻqiydi.

## Sarlavha

Bularni izoh qatorlariga yozing (CraftScriptʼda `%`, Luaʼda `--`, Pythonʼda `#`):

```
% @generator Issiqlik almashtirgich
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Massa oqimi"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Sirt"
% @input solid: = true
% @input note: = "text"
```

Kirish `name: unit = default` koʻrinishida yoziladi, soʻngra ixtiyoriy ravishda diapazon `[min .. max]` (sonlar shu oraliqda saqlanadi), tanlovlar roʻyxati `{a, b, c}` va qoʻshtirnoq ichidagi yorliq. Birlik faqat shakl uchun yorliq: **qiymat shu birlikda keladi**, shuning uchun SI ga oʻtkazmoqchi boʻlgan skript uni aylantirishi kerak; `to_si(value, 'kg/s', 'kg/s')` esa birlik siz oʻylagan narsani anglatishini ham tekshiradi. Nom harflar, raqamlar va pastki chiziqdan iborat; `body`, `sheet` va `problems` nomlari band.

## Skript nimani qoldiradi

| Oʻzgaruvchi | Nima |
|---|---|
| `body` | **Majburiy.** Sirt toʻri, odatda `[body, info] = to_body(field, h)` dan. Ish tugaganda u tuzatiladi va tekshiriladi. |
| `sheet` | Ixtiyoriy. Struct: har bir maydon son yoki matn, yoki `value`, `unit`, `ref` va `note` ga ega struct. U maʼlumotlar varaqiga aylanadi. |
| `problems` | Ixtiyoriy. `mfg_check(field, 'sls', struct(), h)` dagi `problems` katakchasi yoki oʻzingizning yozuvlaringiz. Ular tekshiruvlarga va Muammolar roʻyxatiga yuboriladi. |

## Kichik toʻliq misol

```
% Devorli boʻsh kub.
% @generator Boʻsh kub
% @input side: mm = 12 [4 .. 40] "Tomon"
% @input wall: mm = 1.5 [0.5 .. 5] "Devor"
% @input h: mm = 0.5 [0.25 .. 2] "Voksel oʻlchami"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'of the mesh');
```

Bu yopiq quti yaratadi va tekshiruv uning ichki yopiqligini poroshokli jarayon uchun xato sifatida koʻrsatadi. Voksel oʻlchami `h` eng yupqa devoringizning uchdan biridan katta boʻlmasin: taxminan uch vokseldan kichik devor ishonchli emas.

## Maydonlar

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (profildan aylanish jismi), `tpms` (gyroid, Schwarz P va diamond sirtlari, katak oʻlchami va devori detal boʻylab oʻzgarishi mumkin), `lattice` va `lattice_beams`, `along` (yoʻl boʻylab yumaloq kanal), ikkilamchi amallar `field_union`, `field_intersect`, `field_subtract`, silliq `field_blend`, hamda `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` nuqtalardagi masofani beradi (ichkarida manfiy), `field_voxel` yechuvchilar uchun voksellar beradi. [Maydonlar](topic:fields) ular nima ekanini tushuntiradi.

Bilish foydali boʻlgan chegaralar: varaq devori katakning taxminan choragidan qalin boʻlsa, kanallar yopiladi; uch vokseldan yupqa xususiyat qisilib qolishi mumkin; `along` yumaloq konuslarni birlashtiradi, shuning uchun radius tez oʻzgarsa, boʻrtma qoladi (profil uchun `field_revolve` dan foydalaning).

## Skriptni generator sifatida ochish

**Muhandis** ish maydonida {{ui:Open}} ni bosing va faylni tanlang. `@generator` yoki `@input` qatori boʻlmagan skript rad etiladi: sozlanadigan narsa boʻlmaydi. Generator bu brauzerda saqlanadi (20 tagacha) va {{ui:Remove}} uni oʻchiradi. Undan boshlangan tana skriptning nusxasini oladi, shuning uchun detal unga bogʻliq boʻlmaydi.

Bitta fayl bir nechta generatorni ham saqlashi mumkin: JSON toʻplami `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
