---
title: A pantalla de PartCraft
summary: Un percorrido por cada barra e panel: a barra de ferramentas e como cambia, o historial, os datos da peza, a vista 3D, o panel de propiedades e a barra de estado.
keywords: pantalla, deseño, barra de ferramentas, historial, árbore de elementos, propiedades, panel, barra de estado, interface, ui, percorrido, pantalla completa
from: 7394fc49
---

A pantalla ten cinco partes: a barra de ferramentas arriba, o historial á esquerda, a vista 3D no centro, o panel de propiedades á dereita e a barra de estado na parte inferior. Por enriba de todas está a barra de aplicación de CadCraft.

## A barra da aplicación

A barra fina da parte máis alta pertence ao sitio de CadCraft, non a PartCraft en si. Mostra o nome da aplicación e onde se executa, un menú de versión, **Acerca de PartCraft**, o botón de modo de pantalla e o interruptor de tema Papel / Modelo.

- **Papel** son liñas escuras sobre unha folla clara. **Modelo** son liñas claras sobre un fondo escuro. As cores do esbozo seguen o tema.
- {{ui:Configuración}} (o engrenaxe, ou {{key:Mod+,}}) ten unha lapela {{ui:PartCraft}}: que botón do rato xira a vista, rodeta do rato ou trackpad, e as relacións ao esbozar. Ver [Configuración de PartCraft](topic:settings).
- O botón de modo de pantalla, ou {{key:Ctrl+Shift+F}}, alterna entre normal, pantalla completa e pantalla completa con as barras ocultas. Con as barras ocultas, leve o punteiro ao bordo superior (ou toque alí) para mostralas de novo. {{key:Esc}} volve ao modo normal. Esta tecla é {{key:Ctrl+Shift+F}} tamén nun Mac, non ⌘.

## A barra de ferramentas

A barra de ferramentas está agrupada. Cambia segundo o que está a facer, para caber nunha soa fila:

| Grupo | Botóns | Móstrase |
|---|---|---|
| Ficheiro | {{ui:Novo}}, {{ui:Abrir}}, {{ui:Gardar}}, {{ui:Exportar}} (un menú) | Sempre |
| Esbozo | {{ui:Esbozo}} | Cando non hai ningún esbozo aberto |
| Esbozo | {{ui:Saír}}, {{ui:Liña}}, {{ui:Rectángulo}}, {{ui:Círculo}}, {{ui:Arco}}, {{ui:Punto}}, {{ui:Liña de centro}}, {{ui:Redondeo}}, {{ui:Cota}}, {{ui:Construción}} | Só mentres hai un esbozo aberto |
| Elementos | {{ui:Extruír}}, {{ui:Cortar}}, {{ui:Revolución}}, {{ui:Burato}}, {{ui:Lineal}}, {{ui:Circular}}, {{ui:Espellar}}, {{ui:Redondeo}}, {{ui:Chaflán}}, {{ui:Casca}}, {{ui:Máis}} (un menú: Corte por revolución, Plano, Eixo, Punto, Barrido, Unión de perfís, Desmoldeo) | Sobre a peza, non mentres están abertos un esbozo ou o debuxo. Redondeo e Chaflán funcionan en arestas rectas entre dúas caras planas; Casca e Desmoldeo en caras planas. Barrido e Unión de perfís aínda non están construídos nesta versión (necesitan un núcleo exacto); ao premer un, avísao |
| Elementos | {{ui:Feito}} | Só mentres selecciona arestas ou caras para un redondeo, chaflán, casca ou desmoldeo |
| Debuxo | {{ui:Debuxo}} | Sobre a peza (utilizable cando a peza ten un sólido) |
| Debuxo | {{ui:Referencia}}, {{ui:Marco}}, {{ui:Acabado}}, {{ui:Detalle}}, {{ui:PDF}}, {{ui:Volver}} | Só na folla de debuxo |
| Montaxe | {{ui:Montaxe}} | Sobre a peza (utilizable cando a peza ten un sólido) |
| Montaxe | {{ui:Engadir copia}}, {{ui:Inserir}}, {{ui:Unión}}, {{ui:Interferencia}}, {{ui:Editar peza}}, {{ui:Pechar}} | Só nunha montaxe |
| Montaxe | {{ui:Volver}} | Mentres edita unha peza desde unha montaxe |
| Edición | {{ui:Desfacer}}, {{ui:Refacer}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Máis}} (un menú: Cortar, Copiar, Pegar, Pegar no lugar, Duplicar, Eliminar, Seleccionar todo, Deseleccionar todo) | Sempre; cada elemento actúa sobre o esbozo, o historial ou a montaxe en que está |
| Vista | {{ui:Axustar}}, {{ui:Normal a}}, {{ui:Vistas}} (un menú: Medir, Propiedades de masa, Sección, Desmoldeo, Cebra, Curvatura, {{ui:Planos base}}, despois Isométrica, Frontal, Posterior, Superior, Inferior, Dereita, Esquerda) | Sempre |

Pase o punteiro sobre un botón para ver o que fai e a súa tecla. Un botón en gris non se pode usar agora: por exemplo, os botóns de elementos mentres hai un esbozo aberto, ou {{ui:Unión}} antes de que a montaxe teña dúas pezas.

O menú {{ui:Máis}} do grupo Edición enumera cada acción de edición coa súa tecla. Sobre o que actúan copiar e pegar depende de onde estea; ver [Copiar, pegar e duplicar](topic:copy-paste). A indicación dun elemento en gris di por que non pode actuar agora.

O menú {{ui:Exportar}} inclúe {{ui:STL, para impresión 3D}}, {{ui:3MF, para impresión 3D}}, {{ui:STEP AP242 (sólido exacto)}}, {{ui:STEP AP214 (sólido exacto)}}, {{ui:STEP (facetado, núcleo de malla)}}, {{ui:STEP AP214 (facetado, núcleo de malla)}}, {{ui:DXF do esbozo ou da cara plana}} e {{ui:Debuxo (PDF): vistas, sección, detalle, GD&T}}. Os dous elementos STEP exactos están en gris: non están construídos nesta versión, así que use {{ui:STEP (facetado, núcleo de malla)}}.

## O historial (esquerda)

O panel da esquerda é o historial de elementos da peza, a lista que PartCraft reconstrúe de arriba abaixo.

- O título é o nome da peza ("Part1" ata que lle cambie o nome).
- **Plano frontal**, **Plano superior** e **Plano dereito** van primeiro. Prema un para seleccionalo; realza na vista.
- Debaixo deles están os seus elementos na orde en que se fixeron. Un esbozo que usa un elemento aparece sangrado debaixo dese elemento.
- Unha bandeira no extremo dereito dunha fila indica o seu estado:

| Bandeira | Significado |
|---|---|
| (ningún) | Construído, e o esbozo está totalmente definido |
| − | Un esbozo parcialmente definido (aínda se pode mover) |
| + | Un esbozo sobredefinido |
| ⚠ | Construído, con aviso (pase o punteiro para lelo) |
| ⚠ erro | O elemento fallou. Pase o punteiro para ver por que, ou prema |
| ⚠ non construído | O elemento necesita outro que fallou ou está apagado |
| apagado | Suprimido |

- Cada elemento mostra o seu número principal despois do nome, como "25 mm" nunha extrusión ou "Ø6.6 pasante" nun burato. Faga dobre clic no número, ou prema {{key:F2}} na fila, para cambialo alí mesmo. Ver [Cambiar medidas](topic:change-sizes).
- Prema un elemento para editalo á dereita. Faga dobre clic nun esbozo para abrilo.
- Ao retroceder, unha fila **Barra de retroceso · avanzar** aparece na lista. Os elementos debaixo dela quedan en gris e non se constrúen.
- Con unha fila enfocada, {{key:Up}} e {{key:Down}} movense entre filas, e {{key:Alt+Up}} / {{key:Alt+Down}} mobe o propio elemento, cando o historial o permite.

Nunha montaxe, o mesmo panel lista en cambio **Pezas** (a primeira está marcada como "fixada") e **Unións**.

### Datos da peza

Debaixo do historial, a caixa **Peza** enumera o **Volume** do sólido, a **Superficie**, o **Tamaño (X × Y × Z)**, os **Buratos pasantes**, os **Corpos**, os **Triángulos**, o número de **Elementos** e cantos teñen erro. Os volumes e as superficies son do sólido facetado construído polo núcleo de malla, un pouco por debaixo do valor real nas formas redondas (ver [Elementos e as súas opcións](topic:features#curves-resolution)).

Nunha montaxe a caixa lévao por título **Montaxe**: Pezas, Instancias, Unións, Sen unir e Interferencia.

## A vista 3D (centro)

A vista mostra o sólido, os planos base e calquera esbozo que aínda non usa un elemento.

Os planos base debúxanse completos mentres a peza está baleira. Cando ten un sólido retráense: debúxanse tenues, para que non tapen a peza, e os clics atravesan ata a peza. Vólvense ver completos mentres escolle onde esbozar ({{ui:Esbozo}} sen nada elixido) e cando selecciona un no historial. {{ui:Vistas}} › {{ui:Planos base}} ocúltaos por completo; seguen vendo mentres escolle onde esbozar. PartCraft lembra esa escolla.

- Arrastre para xirar a peza, arrastre co botón dereito ou central para desprazar, e xire a rodeta para ampliar no punteiro. Detalles en [Teclas e rato](topic:keyboard).
- Pase o punteiro sobre unha cara, aresta ou plano para ver como se realza. Prema para elixilo. As caras realzanse enteiras e as arestas debúxanse e elíxense enteiras. {{key:Shift}}+prema reúne varias arestas ou caras. Quedan marcadas.
- O cubo de vista arriba á dereita xírase coa peza: prema unha cara, aresta ou esquina para mirar desde alí, arrástreo para xirar, e o botón da casa volve ao inicio. Ver [O cubo de vista](topic:view-cube).
- Unha extrusión seleccionada mostra unha frecha laranxa na súa cara final, e unha revolución unha frecha curva no extremo da súa volta: arrástrea para cambiar a profundidade ou o ángulo, ou escriba na caixa xunto a ela. Ver [Cambiar medidas](topic:change-sizes#drag-it-in-the-view).
- Cando a peza está baleira, unha caixa con título **Comezar unha peza** enumera os primeiros pasos.
- Solte un ficheiro `.partcraft.json` ou `.partcraft-asm.json` en calquera lugar da vista para abrilo. Un ficheiro `.step`, `.stp`, `.stl`, `.obj`, `.3mf` ou `.3dm` solto alí ábrese como un corpo sólido.

### Mentres selecciona arestas ou caras

Despois de {{ui:Redondeo}}, {{ui:Chaflán}} ou {{ui:Casca}} sen nada elixido (ou {{ui:Seleccionar arestas}} nese elemento), a peza móstrase como estaba antes dese elemento. Prema arestas ou caras para engadilas ou quitalas; as súas marcas indican o que está dentro. {{ui:Feito}} ou {{key:Esc}} remata. Ver [Redondear, biselar e ocar](topic:fillet-chamfer-shell).

### Na folla de debuxo

{{ui:Debuxo}} substitúe a vista 3D pola folla de debuxo A3. A rodeta amplía, arrastrar co botón dereito ou central desprazan, e {{key:F}} axusta. Ver [Facer un debuxo](topic:drawing-pdf).

### Mentres hai un esbozo aberto

A vista xírase para mirar de fronte ao plano do esbozo e aparece enriba unha capa de esbozo 2D. A peza só mostra os elementos feitos antes deste esbozo. Unha franxa arriba á esquerda mostra a etiqueta de estado do esbozo ("Totalmente definido", "Parcialmente definido · 3 graos de liberdade" e así) e o seu nome, como "Esbozo2 sobre unha cara de Extruír1".

## O panel de propiedades (dereita)

O panel da dereita mostra o que estea seleccionado, e o seu título dinos o nome:

- **Peza** (nada seleccionado): o **Nome** da peza e o axuste **Curvas**.
- Un plano: un botón {{ui:Facer esbozo sobre el}}.
- Unha **Cara**: que tipo é (cara plana, cilindro co seu raio e eixo, cono, esfera ou toro), a súa superficie, que elemento a fixo, e para unha cara plana {{ui:Esbozo sobre esta cara}}, {{ui:Normal a}}, {{ui:Exportar cara como DXF}}, {{ui:Extruír desde ela}}, {{ui:Cortar cara a dentro}} e {{ui:Burato aquí}} (ver [Tirar ou empurrar unha cara enteira](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- Unha **Aresta**: o seu tipo (recta, un círculo co seu centro e raio, ou unha curva), a súa lonxitude e as dúas caras entre as que está (como "cara final de Extruír1 e lateral de Extruír1"), con botóns {{ui:Redondeo}} e {{ui:Chaflán}}.
- Varias arestas ou caras elixidas con {{key:Shift}}: cantas son, con {{ui:Redondeo}} e {{ui:Chaflán}} para as arestas, e {{ui:Limpar}}.
- Un elemento: os seus números e opcións, as cotas do seu esbozo, despois {{ui:Suprimir}}, {{ui:Retroceder ata aquí}}, {{ui:Subir}}, {{ui:Baixar}}, {{ui:Eliminar}} e o seu **Nome**.
- Un esbozo aberto: o seu estado, as relacións que pode engadir á selección, a lista de relacións e cotas, **Engadir por coordenadas**, e {{ui:Saír do esbozo}}, {{ui:Axustar}} e {{ui:Exportar como DXF}}.
- Na folla de debuxo: os axustes de sección e detalle, ou o símbolo GD&T seleccionado.
- Nunha montaxe: a montaxe, a peza seleccionada ou a unión seleccionada.

Cada caixa numérica aplícase ao premer {{key:Enter}} ou {{key:Tab}}, ou ao facer clic fóra. A peza reconstrúese de inmediato; non hai botón Aceptar. Use {{key:Mod+Z}} para volver atrás.

## A barra de estado (inferior)

- À esquerda, as coordenadas do punteiro no esbozo (só mentres hai un esbozo aberto).
- No centro, mensaxes: o que facer despois, e por que se rexeitou algo. Lea esta zona cando pareza que non pasa nada.
- Preto da dereita, a etiqueta do núcleo: sempre "Núcleo de malla" nesta versión. Pase o punteiro para ver o que significa. Ver [O núcleo de malla](topic:solid-kernels).
- À dereita, unha etiqueta: "Reconstruíndo…" mentres a peza se reconstrúe, despois "Reconstruída en … ms" cando todo vai ben, ou "1 elemento con erro". Nunha montaxe di "Colocada en … ms" ou conta os problemas de unións.

Ver tamén [Iniciar un manual en Illustrate](topic:illustrate): o espazo de traballo que fai manuais de montaxe a partir das súas pezas e conxuntos.

## En pantalla estreita

Ata 760 píxeles de ancho, como nun teléfono, a vista ocupa toda a pantalla: a barra de ferramentas é unha fila que se despraza de lado, e os paneis ábrense como follas desde unha barra inferior. {{ui:Ferramentas}} oculta a barra de ferramentas e {{ui:Mover}} a pon na parte inferior. Ver [Trackpad, tacto e pantallas pequenas](topic:trackpad-and-touch).
