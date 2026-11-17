---
title: Solid FEM: revisión de esfuerzo de una pieza
summary: Active el complemento Solid FEM, genere la malla de una pieza, elija caras fijas y una carga en la vista 3D, resuelva y lea el desplazamiento y el esfuerzo de von Mises sobre el modelo.
keywords: solid fem, elementos finitos, fea, esfuerzo, von mises, desplazamiento, cara fija, carga, presión, gravedad, frecuencia natural, forma modal, malla, complemento
from: 8b7e6ba2
---

## Lo que hará

Revise una pieza sólida bajo una carga: dónde se mueve y dónde es mayor el esfuerzo. El estudio es lineal y elástico, así que es una ayuda para la revisión; su ingeniero debe revisar los resultados.

## Pasos

1. Elija {{ui:Configuración}} › {{ui:Complementos}} y active {{ui:Solid FEM}} (está desactivado hasta que lo haga). Abra la pestaña {{ui:Solid FEM}} en el panel derecho.
2. En {{ui:Material}} elija uno, o {{ui:Personalizado}} y escriba el coeficiente de Poisson, la densidad y el límite de fluencia.
3. Pulse {{ui:Agregar caras fijas}}, haga clic en las caras que están sujetas en la vista 3D y luego pulse {{ui:Terminar selección}}.
4. Agregue una carga con {{ui:Agregar fuerza}}, {{ui:Agregar presión}} o {{ui:Agregar gravedad}} y elija sus caras de la misma forma.
5. Pulse {{ui:Generar malla de la pieza}} y luego {{ui:Resolver}}. Elija primero {{ui:Frecuencias naturales}} en {{ui:Estudio}} si quiere frecuencias.
6. Lea {{ui:Resultados}} y {{ui:Advertencias}}, y luego pulse {{ui:Mostrar en el modelo}} para dibujar el esfuerzo de von Mises, el desplazamiento o una forma modal; {{ui:Quitar el gráfico}} lo quita.

## Notas

- La página resuelve hasta un número fijo de elementos; la línea de estado indica cuándo el tamaño de su elemento es demasiado fino.
- El esfuerzo en caras fijas, puntos de carga y esquinas agudas crece al refinar la malla. Refine y compare antes de confiar en un pico.
- Cada cambio es un paso de deshacer, y la configuración se guarda en el archivo de la pieza.
- Para estudios de fluencia y contacto, vea [Revisar esfuerzo y deflexión](topic:simulation).
