---
title: Modelar uma peça junto com o Live TeamWork
summary: O que muda no PartCraft durante uma sessão do Live TeamWork no CadCraft Studio: os recursos de todos em uma só árvore, cada janela construindo o mesmo sólido, seu próprio desfazer e a entrada por um navegador na mesma rede.
keywords: live, live teamwork, studio live, juntos, colaborar, sessão, compartilhar ao vivo, entrar, árvore de recursos, histórico, reconstruir, cursor, ponteiro, ver uns aos outros, nomes, cor, seleção, desfazer, anfitrião
from: 1809b96c
---

## O que você vai aprender

O que acontece com uma peça enquanto várias pessoas a modelam ao mesmo tempo. O CadCraft Studio inicia e entra na sessão do Live TeamWork (Compartilhar, Entrar); esta página trata da peça em si.

## Todos modelam ao mesmo tempo

Todos trabalham na mesma árvore de recursos: esboços, extrusões, furos, matrizes, arredondamentos, parâmetros. Suas próprias edições aparecem de imediato; as das outras pessoas aparecem um instante depois de feitas. Somente a árvore é transmitida: cada janela constrói o sólido por conta própria, e o kernel do PartCraft constrói o mesmo sólido a partir da mesma árvore em todas as janelas.

- **Duas pessoas alteram um recurso:** configurações diferentes (uma a profundidade, outra a condição de fim) são ambas mantidas; a mesma configuração fica com a alteração mais recente.
- **Um esboço** é transmitido por inteiro: quando duas pessoas editam um mesmo esboço ao mesmo tempo, vale a edição mais recente. Combinem quem desenha qual esboço.
- **Um recurso construído sobre algo que alguém acabou de excluir** (uma extrusão de um esboço removido, um furo em uma face removida) é desfeito, e a barra de status informa o motivo.
- **Reordenar a árvore** é verificado: se duas pessoas arrastarem recursos no mesmo momento, a segunda movimentação é desfeita.

## Ver uns aos outros

Cada pessoa na sessão tem uma cor própria. Você vê o ponteiro de cada pessoa como uma seta na cor dela, com o nome ao lado, sobre a face que ela está apontando. Quando ela tem um recurso selecionado na árvore, o nome dele aparece depois do nome dela.

Ponteiros, nomes e seleções existem somente durante a sessão: nunca são salvos no arquivo e nunca entram no desfazer de ninguém. Eles deslizam até onde cada pessoa está, então continuam suaves mesmo em uma conexão lenta.

## O desfazer desfaz o seu próprio trabalho

{{key:Mod+Z}} desfaz a sua última edição e deixa as dos outros intactas. Quando outra pessoa alterou a mesma coisa depois, nada é desfeito e a barra de status informa quem foi.

## Entrar por um navegador

Um colega sem o Studio pode escanear a imagem que aparece sob o código do anfitrião com um celular, tablet ou computador na mesma rede. O PartCraft abre no navegador, carrega a peça do anfitrião assim que ele deixar você entrar, e a constrói. Um link de convite permite que alguém entre a partir de outra rede: o anfitrião precisa de uma licença de usuário do Team Cloud Plan para o aplicativo, todos os demais entram sem custo, e o link funciona somente enquanto a sessão do anfitrião estiver aberta.

## Quando a sessão termina

Somente o anfitrião salva a peça. Todos os demais mantêm uma cópia não salva: salve-a se quiser mantê-la.

:::note
Montagens ainda não são compartilhadas em uma sessão: abra a própria peça para trabalhá-la em conjunto.
:::
