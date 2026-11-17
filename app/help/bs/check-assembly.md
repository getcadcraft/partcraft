---
title: Provjerite sklop na sudare i kretanje
summary: Pronađite dijelove koji se preklapaju pomoću Sudar, povucite bilo koju vrijednost spoja da gledate kretanje, i prođite spojem kroz njegov opseg da nađete gdje se dijelovi sudaraju.
keywords: smetnja, otkrivanje smetnji, sudar, kolizija, preklapanje, uklapanje navoja, neslaganje dubine navoja, dodirne površine, sakrij, filter, kretanje, studija kretanja, provlačenje, opseg kretanja, provjera
from: 9c98db46
---

Dvije provjere se izvršavaju na dijelovima kako su postavljeni: **Sudar** traži preklapajući materijal upravo sada, a **provjera kretanja** pomjera jedan spoj kroz njegov opseg i traži preklapanja usput.

## Provjera smetnji

1. Otvorite ili napravite sklop (vidi [Sastavite sklop sa spojevima](topic:build-assembly)).
2. Izaberite {{ui:Sudar}}.

Statusna traka prikazuje rezultat:

- "Nema smetnji između 3 dijela (… ms)." Ništa se ne preklapa.
- "Smetnja: Flange1 i Flange2: Preklapanje, 2.5 mm³." Svaki par, koja je vrsta rezultata i zapremina koju dijele.

Polje **Sklop** lijevo prikazuje **Smetnje**: "Nema", "2 rezultata" (prikazani), ili "Nije provjereno". Kad ništa nije izabrano, desni panel navodi svaki rezultat pod **Smetnje**.

Rezultat se briše kad god se sklop promijeni. Ponovo pokrenite {{ui:Sudar}} nakon pomjeranja spoja. Svaki par dijelova se provjerava protiv svakog drugog, pa veliki sklopovi traju duže.

### Vrste rezultata

| Vrsta | Znači |
|---|---|
| **Preklapanje** | Dijelovi dijele zapreminu: pravi sudar. |
| **Neslaganje dubine navoja** | Zajednička zapremina je unutar navoja jednog dijela, ali van drugog: vijak uvrnut dublje nego rupa, ili obična stabljika u navojnoj rupi. |
| **Uklapanje navoja (kozmetički navoji)** | Zajednička zapremina je unutar navoja oba dijela: vijak u navojnoj rupi. Kozmetički navoji se crtaju punom veličinom navoja, pa se uvijek malo preklapaju. |
| **Dodirne površine** | Nema zajedničke zapremine, ali površine su u kontaktu (unutar 0.001 mm). |

Modelirani navoji (vidi [Navoji na osovinama i provrtima, nacrtani ili modelirani](topic:threads)) su pravi oblici: ono što dijele je **Preklapanje**.

### Sakrijte ono što ne trebate vidjeti

Pod **Smetnje**, **Prikaži** ima polje za svaku vrstu: odznačite **Uklapanje navoja** i **Dodirne površine** da vidite samo sudare koji su bitni. **Sakrij ovaj par** pored rezultata skriva taj par dijelova bez obzira na vrstu. Skriveni rezultati se broje ("2 rezultata skrivena ovim filterima"), a **Ponovo prikaži skrivene parove** ih vraća. Statusna traka također broji skrivene rezultate.

Filteri se čuvaju uz sklop, a svaka promjena je jedan korak {{key:Mod+Z}}. Provlačenje spoja za sudare (ispod) također ih koristi. Sklop sa filterima se čuva kao verzija 4, koju ranije verzije PartCraft-a odbijaju otvoriti, umjesto da izgube filtere.

## Gledanje kretanja

1. Izaberite spoj koji se pomjera (bilo koji osim krutog) na listi lijevo.
2. Povucite klizač ispod jedne od njegovih vrijednosti, kao **Ugao (°)** ili **Pomak (mm)**. Dio se pomjera dok povlačite.
3. Pustite. Novi položaj se zadržava i može se poništiti sa {{key:Mod+Z}}.

Također možete upisati ugao ili pomak u polje i pritisnuti {{key:Enter}}.

Spoj na zatvorenoj petlji (mehanizmu) pomjera cijelu petlju: vrijednost koju povučete se zadržava, a ostali spojevi petlje slijede (vidi [Zatvorene petlje](topic:build-assembly#closed-loops-linkages)).

## Provlačenje spoja za sudare

1. Izaberite spoj koji se pomjera.
2. Za spoj sa više vrijednosti (cilindrični, ravninski, kuglični, klin u utoru) izaberite koju da provučete u **Provjeri pomake**.
3. Izaberite {{ui:Provjeri kretanje na sudare}}.

PartCraft pomjera tu vrijednost kroz 25 pozicija u 24 jednaka koraka, a ostale ostaju iste: ugao od −180° do 180° (nagib od −90° do 90°), dužina od minusa do plusa veličine najvećeg dijela. Izvještava:

- "Nema sudara nigdje za Ugao (°) od -180 do 180 (provjereno 25 pozicija)."
- "6 od 25 pozicija se sudara, prvi kod Ugao (°) 45 (12.4 mm³)." Prva pozicija koja se sudara i preklapanje tamo.

Dugme je zasivljeno za krute spojeve, koji se ne pomjeraju. Provlačenje provjerava samo pozicije, a ne put između njih: tanak dio može proći kroz drugi između dva koraka.

:::note
Kontakt i gravitacija nisu izrađeni. Bez granica provlačenje pokriva cijeli opseg. Dajte vrijednosti **Granice** (vidi [Lista dijelova, rastavljeni prikazi i pomjeranje dijelova](topic:assembly-bom-explode)) i provlačenje pokriva samo njih, pa se šarka koja se otvara za 90° provjerava na 90°.
:::

## Studija kretanja

**Sklop › Kretanje** pokreće vrijednost jednog spoja od početka do kraja tokom vremena koje zadate (konstantna brzina, ublažena, sinusna, ili naprijed i nazad), postavlja sklop na svakom koraku sa njegovim spojevima i zatvorenim petljama, i izvještava koji se sudari i koliko se dijelovi približe. **Dodaj tačku** prati sredinu dijela ili tačku koju kliknete na njemu. Kartica iscrtava njen položaj, brzinu, ubrzanje, vrijednost spoja i razmak u odnosu na vrijeme; **Sačuvaj CSV** i **Sačuvaj grafikon** ih zapisuju. Brzina i ubrzanje se računaju iz zabilježenih položaja, pa oštar vrh između koraka izgleda nizak: koristite više koraka.

Nakon **Pokreni**, traka **Idi kroz pokretanje** pomjera sklop na bilo koji korak (vrijeme, vrijednost i da li se dijelovi sudaraju tu prikazani su pored nje). Spoj zadržava svoju vrijednost, a **Nazad na model** vraća sklop na mjesto. Postavke studije se čuvaju u datoteci sklopa; njene rezultate ponovo pravi **Pokreni**.

## Studija kontakta

**Sklop › Kontakt** prikazuje kako sklop prenosi opterećenja tamo gdje se dijelovi pritiskaju jedan o drugi. Svaki dio donosi vlastite oslonce, opterećenja i materijal iz svoje **Simulacije** studije (fiksna površina na jednom dijelu, sila na drugom). Ovdje birate parove. **Dodaj par**, zatim **Izaberi stranu A** i kliknite površine jednog dijela, pa **Izaberi stranu B** i kliknite površine drugog dijela. Klik na izabranu površinu je skida; Esc ili **Gotovo** završava biranje. Par je **Bez trenja** (dijelovi se pritišću, ali klize) ili **Vezan** (ostaju zajedno). Faktor krutosti postavlja koliko se kontakt opire utiskivanju (20 je dobar početak, 1000 za kruti čelični niz).

**Riješi** pokreće opterećenje u koracima i prikazuje kontaktnu silu, najdublje utiskivanje, najveće pomjeranje i najveće naprezanje. Dio bez para je izostavljen, a kartica to kaže. Kontakt bez trenja ne drži dio bočno: dajte svakom dijelu oslonac u njegovoj sopstvenoj Simulacija studiji, ili ga vežite, inače se koraci možda neće smiriti. Parovi i postavke se čuvaju u datoteci sklopa.

**Izvezi CalculiX ulaz** zapisuje isti model kao CalculiX ulaznu datoteku (.inp). CalculiX je zaseban program koji sami instalirate i pokrećete. **Pročitaj CalculiX rezultate (.frd)** zatim čita pomjeranja nazad na mrežu ovog sklopa i odbija datoteku napravljenu za drugu mrežu. Rješavač ovdje podržava plastično ponašanje, ali nije eksplicitna dinamika, a ništa ovdje nije ovjerena analiza: neka inženjer provjeri sve što je bitno.
