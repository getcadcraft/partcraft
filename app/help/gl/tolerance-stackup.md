---
title: Cadeas de tolerancias
summary: Escolla unha cadea de caras a través das pezas dun conxunto e vexa canto pode variar a distancia no seu extremo, no peor caso e en RSS, coas cotas que máis inflúen ordenadas primeiro.
keywords: cadea de tolerancias, cadea, análise de tolerancias, cadea de cotas, bucle, folga, xogo, peor caso, rss, raíz da suma dos cadrados, tolerancias estatísticas, contribucións, sensibilidade, gd&t, tolerancia xeral, iso 2768
from: cbdb3159
---

Unha **cadea de tolerancias** suma as cotas ao longo dunha cadea que pasa por varias pezas, para ver canto pode variar un resultado —normalmente unha folga— cando cada peza se fabrica en calquera punto dentro das súas tolerancias.

## Escoller a cadea

1. Abra un conxunto e escolla {{ui:Cadea de tolerancias}} no grupo Montaxe. Abrese unha tarxeta sobre a vista.
2. Escolla ao **longo de** que se mide a cadea: X, Y ou Z do conxunto, ou {{ui:A normal da primeira cara}}.
3. Prema {{ui:Escoller a cadea}} e prema nas caras por onde pasa a cadea, **en orde**: comece nun lado da folga, pase polas pezas e remate no outro lado da folga.
4. Prema {{ui:Feito}} ou {{key:Enter}}. {{key:Backspace}} desfai o último clic; {{key:Esc}} cancela.

Dous clics na mesma peza fan a cota desa peza (a súa distancia ao longo da cadea). Un clic noutra peza crea unha **interface** entre elas, onde se tocan; non ten tolerancia salvo que escriba unha. As ligazóns suman ou restan segundo o sentido da cadea, e pechan o bucle: a folga nominal é a que mostra o modelo.

Tamén pode {{ui:Engadir unha ligazón}} a man e escribir o seu valor nominal, a súa tolerancia e se suma (+) ou resta (−).

## Indique a tolerancia de cada ligazón

Cada ligazón ten unha desviación **superior** e outra **inferior** (por exemplo, +0,1 e −0,05). **Tolerancia desde** énchelas a partir da peza:

- **Tolerancia xeral**: o campo Tolerancia do cadro de rotulación da peza (vexa [Debuxo a PDF](topic:drawing-pdf)), cando indica ±0,1, +0,2/-0,1 ou ISO 2768-f, -m, -c ou -v (tolerancias lineais ISO 2768-1, segundo o tamaño da ligazón). A tolerancia xeral dunha peza úsase de inmediato ao escoller a cadea.
- **GD&T**: calquera marco de control de elemento do debuxo da peza. As zonas de posición, perfil e batida dan ± a metade da tolerancia. Unha tolerancia de orientación ou de forma adoitan estar xa dentro da tolerancia dimensional: engádaa só onde a cadea toca a superficie controlada. Con Ⓜ ou Ⓛ, a zona tómase polo seu tamaño indicado; a tolerancia adicional non se conta.
- **Escrita**: calquera número que escriba.

## Ler os resultados

- **Folga, nominal** e, cando as tolerancias son desiguais, **Folga, media** —+0,2/−0 e +0/−0,1 desprazan o centro do intervalo.
- **Peor caso**: todas as tolerancias no seu límite á vez. A folga nunca pode saír disto.
- **RSS** (raíz da suma dos cadrados): cada tolerancia tómase como tres desviacións típicas dunha dispersión normal, e súmase como a raíz cadrada da suma dos seus cadrados. A maioría dos conxuntos quedan ben dentro do peor caso; esta é a estimación habitual para pezas fabricadas en serie.
- Indique **Folga como mínimo** e **Folga como máximo** para ver se o peor caso queda sempre dentro, e cantos conxuntos dun millón espera o RSS fóra.
- A columna **#** ordena as ligazóns segundo a súa **contribución** ao RSS: axuste primeiro as primeiras para obter a maior diferenza.

{{ui:Gardar CSV}} escribe as ligazóns, as súas contribucións e os resultados. As cadeas de tolerancias gárdanse no ficheiro do conxunto, e cada cambio é un paso para {{key:Mod+Z}}.

:::note
Unha cadea de tolerancias segue unha soa dirección. Non segue ángulos nin xiros ao longo da cadea, e non lee as tolerancias dimensionais dos esbozos: indíquea como tolerancias escritas ou a través da cartela.
:::
