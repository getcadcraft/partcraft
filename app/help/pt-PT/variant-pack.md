---
title: Criar um pacote de variantes a partir das suas configurações
summary: Construir todas as configurações de uma peça, ou algumas escolhidas, de uma vez, como STEP, IFC, DWG e uma pré-visualização de cada, com uma tabela dos seus parâmetros e a peça como um item da biblioteca com as suas variantes.
keywords: pacote de variantes, variantes, configurações, família de peças, exportação em lote, cada tamanho, step, ifc, dwg, pré-visualização, tabela, csv, json, biblioteca, configurador, configurador de produto, catálogo, item json
from: 9a6db99f
---

## O que vai fazer

Obtenha **todos os tamanhos de uma peça de uma vez**: um ficheiro STEP, IFC e DWG e uma imagem para cada configuração, uma tabela que indica o que é cada uma, e um item da biblioteca que as põe todas numa só página.

Precisa de uma peça com **configurações** primeiro (ver [Configurações e tabelas de projeto](topic:design-tables)). Uma configuração que desliga uma operação, como uma chapa com e sem furos, torna-se uma variante própria.

## Passos

1. Abra a peça. No separador {{ui:Parâmetros}}, encontre **Configurações**.
2. Clique em {{ui:Pacote de variantes…}}.
3. Marque as configurações a construir (estão todas marcadas) e os ficheiros a escrever: STEP, IFC, DWG, uma pré-visualização e o item da biblioteca.
4. Clique em {{ui:Criar o pacote}}. A linha de estado conta as variantes à medida que são construídas; a peça não é alterada.
5. Transfere-se um zip: `<part> variants.zip`.

## O que contém o zip

| Ficheiro | O que é |
|---|---|
| `<name>.step` | A configuração como um sólido STEP. |
| `<name>.ifc` | IFC4, um elemento com o corpo construído e os parâmetros da peça como propriedades; o valor é o próprio dessa configuração. |
| `<name>.dwg` | As vistas da frente, de cima, da direita e isométrica como uma folha de desenho em tamanho real. |
| `<name>.svg` | Uma imagem isométrica dela em linhas. |
| `variants.csv`, `variants.json` | A tabela de parâmetros: o id, o nome e o valor de cada parâmetro de cada variante, as operações que desliga, os seus ficheiros, o seu volume e o seu tamanho. |
| `<part>.item.json` | A peça como um item da biblioteca com as suas variantes (ver abaixo). |
| `README.txt` | O que foi feito, as notas abaixo e o que não foi construído. |

Os ficheiros são nomeados pela configuração. Uma configuração que falha ao construir (uma operação que não pode ser feita com esses valores) fica de fora dos ficheiros e da tabela, é listada no README e numa mensagem depois de o zip ser guardado; as restantes são escritas na mesma.

## Bom saber

- **STEP** é exato quando o núcleo exato está ativo na sua versão. Sem ele, o STEP é facetado (triângulos planos), e o README indica-o.
- **DWG** é a folha de desenho, não um modelo 3D. As suas linhas vêm da malha, pelo que uma aresta curva são muitas linhas curtas.
- **O item da biblioteca** leva um corpo e uma pegada por variante, nos eixos da própria biblioteca: Z para cima, a frente virada para −Y, e o ponto de inserção no meio da parte de trás, em baixo. A planta é o retângulo envolvente de cada variante. Um item tem o limite de 8 MB, pelo que uma variante muito pesada se torna uma caixa do seu tamanho, e o README indica quantas.
- A configuração ativa da peça é a variante predefinida do item.
- As portas (pontos de ligação para tubagens e condutas) não são definidas a partir do PartCraft.

## Colocar as variantes numa página da biblioteca

Carregue `<part>.item.json` em **Biblioteca › Carregar** no site. Escolha a sua categoria, licença e linha de crédito, e passa a ser um item da Biblioteca com as suas variantes. No BimCraft, ao colocá-lo pergunta-se qual a variante, e Trocar oferece as outras. A página onde os visitantes escolhem opções, veem o 3D e transferem uma variante é, por agora, uma **pré-visualização interna**: ainda não está aberta ao público.

## A partir da linha de comandos

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` indica as configurações, `--formats` qualquer de `step`, `ifc`, `dwg`, `preview`; `--no-item` deixa o item da biblioteca de fora. Escreve uma pasta, um zip ou ambos, e termina com código 1 quando uma variante não pôde ser construída. Ver [Scripts e linha de comandos](topic:scripts-and-cli).
