---
title: Pošalji crtež laseru
summary: Izaberite šta svaki sloj radi (sečenje, urezivanje, graviranje, popunjavanje, slika), pregledajte kretanja glave, sačuvajte G-kod u GRBL laserskom režimu ili ga pošaljite iz pregledača nakon uokvirivanja posla.
keywords: laser, laserski rezač, laserski graver, GRBL, G-kod, graviranje, popunjavanje, dithering, graviranje slike, urezivanje, sečenje, Web Serial, Linux, uokviri posao, snaga, brzina, prolazi
from: 327b3c46
---

Panel {{ui:Laser}} pretvara slojeve crteža u program za laser koji radi sa GRBL-om (većina hobi i manjih radionica sa diodnim i CO2 kontrolerima). U PartCraft-u izaberite {{ui:Izvezi}} › {{ui:Laserski program…}}, pa {{ui:Dodaj konture iz DXF-a…}}: konture i rupe se uvoze na sloj CUT. Ravni šabloni delova od lima (sa linijama savijanja na sloju BEND) zahtevaju tačno jezgro, koje ova verzija nema. Podešavanja se čuvaju u datoteci dela ili sklopa.

:::warning
Svako podešavanje prvo probajte na otpadu, nosite zaštitne naočare koje odgovaraju vašem laseru, držite poklopac zatvorenim tamo gde ga ima i nikad ne ostavljajte uključen laser bez nadzora. Brojevi s kojima sloj počinje su privremene vrednosti, a ne preporuke ni za jedan materijal.
:::

## Izaberite šta svaki sloj radi

Svaki sloj crteža je jedan red. {{ui:Radi}} ga postavlja na **Sečenje**, **Urezivanje**, **Graviranje linija**, **Popunjavanje oblika**, **Graviranje slike** ili **Ne šalje se**, uz {{ui:Snaga %}}, {{ui:Brzina mm/min}} i broj {{ui:Prolazi}}.

- **Popunjavanje** prožiže unutrašnjost zatvorenih oblika linijama, na razmaku {{ui:Razmak linija}}, pod uglom {{ui:Ugao}}, u oba smera ili u jednom, sa prebegom da glava bude na brzini kada se laser upali; ukrštena šrafura dodaje drugi prolaz pod 90°. Oblik sa rupom ostaje otvoren na rupi.
- **Graviranje slike** pretvara sliku u tačke (Floyd–Steinberg, Atkinson, uređeno ili običan crno-beli prikaz na pragu) ili, sa *Nivoi sive*, u promenljivu snagu.
- Redosled: prvo slike i popunjavanja, zatim graviranje linija, pa urezivanja, pa sečenja, tako da izrezani deo ne pomera dok se gravira. Unutar jednog sloja putanje idu **prvo unutra** (rupa pre ploče u kojoj se nalazi), a zatim sledeća najbliža.

## Pregled, pa čuvanje

Pregled prikazuje šta glava radi: linije koje laser urezuje u boji, brza kretanja sivo i zelen okvir oko svega što se seče ili gravira. Ispod njega su veličina, dužina reza i procena vremena (bez ubrzanja; pravi uređaj traje duže). {{ui:Sačuvaj G-kod…}} piše G-kod u GRBL laserskom režimu: `$32=1`, `M4` (ili `M3`) sa S vrednostima, `G0` i `G1` kretanja, `M5` na kraju. X0 Y0 je donji levi ugao posla, osim ako izaberete početak crteža: tada na tom mestu postavite nulu rada vašeg uređaja. G-kod prati dokumentovani laserski režim GRBL-a; još nije isproban na pravom laseru.

## Slanje iz pregledača

U Chrome i Edge pregledaču, {{ui:Poveži…}} traži da izaberete USB port lasera. Ništa se ne povezuje i ništa se ne šalje dok ne pritisnete dugme. Prvo pritisnite {{ui:Uokviri posao}}: glava ocrtava okvir posla sa **isključenim** laserom (ili na maloj snazi koju postavite za pokazivač), pa vidite gde će se seći. Tek tada se uključuje {{ui:Pošalji posao}}, i ponovo se isključuje ako nešto promenite. {{ui:Pauziraj}} zadržava glavu, {{ui:Zaustavi}} takođe zaustavlja glavu, resetuje kontroler (laser se gasi) i šalje `M5`. Gde nema Web Serial-a (Firefox, Safari i CadCraft Studio, čiji web prikaz ga još nema), sačuvajte G-kod i pošaljite ga preko sopstvenog programa lasera.

## Još nije urađeno

Formati drugih kontrolera (Ruida, Marlin laseri, datoteke proizvođača), mostovi i uvodni lukovi, kompenzacija širine reza, biblioteke materijala, rotaciona i Z osa, poravnanje kamerom.
