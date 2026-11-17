---
title: Camps: formes com a distàncies
summary: Què és un camp (una forma guardada com la distància a la seva superfície), com construir-ne un a partir de primitives, operacions booleanes, reticles i superfícies mínimes en un script, com esdevé un cos, i per què el mateix script dona sempre els mateixos bytes.
keywords: camp, distància signada, sdf, vòxel, giroide, tpms, reticle, booleà, desfasament, buida, fusió, contorn dual, determinista, estanc, variedat, bloc
from: faab7480
---

Un **camp** descriu una forma per la distància de qualsevol punt a la seva superfície: negativa a dins, zero a la superfície, positiva a fora. Una esfera de radi 5 és "la distància al centre menys 5". Combinar formes és aritmètica sobre distàncies: la unió és la més petita de les dues, la intersecció la més gran, i restar una forma d'una altra és la més gran entre la primera i la segona negada. Fer créixer una forma 1 mm resta 1 a la distància; una paret buida és la distància, plegada.

Per això els camps són bons per a reticles, canals i murs graduats: la superfície d'un giroide és "la suma de sinus és zero", i un mur que s'engruixeix d'1 a 3 mm a través de la peça és un nombre que canvia dins de la peça.

## Del camp al cos

`to_body(field, h)` pren mostres del camp en una graella de punts separats `h` mil·límetres, i conserva només els punts a prop de la superfície (una graella dispersa de blocs de 8 × 8 × 8), i construeix la superfície per **contorn dual**: un vèrtex per cel·la de superfície, col·locat on es troben els plans de la superfície, de manera que una aresta viva es manté viva dins d'un vòxel. La superfície és tancada i cada aresta és compartida exactament per dos triangles; l'informe ho indica. Una operació més fina que uns tres vòxels pot estrènyer-se, i aleshores l'informe diu que el cos no és un sòlid tancat en lloc d'amagar-ho.

La mida del vòxel és la precisió: el volum d'una esfera de 25 vòxels de costat a costat és dins d'unes centèsimes d'un per cent, i un mur només és tan exacte com els seus vòxels. Com més gruixuda és la graella, més ràpid va.

## Sempre els mateixos bytes

Un camp no té rellotge ni nombre aleatori. El sinus i el cosinus d'un giroide, i cada exponencial, logaritme i potència de la biblioteca, es calculen amb aritmètica senzilla perquè Node, Chrome, Firefox i Safari donin els mateixos bits; la graella es recorre en un ordre fix, de manera que el mateix script amb les mateixes entrades dona malles i fulls de dades idèntics byte a byte, en qualsevol ordinador i amb qualsevol nombre de fils de treball. Això es comprova, inclosa una comparació entre el navegador i Node.

## Què fer a continuació

[Escriu un generador](topic:write-a-generator) construeix una peça amb camps; [La biblioteca d'enginyeria](topic:engineering-library) en dimensiona la mida.
