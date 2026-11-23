---
title: Desbast 3D i mecanitzat de resta
summary: Buideu el material al voltant de tot el model nivell per nivell amb una fresa plana, arrodonida o de punta esfèrica, deixant material per a l'acabat, i després deixeu que una eina més petita talli només on la primera ha deixat material. Què garanteixen les trajectòries i què no.
keywords: desbast 3d, desbast, mecanitzat de resta, desbast de resta, material restant, material a deixar, pas de profunditat, nivells, nivell z, línia d'aigua, rampa, entrada en vertical, rascada, eina més petita
from: 29ddc266
---

Dues operacions de Fabricació, sota {{ui:Més}} a la seva barra d'eines, buiden material de tot el **model** en 3D, amb l'eina mantinguda en vertical (o al llarg de la [direcció d'eina](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) pròpia de l'operació). No demanen cap selecció.

## Desbast 3D

{{ui:Desbast 3D}} baixa des de la part superior del material en brut un **pas de profunditat** cada vegada. A cada nivell buida tot el que l'eina pot assolir sense tocar el model: files rectes separades un **pas lateral** (una fracció del diàmetre de l'eina), i després una volta al voltant de la vora del que pot assolir, de manera que es segueixen les parets i no es deixen com una fila d'esglaons en planta.

- **Material a deixar**: a quina distància es manté l'eina del model a tot arreu, per a la passada d'acabat (per defecte 0.5 mm).
- **Un nivell a cada cara plana**: un nivell addicional a l'alçada de cada cara plana del model (més el material a deixar), de manera que un fons no queda gairebé a tot un pas de profunditat d'alçada.
- **Ignora el material més prim que**: el material més prim que això, cap amunt o de costat, no val la pena una passada (0.05 mm per al desbast, 0.5 mm per al mecanitzat de resta, perquè un pèl deixat al llarg d'una paret no faci que l'eina més petita doni la volta a totes les parets).
- **Fons**: no es talla res per sota d'aquesta alçada. Buit vol dir el fons del model.

Comença des del material en brut **tal com l'han deixat les operacions anteriors**: després d'una passada de refrentat, no talla l'aire on ha passat la fresa de refrentar.

Per baixar: on l'eina trobaria material durant la baixada, fa una rampa al llarg de la seva pròpia passada amb l'**angle de rampa**, endavant i enrere sobre com a màxim dos diàmetres d'eina. Una passada massa curta per a això s'entra en vertical amb l'avanç d'entrada; l'operació les compta i avisa, perquè una eina que no talla pel seu centre no hauria de fer-ho.

## Mecanitzat de resta

{{ui:Resta}} té la mateixa estratègia per a una **eina més petita després d'una de més gran**. Llegeix la simulació del material i talla només on encara hi ha material: a les cantonades interiors on la gran no podia entrar, en les ranures on no hi cabia, i en els esglaons que va deixar als pendents. A la resta no fa res, de manera que la seva trajectòria és una petita part del que faria la mateixa eina sobre material nou.

Poseu-la després de l'operació de desbast i trieu l'eina més petita. Necessita la simulació del material de les operacions anteriors, que l'espai de treball sempre executa.

## Com de bones són les trajectòries

- **Sense rascades.** Les posicions de l'eina es calculen sobre una graella, amb el tallador considerat una mica més gran del que és (en 1.4 cel·les de graella lateralment, i pel material a deixar), de manera que, allà on es trobi, queda lliure del model. Les proves comproven cada punt de tall contra l'eina exacta sobre la malla exacta, i la simulació del material després de cada execució: sense rascades, sense moviment ràpid a través del material.
- **El preu d'això**: les parets conserven una mica més que el material a deixar, fins a la quantitat que apareix com a «Material extra a les parets» a l'operació (uns 0.5 mm per a una eina Ø6, menys per a una més petita). La passada d'acabat el treu.

Aquestes trajectòries no són:

- Les files són línies rectes, no desplaçaments de la forma de la peça ni corbes d'engatge constant. Fan més elevacions i moviments en l'aire que una estratègia de desplaçament o adaptativa, i la primera fila de cada nivell talla tota l'amplada de l'eina. Per a buidatges de fons plans, [Adaptatiu](topic:manufacture) és millor desbast.
- El mànec i el portaeines de l'eina no es comproven. Un avís indica quan el tall és més profund que la longitud de les ranures.
- Els contrasalts no es veuen: el model és el que l'eina troba en baixar pel seu eix. Per desbastar un costat, doneu a una segona operació una [direcció d'eina inclinada](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- El mecanitzat de resta només coneix el material tan bé com la graella de la simulació (cel·les de 0.1 a 2 mm, segons la mida de la peça).
- En una peça gran el programa és llarg (més de 100.000 moviments per a una brida de 200 mm amb una eina Ø6) i triga un minut a calcular-se, i cada canvi a l'espai de treball torna a calcular tot el programa. Useu la fresa més gran que hi càpiga per al desbast.
- Comproveu la sortida amb el simulador de la vostra màquina abans de tallar.
