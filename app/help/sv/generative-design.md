---
title: Växa fram en form från laster (generativ)
summary: Välj de ytor som hålls och belastas, områden som ska behållas och hållas fria, målvolymer och material, och generera utfall: de styvaste formerna som hittats för varje volym, kontrollerade igen som solider, jämförda i en tabell och laddade ner som STL, STEP eller en ny del.
keywords: generativ design, topologioptimering, SIMP, lättvikt, gitter, organisk form, utfall, jämför, massa, volymandel, bevara, behåll, hinder, håll fri, designutrymme, minsta medlemsstorlek, STL, 3D-utskrift
from: 5b91fa8e
---

Arbetsytan Generativ tar bort material som lasterna inte behöver. Du anger var delen hålls och belastas, vad som måste finnas kvar och vad som måste hållas fritt; PartCraft hittar den styvaste formen för varje målvolym (**topologioptimering**), kontrollerar var och en igen som solid med det verkliga materialet och visar utfallen sida vid sida. Den arbetar på de namngivna ytorna som nätkärnan ger delen (se [Nätkärnan](topic:solid-kernels)).

Välj **Generativ** i rutan **Arbetsyta**. Din del ändras inte; studien sparas i delfilen.

## Skapa en studie

1. Tryck på **Ny studie** i den högra panelen.
2. **Utrymme**: *Delen som den är* tar bort material från din del; *En låda runt delen* låter en form växa inne i en låda som är större än delen med **Marginal för lådan**.
3. **Elementstorlek**: lämna tomt för en automatisk storlek (cirka 8,000 kuber), eller skriv en. Finare storlekar ger finare former och tar längre tid.
4. **Minsta medlem**: medlemmar tunnare än cirka dubbla detta bildas inte. Tomt betyder en och en halv kub.
5. Bocka i en till sex **Målvolymer** (den andel av designutrymmet formen får fylla) och ett till fyra **Material**. Varje volym genereras en gång; varje material kontrolleras på den formen (den styvaste formen beror inte på materialet, men dess massa, spänning och säkerhetsfaktor gör det).

## Mål

- {{ui:Fast}}: klicka på de ytor som hålls. En **Friktionsfri yta** från panelens lista **Lägg till** håller en yta endast tvärs över sig själv (använd den för symmetriplan).
- {{ui:Kraft}}: klicka på de belastade ytorna, skriv sedan in den totala kraften och välj dess riktning i panelen. **Tryck** finns i listan **Lägg till**.
- {{ui:Bevara}}: klicka på ytor vars omgivning måste förbli solid, och ställ in hur djupt (**Håll solid inom**) — till exempel runt bulthål. Ytorna du fixerar eller belastar behålls alltid.
- {{ui:Hinder}}: klicka på ytor vars omgivning måste förbli tom, och ställ in hur långt (**Håll tom inom**) — plats för en axel eller ett verktyg.

Tryck på **Klar med val** eller {{key:Esc}} efter att du klickat på ytor. Gröna och röda toningar visar områdena.

## Generera och jämför

Tryck på {{ui:Generera}}. Panelen visar förloppet och återstående tid; **Stopp** avbryter. Varje utfall visas i tabellen **Utfall**: målvolym, material, **massa**, **största spänning**, **största förskjutning** och **säkerhetsfaktor** (sträckgräns ÷ spänning), alla från att den färdiga formen löses om som solida kuber med det verkliga materialet.

Välj ett utfall för att se det i vyn (delen döljs; bocka i **Visa delen genom den** för att se båda). Under tabellen: hur många iterationer det tog och om det stabiliserades, dess styvhet som solid mot optimerarens egna värde, och dess yta.

## Använd ett utfall

- **STL**: ett slutet triangelnät, redo för 3D-utskrift.
- **STEP (facetterad)**: samma yta som en STEP-solid av plana ytor.
- **Ny delfil**: en PartCraft-del vars enda funktion är utfallet som en importerad solid. Öppna den för att skissera på den, skära hål eller kontrollera den i Simulering. Den är facetterad (tusentals plana ytor), inte en redigerbar form.
- **Lägg till i den här delen** sammanfogar utfallet med delen; det är endast på för ett lådformat designutrymme (med delen själv som utrymme ligger utfallet inuti delen).

**Ny delfil** och **Lägg till i den här delen** finns inte ännu i den här versionen: utfallet blir en importerad solid, vilket kräver en exakt kärna. Nedladdningarna av STL och STEP (facetterad) fungerar.

## Hur mycket man kan lita på den

- Den optimerar **styvhet** för den givna volymen. Det finns ännu inga spänningsgränser och inga tillverkningsregler (överhäng, fräsriktningar, minsta hålstorlekar): kontrollera ett valt utfall i [Simulering](topic:simulation) och justera.
- Tunna medlemmar en eller två kuber breda är approximationer: använd en mindre elementstorlek för smala delar.
- Metoden är SIMP med ett täthetsfilter, en tröskelprojektion och uppdateringar med optimalitetskriterier; den rapporterade spänningen och nedböjningen gäller utfallet som kuber, vilket är ärligt men grovt vid skarpa hörn.

## Relaterat

- [Kontrollera spänning och nedböjning (Simulering)](topic:simulation)
- [Exportera för utskrift, STEP och DXF](topic:export-files)
- [Vad som inte finns ännu](topic:not-built-yet)
