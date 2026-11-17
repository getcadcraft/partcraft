---
title: Peças a partir da física: geradores
summary: O espaço de trabalho Engineer e a operação Corpo gerado: escolher um gerador, definir as suas entradas (caudal, pressão, temperaturas, material, impressora) e obter uma peça dimensionada a partir de fórmulas de manuais, com a sua folha de dados, as suas verificações de fabrico e ficheiros para ferramentas de análise. As mesmas entradas dão sempre a mesma peça.
keywords: engineer, gerador, corpo gerado, física, regras, troca de calor, permutador, coletor, bocal, reticulado, giroide, folha de dados, entradas, determinístico, mesmas entradas mesma peça, verificações de fabrico, impressão 3D, leito de pó
from: 5a387dc0
---

Um **gerador** é um script que dimensiona uma peça a partir dos seus requisitos e a constrói. Um gerador de permutador de calor recebe o calor a transferir, os dois caudais e as suas temperaturas, a pressão e o material; calcula o tamanho que o núcleo deve ter e a espessura da sua parede, constrói-o, e indica os valores que usou e de onde vem cada um. Altere uma entrada e a peça acompanha.

O resultado é um corpo normal da peça: aparece na lista de operações, imprime-se e exporta-se. O próprio gerador fica guardado na peça, pelo que um ficheiro abre-se em qualquer computador sem o gerador instalado, e **abrir uma peça nunca executa um script**.

## Criar um corpo

1. Escolha o espaço de trabalho {{ui:Engineer}} no seletor.
2. Escolha um gerador na lista (os que vêm com o PartCraft e, depois, os que tiver aberto a partir de um ficheiro) e clique em {{ui:Novo}}.
3. O script é executado. Quando termina, o corpo está na vista e o painel mostra as suas entradas, a sua **folha de dados** e as suas **verificações**.

Também pode acrescentar um a partir de Design: {{ui:Operações}} › {{ui:Mais}} › {{ui:Corpo gerado}}.

## Alterar

Altere qualquer entrada e o corpo é feito de novo um pouco depois de deixar de escrever. O painel indica qual de três situações é verdadeira:

- **Atualizado**: o corpo corresponde ao script e às suas entradas.
- **As entradas mudaram**: o corpo na peça é de entradas anteriores; está a ser refeito, ou prima {{ui:Executar}}.
- **Ainda não executado** ou **A última execução falhou**: é mostrado um erro de script com a sua linha.

{{ui:Parar}} termina uma execução que demora demasiado. Anular volta atrás um passo de cada vez: uma execução é um passo, uma entrada é um passo.

## A folha de dados

Cada número calculado pelo gerador aparece com a sua **unidade** e **de onde vem** (uma equação de manual, uma norma, uma folha de dados). Nada é uma constante escondida. A folha faz parte do ficheiro, pelo que é a mesma no computador seguinte. [Saída de dados](topic:data-out) explica como a guardar em JSON ou PDF.

## As verificações

Um gerador pode verificar a sua própria peça contra um processo de impressão: paredes e folgas mais finas do que o processo suporta, peças soltas, cavidades que retêm pó ou resina, furos demasiado estreitos para os libertar, e saliências que precisam de suporte. As conclusões estão no painel e na lista {{ui:Problemas}} (o botão ⚠), e são guardadas com a peça.

Os valores de cada processo são os números redondos que os guias públicos de design dão para o processo em geral (FDM, SLA, SLS, leito de pó metálico). **Não são a especificação da sua máquina**: substitua-os pelos valores da sua oficina antes de confiar numa verificação. A verificação trabalha numa grelha de voxels, pelo que tem uma precisão de cerca de um voxel: uma parede só é indicada quando for mais fina do que o limite por mais de um voxel.

## O que vem incluído

| Gerador | O que cria |
|---|---|
| Bloco giroide | Um bloco preenchido com uma folha giroide, Schwarz P ou diamante: o reticulado mais simples |
| Permutador de calor giroide | O núcleo de um permutador de dois fluidos, dimensionado a partir da carga térmica pelo método da eficácia-NTU, e a sua parede a partir da pressão; pode verificar a perda de pressão com um estudo de escoamento numa célula |
| Coletor de distribuição | Um coletor e ramais, com cada tubo dimensionado pelo caudal que transporta |
| Viga de reticulado graduado | Um reticulado cuja parede engrossa onde uma otimização topológica indica que é necessário material |

Todos são primeiras estimativas baseadas em fórmulas de manuais. [A biblioteca de engenharia](topic:engineering-library) lista as fórmulas e os seus limites. Execute Simulação, Térmica ou Escoamento sobre o resultado antes de confiar nele.

## Controlos de exportação

Os geradores e as folhas de dados do Engineer têm uma nota sobre controlos de exportação e sanções. Leia-a em [Engineer e controlos de exportação](topic:engineer-export-notice); está também no fim de cada folha de dados.

## Ainda não implementado

- Coletores, portas e acessórios no núcleo do permutador: é apenas o núcleo.
- Curvas de temperatura para a resistência dos materiais: os materiais estão à temperatura ambiente.
- Perdas em tês e a partilha do caudal entre as saídas no coletor.
- Acrescentar geradores a partir do diretório de suplementos com um clique; abrir um ficheiro acrescenta um a este navegador.
- Geradores para as outras aplicações.
