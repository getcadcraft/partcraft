---
title: A pantalla de PartCraft
summary: Un percorrido por cada barra e panel: a barra de ferramentas e como cambia, o historial, os datos da peza, a vista 3D, o panel de propiedades e a barra de estado.
keywords: pantalla, disposición, barra de ferramentas, historial, árbore de elementos, propiedades, panel, barra de estado, interface, ui, percorrido, pantalla completa
from: 5b5bb843
---

A pantalla ten cinco partes: a barra de ferramentas na parte superior, o historial á esquerda, a vista 3D no centro, o panel de propiedades á dereita e a barra de estado abaixo. Enriba de todas está a barra de aplicacións de CadCraft.

## A barra de aplicacións

A barra fina da parte superior pertence ao sitio de CadCraft, non a PartCraft en si. Mostra o nome da aplicación e onde se executa, un menú de versións, **Acerca de PartCraft**, o botón de modo de pantalla e o selector de tema Papel / Modelo.

- **Papel** son liñas escuras sobre unha folla clara. **Modelo** son liñas claras sobre un fondo escuro. As cores do esbozo seguen o tema.
- {{ui:Configuración}} (a roda, ou {{key:Mod+,}}) ten unha lapela {{ui:PartCraft}}: que botón do rato xira a vista, rato de roda ou trackpad, e as relacións ao esbozar. Ver [Configuración de PartCraft](topic:settings).
- O botón de modo de pantalla, ou {{key:Ctrl+Shift+F}}, pasa polo modo normal, o de pantalla completa e o de pantalla completa coas barras ocultas. Con as barras ocultas, leve o punteiro ao bordo superior (ou toque aí) para volvelas. {{key:Esc}} volve ao modo normal. Esta tecla é {{key:Ctrl+Shift+F}} tamén nun Mac, non ⌘.

## A barra de ferramentas

A barra de ferramentas está agrupada. Cambia segundo o que estea facendo, para caber nunha soa fila:

| Grupo | Botóns | Mostrado |
|---|---|---|
| Ficheiro | {{ui:Novo}}, {{ui:Abrir}}, {{ui:Gardar}}, {{ui:Exportar}} (un menú) | Sempre |
| Esbozo | {{ui:Esbozo}} | Cando non hai ningún esbozo aberto |
| Esbozo | {{ui:Saír}}, {{ui:Liña}}, {{ui:Rectángulo}}, {{ui:Círculo}}, {{ui:Arco}}, {{ui:Punto}}, {{ui:Liña de centro}}, {{ui:Redondeo}}, {{ui:Cota}}, {{ui:Construción}} | Só mentres hai un esbozo aberto |
| Elementos | {{ui:Extruír}}, {{ui:Cortar}}, {{ui:Revolución}}, {{ui:Burato}}, {{ui:Lineal}}, {{ui:Circular}}, {{ui:Espellar}}, {{ui:Redondeo}}, {{ui:Chaflán}}, {{ui:Casca}}, {{ui:Máis}} (un menú: Corte por revolución, Plano, Eixe, Punto, Barrido, Unión de perfís, Borrador) | Na peza, non mentres hai un esbozo ou o debuxo abertos. Redondeo e Chaflán funcionan en arestas rectas entre dúas caras planas; Casca e Borrador en caras planas. Barrido e Unión de perfís aínda non están construídos nesta versión (precisan un núcleo exacto); ao premer un deles, o programa di iso |
| Elementos | {{ui:Feito}} | Só mentres escolle arestas ou caras para un redondeo, un chaflán, unha casca ou un borrador |
| Debuxo | {{ui:Debuxo}} | Na peza (usable cando a peza xa ten un sólido) |
| Debuxo | {{ui:Referencia}}, {{ui:Marco}}, {{ui:Acabado}}, {{ui:Detalle}}, {{ui:PDF}}, {{ui:Volver}} | Só na folla de debuxo |
| Montaxe | {{ui:Montaxe}} | Na peza (usable cando a peza xa ten un sólido) |
| Montaxe | {{ui:Engadir copia}}, {{ui:Inserir}}, {{ui:Unión}}, {{ui:Interferencia}}, {{ui:Editar peza}}, {{ui:Pechar}} | Só nunha montaxe |
| Montaxe | {{ui:Volver}} | Mentres edita unha peza desde unha montaxe |
| Editar | {{ui:Desfacer}}, {{ui:Refacer}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Máis}} (un menú: Cortar, Copiar, Pegar, Pegar no lugar, Duplicar, Eliminar, Seleccionar todo, Deseleccionar todo) | Sempre; cada elemento actúa sobre o esbozo, o historial ou a montaxe en que estea |
| Vista | {{ui:Axustar}}, {{ui:Normal a}}, {{ui:Vistas}} (un menú: Medir, Propiedades de masa, Sección, Borrador, Cebra, Curvatura, {{ui:Planos base}}, despois Isométrica, Alzado, Atrás, Planta, Inferior, Dereita, Esquerda) | Sempre |

Pase o punteiro sobre un botón para ver o que fai e a súa tecla. Un botón en gris non se pode usar agora: por exemplo, os botóns de elementos mentres hai un esbozo aberto, ou {{ui:Unión}} antes de que a montaxe teña dúas pezas.

O menú {{ui:Máis}} do grupo Editar enumera cada acción de edición coa súa tecla. Sobre que actúan copiar e pegar depende de onde estea; ver [Copiar, pegar e duplicar](topic:copy-paste). A indicación dun elemento en gris di por que non pode actuar agora.

O menú {{ui:Exportar}} contén {{ui:STL, para impresión 3D}}, {{ui:3MF, para impresión 3D}}, {{ui:STEP AP242 (sólido exacto)}}, {{ui:STEP AP214 (sólido exacto)}}, {{ui:STEP (facetado, núcleo de malla)}}, {{ui:STEP AP214 (facetado, núcleo de malla)}}, {{ui:DXF do esbozo ou da cara plana}} e {{ui:Debuxo (PDF): vistas, sección, detalle, GD&T}}. Os elementos STEP exacto escriben as caras redondas nas súas superficies verdadeiras; os facetados escríbeas como facetas planas.

## O historial (esquerda)

O panel da esquerda é o historial de características da peza, a lista que PartCraft reconstrúe de arriba abaixo.

- O título é o nome da peza ("Peza1" ata que lle cambie o nome).
- **Plano Alzado**, **Plano Planta** e **Plano Dereita** van primeiro. Prema nun para seleccionalo; ilumínase na vista.
- Debaixo están as súas características, na orde en que se fixeron. Un esbozo que usa unha característica aparece sangrado debaixo desa característica.
- Unha bandeira ao final dunha fila indica o seu estado:

| Bandeira | Significado |
|---|---|
| (ningunha) | Construído, e o esbozo está totalmente definido |
| − | Un esbozo subdefinido (aínda se pode mover) |
| + | Un esbozo sobredefinido |
| ⚠ | Construído, con aviso (pase o punteiro para ler) |
| ⚠ erro | A característica fallou. Pase o punteiro para ver por que, ou prema nela |
| ⚠ sen construír | A característica necesita outra que fallou ou está desactivada |
| apagado | Suprimido |

- Cada característica mostra o seu número principal despois do nome, como "25 mm" nunha Extruír ou "Ø6.6 pasante" nun burato. Prema dúas veces no número, ou prema {{key:F2}} na fila, para cambialo ali mesmo. Ver [Cambiar tamaños](topic:change-sizes).
- Prema nunha característica para editala á dereita. Prema dúas veces nun esbozo para abrilo.
- Ao retroceder, aparece na lista unha fila **Barra de retroceso · avanzar**. As características debaixo dela quedan en gris e sen construír.
- Con unha fila enfocada, {{key:Up}} e {{key:Down}} moven entre filas, e {{key:Alt+Up}} / {{key:Alt+Down}} moven a propia característica, onde o historial o permita.

Nunha montaxe, o mesmo panel lista **Pezas** (a primeira aparece marcada como "fixada") e **Unións**.

### Datos da peza

Debaixo do historial, o cadro **Peza** lista o **Volume**, a **Área**, o **Tamaño (X × Y × Z)**, os **Buratos pasantes**, os **Corpos**, os **Triángulos**, o número de **Características** e cantas están **Con erro**. Os volumes e as áreas son do sólido facetado construído polo núcleo de malla, un pouco por debaixo do valor real nas formas redondas (ver [Características e as súas opcións](topic:features#curves-resolution)).

Nunha montaxe o cadro titúlase **Montaxe**: Pezas, Instancias, Unións, Sen unir e Interferencia.

## A vista 3D (centro)

A vista mostra o sólido, os planos base e calquera esbozo que aínda non use unha característica.

Os planos base debúxanse completos mentres a peza está baleira. Cando xa ten un sólido, retráense: debuxados tenues, para non tapar a peza, e os clics atravesan ata a peza. Volven completos mentres escolle onde esbozar ({{ui:Esbozo}} sen nada escollido) e cando selecciona un no historial. {{ui:Vistas}} › {{ui:Planos base}} ocúltaos por completo; aínda se mostran mentres escolle onde esbozar. PartCraft lembra esa elección.

- Arrastre para xirar a peza, botón dereito ou central para desprazar, e a roda para facer zoom no punteiro. Detalles en [Teclas e rato](topic:keyboard).
- Pase o punteiro sobre unha cara, arista ou plano para ver como se ilumina. Prema para escollelo. As caras iluminanse enteiras, e as arestas debúxanse e escóllense enteiras. {{key:Shift}}+clic recolle varias arestas ou caras. Quedan marcadas.
- O cubo de vista na parte superior dereita xira coa peza: prema nunha cara, arista ou esquina para mirar desde alí, arrástreo para xirar, e o botón de casa volve ao inicio. Ver [O cubo de vista](topic:view-cube).
- Un Extruír seleccionado mostra unha frecha laranxa na súa cara final, e unha Revolución unha frecha curva ao final da súa volta: arrástrea para cambiar a profundidade ou o ángulo, ou escriba na caixa ao seu lado. Ver [Cambiar tamaños](topic:change-sizes#drag-it-in-the-view).
- Cando unha peza está baleira, unha caixa titulada **Comezar unha peza** lista os primeiros pasos.
- Solte un ficheiro `.partcraft.json` ou `.partcraft-asm.json` en calquera punto da vista para abrilo. Un ficheiro `.step`, `.stp`, `.stl`, `.obj`, `.3mf` ou `.3dm` soltado alí ábrese como corpo sólido.

### Mentres escolle arestas ou caras

Despois de {{ui:Redondeo}}, {{ui:Chaflán}} ou {{ui:Casca}} sen nada escollido (ou de {{ui:Seleccionar arestas}} nesa característica), a peza mostrase como estaba antes desa característica. Prema en arestas ou caras para engadilas ou quitalas; as súas marcas indican o que está dentro. {{ui:Feito}} ou {{key:Esc}} remata. Ver [Redondear, biselar e ahuecar](topic:fillet-chamfer-shell).

### Na folla de debuxo

{{ui:Debuxo}} substitúe a vista 3D pola folla de debuxo A3. A roda fai zoom, o arrastre dereito ou central despraza, e {{key:F}} axusta. Ver [Facer un debuxo](topic:drawing-pdf).

### Mentres hai un esbozo aberto

A vista xírase para mirar de fronte ao plano do esbozo, e aparece por riba unha capa de esbozo 2D. A peza amosa só as características feitas antes deste esbozo. Unha franxa arriba á esquerda mostra a etiqueta do estado do esbozo ("Totalmente definido", "Subdefinido · 3 graos de liberdade" e así) e o seu nome, como "Esbozo2 sobre unha cara de Extruír1".

## O panel de propiedades (dereita)

O panel da dereita mostra o que estea seleccionado, e o seu título indícao:

- **Peza** (nada seleccionado): o **Nome** da peza e o axuste de **Curvas**.
- Un plano: un botón {{ui:Facer esbozo sobre el}}.
- Unha **Cara**: que tipo é (Cara plana, Cilindro co seu raio e eixe, Cono, Esfera ou Toro), a súa área, que característica a fixo, e, para unha cara plana, {{ui:Esbozo sobre esta cara}}, {{ui:Normal a}}, {{ui:Exportar cara como DXF}}, {{ui:Extruír desde ela}}, {{ui:Cortar cara a dentro}} e {{ui:Burato aquí}} (ver [Empurrar ou tirar dunha cara enteira](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- Unha **Aresta**: o seu tipo (recta, un círculo co seu centro e raio, ou unha curva), o seu comprimento e as dúas caras entre as que está (como "cara final de Extruír1 e lateral de Extruír1"), cos botóns {{ui:Redondeo}} e {{ui:Chaflán}}.
- Varias arestas ou caras escollidas con {{key:Shift}}: cantas son, con {{ui:Redondeo}} e {{ui:Chaflán}} para as arestas, e {{ui:Limpar}}.
- Unha característica: os seus números e opcións, as dimensións do seu esbozo, despois {{ui:Suprimir}}, {{ui:Retroceder ata aquí}}, {{ui:Subir}}, {{ui:Baixar}}, {{ui:Eliminar}} e o seu **Nome**.
- Un esbozo aberto: o seu estado, as relacións que pode engadir á selección, a lista de relacións e dimensións, **Engadir por coordenadas**, e {{ui:Saír do esbozo}}, {{ui:Axustar}} e {{ui:Exportar como DXF}}.
- Na folla de debuxo: os axustes de sección e detalle, ou o símbolo GD&T seleccionado.
- Nunha montaxe: a montaxe, a peza seleccionada ou a unión seleccionada.

Cada caixa de número se aplica ao premer {{key:Enter}} ou {{key:Tab}}, ou ao facer clic fóra. A peza reconstrúese ao momento; non hai botón Aceptar. Use {{key:Mod+Z}} para volver atrás.

## A barra de estado (abaixo)

- A esquerda, as coordenadas do punteiro no esbozo (só mentres hai un esbozo aberto).
- No centro, mensaxes: o que facer despois, e por que algo foi rexeitado. Léaa cando parece que non pasa nada.
- Preto da dereita, o chip do núcleo: sempre "Núcleo de malla" nesta versión. Pase o punteiro para ver o que significa. Ver [O núcleo de malla](topic:solid-kernels).
- Á dereita, un chip: "Reconstruíndo…" mentres se reconstrúe a peza, despois "Reconstruído en … ms" cando todo vai ben, ou "1 característica con erro". Nunha montaxe di "Colocado en … ms" ou conta os problemas das unións.

Ver tamén [Comezar un manual en Ilustrar](topic:illustrate): o espazo de traballo que fai manuais de montaxe a partir das súas pezas e conxuntos.

## Nunha pantalla estreita

Ata 760 píxeles de ancho, como nun teléfono, a vista conserva a pantalla: a barra de ferramentas é unha soa fila que se despraza de lado, e os paneis abren como follas desde unha barra na parte inferior. {{ui:Ferramentas}} oculta a barra de ferramentas e {{ui:Mover}} a pon abaixo. Ver [Trackpad, tacto e pantallas pequenas](topic:trackpad-and-touch).
