---
title: Desa, torna a obrir i continua treballant
summary: Deseu peces i conjunts al vostre ordinador, doneu-los nom, torneu-los a obrir amb un botó, una tecla o arrossegant-los, guardeu versions i eviteu perdre feina en una pestanya del navegador.
keywords: desa, obre, torna a obrir, carrega, baixa, versions, còpia de seguretat, reanomena, nom de fitxer, feina perduda, surt del lloc, partcraft.json, partcraft-asm.json, peça nova
from: c18a5abc
---

PartCraft no guarda res entre visites. La vostra peça viu a la pestanya del navegador fins que la deseu com a fitxer, i torna quan obriu aquest fitxer.

## Desa una peça

1. Doneu-li nom: feu clic a un espai buit de la vista perquè no hi hagi res seleccionat, escriviu el **Nom** al panell de la dreta i premeu {{key:Enter}}. El títol de l'historial canvia per coincidir.
2. Premeu {{key:Mod+S}} o trieu {{ui:Desa}}.
3. El navegador baixa `<nom>.partcraft.json`. La barra d'estat diu "Desat Bracket.partcraft.json (l'historial complet; torneu-lo a obrir aquí per continuar editant)."

Si hi ha un croquis obert, en desar-lo es tanca primer.

El fitxer conté cada croquis, relació, cota i operació, a més de les operacions suprimides, la posició de reversió, la configuració de la fulla de dibuix i les notes GD&T, i el text complet de qualsevol sòlid STEP importat. La llista per desfer no es desa.

## Desa un conjunt

En un conjunt, el mateix {{ui:Desa}} o {{key:Mod+S}} baixa `<nom del conjunt>.partcraft-asm.json`. Totes les peces s'hi desen: no cal tenir els fitxers de peça separats per tornar-lo a obrir.

Mentre editeu una peça des de dins d'un conjunt, {{key:Mod+S}} desa només aquella peça com a `.partcraft.json`. Trieu primer {{ui:Enrere}} i després deseu, per desar tot el conjunt.

## Torna a obrir

Qualsevol d'aquests:

- trieu {{ui:Obre}} o premeu {{key:Mod+O}}, i després seleccioneu el fitxer;
- arrossegueu el fitxer des de {{pick:mac=Finder|windows=Explorador de fitxers|linux=el vostre gestor de fitxers}} fins a la vista 3D (apareix "Deixeu anar una peça de PartCraft per obrir-la").

PartCraft distingeix les peces dels conjunts pel que hi ha dins, així que s'obren de la mateixa manera. Un fitxer `.step` o `.stp` s'obre com a sòlid importat: vegeu [Obre un fitxer STEP i construeix-hi a sobre](topic:import-step). La barra d'estat ho confirma: "Obert Bracket.partcraft.json: 7 operacions." o "Obert Hinge.partcraft-asm.json: 3 peces, 2 unions."

Si la peça en pantalla té canvis no desats, PartCraft primer pregunta: {{ui:Cancel·la}}, {{ui:Descarta els canvis}} o {{ui:Desa primer}}.

:::warning
Tanqueu un conjunt ({{ui:Tanca}}) abans d'obrir un fitxer de peça. Si obriu una peça mentre hi ha un conjunt en pantalla, la peça es carrega darrere del conjunt i només la veureu en tancar-lo. Obrir un fitxer de conjunt també substitueix, sense avisar, un conjunt no desat, així que deseu-lo primer.
:::

## Comença de nou

{{ui:Nou}} inicia una "Part1" buida. Pregunta primer si hi ha canvis no desats, i tanca un conjunt obert (preguntant si no està desat).

## Conserva versions

Cada desament és una baixada nova, així que podeu guardar versions simplement conservant els fitxers:

- Poseu una versió o una data al nom abans de desar: "Bracket rev B".
- El navegador pot afegir " (1)" o " (2)" quan ja hi ha a la carpeta de baixades un fitxer amb el mateix nom. La més nova és la del número més alt, o mireu la data a {{pick:mac=Finder|windows=Explorador de fitxers|linux=el vostre gestor de fitxers}}.
- Traieu els fitxers acabats de la carpeta de baixades i poseu-los a la carpeta del projecte.

Vegeu [On van els fitxers](common:your-files) per saber on van les baixades a cada sistema.

## No perdeu feina

- Deseu abans de tancar la pestanya, recarregar o deixar que l'ordinador es posi en repòs durant molta estona. El navegador pregunta "Surt del lloc?" si intenteu tancar amb canvis no desats, però una fallada o un portàtil tancat no avisen.
- Les finestres privades o d'incògnit funcionen, però res més és diferent: el fitxer continua essent l'única còpia.
- Encara no estan disponibles el desament al núvol ni l'historial de versions.
