---
title: Cambiar unha peza a través do seu historial
summary: Editar características e esbozos a posteriori, suprimir, retroceder, inserir características antes, reordenar, renomear e eliminar, e desfacer calquera deles.
keywords: historial, árbore de características, árbore de deseño, editar característica, editar esbozo, suprimir, reactivar, retroceder, retroceso, avanzar, reordenar, mover característica, eliminar, renomear, desfacer, refacer, reconstruír, rexenerar, pai fillo, peza grande, moitas características, reconstrución lenta, 750 características
from: 6f75aef4
---

Unha peza de PartCraft é o seu historial: a lista de planos, esbozos e características na parte esquerda. PartCraft reconstrúe o sólido desde o inicio desa lista cada vez que algo cambia. Cambiar un número ao principio da lista cambia todo o que se constrúe sobre el.

## Editar unha característica

1. Prema a característica no historial (ou o esbozo sangrado debaixo dela).
2. Cambie os seus axustes no panel dereito. Cada cambio reconstrúe de inmediato.

Non hai Aceptar nin Cancelar: cada cambio aplícase. Se non lle gusta, prema {{key:Mod+Z}}.

## Cambiar as arestas ou caras que usa un redondeo, chafrán ou casca

Faga dobre clic na característica no historial, ou seleccione e escolla {{ui:Seleccionar arestas}} (ou {{ui:Seleccionar caras}}). Prema arestas ou caras para engadilas ou quitalas, e despois {{ui:Feito}} ou {{key:Esc}}. Vexa [Redondear, biselar e ocar](topic:fillet-chamfer-shell).

## Editar un esbozo

1. Faga dobre clic no esbozo no historial, ou seleccione o esbozo e escolla {{ui:Editar esbozo}} no panel dereito (ou {{ui:Esbozo}} na barra de ferramentas).
2. A peza volve ao estado en que estaba cando se fixo o esbozo: as características posteriores ocúltanse mentres edita.
3. Cambie a xeometría, as relacións ou as cotas.
4. Peche o esbozo. A peza completa reconstrúese co cambio.

Para cambiar só un tamaño, non é necesario abrir o esbozo. Seleccione a característica ou o esbozo e cambie o número en **Cotas do esbozo** (ou **Cotas de control**) no panel dereito. Vexa [Cambiar tamaños sen abrir o esbozo](topic:change-sizes).

## Cando unha característica falla

Se un cambio fai imposible unha característica, PartCraft constrúe todo o demais e marca o problema:

- a característica mostra **⚠ erro** no historial, e a súa mensaxe aparece na parte superior do seu panel dereito (pase o cursor pola fila para lela tamén);
- as características que a necesitan mostran **⚠ sen construír**, con "Necesita Extrude2, que está fallando.";
- a etiqueta da barra de estado indica "1 característica con fallo".

Corrixa a causa (ou desfaga o cambio) e a peza vólvese construír. As mensaxes habituais e o que facer con cada unha están en [Resolución de problemas](topic:troubleshooting).

## Suprimir unha característica

Suprimir desactiva unha característica sen eliminala: útil para probar unha peza sen un burato ou un patrón.

1. Seleccione a característica.
2. Escolla {{ui:Suprimir}}. A súa fila mostra **off**. As características que a necesitan tampouco se constrúen.
3. Escolla {{ui:Reactivar}} para volver activala.

## Retroceder

Retroceder constrúe a peza só ata un punto, para vela tal como estaba ou para engadir unha característica máis atrás no historial.

1. Seleccione unha característica e escolla {{ui:Retroceder ata aquí}}. Esa característica e todas as de abaixo aparecen en gris e non se constrúen. Unha fila **Barra de retroceso · avanzar** marca o lugar.
2. Calquera característica que engada agora vai **na barra**, antes das grises.
3. Prema **Barra de retroceso · avanzar** para construír todo de novo.

A posición de retroceso gárdase no ficheiro.

## Reordenar características

1. Seleccione a característica.
2. Escolla {{ui:Subir}} ou {{ui:Baixar}}, ou, co foco na fila do historial, prema {{key:Alt+Up}} ou {{key:Alt+Down}}.

Unha característica nunca pode subir por riba do que usa. O botón aparece en gris, e pasar o cursor por el (ou probar a tecla) dá o motivo, por exemplo "Extrude2 usa Sketch2, así que Sketch2 debe ir primeiro."

O que usa unha característica: o seu esbozo; a cara sobre a que se asenta o seu esbozo; as características que copia un patrón ou un espello; unha liña ou revolución do esbozo usada como dirección ou eixo.

## Eliminar unha característica

1. Seleccione a característica e escolla {{ui:Eliminar}} no panel dereito ou na barra de ferramentas, ou prema {{key:Delete}}.
2. Se outras características a usan, PartCraft pregunta: "Extrude3, Hole1 usan Extrude1 e tamén se eliminarán." Escolla {{ui:Eliminar todo}} ou {{ui:Cancelar}}.

Eliminar unha característica non elimina o seu esbozo: o esbozo volve aparecer na vista como un esbozo sen usar, listo para outra característica. Elimine o esbozo por separado se non o necesita.

## Renomear

Seleccione a característica e escriba un **Nome** novo na parte inferior do panel dereito (ata 60 caracteres). O nome da propia peza aparece no panel dereito cando non hai nada seleccionado.

## Pezas con centos de características

Unha peza con centos de características probouse con 750. PartCraft conserva o sólido que tiña a medio camiño do historial, así que un cambio ao final do historial reconstrúe só as características posteriores; un cambio preto do inicio reconstrúe todo o que se constrúe sobre el, o que leva máis tempo. Desfacer e refacer reconstrúen só desde o punto onde os dous estados difiren. Para traballar máis rápido nunha peza grande, retroceda ata o punto onde está traballando (vexa Retroceder máis arriba) ou suprima o que non necesite de momento. Varios cortes e saíntes que non se tocan entre si aplícanse xuntos, así que unha peza feita de moitos buratos e saíntes separados constrúese máis rápido do que o número de características fai pensar.

Unha peza grande reconstrúese en segundo plano: a etiqueta de construción na parte inferior indica **Reconstruíndo…** e ata onde chegou, e a vista, os paneis e os menús seguen funcionando mentres se executa. A peza na pantalla é a última construída ata que a nova estea lista. Se cambia algo de novo mentres reconstrúe, PartCraft constrúe a versión máis nova e descarta a que estaba en curso. Unha peza pequena reconstrúese de inmediato.

## Desfacer e refacer

- {{key:Mod+Z}} ou {{ui:Desfacer}} desfai o último cambio: unha característica, un axuste, unha edición de esbozo, un arrastre. A barra de estado indica cal foi, por exemplo "Desfeito: cambiar cota."
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} ou {{ui:Refacer}} refai o cambio.
- PartCraft conserva os últimos 200 pasos (unha peza tan grande que 200 copias usarían moita memoria conserva menos, nunca menos de 20 dos máis recentes). Os cambios na folla de debuxo (unha sección, un símbolo GD&T movido) están na mesma lista. Abrir un ficheiro ou iniciar unha peza nova borra a lista.

:::mac
En Mac, use ⇧⌘Z para refacer. En Safari, ⌘Y pode abrir o historial do navegador.
:::
