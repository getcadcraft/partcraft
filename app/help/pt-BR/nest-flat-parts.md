---
title: Encaixar peças planas em chapas
summary: Dispor peças planas em chapas ou em um rolo com o menor desperdício que o PartCraft conseguir, nunca mais perto do que o espaçamento informado, e salvar o layout como DXF para laser, plasma, waterjet ou router.
keywords: encaixe, encaixar, chapa, placa, rolo, laser, plasma, waterjet, router, corte, aproveitamento, uso de material, sucata, perda, espaçamento, largura de corte, sentido do grão, direção de laminação, dxf, planificação, contornos
from: 8dcce1a6
---

**Encaixe** coloca muitas peças planas em uma chapa para que sobre o mínimo possível de material. O PartCraft posiciona as peças uma a uma, cada uma onde deixa o comprimento usado da chapa mais curto, testa várias ordens e termina em poucos segundos, e mantém a melhor. As peças podem ficar dentro dos furos umas das outras e na parte interna de um L ou de um U.

## Abrir

- {{ui:Export}} › {{ui:Encaixar peças planas em chapas…}} abre com a planificação da peça ou — em uma montagem — com a planificação de cada peça de chapa metálica, tantas quantas forem as cópias.
- Em uma peça de chapa metálica, {{ui:Planificar}} e depois {{ui:Encaixar em chapas…}} sob a planificação.
- {{ui:Adicionar contornos de um DXF…}} adiciona cada contorno fechado de um arquivo DXF como uma peça: um desenho do CadCraft salvo como DXF, ou um arquivo do próprio software da sua cortadora. Um contorno dentro de outro é um furo nele. Linhas e arcos que se unem ponta a ponta contam como um único contorno. Arquivos em polegadas, centímetros ou metros são convertidos para milímetros.

:::note
Planificar chapa metálica precisa de um kernel de geometria exato (veja [Chapa metálica](topic:sheet-metal)). Contornos de um arquivo DXF sempre funcionam.
:::

## Configurar

Para cada peça informe **quantas** você precisa e o seu **sentido do grão**: {{ui:Qualquer direção}}, {{ui:Ao longo da chapa (como desenhada)}} para chapa escovada ou laminada que precisa seguir um sentido, ou {{ui:Atravessada na chapa}}.

Em **Chapas**:

- **Estoque**: {{ui:Chapas}} de um comprimento e uma largura dados (e quantas você tem; 0 = quantas forem necessárias), ou {{ui:Um rolo}} de uma largura dada, com o comprimento necessário.
- **Margem da borda** fica livre em cada borda da chapa (para grampos, ou para uma borda irregular).
- **Espaço entre peças** é a menor distância entre duas linhas de corte: no mínimo a largura de corte da sua cortadora, mais o que o material exigir.
- **Giros**: os ângulos em que uma peça pode ser girada, a cada 90° por padrão. Menos giros rodam mais rápido; mais giros podem aproveitar melhor a chapa.
- **Peças podem ser invertidas** permite colocar uma peça de cabeça para baixo. Deixe desligada para chapa metálica: uma planificação invertida dobra para o outro lado.

Pressione {{ui:Encaixar}}. A prévia mostra cada chapa; os dados informam quantas chapas (ou quanto do rolo) foram usadas e quanto do material as peças ocupam. Qualquer peça que não coube é indicada pelo nome.

## Salvar

{{ui:Salvar DXF}} grava o layout como DXF (R12, milímetros), uma chapa abaixo da outra: os contornos das chapas na camada SHEET, as peças em PARTS (arcos mantidos como arcos), o nome de cada peça na camada LABELS.

:::tip
Misturar várias peças geralmente encaixa melhor do que muitas cópias de uma só: peças pequenas preenchem os espaços entre as grandes.
:::

## Cortar as chapas (G-code)

**Exportar › Chapas encaixadas para G-code** lê um DXF encaixado (este, ou as chapas do complemento Cabinets no CadCraft) e gera um programa por chapa pelo pós-processador que você escolher: primeiro furos e recortes internos, depois os contornos, cada corte com o raio da ferramenta para fora da peça, através da chapa e mais 1 mm, com amarras se você pedir. A lista de pós-processadores são os integrados mais os do seu estudo de Manufatura. Confira cada programa em um simulador antes de executá-lo: furação e bolsões não são feitos.

## O que verificar

O PartCraft verifica cada layout de novo sobre as formas verdadeiras (não sobre a grade em que procurou): nenhuma peça mais perto do que o espaçamento, nada dentro das margens. Ele não planeja o corte: linhas de entrada, a ordem de corte, cortar arestas comuns uma vez só e manter a sobra da chapa são trabalho do software da sua cortadora. Confira o DXF lá antes de cortar.
