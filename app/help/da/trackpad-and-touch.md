---
title: Trackpad, touch og små skærme
summary: Sådan drejer, panorerer og zoomer du med en Mac- eller laptop-trackpad, hvad der virker på en berøringsskærm, og hvad der stadig kræver et tastatur, og hvordan skærmen omarrangeres på en telefon eller et smalt vindue.
keywords: trackpad, touchpad, magic mouse, mac, touch, tablet, ipad, telefon, knib, to fingre, højreklik, sekundærklik, bevægelser, lille skærm, mobil
from: 0e764fd8
---

PartCraft er lavet til en mus med hjul og en midterknap, men en trackpad virker godt, når du kender bevægelserne, og en berøringsskærm virker til at se på dele og til simpel skitsering.

## Trackpad

:::mac
| For at | Gør dette |
|---|---|
| Drej delen (3D) | Klik og træk med én finger (eller træk med tre fingre, hvis du har slået tre-fingers træk til) |
| Panorér (3D) | Hold {{key:Shift}} (eller ⌘) nede og klik-træk, eller klik-træk med to fingre trykket ned (et sekundærklik-træk) |
| Drej delen, ved stryg | Stryg med to fingre; med {{key:Shift}} panorerer strygningen. Kræver at **Rulning** er sat til "Find ud af det" (standard) eller "Trackpad" |
| Zoom (3D og skitse) | Knib. Zoom går mod markøren. Med **Rulning** sat til "Musehjul" zoomer en rulning med to fingre også |
| Højreklik | Klik med to fingre, eller {{key:Ctrl}}+klik |
| Panorér i en skitse | Stryg med to fingre ("Find ud af det" eller "Trackpad"), eller klik-træk med to fingre trykket ned. {{key:Shift}}+træk panorerer ikke i en skitse (det tegner et valgvindue) |
| Tilføj til et valg i en skitse | {{key:Shift}}+klik eller ⌘+klik |

Slå sekundærklik til under **Systemindstillinger, Trackpad, Peg & klik**, hvis to-fingerklik ikke gør noget.
:::

:::windows linux
| For at | Gør dette |
|---|---|
| Drej delen (3D) | Tryk på touchpaden (eller tryk og hold) og træk |
| Panorér (3D) | Hold {{key:Shift}} eller {{key:Ctrl}} nede og træk, eller træk med højreknap-området trykket ned |
| Drej delen, ved stryg | Stryg med to fingre; med {{key:Shift}} panorerer strygningen. Kræver at **Rulning** er sat til "Find ud af det" (standard) eller "Trackpad" |
| Zoom (3D og skitse) | Knib, hvor touchpaden understøtter det. Zoom går mod markøren. Med **Rulning** sat til "Musehjul" zoomer en rulning med to fingre |
| Højreklik | Tryk med to fingre, eller nederste højre hjørne af touchpaden |
| Panorér i en skitse | Stryg med to fingre ("Find ud af det" eller "Trackpad"), eller træk med højreknap-området trykket ned. {{key:Shift}}+træk panorerer ikke i en skitse |
| Tilføj til et valg i en skitse | {{key:Shift}}+klik eller {{key:Ctrl}}+klik |
:::

**Rulning** findes i [PartCraft-indstillinger](topic:settings): "Find ud af det" (standard) behandler sideværts eller fint rulning som en trackpad, "Trackpad" gør altid det, "Musehjul" gør aldrig det. Et knib zoomer i alle tre.

Piletasterne drejer 3D-visningen, og {{key:Shift}} med piletasterne panorerer, når du har klikket i visningen: nyttigt på en trackpad. {{key:Plus}} og {{key:Minus}} zoomer.

## Berøringsskærme

PartCraft læser berøringsinput, så tablets, berøringslaptops og telefoner virker, med begrænsninger.

:::touch
**Berøringstaster**

Når du rører skærmen, vises en lille bjælke nederst til højre i visningen med de taster, en finger mangler. Den forsvinder, når du bruger en mus.

- {{ui:Esc}}: Esc-tasten. Den annullerer det, du har startet, eller går ét skridt tilbage, præcis som tasten gør.
- {{ui:Tilføj}} (i en skitse, med Vælg): mens den er tændt, tilføjer hvert tryk et element til valget eller fjerner det, ligesom {{key:Shift}}+klik. Tryk igen for at gå tilbage til ét element ad gangen.
- {{ui:Færdig}} (mens du tegner en linjekæde, en spline eller en polygon): afslutter den, ligesom et højreklik.

At holde en finger stille i omkring et halvt sekund gør det samme for ét tryk: med et tegneværktøj afslutter det det, du tegner, og med Vælg tilføjer eller fjerner det elementet under din finger fra valget. Punkter og linjer er lettere at ramme med en finger: PartCraft kigger omkring dobbelt så langt rundt om et tryk som rundt om et klik.

**I 3D-visningen**

- Én finger: drej delen.
- To fingre: knib for at zoome, bevæg dem sammen for at panorere.
- Tryk: vælg en flade, en kant eller et plan. Der er ingen markering under musen, før du trykker.

**I en skitse**

- Tryk med et tegneværktøj for at placere hvert punkt: tryk på starten, og tryk derefter på slutningen. Fangsten sker, hvor du løfter fingeren.
- To fingre knibes og panorerer. Hvis du sætter en anden finger ned, annulleres et træk, den første finger startede.
- For at afslutte en linjekæde trykker du på {{ui:Færdig}}, holder fingeren stille eller trykker på {{ui:Linje}} igen (eller et andet værktøj) i værktøjslinjen.
- Med Vælg trykker du for at vælge; træk et punkt eller en linje for at flytte den; træk på tom plads for et vindue. Et andet tryk erstatter valget, medmindre {{ui:Tilføj}} er tændt (eller du holder fingeren stille på det andet element).
- For at ændre en målsætning bruger du **Rediger** ved siden af den i højre panel.

**Tegningsarket**

Tryk for at placere og vælge symboler, og træk et symbol for at flytte det. Knib for at zoome, flyt to fingre for at panorere, eller træk en finger hen over tomt papir. En anden finger stopper et symbol, du trækker, og det går tilbage.

**Det der stadig kræver et tastatur**

- Indtastning af tal: skærmtastaturet vises i talfelter og målsætningsfelter.
- Tastaturgenveje til værktøjer: brug værktøjslinjen.
:::

## Små skærme og telefoner

- Ved 1280 pixels eller bredere passer værktøjslinjen på én række.
- Mellem cirka 760 og 1100 pixels bliver sidepanelerne smallere.
- Under cirka 760 pixels (en telefon, eller et smalt vindue) stables skærmen: værktøjslinjen (stryg den til siden for flere knapper), 3D-visningen, statuslinjen, derefter egenskabspanelet og historikken. Rul siden for at nå panelerne.
- Menuer ({{ui:Eksportér}}, {{ui:Visninger}}) åbner over hele skærmens bredde.

:::note
På iPhone findes der ingen fuldskærmstilstand i browseren; {{key:Ctrl+Shift+F}} og knappen for skærmtilstand skifter kun mellem normal og skjulte bjælker.
:::

En telefon er fin til at åbne en del, dreje den og kontrollere dens fakta. Rigtig modellering kræver en større skærm og en mus eller trackpad.

## Browsere

Aktuelle versioner af Chrome, Edge, Firefox og Safari kører PartCraft på Windows, macOS og Linux og på tablets og telefoner, så længe WebGL og WebAssembly er tilgængelige. Se [Browsere og computere](common:browsers).
