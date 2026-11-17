---
title: Hacer crecer una forma a partir de cargas (Generativo)
summary: Elegí las caras sostenidas y cargadas, las zonas que deben mantenerse y las que deben quedar libres, los volúmenes objetivo y los materiales, y generá resultados: las formas más rígidas encontradas para cada volumen, verificadas de nuevo como sólidos, comparadas en una tabla y descargadas como STL, STEP o una pieza nueva.
keywords: diseño generativo, optimización topológica, SIMP, aligerado, retícula, forma orgánica, resultados, comparar, masa, fracción de volumen, conservar, mantener dentro, obstáculo, mantener libre, espacio de diseño, tamaño mínimo de miembro, STL, impresión 3D
from: 5b91fa8e
---

El espacio de trabajo Generativo quita el material que las cargas no necesitan. Indicás dónde está sostenida y cargada la pieza, qué debe quedarse y qué debe quedar libre; PartCraft encuentra la forma más rígida para cada volumen objetivo (**optimización topológica**), verifica cada una de nuevo como sólido con el material real, y muestra los resultados uno al lado del otro. Funciona sobre las caras nombradas que el [kernel de malla](topic:solid-kernels) da a la pieza.

Elegí **Generativo** en la caja **Espacio de trabajo**. Tu pieza no cambia; el estudio se guarda dentro del archivo de la pieza.

## Armá un estudio

1. Apretá **Nuevo estudio** en el panel derecho.
2. **Espacio**: *La pieza tal como está* quita material de tu pieza; *Una caja alrededor de la pieza* hace crecer una forma dentro de una caja más grande que la pieza por el **Margen de la caja**.
3. **Tamaño del elemento**: dejalo vacío para un tamaño automático (unos 8.000 cubos), o escribí uno. Tamaños más finos dan formas más finas y tardan más.
4. **Miembro mínimo**: los miembros más delgados que unas dos veces esto no se forman. Vacío significa un cubo y medio.
5. Marcá de uno a seis **Volúmenes objetivo** (la parte del espacio de diseño que la forma puede llenar) y de uno a cuatro **Materiales**. Cada volumen se genera una vez; cada material se verifica sobre esa forma (la forma más rígida no depende del material, pero su masa, tensión y factor de seguridad sí).

## Objetivos

- {{ui:Fijo}}: hacé clic en las caras que se sostienen. Una **Cara sin fricción** de la lista **Agregar** del panel sostiene una cara solo a lo largo de sí misma (usala para planos de simetría).
- {{ui:Fuerza}}: hacé clic en las caras cargadas, después escribí la fuerza total y elegí su dirección en el panel. **Presión** está en la lista **Agregar**.
- {{ui:Conservar}}: hacé clic en las caras cuyos alrededores deben quedar sólidos, y poné qué tan profundo (**Mantener sólido dentro de**) — por ejemplo alrededor de agujeros para pernos. Las caras que fijás o cargás siempre se mantienen.
- {{ui:Obstáculo}}: hacé clic en las caras cuyos alrededores deben quedar vacíos, y poné qué tan lejos (**Mantener vacío dentro de**) — espacio para un eje o una herramienta.

Apretá **Terminar selección** o {{key:Esc}} después de hacer clic en las caras. Los tintes verde y rojo muestran las zonas.

## Generar y comparar

Apretá {{ui:Generar}}. El panel muestra el avance y el tiempo restante; **Detener** cancela. Cada resultado aparece en la tabla **Resultados**: volumen objetivo, material, **masa**, **tensión máxima**, **desplazamiento máximo** y **factor de seguridad** (límite elástico ÷ tensión), todo a partir de volver a resolver la forma terminada como cubos sólidos con el material real.

Elegí un resultado para verlo en la vista (la pieza queda oculta; marcá **Mostrar la pieza a través** para ver ambas). Debajo de la tabla: cuántas iteraciones tomó y si se estabilizó, su rigidez como sólido frente a la cifra propia del optimizador, y su superficie.

## Usar un resultado

- **STL**: una malla triangular cerrada, lista para impresión 3D.
- **STEP (facetado)**: la misma superficie como sólido STEP hecho de caras planas.
- **Archivo de pieza nuevo**: una pieza de PartCraft cuya única función es el resultado como sólido importado. Abrila para bocetar sobre ella, hacer agujeros o verificarla en Simulación. Es facetada (miles de caras planas), no una forma editable.
- **Agregar a esta pieza** une el resultado a la pieza; solo está activo para un diseño en caja como espacio (con la propia pieza como espacio, el resultado queda dentro de la pieza).

**Archivo de pieza nuevo** y **Agregar a esta pieza** todavía no están construidos en esta versión: el resultado se convierte en un sólido importado, lo que necesita un kernel exacto. Las descargas STL y STEP (facetado) funcionan.

## Cuánto confiar en él

- Optimiza la **rigidez** para el volumen dado. Todavía no hay límites de tensión ni reglas de fabricación (voladizos, direcciones de fresado, tamaños mínimos de agujero): verificá un resultado elegido en [Simulación](topic:simulation) y ajustalo.
- Los miembros delgados de uno o dos cubos de ancho son aproximaciones: usá un tamaño de elemento más chico para piezas esbeltas.
- El método es SIMP con un filtro de densidad, una proyección de umbral y actualizaciones por criterio de optimalidad; la tensión y la deflexión informadas son del resultado como cubos, lo que es honesto pero grueso en esquinas agudas.

## Relacionado

- [Verificar tensión y deflexión (Simulación)](topic:simulation)
- [Exportar para impresión, STEP y DXF](topic:export-files)
- [Lo que todavía no está construido](topic:not-built-yet)
