---
title: 4- og 5-akse-bearbeiding
summary: Fortell PartCraft hvilke roterende akser maskinen har, vipp verktøyet for en vanlig operasjon, finish en overflate med en kulefres som heller mens den skjærer, eller dreie delen under verktøyet på en 4. akse. Hva som skrives til G-koden, og hva som ikke er bevist.
keywords: 5-akse, femakse, 4-akse, fjerde akse, flerakse, multiakse, 3+2, indeksert, posisjonsstyrt, vipp, vippet verktøy, roterende, trunnion, bord, hode, A-akse, B-akse, C-akse, TCP, RTCP, verktøyets senterpunkt, G43.4, invers tid, G93, kinematikk, dreiepunkt, sidefresing, tilnærmingsvinkel

from: c4f1c491
---

Produksjon kan holde verktøyet i en vinkel, og den kan flytte de roterende aksene mens den skjærer. Tre ting gjør det, fra det enkleste og oppover.

**Ingenting her er kjørt på en maskin.** Banene er kontrollert mot geometrien av testene, og G-koden leses tilbake, men de innebygde postene følger styringenes dokumenterte koder, ikke en bestemt maskin foran oss. Prøv et program i styringens egen simulator og i luften før det møter metall.

## Maskinens roterende akser

På fanen **Oppsett** sier {{ui:Rotary axes}} hva maskinen har:

| Valg | Maskinen |
|---|---|
| Ingen (3 akser) | En vanlig fres. Enhver operasjon som trenger et vippet verktøy advarer, og posten nekter å skrive den. |
| A (dreier om X) | Én roterende akse langs X: et 4.-akse-bord eller en indekser. Verktøyet kan bare helle i Y–Z-planet. |
| B (dreier om Y) | Én roterende akse langs Y. Verktøyet kan bare helle i X–Z-planet. |
| A og C | En vippeakse om X båret av, eller som bærer, en dreining om Z: et trunnion-bord, eller et hode. |
| B og C | Det samme med vippingen om Y. |

Deretter:

- **Båret av**: {{ui:The table (the part turns)}} eller {{ui:The head (the tool turns)}}. Et bord dreier den motsatte veien for å bringe samme flate under verktøyet, så fortegnet på hver vinkel følger av dette.
- **Styringen holder verktøyspissen på banen (TCP)**: på, er X Y Z i programmet verktøyspissen i delens egne koordinater, og styringen gjør resten (de innebygde Fanuc-lignende og LinuxCNC-postene skriver `G43.4` for verktøylengden). Av, på en bordmaskin, skriver PartCraft X Y Z slik det dreide bordet bærer delen, om **rotasjonssenteret** du oppgir (i arbeidskoordinater; 0, 0, 0 når arbeidsnullpunktet er i senteret). En hodemaskin krever TCP på: uten det ville programmet trenge maskinens pivotlengde, som PartCraft ikke kjenner.
- **Vippegrense**: hvor langt vippeaksen går.

Maskiner er ulike i hvilken vei de regner som positiv. Hvis en akse dreier feil vei på din, endre fortegnet i en kopi av posten ([Postprosessorer som kan redigeres](topic:post-processors)).

## Et vippet verktøy for en vanlig operasjon

Hver fresoperasjon (flate, lomme, adaptiv, kontur, boring, fasing, parallell, kamskjell, 3D-grov, rest) har en **Verktøyvipp** og **Vipp mot**: verktøyets retning for den operasjonen alene, målt fra oppsettets verktøyakse. Dette er 3+2-bearbeiding: de roterende aksene går til en posisjon og blir der mens tre akser skjærer.

- Skriv inn de to vinklene, eller trykk {{ui:Tool square to a face}} og klikk en flat flate: verktøyet vil peke rett på den.
- Velg operasjonens flater og kanter som vanlig. Det som regnes som et gulv eller et hull, bedømmes langs det vippede verktøyet.
- Råemnet for den retningen er boksen som holder det dreide råemnet, så høyder og klaringer er trygge fra den siden.

I G-koden, før operasjonen, går verktøyet opp, de roterende aksene dreier, og verktøyet senkes over sitt første punkt. På en bordmaskin uten TCP forblir buer buer og de faste boresyklusene forblir sykluser (den skrevne rammen er bare dreid om Z). Med TCP i et vippet plan blir buer til korte linjer og sykluser til bevegelsene de står for.

Simuleringen av råemnet kjører en vippet retning **alene**: den viser hva den operasjonen skjærer fra hele råemnet sett fra sin side, og finner overskjæringer der, men kutt gjort fra andre retninger føres ikke over.

## 5-akse-finish

{{ui:More}} i verktøylinjen for Produksjon lister denne operasjonen og den neste øverst på fanen **Operasjoner**.

{{ui:5-axis}} er [parallell finishgang](topic:finish-3d) med en **kulefres som heller mens den går**. En kule skjærer med en kuleflate, og kulen er den samme uansett hvilken vei verktøyet heller om sitt senter, så kulen følger nøyaktig den banen 3-akse-gangen ville gitt, og bare verktøyets retning endres:

- **Mot overflaten**: 1 = rett på overflaten, 0 = rett opp, og alt mellom.
- **Heller forover**: grader langs skjæreretningen, slik at kulens stille senter ikke er det som skjærer.
- **Mest vipp**: verktøyet heller aldri lenger enn dette fra oppsettets akse.

Der skaftet ville berøre modellen, trekkes hellingen tilbake til den er fri, og operasjonen sier på hvor mange punkter. Hver gang inn og ut gjøres med en rett løft.

## Roterende finish (4. akse)

{{ui:Rotary}} er for en del holdt langs **arbeids-X** på en roterende akse. Delen dreier, og en kulefres, alltid rettet mot aksen, følger overflaten:

- **Gang**: {{ui:Along the axis}} (linjer langs X, én stegavstand dreining fra hverandre) eller {{ui:Round the part}} (ringer, én stegavstand X fra hverandre).
- **Akse ved Y / Z**: hvor aksen er. Tomt betyr midten av råemnet. På en bordmaskin uten TCP må dette være rotasjonssenteret i Oppsett; operasjonen advarer når det ikke er det.
- **Fra / Til X** og **Fra / Til vinkel**: den delen av lengden og av dreiningen som skal skjæres.

Høyden av kulen over aksen i hvert punkt er det nøyaktige fallet av en kule på delens nett, fra den siden.

## Begrensninger

- 5-akse- og roterende finish tar bare en **kulefres**. Det finnes ingen sidefresing (skaftets side på en rettlinjet vegg), ingen flytlinjer langs overflatens egne retninger, ingen flerakse-grovbearbeiding og ingen automatisk valg av vipp for å unngå kollisjon.
- 5-akse- og roterende baner **føres ikke gjennom simuleringen av råemnet**, som er et høykart og ikke kan holde et hellende kutt.
- Skaftet kontrolleres i 5-akse-finish mot modellen sett ovenfra; holderen, spindelen og selve maskinen kontrolleres ikke noe sted.
- Roterende finish skjærer bare det verktøyet kan se når det ser mot aksen.
- 5-akse-finish tar et minutt eller mer å regne ut på en stor del: skaftet kontrolleres i hvert punkt i hver gang.
- Når de roterende aksene beveger seg sammen med de lineære og TCP er av, skriver de innebygde postene tilmatingen som invers tid (`G93`), og går så tilbake til `G94`.
- Ingen kode for skråstilt arbeidsplan (`G68.2` og lignende) skrives, og ingen maskinspesifikke grenser, avvikling eller kollisjonssoner er kjent.
