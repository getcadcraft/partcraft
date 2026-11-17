---
title: Configuración de PartCraft
summary: Elija qué botón del ratón gira la vista, haga que un deslizamiento en el trackpad gire y encuadre la pieza, active o desactive las relaciones automáticas al croquizar y defina cuántos hilos usan los solucionadores de simulación.
keywords: configuración, preferencias, opciones, ratón, botón central, botón de la rueda, órbita, girar, trackpad, panel táctil, desplazamiento, deslizar, pellizcar, relaciones, restricciones, restricción automática, relaciones automáticas, referencia a objetos, coincidente, hilos, hilos del solucionador, núcleos, procesadores, multihilo, resolver más rápido, paralelo
from: 759edcaf
---

Abra {{ui:Settings}} con el engrane de la barra de la aplicación o pulse {{key:Mod+,}}. La primera pestaña, {{ui:PartCraft}}, contiene la configuración propia de esta aplicación; {{ui:General}} contiene la que comparten todas las aplicaciones de CadCraft (tema, barra de herramientas, paneles). La configuración de PartCraft existe solo en la aplicación: la cambia aquí y este navegador la recuerda. {{ui:Reset PartCraft settings}} devuelve todo a su valor inicial.

## Girar la vista

- **Botón izquierdo** (valor inicial): arrastre con el botón izquierdo para girar la pieza; arrastre con el botón derecho o el central para encuadrarla.
- **Botón central**: presione la rueda y arrastre para girar la pieza; mantenga {{key:Shift}} (o {{key:Ctrl}}, o ⌘) con el botón central, o arrastre con el botón derecho, para encuadrar. El botón izquierdo solo selecciona caras, aristas y planos, así que un clic que se mueve un poco nunca gira la pieza. Muchos programas de CAD funcionan así.

La rueda hace zoom hacia el puntero en ambos casos. En un croquis, los botones derecho y central encuadran como antes.

## Desplazamiento: rueda del ratón o trackpad

- **Detectar automáticamente** (valor inicial): PartCraft observa el desplazamiento. El desplazamiento lateral o fino, como el que envía un trackpad, gira la pieza; los pasos completos de la rueda hacen zoom.
- **Rueda del ratón**: el desplazamiento siempre hace zoom hacia el puntero.
- **Trackpad**: deslice con dos dedos para girar la pieza, mantenga {{key:Shift}} y deslice para encuadrar, pellizque para hacer zoom. En un croquis, un deslizamiento de dos dedos encuadra el croquis.

Un pellizco hace zoom en todas las opciones. Si "Detectar automáticamente" no acierta con su ratón o trackpad, elija el que tiene. Más en [Trackpad, pantalla táctil y pantallas pequeñas](topic:trackpad-and-touch).

## Croquizar: agregar relaciones mientras dibuja

**Agregar relaciones al dibujar** (activado al inicio): un clic que se ajusta a un punto hace que el nuevo punto sea coincidente con él, un clic sobre una curva pone el punto sobre esa curva, y una línea trazada casi horizontal o vertical se vuelve horizontal o vertical. Vea [Relaciones y cotas](topic:relations-dimensions).

Desactívela cuando quiera colocar geometría cerca de otra sin unirla. El puntero sigue ajustándose a puntos y curvas, pero nada se une: las líneas trazadas en cadena no comparten sus extremos, así que un arrastre puede separarlas. Agregue usted mismo las relaciones que desee desde el panel derecho. Un perfil cerrado sigue extruyéndose si sus extremos se encuentran.

:::note
La configuración solo cambia lo que agrega el nuevo dibujo. Las relaciones que ya existen en un croquis se conservan, y la herramienta Empalme sigue creando su arco tangente y su radio.
:::

## Croquizar: acotar mientras dibuja

**Acotar mientras dibuja** (activado al inicio): mientras se dibuja una línea, un rectángulo, un círculo o un arco, escribir un número llena el cuadro de tamaño junto al puntero ({{key:Tab}} pasa al siguiente cuadro), y {{key:Enter}} dibuja la forma con ese tamaño, con una cota controladora por cada tamaño que escribió. Desactivado: escribir un número mientras dibuja no hace nada, y las formas se dibujan solo con clics. Vea [Escriba el tamaño mientras dibuja](topic:sketch-basics#type-the-size-as-you-draw).

## Indicador de esquina

Lo que aparece en la esquina de la vista 3D: **Cubo de vistas** (el valor inicial; arriba a la derecha: haga clic en una cara, arista o vértice para mirar desde allí, arrástrelo para orbitar, arrastre su anillo de brújula para girar el modelo), **Icono de ejes** (un pequeño marcador X, Y, Z abajo a la izquierda que gira con la vista: X rojo, Y verde, Z azul) o **Ninguno**. Ninguno de los dos se muestra mientras croquiza o en la hoja de dibujo. Vea [El cubo de vistas](topic:view-cube).

## Hilos del solucionador

Cuántos hilos pueden usar los solucionadores de simulación. **Automático** (valor inicial) usa uno menos que los procesadores lógicos de la computadora (como máximo 16), para que la página siga respondiendo mientras se resuelve un estudio; o puede elegir un número. Los estudios voxel grandes, el pandeo, el esfuerzo a lo largo del tiempo y el flujo se resuelven más rápido en varios hilos (cerca de 2× con 4 hilos para 80,000 cubos en nuestras mediciones, más en una computadora sin carga). Los modelos de menos de unas 20,000 incógnitas se quedan en un hilo, porque iniciar los hilos cuesta más de lo que ahorran. Una resolución con hilos da la misma respuesta que con un hilo (salvo redondeo: las sumas se hacen en otro orden). Los resultados de cada estudio muestran **N hilos** o **1 hilo**, con la razón, bajo **Solucionador**.

Los hilos requieren que la página esté **aislada de origen cruzado** (el navegador solo deja que los workers compartan memoria en ese caso). La página de laboratorio lo está; donde no, la configuración lo indica ("Esta página no está aislada de origen cruzado, así que los solucionadores usan un hilo sin importar lo que se elija aquí.") y cada resolución usa un hilo. Todo lo demás funciona igual, y las respuestas son las mismas.

Los estudios de flujo laminar también usan los hilos (cerca de 2.5× con 4 hilos para 54,000 celdas de fluido, la misma respuesta hasta el último dígito). El solucionador de tetraedros cuadráticos y la transferencia de calor se ejecutan en un hilo: al medirlos en nuestra computadora de pruebas, usar hilos fue más lento (están limitados por la velocidad de la memoria y por un paso que no puede dividirse).

### En su propio servidor web

Si ejecuta PartCraft desde su propio servidor, funciona tal como se sirve. Para los hilos del solucionador, haga que el servidor envíe dos encabezados con la página de PartCraft:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

En Apache, en el `.htaccess` de la carpeta (requiere mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

En nginx, en el `location` que sirve PartCraft:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Recargue la página: Configuración › Hilos del solucionador ofrecerá **Automático** con el número de procesadores de su computadora. El segundo encabezado hace que el navegador rechace cualquier cosa que la página cargue de otro sitio que no lo permita, lo cual está bien para PartCraft por sí solo (carga todo desde su propia carpeta).
