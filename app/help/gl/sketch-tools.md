---
title: Splines, recortar, desprazar e outras ferramentas de esbozo
summary: Debuxe splines de puntos de paso e de puntos de control, recorte e estenda curvas, desprace unha cadea, espelle respecto dunha liña de centro, engada polígonos e ranuras, cree patróns coa xeometría do esbozo e proxecte arestas do modelo.
keywords: spline, punto de paso, punto de control, b-spline, nurbs, curva, recortar, estender, desprazar, espellar, simétrico, polígono, hexágono, ranura, patrón, patrón lineal, patrón circular, proxectar, proxectar aresta, incluír, converter entidades
from: 3ecb166a
---

Estas ferramentas funcionan nun esbozo aberto. {{ui:Spline}} e {{ui:Trim}} están na barra de ferramentas. As demais están baixo {{ui:More}}, ao final das ferramentas de esbozo. Cada ferramenta equivale a un paso de desfacer, e {{key:Esc}} a detén. Para as ferramentas básicas de debuxo, consulte [Debuxe o primeiro esbozo](topic:sketch-basics).

## Splines

Unha spline é unha curva suave. Hai dous tipos.

| Ferramenta | Tecla | Como debuxar |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | Faga clic nos puntos polos que pasa a curva. Remate con {{key:Enter}}, {{key:Esc}}, un clic co botón dereito ou un dobre clic. Faga clic de novo no primeiro punto para pechar a spline |
| {{ui:Spline de puntos de control}} (baixo {{ui:More}}) | | Faga clic nos puntos de control. A curva atráese cara a eles, pero só toca o primeiro e o último. O polígono de control en trazos móstrase mentres debuxa e despois |

- **Os puntos son puntos do esbozo.** Arrástreos, ou asígnelles relacións e cotas como a calquera outro punto. O primeiro punto dunha spline pode encaixar no extremo dunha liña, e así únense cunha relación coincidente.
- **Tanxente nun extremo.** Seleccione unha liña, arco ou spline que se una a un extremo dunha spline, e logo a spline, e escolla {{ui:T Tanxente}}. A dirección do extremo da spline segue entón a liña. Unha tanxente lonxe dos extremos da spline recházase: "Unha tanxente a unha spline necesita que a liña, o arco ou a spline se unan a un dos seus extremos."
- **Extremos.** Sen unha relación de tanxencia, os extremos dunha spline de puntos de paso son naturais (sen curvatura no extremo). A curva é cúbica e pasa por cada punto, e o espazamento fíxase segundo as distancias entre os puntos.
- **As splines pechadas** forman un perfil por si mesmas. As splines abertas únense a liñas e arcos formando un bucle pechado, como calquera outra curva.
- Ao eliminar un punto dentro dunha spline, quita ese punto e mantén a spline mentres teña polo menos dous puntos (tres se está pechada).

A extrusión e a revolución constrúen a spline co núcleo de malla a partir de pequenos segmentos rectos (as curvas verdadeiras necesitan un núcleo exacto: aínda non construído nesta versión). A exportación DXF escribe unha spline como unha polilínea que se mantén a menos de 0,01 mm da curva, porque DXF R12 non ten entidade spline.

## Recortar e estender

| Ferramenta | Tecla | Como |
|---|---|---|
| {{ui:Trim}} | {{key:T}} | Sinale unha curva: o tramo que se quitaría mostrase en vermello, ata os cruzamentos máis próximos. Faga clic para quitalo. Unha curva que non cruza nada elimínase enteira |
| {{ui:Estender}} (baixo {{ui:More}}) | {{key:E}} | Faga clic nunha liña ou arco preto do extremo para estendelo. Crece ata a seguinte curva que atope. "Non hai nada ao que chegue ese extremo." cando non hai nada no camiño |

Recortar e Estender funcionan con liñas, arcos, círculos e splines (Estender: só liñas e arcos).

- Un **círculo** recortado pasa a ser un arco. A súa cota de raio ou diámetro pásase ao arco.
- Recortar o medio dunha liña deixa dúas liñas que seguen na mesma recta. Recortar o medio dun arco deixa dous arcos co mesmo centro e unha relación igual.
- Unha **spline** recortada pasa a ser unha spline de puntos de control que segue exactamente a curva antiga. Unha relación de tanxencia nun extremo que se conserve mantense.
- O novo extremo colócase sobre a curva que o cortou (sobre a liña, o arco ou o círculo, ou coincidente co seu extremo). As splines non poden albergar un punto, así que unha spline que corta non engade relación.

**As relacións que xa non encaixan elimínanse**, e a barra de estado indica cantas. Por exemplo, unha cota de lonxitude nunha liña recortada elimínase, pero as relacións horizontal ou paralela mantéñense.

## Desprazar

1. Escolla {{ui:Offset}} baixo {{ui:More}} ou prema {{key:O}}.
2. Faga clic nunha liña, arco, círculo ou spline. Resáltase toda a cadea: todas as curvas unidas extremo con extremo, ata un punto onde se encontren tres ou máis. Para desprazar só unha parte dunha cadea, seleccione antes esas curvas, despois escolla Desprazar e faga clic nunha delas.
3. Mova o punteiro ao lado onde irá a copia. Unha vista previa en trazos segue o punteiro. Prema {{key:B}} para os dous lados.
4. Faga clic, escriba a distancia e prema {{key:Enter}}.

As liñas e os arcos despázanse exactamente. As esquinas esténdense ou recórtanse ata se encontrar. A copia ten unha cota de **Desprazar**, e as demais pezas seguena: faga dobre clic na cota para cambiar a copia completa. Unha distancia demasiado grande para a cadea recházase, por exemplo: "Esa distancia é demasiado grande para esta cadea: un lado quedaría do revés."

Unha **spline** despázase mediante unha nova spline de puntos de paso a menos de 0,001 mm do desprazamento real. Esta copia queda fixa: non segue os cambios posteriores e non ten cota de Desprazar. Unha spline dentro dunha cadea necesita unións suaves (tanxentes) nos seus extremos.

## Espellar

1. Coa ferramenta Seleccionar, escolla o que quere espellar.
2. Escolla {{ui:Mirror}} baixo {{ui:More}} ou prema {{key:M}}.
3. Faga clic na liña ou liña de centro respecto da que espellar.

Cada punto espellado recibe unha relación **Simétrico** co seu orixinal, de modo que a copia segue ao cambiar o orixinal. Os puntos que están sobre a liña de espello compártense, e os círculos espellados reciben unha relación Igual. Se non había nada seleccionado, faga clic nos elementos que espellar, prema {{key:Enter}} e logo faga clic na liña de espello.

## Polígonos e ranuras

| Ferramenta | Como |
|---|---|
| {{ui:Polygon}} | Faga clic no centro, despois nunha esquina e logo escriba o número de lados (de 3 a 64). Os lados son iguais e as esquinas quedan sobre un círculo de construción. Acote o círculo para dimensionar o polígono |
| {{ui:Slot}} | Faga clic no centro dun extremo, despois no centro do outro extremo e logo faga clic para fixar a largura. Dúas liñas, tanxentes a dous semicírculos iguais |

## Patróns de esbozo

Seleccione primeiro a xeometría e logo:

- {{ui:Linear pattern}}: faga clic nun punto inicial, despois onde vai a primeira copia, e logo escriba o número de copias (incluído o orixinal).
- {{ui:Circular pattern}}: faga clic no centro, despois escriba o número de copias, repartidas por igual nunha volta completa.

As copias levan consigo as relacións entre a xeometría seleccionada (un patrón circular omite as horizontais e verticais). As copias non están ligadas ao orixinal: se cambia unha, as demais quedan como están.

## Proxectar arestas da peza

1. Escolla {{ui:Project edge}} baixo {{ui:More}}.
2. Faga clic nunha aresta recta ou circular da peza detrás do esbozo.

A aresta cópiase exactamente sobre o plano do esbozo e fíxase (relación Fixar). Non segue os cambios posteriores da peza. Prema {{key:Q}} para convertela en xeometría de construción. Un círculo inclinado respecto ao plano do esbozo proxectaríase como unha elipse, así que se recusa. Tamén se recusan as arestas de forma libre e as arestas que apuntan directamente fóra do esbozo. Proxectar necesita un núcleo exacto: aínda non está construído nesta versión.
