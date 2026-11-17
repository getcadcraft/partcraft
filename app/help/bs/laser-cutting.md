---
title: Pošalji crtež laseru
summary: Odredi šta svaki sloj radi (izreži, urezi, graviraj, popuni, slika), pregledaj kretanja glave, spasi G-kod GRBL laserskog režima ili ga pošalji iz pretraživača nakon ocrtavanja posla.
keywords: laser, laserski rezač, laserski graver, GRBL, G-kod, graviranje, popuna, ditheriranje, graviranje slike, urezivanje, rezanje, Web Serial, Linux, ocrtaj posao, snaga, brzina, prolazi
from: 327b3c46
---

Panel {{ui:Laser}} pretvara slojeve crteža u program za laser koji radi na GRBL-u (većina hobi i malih radioničkih dioda i CO2 kontrolera). U PartCraft-u odaberi {{ui:Izvoz}} › {{ui:Program za lasersko rezanje…}}, zatim {{ui:Dodaj konture iz DXF-a…}}: konture i rupe ulaze na sloju CUT. Ravni razvoji dijelova od lima (sa linijama savijanja na sloju BEND) traže tačan kernel, koji ova verzija nema. Postavke se čuvaju u datoteci dijela ili sklopa.

:::warning
Prvo svaku postavku isprobaj na otpatku, nosi zaštitne naočale koje odgovaraju tvom laseru, drži poklopac zatvoren gdje ga ima, i nikad ne ostavljaj pokrenut laser bez nadzora. Brojevi s kojima sloj počinje su privremeni, nisu preporuke ni za jedan materijal.
:::

## Odaberi šta svaki sloj radi

Svaki sloj crteža je red. {{ui:Radi}} postavlja na **Izreži**, **Urezi**, **Graviraj linije**, **Popuni oblike**, **Graviraj sliku** ili **Ne šalji**, sa {{ui:Snaga %}}, {{ui:Brzina mm/min}} i brojem {{ui:Prolazi}}.

- **Popunjavanje** izgara unutrašnjost zatvorenih oblika linijama, na razmaku {{ui:Razmak linija}}, pod {{ui:Ugao}}, u oba smjera ili jednom, sa prekoračenjem da glava bude na brzini kad se laser uključi; unakrsno šrafiranje dodaje drugi prolaz pod 90°. Oblik sa rupom ostaje otvoren na rupi.
- **Graviraj sliku** pretvara sliku u tačke (Floyd–Steinberg, Atkinson, uređeno ili obična crno-bijela sa pragom) ili, uz *Nivoi sive*, u promjenjivu snagu.
- Redoslijed: prvo slike i popune, zatim graviranje linija, pa urezi, pa izrezi, tako da se dio koji se izrezuje ne pomjeri dok se gravira. Unutar jednog sloja putanje idu **unutra-prvo** (rupa prije ploče u kojoj je), a sljedeća je najbliža.

## Pregledaj, pa spasi

Pregled crta šta glava radi: linije koje se pale u boji, brza kretanja sivo, a zeleni okvir oko svega što se pali. Ispod su veličina, dužina paljenja i procjena vremena (bez ubrzanja; pravi stroj traje duže). {{ui:Spasi G-kod…}} piše G-kod GRBL laserskog režima: `$32=1`, `M4` (ili `M3`) sa S vrijednostima, `G0` i `G1` kretanja, `M5` na kraju. X0 Y0 je donji lijevi ugao posla, osim ako ne odabereš ishodište crteža: postavi nulu rada svog stroja tamo. G-kod prati dokumentovani laserski režim GRBL-a; još nije isproban na pravom laseru.

## Pošalji iz pretraživača

U Chrome-u i Edge-u, {{ui:Poveži…}} traži da odabereš USB port lasera. Ništa se ne povezuje niti šalje dok ne pritisneš dugme. Prvo pritisni {{ui:Ocrtaj posao}}: glava ocrtava okvir posla sa laserom **isključenim** (ili na maloj snazi koju postaviš za pokazivač), da vidiš gdje će izgorjeti. Tek tada se uključuje {{ui:Pošalji posao}}, a ponovo se isključuje ako nešto promijeniš. {{ui:Pauziraj}} zadržava glavu, {{ui:Zaustavi}} je također zadržava, resetuje kontroler (laser se gasi) i šalje `M5`. Gdje Web Serial nedostaje (Firefox, Safari i CadCraft Studio, čiji web prikaz ga još nema), spasi G-kod i pošalji ga programom svog lasera.

## Još nije napravljeno

Formati drugih kontrolera (Ruida, Marlin laseri, datoteke proizvođača), mostovi i uvodni potezi, ofset reza (kerf), biblioteke materijala, rotaciona i Z osa, poravnanje kamerom.
