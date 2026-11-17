---
title: Psaní generátoru
summary: Generátor je běžný skript CraftScript, Lua nebo Python s řádky komentářů, které deklarují jeho vstupy. Jak se vstupy stanou formulářem, co musí skript po sobě zanechat (body, sheet, problems), malý úplný příklad a jak otevřít skript jako generátor.
keywords: generátor, psaní, skript, craftscript, hlavička, vstup, @input, @generator, body, sheet, problems, to_body, mfg_check, datový list, příklad, mřížka, pole
from: ed8a5ed8
---

Generátor je běžný skript ([CraftScript](topic:craftscript), Lua nebo Python) s několika řádky komentářů na začátku. PartCraft čte komentáře a vytvoří z nich formulář; váš skript čte vstupy jako proměnné, které jsou již nastaveny.

## Hlavička

Vložte tyto řádky do komentářů (`%` v CraftScriptu, `--` v Lua, `#` v Pythonu):

```
% @generator Výměník tepla
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Hmotnostní tok"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Povrch"
% @input solid: = true
% @input note: = "text"
```

Vstup má tvar `name: unit = default`, případně následuje rozsah `[min .. max]` (čísla jsou v něm uzavřena), seznam voleb `{a, b, c}` a popisek v uvozovkách. Jednotka je jen popisek pro formulář: **hodnota přichází v této jednotce**, takže skript, který chce SI, ji převede, a `to_si(value, 'kg/s', 'kg/s')` zároveň ověří, že jednotka znamená to, co si myslíte. Název se skládá z písmen, číslic a podtržítka; `body`, `sheet` a `problems` jsou rezervované.

## Co skript zanechá

| Proměnná | Co to je |
|---|---|
| `body` | **Povinné.** Povrchová síť, obvykle z `[body, info] = to_body(field, h)`. Při ukončení běhu je opravena a zkontrolována. |
| `sheet` | Volitelné. Struktura: každé pole je číslo nebo text, nebo struktura s `value`, `unit`, `ref` a `note`. Stane se datovým listem. |
| `problems` | Volitelné. Buňka `problems` z `mfg_check(field, 'sls', struct(), h)`, nebo vaše vlastní položky. Předají se kontrolám a do seznamu problémů. |

## Úplný malý příklad

```
% Dutá krychle se stěnou.
% @generator Dutá krychle
% @input side: mm = 12 [4 .. 40] "Strana"
% @input wall: mm = 1.5 [0.5 .. 5] "Stěna"
% @input h: mm = 0.5 [0.25 .. 2] "Velikost voxelu"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'of the mesh');
```

Vytvoří uzavřenou krabici a kontrola hlásí její uzavřené vnitřní prostory jako chybu pro práškový proces. Velikost voxelu `h` nastavte nejvýše na třetinu nejtenčí stěny, kterou chcete: pod zhruba tři voxely není stěna spolehlivá.

## Pole

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (těleso rotace z profilu), `tpms` (plochy gyroid, Schwarz P a diamond, s velikostí buňky a stěnou, které se mohou měnit napříč dílem), `lattice` a `lattice_beams`, `along` (kruhový kanál podél dráhy), booleovské operace `field_union`, `field_intersect`, `field_subtract`, hladké `field_blend` a `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` dá znaménkovou vzdálenost v bodech (záporná uvnitř), `field_voxel` dá voxely pro řešiče. [Pole](topic:fields) vysvětluje, co jsou.

Limity, které stojí za zmínku: list, jehož stěna je silnější než zhruba čtvrtina buňky, uzavře kanály; prvek tenčí než zhruba tři voxely se může zúžit; `along` spojuje kuželové úseky, takže rychle se měnící poloměr zanechá vyboulení (pro profil použijte `field_revolve`).

## Otevření skriptu jako generátoru

V pracovním prostoru {{ui:Inženýr}} klikněte na {{ui:Otevřít}} a vyberte soubor. Skript bez řádku `@generator` nebo `@input` je odmítnut: nebylo by co nastavit. Generátor se uchovává v tomto prohlížeči (až 20) a {{ui:Odebrat}} ho odstraní. Těleso vytvořené z něj nese kopii skriptu, takže díl na něm nezávisí.

Soubor může obsahovat i více generátorů: JSON balíček `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
