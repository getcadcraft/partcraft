---
title: Acumulaciones de tolerancia
summary: Eiporavo caras cadena ensamblaje piezas rupi, ehecha mba'e heta separación fin-pe ikatu variar, peor caso ha RSS, cota tuichave primero ohechaukáva.
keywords: acumulación de tolerancia, acumulación, análisis de tolerancia, cadena de tolerancia, cadena de cotas, lazo, separación, holgura, peor caso, rss, raíz de la suma de cuadrados, tolerancia estadística, contribuyentes, sensibilidad, gd&t, tolerancia general, iso 2768
from: cbdb3159
---

**Acumulación** cota suma cadena rupi piezas heta-gui, ehecha mávapa resultado (generalmente separación) ikatu variar cada pieza tolerancias ryépe ojapo jave.

## Elegir la cadena

1. Ensamblaje abri ha eiporavo {{ui:Acumulación}} grupo Ensamblaje-pe. Tarjeta ojehecha vista rembe.
2. Eiporavo cadena mba'épa rupi ojapo: X, Y térã Z ensamblaje, térã {{ui:La normal de la primera cara}}.
3. Eme'ẽ {{ui:Elegir la cadena}} ha clic caras cadena rupi, **orden-pe**: separación peteĩ costado-gui oñepyrũ, piezas rupi oho, separación ambue costado-pe oñemboty.
4. Eme'ẽ {{ui:Listo}} térã Enter. Backspace ojejoavy última clic; Esc ojejoavy.

Pieza peteĩ-pe mokõi clic pieza cota ojapo (cadena rupi distancia). Ambue pieza clic ojapo **interfaz** piezas ryépe, upépe ojoaju; tolerancia ndoguerekói, nde ndojehai peve. Eslabones cadena rupi ha'e térã ojejoavy, lazo ojapo: separación nominal modelo ohechauka.

Ikatu avei {{ui:Agregar un eslabón}} mbo'ere ha nominal, tolerancia ha (+) térã (−) ndojoapýi ojeporu.

## Dar a cada eslabón su tolerancia

Eslabón peteĩ **superior** ha **inferior** desviación (ejemplo +0.1 ha −0.05). **Tolerancia desde** pieza-gui oikuaa:

- **Tolerancia general**: pieza plano cuadro Tolerancia campo (ver [Plano a PDF](topic:drawing-pdf)), ±0.1, +0.2/-0.1 térã ISO 2768-f, -m, -c, -v ohechaukáva (ISO 2768-1 lineal tolerancias, eslabón tamaño rehe). Pieza tolerancia general cadena elegida jave ojeporu.
- **GD&T**: pieza plano-pe marco control forma. Posición, perfil ha batido zonas ± tolerancia mitad ome'ẽ. Orientación térã forma tolerancia tamaño tolerancia-pe oĩ: cadena controlada superficie-pe añoite emoĩ. Ⓜ térã Ⓛ-pe zona tamaño ohechaukáva-pe; bono tolerancia ndojeporúi.
- **Escrita**: ejeporu número.

## Leer los resultados

- **Separación, nominal** ha tolerancias desigual jave **Separación, media** — +0.2/−0 ha +0/−0.1 rango mboguejy.
- **Peor caso**: tolerancia peteĩ jave límite-pe. Separación ko rango-gui ndoguejyva.
- **RSS** (raíz de la suma de cuadrados): tolerancia tres desviación estándar normal rehe, cuadrados suma raíz cuadrada. Heta ensamblaje peor caso-pe porã oĩ; kuatia piezas serie-pe usual estimación.
- Eme'ẽ **Separación, al menos** ha **Separación, como máximo**: peor caso ohupytýpa ohecha, ha RSS millón-pe ensamblaje mávapa ojapo ndojekuaáiva.
- Columna **#** eslabones **parte** RSS rupi ordena: primero ajusta, mayor diferencia.

{{ui:Guardar CSV}} eslabones, parte ha resultados oñeñandu. Acumulaciones ensamblaje archivo-pe oñesalva, cambio peteĩ peteĩ {{key:Mod+Z}} rupi.

:::note
Acumulación peteĩ dirección. Cadena ángulos térã giros ndojehai, sketches tolerancias tamaño ndojeikuaa: tolerancias escrita térã cuadro título rupi eme'ẽ.
:::
