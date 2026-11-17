---
title: Hacer crecer una forma a partir de cargas (generativo)
summary: Elija las caras sujetas y cargadas, las zonas que deben conservarse y las que deben quedar libres, los volúmenes objetivo y los materiales, y genere resultados: las formas más rígidas encontradas para cada volumen, comprobadas de nuevo como sólidos, comparadas en una tabla y descargadas como STL, STEP o una pieza nueva.
keywords: diseño generativo, optimización topológica, aligeramiento, retícula, forma orgánica, resultados, comparar, masa, fracción de volumen, conservar, mantener en material, obstáculo, mantener libre, espacio de diseño, tamaño mínimo de miembro, SIMP, STL, impresión 3D
from: 5b91fa8e
---

El espacio de trabajo Generativo elimina el material que las cargas no necesitan. Indica dónde se sujeta y se carga la pieza, qué debe permanecer y qué debe quedar libre; PartCraft encuentra la forma más rígida para cada volumen objetivo (**optimización topológica**), comprueba cada una de nuevo como sólido con el material real y muestra los resultados lado a lado. Trabaja sobre las caras con nombre que el núcleo de malla asigna a la pieza (véase [El núcleo de malla](topic:solid-kernels)).

Elija **Generativo** en el cuadro **Espacio de trabajo**. Su pieza no cambia; el estudio se guarda dentro del archivo de pieza.

## Configurar un estudio

1. Pulse **Nuevo estudio** en el panel derecho.
2. **Espacio**: *La pieza tal cual* quita material de su pieza; *Una caja alrededor de la pieza* hace crecer una forma dentro de una caja mayor que la pieza, en el **Margen de caja**.
3. **Tamaño del elemento**: déjelo vacío para un tamaño automático (unos 8,000 cubos), o escriba uno. Tamaños más finos dan formas más finas y tardan más.
4. **Miembro mínimo**: los miembros más delgados que unas dos veces este valor no se forman. Vacío significa uno y medio cubos.
5. Marque de uno a seis **Volúmenes objetivo** (la parte del espacio de diseño que la forma puede ocupar) y de uno a cuatro **Materiales**. Cada volumen se genera una vez; cada material se comprueba sobre esa forma (la forma más rígida no depende del material, pero su masa, su tensión y su coeficiente de seguridad sí).

## Objetivos

- {{ui:Fija}}: haga clic en las caras que se sujetan. Una **Cara sin fricción** de la lista **Añadir** del panel sujeta una cara solo en su propio plano (úsela para planos de simetría).
- {{ui:Fuerza}}: haga clic en las caras cargadas, luego escriba la fuerza total y elija su dirección en el panel. **Presión** está en la lista **Añadir**.
- {{ui:Conservar}}: haga clic en las caras cuyos alrededores deben permanecer sólidos, y ajuste la profundidad (**Mantener sólido dentro de**), por ejemplo alrededor de agujeros de tornillo. Las caras que sujeta o carga siempre se conservan.
- {{ui:Obstáculo}}: haga clic en las caras cuyos alrededores deben permanecer vacíos, y ajuste a qué distancia (**Mantener vacío dentro de**), por ejemplo espacio para un eje o una herramienta.

Pulse **Terminar selección** o {{key:Esc}} tras hacer clic en las caras. Los tintes verde y rojo muestran las zonas.

## Generar y comparar

Pulse {{ui:Generar}}. El panel muestra el progreso y el tiempo restante; **Detener** cancela. Cada resultado aparece en la tabla **Resultados**: volumen objetivo, material, **masa**, **tensión máxima**, **desplazamiento máximo** y **coeficiente de seguridad** (límite elástico ÷ tensión), todo ello de volver a resolver la forma terminada como cubos sólidos con el material real.

Elija un resultado para verlo en la vista (la pieza queda oculta; marque **Mostrar la pieza a través de él** para ver ambos). Debajo de la tabla: cuántas iteraciones tardó y si se estabilizó, su rigidez como sólido frente a la cifra propia del optimizador, y su superficie.

## Usar un resultado

- **STL**: una malla triangular cerrada, lista para impresión 3D.
- **STEP (facetado)**: la misma superficie como sólido STEP hecho de caras planas.
- **Archivo de pieza nuevo**: una pieza de PartCraft cuya única característica es el resultado como sólido importado. Ábrala para bocetar en ella, hacer agujeros o comprobarla en Simulación. Es facetada (miles de caras planas), no una forma editable.
- **Añadir a esta pieza** une el resultado a la pieza; solo está activo para un diseño en caja como espacio (con la propia pieza como espacio, el resultado queda dentro de la pieza).

**Archivo de pieza nuevo** y **Añadir a esta pieza** aún no están disponibles en esta versión: el resultado se convierte en un sólido importado, lo que requiere un núcleo exacto. Las descargas STL y STEP (facetado) funcionan.

## Hasta qué punto es fiable

- Optimiza la **rigidez** para el volumen dado. Todavía no hay límites de tensión ni reglas de fabricación (voladizos, direcciones de fresado, tamaños mínimos de agujero): compruebe un resultado elegido en [Simulación](topic:simulation) y ajústelo.
- Los miembros delgados de uno o dos cubos de ancho son aproximaciones: use un tamaño de elemento menor para piezas esbeltas.
- El método es SIMP con un filtro de densidad, una proyección de umbral y actualizaciones de criterios de optimalidad; la tensión y la flecha informadas son las del resultado como cubos, lo cual es honesto pero grueso en las esquinas agudas.

## Relacionado

- [Comprobar tensión y flecha (Simulación)](topic:simulation)
- [Exportar para impresión, STEP y DXF](topic:export-files)
- [Lo que aún no está disponible](topic:not-built-yet)
