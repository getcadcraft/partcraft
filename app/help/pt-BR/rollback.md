---
title: Reverter e avançar pelo histórico
summary: Mova a barra de reversão para cima e para baixo um recurso por vez para acompanhar a peça sendo criada, inserir recursos no meio e voltar ao fim.
keywords: reversão, reverter, avançar, barra de reversão, percorrer histórico, inserir recurso, congelar, histórico
from: 9a366cae
---

A barra de reversão decide quanto do histórico é criado. Os recursos abaixo dela ficam acinzentados e não são criados; novos recursos entram na barra.

## Avançar um recurso por vez

Com a peça na tela (nenhum esboço ou desenho aberto):

| Ação | Resultado |
|---|---|
| {{key:[}} ou o botão de seta para cima ao lado do nome da peça | A barra sobe um recurso |
| {{key:]}} ou o botão de seta para baixo | A barra desce um recurso |
| {{key:End}} ou o botão de levar a barra ao fim | Todos os recursos voltam a ser criados |

A barra de status diz onde está a barra, por exemplo "Barra de reversão após Sketch1: 1 de 2 recursos criados". Os botões ficam desligados quando a barra não pode se mover mais naquela direção.

Você também pode escolher {{ui:Reverter até aqui}} em qualquer recurso, ou clicar em **Barra de reversão · avançar** no histórico.

## Inserir um recurso no meio

1. Recue a barra até que ela fique onde o novo recurso pertence.
2. Adicione o recurso: ele entra na barra.
3. Pressione {{key:End}} para criar o restante do histórico sobre ele.

Cada movimento da barra é um passo que você pode desfazer com {{key:Mod+Z}}. A posição da barra é salva no arquivo, então uma peça pode ser enviada revertida. A ferramenta de linha de comando também a move: `partcraft rollback part.json` e `partcraft forward part.json --end`.
