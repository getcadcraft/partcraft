---
title: O kernel de malha
summary: Esta versão do PartCraft constrói cada peça com um kernel de malha que corre no navegador. O que isso significa para as faces redondas, os volumes e os ficheiros, como saber que está a funcionar e que operações esperam por um kernel exato.
keywords: kernel, malha, manifold, exato, b-rep, facetado, curvas, opencascade, occt, boleado precisa de exato, não implementado, offline, webassembly
from: 68d32d16
---

Um kernel de geometria é o motor que transforma o seu histórico num sólido. Esta versão do PartCraft tem um: o **kernel de malha** (manifold-3d). Corre no seu computador como um pequeno programa WebAssembly e está pronto um instante depois de a aplicação abrir. Nada sobre a sua peça é enviado para lado nenhum.

| | Kernel de malha |
|---|---|
| Formas redondas | Facetas planas. **Curvas** no painel da peça define a finura |
| Volumes e áreas | Do sólido facetado, um pouco baixos em peças redondas |
| Esboços, extrusão, corte, revolução, furos, matrizes, simetria, planos de referência | Sim |
| Boleado e Chanfre | Em arestas retas entre faces planas; os arredondamentos que se encontram são esquadriados |
| Casca e Ângulo de saída | A casca abre faces planas (espessura de parede exata); o ângulo de saída inclina faces planas |
| Exportações | STL, 3MF, STEP (facetado), desenho em PDF e DXF |
| Vistas de desenho | Desenhadas a partir das facetas, incluindo vistas de corte |
| Faces e arestas | Com nome e conhecidas por tipo (plana, cilindro, cone, esfera, toro; reta, círculo), tiradas dos esboços: as áreas de trabalho Simulação, Generativo e Fabrico, Medir, a escolha e a tabela de furos usam-nas |

O ícone perto da extremidade direita da barra de estado diz **Kernel de malha** enquanto constrói a sua peça.

## O que espera por um kernel exato

Um kernel exato (B-rep) conserva círculos, cilindros e cones verdadeiros, e boleados suaves em qualquer aresta; varrimentos, loft, superfícies, chapa metálica, nervuras, vários corpos, importação STEP e exportação STEP exata assentam num. As versões anteriores do PartCraft em laboratório usavam o OpenCascade para isso. A sua licença (a LGPL) não se adequa a esta versão, em que todas as aplicações são Apache-2.0 e só usam bibliotecas com licenças permissivas, pelo que não está incluído. Nada disto tem data.

Até lá, essas operações dizem **Ainda não implementado** quando as escolhe: a barra de estado dá o motivo, e as sugestões dos seus botões terminam com «ainda não implementado (precisa de um kernel exato)». [O que ainda não está implementado](topic:not-built-yet) lista cada uma com o que fazer em alternativa.

Uma peça feita com elas numa versão anterior continua a abrir. Essas operações ficam no histórico marcadas como não implementadas (pare o ponteiro sobre uma para ver o motivo), o resto da peça é construído, e guardar conserva-as sem alterações.

## Faces redondas e Curvas

O kernel de malha desenha um círculo como um polígono. **Curvas** no painel da peça define quantos lados tem um círculo completo; mais lados parecem mais suaves e medem mais perto do valor verdadeiro, e demoram mais a construir. Os volumes, áreas e distâncias de {{ui:Medir}} são deste sólido facetado: para um furo ou um ressalto são um pouco menores do que os da forma redonda.

## Online e offline

O kernel de malha faz parte da transferência da própria aplicação. Para trabalhar sem ligação, guarde o PartCraft para utilização offline enquanto estiver online: escolha {{ui:Guardar para offline}} na barra da aplicação e aguarde até dizer **Pronto para offline**. Pormenores: [Trabalhar offline](common:offline).
