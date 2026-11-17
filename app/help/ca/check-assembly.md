---
title: Comprova un conjunt per col·lisions i moviment
summary: Troba peces que se solapen amb Col·lisió, arrossega qualsevol valor d'unió per veure el moviment, i fes recórrer una unió pel seu rang per trobar on xoquen les peces.
keywords: interferència, detecció d'interferències, col·lisió, xoc, solapament, ajust de rosca, discrepància de profunditat de rosca, cares tangents, amaga, filtre, moviment, estudi de moviment, recorregut, rang de moviment, comprova
from: 9c98db46
---

Dues comprovacions s'executen sobre les peces tal com estan col·locades: **Col·lisió** cerca material que se solapa en aquest moment, i la **comprovació de moviment** mou una unió pel seu rang i busca solapaments pel camí.

## Comprova la interferència

1. Obre o construeix un conjunt (vegeu [Construeix un conjunt amb unions](topic:build-assembly)).
2. Tria {{ui:Col·lisió}}.

La barra d'estat mostra el resultat:

- "Cap interferència entre 3 peces (… ms)." No se solapa res.
- "Interferència: Flange1 i Flange2: Solapament, 2.5 mm³." Cada parell, quin tipus de resultat és i el volum que comparteixen.

El camp **Conjunt** de l'esquerra mostra **Interferència**: "Cap", "2 resultats" (els que es mostren), o "No comprovat". Amb res seleccionat, el tauler dret llista cada resultat sota **Interferència**.

El resultat s'esborra sempre que el conjunt canvia. Torna a executar {{ui:Col·lisió}} després de moure una unió. Cada parell de peces es comprova amb tots els altres, de manera que els conjunts grans tarden més.

### Tipus de resultats

| Tipus | Significa |
|---|---|
| **Solapament** | Les peces comparteixen volum: una col·lisió real. |
| **Discrepància de profunditat de rosca** | El volum compartit és dins de la rosca d'una peça però més enllà de la de l'altra: un cargol amb rosca més profunda que el seu forat, o una tija llisa en un forat amb rosca interior. |
| **Ajust de rosca (rosques cosmètiques)** | El volum compartit és dins de les rosques de totes dues peces: un cargol en un forat roscat. Les rosques cosmètiques es dibuixen a la mida completa de la rosca, així que sempre se solapen una mica. |
| **Cares tangents** | Cap volum compartit, però cares en contacte (dins de 0.001 mm). |

Les rosques modelades (vegeu [Rosques en eixos i perforacions, dibuixades o modelades](topic:threads)) són geometria real: el que comparteixen és un **Solapament**.

### Amaga el que no necessites veure

Sota **Interferència**, **Mostra** té un quadre per a cada tipus: desmarca **Ajust de rosca** i **Cares tangents** per veure només les col·lisions que importen. **Amaga aquest parell** al costat d'un resultat amaga aquest parell de peces sigui quin sigui el tipus. Els resultats amagats es comptaran ("2 resultats amagats pels filtres"), i **Torna a mostrar els parells amagats** els recupera. La barra d'estat també compta els resultats amagats.

Els filtres es desen amb el conjunt, i cada canvi és un pas de {{key:Mod+Z}}. **Recorre una unió per col·lisions** (més avall) també els fa servir. Un conjunt amb filtres es desa com a versió 4, que les versions anteriors de PartCraft es neguen a obrir en lloc de perdre els filtres.

## Observa el moviment

1. Selecciona a la llista de l'esquerra una unió que es mogui (qualsevol excepte rígida).
2. Arrossega el control lliscant sota un dels seus valors, com **Angle (°)** o **Desplaçament (mm)**. La peça es mou mentre arrossegues.
3. Deixa anar. La nova posició es manté i es pot desfer amb {{key:Mod+Z}}.

També pots escriure un angle o un desplaçament al camp i prémer {{key:Enter}}.

Una unió en un bucle tancat (un mecanisme articulat) mou tot el bucle: el valor que arrossegues es manté i les altres unions del bucle la segueixen (vegeu [Bucles tancats](topic:build-assembly#closed-loops-linkages)).

## Recorre una unió per col·lisions

1. Selecciona una unió que es mogui.
2. Per a una unió amb diversos valors (cilíndrica, plana, ròtula, passador en ranura), tria quin en recórrer a **Comprova moviments**.
3. Tria {{ui:Comprova si el moviment provoca col·lisions}}.

PartCraft mou aquest valor per 25 posicions en 24 passos iguals, mentre els altres es queden com estan: un angle de −180° a 180° (una inclinació de −90° a 90°), una longitud des de menys fins a més la mida de la peça més gran. Informa:

- "Cap col·lisió a tot arreu per a Angle (°) de -180 a 180 (25 posicions comprovades)."
- "6 de 25 posicions col·lisionen, la primera a Angle (°) 45 (12.4 mm³)." La primera posició que col·lisiona i el solapament allà.

El botó està en gris per a unions rígides, que no es mouen. El recorregut només comprova les posicions, no el camí entre elles: una peça prima podria passar per una altra entre dos passos.

:::note
El contacte i la gravetat encara no estan implementats. Sense límits, el recorregut cobreix tot el rang; dona al valor **Límits** (vegeu [Llista de peces, vistes explosionades i peces mòbils](topic:assembly-bom-explode)) i el recorregut només cobreix aquells, de manera que una frontissa que s'obre 90° es comprova només sobre 90°.
:::

## Un estudi de moviment

**Conjunt › Moviment** mou el valor d'una unió des d'un inici fins a un final durant un temps que defineixes (velocitat constant, suavitzada, sinusoïdal, o d'anada i tornada), col·loca el conjunt a cada pas amb les seves unions i bucles tancats, i informa de quines col·lisions hi ha i de com s'acosten les peces. **Afegeix un punt** segueix el centre d'una peça o un punt que hi facis clic, i la targeta representa la seva posició, velocitat i acceleració, el valor de la unió i la separació en funció del temps; **Desa CSV** i **Desa el gràfic** ho escriuen. La velocitat i l'acceleració surten de les posicions registrades, així que un pic brusc entre passos es llegeix baix: fes servir més passos.

Després d'**Executa**, la barra **Recorre l'execució** mou el conjunt a qualsevol pas (es mostren el temps, el valor i si les peces hi col·lisionen al costat); la unió manté el seu propi valor, i **Torna al model** torna a posar el conjunt al seu lloc. La configuració de l'estudi es desa al fitxer del conjunt; els seus resultats es tornen a calcular amb **Executa**.

## Un estudi de contacte

**Conjunt › Contacte** mostra com un conjunt transmet les càrregues on les peces s'empenyen unes a les altres. Cada peça aporta els seus suports, càrregues i material del seu propi estudi de **Simulació** (una cara fixa en una peça, una força en una altra); aquí tries els parells. **Afegeix un parell**, després **Tria el costat A** i fes clic a cares d'una peça, **Tria el costat B** i fes clic a cares d'una peça diferent (un clic sobre una cara triada la treu; {{key:Esc}} o **Fet** acaben la selecció). Un parell és **Sense fricció** (les peces s'empenyen però lliscen) o **Unit** (es mantenen juntes); el factor de rigidesa defineix quant resisteix el contacte a enfonsar-se (20 és un bon punt de partida, 1000 per a un acer rígid apilat).

**Resol** executa la càrrega per passos i mostra la força de contacte, l'enfonsament més profund, el moviment més gran i la tensió més gran. Una peça sense parell queda fora i la targeta ho diu. El contacte sense fricció no subjecta una peça lateralment: dona a cada peça un suport al seu propi estudi de Simulació, o lliga-la, o els passos potser no s'estabilitzen. Els parells i la configuració es desen al fitxer del conjunt.

**Exporta el fitxer d'entrada CalculiX** escriu el mateix model com a fitxer d'entrada de CalculiX (.inp). CalculiX és un programa separat que instal·les i executes tu mateix; **Llegeix els resultats de CalculiX (.frd)** després llegeix els desplaçaments de tornada a la malla d'aquest conjunt i rebutja un fitxer fet per a una altra malla. El solucionador aquí és capaç de plasticitat però no és dinàmica explícita, i res d'aquí és una anàlisi certificada: que un enginyer revisi qualsevol cosa que importi.
