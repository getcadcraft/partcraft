---
title: Comprova la tensió i la deformació (Simulació)
summary: Trieu un material, fixeu cares, afegiu forces, pressions o el propi pes de la peça, resoleu, i llegiu la tensió de von Mises, el desplaçament, el factor de seguretat, les reaccions i les freqüències naturals sobre el model, amb el que el mètode pot i no pot dir-vos.
keywords: simulació, FEA, anàlisi en directe, actualitza mentre edites, trenca-ho, què es trenca primer, factor de càrrega, no lineal, plasticitat, cessió, deformació plàstica, bilineal, contacte, parell de contacte, penalització, enganxat, contacte sense fricció, CalculiX, .inp, .frd, elements finits, tensió, deformació, von Mises, desplaçament, deformació, factor de seguretat, límit elàstic, reacció, càrrega, força, pressió, gravetat, pes propi, fixat, sense fricció, suport, restricció, material, acer, alumini, titani, ABS, PLA, niló, freqüència natural, modal, vibració, malla, mida d'element, tetraèdrica, tetraedres, malla de tetraedres, vòxel, qualitat de malla, tensió principal, deformació equivalent, estimació d'error, cares corbes, forats, arrodoniments, adaptatiu, refinament adaptatiu, refinament automàtic, h-adaptatiu, convergència, convergència de malla, superfície exacta, esfera, con, tor, spline, forma lliure
from: 6f2fdec1
---

L'espai de treball de Simulació respon a "es doblegarà o es trencarà amb aquesta càrrega?" per a la peça que modeleu. És un estudi **estàtic lineal** (deformacions petites, el material es manté elàstic) o un estudi de **freqüència natural**, resolt en una malla de tetraedres quadràtics que segueix les cares de la peça (o, si ho trieu, de cubs petits iguals). Funciona amb les cares amb nom que el nucli de malla dona a la peça (vegeu [El nucli de malla](topic:solid-kernels)).

Trieu **Simulació** al quadre **Espai de treball**, a l'esquerra de la barra d'eines. La vostra peça no es canvia; l'estudi es desa dins del fitxer de la peça i cada canvi es pot desfer.

## Configura un estudi

1. Premeu **Estudi nou** al panell de la dreta.
2. Trieu el **Material**. El panell mostra la seva rigidesa (E), el coeficient de Poisson, la densitat i el límit elàstic. Els valors són xifres típiques de manual; els valors certificats del vostre proveïdor poden ser diferents.
3. Trieu la **Malla**:
   - **Tetraèdrica (precisa)**, la predeterminada: tetraedres de 10 nodes les cares exteriors dels quals es troben sobre les cares de la peça, amb arestes corbes als forats, als arrodoniments i a altres cares rodones. Els nodes de les cares planes, cilíndriques, còniques, esfèriques i toroïdals, de les cares revolucionades i extruïdes i de les cares de forma lliure (B-spline) es troben sobre la superfície exacta; qualsevol altre tipus de cara segueix la seva malla de visualització, i la taula de resultats diu quantes cares ho han fet. La malla es fa més fina automàticament a prop de cares corbes, parets primes i arestes vives.
   - **Cubs de vòxels (ràpid)**: la peça plena de cubs iguals. Ràpid, però les cares corbes esdevenen esglaons. Els estudis desats abans que existís la malla tetraèdrica es mantenen amb aquesta.
4. Deixeu **Mida d'element** buida per a una mida automàtica (unes 12,000 tetraedres, o 20,000 cubs), o escriviu-ne una en mm. El panell mostra aproximadament quants elements suposa això abans d'afegir els punts més fins. Amb tetraedres, **Elements més petits a les cares corbes** (activat per defecte) refina els forats i els arrodoniments, on la tensió sol assolir el màxim.

### Refina automàticament

Amb tetraedres, un estudi estàtic o de vinclament (sense càrrega tèrmica), un estudi de freqüència natural i un estudi tèrmic estacionari ofereixen **Refina automàticament (adaptatiu)**. Marqueu-ho i definiu:

- **Error objectiu (%)**: la resolució s'atura quan l'error estimat és per sota (1 % per començar).
- **Màxim de passades**: el màxim de resolucions que pot fer (5 per començar, com a màxim 10).

Cada passada resol, troba els elements amb l'error estimat més gran, els divideix (i tants veïns com calgui per mantenir la malla sencera) i torna a resoldre. Els nous nodes a les cares corbes van a la superfície exacta. Els resultats mostren després una taula i un gràfic amb, per a cada passada, els elements, les incògnites, l'error estimat i la tensió màxima (o la temperatura) i el desplaçament (o el flux de calor), i una línia que diu per què s'ha aturat: s'ha assolit l'objectiu, s'han acabat les passades, la malla següent seria massa gran, o una passada ha fallat (aleshores veieu l'última passada bona).

Llegiu l'estimació com a estimació. Ella (Zienkiewicz–Zhu, que comparada amb respostes exactes dóna entre 0.6 i 0.95 de l'error real) mesura l'error a tota la **peça**, així que una tensió màxima en un forat o un arrodoniment sol estar encara una mica desviada quan l'estimació sembla petita: per a una concentració de tensió, poseu l'objectiu per sota de l'1 % i observeu com el màxim s'estabilitza de passada en passada. En una cantonada interior viva o a la vora d'una cara fixa la tensió real és infinita, així que l'estimació mai hi arriba: les passades s'acaben.

**Freqüències naturals i vinclament.** Per a un estudi de freqüència natural, l'estimació cobreix cada mode que heu demanat, comptats igual; la taula i el gràfic segueixen les dues primeres freqüències. En una peça amb només cares planes, una freqüència només pot baixar de passada en passada (cada malla conserva l'anterior); les cares corbes també s'acosten a la seva forma real, cosa que pot moure una freqüència una mica en qualsevol sentit. Per al vinclament, l'estimació cobreix la pretensió i els modes de vinclament, i la taula segueix els factors de càrrega. Comprovat en una barra d'acer de 100 × 10 × 10 mm: la primera freqüència s'estabilitza de 812.4 a 811.9 Hz en quatre passades, un 0.4 % per sota d'Euler–Bernoulli (que ignora el tall), i el factor de càrrega de la columna dins del 0.5 % d'Euler.

## Subjecta-la i carrega-la

Cada estudi necessita almenys un suport i, per a la tensió, una càrrega.

1. Premeu {{ui:Fixa}} a la barra d'eines. El nou suport queda seleccionat i esperant cares: feu clic a les cares que es mantenen quietes (feu clic de nou a una cara per treure-la). Premeu **Fet** o {{key:Esc}} en acabar. Els cons blaus marquen les cares subjectades.
2. Premeu {{ui:Força}} i feu clic a les cares on actua la força. Al panell escriviu la **Força total** en newtons i trieu la seva **Direcció**: cap a la cara, o al llarg d'un eix. La força es reparteix per àrea entre les cares triades. Les fletxes taronja la mostren.
3. Premeu {{ui:Pressió}} per a una pressió en MPa (N/mm²) que empeny cap a les cares triades; una pressió negativa tira.

Més tipus són a la llista **Afegeix** del panell: una **Cara sense fricció** (la cara pot lliscar al llarg de si mateixa però no allunyar-se'n; useu-la per a plans de simetria i suports suaus) i **Gravetat** (el pes propi de la peça, 9.81 m/s², en la direcció que trieu).

Un suport que deixa la peça lliure per lliscar o girar es refusa, dient quin moviment queda lliure.

## Resol i llegeix els resultats

Premeu {{ui:Resol}}. El treball s'executa en segon pla; **Atura** el cancel·la. Després:

- La peça es pinta per **tensió de von Mises**; trieu **Desplaçament** o **Factor de seguretat** a **Mostra**. La llegenda dóna l'escala.
- Situeu el punter sobre la peça per llegir els valors que hi ha sota.
- Marqueu **Forma deformada** per veure la peça doblegada (el moviment s'amplia amb l'**Escala**; el real és el de la taula).
- La taula llista la tensió màxima i on és, el desplaçament màxim, el **factor de seguretat** més petit (límit elàstic ÷ tensió de von Mises; per sota d'1 el material cedeix), la càrrega aplicada i les **reaccions** als suports (equilibren la càrrega), i la malla usada.

Per a les **freqüències naturals**, trieu aquest **Tipus**, definiu quants **Modes**, i resoleu. Cada mode mostra la seva freqüència i la seva forma (les formes s'escalen a 1 al seu moviment més gran).

Si canvieu la peça, els resultats es marquen com a desactualitzats: torneu a resoldre.

## Cessió i contacte (estudis no lineals)

Dos tipus d'estudi més van més enllà de "el material es manté elàstic":

- **No lineal (el material cedeix)** segueix la línia recta del material fins al seu límit elàstic, i després una pendent més plana (**Pendent després de la cessió**, 1 % d'E si es deixa en blanc). La càrrega avança en **Passos de càrrega**; un pas que no s'estabilitza es divideix per la meitat automàticament. Els resultats afegeixen **Deformació plàstica** als gràfics i diuen quanta càrrega s'ha suportat. Si un pas encara no s'estabilitza, l'estudi s'atura al darrer pas bo i el tauler ⚠ Problemes diu on: la peça s'ha quedat sense resistència allà (un col·lapse), o els passos són massa grans.
- **Contacte entre peces** deixa que peces separades de la peça s'empenyin entre elles. Afegiu un **Parell de contacte**, trieu les cares del costat A (les que pressionen) amb {{ui:Selecciona cares}}, i després el costat B amb {{ui:Selecciona les cares B}}. Les peces **sense fricció** empenyen, llisquen i se separen; les peces **enganxades** es queden unides. Cada peça es malla per separat, així que un petit buit entre elles és correcte. El contacte és un mètode de penalització: les peces s'enfonsen una mica entre elles (el **factor de penalització** × E ÷ mida d'element determina la rigidesa del contacte). La taula mostra l'enfonsament més profund, i el tauler Problemes avisa quan supera l'1 % de la mida d'element: augmenteu el factor o useu elements més petits.

Tots dos usen la malla tetraèdrica. La fricció, el lliscament gran i les rotacions grans no es resolen aquí.

## Executa-la a CalculiX

**Exporta › Fitxer d'entrada de CalculiX (.inp)** (o {{ui:Desa un fitxer d'entrada de CalculiX (.inp)}} al panell) desa l'estudi com a fitxer d'entrada per a CalculiX, un programa separat que instal·leu i executeu vosaltres mateixos: la mateixa malla, material, suports, càrregues i parells de contacte, en mm, N i MPa. Executeu-lo, i després **Exporta › Resultats de CalculiX (.frd)** llegeix el seu fitxer de resultats sobre la mateixa malla i mostra el desplaçament (i la tensió de von Mises quan el fitxer conté tensions). Si entremig heu canviat la peça o la mida d'element, la malla no és la mateixa i PartCraft ho diu: deseu un fitxer d'entrada nou.

## Fins on confiar-hi

PartCraft comprova el seu resolutor amb fórmules manuals (la fletxa a l'extrem d'una biga en voladís PL³/3EI dins de l'1 %, l'allargament d'una barra PL/AE exactament, la primera freqüència d'una biga en voladís dins del 3 %, la tensió al voltant d'un forat en una placa). Tot i això, tingueu present aquests límits:

- **La malla.** Amb tetraedres, PartCraft comprova la deformació i la tensió de flexió d'una biga en voladís (dins del 0.3 %), la tensió en un forat d'una placa (Kt, dins d'un 1 % aproximadament), un tub gruixut sota pressió (Lamé, dins del 0.3 %) i la primera freqüència (dins del 0.4 %). La taula mostra la **qualitat de la malla** (els angles més petit i més gran entre cares dels elements; per sota d'uns 10° un element és dolent) i un **error estimat de tensió**: si és més d'uns pocs per cent, torneu a resoldre amb una mida d'element més petita, o deixeu que **Refina automàticament** ho faci. En una placa amb un forat i una barra amb dues entalladures als costats, el refinament automàtic va arribar a l'1 % del Kt del llibre de text amb una sisena part de les incògnites que feia falta per fer tota la malla més fina. Amb cubs de vòxels, un forat o un arrodoniment és un escaló a la mida del cub, així que la tensió allà és aproximada.
- **Les cantonades interiors vives i les vores de les cares fixes no tenen una tensió màxima real.** El valor allà continua creixent a mesura que els elements es fan més petits. Llegiu les tensions una mica lluny d'aquests llocs, o arrodoniu la cantonada al model.
- **Resultats per llegir.** A més de la tensió de von Mises, el desplaçament i el factor de seguretat, un estudi tetraèdric mostra la **tensió principal màxima i mínima** (tracció i compressió) i la **deformació equivalent**. Marqueu **Mostra la malla** per veure els elements.
- **Els estudis estàtics són lineals i elàstics.** Per a cessió i contacte useu els tipus d'estudi no lineals d'dalt; les grans deflexions i la fatiga no es resolen. La calor, la tensió tèrmica i el vinclament lineal són tipus d'estudi propis: vegeu [Calor, tensió tèrmica i vinclament](topic:thermal-and-buckling).
- **Cada material és igual en totes les direccions.** Els plàstics impresos en 3D són més febles a través de les seves capes, sovint un terç o més.
- Això és una versió de laboratori: comproveu les peces que importen d'una altra manera.

## Actualitza mentre edites (Live)

Marqueu **Actualitza mentre edito** al bloc Resol i les respostes de Simulació segueixen les vostres edicions. Canvieu una cota, una càrrega, el material o l'entorn i apareix a l'instant una **resposta ràpida**, feta amb elements quatre vegades més grans que els de l'estudi; quan us atureu una estona (un segon més o menys), la **resposta refinada** de l'estudi reemplaça aquesta. Els resultats diuen quina esteu mirant ("Resposta ràpida" o "Resposta refinada") i la mida d'element. La resposta ràpida serveix per a la direcció i la mida: en una biga en voladís d'acer va estar dins de l'1 % en la deformació i a uns 4 % en la tensió de la refinada. Useu la refinada per als números que faran servir. Els estudis estàtics, de freqüència natural, tèrmics i de vinclament funcionen així; Live és una opció de vista i no es desa a la peça. Un Resol que premeu vosaltres es queda tal com és fins a la següent edició.

## Descobreix què es trenca primer (Trenca-ho)

Per a un estudi estàtic o de vinclament, premeu **Què es trenca primer?** al bloc **Trenca-ho**. PartCraft escala les càrregues de l'estudi (forces, pressions i pes junts) fins que la peça cedeix, i llista, del pitjor al millor, **el factor de càrrega fins al primer límit elàstic** (el factor sobre les càrregues d'avui en què la tensió de von Mises més alta arriba al límit elàstic del material, amb un marcador vermell on passa) i **el factor de càrrega fins al vinclament** per als mateixos suports i càrregues. Un factor de 4.3 vol dir que la peça suporta 4.3 vegades la seva càrrega abans de cedir; **un factor per sota d'1 vol dir que ja cedeix tal com està carregada**, i això apareix a la llista de Problemes com a error (el punt més feble es mostra com a nota fins i tot quan tot és correcte). Els factors surten d'un estudi lineal sobre tetraedres a la vostra mida d'element, així que són tan bons com ho és aquell estudi: la tensió en una cara fixa o en una cantonada viva no té pic real (vegeu més amunt), i el factor de cessió serà per la banda prudent allà. El vostre assistent pot fer la mateixa comprovació amb l'eina `break_run`.

## Relacionats

- [Calor, tensió tèrmica i vinclament](topic:thermal-and-buckling)
- [Fes créixer una forma a partir de càrregues (Generatiu)](topic:generative-design)
- [Mesura distàncies, angles i massa](topic:measure)
- [Què encara no està implementat](topic:not-built-yet)
