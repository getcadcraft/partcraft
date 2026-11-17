---
title: Escriba su propio análisis
summary: Cree un análisis como scripts en el espacio de trabajo Script: mallar la pieza, armar y resolver, mostrar el campo y un gráfico de convergencia, verificar el resultado contra un cálculo a mano, y guardar los pasos como scripts separados que comparten variables
keywords: análisis propio, análisis personalizado, script de FEA, elemento finito, armar, rigidez, condiciones de frontera, resolver, pcg, dispersa, campo, posprocesar, convergencia, verificación, cálculo a mano, comprobación, flujo de trabajo
from: 0f471a8e
---

Un análisis en el espacio de trabajo Script son unos pocos scripts cortos que se pasan variables entre sí. Parta de una [biblioteca](topic:craftscript-library) cercana a lo que necesita, haga una copia y cámbiela; o construya uno como se indica abajo.

## 1. Una malla

```
model = part();                  % la pieza que está modelando, como modelo
m = tetmesh(model, 4);           % tetraedros de unos 4 mm
show(m)
```

Revise la malla en la vista antes de seguir: {{key:F}} ajusta la vista, y el {{ui:ojo}} en **Mostrados** oculta la pieza.

## 2. Armar y resolver

Escriba el ciclo sobre los elementos en el script (se lee como el libro de texto), y deje las partes pesadas a las funciones integradas: matrices de elementos, armado disperso a partir de tripletas, y el solucionador de gradiente conjugado con precondicionador. Una función de la biblioteca como `static_tet` (cuando la biblioteca la tenga) es un ejemplo completo para copiar.

## 3. Muestre el resultado

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % un valor por nodo
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Residual del solucionador', 'id', 'conv')
```

- El rango de la leyenda puede escribirse o regresarse a {{ui:Auto}}.
- Haga clic en la malla para leer los valores en un nodo.
- Un gráfico que conserva el mismo `'id'` se actualiza en su lugar, así que imprima y grafique dentro de su ciclo para ver la convergencia.

## 4. Verifíquelo

Compare con algo que conozca: la flecha de la punta de una viga en voladizo contra PL³/3EI, una placa con agujero contra su factor de concentración de esfuerzos, las reacciones contra las cargas. Escriba la verificación como su propio script para que se ejecute de nuevo después de cada cambio:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Guárdelo

- Cada paso puede ser su propia pestaña de script: comparten las variables, así que ejecútelos uno tras otro.
- Los scripts se guardan en la pieza. En la pestaña **Variables**, marque **Guardar las variables con la pieza** para conservar también los resultados (hasta 32 MB).
- {{ui:Guardar}} en el grupo Script descarga un script para compartirlo; {{ui:Abrir}} lo trae.
