---
title: Gardar e reutilizar sobrantes
summary: Despois dun encaixe, o que sobra de cada placa convértese nun retallo numerado nunha lista de stock; o seguinte encaixe usa primeiro os retallos e despois as placas completas.
keywords: encaixe, sobrante, retallo, stock, sobra, placa, folla, reutilizar, material, espesor, CSV
from: 7a68d4b8
---

Ao encaixar pezas en placas, a sobra útil de cada placa (non os anacos finos) pódese gardar como **retallo**: un contorno numerado (R-0001, R-0002 …) co material, o espesor, o seu tamaño e o traballo de onde procede. A lista gárdase co ficheiro e pódese gardar como CSV.

## Reutilizalos

Indique o **material** e o **espesor**, deixe activado {{ui:Usar primeiro os retallos}} e encaixe. Os retallos do mesmo material e espesor pruébanse do máis pequeno ao máis grande; as pezas que caben van neles, dentro do contorno propio do retallo e separadas do seu bordo; o que non cabe vai en placas novas. O informe do traballo indica que retallos se usaron e que sobrou. Con {{ui:Gardar os sobrantes como retallos}} activado, {{ui:Engadir este traballo ao stock}} escribe o resultado na lista de stock: un retallo usado queda marcado como **Usado** (co traballo) e non se ofrece de novo; o que sobra del convértese nun retallo novo que recorda a súa orixe.

## Que conta como retallo

A sobra mídese coa separación definida (ningunha peza queda máis preto que iso dun corte). As tiras máis estreitas que a vintena parte da placa e as pezas menores do 2 % dela son desperdicio; cambie ambos límites se o seu taller conserva pezas máis pequenas. Os furados dentro das pezas son das propias pezas e non se gardan. Un rolo non ten retallos.

## No debuxo

O DXF dun encaixe debuxa o contorno de cada retallo na capa REMNANTS co seu número no centro, para poder marcar as pezas ao cortalas.

Aínda non dispoñible: dirección da fibra dun retallo, folla de códigos de barras ou etiquetas, retallos de rolos, stock compartido entre proxectos.
