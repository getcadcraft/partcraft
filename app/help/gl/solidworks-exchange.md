---
title: Mover pezas desde e cara a outros modeladores de pezas
summary: Envíe unha peza a outro modelador de pezas como unha macro que a reconstrúe cun árbol de elementos activo. O STEP con nome e a apertura da lista de elementos que outro modelador escribiu aínda non están construídos nesta versión.
keywords: macro, non construído, swb, vba, árbore de elementos, ida e volta, macro de exportación, cadcraft-sw.json, step con nome, ap214, variables globais, ecuacións, peza nativa
from: 97ca61da
---

PartCraft intercambia pezas con SolidWorks nos dous sentidos, sen un formato de ficheiro que ninguén máis poida ler:

- **Cara a fóra:** unha macro (`.swb`, texto plano) que SolidWorks executa para construír a peza por si mesma, elemento por elemento, cos seus esbozos, relacións, cotas, variables globais e ecuacións. Obtén unha peza nativa cun árbol de elementos activo, non un sólido inerte.
- **De volta:** unha macro que executa dentro de SolidWorks escribe os elementos e as ecuacións da peza nun ficheiro `.cadcraft-sw.json`. A apertura dese ficheiro en PartCraft aínda non está construída nesta versión (necesita un núcleo exacto).

:::warning
Nada disto se probou aínda en SolidWorks. SolidWorks só funciona en Windows e con licenza, e PartCraft nunca executou estas macros nel. As macros escribironse a partir da documentación da API de SolidWorks e comprobouse aquí a súa estrutura. Espere informar de problemas: o rexistro que escribe a macro indica que paso fallou.
:::

PartCraft non pode escribir un ficheiro `.sldprt`: ese formato é pechado. A macro é o xeito de obter unha peza nativa.

## Enviar unha peza como macro

1. Abra a peza.
2. Escolla {{ui:Export}} e logo {{ui:Macro para SolidWorks (.swb)}}. PartCraft descarga `<part>.swb`; a barra de estado indica que foi "escrito sen o núcleo exacto".
3. Un diálogo indica cantos elementos, variables globais e ecuacións constrúe a macro e enumera o que deixa fóra. Nesta versión non se xera ningún STEP xunto a ela: use {{ui:Export}} e logo {{ui:STEP (facetado, núcleo de malla)}} se o necesita.
4. En SolidWorks, escolla **Tools > Macro > Run**, seleccione o ficheiro `.swb` e espere. Crea unha peza nova a partir da súa plantilla de peza predeterminada, define os milímetros e constrúe cada elemento.
5. Ao final, unha mensaxe indica cantos pasos se fixeron, cantos fallaron e cantos coincidiron co corpo de PartCraft. O rexistro completo, `<part> macro log.txt`, escríbese xunto á macro.

A macro constrúe:

| PartCraft | Na peza nova |
|---|---|
| Esbozo sobre o plano de alzado, de planta ou de perfil | Un esbozo nese plano, con as súas liñas, arcos, círculos, puntos, relacións e cotas (co nome que lle dá PartCraft, como `k7`) |
| Esbozo sobre unha cara | Un esbozo sobre a mesma cara, escollida por un punto nela |
| Esbozo sobre un plano fixo | Un plano de referencia por tres puntos, e o esbozo sobre el |
| Extruír, cortar (ciego, a través de todo, plano medio, dúas direccións, conicidade) | Extrusión de resalte ou de corte |
| Revolución, corte por revolución | Revolución arredor da mesma liña de centro |
| Burato (simple, avellanado, rebaixado cónico, roscado) | Un ou dous cortes cos seus propios esbozos (un burato roscado é o da súa broca de roscar; sen rosca) |
| Patrón lineal e circular, espello | Patrón lineal, patrón circular, espello (elementos ou o corpo) |
| Redondeo, chanfro, vaciado | Redondeo, chanfro e vaciado nas mesmas arestas e caras, escollidas por puntos |
| Parámetros e ecuacións | Variables globais e ecuacións sobre as cotas renomeadas |
| Elementos suprimidos, a barra de retroceso | Suprimidos do mesmo xeito; a barra de retroceso no mesmo sitio |

Despois de cada elemento sólido, a macro compara o volume e o tamaño do corpo cos de PartCraft. Cando difiren, inverte unha vez a dirección dese elemento e comproba de novo; se iso non mellora, desfai o cambio e escribe "Check" no rexistro.

### O que se deixa fóra

O diálogo e o principio da macro enumeran todo o que non se transfire, co motivo. Por agora son: sólidos importados (insira o STEP no seu lugar), barridos, lofts, desmoldeos, eixos e puntos de referencia, condicións de fin "ata", extrusión só de parte dos contornos, e todo o que dependa deles. As splines convértense en curvas que pasan polos seus puntos. Esta versión non ten núcleo exacto, así que os esbozos sobre caras e os elementos que escollen arestas ou caras tamén quedan fóra.

## Enviar un STEP con nome

Aínda non construído nesta versión: {{ui:STEP para SolidWorks (con nome, AP214)}} necesita un núcleo exacto, e ao escollelo aparece "STEP para SolidWorks: aínda non construído. …". Cun núcleo exacto, o ficheiro leva o nome da peza, os milímetros e a cor da peza, e coloca Y cara arriba, como mostra SolidWorks as pezas (a exportación simple {{ui:STEP AP214 (sólido exacto)}} coloca Z cara arriba). As letras con acento perden o acento no nome, e os demais caracteres fóra do ASCII simple convértense en `_`.

## Traer unha peza de volta

A apertura do ficheiro en PartCraft (paso 3) aínda non está construída nesta versión: indica "Abrir unha exportación de SolidWorks: aínda non construído. …". A aplicación de debuxo CadCraft segue abrindo o ficheiro e toma os seus esbozos.

1. Escolla {{ui:File}} > {{ui:Export}} > {{ui:Macro de exportación para traer pezas de volta (.swb)}} para descargar `CadCraftExport.swb` e póñao xunto ás súas pezas.
2. En SolidWorks, abra a peza, escolla **Tools > Macro > Run** e seleccione `CadCraftExport.swb`. Escribe `<part>.cadcraft-sw.json` xunto á peza e non cambia nada nela.
3. En PartCraft, escolla {{ui:Open}} e seleccione ese ficheiro, ou solte o ficheiro na vista 3D.
4. Cun núcleo exacto, PartCraft reconstrúe a peza elemento por elemento e mostra o que fixo: por exemplo, "5 de 5 elementos transferidos desde SolidWorks (Flange.SLDPRT)", cada elemento que non puido transferir ("Non transferido: Sweep1 (Sweep).") e se o volume coincide co que escribiu SolidWorks.
5. Garde a peza como peza de PartCraft con {{ui:Save}}.

Os esbozos caen nun plano base cando están sobre el, na cara plana correspondente da peza cando a hai (así seguen as edicións posteriores), e noutro caso nun plano fixo. As arestas e as caras de redondeos, chanfros e vaciados atópanse a partir de puntos e consérvanse como referencias con nome. As variables globais convértense en parámetros (os nomes con espazos levan guións baixos: "Bolt count" pasa a `Bolt_count`) e as ecuacións convértense en ecuacións sobre as mesmas cotas. Non se adiviña nada: o que non ten equivalente enumérase.

A aplicación de debuxo CadCraft abre o mesmo ficheiro e toma os seus esbozos.

:::note
O formato é `cadcraft-sw-export` versión 1, JSON en texto plano en milímetros e graos. Un ficheiro dunha macro máis nova, ou que non sexa válido, recházase indicando o motivo.
:::
