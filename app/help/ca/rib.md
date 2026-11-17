---
title: Nervadures i escaires
summary: Reforça una peça amb una nervadura dibuixada com una sola línia: s'omple des de la línia fins a les parets, amb un gruix fix a través del pla del croquis, al costat que triïs.
keywords: nervadura, escaire, ànima, reforç, contrafort, suport, subjecció, paret fina, reforça
from: 5c218881
---

:::note
**Encara no implementat en aquesta versió.** La nervadura necessita un nucli de geometria exacta, que aquesta versió de PartCraft no té: construeix totes les peces amb el nucli de malla. [Què encara no està implementat](topic:not-built-yet) explica què fer en lloc d'això. La resta d'aquesta pàgina descriu com funciona amb un nucli exacte.
:::

Una **nervadura** (o escaire) és una paret fina que reforça una peça, com el triangle de dins de la cantonada d'un suport en L. Només dibuixes la seva vora lliure: PartCraft omple l'espai entre aquesta línia i les parets. Necessita el **nucli exacte** (vegeu [El nucli de malla](topic:solid-kernels)).

## Afegeix una nervadura

1. Fes un pla que passi pel mig d'on va la nervadura (per a un suport en L de 40 de profunditat, un pla a 20 davant del seu croquis: vegeu [Plans, eixos i punts de referència](topic:reference-geometry)).
2. Fes un croquis sobre ell **una línia** de paret a paret, o unes quantes línies seguides per a una vora de nervadura doblegada. La línia pot quedar-se curta de les parets: els seus extrems es prolonguen fins que les toquen.
3. Selecciona el croquis i trieu {{ui:Més}} › {{ui:Nervadura}}.

La nervadura s'omple des de la línia fins a les parets, pel costat cap al mig de la peça, de manera que un escaire va a la cantonada interior. Si aquest costat és obert i l'altre és tancat, PartCraft ho inverteix per tu i ho indica.

## Configuració

- **Gruix (mm)** és el gruix de la nervadura a través del pla del croquis. Pot ser controlat per un paràmetre.
- **Gruix** (l'opció sota seu): **Centrada sobre el pla del croquis**, **Davant del pla** (al llarg de la seva normal) o **Darrere del pla**.
- **Inverteix** omple l'altre costat de la línia.

## Missatges

- **En aquest costat la vora de la nervadura mai no toca el cos**: no es tanca res a l'espai d'aquest costat: marca o desmarca **Inverteix**, o mou la línia perquè les parets la delimitin.
- **Una nervadura necessita una sola cadena oberta de línies al seu croquis**: el croquis té una forma tancada, un arc o una spline, o línies que no s'uneixen de punta a punta.
- **La vora de la nervadura passa per dins del cos en aquest punt**: la línia està dins del sòlid; dibuixa-la a l'espai obert entre les parets.
