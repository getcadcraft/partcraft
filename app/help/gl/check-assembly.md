---
title: Comprobar un conxunto por interferencias e movemento
summary: Atope pezas que se solapan con Interferencia, arrastre os valores de calquera unión para ver o movemento, e barra unha unión ao longo do seu rango para atopar onde chocan as pezas.
keywords: interferencia, detección de interferencias, colisión, solapamento, axuste de rosca, desaxuste de profundidade de rosca, caras en contacto, ocultar, filtro, movemento, estudo de movemento, barrido, rango de movemento, comprobar
from: 9c98db46
---

Dúas comprobacións funcionan sobre as pezas tal como están colocadas: **Interferencia** busca material que se solape agora mesmo, e a **comprobación de movemento** move unha unión ao longo do seu rango e busca solapamentos polo camiño.

## Comprobar interferencias

1. Abra ou constrúa un conxunto (vexa [Construír un conxunto con uniones](topic:build-assembly)).
2. Escolla {{ui:Interferencia}}.

A barra de estado informa do resultado:

- « Sen interferencias entre 3 pezas (… ms). » Nada se solapa.
- « Interferencia: Flange1 e Flange2: Solapamento, 2,5 mm³. » Cada par, que tipo de resultado é e o volume que comparten.

A caixa **Montaxe** á esquerda mostra **Interferencia**: « Ningunha », « 2 resultados » (os que se ven) ou « Sen comprobar ». Con nada seleccionado, o panel dereito lista cada resultado en **Interferencia**.

O resultado bórrase cada vez que cambia o conxunto. Volva executar {{ui:Interferencia}} despois de mover unha unión. Cada par de pezas compróbase contra todas as demais, así que os conxuntos grandes tardan máis.

### Tipos de resultados

| Tipo | Significa |
|---|---|
| **Solapamento** | As pezas comparten volume: unha interferencia real. |
| **Desaxuste de profundidade de rosca** | O volume compartido está dentro da rosca dunha peza pero máis aló da da outra: un parafuso roscado máis fondo que o seu burato, ou un vástago liso nun burato roscado. |
| **Axuste de rosca (roscas cosméticas)** | O volume compartido está dentro das roscas das dúas pezas: un parafuso nun burato roscado. As roscas cosméticas debúxanse ao tamaño completo da rosca, así que sempre se solapan un pouco. |
| **Caras en contacto** | Sen volume compartido, pero caras en contacto (dentro de 0,001 mm). |

As roscas modeladas (vexa [Roscas en eixos e ocos, debuxadas ou modeladas](topic:threads)) son xeometría real: o que comparten é un **Solapamento**.

### Ocultar o que non precisa ver

Baixo **Interferencia**, **Mostrar** ten unha caixa para cada tipo: desmarque **Axuste de rosca** e **Caras en contacto** para ver só as interferencias que importan. **Ocultar este par** xunto a un resultado oculta ese par de pezas sexa cal sexa o tipo. Os resultados ocultos cóntanse (« 2 resultados ocultos polos filtros »), e **Mostrar de novo os pares ocultos** os devolve. A barra de estado tamén conta os resultados ocultos.

Os filtros gárdanse co conxunto, e cada cambio é un paso de {{key:Mod+Z}}. **Barrer unha unión buscando interferencias** (máis abaixo) tamén os usa. Un conxunto con filtros gárdase como versión 4, que as versións anteriores de PartCraft rexeitan abrir en vez de perder os filtros.

## Ver o movemento

1. Seleccione na lista da esquerda unha unión que se mova (calquera menos as ríxidas).
2. Arrastre o control deslizante baixo un dos seus valores, como **Ángulo (°)** ou **Desprazamento (mm)**. A peza móvese mentres arrastra.
3. Solte. A nova posición consérvase e pódese desfacer con {{key:Mod+Z}}.

Tamén pode escribir un ángulo ou un desprazamento na caixa e premer {{key:Enter}}.

Unha unión dun bucle pechado (unha ligazón) move todo o bucle: o valor que arrastra consérvase e as outras uniones do bucle seguen (vexa [Bucles pechados](topic:build-assembly#closed-loops-linkages)).

## Barrer unha unión buscando interferencias

1. Seleccione unha unión que se mova.
2. Para unha unión con varios valores (cilíndrica, plana, esférica, pasador en ranura), escolla cal barrer en **Comprobar movementos**.
3. Escolla {{ui:Comprobar o movemento por interferencias}}.

PartCraft move ese valor por 25 posicións en 24 pasos iguais, mantendo os demais como están: un ángulo de −180° a 180° (unha inclinación de −90° a 90°), unha lonxitude desde menos ata máis o tamaño da peza máis grande. Informa:

- « Sen interferencias en ningún punto para Ángulo (°) de -180 a 180 (25 posicións comprobadas). »
- « 6 de 25 posicións presentan interferencia, a primeira en Ángulo (°) 45 (12,4 mm³). » A primeira posición con interferencia e o solapamento que hai alí.

O botón aparece atenuado nas uniones ríxidas, que non se moven. O barrido comproba só as posicións, non o camiño entre elas: unha peza fina podería atravesar outra entre dous pasos.

:::note
Contacto e gravidade aínda non están construídos. Sen límites, o barrido cobre todo o rango; dé ao valor **Límites** (vexa [Lista de pezas, vistas explotadas e pezas en movemento](topic:assembly-bom-explode)) e o barrido cobre só eses, así que unha bisagra que se abre 90° compróbase en 90°.
:::

## Un estudo de movemento

**Montaxe › Movemento** move o valor dunha unión desde un inicio ata un fin nun tempo que vostede dá (velocidade constante, suavizada, sinusoidal, ou ida e volta), coloca o conxunto en cada paso coas súas uniones e bucles pechados, e informa de que interferencias hai e de como de preto chegan as pezas. **Engadir un punto** segue o centro dunha peza ou un punto que prema nela, e a tarxeta representa a súa posición, velocidade e aceleración, o valor da unión e a distancia libre fronte ao tempo; **Gardar CSV** e **Gardar gráfica** os escriben. A velocidade e a aceleración calcúlanse a partir das posicións rexistradas, así que un pico agudo entre pasos se le baixo: use máis pasos.

Despois de **Executar**, a barra **Avanzar pola execución** move o conxunto a calquera paso (o tempo, o valor e se hai interferencias alí móstranse ao lado); a unión conserva o seu propio valor, e **Volver ao modelo** devolve o conxunto ao seu sitio. Os axustes do estudo gárdanse no ficheiro do conxunto; os seus resultados vólvense xerar con **Executar**.

## Un estudo de contacto

**Montaxe › Contacto** mostra como un conxunto transmite as cargas onde as pezas se presionan entre si. Cada peza aporta os seus apoios, cargas e material do seu propio estudo de **Simulación** (unha cara fixa nunha peza, unha forza noutra); aquí escolle os pares. **Engadir un par**, despois **Escoller lado A** e prema caras dunha peza, **Escoller lado B** e prema caras dunha peza distinta (un clic nunha cara escollida quítaa; Esc ou **Feito** remata a escolla). Un par é **Sen fricción** (as pezas presionan pero deslízanse) ou **Unido** (quedan xuntas); o factor de rixidez fixa a resistencia do contacto a afundirse (20 é un bo punto de partida, 1000 para unha pila de aceiro ríxida).

**Resolver** executa a carga en pasos e mostra a forza de contacto, o afundimento máis profundo, o maior desprazamento e a maior tensión. Unha peza sen ningún par queda fóra, e a tarxeta dino. O contacto sen fricción non suxeita unha peza lateralmente: dálle a cada peza un apoio no seu propio estudo de Simulación, ou únaa, ou os pasos poden non asentarse. Os pares e os axustes gárdanse no ficheiro do conxunto.

**Exportar ficheiro CalculiX** escribe o mesmo modelo como ficheiro de entrada de CalculiX (.inp). CalculiX é un programa aparte que vostede instala e executa; **Ler resultados de CalculiX (.frd)** lee despois os desprazamentos de volta sobre a malla deste conxunto e rexeita un ficheiro feito para outra malla. O solucionador aquí admite plasticidade, pero non dinámica explícita, e nada aquí é unha análise certificada: que un enxeñeiro revise o que importe.
