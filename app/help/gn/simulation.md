---
title: Revisar tensión y deflexión (Simulación)
summary: Elegir un material, fijar caras, agregar fuerzas, presiones o el peso propio de la pieza, resolver y leer la tensión de von Mises, el desplazamiento, el factor de seguridad, las reacciones y las frecuencias naturales sobre el modelo, con lo que el método puede y no puede decir.
keywords: simulación, FEA, análisis en vivo, actualizar al editar, romperlo, qué se rompe primero, factor de carga, no lineal, plasticidad, fluencia, deformación plástica, bilineal, contacto, par de contacto, penalización, unido, contacto sin fricción, CalculiX, .inp, .frd, elementos finitos, tensión, deformación, von Mises, desplazamiento, deflexión, factor de seguridad, límite de fluencia, reacción, carga, fuerza, presión, gravedad, peso propio, fijo, sin fricción, apoyo, restricción, material, acero, aluminio, titanio, ABS, PLA, nailon, frecuencia natural, modal, vibración, malla, tamaño de elemento, tetraédrico, tetraedros, malla de tetraedros, vóxel, calidad de malla, tensión principal, deformación equivalente, estimación de error, superficies curvas, agujeros, redondeos, adaptativo, refinamiento adaptativo, refinamiento automático, h-adaptativo, convergencia, convergencia de malla, superficie exacta, esfera, cono, toro, spline, forma libre
from: 6f2fdec1
---

El espacio de trabajo de Simulación responde "¿se doblará o romperá bajo esta carga?" para la pieza que se está modelando. Es un estudio **estático lineal** (pequeñas deflexiones, el material permanece elástico) o un estudio de **frecuencia natural**, resuelto sobre una malla de tetraedros cuadráticos que sigue las caras de la pieza (o, si se elige, de pequeños cubos iguales). Funciona sobre las caras nombradas que el núcleo de malla da a la pieza (vea [El núcleo de malla](topic:solid-kernels)).

Elija **Simulación** en el cuadro **Espacio de trabajo**, a la izquierda de la barra de herramientas. La pieza no cambia; el estudio se guarda dentro del archivo de la pieza y cada cambio en él se puede deshacer.

## Configurar un estudio

1. Presione **Nuevo estudio** en el panel derecho.
2. Elija el **Material**. El panel muestra su rigidez (E), el coeficiente de Poisson, la densidad y la resistencia a la fluencia. Los valores son cifras típicas de manual; los valores certificados de su proveedor pueden diferir.
3. Elija la **Malla**:
   - **Tetraédrica (precisa)**, la predeterminada: tetraedros de 10 nodos cuyas caras exteriores quedan sobre las caras de la pieza, con aristas curvas en agujeros, redondeos y otras caras redondeadas. Los nodos de caras planas, cilíndricas, cónicas, esféricas y toroidales, caras de revolución y extruidas, y caras de forma libre (B-spline) quedan sobre la superficie exacta; cualquier otro tipo de cara sigue su malla de visualización, y la tabla de resultados indica cuántas caras lo hicieron. La malla se vuelve más fina por sí sola cerca de caras curvas, paredes delgadas y aristas agudas.
   - **Cubos de vóxel (rápida)**: la pieza llena de cubos iguales. Rápida, pero las caras curvas se vuelven escalones. Los estudios guardados antes de que existiera la malla tetraédrica conservan esta.
4. Deje **Tamaño de elemento** vacío para un tamaño automático (unos 12.000 tetraedros, o 20.000 cubos), o escriba uno en milímetros. El panel muestra aproximadamente cuántos elementos resultan antes de agregar los puntos más finos. Con tetraedros, **Elementos más pequeños en caras curvas** (activado por defecto) refina agujeros y redondeos, donde normalmente se concentra la tensión.

### Refinar automáticamente

Con tetraedros, un estudio estático o de pandeo (sin carga térmica), un estudio de frecuencia natural y un estudio térmico estable ofrecen **Refinar automáticamente (adaptativo)**. Márquelo y configure:

- **Error objetivo (%)**: la resolución se detiene cuando el error estimado queda por debajo (1 % al inicio).
- **Pasadas máximas**: la mayor cantidad de resoluciones que puede ejecutar (5 al inicio, como máximo 10).

Cada pasada resuelve, encuentra los elementos con el mayor error estimado, los divide (y los vecinos necesarios para mantener la malla íntegra), y vuelve a resolver. Los nuevos nodos en caras curvas van a la superficie exacta. Los resultados muestran entonces una tabla y un gráfico con, para cada pasada, los elementos, las incógnitas, el error estimado, la tensión máxima (o temperatura) y el desplazamiento (o flujo de calor), y una línea que explica por qué se detuvo: se cumplió el objetivo, se acabaron las pasadas, la siguiente malla sería demasiado grande, o una pasada falló (entonces se ve la última buena).

Lea la estimación como una estimación. Esta (Zienkiewicz–Zhu; comparada con respuestas exactas, da entre 0,6 y 0,95 del error real) mide el error sobre **toda la pieza**, así que una tensión máxima en un agujero o un redondeo suele seguir un poco desviada cuando la estimación parece pequeña: para una concentración de tensión, fije el objetivo por debajo de 1 % y observe cómo se estabiliza el máximo de pasada en pasada. En una esquina interior aguda o en el borde de una cara fija la tensión real es infinita, así que la estimación nunca llega allí: las pasadas se agotan en su lugar.

**Frecuencias naturales y pandeo.** Para un estudio de frecuencia natural, la estimación cubre cada modo solicitado, contado por igual; la tabla y el gráfico siguen las dos primeras frecuencias. En una pieza solo con caras planas, una frecuencia solo puede bajar de pasada en pasada (cada malla contiene a la anterior); las caras curvas también se acercan a su forma real, lo que puede mover una frecuencia un poco en cualquier dirección. Para el pandeo, la estimación cubre la pretensión y los modos de pandeo, y la tabla sigue los factores de carga. Verificado en una barra de acero de 100 × 10 × 10 mm: la primera frecuencia se estabiliza de 812,4 a 811,9 Hz en cuatro pasadas, 0,4 % por debajo de Euler–Bernoulli (que ignora el corte), y el factor de carga de la columna queda dentro de 0,5 % de Euler.

## Sujetarla y cargarla

Cada estudio necesita al menos un apoyo y, para la tensión, una carga.

1. Presione {{ui:Fijo}} en la barra de herramientas. El nuevo apoyo queda seleccionado y espera caras: haga clic en las caras que se mantienen quietas (haga clic de nuevo en una cara para quitarla). Presione **Terminar selección** o {{key:Esc}} al terminar. Conos azules marcan las caras sujetas.
2. Presione {{ui:Fuerza}} y haga clic en las caras sobre las que actúa la fuerza. En el panel escriba la **Fuerza total** en newtons y elija su **Dirección**: hacia la cara, o a lo largo de un eje. La fuerza se reparte entre las caras elegidas según su área. Flechas naranjas la muestran.
3. Presione {{ui:Presión}} para una presión en MPa (N/mm²) que empuja hacia las caras elegidas; una presión negativa tira.

Más tipos están en la lista **Agregar** del panel: una **Cara sin fricción** (la cara puede deslizarse sobre sí misma pero no alejarse de ella; úsela para planos de simetría y apoyos suaves) y **Gravedad** (el propio peso de la pieza, 9,81 m/s², en la dirección que elija).

Un apoyo que deja la pieza libre para deslizarse o girar se rechaza, indicando qué movimiento queda libre.

## Resolver y leer los resultados

Presione {{ui:Resolver}}. El trabajo corre en segundo plano; **Detener** lo cancela. Luego:

- La pieza se colorea según la **tensión de von Mises**; elija **Desplazamiento** o **Factor de seguridad** en **Mostrar**. La leyenda da la escala.
- Señale la pieza para leer los valores bajo el puntero.
- Marque **Forma deformada** para ver la pieza doblada (el movimiento se amplía con la **Escala**; el real está en la tabla).
- La tabla lista la mayor tensión y dónde está, el mayor desplazamiento, el **factor de seguridad** más pequeño (resistencia a la fluencia ÷ tensión de von Mises; por debajo de 1 el material cede), la carga aplicada y las **reacciones** en los apoyos (equilibran la carga), y la malla usada.

Para **frecuencias naturales**, elija ese **Tipo**, fije cuántos **Modos**, y resuelva. Cada modo muestra su frecuencia y forma (las formas se escalan a 1 en su mayor movimiento).

Si cambia la pieza, los resultados se marcan como desactualizados: vuelva a resolver.

## Fluencia y contacto (estudios no lineales)

Dos tipos de estudio más van más allá de "el material permanece elástico":

- **No lineal (el material cede)** sigue la línea recta del material hasta su tensión de fluencia, y luego una pendiente más plana (**Pendiente después de la fluencia**, 1 % de E si se deja en blanco). La carga continúa en **Pasos de carga**; un paso que no se estabiliza se divide a la mitad por sí solo. Los resultados agregan **Deformación plástica** a los gráficos e indican cuánto de la carga se soportó. Si un paso aún no se estabiliza, el estudio se detiene en el último paso bueno y el panel ⚠ Problemas indica dónde: la pieza agotó su resistencia allí (un colapso), o los pasos son demasiado grandes.
- **Contacto entre piezas** permite que piezas separadas de la pieza se empujen entre sí. Agregue un **Par de contacto**, elija las caras del lado A (las que presionan) con {{ui:Seleccionar caras}}, luego el lado B con {{ui:Elegir caras del lado B}}. Las piezas **sin fricción** empujan, deslizan y se separan; las piezas **unidas** quedan pegadas. Cada pieza se malla por separado, así que un pequeño hueco entre ellas no es problema. El contacto es un método de penalización: las piezas se hunden un poco entre sí (el **factor de penalización** × E ÷ tamaño de elemento fija la rigidez del contacto). La tabla muestra el hundimiento más profundo, y el panel de Problemas advierte cuando supera 1 % del tamaño de elemento: suba el factor o use elementos más pequeños.

Ambos usan la malla tetraédrica. La fricción, el gran deslizamiento y las grandes rotaciones no se resuelven aquí.

## Ejecutarla en CalculiX

**Exportar › CalculiX deck (.inp)** (o {{ui:Guardar un CalculiX deck (.inp)}} en el panel) guarda el estudio como un archivo de entrada para CalculiX, un programa aparte que usted instala y ejecuta: la misma malla, material, apoyos, cargas y pares de contacto, en mm, N y MPa. Ejecútelo, y luego **Exportar › Resultados de CalculiX (.frd)** lee su archivo de resultados de vuelta sobre la misma malla y muestra el desplazamiento (y la tensión de von Mises cuando el archivo tiene tensiones). Si cambió la pieza o el tamaño de elemento en el medio, la malla ya no es la misma y PartCraft lo indica: guarde un nuevo deck.

## Hasta dónde confiar

PartCraft verifica su solucionador contra fórmulas a mano (la deflexión de punta de un voladizo PL³/3EI dentro de 1 %, el alargamiento de una barra PL/AE exacto, la primera frecuencia de un voladizo dentro de 3 %, la tensión alrededor de un agujero en una placa). Aun así, tenga en cuenta estos límites:

- **La malla.** Con tetraedros, PartCraft verifica la deflexión y la tensión de flexión de un voladizo (dentro de 0,3 %), la tensión en un agujero de una placa (Kt, dentro de aproximadamente 1 %), un tubo grueso bajo presión (Lamé, dentro de 0,3 %) y la primera frecuencia (dentro de 0,4 %). La tabla muestra la **calidad de malla** (los ángulos más pequeños y más grandes entre caras de elementos; por debajo de unos 10° un elemento es malo) y un **error estimado de tensión**: si supera unos pocos por ciento, vuelva a resolver con un tamaño de elemento más pequeño, o deje que **Refinar automáticamente** lo haga. En una placa con agujero y una barra con dos muescas en el borde, el refinamiento automático llegó dentro de 1 % del Kt del libro de texto con cerca de una sexta parte de las incógnitas que requería afinar toda la malla. Con cubos de vóxel, un agujero o un redondeo es una escalera del tamaño del cubo, así que la tensión allí es aproximada.
- **Las esquinas interiores agudas y los bordes de caras fijas no tienen un pico de tensión real.** El valor allí sigue creciendo a medida que los elementos se hacen más pequeños. Lea las tensiones un poco alejadas de esos lugares, o redondee la esquina en el modelo.
- **Resultados a leer.** Además de la tensión de von Mises, el desplazamiento y el factor de seguridad, un estudio tetraédrico muestra la **tensión principal máxima y mínima** (tracción y compresión) y la **deformación equivalente**. Marque **Mostrar malla** para ver los elementos.
- **Los estudios estáticos son lineales y elásticos.** Para fluencia y contacto use los tipos de estudio no lineales de arriba; no se resuelven grandes deflexiones ni fatiga. Calor, tensión térmica y pandeo lineal son sus propios tipos de estudio: vea [Calor, tensión térmica y pandeo](topic:thermal-and-buckling).
- **Todos los materiales son iguales en todas las direcciones.** Los plásticos impresos en 3D son más débiles a través de sus capas, a menudo en un tercio o más.
- Esta es una versión de laboratorio: verifique de otra forma las piezas que importan.

## Actualizar mientras edita (En vivo)

Marque **Actualizar mientras edito** en el bloque Resolver y las respuestas de Simulación siguen sus cambios. Cambie una cota, una carga, el material o el entorno y aparece de inmediato una **respuesta rápida**, hecha con elementos cuatro veces más grandes que los del estudio; cuando se detiene un momento (un segundo aproximadamente), la **respuesta refinada** propia del estudio la reemplaza. Los resultados indican cuál se está viendo ("Respuesta rápida" o "Respuesta refinada") y el tamaño de elemento. La respuesta rápida sirve para la dirección y el tamaño: en un voladizo de acero estuvo dentro de 1 % en deflexión y cerca de 4 % en tensión de la refinada. Confíe en la refinada para los números que vaya a usar. Los estudios estáticos, de frecuencia natural, térmicos y de pandeo funcionan así; En vivo es un ajuste de vista y no se guarda en la pieza. Un Resolver que usted presione se mantiene hasta la siguiente edición.

## Descubrir qué se rompe primero (Romperlo)

Para un estudio estático o de pandeo, presione **¿Qué se rompe primero?** en el bloque **Romperlo**. PartCraft escala las cargas del estudio (fuerzas, presiones y peso juntos) hasta que la pieza cede, y lista, de peor a mejor, **el factor de carga hasta la primera fluencia** (el factor sobre las cargas de hoy en el que la mayor tensión de von Mises alcanza la resistencia del material, con un marcador rojo donde ocurre) y **el factor de carga hasta el pandeo** para los mismos apoyos y cargas. Un factor de 4,3 significa que la pieza soporta 4,3 veces su carga antes de ceder; **un factor menor que 1 significa que ya cede tal como está cargada**, y aparece en la lista de Problemas como error (el hallazgo más débil se muestra como nota aun cuando todo está bien). Los factores vienen de un estudio lineal sobre tetraedros con su tamaño de elemento, así que valen lo que vale ese estudio: la tensión en una cara fija o en una esquina aguda no tiene pico real (vea arriba), y el factor de fluencia estará del lado cauteloso allí. Su asistente puede hacer la misma comprobación con la herramienta `break_run`.

## Relacionados

- [Calor, tensión térmica y pandeo](topic:thermal-and-buckling)
- [Crear una forma a partir de cargas (Generativo)](topic:generative-design)
- [Medir distancias, ángulos y masa](topic:measure)
- [Lo que aún no está construido](topic:not-built-yet)
