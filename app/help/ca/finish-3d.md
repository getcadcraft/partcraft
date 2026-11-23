---
title: Acabat 3D: paral·lel i festó
summary: Acabeu la superfície corba de tot el model amb una fresa de punta esfèrica, arrodonida o plana, en línies paral·leles a qualsevol angle o en passades separades una distància fixada perquè les crestes entre elles tinguin l'altura que demaneu. Què garanteixen les trajectòries i què no.
keywords: acabat 3d, acabat, paral·lel, trama, festó, festó constant, cresta, punta esfèrica, punta arrodonida, superfície, tolerància, pas lateral, pendent, material a deixar, fresa de caiguda, rascada
from: 942d2341
---

Dues operacions de Fabricació tallen la **superfície de tot el model** amb l'eina mantinguda en vertical (tres eixos). No demanen cap selecció: treballen sobre tot el model que es pot veure des de dalt. Desbasteu primer la peça (adaptatiu o buidatge); una passada d'acabat sobre material sense tallar avisa que tallaria massa profund.

## Paral·lel

Línies rectes sobre el model a l'**angle** que definiu, separades un **pas lateral** (una fracció del diàmetre de l'eina). Cada línia segueix la superfície: la punta de l'eina és tan alta com cal perquè cap part del tallador no baixi per sota del model, i la línia es talla més fina on la superfície es doblega. Amb **Zig-zag** activat, l'eina es manté baixada entre línies quan pot fer-ho de manera segura (es comprova al llarg del moviment); en cas contrari, s'aixeca.

- **Tolerància**: quant pot allunyar-se un tram recte d'una línia de l'altura real de la punta (se n'usa la meitat com a límit al mig de cada tram). Per defecte, 0.01 mm.
- **Només on la superfície sigui com a mínim … i com a màxim … (°)**: acabeu només les zones poc inclinades o només les dempeus. On la superfície és fora del rang, la línia se n'omet i l'eina s'aixeca.
- **Material a deixar**: el model desplaçat per aquesta distància (el tallador es fa més gran en aquesta quantitat: exacte per a les eines de punta esfèrica i arrodonida; una eina de punta plana deixa com a mínim aquesta quantitat).
- **Fons**: no es talla res per sota d'aquesta z.

## Festó

Passades que mantenen una distància constant sobre la superfície entre si, de manera que la cresta (el festó) que queda entre dues passades veïnes té l'**altura** que demaneu. La distància es deriva de l'altura i del radi de la bola: s = 2·√(2·R·h − h²); per exemple, unes 0.69 mm entre passades per a una bola Ø6 i una cresta de 0.02 mm. Una eina de punta arrodonida fa servir el radi de la cantonada. Es rebutja una fresa de punta plana: no té cresta que dimensionar.

Les passades comencen **des de la vora del model, cap a dins** o **des de la part superior, cap avall**. Són contorns de la distància sobre la superfície (no d'altura), de manera que en un pendent estan juntes en planta i en un pla estan molt separades. La distància es mesura en una graella sobre la superfície i té una precisió d'uns 1 %; l'altura de la cresta és exacta on la superfície és plana o suaument corbada i aproximada on es corba ràpidament. **Fresatge en concordança** manté el costat més alt de la superfície a la dreta del tallador.

## Com de bones són les trajectòries

Què comproven les proves, amb fórmules tancades o amb una cerca independent per força bruta de la petjada del tallador:

- L'altura de la punta sota l'eina és exacta per a una eina de punta esfèrica, arrodonida i plana sobre cares, arestes i cantonades de la malla, i mai no és per sobre de l'altura real; per a les línies paral·leles, la trajectòria es manté dins de la tolerància, sense cap rascada més profunda que això.
- Les longituds de trajectòria sobre un pla inclinat coincideixen amb la fórmula tancada; les passades de festó sobre un pla estan separades la distància demanada i la cresta entre elles surt a l'altura demanada.
- La simulació del material no mostra cap rascada després d'una passada i mostra les crestes que queden.

Aquestes trajectòries no són tot el que pot oferir un sistema de producció: són passades d'acabat bàsiques.

- Encara no implementat: acabat per línia d'aigua (z constant), neteja a llapis i de cantonades, passades radials i en espiral, projecció d'una corba sobre la superfície, detecció de zones planes, i comprovacions de col·lisió del portaeines i del mànec. El desbast i el mecanitzat de resta són operacions pròpies ([Desbast 3D i mecanitzat de resta](topic:rough-3d)); una eina inclinada és [acabat de 5 eixos](topic:multi-axis#5-axis-finishing).
- El centre de l'eina es manté sobre el model: les trajectòries s'aturen a la vora del model en lloc de sortir-ne, de manera que una paret vertical just a la vora no s'acaba fins al peu.
- Els contrasalts no es veuen (la superfície és el que l'eina troba des de dalt).
- El model és la malla del nucli, de manera que les trajectòries segueixen la malla (la seva tolerància de corda és d'uns 0.0002 de la diagonal de la peça), no la superfície exacta.
- Acabar un model gran amb una tolerància fina fa un programa llarg, amb molts moviments curts. Comproveu la sortida amb el simulador de la vostra màquina abans de tallar.
