---
title: Abrir uma peça padronizada
summary: Comece uma peça a partir de um parafuso, porca, arruela, pino, rolamento ou chaveta dimensionados pelo seu padrão, com cada tamanho da tabela do padrão como uma configuração.
keywords: peça padronizada, peças padronizadas, parafuso, rosca, sextavado, porca, arruela, pino, cavilha, rolamento, rolamento de esferas, chaveta, chaveta paralela, elemento de fixação, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, modelo, biblioteca
from: b9e2811f
---

O PartCraft abre peças mecânicas comuns já prontas: as dimensões vêm das tabelas dos padrões, e cada tamanho da tabela é uma configuração para a qual você pode trocar.

## Abrir uma

1. Clique em {{ui:Peça padrão}} no grupo Arquivo.
2. Em {{ui:Peça}}, escolha o tipo, por exemplo {{ui:Parafuso de cabeça sextavada (ISO 4017)}}.
3. Em {{ui:Tamanho}}, escolha o tamanho, por exemplo `M10 × 40`.
4. Clique em {{ui:Abrir}}.

A peça abre como uma nova peça, ainda não salva. Salve-a para mantê-la ({{key:Mod+S}}).

| Peça | Padrão | Parâmetros |
|---|---|---|
| Parafuso de cabeça sextavada, parafuso sextavado | ISO 4017, ISO 4014, ASME B18.2.1 (polegada) | `d` tamanho da rosca, `s` distância entre planos, `k` altura da cabeça, `l` comprimento |
| Porca sextavada | ISO 4032, ASME B18.2.2 (polegada) | `d`, `s`, `height` |
| Arruela lisa | ISO 7089 | `d1` interna, `d2` externa, `h` espessura |
| Pino paralelo | ISO 2338 | `d`, `l` |
| Rolamento rígido de esferas | ISO 15 | `d` furo, `D` diâmetro externo, `B` largura |
| Chaveta paralela | DIN 6885-1, forma A | `b` largura, `h` altura, `l` comprimento |

## Mudar o tamanho

Cada tamanho é uma configuração (veja [Configurações e tabelas de projeto](topic:design-tables)): abra {{ui:Parâmetros}} e escolha outro, ou mude um parâmetro, como `l` para um parafuso mais longo, e salve-o como uma configuração sua.

## O que é modelado

- Parafusos e parafusos sextavados: a cabeça sextavada e um corpo liso. Porcas: o sextavado com um furo do diâmetro nominal da rosca. Roscas não são modeladas; adicione uma com {{ui:Rosca}} se precisar (veja [Roscas](topic:threads)).
- Pinos: um cilindro liso; os chanfros das extremidades são omitidos.
- Rolamentos: apenas o envelope externo (um anel do furo, o diâmetro externo e a largura), que é o que você precisa para posicionar um.
- Chavetas: a chaveta de extremidades arredondadas.

A peça é de aço, então o painel de massa mostra o peso dela. Engrenagens ainda não estão disponíveis aqui: o PartCraft não tem um recurso de dentes, e um disco não é uma engrenagem. O CadCraft desenha engrenagens pela convenção de desenho, e a biblioteca as tem como desenhos.
