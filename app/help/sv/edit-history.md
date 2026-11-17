---
title: Ändra en del via dess historik
summary: Redigera funktioner och skisser i efterhand, undertryck, rulla tillbaka, infoga funktioner tidigare, ändra ordning, byt namn och ta bort, och ångra något av detta.
keywords: historik, funktionsträd, konstruktionsträd, redigera funktion, redigera skiss, undertryck, häv undertryckning, rulla tillbaka, rulla framåt, ändra ordning, flytta funktion, ta bort, byt namn, ångra, gör om, bygg om, generera om, förälder, barn, stor del, många funktioner, långsam ombyggnad, 750 funktioner
from: 6f75aef4
---

En PartCraft-del är sin historik: listan över plan, skisser och funktioner till vänster. PartCraft bygger om soliden uppifrån den listan varje gång något ändras. Om du ändrar ett tal tidigt i listan ändras allt som byggts på det.

## Redigera en funktion

1. Klicka på funktionen i historiken (eller på skissen under den, indragen).
2. Ändra inställningarna i den högra panelen. Varje ändring byggs om direkt.

Det finns ingen OK eller {{ui:Avbryt}}: varje ändring tillämpas. Vill du inte ha den trycker du på {{key:Mod+Z}}.

## Ändra vilka kanter eller ytor en rundning, fas eller skal använder

Dubbelklicka på funktionen i historiken, eller markera den och välj {{ui:Välj kanter}} (eller {{ui:Välj ytor}}). Klicka på kanter eller ytor för att lägga till eller ta bort dem, och välj sedan {{ui:Klar}} eller {{key:Esc}}. Se [Avrunda, fasa och skal](topic:fillet-chamfer-shell).

## Redigera en skiss

1. Dubbelklicka på skissen i historiken, eller markera den och välj {{ui:Redigera skiss}} i den högra panelen (eller {{ui:Skiss}} i verktygsfältet).
2. Delen går tillbaka till hur den såg ut när skissen gjordes: funktioner efter den döljs medan du redigerar.
3. Ändra geometrin, relationerna eller måtten.
4. Stäng skissen. Hela delen byggs om med ändringen.

Om du bara vill ändra ett mått behöver du inte öppna skissen. Markera funktionen eller skissen och ändra talet under **Skissmått** (eller **Drivande mått**) i den högra panelen. Se [Ändra mått utan att öppna skissen](topic:change-sizes).

## När en funktion misslyckas

Om en ändring gör en funktion omöjlig bygger PartCraft allt annat och markerar problemet:

- funktionen visar **⚠ fel** i historiken, och dess meddelande står överst i den högra panelen (peka på raden för att läsa det där också);
- funktioner som behöver den visar **⚠ ej byggd**, med ”Kräver Extrude2, som misslyckas.”
- chipet i statusfältet säger ”1 funktion har fel”.

Åtgärda orsaken (eller ångra), så byggs delen igen. Vanliga meddelanden och vad du gör åt dem finns i [Felsökning](topic:troubleshooting).

## Undertryck en funktion

Undertryckning stänger av en funktion utan att ta bort den: användbart för att prova en del utan ett hål eller ett mönster.

1. Markera funktionen.
2. Välj {{ui:Undertryck}}. Dess rad visar **av**. Funktioner som behöver den byggs inte heller.
3. Välj {{ui:Häv undertryckning}} för att slå på den igen.

## Rulla tillbaka

Att rulla tillbaka bygger delen bara upp till en punkt, så att du kan se den som den var, eller lägga till en funktion tidigare i historiken.

1. Markera en funktion och välj {{ui:Rulla tillbaka hit}}. Den funktionen och alla under den är gråmarkerade och byggs inte. En rad **Tillbakarullningslinje · rulla framåt** markerar platsen.
2. Varje funktion du lägger till nu hamnar **vid linjen**, före de gråmarkerade.
3. Klicka på **Tillbakarullningslinje · rulla framåt** för att bygga allt igen.

Läget för tillbakarullningen sparas i filen.

## Ändra ordning på funktioner

1. Markera funktionen.
2. Välj {{ui:Flytta upp}} eller {{ui:Flytta ned}}, eller tryck på {{key:Alt+Up}} eller {{key:Alt+Down}} när dess rad i historiken är i fokus.

En funktion kan aldrig flyttas upp över något den använder. Knappen är gråmarkerad, och om du pekar på den (eller provar tangenten) visas skälet, till exempel ”Extrude2 använder Sketch2, så Sketch2 måste komma först.”

En funktion använder: sin skiss; ytan skissen ligger på; de funktioner ett mönster eller en spegling kopierar; en skisslinje eller en revolvering som används som riktning eller axel.

## Ta bort en funktion

1. Markera funktionen och välj {{ui:Ta bort}} i den högra panelen eller verktygsfältet, eller tryck på {{key:Delete}}.
2. Om andra funktioner använder den frågar PartCraft: ”Extrude3, Hole1 använder Extrude1 och tas också bort.” Välj {{ui:Ta bort alla}} eller {{ui:Avbryt}}.

Att ta bort en funktion tar inte bort dess skiss: skissen visas igen i vyn som en oanvänd skiss, redo för en annan funktion. Ta bort skissen separat om du inte behöver den.

## Byt namn

Markera funktionen och skriv ett nytt **Namn** längst ned i den högra panelen (upp till 60 tecken). Delens eget namn finns i den högra panelen när inget är markerat.

## Delar med hundratals funktioner

En del med hundratals funktioner testas vid 750. PartCraft behåller den solid den hade halvvägs genom historiken, så en ändring sent i historiken bygger bara om funktionerna efter den; en ändring nära toppen bygger om allt som byggts på den, vilket tar längst tid. Ångra och gör om bygger bara om från där de två tillstånden skiljer sig. För att arbeta snabbare på en stor del, rulla tillbaka till där du arbetar (se Rulla tillbaka ovan) eller undertryck det du inte behöver just nu. Flera urtag och upphöjningar som inte rör varandra tillämpas tillsammans, så en del av många separata hål och upphöjningar byggs snabbare än antalet funktioner antyder.

En stor del byggs om i bakgrunden: byggchipet längst ned visar **Byggs om…** med hur långt det har kommit, och vyn, panelerna och menyerna fungerar medan det pågår. Delen på skärmen är den senast byggda tills den nya är klar. Om du ändrar något igen medan den byggs om bygger PartCraft den nyaste versionen och kastar den som pågår. En liten del byggs fortfarande om direkt.

## Ångra och gör om

- {{key:Mod+Z}} eller {{ui:Ångra}} ångrar den senaste ändringen: en funktion, en inställning, en skissredigering, ett drag. Statusfältet säger vad, till exempel ”Ångrade ändring av mått.”
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} eller {{ui:Gör om}} gör om den.
- PartCraft behåller de senaste 200 stegen (en så stor del att 200 kopior skulle använda mycket minne behåller färre, aldrig färre än de senaste 20). Ändringar på ritningsbladet (en sektion, en flyttad GD&T-symbol) finns i samma lista. Att öppna en fil eller starta en ny del rensar den.

:::mac
På en Mac använder du ⇧⌘Z för att göra om. I Safari kan ⌘Y öppna webbläsarens historik i stället.
:::
