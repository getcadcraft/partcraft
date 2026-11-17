---
title: Configurações e tabelas de projeto
summary: Guarde vários tamanhos e versões de uma peça como configurações com nome, guardadas no ficheiro da peça, com operações ligadas ou desligadas em cada uma; alterne entre elas com um clique, importe-as ou exporte-as como tabela de projeto em CSV, ou construa-as todas a partir da linha de comandos.
keywords: tabela de projeto, configurações, configuração, tamanhos, família de peças, csv, folha de cálculo, variantes, orientado por tabela, família de peças, suprimir, suprimida, desligar uma operação, opções, com ou sem, configurador
from: 17249afb
---

Uma **configuração** é um tamanho da peça: um conjunto com nome de valores para os seus parâmetros. A peça guarda as suas configurações no próprio ficheiro, por isso viajam com ela. Uma **tabela de projeto** é a mesma coisa num ficheiro CSV, com uma linha por configuração.

As configurações definem **parâmetros**, por isso adicione-os primeiro (ver [Controlar uma peça com parâmetros](topic:parameters)). Uma configuração guarda os parâmetros que são números simples; os parâmetros calculados a partir de outros (como `area = w * d`) seguem por si.

## Guardar uma configuração

1. No separador {{ui:Parâmetros}}, defina os parâmetros para um tamanho da peça.
2. Em **Configurações**, escreva um nome (por exemplo `Grande`) e prima {{ui:Guardar valores atuais}} ou {{key:Enter}}.

A nova configuração fica marcada como **ativa**. Se alterar um parâmetro depois, ela diz **ativa, alterada desde**, para que saiba que a peça já não corresponde a ela.

## Alternar, atualizar, mudar o nome, eliminar

- {{ui:Aplicar}} define os parâmetros com os valores dessa configuração e reconstrói a peça.
- {{ui:Atualizar}} guarda os valores atuais nessa configuração.
- Para mudar o nome de uma, escreva o novo nome na sua caixa e prima {{key:Enter}}.
- {{ui:Eliminar}} remove a configuração. Os parâmetros mantêm os seus valores.

Cada uma destas ações é um só passo: {{key:Mod+Z}} volta atrás. Se mudar o nome a um parâmetro, cada configuração segue o novo nome; se eliminar uma, deixa de figurar nelas.

## Ligar e desligar operações numa configuração

Uma configuração também guarda quais as operações que estão desligadas, por isso uma só peça pode ter versões **com** e **sem** algo: furos de fixação, um chanfro, uma saliência.

1. Desligue a operação: clique nela no histórico e depois em {{ui:Suprimir}} em {{ui:Propriedades}}.
2. Guarde a configuração como habitualmente, por exemplo `Sem furos`. A sua linha lista o que desliga.
3. Volte a ligar a operação ({{ui:Reativar}}) e guarde outra configuração, por exemplo `Com furos`.

Assim que uma configuração desligue uma operação, aplicar uma configuração desliga as suas operações e **liga todas as outras**, junto com os seus valores de parâmetros, num só passo. Uma configuração guardada antes de qualquer operação ter sido desligada conta como « tudo ligado ». {{ui:Atualizar}} guarda as operações como estão agora, com os valores.

Uma peça cujas configurações desligam operações é guardada como uma versão mais recente do ficheiro: um PartCraft mais antigo indica que o ficheiro é de uma versão mais recente, em vez de o abrir sem elas.

:::note
A tabela de projeto em CSV transporta apenas valores de parâmetros. Importar uma tabela sobre uma configuração altera os seus valores e mantém as operações que ela desliga; o `--table` da linha de comandos constrói apenas os valores.
:::

O ficheiro da peça é guardado com as configurações e com a que estava ativa. A peça abre com os valores com que foi guardada.

## Importar ou exportar uma tabela de projeto

Uma tabela de projeto é um ficheiro CSV com uma coluna para cada parâmetro e uma linha para cada configuração:

```
name,width,thick,bolt
small,100,6,6.6
medium,140,8,8.5
large,200,12,13
```

A primeira coluna pode chamar-se `name`, `config` ou `configuration`; todas as outras colunas têm de ser o nome de um parâmetro da peça. As células são números, com unidades se quiser (`8in`). Uma célula vazia deixa esse parâmetro de fora da linha.

- {{ui:Importar CSV}} acrescenta cada linha como configuração. Uma linha com o nome de uma configuração existente substitui-a. Importar é um só passo.
- {{ui:Exportar CSV}} escreve as configurações. Sem nenhuma ainda, escreve uma linha com os valores atuais, um ponto de partida para uma folha de cálculo.

Um nome de configuração que uma folha de cálculo leria como fórmula (começando por `=`, `+`, `-` ou `@`) é escrito com um `'` à frente.

## Todos os tamanhos de uma vez

{{ui:Pacote de variantes…}} em **Configurações** constrói todas as configurações, ou algumas escolhidas, como STEP, IFC, DWG e uma pré-visualização, num único zip, com uma tabela dos seus parâmetros: ver [Criar um pacote de variantes a partir das suas configurações](topic:variant-pack).

A ferramenta de linha de comandos constrói um ficheiro por linha de uma tabela de projeto CSV:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Exporte primeiro as configurações como CSV e depois passe esse ficheiro com `--table`. Ver [Scripts e a linha de comandos](topic:scripts-and-cli). Uma peça guardada como script mantém as suas configurações numa linha `configs json …`.
