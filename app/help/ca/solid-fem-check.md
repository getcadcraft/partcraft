---
title: Solid FEM: una comprovació de tensió d'una peça
summary: Activar el complement Solid FEM, fer la malla d'una peça, triar cares fixes i una càrrega a la vista 3D, resoldre i llegir el desplaçament i la tensió de von Mises sobre el model.
keywords: solid fem, elements finits, fea, tensió, von mises, desplaçament, cara fixa, càrrega, pressió, gravetat, freqüència natural, forma modal, malla, complement
from: 8b7e6ba2
---

## Què fareu

Comprovar una peça sòlida sota una càrrega: on es mou i on és més alta la tensió. L'estudi és lineal i elàstic, de manera que és una ajuda per a la comprovació; el vostre enginyer revisa els resultats.

## Passos

1. Trieu {{ui:Configuració}} › {{ui:Complements}} i activeu {{ui:Solid FEM}} (està desactivat fins que ho feu). Obriu la pestanya {{ui:Solid FEM}} del tauler de la dreta.
2. Sota {{ui:Material}}, trieu-ne un, o {{ui:Personalitzat}} i escriviu el coeficient de Poisson, la densitat i el límit elàstic.
3. Premeu {{ui:Afegeix cares fixes}}, feu clic a les cares que estan subjectes a la vista 3D, i després premeu {{ui:Fet}}.
4. Afegiu una càrrega amb {{ui:Afegeix força}}, {{ui:Afegeix pressió}} o {{ui:Afegeix gravetat}}, i trieu-ne les cares de la mateixa manera.
5. Premeu {{ui:Fes la malla de la peça}} i després {{ui:Resol}}. Trieu primer {{ui:Freqüències naturals}} sota {{ui:Estudi}} si voleu les freqüències.
6. Llegiu {{ui:Resultats}} i {{ui:Avisos}}, i després premeu {{ui:Mostra al model}} per dibuixar la tensió de von Mises, el desplaçament o una forma modal; {{ui:Elimina el gràfic}} el treu.

## Notes

- La pàgina resol fins a un nombre fix d'elements; la línia d'estat indica quan la mida dels elements és massa fina.
- La tensió a les cares fixes, als punts de càrrega i a les cantonades agudes creix a mesura que s'afina la malla. Afineu i compareu abans de fiar-vos d'un pic.
- Cada canvi és un sol pas de desfer, i la configuració es desa al fitxer de la peça.
- Per a estudis de plasticitat i de contacte, vegeu [Comprovar tensió i deformació](topic:simulation).
