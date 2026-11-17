---
title: Ver o interior com uma vista em corte
summary: Corte a peça ou uma montagem com um plano para ver o interior, com as faces de corte preenchidas. Mova o plano com um cursor, corte numa face plana que clicar e inverta o lado que fica removido.
keywords: corte, vista em corte, recorte, corte transversal, recorte por plano, interior, fatia, plano, tampas, trama, corte de montagem
from: a7555f7c
---

A **vista em corte** corta o modelo com um plano para que veja o interior: furos, cavidades, espessuras de paredes, a forma como as peças de uma montagem encaixam umas nas outras. Funciona em todas as áreas de trabalho e numa montagem. Abra-a a partir do menu {{ui:Vistas}} do grupo **Vista**, em {{ui:Vista em corte}}, ou prima {{key:X}}. Abre-se um cartão no canto inferior esquerdo da vista.

Só a vista é cortada. A peça, o seu volume, as medições e as exportações ficam inteiros, e nada é guardado no ficheiro.

## Cortar a meio

1. Prima {{key:X}}. A peça é cortada pelo plano frontal a meio, e as faces de corte são preenchidas com uma cor atenuada.
2. Arraste o cursor {{ui:Posição}}, ou escreva uma distância em mm, para mover o corte.
3. Escolha outro {{ui:Plano}}: {{ui:Frente (XY)}}, {{ui:Topo (XZ)}} ou {{ui:Direita (YZ)}}.
4. Marque {{ui:Cortar o outro lado}} para manter a metade que foi cortada.

## Cortar numa face

1. Clique em {{ui:Escolher uma face}} no cartão.
2. Clique numa face plana na vista. O corte começa rente a essa face, com o plano sobre ela.
3. Mova a {{ui:Posição}} para ir mais fundo. O número é a distância ao longo da direção exterior da face.

## Cliques e o corte

Os cliques na vista vão para o que resta depois do corte, por isso pode escolher uma face ou uma aresta no interior da peça, iniciar um esboço nela ou medir através dela. Desmarque {{ui:Preencher as faces de corte}} para ver através do corte até às partes ocas.

## Fechar

Prima {{key:Esc}}, prima {{key:X}} de novo, ou clique em {{ui:Fechar}}. Abrir um esboço ou a folha de desenho também a fecha.

:::tip
Para um corte na folha de desenho (com tramas e a linha do plano de corte), use {{ui:Desenho}}: veja [Criar um desenho (PDF)](topic:drawing-pdf).
:::
