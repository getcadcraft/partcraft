---
title: Eén onderdeel samen modelleren met Live TeamWork
summary: Wat er in PartCraft verandert terwijl u in een Live TeamWork-sessie van CadCraft Studio bent: de kenmerken van iedereen in één boom, elk venster dat hetzelfde volume bouwt, uw eigen ongedaan maken, en deelnemen vanuit een browser op hetzelfde netwerk.
keywords: live, live teamwork, studio live, samen, samenwerken, sessie, live delen, deelnemen, kenmerkenboom, geschiedenis, opnieuw opbouwen, cursor, aanwijzer, elkaar zien, namen, kleur, selectie, ongedaan maken, host
from: 1809b96c
---

## Wat u leert

Wat er met een onderdeel gebeurt wanneer meerdere mensen het tegelijk modelleren. CadCraft Studio start en neemt deel aan de Live TeamWork-sessie (Delen, Deelnemen); deze pagina gaat over het onderdeel zelf.

## Iedereen modelleert tegelijk

Iedereen werkt aan dezelfde kenmerkenboom: schetsen, extrusies, gaten, patronen, afrondingen, parameters. Uw eigen bewerkingen zijn meteen zichtbaar; die van anderen verschijnen even nadat ze ze maken. Alleen de boom reist mee: elk venster bouwt het volume zelf, en de kernel van PartCraft bouwt hetzelfde volume uit dezelfde boom in elk venster.

- **Twee mensen wijzigen één kenmerk:** verschillende instellingen (de een de diepte, de ander de eindvoorwaarde) blijven allebei behouden; dezelfde instelling gaat naar de latere wijziging.
- **Een schets** reist als geheel: wanneer twee mensen tegelijk één schets bewerken, wint de latere bewerking. Spreek af wie welke schets tekent.
- **Een kenmerk dat op iets is gebouwd wat iemand net heeft verwijderd** (een extrusie van een verwijderde schets, een gat in een verwijderd vlak), wordt teruggedraaid, en de statusbalk zegt waarom.
- **Het herordenen van de boom** wordt gecontroleerd: als twee mensen tegelijk kenmerken slepen, wordt de tweede verplaatsing teruggedraaid.

## Elkaar zien

Iedereen in de sessie heeft een eigen kleur. U ziet de aanwijzer van elke persoon als een pijl in hun kleur, met hun naam ernaast, op het vlak waar ze naar wijzen. Wanneer ze een kenmerk in de boom geselecteerd hebben, verschijnt de naam ervan na die van hen.

Aanwijzers, namen en selecties gelden alleen voor de sessie: ze worden nooit in het bestand opgeslagen en komen nooit in iemands ongedaan maken terecht. Ze glijden naar waar elke persoon is, zodat ze ook op een trage verbinding soepel blijven.

## Ongedaan maken draait uw eigen werk terug

{{key:Mod+Z}} draait uw eigen laatste bewerking terug en laat het werk van anderen met rust. Als iemand daarna hetzelfde heeft gewijzigd, wordt niets teruggedraaid en de statusbalk zegt wie.

## Deelnemen vanuit een browser

Een teamgenoot zonder Studio kan het beeld onder de code van de host scannen met een telefoon, tablet of computer op hetzelfde netwerk. PartCraft opent in de browser, vult zich met het onderdeel van de host zodra de host u toelaat, en bouwt het. Een uitnodigingslink laat iemand van een ander netwerk deelnemen: de host heeft een Team Cloud Plan-plaats voor de app nodig, iedereen anders doet gratis mee, en de link werkt alleen zolang de sessie van de host open is.

## Wanneer de sessie eindigt

Alleen de host slaat het onderdeel op. Iedereen anders houdt een niet-opgeslagen kopie: sla die op als u hem wilt bewaren.

:::note
Samenstellingen worden nog niet in een sessie gedeeld: open het onderdeel zelf om er samen aan te werken.
:::
