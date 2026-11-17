---
title: Construír un conxunto con uniones
summary: Inicie un conxunto a partir dunha peza, insira copias e outros ficheiros de peza, únaos con uniones ríxidas, xiratorias, deslizantes, cilíndricas, planas, esféricas e de pasador en ranura sobre caras planas, centre as uniones en eixos, edite unha peza no sitio e garde o conxunto.
keywords: conxunto, montaxe, unión, uniones, acoplamento, bucle, bucle pechado, ligazón, catro barras, mecanismo, ríxida, xiratoria, deslizante, cilíndrica, plana, esférica, unión esférica, pasador en ranura, inserir compoñente, fixa, concéntrica, coincidente, editar peza, en contexto, partcraft-asm
from: a53bbfef
---

Un conxunto une pezas. En PartCraft, as **uniones** colocan as pezas: cada unión se asenta sobre unha cara plana de cada unha de dúas pezas e as pon cara a cara. Unha unión xiratoria permite que unha peza xire, unha deslizante a deixa deslizar, e unha ríxida a suxeita.

## Iniciar un conxunto

1. Constrúa unha peza cun sólido (unha peza baleira non pode entrar nun conxunto: « Constrúa primeiro un sólido e logo insírao nun conxunto. »).
2. Escolla {{ui:Montaxe}} na barra de ferramentas.

A barra de estado di « Conxunto iniciado con Part1 como peza fixa. Insira máis pezas ({{ui:Engadir copia}}, {{ui:Inserir}} ou {{ui:Editar}} › {{ui:Duplicar}}) e logo únaas. » O panel esquerdo lista agora **Pezas** e **Unións**, e a barra de ferramentas mostra as ferramentas do conxunto. As ferramentas de esbozo e de elementos ocúltanse.

A primeira peza é **fixa**: nunca se move, e todo o demais se coloca en relación con ela.

## Inserir pezas

- {{ui:Engadir copia}} insire outra copia da peza seleccionada (ou da última). As copias comparten unha peza: se a edita, cambian todas as copias.
- {{ui:Duplicar}} ({{key:Mod+D}}) no grupo Editar fai o mesmo coa peza seleccionada. {{key:Mod+C}} e {{key:Mod+V}} copian unha peza e pégana xunto ás demais, neste conxunto ou noutro; {{key:Mod+Shift+V}} pégaa no mesmo sitio. Vexa [Copiar, pegar e duplicar](topic:copy-paste).
- {{ui:Inserir}} insire unha peza dun ficheiro `.partcraft.json` do seu ordenador. A peza cópiase no conxunto.

As pezas novas aparecen a 20 mm á dereita de todo o que xa hai, e quedan aí ata que unha unión as coloque. Unha peza sen unión tamén pode moverse á man: valores escritos ou frechas que arrastra (vexa [Lista de pezas, vistas explotadas e pezas en movemento](topic:assembly-bom-explode)).

## Unir dúas pezas

1. Escolla {{ui:Unión}} ou prema {{key:J}}. O panel dereito di **Nova unión**.
2. Prema unha cara plana da primeira peza. Iluminase.
3. Prema unha cara plana da segunda peza.

A segunda peza salta para que a súa cara quede contra a cara da primeira, mirándoa. A unión aparece en **Unións**, por exemplo « Revolute1 », e o panel dereito mostra os seus axustes.

- Se as dúas caras se fixeron por revolucións, a unión comeza como **xiratoria**; se non, **ríxida**. Cámbiea despois.
- As caras curvas non se poden escoller: « Esa cara é curva. Escolla unha cara plana (para xirar arredor dun burato ou do eixo dunha revolución, escóllao despois na unión). »
- {{key:Esc}} cancela unha unión que comezou (ou prema unha peza na lista da esquerda).

### Axustes da unión

| Axuste | Que fai |
|---|---|
| **Tipo** | Unha das uniones da táboa de abaixo |
| **Ángulo (°)** | Xira a segunda peza arredor do eixo da unión (en ángulo recto coas caras) |
| **Desprazamento (mm)** | Move a segunda peza ao longo do eixo, afastándoa da cara (os valores negativos empurran cara a dentro) |
| **Ao longo de X**, **Ao longo de Y**, **Inclinar arredor de X**, **Inclinar arredor de Y**, **Ao longo da ranura**, **Dirección da ranura** | Os outros valores, mostrados para as uniones que os usan |
| **Centrar en** (para cada lado) | Onde cruza o eixo da unión a cara: « A orixe propia da cara », o eixo dunha revolución (« Eixo de Revolve1 ») ou o eixo dun burato (« Hole1, burato 2 ») |

Cada valor que unha unión deixa mover ten un control deslizante debaixo da súa caixa; os demais fíxanse unha vez.

| Unión | Que se move | Fíxase unha vez |
|---|---|---|
| **Ríxida** | nada | Ángulo, Desprazamento |
| **Xiratoria** | Ángulo (unha bisagra) | Desprazamento |
| **Deslizante** | Desprazamento (un caixón) | Ángulo |
| **Cilíndrica** | Ángulo e Desprazamento (un eixo nun casquillo liso) | |
| **Plana** | Ao longo de X, Ao longo de Y a través da cara, e Ángulo (unha peza que desliza sobre unha mesa) | |
| **Esférica** | Ángulo (xiro) e Inclinar arredor de X e de Y, arredor do centro da unión (unha unión esférica) | |
| **Pasador en ranura** | Ao longo da ranura e Ángulo (un pasador nunha ranura recta) | Dirección da ranura: o ángulo da ranura desde o X da cara |

O X e o Y dunha cara son os da cara da primeira peza; o centro da unión defínese con **Centrar en**.

« A orixe propia da cara » é a orixe da peza proxectada sobre a cara, que moitas veces non é onde queremos aliñar as pezas. Nas pezas redondas e nos pasadores, estableza **Centrar en** como o eixo da revolución ou do burato nos dous lados: entón os eixos se aliñan, como nunha unión concéntrica.

### Exemplo: dúas bridas atornilladas cara a cara

1. Abra a peza da brida (unha revolución cun patrón circular de buratos) e escolla {{ui:Montaxe}}.
2. Escolla {{ui:Engadir copia}}.
3. Prema {{key:J}}, prema a cara plana do disco da primeira brida (a cara de onde parten os buratos dos parafusos) e logo a mesma cara da segunda brida. As caras se fixeron por revolución, así que a unión é xiratoria.
4. Estableza **Centrar en** como « Eixo de Revolve1 » en ambos os lados. As bridas agora comparten un eixo.
5. Escriba `22.5` en **Ángulo (°)** para aliñar os buratos dos parafusos, ou arrastre o control deslizante.

## Bucles pechados: ligazóns

As pezas unidas nun anel (unha ligazón de catro barras, unha manivela e un deslizador, un marco atirantado polos dous lados) forman un **bucle**. PartCraft resolve cada bucle para que se peche: as uniones do bucle toman os valores que unen o anel, movéndose o mínimo posible desde onde estaban.

- **Estableza ou arrastre** un valor dunha unión dun bucle e o resto do bucle segue. Nunha ligazón de catro barras, arrastre o **Ángulo** da manivela e a biela e o balancín moveranse con ela. O valor que estableceu consérvase; os demais calcúlanse a partir del.
- Na lista, unha unión dun bucle que aínda se pode mover é **azul**: aínda se podería fixar outro valor. Un bucle que non se pode mover (un marco atirantado) queda en negro. Un bucle que non se pode pechar é **vermello**.
- A caixa **Peza** mostra **Bucles**: cantos están pechados e cantos valores aínda se poden mover, por exemplo « 1 pechado; 1 valor aínda se pode mover ».
- {{ui:Comprobar o movemento por interferencias}} barre unha unión dun bucle co bucle seguíndoa, paso a paso (vexa [Comprobar un conxunto por interferencias e movemento](topic:check-assembly)).

Unha ligazón plana formada por barras planas apiladas ten que coincidir en profundidade: dúas pezas unidas cara a cara nos dous lados dun anel necesitan a mesma altura de pila en ambos os sentidos. Use o **Desprazamento** dunha unión para levantar unha peza onde a pila non cadra, ou o bucle non se pechará.

## Traballar coas pezas

Prema unha peza na vista ou na lista para seleccionala. O panel dereito mostra o nome da peza, cantas copias hai, o seu volume, as súas uniones, e se está fixa, fixada polas súas uniones, ou « Sen unir: queda onde se colocou ». Botóns:

- {{ui:Editar esta peza}} (ou {{ui:Editar peza}} na barra de ferramentas, ou faga dobre clic na peza da lista): abre a peza para editala;
- {{ui:Inserir unha copia}};
- {{ui:Facer a peza fixa}};
- {{ui:Eliminar}}: elimina tamén as súas uniones, despois de preguntar.

« Un conxunto conserva polo menos unha peza. Péchao no seu lugar. »

### Editar unha peza no sitio

1. Seleccione unha peza e escolla {{ui:Editar peza}}. A peza ábrese co seu historial; o título di « Bracket (no conxunto Bracket) ».
2. Cámbiea como calquera outra peza.
3. Escolla {{ui:Volver}} na barra de ferramentas. O conxunto actualízase: cada copia desa peza cambia, e as uniones nas caras feitas por aristas de esbozo seguen o cambio.

Traer o cambio de volta é un paso na lista de desfacer do conxunto.

## Desfacer, gardar e pechar

- O conxunto ten a súa propia lista de desfacer: {{key:Mod+Z}} e {{key:Mod+Y}} actúan sobre uniones, insercións e axustes.
- {{ui:Gardar}} ou {{key:Mod+S}} descarga `<nome do conxunto>.partcraft-asm.json`, con todas as pezas dentro. Ábrao despois con {{ui:Abrir}}.
- {{ui:Pechar}} pecha o conxunto e volve á peza desde a que comezou. Se o conxunto non está gardado, pregunta: {{ui:Cancelar}}, {{ui:Descartar o conxunto}} ou {{ui:Gardar primeiro}}.
- Para renomear o conxunto, prema un espazo baleiro para non ter nada seleccionado e cambie **Nome** no panel dereito.

## Conxuntos grandes

Un conxunto pode ter miles de copias de poucas pezas. As copias dunha peza debuxanse xuntas, unha unión que se xira move só as pezas que dependen dela, e a lista de pezas mostra as primeiras filas cun botón « Mostrar máis » debaixo (a peza seleccionada aparece sempre).

- Mentres xira ou fai zoom na vista, un conxunto de máis de uns 300.000 triángulos debúxase como unha caixa por peza, e despois completo un momento despois de parar.
- {{ui:Vistas}} › {{ui:Visualización lixeira}} mantén as caixas todo o tempo. Escoller unha peza e as uniones seguen usando as pezas reais.
- A velocidade de xiro depende tamén da súa tarxeta gráfica. Os números que PartCraft medeu están nas notas de versión, xunto coa máquina de onde saíron.

## Problemas de unión

- Unha peza á que non chega ningunha unión aparece como **libre**, e o panel di: « Bracket2 non está unido á peza fixa, así que queda onde se colocou. »
- Un bucle que non se pode pechar (as lonxitudes non chegan, un límite detén unha unión, as caras non coinciden en profundidade) mostra: « Revolute3 pecha un bucle que non se pode pechar: está desfasado 2,000 mm. Revise as caras, os desprazamentos e os límites das uniones do bucle. » As súas uniones ponse en vermello.
- Se unha cara ou un eixo que usa unha unión desaparece despois de editar unha peza: « A cara que usa esta unión xa non está en Bracket. » Elimine a unión e fágaa de novo.

Seguinte: [Comprobar un conxunto por interferencias e movemento](topic:check-assembly).
