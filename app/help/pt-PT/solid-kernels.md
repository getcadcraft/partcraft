---
title: O kernel de malha
summary: Esta versão do PartCraft cria cada peça com um kernel de malha que funciona no navegador. O que isso significa para formas redondas, volumes e ficheiros, como saber se está a funcionar e que funcionalidades aguardam por um kernel exato.
keywords: kernel, malha, manifold, exato, b-rep, facetado, curvas, opencascade, occt, boleado requer exato, ainda não implementado, offline, webassembly
from: f931645c
---

Um kernel geométrico é o motor que transforma o seu histórico numa peça sólida. Esta versão do PartCraft tem um: o **kernel de malha** (manifold-3d). Funciona no seu computador como um pequeno programa WebAssembly e fica pronto pouco depois de a aplicação abrir. Nada da sua peça é enviado para lado nenhum.

| | Kernel de malha |
|---|---|
| Formas redondas | Facetas planas. **Curvas** no painel da peça define o grau de finura |
| Volumes e áreas | Do sólido facetado, um pouco baixos nas peças redondas |
| Esboços, extrusão, corte, revolução, furos, matrizes, espelho, planos de referência | Sim |
| Boleado e chanfre | Em arestas retas entre faces planas; os arredondamentos que se encontram são em meia-esquadria |
| Casca e ângulo de saída | A casca abre faces planas (espessura de parede exata); o ângulo de saída inclina faces planas |
| Exportações | STL, 3MF, STEP (exato: as faces redondas são escritas nas suas superfícies verdadeiras; ou facetado), PDF de desenho e DXF |
| Vistas de desenho | Desenhadas a partir das facetas, incluindo as vistas de corte |
| Faces e arestas | Com nome e reconhecidas pelo tipo (plana, cilindro, cone, esfera, toro; reta, círculo), obtidas a partir dos esboços: as áreas de trabalho Simulação, Generativa e Fabrico, Medir, a escolha de elementos e a tabela de furos usam-nas |

O indicador perto da extremidade direita da barra de estado diz **Kernel de malha** enquanto constrói a sua peça.

## O que aguarda por um kernel exato

Um kernel exato (B-rep) mantém círculos, cilindros e cones verdadeiros, e boleados suaves em qualquer aresta; varrimentos, lofts, superfícies, chapas metálicas, nervuras, vários corpos e a importação de STEP com faces curvas mantidas exatas são construídos sobre um. (A exportação STEP exata não depende dele: o kernel de malha conhece a superfície verdadeira de cada face a partir do esboço, e a exportação escreve essas superfícies.) As versões de laboratório anteriores do PartCraft usavam o OpenCascade para isso. A sua licença (LGPL) não se adequa a esta versão, em que todas as aplicações são Apache-2.0 e usam apenas bibliotecas de licença permissiva, pelo que não está incluído. Nada disto tem data prevista.

Até lá, essas funcionalidades dizem **Ainda não implementado** quando as escolhe: a barra de estado indica o motivo, e as dicas dos seus botões terminam em « ainda não implementado (requer um kernel exato) ». [O que ainda não está implementado](topic:not-built-yet) lista cada uma com o que fazer em alternativa.

Uma peça feita com elas numa versão anterior continua a abrir. Essas funcionalidades mantêm-se no histórico marcadas como não implementadas (passe o rato sobre uma para ver o motivo), o resto da peça é construído, e guardar mantém-nas sem alterações.

## Faces redondas e Curvas

O kernel de malha desenha um círculo como um polígono. **Curvas** no painel da peça define quantos lados tem um círculo completo; mais lados parecem mais suaves e medem-se mais próximo do valor verdadeiro, mas demoram mais a construir. Os volumes, áreas e distâncias de {{ui:Medir}} são deste sólido facetado: num furo ou numa saliência são um pouco menores do que os da forma redonda.

## Online e offline

O kernel de malha faz parte da transferência da própria aplicação. Para trabalhar sem ligação, guarde o PartCraft para utilização offline enquanto estiver ligado: escolha {{ui:Guardar para offline}} na barra da aplicação e aguarde até indicar **Pronto offline**. Detalhes: [Trabalhar offline](common:offline).
