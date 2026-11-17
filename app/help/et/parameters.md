---
title: Detaili juhtimine parameetritega
summary: Nimeta olulised mõõdud (laius, paksus, polditi suurus), seo mis tahes tunnuse number või visandi mõõt nendega märgi = abil ja muuda kogu detaili ühest tabelist.
keywords: parameetrid, kus kasutatud, kasutab, globaalsed muutujad, muutujad, võrrandid, disaini kavatsus, juhtivad mõõtmed, link, avaldis, valem, nimeta mõõt, seotud väärtused
from: 58c646ea
---

Parameeter on nimetatud arv, näiteks `width = 120` või `margin = bolt * 1.5`. Seo sügavus, augu läbimõõt, mustri arv või visandi mõõt sellega, ja parameetri muutmine muudab kõiki neid ühe sammuga. Nii hoiad detaili disaini kavatsuse detailis, mitte oma peas.

## Parameetrite lisamine

1. Klõpsa paremas paneelis vahekaarti {{ui:Parameetrid}}.
2. Jaotises **Muutujad** kirjuta kasti „nimi“ nimi, näiteks `width`.
3. Kirjuta väärtus järgmisse kasti, näiteks `120`, ja vajuta {{key:Enter}} (või klõpsa {{ui:Lisa}}).

Väärtus võib olla arv või avaldis teistest parameetritest: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. Veerg **Väärtus** näitab, mis see välja tuleb. Nimi algab tähega või `_`-ga ning sisaldab ainult tähti, numbreid ja `_`; funktsioonide ja ühikute nimed (`sin`, `mm`, `pi`) keeldutakse, samuti tsükkel nagu `a = b` koos `b = a`-ga.

## Arvu sidumine parameetriga

1. Klõpsa ajaloos tunnusel, näiteks „Extrude1“. Selle seaded kuvatakse vahekaardil {{ui:Omadused}}.
2. Kirjuta arvukasti, näiteks **Sügavus (mm)**, märk `=` ja avaldis: `=thick` või `=width / 4`.
3. Vajuta {{key:Enter}}.

Kast näitab nüüd tulemust ja sildi kõrval ilmub nupp **ƒ**. Vajuta selle peale, et näha võrrandit. Visandi mõõdud töötavad samamoodi, nii tunnuse loendis **Visandi mõõdud** kui ka avatud visandi mõõdukastis (topeltklõps mõõdul, kirjuta `=width`, vajuta {{key:Enter}}).

Arve, mida saab siduda: väljapressimise sügavus, pööramise nurk, augu läbimõõt, sügavus ja vastuursimise mõõdud, mustri arv, samm ja nurk, ümarduse raadius, faasi kaugus, koore seinapaksus, iga visandi mõõt ning uuemate tunnuste mõõdud (teine sügavus, kaldenurk, vastuurd, referentstasandi kaugus, tõmbenurk ja teised).

## Parameetri muutmine

Vahekaardil {{ui:Parameetrid}} kirjuta uus väärtus või avaldis veergu **Avaldis** ja vajuta {{key:Enter}}. Kõik sellega seotud muutub ja detail ehitatakse uuesti ühe sammuna: {{key:Mod+Z}} võtab selle tagasi.

Arvu muutmiseks teisest otsast vt [Võrrandid mõlemas suunas](topic:equations-two-way).

## Kus parameetrit kasutatakse

Iga parameetri all vahekaardil {{ui:Parameetrid}} ütleb rida, mis seda kasutab:

- arvud, mida see juhib, näiteks **Extrude1 sügavus** või **Sketch1 D2 (kaugus)**. Klõpsa ühel, et valida selle tunnus ja näha selle omadusi;
- arvud, mida see juhib **läbi** teiste parameetrite, näiteks **Hole1 läbimõõt (läbi h, d)**, kui `d = h + 2` ja `h = w / 2`;
- **parameetrid**, mille avaldised seda kasutavad, **konfiguratsioonid**, mis seda seavad, ja **skriptid**, mis seda loevad (vt [Kirjuta ja käivita skripte](topic:craftscript)).

„Pole veel kasutusel.“ tähendab, et seda ei kasuta miski: võid selle kustutada küsimata.

## Eraldamine, ümbernimetamine, kustutamine

- **Arvu eraldamine:** klõpsa selle nupul **ƒ** või {{ui:Eralda}} nimekirjas **Võrrandid**. See jääb oma praeguse väärtuse juurde ja ükski parameeter seda enam ei muuda.
- **Parameetri ümbernimetamine:** kirjuta uus nimi selle kasti **Nimi**. Iga avaldis, mis seda kasutab, kirjutatakse ümber.
- **Parameetri kustutamine:** klõpsa selle rea × peale. Kui miski seda kasutab, küsib PartCraft, kas kõigepealt kirjutada selle praegune väärtus nendesse avaldistesse.
- **Tunnuse kustutamine** eemaldab selle arvude võrrandid; olekuriba ütleb, millised.

:::note
Parameetrid salvestatakse failis `.partcraft.json` (failiversioon 3). Detail ilma parameetriteta salvestatakse täpselt nagu varem.
:::

## Avaldised

| Kirjuta | Tähendab |
|---|---|
| `120`, `12.5`, `1e3` | arv (millimeetrites või nurga puhul kraadides) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | pikkus teistes ühikutes, teisendatud millimeetriteks |
| `30deg`, `0.5rad` | nurk, teisendatud kraadideks |
| `+ - * / %` ja `^` | aritmeetika; `^` on aste, `-2^2` on −4 |
| `sin cos tan asin acos atan atan2` | trigonomeetria kraadides |
| `sqrt pow exp ln log abs sign` | muud funktsioonid |
| `ceil floor int round(x, digits) min max` | ümardamine ja piirid |
| `if(test, a, b)` koos `< <= > >= == !=` | valik: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Nimed on tõstutundlikud: `Width` ja `width` on kaks parameetrit.

Vaata ka [Konfiguratsioonid ja disainitabelid](topic:design-tables) ja [Skriptid ja käsurida](topic:scripts-and-cli).
