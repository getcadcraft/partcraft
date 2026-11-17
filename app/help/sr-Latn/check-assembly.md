---
title: Proveri sklop na sudare i kretanje
summary: Pronađi delove koji se preklapaju sa Sudar, prevuci vrednosti bilo kog spoja da vidiš kretanje, i prođi kroz opseg spoja da nađeš gde se delovi sudaraju.
keywords: smetnja, otkrivanje smetnji, sudar, kolizija, preklapanje, uklapanje navoja, neslaganje dubine navoja, dodirne površi, sakrij, filter, kretanje, studija kretanja, prolazak, opseg kretanja, proveri
from: 9c98db46
---

Dve provere rade nad delovima dok su postavljeni: **Sudar** traži preklapajući materijal odmah, a **provera kretanja** pomera jedan spoj kroz njegov opseg i traži preklapanja usput.

## Proveri smetnje

1. Otvori ili napravi sklop (vidi [Sastavi sklop sa spojevima](topic:build-assembly)).
2. Izaberi {{ui:Sudar}}.

Statusna traka prijavljuje rezultat:

- „Nema smetnji između 3 dela (… ms).“ Ništa se ne preklapa.
- „Smetnja: Flange1 i Flange2: Preklapanje, 2.5 mm³.“ Svaki par, kakav je rezultat i zajednička zapremina.

Polje **Sklop** levo prikazuje **Smetnje**: „Nema“, „2 rezultata“ (oni prikazani), ili „Nije proveravano“. Kad ništa nije izabrano, desni panel navodi svaki rezultat pod **Smetnje**.

Rezultat se briše kad god se sklop promeni. Pokreni {{ui:Sudar}} ponovo posle pomeranja spoja. Svaki par delova proverava se sa svakim drugim, pa veliki sklopovi traju duže.

### Vrste rezultata

| Vrsta | Znači |
|---|---|
| **Preklapanje** | Delovi dele zapreminu: pravi sudar. |
| **Neslaganje dubine navoja** | Zajednička zapremina je unutar navoja jednog dela, a izvan drugog: zavrtanj navojen dublje od svoje rupe, ili gladak deo u urezanoj rupi. |
| **Uklapanje navoja (kozmetički navoji)** | Zajednička zapremina je unutar navoja oba dela: zavrtanj u urezanoj rupi. Kozmetički navoji crtaju se u punoj veličini navoja, pa se uvek malo preklapaju. |
| **Dodirne površi** | Nema zajedničke zapremine, ali površi se dodiruju (u okviru 0.001 mm). |

Modelovani navoji (vidi [Navoji na osovinama i provrtima, nacrtani ili modelovani](topic:threads)) su prava geometrija: ono što dele jeste **Preklapanje**.

### Sakrij ono što ne treba da vidiš

Pod **Smetnje**, **Prikaži** ima polje za svaku vrstu: isključi **Uklapanje navoja** i **Dodirne površi** da vidiš samo sudare koji su bitni. **Sakrij ovaj par** pored rezultata sakriva taj par delova bez obzira na vrstu. Sakriveni rezultati se broje („2 rezultata sakrivena ovim filterima“), a **Ponovo prikaži sakrivene parove** ih vraća. Statusna traka takođe broji sakrivene rezultate.

Filteri se čuvaju sa sklopom, a svaka promena je jedan korak {{key:Mod+Z}}. **Prođi spoj za sudare** (dole) takođe ih koristi. Sklop sa filterima čuva se kao verzija 4, koju ranije verzije PartCraft-a odbijaju da otvore umesto da izgube filtere.

## Prati kretanje

1. Izaberi spoj koji se pomera (bilo koji osim krutog) na listi levo.
2. Prevuci klizač ispod jedne njegove vrednosti, kao **Ugao (°)** ili **Pomak (mm)**. Deo se pomera dok prevlačiš.
3. Pusti. Nova pozicija se zadržava i može se poništiti sa {{key:Mod+Z}}.

Možeš i da upišeš ugao ili pomak u polje i pritisneš {{key:Enter}}.

Spoj na zatvorenoj petlji (veza) pomera celu petlju: vrednost koju prevučeš se zadržava, a ostali spojevi petlje prate (vidi [Zatvorene petlje](topic:build-assembly#closed-loops-linkages)).

## Prođi spoj za sudare

1. Izaberi spoj koji se pomera.
2. Za spoj sa više vrednosti (cilindrični, ravni, kuglasti, klin u žlebu), izaberi koju da prođeš u **Provere pomeranja**.
3. Izaberi {{ui:Proveri kretanje na sudare}}.

PartCraft pomera tu vrednost kroz 25 položaja u 24 jednaka koraka, a ostale ostaju kakve jesu: ugao od −180° do 180° (nagib od −90° do 90°), dužina od minusa do plusa veličine najvećeg dela. Prijavljuje:

- „Nema sudara nigde za Ugao (°) od -180 do 180 (proverena 25 položaja).“
- „6 od 25 položaja se sudara, prvi kod Ugao (°) 45 (12.4 mm³).“ Prvi položaj koji se sudara i preklapanje tamo.

Dugme je zasivljeno za kruti spoj, koji se ne pomera. Prolazak proverava samo položaje, a ne put između njih: tanak deo mogao bi da prođe kroz drugi između dva koraka.

:::note
Kontakt i gravitacija nisu napravljeni. Bez ograničenja prolazak pokriva ceo opseg; daj vrednosti **Ograničenja** (vidi [Lista delova, razbijeni prikazi i pomeranje delova](topic:assembly-bom-explode)) i prolazak pokriva samo njih, pa se šarka koja se otvara za 90° proverava na 90°.
:::

## Studija kretanja

**Sklop › Kretanje** pokreće vrednost jednog spoja od početka do kraja za vreme koje zadaš (stalna brzina, ublažena, sinusna, ili napred i nazad), postavlja sklop na svaki korak sa njegovim spojevima i zatvorenim petljama, i prijavljuje šta se sudara i koliko se delovi približavaju. **Dodaj tačku** prati sredinu dela ili tačku koju klikneš na njemu, a kartica crta njen položaj, brzinu i ubrzanje, vrednost spoja i razmak u odnosu na vreme; **Sačuvaj CSV** i **Sačuvaj grafikon** ih upisuju. Brzina i ubrzanje dolaze iz zabeleženih položaja, pa oštar vrh između koraka izgleda manji: koristi više koraka.

Posle **Pokreni**, traka **Korak kroz izvođenje** pomera sklop na bilo koji korak (vreme, vrednost i da li se delovi tamo sudaraju pokazani su pored nje); spoj zadržava svoju vrednost, a **Nazad na model** vraća sklop. Podešavanja studije čuvaju se u fajlu sklopa; njeni rezultati ponovo se prave sa **Pokreni**.

## Studija kontakta

**Sklop › Kontakt** pokazuje kako sklop nosi opterećenja tamo gde se delovi pritiskaju jedan o drugi. Svaki deo donosi svoje oslonce, opterećenja i materijal iz sopstvene studije **Simulacija** (nepomična površ na jednom delu, sila na drugom); ovde biraš parove. **Dodaj par**, pa **Izaberi stranu A** i klikni površi jednog dela, **Izaberi stranu B** i klikni površi drugog dela (klik na izabranu površ je skida; Esc ili Gotovo završava izbor). Par je **Bez trenja** (delovi se pritiskaju ali kližu) ili **Vezan** (ostaju zajedno); faktor krutosti određuje koliko se kontakt opire utonuću (20 je dobar početak, 1000 za krut čelični slog).

**Reši** pokreće opterećenje u koracima i prikazuje silu kontakta, najveće utonuće, najveće pomeranje i najveće naprezanje. Deo bez para se izostavlja, a kartica to kaže. Kontakt bez trenja ne drži deo u stranu: daj svakom delu oslonac u njegovoj sopstvenoj studiji Simulacija, ili ga vezi, inače se koraci možda neće slegnuti. Parovi i podešavanja čuvaju se u fajlu sklopa.

**Izvezi CalculiX fajl** upisuje isti model kao CalculiX ulazni fajl (.inp). CalculiX je zaseban program koji sam instaliraš i pokrećeš; **Pročitaj CalculiX rezultate (.frd)** tada čita pomeranja nazad na mrežu ovog sklopa i odbija fajl napravljen za drugu mrežu. Rešavač ovde podržava plastično ponašanje, ali nije eksplicitna dinamika, a ništa ovde nije sertifikovana analiza: neka inženjer proveri sve što je bitno.
