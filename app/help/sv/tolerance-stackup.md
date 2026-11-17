---
title: Toleranskedjor
summary: Välj en kedja av ytor genom delarna i en sammanställning och se hur mycket glappet i ändan kan variera, värsta fall och RSS, med de mått som spelar mest rangordnade först.
keywords: toleranskedja, toleransstapling, toleransanalys, toleranskedja, måttkedja, slinga, glapp, spel, värsta fall, rss, rot ur kvadratsumman, statistisk tolerering, bidragsgivare, känslighet, gd&t, allmän tolerans, iso 2768
from: cbdb3159
---

En **toleranskedja** adderar måtten längs en kedja genom flera delar för att se hur mycket ett resultat, oftast ett glapp, kan variera när varje del tillverkas någonstans inom sina toleranser.

## Välj kedjan

1. Öppna en sammanställning och välj {{ui:Toleranskedja}} i gruppen {{ui:Sammanställning}}. Ett kort öppnas över vyn.
2. Välj vad kedjan mäts **längs**: X, Y eller Z för sammanställningen, eller {{ui:Första ytans normal}}.
3. Tryck på {{ui:Välj kedjan}} och klicka på ytorna som kedjan går genom, **i ordning**: börja på ena sidan av glappet, gå genom delarna och sluta på andra sidan av glappet.
4. Tryck på {{ui:Klar}} eller Enter. Backspace tar tillbaka det senaste klicket; Esc avbryter.

Två klick på samma del ger delens mått (dess avstånd längs kedjan). Ett klick på en annan del gör ett **gränssnitt** mellan dem, där delarna möts; det har ingen tolerans om du inte skriver in en. Länkarna adderar eller tar bort efter hur kedjan går, och de sluter slingan: det nominella glappet är det modellen visar.

Du kan också {{ui:Lägg till en länk}} för hand och skriva in dess nominella värde, dess tolerans och om den adderar (+) eller tar bort (−).

## Ge varje länk sin tolerans

Varje länk har en **övre** och en **nedre** avvikelse (till exempel +0.1 och −0.05). **Tolerans från** fyller i dem från delen:

- **Allmän tolerans**: delens fält för Tolerans i ritningshuvudet (se [Ritning till PDF](topic:drawing-pdf)), när det visar ±0.1, +0.2/-0.1 eller ISO 2768-f, -m, -c eller -v (ISO 2768-1 linjära toleranser, efter länkens storlek). En delens allmänna tolerans används direkt när kedjan väljs.
- **GD&T**: vilken ram för formtolerans som helst på delens ritning. Lägesszoner, profilzoner och kastzoner ger ± halva toleransen. En orienterings- eller formtolerans ligger oftast redan inom måttoleransen: lägg till den bara där kedjan möter den styrda ytan. Med Ⓜ eller Ⓛ tas zonen vid sin angivna storlek; bonustoleransen räknas inte.
- **Inskriven**: vilka tal som helst du skriver in.

## Läs resultaten

- **Glapp, nominellt** och, när toleranserna är olika, **Glapp, medel** — +0.2/−0 och +0/−0.1 flyttar mitten av intervallet.
- **Värsta fall**: varje tolerans vid sin gräns på samma gång. Glappet kan aldrig ligga utanför detta.
- **RSS** (rot ur kvadratsumman): varje tolerans tas som tre standardavvikelser i en normalfördelning, och adderas som kvadratroten av summan av deras kvadrater. De flesta sammanställningar ligger väl inom värsta fallet; detta är den vanliga uppskattningen för delar som tillverkas i serie.
- Ange **Glapp minst** och **Glapp högst** för att se om värsta fallet alltid ligger inom, och hur många sammanställningar av en miljon RSS förväntar sig utanför.
- Kolumnen **#** rangordnar länkarna efter deras **andel** av RSS: sträng åt de första för att göra störst skillnad.

{{ui:Save CSV}} skriver länkarna, deras andelar och resultaten. Toleranskedjorna sparas i sammanställningsfilen, och varje ändring är ett steg för {{key:Mod+Z}}.

:::note
En toleranskedja går i en riktning. Den följer inte vinklar eller vändningar längs kedjan, och den läser inte måttoleranser från skisserna: ange dem som inskrivna toleranser eller via ritningshuvudet.
:::
