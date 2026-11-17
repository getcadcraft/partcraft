---
title: Formas libres con Forma e elementos de superficie
summary: Empurre e puxe unha gaiola de control suave no espazo de traballo Forma, vinque arestas, use a simetría, comprobe e acabe a forma nun sólido ou superficie exacta; despois remende, faga loft, cosa, engrose, desprace, estenda e recorte superficies en Deseño. Que é exacto e que é aproximado.
keywords: forma, forma libre, t-spline, subdivisión, catmull-clark, gaiola, quadball, vinco, simetría, cebra, curvatura, superficie, parche, recheo, superficie de loft, coser, cosido, engrosar, superficie de desprazamento, estender, recortar
from: 0d326ef4
---

:::note
**Aínda non implementado nesta versión.** Acabar unha forma na peza, e os elementos de superficie, necesitan un núcleo xeométrico exacto, que esta versión de PartCraft non ten: constrúe todas as pezas co núcleo de malla. [O que aínda non está implementado](topic:not-built-yet) explica que facer no seu lugar. O resto desta páxina describe como funcionan co núcleo exacto.
:::

O espazo de traballo **Forma** fai formas orgánicas. Edita unha **gaiola**, unha malla grosa de cantos, arestas e caras. A forma é a superficie suave que controla a gaiola (a súa superficie límite de Catmull–Clark), así que mover un canto dobra a superficie suavemente ao seu redor. Cando quede ben, {{ui:Acabado}} engade a forma ao historial da peza como elemento *Forma*, e o núcleo exacto convértea en superficies B-spline verdadeiras. Despois pode redondealo, cortala, unila a outros elementos e exportala como STEP.

Escolla **Forma** na lista **Espazo de traballo** á esquerda da barra de ferramentas.

## Iniciar unha gaiola

1. Defina **Tamaño** e **Divisións** no panel da dereita. Divisións é cantas caras recibe cada lado.
2. Prema {{ui:Caixa}}, {{ui:Quadball}} ou {{ui:Plano}} na barra de ferramentas. O panel tamén ten **Cilindro**, **Toro** e **Caras por clics**.

- Un **quadball** é unha gaiola en caixa axustada de xeito que os seus puntos de canto quedan sobre unha esfera. Entre eses puntos a superficie queda un pouco dentro da esfera: uns 0,4 % menos de volume con 2 divisións.
- Un **plano** está aberto, así que se converte nun corpo de superficie (ver «Elementos de superficie en Deseño» máis abaixo).
- **Caras por clics**: prema 4 puntos no plano superior (do chan) ou nos cantos da gaiola para facer unha cara. As caras que comparten cantos únense. Prema {{key:Enter}} despois de 3 puntos para un triángulo, ou {{key:Esc}} para parar.

A súa gaiola sen acabar gárdase co ficheiro da peza, así que pode pechar o ficheiro e seguir máis tarde.

## Seleccionar e mover

- Prema un canto, unha aresta ou unha cara da gaiola. {{key:Shift}}+clic engade ou quita elementos. {{key:Esc}} borra a selección.
- Aparece un gizmo no centro da selección. Arrastre unha frecha para mover ao longo dela, ou un cadrado para mover no plano. Prema {{key:W}} para mover, {{key:E}} para xirar e {{key:R}} para escalar, ou use os botóns do panel. {{ui:Gizmo}} na barra de ferramentas recorre todos eles.
- A **Caída suave** (mm) tamén arrastra os cantos dentro desa distancia, esvaecéndose suavemente ata cero no bordo desa distancia.
- Cada arrastre é un paso de desfacer: {{key:Ctrl+Z}} e {{key:Ctrl+Y}} funcionan como de costume.

## Cambiar a gaiola

Os botóns **Modificar** do panel actúan sobre a selección:

| Botón | Función |
|---|---|
| {{ui:Extruír}} | As caras seleccionadas móvense cara a fóra pola **Distancia de extrusión**, ao longo das súas normais, con novas caras laterais. As arestas abertas seleccionadas crean novas caras cara a fóra. |
| {{ui:Bucle}} / Inserir bucle de aresta | Divide o anel de caras de catro lados que cruza a aresta seleccionada, a medio camiño. Máis bucles dan curvas máis axustadas. |
| Inserir punto | Engade un canto no medio da aresta seleccionada. |
| Subdividir | Divide cada cara seleccionada en caras de catro lados arredor do seu centro. |
| Ponte | Une dúas caras seleccionadas, ou dúas aberturas (seleccione unha aresta aberta en cada unha), cun tubo de caras. Ambas necesitan o mesmo número de arestas. |
| Encher burato | Pecha a abertura pola aresta aberta seleccionada cunha soa cara. |
| Soldar | Une os cantos seleccionados nun só, no seu punto medio. |
| Aplanar | Move os cantos seleccionados ao plano que mellor se axusta a eles. |
| Eliminar | Quita as caras, arestas (dúas caras se fusionan) ou cantos seleccionados. |

## Arestas vivas, simetría e visualización

- {{ui:Vincar}} fai vivas as arestas seleccionadas. O **Peso do vinco** 10 é totalmente vivo. Un peso menor mantense vivo durante tantos pasos de refinamento e logo suavízase, o que dá un redondeo axustado en vez dun pregamento duro. **Desvincar** volve suavizalas. **Vértice vivo** fixa un canto para que a superficie pase por el cun punto.
- **Simetría** reflicte a gaiola a través de X, Y ou Z = 0. Conserva o lado positivo, reflíctao e une as dúas metades. Despois, unha edición en calquera lado faise nos dous. Os cantos no plano de simetría quedan nel.
- {{ui:Visualización}} alterna entre **Suave** (a superficie que será o elemento) e **Caixa** (as propias caras da gaiola).
- **Análise**: as **Franxas cebra** reflicten unha luz de franxas desde a vista actual. Dóblanse suavemente sobre unha superficie suave e rompen nun vinco. A **Curvatura media** sombrea as zonas convexas en vermello, as cóncavas en azul e as planas en branco. Mídese na malla mostrada coa fórmula da cotanxente, así que é unha guía, non unha medida.

## Comprobar e acabar

- **Comprobación exacta** converte a gaiola no núcleo exacto sen cambiar a súa peza. Informa de cantos parches B-spline fai a gaiola, cantos son exactos, e se o resultado é un sólido pechado e válido e o seu volume.
- {{ui:Acabado}} engade un elemento *Forma* ao historial, ou actualiza a forma que estaba editando, e volve a Deseño. Unha gaiola pechada convértese nun sólido. A súa **Operación** no panel de Deseño pode ser Corpo novo, Unir, Cortar ou Intersecar. Unha gaiola aberta convértese nun corpo de superficie.
- Para cambiar unha forma máis tarde, selecciónea no historial e prema **Editar en Forma**. O corpo construído ocúltase mentres edita a súa gaiola.
- **Descartar** tira a gaiola sen tocar o historial.

## Que é exacto e que é aproximado

Cada cara de catro lados da gaiola, refinada cando faga falta, convértese nun parche B-spline bicúbico.

- Onde cada canto dunha cara é *regular* (catro arestas se atopan dentro da superficie, ou tres nunha aresta aberta ou ao longo dun vinco), o parche é **exactamente** a superficie de subdivisión. As probas comprobano ata 1e-9 mm.
- Arredor dun **punto extraordinario** (tres, cinco ou máis arestas que se atopan, un canto dunha cara de tres ou cinco lados, ou o extremo dun vinco) non hai un parche polinómico exacto. Alí o parche toma o punto exacto e o plano tanxente nese canto e as curvas de aresta dos veciños, así que os parches seguen encontrándose sen fenda. A continuidade tanxente ao longo das arestas que se atopan no punto é aproximada. O panel de Forma e o do elemento dan o maior ángulo, normalmente por debaixo de 2°. Un **Nivel** máis alto no panel do elemento fai estes parches máis pequenos e máis próximos.
- Os vincos vivos son arestas reais do sólido, así que pode redondealos.
- Cada parche é a súa propia cara, así que unha forma ten moitas caras e trázanse liñas entre elas.

## Elementos de superficie en Deseño

Os comandos de superficie están no menú {{ui:Máis}} de Deseño, baixo os elementos. Necesitan o núcleo exacto. Os corpos de superficie debuxanse transparentes en azul. Non forman parte do sólido ata que os engrose ou os coa.

| Comando | Función |
|---|---|
| Parche | Recheña un bucle pechado de arestas. Primeiro prema {{key:Shift}}+clic nas arestas do sólido, ou seleccione un corpo de superficie para encher a súa abertura. **Tanxente (G1)** fai que o parche se una a esa superficie de xeito suave. |
| Superficie de loft | Unha superficie que pasa por unha cadea de curvas por esbozo (abertas ou pechadas), na orde do historial. |
| Coser | Cose corpos de superficie polas súas arestas compartidas. Se se pechan, o resultado é un sólido, cunha Operación como os outros elementos. |
| Engrosar | Dá a un corpo de superficie un grosor: ao longo da súa normal, en contra dela, ou a metade en cada sentido. O resultado é un sólido. |
| Superficie de desprazamento | Unha copia dun corpo de superficie desprazada ao longo das súas normais. O orixinal permanece. |
| Estender superficie | Fai crecer unha superficie dunha soa cara máis aló das arestas que escolla. |
| Recortar superficie | Corta un corpo de superficie onde outro corpo de superficie, ou o sólido, o atravesa. Prema **Seleccione un punto na peza** para escoller que peza conservar, ou conserve todo o resto. |

Coser, Engrosar, Estender e Recortar consomen o corpo de superficie do que parten. Os elementos posteriores usan o novo.

Límites actuais: as formas con varias pezas pechadas separadas non se converten nun só sólido; as zonas regulares non se fusionan en superficies máis grandes; e vexa [O que aínda non está implementado](topic:not-built-yet).
