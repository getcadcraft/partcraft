---
title: Escrever um gerador
summary: Um gerador é um script em CraftScript, Lua ou Python com linhas de comentário que declaram suas entradas. Como as entradas viram um formulário, o que o script deve deixar (body, sheet, problems), um pequeno exemplo completo e como abrir seu script como gerador.
keywords: gerador, escrever, script, craftscript, cabeçalho, entrada, @input, @generator, body, sheet, problems, to_body, mfg_check, ficha de dados, exemplo, reticulado, campo
from: ed8a5ed8
---

Um gerador é um script comum ([CraftScript](topic:craftscript), Lua ou Python) com algumas linhas de comentário no início. O PartCraft lê os comentários e monta o formulário; seu script lê as entradas como variáveis que já estão definidas.

## O cabeçalho

Coloque estas linhas em comentário (`%` no CraftScript, `--` no Lua, `#` no Python):

```
% @generator Trocador de calor
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Vazão mássica"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Superfície"
% @input solid: = true
% @input note: = "texto"
```

Uma entrada é `nome: unidade = padrão`, depois opcionalmente um intervalo `[mín .. máx]` (os números ficam dentro dele), uma lista de opções `{a, b, c}` e um rótulo entre aspas. A unidade é apenas um rótulo para o formulário: **o valor chega nessa unidade**, então um script que quer SI converte o valor, e `to_si(value, 'kg/s', 'kg/s')` também verifica se a unidade é a que você imagina. Um nome é formado por letras, dígitos e sublinhado; `body`, `sheet` e `problems` são reservados.

## O que o script deixa

| Variável | O que é |
|---|---|
| `body` | **Obrigatória.** Uma malha de superfície, geralmente de `[body, info] = to_body(field, h)`. Ela é reparada e verificada ao final da execução. |
| `sheet` | Opcional. Uma estrutura: cada campo é um número ou texto, ou uma estrutura com `value`, `unit`, `ref` e `note`. Ela vira a ficha de dados. |
| `problems` | Opcional. A célula `problems` de `mfg_check(field, 'sls', struct(), h)`, ou suas próprias entradas. Elas vão para as verificações e para a lista de problemas. |

## Um pequeno exemplo completo

```
% Um cubo oco com parede.
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
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'da malha');
```

Ele gera uma caixa fechada, e a verificação informa que o interior selado é um erro para um processo por pó. Faça o tamanho do voxel `h` no máximo um terço da parede mais fina que você quer: abaixo de cerca de três voxels, uma parede não é confiável.

## Campos

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (um sólido de revolução a partir de um perfil), `tpms` (superfícies giroide, Schwarz P e diamante, com tamanho de célula e parede que podem mudar ao longo da peça), `lattice` e `lattice_beams`, `along` (um canal redondo ao longo de um caminho), as operações booleanas `field_union`, `field_intersect`, `field_subtract`, a suave `field_blend`, e `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` dá a distância com sinal nos pontos (negativa por dentro), `field_voxel` dá os voxels para os solvers. [Campos](topic:fields) explica o que são.

Limites que convém conhecer: uma parede de chapa mais espessa que cerca de um quarto da célula fecha os canais; um recurso mais fino que cerca de três voxels pode estrangular; `along` une cones redondos, então um raio que muda rapidamente deixa um abaulamento (use `field_revolve` para um perfil).

## Abrir seu script como gerador

No espaço de trabalho {{ui:Engenharia}}, clique em {{ui:Abrir}} e escolha o arquivo. Um script sem linha `@generator` ou `@input` é recusado: não haveria nada para definir. O gerador fica guardado neste navegador (até 20), e {{ui:Remover}} o exclui. Um corpo iniciado a partir dele leva uma cópia do script, então a peça não depende dele.

Um arquivo também pode conter vários geradores: um pacote JSON `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
