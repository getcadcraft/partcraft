---
title: Guardar, reabrir e continuar a trabalhar
summary: Guardar peças e montagens no seu computador, dar-lhes nome, reabri-las por botão, tecla ou arrastamento, manter versões e evitar perder trabalho num separador do navegador.
keywords: guardar, abrir, reabrir, carregar, transferir, versões, cópia de segurança, mudar o nome, nome do ficheiro, trabalho perdido, sair do site, partcraft.json, partcraft-asm.json, nova peça
from: c18a5abc
---

O PartCraft não guarda nada entre visitas. A sua peça fica no separador do navegador até a guardar como ficheiro, e volta quando abre esse ficheiro.

## Guardar uma peça

1. Dê nome à peça: clique num espaço vazio da vista, para que nada fique selecionado, escreva o **Nome** no painel da direita e prima {{key:Enter}}. O cabeçalho do histórico muda para corresponder.
2. Prima {{key:Mod+S}} ou escolha {{ui:Guardar}}.
3. O navegador transfere `<nome>.partcraft.json`. A barra de estado diz « Guardado Bracket.partcraft.json (o histórico completo; reabra-o aqui para continuar a editar). »

Se um esboço estiver aberto, guardar fecha-o primeiro.

O ficheiro contém todos os esboços, relações, cotas e operações, bem como as operações suprimidas, a posição de recuo, as definições da folha de desenho, as notas GD&T e o texto completo de qualquer sólido STEP importado. A lista de anulações não é guardada.

## Guardar uma montagem

Numa montagem, o mesmo {{ui:Guardar}} ou {{key:Mod+S}} transfere `<nome da montagem>.partcraft-asm.json`. Cada peça fica guardada dentro dele: não precisa dos ficheiros de peças separados para o reabrir.

Enquanto edita uma peça a partir de dentro de uma montagem, {{key:Mod+S}} guarda essa peça sozinha, como `.partcraft.json`. Escolha primeiro {{ui:Voltar}} e depois guarde, para guardar a montagem inteira.

## Reabrir

Qualquer uma destas formas:

- escolha {{ui:Abrir}} ou prima {{key:Mod+O}} e depois escolha o ficheiro;
- arraste o ficheiro de {{pick:mac=Finder|windows=Explorador de Ficheiros|linux=o seu gestor de ficheiros}} para a vista 3D («Largue uma peça do PartCraft para a abrir» aparece).

O PartCraft distingue peças de montagens pelo conteúdo, por isso ambas se abrem da mesma forma. Um ficheiro `.step` ou `.stp` abre-se como sólido importado: veja [Abrir um ficheiro STEP e construir sobre ele](topic:import-step). A barra de estado confirma: « Aberto Bracket.partcraft.json: 7 operações. » ou « Aberto Hinge.partcraft-asm.json: 3 peças, 2 juntas. »

Se a peça no ecrã tiver alterações não guardadas, o PartCraft pergunta primeiro: {{ui:Cancelar}}, {{ui:Descartar alterações}} ou {{ui:Guardar primeiro}}.

:::warning
Feche uma montagem ({{ui:Fechar}}) antes de abrir um ficheiro de peça. Se abrir uma peça enquanto uma montagem está no ecrã, a peça carrega por trás da montagem e só a vê depois de fechar a montagem. Abrir um ficheiro de montagem também substitui, sem perguntar, uma montagem não guardada, por isso guarde-a primeiro.
:::

## Recomeçar

{{ui:Novo}} inicia uma peça vazia «Part1». Pergunta primeiro se houver alterações não guardadas, e fecha uma montagem aberta (perguntando antes se ela não estiver guardada).

## Manter versões

Cada vez que se guarda é uma nova transferência, por isso pode manter versões simplesmente conservando os ficheiros:

- Ponha uma versão ou uma data no nome antes de guardar: «Bracket rev B».
- O navegador pode acrescentar « (1)» e « (2)» quando já existe na pasta de transferências um ficheiro com o mesmo nome. A versão mais recente é a que tem o número mais alto; ou verifique a data em {{pick:mac=Finder|windows=Explorador de Ficheiros|linux=o seu gestor de ficheiros}}.
- Mova os ficheiros acabados da pasta de transferências para a pasta do projeto.

Veja [Onde ficam os seus ficheiros](common:your-files) para saber onde vão as transferências em cada sistema.

## Não perder trabalho

- Guarde antes de fechar o separador, recarregar a página ou deixar o computador entrar em suspensão durante muito tempo. O navegador pergunta « Sair do site? » se tentar fechar com alterações não guardadas, mas uma falha ou um portátil fechado não dá qualquer aviso.
- As janelas privadas ou de incógnito funcionam, mas nada mais é diferente: o ficheiro continua a ser a única cópia.
- A gravação na nuvem e o histórico de versões ainda não estão disponíveis.
