---
title: Analüüsiteek
summary: Loetavate analüüsiskriptide teek skripti tööruumis: mis on igas rühmas, funktsiooni avamine ainult lugemiseks, selle päis meetodi, viidete ja kontrolliga, enda koopia tegemine ja kuidas koopia asendab teegi funktsiooni.
keywords: teek, craftlib, analüüs, elektromagnet, staatiline, modaalne, soojus, topoloogiaoptimeerimine, top88, SIMP, elektromagnetism, elektrostaatika, magnetostaatika, vedelik, võrkboltsmann, LBM, võrk, voksel, tetraeedrid, viited, kontroll, verifitseerimine, koopia, vari
from: bf993859
---

Analüüsiteek on skriptide kogum, kus iga skript on funktsioon, mida saab lugeda algusest lõpuni: kuidas jäikusmaatriks kokku pannakse, kuhu piirtingimused lähevad, milline lahendaja käivitub, kuidas tulemused arvutatakse. Midagi selles ei ole musta kasti taga peidetud; ainult kiired sisemised tsüklid (elemendimaatriksid, hõredad lahendajad, võrgustamine) on sisseehitatud.

## Alusta näitega

Rühm **Näited** sisaldab viit lühikest skripti, mis kasutavad teeki algusest lõpuni. Klõpsa ühele, vajuta {{ui:Ava (ainult lugemiseks)}}, seejärel {{key:F5}}: iga näide tühjendab vaate, näitab tulemust lõuendil ja graafikut alamvaadetes.

| Näide | Mida näitab |
|---|---|
| Konsooltala pinge | Terasvarras mõõtmetega 100 × 10 × 10 mm 100 N otsakoormuse all: von Mises'i pinge deformeerunud vardal ning otsa läbipaine võrreldes talateooriaga neljal elemendisuurusel (joonistatud) |
| MBB-tala topoloogia | Klassikaline 60 × 20 topoloogiaoptimeerimine: disaini kujunemine, vastavuse langemine, lõplik paigutus (94 iteratsiooni, vastavus 203,19) |
| Kondensaatori väli | Kaks 4 mm laiust plaati 1 mm kaugusel: potentsiaal ja väli, mahtuvus servaefektiga võrreldes ideaalse väärtuse ja Palmeri valemiga |
| Kanalivoog | Võrkboltsmanni voog posti ümber kanalis: kiiruseväli ja konvergentsi ajalugu |
| Elektromagnet | C-kujuline raudsüdamik õhupilu ja mähisega: magnetvoo tihedus, pilus väli magnetahela valemi vastu, induktiivsus ja tõmbejõud üle pilu. Läbi käiakse jaotises [Magnetväljad 2-D-s](topic:magnetic-fields-2d) |
| Püsimagnet | Sama süda püsimagnetiga mähise asemel: magneti tööpunkt, pilus väli magnetahela vastu, kui palju voog lekib, tõmbejõud. Jaotises [Magnetväljad 2-D-s](topic:magnetic-fields-2d#permanent-magnets) |

## Rühmad

| Rühm | Funktsioonid | Mida need teevad |
|---|---|---|
| Võrgustamine | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Kastid ja silindrid heksaeedritena, kuubikutena või tetraeedritena; kuubikud või tetraeedrid mis tahes mudelist (detail, keha, laaditud STL); elementide mahud ja kvaliteet; sõlmede valimine tasandil või pinnal |
| Staatiline pinge | `static_voxel`, `static_tet` | Lineaarne staatiline pinge kuubikutel või 10-sõlmelistel tetraeedritel: nihked, pinged, von Mises, reaktsioonid |
| Raamistikud | `frame3d` | 3D-raamistikud talade, postide ja diagonaalide jaoks otsese jäikusmeetodiga: otsavabastused, toed ja vedrud, koormused mööda elemente; nihked, reaktsioonid, elementide otsajõud. DetailCrafti ja BimCrafti {{ui:Ekspordi CraftScriptina}} kirjutab selle jaoks terve mudeli. Analüüsiabi, mitte normikontroll |
| Vibratsioon | `modal_tet` | Omasagedused ja vormikujud |
| Soojus | `heat_steady`, `heat_transient`, `heat_system` | Püsiv ja muutuv soojusjuhtivus fikseeritud temperatuuride, soojussisendi, soojusallika, voo ja konvektsiooniga |
| Topoloogiaoptimeerimine | `top88`, `top99`, `topopt3d` | Avaldatud 88- ja 99-realised 2-D koodid ning sama meetod 3-D-s kuubikutel |
| Elektromagnetism | `poisson2d`, `magnetostatic2d` | 2-D elektrostaatika (potentsiaal, väli, mahtuvus, laeng) ja magnetostaatika (vektorpotentsiaal, magnetvoo tihedus, püsimagnetid) |
| Vedeliku voog | `lbm2d`, `lbm3d` | Võrkboltsmanni voog: 2-D kirjutatud välja skripti sisse, 3-D PartCrafti enda voo tuumikul |

Iga funktsiooni päis annab täpsed argumendid. Ühikud on PartCrafti uuringute omad, kui päis ei ütle teisiti: millimeetrid, newtonid, megapaskalid, tonnid kuupmillimeetri kohta tiheduse jaoks, vatid ja kelvinid soojuse jaoks. Elektromagnetilised ja võrkboltsmanni funktsioonid töötavad mis tahes ühtlastes ühikutes; nende päised ütlevad, kuidas.

## Kuidas teek on kontrollitud

Iga funktsiooni päis lõpeb **kontrolliga**: väikese juhtumiga, mille vastus on teada. PartCrafti testid käivitavad kõik need, ja kui PartCraftil on sama töö jaoks oma uuring, võrreldakse skripti vastust selle uuringuga samal võrgul:

- konsooli otsa läbipaine talateooria vastu (kuubikutega 0,2 % piires, tetraeedritega 0,05 %) ning **Simulatsiooni** tööruumi lahendajate vastu samal võrgul (samad mitme numbri täpsusega);
- konsooli esimene sagedus talateooria vastu (0,24 % madalam, nagu lühikese tala puhul oodatav) ja **Simulatsiooni** modaallahendaja vastu;
- soojus: kuumutatud tasapinnaline sein täpselt, väike keha jahtumas nagu soojusmahu valem ütleb, plaadi temperatuur kustumas nagu teooria ütleb;
- topoloogiaoptimeerimine: `top88` taastab artikli 94 iteratsiooni ja vastavuse 203,1925 (ning 218,8032 tiheduse filtriga); `topopt3d` lõpeb samal vastavusel nagu **Generatiivne** tööruum samade seadetega;
- kondensaatori mahtuvus ja pika solenoidi väli nende õpikuväärtuste vastu, elektromagneti pilu väli magnetahela valemi vastu ning püsimagnetid ümmargusel magnetil õhus ja raudse hoidjaga suletud magnetiga võrreldes;
- kanalivoog täpse parabooli profiili vastu.

## Loe funktsiooni

1. Ava skriptipaneeli **Teek** vahekaart.
2. Klõpsa funktsioonile. Selle päis näitab: mida see arvutab, meetodit, ühikuid, eeldusi ja piire, **viiteid** (raamat või artikkel, võrrandinumbritega) ning **kontrolli** — väikest juhtumit teadaoleva vastusega, mida PartCrafti enda testid käivitavad.
3. {{ui:Ava (ainult lugemiseks)}} avab terve skripti vahekaardil katkendliku äärisega. Seda saab käivitada, valida ja käivitada osi, aga mitte muuta.

## Muuda üht

Vajuta {{ui:Tee koopia}} (või **Tee muutmiseks koopia** ainult lugemiseks vahekaardi kohal). Koopia on skript su detailis sama nimega, nii et see salvestatakse koos detailiga, ja **iga selle funktsiooni kutse kasutab nüüd sinu koopiat** — redaktor ütleb seda skripti kohal. Anna koopiale uus nimi, et mõlemad alles jääksid.

## Kasuta seda

Kutsu teegi funktsiooni mis tahes skriptist nime järgi, nagu sisseehitatud funktsiooni:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Tulemused tulevad tagasi väärtustena tööruumis; näidatud graafikud ja väljad ilmuvad vaates ja alamvaadetes.

Avatud detaili staatiline analüüs võtab näiteks mõne rea:

```
v = voxel_mesh(part(), 2);                   % 2 mm kuubikud
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % hoia alumine
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N allapoole ülemisel
r = static_voxel(v, 210000, 0.3, bc);       % teras
```

`r` hoiab nihkeid, pingeid ja reaktsioone; von Mises'i pinge joonistatakse deformeerunud detailile. Kõverate detailide puhul kasuta `tet_mesh` ja `static_tet`, mis oskavad koormata ja hoida ka terveid pindu (`face_nodes`).

:::note
Teegi funktsioonid on kirjutatud CraftScriptis ja Lua skript kutsub neid läbi `cs` nagu sisseehitatud funktsioone: `cs.static_tet(t, 200000, 0.3, bc)` (vt [Lua skriptid](topic:craftscript-lua)). Iga funktsioon lahendab ühe materjali ja ühe koormusjuhu; päised loetlevad, mida muu ei kata.
:::
