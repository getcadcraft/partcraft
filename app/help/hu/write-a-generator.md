---
title: Generátor írása
summary: A generátor egy CraftScript, Lua vagy Python szkript, amelynek megjegyzéssorai deklarálják a bemeneteit. Leírja, hogyan lesznek a bemenetekből űrlap, mit kell a szkriptnek létrehoznia (body, sheet, problems), tartalmaz egy kis teljes példát, és megmutatja, hogyan nyissa meg a szkriptet generátorként.
keywords: generátor, írás, szkript, craftscript, fejléc, bemenet, @input, @generator, test, body, sheet, problems, to_body, mfg_check, adatlap, példa, lattice, mező
from: ed8a5ed8
---

A generátor egy szokásos szkript ([CraftScript](topic:craftscript), Lua vagy Python) néhány megjegyzéssorral a tetején. A PartCraft beolvassa a megjegyzéseket, és létrehozza az űrlapot; a szkript a bemeneteket már beállított változóként olvassa.

## A fejléc

Ezeket megjegyzéssorokba írja (`%` a CraftScriptben, `--` a Luában, `#` a Pythonban):

```
% @generator Hőcserélő
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Tömegáram"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Felület"
% @input solid: = true
% @input note: = "text"
```

A bemenet a `name: unit = default` alakú, majd opcionálisan megadható egy tartomány `[min .. max]` (a számok ebben a tartományban maradnak), egy választási lista `{a, b, c}` és egy címke idézőjelben. A mértékegység csak címke az űrlapon: **az érték ebben a mértékegységben érkezik**, ezért ha a szkript SI-egységet szeretne, át kell alakítania. A `to_si(value, 'kg/s', 'kg/s')` hívás is ellenőrzi, hogy a mértékegység azt jelenti-e, amit gondol. A név betűkből, számjegyekből és aláhúzásból áll; a `body`, a `sheet` és a `problems` foglalt.

## Amit a szkript létrehoz

| Változó | Mit tartalmaz |
|---|---|
| `body` | **Kötelező.** Felületháló, általában a `[body, info] = to_body(field, h)` hívásból. A futás végén javításon és ellenőrzésen megy keresztül. |
| `sheet` | Opcionális. Struktúra: minden mező szám vagy szöveg, vagy egy struktúra `value`, `unit`, `ref` és `note` mezőkkel. Ebből lesz az adatlap. |
| `problems` | Opcionális. A `mfg_check(field, 'sls', struct(), h)` hívás `problems` cellája, vagy saját bejegyzések. Ezek az ellenőrzésekbe és a problémalistába kerülnek. |

## Egy teljes, kis példa

```
% Egy üreges kocka fallal.
% @generator Üreges kocka
% @input side: mm = 12 [4 .. 40] "Oldal"
% @input wall: mm = 1.5 [0.5 .. 5] "Fal"
% @input h: mm = 0.5 [0.25 .. 2] "Voxelméret"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'a háló szerint');
```

Ez egy zárt dobozt hoz létre, és az ellenőrzés a belső zárt részt hibaként jelzi porágyas eljáráshoz. Úgy állítsa be a `h` voxelméretet, hogy legfeljebb a legvékonyabb kívánt fal harmada legyen: három voxelnél kevesebb esetén a fal nem megbízható.

## Mezők

A `field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (forgástest egy profilból), `tpms` (giroid, Schwarz P- és gyémántfelületek, cellamérettel és falvastagsággal, amelyek az alkatrészen belül változhatnak), `lattice` és `lattice_beams`, `along` (kerek csatorna egy pálya mentén), a logikai műveletek: `field_union`, `field_intersect`, `field_subtract`, a sima `field_blend`, valamint a `field_offset`, `field_shell`, `field_move`, `field_rotate` és `field_scale`. A `sample(f, points)` a pontokban adja meg az előjeles távolságot (negatív a belsejében), a `field_voxel` pedig voxeleket ad a megoldóknak. A [Mezők](topic:fields) magyarázza, mik ezek.

Érdemes ismerni a korlátokat: ha a lemezszerű fal a cella mintegy negyedénél vastagabb, lezárja a csatornákat; a három voxelnél vékonyabb elem összeszorulhat; az `along` kerek kúpokat illeszt össze, ezért a gyorsan változó sugár kidudorodást hagy (profilhoz használja a `field_revolve`-ot).

## A szkript megnyitása generátorként

A {{ui:Engineer}} munkaterületen kattintson a {{ui:Open}} gombra, majd válassza ki a fájlt. A `@generator` vagy `@input` sor nélküli szkriptet a rendszer elutasítja: nem lenne mit beállítani. A generátor ebben a böngészőben marad meg (legfeljebb 20), és a {{ui:Remove}} törli. Az ebből indított test a szkript másolatát tartalmazza, így az alkatrész nem függ tőle.

Egy fájl több generátort is tartalmazhat: ilyen a JSON-csomag `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
