---
title: Tornejat en un torn
summary: Refrentar, desbastar, acabar, ranurar, separar, roscar i perforar una peça torneada, a partir del contorn que fa la peça en girar. Eines de torn, avanços per volta, postprocessadors de torn i què no s'ha provat.
keywords: tornejat, torn, tornejar, refrentat, desbast, acabat, ranurar, ranura, separar, tallar, rosca, roscar, g32, g33, g96, velocitat de superfície constant, css, radi de la punta, plaqueta, barra, mandril, diàmetre, avanç per volta, g71, g76
from: d8cc53b0
---

Fabricació té set operacions per a un torn. Funcionen amb qualsevol peça: el que es talla és el **contorn que fa la peça en girar** al voltant del centre del material en brut, de manera que una peça que no és rodona es torneja fins a la forma rodona que la conté.

**Res d'això no s'ha executat en un torn.** Les trajectòries es comproven amb la geometria mitjançant les proves; els dos postprocessadors de torn segueixen els codis documentats dels controls. Proveu primer un programa al simulador del vostre control i a l'aire.

## Preparació

A la pestanya **Preparació**:

- **Eix de l'eina** és l'eix del husos, la Z del torn. La part davantera de la peça és a +Z; el mandril subjecta l'altre extrem.
- **Material en brut**: trieu {{ui:Cilindre}}, la barra. El seu marge superior és el que treu el tall de refrentat.
- **Origen de treball**: un centre a la part superior del material en brut o del model posa Z0 a la cara davantera, que és el lloc habitual.
- **Control**: {{ui:Torn estil Fanuc (.nc)}} o {{ui:Torn de LinuxCNC (.ngc)}}. Un postprocessador de fresatge rebutja un programa de torn i ho indica.
- **Velocitat màxima del husos**: el límit sota el qual es manté la velocitat de superfície.

{{ui:Més}} a la barra d'eines de Fabricació enumera les set operacions de torn a la part superior de la pestanya **Operacions**. La primera que afegiu porta la seva pròpia eina: una **plaqueta de torn** (radi de la punta, angle de la plaqueta, angle de la vora de tall) o una **fulla de ranurar** (amplada, radi de cantonada, fins on arriba). Canvieu-les a la pestanya **Eines**. Els avanços són per volta, i la velocitat és una velocitat de superfície en m/min que el control manté quan canvia el diàmetre; doneu a una eina les seves pròpies rpm per fixar la velocitat en lloc d'això.

## Les operacions

| Operació | Què fa |
|---|---|
| {{ui:Cara}} | Refrenta la part davantera de la barra fins a la peça, un pas de profunditat cada vegada, de fora cap a dins, fins just passat el centre. |
| {{ui:Desbast}} | Passades al llarg de Z separades una **profunditat de tall**, fins al contorn més el **material a deixar**; després, una vegada al llarg del contorn per treure els esglaons. Una vall entre dos ressalts s'entra amb una entrada en vertical d'una profunditat de tall. |
| {{ui:Acabat}} | Una passada al llarg del contorn a una fracció de l'avanç de l'eina. |
| {{ui:Ranura}} | Entra la fulla costat per costat on pugui prendre més que el límit de material que encara hi ha: les ranures que la plaqueta de torn no podia assolir. **Des de / Fins a Z** la restringeix. |
| {{ui:Separa}} | Talla la peça just darrere de la seva cara posterior, fins una mica més enllà del centre, amb picotejats si n'indiqueu un. |
| {{ui:Rosca}} | Una rosca exterior: diàmetre major, pas, longitud, nombre de passades. Profunditat 0 vol dir 0.6134 × pas (una rosca de 60°). Cada passada treu la mateixa àrea de verinada; les passades de repàs repeteixen l'última. |
| {{ui:Perforació}} | Una broca sobre la línia de centre fins a una profunditat, amb picotejats. |

## Com es manté l'eina fora de la peça

La plaqueta es tracta pel que és: el cercle de la seva punta i, darrere, la vora posterior, una línia recta l'angle de la qual és 180° menys l'angle de la vora de tall i l'angle de la plaqueta. Aquesta forma es baixa sobre el contorn en cada punt al llarg de Z, i la trajectòria és on es posa. Per tant:

- **El radi de la punta ja és a la trajectòria.** Els postprocessadors no escriuen `G41` ni `G42`; les coordenades són el punt programat de l'eina (la cantonada del quadrat al voltant de la punta).
- La plaqueta **no pot seguir una paret més dreta que la seva vora posterior**. Una ranura darrere d'un ressalt es deixa en pau, i l'operació d'acabat indica quant del contorn no ha pogut assolir. Una operació de {{ui:Ranura}} la treu.
- El material en brut es segueix al llarg de Z després de cada tall, de manera que el desbast no talla aire, la ranura troba el que queda, i cada operació mostra el volum que ha tret i si ha entrat a la peça.

## Límits

- **Només tornejat exterior**: sense barra d'escariar, sense ranures ni rosques interiors, sense ranures de cara.
- Un sol husos, la peça subjectada a −Z. Sense subhusos, sense eines vives, sense eix C ni Y, sense lluneta fixa ni moviments del contrapunt.
- Les trajectòries són moviments rectes: les corbes són línies curtes dins de la tolerància (sense `G2`/`G3`), i el desbast i el roscat s'escriuen passada a passada (sense cicles `G71` ni `G76`).
- El roscat són passades rectes amb una sortida recta al final; doneu a la rosca una ranura d'alleujament. La rosca no es mostra al material en brut.
- La perforació al centre no canvia el model del material en brut.
- El portaeines, la torreta i el mandril no es comproven. Fixeu **Atura a Z** per mantenir l'eina lluny de les mordasses.
- Els avanços i les velocitats són valors de partida, igual que per al fresatge.
