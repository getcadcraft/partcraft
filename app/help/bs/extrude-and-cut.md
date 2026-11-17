---
title: Istisni izbočinu i izreži kroz nju
summary: Pretvori skicu u čvrsto tijelo pomoću Istisni, postavi slijepu, srednju ravan, do ili dvosmjernu dubinu, nagib ili jednu konturu skice, zatim skiciraj na površini i Izreži džep ili prolazni žlijeb.
keywords: istisni, izbočina, istisnuta izbočina, izreži, istisnuto izrezivanje, džep, kroz sve, slijepo, srednja ravan, obrni, dubina, izreži-istisni, izbočina-istisni, podloga, do površine, do sljedeće, do vrha, pomak od površine, smjer 2, dva smjera, nagib pri istiskivanju, nagib, kontura, regija, odabrane konture
from: 3b13ff10
---

{{ui:Istisni}} gura zatvoreni profil skice ravno iz njene ravni da napravi materijal. {{ui:Izreži}} radi isto, ali uklanja materijal. Oba su isti element ispod; kasnije možeš jedan prebaciti na drugi.

## Istisni izbočinu

1. Nacrtaj zatvoreni profil i zatvori skicu (vidi [Nacrtaj prvu skicu](topic:sketch-basics)). Ostaje odabrana.
2. Odaberi {{ui:Istisni}}.

Pojavljuje se čvrsto tijelo od 10 mm, "Extrude1" se dodaje u historiju sa skicom uvučenom ispod njega, a statusna traka kaže "Extrude1 dodan. Promijeni njegove brojeve desno."

**Koja se skica koristi:** skica koju si upravo zatvorio, ili skica odabrana u historiji. Ako ništa nije odabrano, PartCraft uzima najnoviju skicu koju nijedan element ne koristi. Ako je nema: "Prvo napravi skicu: odaberi ravan, {{ui:Skica}}, nacrtaj zatvoreni profil, {{ui:Izađi}}."

### Postavi dubinu i smjer

U desnom panelu:

| Postavka | Izbori | Podrazumijevano |
|---|---|---|
| **Operacija** | Izbočina (dodaj materijal), Izreži (ukloni materijal), Presjek (zadrži preklapanje), Novo tijelo (još nije izrađeno u ovoj verziji: treba tačan kernel) | Izbočina |
| **Kraj** | Slijepo (dubina), Srednja ravan (na obje strane), Kroz sve, Do površine ili ravni, Do sljedeće površine, Do vrha, Pomak od površine | Slijepo |
| **Dubina (mm)** | Bilo koja veličina iznad nule (prikazuje se za Slijepo i Srednja ravan) | 10 |
| **Obrni smjer** | Raste na drugu stranu ravni skice (nije prikazano za Srednja ravan) | Isključeno |

Upiši broj i pritisni {{key:Enter}} ili {{key:Tab}}: dio se odmah ponovo gradi. **Srednja ravan** stavlja polovinu dubine sa svake strane skice.

### Do površine, sljedeće površine ili vrha

Još nije izrađeno u ovoj verziji: svaki kraj "do" treba tačan kernel, a element kaže "Istiskivanje do površine, sljedeće površine ili vrha: još nije izrađeno (treba tačan kernel)." Koristi slijepu dubinu koju izmjeriš. Uz tačan kernel krajevi rade ovako:

- **Do površine ili ravni**: **Do** prima ravnu površinu (Odaberi, zatim klikni na nju) ili referentnu ravan. Površina paralelna skici daje tačnu dubinu; nagnuta presijeca kraj po nagibu. Ako je površina iza skice: "… Probaj Obrni smjer."
- **Do sljedeće površine**: staje na prvoj ravnoj površini tijela koju istiskivanje sijeće (zakrivljene površine ovdje nisu podržane: to kaže).
- **Do vrha**: staje u nivou s vrhom (klikni blizu kraja ivice) ili tačkastog elementa.
- **Pomak od površine**: kao Do površine, a staje za **Pomak (mm)** prije nje (mjereno okomito na površinu).

### Dva smjera, nagib, jedna kontura

- **Drugi smjer** (Slijepo): također istiskuje **Drugu dubinu (mm)** na drugu stranu skice.
- **Nagib (°)**: bočne strane se naginju kako idu (negativno: van), kao nagib pri oblikovanju; samo jedan smjer. Još nije izrađeno u ovoj verziji (treba tačan kernel): ostavi na 0.
- **Regije**: **Odaberi regije**, zatim klikni unutar petlji koje želiš istisnuti; koriste se samo te regije (krug unutar kvadrata: klikni unutar kruga za cilindar, između njih za ploču s rupom). **Sve** vraća svaku petlju.

Ispod ovoga, **Kote skice** prikazuje vodeće kote skice, pa možeš mijenjati veličine profila bez otvaranja skice.

:::note
**Kroz sve je samo za izreze.** Izbočina postavljena na Kroz sve ne uspijeva: "Kroz sve je za izreze. Koristi dubinu za izbočinu." Prebacivanje elementa sa Izreži nazad na Izbočina mijenja Kroz sve u Slijepo umjesto tebe.
:::

## Izreži džep

1. Klikni ravnu površinu u koju želiš rezati. Ona se označava, a desni panel kaže **Površina**.
2. Odaberi {{ui:Skica na ovoj površini}} (ili {{ui:Skica}} na traci alata).
3. Nacrtaj obris džepa, na primjer pravougaonik, i postavi kote.
4. Odaberi {{ui:Izađi}}.
5. Odaberi {{ui:Izreži}}. Počinje kao **Kroz sve**: uklanja materijal kroz cijeli dio.
6. Za džep postavi **Kraj** na **Slijepo (dubina)** i upiši **Dubina (mm)**.

Rezanje ide u materijal, dalje od površine na kojoj si skicirao. Ako statusna traka kaže "Na toj strani skice nema šta izrezati. Probaj drugi smjer.", označi **Obrni smjer**.

Skica na podu džepa prati pod: promijeni dubinu džepa i skica se pomjera s njom.

## Povuci ili gurni cijelu površinu

Da površina izađe dalje ili uđe dublje, ne moraš crtati njen obris. Klikni ravnu površinu, zatim u desnom panelu:

- {{ui:Izvuci iz nje}} izvlači površinu: PartCraft dodaje skicu na površini koja drži njen obris (rupe u površini ostaju rupe) i Istisni od 10 mm.
- {{ui:Usijeci u nju}} gura površinu unutra: ista skica i Izreži do pola u dio.

Oboje je jedan korak: {{key:Mod+Z}} uklanja skicu i element zajedno. Novi element je odabran, pa odmah upiši broj i pritisni {{key:Enter}} za njegovu dubinu. Obris se kopira kao fiksne linije i lukovi: ne prati kasnije promjene površine. Ako se dio obrisa ne može kopirati (slobodna kriva), skica se otvara s onim što se moglo kopirati; završi je, zatim odaberi {{ui:Izađi}} i {{ui:Istisni}} ili {{ui:Izreži}}.

## Profili s ostrvima

Skica može imati nekoliko zatvorenih petlji. Petlje jedna pored druge postaju zasebne izbočine (ili izrezi); petlja unutar druge postaje rupa kroz izbočinu. Na primjer, pravougaonik sa dva kruga unutra se istiskuje kao ploča s dvije rupe.

Da koristiš samo neke petlje, odaberi ih pomoću **Regije** (gore); drugi element može koristiti ostale petlje iste skice.

## Uredi kasnije

- Klikni "Extrude1" u historiji da vratiš njegova podešavanja.
- Dvaput klikni njegovu skicu (uvučenu ispod njega) da otvoriš skicu; zatim je zatvori da se ponovo izgradi.
- Vidi [Promijeni dio kroz njegovu historiju](topic:edit-history) za isključivanje, vraćanje do tačke, promjenu redoslijeda i brisanje.

## Česte poruke

| Poruka | Šta uraditi |
|---|---|
| "Skica nema zatvoreni profil za istiskivanje." | Skica nema zatvorenu petlju od punih linija. Zatvori praznine ili konstrukcijske linije vrati na obične pomoću {{key:Q}} |
| "Profil je otvoren: kraj na (x, y) nije ničim spojen." | Otvori skicu i spoj taj kraj s sljedećom linijom |
| "Još nema šta izrezati." | Rezanje treba čvrsto tijelo za rezanje. Prvo napravi izbočinu |
| "Nakon ovoga od dijela ništa nije ostalo." | Izrezivanje je uklonilo sve. Provjeri njegovu veličinu i smjer |

Više u [Rješavanje problema](topic:troubleshooting).
