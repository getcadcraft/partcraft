---
title: Revolució d'una peça torneada
summary: Dibuixa mig perfil al costat d'una línia de centre, fes-lo girar per obtenir una peça rodona, tria l'eix i l'angle, i usa una revolució de tall per als solcs.
keywords: revolució, cos de revolució, tall de revolució, peça torneada, torn, eix, línia de centre, solc, angle, tall de revolució
from: 593b6929
---

{{ui:Revolució}} fa girar un perfil al voltant d'un eix, com una peça feta en un torn: eixos, politges, brides, boles. {{ui:Tall de revolució}} (al menú {{ui:Més}} del grup d'Operacions) fa girar un perfil per treure material, per a solcs i rebaixos.

## Fes la revolució d'un eix escalonat

1. Fes un croquis sobre el **pla Front**.
2. Prem {{key:N}} per a {{ui:Línia de centre}}. Comença a l'origen i fes clic en un punt dret, per exemple a 100 mm. Aquest és l'eix. És discontínu: la geometria de construcció no forma part del perfil.
3. Prem {{key:L}} per a Línia. Dibuixa el **mig** perfil per sobre de la línia de centre com un sol bucle tancat: comença a la línia de centre, puja, fes un escaló, i torna a baixar a la línia de centre, i després al llarg d'ella fins al començament. Els seus extrems han de tocar-se: el bucle ha de estar tancat.
4. Acota els radis (alçades per sobre de la línia de centre) i les longituds. Una alçada de 10 per sobre de la línia de centre fa un diàmetre de 20.
5. Trieu {{ui:Surt}}.
6. Trieu {{ui:Revolució}}. L'eix apareix, una volta completa.

El perfil ha de quedar a un sol costat de l'eix. Si el creua: "El perfil creua l'eix. Mantingueu-lo a un sol costat de la línia de centre." Una aresta del perfil pot estar sobre l'eix.

## Configuració

| Configuració | Què fa | Per defecte |
|---|---|---|
| **Operació** | Cos (afegeix material), Tall (treu material), Intersecció (manté la superposició) o Cos nou | Cos per a {{ui:Revolució}}, Tall per a {{ui:Més}} › {{ui:Tall de revolució}} |
| **Angle (°)** | Quant ha de girar, de just més de 0 fins a 360 | 360 |
| **Eix** | La primera línia de centre, o qualsevol línia o línia de centre del croquis, llistada com "Línia de centre 1 (l1)" o "Línia 3 (l3)" | La primera línia de centre |

Un angle parcial fa una falca, girada des del pla del croquis en un sentit.

Si el croquis no té línia de centre i deixes **Eix** a la primera línia de centre: "Dibuixa una línia de centre (una línia de construcció) al croquis per fer la revolució al seu voltant." També pots escollir com a eix una línia sòlida del perfil.

## Fes un solc

1. Amb l'eix ja construït, obre un croquis nou sobre el **pla Front** (el mateix pla que el croquis de l'eix).
2. Dibuixa una línia de centre al llarg del mateix eix: comença a l'origen i mantén-la horitzontal perquè rebi una H, o escriu-la amb **Afegeix per coordenades** (per exemple, de `0, 0` a `100, 0`). Un croquis nou no es pot enganxar a les línies d'un altre croquis.
3. Dibuixa un petit rectangle tancat que se solapi amb la vora de l'eix on va el solc.
4. Trieu {{ui:Surt}}, i després {{ui:Més}} › {{ui:Tall de revolució}}.

## Cares de revolució en conjunts

Una revolució té un eix que altres operacions i conjunts poden usar:

- una matriu **circular** usa per defecte l'eix de l'última revolució (vegeu [Operacions de matriu i de simetria](topic:patterns-mirror));
- en un conjunt, una unió entre cares fetes per revolucions comença com una unió **rotacional**, i **Centra sobre** ofereix "Eix de Revolve1" (vegeu [Construir un conjunt](topic:build-assembly)).

## Corbes veritables i facetes

PartCraft construeix una revolució amb el nucli de malla (el xip de la barra d'estat diu "Nucli de malla"): les formes rodones són cares planes, 64 per volta per defecte, i els volums són una mica inferiors al valor real (uns 0,16 % a 64). La vista i les exportacions STL, 3MF i STEP estan fetes d'aquestes facetes: posa **Corbes** (fes clic a l'espai buit, i després al panell de la dreta) a Fina (128) o Molt fina (256) per obtenir-ne de més llises. Els cilindres, cons i tors veritables necessiten un nucli exacte: encara no implementat en aquesta versió. Vegeu [El nucli de malla](topic:solid-kernels).
