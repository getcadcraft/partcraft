---
title: Primeiros pasos con PartCraft
summary: Que fai PartCraft hoxe, que necesita o seu navegador, e unha primeira peza en dez minutos, desde o esbozo ata o ficheiro gardado.
keywords: inicio, primeira execución, inicio rápido, introdución, titorial, primeira peza, placa, paramétrico, modelador de pezas
from: 5f0a668d
---

PartCraft é a aplicación paramétrica de pezas e conxuntos da familia CadCraft. Debuxa un esbozo 2D, fíxao con relacións e cotas, convérteo nun sólido con elementos como extruír, revolución e burato, e cambia calquera número despois: a peza reconstrúese a partir do seu historial. As pezas van despois a conxuntos, onde as unións as colocan e permiten comprobar o movemento.

O que fai esta versión:

| Tarefa | Que obtén |
|---|---|
| Esbozos | Liñas, rectángulos, círculos, arcos, puntos e liñas de centro, con relacións e cotas, e un estado en tempo real: parcialmente definido, totalmente definido ou sobredefinido |
| Elementos sólidos | Extruír, cortar, revolución, corte por revolución, buratos simples e avellentados, patróns lineais e circulares, espellar, redondeos e chafláns en arestas rectas entre caras planas, e cascas e desmoldeos en caras planas. Barridos, uniones de perfís e os demais elementos que precisan un núcleo exacto aínda non están construídos nesta versión: ver [Que aínda non está construído](topic:not-built-yet) |
| Historial | Edite os números de calquera elemento, suprima, retroceda, reordene e elimine, con desfacer |
| Conxuntos | Pezas unidas con uniones rixidas, de revolución e deslizantes, unha comprobación de interferencias e unha comprobación de movemento |
| Debuxos | Unha folla A3 con tres vistas, unha isométrica, unha sección, unha vista de detalle, medidas xerais, referencias, marcos de control de elementos e símbolos de acabado superficial, exportada como PDF |
| Ficheiros | Os seus propios ficheiros de peza e de conxunto; STL, 3MF, STEP facetado, DXF e PDF de saída |

Todo funciona no seu navegador, no seu ordenador. **Non se envía nada.** Ver [Ficheiros: abrir, gardar e exportar](topic:files) para saber onde van os ficheiros.

## Do que precisa

- Un Chrome, Edge, Firefox ou Safari actual con **WebGL** (gráficos 3D) e **WebAssembly** activados. Os dous están activados por defecto. A xeometría sólida constrúese cun núcleo de malla en WebAssembly que se carga coa aplicación: ver [O núcleo de malla](topic:solid-kernels).
- O máis cómodo é un rato. Funciona un trackpad, e as pantallas táctiles sirven para ver e facer esbozos sinxelos: ver [Trackpad, tacto e pantallas pequenas](topic:trackpad-and-touch).
- Unha pantalla de polo menos 1280 píxeles de ancho mostra toda a barra de ferramentas nunha soa fila. As xanelas máis estreitas desprazan a barra de lado; nun teléfono os paneis ábrense como follas desde unha barra inferior.

Máis sobre navegadores: [Navegadores e ordenadores](common:browsers).

:::note
PartCraft funciona no navegador e, no escritorio, dentro de CadCraft Studio. O gardado en nube aínda non está dispoñible: abre as pezas desde o seu ordenador e gárdaas de novo nel como ficheiros.
:::

## Abrir PartCraft

1. Abra PartCraft.
2. Espere mentres a pantalla diga "Cargando o núcleo de sólidos…". A primeira vez tarda un momento.
3. Ve unha vista 3D baleira con tres planos base, o historial á esquerda ("Part1", e despois Plano frontal, Plano superior, Plano dereito) e unha caixa na vista con título "Comezar unha peza".
4. A etiqueta preto do extremo dereito da barra de estado di "Núcleo de malla": PartCraft constrúe cada peza co núcleo de malla nesta versión, así que as caras redondas son facetas planas. Pode comezar a modelar de inmediato.

Se a vista di que o navegador non pode mostrar 3D, ou que o núcleo non se cargou, ver [Solución de problemas](topic:troubleshooting#the-app-does-not-start).

## A súa primeira peza: unha placa cun burato

Vai facer unha placa de 60 × 40 mm, de 10 mm de espesor, cun burato pasante de 6 mm. As unidades son milímetros.

### Esbozar o contorno

1. Prema en **Plano frontal** no historial da esquerda. O plano realza na vista.
2. Escolla {{ui:Esbozo}} na barra de ferramentas, ou prema {{key:S}}. A vista xírase para mirar de fronte ao plano, e a ferramenta Liña queda activa.
3. Prema {{key:R}} para a ferramenta Rectángulo.
4. Mova o punteiro sobre a orixe (o pequeno círculo vermello cunha cruz). Un cadrado pequeno indica que se axusta. Prema.
5. Mova cara arriba e cara á dereita e prema de novo. Xa ten un rectángulo. As súas liñas son azuis: azul significa que aínda se poden mover.

### Dar medidas

1. Prema {{key:D}} para a ferramenta Cota.
2. Prema a liña superior e despois un pouco por riba dela. Abrese unha caixa numérica coa lonxitude actual.
3. Escriba `60` e prema {{key:Enter}}. O rectángulo cambia a 60 mm de ancho.
4. Prema a liña esquerda e despois un pouco á esquerda dela. Escriba `40` e prema {{key:Enter}}.

A etiqueta de arriba á esquerda da vista di agora **Totalmente definido** e as liñas pasan a tinta (negra no tema Papel, clara no tema Modelo). Todos os puntos e medidas están fixados.

:::tip
Se empezou o rectángulo lonxe da orixe, a etiqueta segue dicindo "Parcialmente definido · 2 graos de liberdade". Prema {{key:S}} para Seleccionar, prema unha esquina, {{key:Shift}}+prema na orixe, e despois escolla {{ui:• Coincidente}} no panel dereito.
:::

### Extruír

1. Escolla {{ui:Saír}} na barra de ferramentas, ou prema {{key:Esc}} ata que se peche o esbozo (normalmente dúas veces).
2. Escolla {{ui:Extruír}}. Aparece un sólido de 10 mm. "Extruír1" engádese ao historial, con "Esbozo1" sangrado debaixo.
3. O panel dereito mostra os axustes da extrusión. Para cambiar o espesor, escriba un número novo en **Profundidade (mm)** e prema {{key:Enter}} ou {{key:Tab}}. A peza reconstrúese de inmediato.

### Engadir o burato

1. Prema a cara plana grande da fronte da placa (o extremo da extrusión). Realza toda a cara e o panel dereito di **Cara**.
2. Escolla {{ui:Esbozo sobre esta cara}} no panel dereito.
3. Prema {{key:P}} para a ferramenta Punto e prema preto do centro da cara.
4. Escolla {{ui:Saír}}.
5. Escolla {{ui:Burato}}. Un burato de 6 mm atravesa a placa. Cambie o **Diámetro (mm)** no panel dereito se quere.

A caixa **Peza** da parte inferior esquerda mostra agora un volume, unha superficie, o tamaño (60 × 40 × 10 mm) e "Buratos pasantes: 1".

### Gardar

1. Prema {{key:Mod+S}} ou escolla {{ui:Gardar}}.
2. O navegador descarga `Part1.partcraft.json` na súa cartafol de descargas. O ficheiro contén todo o historial: ábrao de novo con {{ui:Abrir}} para seguir editando.

Para cambiar o nome da peza antes, prema un espazo baleiro da vista para que non haxa nada seleccionado e escriba un **Nome** novo no panel dereito.

## Onde seguir

- [Debuxar o primeiro esbozo](topic:sketch-basics) e [Definir por completo un esbozo](topic:relations-dimensions) explican ben o editor de esbozos.
- [Cambiar unha peza a través do seu historial](topic:edit-history) mostra como editar o que construíu.
- [Redondear, biselar e ocar](topic:fillet-chamfer-shell) e [Facer un debuxo](topic:drawing-pdf) rematan a peza. [Que aínda non está construído](topic:not-built-yet) enumera o que esta versión non fai, como barridos e uniones de perfís.
- [Se ven doutro modelador paramétrico](topic:coming-from) enumera os hábitos que aquí funcionan de forma distinta.
- [Teclas e rato](topic:keyboard) é a lista completa de atallos.
- [Usar esta axuda](common:help).
