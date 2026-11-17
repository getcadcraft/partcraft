---
title: Mantén un model .3dm en viu
summary: Canvia un model al programa que l'ha fet i observa com el cos de PartCraft el segueix, des de Rhino 8 o una definició de Grasshopper, amb les operacions reconstruïdes sobre la nova forma.
keywords: rhino, grasshopper, enllaç en viu, connexió en viu, 3dm, NURBS, paramètric, enllaç, sincronització, script, envia, cos importat
from: cf4dc9b2
---

Continueu donant forma al model on el modeleu, i mecanitzeu-lo, comproveu-lo i documenteu-lo aquí. Cada canvi a l'altre programa substitueix un cos importat a PartCraft, i les operacions posteriors es reconstrueixen sobre la nova forma.

:::note
L'enllaç necessita **CadCraft Studio** al mateix ordinador. Una pestanya del navegador no pot establir la connexió. Res no passa per internet: l'script es comunica amb Studio a l'adreça del propi ordinador, amb un token.
:::

:::warning
Aquest enllaç s'ha provat amb l'escriptor de fitxers de l'script i amb un substitut de l'altre programa, encara no dins de Rhino ni de Grasshopper. Si alguna cosa falla allà, digueu-nos què ha indicat.
:::

## Configuració

1. A Studio, obriu PartCraft. A {{ui:Configuració}} › {{ui:PartCraft}} › {{ui:Assistents}}, marqueu **Permet que els assistents d'IA i els scripts utilitzin PartCraft**, i després **Edita**.
2. A Studio, trieu {{ui:Connecta un assistent}}. Mostra l'adreça i el token que enganxareu a sota.
3. Baixeu l'script: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Des de Rhino

1. Executeu `cadcraft_link.py` a l'editor de scripts de Rhino (Python 3 a Rhino 8).
2. La primera vegada, enganxeu l'adreça i el token. Es guarden a `.cadcraft-link.json` a la vostra carpeta d'inici, mai al model. Studio crea un token nou cada vegada que s'inicia, així que l'script ho torna a demanar llavors.

Torneu a executar l'script per aturar-lo.

## Des de Grasshopper

Executeu primer l'script una vegada a Rhino, perquè es desin l'adreça i el token.

1. Afegiu un component Script (Python 3) i enganxeu-hi tot el `cadcraft_link.py`.
2. Doneu-li aquestes entrades: `G` (la geometria, amb accés de llista), `N` (un nom, opcional), `On` (un interruptor booleà) i `Target` (opcional: `model` o `part`, si hi ha obertes totes dues aplicacions).
3. Poseu `On` a `true`.

Cada càlcul envia `G` i substitueix el que el component havia enviat la vegada anterior.

## Com funciona aquí

- **Un sol cos.** Tot el que és visible al model esdevé una sola operació importada, com quan [obriu un fitxer .3dm](topic:open-3dm-files).
- **Ha de quedar tancat.** PartCraft omple els forats petits i les obertures planes, i a l'altre programa se li indica quants n'ha omplert. Si el model encara no queda tancat, PartCraft manté el cos que tenia i la barra d'estat ho indica. El següent canvi que quedi tancat l'actualitza.
- **Acabeu el que feu.** En un croquis o un dibuix, les actualitzacions es rebutgen i es tornen a provar; arriben quan torneu al model.
- **Desfés.** Les actualitzacions separades per menys de dos segons comparteixen un sol pas de desfer.
- **Desa.** El fitxer de la peça conserva l'enllaç. Torneu a executar l'script després de reobrir-lo, i la mateixa operació s'actualitza.

**Només en un sentit.** Els canvis que es fan aquí no tornen a l'altre programa.

## Si alguna cosa falla

- **"Cap finestra de ModelCraft o PartCraft ho permet":** feu el pas 1 de la configuració.
- **"Studio ha rebutjat el token":** Studio s'ha reiniciat. Copieu el token nou i torneu a executar l'script. Per a Grasshopper, executeu-lo primer a Rhino.
- **"No es pot connectar amb CadCraft Studio":** Studio no s'està executant, o l'adreça ha canviat.
