---
title: Fazer um desenho com vistas, corte e GD&T
summary: Abra a folha de desenho, adicione um corte e uma vista de detalhe, posicione referências, quadros de controle e símbolos de acabamento superficial, escolha o tamanho da folha, preencha a legenda e as revisões, e exporte a folha como PDF.
keywords: tabela de furos, gráfico de furos, posições dos furos, etiquetas, desenho, desenho 2D, folha, tamanho da folha, a4, a3, a2, a1, a0, ansi, legenda, revisão, bloco de revisão, número do desenho, material, pdf, vistas, ortográfica, terceiro diedro, isométrica, vista de corte, vista de detalhe, gd&t, referência, quadro de controle de características, tolerância, posição, planeza, acabamento superficial, rugosidade, imprimir
from: 39e944c0
---

A PartCraft cria uma folha de desenho a partir da peça: vistas frontal, superior e lateral direita em projeção do terceiro diedro, uma vista isométrica, dimensões gerais e uma legenda em uma folha de A4 a A0 ou ANSI A a E. Além disso, você pode adicionar um corte, uma vista de detalhe e símbolos GD&T. A folha é atualizada quando a peça muda, e suas configurações ficam salvas no arquivo da peça.

## Abrir a folha de desenho

1. Construa a peça. (Sem nada construído: "Construa primeiro um sólido e depois faça o desenho dele.")
2. Escolha {{ui:Desenho}} na barra de ferramentas.

A vista 3D é substituída pela folha. A barra de ferramentas mostra {{ui:Referência}}, {{ui:Quadro}}, {{ui:Acabamento}}, {{ui:Detalhe}}, {{ui:PDF}} e {{ui:Voltar}}, e o painel da direita tem o título **Desenho**. A barra de status informa como as vistas foram geradas: "Desenho (curvas são desenhadas como facetas). Referência, Quadro e Acabamento posicionam GD&T em uma vista; o painel define um corte e uma vista de detalhe." As vistas são desenhadas a partir das facetas da malha, então arestas arredondadas são pequenos trechos retos; arcos verdadeiros exigem um kernel exato, que esta versão não tem.

Navegue pela folha: role a roda do mouse para dar zoom, arraste com o botão direito ou o do meio para mover a vista, e pressione {{key:F}} para ajustar a folha. Com a folha em foco, {{key:Plus}} e {{key:Minus}} dão zoom, e {{key:Shift}} com as teclas de seta move a vista.

Escolha {{ui:Voltar}}, {{ui:Voltar ao modelo}} ou pressione {{key:Esc}} (sem nada selecionado e sem ferramenta ativa) para voltar ao modelo 3D.

## O que há na folha

- **A folha que você escolher**, em paisagem (A3, a menos que você escolha outra), com uma borda e uma **legenda**: título, empresa, número do desenho, revisão, material, desenhado / verificado / aprovado por, data, escala, tamanho da folha, "Unidades: milímetros · Projeção do terceiro diedro", e se as vistas são exatas ou facetadas.
- Um **bloco de revisões** no canto superior direito, assim que você adicionar uma revisão.
- **Vistas frontal, superior e lateral direita**: a vista superior acima da frontal, a lateral direita à sua direita. Arestas ocultas tracejadas.
- Uma **vista isométrica**, quando há espaço.
- **Dimensões gerais**: largura e altura na vista frontal, profundidade na vista superior.
- Uma **escala** única para as vistas principais, da série ISO (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), escolhida para que caibam.

## Escolher o tamanho da folha

Na folha de desenho, sem nada selecionado, escolha {{ui:Folha}} no painel da direita: **A4, A3, A2, A1, A0** (ISO 216) ou **ANSI A, B, C, D, E** (11 × 8,5 a 44 × 34 pol.). As vistas são reorganizadas na maior escala ISO que caiba, então uma folha maior pode mostrar a peça em tamanho maior.

## Preencher a legenda

Os campos **Legenda** do painel da direita vão direto para a folha: {{ui:Título}}, {{ui:Desenho nº}}, {{ui:Revisão}}, {{ui:Empresa}}, {{ui:Desenhado por}}, {{ui:Verificado por}}, {{ui:Aprovado por}}, {{ui:Data}} (ano-mês-dia), {{ui:Tolerância geral}} e {{ui:Acabamento}} (os dois últimos são impressos logo acima da legenda). Digite em uma caixa e pressione {{key:Enter}} ou clique fora. Uma caixa vazia deixa sua célula em branco, exceto:

- **Título** mostra o nome da peça até que você digite outro.
- **Data** mostra a data de hoje até que você digite outra.
- **Revisão** mostra a revisão mais recente da lista até que você digite outra.

**Material** vem da peça: clique em um espaço vazio do modelo e depois escolha {{ui:Material}} no painel Peça. O mesmo material fornece a massa específica para as propriedades de massa do Medir.

## Adicionar revisões

Em **Revisões**, clique em {{ui:Adicionar revisão}}. Cada nova linha recebe a próxima letra (A, B, C …; depois de Z vem AA) e a data de hoje. Digite o que mudou e quem fez a alteração. {{ui:Excluir}} remove uma linha. O bloco de revisões no canto superior direito da folha lista-as, da mais antiga para a mais recente, até 20.

Tamanho da folha, legenda, revisões e material são salvos no arquivo da peça, e cada alteração é uma etapa de {{ui:Desfazer}}.

## Adicionar uma vista de corte

A peça é cortada por um plano e o corte é hachurado. Como as demais vistas, o corte é desenhado a partir de facetas, então arestas arredondadas são pequenos trechos retos.

1. No painel da direita, defina **Corte A-A** como **Da vista frontal**, **Da vista superior** ou **Da vista lateral direita**.
2. O corte aparece na folha, hachurado onde a linha de corte atravessa o material, com a linha de corte e suas setas "A" na vista de onde é tirado.
3. Defina **Cortar em (mm)** para mover o plano de corte. Ele começa pelo meio da peça.

Defina **Corte A-A** de volta para **Nenhum** para remover o corte.

## Adicionar uma vista de detalhe

1. Defina **Detalhe B** para a vista a ampliar (ou escolha {{ui:Detalhe}} na barra de ferramentas).
2. Clique no centro da área a ampliar, nessa vista. Um círculo com a letra "B" a marca, e o "Detalhe B" ampliado aparece na folha com sua própria escala, por exemplo "Detalhe B (2:1)".
3. Defina **Raio do detalhe (mm)** para o tamanho do círculo e **Escala do detalhe** para a ampliação: 2, 4, 5 ou 10 vezes a folha.

Um detalhe pode ser tirado da vista frontal, superior, lateral direita ou de corte, mas não da isométrica. Se não houver espaço para todas as vistas, o painel informa "Sem espaço na folha para: detalhe. Reduza o detalhe ou remova uma vista."

## Adicionar uma tabela de furos

Uma tabela de furos lista os furos da peça com as suas posições, para furação ou CNC: escolha **Tabela de furos** › **Da vista superior** (ou frontal, ou lateral direita) no painel.

- Cada furo visto de topo nessa vista recebe uma etiqueta ao lado: **A1**, **A2** … para o primeiro tamanho, **B1** … para o seguinte.
- A tabela lista cada etiqueta, seu **X** e **Y** em milímetros, e seu tamanho: "Ø14 THRU", "Ø6.6 × 10 DEEP", um rebaixo cilíndrico ou cônico, ou a chamada de rosca de um furo roscado.
- X e Y são medidos a partir do canto inferior esquerdo do contorno da vista, marcado **X0 Y0** na folha.
- Furos feitos por matrizes são incluídos. Furos que não são perpendiculares à vista são contados no painel e deixados de fora da tabela.

A tabela vai para uma área livre da folha e para o PDF.

## Posicionar símbolos GD&T e de acabamento superficial

1. Escolha {{ui:Referência}}, {{ui:Quadro}} (um quadro de controle de características) ou {{ui:Acabamento}} (um símbolo de acabamento superficial).
2. Clique no ponto de uma vista onde ele se prende. Ele se encaixa na linha desenhada mais próxima, a até 2,5 mm.
3. O símbolo aparece com uma linha de chamada, selecionado, e o painel da direita mostra as suas configurações.

Arraste um símbolo para movê-lo; sua linha de chamada permanece no ponto. Com um símbolo selecionado, as teclas de seta o deslocam 1 mm. {{key:Delete}} ou {{key:Backspace}} (ou {{ui:Excluir}} no painel) o remove; {{ui:Concluir}} ou {{key:Esc}} desmarca. Cada alteração está na lista de desfazer.

### Referência

**Letra**: de A a Z, sem I, O e Q (eles se confundem com 1, 0 e O). Cada nova referência recebe a próxima letra livre.

### Quadro de controle de características

| Configuração | Opções |
|---|---|
| **Tolerância** | Retitude, Planeza, Circularidade, Cilindricidade, Perfil de uma linha, Perfil de uma superfície, Perpendicularidade, Angularidade, Paralelismo, Posição, Concentricidade e Simetria (as duas últimas removidas na Y14.5-2018, e marcadas assim), Bater circular, Bater total |
| **Zona (mm)** | O valor da tolerância, padrão 0,1 |
| **Zona de diâmetro (⌀)** | Para características com zona cilíndrica; ativada por padrão para Posição |
| **Material** | RFS (nenhum), MMC (Ⓜ), LMC (Ⓛ), quando a característica permite |
| **Referência primária / secundária / terciária** | Até três letras de referência, cada uma com um **modificador …** (MMB, LMB) quando permitido |

A PartCraft verifica o quadro segundo as regras da ASME Y14.5 e informa o que está errado no topo do painel, por exemplo "Planeza é uma tolerância de forma: não recebe referências." ou "Posição precisa de pelo menos uma referência." A linha **Leitura** descreve o quadro por extenso.

### Acabamento superficial

| Configuração | Opções | Padrão |
|---|---|---|
| **Ra (µm)** | Média de rugosidade | 1,6 |
| **Processo** | qualquer processo, usinado, sem remoção de material | usinado |
| **Nota** | Até 40 caracteres, como uma direção das marcas ou um processo | |

Sem nada selecionado, o painel lista **Notas na folha**, cada uma com **Selecionar**.

## Exportar o PDF

Escolha {{ui:PDF}} na barra de ferramentas, {{ui:Exportar PDF}} no painel, ou {{ui:Exportar}}, e depois {{ui:Desenho (PDF): vistas, corte, detalhe, GD&T}} a partir do modelo. O PDF é baixado como `<nome da peça> - drawing.pdf`, e a barra de status lista o que há nele.

Imprima em "Tamanho real", em papel do tamanho da folha, para manter a escala correta.

## Limites

| Ainda não implementado | O que fazer agora |
|---|---|
| Cotas além das três dimensões gerais | Adicione-as no PDF com um aplicativo de marcação, ou exporte um esboço ou face como DXF e cote-o em um programa CAD 2D |
| Mais de um corte ou detalhe; vistas parciais, auxiliares e projetadas | Não disponível |
| Projeção do primeiro diedro, vistas móveis, folhas em retrato | Terceiro diedro, layout automático, paisagem |
| Notas de texto livres e tabelas na folha (além dos blocos de título e revisões) | Use a nota de acabamento, ou adicione texto no PDF |
| Desenhos de montagens | Não disponível |

Caracteres fora do conjunto da Europa Ocidental saem como "?" (o PDF usa a Helvetica embutida do leitor). Os símbolos GD&T são desenhados como linhas, então são impressos em qualquer leitor.

## Deixe a folha fazer o trabalho

- **Folha › Automático** escolhe o papel para você: a maior escala padrão até 1:1, na menor folha A que contenha as vistas nessa escala (a lista mostra qual foi escolhida).
- **Cotar os furos** cota os furos na vista que mais os enxerga de topo: uma marca de centro em cada um, uma chamada por tamanho ("2× Ø6 THRU" com uma linha de chamada), e as suas posições medidas a partir do canto inferior esquerdo da vista. A largura, altura e profundidade gerais estão sempre presentes.
