---
title: Documentos ha revisiones (depósito)
summary: Peteĩ tembiapo tuichavéva ohechauka: oñeñongatu peteĩ carpeta del proyecto ndive piezas ha conjuntos, peteĩ pieza oipe'a (retirar), oñemoambue, devolvé ndive peteĩ nota, liberá, ohecha mávapa oipuru ha lista de materiales, mba'épa ohecha ambue tembiguái oñeñongatúva, ha mba'éichapa oñemoĩ carpetas en la nube.
keywords: depósito, documentos, tutorial, guía, retirar, devolver, revisión, liberar, aprobar, bloqueo, historia, dónde se usa, lista de materiales, bom, conjunto, carpeta en la nube, carpeta del proyecto, dos personas, carpeta compartida
from: 0a5e6983
---

## Mba'épa rejapóta

Ana ha'e, Riverside Clinic proyectópe oñemboguejýva, ha Ben ndive, peteĩ tembiguái. Umi pieza ha conjunto del proyecto oĩ peteĩ carpetápe ojehu hag̃ua ha umi ambue ojehuséva (peteĩ unidad compartida, peteĩ carpeta sincronizada térã peteĩ carpeta en la nube). Upe rire, peteĩ archivo oho iñepyrũ kopia gui revisión **A** peve, upéi oñemoambue **B.1** ramo, ha ehecha mávapa ojapo ha mba'épa Ben ohechahína oñeñongatúva peteĩ archivo.

Opa mba'e oñongatu peteĩ depósito oculto `.ccvault` carpetápe nde archivo rembopy'ỹre: ndaipóri servidor, ndaipóri ojeity (carpeta en la nube ha'e excepción, ehecha último paso). Opa botón ha regla hetave, ehecha tema *Documentos: retirar, revisiones ha liberación* nde aplicación oguerekóva.

## 1. Ojapo carpeta del proyecto

1. Eaprieta {{ui:Documentos…}} barra de herramientas-pe **Archivo** grupo-pe.
2. Eaprieta {{ui:Elegir la carpeta del proyecto}} ha eiporavo pe carpeta oguerekóva proyecto pieza ha conjunto kuéra. (Carpetas del proyecto oñemba'apo Studio-pe ha navegadór kuéra-pe ojeporúva carpeta, Chrome ha Edge ramo. Ambue navegadór-pe panel ohechauka).
3. Eaprieta {{ui:Cambiar}} **Vos:** ryepýpe ha ejeporu nde réra `Ana` (eñeporandu rire, ha umi ordenadór réra avei). Panel ohechauka *Vos: Ana en* ha nde ordenadór. Nde réra oguerekóta opa mba'e ejapóva.
4. Eaprieta {{ui:Iniciar un depósito en esta carpeta}} ha ejeporu proyecto réra `Riverside clinic`. Panel ohechauka *Depósito iniciado para Riverside clinic.*

## 2. Oguereko control archivo-pe

1. Eabri **Archivos fuera del depósito** ha eaprieta {{ui:Agregar}} `plates/Bracket.partcraft.json` ryepýpe.
2. Oike **Archivos en el depósito** ryepýpe revisión **A.1** ramo, estado **Trabajo en curso**. A.1 ha'e iñepyrũ kopia; depósito oguarda kopia opa revisión-pe.

## 3. Retirar, ojejapo, devolver

1. Eaprieta {{ui:Abrir}} `plates/Bracket.partcraft.json` ryepýpe. Pieza oñepyrũ PartCraft-pe ha panel oñemboguata ehecha rire. Panel jey eipuru {{ui:Documentos…}} gui.
2. Eaprieta panel-pe jey ha {{ui:Retirar}}. Fila ohechauka **Retirado a vos**. Peteĩ archivo de bloqueo oñemoĩ `.ccvault/locks` pe; ndaipóri ambue ojerúi retirar ko archivo devolvéva peve.
3. Ojejapo pieza: emoambue peteĩ dimensión, emoñe'ẽ peteĩ agujero. Guardar ojapo'ỹ ko archivo nde réra retirado ndaha'éiva, ha ohechauka mbaépa; Guardar como ojapo mbohapy kopia nde réra.
4. Eabri panel, eaprieta {{ui:Devolver}} ha eme'ẽ mba'e ojemoambue (`Moveí la puerta`). Panel ohechauka *devuelto como A.2*. Archivo carpeta del proyecto-pe ha'e ko pieza ejeporúva, ha bloqueo oho.

Eñembohorýi nde mente rire, {{ui:Deshacer retiro}} oipe'a archivo revisión pyahu ndojejapóiva.

## 4. Revisar ha liberar

1. Eaprieta {{ui:Enviar a revisión}}. Estado ohupyty **En revisión** ha archivo ndojejapói.
2. Aprobar mboyve, eaprieta {{ui:Configuración del proyecto}} ha emoĩ mbove oikuaáva aprobar (peteĩ réra peteĩ línea-pe), ohechakuaa `Ben` ha `Carla`, ha emarka regla oikoséva aprobador ndaha'éi autor. Eaprieta {{ui:Guardar configuración}}. Ko rire depósito ipuruvéta oʼo ambue.
3. Ben térã Carla eaprieta {{ui:Aprobar}} ha eme'ẽ aprobador réra. Estado ohupyty **Liberado** ha revisión **A**, *aprobado por* ha réra ndive. Archivo liberado ndojejapói. {{ui:Devolver a trabajo}} oheja hag̃ua gui trabajo en curso, mba'épa rehe.

Aprobador réra ha'e panel-pe emoĩva; ha'e registro oheka'ỹ, ndaha'éi prueba de identidad.

## 5. Revisión pyahu

1. Archivo liberado-pe, eaprieta {{ui:Nueva revisión}}. Oñemoĩ upe próxima letra-pe.
2. Emoambue, upéi {{ui:Devolver}}. Revisión ha'e **B.1**, trabajo en curso. Liberá mboyve ha'e **B**. {{ui:Deshacer retiro}} devolución iñepyrũ mboyve oguenohẽ **A**-pe.

Revisión letra ojeguerojera A, B … Z, AA, AB. Ndeestándarpe ohasa heta letra, proyecto ajuste *Usar la secuencia ASME Y14.35* oheja I, O, Q, S, X ha Z revisión pyahúpe.

## 6. Ehecha mba'épa ojapo

Eaprieta archivo réra detalle ohechakuaa hag̃ua:

- **{{ui:Historia}}**: opa evento, pyahu rupi, máva, mba'e ordenadór ha mboehao: *Devuelto A.2* Ana gui, *Liberado* Ben gui, ha ambue.
- **{{ui:Revisiones}}**: revisión tabla: opa revisión oñongatúva, ha'e fecha, máva devolvió, nota, ha máva aprobó. Depósito oguarda kopia `.ccvault/revs` pe.
- **{{ui:Usa}}**: conjunto-pe pieza kuéra.
- **{{ui:Usado por}}**: ohechauka opa conjunto depósito-pe ojeporúva ko pieza: oñemoambue peteĩ soporte ha ikuaa mávapa conjunto kuéra ohecha hag̃ua.

## Conjuntos: mba'e oipuru ha lista de materiales

Peteĩ conjunto (`.partcraft.json`, Ensamblaje modo-gui oñongatúva) carpetápe emoĩ ha agregar. Eaprieta réra: **Usa** ohechauka pieza kuéra oguerekóva, revisión ha estado ndive; **Usado por** pieza-pe ohechauka opa conjunto oguerekóva. {{ui:Lista de materiales (CSV)}} oñongatu lista completa nivel-nivel, cantidad, revisión ha estado ndive planilla hag̃ua. Emoambue soporte, ha **Usado por** ohechauka mávapa conjunto ohechaséva.

## 7. Mba'épa Ben ohecha ndehe retirado ramo

Ko'ẽrõ eretira archivo jey, ha ereñe'ẽ Ben-pe ojehu hag̃ua proyecto carpeta ha oipe'a panel. Archivo fila-pe ohecha **Retirado por Ana en** nde ordenadór **desde** ára, ha ndaipóri botón {{ui:Retirar}}. Oñeha'ã jepe ojeporu, depósito ndoipotái: bloqueo ndoikuai mokõi jey, ko'ẽrõ ha'e ko mbohapy ohohápe, ndaha'éi oñemoĩ mokõi persona archivo pe retira ramo, carpeta Studio-pe disco-pe oĩmi. (Navegadór-pe carpeta mboyve ha'e lo mejor posible, panel **Carpeta** ohechauka.)

Ana ndaipóri ha Ben oñeikotevẽ archivo, {{ui:Romper retiro}} oipe'a. Ojeporu mba'e rekuaáva; ohóta registro-pe máva retiro ha'e. Proyecto oguereko administrador kuéra, soʼo oikotevẽ. Retiro ohasa tiempo límite (14 ára ojejapo'ỹ) ohechauka *mucho tiempo*. Romper mboyve, Ana devolución tardía ndojejapói, ha oñembotyryrýi ndohechái.

## 8. Carpetas en la nube

Carpeta en la nube ha'e proyecto carpeta equipo almacenamiento en la nube-pe, ndajeporúi carpeta compartida. Studio-pe, CadCraft cuenta-pe oñemboguejýva, panel ohechauka {{ui:Abrir una carpeta en la nube}} {{ui:Elegir la carpeta del proyecto}} ryepýpe. Eaprieta ha eiporavo carpeta, ohechauka espacio de trabajo / carpeta. Espacio dueño oguereko carpeta primero, ha equipo almacenamiento oñemoĩva. Opa mba'e ohechaukaháicha oñeko; servidor oguereko bloqueo, personas kuéra ndive ojehuséva. Ndemboguejýi, panel oñeʼẽ oñemboguejy hag̃ua. Navegadór pe pestaña-pe ndaipóri botón nube; eipuru Studio.

## Ejerce

Ejapo opa mbohapy paso ko'ã peteĩ archivo réra kopia-pe. Dos personas oikotevẽ, térã mokõi ventana mokõi réra ndive. Carpeta compartida real ndive ejapóramo, página Community testing oguereko prueba ojeporúva ko mba'e, ha ombohasa resultado.
