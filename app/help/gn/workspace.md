---
title: PartCraft pantalla
summary: Opa barra ha panel ehecha: herramienta barra ha mba'éichapa oñemoĩ, historia, pieza datos, 3D vista, propiedades panel ha estado barra.
keywords: pantalla, diseño, barra de herramientas, historia, árbol de elementos, propiedades, panel, barra de estado, interfaz, ui, recorrido, pantalla completa
from: 5b5bb843
---

Pantalla mbohapy parte ha'e: herramienta barra ryepýpe, historia izquierda, 3D vista mbytépe, propiedades panel derecha ha estado barra mbytépe. Opa ryepýpe CadCraft app bar oĩ.

## App bar

Fina barra yvate ha'e CadCraft sitio-pe, PartCraft-pe ndaha'éi. App nombre ha oporu ohechauka, versión menú, **Acerca de PartCraft**, pantalla modo botón ha Papel / Modelo tema cambiador.

- **Papel** oscuro línea clara hoja-pe. **Modelo** claro línea oscuro tekoháme. Boceto color tema ojeʼe.
- {{ui:Configuración}} (engranaje, térã {{key:Mod+,}}) oguereko {{ui:PartCraft}} pestaña: mouse botón vista rotar, mouse rueda térã trackpad, boceto relación. Ehecha [Configuración de PartCraft](topic:settings).
- Pantalla modo botón, térã {{key:Ctrl+Shift+F}}, normal, pantalla completa ha barra oculta pantalla completa oñemoʼã. Barra oculta jave, puntero yvate borde-pe oho (térã tap) barra oñemoĩ jey. {{key:Esc}} normal-pe oho. Tecla {{key:Ctrl+Shift+F}} Mac-pe jepe, ⌘ ndaʼéi.

## Herramienta barra

Herramienta barra grupo-pe, ojapo ohechaukaha oporu rehe, peteĩ fila-pe oñemoʼã:

| Grupo | Botón | Ohechauka |
|---|---|---|
| Archivo | {{ui:Nuevo}}, {{ui:Abrir}}, {{ui:Guardar}}, {{ui:Exportar}} (menú) | Opavavépe |
| Boceto | {{ui:Boceto}} | Boceto ndojepyrũi jave |
| Boceto | {{ui:Salir}}, {{ui:Línea}}, {{ui:Rectángulo}}, {{ui:Círculo}}, {{ui:Arco}}, {{ui:Punto}}, {{ui:Línea de eje}}, {{ui:Redondear}}, {{ui:Cota}}, {{ui:Construcción}} | Boceto abierto jave |
| Elementos | {{ui:Extruir}}, {{ui:Cortar}}, {{ui:Revolución}}, {{ui:Agujero}}, {{ui:Lineal}}, {{ui:Circular}}, {{ui:Espejo}}, {{ui:Redondear}}, {{ui:Chaflán}}, {{ui:Cáscara}}, {{ui:Más}} (menú: revolución corte, Plano, Eje, Punto, Barrido, Loft, Borrador) | Pieza-pe, boceto térã plano abierto ndaipóri. Redondear ha Chaflán borde recto mokõi plano cara-pe; Cáscara ha Borrador plano cara-pe. Barrido ha Loft ko versión ndojapói (núcleo exacto oiporu); emarka jave ohechauka |
| Elementos | {{ui:Listo}} | Borde térã cara filete, chaflán, cáscara térã borrador elegí jave |
| Plano | {{ui:Plano}} | Pieza-pe (sólido oguereko jave oporu) |
| Plano | {{ui:Referencia}}, {{ui:Marco}}, {{ui:Acabado}}, {{ui:Detalle}}, {{ui:PDF}}, {{ui:Atrás}} | Solo plano hoja-pe |
| Ensamblaje | {{ui:Ensamblaje}} | Pieza-pe (sólido oguereko jave oporu) |
| Ensamblaje | {{ui:Agregar copia}}, {{ui:Insertar}}, {{ui:Unión}}, {{ui:Interferencia}}, {{ui:Editar pieza}}, {{ui:Cerrar}} | Ensamblaje-pe solo |
| Ensamblaje | {{ui:Atrás}} | Ensamblaje-gui pieza editando jave |
| Editar | {{ui:Deshacer}}, {{ui:Rehacer}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Más}} (menú: Cortar, Copiar, Pegar, Pegar en el mismo lugar, Duplicar, Eliminar, Seleccionar todo, Deseleccionar todo) | Opavavépe; elemento boceto, historia térã ensamblaje ojapo |
| Vista | {{ui:Ajustar}}, {{ui:Normal a}}, {{ui:Vistas}} (menú: Medir, Propiedades de masa, Corte, Borrador, Cebra, Curvatura, {{ui:Planos base}}, upéi Isométrica, Frente, Atrás, Superior, Inferior, Derecha, Izquierda) | Opavavépe |

Botón puntero oñemoʼã ohechauka mba'e ojapo ha tecla. Gris botón ndojeporuvéi: boceto abierto jave elemento botón, térã ensamblaje mokõi pieza ndojoaʼỹ rire {{ui:Unión}}.

{{ui:Más}} menú Editar grupo-pe cada acción tecla ndive ohechauka. Copiar ha pegar mba'e ojapo nde oikóva rehe; ehecha [Copiar, pegar y duplicar](topic:copy-paste). Gris elemento puntero ndojapo ojehechauka.

{{ui:Exportar}} menú oguereko {{ui:STL, para impresión 3D}}, {{ui:3MF, para impresión 3D}}, {{ui:STEP AP242 (sólido exacto)}}, {{ui:STEP AP214 (sólido exacto)}}, {{ui:STEP (facetado, núcleo de malla)}}, {{ui:STEP AP214 (facetado, núcleo de malla)}}, {{ui:DXF del boceto o de la cara plana}} ha {{ui:Plano (PDF): vistas, corte, detalle, GD&T}}. STEP exacto items cara redonda superficie verdadero-pe oguardá; facetado items facetas-pe.

## Historia (izquierda)

Panel izquierda pieza elementos historia, PartCraft árriba abajo ojapo lista.

- Título pieza nombre ("Part1" ojambue peve).
- **Plano frontal**, **Plano superior** ha **Plano derecho** primero. Emarka elegí; vista-pe ojehecha.
- Ojapo elementos ojapo orden-pe. Boceto elemento oporu ohechauka elemento ryepýpe.
- Fila derecha bandera estado:

| Bandera | Mba'épa hague |
|---|---|
| (nada) | Ojapo, boceto totalmente definido |
| − | Boceto subdefinido (ojapo ojeitýi) |
| + | Boceto sobredefinido |
| ⚠ | Ojapo, advertencia (mayordomo ohechauka) |
| ⚠ error | Elemento fracasó. Mayordomo ohechauka térã emarka |
| ⚠ no construido | Elemento ambue ndaipóri térã fracasó |
| desactivado | Suprimido |

- Elemento número principal nombre rire ohechauka, ejemplo "25 mm" Extruir-pe, "Ø6.6 thru" agujero-pe. Número mboyve click, térã {{key:F2}} fila-pe, ojambue. Ehecha [Cambiar tamaños](topic:change-sizes).
- Elemento emarka derecha editar. Boceto mboyve click abrir.
- Rollback jave, **Barra de rollback · avanzar** fila lista-pe. Ariba ndaipóri elemento gris, ndojapóiva.
- Fila ojerohory, {{key:Up}} ha {{key:Down}} fila-pe oho, {{key:Alt+Up}} / {{key:Alt+Down}} elemento ojapo historia oikóva.

Ensamblaje-pe mismo panel **Piezas** (primero "anclada") ha **Uniones** ohechauka.

### Datos pieza

Historia rehe, **Pieza** caja sólido **Volumen**, **Área superficial**, **Tamaño (X × Y × Z)**, **Agujeros pasantes**, **Cuerpos**, **Triángulos**, **Elementos** número ha **Fallando** ohechauka. Volumen ha área malla núcleo facetado sólido, curva redonda rehe apenas kuarahy'ỹ (ehecha [Elementos y sus opciones](topic:features#curves-resolution)).

Ensamblaje-pe caja **Ensamblaje**-pe: Piezas, Instancias, Uniones, No unido ha Interferencia.

## Vista 3D (mbytépe)

Vista sólido, planos base ha boceto ndoikói elemento-pe ohechauka.

Planos base pieza vacía jave lleno ohechauka. Sólido oguereko jave, tenue, ndaipóri pieza ndojapo, click pieza-pe. Boceto dónde elegí ({{ui:Boceto}} nada elegí) térã historia-pe elegí jave lleno. {{ui:Vistas}} › {{ui:Planos base}} opavavépe oculta; boceto elección jave ohechauka. PartCraft ko elección ohechakuaa.

- Pieza turn drag, derecho térã medio drag pan, rueda zoom puntero-pe. Ehecha [Teclado y mouse](topic:keyboard).
- Cara, borde térã plano puntero rehe ohecha: tenue. Click elegí. Cara entera, borde entero. {{key:Shift}}+click heta borde térã cara; marcado.
- 3D cubo ariba derecha pieza-gui rota: cara, borde térã esquina click lugar-pe ohecha, drag rotar, casa botón inicio. Ehecha [Cubo de vista](topic:view-cube).
- Extruir elegí naranja flecha final cara, Revolución curva flecha: drag profundidad térã ángulo cambia, térã caja ojambue. Ehecha [Cambiar tamaños](topic:change-sizes#drag-it-in-the-view).
- Pieza vacía, **Iniciar pieza** caja primero paso ohechauka.
- `.partcraft.json` térã `.partcraft-asm.json` archivo vista-pe emboʼi, ábrese. `.step`, `.stp`, `.stl`, `.obj`, `.3mf` térã `.3dm` archivo sólido cuerpo-pe ábrese.

### Borde térã cara elegí jave

{{ui:Redondear}}, {{ui:Chaflán}} térã {{ui:Cáscara}} nada elegí jave (térã {{ui:Seleccionar aristas}} elemento-pe), pieza ojapo mboyve ohechauka. Borde térã cara click agrega térã quita; marca ohechauka. {{ui:Listo}} térã {{key:Esc}} finaliza. Ehecha [Redondear, biselar y ahuecar](topic:fillet-chamfer-shell).

### Plano hoja-pe

{{ui:Plano}} 3D vista A3 plano hoja-pe cambia. Rueda zoom, derecho térã medio drag pan, {{key:F}} ajuste. Ehecha [Ojapo plano](topic:drawing-pdf).

### Boceto abierto jave

Vista boceto plano frente-pe, 2D boceto capa vista ariba. Pieza solo boceto mboyve ojapo elemento ohechauka. Strip ariba izquierda boceto estado ("Totalmente definido", "Subdefinido · 3 grados de libertad" ha ambue) ha nombre ohechauka, ejemplo "Boceto2 sobre una cara de Extruir1".

## Propiedades panel (derecha)

Panel derecha elegí ohechauka, título nombre:

- **Pieza** (nada elegí): pieza **Nombre** ha **Curvas** ajuste.
- Plano: {{ui:Boceto sobre él}} botón.
- **Cara**: tipo (Cara plana, Cilindro radio ha eje ndive, Cono, Esfera térã Toro), área, elemento ojapóva ha cara plana-pe {{ui:Boceto sobre esta cara}}, {{ui:Normal a}}, {{ui:Exportar cara como DXF}}, {{ui:Extruir desde ella}}, {{ui:Cortar hacia dentro}} ha {{ui:Agujero aquí}} (ehecha [Empujar o tirar cara entera](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Borde**: tipo (recto, círculo centro ha radio ndive, térã curva), largo ha mokõi cara entre (ejemplo "Extruir1 cara final y Extruir1 lado") ha {{ui:Redondear}} ha {{ui:Chaflán}} botón.
- {{key:Shift}} ndive heta borde térã cara elegí: cuántos, {{ui:Redondear}} ha {{ui:Chaflán}} borde-pe, ha {{ui:Limpiar}}.
- Elemento: número ha opción, boceto dimensión, upéi {{ui:Suprimir}}, {{ui:Retroceder hasta aquí}}, {{ui:Subir}}, {{ui:Bajar}}, {{ui:Eliminar}} ha **Nombre**.
- Boceto abierto: estado, elección relación, relación ha dimensión lista, **Agregar por coordenadas**, {{ui:Salir del boceto}}, {{ui:Ajustar}} ha {{ui:Exportar como DXF}}.
- Plano hoja-pe: sección ha detalle ajuste, térã GD&T símbolo elegí.
- Ensamblaje-pe: ensamblaje, pieza elegí térã unión elegí.

Cada número caja {{key:Enter}} térã {{key:Tab}} ojapo, térã click fuera. Pieza ojapo máma; OK botón ndoguereko. {{key:Mod+Z}} atrás.

## Estado barra (abajo)

- Izquierda, puntero coordenadas boceto-pe (boceto abierto jave).
- Mbytépe, mensaje: mba'e ojapo primero, mba'e ndojapói. Nada ndojapói jave ehecha.
- Derecha cerca, núcleo chip: versión-pe "Núcleo de malla". Ehecha [Núcleo de malla](topic:solid-kernels).
- Derecha, chip: "Reconstruyendo…" pieza reconstruye jave, upéi "Reconstruido en … ms" opa oiko jave, térã "1 elemento fallando". Ensamblaje-pe "Colocado en … ms" térã unión problema número.

Ambue ehecha [Ojepyrũ manual Illustrate-pe](topic:illustrate): espacio manual ensamblaje pieza ha ensamblaje-gui.

## Pantalla estrecha-pe

760 píxel peve, teléfono-pe: vista pantalla ryepýpe, herramienta barra fila sideway ojeʼe, panel hoja barra mbytépe. {{ui:Herramientas}} barra oculta, {{ui:Trasladar}} abajo. Ehecha [Trackpad, táctil y pantalla pequeña](topic:trackpad-and-touch).
