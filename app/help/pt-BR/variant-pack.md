---
title: Criar um pacote de variantes a partir das suas configurações
summary: Gere cada configuração de uma peça, ou algumas escolhidas, de uma vez só como STEP, IFC, DWG e uma visualização de cada uma, com uma tabela dos seus parâmetros e a peça como um item da biblioteca com suas variantes.
keywords: pacote de variantes, variantes, configurações, família de peças, exportação em lote, todos os tamanhos, step, ifc, dwg, visualização, tabela, csv, json, biblioteca, configurador, configurador de produto, catálogo, item json
from: 9a6db99f
---

## O que você vai fazer

Entregue **todos os tamanhos de uma peça de uma vez**: um arquivo STEP, IFC e DWG e uma imagem para cada configuração, uma tabela que informa o que cada uma é, e um item da biblioteca que reúne todas em uma única página.

Você precisa primeiro de uma peça com **configurações** (veja [Configurações e tabelas de projeto](topic:design-tables)). Uma configuração que desliga um recurso, como uma chapa com e sem furos, vira uma variante própria.

## Passos

1. Abra a peça. Na guia {{ui:Parâmetros}}, encontre **Configurações**.
2. Clique em {{ui:Pacote de variantes…}}.
3. Marque as configurações a construir (todas estão marcadas) e os arquivos a gravar: STEP, IFC, DWG, uma visualização e o item da biblioteca.
4. Clique em {{ui:Criar o pacote}}. A linha de status conta as variantes à medida que são construídas; sua peça não é alterada.
5. Um arquivo zip é baixado: `<part> variants.zip`.

## O que há no zip

| Arquivo | O que é |
|---|---|
| `<name>.step` | A configuração como um sólido STEP. |
| `<name>.ifc` | IFC4, um elemento com o corpo construído e os parâmetros da peça como propriedades; o valor é o da própria configuração. |
| `<name>.dwg` | As vistas frontal, superior, direita e isométrica como uma folha de desenho em tamanho real. |
| `<name>.svg` | Uma imagem isométrica de linhas dela. |
| `variants.csv`, `variants.json` | A tabela de parâmetros: o id, o nome e o valor de cada parâmetro de cada variante, os recursos que ela desliga, seus arquivos, seu volume e seu tamanho. |
| `<part>.item.json` | A peça como um item da biblioteca com suas variantes (veja abaixo). |
| `README.txt` | O que foi feito, as notas abaixo e o que não foi construído. |

Os arquivos recebem o nome da configuração. Uma configuração que não consegue ser construída (um recurso que não pode ser feito com esses valores) fica fora dos arquivos e da tabela, e é listada no README e em uma mensagem depois que o zip for salvo; as demais são gravadas normalmente.

## Bom saber

- **STEP** é exato quando o kernel exato está ativado na sua versão. Sem ele, o STEP é facetado (triângulos planos), e o README informa isso.
- **DWG** é a folha de desenho, não um modelo 3D. Suas linhas vêm da malha, então uma aresta curva é formada por muitas linhas curtas.
- **O item da biblioteca** traz um corpo e uma planta por variante, nos eixos da própria biblioteca: Z para cima, a frente voltada para −Y, e o ponto de inserção no meio do fundo, na parte inferior. A planta de cada variante é o seu retângulo envolvente. Um item é limitado a 8 MB, então uma variante muito pesada vira uma caixa do seu tamanho, e o README informa quantas.
- A configuração ativa da peça é a variante padrão do item.
- As portas (pontos de conexão para tubos e dutos) não são definidas pelo PartCraft.

## Colocar as variantes em uma página da biblioteca

Envie `<part>.item.json` em **Biblioteca › Enviar** no site. Escolha sua categoria, licença e linha de atribuição, e ele se torna um item da Biblioteca com suas variantes. No BimCraft, ao colocá-lo, é perguntado qual variante, e Trocar oferece as outras. A página em que os visitantes escolhem opções, veem o 3D e baixam uma variante é, por enquanto, uma **prévia para a equipe**: ainda não está aberta ao público.

## Pela linha de comando

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` indica as configurações, `--formats` aceita qualquer um de `step`, `ifc`, `dwg`, `preview`, e `--no-item` deixa o item da biblioteca de fora. Ele grava uma pasta, um zip ou ambos, e encerra com código 1 quando uma variante não pôde ser construída. Veja [Scripts e linha de comando](topic:scripts-and-cli).
