---
title: Reverter e avançar pelo histórico
summary: Mova a barra de reversão para cima e para baixo, uma operação de cada vez, para ver a peça a ser construída, insira operações no meio e volte ao fim.
keywords: reversão, reverter, avançar, barra de reversão, percorrer o histórico, inserir operação, congelar, histórico
from: 9a366cae
---

A barra de reversão decide quanto do histórico é construído. As operações abaixo dela ficam acinzentadas e não construídas; as novas operações entram na barra.

## Avançar uma operação de cada vez

Com a peça no ecrã (sem esboço ou desenho aberto):

| Ação | Resultado |
|---|---|
| {{key:[}} ou o botão de seta para cima ao lado do nome da peça | A barra sobe uma operação |
| {{key:]}} ou o botão de seta para baixo | A barra desce uma operação |
| {{key:End}} ou o botão de barra até ao fim | Todas as operações são construídas outra vez |

A barra de estado indica onde está a barra, por exemplo "Barra de reversão depois de Sketch1: 1 de 2 operações construídas". Os botões ficam desativados quando a barra já não pode mover-se nesse sentido.

Também pode escolher {{ui:Reverter até aqui}} em qualquer operação, ou clicar em **Barra de reversão · avançar** no histórico.

## Inserir uma operação no meio

1. Recue a barra até ficar onde a nova operação pertence.
2. Adicione a operação: entra na barra.
3. Prima {{key:End}} para construir o resto do histórico por cima dela.

Cada movimento da barra é um passo que pode anular com {{key:Mod+Z}}. A posição da barra fica guardada no ficheiro, por isso uma peça pode ser enviada revertida. A ferramenta de linha de comandos também a move: `partcraft rollback part.json` e `partcraft forward part.json --end`.
