---
title: "Arquivos: abrir, salvar e exportar"
summary: Os arquivos de peça e de montagem que o PartCraft abre e salva, todos os formatos de exportação e o que cada um mantém, onde os arquivos vão e o que muda offline ou entre navegadores.
keywords: abrir, salvar, exportar, baixar, arquivo, partcraft.json, arquivo de montagem, stl, 3mf, step, dxf, pdf, onde estão meus arquivos, offline, salvar como
from: e5fbc7e3
---

O PartCraft trabalha com arquivos no seu computador. Ele nunca envia uma peça, e não há conta nem armazenamento na nuvem envolvidos. O salvamento na nuvem ainda não está disponível.

## O que o PartCraft abre

| Arquivo | Extensão | Como |
|---|---|---|
| Uma peça do PartCraft | `.partcraft.json` | {{ui:Abrir}}, {{key:Mod+O}}, ou solte o arquivo na vista 3D |
| Uma montagem do PartCraft | `.partcraft-asm.json` | O mesmo: o PartCraft identifica o tipo |
| Um sólido STEP | `.step`, `.stp` | Um corpo sólido lido como triângulos: [Abrir um arquivo STEP e construir a partir dele](topic:import-step) |

Malhas STL, OBJ e 3MF também abrem como corpos sólidos ([Abrir um STL, OBJ ou 3MF](topic:open-meshes)), assim como arquivos `.3dm` ([Abrir um modelo .3dm](topic:open-3dm-files)). DXF, IGES e os arquivos de peça próprios de outros programas não podem ser abertos (veja [O que ainda não foi implementado](topic:not-built-yet)).

Regras ao abrir:

- O nome de um arquivo de peça ou montagem deve terminar em `.json`, e o arquivo deve ter menos de 50 MB.
- Os arquivos são verificados antes de qualquer coisa ser mostrada. Um arquivo danificado ou editado é recusado com um motivo simples, por exemplo "Este não é um arquivo do PartCraft."
- Um arquivo salvo por um PartCraft mais novo é recusado: "Este arquivo foi salvo por um PartCraft mais novo (versão de arquivo 3); esta versão lê a versão 2." Arquivos mais antigos são abertos.
- Se a peça na tela tiver alterações não salvas, o PartCraft pergunta antes: {{ui:Cancelar}}, {{ui:Descartar alterações}} ou {{ui:Salvar primeiro}}.

## Salvar

{{ui:Salvar}} ou {{key:Mod+S}} salva o que está na tela:

- Em uma peça: `<nome da peça>.partcraft.json`, com o histórico completo (esboços, relações, cotas, recursos, a posição de reversão), as notas de corte, detalhe e GD&T da folha de desenho, e o texto completo de qualquer sólido STEP importado em uma versão anterior. Recursos que esta versão não consegue construir são salvos de volta sem alteração. O próprio sólido não é salvo; o PartCraft o reconstrói a partir do histórico quando o arquivo é aberto.
- Em uma montagem: `<nome da montagem>.partcraft-asm.json`, com **todas as peças dentro dele**. Um único arquivo contém a montagem inteira, então você pode enviá-lo sozinho.

Salvar é um **download**. Seu navegador coloca o arquivo na pasta de downloads, ou pergunta onde colocá-lo se você tiver configurado para perguntar. Salvar de novo cria um novo download; o navegador pode nomeá-lo `Part1 (1).partcraft.json` em vez de substituir o antigo. Renomeie ou mova arquivos no {{pick:mac=Finder|windows=Explorador de Arquivos|linux=seu gerenciador de arquivos}} como preferir.

Caracteres diferentes de letras, dígitos, espaços, `_`, `.` e `-` no nome da peça viram `_` no nome do arquivo.

:::tip
A maioria dos navegadores tem uma opção para perguntar onde salvar cada download. Ative-a se quiser escolher "Salvar como" sempre: no Chrome e no Edge ela fica em Downloads nas configurações; no Firefox, em Geral, Arquivos e Aplicativos; no Safari, em Geral, Local de download de arquivos.
:::

Mais sobre para onde vão os downloads e como manter os arquivos seguros: [Onde ficam seus arquivos](common:your-files).

## Exportar

O menu {{ui:Exportar}} grava outros formatos. Cada um é um download, com o nome da peça.

| Item do menu | Arquivo | O que contém |
|---|---|---|
| {{ui:STL, para impressão 3D}} | `<name>.stl` | STL binário dos triângulos do sólido, em milímetros, **Z para cima** |
| {{ui:3MF, para impressão 3D}} | `<name>.3mf` | 3MF com o sólido como um único objeto, em milímetros, **Z para cima** |
| {{ui:STEP AP242 (sólido exato)}} | `<name>.step` | Um sólido exato, em milímetros, Z para cima: faces redondas como cilindros, cones, esferas e toros verdadeiros. O STEP a usar em outros programas de CAD e CAM |
| {{ui:STEP AP214 (sólido exato)}} | `<name>.step` | O mesmo sólido exato no esquema AP214 mais antigo |
| {{ui:STEP (facetado, kernel de malha)}} | `<name>.step` | Um sólido feito de faces planas a partir da malha: **superfícies redondas são muitas pequenas facetas planas**. Em milímetros, nos eixos próprios do PartCraft (Y para cima). Para um programa que recusa o arquivo exato |
| {{ui:DXF do esboço ou da face plana}} | `<name> - <sketch>.dxf` ou `<name> - face.dxf` | DXF R12. Um esboço: linhas, arcos, círculos e pontos nas coordenadas do próprio esboço, nas camadas PROFILE, CONSTRUCTION e POINTS. Uma face plana selecionada: seus contornos como polilinhas fechadas (arestas redondas como facetas) |
| {{ui:Desenho (PDF): vistas, corte, detalhe, GD&T}} | `<name> - drawing.pdf` | A folha de desenho A3: três vistas, isométrica, corte e detalhe se definidos, dimensões gerais, símbolos GD&T, legenda |

:::note
{{ui:STEP AP242 (sólido exato)}} grava furos, saliências, arredondamentos, cones, esferas e toros em suas superfícies verdadeiras, para que outro programa possa selecionar um furo como cilindro; **Curvas** não altera isso. Laterais de spline, roscas modeladas e malhas importadas não têm superfície exata e continuam como facetas planas no mesmo sólido; a barra de status informa quantas. {{ui:STEP (facetado, kernel de malha)}} grava cada face redonda como facetas.
:::

- As exportações são da peça na tela. A exportação fica desativada em uma montagem; ainda não há exportação de montagem.
- STL, 3MF, o STEP facetado e o DXF da face são sempre feitos de facetas. A configuração **Curvas** (no painel direito, com nada selecionado) define o quão finas elas são, de 32 a 256 facetas por volta. Escolha Fina ou Muito fina antes de exportar STL ou 3MF para uma impressão suave.
- O desenho em PDF usa a fonte Helvetica embutida do leitor. Caracteres que ela não consegue exibir são impressos como "?".

Passo a passo: [Exportar para impressão, STEP e DXF](topic:export-files) e [Criar uma folha de desenho](topic:drawing-pdf).

## Trabalho não salvo

- O PartCraft mantém uma cópia de recuperação da peça ou montagem aberta neste navegador logo após cada alteração, então uma falha ou uma aba fechada não a perde: na próxima vez que você abrir o PartCraft, ele pergunta "Recuperar seu trabalho?". Isso não é um salvamento: salve em um arquivo para manter seu trabalho. Veja [Recuperar trabalho não salvo](common:recover).
- Se você tentar fechar a aba ou recarregar com alterações não salvas, o navegador pergunta "Sair do site?". Essa é a caixa do próprio navegador; o PartCraft não pode alterar o texto dela.
- {{ui:Novo}}, {{ui:Abrir}} e fechar uma montagem perguntam antes de descartar alterações não salvas.

## Online e offline

Tudo acontece no seu computador: o kernel de malha (um programa WebAssembly) é baixado com o aplicativo e constrói a geometria localmente, e os arquivos são lidos e gravados no seu disco. Nenhum dado da peça passa pela rede. Veja [O kernel de malha](topic:solid-kernels).

Para trabalhar sem nenhuma conexão, salve o PartCraft para uso offline enquanto estiver online: escolha {{ui:Salvar para uso offline}} na barra do aplicativo e aguarde a contagem ("Salvando 40 de 212") até aparecer **Pronto para offline**. A cópia salva inclui a biblioteca 3D e o kernel de malha, então depois modelagem, salvamento, todas as exportações e desenhos funcionam offline. Se aparecer **Não foi possível salvar**, clique para tentar de novo enquanto estiver online; **Offline não disponível** significa que esta janela do navegador não pode manter uma cópia (janelas privadas e alguns computadores gerenciados). Com a cópia salva, clicar em **Pronto para offline** oferece {{ui:Salvar de novo (obter a versão mais recente)}} e {{ui:Remover a cópia offline}}. Detalhes: [Trabalhar offline](common:offline).

:::online
Você está online. Mesmo sem salvar para uso offline, depois que o PartCraft carregar e o indicador da barra de status disser "Kernel de malha", você pode continuar trabalhando se a conexão cair. Só não recarregue a página até voltar a ficar online.
:::

:::offline
Você está offline. Se o PartCraft já estiver aberto, continue trabalhando; salvar e exportar ainda funcionam. Se a barra do aplicativo disser **Pronto para offline**, o PartCraft também abre do zero sem conexão; caso contrário, não recarregue esta aba.
:::

## Diferenças entre navegadores

- **Downloads.** Cada navegador tem sua própria pasta de downloads e sua própria forma de perguntar. Se um navegador perguntar se este site pode baixar arquivos, permita; senão, salvar e exportar não funcionam.
- **Arrastar e soltar** um arquivo na vista funciona no Chrome, Edge, Firefox e Safari.
- **Arquivos de celular ou tablet.** No iPhone e no iPad, Abrir mostra o app Arquivos; os arquivos salvos vão para Arquivos, Downloads. No Android, eles vão para a pasta Downloads.

Não há diferença no conteúdo dos arquivos entre navegadores ou sistemas operacionais.
