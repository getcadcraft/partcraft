---
title: El nucli de malla
summary: Aquesta versió de PartCraft construeix totes les peces amb un nucli de malla que s'executa al navegador. Què vol dir per a les cares arrodonides, els volums i els fitxers, com es reconeix que funciona i quines operacions esperen un nucli exacte.
keywords: nucli, malla, manifold, exacte, b-rep, facetat, corbes, opencascade, occt, arrodoniment necessita exacte, no implementat, sense connexió, webassembly
from: 68d32d16
---

Un nucli geomètric és el motor que converteix l'historial en un sòlid. Aquesta versió de PartCraft en té un: el **nucli de malla** (manifold-3d). S'executa al vostre ordinador com un petit programa WebAssembly i està llest un moment després d'obrir l'aplicació. No s'envia res de la vostra peça a cap lloc.

| | Nucli de malla |
|---|---|
| Formes arrodonides | Facetes planes. **Corbes** al tauler de la peça en fixa el detall |
| Volums i àrees | Del sòlid facetat, una mica baixos en peces arrodonides |
| Croquis, extrudeix, retalla, revolució, forats, patrons, simetria, plans de referència | Sí |
| Arrodoniment i xamfrà | Sobre arestes rectes entre cares planes; els arrodoniments que es toquen queden a inglet |
| Buida i desmotllament | Buida obre les cares planes (gruix de paret exacte); desmotllament inclina les cares planes |
| Exportacions | STL, 3MF, STEP (facetat), PDF del dibuix i DXF |
| Vistes de dibuix | Dibuixades a partir de les facetes, incloses les seccions |
| Cares i arestes | Amb nom i conegudes pel tipus (plana, cilindre, con, esfera, tor; recta, cercle), preses dels croquis: els espais de treball Simulació, Generatiu i Fabricació, Mesura, la selecció i la taula de forats les fan servir |

El xip de la part dreta de la barra d'estat diu **Nucli de malla** mentre construeix la peça.

## Què espera un nucli exacte

Un nucli exacte (B-rep) manté cercles, cilindres i cons veritables, i arrodoniments suaus en qualsevol aresta. Els escombrats, els lofts, les superfícies, la xapa, les nervadures, els diversos cossos, la importació STEP i l'exportació STEP exacta es construeixen sobre un nucli així. Les versions de laboratori anteriors de PartCraft feien servir OpenCascade per a això. La seva llicència (LGPL) no encaixa amb aquesta versió, on totes les aplicacions són Apache-2.0 i només usen biblioteques de llicència permissiva, de manera que no s'hi inclou. Això no té data.

Fins llavors, aquestes operacions diuen **Encara no implementat** quan les trieu: la barra d'estat n'indica el motiu, i els consells dels seus botons acaben amb "encara no implementat (necessita un nucli exacte)". [Què encara no està implementat](topic:not-built-yet) les enumera una a una, amb el que cal fer en lloc seu.

Una peça feta amb elles en una versió anterior encara s'obre. Aquestes operacions es mantenen a l'historial marcades com a no implementades (passeu el punter per sobre per veure'n el motiu), la resta de la peça es construeix, i desar-la en manté els canvis.

## Arrodoniments i Corbes

El nucli de malla dibuixa un cercle com un polígon. **Corbes** al tauler de la peça fixa quants costats té un cercle complet: més costats es veuen més suaus i s'acosten més al valor real, però triguen més a construir-se. Els volums, les àrees i les distàncies de {{ui:Mesura}} són del sòlid facetat: en un forat o en un cos sortint són una mica més petits que els de la forma arrodonida.

## En línia i sense connexió

El nucli de malla forma part de la descàrrega pròpia de l'aplicació. Per treballar sense connexió, deseu PartCraft per fer-lo servir sense connexió mentre sou en línia: trieu {{ui:Desa per fer-lo servir sense connexió}} a la barra de l'aplicació i espereu fins que digui **Preparat sense connexió**. Detalls: [Treballar sense connexió](common:offline).
