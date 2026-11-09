---
title: Novidades da 0.8 e da 0.8.1
summary: PartCraft 0.8 engade análise en vivo mentres edita, unha comprobación de que cede primeiro, estudos de fluencia e contacto con ficheiros de entrada para un resolutor externo, estudos de movemento para conxuntos, un espazo de traballo Superficies para superficies de forma libre, pezas dimensionadas pola física no espazo Enxeñaría, esbozo a partir dunha foto, exportacións para impresión, follas aniñadas a G-code e debuxos que acotan os seus buratos. 0.8.1 corrixe un conxelamento do cursor en pantalla completa.
keywords: novidades, o que hai de novo, notas da versión, historial de cambios, cambios, 0.8, 0.8.1, versión, funcións novas, análise en vivo, actualizar mentres edita, que cede primeiro, factor de carga, non lineal, fluencia, deformación plástica, contacto, calculix, estudo de movemento, xogo, superficies, nurbs, suavizar, casco, cebra, enxeñaría, xerador, peza xerada, esbozo a partir dunha foto, escalar para imprimir, dividir para imprimir, contracción, follas aniñadas, g-code, debuxo, acotar buratos, asistente, mcp, idiomas, filas da barra de ferramentas
from: 62e4dce2
---

Isto é o que cambiou en PartCraft 0.8 e 0.8.1, en comparación coa 0.7. A simulación responde mentres edita e indícalle o que cede primeiro, os conxuntos reciben estudos de movemento, e os novos espazos de traballo crean superficies de forma libre e pezas dimensionadas pola física. 0.8.1 é unha pequena versión de corrección.

## Novo

### Simulación

- **Actualizar mentres edito.** Marque {{ui:Actualizar mentres edito}} no bloque Resolver e as respostas seguirán as súas edicións. Cambie unha cota, unha carga ou o material e aparece de inmediato unha resposta rápida, feita con elementos catro veces máis grandes; cando para uns segundos, a resposta refinada do propio estudo substitúea. Os resultados indican cal está a ver. Nunha viga en voadizo de aceiro, a resposta rápida estivo dentro do 1 % na frecha e ao redor do 4 % na tensión respecto da refinada. Ver [Comprobar tensión e frecha](topic:simulation#update-while-you-edit-live).
- **Que cede primeiro.** Nun estudo estático ou de pandeo, {{ui:Que cede primeiro?}} no bloque **Rómpeo** escala as cargas ata que a peza cede. Enumera, do peor ao mellor, o factor de carga ata a primeira fluencia (cunha marca vermella onde se concentra a tensión) e o factor de carga ata o pandeo. Un factor menor que 1 significa que a peza xa cede coa carga aplicada, e Problemas mostra un erro. Os factores proceden dun estudo lineal, así que só valen o que vale ese estudo. Ver [Comprobar tensión e frecha](topic:simulation#find-out-what-breaks-first-break-it).
- **Fluencia e contacto.** Dous tipos de estudo máis: un non lineal no que o material segue a súa recta ata a tensión de fluencia e despois unha pendente máis plana, con a deformación plástica representada; e un de contacto no que pezas separadas empúxanse entre si (sen fricción) ou quedan unidas (pegadas). Un paso de carga que non se estabiliza, ou pezas que se afundan demasiado unha na outra, móstranse no panel Problemas. Non se resolven a fricción, o gran deslizamento, as grandes rotacións, as grandes frechas nin a fatiga. Ver [Comprobar tensión e frecha](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Ficheiros de entrada para CalculiX.** {{ui:Exportar}} › {{ui:Ficheiro de entrada de CalculiX (.inp)}} garda o estudo para CalculiX, un programa aparte que instala e executa vostede mesmo; {{ui:Exportar}} › {{ui:Resultados de CalculiX (.frd)}} le de novo o seu ficheiro de resultados sobre a mesma malla. PartCraft nunca inicia ese programa, e avísao se a peza cambiou desde que se gardou o ficheiro de entrada.

### Conxuntos

- **Estudos de movemento.** {{ui:Montaxe}} › {{ui:Movemento}} fai variar o valor dunha unión durante un tempo que vostede dá (velocidade constante, suavizada, sinusoidal, ou ida e volta), coloca o conxunto en cada paso coas súas uniones e lazos pechados, e informa de que interfire e de como de preto chegan as pezas. {{ui:Engadir un punto}} representa en función do tempo a posición, a velocidade e a aceleración dun punto, o valor da unión e o xogo; {{ui:Gardar CSV}} e {{ui:Gardar gráfico}} escríbeno. Despois de {{ui:Executar}}, o Paso pola barra de execución move o conxunto a calquera paso. Os axustes do estudo gárdanse no ficheiro do conxunto. A velocidade e a aceleración calcúlanse a partir das posicións rexistradas, así que use máis pasos se un pico agudo se le baixo. Ver [Comprobar un conxunto por interferencias e movemento](topic:check-assembly#a-motion-study).

### Superficies e pezas pola física

- **Un espazo de traballo Superficies.** Escolla {{ui:Superficies}} na caixa {{ui:Espazo de traballo}} para curvas e superficies NURBS xunto á peza: {{ui:Curva}}, {{ui:Unión de perfís}}, {{ui:Barrido}}, {{ui:Axustar}} e {{ui:Cebra}}, con continuidade (G0, G1 ou G2) medida sobre as superficies exactas e unha aresta peor do que pediu listada en Problemas cunha corrección de Axustar. {{ui:Suavizar}} mide liñas de casco para buscar inflexións e saltos de curvatura, e reconstrúe as irregulares dentro da súa tolerancia. As superficies gárdanse no ficheiro da peza e non cambian os elementos da peza. Ver [Superficies de forma libre (NURBS)](topic:nurbs-surfaces).
- **O espazo de traballo Enxeñaría.** Escolla {{ui:Enxeñaría}} no selector de espazos de traballo, elixa un xerador e prema {{ui:Novo}}: un script dimensiona unha peza a partir do que debe facer (calor para mover, fluxos, presión, material, proceso de impresión) con fórmulas de libro de texto e constrúea; despois devolve os números que usou cos seus fontes, as súas comprobacións de fabricación e ficheiros para ferramentas de análise. As mesmas entradas dan a mesma peza en calquera ordenador. O xerador gárdase na peza, e abrir unha peza nunca executa un script. Ver [Pezas pola física: xeradores](topic:engineer-generators) e [Escribir un xerador](topic:write-a-generator).

### Esbozo, debuxos e fabricación

- **Un esbozo a partir dunha foto.** {{ui:Elementos}} › {{ui:Máis}} › {{ui:Esbozo a partir dunha foto…}} traza unha imaxe dunha peza plana sobre un fondo liso (contorno e buratos) ou un debuxo a bolígrafo en liñas, arcos e círculos. Vostede dá unha lonxitude, comproba a vista previa e fai o esbozo. Ver [Básicos do esbozo](topic:sketch-basics#a-sketch-from-a-photo).
- **Escalar e dividir para imprimir.** {{ui:Exportar}} › {{ui:Escalar para imprimir (STL ou 3MF)…}} escala por eixo sen cambiar a peza, por exemplo cunha marxe de contracción. {{ui:Exportar}} › {{ui:Dividir para imprimir (un zip de pezas)…}} corta unha peza demasiado grande para a súa cama en pezas numeradas unidas con pivotes, chaveiros, colas de milano, buratos para pasadores ou cavidades para imáns. Ver [Imprimir en 3D](topic:print-3d).
- **Follas aniñadas a G-code.** {{ui:Exportar}} › {{ui:Follas aniñadas a G-code}} le un DXF aniñado e fai un programa por folla a través do posprocesador que escolla: primeiro os buratos e recortes, despois os contornos. Non planifica as entradas, a orde de corte nin as arestas compartidas. Ver [Aniñar pezas planas en follas](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Debuxos que fan máis por si mesmos.** {{ui:Folla}} › {{ui:Automático}} escolle a folla de tamaño A máis pequena que contén as vistas á maior escala estándar ata 1:1. {{ui:Acotar os buratos}} pon unha marca de centro en cada burato, unha chamada por tamaño e as posicións desde a esquina inferior esquerda da vista. Ver [Facer un debuxo](topic:drawing-pdf).

### En todas as aplicacións

- **Idiomas.** As aplicacións chegan en 54 idiomas. Os que van máis aló do inglés son borradores automáticos ata que un falante nativo os le.
- **Filas da barra de ferramentas.** {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Filas da barra de ferramentas}} escolle Envolver (como antes), 2 filas ou 1 fila; unha barra que non cabe despraza-se de lado. A cinta de Elementos de PartCraft mostra a ferramenta máis usada en grande e garda as variantes detrás dun botón dividido.
- **Conecte a súa IA.** Studio é o centro para conectar un asistente propio a todas as oito aplicacións, con permiso só de lectura, de suxestión ou de edición por aplicación. Un asistente conectado pode dimensionar unha peza a partir dunha frase, como unha escuadra para unha carga, mostrar o seu proceso e cada comprobación, e construila; informa do que non comprobou (concentración de tensións, fatiga, fluencia lenta en plásticos). Ver [Usar PartCraft cun asistente de IA](topic:use-with-ai-assistants).

## Corrixido na 0.8.1

- **Conxelamento do cursor en pantalla completa.** A selección ao pasar o punteiro agora está limitada. A causa é a nosa mellor lectura e non se confirmou coa persoa que o informou.
- **Idioma en tempo de execución.** Studio e as edicións empaquetadas poden cambiar de idioma mentres se executan; antes, só estaban en inglés. Aínda non se probou en todas as plataformas: díganos se o idioma non cambia.

## Aínda non nesta versión

- Conectar a súa IA non está rematado: non se prometen a conexión dun clic dentro de Studio, o conector aloxado para IA no navegador, a súa propia clave de API dentro de Studio nin o paquete MCP publicado. Studio non ten IA propia.
- Studio non está asinado dixitalmente: Windows pode avisar, e macOS pide facer clic dereito e despois Abrir. Ver [Solución de problemas](topic:troubleshooting).
- As cadeas de tolerancia seguen nunha soa dirección: ver [Cadeas de tolerancia](topic:tolerance-stackup).
- O resto figura en [Que aínda non está construído](topic:not-built-yet).

Os cambios anteriores están en [Novidades da 0.7](topic:whats-new-0-7).
