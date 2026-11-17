---
title: Konfigurācijas un projektēšanas tabulas
summary: Glabājiet vairākus vienas daļas izmērus un versijas kā nosauktas konfigurācijas, kas saglabātas daļas failā, ar funkcijām ieslēgtām vai izslēgtām katrā; pārslēdziet starp tām ar vienu klikšķi, ievediet tās vai izvediet kā CSV projektēšanas tabulu, vai veidojiet visas no komandrindas.
keywords: projektēšanas tabula, konfigurācijas, konfigurācija, izmēri, detaļu saime, csv, izklājlapa, varianti, tabulas vadīts, detaļu saime, apturēt, apturēts, izslēgt funkciju, iespējas, ar vai bez, konfigurators
from: 17249afb
---

**Konfigurācija** ir viens daļas izmērs: nosaukta vērtību kopa tās parametriem. Daļa glabā savas konfigurācijas savā failā, tāpēc tās ceļo kopā ar to. **Projektēšanas tabula** ir tas pats, kas CSV fails, ar vienu rindu katrai konfigurācijai.

Konfigurācijas iestata **parametrus**, tāpēc vispirms pievienojiet tos (skat. [Vadīt daļu ar parametriem](topic:parameters)). Konfigurācija glabā parametrus, kas ir vienkārši skaitļi; parametri, kas aprēķināti no citiem (piemēram, `area = w * d`), seko paši.

## Saglabāt konfigurāciju

1. Cilnē {{ui:Parametri}} iestatiet parametrus vienam daļas izmēram.
2. Zem **Konfigurācijas** ierakstiet nosaukumu (piemēram, `Liela`) un nospiediet {{ui:Saglabāt pašreizējās vērtības}} vai {{key:Enter}}.

Jaunā konfigurācija tiek atzīmēta kā **aktīva**. Ja vēlāk mainīsiet parametru, tā teiks **aktīva, mainīta kopš**, lai zinātu, ka daļa vairs neatbilst tai.

## Pārslēgt, atjaunināt, pārdēvēt, dzēst

- {{ui:Piemērot}} iestata parametrus uz šīs konfigurācijas vērtībām un pārbūvē daļu.
- {{ui:Atjaunināt}} saglabā pašreizējās vērtības šajā konfigurācijā.
- Lai to pārdēvētu, ierakstiet jauno nosaukumu tās lodziņā un nospiediet {{key:Enter}}.
- {{ui:Dzēst}} noņem konfigurāciju. Parametri paturē savas vērtības.

Katra no šīm darbībām ir viens solis: {{key:Mod+Z}} atgriež atpakaļ. Ja pārdēvējat parametru, katra konfigurācija seko jaunajam nosaukumam; ja izdzēšat konfigurāciju, tā izkrīt no tām.

## Ieslēgt un izslēgt funkcijas konfigurācijā

Konfigurācija arī glabā, kuras funkcijas ir izslēgtas, tāpēc viena daļa var būt versijas **ar** un **bez** kaut kā: montāžas caurumi, fāzējums, uzmava.

1. Izslēdziet funkciju: noklikšķiniet uz tās vēsturē, tad {{ui:Apturēt}} sadaļā {{ui:Rekvizīti}}.
2. Saglabājiet konfigurāciju kā parasti, piemēram, `Bez caurumiem`. Tās rinda uzskaita, ko tā izslēdz.
3. Atkal ieslēdziet funkciju ({{ui:Atcelt apturēšanu}}) un saglabājiet citu konfigurāciju, piemēram, `Ar caurumiem`.

Kad kāda konfigurācija izslēdz funkcijas, konfigurācijas piemērošana izslēdz tās funkcijas un **ieslēdz visas pārējās funkcijas** kopā ar to parametru vērtībām vienā solī. Konfigurācija, kas saglabāta pirms funkciju izslēgšanas jebkurā no tām, tiek uzskatīta par "viss ieslēgts". {{ui:Atjaunināt}} saglabā funkcijas tādas, kādas tās ir tagad, kopā ar vērtībām.

Daļa, kuras konfigurācijas izslēdz funkcijas, tiek saglabāta kā jaunāka faila versija: vecāks PartCraft saka, ka fails ir no jaunākas versijas, nevis atver to bez tām.

:::note
CSV projektēšanas tabula satur tikai parametru vērtības. Tabulas ievietošana pār konfigurāciju maina tās vērtības un saglabā funkcijas, ko tā izslēdz; komandrindas `--table` veido tikai vērtības.
:::

Daļas fails tiek saglabāts ar konfigurācijām un ar to, kura bija aktīva. Daļa atveras ar vērtībām, ar kurām tā tika saglabāta.

## Ievest vai izvest projektēšanas tabulu

Projektēšanas tabula ir CSV fails ar kolonnu katram parametram un rindu katrai konfigurācijai:

```
name,width,thick,bolt
small,100,6,6.6
medium,140,8,8.5
large,200,12,13
```

Pirmā kolonna var saukties `name`, `config` vai `configuration`; katrai citai kolonnai jābūt daļas parametra nosaukumam. Šūnas ir skaitļi, ar vienībām, ja vēlaties (`8in`). Tukša šūna izlaiž šo parametru no rindas.

- {{ui:Importēt CSV}} pievieno katru rindu kā konfigurāciju. Rinda ar esošās konfigurācijas nosaukumu to aizstāj. Importēšana ir viens solis.
- {{ui:Eksportēt CSV}} izraksta konfigurācijas. Ja vēl nav nevienas, tas izraksta vienu rindu ar pašreizējām vērtībām — sākumpunktu izklājlapai.

Konfigurācijas nosaukums, ko izklājlapa nolasītu kā formulu (sākas ar `=`, `+`, `-` vai `@`), tiek rakstīts ar vadošo `'`.

## Visi izmēri vienlaikus

{{ui:Variantu komplekts…}} zem **Konfigurācijas** veido visas konfigurācijas vai izvēlētas dažas kā STEP, IFC, DWG un priekšskatījumu vienā zip failā, ar parametru tabulu: skat. [Veidot variantu komplektu no konfigurācijām](topic:variant-pack).

Komandrindas rīks veido vienu failu katrai CSV projektēšanas tabulas rindai:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Vispirms izvediet konfigurācijas kā CSV, tad nododiet šo failu ar `--table`. Skat. [Skripti un komandrinda](topic:scripts-and-cli). Daļa, kas saglabāta kā skripts, glabā savas konfigurācijas rindā `configs json …`.
