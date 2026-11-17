---
title: Sebrastriper og krumning
summary: Sjekk hvor jevnt flatene på en hvilken som helst del går over i hverandre, med sebrastriper som følger visningen eller et fargekart over middelkrumning, fra Visninger-menyen.
keywords: sebra, sebrastriper, refleksjonslinjer, krumning, krumningskart, middelkrumning, overflatekvalitet, kontinuitet, tangent, g1, g2, glatt, knekk, markeringslinjer
from: 78fed4c3
---

To raske blikk på hvor glatte flatene til en del er, på en hvilken som helst del i Design-arbeidsområdet (Form-arbeidsområdet har sitt eget, for formen du redigerer: se [Frie former med Form](topic:form-surfaces)).

## Sebrastriper

Åpne {{ui:Visninger}} og velg {{ui:Zebrastriper}}. Delen viser refleksjonen av et stripet lys, slik en polert overflate ville gjort:

- Der to flater møtes **tangentielt** (en avrunding på en flat flate, en glatt Gordon-flate), fortsetter stripene over skjøten, med en bøy.
- Der de møtes i et **knekk**, brytes stripene og hopper.
- Der krumningen også stemmer (G2), flyter stripene videre uten en eneste knekk.

Snu visningen (dra, eller en flate på visningskuben): stripene tegnes på nytt fra den nye retningen. **Striper** angir hvor mange det er.

## Krumning

Velg {{ui:Krumning}} i samme meny. Delen farges etter **middelkrumningen** sin: blå der den er hul (konkav), lys der den er flat, rød der den buer utover (konveks). Kortet sier ved hvilken krumning fargene når full styrke, i 1/mm og som en radius. Skarpe kanter regnes som svært krumme, så de vises tydelig; se på flatene mellom dem.

## Kortet

Begge åpner analysekortet nederst til venstre i visningen, som også har [utkastanalysen](topic:draft-analysis). Bytt mellom dem med **Vis**. Å velge den åpne en gang til i {{ui:Visninger}}, {{ui:Lukk}} eller {{key:Esc}} slår den av. Fargene følger delen når du endrer den; ingenting lagres i delen.
