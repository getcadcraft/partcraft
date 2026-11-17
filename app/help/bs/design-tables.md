---
title: Konfiguracije i tabele dizajna
summary: Čuvanje više veličina i verzija jednog dijela kao imenovanih konfiguracija u datoteci dijela, s uključenim ili isključenim elementima u svakoj, prebacivanje između njih jednim klikom, uvoz ili izvoz kao CSV tabele dizajna, ili izrada svih iz komandne linije.
keywords: tabela dizajna, konfiguracije, konfiguracija, veličine, porodica dijelova, dijelovi porodice, csv, tabelarni proračun, varijante, upravljano tabelom, isključi, isključeno, isključi element, opcije, sa ili bez, konfigurator
from: 17249afb
---

**Konfiguracija** je jedna veličina dijela: imenovani skup vrijednosti za njegove parametre. Dio čuva svoje konfiguracije u vlastitoj datoteci, pa putuju s njim. **Tabela dizajna** je isto to kao CSV datoteka, jedan red po konfiguraciji.

Konfiguracije postavljaju **parametre**, pa prvo dodaj njih (vidi [Upravljanje dijelom pomoću parametara](topic:parameters)). Konfiguracija čuva parametre koji su obični brojevi; parametri izračunati iz drugih (kao `area = w * d`) prate sami od sebe.

## Sačuvaj konfiguraciju

1. Na kartici {{ui:Parametri}} postavi parametre za jednu veličinu dijela.
2. Pod **Konfiguracije** upiši ime (na primjer `Veliko`) i pritisni {{ui:Spasi trenutne vrijednosti}} ili {{key:Enter}}.

Nova konfiguracija je označena kao **aktivna**. Ako poslije promijeniš parametar, piše **aktivna, promijenjena od tada**, pa znaš da dio više ne odgovara.

## Prebacivanje, ažuriranje, preimenovanje, brisanje

- {{ui:Primijeni}} postavlja parametre na vrijednosti te konfiguracije i ponovo gradi dio.
- {{ui:Ažuriraj}} čuva trenutne vrijednosti u tu konfiguraciju.
- Da preimenuješ jednu, upiši novo ime u njeno polje i pritisni {{key:Enter}}.
- {{ui:Izbriši}} uklanja konfiguraciju. Parametri zadržavaju svoje vrijednosti.

Svaka od ovih radnji je jedan korak: {{key:Mod+Z}} vraća unazad. Ako preimenuješ parametar, svaka konfiguracija prati novo ime; ako obrišeš jednu, ispadne iz njih.

## Uključi i isključi elemente u konfiguraciji

Konfiguracija čuva i koji su elementi isključeni, pa jedan dio može imati verzije **sa** i **bez** nečega: rupe za montažu, skošenje, izbočinu.

1. Isključi element: klikni ga u historiji, pa {{ui:Isključi}} u {{ui:Svojstva}}.
2. Sačuvaj konfiguraciju kao obično, na primjer `Bez rupa`. Njen red navodi šta isključuje.
3. Ponovo uključi element ({{ui:Uključi}}) i sačuvaj još jednu konfiguraciju, na primjer `Sa rupama`.

Čim neka konfiguracija isključi element, primjena konfiguracije isključuje njene elemente i **uključuje sve ostale elemente**, zajedno s vrijednostima parametara, u jednom koraku. Konfiguracija sačuvana prije nego što su elementi isključeni u bilo kojoj od njih smatra se kao „sve uključeno”. {{ui:Ažuriraj}} čuva elemente onakve kakvi jesu sada, s vrijednostima.

Dio čije konfiguracije isključuju elemente čuva se kao novija verzija datoteke: stariji PartCraft kaže da je datoteka iz novije verzije, umjesto da je otvori bez njih.

:::note
Tabela dizajna u CSV-u nosi samo vrijednosti parametara. Uvoz tabele preko konfiguracije mijenja njene vrijednosti i zadržava elemente koje isključuje; `--table` iz komandne linije gradi samo vrijednosti.
:::

Datoteka dijela se čuva s konfiguracijama i s onom koja je bila aktivna. Dio se otvara s vrijednostima s kojima je sačuvan.

## Uvezi ili izvezi tabelu dizajna

Tabela dizajna je CSV datoteka sa kolonom za svaki parametar i redom za svaku konfiguraciju:

```
name,width,thick,bolt
small,100,6,6.6
medium,140,8,8.5
large,200,12,13
```

Prva kolona može se zvati `name`, `config` ili `configuration`; svaka druga kolona mora biti ime nekog parametra dijela. Ćelije su brojevi, s jedinicama ako želiš (`8in`). Prazna ćelija izostavlja taj parametar iz reda.

- {{ui:Uvezi CSV}} dodaje svaki red kao konfiguraciju. Red sa imenom postojeće konfiguracije je zamjenjuje. Uvoz je jedan korak.
- {{ui:Izvezi CSV}} zapisuje konfiguracije. Ako ih još nema, zapisuje jedan red trenutnih vrijednosti, kao polaznu tačku za tabelarni proračun.

Ime konfiguracije koje bi tabelarni proračun pročitao kao formulu (počinje s `=`, `+`, `-` ili `@`) zapisuje se s vodećim `'`.

## Sve veličine odjednom

{{ui:Paket varijanti…}} pod **Konfiguracije** pravi svaku konfiguraciju, ili odabrane, kao STEP, IFC, DWG i pregled u jednom zip-u, s tabelom njihovih parametara: vidi [Napravi paket varijanti iz svojih konfiguracija](topic:variant-pack).

Alat za komandnu liniju pravi jednu datoteku po redu CSV tabele dizajna:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Izvezi konfiguracije kao CSV prvo, pa tu datoteku prosljedi s `--table`. Vidi [Skripte i komandna linija](topic:scripts-and-cli). Dio sačuvan kao skripta čuva svoje konfiguracije u redu `configs json …`.
