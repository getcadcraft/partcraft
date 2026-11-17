---
title: Upravljanje delom pomoću parametara
summary: Imenujte mere koje su važne (širina, debljina, veličina zavrtnja), povežite bilo koji broj elementa ili meru skice sa njima pomoću =, i promenite ceo deo iz jedne tabele.
keywords: parametri, gde se koristi, koristi ga, globalne promenljive, promenljive, jednačine, namera dizajna, upravljajuće kote, veza, izraz, formula, imenovanje kote, povezane vrednosti
from: 58c646ea
---

Parametar je imenovan broj, na primer `width = 120` ili `margin = bolt * 1.5`. Povežite dubinu, prečnik rupe, broj u nizu ili meru skice sa njim, i promena parametra menja sve njih u jednom koraku. Tako nameru dizajna držite u delu, a ne u glavi.

## Dodavanje parametara

1. U desnom panelu kliknite karticu {{ui:Parametri}}.
2. Ispod **Promenljive** ukucajte ime u polje „ime“, na primer `width`.
3. Ukucajte vrednost u sledeće polje, na primer `120`, i pritisnite {{key:Enter}} (ili kliknite {{ui:Dodaj}}).

Vrednost može biti broj ili izraz drugih parametara: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. Kolona **Vrednost** pokazuje na šta se svodi. Ime počinje slovom ili `_` i ima samo slova, cifre i `_`; imena funkcija i jedinica (`sin`, `mm`, `pi`) se odbijaju, kao i petlja, na primer `a = b` uz `b = a`.

## Povezivanje broja sa parametrom

1. Kliknite element u istoriji, na primer „Extrude1“. Njegova podešavanja se prikazuju na kartici {{ui:Svojstva}}.
2. U polju broja, na primer **Dubina (mm)**, ukucajte `=` i izraz: `=thick` ili `=width / 4`.
3. Pritisnite {{key:Enter}}.

Polje sada prikazuje rezultat, a pored njegove oznake se pojavljuje dugme **ƒ**. Zadržite pokazivač na njemu da vidite jednačinu. Mere skice rade na isti način, i u listi **Mere skice** elementa i u polju mere otvorene skice (dvaput kliknite na meru, ukucajte `=width`, pritisnite {{key:Enter}}).

Brojevi koje možete povezati: dubina izvlačenja, ugao rotiranja, prečnik rupe, dubina i veličine upuštanja, broj u nizu, razmak i ugao, poluprečnik zaobljenja, rastojanje obaranja ivice, debljina zida ljuske, svaka mera skice i veličine novijih elemenata (druga dubina, konus, konusno upuštanje, rastojanje referentne ravni, ugao nagiba i drugi).

## Promena parametra

Na kartici {{ui:Parametri}} ukucajte novu vrednost ili izraz u kolonu **Izraz** i pritisnite {{key:Enter}}. Sve što je povezano sa njim se menja i deo se ponovo pravi, kao jedan korak: {{key:Mod+Z}} to opoziva.

Da promenite broj sa druge strane, vidi [Jednačine u oba smera](topic:equations-two-way).

## Pogledajte gde se parametar koristi

Ispod svakog parametra na kartici {{ui:Parametri}} red kaže šta ga koristi:

- brojevi koje pokreće, na primer **Extrude1 dubina** ili **Sketch1 D2 (rastojanje)**. Kliknite jedan da izaberete njegov element i prikažete svojstva;
- brojevi koje pokreće **preko** drugih parametara, na primer **Hole1 prečnik (preko h, d)** kad je `d = h + 2` i `h = w / 2`;
- **parametri** čiji izrazi ga koriste, **konfiguracije** koje ga postavljaju, i **skripte** koje ga čitaju (vidi [Pisanje i pokretanje skripti](topic:craftscript)).

„Još nije korišćen.“ znači da ga ništa ne koristi: možete ga obrisati bez pitanja.

## Prekidanje veze, preimenovanje, brisanje

- **Prekini vezu broja:** kliknite njegovo dugme **ƒ**, ili {{ui:Prekini vezu}} u listi **Jednačine**. Zadržava trenutnu vrednost i nijedan parametar je više ne menja.
- **Preimenuj parametar:** ukucajte novo ime u njegovo polje **Ime**. Svaki izraz koji ga koristi se prepisuje.
- **Obriši parametar:** kliknite × u njegovom redu. Ako ga nešto koristi, PartCraft pita da li prvo da upiše njegovu trenutnu vrednost u te izraze.
- **Brisanje elementa** briše jednačine njegovih brojeva; statusna traka kaže koje.

:::note
Parametri se čuvaju u datoteci `.partcraft.json` (kao verzija datoteke 3). Deo bez parametara se čuva tačno kao pre.
:::

## Izrazi

| Napišite | Znači |
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

Imena su osetljiva na velika i mala slova: `Width` i `width` su dva parametra.

Vidi i [Konfiguracije i tabele dizajna](topic:design-tables) i [Skripte i komandna linija](topic:scripts-and-cli).
