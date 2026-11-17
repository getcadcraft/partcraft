---
title: Solución de problemas
summary: Problemas que puede encontrar en PartCraft, desde que la aplicación no inicia hasta operaciones que fallan, croquis que no se resuelven, archivos que no abren y uniones que se comportan mal, con el mensaje que ve y la solución.
keywords: problema, error, ayuda, no funciona, falla, fallando, se cierra, en blanco, webgl, webassembly, núcleo, no construido, sobredefinido, perfil abierto, no se puede abrir, no pasa nada, dirección incorrecta, lento
from: 7728542c
---

Cuando algo no funciona, lea primero la **barra de estado** en la parte inferior: PartCraft indica ahí por qué rechazó algo o qué espera a continuación. Una operación que falla también muestra su mensaje en la parte superior de su panel derecho y cuando pasa el cursor sobre su fila en el historial.

## La aplicación no inicia

### "Este navegador no puede mostrar 3D (WebGL está desactivado o no existe), así que PartCraft no puede ejecutarse aquí."

**Causa:** el navegador tiene desactivados, bloqueados o no soportados los gráficos 3D (WebGL) por el controlador de gráficos.

**Solución:**

:::chromium
Abra `chrome://settings/system` (o `edge://settings/system` en Edge) y active "Usar aceleración por hardware cuando esté disponible", luego reinicie el navegador. Si ya está activada, revise `chrome://gpu` para ver el estado de WebGL, y actualice el controlador de gráficos.
:::

:::firefox
Abra `about:support` y revise Gráficos, WebGL. Si está bloqueado, actualice el controlador de gráficos. En `about:config`, `webgl.disabled` debe ser `false`.
:::

:::safari
WebGL siempre está activado en Safari actual. Actualice macOS (Safari se actualiza con él). Si sigue fallando, pruebe Chrome o Firefox en el mismo Mac para descartar el hardware gráfico.
:::

Los escritorios remotos y algunas máquinas virtuales no tienen WebGL. Pruebe en la computadora misma.

### "No se cargó el núcleo sólido: …"

**Causa:** no se pudo descargar ni iniciar el núcleo geométrico (un programa WebAssembly). Normalmente se cayó la conexión mientras la aplicación cargaba, una política de la empresa o una configuración de seguridad del navegador desactiva WebAssembly, o el navegador es muy antiguo.

**Solución:** recargue la página con conexión. Si sigue fallando, pruebe otro navegador actual. En Firefox, `javascript.options.wasm` en `about:config` debe ser `true`. Sin conexión, la aplicación y su núcleo solo cargan si la barra de la aplicación indicaba **Listo sin conexión** antes de perder la conexión ({{ui:Guardar para usar sin conexión}} con conexión; vea [Trabajar sin conexión](common:offline)).

### El botón sin conexión dice "No se pudo guardar" o "Sin conexión no disponible"

**No se pudo guardar**: algunos archivos no se descargaron. Haga clic para intentar de nuevo con conexión; una conexión lenta o medida puede necesitar un segundo intento. **Sin conexión no disponible**: esta ventana del navegador no puede conservar una copia sin conexión (las ventanas privadas y algunas computadoras administradas lo bloquean). Use una ventana normal, o mantenga la pestaña abierta.

### PartCraft está sin conexión pero desactualizado

Haga clic en **Listo sin conexión** con conexión y elija {{ui:Guardar de nuevo (obtener la versión más reciente)}}.

### "Barrido: no construido aún. Necesita un núcleo exacto, …"

El mensaje completo es "<Nombre>: no construido aún. Necesita un núcleo exacto, que esta versión de PartCraft no tiene. Ayuda › Qué aún no está construido indica qué hacer en su lugar." Lo ve al elegir Barrido, Solevación, Nervio, una brida de lámina metálica, una operación de superficie, Combinar, Mover cuerpo, Escalar cuerpo o Matriz de trayectoria, y para las demás cosas que solo un núcleo exacto puede hacer. Nada anda mal con su navegador ni con su pieza: esta versión de PartCraft construye cada pieza con el núcleo de malla. Vea [Qué aún no está construido](topic:not-built-yet) para lo que debe hacer en su lugar, y [El núcleo de malla](topic:solid-kernels).

### "Cargando el núcleo sólido…" nunca desaparece

Espere un poco con una conexión lenta: el núcleo y la biblioteca 3D se descargan la primera vez. Luego recargue. Si la página misma muestra un error, vea arriba.

## Nada pasa al presionar una tecla

- Las teclas no funcionan mientras el cursor está en un cuadro de un panel. Haga clic en la vista 3D o presione {{key:Esc}} después de escribir (o {{key:Tab}} para salir).
- Las teclas de flecha y {{key:Plus}}/{{key:Minus}} giran y hacen zoom en la vista solo después de hacer clic en ella.
- Hay un diálogo abierto: respóndalo primero.
- En un croquis, {{key:F}} es la herramienta Empalme, no Ajustar. Use el botón {{ui:Ajustar}}.

## Un botón de la barra de herramientas está en gris

- Los botones de operación se ponen en gris mientras un croquis está abierto. Cierre primero el croquis.
- Las herramientas de croquis solo funcionan dentro de un croquis.
- {{ui:Deshacer}} y {{ui:Rehacer}} están en gris cuando no hay nada que deshacer o rehacer.
- {{ui:Ensamblaje}} necesita una pieza con un sólido. {{ui:Unión}} necesita dos piezas en el ensamblaje. {{ui:Editar pieza}} necesita una pieza seleccionada.
- {{ui:STEP AP242 (sólido exacto)}} y {{ui:STEP AP214 (sólido exacto)}} están en gris en un ensamblaje: exporte cada pieza. Otro programa rechaza el archivo exacto: pruebe {{ui:STEP AP214 (sólido exacto)}}, luego {{ui:STEP (facetado, núcleo de malla)}}, y cuéntenos a través de {{ui:Ayuda}} › {{ui:Informar de un problema}}.
- {{ui:Barrido}}, {{ui:Solevación}} y las demás operaciones que necesitan un núcleo exacto no están en gris: siguen siendo pulsables, sus descripciones terminan con "no construido aún (necesita un núcleo exacto)", y al hacer clic en una la barra de estado lo indica. Vea [Qué aún no está construido](topic:not-built-yet).
- {{ui:Dibujo}} necesita una pieza con un sólido, y está en gris mientras hay un croquis abierto.
- Los elementos de {{ui:Exportar}} están en gris en un ensamblaje: los ensamblajes todavía no se pueden exportar. Ciérrelo, o edite una pieza, para exportar.

## Problemas con croquis

### El croquis no me deja agregar una relación

"No hay relación que se ajuste a esta selección. Seleccione uno o dos elementos (Shift+clic agrega)." La relación necesita una selección distinta. Vea [Relaciones y cotas de croquis](topic:sketch-relations) para lo que necesita cada una.

### "Sobredefinido: … no se pueden cumplir todos. Deshaga, o elimine uno de ellos."

**Causa:** la nueva relación o cota contradice las que ya existen. El croquis no se movió.

**Solución:** {{key:Mod+Z}}, o elimine uno de los elementos rojos de la lista del panel derecho (elija **Eliminar** junto a él).

### "Sobredefinido: … ya está implícito. Elimínelo."

**Causa:** la relación no agrega nada: otras ya la fuerzan (por ejemplo Paralela en dos lados de un rectángulo, o una cota que ya está fija). En esta versión no hay cotas conducidas.

**Solución:** elimínela. La operación se construye de todos modos, con una advertencia.

### "Esos elementos no se pueden acotar juntos."

Hizo clic, por ejemplo, en un punto y en un círculo. Acote al centro del círculo en su lugar.

### "Un empalme necesita una esquina donde se unan exactamente dos líneas." / "Ese radio es demasiado grande para estas líneas."

Haga clic exactamente en el punto de esquina de dos líneas sólidas. Use un radio menor al que permite la línea más corta.

### La geometría regresa cuando la arrastro

El arrastre rompería una relación o una cota, así que PartCraft la regresa. Solo la geometría azul (subdefinida) puede moverse.

### "Este croquis no puede abrirse: Necesita Extruir2, que está fallando."

El croquis está sobre una cara de una operación que no está construida. Corrija primero esa operación, o actívela, o avance el historial.

## Problemas con operaciones

| Mensaje | Causa | Solución |
|---|---|---|
| "Cree primero un croquis: elija un plano, Croquis, dibuje un perfil cerrado, Salir." | No hay croquis sin usar con curvas, y ninguno seleccionado | Dibuje un croquis, o selecciónelo en el historial |
| "El croquis no tiene un perfil cerrado para extruir." (o "para hacer la revolución") | No hay un contorno cerrado de líneas sólidas | Cierre los huecos; vuelva a las líneas de construcción con {{key:Q}} |
| "El perfil está abierto: un extremo en (x, y) no está unido a nada." | Un hueco en ese punto | Abra el croquis y arrastre el extremo sobre su vecino para que se enganche |
| "El perfil se ramifica en (x, y): más de dos extremos se unen ahí." | Tres o más líneas se unen en un punto | Elimine la línea extra, o cámbiela a construcción |
| "Un contorno cerrado necesita al menos tres lados o una curva." | Dos líneas de ida y vuelta | Dibuje de nuevo el contorno |
| "Pasar a través de todo es para cortes. Use una profundidad para un saliente." | Un saliente con Pasar a través de todo | Ponga Fin en Ciego o Plano medio |
| "No hay nada que cortar de ese lado del croquis. Pruebe la otra dirección." | El corte apunta fuera del material | Marque Invertir dirección |
| "Todavía no hay nada que cortar." / "Todavía no hay nada que taladrar." | No hay sólido antes de esta operación | Haga primero un saliente, o baje la operación |
| "Dibuje una línea de centro (una línea de construcción) en el croquis alrededor de la cual revolucionar." | Revolución sin eje | Agregue una línea de centro, o elija una línea en Eje |
| "El perfil cruza el eje. Manténgalo de un lado de la línea de centro." | Perfil a ambos lados del eje | Dibuje de nuevo la mitad del perfil |
| "Ponga puntos de croquis donde van los agujeros (herramienta Punto), luego haga el agujero." | No hay puntos sueltos en el croquis | Agregue puntos con {{key:P}} |
| "El avellanado debe ser más ancho que el agujero." | Ø del avellanado no es mayor que el Diámetro | Haga el avellanado más ancho |
| "El avellanado debe ser menos profundo que el agujero." | Avellanado más profundo que un agujero ciego | Hágalo menos profundo, o el agujero más profundo |
| "Elija las operaciones a copiar." | Una matriz o simetría sin nada marcado | Marque una operación bajo Operaciones a copiar |
| "Extruir2 no tiene sólido que copiar." | La operación copiada falló o está desactivada | Corríjala o actívela |
| "Necesita Croquis3, que está fallando." | Una operación de la que depende no está construida | Corrija la operación que se nombra |
| "La cara donde está ya no existe (Extruir1 no está construida)." | La cara del croquis ya no existe | Corrija esa operación, o elimine el croquis y vuelva a dibujarlo |
| "No queda nada de la pieza después de esto." | Un corte eliminó todo el material | Revise el tamaño y la dirección del corte |
| "El núcleo sólido no pudo construir esto (…)." o "El núcleo sólido no pudo combinar esto con el cuerpo." | El núcleo rechazó la geometría | Deshaga, o cambie un poco los tamaños; las caras que se tocan exactamente pueden provocarlo |
| "Barrido: no construido aún. Necesita un núcleo exacto, que esta versión de PartCraft no tiene." (también Solevación, Nervio y las demás) | Una operación hecha en una versión anterior que solo un núcleo exacto puede construir. Permanece en el historial y se guarda sin cambios | Suprímala o elimínela; vea [Qué aún no está construido](topic:not-built-yet) para lo que debe hacer en su lugar |
| "Un redondeo de 5 mm no cabe aquí (…)." / "Un chaflán de 2 mm …" | El tamaño es demasiado grande para una cara junto a la arista, o la esquina no se puede redondear | Tamaño menor, o menos aristas por operación |
| "Redondeo: en esta versión solo aristas rectas entre dos caras planas (el núcleo de malla las construye). Redondee o biselle las aristas curvas en el croquis." (también Chaflán) | Una arista elegida es redonda, como el borde de un agujero, o está en una cara curva | {{ui:Seleccionar aristas}} y quítela; redondee o biselle esa esquina en el croquis |
| "Un redondeo cuyo radio cambia a lo largo de la arista: no construido aún (necesita un núcleo exacto). Dé un solo radio." | **Radio variable** está marcado | Desmárquelo y dé un solo radio |
| "Redondeo por el núcleo de malla: donde se encuentran aristas redondeadas se biselan, no se mezclan." (⚠, una advertencia) | Las aristas elegidas se encuentran en una esquina; los redondeos se juntan ahí en un pliegue afilado | Nada que corregir: la pieza está construida. Redondee menos aristas si el pliegue importa |
| "Una arista que redondea ya no existe: la arista entre Extruir1 y Corte2." | Un cambio anterior eliminó la arista | {{ui:Seleccionar aristas}}, quite la arista roja y elija la nueva |
| "Elija las aristas en la vista, luego agréguelas." | El redondeo o chaflán no tiene aristas | {{ui:Seleccionar aristas}} |
| "Elija las caras a quitar (abiertas), luego vacíe." | El vaciado no tiene caras abiertas | {{ui:Seleccionar caras}} |
| "El vaciado no se pudo hacer con este espesor (…)." | La pared es más gruesa que una parte delgada del modelo o que un radio de redondeo | Una pared más delgada, o redondeos mayores |
| "Vaciado: en esta versión solo abre caras planas (el núcleo de malla lo construye)." | Una cara abierta es curva | {{ui:Seleccionar caras}} y quítela; abra solo caras planas |
| "Ángulo de salida: en esta versión solo caras planas (el núcleo de malla lo construye)." | Una cara con ángulo de salida es un cilindro, cono o cara libre | Quítela; aplique ángulo de salida solo a caras planas |
| "Una cara que abre ya no existe (…)." | Un cambio anterior eliminó la cara | {{ui:Seleccionar caras}} otra vez |
| "Redondeo1 cambia las aristas o paredes del cuerpo; no se puede copiar. …" | Una matriz o simetría copia un redondeo, chaflán o vaciado | Desmárquelo; haga primero la matriz de cortes, luego el redondeo |
| "Está sobre una cara que solo un núcleo exacto puede encontrar: no construido aún en esta versión." | Un croquis sobre una cara que el núcleo de malla no encuentra, como una hecha en una versión anterior | Dibuje sobre un plano base o una cara plana de una extrusión, y ubíquelo con cotas |
| "Usa una cara o arista del sólido, que solo un núcleo exacto puede encontrar: no construido aún en esta versión." | Un plano, eje o punto de referencia sobre una cara o arista del sólido | Hágalo desde planos base, puntos de croquis o coordenadas en su lugar |
| "Extruir hasta una cara, la siguiente cara o un vértice: no construido aún (necesita un núcleo exacto)." / "Un ahusamiento: no construido aún (necesita un núcleo exacto)." | Una condición final o ahusamiento que solo un núcleo exacto construye | Use una profundidad Ciega o Plano medio que mida; deje el Ahusamiento en 0 |

## Problemas al elegir

- "Esa cara es curva. Elija una cara plana o un plano para dibujar." Los croquis necesitan una cara plana. Dibuje en un plano base y ubique el croquis con cotas.
- Una cara dice "Fija donde se eligió": no la creó una arista de croquis (por ejemplo, una cara de una copia de matriz), así que un croquis sobre ella se queda fijo cuando la pieza cambia.
- Las aristas cuestan trabajo de tocar: acerque el zoom. Una arista gana sobre la cara junto a ella cuando el puntero está justo sobre ella.

## Problemas con archivos

| Mensaje | Solución |
|---|---|
| 'PartCraft abre sus propios archivos .partcraft.json, exporta desde la macro CadCraft para SolidWorks (.cadcraft-sw.json) y archivos STEP. "bracket.igs" no es ninguno de estos.' | Solo se reconocen esos archivos (y mallas STL, OBJ y 3MF, y archivos `.3dm`) |
| '"part.stp" no es un archivo STEP (no empieza con ISO-10303-21).' | El archivo no es texto STEP |
| "Ese archivo STEP es demasiado grande (más de 60 MB) para importarlo aquí." | Simplifíquelo en su origen |
| "Ese archivo es demasiado grande para ser una pieza de PartCraft." en su propia pieza guardada | Un sólido STEP grande importado en una versión anterior hizo que el archivo de pieza superara 50 MB. Use una copia anterior sin él |
| "Ese archivo es demasiado grande para ser una pieza de PartCraft." | El archivo supera 50 MB; no es un archivo de PartCraft |
| "Este no es un archivo de PartCraft (no es JSON)." / "Este no es un archivo de PartCraft." | El archivo está dañado o es de otro programa |
| "Este archivo lo guardó un PartCraft más nuevo (versión de archivo …); este lee la versión …" | Ábralo en el PartCraft más nuevo |
| "Extruir2: la profundidad no es válida." (u otro valor) | El archivo se editó a mano o se dañó. Use una copia anterior |
| Insertar en un ensamblaje dice "Part1.partcraft.json no tiene sólido que insertar." | El archivo de pieza no tiene sólido. Ábralo, construya un sólido, guarde e inserte de nuevo |

**Mi archivo guardado no está donde esperaba.** Guardar es una descarga: busque en la carpeta de descargas de su navegador, o abra la lista de descargas desde la barra de herramientas del navegador. Vea [Dónde van sus archivos](common:your-files).

**Abrí una pieza pero el ensamblaje sigue en pantalla.** La pieza se cargó detrás del ensamblaje. Elija {{ui:Cerrar}} para cerrar el ensamblaje y ver la pieza. Cierre los ensamblajes antes de abrir archivos de pieza.

## Problemas con dibujos

| Mensaje | Solución |
|---|---|
| "Construya primero un sólido, luego haga su dibujo." | Construya primero la pieza |
| "No hay espacio en la hoja para: detalle. Haga el detalle más pequeño o quite una vista." | **Radio del detalle** o **Escala del detalle** más pequeños, o quite la sección |
| "Un detalle se toma de la vista frontal, superior, derecha o de sección." | Haga clic en una de esas vistas |
| "Haga clic en una de las vistas." | El clic fue en papel vacío |
| "La posición necesita al menos una referencia de datum." y otros mensajes del marco | Defina los datums que pide el panel, o elija otra característica |
| "No se pudieron hacer las vistas del dibujo: …" | Deshaga el último cambio. Si sigue ocurriendo, guarde, recargue y vuelva a abrir la pieza |

## Problemas de ensamblaje

| Mensaje | Solución |
|---|---|
| "Construya primero un sólido, luego colóquelo en un ensamblaje." | La pieza aún no tiene sólido |
| "Inserte primero una segunda pieza (Agregar copia, Insertar, o Editar › Duplicar)." | Una unión necesita dos piezas |
| "Elija una cara en una pieza distinta." | Las dos caras de una unión deben estar en piezas distintas |
| "Esa cara es curva. Elija una cara plana …" | Las uniones empiezan en caras planas. Luego use **Centrar en** para un eje de agujero o de revolución |
| "Bracket2 no está unida a la pieza fija, así que se queda donde se colocó." | Agregue una unión desde ella a una pieza que esté colocada |
| "Revolute3 cierra un lazo que no puede cerrarse: está desfasada 2.000 mm. Revise las caras, desplazamientos y límites de las uniones del lazo." | Las piezas no pueden encontrarse todas: revise las longitudes, las caras que usa cada unión, los desplazamientos (las piezas apiladas cara a cara deben coincidir en profundidad) y los límites; o quite una unión del lazo |
| "La cara que usa esta unión ya no está en Bracket." / "El eje que usa esta unión ya no está en Bracket." | La pieza fue editada. Quite la unión y vuelva a hacerla |
| "El eje corre a lo largo de la cara, así que no puede fijar el centro de la unión." | Elija un eje que cruce la cara, o "El origen propio de la cara" |
| "Un ensamblaje conserva al menos una pieza. Ciérrelo en su lugar." | Use {{ui:Cerrar}} |

**Las piezas están unidas pero en el lugar equivocado.** Defina **Centrar en** para ambos lados de la unión en los agujeros o ejes de revolución que deben alinearse, luego ajuste **Ángulo (°)** y **Desplazamiento (mm)**.

## Va lento

- Defina **Curvas** en Normal o Grueso mientras modela; cambie a Fino antes de exportar.
- Los conteos grandes de matriz (cientos de copias) tardan en reconstruirse con cada cambio. Suprima la matriz mientras trabaja en otras operaciones.
- La detección de interferencias y la revisión de movimiento comparan cada par de piezas; los ensamblajes grandes tardan más.
- Cierre otras pestañas pesadas. PartCraft usa el procesador y los gráficos de su propia computadora.

## Todavía no se resuelve

Guarde primero su archivo ({{key:Mod+S}}), luego recargue la página y ábralo de nuevo. Si una operación sigue fallando, selecciónela, lea su mensaje e intente {{key:Mod+Z}} hasta volver al último estado correcto.
