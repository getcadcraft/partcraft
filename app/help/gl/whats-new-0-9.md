---
title: Novidades da 0.9 (anteriores)
summary: PartCraft 0.9 engade redondeos entre caras e engrosamento en sólidos, conxuntos de miles de pezas, unha caixa de documentos con revisións, un complemento Solid FEM de tensión, dez métodos de arco, perfís de aceiro do Reino Unido, unha etapa de impresión e complementos de impresión en resina.
keywords: novidades 0.9, versión anterior, novidades, o que hai de novo, notas da versión, rexistro de cambios, 0.9, redondeo entre caras, bola rodante, redondear varias arestas, engrosar, sólido desde superficies, casca step, sólido iges, redondeos de escaneo, conxunto grande, visualización lixeira, 20000 pezas, documentos, caixa, retirar, revisión, versión, ligazón Rhino, grasshopper, 3dm, cursores, chan de fábrica, cola de traballos, solid fem, elementos finitos, von mises, frecuencia natural, métodos de arco, arco de 3 puntos, perfís de aceiro do Reino Unido, libro azul, etapa de impresión, resina, goo, ctb, cama, dispoñer en plano, novidades, rexistro de cambios, 0.8, 0.8.1, versión, novas funcións, análise en directo, actualizar mentres edito, romper, que cede primeiro, factor de carga, non lineal, fluencia, deformación plástica, contacto, calculix, estudo de movemento, xogo, superficies, nurbs, suavizar, casco, cebra, Engineer, xerador, corpo xerado, esbozo desde unha foto, escala para imprimir, dividir para imprimir, contracción, follas aniñadas, g-code, debuxo, acotar buratos, asistente, mcp, idiomas, filas da barra de ferramentas
from: 1dafd7c8
---

Isto é o que cambiou en PartCraft 0.9, comparado coa 0.8.1. As superficies libres agora pechan en sólidos, os conxuntos de miles de pezas seguen sendo utilizables, unha caixa de documentos garda as revisións, e un complemento Solid FEM comproba a tensión dunha peza. Cada punto indica onde atopalo.

## Novo na 0.9.1

- **Exportación STEP exacta.** {{ui:Exportar}} › {{ui:STEP AP242 (sólido exacto)}} e {{ui:STEP AP214 (sólido exacto)}} xa funcionan. Os buratos, saíntes, redondeos, conos, esferas e toros escríbense sobre as súas superficies verdadeiras, con círculos verdadeiros como arestas, para que outro programa CAD ou CAM poida recoñecer un burato como burato. As splines, as roscas modeladas e as mallas importadas quedan como facetas planas no mesmo sólido. Vexa [Exportar para impresión, STEP e DXF](topic:export-files#for-other-cad-programs-step).
- **STEP dentro, STEP exacto fóra.** Un ficheiro STEP que abre conserva as súas caras planas, cilindros, conos, esferas e toros, así que {{ui:Exportar}} › {{ui:STEP AP242 (sólido exacto)}} as volve escribir como superficies verdadeiras en vez de facetas: unha viga dun provedor con buratos para parafusos sae coas mesmas caras coas que entrou, máis o que lle cortase. As caras de spline, barridas e revolucionadas do ficheiro seguen sendo facetas, e tamén as dos corpos STL, OBJ e 3MF. Abra de novo o ficheiro STEP para unha peza gardada antes. Vexa [Abrir un ficheiro STEP e construír sobre el](topic:import-step).
- **Círculos verdadeiros no DXF da cara.** {{ui:Exportar}} › {{ui:DXF do esbozo ou da cara plana}} con unha cara plana seleccionada escribe agora os buratos redondos como círculos, co centro e o raio propios do burato, para unha mesa de láser, plasma ou chorro de auga. As outras arestas redondas seguen sendo facetas.
- **STEP exacto para o taller.** En {{ui:Fabricación}}, {{ui:STEP exacto (coordenadas de traballo)}} escribe a peza coa súa orixe na orixe de traballo da preparación e Z ao longo do eixe da ferramenta, as coordenadas que usa o G-code. Vexa [Crear traxectorias e G-code](topic:manufacture#stept-exacto-para-o-taller).

## Novo

### Superficies e sólidos

- **Redondeo entre caras.** Escolla {{ui:Superficies}} na caixa {{ui:Espazo de traballo}}, e logo {{ui:Redondeo entre caras}}. Seleccione as dúas caras dun sólido, escriba o raio (e {{ui:Raio no extremo (mm, 0 = o mesmo)}} para un raio que cambia ao longo da aresta). A liña de resultado indica cánto se separa o redondeo da bola rodante ideal, e un raio que non cabe rexéitase co nome da cara. {{ui:Redondear varias arestas}} redondea moitas arestas dun só paso; marque {{ui:Esquinas (parche esférico onde se xuntan tres)}} para unha esquina esférica onde se xuntan tres arestas redondeadas de caras planas. Vexa [Superficies libres (NURBS)](topic:nurbs-surfaces).
- **Engrosar nun sólido.** {{ui:Engrosar nun sólido}} no mesmo espazo de traballo dálle grosor a unha superficie; {{ui:Outro lado}} o fai crecer para o outro lado. Un pregue ou un cruzamento de si mesma rexéitase, co nome da superficie e do lugar.
- **Sólidos desde superficies.** As superficies recortadas pódense unir con unión, restar e intersecar, e gravar na peza como un só paso de desfacer. STEP escribe un sólido como unha casca pechada e IGES como un só sólido; ambos volven ler como sólido. Se as caras non casan aresta por aresta, o ficheiro recibe caras separadas e a barra de estado indícao. Os sólidos tamén se poden facer no editor de nodos; vexa [Editor de nodos](topic:nodes).
- **Redondeos de borde e variables en escaneos.** Ao axustar superficies a un escaneo, buscanse e listanse con o seu raio os redondeos de borde (toros) e os redondeos de raio variable ao longo dunha aresta bastante recta. Probouse só con escaneos inventados.

### Conxuntos, documentos e ligazóns

- **Conxuntos grandes.** As pezas que son copias comparten unha malla, e {{ui:Vistas}} › {{ui:Visualización lixeira}} debuxa caixas para que a vista siga movéndose (actívase por si mesma nos conxuntos moi grandes; a selección e as xuntas seguen usando as pezas reais). A árbore de pezas amosa as súas primeiras filas e un botón {{ui:Amosar 700 máis}} para o resto. Os ficheiros de conxunto poden conter ata 50.000 instancias e 100.000 xuntas. Vexa [Construír un conxunto](topic:build-assembly).
- **Documentos.** {{ui:Documentos…}} no grupo **Ficheiro** abre un diálogo sobre unha cartafol de proxecto: sacar e devolver, letras de revisión, estados (en traballo, para revisar, liberado, obsoleto), historial, onde se usa e lista de materiais. Vexa [Documentos e revisións (a caixa)](topic:documents-walkthrough).
- **Ligazón Rhino en directo.** Un script, `cadcraft_link.py`, vixía un documento de Rhino ou Grasshopper e envía a PartCraft só o que cambiou, e unha función importada reconstrúese coa nova forma. Vai nun só sentido e precisa Studio. Vexa [Ligazón .3dm en directo](topic:live-3dm-link).
- **Ver os cursores dos demais.** Nunha sesión compartida, o cursor de cada persoa amósase co seu nome e a función que ten seleccionada. Vexa [Traballar en directo con outros](topic:work-live).
- **Chan de fábrica.** Active o complemento Chan de fábrica en {{ui:Configuración}} › {{ui:Complementos}}. Despois de enviar un programa en {{ui:Fabricación}}, a súa lapela pode {{ui:Engadir á cola de traballos da fábrica}} ou {{ui:Gardar como ficheiro de traballo}}. Nunca envía nin inicia unha máquina.

### Análise e pezas

- **Complemento Solid FEM.** Active {{ui:Solid FEM}} en {{ui:Configuración}} › {{ui:Complementos}} (está apagado ata que o active) e aparece unha lapela {{ui:Solid FEM}} no panel dereito. {{ui:Mallar a peza}}, seleccione caras fixas e cargas na vista 3D, {{ui:Resolver}}, e debuxe o desprazamento, a tensión de von Mises ou unha forma modal con {{ui:Amosar no modelo}}. Vexa [Solid FEM: unha comprobación de tensión](topic:solid-fem-check).
- **Arco en esbozos, de dez xeitos.** A frecha xunto a {{ui:Arco}} na barra de ferramentas do esbozo lista 3 puntos, Inicio Centro Fin, Inicio Centro Ángulo, Inicio Centro Lonxitude, Inicio Fin Ángulo, Inicio Fin Dirección, Inicio Fin Raio, Centro Inicio Fin, Centro Inicio Ángulo, Centro Inicio Lonxitude e Continuar. Vexa [Debuxar un arco por dez métodos](topic:sketch-arc-methods).
- **Perfís de aceiro do Reino Unido.** As estruturas soldadas poden usar 976 perfís UK (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); escriba un tamaño como `305x165x40 UB`. Vexa [Elementos estruturais](topic:structural-members).

### Impresión

- **Etapa de impresión.** O botón {{ui:Etapa de impresión}} da barra de ferramentas (complemento 3D Print, activado por defecto) pon os corpos da súa peza nunha cama con trazos: {{ui:Estender}}, {{ui:Xirar 90°}}, {{ui:Dispoñer na cama}}, {{ui:Axustar todo á cama}}, {{ui:Vista previa das capas}}, e logo {{ui:Enviar á impresora 3D}} por USB, Klipper (Moonraker), OctoPrint ou PrusaLink. Non se envía nada ata que confirme, e a súa peza nunca se cambia. Para un ficheiro STL ou 3MF, vexa [Preparar unha peza para impresión 3D](topic:print-3d).
- **Impresión en resina.** Complementos en {{ui:Configuración}} › {{ui:Complementos}}, todos apagados ata que os active: un slicer de resina, un test de exposición, e os formatos de ficheiro Elegoo GOO, SL1, Chitubox CBDDLP/CTB e Anycubic. O corte faise nun fío de traballo, así que a páxina segue respondendo.

## En todas as aplicacións

- Cada suxestión ao pasar o punteiro é un aviso Bootstrap.
- A dica de inicio ten un botón de pechar; queda pechada.
- A fila de lapelas dun panel que non cabe despraza-se de lado en vez de cortarse.
- A lapela do navegador amosa o nome do documento aberto antes de PartCraft | CadCraft.
- {{ui:Configuración}} amosa a {{ui:Disposición}} do espazo de traballo como lista de opcións, e a caixa de idioma enumera todos os idiomas da compilación.
- Peso e temperatura son tipos de unidade nos axustes de Unidades.

## Corrixido

- O menú Arco do esbozo lista agora todos os métodos.
- A barra de complementos e o título da lapela do navegador corrixíronse o 2026-11-09.

## Limitacións

- O STEP exacto leuse de novo en OpenCascade (sólidos válidos, volumes iguais aos calculados a man). Aínda non se abriu en todos os programas CAD ou CAM, e un conxunto non se escribe como STEP exacto.
- Nada se imprimiu nunha impresora real. Os cortes, o G-code e os ficheiros de resina leron os nosos propios programas ou unha impresora de proba; ningún dos formatos de resina se cargou nunha impresora, e os tamaños e as exposicións das impresoras son puntos de partida.
- Solid FEM é lineal, isótropo e elástico, un material por peza, sen contacto, fluencia nin pandeo. A tensión nas caras fixas e nas esquinas agudas depende da malla. É unha axuda para comprobar, non revisada por un enxeñeiro.
- Os tempos de conxuntos grandes veñen dun servidor sen GPU; un fotograma con detalle completo de 20.000 pezas aínda tarda segundos alí.
- Os redondeos funcionan en pares de caras; non hai mestura xeral de vértices nin redondeo entre caras que non se tocan.
- A ligazón Rhino nunca se executou dentro de Rhino ou Grasshopper reais. Documentos probouse con dous programas sobre unha cartafol, non con dúas persoas nunha rede compartida.
- O axuste de superficies a un escaneo real non pasou aínda a revisión manual. Os idiomas distintos do inglés son borradores automáticos.
- Os instaladores de Windows non están asinados dixitalmente, e a imaxe de disco de macOS non está notarizada. Vexa [Solución de problemas](topic:troubleshooting).

Os cambios anteriores están en [Novidades da 0.7](topic:whats-new-0-7).

## Anteriores: 0.8 e 0.8.1

Isto é o que cambiou en PartCraft 0.8 e 0.8.1, comparado coa 0.7. A simulación responde mentres edita e indica o que cede primeiro, os conxuntos reciben estudos de movemento, e os novos espazos de traballo fan superficies libres e pezas dimensionadas pola física. A 0.8.1 é unha pequena versión de corrección.

### Novo

**Simulación**

- **Actualizar mentres edito.** Marque {{ui:Actualizar mentres edito}} no bloque Resolver e as respostas seguen as súas edicións. Cambie unha cota, unha carga ou o material e unha resposta rápida, feita con elementos catro veces maiores, aparece de inmediato; cando para durante un segundo aprox., a resposta refinada do propio estudo substitúe a rápida. Os resultados indican cal está vendo. Nunha viga en voadizo de aceiro, a resposta rápida estivo dentro do 1 % na frecha e ao redor do 4 % na tensión respecto da refinada. Vexa [Comprobar tensión e deformación](topic:simulation#actualizar-mentres-edita-en-directo).
- **Que cede primeiro.** Para un estudo estático ou de pandeo, {{ui:Que cede primeiro?}} no bloque **Romper** escala as cargas ata que a peza ceda. Lista, do peor ao menos malo, o factor de carga ata a primeira fluencia (cunha marca vermella onde a tensión é máxima) e o factor de carga ata o pandeo. Un factor por debaixo de 1 significa que a peza xa cede coa carga aplicada, e Problemas amosa un erro. Os factores veñen dun estudo lineal, así que só valen o que vale ese estudo. Vexa [Comprobar tensión e deformación](topic:simulation#atopar-o-que-cede-primeiro-romper).
- **Fluencia e contacto.** Dous tipos de estudo máis: un non lineal no que o material segue a súa recta ata a tensión de fluencia e logo unha pendente máis plana, con a deformación plástica debuxada; e un de contacto no que pezas separadas se empurran (sen fricción) ou quedan pegadas (unidas). Un paso de carga que non se estabiliza, ou pezas que se afondan demasiado unhas nas outras, amósanse no panel de Problemas. Non se resolven a fricción, o gran deslizamento, as grandes rotacións, as grandes deformacións nin a fatiga. Vexa [Comprobar tensión e deformación](topic:simulation#fluencia-e-contacto-estudos-non-lineais).
- **Decks para CalculiX.** {{ui:Exportar}} › {{ui:Deck CalculiX (.inp)}} garda o estudo para CalculiX, un programa separado que instala e executa vostede; {{ui:Exportar}} › {{ui:Resultados CalculiX (.frd)}} lee o seu ficheiro de resultados de volta na mesma malla. PartCraft nunca inicia ese programa, e avisa se a peza cambiou desde que se gardou o deck.

**Conxuntos**

- **Estudos de movemento.** {{ui:Montaxe}} › {{ui:Movemento}} move o valor dunha xunta durante un tempo que vostede dá (velocidade constante, suavizada, senoidal, ou ida e volta), coloca o conxunto en cada paso coas súas xuntas e os seus lazos pechados, e informa do que choca e de canto se acercan as pezas. {{ui:Engadir un punto}} debuxa a posición, a velocidade e a aceleración dun punto, e o valor da xunta e a holgura fronte ao tempo; {{ui:Gardar CSV}} e {{ui:Gardar gráfico}} escríbeos. Despois de {{ui:Executar}}, a barra Percorrer a execución move o conxunto a calquera paso. Os axustes do estudo gárdanse no ficheiro do conxunto. A velocidade e a aceleración saen das posicións gravadas, así que use máis pasos se un pico agudo se le baixo. Vexa [Comprobar un conxunto por choques e movemento](topic:check-assembly#un-estudo-de-movemento).

**Superficies e pezas a partir da física**

- **Un espazo de traballo Superficies.** Escolla {{ui:Superficies}} na caixa {{ui:Espazo de traballo}} para curvas e superficies NURBS xunto á peza: {{ui:Curva}}, {{ui:Unión de perfís}}, {{ui:Barrido}}, {{ui:Axustar}} e {{ui:Cebra}}, con continuidade (G0, G1 ou G2) medida nas superficies exactas, e unha arista peor do que pediu listada en Problemas cun axuste de Axustar. {{ui:Suavizar}} mide as liñas de casco para buscar inflexións e saltos de curvatura, e reconstrúe as que non son suaves dentro da súa tolerancia. As superficies gárdanse no ficheiro da peza e non cambian as funcións da peza. Vexa [Superficies libres (NURBS)](topic:nurbs-surfaces).
- **O espazo de traballo Engineer.** Escolla {{ui:Engineer}} na caixa de espazos de traballo, seleccione un xerador e prema en {{ui:Novo}}: un script dimensiona unha peza a partir do que debe facer (calor que mover, fluxos, presión, material, proceso de impresión) con fórmulas clásicas e constrúea, e logo devolve os números usados cos seus fontes, as súas comprobacións de fabricación e ficheiros para ferramentas de análise. As mesmas entradas dan a mesma peza en calquera ordenador. O xerador queda gardado na peza, e abrir unha peza nunca executa un script. Vexa [Pezas a partir da física: xeradores](topic:engineer-generators) e [Escribir un xerador](topic:write-a-generator).

**Esbozo, debuxos e fabricación**

- **Un esbozo a partir dunha foto.** {{ui:Elementos}} › {{ui:Máis}} › {{ui:Esbozo desde unha foto…}} traza unha imaxe dunha peza plana sobre fondo liso (contorno e buratos) ou un debuxo a pluma en liñas, arcos e círculos. Vostede dá un longo, comproba a vista previa e fai o esbozo. Vexa [Fundamentos do esbozo](topic:sketch-basics#un-esbozo-a-partir-dunha-foto).
- **Escala e división para imprimir.** {{ui:Exportar}} › {{ui:Escala para imprimir (STL ou 3MF)…}} escala por eixo sen cambiar a peza, por exemplo para unha compensación de contracción. {{ui:Exportar}} › {{ui:Dividir para imprimir (un zip de pezas)…}} corta unha peza demasiado grande para a súa cama en pezas numeradas unidas con pivotes, chavetas, colas de milano, buratos de cavilla ou ocos para imáns. Vexa [Imprimir en 3D](topic:print-3d).
- **Follas aniñadas en G-code.** {{ui:Exportar}} › {{ui:Follas dispostas a G-code}} lee un DXF aniñado e fai un programa por folla co post que escolla: primeiro buratos e recortes, despois os contornos. Non planifica as entradas, a orde de corte nin as arestas compartidas. Vexa [Encaixar pezas planas en follas](topic:nest-flat-parts#cortar-as-follas-g-code).
- **Debuxos que fan máis por si mesmos.** {{ui:Folla}} › {{ui:Automático}} escolle a folla A máis pequena que contén as vistas á escala estándar máis grande ata 1:1. {{ui:Acotar os buratos}} pon unha marca de centro en cada burato, unha chamada por tamaño e as posicións desde a esquina inferior esquerda da vista. Vexa [Facer un debuxo](topic:drawing-pdf).

**En todas as aplicacións**

- **Idiomas.** As aplicacións chegan en 54 idiomas. Os que non son inglés son borradores automáticos ata que unha persoa falante nativa os revise.
- **Filas da barra de ferramentas.** {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Filas da barra de ferramentas}} escolle Envolver (como antes), 2 filas ou 1 fila; unha barra que non cabe despraza-se de lado. A cinta de Elementos de PartCraft amosa a ferramenta máis usada en grande e garda as variantes detrás dun botón dividido.
- **Conecte a súa IA.** Studio é o centro para conectar un asistente propio ás oito aplicacións, con permiso de só lectura, suxestión ou edición en cada unha. Un asistente conectado pode dimensionar unha peza a partir dunha frase, como un soporte para unha carga, amosar o seu razoamento e cada comprobación, e construila; informa do que non comprobou (concentración de tensión, fatiga, fluencia en plásticos). Vexa [Usar PartCraft cun asistente de IA](topic:use-with-ai-assistants).

### Corrixido en 0.8.1

- **Conxelación do cursor a pantalla completa.** A selección ao pasar o punteiro está agora limitada en frecuencia. A causa é a nosa mellor lectura e non se confirmou coa persoa que o informou.
- **Idioma en tempo de execución.** Studio e as edicións empaquetadas poden cambiar de idioma mentres se executan; antes eran só en inglés. Isto aínda non se probou en todas as plataformas: díganos se o idioma non cambia.

### Non está nesta versión aínda

- Conectar a súa IA non está rematado: a conexión dun clic dentro de Studio, o conector hospedado para a IA do navegador, a súa propia clave de API dentro de Studio e o paquete MCP publicado non están prometidos. Studio non ten IA propia.
- Studio non está asinado dixitalmente: Windows pode avisar, e macOS pide botón dereito e logo Abrir. Vexa [Solución de problemas](topic:troubleshooting).
- As cadeas de tolerancias seguen sendo dunha dirección: vexa [Cadeas de tolerancias](topic:tolerance-stackup).
- O resto está listado en [O que aínda non está construído](topic:not-built-yet).

Os cambios anteriores están en [Novidades da 0.7](topic:whats-new-0-7).
