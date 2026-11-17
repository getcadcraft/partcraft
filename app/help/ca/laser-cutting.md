---
title: Envia un dibuix a un làser
summary: Tria què fa cada capa (tallar, ratllar, gravar, omplir, imatge), previsualitza els moviments del capçal, desa el G-code en mode làser de GRBL, o envia'l des del navegador després d'emmarcar el treball.
keywords: làser, talladora làser, gravadora làser, GRBL, G-code, gravar, omplir, tramat, gravat d'imatge, ratllar, tallar, Web Serial, Linux, emmarca el treball, potència, velocitat, passades
from: 327b3c46
---

El tauler {{ui:Làser}} converteix les capes d'un dibuix en un programa per a un làser que executa GRBL (la majoria de controladors de díode i de CO2 d'afició i de petits tallers). A PartCraft, trieu {{ui:Exporta}} › {{ui:Programa làser…}} i després {{ui:Afegeix contorns d'un DXF…}}: els contorns i els forats entren a la capa CUT. Els patrons plans de peces de xapa (amb les línies de plegat a la capa BEND) necessiten el nucli exacte, que aquesta versió no té. La configuració es desa al fitxer de la peça o del conjunt.

:::warning
Proveu cada ajust primer amb un retall, porteu protecció ocular adequada al vostre làser, mantingueu la tapa tancada quan n'hi hagi una, i no deixeu mai un làser en marxa sense vigilar. Els valors inicials de cada capa són provisionals, no recomanacions per a cap material.
:::

## Tria què fa cada capa

Cada capa del dibuix és una fila. {{ui:Fa}} la fixa a **Talla**, **Ratlla**, **Grava línies**, **Omple formes**, **Grava imatge** o **No s'envia**, amb una {{ui:Potència %}}, una {{ui:Velocitat mm/min}} i un nombre de {{ui:Passades}}.

- **Omple** crema l'interior de les formes tancades amb línies, separades {{ui:Espaiat de línies}}, a un {{ui:Angle}}, en totes dues direccions o en una, amb un recorregut addicional perquè el capçal tingui velocitat quan s'encengui el làser; el creuat afegeix una segona passada a 90°. Una forma amb un forat queda oberta al forat.
- **Grava imatge** converteix una imatge en punts (Floyd–Steinberg, Atkinson, ordenat, o simplement blanc i negre amb un llindar) o, amb *Nivells de gris*, en potència variable.
- Ordre: primer les imatges i els omplerts, després el gravat de línies, després les ratlles i finalment els talls, perquè una peça ja tallada no es mogui mentre es grava. Dins d'una capa, els recorreguts van **primer per dins** (un forat abans de la placa on és), i el següent és el més proper.

## Previsualitza i després desa

La previsualització dibuixa què fa el capçal: les línies que cremen en color, els moviments ràpids en gris, i un quadre verd al voltant de tot el que crema. Sota hi ha la mida, la longitud de cremada i una estimació del temps (sense acceleració; una màquina real triga més). {{ui:Desa el codi G…}} escriu G-code en mode làser de GRBL: `$32=1`, `M4` (o `M3`) amb valors S, moviments `G0` i `G1`, `M5` al final. X0 Y0 és la cantonada inferior esquerra del treball, tret que trieu l'origen del dibuix: fixeu-hi el zero de treball de la vostra màquina. El G-code segueix el mode làser documentat de GRBL; encara no s'ha provat en un làser real.

## Envia des del navegador

Al Chrome i a l'Edge, {{ui:Connecta…}} demana que trieu el port USB del làser. No es connecta ni s'envia res fins que premeu un botó. Premeu primer {{ui:Emmarca el treball}}: el capçal traça el quadre del treball amb el làser **apagat** (o amb la potència baixa que hàgiu fixat per a un punter) perquè pugueu veure on cremarà. Només llavors s'activa {{ui:Envia el treball}}, i es desactiva de nou si canvieu alguna cosa. {{ui:Pausa}} atura el capçal; {{ui:Atura}} també l'atura, reinicia el controlador (el làser s'apaga) i envia `M5`. Quan falta Web Serial (Firefox, Safari, i CadCraft Studio, la vista web del qual encara no en té), deseu el G-code i envieu-lo amb el programa propi del vostre làser.

## Encara no implementat

Formats d'altres controladors (Ruida, làsers Marlin, fitxers del fabricant), subjeccions i entrades de tall, compensació del kerf, biblioteques de materials, eixos rotatiu i Z, alineació amb càmera.
