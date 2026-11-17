---
title: Definir por completo un esbozo con relacións e cotas
summary: Engadir relacións desde o panel dereito e cotas coa ferramenta Cota, ler as cores de esbozo sen definir, totalmente definido e sobredefinido, e corrixir un esbozo sobredefinido.
keywords: relacións, restricións, cotas, cota intelixente, totalmente definido, sen definir, sobredefinido, graos de liberdade, coincidente, horizontal, vertical, paralela, perpendicular, tanxente, igual, concéntrica, punto medio, fixar, conflito, redundante
from: e76d047a
---

Un esbozo está **totalmente definido** cando todos os puntos e tamaños quedan fixados por relacións e cotas. Un esbozo totalmente definido cambia só cando cambia un número, así que a peza se comporta de forma previsible cando a edita máis tarde. PartCraft non o obriga a definir por completo un esbozo, pero sempre indica en que punto está.

## Ler o estado do esbozo

O estado aparece en tres lugares: a etiqueta na parte superior esquerda da vista, a mensaxe na parte superior do panel dereito e a marca do historial.

| Estado | Etiqueta | Cor da xeometría | Que significa |
|---|---|---|---|
| Sen definir | "Sen definir · 3 graos de liberdade" | Azul | Algunha xeometría aínda pode moverse. Arrastre a xeometría azul para ver en que sentido |
| Totalmente definido | "Totalmente definido" | Tinta (negro sobre Papel, claro en Modelo) | Cada punto e tamaño está fixado |
| Sobredefinido | "Sobredefinido" | Vermello nas relacións implicadas | Algunhas relacións contradícense, ou outra xa está implicada polas demais |

A xeometría de construción é gris e de trazos, sexa cal sexa o seu estado. Os elementos seleccionados son laranxa. Un "grao de liberdade" é unha forma en que algo aínda pode moverse: un punto libre ten dous (esquerda-dereita e arriba-abaixo), un círculo libre ten tres (o seu centro e o seu raio).

A lenda debaixo da mensaxe no panel dereito repite as cores.

## Engadir unha cota

1. Prema {{key:D}} ou escolla {{ui:Cota}}.
2. Prema o que quere medir:
   - **unha liña**: a súa lonxitude;
   - **un círculo**: o seu diámetro; **un arco**: o seu raio;
   - **dous puntos** (un extremo, un centro, un punto solto ou a orixe): a distancia entre eles;
   - **un punto e unha liña**: a distancia do punto á liña;
   - **dúas liñas paralelas**: a distancia entre elas; **dúas liñas en ángulo**: o ángulo entre elas.
3. Despois do primeiro elemento, a barra de estado indica "Prema un segundo elemento, ou prema onde debe ir a cota." Prema un segundo elemento, ou prema nun espazo baleiro onde queira o número.
4. Ábrese unha caixa numérica co valor actual. Escriba o tamaño e prema {{key:Enter}}. {{key:Esc}} conserva o valor medido.

**A posición do número decide o tipo** para unha liña inclinada ou dous puntos: colóqueo enriba ou abaixo para obter unha distancia horizontal, á esquerda ou á dereita para obter unha distancia vertical, e noutro lugar para a distancia real (alineada).

A caixa acepta números simples en milímetros ou graos, como `25`, `12.5` ou `1e3`. Un `⌀`, `Ø` ou `R` ao principio, ou `mm` ou `°` ao final, ignóranse. Os ángulos van de 0 a 180 graos. Non se aceptan operacións como `20+5`; para vincular un tamaño a unha variable ou fórmula, comece por `=`.

Para cambiar unha cota máis tarde, faga dobre clic no seu número no esbozo, ou escolla **Editar** ao seu lado na lista do panel dereito.

:::tip
Tamén pode seleccionar primeiro a xeometría (ferramenta Seleccionar) e escoller un botón de cota no panel dereito: {{ui:Distancia}}, {{ui:Distancia horizontal}}, {{ui:Distancia vertical}}, {{ui:Raio}}, {{ui:Diámetro}} ou {{ui:Ángulo}}. Só se mostran os que encaixan coa selección. Así se lle dá a un círculo un raio no canto dun diámetro.
:::

## Engadir unha relación

As relacións engádense desde o panel dereito, non cunha ferramenta.

1. Prema {{key:S}} para Seleccionar.
2. Prema un elemento e logo {{key:Shift}}+clic noutro se a relación precisa dous. Tamén se pode seleccionar a orixe.
3. O panel dereito indica "Seleccionado: liña l3, punto p1" e mostra un botón para cada relación que encaixa, como {{ui:∥ Paralela}} ou {{ui:• Coincidente}}.
4. Escolla o botón. O esbozo resólvese de inmediato.

Se ningunha relación encaixa, o panel indica "Ningunha relación encaixa con esta selección. Seleccione un ou dous elementos (Shift+clic engade)."

A lista completa das relacións, o que precisa cada unha e o que fai está en [Relacións e cotas do esbozo](topic:sketch-relations).

As relacións aparecen no esbozo como pequenos símbolos xunto á xeometría (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Os puntos de coincidencia ocúltanse salvo que se seleccione a xeometría ou a relación teña un problema. Prema un símbolo para seleccionar a relación.

## Exemplo práctico: perfil dunha escuadra en L

1. Esboce sobre o **Plano alzado**. Coa ferramenta Liña, comece na orixe e prema seis esquinas dunha L, rematando de novo na orixe. A cadea termina sola cando prema o primeiro punto.
2. As liñas trazadas case horizontais ou verticais xa teñen relacións H e V, salvo a última: unha liña que termina nun punto existente non recibe ningunha relación automática. Prema {{key:S}}, prema esa última liña e escolla {{ui:V Vertical}} no panel dereito. A etiqueta indica "Sen definir · 4 graos de liberdade".
3. Prema {{key:D}}. Prema a liña inferior, prema por debaixo dela, escriba `80` e {{key:Enter}}.
4. Prema a liña esquerda, prema á esquerda dela, escriba `60` e {{key:Enter}}.
5. Cote a liña curta superior con `20` e a liña vertical interior con `45` do mesmo xeito.
6. A etiqueta indica agora **Totalmente definido** e toda a L pasa a tinta.

## Corrixir un esbozo sobredefinido

Cando unha nova relación ou cota contradí as outras, PartCraft non move nada. A xeometría queda exactamente como estaba, as relacións implicadas tórnanse vermellas e a barra de estado as nomea:

- "Sobredefinido: Horizontal, Distancia 40 non se poden cumprir todas á vez. Desfaga, ou elimine unha delas." As relacións están en conflito.
- "Sobredefinido: Paralela xa está implicada. Elimínea." A relación non engade nada: as demais xa a fixan. (Os lados dun rectángulo, por exemplo, xa son paralelos.)

Para corrixilo:

1. Prema {{key:Mod+Z}} para desfacer o último cambio, ou
2. Busque o elemento vermello na lista **Relacións e cotas** do panel dereito (un grupo que o contén está aberto e en vermello) e escolla **Eliminar** ao seu lado. Tamén pode premer o seu símbolo ou número no esbozo e premer {{key:Delete}}.

:::note
Nesta versión non hai cotas "conducidas" (de referencia). Unha cota que só mostraría un tamaño que xa fixan as outras relacións trátase como sobredefinida. Para ler tamaños, use o panel: seleccione unha liña e mire os botóns de Cota, ou comprobe os datos da peza despois de extruír.
:::

Un esbozo sobredefinido cun conflito real fai fallar a característica que o usa ("Sobredefinido: 1 relación non se pode cumprir."), e o historial marca **⚠ erro**. Un esbozo só redundante constrúese igual, cun ⚠ de aviso.

## Arrastrar para descubrir o que está libre

En Seleccionar, arrastre calquera punto ou liña azul. O solucionador móveo o menos posible mantendo todas as relacións. Se o arrastre rompe unha relación, a xeometría volve ao sitio. É a forma máis rápida de ver que cota falta.

## A lista de relacións

Sen nada seleccionado, o panel dereito lista **Relacións e cotas**. Cada fila ten:

- **Editar** (só para cotas): abre a caixa numérica;
- **Seleccionar**: selecciona a fila no esbozo;
- **Eliminar**: elimínaa.

As relacións dun mesmo tipo que aparecen máis dunha vez comparten unha fila, como "Coincidente × 5" para un rectángulo unido á orixe. Prema a fila para abrila: cada relación aparece listada polo que une ("punto p2, punto p4") con o seu propio **Seleccionar** e **Eliminar**. A propia fila ten:

- **Seleccionar**: selecciona todas no esbozo;
- **Eliminar todas**: elimínaas todas dun paso ({{key:Mod+Z}} as devolve).

Un grupo que contén unha relación sobredefinida ábrese por si só, co seu nome en vermello. As cotas listanse sempre unha por fila, cos seus valores.

Con xeometría seleccionada, a lista mostra só as **Relacións da selección**.
