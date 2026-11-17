---
title: Enviar um desenho para um laser
summary: Escolha o que cada camada faz (cortar, vincar, gravar, preencher, imagem), visualize os movimentos da cabeça, salve o G-code em modo laser GRBL ou envie-o pelo navegador depois de percorrer o contorno do trabalho.
keywords: laser, cortadora a laser, gravadora a laser, GRBL, G-code, gravar, preencher, meio-tom, gravação de imagem, vincar, cortar, Web Serial, Linux, percorrer o contorno, potência, velocidade, passadas
from: 327b3c46
---

O painel {{ui:Laser}} transforma as camadas de um desenho em um programa para um laser que roda GRBL (a maioria dos controladores de diodo e CO2 de hobby e de pequenas oficinas). No PartCraft, escolha {{ui:Export}} › {{ui:Laser program…}} e depois {{ui:Add outlines from a DXF…}}: os contornos e furos entram na camada CUT. As planificações de peças de chapa metálica (com as linhas de dobra na camada BEND) precisam do kernel exato, que esta versão não tem. As configurações são salvas no arquivo da peça ou da montagem.

:::warning
Teste todas as configurações em sucata antes, use óculos de proteção adequados ao seu laser, mantenha a tampa fechada quando houver uma e nunca deixe um laser ligado sem supervisão. Os números com que uma camada começa são valores provisórios, não recomendações para nenhum material.
:::

## Escolha o que cada camada faz

Cada camada do desenho é uma linha. Em {{ui:Does}}, escolha **Cortar**, **Vincar**, **Gravar linhas**, **Preencher formas**, **Gravar imagem** ou **Não enviar**, com uma {{ui:Power %}}, uma {{ui:Speed mm/min}} e um número de {{ui:Passes}}.

- **Preencher** queima o interior de formas fechadas em linhas, espaçadas por {{ui:Line spacing}}, em um {{ui:Angle}}, nas duas direções ou em uma só, com um excesso de varredura para que a cabeça esteja em velocidade quando o laser for ligado; hachura cruzada adiciona uma segunda passada a 90°. Uma forma com furo fica aberta no furo.
- **Gravar imagem** transforma uma imagem em pontos (Floyd–Steinberg, Atkinson, ordenado, ou simplesmente preto e branco com um limiar) ou, com *Níveis de cinza*, em potência variável.
- Ordem: imagens e preenchimentos primeiro, depois a gravação de linhas, depois os vincos e por fim os cortes, para que uma peça recortada não se mova enquanto é gravada. Dentro de uma camada, os caminhos seguem **de dentro para fora** (um furo antes da chapa em que ele está), sempre indo ao mais próximo em seguida.

## Visualizar, depois salvar

A visualização desenha o que a cabeça faz: traços de queima em cor, movimentos rápidos em cinza e uma caixa verde em volta de tudo que queima. Abaixo dela ficam o tamanho, o comprimento de queima e uma estimativa de tempo (sem aceleração; uma máquina real leva mais tempo). {{ui:Save G-code…}} grava G-code em modo laser GRBL: `$32=1`, `M4` (ou `M3`) com valores S, movimentos `G0` e `G1`, e `M5` no fim. X0 Y0 é o canto inferior esquerdo do trabalho, a menos que você escolha a origem do desenho: defina ali o zero de trabalho da sua máquina. O G-code segue o modo laser documentado do GRBL; ainda não foi testado em um laser real.

## Enviar pelo navegador

No Chrome e no Edge, {{ui:Connect…}} pede que você escolha a porta USB do laser. Nada se conecta nem envia até você pressionar um botão. Pressione primeiro {{ui:Frame the job}}: a cabeça percorre a caixa do trabalho com o laser **desligado** (ou na potência baixa que você definir para um ponteiro), para que você veja onde ele vai queimar. Só então {{ui:Send job}} fica disponível, e ele volta a ficar indisponível se você alterar algo. {{ui:Pause}} mantém a cabeça parada, {{ui:Stop}} também a mantém parada, reinicia o controlador (o laser é desligado) e envia `M5`. Onde o Web Serial não existe (Firefox, Safari e CadCraft Studio, cuja visualização web ainda não o tem), salve o G-code e envie-o com o programa próprio do seu laser.

## Ainda não implementado

Formatos de outros controladores (Ruida, lasers Marlin, arquivos de fabricantes), abas e entradas de corte, compensação de kerf, bibliotecas de materiais, eixos rotativos e Z, alinhamento por câmera.
