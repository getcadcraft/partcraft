---
title: Crescer uma forma a partir de cargas (Generativo)
summary: Escolha as faces que são fixas e carregadas, regiões a manter e a manter livres, volumes-alvo e materiais, e gere resultados: as formas mais rígidas encontradas para cada volume, verificadas de novo como sólidos, comparadas em uma tabela e baixadas como STL, STEP ou uma nova peça.
keywords: projeto generativo, otimização topológica, SIMP, leve, treliça, forma orgânica, resultados, comparar, massa, fração de volume, preservar, manter sólido, obstáculo, manter vazio, espaço de projeto, espessura mínima de barra, STL, impressão 3D
from: 5b91fa8e
---

A área de trabalho Generativo remove o material que as cargas não precisam. Você diz onde a peça é fixada e carregada, o que deve ficar e o que deve ficar livre; o PartCraft encontra a forma mais rígida para cada volume-alvo (**otimização topológica**), verifica cada uma de novo como sólido com o material real e mostra os resultados lado a lado. Ele trabalha sobre as faces nomeadas que o kernel de malha atribui à peça (veja [O kernel de malha](topic:solid-kernels)).

Escolha **Generativo** na caixa **Área de trabalho**. Sua peça não é alterada; o estudo é salvo dentro do arquivo da peça.

## Configure um estudo

1. Pressione **Novo estudo** no painel direito.
2. **Espaço**: *A peça como está* remove material da sua peça; *Uma caixa em torno da peça* faz crescer uma forma dentro de uma caixa maior que a peça pela **Margem da caixa**.
3. **Tamanho do elemento**: deixe em branco para um tamanho automático (cerca de 8.000 cubos), ou digite um. Tamanhos menores dão formas mais finas e levam mais tempo.
4. **Barra mínima**: barras mais finas que cerca do dobro deste valor não se formam. Vazio significa um cubo e meio.
5. Marque de um a seis **Volumes-alvo** (a parcela do espaço de projeto que a forma pode ocupar) e de um a quatro **Materiais**. Cada volume é gerado uma vez; cada material é verificado sobre essa forma (a forma mais rígida não depende do material, mas sua massa, tensão e fator de segurança dependem).

## Objetivos

- {{ui:Fixa}}: clique nas faces que são fixas. Uma **Face sem atrito** da lista **Adicionar** do painel fixa uma face apenas em seu próprio plano (use para planos de simetria).
- {{ui:Força}}: clique nas faces carregadas, depois digite a força total e escolha sua direção no painel. **Pressão** está na lista **Adicionar**.
- {{ui:Preservar}}: clique nas faces cujas vizinhanças devem permanecer sólidas, e defina até que profundidade (**Manter sólido até**) — por exemplo, em torno de furos de parafuso. As faces que você fixa ou carrega são sempre mantidas.
- {{ui:Obstáculo}}: clique nas faces cujas vizinhanças devem permanecer vazias, e defina até que distância (**Manter vazio até**) — espaço para um eixo ou uma ferramenta.

Pressione **Concluir seleção** ou {{key:Esc}} depois de clicar nas faces. Tons verdes e vermelhos mostram as regiões.

## Gere e compare

Pressione {{ui:Gerar}}. O painel mostra o progresso e o tempo restante; **Parar** cancela. Cada resultado aparece na tabela **Resultados**: volume-alvo, material, **massa**, **maior tensão**, **maior deslocamento** e **fator de segurança** (limite de escoamento ÷ tensão), tudo a partir de uma nova solução da forma final como cubos sólidos com o material real.

Escolha um resultado para vê-lo na vista (a peça fica oculta; marque **Mostrar a peça através dele** para ver ambos). Abaixo da tabela: quantas iterações foram necessárias e se ela se estabilizou, sua rigidez como sólido comparada com o valor do próprio otimizador, e sua superfície.

## Use um resultado

- **STL**: uma malha triangular fechada, pronta para impressão 3D.
- **STEP (facetado)**: a mesma superfície como um sólido STEP feito de faces planas.
- **Novo arquivo de peça**: uma peça do PartCraft cujo único recurso é o resultado como um sólido importado. Abra-o para esboçar nele, furar ou verificá-lo em Simulação. Ele é facetado (milhares de faces planas), não uma forma editável.
- **Adicionar a esta peça** une o resultado à peça; ele só fica ativo para um projeto em caixa (com a própria peça como espaço, o resultado fica dentro da peça).

**Novo arquivo de peça** e **Adicionar a esta peça** ainda não estão implementados nesta versão: o resultado se torna um sólido importado, o que exige um kernel exato. Os downloads STL e STEP (facetado) funcionam.

## Quanto confiar

- Ele otimiza a **rigidez** para o volume dado. Ainda não há limites de tensão nem regras de fabricação (saliências, direções de fresamento, tamanhos mínimos de furo): verifique um resultado escolhido em [Simulação](topic:simulation) e ajuste.
- Barras finas com um ou dois cubos de largura são aproximações: use um tamanho de elemento menor para peças esbeltas.
- O método é SIMP com um filtro de densidade, uma projeção por limiar e atualizações por critério de otimalidade; a tensão e a deflexão informadas são do resultado como cubos, o que é honesto, mas grosseiro em cantos vivos.

## Relacionados

- [Verificar tensão e deflexão (Simulação)](topic:simulation)
- [Exportar para impressão, STEP e DXF](topic:export-files)
- [O que ainda não está implementado](topic:not-built-yet)
