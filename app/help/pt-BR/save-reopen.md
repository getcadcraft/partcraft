---
title: Salvar, reabrir e continuar trabalhando
summary: Salve peças e montagens no seu computador, dê nomes a elas, reabra-as por botão, tecla ou arrastando, mantenha versões e evite perder trabalho em uma aba do navegador.
keywords: salvar, abrir, reabrir, carregar, baixar, versões, backup, renomear, nome do arquivo, trabalho perdido, sair do site, partcraft.json, partcraft-asm.json, nova peça
from: c18a5abc
---

O PartCraft não guarda nada entre as visitas. Sua peça fica na aba do navegador até você salvá-la como arquivo, e volta quando você abrir esse arquivo.

## Salvar uma peça

1. Dê um nome à peça: clique em um espaço vazio da vista para que nada fique selecionado, depois digite o **Nome** no painel da direita e pressione {{key:Enter}}. O título do histórico muda para combinar.
2. Pressione {{key:Mod+S}} ou escolha {{ui:Salvar}}.
3. O navegador baixa `<nome>.partcraft.json`. A barra de status diz "Salvo Bracket.partcraft.json (o histórico completo; reabra-o aqui para continuar editando)."

Se um esboço estiver aberto, salvar o fecha antes.

O arquivo contém todos os esboços, relações, cotas e recursos, além dos recursos suprimidos, da posição de rollback, das configurações da folha de desenho, das anotações GD&T e o texto completo de qualquer sólido STEP importado. Sua lista de desfazer não é salva.

## Salvar uma montagem

Em uma montagem, o mesmo {{ui:Salvar}} ou {{key:Mod+S}} baixa `<nome da montagem>.partcraft-asm.json`. Cada peça fica guardada dentro dele: você não precisa dos arquivos de peça separados para reabri-lo.

Enquanto você edita uma peça dentro de uma montagem, {{key:Mod+S}} salva apenas essa peça como um `.partcraft.json`. Escolha antes {{ui:Voltar}} e depois salve, para salvar a montagem inteira.

## Reabrir

Qualquer uma destas opções:

- escolha {{ui:Abrir}} ou pressione {{key:Mod+O}}, depois selecione o arquivo;
- arraste o arquivo de {{pick:mac=Finder|windows=Explorador de Arquivos|linux=seu gerenciador de arquivos}} para a vista 3D ("Solte uma peça do PartCraft para abri-la" aparece).

O PartCraft diferencia peças de montagens pelo que há dentro, então os dois se abrem da mesma forma. Um arquivo `.step` ou `.stp` abre como sólido importado: veja [Abrir um arquivo STEP e construir a partir dele](topic:import-step). A barra de status confirma: "Aberto Bracket.partcraft.json: 7 recursos." ou "Aberto Hinge.partcraft-asm.json: 3 peças, 2 juntas."

Se a peça na tela tiver alterações não salvas, o PartCraft pergunta primeiro: {{ui:Cancelar}}, {{ui:Descartar alterações}} ou {{ui:Salvar primeiro}}.

:::warning
Feche uma montagem ({{ui:Fechar}}) antes de abrir um arquivo de peça. Se você abrir uma peça enquanto uma montagem está na tela, a peça carrega atrás da montagem e você só a vê depois de fechá-la. Abrir um arquivo de montagem também substitui uma montagem não salva sem perguntar, então salve-a antes.
:::

## Começar de novo

{{ui:Novo}} inicia uma "Part1" vazia. Ele pergunta antes se há alterações não salvas, e fecha uma montagem aberta (perguntando se ela não estiver salva).

## Manter versões

Cada salvamento é um novo download, então você pode manter versões simplesmente guardando os arquivos:

- Coloque uma versão ou uma data no nome antes de salvar: "Bracket rev B".
- Seu navegador pode acrescentar " (1)", " (2)" quando já existe um arquivo com o mesmo nome na pasta de downloads. O mais recente é o que tem o maior número, ou confira a data em {{pick:mac=Finder|windows=Explorador de Arquivos|linux=seu gerenciador de arquivos}}.
- Mova os arquivos finalizados da pasta de downloads para a pasta do seu projeto.

Veja [Onde ficam seus arquivos](common:your-files) para saber onde os downloads ficam em cada sistema.

## Não perca trabalho

- Salve antes de fechar a aba, recarregar a página ou deixar o computador em suspensão por muito tempo. O navegador pergunta "Sair do site?" se você tentar fechar com alterações não salvas, mas uma falha ou um notebook fechado não dão aviso algum.
- Janelas privativas ou anônimas funcionam, mas nada mais é diferente: o arquivo continua sendo a única cópia.
- Salvamento na nuvem e histórico de versões ainda não estão disponíveis.
