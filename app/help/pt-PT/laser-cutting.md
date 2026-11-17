---
title: Enviar um desenho para um laser
summary: Escolha o que faz cada camada (cortar, vincar, gravar, preencher, imagem), pré-visualize os movimentos da cabeça, guarde o G-code em modo laser GRBL ou envie-o a partir do navegador depois de enquadrar o trabalho.
keywords: laser, cortador laser, gravador laser, GRBL, G-code, gravar, preencher, dithering, gravação de imagem, vincar, cortar, Web Serial, Linux, enquadrar o trabalho, potência, velocidade, passagens
from: 327b3c46
---

O painel {{ui:Laser}} transforma as camadas de um desenho num programa para um laser que funciona com GRBL (a maioria dos controladores de díodo e CO2 de amadores e pequenas oficinas). No PartCraft, escolha {{ui:Exportar}} › {{ui:Programa laser…}}, depois {{ui:Adicionar contornos de um DXF…}}: os contornos e os furos entram na camada CUT. As planificações de peças de chapa metálica (com as linhas de dobra na camada BEND) precisam do kernel exato, que esta versão não tem. As definições são guardadas no ficheiro da peça ou da montagem.

:::warning
Teste primeiro cada definição em sucata, use proteção ocular adequada ao laser, mantenha a tampa fechada onde existir uma, e nunca deixe um laser em funcionamento sem vigilância. Os números com que uma camada começa são valores provisórios, não recomendações para nenhum material.
:::

## Escolher o que faz cada camada

Cada camada do desenho é uma linha. {{ui:Faz}} define-a como **Cortar**, **Vincar**, **Gravar linhas**, **Preencher formas**, **Gravar imagem** ou **Não enviar**, com uma {{ui:Potência %}}, uma {{ui:Velocidade mm/min}} e um número de {{ui:Passagens}}.

- **Preencher** queima o interior das formas fechadas em linhas, com {{ui:Espaçamento entre linhas}} de distância, a um {{ui:Ângulo}}, nos dois sentidos ou num só, com uma sobreposição para a cabeça já estar na velocidade quando o laser liga; o cruzado acrescenta uma segunda passagem a 90°. Uma forma com um furo fica aberta no furo.
- **Gravar imagem** transforma uma imagem em pontos (Floyd–Steinberg, Atkinson, ordenado, ou simples preto e branco com um limiar) ou, com *níveis de cinzento*, em potência variável.
- Ordem: imagens e preenchimentos primeiro, depois gravação de linhas, depois vincos, depois cortes, para que uma peça já cortada não se mova enquanto é gravada. Dentro de uma camada, os percursos vão **primeiro por dentro** (um furo antes da chapa em que está), seguindo sempre o mais próximo.

## Pré-visualizar e depois guardar

A pré-visualização desenha o que a cabeça faz: linhas de queima a cores, movimentos rápidos a cinzento e uma caixa verde à volta de tudo o que queima. Por baixo estão o tamanho, o comprimento de queima e uma estimativa de tempo (sem aceleração; uma máquina real demora mais). {{ui:Guardar G-code…}} escreve G-code em modo laser GRBL: `$32=1`, `M4` (ou `M3`) com valores S, movimentos `G0` e `G1`, `M5` no fim. X0 Y0 é o canto inferior esquerdo do trabalho, a não ser que escolha a origem do desenho: defina aí o zero de trabalho da máquina. O G-code segue o modo laser documentado do GRBL; ainda não foi testado num laser real.

## Enviar a partir do navegador

No Chrome e no Edge, {{ui:Ligar…}} pede que escolha a porta USB do laser. Nada se liga nem envia até premir um botão. Prima primeiro {{ui:Enquadrar o trabalho}}: a cabeça percorre o retângulo do trabalho com o laser **desligado** (ou à potência baixa que definiu para um apontador), para que veja onde vai queimar. Só então fica ativo {{ui:Enviar trabalho}}, e volta a ficar inativo se alterar algo. {{ui:Pausa}} mantém a cabeça parada, {{ui:Parar}} também a mantém, repõe o controlador (o laser desliga-se) e envia `M5`. Onde o Web Serial não existir (Firefox, Safari, e CadCraft Studio, cuja vista web ainda não o tem), guarde o G-code e envie-o com o programa do próprio laser.

## Ainda não implementado

Formatos de outros controladores (Ruida, lasers Marlin, ficheiros de fabricantes), micro-ligações (tabs) e entradas de corte (lead-ins), offset de largura de corte (kerf), bibliotecas de materiais, eixos rotativos e eixo Z, alinhamento por câmara.
