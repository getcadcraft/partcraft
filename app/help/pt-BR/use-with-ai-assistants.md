---
title: Usar o PartCraft com um assistente de IA
summary: Deixe seu próprio assistente de IA ou script trabalhar com a peça aberta: ler seus recursos, parâmetros e massa, alterar um parâmetro e reconstruir, executar um script, exportar e salvar. Desligado até você ativá-lo.
keywords: ia, assistente, agente, mcp, model context protocol, script, automação, parâmetros, propriedades de massa, stl, step, 3mf, permissões, desconectar, atividade, pastas
from: e66d3470
---

## O que você vai aprender

Como deixar um assistente de IA (ou um script que você escreveu) examinar a peça que você tem aberta, alterar seus parâmetros, executar um script e exportá-la, e como você decide o que ele pode alterar.

O PartCraft **não tem IA própria** e não envia nada para lugar nenhum. Você traz o assistente: qualquer programa que fale o Model Context Protocol (MCP). O PartCraft apenas oferece ferramentas a ele, e você escolhe quais.

## Ativar

1. Abra {{ui:Configurações}} (a engrenagem na barra do aplicativo, ou {{key:Mod+,}}) e vá até a guia {{ui:PartCraft}}.
2. Em {{ui:Assistentes}}, marque **Permitir que assistentes de IA e scripts usem o PartCraft**. Ele fica desligado até você fazer isso.
3. Escolha o que ele pode fazer. **Leitura** vem marcada no início; marque as outras apenas quando precisar.
4. Para permitir que ele exporte e salve em uma pasta, escolha {{ui:Adicionar uma pasta…}} em **Pastas que ele pode usar** e selecione a pasta na caixa de diálogo do Studio.

Os assistentes se conectam pelo **CadCraft Studio** no seu computador: o Studio mostra o endereço e o token para colar no assistente. Uma aba do navegador não pode abrir uma conexão para um assistente.

## O que um assistente pode pedir

| Ferramenta | Permissão | O que faz |
|---|---|---|
| `part_describe`, `features_list` | Leitura | Os recursos em ordem, com o que foi construído e o que falhou, o material, o volume e o tamanho do sólido |
| `params_list` | Leitura | Os parâmetros e todos os números que uma equação pode controlar, com seus valores |
| `mass_properties` | Leitura | Volume, área, centro de massa, a inércia em torno dele; a massa quando a peça tem material |
| `param_set` | Editar | Define um parâmetro ou o número de um recurso e reconstrói. Um passo que você pode desfazer |
| `script_run` | Editar | Executa um script CraftScript, Lua ou Python da mesma forma que o ambiente {{ui:Script}} faz: isolado, sem arquivos e sem rede. A peça não muda |
| `part_export` | Exportar | STL, 3MF, STEP ou OpenUSD (.usdz, .usda, .usdc), como {{ui:Arquivo}} › {{ui:Exportar}} os gravam |
| `link_push` | Editar | Atualiza um modelo vinculado a partir de outro programa (veja [Manter um modelo .3dm atualizado](topic:live-3dm-link)) |
| `link_status` | Leitura | Informa se um modelo vinculado ainda está aqui e quando foi atualizado pela última vez |
| `part_save` | Salvar | O {{ui:Salvar}} do próprio PartCraft |
| `illustrate_export` | Exportar | Um manual do ambiente Illustrate como desenho de linhas em PDF ou SVG de suas vistas, como o arquivo 3D interativo, ou suas instruções em PDF ou página web, como os menus {{ui:Exportar}} e {{ui:Instruções}} do ambiente os gravam ([Manuais](topic:illustrate)) |

:::note
Esta versão usa o kernel de malha: os volumes vêm dos triângulos (um pouco abaixo de um sólido curvo real), e o STEP é gravado facetado, com triângulos em vez de superfícies exatas.
:::

## Você continua no controle

- **Cada alteração é um único passo de desfazer**, identificado como do assistente, por exemplo "Assistente: definir l = 45". Pressione {{key:Mod+Z}} para desfazê-la.
- **Você sabe quando há uma conexão.** Um botão na barra do aplicativo mostra o nome do assistente enquanto ele está conectado. Clique nele para ver o que ele pode fazer ou para **Desconectar** o assistente.
- **Atividade.** {{ui:Configurações}} › {{ui:PartCraft}} › {{ui:Assistentes}} › {{ui:Atividade}} lista cada chamada; {{ui:Salvar o registro}} guarda uma cópia.
- **Pastas.** Ele lê e grava arquivos somente nas pastas que você adicionou; {{ui:Remover}} retira uma pasta imediatamente.

## Sem abrir o PartCraft

O servidor de arquivos da CadCraft para assistentes (`npx @getcadcraft/mcp`) e a linha de comando `cadcraft` abrem peças `.partcraft.json` com o próprio código e o kernel de malha do PartCraft, sem janela: as mesmas ferramentas de leitura, definição de parâmetros, scripts CraftScript, exportações (também OpenUSD) e salvamento. `cadcraft convert bracket.partcraft.json bracket.stl` constrói uma peça e a grava pela linha de comando. Os manuais (`.partcraft-manual.json`) também são exportados ali: `illustrate_export`, ou `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (acrescente `--instructions` para as instruções).

## Se algo não funcionar

- **"precisa da permissão de edição":** marque **Editar** em {{ui:Assistentes}} e peça novamente.
- **"controlado pela equação":** esse número segue um parâmetro; peça ao assistente que defina o parâmetro.
- **A alteração dele estava errada:** pressione {{key:Mod+Z}}.

## Veja também

- [Receitas para assistentes de IA](common:assistants-recipes): exemplos resolvidos, cada um com as ferramentas que chama.
