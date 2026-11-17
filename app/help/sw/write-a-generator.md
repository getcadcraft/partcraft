---
title: Andika jenereta
summary: Jenereta ni hati ya CraftScript, Lua au Python yenye mistari ya maoni inayotangaza ingizo zake. Jinsi ingizo zinavyogeuka kuwa fomu, kile hati lazima iache nyuma (mwili, karatasi, matatizo), mfano mdogo kamili, na jinsi ya kufungua hati yako kama jenereta.
keywords: jenereta, andika, hati, script, craftscript, kichwa, header, ingizo, input, @input, @generator, mwili, body, karatasi, sheet, matatizo, problems, to_body, mfg_check, karatasi ya data, mfano, example, kimiani, lattice, uwanja, field
from: ed8a5ed8
---

Jenereta ni hati ya kawaida ([CraftScript](topic:craftscript), Lua au Python) yenye mistari michache ya maoni juu kabisa. PartCraft inasoma maoni hayo na kutengeneza fomu; hati yako inasoma ingizo kama vigeu ambavyo tayari vimewekwa.

## Kichwa

Weka haya kwenye mistari ya maoni (`%` katika CraftScript, `--` katika Lua, `#` katika Python):

```
% @generator Kibadilishaji joto
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Mtiririko wa wingi"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Uso"
% @input solid: = true
% @input note: = "maandishi"
```

Ingizo ni `name: unit = default`, kisha hiari safu `[min .. max]` (namba hukaa ndani yake), orodha ya chaguo `{a, b, c}` na lebo kwenye alama za nukuu. Unit ni lebo tu kwa fomu: **thamani hufika katika unit hiyo**, kwa hiyo hati inayotaka SI lazima ibadilishe, na `to_si(value, 'kg/s', 'kg/s')` pia hukagua kama unit inamaanisha unavyofikiri. Jina ni herufi, tarakimu na underscore; `body`, `sheet` na `problems` tayari vimechukuliwa.

## Kile hati inachoacha

| Kigeu | Nini |
|---|---|
| `body` | **Inahitajika.** Mesh ya uso, kwa kawaida kutoka `[body, info] = to_body(field, h)`. Inarekebishwa na kukaguliwa mwisho wa utekelezaji. |
| `sheet` | Hiari. Struct: kila sehemu ni namba au maandishi, au struct yenye `value`, `unit`, `ref` na `note`. Inakuwa karatasi ya data. |
| `problems` | Hiari. Seli ya `problems` kutoka `mfg_check(field, 'sls', struct(), h)`, au maingizo yako mwenyewe. Yanaenda kwenye ukaguzi na kwenye orodha ya Matatizo. |

## Mfano kamili mdogo

```
% Mchemraba tupu wenye ukuta.
% @generator Mchemraba tupu
% @input side: mm = 12 [4 .. 40] "Upande"
% @input wall: mm = 1.5 [0.5 .. 5] "Ukuta"
% @input h: mm = 0.5 [0.25 .. 2] "Ukubwa wa voxel"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'of the mesh');
```

Hii inatengeneza kisanduku kilichofungwa, na ukaguzi unaripoti ndani yake iliyofungwa kama hitilafu kwa mchakato wa unga. Fanya ukubwa wa voxel `h` usizidi theluthi moja ya ukuta mwembamba zaidi unaotaka: chini ya takriban voxel tatu, ukuta si wa kuaminika.

## Uwanja

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (kigumu cha mzunguko kutoka wasifu), `tpms` (nyuso za gyroid, Schwarz P na diamond, zenye ukubwa wa seli na ukuta vinavyoweza kubadilika kote sehemuni), `lattice` na `lattice_beams`, `along` (mfereji wa duara kando ya njia), shughuli za Boolean `field_union`, `field_intersect`, `field_subtract`, `field_blend` laini, pamoja na `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` inatoa umbali wenye ishara kwenye pointi (hasi ndani), na `field_voxel` inatoa voxel kwa vitatuzi. [Uwanja](topic:fields) unaeleza ni nini.

Mipaka inayostahili kujulikana: ukuta wa karatasi mnene zaidi ya takriban robo ya seli hufunga mifereji; kipengele chembamba kuliko takriban voxel tatu kinaweza kubana; `along` huunganisha koni za duara, kwa hiyo radius inayobadilika haraka huacha uvimbe (tumia `field_revolve` kwa wasifu).

## Fungua hati yako kama jenereta

Katika mazingira ya {{ui:Mhandisi}}, bofya {{ui:Fungua}} kisha uchague faili. Hati isiyo na mstari wa `@generator` au `@input` inakataliwa: hakungekuwa na cha kuweka. Jenereta huhifadhiwa kwenye kivinjari hiki (hadi 20), na {{ui:Ondoa}} huifuta. Mwili uliouanzishwa kutoka kwake hubeba nakala ya hati, kwa hiyo sehemu haitegemei hati hiyo.

Faili pia inaweza kuwa na jenereta kadhaa: bundle ya JSON `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
