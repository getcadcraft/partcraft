---
title: Retrocedeix i avança pel historial
summary: Mou la barra de retrocés amunt i avall una operació cada vegada per veure com es construeix la peça, insereix operacions al mig i torna al final.
keywords: retrocés, retrocedeix, avança, barra de retrocés, navega per l'historial, insereix operació, congela, historial
from: 9a366cae
---

La barra de retrocés decideix quant de l'historial està construït. Les operacions per sota de la barra estan en gris i no construïdes; les operacions noves s'afegeixen a la barra.

## Pas a pas, una operació cada vegada

Amb la peça a la pantalla (sense cap croquis o dibuix obert):

| Acció | Resultat |
|---|---|
| {{key:[}} o el botó de fletxa amunt al costat del nom de la peça | La barra puja una operació |
| {{key:]}} o el botó de fletxa avall | La barra baixa una operació |
| {{key:End}} o el botó de portar la barra al final | Es torna a construir cada operació |

La barra d'estat indica on és la barra, per exemple "Barra de retrocés després de Sketch1: 1 de 2 operacions construïdes". Els botons estan desactivats quan la barra no es pot moure més en aquesta direcció.

També pots trieu {{ui:Retrocedeix fins aquí}} sobre qualsevol operació, o fer clic a **Barra de retrocés · avança** a l'historial.

## Insereix una operació al mig

1. Fes retrocedir la barra fins que quedi on ha d'anar la nova operació.
2. Afegeix l'operació: entra a la barra.
3. Prem {{key:End}} per construir la resta de l'historial sobre ella.

Cada moviment de la barra és un pas que pots desfer amb {{key:Mod+Z}}. La posició de la barra es desa al fitxer, de manera que una peça es pot enviar retrocedida. L'eina de línia d'ordres també la mou: `partcraft rollback part.json` i `partcraft forward part.json --end`.
