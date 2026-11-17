---
title: Lista de pezas, vistas explotadas e pezas en movemento
summary: Dea unha numeración, descrición e material ás pezas dun conxunto, lea e descargue a lista de materiais, faga vistas explotadas con pasos ou automáticas, mova á man as pezas que non están unidas, defina límites para as unións e exporte o conxunto completo como STL, 3MF ou lista de materiais.
keywords: bom, lista de materiais, lista de pezas, número de peza, material, densidade, csv, vista explotada, explotar, contraer, liñas de traxectoria, mover peza, arrastrar, gizmo, trasladar, xirar, límites de unión, exportación de conxunto, paso de conxunto, debuxo de conxunto, globos
from: ebc9f6f3
---

Estas ferramentas están no panel dereito dun conxunto (vexa [Construír un conxunto con uniones](topic:build-assembly)).

## Propiedades da peza

Seleccione unha peza na lista da esquerda. En **Propiedades da peza** defina:

- **Número de peza** (ata 40 caracteres) e **Descrición** (ata 200).
- **Material**: un material común coa súa densidade, ou **Densidade personalizada…** para escribir unha en g/cm³. O panel mostra entón a masa da peza.

As propiedades pertencen á peza, así que todas as copias delas comparten os mesmos valores. Gárdanse no ficheiro do conxunto.

## Lista de materiais

Con nada seleccionado ({{key:Esc}}), o panel mostra a **Lista de materiais**: unha fila por peza, con o seu número de elemento, cantidade (cantas copias hai), número de peza, nome, material e masa. Os números de elemento seguen a orde en que as pezas aparecen primeiro na lista. As masas usan o volume de cada peza (do sólido facetado que constrúe o núcleo de malla, un pouco baixo nas pezas redondas) e o seu material. Unha peza sen material non ten masa, e entón non hai total.

{{ui:Descargar CSV}} garda a lista como ficheiro CSV (tamén en **Exportar › Lista de materiais (CSV)**). Ábrese en calquera folla de cálculo. O texto que comeza por = ou + recibe unha apóstrofe ao principio, para que a folla de cálculo non o execute como fórmula.

## Vistas explotadas

Unha vista explotada separa as pezas para as imaxes. Nunca cambia as uniones nin a posición real das pezas: o gardado, as comprobacións de interferencias e as exportacións usan as posicións reais.

1. Con nada seleccionado, escolla {{ui:Nova vista}} en **Vistas explotadas**.
2. En **Engadir un paso**, marque as pezas que move o paso, escolla unha **Dirección** (+X … −Z, a normal dunha cara que pulse, ou **Arrastrar unha frecha na vista**) e unha **Distancia**, e despois {{ui:Engadir paso}}. Con **Arrastrar**, arrastre a frecha e solte: o paso toma a dirección e a distancia que arrastrou.
3. Engada máis pasos. Reprodúcense uns detrás doutros.
4. Arrastre o control deslizante entre **Montado** e **Explotado** para animar a vista. As liñas de traxectoria a trazos van desde a posición de repouso de cada peza ata onde está agora.

{{ui:Auto (radial)}} move todas as pezas, excepto a fixa, lonxe do centro do conxunto. {{ui:Auto (unións)}} move cada peza unida (con todo o que está unido por debaixo dela) ao longo da normal da cara da súa unión. Pode conservar varias vistas con nome: escolla unha en **Vista**, ou **Montado** para devolver as pezas á súa posición. As vistas gárdanse no ficheiro do conxunto.

## Mover unha peza á man

Só se move á man unha peza sen unión coa peza fixa (a peza fixa queda no seu sitio; as uniones colocan as demais). Seleccione a peza e, en **Mover á man**:

- Escriba **ΔX, ΔY, ΔZ** e escolla {{ui:Mover}}, ou escolla un eixo e un **Ángulo** e {{ui:Xirar}} (arredor do centro da peza).
- {{ui:Arrastrar para mover}} mostra frechas na peza: arrastre unha frecha para mover a peza ao longo dese eixo, ou un cadrado para movela nun plano. {{ui:Arrastrar para xirar}} mostra aneis para xirala. Cada arrastre é un paso para desfacer. {{key:Esc}} oculta as frechas.

## Límites de unión

Seleccione unha unión que se poida mover e, en **Límites**, marque **Manter … entre límites** para calquera dos seus valores, e defina despois o **Mínimo** e o **Máximo**. Cada valor mantense dentro dos seus propios límites, o seu control deslizante cobre só ese intervalo, e {{ui:Comprobar o movemento por interferencias}} barre só entre eles. Unha unión cilíndrica pode limitar o seu ángulo, o seu desprazamento ou ambos. Ao cambiar o tipo de unión, eliminanse os límites dos valores que o novo tipo non ten.

## Exportar o conxunto completo

Nun conxunto, o menú **Exportar** escribe o conxunto completo, con cada peza onde está colocada:

- **STEP AP242 / AP214** e **Debuxo (PDF)** aínda non están construídos nesta versión: precisan un núcleo exacto, así que aparecen atenuados. Exporte o STEP de cada peza (sólido exacto) desde a propia peza.
- **STL**: unha malla de todas as pezas. **3MF**: cada peza unha vez, colocada tantas veces como copias teña.
- **Lista de materiais (CSV)**.

## Límites

- O debuxo do conxunto e o STEP do conxunto aínda non están construídos nesta versión (precisan un núcleo exacto). As vistas explotadas serven para imaxes en pantalla.
