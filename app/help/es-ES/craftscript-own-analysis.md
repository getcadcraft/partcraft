---
title: Escribir un análisis propio
summary: Construya un análisis con scripts del espacio de trabajo Script: mallar la pieza, ensamblar y resolver, mostrar el campo y un gráfico de convergencia, comprobar el resultado con un cálculo a mano y guardar los pasos como scripts separados que comparten variables.
keywords: análisis propio, análisis personalizado, script FEA, elementos finitos, ensamblar, rigidez, condiciones de contorno, resolver, pcg, dispersa, campo, postprocesado, convergencia, verificación, cálculo a mano, comprobación, flujo de trabajo
from: 0f471a8e
---

Un análisis en el espacio de trabajo Script son unos pocos scripts cortos que se pasan variables entre sí. Empiece con una [biblioteca](topic:craftscript-library) cercana a lo que necesita, cree una copia y cámbiela; o construya uno como se indica a continuación.

## 1. Una malla

```
model = part();                  % la pieza que modela, como modelo
m = tetmesh(model, 4);           % tetraedros de unos 4 mm
show(m)
```

Compruebe la malla en la vista antes de seguir: {{key:F}} ajusta la vista a ella, y el {{ui:ojo}} en **Mostrados** oculta la pieza.

## 2. Ensamblar y resolver

Escriba el bucle de elementos en el script (se lee como en el libro de texto), y deje las partes pesadas a las funciones integradas: matrices de elemento, ensamblado disperso a partir de tripletas y el solver de gradiente conjugado con un precondicionador. Una función de la biblioteca como `static_tet` (cuando la biblioteca la incluya) es un ejemplo completo para copiar.

## 3. Mostrar el resultado

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % un valor por nodo
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- El rango de la leyenda puede escribirse o volver a {{ui:Auto}}.
- Haga clic en la malla para leer los valores en un nodo.
- Un gráfico que mantiene el mismo `'id'` se actualiza en su sitio, así que imprima y dibuje dentro de su bucle para ver la convergencia.

## 4. Compruébelo

Compare con algo que conozca: la flecha del extremo de un voladizo frente a PL³/3EI, una placa con agujero frente a su factor de concentración de tensiones, las reacciones frente a las cargas. Escriba la comprobación como su propio script para que se vuelva a ejecutar después de cada cambio:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Guárdelo

- Cada paso puede tener su propia pestaña de script: comparten las variables, así que ejecútelos uno tras otro.
- Los scripts se guardan en la pieza. Marque **Guardar las variables con la pieza** en la pestaña Variables para conservar también los resultados (hasta 32 MB).
- {{ui:Guardar}} en el grupo Script descarga un script para compartirlo; {{ui:Abrir}} lo trae.
