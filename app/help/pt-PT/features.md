---
title: Operações e as suas opções
summary: Cada operação na barra de ferramentas, com as suas definições, predefinições e limites, desde extrudir até boleado, casca e sólidos STEP importados, as ações que todas as operações partilham e as definições da peça.
keywords: operações, não implementado, extrudir, cortar, revolução, corte por revolução, furo, furo com rebaixo, matriz linear, matriz circular, espelho, boleado, chanfre, casca, importar, opções, predefinições, definições, resolução, curvas, facetas, suprimir, reverter
from: ab3a598e
---

As operações são listadas no histórico pela ordem em que foram criadas, e reconstruídas de cima para baixo. Cada uma recebe o nome do seu tipo com um número: Esboço1, Extrudir1, Revolução1, Furo1, Matriz linear1, Matriz circular1, Espelho1, Boleado1, Chanfre1, Casca1, Importado1.

O PartCraft constrói cada operação com o kernel de malha. Boleado e Chanfre funcionam em arestas retas entre duas faces planas, e Casca abre faces planas. Os sólidos importados precisam de um kernel exato, que esta versão não tem: ainda não são construídos, e a sua secção abaixo descreve como uma peça feita numa versão anterior os mantém. Veja [O kernel de malha](topic:solid-kernels) e [O que ainda não está implementado](topic:not-built-yet).

## Esboço

| Definição | Notas |
|---|---|
| Plano | Frontal, Topo ou Direito, ou uma face plana. Apenas mostrado, não alterado: para mover um esboço, crie um novo |
| Estado | Totalmente definido, Subdefinido (com os graus de liberdade), Sobredefinido, ou Vazio |
| Geometria, Relações | Quantas curvas, pontos e relações |
| Cotas de comando | Cada cota do esboço, editável |

Botões: {{ui:Editar esboço}}, {{ui:Exportar como DXF}}.

## Extrudir e Cortar

{{ui:Extrudir}} e {{ui:Cortar}} criam a mesma operação, começando com definições diferentes.

| Definição | Opções | Extrudir começa em | Cortar começa em |
|---|---|---|---|
| Operação | Saliência (adicionar material), Corte (remover material), Interseção (manter a sobreposição), Corpo novo (ainda não implementado nesta versão) | Saliência | Corte |
| Fim | Cega (uma profundidade), Plano médio (nos dois sentidos), Através de tudo | Cega | Através de tudo |
| Profundidade (mm) | Acima de 0, até 1,000,000 | 10 | 10 |
| Inverter direção | Desligado / ligado | Desligado | Desligado |

- Perfil: cada laço fechado de linhas sólidas, círculos e arcos do esboço. Laços dentro de laços são furos.
- Através de tudo funciona apenas para cortes. Atinge a peça inteira no lado escolhido.
- Um corte entra no material, afastando-se do lado exterior do plano do esboço; Inverter direção inverte-o.

## Revolução e corte por revolução

| Definição | Opções | Predefinido |
|---|---|---|
| Operação | Saliência, Corte | Saliência ({{ui:Revolução}}), Corte ({{ui:Mais}} › {{ui:Corte por revolução}}) |
| Ângulo (°) | Acima de 0, até 360 | 360 |
| Eixo | A primeira linha de eixo, qualquer linha ou linha de eixo do esboço, ou uma operação de eixo situada no plano do esboço | A primeira linha de eixo |

- O perfil tem de ficar de um lado do eixo. Pode tocá-lo.
- O eixo de uma revolução pode ser usado pelas Matrizes circulares e pelas ligações de montagem.

## Furo

| Definição | Opções | Predefinido |
|---|---|---|
| Tipo | Simples, Rebaixo | Simples |
| Diâmetro (mm) | Acima de 0 | 6 |
| Através de tudo | Ligado / desligado | Ligado |
| Profundidade (mm) | Quando Através de tudo está desligado | 10 |
| Diâmetro do rebaixo ⌀ | Mais largo do que o furo | 11 |
| Profundidade do rebaixo | Menos profundo do que um furo cego | 6 |
| Inverter direção | Desligado / ligado | Desligado |

- Um furo em cada ponto solto do esboço (pontos feitos com a ferramenta Ponto). O painel mostra quantos são.
- Os furos são perfurados perpendicularmente ao plano do esboço, para dentro do material.
- O eixo de cada furo pode ser usado pelas ligações de montagem ("Furo1, furo 2").

## Matriz linear

| Definição | Opções | Predefinido |
|---|---|---|
| Operações a copiar | Quaisquer operações sólidas acima dela | A operação selecionada, senão a última operação sólida |
| Direção | Eixo X, eixo Y, eixo Z; uma linha de um esboço anterior; o eixo de uma revolução; uma aresta escolhida | Eixo X (ou a aresta escolhida ao adicioná-la) |
| Espaçamento (mm) | Qualquer número | 20 |
| Quantidade | 1 a 1000, incluindo o original | 3 |
| Inverter direção | Desligado / ligado | Desligado |

## Matriz circular

| Definição | Opções | Predefinido |
|---|---|---|
| Operações a copiar | Como em Matriz linear | Como em Matriz linear |
| Eixo | Como em Direção acima | O eixo da última revolução, senão o eixo Y (ou a aresta escolhida) |
| Ângulo (°) | Acima de 0, até 360. 360 espaça as cópias igualmente em toda a volta; menos espalha-as pelo ângulo | 360 |
| Quantidade | 1 a 1000, incluindo o original | 6 |
| Inverter direção | Desligado / ligado | Desligado |

## Espelho

| Definição | Opções | Predefinido |
|---|---|---|
| Espelho | O corpo inteiro (tal como construído até agora), ou operações escolhidas | A operação selecionada, senão o corpo inteiro |
| Plano do espelho | Plano Frontal, Topo ou Direito; uma face plana | Plano Direito, ou a face plana escolhida ao adicioná-la |

## Boleado e Chanfre

Nesta versão, o kernel de malha constrói-os em arestas retas entre duas faces planas (cantos exteriores ou interiores), com um raio. Uma aresta redonda indica "Boleado: nesta versão apenas arestas retas entre duas faces planas (o kernel de malha as constrói). Arredonde ou chanfre as arestas curvas no esboço."; onde arestas arredondadas se encontram num canto, ficam em meia-esquadria, e a operação avisa "Boleado pelo kernel de malha: onde as arestas arredondadas se encontram, ficam em meia-esquadria, não suavizadas." Todos os tipos de chanfre funcionam (distância igual, duas distâncias, distância e ângulo, com **Inverter lados**). Veja [Arredondar, chanfrar e ocar](topic:fillet-chamfer-shell).

| Definição | Opções | Predefinido |
|---|---|---|
| Raio (mm) (Boleado) | Acima de 0 | 2 |
| Distância (mm) (Chanfre) | Acima de 0, a mesma nas duas faces | 1 |
| Arestas | As arestas escolhidas, cada uma indicada pelas duas faces que une ("Extrudir1 face final × Extrudir1 lateral"), com **Remover** | As arestas escolhidas ao adicioná-la |

- Escolha as arestas antes de escolher o botão ({{key:Shift}}+clique para várias), ou escolha-o sem nada escolhido e clique nas arestas depois.
- {{ui:Escolher arestas}} (ou faça duplo clique na operação) altera as arestas.
- As arestas são mantidas pelas duas faces que unem, por isso sobrevivem a alterações de tamanho anteriores.

## Casca

O kernel de malha constrói-a. Só se podem abrir faces planas ("Casca: nesta versão abre apenas faces planas (o kernel de malha a constrói)."); paredes de espessuras diferentes ainda não são construídas. Veja [Arredondar, chanfrar e ocar](topic:fillet-chamfer-shell).

| Definição | Opções | Predefinido |
|---|---|---|
| Parede (mm) | Acima de 0 | 2 |
| As paredes crescem para fora (as faces ficam por dentro) | Desligado: as paredes vão para dentro. Ligado: as paredes vão para fora | Desligado |
| Faces abertas | As faces removidas, pelo menos uma, com **Remover** | As faces escolhidas ao adicioná-la |

{{ui:Escolher faces}} altera as faces abertas.

## Sólido importado

Criado ao abrir um ficheiro STEP, STL, OBJ ou 3MF: um corpo sólido de triângulos, sem histórico próprio ([Abrir um ficheiro STEP](topic:import-step), [Abrir um STL, OBJ ou 3MF](topic:open-meshes)). Mostra o ficheiro de onde vem e o que a importação reparou; **Unidades no ficheiro**, **Para cima no ficheiro** e **Usar para** continuam editáveis. Um sólido STEP importado por uma versão anterior, que tinha o kernel exato, fica no histórico marcado como não construído; abra o ficheiro STEP outra vez para o trazer como triângulos.

| Definição | Opções | Predefinido |
|---|---|---|
| Para cima no ficheiro | Z para cima (a maioria dos CAD), Y para cima | Z para cima |

Matrizes e espelhos podem copiar um sólido importado, mas não um boleado, chanfre ou casca.

## O que tem cada operação

No fundo do painel de cada operação:

| Botão | Faz |
|---|---|
| {{ui:Suprimir}} / {{ui:Reativar}} | Desliga ou liga. As operações que precisam dela não são construídas enquanto estiver desligada |
| {{ui:Reverter até aqui}} | Constrói apenas as operações acima desta. As novas operações entram na barra de reversão |
| {{ui:Mover para cima}} / {{ui:Mover para baixo}} | Reordena, quando nada que ela usa acabaria abaixo dela. A cinzento, com a razão, caso contrário |
| {{ui:Eliminar}} | Elimina-a e, depois de perguntar, todas as operações que a usam |
| Nome | Muda-lhe o nome (até 60 caracteres) |

Operações com esboço também listam **Cotas do esboço**, editáveis no próprio lugar.

## Estados no histórico

| Estado | Mostrado como | Significado |
|---|---|---|
| Construída | Normal | Tudo bem |
| Aviso | ⚠ | Construída, mas com algo a verificar: "Sobredefinido: 1 relação não é necessária." ou "Não resta nada da peça depois disto." |
| Erro | ⚠ erro, a vermelho | Não pôde ser construída; a mensagem diz porquê |
| Não construída | ⚠ não construída | Precisa de uma operação que falhou, está suprimida ou revertida, ou precisa de um kernel exato, que esta versão não tem ("Varrimento: ainda não implementado. …") |
| Suprimida | desligada | Desligada |
| Revertida | a cinzento, abaixo da barra de reversão | Não construída até avançar de novo |

## Definições da peça

Clique num espaço vazio para não ficar nada selecionado. O painel da direita mostra **Peça**:

- **Nome**: o nome da peça, usado nos nomes de ficheiro e na legenda do desenho (até 120 caracteres).
- **Curvas**: ver abaixo.

### Resolução das curvas

O kernel de malha constrói o próprio sólido a partir de facetas planas, por isso a vista, STL, 3MF, o STEP facetado, o volume e as vistas do desenho seguem todos **Curvas**: quantas facetas por volta completa.

| Definição | Facetas por volta | Volume de uma forma redonda |
|---|---|---|
| Grosseira (32 por volta) | 32 | Cerca de 0.64 % abaixo do valor verdadeiro |
| Normal (64 por volta) | 64 | Cerca de 0.16 % abaixo (a predefinição) |
| Fina (128 por volta) | 128 | Cerca de 0.04 % abaixo |
| Muito fina (256 por volta) | 256 | Cerca de 0.01 % abaixo |

Curvas mais finas dão exportações e vistas mais suaves, e reconstruções mais lentas. A definição fica guardada no ficheiro da peça.

## Ainda não implementado

Boleados de raio variável, boleados e chanfres em arestas redondas, cascas que abrem faces curvas, ângulo de saída em faces curvas, varrimento, loft, nervura, sólidos STEP com faces curvas exatas, corpos novos, conicidades, "até" uma face ou um vértice, e referências nas faces e arestas do sólido precisam de um kernel exato, que esta versão não tem. Também não implementados: furos roscados e furos com escareado. Veja [O que ainda não está implementado](topic:not-built-yet).
