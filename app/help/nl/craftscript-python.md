---
title: Scripts in Python
summary: Schrijf Script-werkomgevingscripts in Python 3: het cs-object van ingebouwde functies, arrays als numpy-achtige waarden met 0-gebaseerde indexering, de gedeelde werkomgeving, afdrukken, wat er nog niet is, en hoe Python is afgesloten zoals CraftScript en Lua.
keywords: Python, Python 3, CPython, WebAssembly, afgesloten, veilig, script, taal, cs, ws, werkomgeving, numpy, array, matrix, indexering, print, display, vertrouwen
from: 66eab56d
---

Python is de derde taal van de [Script-werkomgeving](topic:craftscript). Kies **Python** in het taalvak boven de editor (een `.py`-bestand opent zichzelf in Python). Python, Lua en CraftScript delen dezelfde variabelen en dezelfde ingebouwde functies, dus een Python-script kan gebruiken wat een CraftScript-script heeft gemaakt, en omgekeerd.

De eerste Python-uitvoering tijdens een bezoek laadt Python zelf (CPython 3.14, ongeveer 7 MB) van deze site, wat enkele seconden duurt. Python is nog geen onderdeel van {{ui:Opslaan voor offline gebruik}}: voer eerst één Python-script uit terwijl u online bent.

## Python is afgesloten

Python-scripts zijn afgesloten, net als CraftScript- en Lua-scripts: ze bereiken het onderdeel, de variabelen en de ingebouwde functies, en niets anders. Elke uitvoering is een nieuwe Python in een eigen sandbox met een kleine bestandsboom in het geheugen (de standaardbibliotheek en een `/tmp`-map die na de uitvoering verdwijnt). Het kan het netwerk, uw bestanden of de rest van de pagina niet bereiken, zowel in de browser als op de opdrachtregel. Een script van iemand anders kan nog steeds veel tijd of geheugen gebruiken: {{ui:Stoppen}} beëindigt het.

## De essentie

```
A = cs.magic(3)              # elke ingebouwde functie is cs.<naam>
B = A @ A.T                  # @ is het matrixproduct, .T de transpositie
C = A * 2 + 1                # + - * / ** werken elementsgewijs, zoals in numpy
print(A[0, 1], A[-1, -1])    # 0-gebaseerd; negatief telt vanaf het einde
row = A[1]                   # één index op een matrix: een rij
big = A[A > 4]               # een logisch masker kiest elementen
A[0, 0] = -5                 # een waarde toekennen in een array
V, D = cs.call('eig', 2, A)  # meerdere resultaten: cs.call(naam, hoeveel, …)
```

- Een 1 × 1-array komt aan als een gewoon getal; andere arrays, ijle matrices, meshes, velden en modellen zijn **Waarden**.
- Een Waarde heeft `shape` (een tuple), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (zijn rijen), en `float()`, `int()` en `bool()` voor één element.
- Vergelijkingen (`<`, `==`, …) zijn elementsgewijs, zoals in numpy: ze geven een logische Waarde.
- Lijsten van getallen die aan een ingebouwde functie worden doorgegeven, worden arrays: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` maakt een matrix.
- Een dict wordt een struct en een lijst van gemengde dingen een cell, en weer terug.

Elke globale variabele die uw script maakt (een getal, een Waarde, een dict, een lijst…) komt op het tabblad **Variabelen** terecht wanneer de uitvoering eindigt, ook na een fout. Namen die beginnen met `_`, functies, klassen en modules blijven in Python. `ws.name` leest of zet een variabele rechtstreeks, en `ws_names()` somt ze op.

`print(…)` schrijft naar de console. `display(…)` (of `cs.display`) toont een mesh, een veld of een grafiek, zoals in CraftScript.

## De analysebibliotheek aanroepen

Bibliotheekfuncties worden aangeroepen zoals ingebouwde: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Schrijf de naam in het script zoals die is: PartCraft vindt de bibliotheekfuncties die een script gebruikt voordat het draait.

## Nog niet beschikbaar

- numpy, scipy en andere pakketten: alleen de eigen standaardbibliotheek van Python (`math`, `json`, `itertools`, `decimal`, `statistics`…) is er, zonder de onderdelen voor vensters, terminal en database (`tkinter`, `curses`, `sqlite3`).
- Sockets en alles wat buiten zou reiken: Python heeft hier geen netwerk.
- `time.sleep` keert meteen terug.
- Vouwen in de editor, en een Python-functie aanroepen vanuit een CraftScript-script.
- Een uitvoering controleert het instructiebudget en Stoppen elke 1000 regels; een lange berekening binnen één ingebouwde functie wordt eerst afgemaakt.
