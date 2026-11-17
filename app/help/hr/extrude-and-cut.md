---
title: Izvucite izbočinu i izrežite kroz nju
summary: Pretvorite skicu u tijelo naredbom Izvuci, postavite slijepu, srednju, do-ravnine ili dvosmjernu dubinu, nagib ili jedan obris skice, zatim skicirajte na plohi i Izrežite džep ili provrt.
keywords: izvuci, izbočina, izvučena izbočina, izreži, izvučeni izrez, džep, kroz sve, slijepo, srednja ravnina, obrnuti, dubina, izvuci-izreži, izvuci-izbočinu, podloga, do plohe, do sljedeće plohe, do vrha, odmak od plohe, smjer 2, dva smjera, nagib pri izvlačenju, nagib, obris, područje, odabrani obrisi
from: 3b13ff10
---

{{ui:Izvuci}} gura zatvoreni profil skice ravno iz njezine ravnine i stvara materijal. {{ui:Izreži}} radi isto, ali uklanja materijal. Obje su ista značajka (feature) ispod; kasnije možete jednu pretvoriti u drugu.

## Izvucite izbočinu

1. Nacrtajte zatvoreni profil i zatvorite skicu (vidi [Nacrtajte prvu skicu](topic:sketch-basics)). Ostaje odabrana.
2. Odaberite {{ui:Izvuci}}.

Pojavi se tijelo od 10 mm, „Extrude1“ se pridruži povijesti sa skicom uvučenom ispod njega, a statusna traka kaže „Extrude1 dodano. Promijenite njegove brojeve desno.“

**Koja se skica koristi:** skica koju ste upravo zatvorili ili skica odabrana u povijesti. Bez odabira PartCraft uzima najnoviju skicu koju ni jedna značajka još ne koristi. Ako ničega nema: „Prvo napravite skicu: odaberite ravninu, Skica, nacrtajte zatvoreni profil, Izlaz.“

### Postavite dubinu i smjer

U desnom oknu:

| Postavka | Izbori | Zadano |
|---|---|---|
| **Operacija** | Izbočina (dodaj materijal), Izreži (ukloni materijal), Presjek (zadrži preklapanje), Novo tijelo (još nije izrađeno u ovoj verziji: treba egzaktna jezgra) | Izbočina |
| **Kraj** | Slijepo (dubina), Srednja ravnina (na obje strane), Kroz sve, Do plohe ili ravnine, Do sljedeće plohe, Do vrha, Odmak od plohe | Slijepo |
| **Dubina (mm)** | Bilo koja veličina iznad nule (prikazano za Slijepo i Srednju ravninu) | 10 |
| **Obrnuti smjer** | Raste na drugu stranu ravnine skice (nije prikazano za Srednju ravninu) | Isključeno |

Upišite broj i pritisnite {{key:Enter}} ili {{key:Tab}}: dio se odmah ponovno izgradi. **Srednja ravnina** stavlja polovicu dubine na svaku stranu skice.

### Do plohe, sljedeće plohe ili vrha

Još nije izrađeno u ovoj verziji: svaki kraj „do“ zahtijeva egzaktnu jezgru, a značajka kaže: „Izvlačenje do plohe, sljedeće plohe ili vrha: još nije izrađeno (treba egzaktna jezgra).“ Upotrijebite slijepu dubinu koju izmjerite. S egzaktnom jezgrom krajevi rade ovako:

- **Do plohe ili ravnine**: **Do** uzima ravnu plohu (Odaberi, zatim kliknite na nju) ili referentnu ravninu. Ploha paralelna skici daje egzaktnu dubinu; nagnuta reže kraj na nagibu. Ako je ploha iza skice: „… Pokušajte s Obrnuti smjer.“
- **Do sljedeće plohe**: zaustavlja se na prvoj ravnoj plohi tijela koju izvlačenje sretne (zakrivljene plohe ovdje nisu podržane: to se i kaže).
- **Do vrha**: zaustavlja se u razini vrha (kliknite blizu kraja brida) ili značajke točke.
- **Odmak od plohe**: kao Do plohe, zaustavljajući se **Odmak (mm)** kratko od nje (mjereno okomito na plohu).

### Dva smjera, nagib, jedan obris

- **Drugi smjer** (Slijepo): također izvlači **Drugu dubinu (mm)** na drugu stranu skice.
- **Nagib (°)**: bočne strane se nagnu kako idu, kao nagib pri izvlačenju; (negativno: van). Samo jedan smjer. Još nije izrađeno u ovoj verziji (treba egzaktna jezgra): ostavite 0.
- **Područja**: **Odaberi područja**, zatim kliknite unutar petlji za izvlačenje; koriste se samo ta područja (kružnica unutar kvadrata: kliknite unutar kružnice za cilindar, između njih za ploču s rupom). **Sve** vraća svaku petlju.

Ispod toga, **Kote skice** navodi upravljajuće kote skice, pa možete mijenjati veličine profila bez otvaranja skice.

:::note
**Kroz sve je samo za izreze.** Izbočina postavljena na Kroz sve ne uspije uz poruku: „Kroz sve je za izreze. Za izbočinu upotrijebite dubinu.“ Prebacivanje značajke s Izreži nazad na Izbočina pretvara Kroz sve u Slijepo umjesto vas.
:::

## Izreži džep

1. Kliknite ravnu plohu u koju želite rezati. Ona se označi, a desno okno kaže **Ploha**.
2. Odaberite {{ui:Skiciraj na ovoj plohi}} (ili {{ui:Skica}} na alatnoj traci).
3. Nacrtajte obris džepa, npr. pravokutnik, i kotirajte ga.
4. Odaberite {{ui:Izlaz}}.
5. Odaberite {{ui:Izreži}}. Počinje kao **Kroz sve**: uklanja materijal kroz cijeli dio.
6. Za džep postavite **Kraj** na **Slijepo (dubina)** i upišite **Dubina (mm)**.

Izrez ide u materijal, od plohe na koju ste skicirali. Ako statusna traka kaže: „Na toj strani skice nema što rezati. Pokušajte drugi smjer.“, označite **Obrnuti smjer**.

Skica na dnu džepa prati dno: promijenite dubinu džepa i skica se pomakne s njim.

## Povucite ili gurnite cijelu plohu

Da plohа izlazi dalje ili tone, ne morate crtati njezin obris. Kliknite ravnu plohu, zatim u desnom oknu:

- {{ui:Izvuci iz nje}} izvlači plohu: PartCraft dodaje skicu na plohi s njezinim obrisom (rupe u plohi ostaju rupe) i Izvuci od 10 mm.
- {{ui:Izreži u nju}} gura plohu unutra: ista skica i Izreži do pola dubine dijela.

Oboje je jedan korak: {{key:Mod+Z}} uklanja skicu i značajku zajedno. Nova značajka je odabrana, pa odmah upišite broj i pritisnite {{key:Enter}} za njezinu dubinu. Obris se kopira kao fiksne linije i lukovi: ne prati kasnije promjene plohe. Ako se dio obrisa ne može kopirati (slobodna krivulja), skica se otvara s onim što se moglo kopirati; dovršite je, zatim odaberite {{ui:Izlaz}} i {{ui:Izvuci}} ili {{ui:Izreži}}.

## Profili s otocima

Skica može sadržavati nekoliko zatvorenih petlji. Petlje jedna uz drugu postaju zasebne izbočine (ili izrezi); petlja unutar druge postaje rupa kroz izbočinu. Npr. pravokutnik s dvije kružnice unutra izvlači se kao ploča s dvije rupe.

Da koristite samo neke petlje, odaberite ih s **Područja** (gore); druga značajka može koristiti preostale petlje iste skice.

## Kasnije uređivanje

- Kliknite „Extrude1“ u povijesti da vratite njegove postavke.
- Dvaput kliknite njegovu skicu (uvučenu ispod njega) da je otvorite; zatvorite je da se ponovno izgradi.
- Vidi [Promijenite dio kroz njegovu povijest](topic:edit-history) za potiskivanje, vraćanje, promjenu redoslijeda i brisanje.

## Česte poruke

| Poruka | Što učiniti |
|---|---|
| „Skica nema zatvoreni profil za izvlačenje.“ | Skica nema zatvorenu petlju od punih linija. Zatvorite praznine ili vratite konstrukcijske linije tipkom {{key:Q}} |
| „Profil je otvoren: kraj kod (x, y) nije ničim spojen.“ | Otvorite skicu i spojite taj kraj na sljedeću liniju |
| „Još nema što rezati.“ | Izrez treba tijelo za rezanje. Prvo napravite izbočinu |
| „Nakon ovoga od dijela ništa nije ostalo.“ | Izrez je uklonio sve. Provjerite njegovu veličinu i smjer |

Više u [Rješavanje problema](topic:troubleshooting).
