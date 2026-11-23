---
title: Dreiing på en dreiebenk
summary: Planer, grov, finish, spor, avskjær, gjenge og bor en dreid del, fra konturen delen danner når den spinner. Dreiebenkverktøy, tilmating per omdreining, dreiebenkposter, og hva som ikke er bevist.
keywords: dreiing, dreiebenk, dreie, planing, grovbearbeiding, finish, spor, sporing, avskjæring, avskjære, kutt av, gjenge, gjenging, g32, g33, g96, konstant overflatehastighet, css, spissradius, skjæreplate, stang, chuck, diameter, tilmating per omdreining, g71, g76

from: d8cc53b0
---

Produksjon har sju operasjoner for en dreiebenk. De virker på enhver del: det som skjæres, er **konturen delen danner når den spinner** om midten av råemnet, så en del som ikke er rund, dreies ned til den runde formen som holder den.

**Ingenting her er kjørt på en dreiebenk.** Banene er kontrollert mot geometrien av testene; de to dreiebenkpostene følger styringenes dokumenterte koder. Prøv et program i styringens egen simulator og i luften først.

## Oppsett

På fanen **Oppsett**:

- **Verktøyakse** er spindelens akse, dreiebenkens Z. Fronten av delen er på +Z; chucken holder den andre enden.
- **Råemne**: velg {{ui:Cylinder}}, stangen. Dens toppforskyvning er det planingen fjerner.
- **Arbeidsnullpunkt**: et senter på toppen av råemnet eller modellen setter Z0 på frontflaten, det vanlige stedet.
- **Styring**: {{ui:Fanuc-style lathe (.nc)}} eller {{ui:LinuxCNC lathe (.ngc)}}. En fresepost avviser et dreieprogram og sier det.
- **Maks. spindelturtall**: grensen overflatehastigheten holdes under.

{{ui:More}} i verktøylinjen for Produksjon lister de sju dreieoperasjonene øverst på fanen **Operasjoner**. Den første du legger til, tar med seg sitt eget verktøy: en **dreieplate** (spissradius, plateens vinkel, skjærekantens vinkel) eller et **spor-blad** (bredde, hjørneradius, hvor dypt det når). Endre dem på fanen **Verktøy**. Tilmatingen er per omdreining, og hastigheten er en overflatehastighet i m/min som styringen holder når diameteren endrer seg; gi et verktøy et eget o/min for å fikse hastigheten i stedet.

## Operasjonene

| Operasjon | Hva den gjør |
|---|---|
| {{ui:Face}} | Planer fronten av stangen ned til delen, ett nedstikk om gangen, fra utsiden til rett forbi senter. |
| {{ui:Rough}} | Gang langs Z en **skjæredybde** fra hverandre, ned til konturen pluss **materiale å la stå igjen**; deretter én gang langs konturen for å ta av trinnene. En dal mellom to skuldre går inn med et stikk på én skjæredybde. |
| {{ui:Finish}} | Én gang langs konturen med en brøkdel av verktøyets tilmating. |
| {{ui:Groove}} | Stikker bladet side om side der det kan ta mer enn grensen for materiale som fortsatt står: sporene dreieplaten ikke kunne nå. **Fra / Til Z** innsnevrer det. |
| {{ui:Part off}} | Skjærer delen av like bak bakflaten, til rett forbi senter, med pikking hvis du setter det. |
| {{ui:Thread}} | En utvendig gjenge: ytre diameter, stigning, lengde, antall gjennomganger. Dybde 0 betyr 0.6134 × stigning (en 60°-gjenge). Hver gjennomgang tar samme spanareal; fjærgjennomganger gjentar den siste. |
| {{ui:Drill}} | En bor på senterlinjen til en dybde, med pikking. |

## Hvordan verktøyet holdes utenfor delen

Platen behandles som det den er: dens spissirkel, og bak den den bakre kanten, en rett linje der vinkelen er 180° minus skjærekantens vinkel og platens vinkel. Den formen senkes ned på konturen i hvert punkt langs Z, og banen er der den kommer til ro. Altså:

- **Spissradiusen er allerede med i banen.** Postene skriver ingen `G41` eller `G42`; koordinatene er verktøyets programmerte punkt (hjørnet av kvadratet rundt spissen).
- Platen **kan ikke følge en vegg brattere enn sin bakre kant**. Et spor bak en skulder blir stående, og finishoperasjonen sier hvor mye av konturen den ikke kunne nå. En {{ui:Groove}}-operasjon tar det.
- Råemnet følges langs Z etter hvert kutt, slik at grovbearbeiding ikke skjærer luft, sporing finner det som er igjen, og hver operasjon viser volumet den fjernet og om den skar inn i delen.

## Begrensninger

- **Bare utvendig dreiing**: ingen indre dreiebenk, ingen innvendige spor eller gjenger, ingen plansspor.
- En spindel, delen holdt på −Z. Ingen underspindel, ingen levende verktøy, ingen C- eller Y-akse, ingen støtte og ingen bevegelser av løpestokken.
- Banene er rette bevegelser: kurver er korte linjer innenfor toleransen (ingen `G2`/`G3`), og grovbearbeiding og gjenging skrives gjennomgang for gjennomgang (ingen `G71`- eller `G76`-sykluser).
- Gjenging er rette gjennomganger med et rett uttrekk til slutt; gi gjengen et utløpsspor. Gjengen vises ikke i råemnet.
- Boring på senter endrer ikke råemnemodellen.
- Holderen, revolverhodet og chucken kontrolleres ikke. Sett **Stopp ved Z** for å holde verktøyet unna kjevene.
- Tilmating og turtall er startverdier, som for fresing.
