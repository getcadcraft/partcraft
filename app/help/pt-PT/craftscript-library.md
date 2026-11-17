---
title: A biblioteca de análise
summary: A biblioteca de scripts de análise legíveis na área de trabalho Script: o que há em cada grupo, abrir uma função só de leitura, o seu cabeçalho com método, referências e uma verificação, fazer a sua própria cópia, e como uma cópia substitui a função da biblioteca.
keywords: biblioteca, craftlib, análise, eletroíman, estática, modal, térmica, otimização topológica, top88, SIMP, eletromagnetismo, eletrostática, magnetostática, fluido, Boltzmann de rede, LBM, malha, voxel, tetraedros, referências, verificação, validação, cópia, sombra
from: bf993859
---

A biblioteca de análise é um conjunto de scripts, cada um uma função que se lê de cima a baixo: como a matriz de rigidez é montada, onde entram as condições de fronteira, que solucionador é executado, como os resultados são calculados. Nada nela está escondido numa caixa negra; apenas os ciclos internos rápidos (matrizes de elementos, solucionadores esparsos, malhagem) estão incorporados.

## Comece por um exemplo

O grupo **Exemplos** tem cinco scripts curtos que usam a biblioteca de ponta a ponta. Clique num deles, prima {{ui:Abrir (só de leitura)}} e depois {{key:F5}}: cada um limpa a vista, mostra um resultado na área de desenho e um gráfico nas subvisualizações.

| Exemplo | O que mostra |
|---|---|
| Tensão numa viga em consola | Uma barra de aço de 100 × 10 × 10 mm sob uma carga de 100 N na ponta: tensão de von Mises na barra deformada, e a flecha da ponta face à teoria de vigas com quatro tamanhos de elemento (em gráfico) |
| Topologia de viga MBB | A clássica otimização topológica de 60 × 20: a formação do desenho, a queda da flexibilidade, o layout final (94 iterações, flexibilidade 203.19) |
| Campo de condensador | Duas placas com 4 mm de largura, separadas 1 mm: potencial e campo, a capacidade com efeito de franja face ao valor ideal e à fórmula de Palmer |
| Escoamento num canal | Escoamento de Boltzmann de rede em torno de um poste num canal: o campo de velocidades e o histórico de convergência |
| Eletroíman | Um núcleo de ferro em forma de C com entreferro e uma bobina: a densidade de fluxo, o campo no entreferro face à fórmula do circuito magnético, a indutância e a força de atração através do entreferro. Explicado em [Campos magnéticos a 2-D](topic:magnetic-fields-2d) |
| Íman permanente | O mesmo núcleo com um íman permanente em vez da bobina: o ponto de funcionamento do íman, o campo no entreferro face ao circuito magnético, quanto fluxo se dispersa, a força. Em [Campos magnéticos a 2-D](topic:magnetic-fields-2d#permanent-magnets) |

## Grupos

| Grupo | Funções | O que fazem |
|---|---|---|
| Malhagem | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Caixas e cilindros como hexaedros, cubos ou tetraedros; cubos ou tetraedros de qualquer modelo (a peça, um corpo, um STL carregado); volumes e qualidade dos elementos; seleção de nós num plano ou numa face |
| Tensão estática | `static_voxel`, `static_tet` | Tensão estática linear em cubos ou em tetraedros de 10 nós: deslocamentos, tensões, von Mises, reações |
| Pórticos | `frame3d` | Pórticos 3D de vigas, pilares e contraventamentos pelo método direto da rigidez: libertações nas extremidades, apoios e molas, cargas ao longo das barras; deslocamentos, reações, esforços nas extremidades das barras. O {{ui:Exportar como CraftScript}} do DetailCraft e do BimCraft escreve um modelo completo para ele. Um auxiliar de análise, não uma verificação de códigos |
| Vibração | `modal_tet` | Frequências naturais e formas modais |
| Calor | `heat_steady`, `heat_transient`, `heat_system` | Condução estacionária e transitória com temperaturas fixas, entrada de calor, geração, fluxo e convecção |
| Otimização topológica | `top88`, `top99`, `topopt3d` | Os códigos 2-D publicados de 88 e 99 linhas, e o mesmo método em 3-D sobre cubos |
| Eletromagnetismo | `poisson2d`, `magnetostatic2d` | Eletroestática 2-D (potencial, campo, capacidade, carga) e magnetostática (potencial vetor, densidade de fluxo, ímanes permanentes) |
| Escoamento de fluidos | `lbm2d`, `lbm3d` | Escoamento de Boltzmann de rede: 2-D escrito no próprio script, 3-D no núcleo de escoamento do próprio PartCraft |

O cabeçalho de cada função indica os seus argumentos exatos. As unidades são as dos estudos do PartCraft, salvo indicação em contrário no cabeçalho: milímetros, newtons, megapascais, toneladas por milímetro cúbico para a massa volúmica, watts e kelvin para o calor. As funções eletromagnéticas e de Boltzmann de rede funcionam em quaisquer unidades coerentes; os seus cabeçalhos dizem quais.

## Como a biblioteca é verificada

O cabeçalho de cada função termina com uma **verificação**: um caso pequeno com resposta conhecida. Os testes do PartCraft executam todas elas, e onde o PartCraft tem um estudo próprio para a mesma tarefa, a resposta do script é comparada com esse estudo na mesma malha:

- a flecha da ponta da viga em consola face à teoria de vigas (dentro de 0,2 % com cubos, 0,05 % com tetraedros), e face aos solucionadores da área de trabalho **Simulação** na mesma malha (iguais a muitas casas decimais);
- a primeira frequência da viga em consola face à teoria de vigas (0,24 % mais baixa, como é de esperar numa viga curta) e face ao solucionador modal da **Simulação**;
- calor: uma parede plana aquecida exatamente, um pequeno corpo a arrefecer como diz a fórmula de capacidade concentrada, a temperatura de uma laje a extinguir-se como diz a teoria;
- otimização topológica: `top88` reproduz as 94 iterações e a flexibilidade 203.1925 do artigo (e 218.8032 com o filtro de densidade); `topopt3d` termina na mesma flexibilidade que a área de trabalho **Generativa** com as mesmas definições;
- a capacidade de um condensador e o campo de um solenoide longo face aos seus valores de manual, o campo no entreferro do eletroíman face à fórmula do circuito magnético, e os ímanes permanentes face a um íman redondo no ar e a um íman fechado por uma armadura de ferro;
- escoamento em canal face ao perfil parabólico exato.

## Ler uma função

1. Abra o separador **Biblioteca** do painel de scripts.
2. Clique numa função. O seu cabeçalho mostra: o que calcula, o método, as unidades, as hipóteses e limites, as **referências** (livro ou artigo, com números de equação) e uma **verificação** — um caso pequeno com resposta conhecida que os próprios testes do PartCraft executam.
3. {{ui:Abrir (só de leitura)}} abre o script completo num separador com contorno a tracejado. Pode executá-lo, selecionar e executar partes dele, mas não o pode alterar.

## Alterar uma função

Prima {{ui:Fazer uma cópia}} (ou **Fazer uma cópia para editar** acima de um separador só de leitura). A cópia é um script na sua peça com o mesmo nome, por isso fica guardada com a peça, e **todas as chamadas a essa função passam a usar a sua cópia** — o editor indica-o acima do script. Mude o nome da cópia para manter as duas.

## Usar uma função

Chame uma função da biblioteca a partir de qualquer script pelo seu nome, como uma função incorporada:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Os resultados voltam como valores na área de trabalho; os gráficos e campos que mostram aparecem na vista e nas subvisualizações.

Por exemplo, uma análise estática da peça aberta leva algumas linhas:

```
v = voxel_mesh(part(), 2);                   % cubos de 2 mm
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % prender a base
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N para baixo no topo
r = static_voxel(v, 210000, 0.3, bc);       % aço
```

`r` guarda os deslocamentos, as tensões e as reações; a tensão de von Mises é desenhada na peça deformada. Para peças curvas use `tet_mesh` e `static_tet`, que também podem carregar e prender faces inteiras (`face_nodes`).

:::note
As funções da biblioteca são escritas em CraftScript, e um script Lua chama-as através de `cs`, como às funções incorporadas: `cs.static_tet(t, 200000, 0.3, bc)` (ver [Scripts em Lua](topic:craftscript-lua)). Cada função resolve um material e um caso de carga; os cabeçalhos indicam o que mais não está coberto.
:::
