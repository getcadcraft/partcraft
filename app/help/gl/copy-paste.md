---
title: Copiar, pegar e duplicar
summary: Copie xeometría de esbozo, elementos e pezas de conxunto; pegue onde faga clic ou no mesmo sitio; duplique nun paso; e o que vén coa copia e o que non.
keywords: copiar, pegar, cortar, duplicar, portapapeis, pegar no mesmo sitio, seleccionar todo, non seleccionar nada, eliminar, ctrl c, ctrl v, ctrl d, instancia, compoñente, copiar esbozo, copiar elemento, copiar peza
from: 611307d7
---

O grupo {{ui:Editar}} da barra de ferramentas contén {{ui:Desfacer}}, {{ui:Refacer}}, {{ui:Copiar}}, {{ui:Pegar}} e un menú {{ui:Máis}} con {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Pegar no mesmo sitio}}, {{ui:Duplicar}}, {{ui:Eliminar}}, {{ui:Seleccionar todo}} e {{ui:Non seleccionar nada}}, cada un coa súa tecla. O que copian depende de onde estea: xeometría nun esbozo aberto, un elemento no historial, ou unha peza nun conxunto.

Un elemento atenuado non pode actuar neste momento. Pase o punteiro por riba: a súa indicación di o motivo, por exemplo « Seleccione primeiro a xeometría do esbozo » ou « O portapapeis contén Sketch2 e Extrude2: os elementos pégansen no historial, así que saia primeiro do esbozo ».

| Acción | Tecla | Nun esbozo | No historial | Nun conxunto |
|---|---|---|---|---|
| Copiar | {{key:Mod+C}} | Os puntos e curvas seleccionados | O esbozo, extrusión, revolución ou burato seleccionado (co seu esbozo) | A peza seleccionada |
| Cortar | {{key:Mod+X}} | Copiar e logo eliminar | Copiar e logo eliminar o elemento | Copiar e logo retirar a peza |
| Pegar | {{key:Mod+V}} | A copia segue o punteiro; prema onde vai | Engade a copia ao final do historial | Unha copia nova xunto ás demais pezas |
| Pegar no mesmo sitio | {{key:Mod+Shift+V}} | Nas mesmas coordenadas | Igual que Pegar | No mesmo sitio que a peza copiada |
| Duplicar | {{key:Mod+D}} | Copiar e mover dun paso; o portapapeis non se toca | Unha segunda copia xusto despois do elemento | Unha segunda copia xunto ás demais pezas |
| Eliminar | {{key:Delete}} | A selección | O elemento (pregunta se outros o usan) | A peza ou a unión |
| Seleccionar todo | {{key:Mod+A}} | Todo no esbozo | Non dispoñible | Non dispoñible |
| Non seleccionar nada | {{key:Esc}} | Borra a selección | Borra a selección e as escollas | Borra a selección |

Cada pegado, duplicado e corte é un paso da lista de desfacer: {{key:Mod+Z}} o desfai, e {{key:Mod+Y}} o restaura.

## Nun esbozo

1. Seleccione o que quere copiar: prema, {{key:Shift}}+clic para máis, arrastre unha xanela, ou prema {{key:Mod+A}} para todo.
2. Prema {{key:Mod+C}} ou escolla {{ui:Copiar}}. A barra de estado di o que se copiou.
3. Prema {{key:Mod+V}} ou escolla {{ui:Pegar}}. Unha copia en trazos segue o punteiro, suxeita polo seu centro. Encaixa nos puntos: para poñer o centro dun círculo copiado sobre un punto, prema ese punto.
4. Prema onde debe ir. A xeometría pegada queda seleccionada, así que pode arrastrala ou engadirlle relacións de inmediato. {{key:Esc}} cancela o pegado.

Que vén coa copia:

- Unha liña, un círculo ou un arco copiado trae consigo os seus propios puntos extremos e o seu centro.
- As relacións e as cotas **entre elementos copiados** veñen: un rectángulo copiado segue sendo un rectángulo, cos seus tamaños.
- As relacións **con xeometría que non copiou**, e coa orixe, perdéronse. A barra de estado as conta: « 2 relacións con xeometría fóra da copia non virán. » Así que unha copia pegada pode moverse libremente ata que a suxeite con relacións ou cotas.
- Un punto fixo segue fixo, na súa nova posición.

{{ui:Pegar no mesmo sitio}} coloca a copia exactamente nas coordenadas da orixinal, neste esbozo ou noutro: útil para levar un perfil dun esbozo a outro. No mesmo esbozo, a copia queda enriba da orixinal; arrástrea para afastala.

{{ui:Duplicar}} ({{key:Mod+D}}) copia a selección e comeza a colocala ao instante, sen tocar o que hai no portapapeis.

:::tip
Para repetir un centro de burato ou unha ranura varias veces, copie unha vez e pegue varias: cada {{key:Mod+V}} comeza unha copia nova que segue o punteiro.
:::

## No historial

1. Prema un esbozo, unha extrusión, unha revolución ou un burato no historial.
2. {{key:Mod+C}} copia. Un elemento baseado nun esbozo cópiase xunto co seu esbozo.
3. {{key:Mod+V}} engade a copia ao final do historial (na barra de retroceso, se retrocedeu), con nomes novos como Sketch3 e Extrude2.

A copia queda no mesmo plano ou cara que a orixinal, así que se constrúe enriba dela e a peza ten o mesmo aspecto. Para mover a copia, seleccione o novo esbozo e cambie o seu plano no panel dereito, ou ábraoo e arrastre ou volva acotar o perfil.

- Pegar **noutra peza**: abra esa peza e prema {{key:Mod+V}}. Cando o esbozo da copia estaba sobre unha cara que esa peza non ten, vai ao plano frontal, e a barra de estado o indica.
- {{ui:Duplicar}} fai copiar e pegar nun paso, dentro da mesma peza.
- {{ui:Cortar}} copia o elemento e logo o elimina (preguntando antes se outros elementos o usan).

Os patróns, os espellos, os redondeos, os chaflanes, as cascas e os sólidos importados non se poden copiar: dependen de arestas, caras ou elementos escollidos nesta peza. Copie o esbozo ou o elemento sobre o que están construídos, ou fágaos patrón con {{ui:Lineal}} ou {{ui:Circular}}.

## Nun conxunto

1. Prema unha peza na vista ou na lista da esquerda.
2. Escolla {{ui:Duplicar}} ({{key:Mod+D}}), ou {{key:Mod+C}} e logo {{key:Mod+V}}.

A copia nova é a **mesma peza**: se edita unha, cambian todas as copias. Aparece a 20 mm á dereita de todo o que xa hai no conxunto, xirada igual que a copia, e queda aí ata que unha unión a coloque. {{ui:Pegar no mesmo sitio}} ({{key:Mod+Shift+V}}) pónea exactamente onde está a peza copiada; únaa para movela (o desprazamento dunha unión deslizante empúxaa ao longo).

Pegar unha peza copiada doutro conxunto trae a peza, igual que {{ui:Inserir}} desde o seu ficheiro. {{ui:Engadir copia}} no grupo Montaxe fai o mesmo que {{ui:Duplicar}}, e funciona sen nada seleccionado (copia a última peza).

## O portapapeis

- É o portapapeis propio de PartCraft, non o do ordenador: non pode pegar xeometría de PartCraft noutro programa, nin texto nas vistas de PartCraft.
- Gárdase neste navegador, así que outra lapela de PartCraft pode pegar o que copiou. Lese e compróbase como un ficheiro aberto; o que estea danado ou veña doutra versión rexéitase.
- Unha peza cun ficheiro STEP importado grande pode ser demasiado grande para que o navegador a garde: nese caso só se pega nesta lapela.
- Nun campo de número ou na busca da axuda, {{key:Mod+C}} e {{key:Mod+V}} copian e pegan texto como de costume.

Na folla de debuxo, copiar e pegar aínda non están dispoñibles; {{ui:Eliminar}} e {{ui:Non seleccionar nada}} funcionan sobre o símbolo seleccionado. Vexa [O que aínda non está construído](topic:not-built-yet).
