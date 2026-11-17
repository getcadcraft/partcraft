---
title: Llista de peces, vistes explosionades i peces mòbils
summary: Assigna a les peces d'un conjunt un número, una descripció i un material, llegeix i baixa la llista de materials, fes vistes explosionades amb passos o automàticament, mou a mà les peces que no estan unides, defineix límits d'unions i exporta tot el conjunt com a STL, 3MF o llista de materials.
keywords: bom, llista de materials, llista de peces, número de peça, material, densitat, csv, vista explosionada, explosiona, contreu, línies de rastre, mou la peça, arrossega, giny, translada, gira, límits d'unió, exportació del conjunt, pas del conjunt, plànol del conjunt, bombolles
from: ebc9f6f3
---

Aquestes eines són al tauler de la dreta d'un conjunt (vegeu [Construeix un conjunt amb unions](topic:build-assembly)).

## Propietats de la peça

Selecciona una peça a la llista de l'esquerra. Sota **Propietats de la peça** defineix:

- **Número de peça** (fins a 40 caràcters) i **Descripció** (fins a 200).
- **Material**: un material comú amb la seva densitat, o **Densitat personalitzada…** per escriure-la en g/cm³. El tauler aleshores mostra la massa de la peça.

Les propietats pertanyen a la peça, de manera que totes les còpies en comparteixen. Es desen al fitxer del conjunt.

## Llista de materials

Amb res seleccionat ({{key:Esc}}), el tauler mostra la **Llista de materials**: una fila per peça amb el seu número d'element, quantitat (quantes còpies), número de peça, nom, material i massa. Els números d'element segueixen l'ordre en què les peces apareixen per primer cop a la llista. Les masses fan servir el volum de cada peça (del sòlid facetat que construeix el nucli de malla, una mica baix en peces rodones) i el seu material; una peça sense material no té massa i aleshores no hi ha total.

{{ui:Baixa el CSV}} desa la llista com a fitxer CSV (també **Exporta › Llista de materials (CSV)**). S'obre en qualsevol full de càlcul; el text que comença per = o + rep una cometa simple inicial perquè el full de càlcul no l'executi com a fórmula.

## Vistes explosionades

Una vista explosionada separa les peces per fer imatges. Mai no canvia les unions ni on són realment les peces: desar, les comprovacions de col·lisions i les exportacions fan servir les posicions reals.

1. Amb res seleccionat, tria {{ui:Vista nova}} sota **Vistes explosionades**.
2. Sota **Afegeix un pas**, marca les peces que mou el pas, tria una **Direcció** (+X … −Z, la normal d'una cara que facis clic, o **Arrossega una fletxa a la vista**) i una **Distància**, i després {{ui:Afegeix el pas}}. Amb **Arrossega**, arrossega la fletxa i deixa anar: el pas pren la direcció i la distància que has arrossegat.
3. Afegeix més passos. Es reprodueixen un darrere l'altre.
4. Arrossega el control lliscant entre **Muntat** i **Explosionat** per animar la vista. Les línies de rastre discontínues van de la posició de repòs de cada peça fins a on és ara.

{{ui:Automàtic (radial)}} mou totes les peces excepte la fixada, allunyant-les del centre del conjunt. {{ui:Automàtic (unions)}} mou cada peça unida (amb tot el que hi ha unit per sota) cap a fora, segons la normal de la cara de la seva unió. Pots conservar diverses vistes amb nom; tria'n una a **Vista**, o **Muntat** per tornar a posar les peces al seu lloc. Les vistes es desen al fitxer del conjunt.

## Mou una peça a mà

Només una peça sense unió a la peça fixada es mou a mà (la peça fixada està quieta; les unions col·loquen la resta). Selecciona-la i, sota **Mou a mà**:

- Escriu **ΔX, ΔY, ΔZ** i tria {{ui:Mou}}, o tria un eix i un **Angle** i {{ui:Gira}} (sobre el centre de la peça).
- {{ui:Arrossega per moure}} mostra fletxes a la peça: arrossega una fletxa per moure's en aquell eix, o un quadrat per moure's en un pla. {{ui:Arrossega per girar}} mostra anelles per girar-la. Cada arrossegada és un pas de {{ui:Desfés}}. {{key:Esc}} amaga les fletxes.

## Límits d'unió

Selecciona una unió que es mogui i, sota **Límits**, marca **Manté … entre límits** per a qualsevol dels seus valors, després defineix el seu **Mínim** i **Màxim**. Cada valor es manté dins dels seus propis límits, el seu control lliscant cobreix només aquest interval, i {{ui:Comprova si el moviment provoca col·lisions}} només fa recorregut entre ells. Una unió cilíndrica pot limitar el seu angle, el seu desplaçament o tots dos. Si canvies el tipus d'unió, s'eliminen els límits dels valors que el nou tipus no té.

## Exporta tot el conjunt

En un conjunt, el menú **Exporta** escriu tot el conjunt amb cada peça on és col·locada:

- **STEP AP242 / AP214** i **Plànol (PDF)** encara no estan implementats en aquesta versió: necessiten un nucli exacte, per això estan en gris. Exporta el STEP de cada peça (sòlid exacte) des de la peça.
- **STL**: una malla de totes les peces. **3MF**: cada peça una vegada, col·locada una vegada per cada còpia.
- **Llista de materials (CSV)**.

## Límits

- El plànol del conjunt i el STEP del conjunt encara no estan implementats en aquesta versió (necessiten un nucli exacte). Les vistes explosionades són per a imatges a la pantalla.
