---
title: Konfigurasies en ontwerptabelle
summary: Hou verskeie groottes en weergawes van een onderdeel as benoemde konfigurasies wat in die onderdeellêer gestoor word, met kenmerke aan of af in elkeen, skakel tussen hulle met een klik, bring hulle in of uit as 'n CSV-ontwerptabel, of bou hulle almal vanaf die opdraglyn.
keywords: ontwerptabel, konfigurasies, konfigurasie, groottes, familie van onderdele, csv, sigblad, variante, tabelgedrewe, onderdeelfamilie, onderdruk, onderdrukte, skakel 'n kenmerk af, opsies, met of sonder, konfigureerder
from: 17249afb
---

'n **Konfigurasie** is een grootte van die onderdeel: 'n benoemde stel waardes vir sy parameters. Die onderdeel hou sy konfigurasies in sy eie lêer, so hulle reis saam daarmee. 'n **Ontwerptabel** is dieselfde ding as 'n CSV-lêer, een ry per konfigurasie.

Konfigurasies stel **parameters**, so voeg daardie eers by (sien [Beheer 'n onderdeel met parameters](topic:parameters)). 'n Konfigurasie stoor die parameters wat gewone getalle is; parameters wat uit ander bereken word (soos `area = w * d`) volg vanself.

## Stoor 'n konfigurasie

1. Op die {{ui:Parameters}}-blad, stel die parameters vir een grootte van die onderdeel.
2. Onder **Konfigurasies**, tik 'n naam (byvoorbeeld `Large`) en druk {{ui:Stoor huidige waardes}} of {{key:Enter}}.

Die nuwe konfigurasie word as **aktief** gemerk. Verander 'n parameter daarna en dit sê **aktief, sedert verander**, so jy weet die onderdeel pas nie meer daarby nie.

## Skakel, werk by, hernoem, skrap

- {{ui:Pas toe}} stel die parameters op daardie konfigurasie se waardes en bou die onderdeel weer.
- {{ui:Werk by}} stoor die huidige waardes in daardie konfigurasie.
- Om een te hernoem, tik die nuwe naam in sy kassie en druk {{key:Enter}}.
- {{ui:Skrap}} verwyder die konfigurasie. Die parameters hou hul waardes.

Elk hiervan is een stap: {{key:Mod+Z}} gaan terug. As jy 'n parameter hernoem, volg elke konfigurasie die nuwe naam; as jy een skrap, val dit uit hulle uit.

## Skakel kenmerke aan en af in 'n konfigurasie

'n Konfigurasie hou ook by watter kenmerke afgeskakel is, so een onderdeel kan weergawes **met** en **sonder** iets hê: monteergate, 'n skuinsrand, 'n verhoging (boss).

1. Skakel die kenmerk af: klik daarop in die geskiedenis, en dan {{ui:Onderdruk}} in {{ui:Eienskappe}}.
2. Stoor die konfigurasie soos gewoonlik, byvoorbeeld `No holes`. Die ry lys wat dit afskakel.
3. Skakel die kenmerk weer aan ({{ui:Hef onderdrukking op}}) en stoor 'n ander konfigurasie, byvoorbeeld `With holes`.

Sodra enige konfigurasie 'n kenmerk afskakel, skakel die toepassing van 'n konfigurasie sy kenmerke af en **elke ander kenmerk aan**, saam met sy parameterwaardes, in een stap. 'n Konfigurasie wat gestoor is voordat kenmerke in enige van hulle afgeskakel is, tel as "alles aan". {{ui:Werk by}} stoor die kenmerke soos hulle nou is, met die waardes.

'n Onderdeel waarvan die konfigurasies kenmerke afskakel, word as 'n nuwer lêerweergawe gestoor: 'n ouer PartCraft sê die lêer is van 'n nuwer weergawe in plaas daarvan om dit sonder hulle oop te maak.

:::note
Die CSV-ontwerptabel dra net parameterwaardes. Die invoer van 'n tabel oor 'n konfigurasie verander sy waardes en hou die kenmerke wat dit afskakel; die opdraglyn se `--table` bou net die waardes.
:::

Die onderdeellêer word gestoor met die konfigurasies en met die een wat aktief was. Die onderdeel maak oop met die waardes waarmee dit gestoor is.

## Bring 'n ontwerptabel in of uit

'n Ontwerptabel is 'n CSV-lêer met 'n kolom vir elke parameter en 'n ry vir elke konfigurasie:

```
name,width,thick,bolt
small,100,6,6.6
medium,140,8,8.5
large,200,12,13
```

Die eerste kolom mag `name`, `config` of `configuration` heet; elke ander kolom moet die naam van 'n parameter van die onderdeel wees. Selle is getalle, met eenhede as jy wil (`8in`). 'n Leë sel laat daardie parameter uit die ry.

- {{ui:Voer CSV in}} voeg elke ry as 'n konfigurasie by. 'n Ry met die naam van 'n bestaande konfigurasie vervang dit. Invoer is een stap.
- {{ui:Voer CSV uit}} skryf die konfigurasies uit. As daar nog geen is nie, skryf dit een ry van die huidige waardes, 'n beginpunt vir 'n sigblad.

'n Konfigurasienaam wat 'n sigblad as 'n formule sou lees (wat met `=`, `+`, `-` of `@` begin), word met 'n voorafgaande `'` geskryf.

## Elke grootte op een slag

{{ui:Varianteprent…}} onder **Konfigurasies** bou elke konfigurasie, of 'n gekose paar, as STEP, IFC, DWG en 'n voorskou in een zip, met 'n tabel van hul parameters: sien [Maak 'n varianteprent uit jou konfigurasies](topic:variant-pack).

Die opdraglynhulpmiddel bou een lêer per ry van 'n CSV-ontwerptabel:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Voer eers die konfigurasies as CSV uit, en gee dan daardie lêer met `--table`. Sien [Skripte en die opdraglyn](topic:scripts-and-cli). 'n Onderdeel wat as 'n skrip gestoor is, hou sy konfigurasies in 'n `configs json …`-reël.
