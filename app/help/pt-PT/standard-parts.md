---
title: Abrir uma peça normalizada
summary: Iniciar uma peça a partir de um parafuso, porca, anilha, pino, rolamento ou chaveta dimensionados segundo a sua norma, com cada medida da tabela da norma como configuração.
keywords: peça normalizada, peças normalizadas, parafuso, cabeça sextavada, porca, anilha, pino, cavilha, rolamento, rolamento de esferas, chaveta, chaveta paralela, elemento de fixação, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, modelo, biblioteca
from: b9e2811f
---

O PartCraft abre peças mecânicas comuns já feitas: as dimensões vêm das tabelas das normas, e cada medida da tabela é uma configuração para a qual se pode mudar.

## Abrir uma

1. Clicar em {{ui:Peça normalizada}} no grupo Ficheiro.
2. Em {{ui:Peça}}, escolher o tipo, por exemplo {{ui:Parafuso de cabeça sextavada (ISO 4017)}}.
3. Em {{ui:Formato}}, escolher a medida, por exemplo `M10 × 40`.
4. Clicar em {{ui:Abrir}}.

A peça abre como uma nova peça, não guardada. Guarde-a para a manter ({{key:Mod+S}}).

| Peça | Norma | Parâmetros |
|---|---|---|
| Parafuso de cabeça sextavada, parafuso sextavado | ISO 4017, ISO 4014, ASME B18.2.1 (polegada) | `d` tamanho da rosca, `s` distância entre faces, `k` altura da cabeça, `l` comprimento |
| Porca sextavada | ISO 4032, ASME B18.2.2 (polegada) | `d`, `s`, `height` |
| Anilha lisa | ISO 7089 | `d1` interior, `d2` exterior, `h` espessura |
| Pino paralelo | ISO 2338 | `d`, `l` |
| Rolamento rígido de esferas | ISO 15 | `d` furo, `D` diâmetro exterior, `B` largura |
| Chaveta paralela | DIN 6885-1, forma A | `b` largura, `h` altura, `l` comprimento |

## Alterar a medida

Cada medida é uma configuração (ver [Configurações e tabelas de projeto](topic:design-tables)): abra {{ui:Parâmetros}} e escolha outra, ou altere um parâmetro, como `l` para um parafuso mais comprido, e guarde-o como configuração própria.

## O que é modelado

- Parafusos e pernos: a cabeça sextavada e um corpo liso. Porcas: o sextavado com um furo do diâmetro nominal da rosca. As roscas não são modeladas; acrescente uma com {{ui:Rosca}} se precisar (ver [Roscas](topic:threads)).
- Pinos: um cilindro liso; os chanfros das extremidades ficam de fora.
- Rolamentos: apenas o envelope exterior (um anel com o furo, o diâmetro exterior e a largura), que é o necessário para o posicionar.
- Chavetas: a chaveta de extremidades arredondadas.

O material da peça é aço, pelo que o painel de massa mostra o seu peso. As engrenagens ainda não existem aqui: o PartCraft não tem operação de dentes, e um disco não é uma engrenagem. O CadCraft desenha engrenagens segundo a convenção de desenho, e a biblioteca tem-nas como desenhos.
