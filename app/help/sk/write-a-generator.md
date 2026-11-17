---
title: Napísanie generátora
summary: Generátor je skript v CraftScript, Lua alebo Python s riadkami komentára, ktoré deklarujú jeho vstupy. Ako sa vstupy zmenia na formulár, čo musí skript zanechať (body, sheet, problems), malý úplný príklad a ako otvoriť skript ako generátor.
keywords: generátor, napísať, skript, craftscript, hlavička, vstup, @input, @generator, body, sheet, problems, to_body, mfg_check, dátový list, príklad, mriežka, pole
from: ed8a5ed8
---

Generátor je bežný skript ([CraftScript](topic:craftscript), Lua alebo Python) s niekoľkými riadkami komentára na začiatku. PartCraft číta komentáre a vytvorí formulár; váš skript číta vstupy ako premenné, ktoré sú už nastavené.

## Hlavička

Tieto riadky zapíšte ako komentár (`%` v CraftScript, `--` v Lua, `#` v Python):

```
% @generator Výmenník tepla
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Hmotnostný prietok"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Povrch"
% @input solid: = true
% @input note: = "text"
```

Vstup má tvar `name: unit = default`, potom voliteľne rozsah `[min .. max]` (čísla sú v ňom zahrnuté), zoznam možností `{a, b, c}` a popis v úvodzovkách. Jednotka je len označenie pre formulár: **hodnota prichádza v tejto jednotke**, takže skript, ktorý chce SI, ju musí previesť, a `to_si(value, 'kg/s', 'kg/s')` tiež overí, že jednotka znamená to, čo si myslíte. Názov tvoria písmená, číslice a podčiarkovník; `body`, `sheet` a `problems` sú vyhradené.

## Čo skript zanechá

| Premenná | Čo |
|---|---|
| `body` | **Povinná.** Povrchová sieť, zvyčajne z `[body, info] = to_body(field, h)`. Na konci behu sa opraví a skontroluje. |
| `sheet` | Voliteľná. Štruktúra: každé pole je číslo alebo text, alebo štruktúra s `value`, `unit`, `ref` a `note`. Stane sa dátovým listom. |
| `problems` | Voliteľná. Bunka `problems` z `mfg_check(field, 'sls', struct(), h)` alebo vaše vlastné položky. Idú do kontrol a do zoznamu problémov. |

## Úplný malý príklad

```
% Dutá kocka so stenou.
% @generator Dutá kocka
% @input side: mm = 12 [4 .. 40] "Strana"
% @input wall: mm = 1.5 [0.5 .. 5] "Stena"
% @input h: mm = 0.5 [0.25 .. 2] "Veľkosť voxelu"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'zo siete');
```

Vytvorí uzavretú škatuľu a kontrola uvedie jej utesnený vnútorný priestor ako chybu pre práškový proces. Nastavte veľkosť voxelu h najviac na tretinu najtenšej steny, ktorú chcete: pod približne tri voxely nie je stena spoľahlivá.

## Polia

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (teleso rotácie z profilu), `tpms` (plochy gyroid, Schwarz P a diamond, s veľkosťou bunky a stenou, ktoré sa môžu meniť po celej súčiastke), `lattice` a `lattice_beams`, `along` (okrúhly kanál pozdĺž dráhy), booleovské operácie `field_union`, `field_intersect`, `field_subtract`, hladké `field_blend` a `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` vracia znamienkovú vzdialenosť v bodoch (záporná vnútri), `field_voxel` vracia voxely pre riešiče. [Polia](topic:fields) vysvetľujú, čo sú.

Obmedzenia, ktoré stojí za to poznať: plechová stena hrubšia než približne štvrtina bunky uzavrie kanály; prvok tenší než približne tri voxely sa môže zúžiť; `along` spája okrúhle kužele, takže polomer, ktorý sa rýchlo mení, zanechá vydutie (pre profil použite `field_revolve`).

## Otvorenie skriptu ako generátora

V pracovnom priestore {{ui:Engineer}} kliknite na {{ui:Open}} a vyberte súbor. Skript bez riadku `@generator` alebo `@input` sa odmietne, lebo nebolo by čo nastaviť. Generátor sa uchováva v tomto prehliadači (až 20) a {{ui:Remove}} ho odstráni. Teleso začaté z neho nesie kópiu skriptu, takže súčiastka na ňom nezávisí.

Súbor môže obsahovať aj viacero generátorov: balík JSON `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
