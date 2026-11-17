---
title: Escrever um gerador
summary: Um gerador é um script CraftScript, Lua ou Python com linhas de comentário que declaram as suas entradas. Como as entradas se tornam um formulário, o que o script deve deixar (corpo, folha, problemas), um pequeno exemplo completo e como abrir o seu script como gerador.
keywords: gerador, escrever, script, craftscript, cabeçalho, entrada, @input, @generator, corpo, folha, problemas, to_body, mfg_check, folha de dados, exemplo, treliça, campo
from: ed8a5ed8
---

Um gerador é um script comum ([CraftScript](topic:craftscript), Lua ou Python) com algumas linhas de comentário no início. O PartCraft lê os comentários e cria o formulário; o seu script lê as entradas como variáveis já definidas.

## O cabeçalho

Coloque estas linhas em linhas de comentário (`%` em CraftScript, `--` em Lua, `#` em Python):

```
% @generator Heat exchanger
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Mass flow"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Surface"
% @input solid: = true
% @input note: = "text"
```

Uma entrada é `nome: unidade = valor predefinido`, seguida opcionalmente de um intervalo `[mín .. máx]` (os números ficam dentro dele), uma lista de opções `{a, b, c}` e um rótulo entre aspas. A unidade é apenas um rótulo para o formulário: **o valor chega nessa unidade**, por isso um script que queira SI converte-o, e `to_si(value, 'kg/s', 'kg/s')` também verifica se a unidade significa o que pensa. Um nome é formado por letras, algarismos e sublinhado; `body`, `sheet` e `problems` estão reservados.

## O que o script deixa

| Variável | O que é |
|---|---|
| `body` | **Obrigatório.** Uma malha de superfície, normalmente de `[body, info] = to_body(field, h)`. É reparada e verificada quando a execução termina. |
| `sheet` | Opcional. Uma estrutura: cada campo é um número ou texto, ou uma estrutura com `value`, `unit`, `ref` e `note`. Torna-se a folha de dados. |
| `problems` | Opcional. A célula `problems` de `mfg_check(field, 'sls', struct(), h)`, ou entradas próprias. Vão para as verificações e para a lista de problemas. |

## Um pequeno exemplo completo

```
% Um cubo oco com uma parede.
% @generator Cubo oco
% @input side: mm = 12 [4 .. 40] "Lado"
% @input wall: mm = 1.5 [0.5 .. 5] "Parede"
% @input h: mm = 0.5 [0.25 .. 2] "Tamanho do voxel"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'of the mesh');
```

Gera uma caixa fechada, e a verificação assinala o interior selado como erro para um processo de pó. Torne o tamanho do voxel `h` no máximo um terço da parede mais fina que pretende: abaixo de cerca de três voxels, uma parede não é fiável.

## Campos

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (um sólido de revolução a partir de um perfil), `tpms` (superfícies gyroid, Schwarz P e diamante, com um tamanho de célula e uma parede que podem mudar ao longo da peça), `lattice` e `lattice_beams`, `along` (um canal redondo ao longo de um caminho), as operações booleanas `field_union`, `field_intersect`, `field_subtract`, o `field_blend` suave, e `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` dá a distância com sinal nos pontos (negativa no interior), `field_voxel` dá voxels para os solucionadores. [Campos](topic:fields) explica o que são.

Limites que convém conhecer: uma parede em folha mais grossa que cerca de um quarto da célula fecha os canais; um elemento mais fino que cerca de três voxels pode estrangular; `along` une cones redondos, por isso um raio que muda depressa deixa uma protuberância (use `field_revolve` para um perfil).

## Abrir o seu script como gerador

Na área de trabalho {{ui:Engineer}} clique em {{ui:Open}} e escolha o ficheiro. Um script sem linha `@generator` ou `@input` é recusado: não haveria nada para definir. O gerador fica guardado neste navegador (até 20), e {{ui:Remove}} elimina-o. Um corpo iniciado a partir dele leva uma cópia do script, por isso a peça não depende dele.

Um ficheiro também pode conter vários geradores: um pacote JSON `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
