---
title: Styreplate, berøring og små skjermer
summary: Slik snur, panorerer og zoomer du med en Mac- eller bærbar styreplate, hva som virker på en berøringsskjerm og hva som fortsatt trenger et tastatur, og hvordan skjermen ordnes om på en telefon eller et smalt vindu.
keywords: styreplate, touchpad, magic mouse, mac, berøring, nettbrett, ipad, telefon, klype, to fingre, høyreklikk, sekundærklikk, bevegelser, liten skjerm, mobil
from: 0e764fd8
---

PartCraft er laget for en mus med hjul og midtknapp, men en styreplate fungerer godt når du kjenner bevegelsene, og en berøringsskjerm fungerer for å se på deler og enkel skissering.

## Styreplate

:::mac
| For å | Gjør dette |
|---|---|
| Snu delen (3D) | Klikk og dra med ett finger (eller dra med tre fingre, hvis du slo på dra med tre fingre) |
| Panorer (3D) | Hold {{key:Shift}} (eller ⌘) og klikk-dra, eller klikk-dra med to fingre trykket (et sekundærklikk-drag) |
| Snu delen, ved sveip | Sveip med to fingre; med {{key:Shift}} panorerer sveipet. Krever at **Rulling** er satt til «Finn ut selv» (startverdien) eller «Styreplate» |
| Zoom (3D og skisse) | Klyp. Zoom går mot pekeren. Med **Rulling** satt til «Musehjul» zoomer også en rulling med to fingre |
| Høyreklikk | Klikk med to fingre, eller {{key:Ctrl}}+klikk |
| Panorer i en skisse | Sveip med to fingre («Finn ut selv» eller «Styreplate»), eller klikk-dra med to fingre trykket. {{key:Shift}}+dra panorerer ikke i en skisse (den tegner et utvalgsvindu) |
| Legg til i et utvalg i en skisse | {{key:Shift}}+klikk eller ⌘+klikk |

Slå på sekundærklikk i **Systeminnstillinger, Styreplate, Peker og klikk** hvis klikk med to fingre ikke gjør noe.
:::

:::windows linux
| For å | Gjør dette |
|---|---|
| Snu delen (3D) | Trykk på styreplaten (eller trykk og hold) og dra |
| Panorer (3D) | Hold {{key:Shift}} eller {{key:Ctrl}} og dra, eller dra med høyreknappområdet trykket |
| Snu delen, ved sveip | Sveip med to fingre; med {{key:Shift}} panorerer sveipet. Krever at **Rulling** er satt til «Finn ut selv» (startverdien) eller «Styreplate» |
| Zoom (3D og skisse) | Klyp der styreplaten støtter det. Zoom går mot pekeren. Med **Rulling** satt til «Musehjul» zoomer en rulling med to fingre |
| Høyreklikk | Tapp med to fingre, eller nederste høyre hjørne av styreplaten |
| Panorer i en skisse | Sveip med to fingre («Finn ut selv» eller «Styreplate»), eller dra med høyreknappområdet trykket. {{key:Shift}}+dra panorerer ikke i en skisse |
| Legg til i et utvalg i en skisse | {{key:Shift}}+klikk eller {{key:Ctrl}}+klikk |
:::

**Rulling** finnes i [PartCraft-innstillinger](topic:settings): «Finn ut selv» (startverdien) behandler sidelengs eller finkornet rulling som styreplate, «Styreplate» gjør alltid det, og «Musehjul» gjør aldri det. Et klyp zoomer i alle tre.

Piltastene snur 3D-visningen, og {{key:Shift}} med piltastene panorerer, når du har klikket i visningen: nyttig på en styreplate. {{key:Plus}} og {{key:Minus}} zoomer.

## Berøringsskjermer

PartCraft leser berøringsinndata, så nettbrett, berøringsbærbare og telefoner fungerer, med begrensninger.

:::touch
**Berøringstaster**

Når du berører skjermen, vises en liten linje nederst til høyre i visningen med tastene et finger mangler. Den forsvinner når du bruker en mus.

- {{ui:Esc}}: Esc-tasten. Den avbryter det du startet, eller går ett steg tilbake, akkurat som tasten gjør.
- {{ui:Legg til}} (i en skisse, med Velg): mens den er på, legger hvert trykk til et element i utvalget eller tar det ut, som {{key:Shift}}+klikk. Trykk den igjen for å gå tilbake til ett element om gangen.
- {{ui:Ferdig}} (mens du tegner en linjekjede, en spline eller en mangekant): fullfører den, som et høyreklikk.

Å holde fingeren i ro i omtrent et halvt sekund gjør det samme for ett trykk: med et tegneverktøy fullfører det det du tegner, og med Velg legger det elementet under fingeren til i utvalget eller tar det ut. Punkter og linjer er lettere å treffe med finger: PartCraft ser omtrent dobbelt så langt rundt et trykk som rundt et klikk.

**I 3D-visningen**

- Ett finger: snu delen.
- To fingre: klyp for å zoome, beveg sammen for å panorere.
- Trykk: velg en flate, en kant eller et plan. Det finnes ingen markering ved å holde pekeren over før du trykker.

**I en skisse**

- Trykk med et tegneverktøy for å plassere hvert punkt: trykk på starten, og trykk deretter på slutten. Fangst skjer der du løfter fingeren.
- To fingre klyper og panorerer. Å sette ned en andre finger avbryter et drag den første fingeren startet.
- For å avslutte en linjekjede, trykk {{ui:Ferdig}}, hold fingeren i ro, eller trykk {{ui:Linje}} igjen (eller et annet verktøy) i verktøylinjen.
- Med Velg: trykk for å velge; dra et punkt eller en linje for å flytte den; dra på tomt rom for et vindu. Et andre trykk erstatter utvalget, med mindre {{ui:Legg til}} er på (eller du holder fingeren i ro på det andre elementet).
- For å endre et mål, bruk **Rediger** ved siden av det i høyre panel.

**Tegningsarket**

Trykk for å plassere og velge symboler, og dra et symbol for å flytte det. Klyp for å zoome, beveg to fingre for å panorere, eller dra ett finger over tomt papir. En andre finger stopper et symbol du dro, og det går tilbake.

**Det som fortsatt trenger et tastatur**

- Skrive tall: skjermtastaturet kommer opp i tallfelt og målfelt.
- Hurtigtaster for verktøy: bruk verktøylinjen.
:::

## Små skjermer og telefoner

- Ved 1280 piksler eller bredere får verktøylinjen plass på én rad.
- Mellom omtrent 760 og 1100 piksler blir sidepanelene smalere.
- Under omtrent 760 piksler (en telefon, eller et smalt vindu) stables skjermen: verktøylinjen (sveip den sidelengs for flere knapper), 3D-visningen, statuslinjen, deretter egenskapspanelet og historikken. Rull siden for å komme til panelene.
- Menyer ({{ui:Eksporter}}, {{ui:Visninger}}) åpnes over hele skjermbredden.

:::note
På iPhone finnes ingen fullskjermmodus i nettleseren; {{key:Ctrl+Shift+F}} og knappen for skjermmodus bytter bare mellom normal visning og visning med linjene skjult.
:::

En telefon er fin for å åpne en del, snu den og sjekke fakta. Ekte modellering krever en større skjerm og en mus eller styreplate.

## Nettlesere

Gjeldende Chrome, Edge, Firefox og Safari kjører PartCraft på Windows, macOS og Linux, og på nettbrett og telefoner, så lenge WebGL og WebAssembly er tilgjengelig. Se [Nettlesere og datamaskiner](common:browsers).
