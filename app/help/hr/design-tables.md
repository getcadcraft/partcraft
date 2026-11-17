---
title: Konfiguracije i projektne tablice
summary: Čuvajte nekoliko veličina i verzija jednog dijela kao imenovane konfiguracije spremljene u datoteci dijela, s uključenim ili isključenim značajkama u svakoj, prebacujte se među njima jednim klikom, uvezite ih ili izvezite kao CSV projektnu tablicu ili ih sve izgradite iz naredbenog retka.
keywords: projektna tablica, konfiguracije, konfiguracija, veličine, obitelj dijelova, csv, proračunska tablica, varijante, tablično vođeno, obitelj dijelova, potiskivanje, potisnuto, isključi značajku, opcije, s ili bez, konfigurator
from: 17249afb
---

**Konfiguracija** je jedna veličina dijela: imenovani skup vrijednosti za njegove parametre. Dio čuva svoje konfiguracije u vlastitoj datoteci, pa putuju s njim. **Projektna tablica** je ista stvar kao CSV datoteka, jedan redak po konfiguraciji.

Konfiguracije postavljaju **parametre**, pa ih prvo dodajte (vidi [Upravljanje dijelom pomoću parametara](topic:parameters)). Konfiguracija pohranjuje parametre koji su obični brojevi; parametri izračunati iz drugih (poput `area = w * d`) slijede sami.

## Spremite konfiguraciju

1. Na kartici {{ui:Parametri}} postavite parametre za jednu veličinu dijela.
2. Pod **Konfiguracije** upišite ime (na primjer `Velika`) i pritisnite {{ui:Spremi trenutne vrijednosti}} ili {{key:Enter}}.

Nova konfiguracija označi se kao **aktivna**. Promijenite parametar poslije i piše **aktivna, promijenjena od**, pa znate da dio više ne odgovara konfiguraciji.

## Prebacivanje, ažuriranje, preimenovanje, brisanje

- {{ui:Primijeni}} postavlja parametre na vrijednosti te konfiguracije i ponovno gradi dio.
- {{ui:Ažuriraj}} sprema trenutne vrijednosti u tu konfiguraciju.
- Za preimenovanje upišite novo ime u njezin okvir i pritisnite {{key:Enter}}.
- {{ui:Izbriši}} uklanja konfiguraciju. Parametri zadržavaju svoje vrijednosti.

Svaka od ovih radnji je jedan korak: {{key:Mod+Z}} vraća unatrag. Ako preimenujete parametar, svaka konfiguracija slijedi novo ime; ako izbrišete konfiguraciju, ona ispada iz njih.

## Uključivanje i isključivanje značajki u konfiguraciji

Konfiguracija također pamti koje su značajke isključene, pa jedan dio može imati verzije **s** i **bez** nečega: montažnih rupa, skošenja, izbočine.

1. Isključite značajku: kliknite je u povijesti, pa {{ui:Potisni}} u {{ui:Svojstva}}.
2. Spremite konfiguraciju kao obično, na primjer `Bez rupa`. Njezin redak navodi što isključuje.
3. Ponovno uključite značajku ({{ui:Ukloni potiskivanje}}) i spremite drugu konfiguraciju, na primjer `S rupama`.

Čim bilo koja konfiguracija isključi značajku, primjena konfiguracije isključuje njezine značajke i **uključuje sve ostale značajke**, zajedno s vrijednostima parametara, u jednom koraku. Konfiguracija spremljena prije nego što su značajke bile isključene u bilo kojoj od njih računa se kao „sve uključeno“. {{ui:Ažuriraj}} sprema značajke kakve jesu sada, s vrijednostima.

Dio čije konfiguracije isključuju značajke sprema se kao novija verzija datoteke: stariji PartCraft kaže da je datoteka iz novije verzije umjesto da je otvori bez njih.

:::note
CSV projektna tablica nosi samo vrijednosti parametara. Uvoz tablice preko konfiguracije mijenja njezine vrijednosti i zadržava značajke koje isključuje; `--table` naredbenog retka gradi samo vrijednosti.
:::

Datoteka dijela sprema se s konfiguracijama i s onom koja je bila aktivna. Dio se otvara s vrijednostima s kojima je spremljen.

## Uvezite ili izvezite projektnu tablicu

Projektna tablica je CSV datoteka sa stupcem za svaki parametar i retkom za svaku konfiguraciju:

```
name,width,thick,bolt
mala,100,6,6.6
srednja,140,8,8.5
velika,200,12,13
```

Prvi stupac može se zvati `name`, `config` ili `configuration`; svaki drugi stupac mora biti ime parametra dijela. Ćelije su brojevi, s jedinicama ako želite (`8in`). Prazna ćelija izostavlja taj parametar iz retka.

- {{ui:Uvezi CSV}} dodaje svaki redak kao konfiguraciju. Redak s imenom postojeće konfiguracije zamjenjuje je. Uvoz je jedan korak.
- {{ui:Izvezi CSV}} zapisuje konfiguracije. Kad ih još nema, zapisuje jedan redak trenutnih vrijednosti, kao polazišnu točku za proračunsku tablicu.

Ime konfiguracije koje bi proračunska tablica čitala kao formulu (počinje s `=`, `+`, `-` ili `@`) zapisuje se s vodećim `'`.

## Sve veličine odjednom

{{ui:Paket varijanti…}} pod **Konfiguracije** gradi svaku konfiguraciju, ili odabrane, kao STEP, IFC, DWG i pregled u jednoj zip datoteci, s tablicom njihovih parametara: vidi [Napravite paket varijanti iz svojih konfiguracija](topic:variant-pack).

Alat naredbenog retka gradi jednu datoteku po retku CSV projektne tablice:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Prvo izvezite konfiguracije kao CSV, pa tu datoteku predajte s `--table`. Vidi [Skripte i naredbeni redak](topic:scripts-and-cli). Dio spremljen kao skripta čuva svoje konfiguracije u retku `configs json …`.
