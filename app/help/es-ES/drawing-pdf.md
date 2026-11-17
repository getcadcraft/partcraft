---
title: Crear un dibujo con vistas, una sección y GD&T
summary: Abra la hoja de dibujo, añada una sección y una vista de detalle, coloque referencias, marcos de control de tolerancias geométricas y símbolos de acabado superficial, elija el tamaño de hoja, rellene el cajetín y las revisiones, y exporte la hoja como PDF.
keywords: tabla de agujeros, tabla de taladros, posiciones de agujeros, etiquetas, dibujo, dibujo 2D, hoja, tamaño de hoja, a4, a3, a2, a1, a0, ansi, cajetín, revisión, cuadro de revisiones, número de plano, material, pdf, vistas, ortogonal, tercer diedro, isométrica, vista de sección, vista de detalle, gd&t, referencia, marco de control de tolerancias, tolerancia, posición, planitud, acabado superficial, rugosidad, cajetín, imprimir
from: 39e944c0
---

PartCraft crea una hoja de dibujo a partir de la pieza: vistas frontal, superior y derecha en proyección del tercer diedro, una vista isométrica, dimensiones generales y un cajetín en una hoja de A4 a A0 o ANSI A a E. Además, puede añadir una sección, una vista de detalle y símbolos GD&T. La hoja se actualiza cuando cambia la pieza, y sus ajustes se guardan en el archivo de la pieza.

## Abrir la hoja de dibujo

1. Genere la pieza. (Si no hay nada generado: «Cree primero un sólido y después su dibujo».)
2. Elija {{ui:Drawing}} en la barra de herramientas.

La vista 3D se sustituye por la hoja. La barra de herramientas muestra {{ui:Datum}}, {{ui:Frame}}, {{ui:Finish}}, {{ui:Detail}}, {{ui:PDF}} y {{ui:Back}}, y el panel derecho se titula **Dibujo**. La barra de estado indica cómo se generaron las vistas: «Dibujo (las curvas se dibujan como facetas). Referencia, Marco y Acabado colocan GD&T en una vista; el panel define una sección y una vista de detalle.» Las vistas se dibujan a partir de las facetas del núcleo de malla, de modo que los bordes redondeados son pequeños tramos rectos; los arcos verdaderos necesitan un núcleo exacto, que esta versión no tiene.

Para moverse por la hoja: gire la rueda para acercar, arrastre con el botón derecho o central para desplazarse, y pulse {{key:F}} para ajustar la hoja a la ventana. Con la hoja enfocada, {{key:Plus}} y {{key:Minus}} hacen zoom, y {{key:Shift}} junto con las teclas de flecha desplaza la vista.

Elija {{ui:Back}}, {{ui:Back to the model}} o pulse {{key:Esc}} (sin nada seleccionado y sin herramienta activa) para volver al modelo 3D.

## Qué hay en la hoja

- **La hoja que elija**, en horizontal (A3 salvo que elija otra), con un borde y un **cajetín**: título, empresa, número de plano, revisión, material, dibujado / revisado / aprobado por, fecha, escala, tamaño de hoja, «Unidades: milímetros · Proyección del tercer diedro», y si las vistas son exactas o facetadas.
- Un **cuadro de revisiones** en la esquina superior derecha, una vez añadida una revisión.
- **Vistas frontal, superior y derecha**: la vista superior encima de la frontal, y la vista derecha a su derecha. Las aristas ocultas se representan con trazos discontinuos.
- Una **vista isométrica** cuando hay espacio.
- **Dimensiones generales**: anchura y altura en la vista frontal, profundidad en la vista superior.
- Una **escala** común para las vistas principales, de la serie ISO (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), elegida para que quepan.

## Elegir el tamaño de hoja

En la hoja de dibujo, sin nada seleccionado, elija {{ui:Sheet}} en el panel derecho: **A4, A3, A2, A1, A0** (ISO 216) o **ANSI A, B, C, D, E** (de 11 × 8,5 a 44 × 34 pulgadas). Las vistas se recolocan a la escala ISO más grande que quepa, de modo que una hoja más grande puede mostrar la pieza más grande.

## Rellenar el cajetín

Los campos **Cajetín** del panel derecho pasan directamente a la hoja: {{ui:Title}}, {{ui:Drawing no.}}, {{ui:Revision}}, {{ui:Company}}, {{ui:Drawn by}}, {{ui:Checked by}}, {{ui:Approved by}}, {{ui:Date}} (año-mes-día), {{ui:General tolerance}} y {{ui:Finish}} (los dos últimos se imprimen justo encima del cajetín). Escriba en un recuadro y pulse {{key:Enter}} o haga clic fuera. Un recuadro vacío deja en blanco su celda, salvo en:

- **Title**, que muestra el nombre de la pieza hasta que escriba uno.
- **Date**, que muestra la fecha de hoy hasta que escriba una.
- **Revision**, que muestra la revisión más reciente de la lista hasta que escriba una.

El **material** procede de la pieza: haga clic en un espacio vacío del modelo y después elija {{ui:Material}} en el panel Pieza. El mismo material da a las propiedades de masa de Measure su densidad.

## Añadir revisiones

En **Revisions**, haga clic en {{ui:Add revision}}. Cada nueva fila toma la siguiente letra (A, B, C …; después de Z viene AA) y la fecha de hoy. Escriba qué ha cambiado y quién lo cambió. {{ui:Delete}} elimina una fila. El cuadro de revisiones de la esquina superior derecha de la hoja las enumera, de la más antigua a la más reciente, hasta 20.

El tamaño de hoja, el cajetín, las revisiones y el material se guardan en el archivo de la pieza, y cada cambio es un paso de {{ui:Undo}}.

## Añadir una vista de sección

La pieza se corta con un plano y el corte se rellena con una trama. Como las demás vistas, la sección se dibuja a partir de facetas, de modo que los bordes redondeados son tramos rectos cortos.

1. En el panel derecho, ponga **Sección A-A** en **De la vista frontal**, **De la vista superior** o **De la vista derecha**.
2. La sección aparece en la hoja, rellenada allí donde el corte atraviesa material, con la línea de corte y sus flechas «A» en la vista de la que se toma.
3. Ponga **Corte en (mm)** para mover el plano de corte. Empieza por el centro de la pieza.

Ponga **Sección A-A** de nuevo en **Ninguna** para eliminarla.

## Añadir una vista de detalle

1. Ponga **Detalle B** en la vista que desea ampliar (o elija {{ui:Detail}} en la barra de herramientas).
2. Haga clic en el centro de la zona que desea ampliar, en esa vista. Un círculo con la etiqueta «B» la marca, y el «Detalle B» ampliado aparece en la hoja con su propia escala, por ejemplo «Detalle B (2:1)».
3. Ponga **Radio del detalle (mm)** para el tamaño del círculo y **Escala del detalle** para la ampliación: 2, 4, 5 o 10 veces la hoja.

Un detalle puede tomarse de las vistas frontal, superior, derecha o de sección, pero no de la isométrica. Si no hay espacio para todas las vistas, el panel muestra «No hay espacio en la hoja para: detalle. Haga el detalle más pequeño o quite una vista».

## Añadir una tabla de agujeros

Una tabla de agujeros enumera los agujeros de la pieza con sus posiciones, para taladrado o CNC: elija **Tabla de agujeros** › **De la vista superior** (o frontal, o derecha) en el panel.

- Cada agujero visto de frente en esa vista recibe una etiqueta junto a él: **A1**, **A2** … para el primer tamaño, **B1** … para el siguiente.
- La tabla enumera cada etiqueta, sus **X** e **Y** en milímetros, y su tamaño: «Ø14 THRU», «Ø6.6 × 10 DEEP», un avellanado o un avellanado cónico, o la designación de rosca de un agujero roscado.
- X e Y se miden desde la esquina inferior izquierda del contorno de la vista, marcada como **X0 Y0** en la hoja.
- Se incluyen los agujeros creados por patrones. Los agujeros que no son perpendiculares a la vista se cuentan en el panel y se excluyen de la tabla.

La tabla va en una zona libre de la hoja y en el PDF.

## Colocar símbolos GD&T y de acabado superficial

1. Elija {{ui:Datum}}, {{ui:Frame}} (un marco de control de tolerancias geométricas) o {{ui:Finish}} (un símbolo de acabado superficial).
2. Haga clic en el punto de una vista donde debe anclarse. Se ajusta a la línea dibujada más cercana, a menos de 2,5 mm.
3. El símbolo aparece con una línea de referencia, seleccionado, y el panel derecho muestra sus ajustes.

Arrastre un símbolo para moverlo; su línea de referencia permanece en el punto. Con un símbolo seleccionado, las teclas de flecha lo desplazan 1 mm. {{key:Delete}} o {{key:Backspace}} (o {{ui:Delete}} en el panel) lo elimina; {{ui:Done}} o {{key:Esc}} lo deselecciona. Cada cambio está en la lista de deshacer.

### Referencia

**Letra**: de A a Z, sin I, O ni Q (se leen como 1, 0 y O). Cada nueva referencia toma la siguiente letra libre.

### Marco de control de tolerancias geométricas

| Ajuste | Opciones |
|---|---|
| **Tolerancia** | Rectitud, Planitud, Circularidad, Cilindricidad, Perfil de una línea, Perfil de una superficie, Perpendicularidad, Inclinación, Paralelismo, Posición, Concentricidad y Simetría (ambas eliminadas en Y14.5-2018, y marcadas como tales), Batida circular, Batida total |
| **Zona (mm)** | El valor de la tolerancia, por defecto 0,1 |
| **Zona de diámetro (⌀)** | Para características con zona cilíndrica; activada por defecto en Posición |
| **Material** | RFS (ninguno), MMC (Ⓜ), LMC (Ⓛ), cuando la característica lo permite |
| **Referencia primaria / secundaria / terciaria** | Hasta tres letras de referencia, cada una con un **modificador …** (MMB, LMB) cuando se permite |

PartCraft comprueba el marco según las reglas de ASME Y14.5 e indica qué está mal en la parte superior del panel, por ejemplo «La planitud es una tolerancia de forma: no admite referencias.» o «La posición necesita al menos una referencia.» La línea **Lectura** explica el marco con palabras.

### Acabado superficial

| Ajuste | Opciones | Por defecto |
|---|---|---|
| **Ra (µm)** | Rugosidad media | 1,6 |
| **Proceso** | cualquier proceso, mecanizado, sin arranque de material | mecanizado |
| **Nota** | Hasta 40 caracteres, como una dirección de estrías o un proceso | |

Con nada seleccionado, el panel enumera las **Notas en la hoja**, cada una con **Seleccionar**.

## Exportar el PDF

Elija {{ui:PDF}} en la barra de herramientas, {{ui:Export PDF}} en el panel, o {{ui:Export}} y después {{ui:Drawing (PDF): views, section, detail, GD&T}} desde el modelo. El PDF se descarga como `<nombre de la pieza> - drawing.pdf`, y la barra de estado enumera lo que contiene.

Imprímalo a «Tamaño real» en papel del tamaño de la hoja para conservar la escala.

## Limitaciones

| Todavía no disponible | Qué hacer hoy |
|---|---|
| Cotas distintas de las tres dimensiones generales | Añadirlas en el PDF con una aplicación de anotaciones, o exportar un croquis o una cara como DXF y acotarlo en un programa CAD 2D |
| Más de una sección o detalle; vistas interrumpidas, auxiliares o proyectadas | No disponible |
| Proyección del primer diedro, vistas móviles, hojas en vertical | Tercer diedro, disposición automática, horizontal |
| Notas de texto libre y tablas en la hoja (salvo los cajetines de título y revisiones) | Use la nota de acabado, o añada texto en el PDF |
| Dibujos de ensamblajes | No disponible |

Los caracteres fuera del conjunto de Europa occidental se imprimen como «?» (el PDF usa la fuente Helvetica integrada del lector). Los símbolos GD&T se dibujan como líneas, de modo que se imprimen en cualquier lector.

## Dejar que la hoja lo haga

- **Hoja › Automático** elige el papel por usted: la mayor escala estándar hasta 1:1, en la hoja de tamaño A más pequeña que contenga las vistas a esa escala (la lista indica cuál tomó).
- **Acotar los agujeros** acota los agujeros en la vista que más agujeros ve de frente: una marca de centro en cada uno, una llamada por tamaño («2× Ø6 THRU» con línea de referencia), y sus posiciones medidas desde la esquina inferior izquierda de la vista. Las dimensiones generales de anchura, altura y profundidad siempre están presentes.
