---
title: Sterkte en doorbuiging controleren (Simulatie)
summary: Een materiaal kiezen, vlakken vastzetten, krachten, drukken of het eigen gewicht van het onderdeel toevoegen, oplossen, en von Mises-spanning, verplaatsing, veiligheidsfactor, reacties en eigenfrequenties op het model aflezen, met wat de methode wel en niet kan vertellen.
keywords: simulatie, FEA, live analyse, bijwerken tijdens bewerken, kapot maken, wat breekt eerst, belastingsfactor, niet-lineair, plasticiteit, vloeien, plastische rek, bilineair, contact, contactpaar, penalty, gebonden, wrijvingsloos contact, CalculiX, .inp, .frd, eindige elementen, spanning, rek, von Mises, verplaatsing, doorbuiging, veiligheidsfactor, vloeigrens, reactie, belasting, kracht, druk, zwaartekracht, eigen gewicht, vast, wrijvingsloos, oplegging, beperking, materiaal, staal, aluminium, titanium, ABS, PLA, nylon, eigenfrequentie, modaal, trilling, mesh, elementgrootte, tetraëder, tetraëders, tet-mesh, voxel, meshkwaliteit, hoofdspanning, equivalente rek, foutschatting, gebogen vlakken, gaten, afrondingen, adaptief, adaptieve verfijning, automatische verfijning, h-adaptief, convergentie, meshconvergentie, exact oppervlak, bol, kegel, torus, spline, vrije vorm
from: 6f2fdec1
---

De werkomgeving Simulatie beantwoordt de vraag "buigt of breekt het onder deze belasting?" voor het onderdeel dat u modelleert. Het is een **lineair statische** studie (kleine vervormingen, het materiaal blijft elastisch) of een **eigenfrequentiestudie**, opgelost op een mesh van kwadratische tetraëders die de vlakken van het onderdeel volgt (of, als u dat kiest, van kleine gelijke kubussen). Het werkt op de benoemde vlakken die de meshkern het onderdeel geeft (zie [De meshkern](topic:solid-kernels)).

Kies **Simulatie** in het vak **Werkomgeving** links op de werkbalk. Uw onderdeel verandert niet; de studie wordt in het onderdeelbestand opgeslagen en elke wijziging ervan kan ongedaan worden gemaakt.

## Een studie opzetten

1. Druk in het rechterpaneel op **Nieuwe studie**.
2. Kies het **Materiaal**. Het paneel toont de stijfheid (E), de dwarscontractiecoëfficiënt, de dichtheid en de vloeigrens. De waarden zijn typische handboekwaarden; de gecertificeerde waarden van uw leverancier kunnen afwijken.
3. Kies de **Mesh**:
   - **Tetraëders (nauwkeurig)**, de standaard: tetraëders met 10 knooppunten waarvan de buitenvlakken op de vlakken van het onderdeel liggen, met gebogen randen bij gaten, afrondingen en andere ronde vlakken. De knooppunten op vlakke, cilindrische, conische, bolvormige en torusvormige vlakken, omwentelings- en geëxtrudeerde vlakken en vrije vormvlakken (B-spline) liggen op het exacte oppervlak; elk ander soort vlak volgt zijn weergavemesh, en de tabel met resultaten zegt hoeveel vlakken dat deden. De mesh wordt vanzelf fijner bij gebogen vlakken, dunne wanden en scherpe randen.
   - **Voxelkubussen (snel)**: het onderdeel gevuld met gelijke kubussen. Snel, maar gebogen vlakken worden trapjes. Studies die zijn opgeslagen voordat de tetraëdermesh bestond, houden deze.
4. Laat **Elementgrootte** leeg voor een automatische grootte (ongeveer 12.000 tetraëders, of 20.000 kubussen), of typ er een in millimeter. Het paneel toont ongeveer hoeveel elementen dat maakt voordat de fijnere plekken worden toegevoegd. Bij tetraëders verfijnt **Kleinere elementen op gebogen vlakken** (standaard aan) gaten en afrondingen, waar de spanning meestal piekt.

### Automatisch verfijnen

Bij tetraëders bieden een statische of knikstudie (zonder thermische belasting), een eigenfrequentiestudie en een stationaire warmtestudie **Automatisch verfijnen (adaptief)** aan. Vink het aan en stel in:

- **Doelfout (%)**: het oplossen stopt wanneer de geschatte fout eronder ligt (1 % om mee te beginnen).
- **Maximaal aantal passages**: het maximale aantal keer dat het oplost (5 om mee te beginnen, hoogstens 10).

Elke passage lost op, zoekt de elementen met de grootste geschatte fout, splitst die (en zo weinig buren als nodig om de mesh heel te houden), en lost opnieuw op. Nieuwe knooppunten op gebogen vlakken gaan naar het exacte oppervlak. De resultaten tonen dan een tabel en een grafiek met, voor elke passage, de elementen, de onbekenden, de geschatte fout en de piekspanning (of temperatuur) en verplaatsing (of warmteflux), en een regel die zegt waarom het stopte: het doel is gehaald, de passages zijn op, de volgende mesh zou te groot worden, of een passage mislukte (u ziet dan de laatste goede passage).

Lees de schatting als een schatting. Ze (Zienkiewicz–Zhu, vergeleken met exacte antwoorden leest ze ongeveer 0,6 tot 0,95 van de werkelijke fout) meet de fout over het **hele onderdeel**, dus een piekspanning bij een gat of een afronding is meestal nog een beetje onnauwkeurig als de schatting klein lijkt: voor een spanningsconcentratie zet u het doel onder 1 % en ziet u de piek van passage tot passage tot rust komen. Bij een scherpe binnenhoek of de rand van een vast vlak is de werkelijke spanning oneindig, dus de schatting bereikt dat nooit: de passages raken dan op.

**Eigenfrequenties en knik.** Bij een eigenfrequentiestudie dekt de schatting elke modus die u vroeg, elk even zwaar meegerekend; de tabel en grafiek volgen de eerste twee frequenties. Bij een onderdeel met alleen vlakke vlakken kan een frequentie van passage tot passage alleen dalen (elke mesh houdt de vorige vast); gebogen vlakken komen ook dichter bij hun werkelijke vorm, wat een frequentie een beetje in beide richtingen kan verschuiven. Bij knik dekt de schatting de voorspanning en de knikmodi, en de tabel volgt de belastingsfactoren. Gecontroleerd op een staven van 100 × 10 × 10 mm staal: de eerste frequentie komt van 812,4 naar 811,9 Hz in vier passages, 0,4 % onder Euler–Bernoulli (die schuif negeert), en de belastingsfactor van de kolom binnen 0,5 % van Euler.

## Vastzetten en belasten

Elke studie heeft minstens één oplegging nodig en, voor spanning, één belasting.

1. Druk op de werkbalk op {{ui:Vast}}. De nieuwe oplegging is geselecteerd en wacht op vlakken: klik op de vlakken die stil worden gehouden (klik nogmaals op een vlak om het los te laten). Druk op **Kiezen gereed** of {{key:Esc}} als u klaar bent. Blauwe kegels markeren de vastgehouden vlakken.
2. Druk op {{ui:Kracht}} en klik op de vlakken waarop de kracht werkt. Typ in het paneel de **Totale kracht** in newton en kies de **Richting**: in het vlak, of langs een as. De kracht wordt over de gekozen vlakken verdeeld naar oppervlakte. Oranje pijlen tonen hem.
3. Druk op {{ui:Druk}} voor een druk in MPa (N/mm²) die in de gekozen vlakken duwt; een negatieve druk trekt.

Meer soorten staan in de lijst **Toevoegen** van het paneel: een **Wrijvingsloos vlak** (het vlak mag langs zichzelf glijden maar niet ervan weg bewegen — gebruik het voor symmetrievlakken en gladde opleggingen) en **Zwaartekracht** (het eigen gewicht van het onderdeel, 9,81 m/s², in de richting die u kiest).

Een oplegging die het onderdeel vrij laat glijden of draaien, wordt geweigerd, met de melding welke beweging vrij blijft.

## Oplossen en de resultaten lezen

Druk op {{ui:Oplossen}}. Het werk loopt op de achtergrond; **Stoppen** annuleert het. Daarna:

- Het onderdeel krijgt een kleur naar **von Mises-spanning**; kies **Verplaatsing** of **Veiligheidsfactor** bij **Tonen**. De legenda geeft de schaal.
- Wijs naar het onderdeel om de waarden onder de aanwijzer te lezen.
- Vink **Vervormde vorm** aan om het onderdeel gebogen te zien (de beweging wordt vergroot met de **Schaal**; de echte staat in de tabel).
- De tabel toont de grootste spanning en waar die is, de grootste verplaatsing, de kleinste **veiligheidsfactor** (vloeigrens ÷ von Mises-spanning; onder 1 vloeit het materiaal), de uitgeoefende belasting en de **reacties** in de opleggingen (ze houden de belasting in evenwicht), en de gebruikte mesh.

Voor **eigenfrequenties** kiest u dat **Type**, stelt u het aantal **Modi** in en lost u op. Elke modus toont zijn frequentie en vorm (vormen worden geschaald naar 1 bij hun grootste beweging).

Als u het onderdeel wijzigt, worden de resultaten als verouderd gemarkeerd: los opnieuw op.

## Vloeien en contact (niet-lineaire studies)

Twee studietypen gaan verder dan "het materiaal blijft elastisch":

- **Niet-lineair (materiaal vloeit)** volgt de rechte lijn van het materiaal tot de vloeigrens, en daarna een vlakkere helling (**Helling na vloeien**, 1 % van E als het leeg is gelaten). De belasting gaat verder in **Belastingsstappen**; een stap die niet tot rust komt, wordt zelf gehalveerd. De resultaten voegen **Plastische rek** toe aan de grafieken en zeggen hoeveel van de belasting werd gedragen. Als een stap nog steeds niet tot rust komt, stopt de studie bij de laatste goede stap en het paneel ⚠ Problemen zegt waar: het onderdeel heeft daar zijn sterkte verloren (een bezwijken), of de stappen zijn te groot.
- **Contact tussen onderdelen** laat losse onderdelen van het onderdeel op elkaar drukken. Voeg een **Contactpaar** toe, kies de vlakken van zijde A (de vlakken die drukken) met {{ui:Vlakken kiezen}}, en daarna zijde B met {{ui:Vlakken van zijde B kiezen}}. **Wrijvingsloze** onderdelen duwen, glijden en scheiden; **gebonden** onderdelen blijven vastzitten. Elk onderdeel wordt apart gemeshed, dus een kleine opening ertussen is prima. Contact is een penaltymethode: de onderdelen zakken een beetje in elkaar (de **penaltyfactor** × E ÷ elementgrootte bepaalt hoe stijf het contact is). De tabel toont het diepste indringen, en het paneel Problemen waarschuwt wanneer dat meer is dan 1 % van de elementgrootte: verhoog de factor of gebruik kleinere elementen.

Beide gebruiken de tetraëdermesh. Wrijving, grote glijding en grote rotaties worden hier niet opgelost.

## Uitvoeren in CalculiX

**Exporteren › CalculiX-deck (.inp)** (of {{ui:Een CalculiX-deck opslaan (.inp)}} in het paneel) slaat de studie op als invoerdeck voor CalculiX, een apart programma dat u zelf installeert en uitvoert: dezelfde mesh, materiaal, opleggingen, belastingen en contactparen, in mm, N en MPa. Voer het uit, en **Exporteren › CalculiX-resultaten (.frd)** leest het resultaatbestand terug op dezelfde mesh en toont de verplaatsing (en von Mises-spanning als het bestand spanningen bevat). Als u het onderdeel of de elementgrootte daartussen hebt gewijzigd, is de mesh niet meer dezelfde en zegt PartCraft dat: sla een nieuw deck op.

## Hoe ver u het kunt vertrouwen

PartCraft controleert zijn solver met handformules (de doorbuiging aan het uiteinde van een uitkraging PL³/3EI binnen 1 %, de rek van een staaf PL/AE exact, de eerste frequentie van een uitkraging binnen 3 %, de spanning rond een gat in een plaat). Toch moet u deze grenzen in gedachten houden:

- **De mesh.** Bij tetraëders controleert PartCraft de doorbuiging en buigspanning van een uitkraging (binnen 0,3 %), de spanning bij een gat in een plaat (Kt, binnen ongeveer 1 %), een dikwandige buis onder druk (Lamé, binnen 0,3 %) en de eerste frequentie (binnen 0,4 %). De tabel toont de **meshkwaliteit** (de kleinste en grootste hoeken tussen elementvlakken; onder ongeveer 10° is een element slecht) en een **geschatte spanningsfout**: is die meer dan een paar procent, los dan opnieuw op met een kleinere elementgrootte, of laat **Automatisch verfijnen** dat doen. Bij een plaat met een gat en een staaf met twee randinkepingen kwam automatische verfijning binnen 1 % van de handboek-Kt met ongeveer een zesde van de onbekenden die een fijnere mesh over het hele onderdeel nodig had. Bij voxelkubussen is een gat of afronding een trap op de kubusgrootte, dus de spanning daar is ruw.
- **Scherpe binnenhoeken en de randen van vaste vlakken hebben geen werkelijke piekspanning.** De waarde daar blijft groeien naarmate de elementen kleiner worden. Lees spanningen een stuk weg van zulke plekken, of rond de hoek af in het model.
- **Resultaten om te lezen.** Naast von Mises-spanning, verplaatsing en veiligheidsfactor toont een tetraëderstudie de **grootste en kleinste hoofdspanning** (trek en druk) en de **equivalente rek**. Vink **Mesh tonen** aan om de elementen te zien.
- **Statische studies zijn lineair en elastisch.** Voor vloeien en contact gebruikt u de niet-lineaire studietypen hierboven; grote doorbuigingen en vermoeiing worden niet opgelost. Warmte, thermische spanning en lineaire knik zijn hun eigen studietypen: zie [Warmte, thermische spanning en knik](topic:thermal-and-buckling).
- **Elk materiaal is in alle richtingen gelijk.** 3D-geprinte kunststoffen zijn zwakker dwars op hun lagen, vaak met een derde of meer.
- Dit is een labversie: controleer onderdelen die ertoe doen op een andere manier.

## Bijwerken tijdens het bewerken (Live)

Vink **Bijwerken tijdens mijn bewerking** aan in het blok Oplossen, en de antwoorden van Simulatie volgen uw wijzigingen. Wijzig een maat, een belasting, het materiaal of de omgeving, en er verschijnt meteen een **snel antwoord**, gemaakt met elementen die vier keer groter zijn dan die van de studie; wanneer u even stopt (een seconde of zo), vervangt het eigen **verfijnde antwoord** van de studie het. De resultaten zeggen welke u ziet ("Snel antwoord" of "Verfijnd antwoord") en de elementgrootte. Het snelle antwoord is goed voor richting en grootte: bij een uitkraging van staal lag het binnen 1 % op de doorbuiging en ongeveer 4 % op de spanning van het verfijnde. Vertrouw het verfijnde voor getallen die u gaat gebruiken. Statische, eigenfrequentie-, thermische en knikstudies werken zo; Live is een beeldinstelling en wordt niet in het onderdeel opgeslagen. Een Oplossen die u zelf indrukt, blijft staan tot de volgende wijziging.

## Uitzoeken wat als eerste breekt (Breken)

Voor een statische of knikstudie drukt u in het blok **Breken** op **Wat breekt eerst?**. PartCraft schaalt de belastingen van de studie (krachten, drukken en gewicht samen) tot het onderdeel het begeeft, en toont, het ergste eerst, **de belastingsfactor tot eerste vloeien** (de factor op de belastingen van vandaag waarbij de hoogste von Mises-spanning de vloeigrens van het materiaal bereikt, met een rode markering waar dat gebeurt) en **de belastingsfactor tot knik** voor dezelfde opleggingen en belastingen. Een factor van 4,3 betekent dat het onderdeel 4,3 keer zijn belasting kan dragen voordat het vloeit; **een factor onder 1 betekent dat het al bezwijkt zoals het belast is**, en dat verschijnt in de lijst Problemen als fout (de zwakste bevinding wordt als notitie getoond, ook als alles klopt). De factoren komen uit een lineaire studie op tetraëders bij uw elementgrootte, dus ze zijn zo goed als die studie: de spanning bij een vast vlak of een scherpe hoek heeft geen echte piek (zie hierboven), en de vloeifactor zit daar aan de voorzichtige kant. Uw assistent kan dezelfde controle uitvoeren met het gereedschap `break_run`.

## Gerelateerd

- [Warmte, thermische spanning en knik](topic:thermal-and-buckling)
- [Een vorm laten groeien uit belastingen (Generatief)](topic:generative-design)
- [Afstanden, hoeken en massa meten](topic:measure)
- [Wat nog niet beschikbaar is](topic:not-built-yet)
