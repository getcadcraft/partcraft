---
title: Začetek s PartCraft
summary: Kaj PartCraft danes počne, kaj potrebuje vaš brskalnik ter prvi del v desetih minutah, od skice do shranjene datoteke.
keywords: začetek, prvi zagon, hitri začetek, uvod, vadnica, prvi del, plošča, parametrično, modeler delov
from: 5f0a668d
---

PartCraft je parametrična aplikacija za dele in sestave iz družine CadCraft. Narišete 2D skico, jo pritrdite z relacijami in kotami ter jo z značilkami, kot so iztiskanje, zavrtitev in izvrtina, spremenite v trdno telo. Katero koli število lahko pozneje spremenite: del se ponovno izdela iz svoje zgodovine. Deli nato gredo v sestave, kjer jih spoji postavijo na mesto in omogočijo preverjanje gibanja.

Kaj ta različica počne:

| Opravilo | Kaj dobite |
|---|---|
| Skice | Črte, pravokotniki, krožnice, loki, točke in osne črte z relacijami in kotami ter stanjem v živo: premalo, popolnoma ali preveč določeno |
| Značilke teles | Iztiskanje, izrez, zavrtitev, zavrtljiv izrez, preprosta in razširjena izvrtina, linearni in krožni vzorci, zrcaljenje, zaobljenja in posnetja na ravnih robovih med ravnimi ploskvami ter lupine in nagibi na ravnih ploskvah. Potegovanje po poti, prehodi in druge značilke, ki potrebujejo točno jedro, še niso izdelane v tej različici: glejte [Kaj še ni izdelano](topic:not-built-yet) |
| Zgodovina | Urejanje številk katere koli značilke, izklop, povrnitev, preurejanje in brisanje, z razveljavitvijo |
| Sestavi | Deli, spojeni s togimi, zasučnimi in drsnimi spoji, preverjanje kolizij in preverjanje gibanja |
| Risbe | List risbe formata A3 s tremi pogledi, izometrijo, prerezom, pogledom z detajlom, skupnimi merami, referenčnimi bazami, okvirji toleranc oblike in položaja ter simboli površinske obdelave, izvoženo kot PDF |
| Datoteke | Lastne datoteke delov in sestavov; izvoz v STL, 3MF, fasetiran STEP, DXF in PDF |

Vse teče v vašem brskalniku, na vašem računalniku. **Nič se ne naloži.** Glejte [Datoteke: odpiranje, shranjevanje in izvoz](topic:files), kam gredo datoteke.

## Kaj potrebujete

- Trenutni Chrome, Edge, Firefox ali Safari z vklopljenima **WebGL** (3D grafika) in **WebAssembly**. Oba sta privzeto vklopljena. Geometrijo trdnih teles gradi jedro mreže WebAssembly, ki se naloži z aplikacijo: glejte [Jedro mreže](topic:solid-kernels).
- Najlažje je z miško. Sledilna ploščica deluje, zasloni na dotik pa delujejo za ogled in preprosto skiciranje: glejte [Sledilna ploščica, dotik in majhni zasloni](topic:trackpad-and-touch).
- Zaslon, širok vsaj 1280 slikovnih pik, pokaže celotno orodno vrstico v eni vrstici. Ožja okna imajo orodno vrstico, ki se pomika vstran; na telefonu se podokna odprejo kot listi iz vrstice na dnu.

Več o brskalnikih: [Brskalniki in računalniki](common:browsers).

:::note
PartCraft teče v brskalniku, na namizju pa znotraj CadCraft Studio. Shranjevanje v oblak še ni na voljo: dele odprete iz računalnika in jih shranite nazaj kot datoteke.
:::

## Odprite PartCraft

1. Odprite PartCraft.
2. Počakajte, medtem ko zaslon piše „Nalaganje jedra za trdna telesa…“. Prvič to traja trenutek.
3. Videli boste prazen 3D pogled s tremi osnovnimi ravninami, zgodovino na levi („Part1“, nato Sprednja ravnina, Zgornja ravnina, Desna ravnina) in okvir v pogledu z naslovom „Začnite del“.
4. Oznaka ob desnem koncu vrstice stanja pravi „Jedro mreže“: PartCraft v tej različici vsak del gradi z jedrom mreže, zato so okrogle ploskve sestavljene iz ravnih faset. Lahko takoj začnete modelirati.

Če pogled pravi, da brskalnik ne more prikazati 3D ali se jedro ni naložilo, glejte [Odpravljanje težav](topic:troubleshooting#the-app-does-not-start).

## Vaš prvi del: plošča z izvrtino

Naredili boste ploščo 60 × 40 mm, debelo 10 mm, z izvrtino 6 mm skozi. Enote so milimetri.

### Narišite obris

1. Kliknite **Sprednja ravnina** v zgodovini na levi. Ravnina se v pogledu označi.
2. Izberite {{ui:Skica}} v orodni vrstici ali pritisnite {{key:S}}. Pogled se obrne naravnost proti ravnini, orodje Črta pa je aktivno.
3. Pritisnite {{key:R}} za orodje Pravokotnik.
4. Premaknite kazalec na izhodišče (majhen rdeč krogec s križcem). Majhen kvadrat pokaže, da se prilepi. Kliknite.
5. Premaknite navzgor in desno ter spet kliknite. Imate pravokotnik. Njegove črte so modre: modra pomeni, da se še lahko premaknejo.

### Določite mere

1. Pritisnite {{key:D}} za orodje Kota.
2. Kliknite zgornjo črto, nato kliknite malo nad njo. Odpre se polje za število s trenutno dolžino.
3. Vpišite `60` in pritisnite {{key:Enter}}. Pravokotnik se razširi na 60 mm.
4. Kliknite levo črto, nato kliknite malo levo od nje. Vpišite `40` in pritisnite {{key:Enter}}.

Oznaka v zgornjem levem kotu pogleda zdaj pravi **Popolnoma določeno**, črte pa postanejo barve črnila (črne na temi Papir, svetle na temi Model). Vsaka točka in mera sta fiksirani.

:::tip
Če ste pravokotnik začeli stran od izhodišča, oznaka še vedno pravi „Premalo določeno · 2 stopnji prostosti“. Pritisnite {{key:S}} za orodje Izberi, kliknite en vogal, {{key:Shift}}+klik na izhodišče, nato izberite {{ui:• Sovpadanje}} v desnem podoknu.
:::

### Iztisnite

1. Izberite {{ui:Izhod}} v orodni vrstici ali pritiskajte {{key:Esc}}, dokler se skica ne zapre (po navadi dvakrat).
2. Izberite {{ui:Iztisni}}. Pojavi se 10 mm trdno telo. „Extrude1“ se doda v zgodovino, „Sketch1“ pa se uvleče pod njo.
3. Desno podokno prikaže nastavitve iztiskanja. Za spremembo debeline vpišite novo število v polje **Globina (mm)** in pritisnite {{key:Enter}} ali {{key:Tab}}. Del se takoj ponovno izdela.

### Dodajte izvrtino

1. Kliknite veliko ravno ploskev spredaj na plošči (konec iztisa). Cela ploskev se označi, desno podokno pa pravi **Ploskev**.
2. Izberite {{ui:Skica na tej ploskvi}} v desnem podoknu.
3. Pritisnite {{key:P}} za orodje Točka in kliknite blizu sredine ploskve.
4. Izberite {{ui:Izhod}}.
5. Izberite {{ui:Izvrtina}}. Skozi ploščo gre izvrtina 6 mm. Če želite, spremenite **Premer (mm)** v desnem podoknu.

Polje **Del** spodaj levo zdaj prikazuje prostornino, površino, velikost (60 × 40 × 10 mm) in „Skozi izvrtine: 1“.

### Shranite

1. Pritisnite {{key:Mod+S}} ali izberite {{ui:Shrani}}.
2. Brskalnik prenese `Part1.partcraft.json` v mapo za prenose. Datoteka hrani celotno zgodovino: z {{ui:Odpri}} jo znova odprite in nadaljujte z urejanjem.

Za preimenovanje dela najprej kliknite prazen prostor v pogledu, da nič ni izbrano, nato pa v desnem podoknu vpišite novo **Ime**.

## Kam naprej

- [Narišite prvo skico](topic:sketch-basics) in [Popolnoma določite skico](topic:relations-dimensions) razložita skicer podrobneje.
- [Spremenite del prek njegove zgodovine](topic:edit-history) kaže, kako urediti, kar ste zgradili.
- [Zaobljenje, posnetje in lupina](topic:fillet-chamfer-shell) ter [Izdelajte risbo](topic:drawing-pdf) dokončata del. [Kaj še ni izdelano](topic:not-built-yet) našteje, kaj ta različica še ne počne, na primer potegovanje po poti in prehode.
- [Prihod iz drugega parametričnega modelirnika](topic:coming-from) našteje navade, ki tukaj delujejo drugače.
- [Tipke in miška](topic:keyboard) je celoten seznam bližnjic.
- [Uporaba te pomoči](common:help).
