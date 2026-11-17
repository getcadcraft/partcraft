---
title: Simula el flux de fluids (estudi de flux)
summary: Flux pels canals de dins d'una peça o al seu voltant dins d'una caixa: entrades, sortides, aire, aigua o un fluid propi, i després velocitat i pressió en un pla de tall mòbil, línies de corrent, pressió a la superfície, caiguda de pressió, balanç de massa, resistència aerodinàmica i sustentació, i què pot i què no pot dir-vos el mètode laminar.
keywords: flux, CFD, fluid, dinàmica de fluids computacional, simulació de flux, aire, aigua, viscositat, densitat, nombre de Reynolds, laminar, turbulent, caiguda de pressió, pèrdua de càrrega, entrada, sortida, tapa, velocitat, cabal, cabal volumètric, litres per minut, pressió estàtica, línies de corrent, pla de tall, pla de secció, resistència aerodinàmica, sustentació, coeficient de resistència, coeficient de sustentació, àrea frontal, flux extern, flux intern, tub, canal, col·lector, tovera, Boltzmann de xarxa, residu, convergència
from: 7dc75f29
---

Un estudi de **Flux** calcula com es mou un fluid pels canals de dins de la peça (**intern**) o al seu voltant (**extern**). Per defecte és **laminar, incompressible, isotèrmic i newtonià**: un flux suau d'un fluid la densitat i la viscositat del qual es mantenen fixes, sense calor, sense turbulència i sense gravetat. Hi ha també un model turbulent **experimental**, només per a patrons qualitatius (vegeu més avall). Funciona sobre les cares amb nom que el nucli de malla dona a la peça (vegeu [El nucli de malla](topic:solid-kernels)).

Trieu **Simulació** a la caixa **Espai de treball**, premeu **Estudi nou** si no n'hi ha cap, i definiu **Tipus** com a **Flux (CFD)**. **Model de flux** és **Laminar** (per defecte) o **Turbulent (Spalart–Allmaras, experimental)**: vegeu **Flux turbulent (experimental)** més avall. Els paràmetres estructurals de l'estudi es conserven, de manera que podeu tornar enrere. Els paràmetres de flux es desen al fitxer de la peça i cada canvi es pot desfer.

## Trieu el fluid i les cel·les

- **Fluid**: aire o aigua a 20 °C, o **Personalitzat** amb la vostra pròpia densitat (kg/m³) i viscositat dinàmica (Pa·s). L'aire fa servir la llei dels gasos ideals i la llei de Sutherland (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); l'aigua fa servir els valors IAPWS (998.21 kg/m³, 1.0016 mPa·s).
- **Mida de cel·la**: l'espai del fluid s'omple amb cubs iguals. Deixeu-la buida per a una mida automàtica; el tauler en mostra la graella. Cada obertura i cada canal haurien de tenir **almenys 8 a 10 cel·les d'amplada** per obtenir valors útils; les cel·les més petites són més precises però més lentes (el doble de fina equival a unes 16 vegades més feina).
- **Parets**: **Interpolades** segueix les parets corbes entre cel·les (per defecte); **Rebot (bounce-back)** tracta les parets com l'escalonat dels cubs.

## Flux dins de la peça

L'espai del fluid ha de ser tancat. Afegiu una **Entrada** i una **Sortida** al tauler, i després feu clic a les seves cares a la vista:

1. **La cara plana al voltant d'una obertura**: la vora a l'extrem d'un tub, una cara de port. PartCraft tanca el forat de l'obertura amb una tapa. Tots els forats d'aquesta cara pertanyen a aquesta obertura; per això, quan una entrada i una sortida s'obren a la mateixa cara, modeleu-hi una tapa fina sobre una d'elles.
2. **La cara interior d'una tapa**: com en altres eines CAD, modeleu una placa fina (una extrusió) sobre l'obertura i trieu-ne la cara que toca el fluid.

Per a una entrada definiu una **velocitat** (m/s, uniforme a través de l'obertura, cap dins de la peça) o un **cabal volumètric** (L/min). Per a una sortida definiu la **pressió estàtica** (Pa, manomètrica). Si una obertura queda oberta, o si una paret és més fina que una cel·la, l'interior s'uneix amb l'exterior i el càlcul s'atura amb el missatge "No hi ha cap espai de fluid tancat".

## Flux al voltant de la peça

Definiu **Flux** a **Extern**, la **Velocitat**, la direcció cap on flueix, i fins on arriba la caixa aigua amunt, aigua avall i als costats (buit: 1, 3 i 1 vegades la mida més gran de la peça). La cara de la caixa per on entra el flux és una entrada, la cara per on surt és una sortida a 0 Pa, i les cares al llarg del flux deixen lliscar. Una caixa massa petita estreny el flux al voltant de la peça i augmenta la resistència. **Àrea de referència** és l'àrea que fan servir els coeficients de resistència i de sustentació (buit: l'àrea frontal de la peça vista en la direcció del flux). La sustentació es mesura al llarg de +Y, tret que trieu una altra direcció.

## Calcula i llegeix els resultats

Premeu **Calcula**. El càlcul s'executa en segon pla amb el nombre de passos, el residu i un gràfic del residu; **Atura** el finalitza. S'atura quan el residu (quant canvia encara el camp de velocitats per pas) és per sota de l'objectiu i la caiguda de pressió o la resistència s'ha estabilitzat. Si arriba primer al límit de passos, el tauler diu **No convergit** en vermell: els valors són l'últim estat, no pas una resposta estable.

- **Pla de tall**: velocitat o pressió estàtica en un pla que passa pel model; trieu-ne la normal (X, Y o Z) i arrossegueu el control lliscant per moure'l. Passeu-hi el punter a sobre per llegir els valors.
- **Línies de corrent**: des de les entrades (intern) o des d'una graella a través de l'extrem d'entrada de la caixa, dins del pla de tall (extern).
- **Peça**: sòlida, transparent (per veure el pla de dins), pressió a la superfície, o amagada.
- **Taula**: nombre de Reynolds, caiguda de pressió (pressió estàtica mitjana a les entrades menys la de les sortides), el cabal i la pressió mitjana de cada obertura, la força sobre la peça, la resistència i la sustentació amb els seus coeficients i l'àrea de referència (extern), el balanç de massa (entrada contra sortida), la malla i el solucionador.

## Flux turbulent (experimental)

**Model de flux › Turbulent (Spalart–Allmaras, experimental)** resol el flux turbulent promitjat en el temps (RANS estacionari): el model de Spalart–Allmaras dona una viscositat de remolí a cada cel·la, i les cel·les al costat de les parets fan servir la llei de paret de Spalding en lloc de resoldre la capa fina que hi ha. És totalment turbulent a tot arreu (sense regions laminars ni transició).

**No ha superat les seves comprovacions de precisió.** El tauler, els resultats i la taula ho diuen en cada estudi turbulent, i l'avís no es pot tancar. Feu-lo servir per a **patrons qualitatius de flux** (on el flux se separa, recircula o s'accelera), **no per a xifres de disseny**.

| Comprovació | Referència | Resultat |
|---|---|---|
| Fricció en canal pla, primera cel·la a y⁺ 49 / 98 | correlació de Dean | +3.3 % / +4.7 % |
| Canal amb paret resolta (y⁺ ≈ 3), Re_τ 180: velocitat global (bulk) | DNS de Moser, Kim i Mansour | −1 % |
| Canal pla, y⁺ 7–15 o 190–380 | correlació de Dean | +9 a +22 % |
| Fricció de tub a través de les cel·les del cub, totalment desenvolupat, 10–30 cel·les d'amplada | Colebrook | 30 a 34 % massa alt |
| Reatxament darrere d'un graó cap enrere, 6–14 cel·les per alçada de graó | Driver i Seegmiller, 6.26 alçades de graó | 21 a 39 % massa curt |

Els resultats milloren només lentament amb cel·les més fines. Després de calcular, la taula mostra la **y⁺ de la primera cel·la** (mínim, mitjana i màxim de les cel·les de paret) i avisa si queda fora del rang comprovat d'1 a 400; apunteu a uns 30 a 300. **Temps d'execució:** les cel·les automàtiques es dimensionen per a uns quants minuts com a màxim en un nucli d'un portàtil (el tauler mostra el cas pitjor per a la graella i el límit de passos; un tub petit s'estabilitza en menys de 20 segons). Reduir a la meitat la mida de la cel·la costa unes 16 vegades més de temps. Les forces sobre la peça surten d'un balanç de moment sobre les obertures o sobre la caixa.

**Feina feta fins ara:** les cel·les de paret ara ajusten el seu propi esforç de cisallament a la llei de paret, cosa que va reduir els errors del tub i del graó fins a les xifres de dalt sense canviar els resultats del canal pla. Això no va ser prou per a xifres de disseny. El següent pas són cel·les més fines a prop de les parets.

## Què pot i què no pot dir-vos

- **El model laminar** només és laminar. En els tubs el flux es torna turbulent per sobre d'un nombre de Reynolds d'uns 2,000 a 4,000; darrere de cossos romos, l'estela comença a desprendre vòrtexs per sobre d'uns 50. El tauler avisa en aquests punts. Un resultat laminar per a un flux turbulent subestima la caiguda de pressió i calcula malament la resistència. El model turbulent experimental (més amunt) cobreix el flux turbulent de manera qualitativa; les seves xifres encara no són fiables.
- **Mètode:** el mètode de Boltzmann de xarxa (lattice Boltzmann; D3Q19, col·lisió de dos temps de relaxació) executat fins a un estat estacionari. És lleugerament compressible a l'interior; PartCraft manté els canvis de densitat en uns pocs per cent. Si el flux és massa ràpid per a les cel·les, es nega a començar i indica en quant s'han de fer més petites.
- **Comprovat amb:** flux de Hagen–Poiseuille en un tub dins d'una peça (gradient de pressió dins de l'1 % a 20 cel·les d'amplada), la cavitat impulsada per la tapa de Ghia et al. (dins del 0.75 % de la velocitat de la tapa) i el benchmark del cilindre de Schäfer–Turek (resistència dins de l'1 % a 10 cel·les per diàmetre).
- No modelat: transferència de calor, turbulència amb precisió de disseny (el model turbulent és experimental), superfícies lliures, cavitació, gravetat, peces en moviment, fluids no newtonians, parets rugoses. Versió de laboratori: comproveu els resultats importants per un altre mètode.
