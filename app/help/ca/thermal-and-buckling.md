---
title: Calor, tensió tèrmica i pandeig
summary: Trobeu les temperatures d'una peça a partir de temperatures fixes, flux de calor, potència calorífica, convecció i radiació (en règim estacionari o al llarg del temps), carregueu un estudi de tensió amb un augment de temperatura, i trobeu la càrrega a la qual una peça esvelta es pandeja, amb el que cada mètode pot i no pot dir-vos.
keywords: tèrmic, transferència de calor, calor, temperatura, conducció, convecció, coeficient de pel·lícula, radiació, emissivitat, flux de calor, potència calorífica, generació de calor, dissipador, transitori, temps, refredament, escalfament, Crank-Nicolson, Euler implícit, balanç de calor, tensió tèrmica, tensió tèrmica al llarg del temps, tensió tèrmica transitòria, temple, xoc tèrmic, historial de tensions, pitjor moment, dilatació tèrmica, coeficient de dilatació, pandeig, pandeig d'Euler, factor de càrrega, càrrega crítica, columna, esvelt, valor propi
from: 1a1b7545
---

Aquests estudis viuen a l'espai de treball Simulació, al costat de la tensió estàtica i les freqüències naturals (vegeu [Comprovar tensió i deformació](topic:simulation)). Trieu-los a la casella **Tipus** del tauler. Fan servir la mateixa malla de cubs petits i la mateixa llista de materials; cada material de la biblioteca té una conductivitat tèrmica, una calor específica i un coeficient de dilatació (valors típics de manual, mostrats sota **Propietats**).

## Tèrmic: on va la calor?

1. Trieu **Tèrmic (transferència de calor)** com a **Tipus**.
2. Afegiu condicions tèrmiques des de la llista **Afegeix** del tauler, i després feu clic a les seves cares (com per a suports i càrregues):
   - **Temperatura fixa**: la cara es manté a una temperatura, en °C.
   - **Flux de calor**: W/m² que entren a la cara (un valor negatiu hi surt). Actua sobre l'àrea real de la cara, fins i tot on els cubs formen un esglaó.
   - **Potència calorífica**: un total en watts, repartit entre les cares seleccionades proporcionalment a l'àrea. Useu-la per a una resistència o un xip de potència coneguda.
   - **Convecció**: aire o líquid a una temperatura s'endú la calor a h W/(m²·K). Valors típics de h: aire en calma 5–10, un ventilador 25–100, aigua 500–10,000. PartCraft no calcula h: en aquest estudi no hi ha flux de fluid.
   - **Radiació**: la cara irradia cap a l'entorn a una temperatura, amb una emissivitat de 0 a 1. Es **linealitza** (la radiació s'escriu com un coeficient que depèn de la temperatura i es torna a resoldre fins que s'estabilitza) i només va cap a l'entorn: les cares no intercanvien calor entre elles.
3. **Generació de calor** (W/m³) escalfa tota la peça des de dins, per exemple una peça resistiva.
4. Premeu **Resol**. La peça es pinta segons la temperatura; trieu **Flux de calor** a **Mostra** per veure per on flueix la calor. Situeu el punter sobre la peça per llegir totes dues coses.

El flux de calor estacionari necessita un lloc on anar: almenys una temperatura fixa, convecció o radiació. Una peça que només rep calor no té estat estacionari; feu-la transitòria.

La taula indica la temperatura més baixa i la més alta i on són, el flux de calor més gran, i el **balanç de calor**: la calor que entra o surt de cada condició (una temperatura fixa compta el que ha de subministrar o absorbir), la calor generada, els totals d'entrada i sortida, i el **desequilibri**. El desequilibri ha de ser una fracció petita de la calor que entra; un de gran vol dir que el resultat no és fiable.

### Al llarg del temps (transitori)

Marqueu **Transitori** i indiqueu una **Temperatura inicial** (tota la peça hi comença), un **Interval de temps** i un nombre de **Passos de temps**. **Euler implícit** és robust; **Crank–Nicolson** és més precís amb els mateixos passos, però pot ondular després d'un canvi sobtat. Un cop resolt, arrossegueu el control lliscant **Temps** per veure les temperatures a cada instant (l'escala de colors es manté igual per a tots els instants). El balanç de calor inclou aleshores la calor emmagatzemada.

## Tensió tèrmica: què fa un canvi de temperatura a la peça?

En un estudi de **Tensió estàtica** (o **Pandeig**), definiu **Càrrega tèrmica**:

- **Canvi de temperatura uniforme**: tota la peça s'escalfa (o es refreda, amb un nombre negatiu) en tants kelvins.
- **Temperatures de les condicions tèrmiques**: afegiu condicions tèrmiques al mateix estudi; primer es resolen les temperatures estacionàries sobre la mateixa malla, i després la peça s'expandeix segons α·(T − la **temperatura sense tensió**).
- **Temperatures al llarg del temps (execució transitòria)**: afegiu condicions tèrmiques, i després indiqueu una **Temperatura inicial**, un **Interval de temps**, **Passos de temps** i **Pas de temps** igual que en un estudi tèrmic transitori. Les temperatures es resolen al llarg del temps sobre la mateixa malla (cubs o tetraedres), i una resolució estàtica sobre les temperatures de cada instant dona la tensió d'aquell instant. **Tensió a**:
  - **El pitjor moment** (l'inici): **Resolucions de tensió** reparteix instants uniformement al llarg de l'execució, incloent-hi l'inici (21 si no ho canvieu, com a màxim 51). Els resultats s'obren a l'instant amb la tensió de von Mises més gran; la taula en dona el nom, un petit gràfic mostra la tensió màxima en funció del temps, i el control lliscant **Temps** mostra la tensió a cada instant resolt (l'escala de colors és la del pitjor instant).
  - **Un instant triat**: un sol instant, el pas de temps més proper al **Temps (s)** que indiqueu. Un estudi de pandeig sempre pren un instant triat (el final de l'execució, tret que n'indiqueu un).

Una peça que es templa (es submergeix de calenta a freda) o que s'escalfa de cop és la més tensionada quan l'interior i la superfície difereixen més: sovint just a l'inici. Una temperatura mantinguda s'aplica des del primer instant, com un canvi sobtat; per això la tensió a l'inici exacte depèn de la mida de l'element (només uns quants elements noten el canvi). Llegiu-la com a "molt alta", i mireu els instants següents del control lliscant per veure valors que la malla sí resol. La tensió és quasiestàtica: sense inèrcia, sense vibració pel canvi sobtat.

Una peça que pot créixer lliurement no té tensió tèrmica: subjecteu-la just el necessari per impedir que es mogui (per exemple, tres cares sense fricció en angle recte). Subjectada entre dues parets, es comprimeix: una barra d'acer escalfada 50 K entre parets rígides suporta uns 117 MPa. Les càrregues tèrmiques s'equilibren soles, així que les reaccions només equilibren les càrregues mecàniques.

## Pandeig: quan una peça esvelta cedeix?

1. Trieu **Pandeig (lineal)** com a **Tipus**, i afegiu suports i càrregues com en un estudi estàtic.
2. Definiu **Factors de càrrega a trobar** (quants modes de pandeig).
3. Premeu **Resol**. Cada mode té un **factor de càrrega**: el múltiple de les vostres càrregues al qual la peça ideal es pandeja. Un factor de càrrega de 3 vol dir tres vegades les vostres càrregues; **un factor de càrrega inferior a 1 vol dir que es pandeja sota les càrregues que heu aplicat**. La taula també dona la càrrega total a cada factor. La forma del mode mostra com es pandeja (la seva mida no vol dir res).

**El pandeig lineal sobreestima la càrrega de pandeig real.** Suposa una peça perfecta: perfectament recta, sense tensió residual i elàstica. Les peces reals tenen petites imperfeccions i poden entrar en fluència abans, i les closques de paret prima poden pandejar-se a una fracció del valor lineal. Useu un marge generós, i considereu un factor de càrrega proper a 3 o inferior per a una closca prima com un avís.

## Quant de fiable és

PartCraft verifica aquests resolutors amb fórmules manuals: una barra entre dues temperatures (exacte), una aleta de refredament (dins de 0.3 K), una llosa que s'escalfa per si mateixa (exacte), un cub que es refreda al llarg del temps (dins de 0.1 % amb Crank–Nicolson), una barra escalfada de cop per un extrem, una barra lliure escalfada (sense tensió, ΔL = αLΔT), una barra subjectada entre parets (σ = −EαΔT), una placa templada al llarg del temps contra la solució clàssica en sèrie (dins d'1 % en cubs, 2.1 % en tetraedres al centre de la placa; 0.5 % a la seva superfície), l'últim instant d'una execució llarga contra la tensió tèrmica estacionària (la mateixa fins a una milionèsima), i columnes d'Euler (dins d'1 % fix–lliure, 1.5 % articulat–articulat). Tingueu present:

- **Valors de material constants.** La conductivitat, la calor específica i la dilatació no canvien amb la temperatura aquí; a unes poques centenes de graus poden canviar un 10–30 %. La rigidesa tampoc canvia.
- **La tensió al llarg del temps és quasiestàtica i elàstica**: cada instant és una resolució estàtica (sense inèrcia), i sense fluència, de manera que un temple que cediria la superfície mostra en canvi una tensió per sobre del límit de fluència.
- **Els coeficients de convecció els introduïu vosaltres**, no es calculen a partir d'un flux d'aire o d'aigua.
- **Sense resistència de contacte**: la peça és un sol sòlid.
- **Només pandeig lineal**: sense imperfeccions, sense fluència i sense comportament després del pandeig.
- L'escalonat dels cubs i les cantonades interiors vives afecten les tensions tèrmiques igual que les altres tensions (vegeu [Comprovar tensió i deformació](topic:simulation)).
- Aquesta és una versió de laboratori: comproveu de l'altra manera les peces que siguin importants.

## Relacionat

- [Comprovar tensió i deformació (Simulació)](topic:simulation)
- [Què encara no està implementat](topic:not-built-yet)
