---
title: O kernel de malha
summary: Esta versão do PartCraft constrói cada peça com um kernel de malha que roda no seu navegador. O que isso significa para faces curvas, volumes e arquivos, como saber que ele está funcionando e quais recursos aguardam um kernel exato.
keywords: kernel, malha, manifold, exato, b-rep, facetado, curvas, opencascade, occt, arredondamento exige exato, não implementado, offline, webassembly
from: f931645c
---

Um kernel geométrico é o motor que transforma seu histórico em um sólido. Esta versão do PartCraft tem um: o **kernel de malha** (manifold-3d). Ele roda no seu computador como um pequeno programa WebAssembly e fica pronto um instante depois que o aplicativo abre. Nada sobre a sua peça é enviado para lugar nenhum.

| | Kernel de malha |
|---|---|
| Formas curvas | Faces planas. **Curvas** no painel da peça define o nível de detalhe |
| Volumes e áreas | Do sólido facetado, um pouco baixos em peças arredondadas |
| Esboços, extrusão, corte, revolução, furos, matrizes, espelhamento, planos de referência | Sim |
| Arredondamento e Chanfro | Em arestas retas entre faces planas; arredondamentos que se encontram são recortados em meia-esquadria |
| Casca e Ângulo de saída | A casca abre faces planas (espessura de parede exata); o Ângulo de saída inclina faces planas |
| Exportações | STL, 3MF, STEP (exato: faces curvas gravadas em suas superfícies verdadeiras; ou facetado), PDF de desenho e DXF |
| Vistas de desenho | Desenhadas a partir das facetas, incluindo vistas de corte |
| Faces e arestas | Nomeadas e reconhecidas por tipo (plana, cilindro, cone, esfera, toro; reta, círculo), obtidas dos esboços: as áreas de trabalho de Simulação, Generativo e Fabricação, Medir, a seleção e a tabela de furos as usam |

O chip perto da extremidade direita da barra de status diz **Kernel de malha** enquanto constrói a sua peça.

## O que aguarda um kernel exato

Um kernel exato (B-rep) mantém círculos, cilindros e cones verdadeiros, e arredondamentos suaves em qualquer aresta; varreduras, lofts, superfícies, chapa metálica, nervuras, vários corpos e a importação de STEP com faces curvas mantidas exatas são construídos sobre ele. (A exportação STEP exata não depende dele: o kernel de malha conhece a superfície verdadeira de cada face a partir do esboço, e a exportação a grava.) Versões de laboratório anteriores do PartCraft usavam OpenCascade para isso. A licença dele (LGPL) não combina com esta versão, em que todos os aplicativos são Apache-2.0 e usam apenas bibliotecas de licença permissiva, então ele não está incluído. Nada aqui tem data.

Até lá, esses recursos dizem **Ainda não implementado** quando você os escolhe: a barra de status informa o motivo, e as dicas dos botões terminam com "ainda não implementado (exige um kernel exato)". [O que ainda não está implementado](topic:not-built-yet) lista cada um com o que fazer no lugar.

Uma peça feita com eles em uma versão anterior ainda abre. Esses recursos permanecem no histórico marcados como não implementados (passe o mouse sobre um para ver o motivo), o restante da peça é construído, e salvar os mantém sem alteração.

## Faces curvas e Curvas

O kernel de malha desenha um círculo como um polígono. **Curvas** no painel da peça define quantos lados uma circunferência completa recebe; mais lados ficam mais suaves e medem mais próximo do valor verdadeiro, mas demoram mais para construir. Volumes, áreas e distâncias de {{ui:Medir}} são do sólido facetado: para um furo ou uma saliência, são um pouco menores que os da forma redonda.

## Online e offline

O kernel de malha faz parte do próprio download do aplicativo. Para trabalhar sem conexão, salve o PartCraft para uso offline enquanto estiver online: escolha {{ui:Salvar para uso offline}} na barra do aplicativo e aguarde até aparecer **Pronto offline**. Detalhes: [Uso offline](common:offline).
