---
title: Lista de peças, vistas explodidas e peças móveis
summary: Dê a uma peça da montagem um número, descrição e material, leia e baixe a lista de materiais, crie vistas explodidas com etapas ou automaticamente, mova peças que não estão unidas manualmente, defina limites de junta e exporte a montagem inteira como STL, 3MF ou lista de materiais.
keywords: BOM, lista de materiais, lista de peças, número da peça, material, densidade, csv, vista explodida, explodir, recolher, linhas de rastro, mover peça, arrastar, manipulador, mover, girar, limites de junta, exportação da montagem, etapa da montagem, desenho da montagem, balões
from: ebc9f6f3
---

Estas ferramentas ficam no painel da direita de uma montagem (veja [Monte uma montagem](topic:build-assembly)).

## Propriedades da peça

Selecione uma peça na lista à esquerda. Em **Propriedades da peça**, defina:

- **Número da peça** (até 40 caracteres) e **Descrição** (até 200).
- **Material**: um material comum com sua densidade, ou **Densidade personalizada…** para digitar uma em g/cm³. O painel então mostra a massa da peça.

As propriedades pertencem à peça, então todas as cópias dela as compartilham. Elas são salvas no arquivo da montagem.

## Lista de materiais

Sem nada selecionado ({{key:Esc}}), o painel mostra a **Lista de materiais**: uma linha por peça, com número do item, quantidade (quantas cópias), número da peça, nome, material e massa de cada uma. Os números dos itens seguem a ordem em que as peças aparecem pela primeira vez na lista. As massas usam o volume de cada peça (do sólido facetado que o kernel de malha constrói, um pouco baixo em peças redondas) e seu material; uma peça sem material não tem massa e, nesse caso, não há total.

{{ui:Baixar CSV}} salva a lista como um arquivo CSV (também **Exportar › Lista de materiais (CSV)**). Ele abre em qualquer planilha; texto que começa com = ou + recebe um apóstrofo no início para que a planilha não o execute como fórmula.

## Vistas explodidas

Uma vista explodida afasta as peças para fazer ilustrações. Ela nunca muda as juntas nem a posição real das peças: salvar, verificações de colisão e exportações usam as posições reais.

1. Com nada selecionado, escolha {{ui:Nova vista}} em **Vistas explodidas**.
2. Em **Adicionar uma etapa**, marque as peças que a etapa move, escolha uma **Direção** (+X … −Z, a normal de uma face que você clicar, ou **Arrastar uma seta na vista**) e uma **Distância**, depois {{ui:Adicionar etapa}}. Com **Arrastar**, arraste a seta e solte: a etapa assume a direção e a distância que você arrastou.
3. Adicione mais etapas. Elas são reproduzidas uma após a outra.
4. Arraste o controle deslizante entre **Montada** e **Explodida** para animar a vista. Linhas de rastro tracejadas vão da posição de repouso de cada peça até onde ela está agora.

{{ui:Auto (radial)}} afasta do meio da montagem todas as peças, exceto a fixa. {{ui:Auto (juntas)}} move cada peça unida (com tudo o que está unido abaixo dela) para fora, ao longo da normal da face da junta. Você pode manter várias vistas nomeadas; escolha uma em **Vista**, ou **Montada** para devolver as peças à posição. As vistas são salvas no arquivo da montagem.

## Mover uma peça manualmente

Só uma peça sem junta com a peça fixa se move manualmente (a peça fixa fica parada; as juntas posicionam as demais). Selecione-a e, em **Mover manualmente**:

- Digite **ΔX, ΔY, ΔZ** e escolha {{ui:Mover}}, ou escolha um eixo e um **Ângulo** e {{ui:Girar}} (em torno do meio da peça).
- {{ui:Arrastar para mover}} mostra setas na peça: arraste uma seta para mover ao longo desse eixo, ou um quadrado para mover em um plano. {{ui:Arrastar para girar}} mostra anéis para girá-la. Cada arrasto é uma etapa de desfazer. {{key:Esc}} oculta as setas.

## Limites de junta

Selecione uma junta que se move e, em **Limites**, marque **Manter … entre limites** para qualquer um dos seus valores; depois defina o **Mínimo** e o **Máximo**. Cada valor é mantido dentro dos próprios limites, seu controle deslizante cobre apenas essa faixa, e **Verificar o movimento quanto a colisões** varre somente entre eles. Uma junta cilíndrica pode limitar seu ângulo, seu deslocamento ou ambos. Ao mudar o tipo da junta, os limites dos valores que o novo tipo não tem são removidos.

## Exportar a montagem inteira

Em uma montagem, o menu **Exportar** grava a montagem inteira com cada peça onde ela está posicionada:

- **STEP AP242 / AP214** e **Desenho (PDF)** ainda não foram implementados nesta versão: precisam de um kernel exato, então estão desativados. Exporte o STEP de cada peça (sólido exato) a partir da própria peça.
- **STL**: uma malha com todas as peças. **3MF**: cada peça uma vez, posicionada uma vez por cópia.
- **Lista de materiais (CSV)**.

## Limites

- O desenho da montagem e o STEP da montagem ainda não foram implementados nesta versão (precisam de um kernel exato). As vistas explodidas servem para ilustrações na tela.
