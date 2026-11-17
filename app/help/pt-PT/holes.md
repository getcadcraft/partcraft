---
title: Furar e fazer rebaixos em pontos de esboço
summary: Coloque pontos num esboço sobre uma face, faça furos simples, com rebaixo, com escareado ou roscados (ISO métrica) em cada ponto, defina diâmetro e profundidade, e corrija furos que perfuram no sentido errado.
keywords: furo, assistente de furos, furar, rosca modelada, impressão 3D, rebaixo, cbore, escareado, csink, furo roscado, rosca, broca de macho, rosca métrica, M6, atravessar tudo, furo cego, furo de parafuso, pontos, centros dos furos
from: 8e1eef83
---

{{ui:Furo}} fura um furo em cada ponto solto de um esboço. Um ponto solto é um feito com a ferramenta Ponto, não a extremidade de uma linha nem o centro de um círculo.

## Furar numa face

1. Clique na face plana onde vai furar e escolha {{ui:Esboço nesta face}}.
2. Prima {{key:P}} e clique onde vai cada furo. Cote os pontos a partir das arestas ou da origem se a posição importar (ver [Definir totalmente um esboço](topic:relations-dimensions)).
3. Escolha {{ui:Sair}}.
4. Escolha {{ui:Furo}}.

Os furos atravessam a peça, com 6 mm de diâmetro. O painel direito mostra **Furos**: quantos foram feitos, « um por ponto do esboço ».

**Um furo, rápido:** clique na face plana onde vai o furo e escolha {{ui:Furo aqui}} no painel direito. O PartCraft adiciona um esboço na face com um ponto onde clicou e um Furo através da peça, num só passo. Escreva um número de imediato e prima {{key:Enter}} para o diâmetro. Para o posicionar com exatidão, abra o novo esboço e cote o ponto.

**Esboço usado:** o esboço que acabou de fechar ou o selecionado; caso contrário, o esboço não usado mais recente que tenha pontos soltos. Se não houver nenhum: « Faça primeiro um esboço com pontos onde vão os furos (Esboço numa face, depois Ponto). »

## Definições

| Definição | Opções | Predefinição |
|---|---|---|
| **Tipo** | Simples, Rebaixo, Escareado, Roscado (ISO métrico) | Simples |
| **Diâmetro (mm)** | O diâmetro do furo | 6 |
| **Atravessar tudo** | Marcado: atravessa a peça por completo. Desmarque para um furo cego | Marcado |
| **Profundidade (mm)** | Mostrado quando Atravessar tudo está desmarcado | 10 |
| **Diâmetro do rebaixo ⌀** | Mostrado para Rebaixo: o diâmetro do rebaixo mais largo | 11 |
| **Profundidade do rebaixo** | Mostrado para Rebaixo | 6 |
| **Inverter sentido** | Fura para o outro lado do plano do esboço | Desligado |

Os furos perfuram o material, em esquadria com o plano do esboço. A profundidade de um furo cego é medida a partir do plano do esboço; o seu fundo é plano.

## Um furo de parafuso com rebaixo

1. Faça os furos como acima.
2. Defina **Tipo** como **Rebaixo**.
3. Defina **Diâmetro (mm)** como `6.6` (folga para um parafuso M6), **Diâmetro do rebaixo ⌀** como `11` e **Profundidade do rebaixo** como `6.5`.

O rebaixo tem de ser mais largo do que o furo (« O rebaixo tem de ser mais largo do que o furo. ») e, num furo cego, menos fundo do que ele (« O rebaixo tem de ser menos fundo do que o furo. »).

## Uma circunferência de furos

Para furos espaçados de forma uniforme em torno de um centro, faça **um** furo e crie um padrão com ele: selecione a operação Furo e depois escolha {{ui:Circular}} (ver [Operações de padrão e espelho](topic:patterns-mirror)). O padrão acompanha quando altera o tamanho do furo.

## Quando os furos vão no sentido errado

- « Não há nada para furar desse lado do esboço. Experimente inverter o sentido. » O esboço está do lado oposto do material. Marque **Inverter sentido**.
- « Coloque pontos de esboço onde vão os furos (ferramenta Ponto) e depois faça o furo. » O esboço não tem pontos soltos. Extremidades de linhas e centros de círculos não contam.
- « Ainda não há nada para furar. » Um furo precisa de um sólido. Faça primeiro um corpo.

## Furos em montagens

Cada furo tem um eixo. Numa montagem, **Centrar em** pode colocar uma união no eixo de um furo, listada como « Hole1, hole 2 », para que um pino ou parafuso se alinhe com ele. Veja [Construir uma montagem](topic:build-assembly).

## Furos escareados

Defina **Tipo** como **Escareado**, depois **Diâmetro do escareado ⌀** (à superfície) e **Ângulo do escareado**: 90° (parafusos de cabeça chata ISO métrica) ou 82° (parafusos em polegadas). Tire o diâmetro do escareado dos dados do fabricante do parafuso (um pouco mais do que o diâmetro da cabeça do parafuso). A face do cone é chamada « escareado » nos painéis.

## Furos roscados

Defina **Tipo** como **Roscado (ISO métrico)** e escolha a **Rosca**, de M2 a M24 de passo grosso. O furo é feito com o diâmetro da broca de macho da tabela abaixo (diâmetro nominal menos o passo, na série de brocas, como a ISO 2306 indica para uma rosca 6H); a caixa **Diâmetro (mm)** não é usada. Para um furo cego, **Profundidade da rosca (mm)** define até onde vai a rosca.

| Rosca | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Passo | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Broca de macho ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

A rosca é **cosmética** no início: o modelo tem o furo feito, a vista desenha o diâmetro maior da rosca como círculos tracejados, e a folha de desenho leva a chamada como nota, como « 4× M8×1.25 - 6H, rosca passante ». O STEP exporta apenas o furo feito.

Marque **Modelada** para cortar a rosca helicoidal real no furo, para impressão 3D. **Folga (mm)** torna-o maior em todo o redor, para que um parafuso impresso encaixe: 0.1 a 0.2 mm serve a maioria das impressoras. A chamada então termina em « (modelada) ». Veja [Roscas em veios e furos, desenhadas ou modeladas](topic:threads), que também põe roscas em veios.

:::note
Furos de contrafuro, roscas em polegadas e roscas de tubo ainda não estão implementados.
:::
