---
title: Koosta oma konfiguratsioonidest variantide pakk
summary: Ehita detaili iga konfiguratsioon või valitud mõned korraga STEP-, IFC- ja DWG-failidena, igaühele eelvaade, parameetrite tabel ja detail ühe teegikirjena koos variantidega.
keywords: variantide pakk, variandid, konfiguratsioonid, detailide perekond, partiieksport, iga suurus, step, ifc, dwg, eelvaade, tabel, csv, json, teek, konfigureerija, tootekonfigureerija, kataloog, kirje json
from: 9a6db99f
---

## Mida sa teed

Anna üle **detaili kõik suurused korraga**: üks STEP-, IFC- ja DWG-fail ning pilt igale konfiguratsioonile, tabel, mis ütleb, mis kumbki on, ja teegikirje, mis paneb kõik ühele lehele.

Kõigepealt vajad detaili **konfiguratsioonidega** (vt [Konfiguratsioonid ja projekteerimistabelid](topic:design-tables)). Konfiguratsioon, mis lülitab elemendi välja, näiteks plaat koos aukude ja ilma aukudeta, saab omaette variandi.

## Sammud

1. Ava detail. Vahekaardil {{ui:Parameetrid}} leia **Konfiguratsioonid**.
2. Klõpsa {{ui:Variantide pakk…}}.
3. Märgi konfiguratsioonid, mida ehitada (kõik on märgitud), ja failid, mida kirjutada: STEP, IFC, DWG, eelvaade ja teegikirje.
4. Klõpsa {{ui:Koosta pakk}}. Olekurida loeb variante, kui neid ehitatakse; sinu detail ei muutu.
5. Üks zip-fail laaditakse alla: `<part> variants.zip`.

## Mis on zip-failis

| Fail | Mis see on |
|---|---|
| `<name>.step` | Konfiguratsioon STEP-tahkisena. |
| `<name>.ifc` | IFC4, üks element ehitatud kehaga ja detaili parameetrid omadustena; väärtus on selle konfiguratsiooni enda. |
| `<name>.dwg` | Eest-, ülalt-, paremalt- ja isomeetrilised vaated joonislehena täismõõdus. |
| `<name>.svg` | Selle isomeetriline joonispilt. |
| `variants.csv`, `variants.json` | Parameetrite tabel: iga variandi id, nimi ja iga parameetri väärtus, elemendid, mille ta välja lülitab, selle failid, maht ja mõõdud. |
| `<part>.item.json` | Detail ühe teegikirjena koos variantidega (vt allpool). |
| `README.txt` | Mis tehti, allpool olevad märkused ja kõik, mida ei ehitatud. |

Failid nimetatakse konfiguratsiooni järgi. Konfiguratsioon, mida ei õnnestu ehitada (element, mida ei saa nende väärtustega teha), jäetakse failidest ja tabelist välja, on loetletud README-s ja teates pärast zip-faili salvestamist; ülejäänud kirjutatakse ikka.

## Hea teada

- **STEP** on täpne, kui sinu versioonis on täpne tuum sisse lülitatud. Ilma selleta on STEP tahkudeks jaotatud (lamedad kolmnurgad) ja README ütleb seda.
- **DWG** on joonisleht, mitte 3D-mudel. Selle jooned tulevad võrgusilmast, nii et kumer serv on palju lühikesi jooni.
- **Teegikirje** sisaldab ühte keha ja ühte jalajälge iga variandi kohta teegi enda telgedes: Z üles, eesmine külg −Y poole ning paigutuspunkt taga all keskel. Plaan on iga variandi piirav ristkülik. Kirje on piiratud 8 MB-ga, nii et väga raske variant muutub oma mõõtudega kastiks ja README ütleb, mitu neid on.
- Detaili aktiivne konfiguratsioon on kirje vaikevariant.
- Pordid (ühenduspunktid torudele ja õhukanalitele) ei seadistata PartCraftist.

## Pane variandid teegilehele

Laadi `<part>.item.json` saidil üles **Teek › Laadi üles**. Vali selle kategooria, litsents ja oma autoriviide, ja see saab teegikirjeks koos variantidega. BimCraftis küsib selle paigutamine, millist varianti, ja **Vaheta** pakub teisi. Leht, kus külastajad valivad valikud, vaatavad 3D-d ja laevad alla variandi, on praegu **personali eelvaade**: see ei ole veel avalik.

## Käsurealt

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` nimetab konfiguratsioonid, `--formats` võtab mis tahes neist: `step`, `ifc`, `dwg`, `preview`; `--no-item` jätab teegikirje välja. See kirjutab kausta, zip-faili või mõlemad ja lõpetab koodiga 1, kui mõnda varianti ei õnnestunud ehitada. Vt [Skriptid ja käsurida](topic:scripts-and-cli).
