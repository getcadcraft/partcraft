---
title: Solid FEM: comprobación de tensión dunha peza
summary: Active o complemento Solid FEM, malle unha peza, escolla caras fixas e unha carga na vista 3D, resolva e lea o desprazamento e a tensión de von Mises no modelo.
keywords: solid fem, elementos finitos, fea, tensión, von Mises, desprazamento, cara fixa, carga, presión, gravidade, frecuencia natural, forma modal, malla, complemento
from: 8b7e6ba2
---

## Que vai facer

Comprobe unha peza sólida baixo unha carga: onde se move e onde é máxima a tensión. O estudo é lineal e elástico, así que é unha axuda para comprobar; o seu enxeñeiro revisa os resultados.

## Pasos

1. Escolla {{ui:Settings}} › {{ui:Add-ons}} e active {{ui:Solid FEM}} (está desactivado ata que o faga). Abra a lapela {{ui:Solid FEM}} no panel dereito.
2. Baixo {{ui:Material}} escolla un, ou {{ui:Custom}} e escriba o coeficiente de Poisson, a densidade e o límite elástico.
3. Prema {{ui:Add fixed faces}}, faga clic nas caras suxeitas na vista 3D e logo prema {{ui:Done picking}}.
4. Engada unha carga con {{ui:Add force}}, {{ui:Add pressure}} ou {{ui:Add gravity}} e escolla as súas caras do mesmo xeito.
5. Prema {{ui:Mesh the part}} e logo {{ui:Solve}}. Escolla primeiro {{ui:Natural frequencies}} baixo {{ui:Study}} se quere frecuencias.
6. Lea {{ui:Results}} e {{ui:Warnings}}, e logo prema {{ui:Show on the model}} para debuxar a tensión de von Mises, o desprazamento ou unha forma modal; {{ui:Remove the plot}} quítao.

## Notas

- A páxina resolve ata un número fixo de elementos; a liña de estado indica cando o tamaño de elemento é demasiado fino.
- A tensión nas caras fixas, nos puntos de carga e nas esquinas agudas aumenta ao refinar a malla. Refine e compare antes de fiarse dun pico.
- Cada cambio é un paso de desfacer, e a configuración gárdase no ficheiro da peza.
- Para estudos de fluencia e de contacto, consulte [Comprobar tensión e frecha](topic:simulation).
