---
title: Configurações e tabelas de projeto
summary: Mantenha vários tamanhos e versões de uma peça como configurações nomeadas salvas no arquivo da peça, com recursos ativados ou desativados em cada uma; alterne entre elas com um clique, importe-as ou exporte-as como tabela de projeto em CSV, ou gere todas pela linha de comando.
keywords: tabela de projeto, configurações, configuração, tamanhos, família de peças, csv, planilha, variantes, dirigido por tabela, família de peças, suprimir, suprimido, desativar um recurso, opções, com ou sem, configurador
from: 17249afb
---

Uma **configuração** é um tamanho da peça: um conjunto nomeado de valores para os seus parâmetros. A peça guarda suas configurações no próprio arquivo, então elas viajam com ela. Uma **tabela de projeto** é a mesma coisa em forma de arquivo CSV, com uma linha por configuração.

As configurações definem **parâmetros**, então adicione-os primeiro (veja [Controlar uma peça com parâmetros](topic:parameters)). Uma configuração guarda os parâmetros que são números simples; os parâmetros calculados a partir de outros (como `area = w * d`) acompanham sozinhos.

## Salvar uma configuração

1. Na guia {{ui:Parâmetros}}, defina os parâmetros para um tamanho da peça.
2. Em **Configurações**, digite um nome (por exemplo `Grande`) e pressione {{ui:Salvar valores atuais}} ou {{key:Enter}}.

A nova configuração fica marcada como **ativa**. Se você alterar um parâmetro depois, ela passa a mostrar **ativa, alterada desde então**, para que você saiba que a peça não corresponde mais a ela.

## Alternar, atualizar, renomear, excluir

- {{ui:Aplicar}} define os parâmetros com os valores dessa configuração e reconstrói a peça.
- {{ui:Atualizar}} salva os valores atuais nessa configuração.
- Para renomear uma, digite o novo nome na sua caixa e pressione {{key:Enter}}.
- {{ui:Excluir}} remove a configuração. Os parâmetros mantêm os seus valores.

Cada uma dessas ações é uma etapa: {{key:Mod+Z}} desfaz. Se você renomear um parâmetro, todas as configurações seguem o novo nome; se excluir uma, ela sai delas.

## Ativar e desativar recursos em uma configuração

Uma configuração também guarda quais recursos estão desativados, de modo que uma peça pode ter versões **com** e **sem** algo: furos de fixação, um chanfro, uma saliência.

1. Desative o recurso: clique nele no histórico e depois em {{ui:Suprimir}} em {{ui:Propriedades}}.
2. Salve a configuração normalmente, por exemplo `Sem furos`. Sua linha lista o que ela desativa.
3. Ative o recurso de novo ({{ui:Reativar}}) e salve outra configuração, por exemplo `Com furos`.

Assim que alguma configuração desativa um recurso, aplicar uma configuração desativa os recursos dela e **ativa todos os outros**, junto com os valores dos parâmetros, em uma única etapa. Uma configuração salva antes de qualquer recurso ser desativado conta como "tudo ativado". {{ui:Atualizar}} salva os recursos como estão agora, junto com os valores.

Uma peça cujas configurações desativam recursos é salva como uma versão mais nova do arquivo: um PartCraft mais antigo informa que o arquivo é de uma versão mais nova, em vez de abri-lo sem esses recursos.

:::note
A tabela de projeto em CSV traz apenas os valores dos parâmetros. Importar uma tabela sobre uma configuração altera os valores dela e mantém os recursos que ela desativa; o `--table` da linha de comando gera apenas os valores.
:::

O arquivo da peça é salvo com as configurações e com aquela que estava ativa. A peça abre com os valores com que foi salva.

## Importar ou exportar uma tabela de projeto

Uma tabela de projeto é um arquivo CSV com uma coluna para cada parâmetro e uma linha para cada configuração:

```
name,width,thick,bolt
pequeno,100,6,6.6
médio,140,8,8.5
grande,200,12,13
```

A primeira coluna pode se chamar `name`, `config` ou `configuration`; todas as outras colunas devem ter o nome de um parâmetro da peça. As células são números, com unidades se preferir (`8in`). Uma célula vazia deixa esse parâmetro de fora da linha.

- {{ui:Importar CSV}} adiciona cada linha como uma configuração. Uma linha com o nome de uma configuração existente a substitui. A importação é uma única etapa.
- {{ui:Exportar CSV}} grava as configurações. Se ainda não houver nenhuma, grava uma linha com os valores atuais, como ponto de partida para uma planilha.

Um nome de configuração que uma planilha leria como fórmula (começando com `=`, `+`, `-` ou `@`) é gravado com um `'` no início.

## Todos os tamanhos de uma vez

{{ui:Pacote de variantes…}} em **Configurações** gera todas as configurações, ou algumas escolhidas, como STEP, IFC, DWG e uma visualização em um único zip, com uma tabela dos seus parâmetros: veja [Criar um pacote de variantes a partir das suas configurações](topic:variant-pack).

A ferramenta de linha de comando gera um arquivo por linha de uma tabela de projeto em CSV:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Exporte antes as configurações como CSV e depois passe esse arquivo com `--table`. Veja [Scripts e linha de comando](topic:scripts-and-cli). Uma peça salva como script guarda suas configurações em uma linha `configs json …`.
