---
title: Vođenje dijela parametrima
summary: Imenuj veličine koje su važne (širina, debljina, veličina vijka), poveži bilo koji broj elementa ili kotu skice s njima pomoću =, i promijeni cijeli dio iz jedne tabele.
keywords: parametri, gdje se koristi, koristi ga, globalne promjenljive, promjenljive, jednačine, namjera dizajna, vođenje kota, veza, izraz, formula, imenovanje kote, povezane vrijednosti
from: 58c646ea
---

Parametar je imenovan broj, na primjer `width = 120` ili `margin = bolt * 1.5`. Poveži dubinu, prečnik rupe, broj u uzorku ili kotu skice s njim, pa promjena parametra mijenja sve njih u jednom koraku. Tako namjeru dizajna držiš u dijelu, a ne u glavi.

## Dodavanje parametara

1. U desnom panelu klikni karticu {{ui:Parameters}}.
2. Pod **Promjenljive**, upiši naziv u polje "naziv", na primjer `width`.
3. Upiši vrijednost u sljedeće polje, na primjer `120`, i pritisni {{key:Enter}} (ili klikni {{ui:Add}}).

Vrijednost može biti broj ili izraz drugih parametara: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. Kolona **Vrijednost** pokazuje na šta se svodi. Naziv počinje slovom ili `_` i ima samo slova, cifre i `_`; nazivi funkcija i jedinica (`sin`, `mm`, `pi`) se odbijaju, kao i petlja poput `a = b` uz `b = a`.

## Povezivanje broja s parametrom

1. Klikni element u istoriji, na primjer "Extrude1". Njegove postavke se prikazuju na kartici {{ui:Properties}}.
2. U polju za broj, na primjer **Dubina (mm)**, upiši `=` i izraz: `=thick` ili `=width / 4`.
3. Pritisni {{key:Enter}}.

Polje sada prikazuje rezultat, a pored njegove oznake pojavljuje se dugme **ƒ**. Pokaži na njega da vidiš jednačinu. Kote skice rade isto, i na listi **Kote skice** elementa i u polju kote otvorene skice (dvaput klikni kotu, upiši `=width`, pritisni {{key:Enter}}).

Brojevi koje možeš povezati: dubina izvlačenja, ugao rotacije, prečnik rupe, dubine i veličine upuštanja, broj u uzorku, razmak i ugao, poluprečnik zaobljenja, rastojanje skošenja, debljina zida ljuske, svaka kota skice, i veličine novijih elemenata (druga dubina, sužavanje, upuštanje (countersink), rastojanje referentne ravni, ugao nagiba i drugi).

## Promjena parametra

Na kartici {{ui:Parameters}} upiši novu vrijednost ili izraz u kolonu **Izraz** i pritisni {{key:Enter}}. Sve povezano s njim se mijenja i dio se ponovo gradi, kao jedan korak: {{key:Mod+Z}} to poništava.

Da promijeniš broj s drugog kraja, vidi [Jednačine u oba smjera](topic:equations-two-way).

## Pregled gdje se parametar koristi

Ispod svakog parametra na kartici {{ui:Parameters}} red kaže šta ga koristi:

- brojevi koje pokreće, na primjer **Extrude1 depth** ili **Sketch1 D2 (distance)**. Klikni jedan da izabereš njegov element i prikažeš njegova svojstva;
- brojevi koje pokreće **preko** drugih parametara, na primjer **Hole1 diameter (through h, d)** kad je `d = h + 2` i `h = w / 2`;
- **parametri** čiji izrazi ga koriste, **konfiguracije** koje ga postavljaju, i **skripte** koje ga čitaju (vidi [Pisanje i pokretanje skripti](topic:craftscript)).

"Još nije korišten." znači da ga ništa ne koristi: možeš ga izbrisati bez pitanja.

## Odvajanje, preimenovanje, brisanje

- **Odvoji broj:** klikni njegovo dugme **ƒ**, ili {{ui:Unlink}} na listi **Jednačine**. Zadržava svoju trenutnu vrijednost i nijedan parametar ga više ne mijenja.
- **Preimenuj parametar:** upiši novi naziv u njegovo polje **Naziv**. Svaki izraz koji ga koristi se ponovo piše.
- **Izbriši parametar:** klikni × u njegovom redu. Ako ga nešto koristi, PartCraft pita da li prvo da upiše njegovu trenutnu vrijednost u te izraze.
- **Brisanje elementa** briše jednačine njegovih brojeva; statusna traka kaže koje.

:::note
Parametri se čuvaju u datoteci `.partcraft.json` (kao verzija datoteke 3). Dio bez parametara se čuva potpuno kao ranije.
:::

## Izrazi

| Upiši | Znači |
|---|---|
| `120`, `12.5`, `1e3` | broj (milimetri, ili stepeni za ugao) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | dužina u drugim jedinicama, pretvorena u milimetre |
| `30deg`, `0.5rad` | ugao, pretvoren u stepene |
| `+ - * / %` i `^` | aritmetika; `^` je stepen, `-2^2` je −4 |
| `sin cos tan asin acos atan atan2` | trigonometrija u stepenima |
| `sqrt pow exp ln log abs sign` | ostale funkcije |
| `ceil floor int round(x, digits) min max` | zaokruživanje i granice |
| `if(test, a, b)` sa `< <= > >= == !=` | izbor: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Nazivi razlikuju mala i velika slova: `Width` i `width` su dva parametra.

Vidi i [Konfiguracije i tabele dizajna](topic:design-tables) i [Skripte i komandna linija](topic:scripts-and-cli).
