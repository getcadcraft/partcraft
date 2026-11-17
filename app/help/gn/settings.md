---
title: Configuración de PartCraft
summary: Elegir qué botón del mouse gira la vista, hacer que un deslizamiento del trackpad gire y desplace la pieza, activar o desactivar las relaciones automáticas al bosquejar y definir cuántos hilos usan los solucionadores de simulación.
keywords: configuración, preferencias, opciones, mouse, botón central, botón de la rueda, órbita, rotar, girar, trackpad, touchpad, desplazamiento, deslizar, pellizcar, relaciones, restricciones, restricción automática, relaciones automáticas, ajuste, coincidente, hilos, hilos del solucionador, núcleos, procesadores, multihilo, resolver más rápido, paralelo
from: 759edcaf
---

Abra {{ui:Configuración}} con el engranaje de la barra de la app o con {{key:Mod+,}}. La primera pestaña, {{ui:PartCraft}}, contiene la configuración propia de esta app; {{ui:General}} contiene la que comparten todas las apps de CadCraft (tema, barra de herramientas, paneles). La configuración de PartCraft existe solo en la app: se cambia aquí, y este navegador la recuerda. {{ui:Restablecer la configuración de PartCraft}} la devuelve todo al inicio.

## Girar la vista

- **Botón izquierdo** (el inicial): arrastre con el botón izquierdo para girar la pieza; arrastre con el botón derecho o central para desplazarla.
- **Botón central**: presione la rueda y arrastre para girar la pieza; mantenga {{key:Shift}} (o {{key:Ctrl}}, o ⌘) con el botón central, o arrastre con el botón derecho, para desplazarla. El botón izquierdo solo elige caras, aristas y planos, así que un clic que se mueve un poco nunca gira la pieza. Muchos programas CAD funcionan así.

La rueda hace zoom hacia el puntero en ambos casos. En un boceto, los botones derecho y central desplazan como antes.

## Desplazamiento: rueda del mouse o trackpad

- **Determinarlo automáticamente** (el inicial): PartCraft observa el desplazamiento. El desplazamiento lateral o fino, como lo envía un trackpad, gira la pieza; los pasos completos de la rueda hacen zoom.
- **Rueda del mouse**: desplazar siempre hace zoom hacia el puntero.
- **Trackpad**: deslice con dos dedos para girar la pieza, mantenga {{key:Shift}} y deslice para desplazarla, pellizque para hacer zoom. En un boceto, deslizar con dos dedos desplaza el boceto.

Pellizcar hace zoom en todas las opciones. Si "Determinarlo automáticamente" adivina mal para su mouse o trackpad, elija el que tiene. Más en [Trackpad, táctil y pantallas pequeñas](topic:trackpad-and-touch).

## Bosquejar: agregar relaciones mientras dibuja

**Agregar relaciones mientras dibuja** (activado al inicio): un clic que se ajusta a un punto hace que el nuevo punto sea coincidente con él, un clic sobre una curva pone el punto sobre esa curva, y una línea dibujada casi horizontal o vertical se vuelve horizontal o vertical. Vea [Relaciones y cotas](topic:relations-dimensions).

Desactívela cuando quiera colocar geometría cerca de otra geometría sin unirla. El puntero igual se ajusta a puntos y curvas, pero nada se une: las líneas dibujadas en cadena no comparten sus extremos, así que un arrastre puede separarlas. Agregue usted mismo las relaciones que quiera desde el panel derecho. Un perfil cerrado igual se extruye cuando sus extremos se tocan.

:::note
La configuración solo cambia lo que agrega el nuevo dibujo. Las relaciones que ya existen en un boceto se conservan, y la herramienta Redondeo sigue creando su arco tangente y su radio.
:::

## Bosquejar: acotar mientras dibuja

**Acotar mientras dibuja** (activado al inicio): mientras se dibuja una línea, rectángulo, círculo o arco, escribir un número llena el cuadro de medida junto al puntero ({{key:Tab}} pasa al siguiente cuadro) y {{key:Enter}} dibuja la forma con ese tamaño, con una cota controladora por cada medida que se escribió. Desactivado: escribir un número mientras se dibuja no hace nada, y las formas se dibujan solo con clics. Vea [Escribir la medida mientras dibuja](topic:sketch-basics#type-the-size-as-you-draw).

## Indicador de esquina

Lo que aparece en la esquina de la vista 3D: **Cubo de vista** (el inicial; arriba a la derecha: haga clic en una cara, arista o vértice para mirar desde allí, arrástrelo para orbitar, arrastre su anillo de brújula para girar el modelo), **Icono de ejes** (un pequeño marcador X, Y, Z abajo a la izquierda que gira con la vista: X en rojo, Y en verde, Z en azul) o **Ninguno**. Ninguno de los dos se muestra mientras bosqueja ni en la hoja de plano. Vea [El cubo de vista](topic:view-cube).

## Hilos del solucionador

Cuántos hilos pueden usar los solucionadores de simulación. **Automático** (el inicial) usa uno menos que los procesadores lógicos de la computadora (como máximo 16), para que la página responda mientras un estudio se resuelve; o elija un número. Los estudios grandes de vóxeles, el pandeo, la tensión en el tiempo y el flujo se resuelven más rápido en varios hilos (unas 2× con 4 hilos para 80.000 cubos según nuestras mediciones, más en una computadora sin carga); los modelos por debajo de unas 20.000 incógnitas usan un solo hilo, porque iniciar los hilos cuesta más de lo que ahorran. Una resolución con hilos da la misma respuesta que con uno (salvo redondeo: las sumas se hacen en otro orden). Los resultados de cada estudio muestran **N hilos** o **1 hilo**, con el motivo, bajo **Solucionador**.

Los hilos requieren que la página esté **aislada de origen cruzado** (el navegador solo permite que los workers compartan memoria en ese caso). La página de laboratorio lo está; donde no lo está, la configuración lo indica ("Esta página no está aislada de origen cruzado, así que los solucionadores usan un solo hilo sin importar lo elegido aquí.") y cada resolución usa un solo hilo. Todo lo demás funciona igual, y las respuestas son las mismas.

Los estudios de flujo laminar también usan los hilos (unas 2,5× con 4 hilos para 54.000 celdas de fluido, la misma respuesta hasta el último dígito). El solucionador de tetraedros cuadráticos y la transferencia de calor usan un solo hilo: pasarlos a varios hilos resultó más lento en nuestra computadora de prueba (sus solucionadores están limitados por la velocidad de la memoria y por un paso que no se puede dividir).

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

Recargue la página: Configuración › Hilos del solucionador ofrecerá **Automático** con el número de hilos de su computadora. El segundo encabezado hace que el navegador rechace cualquier cosa que la página cargue de otro sitio que no lo permita, lo cual está bien para PartCraft por sí solo (carga todo desde su propia carpeta).
