---
title: La biblioteca de análisis
summary: La biblioteca de scripts de análisis legibles del espacio de trabajo Script: qué contiene cada grupo, abrir una función en solo lectura, su cabecera con método, referencias y comprobación, crear una copia propia y cómo la copia sustituye a la función de la biblioteca.
keywords: biblioteca, craftlib, análisis, electroimán, estático, modal, térmico, optimización topológica, top88, SIMP, electromagnetismo, electrostática, magnetostática, fluido, Boltzmann de red, LBM, malla, vóxel, tetraedros, referencias, comprobación, verificación, copia, sombra
from: bf993859
---

La biblioteca de análisis es un conjunto de scripts, cada uno una función que puede leer de arriba abajo: cómo se ensambla la matriz de rigidez, dónde van las condiciones de contorno, qué solver se ejecuta, cómo se calculan los resultados. Nada está oculto en una caja negra; solo los bucles internos rápidos (matrices de elemento, solvers dispersos, mallado) están integrados.

## Empiece con un ejemplo

El grupo **Ejemplos** contiene cinco scripts cortos que usan la biblioteca de principio a fin. Haga clic en uno, pulse {{ui:Abrir (solo lectura)}} y luego {{key:F5}}: cada uno borra la vista, muestra un resultado en el lienzo y un gráfico en las subpantallas.

| Ejemplo | Qué muestra |
|---|---|
| Tensión en voladizo | Una barra de acero de 100 × 10 × 10 mm bajo una carga de 100 N en el extremo: tensión de von Mises en la barra deformada, y la flecha del extremo frente a la teoría de vigas con cuatro tamaños de elemento (en gráfico) |
| Topología MBB | La clásica optimización topológica de 60 × 20: la formación del diseño, la caída de la flexibilidad, la disposición final (94 iteraciones, flexibilidad 203.19) |
| Campo de condensador | Dos placas de 4 mm de ancho separadas 1 mm: potencial y campo, la capacidad con efecto de borde frente al valor ideal y la fórmula de Palmer |
| Flujo en canal | Flujo de Boltzmann de red alrededor de un poste en un canal: el campo de velocidades y el historial de convergencia |
| Electroimán | Un núcleo de hierro en forma de C con entrehierro y una bobina: la densidad de flujo, el campo en el entrehierro frente a la fórmula del circuito magnético, la inductancia y la fuerza de atracción a través del entrehierro. Explicado paso a paso en [Campos magnéticos en 2D](topic:magnetic-fields-2d) |
| Imán permanente | El mismo núcleo con un imán permanente en lugar de la bobina: el punto de trabajo del imán, el campo en el entrehierro frente al circuito magnético, cuánto flujo se escapa y la fuerza. En [Campos magnéticos en 2D](topic:magnetic-fields-2d#permanent-magnets) |

## Grupos

| Grupo | Funciones | Qué hacen |
|---|---|---|
| Mallado | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Cajas y cilindros como hexaedros, cubos o tetraedros; cubos o tetraedros de cualquier modelo (la pieza, un cuerpo, un STL cargado); volúmenes y calidad de elementos; selección de nodos en un plano o en una cara |
| Tensión estática | `static_voxel`, `static_tet` | Tensión estática lineal en cubos o en tetraedros de 10 nodos: desplazamientos, tensiones, von Mises, reacciones |
| Marcos | `frame3d` | Marcos 3D de vigas, columnas y riostras por el método de la rigidez directa: liberaciones de extremos, apoyos y muelles, cargas a lo largo de las barras; desplazamientos, reacciones y esfuerzos en los extremos de las barras. El {{ui:Exportar como CraftScript}} de DetailCraft y de BimCraft escribe un modelo completo para él. Es una ayuda para el análisis, no una comprobación normativa |
| Vibración | `modal_tet` | Frecuencias naturales y formas de modo |
| Calor | `heat_steady`, `heat_transient`, `heat_system` | Conducción estacionaria y transitoria con temperaturas fijas, aporte de calor, generación, flujo y convección |
| Optimización topológica | `top88`, `top99`, `topopt3d` | Los códigos 2D publicados de 88 y 99 líneas, y el mismo método en 3D sobre cubos |
| Electromagnetismo | `poisson2d`, `magnetostatic2d` | Electrostática 2D (potencial, campo, capacidad, carga) y magnetostática (potencial vector, densidad de flujo, imanes permanentes) |
| Flujo de fluidos | `lbm2d`, `lbm3d` | Flujo de Boltzmann de red: el 2D escrito en el propio script, el 3D sobre el núcleo de flujo de PartCraft |

La cabecera de cada función indica sus argumentos exactos. Las unidades son las de los estudios de PartCraft salvo que la cabecera indique otra cosa: milímetros, newtons, megapascales, toneladas por milímetro cúbico para la densidad, vatios y kelvin para el calor. Las funciones electromagnéticas y de Boltzmann de red funcionan en cualquier sistema de unidades coherente; sus cabeceras indican cuál.

## Cómo se comprueba la biblioteca

La cabecera de cada función termina con una **comprobación**: un caso pequeño con respuesta conocida. Las pruebas de PartCraft ejecutan todas, y donde PartCraft tiene su propio estudio para el mismo trabajo, la respuesta del script se compara con ese estudio en la misma malla:

- la flecha del extremo del voladizo frente a la teoría de vigas (dentro del 0.2 % con cubos y del 0.05 % con tetraedros), y frente a los solvers del espacio de trabajo **Simulación** en la misma malla (iguales con muchas cifras);
- la primera frecuencia del voladizo frente a la teoría de vigas (0.24 % más baja, como cabe esperar en una viga corta) y frente al solver modal de **Simulación**;
- calor: una pared plana calentada exactamente, un cuerpo pequeño que se enfría como dice la fórmula de capacidad concentrada, la temperatura de una losa que decae como dice la teoría;
- optimización topológica: `top88` reproduce las 94 iteraciones y la flexibilidad 203.1925 del artículo (y 218.8032 con el filtro de densidad); `topopt3d` termina con la misma flexibilidad que el espacio de trabajo **Generativo** con los mismos ajustes;
- la capacidad de un condensador y el campo de un solenoide largo frente a sus valores de libro de texto, el campo en el entrehierro del electroimán frente a la fórmula del circuito magnético, y los imanes permanentes frente a un imán redondo en aire y un imán cerrado por una pieza de hierro de retorno;
- flujo en canal frente al perfil parabólico exacto.

## Leer una función

1. Abra la pestaña **Biblioteca** del panel de scripts.
2. Haga clic en una función. Su cabecera muestra: qué calcula, el método, unidades, supuestos y límites, las **referencias** (libro o artículo, con números de ecuación) y una **comprobación**: un caso pequeño con respuesta conocida que ejecutan las propias pruebas de PartCraft.
3. {{ui:Abrir (solo lectura)}} abre el script completo en una pestaña con borde discontinuo. Puede ejecutarlo y seleccionar y ejecutar partes de él, pero no cambiarlo.

## Cambiar una función

Pulse {{ui:Crear una copia}} (o **Crear una copia para editar** encima de una pestaña de solo lectura). La copia es un script de su pieza con el mismo nombre, así que se guarda con la pieza, y **cada llamada a esa función usa ahora su copia**: el editor lo indica encima del script. Cambie el nombre de la copia para conservar ambas.

## Usar una función

Llame a una función de la biblioteca desde cualquier script por su nombre, como a una función integrada:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Los resultados se devuelven como valores en el espacio de trabajo; los gráficos y campos que muestran aparecen en la vista y en las subpantallas.

Un análisis estático de la pieza abierta, por ejemplo, ocupa unas pocas líneas:

```
v = voxel_mesh(part(), 2);                   % cubos de 2 mm
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % sujetar la base
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N hacia abajo en la parte superior
r = static_voxel(v, 210000, 0.3, bc);       % acero
```

`r` contiene los desplazamientos, tensiones y reacciones; la tensión de von Mises se dibuja sobre la pieza deformada. Para piezas curvas use `tet_mesh` y `static_tet`, que también pueden cargar y sujetar caras completas (`face_nodes`).

:::note
Las funciones de la biblioteca están escritas en CraftScript, y un script Lua las llama mediante `cs` como a las funciones integradas: `cs.static_tet(t, 200000, 0.3, bc)` (véase [Scripts en Lua](topic:craftscript-lua)). Cada función resuelve un material y un caso de carga; las cabeceras indican qué más no está cubierto.
:::
