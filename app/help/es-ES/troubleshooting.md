---
title: Solución de problemas
summary: Problemas que puede encontrar en PartCraft, desde que la aplicación no arranca hasta elementos que fallan, croquis que no se resuelven, archivos que no se abren y uniones que se comportan mal, con el mensaje que ve y la solución.
keywords: problema, error, ayuda, no funciona, falla, fallando, bloqueo, en blanco, webgl, webassembly, núcleo, no construido, sobredefinido, perfil abierto, no se puede abrir, no pasa nada, dirección incorrecta, lento
from: 7728542c
---

Cuando algo no funciona, lea primero la **barra de estado**, en la parte inferior: PartCraft indica allí por qué rechazó algo o qué espera a continuación. Un elemento que falla también muestra su mensaje en la parte superior de su panel derecho y al pasar el cursor sobre su fila en el historial.

## La aplicación no arranca

### "Este navegador no puede mostrar 3D (WebGL está desactivado o no está disponible), así que PartCraft no puede ejecutarse aquí."

**Causa:** el navegador tiene desactivados, bloqueados o no admitidos por el controlador gráfico los gráficos 3D (WebGL).

**Solución:**

:::chromium
Abra `chrome://settings/system` (o `edge://settings/system` en Edge) y active "Usar aceleración gráfica cuando esté disponible", y después reinicie el navegador. Si ya está activo, mire `chrome://gpu` para ver el estado de WebGL, y actualice el controlador gráfico.
:::

:::firefox
Abra `about:support` y mire Gráficos, WebGL. Si está bloqueado, actualice el controlador gráfico. En `about:config`, `webgl.disabled` debe ser `false`.
:::

:::safari
WebGL siempre está activo en Safari actual. Actualice macOS (Safari se actualiza con él). Si sigue fallando, pruebe Chrome o Firefox en el mismo Mac para descartar el hardware gráfico.
:::

Los escritorios remotos y algunas máquinas virtuales no tienen WebGL. Pruebe en el propio ordenador.

### "El núcleo de sólidos no se cargó: …"

**Causa:** no se pudo obtener ni iniciar el núcleo geométrico (un programa WebAssembly). Normalmente se cortó la conexión mientras se cargaba la aplicación, una política de empresa o un ajuste de seguridad del navegador desactiva WebAssembly, o el navegador es muy antiguo.

**Solución:** recargue la página con conexión. Si sigue fallando, pruebe otro navegador actual. En Firefox, `javascript.options.wasm` en `about:config` debe ser `true`. Sin conexión, la aplicación y su núcleo solo se cargan si la barra de la aplicación decía **Listo sin conexión** antes de perder la conexión ({{ui:Guardar para uso sin conexión}} con conexión; vea [Trabajar sin conexión](common:offline)).

### El botón de uso sin conexión dice "No se pudo guardar" o "Sin conexión no disponible"

**No se pudo guardar**: algunos archivos no se descargaron. Haga clic para reintentarlo con conexión; una conexión lenta o medida puede necesitar un segundo intento. **Sin conexión no disponible**: esta ventana del navegador no puede guardar una copia sin conexión (las ventanas privadas y algunos ordenadores gestionados lo bloquean). Use una ventana normal, o mantenga la pestaña abierta.

### PartCraft está sin conexión pero desactualizado

Haga clic en **Listo sin conexión** con conexión y elija {{ui:Guardar de nuevo (obtener la versión más reciente)}}.

### "Barrido: no construido todavía. Necesita un núcleo exacto, …"

El mensaje completo es "<Nombre>: no construido todavía. Necesita un núcleo exacto, que esta versión de PartCraft no tiene. Ayuda › Qué aún no está construido indica qué hacer en su lugar." Lo ve al elegir Barrido, Solevación, Nervio, una pestaña de chapa metálica, un elemento de superficie, Combinar, Mover cuerpo, Escalar cuerpo o Patrón de trayectoria, y en las demás cosas que solo un núcleo exacto puede hacer. Nada va mal en su navegador ni en su pieza: esta versión de PartCraft construye cada pieza con el núcleo de malla. Vea [Qué aún no está construido](topic:not-built-yet) para saber qué hacer en su lugar, y [El núcleo de malla](topic:solid-kernels).

### "Cargando el núcleo de sólidos…" nunca desaparece

Espere un poco con una conexión lenta: el núcleo y la biblioteca 3D se descargan la primera vez. Después recargue. Si la propia página muestra un error, vea lo anterior.

## No pasa nada al pulsar una tecla

- Las teclas no funcionan mientras el cursor está en un cuadro de un panel. Haga clic en la vista 3D o pulse {{key:Esc}} tras escribir (o {{key:Tab}} para salir).
- Las teclas de flecha y {{key:Plus}}/{{key:Minus}} giran y hacen zoom en la vista solo después de hacer clic en ella.
- Hay un cuadro de diálogo abierto: respóndalo primero.
- En un boceto, {{key:F}} es la herramienta Empalme, no Ajustar. Use el botón {{ui:Ajustar}}.

## Un botón de la barra de herramientas aparece atenuado

- Los botones de elemento aparecen atenuados mientras hay un boceto abierto. Cierre el boceto primero.
- Las herramientas de boceto solo funcionan dentro de un boceto.
- {{ui:Deshacer}} y {{ui:Rehacer}} aparecen atenuados cuando no hay nada que deshacer o rehacer.
- {{ui:Ensamblaje}} necesita una pieza con un sólido. {{ui:Unión}} necesita dos piezas en el ensamblaje. {{ui:Editar pieza}} necesita una pieza seleccionada.
- {{ui:STEP AP242 (sólido exacto)}} y {{ui:STEP AP214 (sólido exacto)}} aparecen atenuados en un ensamblaje: exporte cada pieza por separado. Si otro programa rechaza el archivo exacto, pruebe {{ui:STEP AP214 (sólido exacto)}}, después {{ui:STEP (facetado, núcleo de malla)}}, e informe a través de {{ui:Ayuda}} › {{ui:Informar de un problema}}.
- {{ui:Barrido}}, {{ui:Solevación}} y los demás elementos que necesitan un núcleo exacto no aparecen atenuados: siguen siendo pulsables, sus descripciones emergentes terminan en "no construido todavía (necesita un núcleo exacto)", y al pulsar uno lo indica en la barra de estado. Vea [Qué aún no está construido](topic:not-built-yet).
- {{ui:Dibujo}} necesita una pieza con un sólido, y aparece atenuado mientras hay un boceto abierto.
- Los elementos de {{ui:Exportar}} aparecen atenuados en un ensamblaje: todavía no se pueden exportar ensamblajes. Cierre el ensamblaje, o edite una pieza, para exportar.

## Problemas de bocetos

### El boceto no me deja añadir una relación

"No hay ninguna relación que encaje con esta selección. Seleccione uno o dos elementos (Shift+clic añade)." La relación necesita una selección distinta. Vea [Relaciones y cotas de boceto](topic:sketch-relations) para saber qué necesita cada una.

### "Sobredefinido: … no pueden cumplirse todas. Deshaga, o elimine una de ellas."

**Causa:** la nueva relación o cota contradice las que ya existen. El boceto no se movió.

**Solución:** {{key:Mod+Z}}, o elimine uno de los elementos rojos de la lista del panel derecho (elija **Eliminar** junto a él).

### "Sobredefinido: … ya está implícito. Elimínelo."

**Causa:** la relación no aporta nada: otras ya la fuerzan (por ejemplo, Paralelas en dos lados de un rectángulo, o una cota que ya está fija). En esta versión no hay cotas conducidas.

**Solución:** elimínela. El elemento se construye igualmente, con una advertencia.

### "Esos elementos no se pueden acotar juntos."

Ha hecho clic, por ejemplo, en un punto y en un círculo. Acote al punto central del círculo.

### "Un empalme necesita una esquina donde se unan exactamente dos líneas." / "Ese radio es demasiado grande para estas líneas."

Haga clic exactamente en el punto de esquina de dos líneas sólidas. Use un radio menor que el que permita la línea más corta.

### La geometría vuelve atrás cuando la arrastro

El arrastre rompería una relación o una cota, así que PartCraft la devuelve a su sitio. Solo puede moverse la geometría azul (subdefinida).

### "Este boceto no puede abrirse: Necesita Extrude2, que está fallando."

El boceto está sobre una cara de un elemento que no está construido. Corrija antes ese elemento, o reactívelo, o avance en el historial.

## Problemas de elementos

| Mensaje | Causa | Solución |
|---|---|---|
| "Cree un boceto primero: elija un plano, Boceto, dibuje un perfil cerrado, Salir." | No hay ningún boceto sin usar con curvas, y ninguno seleccionado | Dibuje un boceto, o selecciónelo en el historial |
| "El boceto no tiene un perfil cerrado para extruir." (o "para revolucionar") | No hay un bucle cerrado de líneas sólidas | Cierre los huecos; devuelva las líneas de construcción con {{key:Q}} |
| "El perfil está abierto: un extremo en (x, y) no está unido a nada." | Un hueco en ese punto | Abra el boceto y arrastre el extremo sobre su vecino para que encaje |
| "El perfil se ramifica en (x, y): más de dos extremos se encuentran allí." | Tres o más líneas se encuentran en un punto | Elimine la línea sobrante, o conviértala en construcción |
| "Un bucle cerrado necesita al menos tres lados o una curva." | Dos líneas de ida y vuelta | Vuelva a dibujar el bucle |
| "Hasta todo es solo para cortes. Use una profundidad para una saliente." | Una saliente con Hasta todo | Ponga Fin en Ciega o Plano medio |
| "No hay nada que cortar en ese lado del boceto. Pruebe la otra dirección." | El corte apunta fuera del material | Marque Invertir dirección |
| "Todavía no hay nada que cortar." / "Todavía no hay nada que taladrar." | No hay sólido antes de este elemento | Haga antes una saliente, o mueva el elemento hacia abajo |
| "Dibuje una línea de eje (una línea de construcción) en el boceto alrededor de la que revolucionar." | Revolución sin eje | Añada una línea de eje, o elija una línea en Eje |
| "El perfil cruza el eje. Manténgalo a un lado de la línea de eje." | Perfil a ambos lados del eje | Vuelva a dibujar la mitad del perfil |
| "Coloque puntos de boceto donde irán los agujeros (herramienta Punto), y después haga el agujero." | No hay puntos sueltos en el boceto | Añada puntos con {{key:P}} |
| "El avellanado debe ser más ancho que el agujero." | Ø del avellanado no mayor que el Diámetro | Haga el avellanado más ancho |
| "El avellanado debe ser menos profundo que el agujero." | Avellanado más profundo que un agujero ciego | Hágalo menos profundo, o el agujero más profundo |
| "Elija los elementos que copiar." | Un patrón o una simetría sin nada marcado | Marque un elemento en Elementos a copiar |
| "Extrude2 no tiene sólido que copiar." | El elemento copiado falla o está desactivado | Corríjalo o reactívelo |
| "Necesita Sketch3, que está fallando." | Un elemento del que depende no está construido | Corrija el elemento que indica |
| "La cara en la que se apoya ya no existe (Extrude1 no está construido)." | La cara del boceto ya no existe | Corrija ese elemento, o elimine el boceto y vuelva a dibujarlo |
| "No queda nada de la pieza después de esto." | Un corte eliminó todo el material | Revise el tamaño y la dirección del corte |
| "El núcleo de sólidos no pudo construir esto (…)." o "El núcleo de sólidos no pudo combinar esto con el cuerpo." | El núcleo rechazó la geometría | Deshaga, o cambie un poco los tamaños; las caras que se tocan exactamente pueden causarlo |
| "Barrido: no construido todavía. Necesita un núcleo exacto, que esta versión de PartCraft no tiene." (también Solevación, Nervio y los demás) | Un elemento creado en una versión anterior que solo un núcleo exacto puede construir. Permanece en el historial y se guarda sin cambios | Suprímalo o elimínelo; vea [Qué aún no está construido](topic:not-built-yet) para saber qué hacer en su lugar |
| "Un redondeo de 5 mm no cabe aquí (…)." / "Un chaflán de 2 mm …" | El tamaño es demasiado grande para una cara junto al borde, o la esquina no puede redondearse | Tamaño menor, o menos aristas por elemento |
| "Empalme: en esta versión solo aristas rectas entre dos caras planas (las construye el núcleo de malla). Redondee o biselle las aristas curvas en el boceto." (también Chaflán) | Una arista elegida es redonda, como el borde de un agujero, o está sobre una cara curva | {{ui:Seleccionar aristas}} y quítela; redondee o biselle esa esquina en el boceto |
| "Un empalme cuyo radio cambia a lo largo de la arista: todavía no construido (necesita un núcleo exacto). Dele un solo radio." | **Radio variable** está marcado | Desmárquelo y dé un solo radio |
| "Empalme por el núcleo de malla: donde se unen aristas redondeadas, se rematan a inglete, no se funden." (⚠, una advertencia) | Las aristas elegidas se encuentran en una esquina; los redondeos se encuentran allí en un quiebro vivo | Nada que corregir: la pieza está construida. Redondee menos aristas si el quiebro importa |
| "Una arista que redondea ya no existe: la arista entre Extrude1 y Cut2." | Un cambio anterior eliminó la arista | {{ui:Seleccionar aristas}}, quite la arista roja y elija la nueva |
| "Seleccione las aristas en la vista y añádalas." | El empalme o el chaflán no tiene aristas | {{ui:Seleccionar aristas}} |
| "Seleccione las caras que quitar (abiertas) y después vacíe." | El vaciado no tiene caras abiertas | {{ui:Seleccionar caras}} |
| "El vaciado no pudo hacerse con este espesor (…)." | La pared es más gruesa que una parte fina del modelo o que un radio de empalme | Una pared más fina, o empalmes mayores |
| "Vaciado: en esta versión solo abre caras planas (lo construye el núcleo de malla)." | Una cara abierta es curva | {{ui:Seleccionar caras}} y quítela; abra solo caras planas |
| "Ángulo de salida: en esta versión solo caras planas (lo construye el núcleo de malla)." | Una cara con ángulo de salida es un cilindro, un cono o una cara de superficie libre | Quítela; aplique ángulo de salida solo a caras planas |
| "Una cara que abre ya no existe (…)." | Un cambio anterior eliminó la cara | Vuelva a usar {{ui:Seleccionar caras}} |
| "Redondeo1 cambia los bordes o las paredes del cuerpo; no puede copiarse. …" | Un patrón o una simetría copia un redondeo, chaflán o vaciado | Desmárquelo; haga primero el patrón de los cortes, y después el redondeo |
| "Está sobre una cara que solo un núcleo exacto puede encontrar: todavía no construido en esta versión." | Un boceto sobre una cara que el núcleo de malla no encuentra, como uno creado en una versión anterior | Dibuje sobre un plano base o una cara plana de una extrusión, y colóquelo con cotas |
| "Usa una cara o arista del sólido, que solo un núcleo exacto puede encontrar: todavía no construido en esta versión." | Un plano, eje o punto de referencia sobre una cara o arista del sólido | Hágalo a partir de planos base, puntos de boceto o coordenadas |
| "Extruir hasta una cara, la cara siguiente o un vértice: todavía no construido (necesita un núcleo exacto)." / "Una conicidad: todavía no construida (necesita un núcleo exacto)." | Una condición final o una conicidad que solo un núcleo exacto construye | Use una profundidad Ciega o Plano medio que mida usted; deje la Conicidad en 0 |

## Problemas al seleccionar

- "Esa cara es curva. Seleccione una cara plana o un plano para dibujar." Los bocetos necesitan una cara plana. Dibuje sobre un plano base y coloque el boceto con cotas.
- Una cara dice "Fijada donde se eligió": no la creó un borde de boceto (por ejemplo, una cara de una copia de un patrón), así que un boceto sobre ella se queda en su sitio cuando cambia la pieza.
- Las aristas cuestan de acertar: amplíe la vista. Una arista gana a la cara contigua cuando el puntero está justo sobre ella.

## Problemas de archivos

| Mensaje | Solución |
|---|---|
| 'PartCraft abre sus propios archivos .partcraft.json, exporta desde la macro de CadCraft para SolidWorks (.cadcraft-sw.json) y archivos STEP. "bracket.igs" no es ninguno de estos.' | Solo se reconocen esos archivos (y las mallas STL, OBJ y 3MF, y los archivos `.3dm`) |
| '"part.stp" no es un archivo STEP (no empieza con ISO-10303-21).' | El archivo no es texto STEP |
| "Ese archivo STEP es demasiado grande (más de 60 MB) para importarlo aquí." | Simplifíquelo en su origen |
| "Ese archivo es demasiado grande para ser una pieza de PartCraft." en su propia pieza guardada | Un sólido STEP grande importado en una versión anterior hizo que el archivo superara los 50 MB. Use una copia anterior sin él |
| "Ese archivo es demasiado grande para ser una pieza de PartCraft." | El archivo supera los 50 MB; no es un archivo de PartCraft |
| "Este no es un archivo de PartCraft (no es JSON)." / "Este no es un archivo de PartCraft." | El archivo está dañado o es de otro programa |
| "Este archivo lo guardó una versión más reciente de PartCraft (versión de archivo …); esta versión lee la versión …" | Ábralo en la versión más reciente de PartCraft |
| "Extrude2: la profundidad no es válida." (u otro valor) | El archivo se editó a mano o se dañó. Use una copia anterior |
| Insertar en un ensamblaje dice "Part1.partcraft.json no tiene sólido que insertar." | El archivo de la pieza no tiene sólido. Ábralo, cree un sólido, guarde e inserte de nuevo |

**Mi archivo guardado no está donde esperaba.** Guardar es una descarga: busque en la carpeta de descargas del navegador, o abra la lista de descargas desde la barra de herramientas del navegador. Vea [Dónde van sus archivos](common:your-files).

**Abrí una pieza, pero el ensamblaje sigue en pantalla.** La pieza se cargó detrás del ensamblaje. Elija {{ui:Cerrar}} para cerrar el ensamblaje y ver la pieza. Cierre los ensamblajes antes de abrir archivos de pieza.

## Problemas de dibujo

| Mensaje | Solución |
|---|---|
| "Construya primero un sólido, y después haga su dibujo." | Construya antes la pieza |
| "No hay espacio en la hoja para: detalle. Haga el detalle más pequeño o quite una vista." | **Radio del detalle** o **Escala del detalle** menores, o quite la sección |
| "Un detalle se toma de la vista de alzado, superior, derecha o sección." | Haga clic en una de esas vistas |
| "Haga clic en una de las vistas." | El clic fue en papel vacío |
| "La posición necesita al menos una referencia de datum." y otros mensajes del marco | Ponga los datums que pide el panel, o elija otra característica |
| "No se pudieron hacer las vistas del dibujo: …" | Deshaga el último cambio. Si sigue ocurriendo, guarde, recargue y vuelva a abrir la pieza |

## Problemas de ensamblajes

| Mensaje | Solución |
|---|---|
| "Construya primero un sólido, y después póngalo en un ensamblaje." | La pieza aún no tiene sólido |
| "Inserte primero una segunda pieza (Añadir copia, Insertar o Editar › Duplicar)." | Una unión necesita dos piezas |
| "Seleccione una cara en una pieza distinta." | Las dos caras de una unión deben estar en piezas distintas |
| "Esa cara es curva. Seleccione una cara plana …" | Las uniones empiezan en caras planas. Después use **Centrar en** para un agujero o un eje de revolución |
| "Bracket2 no está unida a la pieza anclada, así que se queda donde se colocó." | Añada una unión desde ella a una pieza colocada |
| "Revolute3 cierra un lazo que no puede cerrarse: no cierra por 2.000 mm. Revise las caras, los desplazamientos y los límites de las uniones del lazo." | Las piezas no pueden encontrarse todas: revise las longitudes, las caras que usa cada unión, los desplazamientos (las piezas apiladas cara a cara deben coincidir en profundidad) y los límites; o quite una unión del lazo |
| "La cara que usa esta unión ya no está en Bracket." / "El eje que usa esta unión ya no está en Bracket." | La pieza se editó. Quite la unión y vuelva a crearla |
| "El eje va a lo largo de la cara, así que no puede fijar el centro de la unión." | Elija un eje que cruce la cara, o "El propio origen de la cara" |
| "Un ensamblaje conserva al menos una pieza. Ciérrelo en su lugar." | Use {{ui:Cerrar}} |

**Las piezas están unidas, pero en el lugar equivocado.** Ponga **Centrar en** en ambos lados de la unión en los agujeros o ejes de revolución que deben alinearse, y después ajuste **Ángulo (°)** y **Desplazamiento (mm)**.

## Va lento

- Ponga **Curvas** en Normal o Grueso mientras modela; cámbielo a Fino antes de exportar.
- Los patrones con muchas copias (cientos) tardan en reconstruirse con cada cambio. Suprima el patrón mientras trabaja en otros elementos.
- La interferencia y la comprobación de movimiento comparan cada par de piezas; los ensamblajes grandes tardan más.
- Cierre otras pestañas pesadas. PartCraft usa el procesador y los gráficos de su propio ordenador.

## Sigo atascado

Guarde primero su archivo ({{key:Mod+S}}), después recargue la página y ábralo de nuevo. Si un elemento sigue fallando, selecciónelo, lea su mensaje e intente {{key:Mod+Z}} para volver al último estado correcto.
