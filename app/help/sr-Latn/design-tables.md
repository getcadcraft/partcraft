---
title: Konfiguracije i projektne tabele
summary: Čuvajte više veličina i verzija jednog dela kao imenovane konfiguracije sačuvane u fajlu dela, sa uključenim ili isključenim elementima u svakoj, prebacujte se između njih jednim klikom, uvozite ih ili izvozite kao CSV projektnu tabelu, ili ih sve izgradite iz komandne linije.
keywords: projektna tabela, konfiguracije, konfiguracija, dimenzije, porodica delova, csv, tabela, varijante, vođeno tabelom, familija delova, isključi, isključeno, isključi element, opcije, sa ili bez, konfigurator
from: 17249afb
---

**Konfiguracija** je jedna veličina dela: imenovan skup vrednosti za njegove parametre. Deo čuva svoje konfiguracije u sopstvenom fajlu, pa putuju s njim. **Projektna tabela** je ista stvar kao CSV fajl, sa jednim redom po konfiguraciji.

Konfiguracije postavljaju **parametre**, pa dodajte njih prvo (vidi [Upravljanje delom pomoću parametara](topic:parameters)). Konfiguracija čuva parametre koji su obični brojevi; parametri izračunati iz drugih (kao `area = w * d`) prate sami od sebe.

## Sačuvajte konfiguraciju

1. Na kartici {{ui:Parametri}} postavite parametre za jednu veličinu dela.
2. Pod **Konfiguracije** upišite ime (na primer `Velika`) i pritisnite {{ui:Sačuvaj trenutne vrednosti}} ili {{key:Enter}}.

Nova konfiguracija se označava kao **aktivna**. Ako posle promenite parametar, piše **aktivna, promenjena od čuvanja**, pa znate da deo više ne odgovara njoj.

## Prebacivanje, ažuriranje, preimenovanje, brisanje

- {{ui:Primeni}} postavlja parametre na vrednosti te konfiguracije i ponovo gradi deo.
- {{ui:Ažuriraj}} čuva tekuće vrednosti u tu konfiguraciju.
- Da biste je preimenovali, upišite novo ime u njeno polje i pritisnite {{key:Enter}}.
- {{ui:Izbriši}} uklanja konfiguraciju. Parametri zadržavaju svoje vrednosti.

Svaka od ovih radnji je jedan korak: {{key:Mod+Z}} vraća unazad. Ako preimenujete parametar, svaka konfiguracija prati novo ime; ako obrišete konfiguraciju, ona ispada iz njih.

## Uključivanje i isključivanje elemenata u konfiguraciji

Konfiguracija takođe čuva koji su elementi isključeni, pa jedan deo može da ima verzije **sa** i **bez** nečega: rupa za montažu, skošenja, izbočine.

1. Isključite element: kliknite ga u istoriji, pa {{ui:Isključi}} u {{ui:Svojstva}}.
2. Sačuvajte konfiguraciju kao obično, na primer `Bez rupa`. Njen red navodi šta isključuje.
3. Ponovo uključite element ({{ui:Vrati element}}) i sačuvajte još jednu konfiguraciju, na primer `Sa rupama`.

Čim bilo koja konfiguracija isključi element, primena konfiguracije isključuje njegove elemente i **uključuje sve ostale elemente**, zajedno sa njihovim vrednostima parametara, u jednom koraku. Konfiguracija sačuvana pre nego što je ijedan element bio isključen računa se kao „sve uključeno“. {{ui:Ažuriraj}} čuva elemente onakve kakvi su sada, sa vrednostima.

Deo čije konfiguracije isključuju elemente čuva se kao novija verzija fajla: stariji PartCraft kaže da je fajl iz novije verzije, umesto da ga otvori bez njih.

:::note
CSV projektna tabela nosi samo vrednosti parametara. Uvoz tabele preko konfiguracije menja njene vrednosti i zadržava elemente koje ona isključuje; opcija `--table` komandne linije gradi samo vrednosti.
:::

Fajl dela se čuva sa konfiguracijama i sa onom koja je bila aktivna. Deo se otvara sa vrednostima koje je imao kad je sačuvan.

## Uvezite ili izvezite projektnu tabelu

Projektna tabela je CSV fajl sa kolonom za svaki parametar i redom za svaku konfiguraciju:

```
name,width,thick,bolt
mala,100,6,6.6
srednja,140,8,8.5
velika,200,12,13
```

Prva kolona može da se zove `name`, `config` ili `configuration`; svaka druga kolona mora biti ime nekog parametra dela. Ćelije su brojevi, sa jedinicama ako hoćete (`8in`). Prazna ćelija ostavlja taj parametar van reda.

- {{ui:Uvezi CSV}} dodaje svaki red kao konfiguraciju. Red sa imenom postojeće konfiguracije je zamenjuje. Uvoz je jedan korak.
- {{ui:Izvezi CSV}} zapisuje konfiguracije. Ako ih još nema, zapisuje jedan red tekućih vrednosti, kao polazište za tabelarni program.

Ime konfiguracije koje bi tabelarni program shvatio kao formulu (počinje sa `=`, `+`, `-` ili `@`) zapisuje se sa vodećim `'`.

## Sve veličine odjednom

{{ui:Paket varijanti…}} pod **Konfiguracije** gradi svaku konfiguraciju, ili izabrane, kao STEP, IFC, DWG i pregled u jednom zip fajlu, sa tabelom njihovih parametara: vidi [Pravljenje paketa varijanti iz konfiguracija](topic:variant-pack).

Komandna linija gradi jedan fajl po redu CSV projektne tabele:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Izvezite konfiguracije kao CSV prvo, pa taj fajl prosledite sa `--table`. Vidi [Skripte i komandna linija](topic:scripts-and-cli). Deo sačuvan kao skripta čuva svoje konfiguracije u redu `configs json …`.
