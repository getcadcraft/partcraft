---
title: Kontrollera släppvinkel för gjutning och formsprutning
summary: Färglägg delen efter dess släppvinkel mot dragriktningen för ett formverktyg, se vilka ytor som släpper, vilka som behöver mer släppvinkel och vilka som lossnar från den andra halvan, med varje ytas andel av arean.
keywords: släppvinkelsanalys, släppvinkel, avsmalning, formverktyg, gjutning, trycksgjutning, formsprutning, dragriktning, skiljelinje, underskärning, lossning, kontrollera släppvinkel
from: 6a106f83
---

Delar som tillverkas i ett formverktyg, en form för trycksgjutning eller sandgjutning behöver **släppvinkel**: väggar som lutar lite så att delen glider ut. **Släppvinkelsanalys** färglägger varje yta efter hur mycket den lutar bort från riktningen formverktyget öppnas i (**dragriktningen**).

## Slå på den

1. I arbetsytan Design, öppna {{ui:Vyer}} och välj {{ui:Släppvinkelsanalys}}.
2. Ställ in **Dragriktning**: riktningen formverktyget öppnas i, längs X, Y eller Z åt något håll, eller **Vinkelrät mot vald yta**: tryck {{ui:Välj en yta}} och klicka på en plan yta på delen.
3. Ställ in **Minsta släppvinkel**, i grader: den minsta lutning din process behöver (ofta 1° till 3°).

Delen färgas:

| Färg | Betyder |
|---|---|
| Grön: **Positiv släppvinkel** | Lutar mot dragriktningen med minst minimum: lossnar från den här halvan av formverktyget |
| Okra: **Behöver släppvinkel** | Inom minimum åt något håll, till exempel en lodrät vägg: lägg till släppvinkel här |
| Röd: **Negativ släppvinkel** | Lutar bort från dragriktningen med minst minimum: lossnar från den andra halvan, eller är en underskärning om delen ska komma ut ur en halva |

Andelen av delens ytarea för varje klass visas bredvid den. **Vänd dragriktningen** tittar från den andra halvan av formverktyget: grönt och rött byter plats.

Krökta ytor bedöms punkt för punkt, så en cylinder som ligger tvärs dragriktningen visar ett band som behöver släppvinkel längs sidorna.

Färgerna följer delen när du ändrar den. {{key:Esc}} eller {{ui:Stäng}} stänger av analysen; inget sparas i delen.

:::tip
För att lägga till släppvinkel, använd funktionen {{ui:Släpp}} på de okra ytorna (se [Svep, loft och släpp](topic:sweep-loft-draft)), och kontrollera sedan igen.
:::
