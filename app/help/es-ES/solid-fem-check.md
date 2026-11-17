---
title: Solid FEM: comprobación de tensiones de una pieza
summary: Active el complemento Solid FEM, genere la malla de una pieza, seleccione caras fijas y una carga en la vista 3D, resuelva y lea el desplazamiento y la tensión de von Mises sobre el modelo.
keywords: solid fem, elementos finitos, fea, tensión, von Mises, desplazamiento, cara fija, carga, presión, gravedad, frecuencia natural, modo de forma, malla, complemento
from: 8b7e6ba2
---

## Qué hará

Comprobará una pieza sólida bajo una carga: dónde se mueve y dónde es mayor la tensión. El estudio es lineal y elástico, por lo que es una ayuda para la comprobación; su ingeniero debe revisar los resultados.

## Pasos

1. Elija {{ui:Configuración}} › {{ui:Complementos}} y active {{ui:Solid FEM}} (está desactivado hasta que lo haga). Abra la pestaña {{ui:Solid FEM}} en el panel derecho.
2. En {{ui:Material}} elija uno, o {{ui:Personalizado}} y escriba el coeficiente de Poisson, la densidad y el límite elástico.
3. Pulse {{ui:Añadir caras fijas}}, haga clic en las caras que están sujetas en la vista 3D y luego pulse {{ui:Terminar selección}}.
4. Añada una carga con {{ui:Añadir fuerza}}, {{ui:Añadir presión}} o {{ui:Añadir gravedad}} y seleccione sus caras de la misma forma.
5. Pulse {{ui:Generar la malla de la pieza}} y luego {{ui:Resolver}}. Si quiere frecuencias, elija antes {{ui:Frecuencias naturales}} en {{ui:Estudio}}.
6. Lea {{ui:Resultados}} y {{ui:Advertencias}}, y luego pulse {{ui:Mostrar en el modelo}} para dibujar la tensión de von Mises, el desplazamiento o un modo de forma; {{ui:Quitar el gráfico}} lo retira.

## Notas

- La página resuelve hasta un número fijo de elementos; la barra de estado indica cuándo su tamaño de elemento es demasiado fino.
- La tensión en las caras fijas, los puntos de carga y las esquinas agudas aumenta al refinar la malla. Afine la malla y compare antes de fiarse de un máximo.
- Cada cambio es un paso de deshacer, y los ajustes se guardan en el archivo de la pieza.
- Para estudios de fluencia y de contacto consulte [Comprobar tensión y flecha](topic:simulation).
