---
title: Documentos e revisões (o cofre)
summary: Um passo a passo de um trabalho real: colocar uma pasta de projeto com peças e montagens sob controle, fazer check-out de uma peça, alterá-la, fazer check-in com uma nota, liberá-la, ver o que a usa e a lista de materiais, o que a segunda pessoa vê enquanto o arquivo está bloqueado, e como isso funciona com pastas na nuvem.
keywords: cofre, documentos, passo a passo, tutorial, check-out, check-in, revisão, liberação, aprovar, bloqueio, histórico, onde é usado, lista de materiais, bom, montagem, pasta na nuvem, pasta de projeto, duas pessoas, pasta compartilhada
from: 0a5e6983
---

## O que você vai fazer

Você é a Ana, trabalhando na Clínica Riverside com uma colega, o Ben. As peças e montagens do projeto ficam em uma pasta que vocês dois acessam (um drive compartilhado, uma pasta sincronizada ou uma pasta na nuvem). Ao final, um arquivo terá passado da primeira cópia para a revisão liberada **A**, terá sido alterado novamente como **B.1**, você terá visto quem fez o quê e terá visto o que o Ben vê quando você mantém o arquivo bloqueado.

Tudo fica guardado em uma pasta oculta `.ccvault` ao lado dos seus arquivos: sem servidor, nada enviado (a pasta na nuvem é a exceção, veja o último passo). Para ver todos os botões e regras em um só lugar, consulte o tópico *Documentos: check-out, revisões e liberação*, onde o seu aplicativo o tiver.

## 1. Configurar a pasta do projeto

1. Escolha {{ui:Documents…}} no grupo **Arquivo** da barra de ferramentas.
2. Escolha {{ui:Escolha a pasta do projeto}} e selecione a pasta que contém as peças e montagens do projeto. (As pastas de projeto funcionam no Studio e em navegadores que podem abrir uma pasta, como Chrome e Edge. Em outros navegadores, o painel informa isso.)
3. Escolha {{ui:Alterar}} ao lado de **Você:** e digite seu nome, `Ana` (se for solicitado, também o nome deste computador). O painel agora mostra *Você: Ana em* e o seu computador. Seu nome fica registrado em tudo o que você faz.
4. Escolha {{ui:Iniciar um cofre nesta pasta}} e digite o nome do projeto, `Riverside clinic`. O painel mostra *Cofre iniciado para Riverside clinic.*

## 2. Colocar um arquivo sob controle

1. Abra **Arquivos fora do cofre** e escolha {{ui:Adicionar}} ao lado de `plates/Bracket.partcraft.json`.
2. Ele aparece em **Arquivos no cofre** com a revisão **A.1**, estado **Em andamento**. A.1 é a primeira cópia dele; o cofre guarda uma cópia de cada revisão.

## 3. Fazer check-out, alterar e fazer check-in

1. Escolha {{ui:Abrir}} ao lado de `plates/Bracket.partcraft.json`. A peça abre no PartCraft e o painel se fecha para que você possa vê-la. Abra o painel novamente por {{ui:Documents…}}.
2. Abra o painel novamente e escolha {{ui:Check-out}}. A linha agora mostra **Em check-out com você**. Um arquivo de bloqueio foi criado em `.ccvault/locks`; ninguém mais pode fazer check-out deste arquivo até que você faça check-in.
3. Altere a peça: edite uma cota, adicione um furo. O salvamento é recusado enquanto o arquivo não estiver em check-out com você, e o programa informa o motivo; Salvar como sempre funciona para uma cópia sua.
4. Abra o painel, escolha {{ui:Check-in}} e digite o que mudou (`Moved the door`). O painel informa *check-in feito como A.2*. O arquivo na pasta do projeto agora é a peça que você tinha aberta, e o bloqueio foi removido. Fazer check-in sem alterações mantém a revisão.

Se você mudar de ideia, {{ui:Desfazer check-out}} devolve o arquivo sem criar uma nova revisão.

## 4. Revisar e liberar

1. Escolha {{ui:Enviar para revisão}}. O estado passa a ser **Para revisão** e o arquivo fica somente leitura.
2. Antes de aprovar, escolha {{ui:Configurações do projeto}} e liste quem pode aprovar (um nome por linha), por exemplo `Ben` e `Carla`, e marque a regra de que quem aprova deve ser diferente do autor. Escolha {{ui:Salvar configurações}}. Agora o próprio cofre recusa qualquer outra pessoa.
3. O Ben (ou a Carla) escolhe {{ui:Aprovar}} e digita o nome de quem aprova. O estado passa a ser **Liberado** e a revisão passa a ser **A**, com *aprovado por* e o nome. Um arquivo liberado fica somente leitura. {{ui:Devolver}} o teria devolvido para Em andamento, com um motivo.

O nome de quem aprova é o nome digitado no painel; ele é um registro de quem deu a aprovação, não uma prova de identidade.

## 5. Uma nova revisão

1. No arquivo liberado, escolha {{ui:Nova revisão}}. Você fica com ele para a próxima letra.
2. Altere-o e depois escolha {{ui:Check-in}}. A revisão passa a ser **B.1**, em andamento. Libere-a da mesma forma e ela se torna **B**. {{ui:Desfazer check-out}} antes do primeiro check-in o deixa em **A**.

As letras de revisão seguem A, B … Z, AA, AB. Se a sua norma deixar algumas letras de fora, a configuração do projeto *Usar a sequência ASME Y14.35* pula I, O, Q, S, X e Z nas próximas revisões.

## 6. Ver o que aconteceu

Escolha o nome do arquivo para abrir seus detalhes:

- **{{ui:Histórico}}**: cada evento, do mais recente para o mais antigo, com quem, em qual computador e quando: *Check-in de A.2* por Ana, *Liberado* por Ben, e assim por diante.
- **{{ui:Revisões}}**: a tabela de revisões: cada revisão guardada, com a data, quem fez o check-in, a nota e quem aprovou. O cofre guarda uma cópia de cada uma em `.ccvault/revs`.
- **{{ui:Usa}}**: as peças de uma montagem.
- **{{ui:Usado por}}**: lista todas as montagens do cofre que contêm esta peça: se você alterar um suporte, sabe quais montagens verificar.

## Montagens: o que usam e a lista de materiais

Coloque uma montagem (`.partcraft.json`, salva no modo Montagem) na pasta e adicione-a. Escolha o nome dela: **Usa** lista as peças que ela contém, com a revisão e o estado de cada uma; **Usado por** em uma peça lista todas as montagens que a contêm. {{ui:Lista de materiais (CSV)}} salva a lista completa de peças, nível por nível, com quantidades, revisões e estados, para uma planilha. Altere um suporte, e **Usado por** informa quais montagens você deve verificar.

## 7. O que o Ben vê enquanto você mantém o arquivo

Agora faça check-out do arquivo novamente e peça ao Ben que abra a mesma pasta de projeto no computador dele e abra o painel. Na linha do arquivo, ele vê **Em check-out por Ana em** o seu computador **desde** a hora, e não há botão {{ui:Check-out}}. Se ele tentar mesmo assim, o cofre recusa: o bloqueio é um arquivo que o sistema não cria duas vezes, então duas pessoas não podem manter o arquivo ao mesmo tempo, mesmo no mesmo instante, quando a pasta está em disco no Studio. (Em um navegador, a pasta oferece apenas um melhor esforço, e o painel informa isso em **Pasta**.)

Se a Ana estiver ausente e o Ben precisar do arquivo, {{ui:Cancelar check-out}} o libera. Ele precisa digitar um motivo; o motivo vai para o registro, junto com de quem era o check-out. Quando o projeto lista administradores, somente eles podem fazer isso. Um check-out mais antigo que o limite de validade (14 dias por padrão) aparece marcado como *há muito tempo*. Depois da quebra, o check-in atrasado da Ana é recusado, para que vocês dois não sobrescrevam um ao outro.

## 8. Pastas na nuvem

Uma pasta na nuvem é uma pasta de projeto guardada no armazenamento em nuvem da sua equipe, então a equipe não precisa de um drive compartilhado. No Studio, com login feito na sua conta CadCraft, o painel mostra {{ui:Abrir uma pasta na nuvem}} ao lado de {{ui:Escolha a pasta do projeto}}. Escolha-o e selecione a pasta, listada como espaço de trabalho / pasta. Um proprietário do espaço de trabalho cria a pasta primeiro, e o armazenamento em nuvem da equipe precisa estar ativo. Tudo o que foi descrito acima funciona da mesma forma; o servidor cria o bloqueio, que é rigoroso entre pessoas. Se você não estiver conectado, o painel pede para entrar. Em uma aba comum do navegador, o botão da nuvem não é oferecido; use o Studio.

## Experimente

Faça os oito passos acima com uma cópia de um arquivo real. Para os passos com duas pessoas, você precisa de outra pessoa, ou de duas janelas com dois nomes. Se você fizer isso com uma pasta compartilhada real, a página de testes da comunidade tem uma verificação que pergunta exatamente isso e aceita resultados.
