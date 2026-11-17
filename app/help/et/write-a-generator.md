---
title: Generaatori kirjutamine
summary: Generaator on CraftScript, Lua või Python skript, mille kommentaariread kirjeldavad sisendeid. Kuidas sisendid muutuvad vormiks, mida skript peab maha jätma (keha, leht, probleemid), väike terviklik näide ning kuidas avada oma skript generaatorina.
keywords: generaator, kirjuta, skript, craftscript, päis, sisend, @input, @generator, body, sheet, problems, to_body, mfg_check, andmeleht, näide, võrestik, väli
from: ed8a5ed8
---

Generaator on tavaline skript ([CraftScript](topic:craftscript), Lua või Python) mille algusesse on lisatud mõned kommentaariread. PartCraft loeb kommentaare ja koostab vormi; sinu skript loeb sisendeid muutujatena, mis on juba seatud.

## Päis

Pane need kommentaarireaks (`%` CraftScriptis, `--` Luas, `#` Pythonis):

```
% @generator Soojusvaheti
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Massivool"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Pind"
% @input solid: = true
% @input note: = "text"
```

Sisend on `nimi: ühik = vaikeväärtus`, millele võib lisada vahemiku `[min .. max]` (arvud jäävad selle sisse), valikute loendi `{a, b, c}` ja sildi jutumärkides. Ühik on vormi jaoks ainult silt: **väärtus saabub selles ühikus**, seega skript, mis soovib SI-d, teisendab selle, ning `to_si(value, 'kg/s', 'kg/s')` kontrollib ka seda, et ühik tähendab just seda, mida arvad. Nimi koosneb tähtedest, numbritest ja alakriipsust; `body`, `sheet` ja `problems` on juba hõivatud.

## Mida skript jätab

| Muutuja | Mis |
|---|---|
| `body` | **Nõutav.** Pinnavõrk, tavaliselt `[body, info] = to_body(field, h)` abil. Käivituse lõppedes see parandatakse ja kontrollitakse. |
| `sheet` | Valikuline. Struktuur: iga väli on arv või tekst, või struktuur väljadega `value`, `unit`, `ref` ja `note`. Sellest saab andmeleht. |
| `problems` | Valikuline. Lahter `problems` väljastusest `mfg_check(field, 'sls', struct(), h)` või sinu enda kirjed. Need lähevad kontrollidesse ja probleemide loendisse. |

## Väike terviklik näide

```
% Õõnes kuup seinaga.
% @generator Õõnes kuup
% @input side: mm = 12 [4 .. 40] "Külg"
% @input wall: mm = 1.5 [0.5 .. 5] "Sein"
% @input h: mm = 0.5 [0.25 .. 2] "Voksli suurus"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'of the mesh');
```

See teeb suletud kasti ning kontroll teatab selle suletud sisemusest veana pulberprotsessi jaoks. Tee voksli suurus `h` kuni kolmandik kõige õhema soovitud seina paksusest: alla umbes kolme voksli ei ole sein usaldusväärne.

## Väljad

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (pöördkeha profiilist), `tpms` (güroid-, Schwarz P- ja teemantpinnad, lahtri suuruse ja seinaga, mis võib kogu detailis muutuda), `lattice` ja `lattice_beams`, `along` (ümar kanal mööda teed), loogikatehted `field_union`, `field_intersect`, `field_subtract`, sujuv `field_blend` ning `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` annab punktides märgiga kauguse (sees negatiivne), `field_voxel` annab lahendajatele voksleid. [Väljad](topic:fields) selgitab, mis need on.

Piirangud, mida tasub teada: leheseina paksus, mis on suurem kui umbes veerand lahtrist, sulgeb kanalid; detail, mis on õhem kui umbes kolm voksli, võib kitsenduda; `along` ühendab ümarad koonused, seega kiiresti muutuv raadius jätab paisu (profiili jaoks kasuta `field_revolve`).

## Ava oma skript generaatorina

Tööruumis {{ui:Insener}} klõpsa {{ui:Ava}} ja vali fail. Skript ilma reata `@generator` või `@input` lükatakse tagasi, sest seada pole midagi. Generaator hoitakse selles brauseris (kuni 20) ja {{ui:Eemalda}} kustutab selle. Sellest alustatud keha sisaldab skripti koopiat, nii et detail ei sõltu sellest.

Fail võib sisaldada ka mitut generaatorit: JSON-pakett `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
