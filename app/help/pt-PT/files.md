---
title: Ficheiros: abrir, guardar e exportar
summary: Os ficheiros de peça e de montagem que o PartCraft abre e guarda, todos os formatos de exportação e o que cada um conserva, para onde vão os ficheiros e o que muda offline ou entre navegadores.
keywords: abrir, guardar, exportar, transferir, ficheiro, partcraft.json, ficheiro de montagem, stl, 3mf, step, dxf, pdf, onde estão os meus ficheiros, offline, guardar como
from: c15c2c48
---

O PartCraft trabalha com ficheiros no seu computador. Nunca carrega uma peça para um servidor, e não há conta nem armazenamento na nuvem envolvidos. Guardar na nuvem ainda não está disponível.

## O que o PartCraft abre

| Ficheiro | Extensão | Como |
|---|---|---|
| Uma peça PartCraft | `.partcraft.json` | {{ui:Abrir}}, {{key:Mod+O}}, ou largá-lo na vista 3D |
| Uma montagem PartCraft | `.partcraft-asm.json` | O mesmo: o PartCraft vê de que tipo é |
| Um sólido STEP | `.step`, `.stp` | Um corpo sólido lido como triângulos: [Abrir um ficheiro STEP e construir a partir dele](topic:import-step) |

As malhas STL, OBJ e 3MF também abrem como corpos sólidos ([Abrir um STL, OBJ ou 3MF](topic:open-meshes)), e os ficheiros `.3dm` também ([Abrir um modelo .3dm](topic:open-3dm-files)). DXF, IGES e os ficheiros de peça próprios de outros programas não se podem abrir (veja [O que ainda não está implementado](topic:not-built-yet)).

Regras ao abrir:

- O nome de um ficheiro de peça ou de montagem tem de terminar em `.json`, e o ficheiro tem de ter menos de 50 MB.
- Os ficheiros são verificados antes de se mostrar seja o que for. Um ficheiro danificado ou editado é recusado com um motivo claro, por exemplo «Isto não é um ficheiro do PartCraft.»
- Um ficheiro guardado por um PartCraft mais recente é recusado: «Este ficheiro foi guardado por um PartCraft mais recente (versão de ficheiro 3); este lê a versão 2.» Os ficheiros mais antigos abrem.
- Se a peça no ecrã tiver alterações por guardar, o PartCraft pergunta primeiro: {{ui:Cancelar}}, {{ui:Descartar alterações}} ou {{ui:Guardar primeiro}}.

## Guardar

{{ui:Guardar}} ou {{key:Mod+S}} guarda o que está no ecrã:

- Numa peça: `<part name>.partcraft.json`, o histórico completo (esboços, relações, cotas, operações, a posição de reversão), as notas de corte, pormenor e GD&T da folha de desenho, e o texto completo de qualquer sólido STEP importado numa versão anterior. As operações que esta versão não consegue construir são guardadas de volta sem alterações. O próprio sólido não é guardado; o PartCraft reconstrói-o a partir do histórico quando o ficheiro abre.
- Numa montagem: `<assembly name>.partcraft-asm.json`, com **todas as peças lá dentro**. Um só ficheiro leva a montagem inteira, pelo que a pode enviar sozinho.

Guardar é uma **transferência**. O navegador coloca o ficheiro na pasta de transferências, ou pergunta onde o pôr se o tiver configurado assim. Guardar de novo cria uma transferência nova; o navegador pode dar-lhe o nome `Peça1 (1).partcraft.json` em vez de substituir o antigo. Mude o nome ou mova os ficheiros em {{pick:mac=Finder|windows=Explorador de Ficheiros|linux=o seu gestor de ficheiros}} como quiser.

Os carateres do nome da peça que não sejam letras, algarismos, espaços, `_`, `.` e `-` passam a `_` no nome do ficheiro.

:::tip
A maioria dos navegadores tem uma definição para perguntar onde guardar cada transferência. Ative-a se quiser uma escolha «Guardar como» de cada vez: no Chrome e no Edge está em Transferências nas definições; no Firefox em Geral, Ficheiros e aplicações; no Safari em Geral, Localização da transferência de ficheiros.
:::

Mais sobre para onde vão as transferências e como manter os ficheiros seguros: [Para onde vão os seus ficheiros](common:your-files).

## Exportar

O menu {{ui:Exportar}} escreve outros formatos. Cada um é uma transferência, com o nome da peça.

| Item de menu | Ficheiro | O que contém |
|---|---|---|
| {{ui:STL, para impressão 3D}} | `<name>.stl` | STL binário dos triângulos do sólido, milímetros, **Z para cima** |
| {{ui:3MF, para impressão 3D}} | `<name>.3mf` | 3MF com o sólido como um só objeto, milímetros, **Z para cima** |
| {{ui:STEP AP242 (sólido exato)}} | `<name>.step` | Ainda não implementado nesta versão (esbatido): precisa de um kernel exato |
| {{ui:STEP AP214 (sólido exato)}} | `<name>.step` | Ainda não implementado nesta versão (esbatido) |
| {{ui:STEP (facetado, kernel de malha)}} | `<name>.step` | Um sólido feito de faces planas a partir da malha: **as superfícies redondas são muitas pequenas facetas planas**. Milímetros, nos eixos próprios do PartCraft (Y para cima). O STEP a usar para outros programas de CAD nesta versão |
| {{ui:DXF do esboço ou da face plana}} | `<name> - <sketch>.dxf` ou `<name> - face.dxf` | DXF R12. Um esboço: linhas, arcos, círculos e pontos nas coordenadas próprias do esboço, nas camadas PROFILE, CONSTRUCTION e POINTS. Uma face plana escolhida: os seus contornos como polilinhas fechadas (arestas redondas como as suas facetas) |
| {{ui:Desenho (PDF): vistas, corte, pormenor, GD&T}} | `<name> - drawing.pdf` | A folha de desenho A3: três vistas, isométrica, corte e pormenor se definidos, dimensões globais, símbolos GD&T, legenda |

:::note
{{ui:STEP AP242 (sólido exato)}} e {{ui:STEP AP214 (sólido exato)}} ainda não estão implementados nesta versão: use {{ui:STEP (facetado, kernel de malha)}}. Tem a forma e o volume certos, mas cada face redonda são muitas facetas planas, pelo que outros programas não conseguem selecionar um furo como cilindro. Defina primeiro **Curvas** mais fino se isso importar.
:::

- As exportações são da peça no ecrã. A exportação está desativada numa montagem; ainda não há exportação de montagens.
- O STL, o 3MF, o STEP facetado e o DXF de face são sempre feitos de facetas. A definição **Curvas** (no painel da direita sem nada selecionado) define a sua finura, de 32 a 256 facetas por volta. Escolha Fino ou Muito fino antes de exportar STL ou 3MF para uma impressão lisa.
- O desenho em PDF usa o tipo de letra Helvetica incorporado no leitor. Os carateres que ele não consegue mostrar são impressos como «?».

Passo a passo: [Exportar para impressão, STEP e DXF](topic:export-files) e [Fazer uma folha de desenho](topic:drawing-pdf).

## Trabalho por guardar

- O PartCraft mantém neste navegador uma cópia de recuperação da peça ou montagem aberta, um instante depois de cada alteração, para que uma falha ou um separador fechado não a percam: da próxima vez que abrir o PartCraft ele pergunta «Recuperar o seu trabalho?». Não é uma gravação: guarde num ficheiro para conservar o seu trabalho. Veja [Recuperar trabalho por guardar](common:recover).
- Se tentar fechar o separador ou recarregar com alterações por guardar, o navegador pergunta «Sair do site?». Essa é a caixa do próprio navegador; o PartCraft não pode alterar o seu texto.
- {{ui:Novo}}, {{ui:Abrir}} e fechar uma montagem perguntam antes de descartar alterações por guardar.

## Online e offline

Tudo acontece no seu computador: o kernel de malha (um programa WebAssembly) é transferido com a aplicação e constrói a geometria localmente, e os ficheiros são lidos do seu disco e escritos nele. Nenhum dado de peças circula pela rede. Veja [O kernel de malha](topic:solid-kernels).

Para trabalhar sem qualquer ligação, guarde o PartCraft para utilização offline enquanto estiver online: escolha {{ui:Guardar para offline}} na barra da aplicação e aguarde enquanto ele conta («A guardar 40 de 212») até dizer **Pronto para offline**. A cópia guardada inclui a biblioteca 3D e o kernel de malha, pelo que depois modelar, guardar, todas as exportações e os desenhos funcionam offline. Se disser **Não foi possível guardar**, clique nele para tentar de novo enquanto estiver online; **Offline indisponível** significa que esta janela do navegador não consegue manter uma cópia (janelas privadas e alguns computadores geridos). Com a cópia guardada, clicar em **Pronto para offline** oferece {{ui:Guardar novamente (obter a versão mais recente)}} e {{ui:Remover a cópia offline}}. Pormenores: [Trabalhar offline](common:offline).

:::online
Está online. Mesmo sem guardar para utilização offline, depois de o PartCraft estar carregado e de o ícone da barra de estado dizer «Kernel de malha», pode continuar a trabalhar se a ligação cair. Apenas não recarregue a página até voltar a estar online.
:::

:::offline
Está offline. Se o PartCraft já estiver aberto, continue a trabalhar; guardar e exportar continuam a funcionar. Se a barra da aplicação disser **Pronto para offline**, o PartCraft também abre do zero sem ligação; caso contrário, não recarregue este separador.
:::

## Diferenças entre navegadores

- **Transferências.** Cada navegador tem a sua própria pasta de transferências e a sua própria maneira de perguntar. Se um navegador perguntar se este site pode transferir ficheiros, permita, ou guardar e exportar não conseguem funcionar.
- **Arrastar e largar** um ficheiro na vista funciona no Chrome, Edge, Firefox e Safari.
- **Ficheiros de um telemóvel ou tablet.** No iPhone e no iPad, Abrir mostra a aplicação Ficheiros; os ficheiros guardados vão para Ficheiros, Transferências. No Android vão para a pasta Transferências.

Não há diferença no que os ficheiros contêm entre navegadores ou sistemas operativos.
