---
title: El nucli de malla
summary: Aquesta versió de PartCraft construeix cada peça amb un nucli de malla que s'executa al navegador. Què significa per a les formes rodones, els volums i els fitxers, com saber que funciona i quines operacions esperen un nucli exacte.
keywords: nucli, malla, manifold, exacte, b-rep, facetat, corbes, opencascade, occt, arrodoniment necessita exacte, no implementat, fora de línia, webassembly
from: f931645c
---

Un nucli geomètric és el motor que converteix el vostre historial en un sòlid. Aquesta versió de PartCraft en té un: el **nucli de malla** (manifold-3d). S'executa al vostre ordinador com un petit programa WebAssembly i està llest un moment després d'obrir l'aplicació. No s'envia res de la vostra peça enlloc.

| | Nucli de malla |
|---|---|
| Formes rodones | Cares planes. Les **corbes** del tauler de la peça determinen com de fina és la malla |
| Volums i àrees | Del sòlid facetat, una mica baixos en peces rodones |
| Croquis, extrusió, retall, revolució, forats, patrons, simetria, plans de referència | Sí |
| Arrodoniment i xamfrà | Sobre arestes rectes entre cares planes; els arrodoniments que es troben es tallen a inglet |
| Buida i desmotllament | La buida obre cares planes (gruix de paret exacte); el desmotllament inclina cares planes |
| Exportacions | STL, 3MF, STEP (exacte: les cares rodones s'escriuen amb la seva superfície veritable; o facetat), PDF de plànol i DXF |
| Vistes de plànol | Dibuixades a partir de les facetes, incloses les vistes de secció |
| Cares i arestes | Anomenades i classificades pel tipus (plana, cilindre, con, esfera, tor; recta, cercle), preses dels croquis: els espais de treball Simulació, Generatiu i Fabricació, Mesura, la selecció i la taula de forats les fan servir |

La targeta a l'extrem dret de la barra d'estat diu **Nucli de malla** mentre construeix la peça.

## Què espera un nucli exacte

Un nucli exacte (B-rep) manté cercles, cilindres i cons veritables, i arrodoniments suaus en qualsevol aresta. Les escombrades, els lofts, les superfícies, la xapa, els nervis, diversos cossos i la importació de STEP amb cares corbes mantingudes exactes es construeixen sobre un. (L'exportació STEP exacta no depèn d'això: el nucli de malla coneix la superfície veritable de cada cara des del croquis, i l'exportació l'escriu.) Les versions de laboratori anteriors de PartCraft feien servir OpenCascade per a això. La seva llicència (LGPL) no encaixa amb aquesta versió, on totes les aplicacions són Apache-2.0 i només fan servir biblioteques amb llicència permissiva, de manera que no s'inclou. Aquí no hi ha cap data prevista.

Fins llavors, aquestes operacions diuen **Encara no implementat** quan les trieu: la barra d'estat n'indica el motiu, i els consells dels seus botons acaben amb "encara no implementat (necessita un nucli exacte)". [Què encara no està implementat](topic:not-built-yet) les enumera cadascuna amb el que cal fer en lloc seu.

Una peça feta amb aquestes operacions en una versió anterior encara s'obre. Aquestes operacions es mantenen a l'historial marcades com a no implementades (passeu-hi el punter per veure'n el motiu), la resta de la peça es construeix, i desar-la manté les operacions sense canvis.

## Cares rodones i corbes

El nucli de malla dibuixa un cercle com un polígon. **Corbes** al tauler de la peça fixa quants costats té un cercle complet: més costats es veuen més suaus i s'acosten més al valor veritable, però triguen més a construir-se. Els volums, les àrees i les distàncies de {{ui:Mesura}} són del sòlid facetat: per a un forat o un cos sortint són una mica més petits que els de la forma rodona.

## En línia i fora de línia

El nucli de malla forma part de la descàrrega de la pròpia aplicació. Per treballar sense connexió, deseu PartCraft per fer-lo servir sense connexió mentre esteu en línia: trieu {{ui:Desa per fer-lo servir sense connexió}} a la barra de l'aplicació i espereu fins que digui **Preparat sense connexió**. Detalls: [Treballar sense connexió](common:offline).
