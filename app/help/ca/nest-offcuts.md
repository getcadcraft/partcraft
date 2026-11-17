---
title: Conserva i reutilitza els sobrants
summary: Després d'una imbricació, el que queda de cada placa es converteix en un retall numerat a una llista d'estoc; la imbricació següent usa primer els retalls i després les plaques senceres.
keywords: imbricació, sobrant, retall, estoc, resta, placa, full, reutilització, material, gruix, CSV
from: 7a68d4b8
---

Quan imbriqueu peces sobre plaques, el sobrant aprofitable de cada placa (no les estelles) es pot conservar com a **retall**: un contorn numerat (R-0001, R-0002 …) amb el material, el gruix, la mida i la feina d'on ve. La llista es desa amb el fitxer i es pot desar com a CSV.

## Reutilització

Introduïu el **material** i el **gruix**, deixeu activat {{ui:Usa primer els retalls}} i imbriqueu. Es proven primer els retalls del mateix material i gruix, del més petit al més gran; hi van les peces que hi caben, dins del contorn propi del retall i sense tocar-ne la vora; el que no hi cap va a plaques noves. L'informe de la feina indica quins retalls s'han usat i què n'ha quedat.

Amb {{ui:Desa els sobrants com a retalls}} activat, {{ui:Afegeix aquesta feina a l'estoc}} n'escriu el resultat a la llista d'estoc: un retall que s'ha usat queda marcat com a **Usat** (amb la feina) i no es torna a oferir; el que n'ha quedat es converteix en un retall nou que recorda el retall del qual ve.

## Què es considera un retall

El sobrant es mesura amb l'espaiat que heu definit (cap peça no és més a prop d'un tall que això). Les tires més estretes que una vintena part de la placa i les peces més petites que el 2 % d'ella són rebuig; canvieu els dos límits si el vostre taller guarda peces més petites. Els forats dins de les peces són de les peces i no es conserven. Un rotlle no té retalls.

## Al dibuix

El DXF d'una imbricació dibuixa el contorn de cada retall a la capa REMNANTS amb el seu número al mig, perquè les peces es puguin marcar quan es tallin.

Encara no implementat: la direcció del fil d'un retall, un full de codi de barres o d'etiquetes, retalls de rotlles, estoc compartit entre projectes.
