---
title: Arquivos: abrir, salvar e exportar
summary: Os arquivos de peça e de montagem que o PartCraft abre e salva, cada formato de exportação e o que ele mantém, para onde os arquivos vão e o que muda offline ou entre navegadores.
keywords: abrir, salvar, exportar, baixar, arquivo, partcraft.json, arquivo de montagem, stl, 3mf, step, dxf, pdf, onde estão meus arquivos, offline, salvar como
from: c15c2c48
---

O PartCraft trabalha com arquivos no seu computador. Ele nunca envia uma peça, e não há conta nem armazenamento na nuvem envolvidos. O salvamento na nuvem ainda não está disponível.

## O que o PartCraft abre

| Arquivo | Extensão | Como |
|---|---|---|
| Uma peça do PartCraft | `.partcraft.json` | {{ui:Abrir}}, {{key:Mod+O}}, ou solte o arquivo na vista 3D |
| Uma montagem do PartCraft | `.partcraft-asm.json` | O mesmo: o PartCraft vê de que tipo é |
| Um sólido STEP | `.step`, `.stp` | Um corpo sólido lido como triângulos: [Abra um arquivo STEP e construa sobre ele](topic:import-step) |

Malhas STL, OBJ e 3MF também abrem como corpos sólidos ([Abra um STL, OBJ ou 3MF](topic:open-meshes)), e os arquivos `.3dm` também ([Abra um modelo .3dm](topic:open-3dm-files)). DXF, IGES e os arquivos de peça próprios de outros programas não podem ser abertos (veja [O que ainda não está implementado](topic:not-built-yet)).

Regras ao abrir:

- O nome de um arquivo de peça ou de montagem deve terminar em `.json`, e o arquivo deve ter menos de 50 MB.
- Os arquivos são verificados antes de qualquer coisa ser mostrada. Um arquivo danificado ou editado é recusado com um motivo claro, por exemplo "Este não é um arquivo do PartCraft."
- Um arquivo salvo por um PartCraft mais novo é recusado: "Este arquivo foi salvo por um PartCraft mais novo (versão do arquivo 3); esta versão lê a versão 2." Arquivos mais antigos abrem.
- Se a peça na tela tiver alterações não salvas, o PartCraft pergunta antes: {{ui:Cancelar}}, {{ui:Descartar alterações}} ou {{ui:Salvar primeiro}}.

## Salvar

{{ui:Salvar}} ou {{key:Mod+S}} salva o que está na tela:

- Em uma peça: `<nome da peça>.partcraft.json`, o histórico completo (esboços, relações, cotas, recursos, a posição de reversão), as notas de corte, detalhe e GD&T da folha de desenho, e o texto completo de qualquer sólido STEP importado em uma versão anterior. Os recursos que esta versão não consegue construir são salvos de volta sem alteração. O sólido em si não é guardado; o PartCraft o reconstrói a partir do histórico quando o arquivo abre.
- Em uma montagem: `<nome da montagem>.partcraft-asm.json`, com **todas as peças dentro dele**. Um arquivo leva a montagem inteira, então você pode enviá-lo sozinho.

Salvar é um **download**. Seu navegador coloca o arquivo na pasta de downloads, ou pergunta onde colocá-lo se você o configurou para perguntar. Salvar de novo faz um novo download; o navegador pode chamá-lo de `Peça1 (1).partcraft.json` em vez de substituir o antigo. Renomeie ou mova os arquivos no {{pick:mac=Finder|windows=Explorador de Arquivos|linux=seu gerenciador de arquivos}} como quiser.

Caracteres que não sejam letras, dígitos, espaços, `_`, `.` e `-` no nome da peça viram `_` no nome do arquivo.

:::tip
A maioria dos navegadores tem uma configuração para perguntar onde salvar cada download. Ative-a se quiser uma escolha de "Salvar como" toda vez: no Chrome e no Edge ela fica em Downloads nas configurações; no Firefox em Geral, Arquivos e aplicativos; no Safari em Geral, Local de download de arquivos.
:::

Mais sobre para onde vão os downloads e como manter os arquivos seguros: [Para onde vão seus arquivos](common:your-files).

## Exportar

O menu {{ui:Exportar}} grava outros formatos. Cada um é um download, com o nome da peça.

| Item do menu | Arquivo | O que há nele |
|---|---|---|
| {{ui:STL, para impressão 3D}} | `<nome>.stl` | STL binário dos triângulos do sólido, em milímetros, **Z para cima** |
| {{ui:3MF, para impressão 3D}} | `<nome>.3mf` | 3MF com o sólido como um objeto, em milímetros, **Z para cima** |
| {{ui:STEP AP242 (sólido exato)}} | `<nome>.step` | Ainda não implementado nesta versão (esmaecido): precisa de um kernel exato |
| {{ui:STEP AP214 (sólido exato)}} | `<nome>.step` | Ainda não implementado nesta versão (esmaecido) |
| {{ui:STEP (facetado, kernel de malha)}} | `<nome>.step` | Um sólido feito de faces planas da malha: **as superfícies redondas são muitas facetas planas pequenas**. Em milímetros, nos eixos próprios do PartCraft (Y para cima). O STEP a usar com outros programas CAD nesta versão |
| {{ui:DXF do esboço ou da face plana}} | `<nome> - <esboço>.dxf` ou `<nome> - face.dxf` | DXF R12. Um esboço: linhas, arcos, círculos e pontos nas coordenadas do próprio esboço, nas camadas PROFILE, CONSTRUCTION e POINTS. Uma face plana selecionada: seus contornos como polilinhas fechadas (arestas redondas como suas facetas) |
| {{ui:Desenho (PDF): vistas, corte, detalhe, GD&T}} | `<nome> - drawing.pdf` | A folha de desenho A3: três vistas, isométrica, corte e detalhe se definidos, medidas gerais, símbolos de GD&T, legenda |

:::note
{{ui:STEP AP242 (sólido exato)}} e {{ui:STEP AP214 (sólido exato)}} ainda não estão implementados nesta versão: use {{ui:STEP (facetado, kernel de malha)}}. Ele tem a forma e o volume certos, mas cada face redonda são muitas facetas planas, então outros programas não conseguem selecionar um furo como cilindro. Defina **Curvas** mais fino antes, se isso importar.
:::

- As exportações são da peça na tela. A exportação fica desativada em uma montagem; ainda não há exportação de montagem.
- STL, 3MF, o STEP facetado e o DXF de face são sempre feitos de facetas. O ajuste **Curvas** (no painel direito, sem nada selecionado) define o quanto elas são finas, de 32 a 256 facetas por volta. Escolha Fino ou Muito fino antes de exportar STL ou 3MF para uma impressão lisa.
- O desenho em PDF usa a fonte Helvetica embutida do leitor. Os caracteres que ela não consegue mostrar são impressos como "?".

Passo a passo: [Exportar para impressão, STEP e DXF](topic:export-files) e [Faça uma folha de desenho](topic:drawing-pdf).

## Trabalho não salvo

- O PartCraft guarda uma cópia de recuperação da peça ou montagem aberta neste navegador um instante depois de cada alteração, para que uma falha ou uma guia fechada não a perca: da próxima vez que você abrir o PartCraft, ele pergunta "Recuperar seu trabalho?". Isso não é um salvamento: salve em um arquivo para manter o seu trabalho. Veja [Recuperar trabalho não salvo](common:recover).
- Se você tentar fechar a guia ou recarregar com alterações não salvas, o navegador pergunta "Sair do site?". Essa é a caixa do próprio navegador; o PartCraft não pode mudar o texto dela.
- {{ui:Novo}}, {{ui:Abrir}} e fechar uma montagem perguntam antes de descartar alterações não salvas.

## Online e offline

Tudo acontece no seu computador: o kernel de malha (um programa WebAssembly) é baixado com o aplicativo e constrói a geometria localmente, e os arquivos são lidos e gravados no seu disco. Nenhum dado da peça passa pela rede. Veja [O kernel de malha](topic:solid-kernels).

Para trabalhar sem nenhuma conexão, salve o PartCraft para uso offline enquanto estiver online: escolha {{ui:Salvar para uso offline}} na barra do aplicativo e aguarde enquanto ele conta ("Salvando 40 de 212") até aparecer **Pronto para uso offline**. A cópia salva inclui a biblioteca 3D e o kernel de malha, então depois disso modelar, salvar, toda exportação e os desenhos funcionam offline. Se aparecer **Não foi possível salvar**, clique nele para tentar de novo estando online; **Offline indisponível** significa que esta janela do navegador não consegue manter uma cópia (janelas privadas e alguns computadores gerenciados). Com a cópia salva, clicar em **Pronto para uso offline** oferece {{ui:Salvar de novo (obter a versão mais recente)}} e {{ui:Remover a cópia offline}}. Detalhes: [Trabalhar offline](common:offline).

:::online
Você está online. Mesmo sem salvar para uso offline, depois que o PartCraft carregou e o indicador da barra de status diz "Kernel de malha", você pode continuar trabalhando se a conexão cair. Só não recarregue a página até voltar a ficar online.
:::

:::offline
Você está offline. Se o PartCraft já estiver aberto, continue trabalhando; salvar e exportar ainda funcionam. Se a barra do aplicativo disser **Pronto para uso offline**, o PartCraft também abre do zero sem conexão; caso contrário, não recarregue esta guia.
:::

## Diferenças entre navegadores

- **Downloads.** Cada navegador tem a sua própria pasta de downloads e o seu próprio jeito de perguntar. Se um navegador perguntar se este site pode baixar arquivos, permita, ou salvar e exportar não funcionam.
- **Arrastar e soltar** um arquivo na vista funciona no Chrome, Edge, Firefox e Safari.
- **Arquivos de um celular ou tablet.** No iPhone e no iPad, Abrir mostra o app Arquivos; os arquivos salvos vão para Arquivos, Downloads. No Android, vão para a pasta Downloads.

Não há diferença no conteúdo dos arquivos entre navegadores ou sistemas operacionais.
