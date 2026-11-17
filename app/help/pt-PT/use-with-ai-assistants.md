---
title: Usar o PartCraft com um assistente de IA
summary: Permitir que o próprio assistente de IA ou um script trabalhe com a peça aberta: ler as operações, os parâmetros e a massa, alterar um parâmetro e reconstruir, executar um script, exportar e guardar. Desligado até o ativar.
keywords: ia, assistente, agente, mcp, protocolo de contexto de modelo, script, automação, parâmetros, propriedades de massa, stl, step, 3mf, permissões, desligar, atividade, pastas
from: e66d3470
---

## O que vai aprender

Como permitir que um assistente de IA (ou um script escrito por si) veja a peça aberta, altere os seus parâmetros, execute um script e a exporte, e como decidir o que pode alterar.

O PartCraft **não tem IA própria** e não envia nada para lado nenhum. O assistente vem de fora: qualquer programa que fale o Model Context Protocol (MCP). O PartCraft apenas lhe disponibiliza ferramentas, e cabe-lhe escolher quais.

## Ativar

1. Abra {{ui:Definições}} (a engrenagem na barra da aplicação, ou {{key:Mod+,}}) e vá ao separador {{ui:PartCraft}}.
2. Em {{ui:Assistentes}}, marque **Permitir que assistentes de IA e scripts usem o PartCraft**. Fica desativado até ser marcado.
3. Escolha o que pode fazer. **Ler** fica marcado desde o início; marque os outros apenas quando precisar deles.
4. Para que possa exportar e guardar numa pasta, escolha {{ui:Adicionar uma pasta…}} em **Pastas que pode usar** e selecione a pasta na caixa de diálogo do Studio.

Os assistentes ligam-se através do **CadCraft Studio** no seu computador: o Studio mostra o endereço e o token a colar no assistente. Um separador do navegador não pode abrir uma ligação para um assistente.

## O que um assistente pode pedir

| Ferramenta | Permissão | O que faz |
|---|---|---|
| `part_describe`, `features_list` | Ler | As operações por ordem, com o que foi construído e o que falhou, o material, o volume e o tamanho do sólido |
| `params_list` | Ler | Os parâmetros e cada número que uma equação pode controlar, com os respetivos valores |
| `mass_properties` | Ler | Volume, área, centro de massa, a inércia em torno dele; a massa quando a peça tem um material |
| `param_set` | Editar | Define um parâmetro ou o número de uma operação e reconstrói. Um passo que pode anular |
| `script_run` | Editar | Executa um script CraftScript, Lua ou Python da mesma forma que a área {{ui:Script}}: isolado, sem ficheiros nem rede. A peça não muda |
| `part_export` | Exportar | STL, 3MF, STEP ou OpenUSD (.usdz, .usda, .usdc), como {{ui:Ficheiro}} › {{ui:Exportar}} os escreve |
| `link_push` | Editar | Atualiza um modelo ligado a partir de outro programa (ver [Manter um modelo .3dm atualizado](topic:live-3dm-link)) |
| `link_status` | Ler | Indica se um modelo ligado ainda existe e quando foi atualizado pela última vez |
| `part_save` | Guardar | O {{ui:Save}} do próprio PartCraft |
| `illustrate_export` | Exportar | Um manual da área {{ui:Ilustrar}} em PDF ou SVG de desenho de linhas das suas vistas, como ficheiro 3D interativo, ou as suas instruções em PDF ou página web, tal como as áreas {{ui:Exportar}} e {{ui:Instruções}} as escrevem ([Manuais](topic:illustrate)) |

:::note
Esta versão usa o núcleo de malha: os volumes vêm dos triângulos (um pouco abaixo de um sólido curvo real), e o STEP é escrito facetado, com triângulos em vez de superfícies exatas.
:::

## Continua no controlo

- **Cada alteração é um passo de anulação**, identificado para o assistente, por exemplo "Assistente: definir l = 45". Prima {{key:Mod+Z}} para a anular.
- **Uma ligação fica sempre visível.** Um botão na barra da aplicação indica o assistente enquanto estiver ligado. Clique nele para ver o que pode fazer, ou para **Desligar** o assistente.
- **Atividade.** {{ui:Definições}} › {{ui:PartCraft}} › {{ui:Assistentes}} › {{ui:Atividade}} lista cada chamada; {{ui:Guardar o registo}} guarda uma cópia.
- **Pastas.** Só lê e escreve ficheiros nas pastas que adicionou; {{ui:Remover}} retira uma pasta de imediato.

## Sem abrir o PartCraft

O servidor de ficheiros da CadCraft para assistentes (`npx @getcadcraft/mcp`) e a linha de comandos `cadcraft` abrem peças `.partcraft.json` com o código e o núcleo de malha do próprio PartCraft, sem janela: as mesmas ferramentas de leitura, definição de parâmetros, scripts CraftScript, exportações (também OpenUSD) e gravação. `cadcraft convert bracket.partcraft.json bracket.stl` constrói uma peça e escreve-a a partir da linha de comandos. Os manuais (`.partcraft-manual.json`) também se exportam aí: `illustrate_export`, ou `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (acrescente `--instructions` para as instruções).

## Se algo não funcionar

- **"precisa da permissão de edição":** marque **Editar** em {{ui:Assistentes}} e volte a pedir.
- **"controlado pela equação":** esse número segue um parâmetro; peça ao assistente para definir o parâmetro em vez disso.
- **A alteração estava errada:** prima {{key:Mod+Z}}.

## Ver também

- [Receitas para assistentes de IA](common:assistants-recipes): exemplos práticos, cada um com as ferramentas que chama.
