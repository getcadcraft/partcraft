---
title: Configuracions i taules de disseny
summary: Mantingueu diverses mides i versions d'una peça com a configuracions amb nom desades al fitxer de la peça, amb operacions activades o desactivades en cadascuna, canvieu-hi amb un clic, porteu-les o traieu-les com a taula de disseny CSV, o construïu-les totes des de la línia d'ordres.
keywords: taula de disseny, configuracions, configuració, mides, família de peces, csv, full de càlcul, variants, dirigit per taula, desactiva, desactivada, desactivar una operació, opcions, amb o sense, configurador
from: 17249afb
---

Una **configuració** és una mida de la peça: un conjunt amb nom de valors per als seus paràmetres. La peça guarda les seves configuracions al seu propi fitxer, de manera que viatgen amb ella. Una **taula de disseny** és la mateixa cosa com a fitxer CSV, amb una fila per configuració.

Les configuracions estableixen **paràmetres**, així que afegiu-los primer (vegeu [Controla una peça amb paràmetres](topic:parameters)). Una configuració desa els paràmetres que són nombres simples; els paràmetres calculats a partir d'altres (com `area = w * d`) se'n van darrere automàticament.

## Desar una configuració

1. A la pestanya {{ui:Paràmetres}}, establiu els paràmetres per a una mida de la peça.
2. Sota **Configuracions**, escriviu un nom (per exemple `Gran`) i premeu {{ui:Desa els valors actuals}} o {{key:Enter}}.

La nova configuració queda marcada com a **activa**. Si canvieu un paràmetre després, diu **activa, canviada des de**, perquè sapigueu que la peça ja no coincideix amb ella.

## Canviar, actualitzar, reanomenar, suprimir

- {{ui:Aplica}} posa els paràmetres als valors d'aquella configuració i reconstrueix la peça.
- {{ui:Actualitza}} desa els valors actuals en aquella configuració.
- Per reanomenar-la, escriviu el nom nou a la seva caixa i premeu {{key:Enter}}.
- {{ui:Suprimeix}} elimina la configuració. Els paràmetres conserven els seus valors.

Cadascuna d'aquestes accions és un sol pas: {{key:Mod+Z}} hi torna. Si reanomeneu un paràmetre, totes les configuracions segueixen el nom nou; si en suprimiu una, en desapareix.

## Activar i desactivar operacions en una configuració

Una configuració també guarda quines operacions estan desactivades, de manera que una mateixa peça pot tenir versions **amb** i **sense** alguna cosa: forats de muntatge, un xamfrà, un cos sobresortint.

1. Desactiveu l'operació: feu-hi clic a l'historial i després {{ui:Desactiva}} a {{ui:Propietats}}.
2. Deseu la configuració com sempre, per exemple `Sense forats`. La seva fila enumera el que desactiva.
3. Torneu a activar l'operació ({{ui:Reactiva}}) i deseu una altra configuració, per exemple `Amb forats`.

Un cop qualsevol configuració desactiva una operació, aplicar una configuració desactiva les seves operacions i **activa totes les altres**, juntament amb els seus valors de paràmetres, en un sol pas. Una configuració desada abans que es desactivés cap operació es compta com a "tot activat". {{ui:Actualitza}} desa les operacions tal com estan ara, amb els valors.

Una peça les configuracions de la qual desactiven operacions es desa com a versió de fitxer més nova: una versió anterior de PartCraft indica que el fitxer és d'una versió més nova, en lloc d'obrir-lo sense elles.

:::note
La taula de disseny en CSV només porta valors de paràmetres. Importar una taula sobre una configuració canvia els seus valors i manté les operacions que desactiva; el `--table` de la línia d'ordres només construeix els valors.
:::

El fitxer de la peça es desa amb les configuracions i amb la que estava activa. La peça s'obre amb els valors amb què es va desar.

## Portar una taula de disseny dins o fora

Una taula de disseny és un fitxer CSV amb una columna per a cada paràmetre i una fila per a cada configuració:

```
name,width,thick,bolt
petita,100,6,6.6
mitjana,140,8,8.5
gran,200,12,13
```

La primera columna es pot dir `name`, `config` o `configuration`; cada altra columna ha de ser el nom d'un paràmetre de la peça. Les cel·les són nombres, amb unitats si voleu (`8in`). Una cel·la buida deixa aquest paràmetre fora de la fila.

- {{ui:Importa CSV}} afegeix cada fila com a configuració. Una fila amb el nom d'una configuració existent la reemplaça. Importar és un sol pas.
- {{ui:Exporta CSV}} escriu les configuracions. Si encara no n'hi ha cap, escriu una fila amb els valors actuals, com a punt de partida per a un full de càlcul.

Un nom de configuració que un full de càlcul interpretaria com una fórmula (que comença per `=`, `+`, `-` o `@`) s'escriu amb una `'` al davant.

## Totes les mides alhora

{{ui:Paquet de variants…}} sota **Configuracions** construeix totes les configuracions, o unes quantes triades, com a STEP, IFC, DWG i una previsualització en un zip, amb una taula dels seus paràmetres: vegeu [Fes un paquet de variants amb les vostres configuracions](topic:variant-pack).

L'eina de línia d'ordres construeix un fitxer per cada fila d'una taula de disseny CSV:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Exporteu primer les configuracions com a CSV, i després passeu aquest fitxer amb `--table`. Vegeu [Scripts i la línia d'ordres](topic:scripts-and-cli). Una peça desada com a script guarda les seves configuracions en una línia `configs json …`.
