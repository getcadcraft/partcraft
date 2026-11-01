---
title: O kernel de malha
summary: Esta versão do PartCraft constrói toda peça com um kernel de malha que roda no seu navegador. O que isso significa para faces redondas, volumes e arquivos, como saber que ele está funcionando e quais recursos esperam por um kernel exato.
keywords: kernel, malha, manifold, exato, b-rep, facetado, curvas, opencascade, occt, arredondamento precisa de exato, não implementado, offline, webassembly
from: 68d32d16
---

Um kernel de geometria é o motor que transforma o seu histórico em um sólido. Esta versão do PartCraft tem um: o **kernel de malha** (manifold-3d). Ele roda no seu computador como um pequeno programa WebAssembly e fica pronto um instante depois que o aplicativo abre. Nada sobre a sua peça é enviado para lugar nenhum.

| | Kernel de malha |
|---|---|
| Formas redondas | Facetas planas. **Curvas** no painel da peça define o quanto são finas |
| Volumes e áreas | Do sólido facetado, um pouco baixos em peças redondas |
| Esboços, extrusão, corte, revolução, furos, matrizes, espelhamento, planos de referência | Sim |
| Arredondamento e chanfro | Em arestas retas entre faces planas; arredondamentos que se encontram são em meia-esquadria |
| Casca e ângulo de saída | A casca abre faces planas (espessura de parede exata); o ângulo de saída inclina faces planas |
| Exportações | STL, 3MF, STEP (facetado), PDF e DXF do desenho |
| Vistas do desenho | Desenhadas a partir das facetas, inclusive vistas em corte |
| Faces e arestas | Nomeadas e conhecidas pelo tipo (plana, cilindro, cone, esfera, toro; reta, círculo), tiradas dos esboços: os ambientes de Simulação, Generativo e Fabricação, Medir, a seleção e a tabela de furos os usam |

O indicador perto da extremidade direita da barra de status diz **Kernel de malha** enquanto ele constrói a sua peça.

## O que espera por um kernel exato

Um kernel exato (B-rep) mantém círculos, cilindros e cones verdadeiros, e arredondamentos suaves em qualquer aresta; varreduras, lofts, superfícies, chapa metálica, nervuras, vários corpos, importação de STEP e exportação exata de STEP são construídos sobre um. As versões de laboratório anteriores do PartCraft usavam o OpenCascade para isso. A licença dele (a LGPL) não combina com este lançamento, em que todos os aplicativos são Apache-2.0 e usam apenas bibliotecas com licenças permissivas, então ele não está incluído. Nada aqui tem data.

Até lá, esses recursos dizem **Ainda não implementado** quando você os escolhe: a barra de status dá o motivo, e as dicas dos botões terminam com "ainda não implementado (precisa de um kernel exato)". [O que ainda não está implementado](topic:not-built-yet) lista cada um com o que fazer no lugar.

Uma peça feita com eles em uma versão anterior ainda abre. Esses recursos ficam no histórico marcados como não implementados (passe o ponteiro sobre um para ver o motivo), o resto da peça é construído, e ao salvar eles são mantidos sem alteração.

## Faces redondas e Curvas

O kernel de malha desenha um círculo como um polígono. **Curvas** no painel da peça define quantos lados um círculo completo recebe; mais lados ficam mais lisos e medem mais perto do valor verdadeiro, e levam mais tempo para construir. Volumes, áreas e distâncias de {{ui:Medir}} são deste sólido facetado: para um furo ou um ressalto, são um pouco menores que os da forma redonda.

## Online e offline

O kernel de malha faz parte do download do próprio aplicativo. Para trabalhar sem conexão, salve o PartCraft para uso offline enquanto estiver online: escolha {{ui:Salvar para uso offline}} na barra do aplicativo e aguarde até aparecer **Pronto para uso offline**. Detalhes: [Trabalhar offline](common:offline).
