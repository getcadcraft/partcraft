---
title: La biblioteca de análisis
summary: La biblioteca de scripts de análisis legibles del espacio de trabajo Script: qué hay en cada grupo, abrir una función en solo lectura, su encabezado con método, referencias y verificación, hacer su propia copia y cómo la copia sustituye a la función de la biblioteca
keywords: biblioteca, craftlib, análisis, electroimán, estático, modal, térmico, optimización topológica, top88, SIMP, electromagnetismo, electrostática, magnetostática, fluido, Boltzmann de retícula, LBM, malla, vóxel, tetraedros, referencias, verificación, comprobación, copia, sombra
from: bf993859
---

La biblioteca de análisis es un conjunto de scripts, cada uno una función que puede leer de arriba abajo: cómo se arma la matriz de rigidez, dónde van las condiciones de frontera, qué solucionador se ejecuta, cómo se calculan los resultados. Nada en ella está oculto en una caja negra; solo los ciclos internos rápidos (matrices de elementos, solucionadores dispersos, mallado) están integrados.

## Comience con un ejemplo

El grupo **Ejemplos** contiene cinco scripts cortos que usan la biblioteca de principio a fin. Haga clic en uno, pulse {{ui:Abrir (solo lectura)}} y luego {{key:F5}}: cada uno limpia la vista, muestra un resultado en el lienzo y un gráfico en las subpantallas.

| Ejemplo | Qué muestra |
|---|---|
| Esfuerzo en viga en voladizo | Una barra de acero de 100 × 10 × 10 mm bajo una carga de 100 N en la punta: esfuerzo de von Mises en la barra deformada, y la flecha de la punta contra la teoría de vigas en cuatro tamaños de elemento (graficado) |
| Optimización topológica de viga MBB | La clásica optimización topológica de 60 × 20: la formación del diseño, la caída de la flexibilidad, la disposición final (94 iteraciones, flexibilidad 203.19) |
| Campo de capacitor | Dos placas de 4 mm de ancho separadas 1 mm: potencial y campo, la capacitancia con efecto de borde contra el valor ideal y la fórmula de Palmer |
| Flujo en canal | Flujo Lattice Boltzmann alrededor de un poste en un canal: el campo de velocidades y el historial de convergencia |
| Electroimán | Un núcleo de hierro en forma de C con entrehierro y una bobina: la densidad de flujo magnético, el campo en el entrehierro contra la fórmula del circuito magnético, la inductancia y la atracción a través del entrehierro. Explicado en [Campos magnéticos en 2-D](topic:magnetic-fields-2d) |
| Imán permanente | El mismo núcleo con un imán permanente en lugar de la bobina: el punto de trabajo del imán, el campo en el entrehierro contra el circuito magnético, cuánto flujo se fuga, la atracción. En [Campos magnéticos en 2-D](topic:magnetic-fields-2d#permanent-magnets) |

## Grupos

| Grupo | Funciones | Qué hacen |
|---|---|---|
| Mallado | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Cajas y cilindros como hexaedros, cubos o tetraedros; cubos o tetraedros de cualquier modelo (la pieza, un cuerpo, un STL cargado); volúmenes y calidad de elementos; selección de nodos en un plano o una cara |
| Esfuerzo estático | `static_voxel`, `static_tet` | Esfuerzo estático lineal en cubos o en tetraedros de 10 nodos: desplazamientos, esfuerzos, von Mises, reacciones |
| Marcos | `frame3d` | Marcos 3D de vigas, columnas y contravientos por el método de rigidez directa: liberaciones en los extremos, apoyos y resortes, cargas a lo largo de los miembros; desplazamientos, reacciones, fuerzas en los extremos de los miembros. El {{ui:Exportar como CraftScript}} de DetailCraft y BimCraft escribe un modelo completo para esta función. Es una ayuda de análisis, no una verificación de código |
| Vibración | `modal_tet` | Frecuencias naturales y formas modales |
| Calor | `heat_steady`, `heat_transient`, `heat_system` | Conducción estacionaria y transitoria con temperaturas fijas, aporte de calor, generación, flujo y convección |
| Optimización topológica | `top88`, `top99`, `topopt3d` | Los códigos 2-D publicados de 88 y 99 líneas, y el mismo método en 3-D sobre cubos |
| Electromagnetismo | `poisson2d`, `magnetostatic2d` | Electrostática 2-D (potencial, campo, capacitancia, carga) y magnetostática (potencial vectorial, densidad de flujo, imanes permanentes) |
| Flujo de fluidos | `lbm2d`, `lbm3d` | Flujo Lattice Boltzmann: 2-D escrito en el script, 3-D sobre el propio núcleo de flujo de PartCraft |

El encabezado de cada función da sus argumentos exactos. Las unidades son las de los estudios de PartCraft, salvo que el encabezado diga otra cosa: milímetros, newtons, megapascales, toneladas por milímetro cúbico para la densidad, watts y kelvin para el calor. Las funciones electromagnéticas y de Boltzmann de retícula trabajan en cualquier sistema de unidades consistente; sus encabezados indican cuál.

## Cómo se verifica la biblioteca

Cada encabezado de función termina con una **verificación**: un caso pequeño con respuesta conocida. Las pruebas de PartCraft ejecutan todas ellas, y donde PartCraft tiene su propio estudio para la misma tarea, la respuesta del script se compara con ese estudio en la misma malla:

- la flecha de la punta de la viga en voladizo contra la teoría de vigas (dentro de 0.2 % con cubos, 0.05 % con tetraedros), y contra los solucionadores del espacio de trabajo **Simulación** en la misma malla (iguales hasta muchos dígitos);
- la primera frecuencia de la viga contra la teoría de vigas (0.24 % más baja, como se espera en una viga corta) y contra el solucionador modal de **Simulación**;
- calor: una pared plana calentada, exactamente; un cuerpo pequeño que se enfría como dice la fórmula de capacidad concentrada; la temperatura de una losa que se extingue como dice la teoría;
- optimización topológica: `top88` reproduce las 94 iteraciones y la flexibilidad 203.1925 del artículo (y 218.8032 con el filtro de densidad); `topopt3d` termina con la misma flexibilidad que el espacio de trabajo **Generativo** con los mismos ajustes;
- la capacitancia de un capacitor y el campo de un solenoide largo contra sus valores de libro de texto, el campo del entrehierro del electroimán contra la fórmula del circuito magnético, y los imanes permanentes contra un imán redondo en el aire y contra un imán cerrado por una armadura de hierro;
- flujo en canal contra el perfil parabólico exacto.

## Lea una función

1. Abra la pestaña **Biblioteca** del panel de scripts.
2. Haga clic en una función. Su encabezado muestra: qué calcula, el método, las unidades, los supuestos y límites, las **referencias** (libro o artículo, con números de ecuación) y una **verificación**: un caso pequeño con respuesta conocida que ejecutan las pruebas propias de PartCraft.
3. {{ui:Abrir (solo lectura)}} abre el script completo en una pestaña con borde discontinuo. Puede ejecutarlo, seleccionar y ejecutar partes de él, pero no cambiarlo.

## Modifique una

Pulse {{ui:Crear una copia}} (o **Crear una copia para editar** arriba de una pestaña de solo lectura). La copia es un script de su pieza con el mismo nombre, así que se guarda con la pieza, y **cada llamada a esa función ahora usa su copia**; el editor lo indica arriba del script. Cambie el nombre de la copia para conservar las dos.

## Úsela

Llame a una función de la biblioteca desde cualquier script por su nombre, como a una función integrada:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Los resultados regresan como valores en el espacio de trabajo; los gráficos y campos que muestra aparecen en la vista y en las subpantallas.

Un análisis estático de la pieza abierta, por ejemplo, toma unas pocas líneas:

```
v = voxel_mesh(part(), 2);                   % cubos de 2 mm
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % sujetar la base
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N hacia abajo en la parte superior
r = static_voxel(v, 210000, 0.3, bc);       % acero
```

`r` contiene los desplazamientos, esfuerzos y reacciones; el esfuerzo de von Mises se dibuja sobre la pieza deformada. Para piezas curvas use `tet_mesh` y `static_tet`, que también pueden cargar y sujetar caras completas (`face_nodes`).

:::note
Las funciones de la biblioteca están escritas en CraftScript, y un script de Lua las llama mediante `cs`, como a las funciones integradas: `cs.static_tet(t, 200000, 0.3, bc)` (vea [Scripts en Lua](topic:craftscript-lua)). Cada función resuelve un material y un caso de carga; los encabezados enumeran lo que no está cubierto.
:::
