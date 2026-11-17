---
title: Novidades da 0.9
summary: A PartCraft 0.9 engade redondeos entre caras e engrosamento en sólidos, conxuntos de miles de pezas, un almacén de documentos con revisións, un complemento Solid FEM de tensión, dez métodos de arco, perfís de aceiro do Reino Unido, unha fase de impresión e complementos de impresión en resina.
keywords: novidades, o que hai de novo, notas de versión, rexistro de cambios, 0.9, redondeo entre caras, bola rodante, redondear varias arestas, engrosar, sólido desde superficies, casca step, iges, redondeos de escaneo, conxunto grande, visualización lixeira, 20000 pezas, documentos, almacén, sacar, devolver, revisión, publicación, onde se usa, lista de materiais, Rhino, grasshopper, 3dm, cursores, chan de fábrica, cola de traballos, solid fem, elementos finitos, von mises, frecuencia natural, métodos de arco, arco de 3 puntos, perfís de aceiro do Reino Unido, fase de impresión, resina, goo, ctb, mesa, estender
from: 96d9fbfa
---

Isto é o que cambiou na PartCraft 0.9, en comparación coa 0.8.1. As superficies de forma libre agora pechan en sólidos, os conxuntos de miles de pezas seguen sendo utilizables, un almacén de documentos garda as revisións, e un complemento Solid FEM comproba a tensión dunha peza. Cada elemento indica onde atopalo.

## Novo na 0.9.1

- **Exportación STEP exacta.** {{ui:Exportar}} › {{ui:STEP AP242 (sólido exacto)}} e {{ui:STEP AP214 (sólido exacto)}} agora funcionan. Os buratos, as protuberancias, os redondeos, os conos, as esferas e os toros escríbense nas súas superficies verdadeiras, con círculos reais como arestas, para que outro programa CAD ou CAM poida recoñecer un burato como burato. Os lados en spline, as roscas modeladas e as mallas importadas seguen sendo facetas planas no mesmo sólido. Ver [Exportar para impresión, STEP e DXF](topic:export-files#for-other-cad-programs-step).
- **STEP dentro, STEP exacto fóra.** Un ficheiro STEP que abre conserva as súas propias caras planas, cilindros, conos, esferas e toros, así que {{ui:Exportar}} › {{ui:STEP AP242 (sólido exacto)}} escríbeos de volta como superficies verdadeiras en vez de facetas: unha viga dun provedor con buratos para parafusos sae coas mesmas caras coas que entrou, máis o que lle cortou. As superficies spline, barridas e de revolución do ficheiro seguen sendo facetas, e tamén os corpos de STL, OBJ e 3MF. Abra de novo o ficheiro STEP para unha peza gardada antes. Ver [Abrir un ficheiro STEP e construír sobre el](topic:import-step).
- **Círculos verdadeiros no DXF de caras.** {{ui:Exportar}} › {{ui:DXF do esbozo ou da cara plana}} con unha cara plana escollida agora escribe os buratos redondos como círculos, co centro e o raio propios do burato, para unha mesa de láser, de plasma ou de chorro de auga. As outras arestas redondas seguen sendo facetas.
- **STEP exacto para o taller.** En {{ui:Fabricación}}, {{ui:STEP exacto (coordenadas de traballo)}} escribe a peza coa súa orixe na orixe de traballo da preparación e Z ao longo do eixe da ferramenta, as coordenadas que usa o G-code. Ver [Facer traxectorias e G-code](topic:manufacture#exact-step-for-the-shop).

## Novo

### Superficies e sólidos

- **Redondeo entre caras.** Escolla {{ui:Superficies}} na caixa {{ui:Espazo de traballo}}, despois {{ui:Redondeo entre caras}}. Escolla as dúas caras dun mesmo sólido e escriba o raio ({{ui:Raio no extremo (mm, 0 = o mesmo)}} para un raio que cambia ao longo da aresta). O resultado di canto se afasta o redondeo da bola rodante ideal, e un raio que non cabe rexéitase cunha cara indicada. {{ui:Redondear varias arestas}} redondea moitas arestas dun só paso; marque {{ui:Esquinas (parche esférico onde se xuntan tres)}} para unha esquina esférica onde se xuntan tres arestas redondeadas de caras planas. Ver [Superficies de forma libre (NURBS)](topic:nurbs-surfaces).
- **Engrosar nun sólido.** {{ui:Engrosar nun sólido}} no mesmo espazo de traballo dálle grosor a unha superficie; {{ui:Outro lado}} aumenta para o outro lado. Un pregamento ou un cruzamento consigo mesma rexéitase, co nome da superficie e o lugar indicados.
- **Sólidos desde superficies.** As superficies recortadas pódense unir con unión, restar e intersección e incorporarse á peza como un só paso de desfacer. STEP escribe un sólido como unha cuncha pechada e IGES como un sólido; ambos se len de volta como sólido. Se as caras non casan aresta por aresta, o ficheiro recibe caras separadas e a barra de estado di iso. Os sólidos tamén se poden facer no editor de nós; ver [Editor de nós](topic:nodes).
- **Redondeos de borde e variables en escaneos.** Cando axusta superficies a un escaneo, búscanse tamén redondeos de borde (toros) e redondeos de radio variable ao longo dunha aresta bastante recta, e listanse co seu raio. Só se probou con escaneos inventados.

### Conxuntos, documentos e ligazóns

- **Conxuntos grandes.** As pezas que son copias comparten unha malla, e {{ui:Vistas}} › {{ui:Visualización lixeira}} debuxa caixas para que a vista siga movéndose (actívase soa en conxuntos moi grandes; a selección e as unións seguen usando as pezas reais). A árbore de pezas mostra as primeiras filas e un botón {{ui:Mostrar 700 máis}} para o resto. Os ficheiros de conxunto poden conter ata 50.000 instancias e 100.000 unións. Ver [Construír un conxunto](topic:build-assembly).
- **Documentos.** {{ui:Documentos…}} no grupo **Ficheiro** abre un diálogo sobre un cartafol de proxecto: sacar e devolver, letras de revisión, estados (en curso, para revisión, publicado, obsoleto), historial, onde se usa e lista de materiais. Ver [Documentos e revisións (o almacén)](topic:documents-walkthrough).
- **Ligazón en directo con Rhino.** Un script, `cadcraft_link.py`, vixía un documento de Rhino ou de Grasshopper e envía a PartCraft só o que cambiou, onde unha característica importada se reconstrúe coa nova forma. É dun só sentido e precisa Studio. Ver [Ligazón .3dm en directo](topic:live-3dm-link).
- **Ver os cursores dos demais.** Nunha sesión compartida o cursor de cada persoa aparece co seu nome e a característica que ten seleccionada. Ver [Traballar en directo con outros](topic:work-live).
- **Chan de fábrica.** Active o complemento Chan de fábrica en {{ui:Configuración}} › {{ui:Complementos}}. Despois de publicar un programa en {{ui:Fabricación}}, a súa lapela pode {{ui:Engadir á cola de traballos do chan de fábrica}} ou {{ui:Gardar como ficheiro de traballo}}. Nunca envía nin arranca unha máquina.

### Análise e pezas

- **Complemento Solid FEM.** Active {{ui:Solid FEM}} en {{ui:Configuración}} › {{ui:Complementos}} (está desactivado ata que o faga) e aparece unha lapela {{ui:Solid FEM}} no panel dereito. {{ui:Malla da peza}}, escolla caras fixas e cargas na vista 3D, {{ui:Resolver}}, e debuxe o desprazamento, a tensión de von Mises ou unha forma modal con {{ui:Amosar no modelo}}. Ver [Solid FEM: unha comprobación de tensión](topic:solid-fem-check).
- **Arco en esbozos, de dez maneiras.** A frecha xunto a {{ui:Arco}} na barra de esbozo lista 3 puntos, Inicio Centro Final, Inicio Centro Ángulo, Inicio Centro Lonxitude, Inicio Final Ángulo, Inicio Final Dirección, Inicio Final Raio, Centro Inicio Final, Centro Inicio Ángulo, Centro Inicio Lonxitude e Continuar. Ver [Debuxar un arco por dez métodos](topic:sketch-arc-methods).
- **Perfís de aceiro do Reino Unido.** Os elementos estruturais poden usar 976 perfís UK (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); escriba un tamaño como `305x165x40 UB`. Ver [Elementos estruturais](topic:structural-members).

### Impresión

- **Fase de impresión.** O botón {{ui:Fase de impresión}} da barra de ferramentas (complemento 3D Print, activado por defecto) pon os corpos da peza sobre unha mesa de trazos: {{ui:Estender}}, {{ui:Xirar 90°}}, {{ui:Dispor na mesa}}, {{ui:Axustar todo na mesa}}, {{ui:Vista previa das capas}}, e despois {{ui:Enviar á impresora 3D}} por USB, Klipper (Moonraker), OctoPrint ou PrusaLink. Non se envía nada ata que confirme, e a súa peza nunca cambia. Para un ficheiro STL ou 3MF, ver [Preparar unha peza para impresión 3D](topic:print-3d).
- **Impresión en resina.** Complementos en {{ui:Configuración}} › {{ui:Complementos}}, todos desactivados ata que os active: un cortador en capas para resina, unha proba de exposición, e os formatos Elegoo GOO, SL1, Chitubox CBDDLP/CTB e Anycubic. O corte en capas faise nun fío de traballo, así que a páxina segue respondendo.

## En todas as aplicacións

- Cada suxestión ao pasar o punteiro é unha ferramenta Bootstrap.
- A indicación de inicio ten un botón de pechar; queda pechada.
- Unha fila de lapelas dun panel que non cabe despraza de lado en vez de cortarse.
- A lapela do navegador mostra o nome do documento aberto antes de PartCraft | CadCraft.
- {{ui:Configuración}} mostra a {{ui:Disposición}} do espazo de traballo como lista de opcións, e a caixa de idioma enumera todos os idiomas da versión.
- O peso e a temperatura son tipos de unidade nos axustes de unidades.

## Corrixido

- O menú Arco do esbozo lista agora todos os métodos.
- A barra de complementos e o título da lapela do navegador corrixíronse o 2026-11-09.

## Límites honestos

- O STEP exacto se leu de volta en OpenCascade (sólidos válidos, volumes iguais aos calculados a man). Aínda non se abriu en todos os programas CAD ou CAM, e un conxunto non se escribe como STEP exacto.
- Nada se imprimiu nunha impresora real. O corte en capas, o G-code e os ficheiros de resina foron lidos polos nosos propios programas ou por unha impresora de substitución; ningún dos formatos de resina se cargou nunha impresora, e os tamaños e as exposicións das impresoras son puntos de partida.
- Solid FEM é lineal, isótropo e elástico, un material por peza, sen contacto, fluencia nin pandeo. A tensión nas caras fixas e nas esquinas agudas depende da malla. É unha axuda para comprobar, non revisada por un enxeñeiro.
- Os tempos de conxuntos grandes veñen dun servidor sen GPU; un fotograma de detalle completo de 20.000 pezas segue levando segundos aí.
- Os redondeos funcionan en pares de caras; non hai mestura xeral de vértices nin redondeos entre caras que non se tocan.
- A ligazón con Rhino nunca se executou dentro de Rhino ou Grasshopper reais. Documentos probouse con dous programas nun cartafol, non con dúas persoas nunha rede compartida.
- O axuste de superficies a un escaneo real non foi revisado a man. Os idiomas distintos do inglés son borradores automáticos.
- Os instaladores de Windows non teñen firma de código, e a imaxe de disco de macOS non está notarizada. Ver [Resolución de problemas](topic:troubleshooting).

Os cambios anteriores están en [Novidades da 0.7](topic:whats-new-0-7).

## Anterior: 0.8 e 0.8.1

Isto é o que cambiou na 0.8 e na 0.8.1, en comparación coa 0.7. A simulación responde mentres edita e di o que falla primeiro, os conxuntos teñen estudos de movemento, e novos espazos de traballo fan superficies de forma libre e pezas dimensionadas pola física. A 0.8.1 é unha pequena versión de corrección.

### Novo

**Simulación**

- **Actualizar mentres edito.** Marque {{ui:Actualizar mentres edito}} no bloque Resolver e as respostas seguen os seus cambios. Cambie unha cota, unha carga ou o material e aparece ao momento unha resposta rápida, feita con elementos catro veces máis grandes; cando para uns segundos, a resposta refinada do propio estudo substitúe a rápida. Os resultados indican cal está mirando. Nunha ménsula en voladizo de aceiro, a resposta rápida estivo dentro dun 1 % na deflexión e de arredor dun 4 % na tensión respecto da refinada. Ver [Comprobar tensión e deflexión](topic:simulation#update-while-you-edit-live).
- **Que cede primeiro.** Nun estudo estático ou de pandeo, {{ui:Que cede primeiro?}} no bloque **Rompela** escala as cargas ata que a peza cede. Lista, do peor ao menos malo, o factor de carga ata a primeira fluencia (cunha marca vermella onde a tensión alcanza o pico) e o factor de carga ata o pandeo. Un factor por debaixo de 1 significa que a peza xa cede coa carga aplicada, e Problemas mostra un erro. Os factores saen dun estudo lineal, así que valen só o que vale ese estudo. Ver [Comprobar tensión e deflexión](topic:simulation#find-out-what-breaks-first-break-it).
- **Fluencia e contacto.** Dous tipos de estudo máis: un non lineal no que o material segue a súa recta ata a tensión de fluencia e despois unha pendente máis plana, con deformación plástica representada, e un de contacto no que pezas separadas empúxanse entre si (sen fricción) ou quedan pegadas (unidas). Un paso de carga que non se estabiliza, ou pezas que se hundirían demasiado unhas nas outras, aparecen no panel Problemas. Non se resolven a fricción, o gran deslizamento, as grandes rotacións, as grandes deflexións nin a fatiga. Ver [Comprobar tensión e deflexión](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Decks para CalculiX.** {{ui:Exportar}} › {{ui:Deck CalculiX (.inp)}} garda o estudo para CalculiX, un programa separado que instala e executa vostede; {{ui:Exportar}} › {{ui:Resultados CalculiX (.frd)}} lee de volta o seu ficheiro de resultados sobre a mesma malla. PartCraft nunca inicia ese programa, e avisa se a peza cambiou desde que se gardou o deck.

**Conxuntos**

- **Estudos de movemento.** {{ui:Montaxe}} › {{ui:Movemento}} move o valor dunha unión durante un tempo que vostede dá (velocidade constante, suavizada, senoidal, ou ida e volta), coloca o conxunto en cada paso coas súas uniones e lazos pechados, e informa de que choca e a que distancia se achegan as pezas. {{ui:Engadir un punto}} representa a posición, a velocidade e a aceleración dun punto, o valor da unión e a folgura en función do tempo; {{ui:Gardar CSV}} e {{ui:Gardar gráfico}} escriben os datos. Despois de {{ui:Executar}}, a barra de execución Paso a paso move o conxunto a calquera paso. Os axustes do estudo gárdanse no ficheiro do conxunto. A velocidade e a aceleración saen das posicións rexistradas, así que use máis pasos se un pico agudo se lé baixo. Ver [Comprobar un conxunto por choques e movemento](topic:check-assembly#a-motion-study).

**Superficies e pezas desde a física**

- **Un espazo de traballo de Superficies.** Escolla {{ui:Superficies}} na caixa {{ui:Espazo de traballo}} para curvas e superficies NURBS xunto á peza: {{ui:Curva}}, {{ui:Unión de perfís}}, {{ui:Barrido}}, {{ui:Axustar}} e {{ui:Cebra}}, coa continuidade (G0, G1 ou G2) medida nas superficies exactas e unha aresta peor do pedido listada en Problemas cun arranxo de Axustar. {{ui:Suavizar}} mide as liñas de casco para buscar puntos de inflexión e saltos de curvatura, e reconstrúe as non suaves dentro da súa tolerancia. As superficies gárdanse no ficheiro da peza e non cambian as características da peza. Ver [Superficies de forma libre (NURBS)](topic:nurbs-surfaces).
- **O espazo de traballo Enxeñeiro.** Escolla {{ui:Enxeñeiro}} no selector de espazos de traballo, escolla un xerador e prema {{ui:Novo}}: un script dimensiona unha peza a partir do que debe facer (calor para mover, fluxos, presión, material, proceso de impresión) con fórmulas de libro de texto e constrúea, despois devolve os números que usou cos seus orixes, as súas comprobacións de fabricación e ficheiros para ferramentas de análise. As mesmas entradas dan a mesma peza en calquera ordenador. O xerador gárdase na peza, e abrir unha peza nunca executa un script. Ver [Pezas desde a física: xeradores](topic:engineer-generators) e [Escribir un xerador](topic:write-a-generator).

**Esbozos, debuxos e fabricación**

- **Un esbozo a partir dunha foto.** {{ui:Elementos}} › {{ui:Máis}} › {{ui:Esbozo a partir dunha foto…}} traza unha imaxe dunha peza plana sobre un fondo liso (contorno e buratos) ou un debuxo a pluma en liñas, arcos e círculos. Dá unha única lonxitude, revisa a vista previa e fai o esbozo. Ver [Fundamentos do esbozo](topic:sketch-basics#a-sketch-from-a-photo).
- **Escala e división para impresión.** {{ui:Exportar}} › {{ui:Escala para imprimir (STL ou 3MF)…}} escala por eixe sen cambiar a peza, por exemplo por unha marxe de contracción. {{ui:Exportar}} › {{ui:Dividir para imprimir (un zip de pezas)…}} corta unha peza demasiado grande para a súa mesa en pezas numeradas unidas por pivotes, chaves, colas de milano, buratos de cavilla ou aloxamentos de imáns. Ver [Imprimir en 3D](topic:print-3d).
- **Follas dispostas a G-code.** {{ui:Exportar}} › {{ui:Follas dispostas a G-code}} lee un DXF disposto e fai un programa por folla a través do post que escolla: primeiro buratos e recortes, despois os contornos. Non planifica as entradas, a orde de corte nin as arestas compartidas. Ver [Dispor pezas planas en follas](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Debuxos que fan máis por si mesmos.** {{ui:Folla}} › {{ui:Automático}} escolle a folla A máis pequena que cabe nas vistas á escala estándar máis grande ata 1:1. {{ui:Acotar os buratos}} pon unha marca de centro en cada burato, unha chamada por tamaño e as posicións desde a esquina inferior esquerda da vista. Ver [Facer un debuxo](topic:drawing-pdf).

**En todas as aplicacións**

- **Idiomas.** As aplicacións chegan en 54 idiomas. Os que non son inglés son borradores automáticos ata que un falante nativo os lea.
- **Filas da barra de ferramentas.** {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Filas da barra de ferramentas}} escolle Envolver (como antes), 2 filas ou 1 fila; unha barra que non cabe despraza de lado. A cinta de Elementos de PartCraft mostra a ferramenta máis usada en grande e agocha as variantes detrás dun botón dividido.
- **Conecte a súa IA.** Studio é o centro para conectar un asistente propio ás oito aplicacións, con permiso só de lectura, de suxestión ou de edición por aplicación. Un asistente conectado pode dimensionar unha peza a partir dunha frase, como unha ménsula para unha carga, amosar o seu cálculo e cada comprobación, e construíla; informa do que non comprobou (concentración de tensión, fatiga, fluencia en plásticos). Ver [Usar PartCraft cun asistente de IA](topic:use-with-ai-assistants).

### Corrixido na 0.8.1

- **Conxelamento do cursor en pantalla completa.** A selección ao pasar o punteiro está agora limitada. A causa é a nosa mellor lectura e non se confirmou coa persoa que o informou.
- **Idioma en tempo de execución.** Studio e as edicións empaquetadas poden cambiar de idioma mentres se executan; antes eran só en inglés. Non se probou en todas as plataformas: díganos se o idioma non cambia.

### Non está aínda nesta versión

- Conecte a súa IA non está terminado: a conexión dun clic dentro de Studio, o conector aloxado para a IA do navegador, a propia chave de API dentro de Studio e o paquete MCP publicado non se prometen. Studio non ten IA propia.
- Studio non ten firma de código: Windows pode avisar, e macOS pide botón dereito e despois Abrir. Ver [Resolución de problemas](topic:troubleshooting).
- As pilas de tolerancias seguen sendo dunha soa dirección: ver [Pilas de tolerancias](topic:tolerance-stackup).
- O resto está listado en [O que aínda non está construído](topic:not-built-yet).

Os cambios anteriores están en [Novidades da 0.7](topic:whats-new-0-7).
