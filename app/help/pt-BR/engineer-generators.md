---
title: Peças a partir da física: geradores
summary: O espaço de trabalho Engineer e o recurso Corpo gerado: escolha um gerador, defina as suas entradas (vazão, pressão, temperaturas, material, impressora) e obtenha uma peça dimensionada por fórmulas de livro-texto, com a sua folha de dados, as suas verificações de fabricação e arquivos para ferramentas de análise. As mesmas entradas sempre geram a mesma peça.
keywords: engineer, gerador, corpo gerado, física, regras, trocador de calor, coletor, bocal, treliça, giroide, folha de dados, entradas, determinístico, mesmas entradas mesma peça, verificações de fabricação, impressão 3D, leito de pó
from: 5a387dc0
---

Um **gerador** é um script que dimensiona uma peça a partir dos seus requisitos e a constrói. Um gerador de trocador de calor recebe o calor a transferir, as duas vazões e as suas temperaturas, a pressão e o material; ele calcula o tamanho que o núcleo deve ter e a espessura da sua parede, constrói a peça e informa os números que usou e de onde veio cada um. Altere uma entrada e a peça acompanha.

O resultado é um corpo normal da peça: ele está na lista de recursos, pode ser impresso e exportado. O próprio gerador também fica guardado na peça, então um arquivo abre em qualquer computador sem que o gerador esteja instalado, e **abrir uma peça nunca executa um script**.

## Criar um corpo

1. Escolha o espaço de trabalho {{ui:Engineer}} no seletor.
2. Escolha um gerador na lista (os que acompanham a PartCraft e, depois, os que você abriu de um arquivo) e clique em {{ui:Novo}}.
3. O script é executado. Quando termina, o corpo aparece na vista e o painel mostra as suas entradas, a sua **folha de dados** e as suas **verificações**.

Você também pode adicioná-lo a partir do Design: {{ui:Recursos}} › {{ui:Mais}} › {{ui:Corpo gerado}}.

## Alterar o corpo

Ao alterar qualquer entrada, o corpo é refeito logo depois que você para de digitar. O painel informa qual destas três situações é a verdadeira:

- **Atualizado**: o corpo corresponde ao script e às suas entradas.
- **As entradas mudaram**: o corpo na peça é das entradas anteriores; ele está sendo refeito, ou pressione {{ui:Executar}}.
- **Ainda não executado** ou **A última execução falhou**: um erro do script é mostrado com a sua linha.

{{ui:Parar}} encerra uma execução que está demorando demais. Desfazer volta uma etapa por vez: uma execução é uma etapa, uma entrada é uma etapa.

## A folha de dados

Cada número calculado pelo gerador aparece listado com a sua **unidade** e **de onde vem** (uma equação de livro-texto, uma norma, uma folha de dados). Nada é uma constante oculta. A folha faz parte do arquivo, então é a mesma no próximo computador. [Saída de dados](topic:data-out) explica como salvá-la em JSON ou PDF.

## As verificações

Um gerador pode verificar a própria peça em relação a um processo de impressão: paredes e vãos mais finos do que o processo consegue produzir, peças soltas, cavidades que retêm pó ou resina, furos estreitos demais para desobstruí-los, e balanços que precisam de suporte. Os resultados ficam no painel e na lista {{ui:Problemas}} (o botão ⚠), e são salvos com a peça.

Os valores de processo são os números arredondados que guias públicos de projeto dão para o processo em geral (FDM, SLA, SLS, leito de pó metálico). Eles **não são a especificação da sua máquina**: substitua-os pelos valores da sua oficina antes de confiar em uma verificação. A verificação trabalha sobre uma grade de voxels, então é precisa até cerca de um voxel: uma parede só é informada quando é mais fina que o limite por mais de um voxel.

## O que acompanha

| Gerador | O que cria |
|---|---|
| Bloco giroide | Um bloco preenchido com um giroide, Schwarz P ou folha de diamante: a treliça mais simples |
| Trocador de calor giroide | O núcleo de um trocador de dois fluidos, dimensionado pela carga pelo método eficácia-NTU, com a sua parede pela pressão; pode verificar a queda de pressão com um estudo de escoamento em uma célula |
| Coletor de distribuição | Um cabeçote e ramificações, cada tubo dimensionado pela vazão que transporta |
| Viga de treliça graduada | Uma treliça cuja parede engrossa onde uma otimização topológica indica que é preciso material |

Todos são primeiras estimativas baseadas em fórmulas de livro-texto. [A biblioteca de engenharia](topic:engineering-library) lista as fórmulas e os seus limites. Execute a Simulação, Térmica ou Escoamento sobre o resultado antes de confiar nele.

## Controles de exportação

As folhas de dados e os geradores do Engineer trazem um aviso sobre controles de exportação e sanções. Leia-o em [Engineer e controles de exportação](topic:engineer-export-notice); ele também aparece no rodapé de cada folha de dados.

## Ainda não implementado

- Cabeçotes, portas e conexões no núcleo do trocador de calor: é apenas o núcleo.
- Curvas de temperatura para a resistência dos materiais: os materiais estão em temperatura ambiente.
- Perdas em tês e a divisão do escoamento entre as saídas no coletor.
- Adicionar geradores do diretório de complementos com um clique; abrir um arquivo adiciona um a este navegador.
- Geradores para os outros aplicativos.
