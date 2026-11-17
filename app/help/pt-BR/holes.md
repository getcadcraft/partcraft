---
title: Furar furos e rebaixos em pontos de esboço
summary: Coloque pontos de um esboço em uma face, faça furos simples, com rebaixo, escareados ou roscados (ISO métrica) em cada ponto, defina diâmetro e profundidade e corrija furos que são feitos na direção errada.
keywords: furo, assistente de furo, furar, rosca modelada, impressão 3D, rebaixo, escareado, furo escareado, furo roscado, rosca, broca de rosca, rosca métrica, M6, passante, furo cego, furo de parafuso, pontos, centros de furo
from: 8e1eef83
---

{{ui:Furo}} fura um furo em cada ponto solto de um esboço. Um ponto solto é aquele feito com a ferramenta Ponto, não a extremidade de uma linha nem o centro de um círculo.

## Faça furos em uma face

1. Clique na face plana onde o furo será feito e escolha {{ui:Esboço nesta face}}.
2. Pressione {{key:P}} e clique em cada lugar onde um furo vai. Cote os pontos a partir das arestas ou da origem se a posição importar (veja [Defina totalmente um esboço](topic:relations-dimensions)).
3. Escolha {{ui:Sair}}.
4. Escolha {{ui:Furo}}.

Os furos atravessam a peça, com 6 mm de diâmetro. O painel direito mostra **Furos**: quantos foram feitos, "um por ponto do esboço".

**Um furo, rápido:** clique na face plana onde o furo vai e escolha {{ui:Furo aqui}} no painel direito. O PartCraft adiciona um esboço na face com um ponto onde você clicou e um Furo passante pela peça, em uma única etapa. Digite um número imediatamente e pressione {{key:Enter}} para o diâmetro. Para posicioná-lo com exatidão, abra o novo esboço e cote o ponto.

**Qual esboço é usado:** o esboço que você acabou de fechar ou o selecionado; caso contrário, o esboço não usado mais recente que tenha pontos soltos. Se não houver nenhum: "Faça antes um esboço com pontos onde os furos vão (Esboço em uma face, depois Ponto)."

## Configurações

| Configuração | Opções | Padrão |
|---|---|---|
| **Tipo** | Simples, Rebaixo, Escareado, Roscado (ISO métrico) | Simples |
| **Diâmetro (mm)** | O diâmetro do furo | 6 |
| **Passante** | Marcado: atravessa a peça inteira. Desmarque para um furo cego | Marcado |
| **Profundidade (mm)** | Mostrado quando Passante está desmarcado | 10 |
| **⌀ do rebaixo** | Mostrado para Rebaixo: o diâmetro do rebaixo mais largo | 11 |
| **Profundidade do rebaixo** | Mostrado para Rebaixo | 6 |
| **Inverter direção** | Fura para o outro lado do plano do esboço | Desativado |

Os furos são feitos no material, perpendiculares ao plano do esboço. A profundidade de um furo cego é medida a partir do plano do esboço; o fundo dele é plano.

## Um furo de parafuso com rebaixo

1. Faça os furos como acima.
2. Defina **Tipo** como **Rebaixo**.
3. Defina **Diâmetro (mm)** como `6.6` (folga para um parafuso M6), **⌀ do rebaixo** como `11` e **Profundidade do rebaixo** como `6.5`.

O rebaixo precisa ser mais largo que o furo ("O rebaixo precisa ser mais largo que o furo.") e, para um furo cego, mais raso que ele ("O rebaixo precisa ser mais raso que o furo.").

## Um círculo de furos

Para furos igualmente espaçados em torno de um centro, faça **um** furo e aplique uma matriz: selecione o recurso Furo e depois escolha {{ui:Circular}} (veja [Recursos de matriz e espelhamento](topic:patterns-mirror)). A matriz acompanha quando você altera o tamanho do furo.

## Quando os furos vão na direção errada

- "Não há nada para furar desse lado do esboço. Tente inverter a direção." O esboço fica do lado oposto do material. Marque **Inverter direção**.
- "Coloque pontos de esboço onde os furos vão (ferramenta Ponto) e depois faça o furo." O esboço não tem pontos soltos. Extremidades de linhas e centros de círculos não contam.
- "Ainda não há nada para furar." Um furo precisa de um sólido. Faça antes uma saliência.

## Furos em montagens

Cada furo tem um eixo. Em uma montagem, **Centralizar em** pode colocar uma junta no eixo de um furo, listado como "Furo1, furo 2", para que um pino ou parafuso alinhe com ele. Veja [Construir uma montagem](topic:build-assembly).

## Furos escareados

Defina **Tipo** como **Escareado**, depois **⌀ do escareado** (na superfície) e **Ângulo do escareado**: 90° (parafusos de cabeça chata ISO métrica) ou 82° (parafusos em polegadas). Obtenha o diâmetro do escareado a partir dos dados do fabricante do parafuso (um pouco maior que o diâmetro da cabeça do parafuso). A face do cone é nomeada "escareado" nos painéis.

## Furos roscados

Defina **Tipo** como **Roscado (ISO métrico)** e escolha a **Rosca**, de M2 a M24 grossa. O furo é feito com o diâmetro da broca de rosca da tabela abaixo (diâmetro nominal menos o passo, na série de brocas, como a ISO 2306 lista para uma rosca 6H); a caixa **Diâmetro (mm)** não é usada. Para um furo cego, **Profundidade da rosca (mm)** define até onde a rosca vai.

| Rosca | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Passo | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| ⌀ da broca de rosca | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

A rosca é **cosmética** no início: o modelo tem o furo feito, a vista desenha o diâmetro maior da rosca como círculos tracejados, e a folha do desenho leva a chamada como uma nota, como "4× M8×1.25 - 6H, rosca passante". A exportação STEP exporta apenas o furo feito.

Marque **Modelada** para cortar a rosca helicoidal real no furo, para impressão 3D. **Folga (mm)** a torna maior em todo o contorno, para que um parafuso impresso encaixe: 0.1 a 0.2 mm serve para a maioria das impressoras. A chamada então termina em "(modelada)". Veja [Roscas em eixos e furos, desenhadas ou modeladas](topic:threads), que também coloca roscas em eixos.

:::note
Furos contrafurados, roscas em polegadas e roscas de tubulação ainda não estão implementados.
:::
