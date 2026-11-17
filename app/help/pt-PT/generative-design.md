---
title: Criar uma forma a partir de cargas (Generativo)
summary: Escolha as faces que estão fixas e carregadas, as regiões a manter e a manter livres, volumes-alvo e materiais, e gere resultados: as formas mais rígidas encontradas para cada volume, verificadas de novo como sólidos, comparadas numa tabela e transferidas como STL, STEP ou uma nova peça.
keywords: design generativo, otimização topológica, SIMP, leveza, treliça, forma orgânica, resultados, comparar, massa, fração de volume, preservar, manter dentro, obstáculo, manter livre, espaço de projeto, dimensão mínima de barra, STL, impressão 3D
from: 5b91fa8e
---

O espaço de trabalho **Generativo** remove material de que as cargas não precisam. Indica onde a peça está fixa e carregada, o que deve ficar e o que deve ficar livre; o PartCraft encontra a forma mais rígida para cada volume-alvo (**otimização topológica**), verifica cada uma de novo como sólido com o material real e mostra os resultados lado a lado. Funciona nas faces com nome que o kernel de malha atribui à peça (ver [O kernel de malha](topic:solid-kernels)).

Escolha **Generativo** na caixa **Área de trabalho**. A peça não é alterada; o estudo fica guardado dentro do ficheiro da peça.

## Configurar um estudo

1. Prima **Novo estudo** no painel direito.
2. **Espaço**: *A peça tal como está* remove material da sua peça; *Uma caixa em redor da peça* cria uma forma dentro de uma caixa maior do que a peça, pela **Margem da caixa**.
3. **Tamanho do elemento**: deixe em branco para um tamanho automático (cerca de 8,000 cubos), ou escreva um. Tamanhos mais finos dão formas mais finas e demoram mais.
4. **Barra mínima**: barras mais finas do que cerca do dobro deste valor não se formam. Em branco significa um cubo e meio.
5. Marque de um a seis **Volumes-alvo** (a parte do espaço de projeto que a forma pode ocupar) e de um a quatro **Materiais**. Cada volume é gerado uma vez; cada material é verificado nessa forma (a forma mais rígida não depende do material, mas a sua massa, tensão e coeficiente de segurança dependem).

## Objetivos

- {{ui:Fixa}}: clique nas faces que ficam fixas. Uma **Face sem atrito** da lista **Adicionar** do painel fixa uma face apenas no seu próprio plano (use para planos de simetria).
- {{ui:Força}}: clique nas faces carregadas, depois escreva a força total e escolha a sua direção no painel. **Pressão** está na lista **Adicionar**.
- {{ui:Preservar}}: clique nas faces cujas zonas envolventes têm de permanecer sólidas, e defina a profundidade (**Manter sólido dentro de**), por exemplo à volta de furos de parafusos. As faces que fixa ou carrega são sempre mantidas.
- {{ui:Obstáculo}}: clique nas faces cujas zonas envolventes têm de ficar vazias, e defina a distância (**Manter vazio dentro de**), por exemplo espaço para um eixo ou uma ferramenta.

Prima **Concluir escolha** ou {{key:Esc}} depois de clicar nas faces. Os tons verdes e vermelhos mostram as regiões.

## Gerar e comparar

Prima {{ui:Gerar}}. O painel mostra o progresso e o tempo restante; {{ui:Parar}} cancela. Cada resultado aparece na tabela **Resultados**: volume-alvo, material, **massa**, **tensão máxima**, **deslocamento máximo** e **coeficiente de segurança** (limite de elasticidade ÷ tensão), tudo a partir de uma nova resolução da forma acabada como cubos sólidos com o material real.

Escolha um resultado para o ver na vista (a peça fica oculta; marque **Mostrar a peça através dele** para ver ambos). Abaixo da tabela: quantas iterações demorou e se estabilizou, a sua rigidez como sólido face ao valor do próprio otimizador, e a sua superfície.

## Usar um resultado

- **STL**: uma malha de triângulos fechada, pronta para impressão 3D.
- **STEP (facetado)**: a mesma superfície como sólido STEP feito de faces planas.
- **Novo ficheiro de peça**: uma peça do PartCraft cuja única operação é o resultado como sólido importado. Abra-o para esboçar nele, furar ou verificá-lo na Simulação. É facetado (milhares de faces planas), não uma forma editável.
- **Adicionar a esta peça** une o resultado à peça; só está ativo para um espaço de projeto em caixa (com a própria peça como espaço, o resultado fica dentro da peça).

**Novo ficheiro de peça** e **Adicionar a esta peça** ainda não estão implementados nesta versão: o resultado torna-se um sólido importado, o que exige um kernel exato. As transferências STL e STEP (facetado) funcionam.

## Até que ponto confiar

- Otimiza a **rigidez** para o volume dado. Ainda não existem limites de tensão nem regras de fabrico (saliências, direções de fresagem, dimensões mínimas de furos): verifique um resultado escolhido em [Simulação](topic:simulation) e ajuste.
- Barras finas com um ou dois cubos de largura são aproximações: use um tamanho de elemento mais pequeno para peças esbeltas.
- O método é SIMP com um filtro de densidade, uma projeção de limiar e atualizações por critérios de otimalidade; a tensão e a deflexão indicadas são do resultado como cubos, o que é honesto mas grosseiro em cantos vivos.

## Relacionados

- [Verificar tensão e deslocamento (Simulação)](topic:simulation)
- [Exportar para impressão, STEP e DXF](topic:export-files)
- [O que ainda não está implementado](topic:not-built-yet)
