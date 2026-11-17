---
title: Documentos e revisões (o cofre)
summary: Um percurso passo a passo por um trabalho real: colocar uma pasta de projeto de peças e montagens sob controlo, reservar uma peça, alterá-la, devolvê-la com uma nota, libertá-la, ver o que a usa e a lista de materiais, o que outra pessoa vê enquanto o ficheiro está bloqueado, e como funciona com pastas na nuvem.
keywords: cofre, documentos, percurso, tutorial, reservar, devolver, revisão, libertar, aprovar, bloquear, histórico, onde é usado, lista de materiais, bom, montagem, pasta na nuvem, pasta de projeto, duas pessoas, pasta partilhada
from: 0a5e6983
---

## O que vai fazer

É a Ana, a trabalhar no Riverside Clinic com um colega, o Ben. As peças e montagens do projeto estão numa só pasta a que ambos têm acesso (uma unidade partilhada, uma pasta sincronizada ou uma pasta na nuvem). No fim, um ficheiro terá passado da primeira cópia a uma revisão **A** libertada, terá sido alterado de novo como **B.1**, terá visto quem fez o quê e terá visto o que o Ben vê quando tem o ficheiro reservado.

Tudo fica guardado numa pasta oculta `.ccvault` ao lado dos seus ficheiros: sem servidor, sem nada carregado (uma pasta na nuvem é a exceção, ver o último passo). Para todos os botões e regras num só lugar, consulte o tópico *Documentos: reservar, revisões e libertação* onde a sua aplicação o tiver.

## 1. Configurar a pasta do projeto

1. Escolha {{ui:Documentos…}} no grupo **Ficheiro** da barra de ferramentas.
2. Escolha {{ui:Escolha a pasta do projeto}} e selecione a pasta que contém as peças e montagens do projeto. (As pastas de projeto funcionam no Studio e em navegadores que conseguem abrir uma pasta, como o Chrome e o Edge. Noutros navegadores o painel indica-o.)
3. Escolha {{ui:Alterar}} ao lado de **Utilizador:** e escreva o seu nome, `Ana` (se for pedido, também o nome deste computador). O painel passa a dizer *Utilizador: Ana em* e o seu computador. O seu nome fica associado a tudo o que fizer.
4. Escolha {{ui:Iniciar um cofre nesta pasta}} e escreva o nome do projeto, `Riverside clinic`. O painel diz *Cofre iniciado para Riverside clinic.*

## 2. Colocar um ficheiro sob controlo

1. Abra **Ficheiros fora do cofre** e escolha {{ui:Adicionar}} ao lado de `plates/Bracket.partcraft.json`.
2. Surge em **Ficheiros no cofre** com a revisão **A.1**, estado **Em trabalho**. A.1 é a primeira cópia; o cofre guarda uma cópia de cada revisão.

## 3. Reservar, alterar, devolver

1. Escolha {{ui:Abrir}} ao lado de `plates/Bracket.partcraft.json`. A peça abre no PartCraft e o painel fecha-se para a poder ver. Volte a abrir o painel a partir de {{ui:Documentos…}}.
2. Volte a abrir o painel e escolha {{ui:Reservar}}. A linha passa a dizer **Reservado para si**. Foi criado um ficheiro de bloqueio em `.ccvault/locks`; ninguém mais pode reservar este ficheiro até o devolver.
3. Altere a peça: edite uma cota, acrescente um furo. A gravação é recusada enquanto o ficheiro não estiver reservado para si, e o programa diz porquê; Guardar como funciona sempre para uma cópia do seu próprio trabalho.
4. Abra o painel, escolha {{ui:Devolver}} e escreva o que mudou (`Moved the door`). O painel diz *devolvido como A.2*. O ficheiro na pasta do projeto passa a ser a peça que tinha aberta, e o bloqueio é removido. Devolver sem alterações mantém a revisão.

Se mudar de ideias, {{ui:Anular reserva}} devolve o ficheiro sem criar uma nova revisão.

## 4. Rever e libertar

1. Escolha {{ui:Enviar para revisão}}. O estado passa a **Para revisão** e o ficheiro fica só de leitura.
2. Antes de aprovar, escolha {{ui:Definições do projeto}} e indique quem pode aprovar (um nome por linha), por exemplo `Ben` e `Carla`, e marque a regra de que quem aprova tem de ser diferente do autor. Escolha {{ui:Guardar definições}}. A partir daí, o próprio cofre recusa qualquer outra pessoa.
3. O Ben (ou a Carla) escolhe {{ui:Aprovar}} e escreve o nome de quem aprova. O estado passa a **Libertado** e a revisão passa a **A**, com *aprovado por* e o nome. Um ficheiro libertado fica só de leitura. {{ui:Devolver ao autor}} devolvê-lo-ia a Em trabalho, com um motivo.

O nome de quem aprova é o que foi escrito no painel; é um registo de quem assinou, não uma prova de identidade.

## 5. Uma nova revisão

1. No ficheiro libertado, escolha {{ui:Nova revisão}}. Fica reservado para a letra seguinte.
2. Altere-o e depois {{ui:Devolver}}. A revisão é **B.1**, em trabalho. Liberte-a da mesma forma e passa a **B**. {{ui:Anular reserva}} antes da primeira devolução deixa-o em **A**.

As letras de revisão seguem A, B … Z, AA, AB. Se a sua norma omitir algumas letras, a definição do projeto *Usar a sequência ASME Y14.35* salta I, O, Q, S, X e Z nas revisões seguintes.

## 6. Ver o que aconteceu

Escolha o nome do ficheiro para abrir os seus detalhes:

- **{{ui:Histórico}}**: cada evento, do mais recente para o mais antigo, com quem, em que computador e quando: *Devolvido A.2* por Ana, *Libertado* por Ben, e assim por diante.
- **{{ui:Revisões}}**: a tabela de revisões: cada revisão guardada, com a data, quem a devolveu, a nota e quem aprovou. O cofre guarda uma cópia de cada uma em `.ccvault/revs`.
- **{{ui:Usa}}**: as peças de uma montagem.
- **{{ui:Usado por}}**: **Usado por** lista cada montagem do cofre que contém esta peça: ao alterar um suporte, sabe quais as montagens a verificar.

## Montagens: o que usam e a lista de materiais

Coloque uma montagem (`.partcraft.json`, guardada a partir do modo Montagem) na pasta e acrescente-a. Clique no nome dela: **Usa** lista as peças que contém, com a revisão e o estado de cada uma; **Usado por** numa peça lista cada montagem que a contém. {{ui:Lista de materiais (CSV)}} guarda a lista completa de peças, nível a nível, com quantidades, revisões e estados, para uma folha de cálculo. Ao alterar um suporte, **Usado por** indica-lhe as montagens a rever.

## 7. O que o Ben vê enquanto tem o ficheiro

Agora reserve o ficheiro outra vez e peça ao Ben que abra a mesma pasta de projeto no computador dele e abra o painel. Na linha do ficheiro, ele vê **Reservado por Ana em** o seu computador **desde** a hora, e não há botão {{ui:Reservar}}. Se tentar na mesma, o cofre recusa: o bloqueio é um ficheiro que o sistema não cria duas vezes, pelo que duas pessoas não podem ter o ficheiro ao mesmo tempo, nem mesmo no mesmo instante, quando a pasta está em disco no Studio. (Num navegador, a pasta só garante um esforço possível, e o painel indica-o em **Pasta**.)

Se a Ana estiver ausente e o Ben precisar do ficheiro, {{ui:Quebrar reserva}} liberta-o. Tem de escrever um motivo; fica no registo com a indicação de de quem era a reserva. Quando o projeto lista administradores, só eles podem fazê-lo. Uma reserva mais antiga do que o limite de validade (14 dias por predefinição) é marcada como *há muito tempo*. Depois da quebra, a devolução tardia da Ana é recusada, para que um não sobrescreva o outro.

## 8. Pastas na nuvem

Uma pasta na nuvem é uma pasta de projeto guardada no armazenamento na nuvem da sua equipa, pelo que a equipa não precisa de uma unidade partilhada. No Studio, com sessão iniciada na sua conta CadCraft, o painel mostra {{ui:Abrir uma pasta na nuvem}} ao lado de {{ui:Escolha a pasta do projeto}}. Escolha-o e selecione a pasta, listada como área de trabalho / pasta. Um proprietário da área de trabalho cria primeiro a pasta, e o armazenamento na nuvem da equipa tem de estar ativo. Tudo o que está acima funciona da mesma forma; o servidor cria o bloqueio, que é rigoroso entre pessoas. Se não tiver sessão iniciada, o painel pede-lho. Num separador normal do navegador o botão da nuvem não é oferecido; use o Studio.

## Experimente

Faça os oito passos acima com uma cópia de um ficheiro real. Para os passos a duas pessoas precisa de outra pessoa, ou de duas janelas com dois nomes. Se experimentar com uma pasta partilhada real, a página de testes da Comunidade tem uma verificação que pede exatamente isto, e recebe resultados.
