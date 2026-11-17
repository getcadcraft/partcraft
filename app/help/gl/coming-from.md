---
title: Vir doutro modelador paramétrico
summary: Como os hábitos dos modeladores paramétricos de pezas de escritorio se corresponden con PartCraft, e as diferenzas que desorientan aos usuarios experimentados na primeira hora.
keywords: cambio, migrar, familiar, xestor de elementos, árbore de deseño, cota intelixente, extrusión de saínte, extrusión de corte, asistente de burato, uniones, acoplamentos, detección de interferencias, barra de retroceso, panel de propiedades, rato, diferenzas
from: fbacaee1
---

Se deseña pezas en SolidWorks, a maioría das ideas de PartCraft lle serán familiares: esbozos nos planos frontal, superior e dereito, relacións e cotas intelixentes, un historial de elementos cunha barra de retroceso, e conxuntos colocados por acoplamentos. A forma de chegar a eles é distinta en certos puntos, e esta primeira versión fai menos. Esta páxina relaciona os seus hábitos e enumera as sorpresas.

## Hábitos, relacionados

| Está afeito a | En PartCraft |
|---|---|
| A árbore de deseño á esquerda | O historial á esquerda: planos, despois elementos, con os esbozos sangrados baixo o elemento que os usa |
| Planos frontal, superior e dereito | Os mesmos tres, pola orixe. Frontal é o plano XY, Superior é XZ, Dereito é YZ; Y apunta cara arriba |
| Esbozo sobre un plano ou cara, despois a esquina de confirmación para saír | {{ui:Esbozo}} ({{key:S}}) sobre un plano ou cara plana seleccionada; {{ui:Saír}} ou {{key:Esc}} ata que se peche |
| Cota intelixente | {{ui:Cota}} ({{key:D}}). Prema un ou dous elementos, e logo onde vai o número. Segundo onde o coloque, escolle horizontal, vertical ou aliñada |
| Engadir relacións no panel de propiedades | Seleccione elementos e logo os botóns de relación do panel dereito (Coincidente, Horizontal, Paralela, Tanxente, Igual e así) |
| Relacións automáticas ao debuxar | As axudas de encaixe engaden relacións coincidentes, de punto sobre curva, horizontais e verticais |
| Cores de esbozo azul / negro / vermello | A mesma idea: azul subdefinido, negro totalmente definido, vermello sobredefinido. A etiqueta mostra os graos de liberdade que quedan |
| Liña de centro para as revolucións | {{ui:Liña de centro}} ({{key:N}}); {{ui:Revolución}} usa a primeira liña de centro, salvo que escolla outro eixo |
| Redondeo de esbozo | {{ui:Redondeo}} ({{key:F}}) nun esbozo: prema a esquina e escriba o raio |
| Alternar xeometría de construción | {{ui:Construción}} ({{key:Q}}) |
| Protuberancia extruída | {{ui:Extruír}}: Cego, Plano medio, Ata cara / seguinte / vértice, Desprazamento desde cara, segunda dirección, conicidade, un contorno (Escoller rexións) |
| Corte extruído | {{ui:Cortar}}: comeza como Ata o final; cambie a Cego para unha cavidade |
| Protuberancia / corte por revolución | {{ui:Revolución}} / {{ui:Máis}} › {{ui:Corte de revolución}} |
| Plano / eixo / punto de referencia | {{ui:Máis}} › {{ui:Plano}}, {{ui:Eixo}}, {{ui:Punto}} (vexa [Planos, eixos e puntos de referencia](topic:reference-geometry)) |
| Protuberancia ou corte por barrido / unión de perfís, desmoldeo | {{ui:Máis}} › {{ui:Desmoldeo}} sobre caras planas (vexa [Barrido, unión de perfís e desmoldeo](topic:sweep-loft-draft)). {{ui:Barrido}} e {{ui:Unión de perfís}} aínda non están construídos nesta versión (precisan un núcleo exacto) |
| Asistente de buratos | {{ui:Burato}} en cada punto de esbozo solto: simple, avellanado, rebaixado (90° / 82°) ou roscado ISO métrico M2–M24, pasante ou cego |
| Patrón lineal / circular, espello | {{ui:Lineal}}, {{ui:Circular}}, {{ui:Espellar}} (elementos ou o corpo completo) |
| Redondeo e chaflán en arestas | {{ui:Redondeo}} / {{ui:Chaflán}}: prema unha aresta, {{key:Shift}}+clic en máis, logo o botón. Un raio; chaflanes iguais, de dúas distancias ou de distancia e ángulo. Nesta versión só arestas rectas entre dúas caras planas, e os redondeos que se xuntan nunha esquina quedan en inglete. Redondee ou bisele as arestas curvas no esbozo ({{ui:Redondeo}} nun esbozo, {{key:F}}) |
| Casca | {{ui:Casca}}: prema as caras planas para abrir, logo o botón. Un espesor de parede |
| Abrir un ficheiro STEP | {{ui:Abrir}}: lese como triángulos, un corpo sólido sobre o que construír ([Abrir un ficheiro STEP](topic:import-step)) |
| Editar elemento, despois Aceptar | Prema o elemento; cambie os números á dereita; reconstrúese mentres escribe. Non hai Aceptar nin Cancelar: use {{key:Mod+Z}} |
| Editar esbozo | Faga dobre clic no esbozo do historial |
| Reconstruír | Automática despois de cada cambio. Non hai tecla de reconstrución |
| Suprimir / reactivar | {{ui:Suprimir}} / {{ui:Reactivar}} no panel dereito |
| Arrastrar a barra de retroceso | {{ui:Retroceder ata aquí}} nun elemento; prema « Barra de retroceso · avanzar » para volver |
| Arrastrar un elemento na árbore para reordenar | {{ui:Subir}} / {{ui:Baixar}} ou {{key:Alt+Up}} / {{key:Alt+Down}}; rexeitado co motivo cando rompería unha dependencia |
| Editar cotas facendo dobre clic no modelo | Seleccione o elemento: as cotas do seu esbozo listanse no panel dereito |
| Acoplamentos: coincidente, concéntrico, distancia, ángulo | {{ui:Unión}} ({{key:J}}): escolla unha cara plana en cada peza; a unión pónas cara a cara. **Centrar en** un eixo actúa como concéntrica; **Desprazamento** como distancia; **Ángulo** como ángulo |
| Compoñente fixo | A primeira peza está fixa; {{ui:Facer a peza fixa}} cámbiaa |
| Inserir compoñente | {{ui:Engadir copia}} ou {{ui:Duplicar}} (outra copia) ou {{ui:Inserir}} (desde un ficheiro de peza) |
| Editar peza no conxunto | {{ui:Editar peza}}, despois {{ui:Volver}} |
| Detección de interferencias | {{ui:Interferencia}} |
| Mover un compoñente para ver o movemento | Arrastre o control deslizante de ángulo ou desprazamento dunha unión xiratoria ou deslizante; {{ui:Comprobar o movemento por interferencias}} o barre. Unha peza sen unión: **Mover á man** (frechas para arrastrar, ou valores escritos) |
| Medir / inspeccionar | {{ui:Vistas}}, despois {{ui:Medir}} ({{key:M}}): distancias, ángulos, raios, áreas; {{ui:Propiedades másicas}} |
| Vista explotada, lista de materiais | Nun conxunto con nada seleccionado: **Vistas explotadas** e **Lista de materiais** no panel dereito |
| Propiedades másicas | A caixa **Peza**: volume, área superficial e tamaño, do sólido facetado (un pouco baixo nas pezas redondas). Sen masa: aínda non hai materiais |
| Gardar, Gardar como STEP | {{ui:Gardar}} descarga un `.partcraft.json`; {{ui:Exportar}} ofrece STL, 3MF, STEP exacto (AP242 ou AP214), STEP facetado, DXF e un debuxo PDF |
| Facer un debuxo desde a peza | {{ui:Debuxo}}: unha folla A3 automática con tres vistas, isométrica, unha sección, un detalle, datos de referencia, marcos de control de xeometría e símbolos de acabado. Só se acotan os tamaños xerais |
| Arrastrar co botón central para xirar | **Arrastrar co botón esquerdo** xira aquí. Arrastrar co botón central ou dereito despraza. A roda fai zoom no punteiro |
| Orientación da vista, Normal a | Menú {{ui:Vistas}}; {{ui:Normal a}} para unha cara, plano ou esbozo escollido |
| Axustar á vista (F) | {{key:F}}, ou {{ui:Axustar}} (nun esbozo, {{key:F}} é a ferramenta Redondeo) |
| Menús contextuais do botón dereito | Ningún. Arrastre co botón dereito para desprazar; nun esbozo, o clic dereito remata unha cadea de liñas |

:::tip
Se as súas mans coñecen SolidWorks, escolla o estilo de menú {{ui:Árbore de características}} en {{ui:Configuración}} › {{ui:PartCraft}} › {{ui:Menús, teclas e rato}}: unha cinta con pestanas Elementos, Esbozo, Superficies, Avaliar, Debuxo, {{ui:Montaxe}} e Vista; o botón central orbita, {{key:Shift}} co botón central despraza, e o botón esquerdo só escolle. Vexa [Menús, teclas e rato](topic:menus-keys-and-mouse).
:::

## Diferenzas que desorientan

**A sección completa é o perfil.** A extrusión e a revolución usan cada lazo pechado do esbozo. Non pode escoller unha rexión ou un contorno dun esbozo para un elemento. Use un esbozo por elemento.

**Que esbozo toma un elemento.** Un elemento usa o esbozo que acaba de pechar ou o seleccionado no historial. Sen nada seleccionado, toma o esbozo máis novo que aínda non usa ningún elemento. Se toma o incorrecto, seleccione o esbozo correcto e escolla o elemento de novo.

**Os cambios aplícanse mentres escribe.** Non hai un diálogo de elemento con Aceptar e Cancelar. Cada número reconstrúe ao instante, e {{key:Mod+Z}} é o camiño de volta. A lista de desfacer cobre por igual os cambios de esbozo, os elementos e os axustes.

**Un sobredefinido nunca se permite en silencio.** Non hai cotas dirixidas de referencia. Unha cota que as outras relacións xa fixan informase como sobredefinida (« xa está implicada. Elimínea. »). Unha cota en conflito deixa a xeometría sen tocar e pasa a vermello. Elimine unha, ou desfaga.

**Os barridos e as uniones de perfís aínda non están construídos; os redondeos, chaflanes, cascas e desmoldeos teñen límites.** Esta versión de PartCraft constrúe cada peza cun núcleo de malla; o indicador da barra de estado di sempre « Núcleo de malla ». Os redondeos e chaflanes funcionan en arestas rectas entre dúas caras planas, e onde os redondeos se xuntan nunha esquina quedan en inglete, non mesturados. As cascas se abren e os desmoldeos inclinan só caras planas. Os elementos que precisan un núcleo exacto seguen sendo clicables, pero din « aínda non construído » cando se escollen. Vexa [O núcleo de malla](topic:solid-kernels) e [O que aínda non está construído](topic:not-built-yet).

**Dous botóns chamados Redondeo.** Nun esbozo, {{ui:Redondeo}} ({{key:F}}) redondea unha esquina do esbozo. Na peza, o {{ui:Redondeo}} do grupo Elementos redondea arestas de sólidos (arestas rectas entre caras planas nesta versión). Non hai barrido nin unión de perfís nesta versión: vexa [O que aínda non está construído](topic:not-built-yet).

**Os buratos precisan puntos soltos.** {{ui:Burato}} fura en puntos feitos coa ferramenta Punto. Os centros de círculos e os extremos de liñas non contan.

**Pasante ata o final só serve para cortes.** Unha protuberancia precisa unha profundidade. Aínda non hai condicións de fin « ata vértice / superficie / seguinte ».

**O sólido é facetado.** O núcleo de malla constrúe as caras redondas con facetas planas, así que a vista, os volumes e as exportacións STL e 3MF se fan con elas: **Curvas** no panel da peza as fai máis finas. A exportación STEP exacta non: escribe as caras redondas nas súas superficies verdadeiras.

**Só milímetros.** Aínda non hai axuste en polgadas. Multiplique os tamaños en polgadas por 25,4 ao escribilos.

**Y está arriba.** O plano frontal mírao e o superior mira cara abaixo sobre a peza, como espera, pero o eixo cara arriba do mundo é Y. As exportacións STL, 3MF e STEP exacto xíranse para Z cara arriba; o STEP facetado mantén Y arriba.

**As uniones son caras, non pares de xeometría.** Unha unión sempre parte de dúas caras planas postas cara a cara. Para un pasador nun burato, escolla a cara plana ao redor do burato e o ombreiro do pasador, e logo estableza **Centrar en** co eixo do burato e co eixo de revolución do pasador. As pezas que non alcanzan as uniones quedan onde se inseriron; non se poden arrastrar. As uniones nun bucle non se resolven.

**Gardar é unha descarga.** Non hai un ficheiro que se sobrescriba sempre. Cada gardado é un ficheiro novo na súa cartafol de descargas. Nomee primeiro a peza, e garde os ficheiros nunha cartafol de proxecto.

**Sen menús contextuais, sen pestanas de xestor de comandos.** Todo está na barra de ferramentas e no panel dereito, e a barra cambia segundo o que estea facendo: as ferramentas de esbozo aparecen só nun esbozo, e as de conxunto só nun conxunto.

**As teclas son letras soltas dentro dun esbozo.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} e {{key:S}} escollen ferramentas sen modificador. Vexa [Teclas e rato](topic:keyboard).
