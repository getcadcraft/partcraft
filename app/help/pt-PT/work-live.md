---
title: Modelar uma peça em conjunto com o Live TeamWork
summary: O que muda no PartCraft durante uma sessão Live TeamWork do CadCraft Studio: as operações de todos numa só árvore, cada janela a construir o mesmo sólido, a sua própria anulação, e entrar a partir de um navegador na mesma rede.
keywords: live, live teamwork, studio live, em conjunto, colaborar, sessão, partilhar em direto, entrar, árvore de operações, histórico, reconstruir, cursor, ponteiro, ver uns aos outros, nomes, cor, seleção, anular, anfitrião
from: 1809b96c
---

## O que vai aprender

O que acontece a uma peça enquanto várias pessoas a modelam ao mesmo tempo. O CadCraft Studio inicia e entra na sessão Live TeamWork (Partilhar, Entrar); esta página trata da própria peça.

## Todos modelam ao mesmo tempo

Todos trabalham na mesma árvore de operações: esboços, extrusões, furos, padrões, boleados, parâmetros. As suas próprias edições aparecem de imediato; as dos outros aparecem um momento depois de as fazerem. Só a árvore circula: cada janela constrói o sólido por si, e o núcleo do PartCraft constrói o mesmo sólido a partir da mesma árvore em todas as janelas.

- **Duas pessoas alteram uma operação:** definições diferentes (uma a profundidade, a outra a condição de fim) são ambas mantidas; a mesma definição fica com a alteração posterior.
- **Um esboço** circula por inteiro: quando duas pessoas editam um esboço ao mesmo tempo, vence a edição posterior. Acordem quem desenha cada esboço.
- **Uma operação construída sobre algo que alguém acabou de eliminar** (uma extrusão de um esboço removido, um furo numa face removida) é retirada, e a barra de estado indica porquê.
- **Reordenar a árvore** é verificado: se duas pessoas arrastarem operações ao mesmo tempo, o segundo movimento é retirado.

## Ver os outros

Cada pessoa na sessão tem uma cor própria. O ponteiro de cada pessoa aparece como uma seta na sua cor, com o nome ao lado, na face para que aponta. Quando tem uma operação selecionada na árvore, o nome dela aparece a seguir ao seu.

Os ponteiros, nomes e seleções existem apenas na sessão: nunca são guardados no ficheiro nem entram na anulação de ninguém. Deslizam até onde cada pessoa está, por isso mantêm-se suaves mesmo numa ligação lenta.

## A anulação desfaz o seu próprio trabalho

{{key:Mod+Z}} anula a sua última edição e deixa as dos outros intactas. Se alguém tiver alterado a mesma coisa entretanto, nada é anulado e a barra de estado indica quem.

## Entrar a partir de um navegador

Um colega sem o Studio pode digitalizar, com um telemóvel, tablet ou computador na mesma rede, a imagem sob o código do anfitrião. O PartCraft abre no navegador, preenche-se com a peça do anfitrião quando este o deixa entrar, e constrói-a. Uma ligação de convite permite entrar a partir de outra rede: o anfitrião precisa de um lugar no Team Cloud Plan para a aplicação, os restantes entram gratuitamente, e a ligação só funciona enquanto a sessão do anfitrião estiver aberta.

## Quando a sessão termina

Só o anfitrião guarda a peça. Os restantes ficam com uma cópia não guardada: guarde-a se quiser mantê-la.

:::note
As montagens ainda não são partilhadas numa sessão: abra a própria peça para trabalharem nela em conjunto.
:::
