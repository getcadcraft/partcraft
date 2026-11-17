---
title: Dirixir unha peza con parámetros
summary: Nomee as medidas que importan (ancho, espesor, tamaño do parafuso), ligue calquera número de elemento ou cota de esbozo a elas con =, e cambie toda a peza desde unha única táboa.
keywords: parámetros, onde se usa, usado por, variables globais, variables, ecuacións, intención de deseño, cotas dirixidas, ligazón, expresión, fórmula, nomear unha cota, valores ligados
from: 58c646ea
---

Un parámetro é un número con nome, como `width = 120` ou `margin = bolt * 1.5`. Ligue unha profundidade, un diámetro de furo, un número de patrón ou unha cota de esbozo a el, e ao cambiar o parámetro cámbianse todas dunha vez. Así garda a intención de deseño na peza, e non só na cabeza.

## Engadir parámetros

1. No panel da dereita, prema a lapela {{ui:Parámetros}}.
2. Baixo **Variables**, escriba un nome na caixa «nome», por exemplo `width`.
3. Escriba o seu valor na caixa seguinte, por exemplo `120`, e prema {{key:Enter}} (ou prema {{ui:Engadir}}).

Un valor pode ser un número ou unha expresión doutros parámetros: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. A columna **Valor** mostra o resultado do cálculo. Un nome comeza por unha letra ou `_` e só ten letras, díxitos e `_`; os nomes de funcións e unidades (`sin`, `mm`, `pi`) rexéitanse, e tamén un bucle como `a = b` con `b = a`.

## Ligar un número a un parámetro

1. Prema un elemento do historial, por exemplo «Extrude1». Os seus axustes móstranse na lapela {{ui:Propiedades}}.
2. Nunha caixa de número, como **Profundidade (mm)**, escriba `=` e unha expresión: `=thick` ou `=width / 4`.
3. Prema {{key:Enter}}.

A caixa mostra agora o resultado, e aparece un botón **ƒ** xunto á súa etiqueta. Sitúe o cursor sobre el para ver a ecuación. As cotas de esbozo funcionan igual, tanto na lista **Cotas do esbozo** dun elemento como na caixa de cota dun esbozo aberto (faga dobre clic nunha cota, escriba `=width` e prema {{key:Enter}}).

Números que pode ligar: profundidade de extrusión, ángulo de revolución, diámetro de furo, profundidade e tamaños de avellanado e escariado, número de patrón, separación e ángulo, raio de redondeo, distancia de chaflán, grosor de parede de casca, cada cota de esbozo, e os tamaños dos elementos máis novos (segunda profundidade, conicidade, avellanado, distancia dun plano de referencia, ángulo de desmoldeo e outros).

## Cambiar un parámetro

Na lapela {{ui:Parámetros}}, escriba un valor ou expresión novo na columna **Expresión** e prema {{key:Enter}}. Todo o que estea ligado cambia e a peza reconstrúese, nun só paso: {{key:Mod+Z}} desfai.

Para cambiar un número desde o outro extremo, ver [Ecuacións en ambos sentidos](topic:equations-two-way).

## Ver onde se usa un parámetro

Baixo cada parámetro na lapela {{ui:Parámetros}}, unha liña indica o que o usa:

- os números que controla, como **Extrude1 profundidade** ou **Sketch1 D2 (distancia)**. Prema un para seleccionar o seu elemento e mostrar as súas propiedades;
- os números que controla **a través de** outros parámetros, como **Hole1 diámetro (a través de h, d)** cando `d = h + 2` e `h = w / 2`;
- os **parámetros** cuxas expresións o usan, as **configuracións** que o fixan, e os **scripts** que o len (ver [Escribir e executar scripts](topic:craftscript)).

«Sen uso aínda.» significa que nada o usa: pode eliminalo sen preguntar.

## Desligar, renomear, eliminar

- **Desligar un número:** prema o seu botón **ƒ**, ou {{ui:Desligar}} na lista **Ecuacións**. Conserva o valor actual e nada máis o cambia.
- **Renomear un parámetro:** escriba un nome novo na súa caixa **Nome**. Réscribese toda expresión que o use.
- **Eliminar un parámetro:** prema × na súa fila. Se algo o usa, PartCraft pregunta se primeiro debe escribir o seu valor actual nesas expresións.
- **Eliminar un elemento** quita as ecuacións dos seus números; a barra de estado indica cales.

:::note
Os parámetros gárdanse no ficheiro `.partcraft.json` (como versión 3 do ficheiro). Unha peza sen parámetros gárdase exactamente como antes.
:::

## Expresións

| Escriba | Significa |
|---|---|
| `120`, `12.5`, `1e3` | un número (milímetros, ou graos para un ángulo) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | unha lonxitude noutras unidades, convertida a milímetros |
| `30deg`, `0.5rad` | un ángulo, convertido a graos |
| `+ - * / %` e `^` | aritmética; `^` é unha potencia, `-2^2` é −4 |
| `sin cos tan asin acos atan atan2` | trigonometría en graos |
| `sqrt pow exp ln log abs sign` | outras funcións |
| `ceil floor int round(x, digits) min max` | redondeo e límites |
| `if(test, a, b)` con `< <= > >= == !=` | unha elección: `if(bolt >= 16, 6, 8)` |
| `pi` | 3,14159… |

Os nomes distinguen maiúsculas e minúsculas: `Width` e `width` son dous parámetros distintos.

Ver tamén [Configuracións e táboas de deseño](topic:design-tables) e [Scripts e liña de comandos](topic:scripts-and-cli).
