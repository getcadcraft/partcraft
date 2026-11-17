---
title: Recursos e suas opções
summary: Todo recurso da barra de ferramentas com suas configurações, padrões e limites, de extrudar a arredondar, casca e sólidos STEP importados, as ações que todo recurso compartilha e as configurações da peça.
keywords: recursos, não implementado, extrudar, recortar, revolução, corte por revolução, furo, rebaixo, padrão linear, padrão circular, espelhar, arredondamento, chanfro, casca, importar, opções, padrões, configurações, resolução, curvas, facetas, suprimir, reversão
from: ab3a598e
---

Os recursos aparecem no histórico na ordem em que foram criados e são reconstruídos de cima para baixo. Cada um recebe o nome do seu tipo com um número: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

O PartCraft constrói todo recurso com o kernel de malha. {{ui:Arredondamento}} e {{ui:Chanfro}} funcionam em arestas retas entre duas faces planas, e {{ui:Casca}} abre faces planas. Sólidos importados precisam de um kernel exato, que esta versão não tem: eles ainda não são construídos, e a seção abaixo descreve como uma peça feita em uma versão anterior os mantém. Veja [O kernel de malha](topic:solid-kernels) e [O que ainda não foi implementado](topic:not-built-yet).

## Esboço

| Configuração | Observações |
|---|---|
| Plano | Plano Frontal, Superior ou Direito, ou uma face plana. Exibido, não alterado: para mover um esboço, crie um novo |
| Estado | Totalmente definido, Subdefinido (com os graus de liberdade), Superdefinido ou Vazio |
| Geometria, Relações | Quantas curvas, pontos e relações |
| Cotas de controle | Todas as cotas do esboço, editáveis |

Botões: {{ui:Editar esboço}}, {{ui:Exportar como DXF}}.

## Extrudar e Recortar

{{ui:Extrudar}} e {{ui:Recortar}} criam o mesmo recurso, começando com configurações diferentes.

| Configuração | Opções | Extrudar começa em | Recortar começa em |
|---|---|---|---|
| Operação | Saliência (adicionar material), Recortar (remover material), Interseção (manter a sobreposição), Novo corpo (ainda não implementado nesta versão) | Saliência | Recortar |
| Fim | Cega (uma profundidade), Plano médio (nos dois sentidos), Através de tudo | Cega | Através de tudo |
| Profundidade (mm) | Acima de 0, até 1,000,000 | 10 | 10 |
| Inverter direção | Desligado / ligado | Desligado | Desligado |

- Perfil: cada laço fechado de linhas sólidas, círculos e arcos no esboço. Laços dentro de laços são furos.
- Através de tudo funciona somente para cortes. Ele atravessa a peça inteira pelo lado escolhido.
- Um corte entra no material, afastando-se do lado externo do plano do esboço; Inverter o troca.

## Revolução e corte por revolução

| Configuração | Opções | Padrão |
|---|---|---|
| Operação | Saliência, Recortar | Saliência ({{ui:Revolução}}), Recortar ({{ui:Mais}} › {{ui:Corte por revolução}}) |
| Ângulo (°) | Acima de 0, até 360 | 360 |
| Eixo | Primeira linha de centro, qualquer linha ou linha de centro do esboço, ou um recurso de eixo situado no plano do esboço | Primeira linha de centro |

- O perfil deve ficar de um lado do eixo. Pode tocá-lo.
- O eixo de uma revolução pode ser usado por padrões circulares e por juntas de montagem.

## Furo

| Configuração | Opções | Padrão |
|---|---|---|
| Tipo | Simples, Rebaixo | Simples |
| Diâmetro (mm) | Acima de 0 | 6 |
| Através de tudo | Ligado / desligado | Ligado |
| Profundidade (mm) | Quando Através de tudo está desligado | 10 |
| Diâmetro do rebaixo ⌀ | Mais largo que o furo | 11 |
| Profundidade do rebaixo | Mais raso que um furo cego | 6 |
| Inverter direção | Desligado / ligado | Desligado |

- Um furo em cada ponto solto do esboço (pontos criados com a ferramenta Ponto). O painel mostra quantos.
- Os furos são feitos perpendiculares ao plano do esboço, dentro do material.
- O eixo de cada furo pode ser usado por juntas de montagem ("Hole1, hole 2").

## Padrão linear

| Configuração | Opções | Padrão |
|---|---|---|
| Recursos a copiar | Quaisquer recursos sólidos acima dele | O recurso selecionado; senão, o último recurso sólido |
| Direção | Eixo X, eixo Y, eixo Z; uma linha de um esboço anterior; o eixo de uma revolução; uma aresta selecionada | Eixo X (ou a aresta selecionada ao adicioná-lo) |
| Espaçamento (mm) | Qualquer número | 20 |
| Quantidade | 1 a 1000, incluindo o original | 3 |
| Inverter direção | Desligado / ligado | Desligado |

## Padrão circular

| Configuração | Opções | Padrão |
|---|---|---|
| Recursos a copiar | Como em Linear | Como em Linear |
| Eixo | Como em Direção, acima | O eixo da última revolução; senão, o eixo Y (ou a aresta selecionada) |
| Ângulo (°) | Acima de 0, até 360. 360 espaça as cópias igualmente em volta; menos as distribui ao longo do ângulo | 360 |
| Quantidade | 1 a 1000, incluindo o original | 6 |
| Inverter direção | Desligado / ligado | Desligado |

## Espelhar

| Configuração | Opções | Padrão |
|---|---|---|
| Espelhar | O corpo inteiro (como construído até agora), ou recursos escolhidos | O recurso selecionado; senão, o corpo inteiro |
| Plano de espelhamento | Plano Frontal, Superior ou Direito; uma face plana | Plano Direito, ou a face plana selecionada ao adicioná-lo |

## Arredondamento e Chanfro

Nesta versão, o kernel de malha os constrói em arestas retas entre duas faces planas (cantos externos ou internos), com um único raio. Uma aresta redonda exibe "Arredondamento: nesta versão, só arestas retas entre duas faces planas (o kernel de malha as constrói). Arredonde ou chanfre as arestas curvas no esboço."; onde arestas arredondadas se encontram em um canto, elas são unidas em meia-esquadria, e o recurso avisa "Arredondamento pelo kernel de malha: onde arestas arredondadas se encontram, elas são unidas em meia-esquadria, não mescladas." Todos os tipos de chanfro (distância igual, duas distâncias, distância e ângulo, com **Inverter lados**) funcionam. Veja [Arredondar, chanfrar e esvaziar](topic:fillet-chamfer-shell).

| Configuração | Opções | Padrão |
|---|---|---|
| Raio (mm) (Arredondamento) | Acima de 0 | 2 |
| Distância (mm) (Chanfro) | Acima de 0, a mesma nas duas faces | 1 |
| Arestas | As arestas selecionadas, cada uma listada pelas duas faces que ela une ("Extrude1 end face × Extrude1 side"), com **Remover** | As arestas selecionadas ao adicioná-lo |

- Selecione as arestas antes de escolher o botão ({{key:Shift}}+clique para várias), ou escolha-o sem seleção e clique nas arestas depois.
- {{ui:Selecionar arestas}} (ou clique duas vezes no recurso) altera as arestas.
- As arestas são mantidas pelas duas faces que unem, então sobrevivem a alterações de tamanho anteriores no histórico.

## Casca

O kernel de malha a constrói. Só faces planas podem ser abertas ("Casca: nesta versão, ela abre apenas faces planas (o kernel de malha a constrói)."); paredes de espessuras diferentes ainda não são implementadas. Veja [Arredondar, chanfrar e esvaziar](topic:fillet-chamfer-shell).

| Configuração | Opções | Padrão |
|---|---|---|
| Parede (mm) | Acima de 0 | 2 |
| Paredes crescem para fora (as faces ficam por dentro) | Desligado: paredes para dentro. Ligado: paredes para fora | Desligado |
| Faces abertas | As faces removidas, pelo menos uma, com **Remover** | As faces selecionadas ao adicioná-lo |

{{ui:Selecionar faces}} altera as faces abertas.

## Sólido importado

Criado ao abrir um arquivo STEP, STL, OBJ ou 3MF: um corpo sólido de triângulos sem histórico próprio ([Abrir um arquivo STEP](topic:import-step), [Abrir um STL, OBJ ou 3MF](topic:open-meshes)). Ele mostra o arquivo de origem e o que a importação corrigiu; **Unidades no arquivo**, **Para cima no arquivo** e **Usar para** continuam editáveis. Um sólido STEP importado por uma versão anterior que tinha o kernel exato fica no histórico marcado como não implementado; abra o arquivo STEP de novo para importá-lo como triângulos.

| Configuração | Opções | Padrão |
|---|---|---|
| Para cima no arquivo | Z para cima (a maioria dos CAD), Y para cima | Z para cima |

Padrões e espelhos podem copiar um sólido importado, mas não um arredondamento, chanfro ou casca.

## O que todo recurso tem

Na parte inferior do painel de cada recurso:

| Botão | Função |
|---|---|
| {{ui:Suprimir}} / {{ui:Reativar}} | Desliga ou liga o recurso. Recursos que dependem dele não são construídos enquanto estiver desligado |
| {{ui:Reverter até aqui}} | Constrói somente os recursos acima deste. Novos recursos entram na barra de reversão |
| {{ui:Mover para cima}} / {{ui:Mover para baixo}} | Reordena, quando nada que ele usa ficaria abaixo dele. Do contrário, fica acinzentado com o motivo |
| {{ui:Excluir}} | Exclui o recurso e, depois de confirmar, todo recurso que o usa |
| Nome | Renomeia o recurso (até 60 caracteres) |

Recursos com esboço também listam **Cotas do esboço**, editáveis no lugar.

## Estados no histórico

| Estado | Exibido como | Significado |
|---|---|---|
| Construído | Normal | Tudo certo |
| Aviso | ⚠ | Construído, com algo a verificar: "Superdefinido: 1 relação não é necessária." ou "Não sobra nada da peça depois disso." |
| Erro | ⚠ erro, em vermelho | Não pôde ser construído; a mensagem informa o motivo |
| Não construído | ⚠ não construído | Precisa de um recurso que falhou, está suprimido ou revertido, ou precisa de um kernel exato, que esta versão não tem ("Varredura: ainda não implementado. …") |
| Suprimido | desligado | Desligado |
| Revertido | acinzentado, abaixo da barra de reversão | Não construído até você avançar |

## Configurações da peça

Clique em um espaço vazio para não selecionar nada. O painel direito mostra **Peça**:

- **Nome**: o nome da peça, usado nos nomes de arquivo e na legenda do desenho (até 120 caracteres).
- **Curvas**: veja abaixo.

### Resolução das curvas

O kernel de malha constrói o próprio sólido a partir de facetas planas, então a vista, o STL, o 3MF, o STEP facetado, o volume e as vistas do desenho seguem todos a **Curvas**: quantas facetas por volta completa.

| Configuração | Facetas por volta | Volume de uma forma redonda |
|---|---|---|
| Grossa (32 por volta) | 32 | Cerca de 0.64 % abaixo do valor real |
| Normal (64 por volta) | 64 | Cerca de 0.16 % abaixo (o padrão) |
| Fina (128 por volta) | 128 | Cerca de 0.04 % abaixo |
| Muito fina (256 por volta) | 256 | Cerca de 0.01 % abaixo |

Curvas mais finas dão exportações e vistas mais suaves, e reconstruções mais lentas. A configuração é salva no arquivo da peça.

## Ainda não implementado

Arredondamentos de raio variável, arredondamentos e chanfros em arestas redondas, cascas que abrem faces curvas, ângulo de saída em faces curvas, varredura, loft, nervura, sólidos STEP com faces curvas exatas, novos corpos, conicidades, "até" uma face ou vértice, e referências nas faces e arestas do sólido precisam de um kernel exato, que esta versão não tem. Também não implementados: furos rosqueados e furos escareados. Veja [O que ainda não foi implementado](topic:not-built-yet).
