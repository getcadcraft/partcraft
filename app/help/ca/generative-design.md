---
title: Fer créixer una forma a partir de càrregues (Generatiu)
summary: Trieu les cares subjectes i carregades, les regions que s'han de conservar i les que han de quedar lliures, els volums objectiu i els materials, i genereu resultats: les formes més rígides trobades per a cada volum, comprovades de nou com a sòlids, comparades en una taula i baixades com a STL, STEP o una peça nova.
keywords: disseny generatiu, optimització topològica, SIMP, lleuger, gelosia, forma orgànica, resultats, comparar, massa, fracció de volum, conserva, manteniment dins, obstacle, manteniment fora, espai de disseny, mida mínima de membre, STL, impressió 3D
from: 5b91fa8e
---

L'espai de treball Generatiu treu el material que les càrregues no necessiten. Digueu on es subjecta i es carrega la peça, què ha de romandre i què ha de quedar lliure; PartCraft troba la forma més rígida per a cada volum objectiu (**optimització topològica**), la comprova de nou com a sòlid amb el material real, i mostra els resultats un al costat de l'altre. Funciona sobre les cares amb nom que el nucli de malla dona a la peça (vegeu [El nucli de malla](topic:solid-kernels)).

Trieu **Generatiu** a la caixa **Espai de treball**. La vostra peça no es canvia; l'estudi es desa dins del fitxer de la peça.

## Configura un estudi

1. Premeu **Estudi nou** al panell de la dreta.
2. **Espai**: *La peça tal com és* treu material de la vostra peça; *Una caixa al voltant de la peça* fa créixer una forma dins d'una caixa més gran que la peça, pel **Marge de la caixa**.
3. **Mida de l'element**: deixeu-la buida per a una mida automàtica (unes 8,000 cubs), o escriviu-ne una. Les mides més fines donen formes més fines i triguen més.
4. **Membre mínim**: els membres més prims de gairebé el doble d'aquest valor no es formen. Buit vol dir un cub i mig.
5. Marqueu d'un a sis **Volums objectiu** (la part de l'espai de disseny que la forma pot omplir) i d'un a quatre **Materials**. Cada volum es genera una vegada; cada material es comprova sobre aquella forma (la forma més rígida no depèn del material, però la seva massa, la seva tensió i el seu factor de seguretat sí).

## Objectius

- {{ui:Fixed}}: feu clic a les cares que es mantenen subjectes. Una **Cara sense fricció** de la llista **Afegeix** del panell subjecta una cara només al llarg de si mateixa (feu-la servir per als plans de simetria).
- {{ui:Force}}: feu clic a les cares carregades, després escriviu la força total i trieu-ne la direcció al panell. **Pressió** és a la llista **Afegeix**.
- {{ui:Preserve}}: feu clic a les cares els entorns de les quals han de romandre sòlids, i definiu quant de profund (**Mantén sòlid dins de**), per exemple al voltant dels forats dels cargols. Les cares que subjecteu o carregueu sempre es conserven.
- {{ui:Obstacle}}: feu clic a les cares els entorns de les quals han de romandre buits, i definiu quant lluny (**Mantén buit dins de**), per exemple l'espai per a un eix o una eina.

Premeu **Acaba la selecció** o {{key:Esc}} després de fer clic a les cares. Els tons verds i vermells mostren les regions.

## Genera i compara

Premeu {{ui:Generate}}. El panell mostra el progrés i el temps que queda; {{ui:Stop}} cancel·la. Cada resultat apareix a la taula **Resultats**: volum objectiu, material, **massa**, **tensió més gran**, **desplaçament més gran** i **factor de seguretat** (límit elàstic ÷ tensió), tot des de tornar a resoldre la forma acabada com a cubs sòlids amb el material real.

Trieu un resultat per veure'l a la vista (la peça s'amaga; marqueu **Mostra la peça a través** per veure'n les dues). Sota la taula: quantes iteracions ha trigat i si s'ha estabilitzat, la seva rigidesa com a sòlid comparada amb la xifra de l'optimitzador, i la seva superfície.

## Fes servir un resultat

- **STL**: una malla de triangles tancada, a punt per a la impressió 3D.
- **STEP (facetat)**: la mateixa superfície com un sòlid STEP fet de cares planes.
- **Fitxer de peça nou**: una peça de PartCraft la característica única de la qual és el resultat com a sòlid importat. Obriu-la per croquissar-hi, fer-hi forats o comprovar-la a Simulació. És facetada (milers de cares planes), no pas una forma editable.
- **Afegeix a aquesta peça** uneix el resultat a la peça; només està activat per a un espai de disseny en caixa (amb la mateixa peça com a espai, el resultat queda dins de la peça).

**Fitxer de peça nou** i **Afegeix a aquesta peça** encara no estan implementats en aquesta versió: el resultat esdevé un sòlid importat, cosa que necessita un nucli exacte. Les descàrregues STL i STEP (facetat) funcionen.

## Quant de fiable és

- Optimitza la **rigidesa** per al volum donat. Encara no hi ha límits de tensió ni regles de fabricació (sortints, direccions de fresat, mides mínimes de forat): comproveu un resultat escollit a [Simulació](topic:simulation) i ajusteu-lo.
- Els membres prims d'un o dos cubs d'amplada són aproximacions: feu servir una mida d'element més petita per a peces esveltes.
- El mètode és SIMP amb un filtre de densitat, una projecció de llindar i actualitzacions de criteri d'optimalitat; la tensió i la deflexió informades són del resultat com a cubs, cosa que és honesta però poc precisa a les cantonades agudes.

## Relacionat

- [Comprova tensió i deflexió (Simulació)](topic:simulation)
- [Exporta per a impressió, STEP i DXF](topic:export-files)
- [Què encara no està implementat](topic:not-built-yet)
