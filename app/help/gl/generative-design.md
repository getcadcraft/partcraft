---
title: Facer medrar unha forma a partir de cargas (Xerativo)
summary: Escolla as caras suxeitas e cargadas, as zonas a conservar e a manter libres, os volumes obxectivo e os materiais, e xere resultados: as formas máis rixidas atopadas para cada volume, comprobadas de novo como sólidos, comparadas nunha táboa e descargadas como STL, STEP ou unha nova peza.
keywords: deseño xerativo, optimización topolóxica, SIMP, lixeireza, retícula, forma orgánica, resultados, comparar, masa, fracción de volume, conservar, mantemento dentro, obstáculo, mantemento fóra, espazo de deseño, tamaño mínimo de barra, STL, impresión 3D
from: 5b91fa8e
---

O espazo de traballo Xerativo retira o material que as cargas non precisan. Indica onde está suxeita e cargada a peza, o que debe quedar e o que debe quedar libre; PartCraft atopa a forma máis rixida para cada volume obxectivo (**optimización topolóxica**), comproba cada unha de novo como sólido co material real e mostra os resultados lado a lado. Traballa sobre as caras con nome que lle dá a peza o núcleo de malla (ver [O núcleo de malla](topic:solid-kernels)).

Escolla **Xerativo** na caixa **Espazo de traballo**. A súa peza non cambia; o estudo gárdase dentro do ficheiro da peza.

## Configurar un estudo

1. Prema **Novo estudo** no panel da dereita.
2. **Espazo**: *A peza tal como está* retira material da súa peza; *Unha caixa arredor da peza* fai crecer unha forma dentro dunha caixa máis grande que a peza polo **Marxe da caixa**.
3. **Tamaño do elemento**: déixeo baleiro para un tamaño automático (uns 8.000 cubos), ou escriba un. Tamaños máis finos dan formas máis finas e tardan máis.
4. **Barra mínima**: as barras máis finas que o dobre deste valor non se forman. Baleiro significa un cubo e medio.
5. Marque de un a seis **Volumes obxectivo** (a parte do espazo de deseño que a forma pode ocupar) e de un a catro **Materiais**. Cada volume xérase unha vez; cada material compróbase sobre esa forma (a forma máis rixida non depende do material, pero a súa masa, tensión e coeficiente de seguridade si).

## Obxectivos

- {{ui:Fixar}}: prema as caras que están suxeitas. Unha **Cara sen fricción** da lista **Engadir** do panel suxeita unha cara só no seu propio plano (úsea para planos de simetría).
- {{ui:Forza}}: prema as caras cargadas, logo escriba a forza total e escolla a súa dirección no panel. A **Presión** está na lista **Engadir**.
- {{ui:Conservar}}: prema as caras cuxos arredores deban quedar sólidos, e defina a profundidade (**Manter sólido dentro de**) — por exemplo, ao redor de buratos de parafuso. As caras que fixa ou carga consérvanse sempre.
- {{ui:Obstáculo}}: prema as caras cuxos arredores deban quedar baleiros, e defina a distancia (**Manter baleiro dentro de**) — espazo para un eixe ou unha ferramenta.

Prema **Rematar a selección** ou {{key:Esc}} despois de premer as caras. Os tons verde e vermello mostran as zonas.

## Xerar e comparar

Prema {{ui:Xerar}}. O panel mostra o progreso e o tempo que queda; **Parar** cancela. Cada resultado aparece na táboa de **Resultados**: volume obxectivo, material, **masa**, **maior tensión**, **maior desprazamento** e **coeficiente de seguridade** (límite elástico ÷ tensión), todo a partir de volver resolver a forma acabada como cubos sólidos co material real.

Escolla un resultado para velo na vista (a peza ocúltase; marque **Mostrar a peza a través del** para ver as dúas). Debaixo da táboa: cantas iteracións tardou e se converxeu, a súa rixidez como sólido fronte á cifra propia do optimizador, e a súa superficie.

## Usar un resultado

- **STL**: unha malla pechada de triángulos, lista para impresión 3D.
- **STEP (facetado)**: a mesma superficie como sólido STEP formado por caras planas.
- **Novo ficheiro de peza**: unha peza de PartCraft cuxo único elemento é o resultado como sólido importado. Ábrao para esbozar sobre el, cortar buratos ou comprobalo en Simulación. É facetado (miles de caras planas), non unha forma editable.
- **Engadir a esta peza** une o resultado á peza; só está activo para un espazo de deseño en caixa (co propio espazo da peza, o resultado queda dentro da peza).

**Novo ficheiro de peza** e **Engadir a esta peza** aínda non están implementados nesta versión: o resultado convértese nun sólido importado, que necesita un núcleo exacto. As descargas STL e STEP (facetado) funcionan.

## Ata onde confiar nel

- Optimiza a **rixidez** para o volume dado. Aínda non hai límites de tensión nin regras de fabricación (voos, direccións de fresado, tamaños mínimos de burato): comprobe un resultado escollido en [Simulación](topic:simulation) e axuste.
- As barras finas dun ou dous cubos de ancho son aproximacións: use un tamaño de elemento menor para pezas esveltas.
- O método é SIMP cun filtro de densidade, unha proxección de limiar e actualizacións por criterios de optimalidade; a tensión e a flexión informadas son as do resultado como cubos, o que é honesto pero groso nas esquinas vivas.

## Relacionado

- [Comprobar tensión e flexión (Simulación)](topic:simulation)
- [Exportar para impresión, STEP e DXF](topic:export-files)
- [O que aínda non está implementado](topic:not-built-yet)
