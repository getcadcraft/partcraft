---
title: Acabat 3D: paral·lel i scallop
summary: Acabeu tota la superfície corba del model amb una fresa de punta esfèrica, de morro arrodonit o plana, en línies paral·leles a qualsevol angle o en passades separades una distància fixa perquè les crestes entre elles mantinguin l'alçada que demaneu. Què garanteixen les trajectòries, i què no.
keywords: acabat 3d, acabat, paral·lel, ràster, scallop, scallop constant, cúspide, punta esfèrica, morro arrodonit, superfície, tolerància, pas, pendent, material a deixar, cilindre de caiguda, rascada
from: e1587d0a
---

Dues operacions de Manufacture tallen la **superfície sencera del model** amb l'eina mantinguda vertical (tres eixos). No necessiten selecció: treballen sobre tot el model que es pot veure des de dalt. Desbasteu primer la peça (adaptatiu o butxaca); una passada d'acabat sobre material sense tallar avisa que tallaria massa fons.

## Paral·lel

Línies rectes a través del model a l'**angle** que definiu, separades un **pas** (una fracció del diàmetre de l'eina). Cada línia segueix la superfície: la punta de l'eina és tan alta com cal perquè cap part de la fresa no baixi per sota del model, i la línia es talla més fina allà on la superfície es doblega. Amb **Zig-zag** activat, l'eina es manté baixa entre línies on pot fer-ho de forma segura (comprovat al llarg del moviment); si no, s'aixeca.

- **Tolerància**: quant pot allunyar-se un tram recte d'una línia de l'alçada veritable de la punta (la meitat s'usa com a límit al mig de cada tram). Per defecte 0.01 mm.
- **Només on la superfície sigui com a mínim … i com a màxim … (°)**: acabeu només les àrees poc inclinades o només les de molta pendent. On la superfície és fora del rang, la línia es deixa de banda i l'eina s'aixeca.
- **Material a deixar**: el model desplaçat per aquesta distància (la fresa augmentada en aquesta mesura: exacte per a les eines de punta esfèrica i de morro arrodonit; una eina plana deixa almenys aquesta quantitat).
- **Fons**: no es talla res per sota d'aquesta z.

## Scallop

Passades que mantenen una distància constant sobre la superfície entre elles, de manera que la cresta (el scallop) que queda entre dues passades veïnes té l'**alçada** que demaneu. La distància surt de l'alçada i del radi de la bola: s = 2·√(2·R·h − h²), per exemple uns 0.69 mm entre passades per a una bola Ø6 i una cresta de 0.02 mm. Una eina de morro arrodonit usa el radi de la seva cantonada. Una fresa plana de punta es refusa: no té cap cresta que dimensionar.

Les passades comencen **des de la vora del model, cap a dins** o **des de la seva part superior, cap avall**. Són contorns de la distància sobre la superfície (no de l'alçada), de manera que en una pendent estan junts en planta i en un pla estan separats. La distància es mesura en una graella sobre la superfície i és bona fins a un 1 %; l'alçada de la cresta és exacta on la superfície és plana o suaument corbada, i aproximada on es corba ràpidament. **Concordança** manté el costat més alt de la superfície a la dreta de la fresa.

## Com de bones són les trajectòries

Què comproven les proves, amb fórmules tancades o amb una cerca independent de força bruta sobre la petjada de la fresa:

- L'alçada de la punta sota l'eina és exacta per a una eina de bola, de morro arrodonit i plana sobre cares, arestes i cantonades de la malla, i mai no és per sobre de l'alçada veritable; per a línies paral·leles la trajectòria es manté dins de la tolerància, sense cap rascada més profunda que això.
- Les longituds de trajectòria en un pla inclinat coincideixen amb la fórmula tancada; les passades scallop en un pla estan a la distància demanada i la cresta entre elles surt a l'alçada demanada.
- La simulació del material no mostra cap rascada després d'una passada i mostra les crestes que queden.

El que no són aquestes trajectòries: són passades d'acabat bàsiques, no tot el que ofereix un sistema de producció.

- Encara no implementat: línia d'aigua (z constant), neteja de lapis i de cantonades, passades radials i espirals, projecció d'una corba sobre la superfície, detecció de zones planes, mecanitzat de restes, comprovacions de col·lisió del portaeines i del mànec, i qualsevol inclinació de l'eina.
- El centre de l'eina es manté sobre el model: les trajectòries s'aturen a la vora del model en lloc de sortir-ne, de manera que una paret vertical just a la vora no s'acaba fins a la seva base.
- Els socaires no es veuen (la superfície és el que l'eina troba des de dalt).
- El model és la malla del nucli, de manera que les trajectòries segueixen la malla (la seva tolerància de corda és d'uns 0.0002 de la diagonal de la peça), no la superfície exacta.
- Acabar un model gran amb una tolerància fina fa un programa llarg amb molts moviments curts. Comproveu la sortida al simulador propi de la vostra màquina abans de tallar.
