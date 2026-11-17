---
title: Crear un paquet de variants a partir de les configuracions
summary: Construeix de cop totes les configuracions d'una peça, o unes quantes triades, com a STEP, IFC, DWG i una previsualització de cadascuna, amb una taula dels seus paràmetres i la peça com un únic element de biblioteca amb les seves variants.
keywords: paquet de variants, variants, configuracions, família de peces, exportació per lots, cada mida, step, ifc, dwg, previsualització, taula, csv, json, biblioteca, configurador, configurador de producte, catàleg, json d'element
from: 9a6db99f
---

## Què fareu

Lliureu **totes les mides d'una peça de cop**: un fitxer STEP, IFC i DWG i una imatge per a cada configuració, una taula que indica què és cadascuna, i un element de biblioteca que les posa totes en una pàgina.

Necessiteu primer una peça amb **configuracions** (vegeu [Configuracions i taules de disseny](topic:design-tables)). Una configuració que desactiva una operació, com una placa amb i sense forats, esdevé una variant pròpia.

## Passos

1. Obriu la peça. A la pestanya {{ui:Paràmetres}}, cerqueu **Configuracions**.
2. Feu clic a {{ui:Paquet de variants…}}.
3. Marqueu les configuracions a construir (totes estan marcades) i els fitxers a escriure: STEP, IFC, DWG, una previsualització i l'element de biblioteca.
4. Feu clic a {{ui:Fes el paquet}}. La línia d'estat compta les variants a mesura que es construeixen; la peça no canvia.
5. Es baixa un zip: `<part> variants.zip`.

## Què hi ha al zip

| Fitxer | Què és |
|---|---|
| `<name>.step` | La configuració com a sòlid STEP. |
| `<name>.ifc` | IFC4, un element amb el cos construït i els paràmetres de la peça com a propietats; el valor és el propi d'aquella configuració. |
| `<name>.dwg` | Les vistes davantera, superior, dreta i isomètrica com a full de dibuix a mida real. |
| `<name>.svg` | Una imatge isomètrica de línies. |
| `variants.csv`, `variants.json` | La taula de paràmetres: l'identificador, el nom i el valor de cada paràmetre de cada variant, les operacions que desactiva, els seus fitxers, el seu volum i la seva mida. |
| `<part>.item.json` | La peça com un únic element de biblioteca amb les seves variants (vegeu a sota). |
| `README.txt` | Què s'ha fet, les notes de sota i tot el que no s'ha pogut construir. |

Els fitxers porten el nom de la configuració. Una configuració que no es pot construir (una operació que no es pot fer amb aquests valors) queda fora dels fitxers i de la taula, es llista al README i en un missatge després de desar el zip; les altres es continuen escrivint.

## Cal saber-ho

- **STEP** és exacte quan el nucli exacte està activat a la vostra versió. Sense ell, el STEP és facetat (triangles plans), i el README ho indica.
- **DWG** és el full de dibuix, no un model 3D. Les seves línies surten de la malla, de manera que una aresta corba són moltes línies curtes.
- **L'element de biblioteca** porta un cos i una petjada per a cada variant, en els eixos de la biblioteca: Z cap amunt, el davant cap a −Y, i el punt d'inserció al mig del darrere, a baix. El pla és el rectangle envolupant de cada variant. Un element té un límit de 8 MB, de manera que una variant molt pesant esdevé una caixa de la seva mida, i el README indica quantes n'hi ha.
- La configuració activa de la peça és la variant per defecte de l'element.
- Els ports (punts de connexió per a tubs i conductes) no es defineixen des de PartCraft.

## Poseu les variants en una pàgina de la biblioteca

Pugeu `<part>.item.json` a **Biblioteca › Puja** al lloc. Trieu-ne la categoria, la llicència i la vostra línia de crèdit, i esdevé un element de la biblioteca amb les seves variants. A BimCraft, en col·locar-lo es pregunta quina variant, i Intercanvia n'ofereix les altres. La pàgina on els visitants trien opcions, veuen el 3D i baixen una variant és, de moment, una **previsualització només per a personal**: encara no és oberta al públic.

## Des de la línia d'ordres

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` indica les configuracions, `--formats` qualsevol de `step`, `ifc`, `dwg`, `preview`, i `--no-item` deixa l'element de biblioteca fora. Escriu una carpeta, un zip o els dos, i surt amb codi 1 quan una variant no s'ha pogut construir. Vegeu [Scripts i línia d'ordres](topic:scripts-and-cli).
