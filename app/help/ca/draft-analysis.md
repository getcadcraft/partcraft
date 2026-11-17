---
title: Comprova el desmotllament per a motllatge i fosa
summary: Acoloreix la peça segons el seu angle de desmotllament respecte a la direcció d'extracció d'un motlle, i veu quines cares es desemmotllen, quines necessiten més desmotllament i quines es desemmotllen des de l'altra meitat, amb la part de l'àrea de cadascuna.
keywords: anàlisi de desmotllament, desmotllament, conicitat, motlle, fosa a pressió, injecció de plàstic, direcció d'extracció, línia de partició, contrasortida, desemmotllament, comprova el desmotllament
from: 6a106f83
---

Les peces fetes en un motlle, en una matriu o en una fosa en sorra necessiten **desmotllament**: parets una mica inclinades perquè la peça llisqui fora. **L'anàlisi de desmotllament** acoloreix cada cara segons quant s'inclina allunyant-se de la direcció en què s'obre el motlle (la **direcció d'extracció**).

## Activa-la

1. A l'espai de treball Disseny, obriu {{ui:Vistes}} i trieu {{ui:Anàlisi de desmotllament}}.
2. Definiu la **Direcció d'extracció**: la direcció en què s'obre el motlle, al llarg de X, Y o Z en qualsevol sentit, o bé **Perpendicular a una cara triada**: premeu {{ui:Tria una cara}} i feu clic en una cara plana de la peça.
3. Definiu el **Desmotllament mínim**, en graus: la inclinació mínima que necessita el vostre procés (sovint d'1° a 3°).

La peça es pinta així:

| Color | Significa |
|---|---|
| Verd: **Desmotllament positiu** | Inclinada cap a la direcció d'extracció com a mínim el mínim: es desemmotlla des d'aquesta meitat del motlle |
| Ocre: **Cal desmotllament** | Dins del mínim en qualsevol sentit, com una paret vertical: afegiu desmotllament aquí |
| Vermell: **Desmotllament negatiu** | Inclinada allunyant-se de la direcció d'extracció com a mínim el mínim: es desemmotlla des de l'altra meitat del motlle, o és una contrasortida si la peça ha de sortir d'una sola meitat |

La part de l'àrea superficial de la peça que correspon a cada classe es mostra al costat. **Inverteix la direcció** mira des de l'altra meitat del motlle: el verd i el vermell s'intercanvien.

Les cares corbes es jutgen punt per punt, de manera que un cilindre travessat per la direcció d'extracció mostra una banda que necessita desmotllament als seus costats.

Els colors segueixen la peça a mesura que la canvieu. {{key:Esc}} o {{ui:Tanca}} apaga l'anàlisi; no es desa res a la peça.

:::tip
Per afegir desmotllament, useu l'operació {{ui:Desmotllament}} a les cares ocre (vegeu [Escombrat, loft i desmotllament](topic:sweep-loft-draft)), i després torneu a comprovar.
:::
