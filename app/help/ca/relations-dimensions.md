---
title: Defineix completament un croquis amb relacions i cotes
summary: Afegiu relacions des del panell de la dreta i cotes amb l'eina Cota, llegiu els colors subdefinit, completament definit i sobredefinit, i corregiu un croquis sobredefinit.
keywords: relacions, restriccions, cotes, cota intel·ligent, completament definit, subdefinit, sobredefinit, graus de llibertat, coincident, horitzontal, vertical, paral·lel, perpendicular, tangent, igual, concèntric, punt mitjà, fixa, conflicte, redundant
from: e76d047a
---

Un croquis està **completament definit** quan tots els punts i totes les mides estan fixats per relacions i cotes. Un croquis completament definit només canvia quan canvieu un número, de manera que la peça es comporta de manera previsible quan l'editeu més endavant. PartCraft no us obliga a definir completament un croquis, però sempre mostra com n'esteu de prop.

## Llegeix l'estat del croquis

L'estat es mostra en tres llocs: el distintiu a dalt a l'esquerra de la vista, el missatge a dalt del panell de la dreta i el senyal de l'historial.

| Estat | Distintiu | Color de la geometria | Què vol dir |
|---|---|---|---|
| Subdefinit | "Subdefinit · 3 graus de llibertat" | Blau | Hi ha geometria que encara es pot moure. Arrossegueu la geometria blava per veure en quina direcció |
| Completament definit | "Completament definit" | Tinta (negre sobre Paper, clar sobre Model) | Tots els punts i mides estan fixats |
| Sobredefinit | "Sobredefinit" | Vermell a les relacions implicades | Algunes relacions es contradiuen entre si, o una ja es deriva de les altres |

La geometria de construcció és grisa i discontínua, sigui quin sigui el seu estat. Els elements seleccionats són taronja. Un "grau de llibertat" és una manera com alguna cosa encara es pot moure: un punt lliure en té dos (esquerra-dreta i amunt-avall), un cercle lliure en té tres (el seu centre i el seu radi).

La llegenda sota el missatge del panell de la dreta repeteix els colors.

## Afegeix una cota

1. Premeu {{key:D}} o trieu {{ui:Cota}}.
2. Feu clic al que voleu mesurar:
   - **una línia**: la seva longitud;
   - **un cercle**: el seu diàmetre; **un arc**: el seu radi;
   - **dos punts** (un punt final, un centre, un punt lliure o l'origen): la distància entre ells;
   - **un punt i una línia**: la distància del punt a la línia;
   - **dues línies paral·leles**: la distància entre elles; **dues línies en angle**: l'angle entre elles.
3. Després d'un element, la barra d'estat diu "Feu clic a un segon element, o feu clic on va la cota." Feu clic a un segon element, o feu clic en un espai buit on voleu el número.
4. S'obre una caixa de número amb el valor actual. Escriviu la mida i premeu {{key:Enter}}. {{key:Esc}} manté el valor mesurat.

**On col·loqueu el número decideix el tipus** per a una línia inclinada o per a dos punts: col·loqueu-lo a dalt o a baix per obtenir una distància horitzontal, a l'esquerra o a la dreta per obtenir una distància vertical, i en qualsevol altre lloc per a la distància real (alineada).

La caixa accepta números simples en mil·límetres o graus, com `25`, `12.5` o `1e3`. Un `⌀`, `Ø` o `R` al començament, o un `mm` o `°` al final, s'ignoren. Els angles van de 0 a 180 graus. No s'accepta aritmètica com `20+5`; per enllaçar una mida a una variable o fórmula, comenceu-la amb `=`.

Per canviar una cota més endavant, feu doble clic al seu número al croquis, o trieu **Edita** al costat seu a la llista del panell de la dreta.

:::tip
També podeu seleccionar primer la geometria (eina Selecciona) i triar un botó de cota al panell de la dreta: {{ui:Distància}}, {{ui:Distància horitzontal}}, {{ui:Distància vertical}}, {{ui:Radi}}, {{ui:Diàmetre}} o {{ui:Angle}}. Només es mostren els que encaixen amb la selecció. Aquesta és la manera de donar a un cercle un radi en lloc d'un diàmetre.
:::

## Afegeix una relació

Les relacions s'afegeixen des del panell de la dreta, no amb una eina.

1. Premeu {{key:S}} per a Selecciona.
2. Feu clic en un element, i després {{key:Shift}}+clic en un segon si la relació en necessita dos. També es pot seleccionar l'origen.
3. El panell de la dreta diu "Seleccionat: línia l3, punt p1" i mostra un botó per a cada relació que encaixa, com {{ui:∥ Paral·lel}} o {{ui:• Coincident}}.
4. Trieu el botó. El croquis es resol de seguida.

Si cap relació no encaixa, el panell diu "Cap relació no encaixa amb aquesta selecció. Seleccioneu un o dos elements (Shift+clic n'afegeix)."

La llista completa de relacions, què necessita cadascuna i què fa, és a [Relacions i cotes del croquis](topic:sketch-relations).

Les relacions es mostren al croquis com a petits símbols al costat de la geometria (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Els punts de coincidència estan ocults tret que la geometria estigui seleccionada o la relació tingui un problema. Feu clic en un símbol per seleccionar la relació.

## Exemple resolt: perfil d'una escaire en L

1. Dibuixeu un croquis sobre el **Pla frontal**. Amb l'eina Línia, comenceu a l'origen i feu clic a sis cantonades d'una L, i acabeu de nou a l'origen. La cadena acaba sola quan feu clic al primer punt.
2. Les línies dibuixades quasi horitzontals o verticals ja tenen relacions H i V, excepte l'última: una línia que acaba en un punt existent no rep cap relació automàtica. Premeu {{key:S}}, feu clic en aquesta última línia i trieu {{ui:V Vertical}} al panell de la dreta. El distintiu diu "Subdefinit · 4 graus de llibertat".
3. Premeu {{key:D}}. Feu clic a la línia inferior, feu clic per sota, escriviu `80` i {{key:Enter}}.
4. Feu clic a la línia de l'esquerra, feu clic a l'esquerra, escriviu `60` i {{key:Enter}}.
5. Poseu cota a la línia curta superior amb `20` i a la línia vertical interior amb `45` de la mateixa manera.
6. El distintiu ara diu **Completament definit** i tota la L passa a tinta.

## Corregeix un croquis sobredefinit

Quan una relació o cota nova contradiu les altres, PartCraft no mou res. La geometria es queda exactament com era, les relacions implicades es tornen vermelles, i la barra d'estat les nomena:

- "Sobredefinit: Horitzontal, Distància 40 no es poden complir totes. Desfeu-ho, o suprimiu-ne una." Les relacions entren en conflicte.
- "Sobredefinit: Paral·lel ja es dedueix. Suprimiu-la." La relació no aporta res: les altres ja la fan necessària. (Per exemple, els costats d'un rectangle ja són paral·lels.)

Per corregir-ho:

1. Premeu {{key:Mod+Z}} per desfer l'últim canvi, o
2. Busqueu l'element vermell a la llista **Relacions i cotes** del panell de la dreta (un grup que el conté s'obre i és vermell) i trieu **Suprimeix** al costat. També podeu fer clic al seu símbol o número al croquis i premer {{key:Delete}}.

:::note
En aquesta versió no hi ha cotes "dirigides" (de referència). Una cota que només informaria d'una mida que ja fixen les altres relacions es tracta com a sobredefinida. Llegiu les mides al panell: seleccioneu una línia i mireu els botons de Cota, o comproveu les dades de la peça després d'extrudir.
:::

Un croquis sobredefinit amb un conflicte real fa que falli la funció que l'usa ("Sobredefinit: 1 relació no es pot complir."), i l'historial la marca amb **⚠ error**. Un croquis que només és redundant es construeix igualment, amb un ⚠ d'avís.

## Arrossega per trobar què és lliure

Amb Selecciona, arrossegueu qualsevol punt o línia blava. El solucionador el mou el mínim possible mantenint totes les relacions. Si un arrossegament trencaria una relació, la geometria torna enrere. És la manera més ràpida de veure quina cota encara falta.

## La llista de relacions

Sense res seleccionat, el panell de la dreta llista **Relacions i cotes**. Cada fila té:

- **Edita** (només cotes): obre la caixa de número;
- **Selecciona**: la selecciona al croquis;
- **Suprimeix**: l'elimina.

Les relacions d'un mateix tipus que apareixen més d'un cop comparteixen una fila, com "Coincident × 5" per a un rectangle lligat a l'origen. Feu clic a la fila per obrir-la: cada relació es llista pel que lliga ("punt p2, punt p4") amb el seu propi **Selecciona** i **Suprimeix**. La fila en si té:

- **Selecciona**: selecciona totes al croquis;
- **Suprimeix-ho tot**: les elimina totes d'un cop ({{key:Mod+Z}} les torna).

Un grup que conté una relació sobredefinida s'obre sol, amb el seu nom en vermell. Les cotes sempre es llisten una per fila, amb els seus valors.

Amb geometria seleccionada, la llista mostra només les **Relacions de la selecció**.
