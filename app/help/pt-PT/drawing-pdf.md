---
title: Fazer um desenho com vistas, um corte e GD&T
summary: Abrir a folha de desenho, acrescentar um corte e uma vista de pormenor, colocar referências, quadros de controlo e símbolos de acabamento superficial, escolher o formato da folha, preencher a legenda e as revisões, e exportar a folha como PDF.
keywords: tabela de furos, gráfico de furos, posições dos furos, etiquetas, desenho, desenho 2D, folha, formato da folha, a4, a3, a2, a1, a0, ansi, legenda, revisão, bloco de revisões, número do desenho, material, pdf, vistas, ortográfica, terceiro diedro, isométrica, vista de corte, vista de pormenor, gd&t, referência, quadro de controlo de tolerância, tolerância, posição, planeza, acabamento superficial, rugosidade, impressão
from: 39e944c0
---

O PartCraft cria uma folha de desenho a partir da peça: vistas frontal, superior e lateral direita em projeção no terceiro diedro, uma vista isométrica, dimensões globais e uma legenda numa folha de A4 a A0 ou ANSI A a E. Por cima disso pode acrescentar um corte, uma vista de pormenor e símbolos GD&T. A folha atualiza-se quando a peça muda, e as suas definições ficam guardadas no ficheiro da peça.

## Abrir a folha de desenho

1. Construa a peça. (Sem nada construído: « Construa primeiro um sólido e depois faça o seu desenho. »)
2. Escolha {{ui:Desenho}} na barra de ferramentas.

A vista 3D é substituída pela folha. A barra de ferramentas mostra {{ui:Referência}}, {{ui:Quadro}}, {{ui:Acabamento}}, {{ui:Pormenor}}, {{ui:PDF}} e {{ui:Voltar}}, e o painel da direita tem o cabeçalho **Desenho**. A barra de estado indica como as vistas foram feitas: « Desenho (as curvas são desenhadas como facetas). Referência, Quadro e Acabamento colocam GD&T numa vista; o painel define um corte e uma vista de pormenor. » As vistas são desenhadas a partir das facetas do núcleo de malha, pelo que as arestas arredondadas são pequenos segmentos retos; arcos verdadeiros exigem um núcleo exato, que esta versão não tem.

Mova-se pela folha: rode a roda do rato para ampliar, arraste com o botão direito ou o do meio para deslocar a vista, e prima {{key:F}} para ajustar a folha. Com a folha em foco, {{key:Plus}} e {{key:Minus}} ampliam e {{key:Shift}} com as setas desloca a vista.

Escolha {{ui:Voltar}}, {{ui:Voltar ao modelo}} ou prima {{key:Esc}} (sem nada selecionado e sem ferramenta ativa) para voltar ao modelo 3D.

## O que está na folha

- **A folha que escolher**, em paisagem (A3, salvo se escolher outra), com uma moldura e uma **legenda**: título, empresa, número do desenho, revisão, material, desenhado / verificado / aprovado por, data, escala, formato da folha, « Unidades: milímetros · Projeção no terceiro diedro », e se as vistas são exatas ou facetadas.
- Um **bloco de revisões** no canto superior direito, depois de acrescentar uma revisão.
- **Vistas frontal, superior e lateral direita**: a vista superior acima da frontal, a lateral direita à sua direita. Arestas ocultas a tracejado.
- Uma **vista isométrica**, onde houver espaço.
- **Dimensões globais**: largura e altura na vista frontal, profundidade na vista superior.
- Uma **escala** única para as vistas principais da série ISO (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), escolhida para que caibam.

## Escolher o formato da folha

Na folha, sem nada selecionado, escolha {{ui:Folha}} no painel da direita: **A4, A3, A2, A1, A0** (ISO 216) ou **ANSI A, B, C, D, E** (11 × 8.5 a 44 × 34 in). As vistas são dispostas de novo na maior escala ISO que caiba, pelo que uma folha maior pode mostrar a peça maior.

## Preencher a legenda

Os campos da **Legenda** no painel da direita passam diretamente para a folha: {{ui:Título}}, {{ui:N.º do desenho}}, {{ui:Revisão}}, {{ui:Empresa}}, {{ui:Desenhado por}}, {{ui:Verificado por}}, {{ui:Aprovado por}}, {{ui:Data}} (ano-mês-dia), {{ui:Tolerância geral}} e {{ui:Acabamento}} (estes dois últimos são impressos logo acima da legenda). Escreva numa caixa e prima {{key:Enter}} ou clique fora. Uma caixa vazia deixa a sua célula em branco, exceto:

- **Título** mostra o nome da peça até escrever um.
- **Data** mostra a data de hoje até escrever uma.
- **Revisão** mostra a revisão mais recente da lista até escrever uma.

**Material** vem da peça: clique num espaço vazio do modelo e escolha {{ui:Material}} no painel da Peça. O mesmo material dá às propriedades de massa do Measure a sua densidade.

## Acrescentar revisões

Em **Revisões**, clique em {{ui:Adicionar revisão}}. Cada nova linha recebe a letra seguinte (A, B, C …; depois de Z vem AA) e a data de hoje. Escreva o que mudou e quem fez a alteração. {{ui:Eliminar}} remove uma linha. O bloco de revisões no canto superior direito da folha lista-as, da mais antiga para a mais recente, até 20.

O formato da folha, a legenda, as revisões e o material ficam guardados no ficheiro da peça, e cada alteração é um passo de {{ui:Anular}}.

## Acrescentar uma vista de corte

A peça é cortada por um plano e o corte fica com trama. Como as outras vistas, o corte é desenhado a partir de facetas, pelo que as arestas arredondadas são segmentos retos curtos.

1. No painel da direita, defina **Corte A-A** como **Da vista frontal**, **Da vista superior** ou **Da vista lateral direita**.
2. O corte aparece na folha, com trama onde o plano atravessa material, com a linha de corte e as suas setas « A » na vista de onde é tirado.
3. Defina **Corte em (mm)** para mover o plano de corte. Começa a meio da peça.

Defina **Corte A-A** de novo para **Nenhum** para o remover.

## Acrescentar uma vista de pormenor

1. Defina **Pormenor B** para a vista a ampliar (ou escolha {{ui:Pormenor}} na barra de ferramentas).
2. Clique no centro da área a ampliar, nessa vista. Um círculo com a letra « B » marca-a, e o « Pormenor B » ampliado aparece na folha com a sua própria escala, por exemplo « Pormenor B (2:1) ».
3. Defina **Raio do pormenor (mm)** para o tamanho do círculo e **Escala do pormenor** para a ampliação: 2, 4, 5 ou 10 × a folha.

Um pormenor pode ser tirado da vista frontal, superior, lateral direita ou de corte, não da isométrica. Se não houver espaço para todas as vistas, o painel diz « Sem espaço na folha para: pormenor. Torne o pormenor mais pequeno ou retire uma vista. »

## Acrescentar uma tabela de furos

Uma tabela de furos lista os furos da peça com as suas posições, para furação ou CNC: no painel, escolha **Tabela de furos** › **Da vista superior** (ou frontal, ou lateral direita).

- Cada furo visto de topo nessa vista recebe uma etiqueta ao lado: **A1**, **A2** … para o primeiro tamanho, **B1** … para o seguinte.
- A tabela lista cada etiqueta, os seus **X** e **Y** em milímetros, e o seu tamanho: « Ø14 THRU », « Ø6.6 × 10 DEEP », um furo de rebaixo ou escareado, ou a indicação de rosca de um furo roscado.
- X e Y são medidos a partir do canto inferior esquerdo do contorno da vista, marcado **X0 Y0** na folha.
- Os furos feitos por matrizes estão incluídos. Os furos que não estão perpendiculares à vista são contados no painel e ficam fora da tabela.

A tabela fica numa área livre da folha e no PDF.

## Colocar símbolos GD&T e de acabamento superficial

1. Escolha {{ui:Referência}}, {{ui:Quadro}} (um quadro de controlo de tolerância geométrica) ou {{ui:Acabamento}} (um símbolo de acabamento superficial).
2. Clique no ponto de uma vista onde ele se liga. Ajusta-se à linha desenhada mais próxima, a menos de 2,5 mm.
3. O símbolo aparece com uma linha de chamada, selecionado, e o painel da direita mostra as suas definições.

Arraste um símbolo para o mover; a linha de chamada mantém-se no ponto. Com um símbolo selecionado, as setas deslocam-no 1 mm. {{key:Delete}} ou {{key:Backspace}} (ou {{ui:Eliminar}} no painel) remove-o; {{ui:Concluir}} ou {{key:Esc}} desseleciona-o. Cada alteração fica na lista de anulação.

### Referência

**Letra**: de A a Z, sem I, O e Q (lêem-se como 1, 0 e O). Cada nova referência recebe a próxima letra livre.

### Quadro de controlo de tolerância geométrica

| Definição | Opções |
|---|---|
| **Tolerância** | Retilineidade, Planeza, Circularidade, Cilindricidade, Perfil de uma linha, Perfil de uma superfície, Perpendicularidade, Inclinação, Paralelismo, Posição, Concentricidade e Simetria (ambas retiradas na Y14.5-2018, e assinaladas como tal), Oscilação circular, Oscilação total |
| **Zona (mm)** | O valor da tolerância, por predefinição 0.1 |
| **Zona de diâmetro (⌀)** | Para características com zona cilíndrica; ativa por predefinição em Posição |
| **Material** | RFS (nenhum), MMC (Ⓜ), LMC (Ⓛ), quando a característica o permite |
| **Referência primária / secundária / terciária** | Até três letras de referência, cada uma com um **modificador …** (MMB, LMB) quando for permitido |

O PartCraft verifica o quadro contra as regras da ASME Y14.5 e diz o que está errado no topo do painel, por exemplo « Planeza é uma tolerância de forma: não leva referências. » ou « Posição precisa de pelo menos uma referência. » A linha **Lê-se** descreve o quadro por extenso.

### Acabamento superficial

| Definição | Opções | Predefinição |
|---|---|---|
| **Ra (µm)** | Média da rugosidade | 1.6 |
| **Processo** | qualquer processo, maquinado, sem remoção de material | maquinado |
| **Nota** | Até 40 caracteres, como uma direção das estrias ou um processo | |

Sem nada selecionado, o painel lista as **Notas na folha**, cada uma com **Selecionar**.

## Exportar o PDF

Escolha {{ui:PDF}} na barra de ferramentas, {{ui:Exportar PDF}} no painel, ou {{ui:Exportar}} e depois {{ui:Desenho (PDF): vistas, corte, pormenor, GD&T}} a partir do modelo. O PDF transfere-se como `<part name> - drawing.pdf`, e a barra de estado lista o que está nele.

Imprima com « Tamanho real » em papel do formato da folha, para manter a escala correta.

## Limites

| Ainda não implementado | Solução atual |
|---|---|
| Cotas além das três dimensões globais | Acrescente-as ao PDF com uma aplicação de anotação, ou exporte um esboço ou uma face como DXF e cote-o num programa de CAD 2D |
| Mais de um corte ou pormenor; vistas interrompidas, auxiliares e projetadas | Não disponível |
| Projeção no primeiro diedro, vistas móveis, folhas em retrato | Terceiro diedro, disposição automática, paisagem |
| Notas de texto livre e tabelas na folha (além dos blocos de título e de revisões) | Use a nota de acabamento, ou acrescente texto no PDF |
| Desenhos de montagens | Não disponível |

Os caracteres fora do conjunto da Europa Ocidental são impressos como « ? » (o PDF usa o Helvetica incorporado no leitor). Os símbolos GD&T são desenhados como linhas, pelo que são impressos em qualquer leitor.

## Deixe a folha fazê-lo

- **Folha › Automático** escolhe o papel por si: a maior escala normalizada até 1:1, na folha de formato A mais pequeno que contenha as vistas a essa escala (a lista mostra qual foi escolhido).
- **Cotar os furos** cota os furos na vista que os vê de topo na maioria: uma marca de centro em cada um, uma chamada por tamanho (« 2× Ø6 THRU » com uma linha de chamada), e as suas posições medidas a partir do canto inferior esquerdo da vista. A largura, a altura e a profundidade globais estão sempre lá.
