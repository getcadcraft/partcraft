---
title: Comprobar tensión y deformación (Simulación)
summary: Elija un material, fije caras, añada fuerzas, presiones o el peso propio de la pieza, resuelva y lea la tensión de von Mises, el desplazamiento, el coeficiente de seguridad, las reacciones y las frecuencias naturales sobre el modelo, con lo que el método puede y no puede indicarle.
keywords: simulación, FEA, análisis en vivo, actualizar al editar, romper, qué se rompe primero, factor de carga, no lineal, plasticidad, fluencia, deformación plástica, bilineal, contacto, par de contacto, penalización, unido, contacto sin fricción, CalculiX, .inp, .frd, elementos finitos, tensión, deformación, von Mises, desplazamiento, deflexión, coeficiente de seguridad, factor de seguridad, límite elástico, reacción, carga, fuerza, presión, gravedad, peso propio, fijo, sin fricción, apoyo, restricción, material, acero, aluminio, titanio, ABS, PLA, nailon, frecuencia natural, modal, vibración, malla, tamaño de elemento, tetraédrica, tetraedros, malla de tetraedros, vóxel, calidad de malla, tensión principal, deformación equivalente, estimación de error, superficies curvas, agujeros, redondeos, adaptativo, refinamiento adaptativo, refinamiento automático, h-adaptativo, convergencia, convergencia de malla, superficie exacta, esfera, cono, toro, spline, forma libre
from: 6f2fdec1
---

El espacio de trabajo Simulación responde a "¿se doblará o se romperá bajo esta carga?" para la pieza que está modelando. Es un estudio **estático lineal** (pequeñas deflexiones, el material permanece elástico) o un estudio de **frecuencia natural**, resuelto en una malla de tetraedros cuadráticos que sigue las caras de la pieza (o, si lo elige, de pequeños cubos iguales). Funciona en las caras nombradas que da a la pieza el núcleo de malla (consulte [El núcleo de malla](topic:solid-kernels)).

Elija **Simulación** en el cuadro **Espacio de trabajo**, a la izquierda de la barra de herramientas. Su pieza no cambia; el estudio se guarda dentro del archivo de la pieza, y cada cambio en él se puede deshacer.

## Configurar un estudio

1. Pulse **Nuevo estudio** en el panel derecho.
2. Elija el **Material**. El panel muestra su rigidez (E), el coeficiente de Poisson, la densidad y el límite elástico. Los valores son cifras típicas de manuales; los valores certificados de su proveedor pueden diferir.
3. Elija la **Malla**:
   - **Tetraédrica (precisa)**, la predeterminada: tetraedros de 10 nodos cuyas caras exteriores quedan sobre las caras de la pieza, con aristas curvas en agujeros, redondeos y otras caras redondeadas. Los nodos de caras planas, cilíndricas, cónicas, esféricas y toroidales, de caras generadas por revolución y extrusión, y de caras de forma libre (B-spline) quedan sobre la superficie exacta; cualquier otro tipo de cara sigue su malla de visualización, y la tabla de resultados indica cuántas caras lo hicieron. La malla se hace más fina por sí misma cerca de caras curvas, paredes finas y aristas vivas.
   - **Cubos de vóxel (rápida)**: la pieza rellena con cubos iguales. Es rápida, pero las caras curvas se convierten en escalones. Los estudios guardados antes de existir la malla tetraédrica conservan este modo.
4. Deje **Tamaño de elemento** vacío para un tamaño automático (unos 12,000 tetraedros, o 20,000 cubos), o escriba uno en milímetros. El panel muestra aproximadamente cuántos elementos resultan antes de añadir los puntos más finos. Con tetraedros, **Elementos más pequeños en caras curvas** (activado por defecto) refina agujeros y redondeos, donde la tensión suele alcanzar su pico.

### Refinar automáticamente

Con tetraedros, un estudio estático o de pandeo (sin carga térmica), un estudio de frecuencia natural y un estudio térmico estacionario ofrecen **Refinar automáticamente (adaptativo)**. Márquelo y configure:

- **Error objetivo (%)**: la resolución se detiene cuando el error estimado queda por debajo (1 % al inicio).
- **Pasadas máximas**: el máximo de resoluciones que puede ejecutar (5 al inicio, como máximo 10).

Cada pasada resuelve, encuentra los elementos con mayor error estimado, los divide (y tantos vecinos como haga falta para mantener la malla íntegra) y vuelve a resolver. Los nuevos nodos en caras curvas se colocan sobre la superficie exacta. Los resultados muestran entonces una tabla y un gráfico con, para cada pasada, los elementos, las incógnitas, el error estimado, la tensión máxima (o temperatura) y el desplazamiento (o flujo de calor), y una línea que indica por qué se detuvo: se alcanzó el objetivo, se agotaron las pasadas, la siguiente malla sería demasiado grande, o una pasada falló (entonces ve la última pasada correcta).

Lea la estimación como lo que es: una estimación. Es (Zienkiewicz–Zhu; comparado con respuestas exactas, lee entre 0.6 y 0.95 del error real) mide el error en **toda la pieza**, así que un pico de tensión en un agujero o en un redondeo suele seguir algo impreciso cuando la estimación parece pequeña: para una concentración de tensiones, fije el objetivo por debajo del 1 % y observe cómo se estabiliza el pico de una pasada a otra. En una esquina interior viva o en el borde de una cara fija, la tensión real es infinita, así que la estimación nunca llega allí: las pasadas se agotan en su lugar.

**Frecuencias naturales y pandeo.** En un estudio de frecuencia natural la estimación cubre cada modo que pidió, contando cada uno por igual; la tabla y el gráfico siguen las dos primeras frecuencias. En una pieza solo con caras planas, una frecuencia solo puede bajar de una pasada a otra (cada malla conserva la anterior); las caras curvas también se acercan a su forma real, lo que puede mover una frecuencia un poco en cualquier sentido. En pandeo, la estimación cubre la pretensión y los modos de pandeo, y la tabla sigue los factores de carga. Comprobado en una barra de acero de 100 × 10 × 10 mm: la primera frecuencia se estabiliza de 812.4 a 811.9 Hz en cuatro pasadas, 0.4 % por debajo de Euler–Bernoulli (que ignora el cortante), y el factor de carga de la columna dentro del 0.5 % de Euler.

## Sujetarla y cargarla

Cada estudio necesita al menos un apoyo y, para la tensión, una carga.

1. Pulse {{ui:Fija}} en la barra de herramientas. El nuevo apoyo queda seleccionado y espera caras: haga clic en las caras que quedan inmóviles (haga clic de nuevo en una cara para quitarla). Pulse **Terminar selección** o {{key:Esc}} al acabar. Conos azules marcan las caras sujetas.
2. Pulse {{ui:Fuerza}} y haga clic en las caras sobre las que actúa la fuerza. En el panel escriba la **Fuerza total** en newtons y elija su **Dirección**: hacia dentro de la cara, o a lo largo de un eje. La fuerza se reparte entre las caras elegidas según su área. Flechas naranjas la muestran.
3. Pulse {{ui:Presión}} para una presión en MPa (N/mm²) que empuja hacia dentro de las caras elegidas; una presión negativa tira.

Más tipos aparecen en la lista **Añadir** del panel: una **Cara sin fricción** (la cara puede deslizarse sobre sí misma, pero no alejarse de ella: úsela para planos de simetría y apoyos lisos) y **Gravedad** (el peso propio de la pieza, 9.81 m/s², en la dirección que elija).

Un apoyo que deja la pieza libre para deslizarse o girar se rechaza, indicando qué movimiento queda libre.

## Resolver y leer los resultados

Pulse {{ui:Resolver}}. El trabajo se ejecuta en segundo plano; **Detener** lo cancela. Después:

- La pieza se colorea según la **tensión de von Mises**; elija **Desplazamiento** o **Coeficiente de seguridad** en **Mostrar**. La leyenda indica la escala.
- Señale la pieza para leer los valores bajo el puntero.
- Marque **Forma deformada** para ver la pieza doblada (el movimiento se amplía con la **Escala**; el real está en la tabla).
- La tabla enumera la mayor tensión y dónde está, el mayor desplazamiento, el **coeficiente de seguridad** más bajo (límite elástico ÷ tensión de von Mises; por debajo de 1 el material cede), la carga aplicada y las **reacciones** en los apoyos (equilibran la carga), y la malla usada.

Para **frecuencias naturales**, elija ese **Tipo**, defina cuántos **Modos** y resuelva. Cada modo muestra su frecuencia y su forma (las formas se escalan a 1 en su mayor movimiento).

Si cambia la pieza, los resultados se marcan como no actualizados: vuelva a resolver.

## Fluencia y contacto (estudios no lineales)

Dos tipos de estudio más van más allá de "el material permanece elástico":

- **No lineal (el material cede)** sigue la recta del material hasta su límite elástico, y luego una pendiente más plana (**Pendiente tras la fluencia**, 1 % de E si se deja vacío). La carga se aplica en **Pasos de carga**; un paso que no se estabiliza se divide a la mitad por sí solo. Los resultados añaden **Deformación plástica** a los gráficos e indican cuánto de la carga se soportó. Si un paso aún no se estabiliza, el estudio se detiene en el último paso correcto, y el panel ⚠ Problemas indica dónde: allí la pieza se ha quedado sin resistencia (un colapso), o los pasos son demasiado grandes.
- **Contacto entre piezas** permite que piezas separadas de la pieza se empujen entre sí. Añada un **Par de contacto**, elija las caras del lado A (las que presionan) con {{ui:Seleccionar caras}}, y luego las del lado B con {{ui:Designar las caras del lado B}}. Las piezas **sin fricción** se empujan, deslizan y separan; las **unidas** permanecen pegadas. Cada pieza se malla por separado, así que un pequeño hueco entre ellas no es problema. El contacto es un método de penalización: las piezas se hunden ligeramente una en otra (el **factor de penalización** × E ÷ tamaño de elemento define la rigidez del contacto). La tabla muestra el mayor hundimiento, y el panel de Problemas avisa cuando supera el 1 % del tamaño de elemento: aumente el factor o use elementos más pequeños.

Ambos usan la malla tetraédrica. La fricción, el gran deslizamiento y las grandes rotaciones no se resuelven aquí.

## Ejecutar en CalculiX

**Exportar › Modelo de CalculiX (.inp)** (o {{ui:Guardar un modelo de CalculiX (.inp)}} en el panel) guarda el estudio como archivo de entrada para CalculiX, un programa aparte que usted instala y ejecuta: la misma malla, material, apoyos, cargas y pares de contacto, en mm, N y MPa. Ejecútelo, y luego **Exportar › Resultados de CalculiX (.frd)** lee su archivo de resultados sobre la misma malla y muestra el desplazamiento (y la tensión de von Mises cuando el archivo contiene tensiones). Si cambió la pieza o el tamaño de elemento entre medias, la malla ya no es la misma y PartCraft lo indica: guarde un nuevo modelo.

## Hasta dónde confiar

PartCraft comprueba su solver con fórmulas manuales (la deflexión en el extremo de una viga en voladizo PL³/3EI dentro del 1 %, el alargamiento de una barra PL/AE exacto, la primera frecuencia de un voladizo dentro del 3 %, la tensión alrededor de un agujero en una placa). Aun así, tenga en cuenta estos límites:

- **La malla.** Con tetraedros, PartCraft comprueba la deflexión y la tensión de flexión de un voladizo (dentro del 0.3 %), la tensión en un agujero de una placa (Kt, dentro de cerca del 1 %), un tubo grueso sometido a presión (Lamé, dentro del 0.3 %) y la primera frecuencia (dentro del 0.4 %). La tabla muestra la **calidad de la malla** (los ángulos más pequeños y más grandes entre caras de elementos; por debajo de unos 10° un elemento es malo) y un **error estimado de tensión**: si supera unos pocos por ciento, vuelva a resolver con un tamaño de elemento menor, o deje que **Refinar automáticamente** lo haga. En una placa con agujero y una barra con dos entallas en los bordes, el refinamiento automático alcanzó el Kt del libro de texto dentro del 1 % con cerca de una sexta parte de las incógnitas que necesitó afinar toda la malla. Con cubos de vóxel, un agujero o un redondeo es una escalera del tamaño del cubo, así que la tensión allí es aproximada.
- **Las esquinas interiores vivas y los bordes de caras fijas no tienen un pico de tensión real.** El valor allí sigue creciendo a medida que los elementos se hacen más pequeños. Lea las tensiones algo alejadas de esos lugares, o redondee la esquina en el modelo.
- **Resultados que puede leer.** Además de la tensión de von Mises, el desplazamiento y el coeficiente de seguridad, un estudio tetraédrico muestra la **tensión principal máxima y mínima** (tracción y compresión) y la **deformación equivalente**. Marque **Mostrar malla** para ver los elementos.
- **Los estudios estáticos son lineales y elásticos.** Para fluencia y contacto use los tipos de estudio no lineales anteriores; no se resuelven las grandes deflexiones ni la fatiga. El calor, la tensión térmica y el pandeo lineal son tipos de estudio propios: consulte [Calor, tensión térmica y pandeo](topic:thermal-and-buckling).
- **Todos los materiales son iguales en todas las direcciones.** Los plásticos impresos en 3D son más débiles a través de sus capas, a menudo en un tercio o más.
- Esto es una versión de laboratorio: compruebe de otra forma las piezas que importan.

## Actualizar mientras edita (En vivo)

Marque **Actualizar mientras edito** en el bloque Resolver y las respuestas de Simulación seguirán sus cambios. Cambie una cota, una carga, el material o el entorno, y aparece al instante una **respuesta rápida**, hecha con elementos cuatro veces mayores que los del estudio; cuando se detiene un momento (un segundo aproximadamente), la **respuesta refinada** del propio estudio reemplaza a la rápida. Los resultados indican cuál está viendo ("Respuesta rápida" o "Respuesta refinada") y el tamaño de elemento. La respuesta rápida sirve para la dirección y el tamaño: en un voladizo de acero estuvo dentro del 1 % en deflexión y cerca del 4 % en tensión de la refinada. Confíe en la refinada para las cifras que vaya a usar. Los estudios estáticos, de frecuencia natural, térmicos y de pandeo funcionan así; "En vivo" es un ajuste de vista y no se guarda en la pieza. Una resolución que pulse usted mismo se mantiene tal cual hasta la siguiente edición.

## Averiguar qué se rompe primero (Romper)

Para un estudio estático o de pandeo, pulse **¿Qué se rompe primero?** en el bloque **Romper**. PartCraft escala las cargas del estudio (fuerzas, presiones y peso juntos) hasta que la pieza cede, y enumera, de peor a mejor, **el factor de carga hasta la primera fluencia** (el factor sobre las cargas actuales en el que la mayor tensión de von Mises alcanza el límite elástico del material, con un marcador rojo donde ocurre) y **el factor de carga hasta el pandeo** para los mismos apoyos y cargas. Un factor de 4.3 significa que la pieza soporta 4.3 veces su carga antes de ceder; **un factor inferior a 1 significa que ya cede tal como está cargada**, y aparece en la lista de Problemas como error (el hallazgo más débil se muestra como nota incluso cuando todo cumple). Los factores provienen de un estudio lineal sobre tetraedros con su tamaño de elemento, así que valen lo que valga ese estudio: la tensión en una cara fija o en una esquina viva no tiene pico real (véase más arriba), y el factor de fluencia estará del lado de la cautela allí. Su asistente puede ejecutar la misma comprobación con la herramienta `break_run`.

## Relacionado

- [Calor, tensión térmica y pandeo](topic:thermal-and-buckling)
- [Crear una forma a partir de cargas (Generativo)](topic:generative-design)
- [Medir distancias, ángulos y masa](topic:measure)
- [Lo que aún no está construido](topic:not-built-yet)
