---
title: Comezar un manual en Ilustrar
summary: O espazo de traballo Ilustrar fai manuais a partir do seu deseño: vistas, arte de liñas despezada con globos e unha lista de pezas, instrucións paso a paso, animacións e un ficheiro 3D que un cliente pode abrir sen CAD. Un manual é un ficheiro propio.
keywords: ilustrar, manual, ilustración técnica, documentación, vista despezada, lista de pezas, instrucións, partcraft-manual
from: e447e0ab
---

**Ilustrar** é o espazo de traballo para os documentos que se precisan arredor dun deseño: vistas despezadas con globos e unha lista de pezas, ilustracións de arte de liñas para manuais, instrucións paso a paso, animacións e un ficheiro 3D que un cliente pode abrir sen CAD. Escolla {{ui:Ilustrar}} no selector {{ui:Espazo de traballo}} ao principio da barra de ferramentas.

Un **manual** é un ficheiro propio (`<nome>.partcraft-manual.json`). Garda unha copia da forma de cada peza, a árbore do produto, as propiedades das pezas e unha ligazón á orixe, para poder traballar no manual mentres o deseño segue avanzando. Cando cambia o deseño, [Actualizar desde o deseño](topic:illustrate-update) incorpora os cambios.

## Comezar un

Prema {{ui:Novo}} no grupo {{ui:Manual}} e despois:

- {{ui:Desde a peza aberta}}: a peza aberta en Deseño.
- {{ui:Desde o conxunto aberto}}: mostrado no seu lugar cando hai un conxunto aberto; as súas pezas, posicións, números de peza, materiais e vistas despezadas veñen con el.
- {{ui:Desde un ficheiro de conxunto…}}: un `.partcraft-asm.json` gardado; PartCraft constrúe primeiro as súas pezas.
- {{ui:Desde outro ficheiro…}}: glTF (.glb, .gltf), OBJ, STL ou 3MF. A árbore e os nomes do ficheiro consérvanse, e as copias dunha mesma peza (a mesma forma colocada dúas veces) convértense nunha soa peza con cantidade. Os ficheiros STL e OBJ non din a súa unidade, polo que se lle pregunta. Os ficheiros STL léense con Z cara arriba; glTF e 3MF din a súa propia.

Mentres un manual está aberto, Ilustrar mostra a copia propia do manual das pezas; a peza ou o conxunto aberto en Deseño quedan ocultos ata que volva a Deseño.

## Gardar e abrir

{{ui:Gardar}} no grupo {{ui:Manual}} (ou {{key:Mod+S}}) garda o manual; {{ui:Abrir}} abre un. Cada cambio en Ilustrar é un paso do historial propio do manual: {{ui:Desfacer}} e {{ui:Refacer}} actúan sobre o manual mentres Ilustrar está aberto.

## Aínda non dispoñible

- Os ficheiros STEP non se abren en {{ui:Desde outro ficheiro…}} por agora. Abra o STEP en Deseño (entra como corpo sólido: vexa [Abrir un ficheiro STEP](topic:import-step)) e comece o manual con {{ui:Desde a peza aberta}}, ou gárdeo como glTF, 3MF, OBJ ou STL.
- ModelCraft e BimCraft aínda non poden pasar un modelo directamente a Ilustrar: gárdeo como glTF (.glb) e use {{ui:Desde outro ficheiro…}}.

Seguinte: [Vistas e aspectos](topic:illustrate-views).
