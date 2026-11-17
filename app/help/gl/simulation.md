---
title: Comprobar tensión e frecha (Simulación)
summary: Escolle un material, fixa caras, engade forzas, presións ou o peso propio da peza, resolve, e le a tensión de von Mises, o desprazamento, o factor de seguridade, as reaccións e as frecuencias naturais sobre o modelo, co que o método pode e non pode dicirche.
keywords: simulación, FEA, análise en directo, actualizar mentres editas, rompelo, o que rompe primeiro, factor de carga, non lineal, plasticidade, cedencia, deformación plástica, bilineal, contacto, par de contacto, penalización, unido, contacto sen fricción, CalculiX, .inp, .frd, elementos finitos, tensión, deformación, von Mises, desprazamento, frecha, factor de seguridade, límite elástico, reacción, carga, forza, presión, gravidade, peso propio, fixo, sen fricción, apoio, restrición, material, aceiro, aluminio, titanio, ABS, PLA, nailon, frecuencia natural, modal, vibración, malla, tamaño do elemento, tetraédrico, tetraedros, voxel, calidade da malla, tensión principal, deformación equivalente, estimación de erro, superficies curvas, furados, arredondamentos, adaptativo, refinamento adaptativo, refinamento automático, converxencia, converxencia de malla, superficie exacta, esfera, cono, toro, spline, forma libre
from: 6f2fdec1
---

A área de traballo Simulación responde á pregunta "dobrarase ou romperase baixo esta carga?" para a peza que estás modelando. É un estudo **estático lineal** (pequenas deformacións, o material mantense elástico) ou un estudo de **frecuencia natural**, resolto sobre unha malla de tetraedros cuadráticos que segue as caras da peza (ou, se o escolles, de pequenos cubos iguais). Funciona sobre as caras nomeadas que o núcleo de malla lle dá á peza (ver [O núcleo de malla](topic:solid-kernels)).

Escolle **Simulación** no cadro **Espazo de traballo** á esquerda da barra de ferramentas. A túa peza non cambia; o estudo gárdase dentro do ficheiro da peza, e cada cambio nel pode desfacerse.

## Preparar un estudo

1. Preme **Novo estudo** no panel da dereita.
2. Escolle o **Material**. O panel mostra a súa rixidez (E), o coeficiente de Poisson, a densidade e o límite elástico. Os valores son cifras típicas de manual; os valores certificados do teu provedor poden diferir.
3. Escolle a **Malla**:
   - **Tetraédrica (precisa)**, a predeterminada: tetraedros de 10 nós cuxas caras exteriores quedan sobre as caras da peza, con arestas curvas en furados, arredondamentos e outras caras redondas. Os nós en caras planas, cilíndricas, cónicas, esféricas e toroidais, caras de revolución e extruídas e caras de forma libre (B-spline) sitúanse sobre a superficie exacta; calquera outro tipo de cara segue a súa malla de visualización, e a táboa de resultados indica cantas caras o fixeron. A malla faise máis fina por si soa preto de caras curvas, paredes finas e arestas vivas.
   - **Cubos de voxel (rápido)**: a peza enchida con cubos iguais. Rápido, pero as caras curvas convértense en escalóns. Os estudos gardados antes de existir a malla tetraédrica conservan este tipo.
4. Deixa **Tamaño do elemento** baleiro para un tamaño automático (uns 12.000 tetraedros, ou 20.000 cubos), ou escribe un en milímetros. O panel mostra aproximadamente cantos elementos se crean antes de engadir os puntos máis finos. Con tetraedros, **Elementos máis pequenos en caras curvas** (activado por defecto) refina furados e arredondamentos, onde a tensión adoita alcanzar o máximo.

### Refinar automaticamente

Con tetraedros, un estudo estático ou de pandeo (sen carga térmica), un estudo de frecuencia natural e un estudo térmico estacionario ofrecen **Refinar automaticamente (adaptativo)**. Márcao e define:

- **Erro obxectivo (%)**: a resolución detense cando o erro estimado baixa deste valor (1 % ao principio).
- **Pasadas máximas**: o número máximo de resolucións (5 ao principio, como máximo 10).

Cada pasada resolve, atopa os elementos co maior erro estimado, divídeos (e tantos veciños como faga falta para manter a malla íntegra) e resolve de novo. Os novos nós en caras curvas van á superficie exacta. Os resultados mostran unha táboa e un gráfico con, para cada pasada, os elementos, as incógnitas, o erro estimado, a tensión máxima (ou temperatura) e o desprazamento (ou fluxo de calor), e unha liña que explica por que se detivo: o obxectivo cumpriuse, as pasadas esgotáronse, a seguinte malla sería demasiado grande, ou unha pasada fallou (vese entón a última pasada correcta).

Le a estimación como unha estimación. Zienkiewicz–Zhu, comparada con respostas exactas, lee entre 0,6 e 0,95 do erro real: mide o erro en **toda a peza**, así que unha tensión máxima nun furado ou nun arredondamento adoita seguir un pouco desviada cando a estimación parece pequena. Para unha concentración de tensión, fixa o obxectivo por debaixo do 1 % e observa como o máximo se estabiliza de pasada en pasada. Nunha esquina interior viva ou na aresta dunha cara fixa a tensión real é infinita, así que a estimación nunca chega alí: as pasadas esgótanse no seu lugar.

**Frecuencias naturais e pandeo.** Para un estudo de frecuencia natural, a estimación cobre todos os modos que pediches, cada un contado igual; a táboa e o gráfico seguen as dúas primeiras frecuencias. Nunha peza só con caras planas, unha frecuencia só pode baixar de pasada en pasada (cada malla conserva a anterior); as caras curvas tamén se acercan á súa forma real, o que pode mover unha frecuencia un pouco en calquera sentido. Para o pandeo, a estimación cobre a tensión previa e os modos de pandeo, e a táboa segue os factores de carga. Comprobado nunha barra de aceiro de 100 × 10 × 10 mm: a primeira frecuencia estabilízase de 812,4 a 811,9 Hz en catro pasadas, 0,4 % por debaixo de Euler–Bernoulli (que ignora o cortante), e o factor de carga da columna dentro do 0,5 % de Euler.

## Suxeitar e cargar

Cada estudo precisa polo menos un apoio e, para a tensión, unha carga.

1. Preme {{ui:Fixar}} na barra de ferramentas. O novo apoio queda seleccionado e agarda caras: fai clic nas caras que se manteñen quietas (fai clic de novo para quitar unha). Preme **Rematar a selección** ou {{key:Esc}} ao acabar. Os conos azuis marcan as caras suxeitas.
2. Preme {{ui:Forza}} e fai clic nas caras sobre as que actúa a forza. No panel escribe a **Forza total** en newtons e escolle a súa **Dirección**: cara dentro da cara, ou ao longo dun eixe. A forza repártese entre as caras escollidas segundo a área. Frechas laranxas a mostran.
3. Preme {{ui:Presión}} para unha presión en MPa (N/mm²) que empuxa cara ás caras escollidas; unha presión negativa tira.

Hai máis tipos na lista **Engadir** do panel: unha **Cara sen fricción** (a cara pode deslizar sobre si mesma pero non separarse dela; úsaa para planos de simetría e apoios suaves) e **Gravidade** (o propio peso da peza, 9,81 m/s², na dirección que escolles).

Un apoio que deixa a peza libre para deslizar ou xirar recházase, indicando que movemento queda libre.

## Resolver e ler os resultados

Preme {{ui:Resolver}}. O traballo corre en segundo plano; **Parar** cancélao. Despois:

- A peza colorease segundo a **tensión de von Mises**; escolle **Desprazamento** ou **Factor de seguridade** en **Mostrar**. A lenda indica a escala.
- Apunta á peza para ler os valores baixo o punteiro.
- Marca **Forma deformada** para ver a peza dobrada (o movemento aumenta co **Escala**; o real é o da táboa).
- A táboa lista a tensión máxima e onde está, o desprazamento máximo, o **factor de seguridade** máis pequeno (límite elástico ÷ tensión de von Mises; por debaixo de 1 o material cede), a carga aplicada e as **reaccións** nos apoios (equilibran a carga), e a malla usada.

Para as **frecuencias naturais**, escolle ese **Tipo**, define cantos **Modos** e resolve. Cada modo mostra a súa frecuencia e forma (as formas escálanse a 1 no seu maior movemento).

Se cambias a peza, os resultados márcanse como non actualizados: resolve de novo.

## Cedencia e contacto (estudos non lineais)

Dous tipos de estudo máis van máis aló de "o material mantense elástico":

- **Non lineal (o material cede)** segue a recta do material ata o seu límite elástico, e despois unha pendente máis plana (**Pendente despois da cedencia**, 1 % de E se se deixa en branco). A carga avanza en **Pasos de carga**; un paso que non se estabiliza réducese á metade automaticamente. Os resultados engaden **Deformación plástica** aos gráficos e indican canta carga se soportou. Se un paso aínda non se estabiliza, o estudo detense no último paso correcto e o panel ⚠ Problemas di onde: a peza esgotou alí a súa resistencia (un colapso), ou os pasos son demasiado grandes.
- **Contacto entre pezas** deixa que pezas separadas da mesma peza empurren unhas contra outras. Engade un **Par de contacto**, escolle as caras do lado A (as que presionan) con {{ui:Seleccionar caras}}, e despois as do lado B con {{ui:Escoller as caras do lado B}}. As pezas **sen fricción** empurran, deslizan e separanse; as **unidas** quedan pegadas. Cada peza se malla por separado, así que un pequeno oco entre elas non importa. O contacto é un método de penalización: as pezas se afundan un pouco unha na outra (o **factor de penalización** × E ÷ tamaño do elemento fixa a rixidez do contacto). A táboa mostra a penetración máxima, e o panel de Problemas avisa cando supera o 1 % do tamaño do elemento: sobe o factor ou usa elementos máis pequenos.

Os dous usan a malla tetraédrica. A fricción, o gran deslizamento e as grandes rotacións non se resolven aquí.

## Executalo en CalculiX

**Exportar › Ficheiro de entrada de CalculiX (.inp)** (ou {{ui:Gardar un ficheiro de entrada de CalculiX (.inp)}} no panel) garda o estudo como un ficheiro de entrada para CalculiX, un programa separado que instalas e executas ti mesmo: a mesma malla, material, apoios, cargas e pares de contacto, en mm, N e MPa. Execútao, e despois **Exportar › Resultados de CalculiX (.frd)** le o seu ficheiro de resultados sobre a mesma malla e mostra o desprazamento (e a tensión de von Mises cando o ficheiro contén tensións). Se cambiaches a peza ou o tamaño do elemento entre medias, a malla xa non é a mesma e PartCraft dío: garda un novo ficheiro de entrada.

## Até onde confiar nel

PartCraft comproba o seu solucionador contra fórmulas manuais (a frecha na punta dunha viga en voadizo PL³/3EI dentro do 1 %, o alongamento dunha barra PL/AE exacto, a primeira frecuencia dunha viga en voadizo dentro do 3 %, a tensión arredor dun furado nunha placa). Aínda así, ten en conta estes límites:

- **A malla.** Con tetraedros, PartCraft comproba a frecha e a tensión de flexión dunha viga en voadizo (dentro do 0,3 %), a tensión nun furado dunha placa (Kt, dentro de cerca do 1 %), un tubo groso baixo presión (Lamé, dentro do 0,3 %) e a primeira frecuencia (dentro do 0,4 %). A táboa mostra a **calidade da malla** (os ángulos máis pequenos e máis grandes entre caras dos elementos; por debaixo de uns 10° un elemento é pobre) e unha **estimación do erro de tensión**: se supera algunhas unidades por cento, resolve de novo cun tamaño de elemento máis pequeno, ou deixa que **Refinar automaticamente** o faga. Nunha placa cun furado e unha barra con dúas entallas nas arestas, o refinamento automático chegou a 1 % do Kt de libro con preto dunha sexta parte das incógnitas que requiriu facer toda a malla máis fina. Con cubos de voxel, un furado ou un arredondamento é unha escaleira co tamaño do cubo, así que a tensión alí é aproximada.
- **As esquinas interiores vivas e as arestas das caras fixas non teñen un pico real de tensión.** O valor alí segue crecendo ao facerse os elementos máis pequenos. Lee as tensións un pouco lonxe desas zonas, ou redondea a esquina no modelo.
- **Resultados que ler.** Ademais da tensión de von Mises, o desprazamento e o factor de seguridade, un estudo tetraédrico mostra a **tensión principal máxima e mínima** (tracción e compresión) e a **deformación equivalente**. Marca **Mostrar malla** para ver os elementos.
- **Os estudos estáticos son lineais e elásticos.** Para cedencia e contacto usa os tipos de estudo non lineais de enriba; as grandes deflexións e a fatiga non se resolven. O calor, a tensión térmica e o pandeo lineal son os seus propios tipos de estudo: ver [Calor, tensión térmica e pandeo](topic:thermal-and-buckling).
- **Cada material é igual en todas as direccións.** Os plásticos impresos en 3D son máis débiles entre as súas capas, a miúdo nun terzo ou máis.
- Isto é unha versión de laboratorio: comproba as pezas importantes por outro medio.

## Actualizar mentres editas (En directo)

Marca **Actualizar mentres edito** no bloque Resolver e as respostas de Simulación seguen as túas edicións. Cambia unha cota, unha carga, o material ou o contorno e aparece de inmediato unha **resposta rápida**, feita con elementos catro veces máis grandes que os do estudo; cando paras un momento (un segundo aproximadamente), a **resposta refinada** do propio estudo substitúe a rápida. Os resultados indican cal estás vendo ("Resposta rápida" ou "Resposta refinada") e o tamaño do elemento. A resposta rápida serve para a dirección e o tamaño: nunha viga en voadizo de aceiro estivo dentro do 1 % no desprazamento e a un 4 % na tensión da refinada. Confía na refinada para os números que vaias usar. Os estudos estáticos, de frecuencia natural, térmicos e de pandeo funcionan así; En directo é un axuste de vista e non se garda na peza. Un Resolver que premes ti mesmo mantense como está ata a seguinte edición.

## Descubrir o que rompe primeiro (Rompelo)

Nun estudo estático ou de pandeo, preme **Que se rompe primeiro?** no bloque **Rompelo**. PartCraft escala as cargas do estudo (forzas, presións e peso xuntos) ata que a peza ceda, e lista, do peor ao mellor, **o factor de carga ata a primeira cedencia** (o factor sobre as cargas actuais no que a tensión de von Mises máxima alcanza o límite elástico do material, cunha marca vermella onde ocorre) e **o factor de carga ata o pandeo** para os mesmos apoios e cargas. Un factor de 4,3 significa que a peza soporta 4,3 veces a súa carga antes de ceder; **un factor por debaixo de 1 significa que xa cede tal como está cargada**, e iso aparece na lista de Problemas como erro (o achado máis débil móstrase como nota aínda cando todo cumpre). Os factores saen dun estudo lineal sobre tetraedros co tamaño de elemento actual, así que valen o que vale ese estudo: a tensión nunha cara fixa ou nunha esquina viva non ten pico real (ver arriba), e o factor de cedencia estará do lado cauto alí. O teu asistente pode facer a mesma comprobación coa ferramenta `break_run`.

## Relacionados

- [Calor, tensión térmica e pandeo](topic:thermal-and-buckling)
- [Facer crecer unha forma desde as cargas (Xerativo)](topic:generative-design)
- [Medir distancias, ángulos e masa](topic:measure)
- [O que aínda non está construído](topic:not-built-yet)
