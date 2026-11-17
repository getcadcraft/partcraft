---
title: Slanje crteža na laser
summary: Odredite što svaki sloj radi (rezanje, urezivanje, graviranje, popunjavanje, slika), pregledajte kretanja glave, spremite G-kod za laser u GRBL načinu ili ga pošaljite iz preglednika nakon uokvirivanja posla.
keywords: laser, laserski rezač, laserski graver, GRBL, G-kod, graviranje, popunjavanje, raspršivanje, graviranje slike, urezivanje, rezanje, Web Serial, Linux, uokviri posao, snaga, brzina, prolazi
from: 327b3c46
---

Ploča {{ui:Laser}} pretvara slojeve crteža u program za laser koji radi s GRBL upravljačem (većina hobističkih i malih radionica s diodnim i CO2 upravljačima). U PartCraftu odaberite {{ui:Izvoz}} › {{ui:Laserski program…}}, zatim {{ui:Dodaj obrise iz DXF-a…}}: obrisi i provrti ulaze na sloj CUT. Ravni uzorci limenih dijelova (s linijama savijanja na sloju BEND) trebaju egzaktnu jezgru, koju ova verzija nema. Postavke se spremaju u datoteku dijela ili sklopa.

:::warning
Svaku postavku prvo isprobajte na otpadnom materijalu, nosite zaštitne naočale koje odgovaraju vašem laseru, zatvorite poklopac ako ga ima i nikada ne ostavljajte uključen laser bez nadzora. Brojevi s kojima sloj počinje su privremeni, nisu preporuke ni za jedan materijal.
:::

## Odredite što svaki sloj radi

Svaki sloj crteža je redak. Stupac {{ui:Radi}} postavlja ga na **Rezanje**, **Urezivanje**, **Graviraj linije**, **Popuni oblike**, **Graviraj sliku** ili **Ne šalji**, uz {{ui:Snaga %}}, {{ui:Brzina mm/min}} i broj {{ui:Prolazi}}.

- **Popunjavanje** izgara unutrašnjost zatvorenih oblika linijama, na razmaku {{ui:Razmak linija}}, pod {{ui:Kut}}, u oba smjera ili u jednom, uz prebačaj tako da glava bude na brzini kad se laser uključi; unakrsno šrafiranje dodaje drugi prolaz pod 90°. Oblik s provrtom ostaje otvoren na provrtu.
- **Graviranje slike** pretvara sliku u točkice (Floyd–Steinberg, Atkinson, uređeno ili čisto crno-bijelo uz prag) ili, uz *Sivi tonovi*, u promjenjivu snagu.
- Redoslijed: prvo slike i popunjavanja, zatim graviranje linija, zatim urezivanja, pa rezanja, tako da se izrezani dio ne pomakne dok se gravira. Unutar jednog sloja putanje idu **prvo unutarnje** (provrt prije ploče u kojoj je), a sljedeća je najbliža.

## Pregled, zatim spremanje

Pregled prikazuje što glava radi: linije za izgaranje u boji, brza kretanja sivo i zeleni okvir oko svega što izgara. Ispod njega su veličina, duljina izgaranja i procjena vremena (bez ubrzanja; stvarni stroj traje dulje). {{ui:Spremi G-kod…}} zapisuje G-kod u GRBL načinu rada lasera: `$32=1`, `M4` (ili `M3`) s vrijednostima S, `G0` i `G1` pomake, `M5` na kraju. X0 Y0 je donji lijevi kut posla, osim ako odaberete ishodište crteža: na tom mjestu postavite nulu rada vašeg stroja. G-kod prati dokumentirani GRBL način rada lasera; na pravom laseru još nije isproban.

## Slanje iz preglednika

U Chromeu i Edgeu {{ui:Poveži…}} traži da odaberete USB priključak lasera. Ništa se ne povezuje niti šalje dok ne pritisnete gumb. Najprije pritisnite {{ui:Uokviri posao}}: glava ocrta okvir posla s laserom **isključenim** (ili na maloj snazi koju postavite za pokazivač) da vidite gdje će izgarati. Tek tada se uključuje {{ui:Pošalji posao}}, i ponovno se isključuje ako nešto promijenite. {{ui:Pauziraj}} zadržava glavu, {{ui:Zaustavi}} je također zadržava, resetira upravljač (laser se gasi) i šalje `M5`. Tamo gdje nema Web Serial sučelja (Firefox, Safari i CadCraft Studio, čiji web prikaz ga još nema), spremite G-kod i pošaljite ga vlastitim programom lasera.

## Još nije izrađeno

Formati drugih upravljača (Ruida, laseri s Marlinom, datoteke proizvođača), jezičci i uvodne linije, kompenzacija širine reza, knjižnice materijala, rotacijska i Z os, poravnavanje kamerom.
