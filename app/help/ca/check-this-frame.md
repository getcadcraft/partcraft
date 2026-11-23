---
title: Comprova aquest marc
summary: Preneu les barres d'acer d'un conjunt soldat (una base, un suport, un marc de tubs i perfils), poseu el material sobre els seus peus i els suports a terra, i veureu quant s'usa cada barra i cada soldadura segons AISC 360-16 o EN 1993. Una ajuda fins que un enginyer l'hagi revisat.
keywords: marc, conjunt soldat, base, base de bomba, barra estructural, soldadura, soldadures, comprova, AISC 360, EN 1993, utilització, suport, equip, càrrega, secció buida, HSS, RHS, CHS, enginyer
from: 032e34ee
---

{{ui:Comprova aquest marc}} agafa les barres d'acer rectes d'un conjunt soldat, construeix un marc amb elles, el resol sota el pes de l'acer i de l'equip que hi poseu, i prova cada barra i cada soldadura on es troben les barres. Una execució, una taula.

:::warning
És una **ajuda fins que un enginyer l'hagi revisada**. No és un segell, i una prova superada no és un disseny. Utilitza les línies de centre de les barres tal com s'han dibuixat, considera que cada unió està soldada tot al voltant de la secció, pren la cama del cordó des de la paret de la secció (fins a 8 mm) tret que la fixeu, i no comprova cargols, plaques, plaques de base, ancoratges, encaix, tallant de bloc, fatiga ni aixecament.
:::

## Executar-la

1. Dibuixeu les barres amb {{ui:Barra estructural}} (les seccions surten de la taula de seccions).
2. Obriu {{ui:Vistes}} › {{ui:Comprova aquest marc}}. Indiqueu on se situa el marc (un **suport** a cada peu: articulat, fix o de corriola; {{ui:Suports articulats als peus}} posa un a cada extrem de barra més baix) i què hi descansa (**equip**: massa, centre de gravetat, els punts on es cargola, i un empenyiment horitzontal opcional).
3. Trieu la norma: **ASCE 7 + AISC 360-16** o **EN 1990 + EN 1993**. Fixeu el grau de l'acer i, per a AISC, la resistència del metall d'aportació (482.6 MPa és E70).
4. Premeu {{ui:Comprova}}. {{ui:Desa l'informe com a CSV}} escriu totes les taules, amb la línia de no revisat al davant.

El marc es llegeix en mil·límetres amb l'eix vertical de la peça cap amunt. Els punts de suports i d'equip s'escriuen com x y z en el mateix marc, amb z com a alçada.

Un extrem de barra que cau al mig d'una altra barra la divideix en aquell punt, igual que un peu o un punt de cargolat sobre la línia d'una barra. Un pes es reparteix entre els punts de cargolat com a cos rígid; un centre de gravetat fora dels peus, o una força d'aixecament en un peu, s'indica, mai no s'amaga.

## Què obteniu

- L'element més usat i si alguna cosa falla. Els elements que la comprovació no pot jutjar (una secció que no és a la taula, un acer sense factor a la norma) es compten i s'anomenen, mai no es compten com a aprovats.
- Una fila per barra i per grup de soldadures: quant s'usa, la comprovació i la clàusula que governa, i la combinació de càrregues que la va governar.
- Les mateixes taules a l'informe.

## Què es comprova

Seccions buides (RHS, SHS, CHS, tub) i seccions en I per a tracció, compressió, flexió, tallant i la seva interacció; soldadures de cordó i de penetració completa pel mètode vectorial elàstic. Les parets compactes només es comproven a flexió per a seccions buides; les parets esveltes s'indiquen com a no comprovades. Algunes constants s'han escrit a partir de les normes i encara no s'han comparat amb una còpia impresa; l'informe enumera cada font.

Vegeu [Marcs de seccions d'acer](topic:structural-members) per dibuixar les barres i la seva llista de talls.
