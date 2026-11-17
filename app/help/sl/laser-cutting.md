---
title: Pošljite risbo na laser
summary: Izberite, kaj počne vsak sloj (rez, zarezovanje, graviranje, polnjenje, slika), predogledajte premike glave, shranite G-kodo za način laserja GRBL ali jo pošljite iz brskalnika po obhodu okvirja naloga.
keywords: laser, laserski rezalnik, laserski graver, GRBL, G-koda, graviranje, polnjenje, ditering, graviranje slike, zarezovanje, rez, Web Serial, Linux, obhod okvirja naloga, moč, hitrost, prehodi
from: 327b3c46
---

Podokno {{ui:Laser}} spremeni sloje risbe v program za laser, ki deluje z GRBL (večina hobijevskih in manjših delavniških diodnih in CO2 krmilnikov). V PartCraftu izberite {{ui:Izvoz}} › {{ui:Laserski program…}}, nato {{ui:Dodaj obrise iz DXF…}}: obrisi in izvrtine pridejo na sloj CUT. Ravni vzorci pločevinastih delov (z linijami pregibov na sloju BEND) potrebujejo točno jedro, ki ga ta različica nima. Nastavitve se shranijo v datoteko dela ali sestava.

:::warning
Vsako nastavitev najprej preizkusite na odpadnem materialu, nosite zaščito za oči, ki ustreza vašemu laserju, zaprite pokrov, kjer ga je, in nikoli ne puščajte delujočega laserja brez nadzora. Številke, s katerimi začne sloj, so nadomestki, ne priporočila za noben material.
:::

## Izberite, kaj počne vsak sloj

Vsak sloj risbe je vrstica. {{ui:Opravilo}} nastavi na **Rez**, **Zarezovanje**, **Graviraj črte**, **Napolni oblike**, **Graviraj sliko** ali **Ne pošlji**, z {{ui:Moč %}}, {{ui:Hitrost mm/min}} in številom {{ui:Prehodi}}.

- **Polnjenje** požge notranjost zaprtih oblik s črtami, na razmiku {{ui:Razmik črt}}, pod {{ui:Kot}}, v obeh smereh ali v eni, s prevozom čez rob, da je glava pri hitrosti, ko se laser prižge; križno šrafiranje doda drugi prehod pod 90°. Oblika z luknjo ostane na luknji odprta.
- **Graviranje slike** spremeni sliko v pike (Floyd–Steinberg, Atkinson, urejeno ali preprosto črno-belo pri pragu) ali, z *Stopnje sivine*, v spremenljivo moč.
- Vrstni red: najprej slike in polnjenja, nato graviranje črt, nato zarezovanja, nato rezi, da se izrezani del med graviranjem ne premakne. Znotraj enega sloja poti tečejo **najprej notranje** (luknja pred ploščo, v kateri je), vedno do najbližje.

## Predogled, nato shranjevanje

Predogled nariše, kaj glava dela: goreče črte v barvi, hitri premiki v sivi, zelen okvir okoli vsega, kar gori. Pod njim so velikost, dolžina žarenja in ocena časa (brez pospeška; pravi stroj potrebuje dlje). {{ui:Shrani G-kodo…}} zapiše G-kodo za način laserja GRBL: `$32=1`, `M4` (ali `M3`) z vrednostmi S, premike `G0` in `G1`, na koncu `M5`. X0 Y0 je spodnji levi kot naloga, razen če izberete izhodišče risbe: tam nastavite ničlo dela na svojem stroju. G-koda sledi dokumentiranemu načinu laserja GRBL; na pravem laserju še ni bila preizkušena.

## Pošiljanje iz brskalnika

V Chromu in Edgeu {{ui:Poveži…}} zahteva, da izberete USB vrata laserja. Nič se ne poveže in ničesar ne pošlje, dokler ne pritisnete gumba. Najprej pritisnite {{ui:Obhodi okvirja naloga}}: glava obkroži okvir naloga z ugasnjenim laserjem (ali pri nizki moči, ki jo nastavite za kazalec), da vidite, kje bo gorelo. Šele nato se vklopi {{ui:Pošlji nalog}}, ki se spet izklopi, če kaj spremenite. {{ui:Premor}} zadrži glavo, {{ui:Ustavi}} jo prav tako zadrži, ponastavi krmilnik (laser se ugasne) in pošlje `M5`. Kjer Web Serial manjka (Firefox, Safari in CadCraft Studio, katerega spletni pogled ga še nima), shranite G-kodo in jo pošljite s programom svojega laserja.

## Še ni izdelano

Formati drugih krmilnikov (Ruida, laserji Marlin, datoteke proizvajalcev), zavihki in uvodne linije, odmik reza (kerf), knjižnice materialov, rotacijska in Z-os, poravnava s kamero.
