---
title: Trekhoek controleren voor vormgieten en gieten
summary: Kleur het onderdeel naar zijn trekhoek ten opzichte van de trekrichting van een mal, zie welke vlakken loslaten, welke meer trekhoek nodig hebben en welke loslaten van de andere helft, met het aandeel van elk in het oppervlak.
keywords: trekhoekanalyse, trekhoek, taps toelopend, mal, matrijs, matrijsgieten, spuitgieten, trekrichting, scheidingslijn, ondersnijding, loslaten, trekhoek controleren
from: 6a106f83
---

Onderdelen die in een mal, een matrijs of een zandgieterij worden gemaakt, hebben **trekhoek** nodig: wanden die een beetje schuin staan, zodat het onderdeel eruit glijdt. **Trekhoekanalyse** kleurt elk vlak naar hoe ver het schuin staat ten opzichte van de richting waarin de mal opengaat (de **trekrichting**).

## Inschakelen

1. Open in de werkomgeving Ontwerp {{ui:Weergaven}} en kies {{ui:Trekhoekanalyse}}.
2. Stel **Trekrichting** in: de richting waarin de mal opengaat, langs X, Y of Z in beide richtingen, of **Loodrecht op een gekozen vlak**: druk op {{ui:Kies een vlak}} en klik op een vlak van het onderdeel.
3. Stel **Minimale trekhoek** in, in graden: de kleinste schuinte die uw proces nodig heeft (vaak 1° tot 3°).

Het onderdeel wordt gekleurd:

| Kleur | Betekent |
|---|---|
| Groen: **Positieve trekhoek** | Naar de trekrichting toe schuin met minstens het minimum: loslaten van deze helft van de mal |
| Okerkleur: **Trekhoek nodig** | Binnen het minimum in beide richtingen, zoals een verticale wand: voeg hier trekhoek toe |
| Rood: **Negatieve trekhoek** | Van de trekrichting af schuin met minstens het minimum: loslaten van de andere helft, of een ondersnijding als het onderdeel uit één helft moet komen |

Het aandeel van elke klasse in het oppervlak van het onderdeel wordt naast die klasse getoond. **Trekrichting omkeren** kijkt vanuit de andere helft van de mal: groen en rood wisselen.

Gebogen vlakken worden punt voor punt beoordeeld, dus een cilinder die dwars op de trekrichting ligt, toont aan de zijkanten een strook die trekhoek nodig heeft.

De kleuren volgen het onderdeel als u het wijzigt. {{key:Esc}} of {{ui:Sluiten}} zet de analyse uit; er wordt niets in het onderdeel opgeslagen.

:::tip
Om trekhoek toe te voegen, gebruikt u de functie {{ui:Trekhoek}} op de okerkleurige vlakken (zie [Uitvegen, loft en trekhoek](topic:sweep-loft-draft)), en controleert u daarna opnieuw.
:::
