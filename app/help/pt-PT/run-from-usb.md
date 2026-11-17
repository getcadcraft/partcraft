---
title: Executar a partir de uma unidade USB
summary: O que as ferramentas de engenharia escrevem e onde, para que o CadCraft Studio possa correr a partir de uma pen USB ou de qualquer pasta, sem instalador e sem direitos de administrador: definições, geradores, caches e ficheiros de peças, e o que fica na pen.
keywords: usb, portátil, sem instalador, administrador, admin, definições, pasta de dados, geradores, onde são escritos os ficheiros, offline, privacidade, acesso ao anfitrião
from: 263efc79
---

As ferramentas de engenharia (geradores, a biblioteca de engenharia, as verificações e os ficheiros de dados) não precisam de **direitos de administrador** nem de **instalador**. Escrevem apenas o que está listado aqui, e mais nada.

| O quê | Onde fica guardado |
|---|---|
| As suas peças, com os respetivos corpos gerados, folhas de dados e verificações | O ficheiro de peça que guarda (`.partcraft.json`), no local onde o guarda. |
| Geradores abertos a partir de ficheiros | No armazenamento próprio da aplicação: o armazenamento local do navegador numa página web, e a pasta `data` junto ao programa no Studio portátil. No máximo 20. |
| Definições (tamanhos de voxel que definiu, threads do solucionador, o layout) | O mesmo armazenamento da aplicação. |
| Folhas de dados, campos, malhas | Só onde as guardar: a transferência vai para onde escolher. |

As ferramentas não fazem **chamadas de rede próprias**: os geradores incluídos são ficheiros na pasta da própria aplicação, a biblioteca e as verificações correm no seu computador, num worker que não consegue aceder à rede, e os dados de engenharia (propriedades da água e do ar, materiais) estão dentro da aplicação. Um gerador que abre a partir de um ficheiro é lido no seu computador e não sai daí.

## O zip portátil do Windows e o Linux

O Studio portátil para Windows guarda as suas definições, caches e suplementos numa pasta `data`, ao lado do programa. O AppImage de Linux guarda-os ao lado de si quando existe, junto dele, um ficheiro chamado `portable`; sem esse ficheiro usa a sua pasta pessoal. Não existe forma portátil para Mac: o sistema impede que uma aplicação transferida escreva ao lado de si própria. As notas portáteis da própria shell (ajuda de `Studio`) indicam o que o programa escreve.

## Acesso ao anfitrião

Nada aqui pede acesso ao anfitrião. Impressoras, máquinas série e dispositivos USB são separados: pedem acesso quando um trabalho precisa deles, uma vez por dispositivo, e nada nos geradores ou nas verificações lhes toca.
