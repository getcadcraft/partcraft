---
title: Začnite s PartCraft
summary: Kaj PartCraft danes počne, kaj potrebuje vaš brskalnik in prvi del v desetih minutah, od skice do shranjene datoteke.
keywords: začetek, prvi zagon, hitri začetek, uvod, učbenik, prvi del, ploščica, parametrično, modeliranje delov
from: 7d43283f
---

PartCraft je aplikacija za parametrične dele in sestave iz družine CadCraft. Narišete 2D skico, jo utrdite z relacijami in kotami, jo spremenite v telo z značilkami, kot so iztisnitev, zavrtitev in luknja, in kasneje spremenite katerokoli število: del se obnovi iz svoje zgodovine. Deli nato gredo v sestave, kjer sklepi določijo njihov položaj in omogočijo preverjanje gibanja.

Kaj ta izdaja počne:

| Opravilo | Kaj dobite |
|---|---|
| Skice | Črte, pravokotniki, krogi, loki, točke in središčnice z relacijami in kotami ter stanjem v živo: premalo, popolnoma ali preveč določeno |
| Značilke teles | Iztisnitev, izrez, zavrtitev, zavrteni izrez, preproste in luknje z zareznico, linearni in krožni vzorci, zrcaljenje, zaobljave in posnetja na robovih med ravnimi ploskvami ter lupine in nagibi izvleka na ravnih ploskvah. Vlečenja po poti, prehodi in druge značilke, ki potrebujejo natančno jedro, v tej različici še niso izdelani: glejte [Kaj še ni izdelano](topic:not-built-yet) |
| Zgodovina | Uredite številke katere koli značilke, jo začasno izklopite, vrnete nazaj, prerazporedite in izbrišete, z razveljavitvijo |
| Sestave | Deli, povezani s togimi, rotacijskimi in drsnimi sklepi, preverjanje kolizij in preverjanje gibanja |
| Risbe | List A3 s tremi pogledi, izometrijo, prerezom, podrobnim pogledom, skupnimi merami, referenčnimi ravninami, okvirji kontrole značilk in simboli kakovosti površine, izvožen kot PDF |
| Datoteke | Lastne datoteke delov in sestav; izvoz v STL, 3MF, natančni STEP, DXF in PDF |

Vse teče v vašem brskalniku, na vašem računalniku. **Nič se ne naloži.** Kam gredo datoteke, glejte [Datoteke: odpiranje, shranjevanje in izvoz](topic:files).

## Kaj potrebujete

- Trenutni Chrome, Edge, Firefox ali Safari z vklopljenima **WebGL** (3D-grafika) in **WebAssembly**. Oba sta privzeto vklopljena. Geometrijo teles gradi mrežno jedro WebAssembly, ki se naloži skupaj z aplikacijo: glejte [Mrežno jedro](topic:solid-kernels).
- Najlažje je z miško. Sledilna ploščica deluje, zaslon na dotik pa za ogled in preproste skice: glejte [Sledilna ploščica, dotik in majhni zasloni](topic:trackpad-and-touch).
- Zaslon, širok vsaj 1280 slikovnih pik, prikaže celotno orodno vrstico v eni vrsti. Ožja okna orodno vrstico pomikajo vstran; na telefonu se plošče odprejo kot listi z vrstice na dnu.

Več o brskalnikih: [Brskalniki in računalniki](common:browsers).

:::note
PartCraft deluje v brskalniku, na namizju pa znotraj CadCraft Studio. Shranjevanje v oblak še ni na voljo: dele odprete iz računalnika in jih kot datoteke shranite nazaj vanj.
:::

## Odprite PartCraft

1. Odprite PartCraft.
2. Počakajte, dokler zaslon ne prikaže „Nalaganje jedra za telesa …“. Prvič to traja trenutek.
3. Vidite prazen 3D-pogled s tremi osnovnimi ravninami, zgodovino na levi (Part1, nato Sprednja ravnina, Zgornja ravnina, Desna ravnina) in škatlo v pogledu z naslovom „Začni del“.
4. Značka blizu desnega konca vrstice stanja pravi „Mrežno jedro“: PartCraft v tej različici gradi vse dele z mrežnim jedrom, zato so okrogle ploskve ravne fasete. Modeliranje lahko začnete takoj.

Če pogled pravi, da brskalnik ne more prikazati 3D, ali jedro ni bilo naloženo, glejte [Reševanje težav](topic:troubleshooting#the-app-does-not-start).

## Vaš prvi del: ploščica z luknjo

Naredili boste ploščico 60 × 40 mm, debelo 10 mm, s 6 mm luknjo skozi njo. Enote so milimetri.

### Skicirajte obris

1. V zgodovini na levi kliknite **Sprednja ravnina**. Ravnina se v pogledu označi.
2. V orodni vrstici izberite {{ui:Skica}} ali pritisnite {{key:S}}. Pogled se obrne naravnost proti ravnini, orodje Črta pa je aktivno.
3. Pritisnite {{key:R}} za orodje Pravokotnik.
4. Premaknite kazalec na izhodišče (majhen rdeč krog s križcem). Majhen kvadrat pokaže, da se prilepi. Kliknite.
5. Premaknite se navzgor in desno ter znova kliknite. Imate pravokotnik. Njegove črte so modre: modra pomeni, da se še lahko premikajo.

### Določite mere

1. Pritisnite {{key:D}} za orodje Kota.
2. Kliknite zgornjo črto, nato malo nad njo. Odpre se polje za število s trenutno dolžino.
3. Vnesite `60` in pritisnite {{key:Enter}}. Pravokotnik se spremeni na širino 60 mm.
4. Kliknite levo črto, nato malo levo od nje. Vnesite `40` in pritisnite {{key:Enter}}.

Značka v zgornjem levem kotu pogleda zdaj pravi **Popolnoma določeno**, črte pa postanejo črne (na temi Papir) oziroma svetle (na temi Model). Vsaka točka in mera je določena.

:::tip
E če ste pravokotnik začeli stran od izhodišča, značka še vedno pravi „Premalo določeno · 2 prostostni stopnji“. Pritisnite {{key:S}} za Izbiro, kliknite eno oglišče, {{key:Shift}}+klik na izhodišče, nato na desni plošči izberite {{ui:• Sovpadanje}}.
:::

### Iztisnite

1. V orodni vrstici izberite {{ui:Izhod}} ali pritisnite {{key:Esc}}, dokler se skica ne zapre (običajno dvakrat).
2. Izberite {{ui:Iztisni}}. Pojavi se 10 mm telo. „Extrude1“ se doda v zgodovino, „Sketch1“ pa je pod njim zamaknjena.
3. Desna plošča prikazuje nastavitve iztisnitve. Za spremembo debeline vnesite novo število v **Globina (mm)** in pritisnite {{key:Enter}} ali {{key:Tab}}. Del se takoj obnovi.

### Dodajte luknjo

1. Kliknite veliko ravno ploskev na sprednji strani ploščice (konec iztisnitve). Cela ploskev se označi, desna plošča pa pravi **Ploskev**.
2. Na desni plošči izberite {{ui:Skica na tej ploskvi}}.
3. Pritisnite {{key:P}} za orodje Točka in kliknite blizu sredine ploskve.
4. Izberite {{ui:Izhod}}.
5. Izberite {{ui:Izvrtina}}. Skozi ploščico gre 6 mm luknja. Po želji spremenite **Premer (mm)** na desni plošči.

Polje **Del** na levi spodaj zdaj prikazuje prostornino, površino, velikost (60 × 40 × 10 mm) in „Luknje skozi: 1“.

### Shranite

1. Pritisnite {{key:Mod+S}} ali izberite {{ui:Shrani}}.
2. Brskalnik prenese `Part1.partcraft.json` v mapo za prenose. Datoteka hrani celotno zgodovino: znova jo odprite z {{ui:Odpri}}, da nadaljujete urejanje.

Če želite del najprej preimenovati, kliknite prazen prostor v pogledu, da nič ni izbrano, in na desni plošči vnesite novo **Ime**.

## Kam naprej

- [Narišite prvo skico](topic:sketch-basics) in [Popolnoma določite skico](topic:relations-dimensions) podrobno razložita skiciranje.
- [Spremenite del prek njegove zgodovine](topic:edit-history) prikaže, kako urejate zgrajeno.
- [Zaobljanje, posnemanje in lupine](topic:fillet-chamfer-shell) ter [Izdelava risbe](topic:drawing-pdf) dokončata del. [Kaj še ni izdelano](topic:not-built-yet) navaja, kaj ta različica ne zmore, na primer vlečenja po poti in prehode.
- [Prihajate iz drugega parametričnega modelirnika](topic:coming-from) navaja navade, ki tukaj delujejo drugače.
- [Tipke in miška](topic:keyboard) je celoten seznam bližnjic.
- [Uporaba te pomoči](common:help).
