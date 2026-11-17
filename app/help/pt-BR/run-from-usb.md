---
title: Executar a partir de um pen drive
summary: Os arquivos que as ferramentas de engenharia gravam e onde, para que o CadCraft Studio possa rodar a partir de um pen drive ou de qualquer pasta, sem instalador e sem direitos de administrador: configurações, geradores, caches e arquivos de peça, e o que permanece no pen drive.
keywords: usb, portátil, sem instalador, administrador, admin, configurações, pasta de dados, geradores, onde os arquivos são gravados, offline, privacidade, acesso ao host
from: 263efc79
---

As ferramentas de engenharia (geradores, a biblioteca de engenharia, as verificações e os arquivos de dados) não precisam de **direitos de administrador** nem de **instalador**. Elas gravam apenas o que está listado aqui, e nada além disso.

| O quê | Onde fica guardado |
|---|---|
| Suas peças, com os corpos gerados, folhas de dados e verificações | O arquivo de peça que você salva (`.partcraft.json`), no lugar onde você o salvar. |
| Geradores que você abriu a partir de arquivos | No armazenamento próprio do aplicativo: o armazenamento local do navegador em uma página web, e a pasta `data` ao lado do programa no Studio portátil. No máximo 20. |
| Configurações (tamanhos de voxel que você definiu, threads do solucionador, o layout) | O mesmo armazenamento do aplicativo. |
| Folhas de dados, campos, malhas | Somente onde você os salvar: o download vai para o lugar que você escolher. |

As ferramentas não fazem **nenhuma chamada de rede própria**: os geradores incluídos são arquivos na pasta do próprio aplicativo; a biblioteca e as verificações rodam no seu computador, em um worker que não consegue acessar a rede; e os dados de engenharia (propriedades da água e do ar, materiais) estão dentro do aplicativo. Um gerador que você abre a partir de um arquivo é lido no seu computador e não vai a lugar nenhum.

## O Windows portátil (zip) e o Linux

O Studio portátil para Windows mantém suas configurações, caches e complementos em uma pasta `data` ao lado do programa. O AppImage do Linux as mantém ao seu lado quando há um arquivo chamado `portable` junto dele; sem esse arquivo, ele usa a sua pasta pessoal. Não existe forma portátil para Mac: o sistema impede que um aplicativo baixado grave ao seu lado. As notas de portabilidade do próprio shell (ajuda do `Studio`) listam o que o programa grava.

## Acesso ao host

Nada aqui pede acesso ao host. Impressoras, máquinas seriais e dispositivos USB são outra coisa: eles pedem permissão quando um trabalho precisa deles, uma vez por dispositivo, e nem os geradores nem as verificações os acessam.
