---
title: Ajustes de PartCraft
summary: Elija qué botón del ratón gira la vista, haga que el desplazamiento del trackpad gire y desplace la pieza, active o desactive las relaciones automáticas al dibujar bocetos y defina cuántos hilos usan los solvers de simulación.
keywords: configuración, preferencias, opciones, ratón, botón central, botón de la rueda, órbita, girar, rotar, trackpad, panel táctil, desplazamiento, deslizar, pellizcar, relaciones, restricciones, relaciones automáticas, ajustar, coincidente, hilos, hilos del solver, núcleos, procesadores, multihilo, resolver más rápido, paralelo
from: 759edcaf
---

Abra {{ui:Configuración}} con el engranaje de la barra de la aplicación o con {{key:Mod+,}}. La primera pestaña, {{ui:PartCraft}}, contiene los ajustes propios de esta aplicación; {{ui:General}} contiene los que comparten todas las aplicaciones de CadCraft (tema, barra de herramientas, paneles). Los ajustes de PartCraft existen solo en la aplicación: los cambia aquí, y este navegador los recuerda. {{ui:Restablecer la configuración de PartCraft}} devuelve todo al inicio.

## Girar la vista

- **Botón izquierdo** (el inicial): arrastre con el botón izquierdo para girar la pieza; arrastre con el botón derecho o el central para desplazarla.
- **Botón central**: pulse la rueda y arrastre para girar la pieza; mantenga pulsado {{key:Shift}} (o {{key:Ctrl}}, o ⌘) con el botón central, o arrastre con el botón derecho, para desplazar. El botón izquierdo solo selecciona caras, aristas y planos, así que un clic que se mueva un poco nunca gira la pieza. Muchos programas CAD funcionan así.

La rueda hace zoom hacia el puntero en ambos casos. En un boceto, los botones derecho y central desplazan como antes.

## Desplazamiento: rueda del ratón o trackpad

- **Determinar automáticamente** (el inicial): PartCraft observa el desplazamiento. El desplazamiento lateral o de grano fino, como el que envía un trackpad, gira la pieza; los pasos completos de la rueda hacen zoom.
- **Rueda del ratón**: desplazar siempre hace zoom hacia el puntero.
- **Trackpad**: deslice con dos dedos para girar la pieza, mantenga pulsado {{key:Shift}} y deslice para desplazar, pellizque para hacer zoom. En un boceto, deslizar con dos dedos desplaza el boceto.

Un pellizco hace zoom en todas las opciones. Si "Determinar automáticamente" no acierta con su ratón o trackpad, elija el que tiene. Más información en [Trackpad, táctil y pantallas pequeñas](topic:trackpad-and-touch).

## Bocetos: añadir relaciones al dibujar

**Añadir relaciones al dibujar** (activado al inicio): un clic que se ajusta a un punto hace que el nuevo punto sea coincidente con él, un clic sobre una curva pone el punto sobre esa curva, y una línea trazada casi horizontal o vertical pasa a ser horizontal o vertical. Consulte [Relaciones y cotas](topic:relations-dimensions).

Desactívelo cuando quiera colocar geometría cerca de otra sin unirla. El puntero sigue ajustándose a puntos y curvas, pero no se une nada: las líneas trazadas en cadena no comparten sus extremos, así que un arrastre puede separarlas. Añada usted mismo las relaciones que quiera desde el panel derecho. Un perfil cerrado sigue extruyéndose si sus extremos se encuentran.

:::note
El ajuste solo cambia lo que añade el nuevo dibujo. Las relaciones que ya existen en un boceto se mantienen, y la herramienta Empalme sigue creando su arco tangente y su radio.
:::

## Bocetos: acotar mientras dibuja

**Acotar mientras dibuja** (activado al inicio): mientras se dibuja una línea, un rectángulo, un círculo o un arco, escribir un número rellena el cuadro de tamaño junto al puntero ({{key:Tab}} pasa al cuadro siguiente), y {{key:Enter}} dibuja la forma con ese tamaño, con una cota dirigente por cada tamaño que escribió. Desactivado: escribir un número mientras dibuja no hace nada, y las formas se dibujan solo con clics. Consulte [Escribir el tamaño mientras dibuja](topic:sketch-basics#type-the-size-as-you-draw).

## Indicador de esquina

Lo que aparece en la esquina de la vista 3D: **Cubo de vista** (el inicial; arriba a la derecha: haga clic en una cara, arista o vértice para mirar desde allí, arrástrelo para orbitar, arrastre su anillo de brújula para girar el modelo), **Icono de ejes** (una pequeña marca X, Y, Z abajo a la izquierda que gira con la vista: X en rojo, Y en verde, Z en azul) o **Ninguno**. Ninguno de los dos se muestra mientras dibuja bocetos o en la hoja de dibujo. Consulte [El cubo de vista](topic:view-cube).

## Hilos del solver

Cuántos hilos pueden usar los solvers de simulación. **Automático** (el inicial) usa uno menos que los procesadores lógicos del equipo (como máximo 16), para que la página siga respondiendo mientras se resuelve un estudio; o elija un número. Los estudios grandes de vóxeles, pandeo, tensión a lo largo del tiempo y flujo se resuelven más rápido con varios hilos (unas 2.0× con 4 hilos para 80,000 cubos en nuestras mediciones, más en un equipo inactivo). Los modelos de menos de unas 20,000 incógnitas siguen en un hilo, porque iniciar los hilos cuesta más de lo que ahorran. Una resolución con hilos da la misma respuesta que con un hilo (salvo redondeo: las sumas se hacen en otro orden). Los resultados de cada estudio muestran **N hilos** o **1 hilo**, con el motivo, en **Solver**.

Los hilos requieren que la página esté **aislada de origen cruzado** (el navegador solo permite a los workers compartir memoria en ese caso). La página de laboratorio lo está; donde no lo esté, el ajuste lo indica ("Esta página no está aislada de origen cruzado, así que los solvers usan un hilo independientemente de lo elegido aquí.") y cada resolución usa un hilo. Todo lo demás funciona igual, y las respuestas son las mismas.

Los estudios de flujo laminar también usan los hilos (unas 2.5× con 4 hilos para 54,000 celdas de fluido, la misma respuesta hasta el último dígito). El solver de tetraedros cuadráticos y la transferencia de calor se ejecutan en un hilo: en nuestro equipo de pruebas resultaron más lentos con hilos (sus solvers están limitados por la velocidad de la memoria y por un paso que no se puede dividir).

### En su propio servidor web

Si ejecuta PartCraft desde su propio servidor, funciona tal como lo sirve. Para los hilos del solver, haga que el servidor envíe dos cabeceras con la página de PartCraft:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

En Apache, en el `.htaccess` de la carpeta (necesita mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

En nginx, en el `location` que sirve PartCraft:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Recargue la página: Configuración › Hilos del solver ofrecerá entonces **Automático** con el número de procesadores de su equipo. La segunda cabecera hace que el navegador rechace todo lo que la página cargue de otro sitio que no lo permita, lo cual está bien para PartCraft por sí solo (carga todo desde su propia carpeta).
