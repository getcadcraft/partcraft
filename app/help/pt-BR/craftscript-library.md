---
title: A biblioteca de análise
summary: A biblioteca de scripts de análise legíveis na área de trabalho Script: o que há em cada grupo, abrir uma função somente leitura, seu cabeçalho com método, referências e uma verificação, fazer a sua própria cópia e como uma cópia assume o lugar da função da biblioteca.
keywords: biblioteca, craftlib, análise, eletroímã, estática, modal, térmica, otimização topológica, top88, SIMP, eletromagnetismo, eletrostática, magnetostática, fluido, Boltzmann em rede, LBM, malha, voxel, tetraedros, referências, verificação, check, cópia, sombra
from: bf993859
---

A biblioteca de análise é um conjunto de scripts, cada um uma função que você pode ler do início ao fim: como a matriz de rigidez é montada, onde entram as condições de contorno, qual solver é executado, como os resultados são calculados. Nada nela fica escondido em uma caixa-preta; apenas os laços internos rápidos (matrizes de elementos, solvers esparsos, geração de malha) são embutidos.

## Comece com um exemplo

O grupo **Exemplos** reúne cinco scripts curtos que usam a biblioteca de ponta a ponta. Clique em um deles, pressione {{ui:Abrir (somente leitura)}} e depois {{key:F5}}: cada um limpa a visualização, mostra um resultado na área de desenho e um gráfico nos subpainéis.

| Exemplo | O que mostra |
|---|---|
| Tensão em viga em balanço | Uma barra de aço de 100 × 10 × 10 mm sob uma carga de 100 N na ponta: a tensão de von Mises na barra deformada e a flecha da ponta comparada com a teoria de vigas, em quatro tamanhos de elemento (em gráfico) |
| Otimização topológica da viga MBB | A clássica otimização topológica de 60 × 20: a formação do projeto, a queda da complacência, o layout final (94 iterações, complacência 203.19) |
| Campo de capacitor | Duas placas com 4 mm de largura, separadas por 1 mm: potencial e campo, a capacitância com efeito de borda comparada ao valor ideal e à fórmula de Palmer |
| Escoamento em canal | Escoamento por Boltzmann em rede ao redor de um poste em um canal: o campo de velocidade e o histórico de convergência |
| Eletroímã | Um núcleo de ferro em forma de C com entreferro e uma bobina: a densidade de fluxo, o campo no entreferro comparado à fórmula do circuito magnético, a indutância e a força de atração através do entreferro. Passo a passo em [Campos magnéticos em 2-D](topic:magnetic-fields-2d) |
| Ímã permanente | O mesmo núcleo, com um ímã permanente no lugar da bobina: o ponto de trabalho do ímã, o campo no entreferro comparado ao circuito magnético, quanto fluxo vaza, a força de atração. Em [Campos magnéticos em 2-D](topic:magnetic-fields-2d#permanent-magnets) |

## Grupos

| Grupo | Funções | O que fazem |
|---|---|---|
| Malhagem | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Caixas e cilindros como hexaedros, cubos ou tetraedros; cubos ou tetraedros de qualquer modelo (a peça, um corpo, um STL carregado); volumes e qualidade dos elementos; seleção de nós em um plano ou em uma face |
| Tensão estática | `static_voxel`, `static_tet` | Tensão estática linear em cubos ou em tetraedros de 10 nós: deslocamentos, tensões, von Mises, reações |
| Pórticos | `frame3d` | Pórticos 3D de vigas, pilares e contraventamentos pelo método da rigidez direta: liberações nas extremidades, apoios e molas, cargas ao longo das barras; deslocamentos, reações e esforços nas extremidades das barras. O {{ui:Exportar como CraftScript}} do DetailCraft e do BimCraft grava um modelo completo para ele. É um auxílio de análise, não uma verificação de norma |
| Vibração | `modal_tet` | Frequências naturais e formas modais |
| Calor | `heat_steady`, `heat_transient`, `heat_system` | Condução em regime permanente e transitório, com temperaturas fixas, entrada de calor, geração, fluxo e convecção |
| Otimização topológica | `top88`, `top99`, `topopt3d` | Os códigos 2-D publicados de 88 e 99 linhas, e o mesmo método em 3-D sobre cubos |
| Eletromagnetismo | `poisson2d`, `magnetostatic2d` | Eletrostática 2-D (potencial, campo, capacitância, carga) e magnetostática (potencial vetor, densidade de fluxo, ímãs permanentes) |
| Escoamento de fluidos | `lbm2d`, `lbm3d` | Escoamento por Boltzmann em rede: o 2-D escrito no próprio script, o 3-D no kernel de escoamento próprio do PartCraft |

O cabeçalho de cada função informa os seus argumentos exatos. As unidades são as dos estudos do PartCraft, salvo se o cabeçalho disser o contrário: milímetros, newtons, megapascals, toneladas por milímetro cúbico para densidade, watts e kelvin para calor. As funções eletromagnéticas e de Boltzmann em rede funcionam em quaisquer unidades consistentes; os cabeçalhos dizem como.

## Como a biblioteca é verificada

O cabeçalho de cada função termina com uma **verificação**: um caso pequeno com resposta conhecida. Os testes do PartCraft executam todas elas e, onde o PartCraft tem um estudo próprio para o mesmo trabalho, a resposta do script é comparada com esse estudo na mesma malha:

- a flecha da ponta da viga em balanço contra a teoria de vigas (dentro de 0.2 % com cubos, 0.05 % com tetraedros) e contra os solvers da área de trabalho **Simulação** na mesma malha (iguais em muitas casas decimais);
- a primeira frequência da viga em balanço contra a teoria de vigas (0.24 % menor, como esperado para uma viga curta) e contra o solver modal da **Simulação**;
- calor: uma parede plana aquecida, exatamente; um corpo pequeno esfriando como diz a fórmula de capacidade concentrada; a temperatura de uma placa decaindo como prevê a teoria;
- otimização topológica: `top88` reproduz as 94 iterações e a complacência 203.1925 do artigo (e 218.8032 com o filtro de densidade); `topopt3d` termina com a mesma complacência da área de trabalho **Generativo** com as mesmas configurações;
- a capacitância de um capacitor e o campo de um solenoide longo contra os valores de livro-texto, o campo no entreferro do eletroímã contra a fórmula do circuito magnético, e os ímãs permanentes contra um ímã redondo no ar e um ímã fechado por uma armadura de ferro;
- escoamento em canal contra o perfil parabólico exato.

## Ler uma função

1. Abra a guia **Biblioteca** do painel de script.
2. Clique em uma função. O cabeçalho mostra: o que ela calcula, o método, as unidades, premissas e limites, as **referências** (livro ou artigo, com números de equação) e uma **verificação** — um caso pequeno com resposta conhecida que os próprios testes do PartCraft executam.
3. {{ui:Abrir (somente leitura)}} abre o script inteiro em uma aba com borda tracejada. Você pode executá-lo, selecionar e executar partes dele, mas não alterá-lo.

## Alterar uma

Pressione {{ui:Fazer uma cópia}} (ou **Fazer uma cópia para editar** acima de uma aba somente leitura). A cópia é um script na sua peça com o mesmo nome, por isso é salva junto com a peça, e **toda chamada a essa função agora usa a sua cópia** — o editor informa isso acima do script. Renomeie a cópia para manter as duas.

## Usar uma

Chame uma função da biblioteca em qualquer script pelo seu nome, como uma função embutida:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Os resultados voltam como valores na área de trabalho; gráficos e campos que ela mostra aparecem na visualização e nos subpainéis.

Uma análise estática da peça aberta, por exemplo, leva algumas linhas:

```
v = voxel_mesh(part(), 2);                   % cubos de 2 mm
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % prende a base
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N para baixo no topo
r = static_voxel(v, 210000, 0.3, bc);       % aço
```

`r` guarda os deslocamentos, as tensões e as reações; a tensão de von Mises é desenhada na peça deformada. Para peças curvas, use `tet_mesh` e `static_tet`, que também podem carregar e prender faces inteiras (`face_nodes`).

:::note
As funções da biblioteca são escritas em CraftScript, e um script Lua as chama por `cs`, como às funções embutidas: `cs.static_tet(t, 200000, 0.3, bc)` (veja [Scripts em Lua](topic:craftscript-lua)). Cada função resolve um material e um caso de carga; os cabeçalhos listam o que mais não é coberto.
:::
