---
title: Fitxers: obre, desa i exporta
summary: Els fitxers de peça i de conjunt que PartCraft obre i desa, cada format d'exportació i què conserva, on van els fitxers i què canvia sense connexió o entre navegadors.
keywords: obre, desa, exporta, baixa, fitxer, partcraft.json, fitxer de conjunt, stl, 3mf, step, dxf, pdf, on són els meus fitxers, sense connexió, desa com a
from: c15c2c48
---

PartCraft treballa amb fitxers del vostre ordinador. Mai no puja una peça, i no hi ha compte ni emmagatzematge al núvol. El desament al núvol encara no està disponible.

## Què obre PartCraft

| Fitxer | Extensió | Com |
|---|---|---|
| Una peça de PartCraft | `.partcraft.json` | {{ui:Obre}}, {{key:Mod+O}}, o deixeu-la anar sobre la vista 3D |
| Un conjunt de PartCraft | `.partcraft-asm.json` | Igual: PartCraft reconeix quin tipus és |
| Un sòlid STEP | `.step`, `.stp` | Un cos sòlid llegit com a triangles: [Obre un fitxer STEP i construeix-hi a sobre](topic:import-step) |

Els fitxers de malla STL, OBJ i 3MF també s'obren com a cossos sòlids ([Obre un STL, OBJ o 3MF](topic:open-meshes)), i també ho fan els fitxers `.3dm` ([Obre un model .3dm](topic:open-3dm-files)). Els DXF, IGES i els fitxers de peces propis d'altres programes no es poden obrir (vegeu [Què encara no està implementat](topic:not-built-yet)).

Regles en obrir:

- El nom d'un fitxer de peça o de conjunt ha d'acabar en `.json`, i el fitxer ha de tenir menys de 50 MB.
- Els fitxers es comproven abans de mostrar res. Un fitxer malmès o editat es rebutja amb un motiu clar, per exemple "Aquest no és un fitxer de PartCraft."
- Un fitxer desat amb una versió més nova de PartCraft es rebutja: "Aquest fitxer s'ha desat amb una versió més nova de PartCraft (versió de fitxer 3); aquesta llegeix la versió 2." Els fitxers més antics s'obren.
- Si la peça de la pantalla té canvis sense desar, PartCraft pregunta primer: {{ui:Cancel·la}}, {{ui:Descarta els canvis}} o {{ui:Desa primer}}.

## Desament

{{ui:Desa}} o {{key:Mod+S}} desa el que hi ha a la pantalla:

- En una peça: `<nom de la peça>.partcraft.json`, l'historial complet (croquis, relacions, cotes, operacions, la posició de retrocés), la secció de la fulla de dibuix, les notes de detall i GD&T, i el text complet de qualsevol sòlid STEP importat en una versió anterior. Les operacions que aquesta versió no pot construir es desen sense canvis. El sòlid en si no es guarda; PartCraft el reconstrueix a partir de l'historial quan s'obre el fitxer.
- En un conjunt: `<nom del conjunt>.partcraft-asm.json`, amb **cada peça que hi ha dins**. Un sol fitxer conté tot el conjunt, de manera que el podeu enviar sol.

Desar és una **baixada**. El navegador posa el fitxer a la carpeta de baixades, o pregunta on posar-lo si l'heu configurat així. Tornar a desar fa una baixada nova; el navegador pot anomenar-la `Part1 (1).partcraft.json` en lloc de substituir l'antiga. Podeu canviar-ne el nom o moure els fitxers amb {{pick:mac=Finder|windows=Explorador de fitxers|linux=el gestor de fitxers}}, com vulgueu.

Els caràcters del nom de la peça que no siguin lletres, xifres, espais, `_`, `.` o `-` es converteixen en `_` al nom del fitxer.

:::tip
La majoria de navegadors tenen una opció per preguntar on desar cada baixada. Activeu-la si voleu triar on desar cada vegada: a Chrome i Edge, és a Baixades dins de la configuració; a Firefox, a General, Fitxers i aplicacions; a Safari, a General, Ubicació de les baixades de fitxers.
:::

Més informació sobre on van les baixades i com mantenir els fitxers segurs: [On van els vostres fitxers](common:your-files).

## Exportació

El menú {{ui:Exporta}} escriu altres formats. Cada un és una baixada, amb el nom de la peça.

| Element del menú | Fitxer | Què conté |
|---|---|---|
| {{ui:STL, per a impressió 3D}} | `<nom>.stl` | STL binari dels triangles del sòlid, en mil·límetres, **Z amunt** |
| {{ui:3MF, per a impressió 3D}} | `<nom>.3mf` | 3MF amb el sòlid com a un sol objecte, en mil·límetres, **Z amunt** |
| {{ui:STEP AP242 (sòlid exacte)}} | `<nom>.step` | Encara no implementat en aquesta versió (en gris): necessita un nucli exacte |
| {{ui:STEP AP214 (sòlid exacte)}} | `<nom>.step` | Encara no implementat en aquesta versió (en gris) |
| {{ui:STEP (facetat, nucli de malla)}} | `<nom>.step` | Un sòlid fet de cares planes a partir de la malla: **les superfícies arrodonides són moltes facetes planes petites**. En mil·límetres, amb els eixos propis de PartCraft (Y amunt). És el STEP que cal fer servir per a altres programes CAD en aquesta versió |
| {{ui:DXF del croquis o de la cara plana}} | `<nom> - <croquis>.dxf` o `<nom> - face.dxf` | DXF R12. Un croquis: línies, arcs, cercles i punts en les coordenades propies del croquis, en les capes PROFILE, CONSTRUCTION i POINTS. Una cara plana escollida: els seus contorns com a polilínies tancades (les vores arrodonides com a facetes) |
| {{ui:Dibuix (PDF): vistes, secció, detall, GD&T}} | `<nom> - drawing.pdf` | La fulla de dibuix A3: tres vistes, isomètrica, secció i detall si n'hi ha, mides generals, símbols GD&T, caixetí |

:::note
{{ui:STEP AP242 (sòlid exacte)}} i {{ui:STEP AP214 (sòlid exacte)}} encara no estan implementats en aquesta versió: useu {{ui:STEP (facetat, nucli de malla)}}. Té la forma i el volum correctes, però cada cara arrodonida són moltes facetes planes, de manera que altres programes no poden seleccionar un forat com a cilindre. Si això importa, definiu primer **Corbes** més fi.
:::

- Les exportacions són de la peça que hi ha a la pantalla. L'exportació està desactivada en un conjunt; encara no hi ha exportació de conjunts.
- L'STL, el 3MF, el STEP facetat i el DXF de la cara sempre estan fets de facetes. La configuració **Corbes** (al tauler de la dreta, sense res seleccionat) en fixa el detall, de 32 a 256 facetes per volta. Trieu Fi o Molt fi abans d'exportar un STL o un 3MF per a una impressió llisa.
- El dibuix PDF usa el tipus de lletra Helvetica integrat del lector. Els caràcters que no pot mostrar s'imprimeixen com a "?".

Pas a pas: [Exporta per imprimir, STEP i DXF](topic:export-files) i [Fes una fulla de dibuix](topic:drawing-pdf).

## Feina sense desar

- PartCraft guarda una còpia de recuperació de la peça o del conjunt obert en aquest navegador un moment després de cada canvi, de manera que un bloqueig o una pestanya tancada no perden la feina: la pròxima vegada que obriu PartCraft pregunta "Voleu recuperar el vostre treball?". No és un desament: deseu en un fitxer per conservar la feina. Vegeu [Recupera el treball sense desar](common:recover).
- Si intenteu tancar la pestanya o recarregar amb canvis sense desar, el navegador pregunta "Sortir del lloc?". És la caixa pròpia del navegador; PartCraft no en pot canviar el text.
- {{ui:Nou}}, {{ui:Obre}} i tancar un conjunt pregunten abans de descartar els canvis sense desar.

## En línia i sense connexió

Tot passa al vostre ordinador: el nucli de malla (un programa WebAssembly) es descarrega amb l'aplicació i construeix la geometria localment, i els fitxers es llegeixen i s'escriuen al disc. Cap dada de la peça no passa per la xarxa. Vegeu [El nucli de malla](topic:solid-kernels).

Per treballar sense cap connexió, deseu PartCraft per fer-lo servir sense connexió mentre sou en línia: trieu {{ui:Desa per fer-lo servir sense connexió}} a la barra de l'aplicació i espereu mentre compta ("Desant 40 de 212") fins que digui **Preparat sense connexió**. La còpia desada inclou la biblioteca 3D i el nucli de malla, de manera que després funcionen sense connexió el modelatge, el desament, totes les exportacions i els dibuixos. Si diu **No s'ha pogut desar**, feu clic per tornar-ho a provar mentre sou en línia; **Sense connexió no disponible** vol dir que aquesta finestra del navegador no pot guardar una còpia (passa amb les finestres privades i en alguns ordinadors gestionats). Amb la còpia desada, fer clic a **Preparat sense connexió** ofereix {{ui:Desa de nou (obté la versió més recent)}} i {{ui:Elimina la còpia sense connexió}}. Detalls: [Treballar sense connexió](common:offline).

:::online
Sou en línia. Fins i tot sense desar per fer-lo servir sense connexió, quan PartCraft s'ha carregat i el xip de la barra d'estat diu "Nucli de malla", podeu seguir treballant si la connexió es perd. Només no recarregueu la pàgina fins que torneu a estar en línia.
:::

:::offline
Sou sense connexió. Si PartCraft ja està obert, seguiu treballant; desar i exportar encara funcionen. Si la barra de l'aplicació diu **Preparat sense connexió**, PartCraft també s'obre des de zero sense connexió; en cas contrari, no recarregueu aquesta pestanya.
:::

## Diferències entre navegadors

- **Baixades.** Cada navegador té la seva pròpia carpeta de baixades i la seva manera de preguntar. Si un navegador pregunta si aquest lloc pot baixar fitxers, permeteu-ho, o desar i exportar no podran funcionar.
- **Arrossegar i deixar anar** un fitxer sobre la vista funciona a Chrome, Edge, Firefox i Safari.
- **Fitxers des d'un telèfon o una tauleta.** A l'iPhone i l'iPad, Obre mostra l'app Fitxers; els fitxers desats van a Fitxers, a Baixades. A Android van a la carpeta de Baixades.

No hi ha cap diferència en el contingut dels fitxers entre navegadors o sistemes operatius.
