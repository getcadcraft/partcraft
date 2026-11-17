---
title: Hacer un dibujo con vistas, sección y GD&T
summary: Abra la hoja de dibujo, agregue una sección y una vista de detalle, coloque referencias, marcos de control de tolerancias geométricas y símbolos de acabado superficial, elija el tamaño de la hoja, complete el cajetín y las revisiones, y exporte la hoja como PDF.
keywords: tabla de agujeros, gráfico de agujeros, posiciones de agujeros, etiquetas, dibujo, dibujo 2D, hoja, tamaño de hoja, a4, a3, a2, a1, a0, ansi, cajetín, revisión, bloque de revisiones, número de dibujo, material, pdf, vistas, ortográfica, tercer diedro, isométrica, vista de sección, vista de detalle, gd&t, referencia, marco de control, tolerancia, posición, planitud, acabado superficial, rugosidad, imprimir
from: 39e944c0
---

PartCraft crea una hoja de dibujo a partir de la pieza: vistas frontal, superior y derecha en proyección de tercer diedro, una vista isométrica, dimensiones generales y un cajetín en una hoja de A4 a A0 o ANSI A a E. Sobre eso puede agregar una sección, una vista de detalle y símbolos GD&T. La hoja se actualiza cuando cambia la pieza, y sus ajustes se guardan en el archivo de la pieza.

## Abra la hoja de dibujo

1. Construya la pieza. (Si no hay nada construido: "Construya primero un sólido y luego haga su dibujo.")
2. Elija {{ui:Dibujo}} en la barra de herramientas.

La vista 3D se reemplaza por la hoja. La barra de herramientas muestra {{ui:Referencia}}, {{ui:Marco}}, {{ui:Acabado}}, {{ui:Detalle}}, {{ui:PDF}} y {{ui:Volver}}, y el panel derecho lleva el encabezado **Dibujo**. La barra de estado indica cómo se generaron las vistas: "Dibujo (las curvas se dibujan como facetas). Referencia, Marco y Acabado colocan GD&T en una vista; el panel define una sección y una vista de detalle." Las vistas se dibujan a partir de las facetas del núcleo de malla, así que los bordes redondeados son tramos rectos cortos; los arcos verdaderos requieren un núcleo exacto, que esta versión no tiene.

Muévase por la hoja: gire la rueda para acercar, arrastre con el botón derecho o el central para desplazarse, y presione {{key:F}} para ajustar la hoja a la ventana. Con la hoja enfocada, {{key:Plus}} y {{key:Minus}} hacen zoom, y {{key:Shift}} con las teclas de flecha desplaza la vista.

Elija {{ui:Volver}}, {{ui:Volver al modelo}} o presione {{key:Esc}} (sin nada seleccionado y sin herramienta activa) para regresar al modelo 3D.

## Qué hay en la hoja

- **La hoja que elija**, horizontal (A3 salvo que elija otra), con marco y un **cajetín**: título, empresa, número de dibujo, revisión, material, dibujó / revisó / aprobó, fecha, escala, tamaño de hoja, "Unidades: milímetros · Proyección en tercer diedro", y si las vistas son exactas o facetadas.
- Un **bloque de revisiones** en la esquina superior derecha, una vez que agregue una revisión.
- **Vistas frontal, superior y derecha**: la vista superior arriba de la frontal, y la vista derecha a su derecha. Aristas ocultas en línea discontinua.
- Una **vista isométrica** donde haya espacio.
- **Dimensiones generales**: ancho y alto en la vista frontal, profundidad en la vista superior.
- Una **escala** común para las vistas principales de la serie ISO (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), elegida para que quepan.

## Elija el tamaño de la hoja

En la hoja de dibujo, sin nada seleccionado, elija {{ui:Hoja}} en el panel derecho: **A4, A3, A2, A1, A0** (ISO 216) o **ANSI A, B, C, D, E** (de 11 × 8.5 a 44 × 34 pulg). Las vistas se reacomodan a la mayor escala ISO que quepa, así que una hoja más grande puede mostrar la pieza más grande.

## Complete el cajetín

Los campos del **Cajetín** del panel derecho van directo a la hoja: {{ui:Título}}, {{ui:No. de dibujo}}, {{ui:Revisión}}, {{ui:Empresa}}, {{ui:Dibujó}}, {{ui:Revisó}}, {{ui:Aprobó}}, {{ui:Fecha}} (año-mes-día), {{ui:Tolerancia general}} y {{ui:Acabado}} (los dos últimos se imprimen justo encima del cajetín). Escriba en un campo y presione {{key:Enter}} o haga clic fuera. Un campo vacío deja su celda en blanco, excepto:

- **Título** muestra el nombre de la pieza hasta que escriba uno.
- **Fecha** muestra la fecha de hoy hasta que escriba una.
- **Revisión** muestra la revisión más reciente de la lista hasta que escriba una.

**Material** viene de la pieza: haga clic en un espacio vacío del modelo y elija {{ui:Material}} en el panel de la pieza. El mismo material da a las propiedades de masa de Medir su densidad.

## Agregue revisiones

En **Revisiones**, haga clic en {{ui:Agregar revisión}}. Cada fila nueva toma la siguiente letra (A, B, C …; después de Z viene AA) y la fecha de hoy. Escriba qué cambió y quién hizo el cambio. {{ui:Eliminar}} quita una fila. El bloque de revisiones de la esquina superior derecha de la hoja las enumera, de la más antigua a la más reciente, hasta 20.

El tamaño de la hoja, el cajetín, las revisiones y el material se guardan en el archivo de la pieza, y cada cambio es un paso de {{ui:Deshacer}}.

## Agregue una vista de sección

La pieza se corta con un plano y el corte se sombrea. Como las demás vistas, la sección se dibuja a partir de facetas, así que los bordes redondeados son tramos rectos cortos.

1. En el panel derecho, defina **Sección A-A** como **De la vista frontal**, **De la vista superior** o **De la vista derecha**.
2. La sección aparece en la hoja, sombreada donde el corte atraviesa material, con la línea de corte y sus flechas "A" en la vista de la que se toma.
3. Defina **Corte en (mm)** para mover el plano de corte. Empieza a través de la mitad de la pieza.

Defina **Sección A-A** de nuevo en **Ninguna** para quitarla.

## Agregue una vista de detalle

1. Defina **Detalle B** en la vista que quiere ampliar (o elija {{ui:Detalle}} en la barra de herramientas).
2. Haga clic en el centro del área a ampliar, en esa vista. Un círculo con la letra "B" la marca, y el "Detalle B" ampliado aparece en la hoja con su propia escala, por ejemplo "Detalle B (2:1)".
3. Defina **Radio del detalle (mm)** para el tamaño del círculo y **Escala del detalle** para la ampliación: 2, 4, 5 o 10 veces la escala de la hoja.

Un detalle puede tomarse de las vistas frontal, superior, derecha o de sección, no de la isométrica. Si no hay espacio para todas las vistas, el panel dice "Sin espacio en la hoja para: detalle. Haga el detalle más pequeño o quite una vista."

## Agregue una tabla de agujeros

Una tabla de agujeros enumera los agujeros de la pieza con sus posiciones, para taladrado o CNC: elija **Tabla de agujeros** › **De la vista superior** (o frontal, o derecha) en el panel.

- Cada agujero visto de frente en esa vista recibe una etiqueta a su lado: **A1**, **A2** … para el primer tamaño, **B1** … para el siguiente.
- La tabla enumera cada etiqueta, su **X** y su **Y** en milímetros, y su tamaño: "Ø14 PASANTE", "Ø6.6 × 10 PROFUNDO", un avellanado o un escariado, o la anotación de rosca de un agujero roscado.
- X y Y se miden desde la esquina inferior izquierda del contorno de la vista, marcada **X0 Y0** en la hoja.
- Se incluyen los agujeros creados con patrones. Los agujeros que no son perpendiculares a la vista se cuentan en el panel y se dejan fuera de la tabla.

La tabla va en un espacio libre de la hoja y en el PDF.

## Coloque símbolos GD&T y de acabado superficial

1. Elija {{ui:Referencia}}, {{ui:Marco}} (un marco de control de tolerancias geométricas) o {{ui:Acabado}} (un símbolo de acabado superficial).
2. Haga clic en el punto de una vista donde se acopla. Se ajusta a la línea dibujada más cercana, a 2.5 mm.
3. El símbolo aparece con una directriz, seleccionado, y el panel derecho muestra sus ajustes.

Arrastre un símbolo para moverlo; su directriz se mantiene en el punto. Con un símbolo seleccionado, las teclas de flecha lo mueven 1 mm. {{key:Delete}} o {{key:Backspace}} (o {{ui:Eliminar}} en el panel) lo quita; {{ui:Listo}} o {{key:Esc}} lo deselecciona. Cada cambio está en la lista de deshacer.

### Referencia

**Letra**: de la A a la Z, sin I, O ni Q (se confunden con 1, 0 y O). Cada nueva referencia toma la siguiente letra libre.

### Marco de control de tolerancias geométricas

| Ajuste | Opciones |
|---|---|
| **Tolerancia** | Rectitud, Planitud, Circularidad, Cilindricidad, Perfil de una línea, Perfil de una superficie, Perpendicularidad, Angularidad, Paralelismo, Posición, Concentricidad y Simetría (ambas eliminadas en Y14.5-2018, y marcadas así), Oscilación circular, Oscilación total |
| **Zona (mm)** | El valor de la tolerancia, por defecto 0.1 |
| **Zona de diámetro (⌀)** | Para características con zona cilíndrica; activa por defecto en Posición |
| **Material** | RFS (ninguno), MMC (Ⓜ), LMC (Ⓛ), donde la característica lo permita |
| **Referencia primaria / secundaria / terciaria** | Hasta tres letras de referencia, cada una con un **modificador …** (MMB, LMB) donde se permita |

PartCraft verifica el marco contra las reglas de ASME Y14.5 y dice qué está mal en la parte superior del panel, por ejemplo "Planitud es una tolerancia de forma: no admite referencias." o "Posición necesita al menos una referencia." La línea **Se lee** describe el marco con palabras.

### Acabado superficial

| Ajuste | Opciones | Por defecto |
|---|---|---|
| **Ra (µm)** | Promedio de rugosidad | 1.6 |
| **Proceso** | cualquier proceso, mecanizado, sin remoción de material | mecanizado |
| **Nota** | Hasta 40 caracteres, como una dirección de marca o un proceso | |

Sin nada seleccionado, el panel enumera **Notas en la hoja**, cada una con **Seleccionar**.

## Exporte el PDF

Elija {{ui:PDF}} en la barra de herramientas, {{ui:Exportar PDF}} en el panel, o {{ui:Exportar}} y luego {{ui:Dibujo (PDF): vistas, sección, detalle, GD&T}} desde el modelo. El PDF se descarga como `<part name> - drawing.pdf`, y la barra de estado enumera lo que contiene.

Imprímalo en "Tamaño real", en papel del tamaño de la hoja, para mantener la escala real.

## Límites

| Aún no construido | Hágalo hoy así |
|---|---|
| Cotas distintas de las tres dimensiones generales | Agréguelas en el PDF con una aplicación de anotaciones, o exporte un croquis o una cara como DXF y acótelo en un programa CAD 2D |
| Más de una sección o detalle; vistas interrumpidas, auxiliares y proyectadas | No disponible |
| Proyección en primer diedro, vistas móviles, hojas verticales | Tercer diedro, disposición automática, horizontal |
| Notas de texto libre y tablas en la hoja (aparte de los cajetines de título y revisión) | Use la nota de acabado, o agregue texto en el PDF |
| Dibujos de ensamblajes | No disponible |

Los caracteres fuera del conjunto de Europa occidental se imprimen como "?" (el PDF usa la fuente Helvetica integrada del lector). Los símbolos GD&T se dibujan como líneas, así que se imprimen en cualquier lector.

## Deje que la hoja lo haga

- **Hoja › Automático** elige el papel por usted: la mayor escala estándar hasta 1:1, en la hoja de tamaño A más pequeña que contenga las vistas a esa escala (la lista indica cuál tomó).
- **Acotar los agujeros** acota los agujeros en la vista que más agujeros ve de frente: una marca de centro en cada uno, una anotación por tamaño ("2× Ø6 PASANTE" con directriz), y sus posiciones medidas desde la esquina inferior izquierda de la vista. El ancho, el alto y la profundidad generales siempre están.
