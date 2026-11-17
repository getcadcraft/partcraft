---
title: Izvuci izbočinu i prokopaj kroz nju
summary: Pretvori skicu u čvrsto telo pomoću Izvlačenja, postavi slepu, srednju, do-površi ili dvosmernu dubinu, nagib ili jednu konturu skice, zatim skiciraj na površi i Iseci džep ili prolazni žleb.
keywords: izvlačenje, izbočina, izvučena izbočina, iseci, izvučeni usek, džep, kroz sve, slepo, srednja ravan, obrni smer, dubina, iseci-izvuci, izbočina-izvuci, podloga, do površi, do sledeće površi, do temena, pomak od površi, smer 2, dva smera, nagib pri izvlačenju, nagib, kontura, oblast, izabrane konture
from: 3b13ff10
---

{{ui:Izvlačenje}} gura zatvoreni profil skice pravo iz njene ravni da napravi materijal. {{ui:Iseci}} radi isto, ali uklanja materijal. Obe su isti element u osnovi; jednu možeš kasnije prebaciti u drugu.

## Izvuci izbočinu

1. Nacrtaj zatvoreni profil i zatvori skicu (pogledaj [Nacrtaj prvu skicu](topic:sketch-basics)). Ostaje izabrana.
2. Izaberi {{ui:Izvlačenje}}.

Pojavljuje se čvrsto telo od 10 mm, „Extrude1“ se dodaje u istoriju sa skicom uvučenom ispod nje, a statusna traka kaže: „Extrude1 dodat. Promeni brojeve desno.“

**Koja skica se koristi:** skica koju si upravo zatvorio, ili skica izabrana u istoriji. Ako ništa nije izabrano, PartCraft uzima najnoviju skicu koju nijedan element još ne koristi. Ako nje nema: „Prvo napravi skicu: izaberi ravan, Skica, nacrtaj zatvoreni profil, Izađi.“

### Podesi dubinu i smer

U desnom panelu:

| Podešavanje | Izbor | Podrazumevano |
|---|---|---|
| **Operacija** | Izbočina (dodaje materijal), Iseci (uklanja materijal), Presek (zadržava preklop), Novo telo (još nije izgrađeno u ovoj verziji: potrebno je tačno jezgro) | Izbočina |
| **Kraj** | Slepo (dubina), Srednja ravan (na obe strane), Kroz sve, Do površi ili ravni, Do sledeće površi, Do temena, Pomak od površi | Slepo |
| **Dubina (mm)** | Bilo koja veličina iznad nule (prikazuje se za Slepo i Srednja ravan) | 10 |
| **Obrni smer** | Raste na drugu stranu ravni skice (nije prikazano za Srednja ravan) | Isključeno |

Upiši broj i pritisni {{key:Enter}} ili {{key:Tab}}: deo se odmah ponovo gradi. **Srednja ravan** stavlja polovinu dubine na svaku stranu skice.

### Do površi, sledeće površi ili temena

Nije još izgrađeno u ovoj verziji: svaki kraj „do“ zahteva tačno jezgro, a element kaže: „Izvlačenje do površi, sledeće površi ili temena: još nije izgrađeno (potrebno je tačno jezgro).“ Koristi slepu dubinu koju izmeriš. Uz tačno jezgro, krajevi rade ovako:

- **Do površi ili ravni**: **Do** uzima ravnu površ (Izaberi, pa klikni na nju) ili referentnu ravan. Površ paralelna skici daje tačnu dubinu; kosa površ seče kraj na nagibu. Ako je površ iza skice: „… Probaj Obrni smer.“
- **Do sledeće površi**: zaustavlja se na prvoj ravnoj površi tela koju izvlačenje sretne (zakrivljene površi ovde nisu podržane, i to se kaže).
- **Do temena**: zaustavlja se u nivou temena (klikni blizu kraja ivice) ili tačke.
- **Pomak od površi**: kao Do površi, zaustavlja se **Pomak (mm)** pre nje (meren normalno na površ).

### Dva smera, nagib, jedna kontura

- **Drugi smer** (Slepo): takođe izvlači **Druga dubina (mm)** na drugu stranu skice.
- **Nagib (°)**: bočne strane se naginju dok idu (negativno: napolje), kao nagib pri livenju; samo jedan smer. Nije još izgrađeno u ovoj verziji (potrebno je tačno jezgro): ostavi na 0.
- **Oblasti**: **Izaberi oblasti**, zatim klikni unutar petlji koje treba izvući; koriste se samo te oblasti (krug unutar kvadrata: klikni unutar kruga za cilindar, a između njih za ploču sa rupom). **Sve** vraća na svaku petlju.

Ispod ovoga, **Kote skice** prikazuje upravljajuće kote skice, pa možeš menjati veličine profila bez otvaranja skice.

:::note
**Kroz sve važi samo za useke.** Izbočina postavljena na Kroz sve ne uspeva sa porukom: „Kroz sve je za useke. Za izbočinu koristi dubinu.“ Kada element prebaciš iz Iseci nazad u Izbočina, Kroz sve se za tebe menja u Slepo.
:::

## Iseci džep

1. Klikni ravnu površ u koju želiš da seče. Ona se označava, a desni panel kaže **Površ**.
2. Izaberi {{ui:Skica na ovoj površi}} (ili {{ui:Skica}} na traci sa alatkama).
3. Nacrtaj obris džepa, na primer pravougaonik, i postavi mu kote.
4. Izaberi {{ui:Izađi}}.
5. Izaberi {{ui:Iseci}}. Počinje kao **Kroz sve**: uklanja materijal kroz ceo deo.
6. Za džep postavi **Kraj** na **Slepo (dubina)** i upiši **Dubina (mm)**.

Iseci ide u materijal, dalje od površi na kojoj si skicirao. Ako statusna traka kaže: „Nema šta da se iseče na toj strani skice. Probaj drugi smer.“, označi **Obrni smer**.

Skica na dnu džepa prati dno: promeni dubinu džepa i skica se pomera sa njim.

## Izvuci ili gurni celu površ

Da bi površ više izlazila ili se udubila, ne moraš da crtaš njen obris. Klikni ravnu površ, zatim u desnom panelu:

- {{ui:Izvuci iz nje}} izvlači površ: PartCraft dodaje skicu na površi sa njenim obrisom (rupe u površi ostaju rupe) i Izvlačenje od 10 mm.
- {{ui:Useci u nju}} gura površ unutra: ista skica i Iseci do polovine dela.

Oba su jedan korak: {{key:Mod+Z}} uklanja skicu i element zajedno. Novi element je izabran, pa odmah upiši broj i pritisni {{key:Enter}} za njegovu dubinu. Obris je kopiran kao fiksne linije i lukovi: ne prati kasnije promene površi. Ako deo obrisa ne može da se kopira (slobodna kriva), skica se umesto toga otvara sa onim što se moglo kopirati; završi je, zatim izaberi {{ui:Izađi}} i {{ui:Izvlačenje}} ili {{ui:Iseci}}.

## Profili sa ostrvima

Skica može da sadrži više zatvorenih petlji. Petlje koje stoje jedna pored druge postaju odvojene izbočine (ili useci); petlja unutar druge postaje rupa kroz izbočinu. Na primer, pravougaonik sa dva kruga unutra izvlači se kao ploča sa dve rupe.

Da koristiš samo neke petlje, izaberi ih preko **Oblasti** (gore); drugi element može koristiti ostale petlje iste skice.

## Kasnija izmena

- Klikni „Extrude1“ u istoriji da vratiš njegova podešavanja.
- Dvaput klikni njegovu skicu (uvučenu ispod njega) da je otvoriš; zatvori je da bi se deo ponovo izgradio.
- Pogledaj [Promeni deo kroz njegovu istoriju](topic:edit-history) za isključivanje, vraćanje, redosled i brisanje.

## Uobičajene poruke

| Poruka | Šta da uradiš |
|---|---|
| „Skica nema zatvoreni profil za izvlačenje.“ | Skica nema zatvorenu petlju od punih linija. Zatvori praznine ili vrati konstrukcione linije tasterom {{key:Q}} |
| „Profil je otvoren: kraj na (x, y) nije ničim spojen.“ | Otvori skicu i spoji taj kraj sa sledećom linijom |
| „Još nema šta da se iseče.“ | Iseci treba čvrsto telo koje će seći. Prvo napravi izbočinu |
| „Ništa nije ostalo od dela posle ovoga.“ | Iseci je uklonio sve. Proveri njegovu veličinu i smer |

Više u [Rešavanje problema](topic:troubleshooting).
