---
title: La biblioteca d'eines
summary: Deseu les eines que useu al navegador perquè totes les peces en puguin tenir, i moveu les biblioteques d'eines entre ordinadors com a fitxer JSON.
keywords: biblioteca d'eines, eines, exporta, importa, JSON, desa eines, número T, fresa de punta, eines de taller
from: 8b9f2483
---

La pestanya **Eines** de **Fabricació** mostra les eines de la peça. Sota **Biblioteca d'eines** podeu guardar les vostres pròpies eines més enllà d'una peça:

- {{ui:Desa aquesta eina}} afegeix l'eina seleccionada a les **Eines desades**; {{ui:Desa totes les eines d'aquesta peça}} les afegeix totes. Les eines desades es guarden en aquest navegador i hi són per a totes les peces. Una eina que ja heu desat (mateix tipus, mida, nombre de dents i substitucions) no es desa dues vegades.
- {{ui:Afegeix-la a aquesta peça}} posa a la peça l'eina desada triada. Si el seu número T ja l'usa una altra eina de la peça, rep el següent número lliure i el tauler ho indica. {{ui:Suprimeix de la biblioteca}} la treu de la llista desada (no de les peces que ja la tenen).
- {{ui:Exporta eines…}} escriu les eines de la peça com a fitxer `.json`; {{ui:Importa eines…}} afegeix les eines d'un fitxer així a la peça, amb les mateixes regles (una eina que ja hi és s'omet, i un número T ocupat es mou). El fitxer conté mides, nombre de dents, materials i les substitucions d'avanç i velocitat que heu escrit; no té identificadors. Useu-lo per moure les eines d'un taller a un altre ordinador o per donar-les a un company.

Si el navegador no pot guardar la biblioteca (l'emmagatzematge és desactivat o ple), en desar ho indica, i **Exporta eines** és la manera de conservar un fitxer. Un fitxer ha de ser una biblioteca d'eines de PartCraft d'aquesta versió o d'una anterior, amb com a màxim 500 eines de mides vàlides; qualsevol altra cosa es rebutja amb el motiu.

Les velocitats de tall i els avanços per dient que vénen amb una eina són valors de partida; vegeu [Fer trajectòries i G-code](topic:manufacture).
