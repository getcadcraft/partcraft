---
title: Configuración de PartCraft
summary: Escolle que botón do rato xira a vista, fai que un xesto de trackpad xire e desprace a peza, activa ou desactiva as relacións automáticas ao debuxar esbozos, e define cantos fíos usan os solucionadores de simulación.
keywords: configuración, preferencias, opcións, rato, botón central, botón da roda, órbita, xirar, trackpad, panel táctil, desprazamento, deslizar, pinzar, relacións, restricións, restricións automáticas, encaixe, coincidente, fíos, fíos do solucionador, núcleos, procesadores, multifío, resolver máis rápido, paralelo
from: 759edcaf
---

Abre {{ui:Configuración}} co engrenaxe da barra da aplicación ou con {{key:Mod+,}}. A primeira lapela, {{ui:PartCraft}}, contén os axustes desta aplicación; {{ui:General}} contén os que comparten todas as aplicacións de CadCraft (tema, barra de ferramentas, paneis). Os axustes de PartCraft existen só na aplicación: cámbiaos aquí, e este navegador lémbraos. {{ui:Restabelecer a configuración de PartCraft}} devolve todo ao estado inicial.

## Xirar a vista

- **Botón esquerdo** (o predeterminado): arrastra co botón esquerdo para xirar a peza; arrastra co botón dereito ou central para desprazar.
- **Botón central**: preme a roda e arrastra para xirar a peza; mantén {{key:Shift}} (ou {{key:Ctrl}}, ou ⌘) co botón central, ou arrastra co botón dereito, para desprazar. O botón esquerdo só selecciona caras, arestas e planos, así que un clic que se move un pouco nunca xira a peza. Moitos programas CAD funcionan así.

A roda fai zoom cara ao punteiro en ambos os casos. Nun esbozo, os botóns dereito e central desprazan como antes.

## Desprazamento: roda do rato ou trackpad

- **Averiguar** (o predeterminado): PartCraft observa o desprazamento. O desprazamento lateral ou fino, como o que envía un trackpad, xira a peza; as liñas enteiras da roda fan zoom.
- **Roda do rato**: o desprazamento sempre fai zoom cara ao punteiro.
- **Trackpad**: desliza con dous dedos para xirar a peza, mantén {{key:Shift}} e desliza para desprazar, pinza para facer zoom. Nun esbozo, un desprazamento con dous dedos despraza o esbozo.

Un pinzamento fai zoom en todas as opcións. Se "Averiguar" adiviña mal para o teu rato ou trackpad, escolle o que tes. Máis en [Trackpad, tacto e pantallas pequenas](topic:trackpad-and-touch).

## Esbozar: engadir relacións mentres se debuxa

**Engadir relacións mentres se debuxa** (activada por defecto): un clic que encaixa nun punto fai coincidir o novo punto con el, un clic nunha curva pon o punto sobre esa curva, e unha liña debuxada case horizontal ou vertical convértese en horizontal ou vertical. Ver [Relacións e cotas](topic:relations-dimensions).

Desactívao cando queiras colocar xeometría preto doutra sen unila a ela. O punteiro segue encaixando en puntos e curvas, pero non se une nada: as liñas debuxadas en cadea non comparten os extremos, así que un arrastre pode separalas. Engade ti as relacións que queiras desde o panel da dereita. Un perfil pechado segue extruíndose cando os seus extremos se tocan.

:::note
O axuste cambia só o que engade o novo debuxo. As relacións xa presentes nun esbozo mantéñense, e a ferramenta Redondeo segue creando o seu arco tanxente e o seu raio.
:::

## Esbozar: cotar mentres se debuxa

**Cotar mentres se debuxa** (activada por defecto): mentres se debuxa unha liña, un rectángulo, un círculo ou un arco, escribir un número enche a caixa de tamaño xunto ao punteiro ({{key:Tab}} pasa á seguinte caixa) e {{key:Enter}} debuxa a forma a ese tamaño, cunha cota controladora por cada tamaño que escribiches. Desactivada: escribir un número mentres debuxas non fai nada, e as formas debúxanse só con clics. Ver [Escribir o tamaño mentres debuxas](topic:sketch-basics#type-the-size-as-you-draw).

## Indicador da esquina

O que se mostra na esquina da vista 3D: **Cubo de vista** (o predeterminado; arriba á dereita — fai clic nunha cara, aresta ou esquina para mirar desde alí, arrástrao para orbitar, arrastra o seu anel de brúxula para xirar o modelo), **Icona de eixes** (un pequeno marcador X, Y, Z abaixo á esquerda que xira coa vista: X en vermello, Y en verde, Z en azul) ou **Ningún**. Ningún dos dous aparece mentres debuxas nin na folla de debuxo. Ver [O cubo de vista](topic:view-cube).

## Fíos do solucionador

Cantos fíos poden usar os solucionadores de simulación. **Automático** (o predeterminado) toma un menos que os procesadores lóxicos do ordenador (como máximo 16), para que a páxina siga respondendo mentres un estudo se resolve; ou escolle un número. Os estudos de voxel grandes, o pandeo, a tensión ao longo do tempo e o fluxo resólvense máis rápido con varios fíos (uns 2× con 4 fíos para 80.000 cubos nas nosas medicións, máis nun ordenador inactivo); os modelos con menos de uns 20.000 incógnitas quedan nun só fío, porque crear fíos custa máis do que aforran. Unha resolución con fíos dá a mesma resposta que con un só (salvo redondeo: as sumas fanse en distinta orde). Os resultados de cada estudo mostran **N fíos** ou **1 fío**, co motivo, baixo **Solucionador**.

Os fíos requiren que a páxina estea **illada de orixe cruzada** (o navegador só deixa que os workers compartan memoria neses casos). A páxina de laboratorio está; cando non o está, o axuste dío ("Esta páxina non está illada de orixe cruzada, así que os solucionadores usan un só fío sexa cal sexa a opción escollida aquí.") e cada resolución usa un só fío. Todo o demais funciona igual, e as respostas son as mesmas.

Os estudos de fluxo laminar usan tamén os fíos (uns 2,5× con 4 fíos para 54.000 celas de fluído, a mesma resposta ata o último díxito). O solucionador de tetraedros cuadráticos e a transferencia de calor corren nun só fío: foron medidos máis lentos no noso ordenador de proba ao usar fíos (os seus solucionadores están limitados pola velocidade da memoria e por un paso que non se pode dividir).

### No teu propio servidor web

Se executas PartCraft desde o teu propio servidor, funciona tal como se serve. Para os fíos do solucionador, faille enviar á páxina de PartCraft dúas cabeceiras:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

En Apache, no `.htaccess` da cartafol (precisa mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

En nginx, no `location` que serve PartCraft:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Recarga a páxina: Configuración › Fíos do solucionador ofrecerá entón **Automático** co número de procesadores do teu ordenador. A segunda cabeceira fai que o navegador rexeite calquera cousa que a páxina cargue doutro sitio que non o permita, o que está ben para PartCraft por si só (carga todo desde a súa propia cartafol).
