---
title: Fitxers: obre, desa i exporta
summary: Els fitxers de peça i de conjunt que PartCraft obre i desa, cada format d'exportació i què conserva, on van els fitxers, i què canvia sense connexió o entre navegadors.
keywords: obre, desa, exporta, baixa, fitxer, partcraft.json, fitxer de conjunt, stl, 3mf, step, dxf, pdf, on són els meus fitxers, sense connexió, desa com a
from: e5fbc7e3
---

PartCraft treballa amb fitxers al vostre ordinador. Mai no puja una peça, i no hi intervé cap compte ni emmagatzematge al núvol. El desat al núvol encara no està disponible.

## Què obre PartCraft

| Fitxer | Extensió | Com |
|---|---|---|
| Una peça PartCraft | `.partcraft.json` | {{ui:Obre}}, {{key:Mod+O}}, o arrossegueu-lo a la vista 3D |
| Un conjunt PartCraft | `.partcraft-asm.json` | El mateix: PartCraft detecta de quin tipus és |
| Un sòlid STEP | `.step`, `.stp` | Un cos sòlid llegit com a triangles: [Obre un fitxer STEP i construeix-hi a sobre](topic:import-step) |

Les malles STL, OBJ i 3MF també s'obren com a cossos sòlids ([Obre un STL, OBJ o 3MF](topic:open-meshes)), i també els fitxers `.3dm` ([Obre un model .3dm](topic:open-3dm-files)). No es poden obrir els DXF, IGES ni els fitxers de peça propis d'altres programes (vegeu [Què encara no està implementat](topic:not-built-yet)).

Regles en obrir:

- El nom d'un fitxer de peça o de conjunt ha d'acabar en `.json`, i el fitxer ha de fer menys de 50 MB.
- Els fitxers es comproven abans de mostrar res. Un fitxer malmès o editat es refusa amb un motiu clar, per exemple "Aquest no és un fitxer de PartCraft."
- Un fitxer desat per un PartCraft més nou es refusa: "Aquest fitxer s'ha desat amb un PartCraft més nou (versió de fitxer 3); aquest en llegeix la versió 2." Els fitxers més antics s'obren.
- Si la peça de la pantalla té canvis sense desar, PartCraft pregunta primer: {{ui:Cancel·la}}, {{ui:Descarta els canvis}} o {{ui:Desa primer}}.

## Desar

{{ui:Desa}} o {{key:Mod+S}} desa el que hi ha a la pantalla:

- En una peça: `<part name>.partcraft.json`, l'historial complet (croquis, relacions, cotes, operacions, la posició de retrocés), les notes de secció, detall i GD&T del full de dibuix, i el text complet de qualsevol sòlid STEP importat en una versió anterior. Les operacions que aquesta versió no pot construir es desen sense canvis. El sòlid en si no es desa; PartCraft el reconstrueix a partir de l'historial quan s'obre el fitxer.
- En un conjunt: `<assembly name>.partcraft-asm.json`, amb **totes les peces dins**. Un sol fitxer conté tot el conjunt, de manera que el podeu enviar tot sol.

Desar és una **baixada**. El navegador posa el fitxer a la seva carpeta de baixades, o pregunta on posar-lo si l'heu configurat perquè pregunti. Tornar a desar fa una nova baixada; el navegador pot anomenar-lo `Part1 (1).partcraft.json` en lloc de reemplaçar l'anterior. Canvieu el nom o moveu els fitxers a {{pick:mac=Finder|windows=Explorador de fitxers|linux=el vostre gestor de fitxers}} com vulgueu.

Els caràcters del nom de la peça que no siguin lletres, dígits, espais, `_`, `.` o `-` es converteixen en `_` al nom del fitxer.

:::tip
La majoria de navegadors tenen una opció per preguntar on desar cada baixada. Activeu-la si voleu triar "Anomena i desa" cada vegada: a Chrome i Edge és a Baixades dins de la configuració; a Firefox, a General, Fitxers i aplicacions; a Safari, a General, Ubicació de baixada de fitxers.
:::

Més informació sobre on van les baixades i com mantenir els fitxers segurs: [On van els vostres fitxers](common:your-files).

## Exportar

El menú {{ui:Exporta}} escriu altres formats. Cada un és una baixada, amb el nom de la peça.

| Element del menú | Fitxer | Què conté |
|---|---|---|
| {{ui:STL, per a impressió 3D}} | `<name>.stl` | STL binari dels triangles del sòlid, en mil·límetres, **Z amunt** |
| {{ui:3MF, per a impressió 3D}} | `<name>.3mf` | 3MF amb el sòlid com un únic objecte, en mil·límetres, **Z amunt** |
| {{ui:STEP AP242 (sòlid exacte)}} | `<name>.step` | Un sòlid exacte, en mil·límetres, Z amunt: cares rodones com a cilindres, cons, esferes i tors veritables. El STEP per usar amb altres programes CAD i CAM |
| {{ui:STEP AP214 (sòlid exacte)}} | `<name>.step` | El mateix sòlid exacte en l'esquema AP214, més antic |
| {{ui:STEP (facetat, nucli de malla)}} | `<name>.step` | Un sòlid fet de cares planes a partir de la malla: **les superfícies rodones són moltes petites facetes planes**. En mil·límetres, en els eixos propis de PartCraft (Y amunt). Per a un programa que refusa el fitxer exacte |
| {{ui:DXF del croquis o de la cara plana}} | `<name> - <sketch>.dxf` o `<name> - face.dxf` | DXF R12. Un croquis: línies, arcs, cercles i punts en les coordenades pròpies del croquis, a les capes PROFILE, CONSTRUCTION i POINTS. Una cara plana seleccionada: els seus contorns com a polilínies tancades (les arestes rodones com a facetes) |
| {{ui:Dibuix (PDF): vistes, secció, detall, GD&T}} | `<name> - drawing.pdf` | El full de dibuix A3: tres vistes, isomètrica, secció i detall si s'han definit, mides globals, símbols GD&T, caixetí |

:::note
{{ui:STEP AP242 (sòlid exacte)}} escriu els forats, les protuberàncies, els arrodoniments, els cons, les esferes i els tors sobre les seves superfícies veritables, de manera que un altre programa pot seleccionar un forat com a cilindre; **Corbes** no ho canvia. Els costats de spline, les rosques modelades i les malles importades no tenen superfície exacta i es mantenen com a facetes planes dins del mateix sòlid; la barra d'estat n'indica el nombre. {{ui:STEP (facetat, nucli de malla)}} escriu cada cara rodona com a facetes.
:::

- Les exportacions són de la peça de la pantalla. L'exportació està desactivada en un conjunt; encara no hi ha exportació de conjunts.
- STL, 3MF, el STEP facetat i el DXF de cara sempre estan fets de facetes. L'ajust **Corbes** (al tauler de la dreta, sense res seleccionat) defineix la finesa, de 32 a 256 facetes per volta. Trieu Fina o Molt fina abans d'exportar STL o 3MF per a una impressió suau.
- El dibuix PDF usa el tipus de lletra Helvetica incorporat del lector. Els caràcters que no pot mostrar s'imprimeixen com a "?".

Pas a pas: [Exporta per a impressió, STEP i DXF](topic:export-files) i [Fes un full de dibuix](topic:drawing-pdf).

## Treball sense desar

- PartCraft guarda una còpia de recuperació de la peça o del conjunt obert en aquest navegador poc després de cada canvi, de manera que un error o una pestanya tancada no el perdi: la propera vegada que obriu PartCraft pregunta "Recuperar el treball?". No és un desat: desa-ho en un fitxer per conservar el treball. Vegeu [Recupera el treball sense desar](common:recover).
- Si intenteu tancar la pestanya o recarregar amb canvis sense desar, el navegador pregunta "Voleu sortir del lloc?". És el quadre propi del navegador; PartCraft no en pot canviar el text.
- {{ui:Nou}}, {{ui:Obre}} i tancar un conjunt pregunten abans de descartar els canvis sense desar.

## En línia i fora de línia

Tot passa al vostre ordinador: el nucli de malla (un programa WebAssembly) es baixa amb l'aplicació i construeix la geometria localment, i els fitxers es llegeixen i s'escriuen al disc. Cap dada de peces no passa per la xarxa. Vegeu [El nucli de malla](topic:solid-kernels).

Per treballar sense cap connexió, deseu PartCraft per usar-lo fora de línia mentre sigueu en línia: trieu {{ui:Desa per fer-lo servir sense connexió}} a la barra de l'aplicació i espereu mentre compta ("Desant 40 de 212") fins que digui **Preparat fora de línia**. La còpia desada inclou la biblioteca 3D i el nucli de malla, de manera que després el modelatge, el desat, totes les exportacions i els dibuixos funcionen sense connexió. Si diu **No s'ha pogut desar**, feu-hi clic per tornar-ho a intentar en línia; **Fora de línia no disponible** vol dir que aquesta finestra del navegador no pot conservar una còpia (finestres privades i alguns ordinadors gestionats). Amb la còpia desada, fer clic a **Preparat fora de línia** ofereix {{ui:Torna a desar (obté la versió més recent)}} i {{ui:Elimina la còpia sense connexió}}. Detalls: [Treballar fora de línia](common:offline).

:::online
Sou en línia. Fins i tot sense desar per usar fora de línia, quan PartCraft s'ha carregat i el distintiu de la barra d'estat diu "Nucli de malla", podeu seguir treballant si la connexió cau. Només no recarregueu la pàgina fins que torneu a estar en línia.
:::

:::offline
Sou fora de línia. Si PartCraft ja és obert, seguiu treballant; el desat i l'exportació continuen funcionant. Si la barra de l'aplicació diu **Preparat fora de línia**, PartCraft també s'obre des de zero sense connexió; si no, no recarregueu aquesta pestanya.
:::

## Diferències entre navegadors

- **Baixades.** Cada navegador té la seva pròpia carpeta de baixades i la seva manera de preguntar. Si un navegador pregunta si aquest lloc pot baixar fitxers, permeteu-ho, o desar i exportar no funcionaran.
- **Arrossegar i deixar anar** un fitxer a la vista funciona a Chrome, Edge, Firefox i Safari.
- **Fitxers des d'un telèfon o una tauleta.** A iPhone i iPad, {{ui:Obre}} mostra l'aplicació Fitxers; els fitxers desats van a Fitxers, Baixades. A Android van a la carpeta Baixades.

No hi ha cap diferència en el contingut dels fitxers entre navegadors o sistemes operatius.
