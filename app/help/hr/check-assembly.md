---
title: Provjera sklopa na sudare i gibanje
summary: Pronađite preklapajuće dijelove pomoću Sudar, pokrenite zglob kroz vrijednosti da vidite gibanje i pomaknite zglob kroz raspon da pronađete mjesta na kojima se dijelovi sudaraju.
keywords: smetnje, otkrivanje smetnji, sudar, kolizija, preklapanje, uklapanje navoja, neusklađenost dubine navoja, dodirne plohe, sakrij, filtar, gibanje, studija gibanja, pomicanje, raspon gibanja, provjera
from: 9c98db46
---

Dvije provjere izvode se nad dijelovima kakvi su postavljeni: **Sudar** traži preklapajući materijal odmah, a **provjera gibanja** pomiče jedan zglob kroz njegov raspon i traži preklapanja usput.

## Provjera smetnji

1. Otvorite ili izradite sklop (vidi [Izrada sklopa sa zglobovima](topic:build-assembly)).
2. Odaberite {{ui:Sudar}}.

Statusna traka prijavljuje rezultat:

- „Nema smetnji između 3 dijela (… ms).“ Ništa se ne preklapa.
- „Smetnja: Flange1 i Flange2: Preklapanje, 2.5 mm³.“ Za svaki par, kakvu vrstu rezultata daje i volumen koji dijele.

Okvir **Sklop** s lijeve strane prikazuje **Smetnje**: „Nema“, „2 rezultata“ (oni prikazani) ili „Nije provjereno“. Ako ništa nije odabrano, desna ploča navodi svaki rezultat pod **Smetnje**.

Rezultat se briše kad god se sklop promijeni. Nakon pomicanja zgloba ponovno pokrenite {{ui:Sudar}}. Svaki par dijelova provjerava se sa svakim drugim, pa veliki sklopovi traju duže.

### Vrste rezultata

| Vrsta | Znači |
|---|---|
| **Preklapanje** | Dijelovi dijele volumen: stvarni sudar. |
| **Neusklađenost dubine navoja** | Zajednički volumen je unutar navoja jednog dijela, a izvan navoja drugoga: vijak s navojem dublje od svog provrta, ili glatka stabljika u provrtu s navojem. |
| **Uklapanje navoja (kozmetički navoji)** | Zajednički volumen je unutar navoja oba dijela: vijak u provrtu s navojem. Kozmetički navoji crtaju se u punoj veličini navoja, pa se uvijek malo preklapaju. |
| **Dodirne plohe** | Nema zajedničkog volumena, ali plohe su u dodiru (unutar 0.001 mm). |

Modelirani navoji (vidi [Navoji na osovinama i provrtima, nacrtani ili modelirani](topic:threads)) su stvarna geometrija: ono što dijele je **Preklapanje**.

### Sakrijte ono što ne trebate vidjeti

Pod **Smetnje** okvir **Prikaži** ima polje za svaku vrstu: isključite **Uklapanje navoja** i **Dodirne plohe** da vidite samo sudare koji su bitni. **Sakrij ovaj par** pored rezultata skriva taj par dijelova bez obzira na vrstu. Skriveni rezultati se broje („2 rezultata skrivena ovim filtrima“), a **Ponovno prikaži skrivene parove** vraća parove. Statusna traka također broji skrivene rezultate.

Filtri se spremaju sa sklopom, a svaka promjena jedan je korak {{key:Mod+Z}}. **Provjera zgloba na sudare** (u nastavku) također ih koristi. Sklop s filtrima sprema se kao verzija 4, koju ranije verzije programa PartCraft odbijaju otvoriti, umjesto da izgube filtre.

## Gledajte gibanje

1. Odaberite zglob koji se pomiče (bilo koji osim krutog) na popisu lijevo.
2. Povucite klizač ispod jedne njegove vrijednosti, na primjer **Kut (°)** ili **Odmak (mm)**. Dio se pomiče dok povlačite.
3. Pustite. Novi položaj se zadržava i može se poništiti s {{key:Mod+Z}}.

Kut ili odmak možete i upisati u polje i pritisnuti {{key:Enter}}.

Zglob na zatvorenoj petlji (mehanizam) pomiče cijelu petlju: vrijednost koju povučete ostaje, a ostali zglobovi petlje slijede (vidi [Zatvorene petlje](topic:build-assembly#closed-loops-linkages)).

## Provjera zgloba na sudare

1. Odaberite zglob koji se pomiče.
2. Za zglob s više vrijednosti (cilindrični, ravninski, kuglični, klin u utoru) odaberite koju ćete pomicati u **Provjeri pomake**.
3. Odaberite {{ui:Provjerite sudaraju li se dijelovi tijekom gibanja}}.

PartCraft pomiče tu vrijednost kroz 25 položaja u 24 jednaka koraka, a ostale ostaju kakve jesu: kut od −180° do 180° (nagib od −90° do 90°), duljina od minusa do plusa veličine najvećeg dijela. Izvještava:

- „Nigdje nema sudara za Kut (°) od -180 do 180 (provjereno 25 položaja).“
- „6 od 25 položaja se sudara, prvi kod Kut (°) 45 (12.4 mm³).“ Prvi položaj koji se sudara i preklapanje na njemu.

Gumb je zasivljen za krute zglobove, koji se ne pomiču. Pomicanje provjerava samo položaje, a ne put među njima: tanki dio mogao bi proći kroz drugi između dva koraka.

:::note
Kontakt i gravitacija još nisu izrađeni. Bez granica pomicanje pokriva cijeli raspon; postavite **Granice** za vrijednost (vidi [Popis dijelova, rastavljeni prikazi i pomični dijelovi](topic:assembly-bom-explode)) i pomicanje pokriva samo njih, pa se šarka koja se otvara za 90° provjerava na 90°.
:::

## Studija gibanja

**Sklop › Gibanje** pokreće vrijednost jednog zgloba od početka do kraja tijekom zadanog vremena (stalna brzina, ublaženo, sinusno ili van i natrag), postavlja sklop u svakom koraku s njegovim zglobovima i zatvorenim petljama te izvještava koji se dijelovi sudaraju i koliko se približavaju. **Dodaj točku** prati sredinu dijela ili točku koju kliknete na njemu, a kartica ucrtava njen položaj, brzinu i ubrzanje, vrijednost zgloba i razmak u ovisnosti o vremenu; **Spremi CSV** i **Spremi grafikon** ih zapisuju. Brzina i ubrzanje izračunavaju se iz zabilježenih položaja, pa oštar vrh između koraka izgleda manji: upotrijebite više koraka.

Nakon **Pokreni**, traka **Korak po korak kroz pokretanje** premješta sklop na bilo koji korak (vrijeme, vrijednost i sudaraju li se dijelovi tamo prikazani su pored); zglob zadržava svoju vrijednost, a **Natrag na model** vraća sklop. Postavke studije spremaju se u datoteku sklopa; njezine rezultate ponovno izrađuje **Pokreni**.

## Studija kontakta

**Sklop › Kontakt** prikazuje kako sklop prenosi opterećenja tamo gdje dijelovi pritišću jedan drugoga. Svaki dio donosi vlastite oslonce, opterećenja i materijal iz vlastite studije **Simulacija** (nepomična ploha na jednom dijelu, sila na drugom); ovdje birate parove. **Dodaj par**, zatim **Odaberi stranu A** i kliknite plohe jednog dijela, **Odaberi stranu B** i kliknite plohe drugog dijela (klik na odabranu plohu je uklanja; Esc ili Gotovo završava odabir). Par je **Bez trenja** (dijelovi pritišću, ali klize) ili **Vezan** (ostaju zajedno); faktor krutosti određuje koliko se kontakt opire utiskivanju (20 je dobar početak, 1000 za kruti čelični slog).

**Riješi** pokreće opterećenje u koracima i prikazuje silu kontakta, najdublje utiskivanje, najveći pomak i najveće naprezanje. Dio bez para izostavlja se, a kartica to navodi. Kontakt bez trenja ne drži dio u stranu: svakom dijelu dodijelite oslonac u njegovoj vlastitoj studiji Simulacija ili ga vežite, inače se koraci možda neće smiriti. Parovi i postavke spremaju se u datoteku sklopa.

**Izvezi CalculiX ulaz** zapisuje isti model kao ulaznu datoteku CalculiXa (.inp). CalculiX je zaseban program koji sami instalirate i pokrećete; **Čitaj CalculiX rezultate (.frd)** zatim čita pomake natrag na mreži ovog sklopa i odbija datoteku izrađenu za drugu mrežu. Rješavač ovdje podržava plastično ponašanje, ali nije eksplicitna dinamika, a ništa ovdje nije certificirana analiza: neka inženjer provjeri sve što je bitno.
