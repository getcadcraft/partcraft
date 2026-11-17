---
title: Definieer 'n skets volledig met verhoudings en afmetings
summary: Voeg verhoudings by vanaf die regterpaneel en afmetings met die Maat-nutsding, lees die onder gedefinieerde, volledig gedefinieerde en oor gedefinieerde kleure, en herstel 'n skets wat oor gedefinieer is.
keywords: verhoudings, beperkings, afmetings, slim afmeting, volledig gedefinieer, onder gedefinieer, oor gedefinieer, vryheidsgrade, saamvallend, horisontaal, vertikaal, parallel, loodreg, raak, gelyk, konsentries, middelpunt, vas, konflik, oortollig
from: e76d047a
---

'n Skets is **volledig gedefinieer** wanneer elke punt en elke grootte deur verhoudings en afmetings vasgestel is. 'n Volledig gedefinieerde skets verander net wanneer jy 'n getal verander, so die onderdeel gedra hom voorspelbaar wanneer jy dit later wysig. PartCraft dwing jou nie om 'n skets volledig te definieer nie, maar dit wys altyd hoe naby jy is.

## Lees die skets se toestand

Die toestand wys op drie plekke: die merker bo-links in die aansig, die boodskap bo-aan die regterpaneel, en die vlag in die geskiedenis.

| Toestand | Merker | Meetkundekleur | Wat dit beteken |
|---|---|---|---|
| Onder gedefinieer | "Onder gedefinieer · 3 vryheidsgrade" | Blou | Sommige meetkunde kan nog beweeg. Sleep blou meetkunde om te sien watter kant toe |
| Volledig gedefinieer | "Volledig gedefinieer" | Ink (swart op Papier, lig op Model) | Elke punt en grootte is vasgestel |
| Oor gedefinieer | "Oor gedefinieer" | Rooi op die betrokke verhoudings | Sommige verhoudings bots met mekaar, of een is reeds deur ander geïmpliseer |

Konstruksiemeetkunde is grys en gestippel, wat ook al die toestand is. Gekose items is oranje. 'n "Vryheidsgraad" is een manier waarop iets nog kan beweeg: 'n vrye punt het twee (links-regs en op-af), 'n vrye sirkel het drie (sy middelpunt en sy radius).

Die verduideliking onder die boodskap in die regterpaneel herhaal die kleure.

## Voeg 'n afmeting by

1. Druk {{key:D}} of kies {{ui:Maat}}.
2. Klik op wat om te meet:
   - **een lyn**: sy lengte;
   - **een sirkel**: sy deursnee; **een boog**: sy radius;
   - **twee punte** (’n eindpunt, ’n middelpunt, ’n los punt of die oorsprong): die afstand tussen hulle;
   - **’n punt en ’n lyn**: die afstand van die punt tot die lyn;
   - **twee parallelle lyne**: die afstand tussen hulle; **twee lyne teen ’n hoek**: die hoek tussen hulle.
3. Na een item sê die statusbalk "Klik op ’n tweede item, of klik waar die afmeting moet gaan." Klik op ’n tweede item, of klik in leë ruimte waar jy die getal wil hê.
4. ’n Getalkassie maak oop met die huidige waarde. Tik die grootte en druk {{key:Enter}}. {{key:Esc}} hou die gemete waarde.

**Waar jy die getal plaas, bepaal die soort** vir ’n skuins lyn of twee punte: plaas dit bo of onder om ’n horisontale afstand te kry, links of regs vir ’n vertikale afstand, en elders vir die ware (uitgelyne) afstand.

Die kassie aanvaar gewone getalle in millimeter of grade, soos `25`, `12.5` of `1e3`. ’n Voorlopende `⌀`, `Ø` of `R`, of ’n agterste `mm` of `°`, word geïgnoreer. Hoeke is 0 tot 180 grade. Rekenkunde soos `20+5` word nie aanvaar nie; om ’n grootte aan ’n veranderlike of formule te koppel, begin dit met `=`.

Om ’n afmeting later te verander, dubbelklik op sy getal in die skets, of kies **Wysig** langs dit in die lys in die regterpaneel.

:::tip
Jy kan ook eers meetkunde kies (met die Kies-nutsding) en ’n afmetingknoppie in die regterpaneel kies: {{ui:Afstand}}, {{ui:Horisontale afstand}}, {{ui:Vertikale afstand}}, {{ui:Radius}}, {{ui:Deursnee}} of {{ui:Hoek}}. Slegs die knoppies wat by die keuse pas, word gewys. Dit is die manier om ’n sirkel ’n radius te gee in plaas van ’n deursnee.
:::

## Voeg 'n verhouding by

Verhoudings word vanaf die regterpaneel bygevoeg, nie met ’n nutsding nie.

1. Druk {{key:S}} vir Kies.
2. Klik een item, dan {{key:Shift}}+klik ’n tweede een as die verhouding twee nodig het. Die oorsprong kan ook gekies word.
3. Die regterpaneel sê "Gekies: lyn l3, punt p1" en wys ’n knoppie vir elke verhouding wat pas, soos {{ui:∥ Parallel}} of {{ui:• Saamvallend}}.
4. Kies die knoppie. Die skets los dadelik op.

As geen verhouding pas nie, sê die paneel: "Geen verhouding pas by hierdie keuse nie. Kies een of twee items (Shift+klik voeg by)."

Die volledige lys verhoudings, wat elkeen benodig en wat dit doen, is in [Skets-verhoudings en afmetings](topic:sketch-relations).

Verhoudings verskyn in die skets as klein simbole langs die meetkunde (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Saamvallende kolletjies is versteek tensy die meetkunde gekies is of die verhouding in moeilikheid is. Klik op ’n simbool om die verhouding te kies.

## ’n Uitgewerkte voorbeeld: ’n L-vormige beugelprofiel

1. Skets op **Voorvlak**. Met die Lyn-nutsding, begin by die oorsprong en klik ses hoeke van ’n L, en eindig weer by die oorsprong. Die ketting eindig self wanneer jy die eerste punt klik.
2. Lyne wat naby horisontaal of vertikaal getrek is, het reeds H- en V-verhoudings, behalwe die laaste een: ’n lyn wat op ’n bestaande punt eindig, kry geen outomatiese verhouding nie. Druk {{key:S}}, klik op daardie laaste lyn en kies {{ui:V Vertikaal}} in die regterpaneel. Die merker sê "Onder gedefinieer · 4 vryheidsgrade".
3. Druk {{key:D}}. Klik op die onderste lyn, klik onder dit, tik `80`, {{key:Enter}}.
4. Klik op die linker lyn, klik links daarvan, tik `60`, {{key:Enter}}.
5. Gee die boonste kort lyn `20` en die binneste vertikale lyn `45` op dieselfde manier ’n afmeting.
6. Die merker sê nou **Volledig gedefinieer** en die hele L word swart.

## Herstel ’n oor gedefinieerde skets

Wanneer ’n nuwe verhouding of afmeting die ander teëstaan, beweeg PartCraft niks nie. Die meetkunde bly presies soos dit was, die betrokke verhoudings word rooi, en die statusbalk noem hulle:

- "Oor gedefinieer: Horisontaal, Afstand 40 kan nie almal nagekom word nie. Ontdoen, of skrap een van hulle." Die verhoudings bots.
- "Oor gedefinieer: Parallel is reeds geïmpliseer. Skrap dit." Die verhouding voeg niks by nie: die ander dwing dit reeds af. (Die sye van ’n reghoek is byvoorbeeld reeds parallel.)

Om dit reg te maak:

1. Druk {{key:Mod+Z}} om die laaste verandering te ontdoen, of
2. Vind die rooi item in die lys **Verhoudings en afmetings** in die regterpaneel (’n groep wat dit bevat, is oop en rooi), en kies **Skrap** langs dit. Jy kan ook op sy simbool of getal in die skets klik en {{key:Delete}} druk.

:::note
Daar is geen "aangedrewe" (verwysings-) afmetings in hierdie bouweergawe nie. ’n Afmeting wat net ’n grootte sou wys wat die ander verhoudings reeds vasstel, word as oor gedefinieer behandel. Lees groottes eerder in die paneel: kies ’n lyn en kyk na die Maat-knoppies, of kontroleer die onderdeelfeite nadat jy uittrek.
:::

’n Oor gedefinieerde skets met ’n werklike botsing laat die kenmerk wat dit gebruik misluk ("Oor gedefinieer: 1 verhouding kan nie almal nagekom word nie."), en die geskiedenis merk dit **⚠ fout**. ’n Skets wat net oortollig is, bou steeds, met ’n ⚠ waarskuwing.

## Sleep om te vind wat vry is

In Kies, sleep enige blou punt of lyn. Die oplosser beweeg dit so min as moontlik terwyl elke verhouding behou word. As ’n sleep ’n verhouding sou breek, spring die meetkunde terug. Dit is die vinnigste manier om te sien watter afmeting nog ontbreek.

## Die verhoudingslys

Met niks gekies nie, lys die regterpaneel **Verhoudings en afmetings**. Elke ry het:

- **Wysig** (net afmetings): maak die getalkassie oop;
- **Kies**: kies dit in die skets;
- **Skrap**: verwyder dit.

Verhoudings van dieselfde soort wat meer as een keer voorkom, deel een ry, soos "Saamvallend × 5" vir ’n reghoek wat aan die oorsprong vasgemaak is. Klik op die ry om dit oop te maak: elke verhouding word gelys volgens wat dit koppel ("punt p2, punt p4"), met sy eie **Kies** en **Skrap**. Die ry self het:

- **Kies**: kies almal in die skets;
- **Skrap alles**: verwyder almal in een stap ({{key:Mod+Z}} bring hulle terug).

’n Groep wat ’n oor gedefinieerde verhouding bevat, maak vanself oop, met sy naam in rooi. Afmetings word altyd een per ry gelys, met hul waardes.

Met meetkunde gekies, wys die lys net die **Verhoudings op die keuse**.
