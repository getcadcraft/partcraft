---
title: Xapa: pestanyes i el desplegament pla
summary: Comenceu una peça de xapa des d'un croquis (una placa plana o un perfil doblegat), definiu el seu gruix, el radi de doblec i el factor K una sola vegada, doblegueu pestanyes des de les seves arestes amb alleujaments de doblec i desplegueu-la plana com a DXF per tallar.
keywords: desplegament pla, desplegar, desenvolupament, longitud desenvolupada, marge de doblec, línia de doblec, dxf per a làser, tall làser, xapa, pestanya base, pestanya d'aresta, pestanya, doblec, radi de doblec, factor K, k-factor, gruix, calibre, alleujament, alleujament de doblec, canal, suport, carcassa, xapa doblegada
from: 144bd0f6
---

:::note
**Encara no implementat en aquesta versió.** La xapa necessita un nucli de geometria exacte, que aquesta versió de PartCraft no té: construeix totes les peces amb el nucli de malla. [Què encara no està implementat](topic:not-built-yet) diu què fer en lloc d'això. La resta d'aquesta pàgina descriu com funciona amb un nucli exacte.
:::

Les peces de xapa comencen amb una **pestanya base**. Defineix la xapa per a tota la peça: el seu **gruix**, el **radi de doblec interior** i el **factor K**. Cada **pestanya d'aresta** posterior es doblega amb aquests mateixos números, així que la peça continua sent una sola xapa que es pot desplegar. Tots dos necessiten el **nucli exacte** (vegeu [El nucli de malla](topic:solid-kernels)).

## Comença amb una pestanya base

1. Dibuixeu un croquis. Useu un **perfil tancat** per a una placa plana (un rectangle, o qualsevol contorn tancat amb forats). Useu **una cadena oberta de línies** per a una xapa doblegada, com una L, una U o una Z dibuixada com a vista de cantell de la xapa.
2. Seleccioneu el croquis a l'historial d'operacions.
3. Obriu {{ui:Més}} al grup Operacions i trieu {{ui:Pestanya base}}.

Al panell de la dreta:

- **Gruix (mm)** és el calibre de la xapa.
- **Radi de doblec (mm)** és el radi interior de cada doblec. 0 dóna una cantonada interior viva; l'exterior encara gira amb un radi d'un gruix.
- **Factor K** indica on és la capa neutra dins de la xapa, de 0 (la cara interior) a 0.5 (el mig). Decideix quant de llarga és la xapa quan s'estén plana. 0.44 és el valor per defecte; el vostre taller o proveïdor de material us en pot donar el seu.
- **Profunditat (mm)** és fins on surt un perfil doblegat del pla del croquis. Una placa l'ignora.
- **Gruix fora dels doblecs**: un perfil obert és una cara de la xapa. Per defecte el gruix va a la cara interior del primer doblec, així que les línies que heu dibuixat són l'exterior del canal. Marqueu-ho per posar les línies a l'interior. El resultat és el mateix des de l'extrem que hàgiu dibuixat.

Cada cantonada d'una cadena oberta es converteix en un doblec. Una línia massa curta per contenir els seus doblecs ho diu, amb la longitud que necessita.

## Doblega una pestanya d'aresta

1. Feu clic a una aresta recta de la cara superior o inferior de la xapa (les arestes llargues, no les primes).
2. Trieu {{ui:Més}} › {{ui:Pestanya d'aresta}}. Si no n'heu triat cap, PartCraft espera que feu clic en una; Esc cancel·la.

La pestanya es doblega des de la cara d'aquella aresta al voltant del radi interior de la xapa, i després és recta. Al panell:

- **Angle (°)** és quant es doblega, d'1 a 180. 90 és una pestanya quadrada.
- **Longitud (mm)** és la cama recta després del doblec.
- **Doblega a l'altra banda** la doblega des de l'altra cara (cap avall en lloc de cap amunt).
- **Desfasament a l'inici** i **Desfasament al final** acurten la pestanya des de cada extrem de l'aresta.
- **Alleujament de doblec**: quan un extrem té un desfasament, es fa una ranura a la xapa al costat perquè el doblec no esquinci el metall allà. **Amplada de l'alleujament** defineix l'amplada de la ranura; la seva profunditat és el radi de doblec més el gruix. Trieu **Cap** per deixar la cantonada sense tallar.

Per canviar més tard l'aresta, premeu {{ui:Tria}} al panell i feu clic en una altra.

:::tip
Useu paràmetres per al gruix i el radi (vegeu [Paràmetres i equacions](topic:parameters)) perquè un canvi de calibre actualitzi totes les pestanyes d'una vegada.
:::

## Estén-la plana

Els dos panells acaben amb **Desplegament pla**. Premeu {{ui:Estén pla}}:

- Una previsualització mostra la xapa desplegada, amb la línia central de cada doblec a traços.
- **Mida** i **Àrea** són les del full pla.
- Cada doblec es llista amb la seva direcció (**amunt** o **avall**, vist des del costat del croquis de la pestanya base), angle i radi interior.

Cada doblec pren la longitud de la capa neutra de la xapa en ell, el **marge de doblec**: angle (en radians) × (radi interior + factor K × gruix). Així, un doblec de 90° d'una xapa de 2 mm amb radi de 2 mm i factor K 0.44 afegeix 4.52 mm de xapa plana.

En una placa plana, els forats, els talls i els alleujaments de doblec es mostren al pla exactament on són, inclosos els forats que passen per una pestanya.

Per tallar-ne molts, premeu {{ui:Imbrica en fulls…}} sota el desplegament pla: vegeu [Imbrica peces planes en fulls](topic:nest-flat-parts). Una pestanya base doblegada es desplega com un sol rectangle: la seva longitud desenvolupada × la seva profunditat, amb una línia de doblec per cantonada.

{{ui:Desa DXF}} desa el desplegament pla per a un làser, una punxonadora o un jet d'aigua, en mm:

- el contorn a la capa **OUTLINE**, com a línies, arcs i cercles;
- les línies de doblec a la capa **BEND**, a traços;
- una nota a cada doblec a la capa **BEND_NOTES**, com "UP 90° R2".

Si canvieu qualsevol cosa, el pla desapareix; premeu {{ui:Estén pla}} de nou per obtenir-ne un de nou.

:::note
Comproveu el factor K amb el vostre taller abans de tallar: la longitud del pla en depèn, i varia segons el material, el gruix i les eines.
:::

## Missatges

- **La xapa necessita una pestanya base abans** — s'ha afegit una pestanya d'aresta abans de cap pestanya base. Mogueu-la per sota d'una o afegiu primer una pestanya base.
- **Una pestanya d'aresta necessita una aresta recta** — les pestanyes només es doblen al llarg de línies; les arestes corbes encara no en poden tenir.
- **Aquesta aresta no és en una cara del gruix de la xapa** — l'aresta pertany a una cara que no és la superior ni la inferior de la xapa (per exemple, la paret d'un forat). Trieu una aresta de la cara superior o inferior.
- **Els desfasaments no deixen res de l'aresta** — els dos desfasaments sumen tota l'aresta o més.
- **Les pestanyes d'aresta sobre una pestanya base doblegada encara no es poden estendre planes** — començueu amb una placa plana i doblegueu-ho tot amb pestanyes d'aresta, que es desplegaran.
- **Els talls i els forats fets després d'una pestanya base doblegada encara no es mostren al seu pla** — el pla d'un perfil doblegat és només el seu rectangle desenvolupat.
