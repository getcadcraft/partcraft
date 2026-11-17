---
title: Lista de peças, vistas explodidas e peças em movimento
summary: Atribuir a cada peça de uma montagem um número, descrição e material; consultar e transferir a lista de materiais; criar vistas explodidas com passos ou automaticamente; mover à mão as peças que não estão unidas; definir limites de juntas; e exportar a montagem completa como STL, 3MF ou lista de materiais.
keywords: bom, lista de materiais, lista de peças, número da peça, material, densidade, csv, vista explodida, explodir, recolher, linhas de rasto, mover peça, arrastar, manipulador, translação, rodar, limites de junta, exportação da montagem, passo da montagem, desenho de montagem, balões
from: ebc9f6f3
---

Estas ferramentas estão no painel da direita de uma montagem (ver [Construir uma montagem](topic:build-assembly)).

## Propriedades da peça

Selecione uma peça na lista à esquerda. Em **Propriedades da peça**, defina:

- **Número da peça** (até 40 caracteres) e **Descrição** (até 200).
- **Material**: um material comum com a sua densidade, ou **Densidade personalizada…** para a escrever em g/cm³. O painel mostra então a massa da peça.

As propriedades pertencem à peça, pelo que todas as cópias as partilham. São guardadas no ficheiro da montagem.

## Lista de materiais

Sem nada selecionado ({{key:Esc}}), o painel mostra a **Lista de materiais**: uma linha por peça, com o respetivo número de item, quantidade (quantas cópias), número da peça, nome, material e massa. Os números de item seguem a ordem pela qual as peças aparecem pela primeira vez na lista. As massas usam o volume de cada peça (do sólido facetado que o núcleo de malha constrói, ligeiramente baixo em peças redondas) e o seu material. Uma peça sem material não tem massa e, nesse caso, não há total.

{{ui:Download CSV}} transfere a lista como ficheiro CSV (também **Exportar › Lista de materiais (CSV)**). Abre-se em qualquer folha de cálculo. Um texto que começa por = ou + recebe um apóstrofo à frente, para que a folha de cálculo não o execute como fórmula.

## Vistas explodidas

Uma vista explodida afasta as peças para ilustrações. Nunca altera as juntas nem a posição real das peças: guardar, as verificações de conflitos e as exportações usam as posições reais.

1. Sem nada selecionado, escolha {{ui:New view}} em **Vistas explodidas**.
2. Em **Acrescentar um passo**, marque as peças que o passo move, escolha uma **Direção** (+X … −Z, a normal de uma face que clicar, ou **Arrastar uma seta na vista**) e uma **Distância**, e depois {{ui:Add step}}. Com **Arrastar**, arraste a seta e solte: o passo toma a direção e a distância que arrastou.
3. Acrescente mais passos. Reproduzem-se uns a seguir aos outros.
4. Arraste o cursor entre **Montada** e **Explodida** para animar a vista. Linhas de rasto a tracejado vão da posição de repouso de cada peça até à posição atual.

{{ui:Auto (radial)}} afasta todas as peças, exceto a peça fixa, do centro da montagem. {{ui:Auto (juntas)}} afasta cada peça unida (com tudo o que estiver unido abaixo dela) ao longo da normal da face da sua junta. Pode guardar várias vistas com nome; escolha uma em **Vista**, ou **Montada** para repor as peças. As vistas são guardadas no ficheiro da montagem.

## Mover uma peça à mão

Só uma peça sem junta com a peça fixa se move à mão (a peça fixa fica parada; as juntas posicionam o resto). Selecione-a e, em **Mover à mão**:

- Escreva **ΔX, ΔY, ΔZ** e escolha {{ui:Move}}, ou escolha um eixo, um **Ângulo** e {{ui:Turn}} (em torno do centro da peça).
- {{ui:Drag to move}} mostra setas na peça: arraste uma seta para mover ao longo desse eixo, ou um quadrado para mover num plano. {{ui:Drag to turn}} mostra anéis para a rodar. Cada arrasto é um passo de anulação. {{key:Esc}} oculta as setas.

## Limites de juntas

Selecione uma junta que se mova e, em **Limites**, marque **Manter … entre limites** para qualquer dos seus valores; depois defina o **Mínimo** e o **Máximo**. Cada valor fica contido nos seus próprios limites, o seu cursor cobre apenas esse intervalo, e {{ui:Check the motion for clashes}} varre apenas entre eles. Uma junta cilíndrica pode limitar o seu ângulo, o seu deslocamento ou ambos. Ao alterar o tipo da junta, os limites dos valores que o novo tipo não tem são removidos.

## Exportar a montagem completa

Numa montagem, o menu **Exportar** escreve a montagem completa, com cada peça onde está posicionada:

- **STEP AP242 / AP214** e **Desenho (PDF)** ainda não estão implementados nesta versão: precisam de um núcleo exato, pelo que estão a cinzento. Exporte o STEP de cada peça (sólido exato) a partir da própria peça.
- **STL**: uma malha de todas as peças. **3MF**: cada peça uma vez, colocada uma vez por cópia.
- **Lista de materiais (CSV)**.

## Limites

- O desenho da montagem e o STEP da montagem ainda não estão implementados nesta versão (precisam de um núcleo exato). As vistas explodidas servem para ilustrações no ecrã.
