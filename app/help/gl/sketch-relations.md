---
title: Relacións e cotas do esbozo
summary: Cada relación e cota que pode ter un esbozo de PartCraft, que seleccionar para cada unha, o seu símbolo e como se comporta ao resolver.
keywords: relacións, restricións, coincidente, horizontal, vertical, paralelo, perpendicular, tanxente, igual, concéntrico, punto medio, fixar, distancia, distancia horizontal, distancia vertical, raio, diámetro, ángulo, símbolos, glifos
from: 9831e7be
---

As relacións fixan como se sitúa unha xeometría respecto a outra. As cotas fixan tamaños. Para engadir unha relación, seleccione elementos coa ferramenta Seleccionar ({{key:S}}) e escolla o seu botón no panel dereito; para engadir unha cota, use a ferramenta Cota ({{key:D}}) ou os botóns de cota do panel dereito. Como traballar con elas: [Definir completamente un esbozo](topic:relations-dimensions).

«Curva» abaixo significa un círculo ou un arco. A orixe conta como punto.

## Relacións

| Botón | Símbolo | Seleccionar | Efecto |
|---|---|---|---|
| {{ui:• Coincidente}} | • (móstrase só cando está seleccionada ou hai un problema) | Dous puntos | Os puntos coinciden |
| {{ui:• Coincidente}} | • | Un punto e unha liña | O punto queda sobre a liña (ou a súa prolongación) |
| {{ui:• Coincidente}} | • | Un punto e unha curva | O punto queda sobre o círculo ou arco |
| {{ui:H Horizontal}} | H | Unha liña, ou dous puntos | A liña queda nivelada, ou os dous puntos quedan á mesma altura |
| {{ui:V Vertical}} | V | Unha liña, ou dous puntos | A liña queda en vertical, ou os puntos quedan un sobre o outro |
| {{ui:∥ Paralelo}} | ∥ | Dúas liñas | As liñas van na mesma dirección |
| {{ui:⊥ Perpendicular}} | ⊥ | Dúas liñas | As liñas se encontran en ángulo recto |
| {{ui:T Tanxente}} | T | Unha liña e unha curva | A liña toca a curva sen cruzala |
| {{ui:T Tanxente}} | T | Dúas curvas | Tocan, por fóra ou por dentro, segundo se debuxaron |
| {{ui:T Tanxente}} | T | Unha spline e unha liña, arco ou spline que se une a un dos seus extremos | A spline sae dese extremo na dirección da outra curva |
| {{ui:= Igual}} | = | Dúas liñas | Mesma lonxitude |
| {{ui:= Igual}} | = | Dúas curvas | Mesmo raio |
| {{ui:◎ Concéntrico}} | ◎ | Dúas curvas | Mesmo centro |
| {{ui:◎ Concéntrico}} | ◎ | Un punto e unha curva | O punto queda no centro da curva |
| {{ui:M Punto medio}} | M | Un punto e unha liña | O punto queda no punto medio da liña |
| {{ui:↔ Simétrico}} | ↔ | Dous puntos e unha liña | Os puntos son imaxes espelladas respecto da liña (Espellar engade estas) |
| {{ui:⚓ Fixar}} | ⚓ | Un punto, unha liña, unha curva ou unha spline | Mantena exactamente onde está agora (unha spline: os seus puntos) |

Aquí as liñas inclúen as liñas de centro. Ao debuxar, engádense algunhas relacións: o enganche a un punto fai que sexa coincidente, o enganche a unha curva coloca o punto sobre ela, as liñas case niveladas ou verticais reciben H ou V, e un rectángulo vén cos seus catro vértices unidos, dous H e dous V.

**Fixar** é un xeito rápido de impedir que algo se mova, pero entón a peza non pode seguir un cambio de cota noutro lugar. Prefira cotas respecto da orixe.

## Cotas

| Botón | Seleccionar | Mide | Mostrase como |
|---|---|---|---|
| {{ui:Distance}} | Unha liña | A súa lonxitude | Distancia 40 |
| {{ui:Distance}} | Dous puntos | A distancia en línea recta entre eles | Distancia 40 |
| {{ui:Distance}} | Un punto e unha liña | A distancia do punto á liña, perpendicular a ela | Distancia 40 |
| {{ui:Distance}} | Dúas liñas paralelas | A separación entre elas | Distancia 40 |
| {{ui:Horizontal distance}} | Dous puntos, ou unha liña | Só a distancia esquerda-dereita | Distancia horizontal 40 |
| {{ui:Vertical distance}} | Dous puntos, ou unha liña | Só a distancia arriba-abaixo | Distancia vertical 40 |
| {{ui:Radius}} | Un círculo ou arco | O seu raio | Raio R10 |
| {{ui:Diameter}} | Un círculo ou arco | O seu diámetro | Diámetro ⌀20 |
| {{ui:Angle}} | Dúas liñas que non son paralelas | O ángulo entre elas, de 0 a 180 graos | Ángulo 30° |

Coa ferramenta Cota, PartCraft escolle o tipo segundo o que fai clic e onde coloca o número:

| Fai clic en | Obtén |
|---|---|
| Unha liña | A súa lonxitude; nunha liña inclinada, horizontal se o número vai por riba ou por baixo dela, vertical se vai ao lado |
| Un círculo | Diámetro |
| Un arco | Raio |
| Dous puntos | Distancia; horizontal ou vertical como nunha liña inclinada |
| Un punto e unha liña | Distancia do punto á liña |
| Dúas liñas | Ángulo, ou a distancia se son paralelas |
| Un punto e un círculo | Nada: "Eses elementos non se poden acotar xuntos." Acote ata o punto central do círculo |

**Desprazamento** (mostrado como a distancia) faino a ferramenta Desprazar: mantén unha liña copiada paralela a esa distancia, ou un arco ou círculo copiado concéntrico cun raio esa cantidade maior ou menor. As demais pezas do mesmo desprazamento levan unha relación **O** e seguen a cota de Desprazar. Consulte [Splines, recortar, desprazar e outras ferramentas de esbozo](topic:sketch-tools).

Os valores das cotas son milímetros (ou graos), nunca negativos. O raio e o diámetro deben ser maiores que cero. Para as distancias admítese un valor de 0: dous puntos a 0 de distancia son coincidentes.

## Como se comporta a resolución

- **Mínimo movemento.** Cando cambia un valor, o solucionador move a xeometría o menos posible. Unha liña cuxa lonxitude cambia crece por igual polos dous extremos se nada suxeita ningún deles.
- **Sen volteos.** As distancias dun punto a unha liña, as distancias horizontais e verticais, os ángulos e a tanxencia lembran de que lado se fixeron. Cambiar un valor nunca volta a xeometría ao outro lado.
- **Os conflitos non alteran nada.** Se as relacións se contradín, o esbozo queda exactamente como estaba e as relacións en conflito pasan a vermello.
- **Relacións redundantes** (implicadas por outras) indícanse na barra de estado ("xa está implicada. Elimínea.") e o elemento constrúese igual, cun aviso.
- **Unións tanxentes.** Onde un arco de redondeo se une ás súas liñas nun punto extremo compartido, a tanxencia resólvese dun xeito que queda ben definido alí, de modo que os redondeos de esbozo non se leen como sobredefinidos.

## Aínda non dispoñible

Relacións colineal, coradial e de atravesamento; un punto sobre unha spline; cotas dirixidas (de referencia); cotas de ordenada e de lonxitude de arco; ecuacións entre cotas. Para liñas colineais, use Paralelo máis unha distancia de 0.
