---
title: Nesting de peças planas em chapas
summary: Disponha peças planas em chapas ou num rolo com o mínimo de desperdício que a PartCraft conseguir encontrar, nunca mais perto do que o espaçamento indicado, e guarde a disposição como DXF para a laser, plasma, jato de água ou fresadora.
keywords: nesting, nest, chapa, rolo, laser, plasma, jato de água, fresadora, corte, aproveitamento, uso de material, sucata, desperdício, espaçamento, kerf, fio, sentido de laminação, dxf, planificação, contornos
from: 8dcce1a6
---

**Nesting** coloca muitas peças planas numa chapa, de modo a que sobre o mínimo possível de material. A PartCraft dispõe as peças uma a uma, cada uma onde deixe mais curto o comprimento usado da chapa, experimenta várias ordens e termina em poucos segundos, ficando com a melhor. As peças podem encaixar nos furos umas das outras e no interior de um L ou de um U.

## Abrir

- {{ui:Exportar}} › {{ui:Nesting de peças planas em chapas…}} abre-o com a planificação da peça ou, numa montagem, com a planificação de cada peça de chapa metálica, tantas quantas as cópias.
- Numa peça de chapa metálica, {{ui:Planificar}} e depois {{ui:Nesting em chapas…}} sob a planificação.
- {{ui:Adicionar contornos de um DXF…}} acrescenta como peça cada contorno fechado de um ficheiro DXF: um desenho da CadCraft guardado como DXF, ou um ficheiro do software próprio da máquina de corte. Um contorno dentro de outro é um furo nele. Linhas e arcos que se unem extremo a extremo contam como um só contorno. Os ficheiros em polegadas, centímetros ou metros são convertidos para milímetros.

:::note
Planificar chapa metálica exige um núcleo de geometria exato (ver [Chapa metálica](topic:sheet-metal)). Os contornos de um ficheiro DXF funcionam sempre.
:::

## Configurar

Para cada peça, indique **quantas** são necessárias e o seu **fio**: {{ui:Qualquer direção}}, {{ui:Ao longo da chapa (como desenhada)}} para chapa escovada ou laminada que tenha de correr num só sentido, ou {{ui:Transversal à chapa}}.

Em **Chapas**:

- **Stock**: {{ui:Chapas}} de um dado comprimento e largura (e quantas existem; 0 = tantas quantas forem necessárias), ou {{ui:Um rolo}} de uma dada largura, com o comprimento necessário.
- A **margem do bordo** fica livre em cada bordo da chapa (para os grampos, ou para um bordo irregular).
- O **espaço entre peças** é a menor distância entre duas linhas de corte: pelo menos a largura de corte (kerf) da máquina, mais o que o material exigir.
- **Rotações**: os ângulos a que uma peça pode ser rodada, de 90° em 90° por predefinição. Menos rotações correm mais depressa; mais podem aproveitar melhor a chapa.
- **Peças podem ser viradas** permite pôr uma peça de cabeça para baixo. Deixe esta opção desligada em chapa metálica: uma planificação virada dobra para o outro lado.

Prima {{ui:Fazer o nesting}}. A pré-visualização mostra cada chapa; os dados indicam quantas chapas (ou quanto do rolo) foram usadas e quanto material ocupam as peças. Qualquer peça que não tenha cabido é indicada pelo nome.

## Guardar

{{ui:Guardar DXF}} escreve a disposição como DXF (R12, milímetros), uma chapa a seguir à outra: os contornos das chapas na camada SHEET, as peças na camada PARTS (os arcos mantidos como arcos), e o nome de cada peça na camada LABELS.

:::tip
Misturar várias peças costuma encaixar melhor do que muitas cópias de uma só: as peças pequenas enchem os espaços entre as grandes.
:::

## Cortar as chapas (G-code)

**Exportar › Chapas com nesting para G-code** lê um DXF com nesting (este, ou as chapas do complemento Cabinets na CadCraft) e cria um programa por chapa através do pós-processador que escolher: primeiro os furos e os recortes, depois os contornos, cada corte a um raio da ferramenta para fora da peça, atravessando a chapa e mais 1 mm, com talas se as pedir. A lista de pós-processadores inclui os incorporados e os do próprio estudo Manufacture. Verifique cada programa num simulador antes de o executar: a furação e as bolsas não são feitas.

## O que verificar

A PartCraft verifica de novo cada disposição sobre as formas verdadeiras (e não sobre a grelha em que procurou): nenhuma peça fica mais perto de outra do que o espaçamento, e nada entra nas margens. Não planeia o corte: as entradas de corte (lead-ins), a ordem de corte, o corte de arestas comuns uma só vez e a manutenção da chapa restante são tarefas do software da máquina de corte. Verifique aí o DXF antes de cortar.
