---
title: Afstanden, hoeken en massa meten
summary: Klik op twee dingen in de weergave voor de kleinste afstand, de hoek en ΔX ΔY ΔZ; lees de lengte van een rand, de diameter van een gat, het oppervlak van een vlak of de coördinaten van een punt af; haal volume, massa, massamiddelpunt en traagheid van een onderdeel of een samenstelling op.
keywords: meten, afstand, kleinste afstand, hoek, lengte, radius, diameter, oppervlakte, coördinaten, delta, inspecteren, massa-eigenschappen, massa, gewicht, massamiddelpunt, traagheid, traagheidsmoment, dichtheid, materiaal
from: 20bda0b7
---

**Meten** werkt op het model in elke werkomgeving (Ontwerp, Vorm, Simulatie, Generatief, Fabricage) en in een samenstelling. Het staat in het menu {{ui:Weergaven}} van de groep {{ui:View}}, of druk op {{key:M}}. Er opent een kaart over de linkerbovenhoek van de weergave.

## Eén ding meten

Klik op een hoekpunt, een rand of een vlak. De kaart toont:

- **Een punt** (een hoekpunt, een randmiddelpunt of een cirkelmiddelpunt): zijn X, Y, Z.
- **Een rand**: recht, cirkel of kromme, en de lengte ervan; voor een cirkel ook de radius, de diameter en het middelpunt.
- **Een vlak**: vlak, cilinder, kegel enzovoort, en het oppervlak; de normaal van een vlak; de radius en diameter van een cilinder (de maat van een gat). Oppervlakken zijn die van de facetten die de meshkernel maakt.
- **Het hele lichaam**: houd {{key:Shift}} ingedrukt en klik op het onderdeel. U krijgt het volume, het oppervlak, de massa en de traagheid (zie hieronder).

De aanwijzer snapt naar hoekpunten, randmiddelpunten en cirkelmiddelpunten binnen 10 pixels; een klein blauw stipje toont de snap voordat u klikt. Wilt u het middelpunt van een gat kiezen, wijs dan naar het midden van het gat; wilt u de rand kiezen (de cirkel), wijs dan naar de rand.

## Tussen twee dingen meten

Klik op een tweede item. De kaart voegt toe:

- **Kleinste afstand** en de twee dichtstbijzijnde punten, in de weergave getekend met een lijn ertussen.
- **ΔX, ΔY, ΔZ** van het eerste dichtstbijzijnde punt naar het tweede.
- **Hoek** tussen twee vlakke vlakken (tussen hun normalen, 0–180°), tussen twee rechte randen of assen (0–90°), of tussen een rand en een vlak.
- **Afstand tussen de vlakken** voor twee evenwijdige vlakke vlakken, **Middelpunt tot middelpunt** voor twee cirkels of gaten, **As tot as** voor twee evenwijdige gaten of cilinders.

Een derde klik begint een nieuw paar. {{key:Esc}} wist de keuzes; nog een keer {{key:Esc}} (of {{ui:Sluiten}}) sluit Meten. {{ui:Kopiëren}} zet de resultaten op het klembord als tab-gescheiden tekst, klaar om in een spreadsheet te plakken.

### Hoe nauwkeurig het is

PartCraft bouwt het onderdeel met de meshkernel, dus afstanden worden berekend op de facetten van de mesh, en de kaart zegt **benaderd: van de facetten**. Dat klopt voor vlakke vlakken en tussen hoekpunten, en wijkt licht af voor gebogen vlakken. Een fijnere instelling **Krommen** brengt ze dichterbij. Exact meten op de echte oppervlakken vraagt een exacte kernel: in deze versie nog niet beschikbaar.

## Massa-eigenschappen

Kies {{ui:Massa-eigenschappen}} in de kaart of in het menu {{ui:Weergaven}}. Bij een onderdeel kiest u een **Materiaal** in de kaart (staal, aluminium, kunststoffen en andere, met hun gebruikelijke dichtheden). In een samenstelling gebruikt elk onderdeel het materiaal dat in zijn eigenschappen is ingesteld (selecteer het onderdeel en kies dan **Materiaal**), en het resultaat geldt voor alle onderdelen samen.

De kaart toont massa, volume, oppervlak, massamiddelpunt, de traagheidstensor (Ixx, Iyy, Izz en de producten Ixy, Iyz, Ixz, in kg·mm², rond het massamiddelpunt langs de wereldassen) en de hoofdtraagheidsmomenten. Zonder materiaal toont hij dezelfde waarden per eenheid dichtheid (mm⁵) en geen massa.

De getallen zijn exact voor het getrianguleerde volume dat de meshkernel maakt (gebogen vlakken als facetten), dus een rond onderdeel komt een beetje laag uit, en de kaart zegt dat. Materiaaldichtheden zijn typische handboekwaarden; een echte legering of kwaliteit kan een paar procent afwijken.

## Beperkingen

- Snaps kunnen een punt vinden dat achter andere geometrie verborgen is; controleer of de kaart zegt wat u bedoelde.
- Meten wordt gesloten als u een schets of het tekenblad opent, of van werkomgeving wisselt.
