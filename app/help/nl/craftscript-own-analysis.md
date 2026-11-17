---
title: Een eigen analyse schrijven
summary: Bouw een analyse als scripts in de Script-werkomgeving: mesh het onderdeel, stel samen en los op, toon het veld en een convergentiegrafiek, controleer het resultaat met een handberekening, en bewaar de stappen als aparte scripts die variabelen delen.
keywords: eigen analyse, aangepaste analyse, FEA-script, eindige elementen, samenstellen, stijfheid, randvoorwaarden, oplossen, pcg, ijl, veld, nabewerking, convergentie, verificatie, handberekening, controle, werkstroom
from: 0f471a8e
---

Een analyse in de Script-werkomgeving bestaat uit een paar korte scripts die variabelen aan elkaar doorgeven. Begin met een [bibliotheek](topic:craftscript-library)-functie die dicht bij wat u nodig heeft ligt, maak een kopie en pas die aan; of bouw er een op zoals hieronder.

## 1. Een mesh

```
model = part();                  % het onderdeel dat u modelleert, als model
m = tetmesh(model, 4);           % tetraëders van ongeveer 4 mm
show(m)
```

Controleer de mesh in de weergave voordat u verdergaat: {{key:F}} past hem passend, het {{ui:oog}} in **Getoond** verbergt het onderdeel.

## 2. Samenstellen en oplossen

Schrijf de elementlus in het script (die leest als in het leerboek), en laat de zware delen over aan de ingebouwde functies: elementmatrices, ijle samenstelling uit tripletten, en de geconjugeerde-gradiëntenoplosser met een preconditioner. Een bibliotheekfunctie zoals `static_tet` (zodra de bibliotheek die heeft) is een compleet voorbeeld om van over te nemen.

## 3. Het resultaat tonen

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % één waarde per knoop
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solverresidu', 'id', 'conv')
```

- Het bereik van de legenda kan worden ingetypt of teruggezet naar {{ui:Auto}}.
- Klik op de mesh om de waarden in een knoop te lezen.
- Een grafiek die dezelfde `'id'` houdt, wordt op zijn plaats bijgewerkt; druk dus af en plot binnen uw lus om de convergentie te volgen.

## 4. Controleer het

Vergelijk met iets wat u kent: de doorbuiging van de punt van een uitkragende balk tegenover PL³/3EI, een plaat met een gat tegenover zijn spanningsconcentratiefactor, de reacties tegenover de belastingen. Schrijf de controle als apart script, zodat die na elke wijziging opnieuw draait:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, balktheorie %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Bewaar het

- Elke stap kan een eigen scripttabblad zijn: ze delen de variabelen, dus draai ze na elkaar.
- Scripts worden in het onderdeel opgeslagen. Vink **Variabelen met het onderdeel opslaan** aan op het tabblad Variabelen om ook de resultaten te bewaren (tot 32 MB).
- {{ui:Opslaan}} in de groep Script downloadt een script om te delen; {{ui:Openen}} haalt er een binnen.
