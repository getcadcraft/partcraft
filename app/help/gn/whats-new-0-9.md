---
title: Mba'e pyahu 0.9
summary: PartCraft 0.9 omoʼẽ superficies ndive sólido, ensamblaje mil pieza, Documentos bóveda revisiones ndive, Solid FEM complemento tensión, diez método arco, acero UK tamaño, Etapa de impresión ha resina impresión complemento.
keywords: novedades, qué hay de nuevo, notas de versión, registro de cambios, 0.9, filete entre caras, rodando bola, filete varias aristas, engrosar, sólido desde superficies, step cáscara, iges sólido, escanear filetes, ensamblaje grande, visualización liviana, 20000 piezas, documentos, bóveda, retirar, revisión, versión, dónde se usa, enlace Rhino, grasshopper, 3dm, cursores, piso de fábrica, cola de trabajo, solid fem, elementos finitos, von mises, frecuencia natural, métodos de arco, arco 3 puntos, secciones acero UK, libro azul, etapa de impresión, resina, goo, ctb, cama, desplegar, novedades, qué hay de nuevo, notas de versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, análisis en vivo, actualizar mientras edito, qué se rompe, romper, factor de carga, no lineal, fluencia, deformación plástica, contacto, calculix, estudio de movimiento, holgura, superficies, nurbs, suavizar, casco, cebra, ingeniero, generador, cuerpo generado, boceto desde foto, escala para impresión, dividir para impresión, contracción, hojas anidadas, g-code, plano, cotar agujeros, asistente, mcp, idiomas, filas de la barra
from: 96d9fbfa
---

Esta ojehechauka mba'e oñemoĩ PartCraft 0.9-pe, 0.8.1 rehe. Superficie libre ojoaʼỹ sólido-pe, ensamblaje mil pieza ojeporu, Documentos bóveda revisiones guarda, ha Solid FEM complemento pieza tensión ehecha. Peteĩ-peteĩ ohechauka mbaʼépa ojuhu.

## Pyahu 0.9.1-pe

- **STEP exacto guardá.** {{ui:Exportar}} › {{ui:STEP AP242 (sólido exacto)}} ha {{ui:STEP AP214 (sólido exacto)}} ojapo. Agujero, saliente, filete, cono, esfera ha toro verdadero superficie-pe, círculo verdadero borde-pe, upévare CAD térã CAM programa agujero ohechakuaa. Spline lado, rosca modelado ha malla importado sólido-pe facetas ojoaʼỹ. Ehecha [Exportar para impresión, STEP y DXF](topic:export-files#for-other-cad-programs-step).
- **STEP ingresa, STEP exacto sale.** Abierto STEP archivo plano cara, cilindro, cono, esfera ha toro oiko; {{ui:Exportar}} › {{ui:STEP AP242 (sólido exacto)}} superficie verdadero oguardá facetas-pe ndoikéi. Spline, barrido ha revolución cara facetas oĩ, STL, OBJ ha 3MF cuerpo jepe. Archivo STEP ojehasa jey pieza oguardáva. Ehecha [Abrir archivo STEP ha ojapo](topic:import-step).
- **Círculo verdadero DXF cara-pe.** {{ui:Exportar}} › {{ui:DXF del boceto o de la cara plana}} plano cara elegí jave agujero redondo círculo-pe oñeʼẽ, agujero centro ha radio ndive, láser, plasma térã chorro de agua mesa-pe. Ambue borde redondo facetas oĩ.
- **STEP exacto taller-pe.** {{ui:Fabricación}}-pe {{ui:STEP exacto (coordenadas de trabajo)}} pieza oguardá origen trabajo ojojoaʼỹva, Z herramienta eje rehe, G-code ojeporu koordenadas.

## Pyahu

### Superficies ha sólidos

- **Filete entre caras.** Emarka {{ui:Superficies}} {{ui:Espacio de trabajo}}-pe, upéi {{ui:Redondear entre caras}}. Peteĩ sólido mokõi cara elegí, radio emboʼi ({{ui:Radio al final (mm, 0 = el mismo)}} radio cambia borde rehe). Resultado línea ohechauka filete mboyve rodando bola ideal, radio ndojoaʼỹ cara héra ndojapói. {{ui:Redondear varias aristas}} heta borde peteĩ jey; {{ui:Esquinas (parche esférico donde se juntan tres)}} marca esfera esquina mbohapy redondeado borde plano cara jave. Ehecha [Superficies libres (NURBS)](topic:nurbs-surfaces).
- **Engrosar sólido-pe.** {{ui:Dar espesor para hacer un sólido}} ko espacio-pe superficie espesor omoĩ; {{ui:Otro lado}} ambue lado oho. Pliegue térã cruce ndojapói, superficie ha lugar héra ohechauka.
- **Sólido superficies-gui.** Recorte superficie unión, resta ha intersección ndive, pieza-pe peteĩ paso oheja ojapo. STEP peteĩ sólido cerrado cáscara-pe, IGES peteĩ sólido-pe oguardá; ambos sólido oiporu. Cara borde borde-gui ndoipareá jave, archivo cara separada oguereko, estado línea ohechauka. Sólido nodo editor-pe jepe ojapo; ehecha [Editor de nodos](topic:nodes).
- **Filete escaneo-pe borde ha variable.** Superficie escaneo-pe ojoaʼỹ jave, borde redondo (toro) ha radio variable recta borde-gui ohechaukaha ha radio ndive listado. Escaneo pe ojehechakuaa ojapóva rehe.

### Ensamblajes, documentos ha enlaces

- **Ensamblaje grande.** Pieza copia oguereko malla peteĩ, {{ui:Vistas}} › {{ui:Visualización liviana}} caja ojapo, vista oñemboʼe (ensamblaje grande-pe automático oñepyrũ). Pieza árbol mboyve filas ohechauka ha {{ui:Mostrar 700 más}} botón ambue. Ensamblaje archivo 50.000 instancia ha 100.000 unión ikatu. Ehecha [Ojapo ensamblaje](topic:build-assembly).
- **Documentos.** {{ui:Documentos…}} **Archivo** grupo-pe diálogo proyecto carpeta-pe ojapo: retirar ha devolver, revisión letra, estados (trabajo en curso, para revisión, liberado, obsoleto), historia, dónde se usa ha lista de materiales. Ehecha [Documentos y revisiones (bóveda)](topic:documents-walkthrough).
- **Enlace Rhino en vivo.** Peteĩ script, `cadcraft_link.py`, Rhino térã Grasshopper documento ohecha ha ojambuévo PartCraft-pe ohupyty; importa elemento nuevo forma-pe oñemoʼã. Peteĩ vía, Studio ndive. Ehecha [Enlace .3dm en vivo](topic:live-3dm-link).
- **Cursores ojehecha.** Sesión compartida-pe cada persona cursor nombre ndive ohechauka, elemento elegido ndive. Ehecha [Trabajar en vivo con otros](topic:work-live).
- **Piso de fábrica.** Complemento Piso de fábrica {{ui:Configuración}} › {{ui:Complementos}}-pe emboʼi. {{ui:Fabricación}}-pe programa oñemboʼe rire, pestaña {{ui:Agregar a la cola de trabajos de fábrica}} térã {{ui:Guardar como archivo de trabajo}} oiporu. Máquina ndojapóiva ndojapói ha ndoñemboʼemoʼãi.

### Análisis ha piezas

- **Complemento Solid FEM.** {{ui:Solid FEM}} {{ui:Configuración}} › {{ui:Complementos}}-pe emboʼi (oñemoĩ ndojeporuvéi peve) ha {{ui:Solid FEM}} pestaña derecha panel-pe oñepyrũ. {{ui:Mallar la pieza}}, fijo cara ha carga 3D vista-pe elegí, {{ui:Resolver}}, desplazamiento, von Mises tensión térã forma modo {{ui:Mostrar en el modelo}}-pe ojapo. Ehecha [Solid FEM: control tensión](topic:solid-fem-check).
- **Arco boceto-pe, diez método.** {{ui:Arco}} lado flecha boceto barra-pe mbohapy método ohechauka: 3 puntos, inicio centro fin, inicio centro ángulo, inicio centro largo, inicio fin ángulo, inicio fin dirección, inicio fin radio, centro inicio fin, centro inicio ángulo, centro inicio largo ha continuar. Ehecha [Arco diez método](topic:sketch-arc-methods).
- **Acero UK tamaño.** Miembro estructural 976 UK sección (UB, UC, PFC, EA, UEA, CHS, SHS, RHS) oiporu; `305x165x40 UB` tamaño emboʼi. Ehecha [Miembros estructurales](topic:structural-members).

### Impresión

- **Etapa de impresión.** {{ui:Etapa de impresión}} botón barra-pe (complemento 3D Print, defecto ojejapo), pieza cuerpo línea punteada cama-pe: {{ui:Desplegar}}, {{ui:Girar 90°}}, {{ui:Organizar en la cama}}, {{ui:Ajustar todo en la cama}}, {{ui:Vista previa de capas}}, upéi {{ui:Enviar a la impresora 3D}} USB, Klipper (Moonraker), OctoPrint o PrusaLink-pe. Nde confirma'ỹ peve ndaiʼerõi, pieza ndojambuéi. STL térã 3MF archivo-pe, ehecha [Ojapo pieza impresión 3D-pe](topic:print-3d).
- **Impresión resina.** {{ui:Configuración}} › {{ui:Complementos}}-pe complemento, ndojejapoi peve: resina slicer, exposición ensayo, Elegoo GOO, SL1, Chitubox CBDDLP/CTB ha Anycubic archivo. Slicing hilo trabajador-pe, página ohechakuaa.

## Opa app-pe

- Cada sugerencia Bootstrap tooltip.
- Inicio consejo cerrar botón oĩ; cerrado oĩ.
- Pestaña fila ndojekuaái ojeʼe ohechauka lado-pe, ndokarapuraiva.
- Navegador pestaña documento abierto nombre PartCraft | CadCraft ryepýpe.
- {{ui:Configuración}} espacio de trabajo {{ui:Diseño}} lista ohechauka, idioma caja build-pe ojeporu opa idioma.
- Peso ha Temperatura unidades tipo {{ui:Unidades}} configuración-pe.

## Ojapo

- Sketch Arco menú opa método ohechauka.
- Complemento barra ha navegador pestaña título 2026-11-09 ojapo.

## Honest limits

- STEP exacto OpenCascade-pe ojehecha (sólido ojojoaʼỹ, volumen mano-pe ojeporu). Opa CAD térã CAM programa-pe ndojeporaʼỹ, ensamblaje STEP exacto-pe ndoguardái.
- Impresora real-pe nada ndojapói. Slicing, G-code ha resina archivo ore programa térã impresora ojeporu; resina formato ndaipóri impresora-pe ndojerohory; impresora tamaño ha exposición punto de partida.
- Solid FEM lineal, isotrópico ha elástico, peteĩ material pieza-pe, ndaipóri contacto, fluencia térã pandeo. Tensión fijo cara ha esquina afilada malla-pe depende. Chequeo ayuda, ingeniero ndojapóiva.
- Ensamblaje grande tiempo GPU ndaipóri servidor-gui; 20.000 pieza cuadro completo segundos oñemoʼã.
- Filete par de cara-pe; vértice mezcla general ndaipóri, cara ndojoaʼỹ filete ndaipóri.
- Rhino enlace Rhino térã Grasshopper real-pe ndojapo; Documentos mokõi programa carpeta-pe ojapo, mokõi persona red compartida-pe ndojapo.
- Escaneo superficie real-pe mano ndojehecha. Inglés ndaʼéi idioma máquina borrador.
- Windows instalador ndaipóri firma ha macOS disco imagen ndaipóri notarizado. Ehecha [Solución de problemas](topic:troubleshooting).

Ambue ehecha [Mba'e pyahu 0.7](topic:whats-new-0-7).

## Anterior: 0.8 ha 0.8.1

Esta ojehechauka mba'e oñemoĩ PartCraft 0.8 ha 0.8.1-pe, 0.7 rehe. Simulación edita jave omoʼẽ, tiempo real-pe ohechauka mba'e primero ojoguahẽ, ensamblaje estudio movimiento omoĩ, espacio superficies libres ha física tamaño pieza-pe. 0.8.1 pequeño arreglo.

### Pyahu

**Simulación**

- **Actualizar mientras edito.** {{ui:Actualizar mientras edito}} Resolver bloque-pe emboʼi; cambio dimensión, carga térã material jave respuesta rápida ohecha, elemento cuatro vez grande. Peteĩ segundo ndojeporuvéi jave, estudio refinado respuesta oñemoĩ. Resultado ohechauka mba'eichapa. Ehecha [Ver tensión y deflexión](topic:simulation#update-while-you-edit-live).
- **Qué se rompe primero.** Estática térã pandeo estudio-pe, {{ui:¿Qué se rompe primero?}} **Romper** bloque-pe carga escala ojapo pieza oñemboʼe peve. Peor primero lista: fluencia carga factor (cara rojo marca tensión pico) ha pandeo carga factor. Factor 1 menor jave pieza ojapo ndoikóiva, Problemas error ohechauka. Ehecha [Ver tensión y deflexión](topic:simulation#find-out-what-breaks-first-break-it).
- **Fluencia ha contacto.** Mokõi estudio tipo: no lineal material recta línea fluencia tensión peve, upéi plano pendiente, deformación plástica grafico; contacto pieza mokõi empuja (sin fricción) térã pegada (unida). Carga paso ndoikóiva térã pieza hundidaiterei Problemas panel-pe ohechauka. Fricción, deslizamiento grande, rotación grande, deflexión grande ha fatiga ndojapói. Ehecha [Ver tensión y deflexión](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Decks CalculiX-pe.** {{ui:Exportar}} › {{ui:Archivo CalculiX (.inp)}} CalculiX-pe oguardá, nde instalado programa; {{ui:Exportar}} › {{ui:Resultados CalculiX (.frd)}} resultado archivo malla-pe oñemboʼe. PartCraft programa ndojapói, pieza cambio ojapo jave ohechauka.

**Ensamblajes**

- **Estudios movimiento.** {{ui:Ensamblaje}} › {{ui:Movimiento}} unión peteĩ valor tiempo nde elegí ojapo (velocidad constante, suavizada, seno, ida y vuelta), ensamblaje paso peteĩ-peteĩ uniones ha lazos ndive ubica, choque ha cercanía informe. {{ui:Agregar un punto}} punto posición, velocidad ha aceleración graficá; {{ui:Guardar CSV}} ha {{ui:Guardar gráfico}} oguardá. {{ui:Ejecutar}} rire, barra paso ojapo ensamblaje cualquier paso-pe. Ajuste estudio ensamblaje archivo-pe guardá. Velocidad ha aceleración registro posición-gui; pico afilado bajo ohechauka jave paso heta ejapo. Ehecha [Ver choques y movimiento](topic:check-assembly#a-motion-study).

**Superficies y piezas física-gui**

- **Espacio Superficies.** {{ui:Espacio de trabajo}} cuadro-pe {{ui:Superficies}} emarka NURBS curvas ha superficies pieza lado-pe: {{ui:Curva}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} ha {{ui:Zebra}}, continuidad (G0, G1 ha G2) superficie exacta-pe medido, borde ndaipóriva pedido peor Problemas-pe Match arreglo ndive. {{ui:Fair}} casco líneas inflexión ha curvatura salto ohechauka, tolerancia ndive oñemboʼe. Superficie pieza archivo-pe guardá, elemento ndojambuéi. Ehecha [Superficies libres (NURBS)](topic:nurbs-surfaces).
- **Espacio Ingeniero.** {{ui:Espacio de trabajo}} cambiador-pe {{ui:Ingeniero}} emarka, generador elegí, {{ui:Nuevo}}: script pieza tamaño omoʼe, mba'e oporu, presión, material, impresión proceso ndive, fórmula de libro, upéi ojapo, número ojeporu fuente ndive, fabricación chequeo ha análisis archivo omoʼe. Opa computadora-pe pieza mismo. Generador pieza-pe guardá; pieza abrir jave script ndojapói. Ehecha [Piezas desde física: generadores](topic:engineer-generators) ha [Escribir generador](topic:write-a-generator).

**Boceto, dibujos ha fabricación**

- **Boceto desde foto.** {{ui:Elementos}} › {{ui:Más}} › {{ui:Boceto desde foto…}} plano pieza dibujo llano suelo (contorno ha agujero) térã lápiz dibujo línea, arco, círculo-pe ojapo. Peteĩ largo oñeʼẽ, vista previa chequea, boceto ojapo. Ehecha [Boceto básico](topic:sketch-basics#a-sketch-from-a-photo).
- **Escala y dividir para impresión.** {{ui:Exportar}} › {{ui:Escala para impresión (STL o 3MF)…}} eje eje-pe escala, pieza ndojambuéi, encogimiento margen-gui. {{ui:Exportar}} › {{ui:Dividir para impresión (zip de piezas)…}} cama-pe grande pieza numerado pieza-pe clavija, chaveta, cola de milano, agujero clavija térã imán bolsillo ndive. Ehecha [Imprimir en 3D](topic:print-3d).
- **Hojas anidadas G-code-pe.** {{ui:Exportar}} › {{ui:Hojas anidadas a G-code}} DXF anidado lee, hoja peteĩ programa elegí post ndive: agujero ha recorte primero, upéi contornos. Entrada, orden de corte ha borde compartido ndojapói. Ehecha [Anidar piezas planas en hojas](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Planos ojapo ambue.** {{ui:Hoja}} › {{ui:Automático}} oiko A-tamaño hoja ohechauka vistas escala máxima 1:1 peve. {{ui:Cotar los agujeros}} agujero centro marca, tamaño peteĩ-peteĩ, posición vista ángulo inferior izquierda-gui. Ehecha [Ojapo plano](topic:drawing-pdf).

**Opa app-pe**

- **Idiomas.** Apps 54 idioma-pe. Inglés ambue máquina borrador, hablante nativo ndojehecha peve.
- **Filas de la barra.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra}} Ajustar (pyahu rehe), 2 filas térã 1 fila; barra ndojeporú jave lado-pe ojeʼe. PartCraft Elemento cinta heta eiporu herramienta tamaño grande, variante ojapo botón dividido-pe.
- **Conectar IA.** Studio hub asistente IA ocho app-pe, permiso solo lectura, sugerencia térã edición app peteĩ-peteĩ. Asistente oñeʼẽ oñemoĩ pieza ko oración-gui ("soporte carga-pe"), trabajo ohechauka ha chequeo opa, upéi ojapo; mba'e ndojehechaiva ohechauka (concentración tensión, fatiga, fluencia plástico). Ehecha [Eiporu PartCraft asistente de IA-gui](topic:use-with-ai-assistants).

### Ojapo 0.8.1-pe

- **Pantalla completa cursor trabado.** Puntero ojehechápe pyʼỹi ojapo. Causa ñande mejor lectura; ndojejuhu informe ohechakuaáva.
- **Idioma ejecución-pe.** Studio ha paquete edición idioma ojambue ojapo; upe mboyve inglés ajapo. Opa plataforma-pe ndojehechaiva; idioma ndojambuéi jave ñandéve eʼe.

### Ndaipóri ko versión-pe

- Conectar IA ndojapo tuichaiterei: Studio-pe peteĩ clic conexión, web-pe ojeporu conector, nde API clave Studio-pe, MCP paquete ndojapói. Studio ndaipóri IA hendápe.
- Studio ndaipóri código firma: Windows ohechauka, macOS clic derecho ha Abrir. Ehecha [Solución de problemas](topic:troubleshooting).
- Stack-ups peteĩ vía: ehecha [Tolerancia pila](topic:tolerance-stackup).
- Ambue oĩ [Mba'e ndaipóri ko momento](topic:not-built-yet).

Ambue ehecha [Mba'e pyahu 0.7](topic:whats-new-0-7).
