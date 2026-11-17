---
title: Mba'e pyahu 0.7 (anterior)
summary: PartCraft 0.7 omoʼẽ Illustrate espacio de trabajo manual-pe, STEP, STL, OBJ, 3MF ha .3dm archivo cuerpo sólido-pe, marco soldado perfil acero-gui, enlace cerrado, pieza heta elemento ndive, variante paquete configuraciones-gui, post edita 3D acabado ndive ha herramienta biblioteca, corte guardado nido-pe, programa láser, exportación USD ha herramienta asistente IA-pe.
keywords: novedades 0.7, versión anterior, notas de versión, registro de cambios, cambios, 0.7, versión, nuevas funciones, illustrate, manual, ilustración técnica, vista explosionada, globos, lista de piezas, instrucciones, 3D interactivo, animación, step, stp, stl, obj, 3mf, 3dm, malla a sólido, malla abierta, soldadura, miembro estructural, marco, lista de corte, lazo cerrado, enlace, cuatro barras, pieza grande, muchos elementos, paquete de variantes, variantes, configurador, post procesador, editar post, cpost, paralelo, escama, acabado 3D, biblioteca de herramientas, colores de stock, recorte, sobrante, láser, usd, usdz, asistente, mcp, compacto, unidades, portugués
from: 236f6da8
---

Esta ojehechauka mba'e oñemoĩ PartCraft 0.7-pe, 0.6 rehe. Pieza oúva ambue archivo-gui, ha espacio de trabajo pyahu manual omoĩ diseño-gui.

## Pyahu

### Manuales diseño-gui

- **Espacio de trabajo Illustrate.** Emarka {{ui:Illustrate}} {{ui:Espacio de trabajo}} cambiador-pe, upéi {{ui:Nuevo}} {{ui:Manual}} grupo-pe: manual oñepyrũ pieza térã ensamblaje abierto, guardado ensamblaje, térã glTF, OBJ, STL térã 3MF archivo (árbol ha nombre oñeñongatu; copia peteĩ pieza oĩ cantidad peteĩ pieza-pe). Manual peteĩ archivo-pe propio (`.partcraft-manual.json`) pieza copia ndive, upévare documentación ohóva diseño ojapórõ. Ehecha [Ojepyrũ manual Illustrate-pe](topic:illustrate).
- **Vistas ha aspectos.** Ojesconde, ojehecha tenue, ojeaisla térã ojecolorea pieza, vista explosionada ojapo, corte térã caja modelo-gui, lupa ojapo, ha opa vista-pe guardá. Ehecha [Vistas, aspectos, cortes ha lupa](topic:illustrate-views).
- **Globos ha lista de piezas.** Peteĩ emarka globo ohechaukáva pieza vista; número pieza ndive oĩ, ndojeporúi jey. Lista vista-pe oĩ ha CSV-pe oñeguardá. Ehecha [Lista de piezas ha globos](topic:illustrate-parts-list).
- **Anotaciones oñemoĩva:** etiqueta ha llamada pieza número, nombre, material térã cantidad oñeʼẽva; flecha, distancia, ángulo ha radio pieza, forma ha imagen-gui medido. Pieza explosión jave oñemboguejy. Ehecha [Anotaciones oñemoĩva](topic:illustrate-annotations).
- **Línea arte, instrucciones ha archivo 3D.** Oexporta vista vector línea arte-pe (SVG térã PDF) línea oculta ha corte ojekuaaʼỹva, térã PNG-pe; vistas paso paso instrucciones-pe PDF térã HTML página-pe; térã HTML archivo ojapo offline navegador-pe vistas, lista piezas ha animación ndive. Ehecha [Ilustraciones técnicas](topic:illustrate-line-art), [Documentos de instrucciones](topic:illustrate-instructions) ha [Archivo 3D interactivo](topic:illustrate-interactive).
- **Animación ha actualizaciones.** Clave pieza ha cámara, vista explosionada paso paso ojapo, video oguardá. Diseño ojambuévo, {{ui:Actualizar desde el diseño…}} ohechauka mba'e ojeʼéva, ojambuévo, ojeguerohoryvo ha ojoguahẽvo antes de ojambue; vistas, anotaciones, globos ha clave pieza ndive ojoguahẽ. Ehecha [Animar manual](topic:illustrate-animation) ha [Actualizar manual diseño-gui](topic:illustrate-update).

### Ambue archivo ojeporúva

- **Archivo STEP cuerpo sólido-pe oike.** {{ui:Abrir}} lee AP203, AP214 ha AP242 STEP exacto núcleo ndaiporúi. Plano ojeporúva ojeporu; curvo heta planito-pe ojapo; ensamblaje peteĩ cuerpo-pe, pieza ohupytýva archivo-pe. Ojeporu plano-pe, ojapo ha ojeŋgapo. Ehecha [Ojepyrũ archivo STEP ha ojapo](topic:import-step).
- **Malla STL, OBJ ha 3MF sólido-pe.** Eike térã emboʼi archivo: PartCraft ojoaʼỹ esquina doble, ojoaʼỹ achiʼi hendedura, ojapo hyo ha ojapo triángulo ojeʼeva; upéi ohechauka mba'e ojapo ha malla oiko térã ojerohory. Unidad ha ariba mba'éichapa elegí, cuerpo **Imported1** oike, plano superficie-pe ojeʼe. Malla ndojerohory jave ohechauka mba'e hyo oĩ, ha ndaipóri oñemoʼã. Ehecha [Abrir STL, OBJ térã 3MF sólido cuerpo-pe](topic:open-meshes).
- **Archivo .3dm cuerpo peteĩ.** Malla, polisuperficie, extrusión ha bloque ubicación `.3dm` archivo-gui, sólido cuerpo peteĩ-pe. Malla archivo-gui térã PartCraft-pe triangulado, reparación ha "¿cierra?" control malla ndive. Curva, texto, SubD objeto, capa ha color ndojejapói, diálogo ohechauka. Ehecha [Abrir modelo .3dm sólido cuerpo-pe](topic:open-3dm-files).

### Pieza ha ensamblaje

- **Marco perfil acero-gui.** Emboʼi marco línea-gui, peteĩ bosquejo-pe walo ojapo 3D marco-pe, upéi {{ui:Más}} › {{ui:Miembro estructural}}: sección AISC térã EN 10365 tabla-gui oñeʼẽ línea opavavépe. Esquina ojapo ojejoguakuaa térã ndojeinstala, miembro T-pe térã esquina mbohapy ojoaʼỹva ojapo, extremo libre tapa ha esquina refuerzo oguereko, corte lista peteĩ-peteĩ pieza largo ha ángulo ohechauka ({{ui:Guardar la lista de corte (CSV)}}). Ehecha [Marco perfil acero-gui](topic:structural-members).
- **Lazo cerrado ensamblajepe.** Pieza anillo-pe ojoaʼỹva (cuatro barras enlace, manivela ha corredera, marco trabado) ojapo cerrado: emboʼi térã eñeʼẽ valor lazo rehe ha umi pyʼỹi oñemoĩ; movimiento control lazo ndive ojapo. Unión ojapo jepe azul, lazo ndojapóiva jave pyrũ ha ohechauka mboyve oĩ. Ehecha [Lazos cerrados: enlaces](topic:build-assembly#closed-loops-linkages).
- **Pieza heta elemento ndive.** PartCraft ohechakuaa sólido historia mbytépe, upévare cambio tapykue historia-pe ojapo elemento tapykue, corte ha saliente ndojoavaʼỹva ojapo peteĩ jey. Pieza 750 elemento-pe ojehechakuaa. Parámetros ventana heta ecuación ndive oñemoĩ, ojambue 200 paso peve, memoria heta ndojapóiva ohóva 20 peve. Ehecha [Pieza heta elemento ndive](topic:edit-history#parts-with-hundreds-of-features).
- **Paquete de variantes configuraciones-gui.** {{ui:Paquete de variantes…}} **Configuraciones** rapykue {{ui:Parámetros}} pestaña-pe ojapo cada configuración térã emarka rehe, peteĩ zip-pe: STEP, IFC, DWG plano hoja ha vista previa peteĩ-peteĩ, parámetro tabla (CSV ha JSON), ha pieza peteĩ elemento biblioteca variantes ndive. Ndojapóiva configuración ohechauka ha ndojeʼéi. Línea comando `partcraft variants` ojapo upéicha. Ehecha [Ojapo paquete de variantes](topic:variant-pack).

### Ojapo

- **Post procesador ojejapóva.** Fanuc, GRBL ha LinuxCNC posts Fabricación-pe ha'e texto archivo PartCraft post formato-pe, ha G-code ojapo mba'e ojapo'ỹva. {{ui:Editar post…}} oñemoĩ ojeporúva copia ({{ui:Nuevo post…}} ha {{ui:Importar archivo de post…}} jepe), ohechauka mba'e línea hasy, ha G-code ohechauka escribe jave. Post pieza-pe ha `.cpost` archivo-pe guardá. Ehecha [Post procesadores ojejapóva](topic:post-processors).
- **Acabado 3D: Paralelo ha Escama.** Modelo opa superficie acabado bola, cola ancha térã plano fresa-gui, líneas paralelas angulo rehe, térã pasada distancia peteĩ-peteĩ, umi cresta altura ndive (plano fresa-pe ndaikatúi). Ehecha [Acabado 3D: paralelo ha escama](topic:finish-3d).
- **Biblioteca herramienta.** Herramienta guardá ko navegador pieza opavavépe, ha exporta térã importa JSON archivo-pe ambue computadora-pe. Ehecha [Biblioteca de herramientas](topic:tool-library).
- **Stock modelo-gui color-pe.** **Mostrar el stock simulado** ojapo jave, stock verde modelo-pe, herramienta ojejapóva rojo, stock oĩha gris-pe amarillo, panel-pe clave ndive. Ehecha [Simular](topic:manufacture#simulate).
- **Recorte nido mbytépe ojeŋgapo.** Nido rire, plancha ojekuaaʼỹ mboyve ohóva numerado remanente pieza material ha espesor ndive. Mismo material ha espesor siguiente nido remanente primero, upéi plancha completa oporu; stock lista archivo-pe ha CSV-pe guardá, DXF cada remanente ohechauka. Ehecha [Guardar ha oporu recorte](topic:nest-offcuts).
- **Programas láser.** {{ui:Exportar}} › {{ui:Programa de láser…}} DXF archivo-gui contorno oinstala, capa mba'e ojapo elegí (cortar, marcar, grabar, rellenar), cabeza movimiento ohechauka ha G-code modo láser GRBL-pe guardá. Chrome ha Edge-pe USB-pe ojapo jepe ojerohory, láser apagado. Ajustes archivo-pe guardá. Ehecha [Enviar dibujo láser-pe](topic:laser-cutting).
- **Exportación USD.** {{ui:Exportar}} › {{ui:Paquete USD (.usdz)}} pieza material, volumen ha masa ndive, térã ensamblaje pieza peteĩ ha cada copia oĩ umi lugar, metro-pe Z arriba. Ehecha [Exportar pieza térã ensamblaje USD-pe](topic:usd).

### Asistentes

- **Herramienta asistente IA-pe.** {{ui:Configuración}} › {{ui:PartCraft}} › {{ui:Asistentes}}-pe ojejapo, CadCraft Studio-pe oñeʼẽ asistente ohecha elemento, parámetro ha masa propiedades, parámetro ojambue ha oñemoĩ (peteĩ paso oheja), CraftScript, Lua térã Python script oñemoĩ Script espacio ojapóicha, exporta STL, 3MF, STEP facetado térã USD, guarda, ha manual exporta PDF, SVG, instrucciones térã 3D archivo interactivo-pe. Archivo servidor ha `cadcraft` comando línea ojapo guardado pieza ha manual-pe. PartCraft-pe IA ndaipóri. Ehecha [Eiporu PartCraft asistente de IA-gui](topic:use-with-ai-assistants).

## Ojambue

- **Archivo-gui cuerpo oguereko pieza ohechauka versión 5-pe ojapo.** Pieza STEP, STL, OBJ, 3MF térã `.3dm` cuerpo oguereko triángulo ojejoaʼỹva `.partcraft.json` archivo-pe, upévare archivo original ndaikotevéi jey. PartCraft 0.6 versión 5 "versión pyahu" mensaje-gui ndojeporuvéi, ojapo'ỹ hasy. Ambue pieza oñemoĩ ko'ẽ-icha. Ehecha [Archivos PartCraft](topic:file-formats#the-partcraft-files).
- Pieza-pe post oñeguardáva. PartCraft 0.6 oikéva ohasa jave post oñemboguejy ndojapóiva.

## Opa app-pe

- **Unidades.** {{ui:Configuración}} › {{ui:General}} › {{ui:Unidades}}-pe largo, área, volumen, ángulo ha pendiente lista; unidad definición tamaño exacto (US survey pie peteĩ unidad). Unidad ndojeporúiva ojapo, lista ndojehecha; estrella oñemoĩ, trabajo pyahu upegui oñepyrũ. Archivo oguereko iñe'ẽ unidad. PartCraft caja mba'e ndojeporuvéi listas; pieza milímetro-pe ohechauka.
- **Diseño ipyahúva ha panel mboyve.** {{ui:Configuración}} › {{ui:General}} › {{ui:Densidad del diseño}} › {{ui:Compacta}} pantalla-pe heta omeʼẽ (pantalla táctil ha teléfono botón grande ojapo). Costado panel título barra ndaipóri: arrastra ojoaʼỹ, flota térã pestaña-pe compartí, borde-pe ojepe'a, térã oculta ha oheja. Ehecha [Ojapo diseño](common:arrange-panels#make-the-layout-denser).
- **Diálogo ojemoveha.** Título barra arrastra diálogo dibujo ndive; oñemoĩ ojeporúva jave. Título barra mbytépe mboyve jeho centro. Ehecha [Mover diálogo](common:arrange-panels#move-a-dialog).
- **Recetas asistente IA-gui.** Diez pedido ojapo asistente-pe (plano ordena, serie grafica, planos ojekuaa, modelo pregunta, cómputo suma, pieza variante ojapo...), cada tembiporu ha permiso ohechauka, prueba ojapo. Apps-pe IA ndaipóri. Ehecha [Recetas para asistentes de IA](common:assistants-recipes).
- **Idiomas.** **Portugués (Portugal)** {{ui:Configuración}} › {{ui:General}} › {{ui:Idioma}}-pe pyahu. Upe, **Portugués (Brasil)**, **Español (México)** ha **Bahasa Indonesia** opa apps-pe, borrador ndojekuaa tuichaiterei. Ayuda tembiporu inglés-pe, peteĩ español-pe.
- **CadCraft Studio** ohechauka mba'eichapa actualización ndojehechaiva (archivo ndaipóri sistema-pe, red ndaipóri, firma ndaiporãi) "Listo" ndaʼéi; cerrado Novedades tarjeta ndoikói jey peve oñemoĩ versión pyahu.

## Ndaipóri ko versión-pe

- **0.7 ndaipóri código firma.** Firma ha Microsoft Store paquete 0.8-pe, certificado validación ndaipóri. Cada archivo SHA-256 getcadcraft.com/download-pe ehecha. Windows-pe, SmartScreen instalador oñeʼẽ jave, emarka {{ui:Más información}}, upéi {{ui:Ejecutar de todos modos}}. Mac-pe, peteĩ jey, click derecho CadCraft Studio-pe ha emarka {{ui:Abrir}}. CadCraft Studio app store-pe ndaipóri ko momento, iPad térã iPhone build ndaipóri.
- Ángulo ha pendiente lista {{ui:Unidades}}-pe guardá, ha ndaipóri caja oinstala.
- Cuerpo STEP, malla ha `.3dm` archivo-gui historia ndaipóri, curvo plano facetas. Color, pieza nombre ha ensamblaje árbol STEP-gui ndojeʼẽ; curva, SubD objeto, texto, capa ha color `.3dm`-gui ndojeʼẽ. `.3dm` lector formato herramienta-gui archivo-pe chequeado, modelado programa-gui guardado archivo-pe ndaipóri.
- Illustrate ndojehechaiva STEP archivo {{ui:Desde otro archivo…}}-pe (STEP Diseño-pe ojepyrũ, {{ui:Desde la pieza abierta}} oñemoĩ), ModelCraft ha BimCraft modelo ndojehasavaʼekue, trazador camino calidad imagen ndojeporuvéi. Video exporta ha archivo interactivo teléfono ha tablet-pe ndojeporuvéi.
- Láser programa DXF contorno-pe; lámina metal pieza plano-pe núcleo exacto ojeporu. CadCraft Studio Web Serial ndaipóri, upéva G-code guardá ha láser programa ndive oñemboʼe. Láser G-code ha mbohapy post incorporado máquina real-pe ndojehechaiva: control simulador-pe programa opavavépe ehecha.
- Acabado 3D Paralelo ha Escama anivé; 3D desbaste, cintura, lápiz ha descanso mecanizado, torneado ndaipóri. Herramienta biblioteca ko navegador-pe, ndaʼéi sincronizado.
- Página configurador, umi visitante variante ojapo ha descarga, personal-pe ojeporu sitio botón ojejapo'ỹ peve. Puertos (conexión punto) PartCraft-pe ndojapói.
- Miembro estructural línea recta ndive, peteĩ sólido soldadura ndaipóri.
- PartCraft cinta menú estilo botón opavavépe tamaño ruguái ohechauka.
- Magnetismo: imán permanente 2-D-pe; motor, saturación acero ha malla curvo pieza ndaipóri.

Ambue oĩ [Mba'e ndaipóri ko momento](topic:not-built-yet).
