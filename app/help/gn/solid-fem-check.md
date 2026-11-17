---
title: Solid FEM: peteĩ chequeo de tensión de peteĩ pieza
summary: Eñapo Solid FEM complemento, eiporu malla peteĩ pieza, eiporu cara fijas ha carga 3D vista-pe, resolvé, ha eñehesa desplazamiento ha tensión de von Mises modelo-pe.
keywords: solid fem, elementos finitos, fea, tensión, von Mises, desplazamiento, cara fija, carga, presión, gravedad, frecuencia natural, forma modal, malla, complemento
from: 8b7e6ba2
---

## Mba'épa ndejapóta

Chequeá peteĩ pieza sólida carga-pe: ha'e mboguejýpa ha mba'épa tensión guasúva. Estudio lineal ha elástico, upévare peteĩ ayuda chequeo; tu ingeniero oñemoĩ resultados.

## Pasos

1. Eiporu {{ui:Settings}} › {{ui:Add-ons}} ha eñapo {{ui:Solid FEM}} (ndaipóri peve). Eipe'a {{ui:Solid FEM}} pestaña panel derecho-pe.
2. {{ui:Material}} rupi eiporu peteĩ, térã {{ui:Custom}} ha eme'ẽ Poisson, densidad ha límite de fluencia.
3. Eprema {{ui:Add fixed faces}}, ejapo clic cara fijas vista 3D-pe, upéi eprema {{ui:Done picking}}.
4. Agregá carga {{ui:Add force}}, {{ui:Add pressure}} térã {{ui:Add gravity}} ha seleccioná cara upe mba'éichagua.
5. Eprema {{ui:Mesh the part}}, upéi {{ui:Solve}}. Eiporu {{ui:Natural frequencies}} {{ui:Study}} rupi primero frecuencia ndeikotevẽramo.
6. Eñehesa {{ui:Results}} ha {{ui:Warnings}}, upéi eprema {{ui:Show on the model}} tensión de von Mises, desplazamiento térã forma modal modelo-pe; {{ui:Remove the plot}} oipe'a.

## Nota

- Página oresolve elemento número ojapyhýva; barra de estado ohechauka elemento tamaño ipyahu jave.
- Tensión cara fijas, carga punto ha esquina filosa malla refinada jave guasúvéta. Refiná ha compará antes de pe máximo confiá.
- Cambio peteĩteĩ peteĩ undo, configuración pieza archivo-pe oñeñongatu.
- Fluencia ha contacto estudio-pe eñehesa [Chequeá tensión y deflexión](topic:simulation).
