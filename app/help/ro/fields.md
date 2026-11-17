---
title: Câmpuri: forme ca distanțe
summary: Ce este un câmp (o formă stocată ca distanța până la suprafața ei), cum se construiește din primitive, operații booleene, rețele și suprafețe minime într-un script, cum devine un corp și de ce același script dă mereu aceiași octeți.
keywords: câmp, distanță cu semn, sdf, voxel, giroid, tpms, rețea, booleene, decalare, scobire în coajă, îmbinare, dual contouring, determinist, etanș, varietate, bloc
from: faab7480
---

Un **câmp** descrie o formă prin distanța de la orice punct până la suprafața ei: negativă în interior, zero pe suprafață, pozitivă în exterior. O sferă de rază 5 este "distanța până la centru minus 5". Combinarea formelor este aritmetică pe distanțe: reuniunea este cea mai mică dintre două, intersecția cea mai mare, iar scăderea unei forme din alta este cea mai mare dintre prima și minus a doua. Mărirea unei forme cu 1 mm scade 1 din distanță; un perete gol este distanța, răsfrântă.

De aceea câmpurile sunt bune pentru rețele, canale și pereți gradați: suprafața unui giroid este "suma sinusurilor este zero", iar un perete care se îngroașă de la 1 la 3 mm pe toată piesa este un număr care se schimbă de-a lungul piesei.

## De la câmp la corp

`to_body(field, h)` eșantionează câmpul pe o grilă de puncte aflate la `h` milimetri unul de altul, păstrând doar punctele aflate lângă suprafață (o grilă rară de blocuri de 8 × 8 × 8), și construiește suprafața prin **dual contouring**: un vârf pe fiecare celulă de suprafață, plasat acolo unde se întâlnesc planele suprafeței, astfel încât o muchie ascuțită rămâne ascuțită cu o precizie de un voxel. Suprafața este închisă, iar fiecare muchie este comună exact a două triunghiuri; raportul spune asta. O formă mai subțire de aproximativ trei voxeli se poate strânge, iar atunci raportul spune că corpul nu este un solid închis, în loc să o ascundă.

Dimensiunea voxelului este precizia: volumul unei sfere lată de 25 de voxeli este în câteva sutimi de procent, iar un perete este doar atât de adevărat cât sunt voxelii lui. Cu cât grila este mai rară, cu atât merge mai repede.

## Întotdeauna aceiași octeți

Un câmp nu are ceas și nici număr aleatoriu. Sinusul și cosinusul unui giroid, precum și fiecare exponențială, logaritm și putere din bibliotecă, sunt calculate din aritmetică simplă, astfel încât Node, Chrome, Firefox și Safari dau aceiași biți. Grila este parcursă într-o ordine fixă, deci același script cu aceleași intrări dă plase și fișe de date identice la octet, pe orice calculator și pe orice număr de fire de lucru. Acest lucru este testat, inclusiv un browser față de Node.

## Unde mergeți mai departe

[Scrierea unui generator](topic:write-a-generator) construiește o piesă cu câmpuri; [Biblioteca de inginerie](topic:engineering-library) o dimensionează.
