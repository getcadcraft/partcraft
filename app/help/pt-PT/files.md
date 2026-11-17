---
title: Ficheiros: abrir, guardar e exportar
summary: Os ficheiros de peça e montagem que o PartCraft abre e guarda, cada formato de exportação e o que mantém, onde ficam os ficheiros e o que muda offline ou entre navegadores.
keywords: abrir, guardar, exportar, transferir, ficheiro, partcraft.json, ficheiro de montagem, stl, 3mf, step, dxf, pdf, onde estão os meus ficheiros, offline, guardar como
from: e5fbc7e3
---

O PartCraft trabalha com ficheiros no seu computador. Nunca envia uma peça, e não há conta nem armazenamento na nuvem envolvidos. A gravação na nuvem ainda não está disponível.

## O que o PartCraft abre

| Ficheiro | Extensão | Como |
|---|---|---|
| Uma peça PartCraft | `.partcraft.json` | {{ui:Abrir}}, {{key:Mod+O}}, ou largue-o sobre a vista 3D |
| Uma montagem PartCraft | `.partcraft-asm.json` | O mesmo: o PartCraft vê de que tipo é |
| Um sólido STEP | `.step`, `.stp` | Um corpo sólido lido como triângulos: [Abrir um ficheiro STEP e construir sobre ele](topic:import-step) |

Malhas STL, OBJ e 3MF também abrem como corpos sólidos ([Abrir um STL, OBJ ou 3MF](topic:open-meshes)), e o mesmo acontece com ficheiros `.3dm` ([Abrir um modelo .3dm](topic:open-3dm-files)). Não é possível abrir DXF, IGES nem ficheiros de peça próprios de outros programas (veja [O que ainda não está implementado](topic:not-built-yet)).

Regras ao abrir:

- O nome de um ficheiro de peça ou de montagem tem de terminar em `.json`, e o ficheiro tem de ter menos de 50 MB.
- Os ficheiros são verificados antes de qualquer coisa ser mostrada. Um ficheiro danificado ou editado é recusado com uma razão simples, por exemplo "Este não é um ficheiro do PartCraft."
- Um ficheiro guardado por um PartCraft mais recente é recusado: "Este ficheiro foi guardado por um PartCraft mais recente (versão de ficheiro 3); esta versão lê a versão 2." Os ficheiros mais antigos abrem.
- Se a peça no ecrã tiver alterações não guardadas, o PartCraft pergunta primeiro: {{ui:Cancelar}}, {{ui:Descartar alterações}} ou {{ui:Guardar primeiro}}.

## Guardar

{{ui:Guardar}} ou {{key:Mod+S}} guarda o que está no ecrã:

- Numa peça: `<part name>.partcraft.json`, com o histórico completo (esboços, relações, cotas, operações, a posição da reversão), as secções, pormenores e notas GD&T da folha de desenho, e o texto completo de qualquer sólido STEP importado por uma versão anterior. As operações que esta versão não consegue construir são guardadas sem alterações. O sólido em si não é guardado: o PartCraft reconstrói-o a partir do histórico quando o ficheiro abre.
- Numa montagem: `<assembly name>.partcraft-asm.json`, com **todas as peças dentro**. Um só ficheiro contém a montagem inteira, para que a possa enviar sozinha.

Guardar é uma **transferência**. O navegador coloca o ficheiro na pasta de transferências, ou pergunta onde o colocar se estiver configurado para perguntar. Guardar outra vez cria uma nova transferência; o navegador pode dar-lhe o nome `Part1 (1).partcraft.json` em vez de substituir o antigo. Mude o nome ou mova os ficheiros em {{pick:mac=Finder|windows=Explorador de Ficheiros|linux=o seu gestor de ficheiros}}, como preferir.

Os caracteres do nome da peça que não sejam letras, algarismos, espaços, `_`, `.` ou `-` tornam-se `_` no nome do ficheiro.

:::tip
A maioria dos navegadores tem uma definição para perguntar onde guardar cada transferência. Ative-a se quiser uma escolha "Guardar como" de cada vez: no Chrome e no Edge está em Transferências, nas definições; no Firefox, em Geral, Ficheiros e Aplicações; no Safari, em Geral, Localização de transferência de ficheiros.
:::

Mais sobre onde ficam as transferências e como manter os ficheiros seguros: [Onde ficam os seus ficheiros](common:your-files).

## Exportar

O menu {{ui:Exportar}} escreve outros formatos. Cada um é uma transferência, com o nome da peça.

| Item do menu | Ficheiro | O que contém |
|---|---|---|
| {{ui:STL, para impressão 3D}} | `<name>.stl` | STL binário dos triângulos do sólido, em milímetros, **Z para cima** |
| {{ui:3MF, para impressão 3D}} | `<name>.3mf` | 3MF com o sólido como um objeto, em milímetros, **Z para cima** |
| {{ui:STEP AP242 (sólido exato)}} | `<name>.step` | Um sólido exato, em milímetros, Z para cima: faces redondas como cilindros, cones, esferas e toros verdadeiros. O STEP a usar com outros programas de CAD e CAM |
| {{ui:STEP AP214 (sólido exato)}} | `<name>.step` | O mesmo sólido exato no esquema AP214, mais antigo |
| {{ui:STEP (facetado, kernel de malha)}} | `<name>.step` | Um sólido feito de faces planas a partir da malha: **as superfícies redondas são muitas pequenas facetas planas**. Em milímetros, nos eixos do próprio PartCraft (Y para cima). Para um programa que recuse o ficheiro exato |
| {{ui:DXF do esboço ou da face plana}} | `<name> - <sketch>.dxf` ou `<name> - face.dxf` | DXF R12. Um esboço: linhas, arcos, círculos e pontos nas coordenadas do próprio esboço, nas camadas PROFILE, CONSTRUCTION e POINTS. Uma face plana escolhida: os seus contornos como polilinhas fechadas (arestas redondas como as suas facetas) |
| {{ui:Desenho (PDF): vistas, corte, pormenor, GD&T}} | `<name> - drawing.pdf` | A folha de desenho A3: três vistas, isométrica, corte e pormenor se definidos, dimensões globais, símbolos GD&T, legenda |

:::note
{{ui:STEP AP242 (sólido exato)}} escreve furos, saliências, boleados, cones, esferas e toros nas suas superfícies verdadeiras, para que outro programa possa selecionar um furo como cilindro; **Curvas** não o altera. Laterais em spline, roscas modeladas e malhas importadas não têm superfície exata e ficam como facetas planas no mesmo sólido; a barra de estado indica quantas. {{ui:STEP (facetado, kernel de malha)}} escreve cada face redonda como facetas.
:::

- As exportações são da peça no ecrã. A exportação está desativada numa montagem; ainda não há exportação de montagens.
- STL, 3MF, o STEP facetado e o DXF de face são sempre feitos de facetas. A definição **Curvas** (no painel da direita, sem nada selecionado) define o grau de finura, de 32 a 256 facetas por volta. Escolha Fina ou Muito fina antes de exportar STL ou 3MF para uma impressão suave.
- O desenho PDF usa o tipo de letra Helvetica integrado no leitor. Os caracteres que não consegue mostrar são impressos como "?".

Passo a passo: [Exportar para impressão, STEP e DXF](topic:export-files) e [Criar uma folha de desenho](topic:drawing-pdf).

## Trabalho não guardado

- O PartCraft mantém uma cópia de recuperação da peça ou montagem aberta neste navegador, pouco depois de cada alteração, para que uma falha ou um separador fechado não percam o trabalho. Na próxima vez que abrir o PartCraft, pergunta "Recuperar o seu trabalho?". Não é uma gravação: guarde num ficheiro para manter o seu trabalho. Veja [Recuperar trabalho não guardado](common:recover).
- Se tentar fechar o separador ou recarregar com alterações não guardadas, o navegador pergunta "Sair do site?". É a caixa do próprio navegador; o PartCraft não pode mudar o seu texto.
- {{ui:Novo}}, {{ui:Abrir}} e fechar uma montagem perguntam antes de descartar alterações não guardadas.

## Online e offline

Tudo acontece no seu computador: o kernel de malha (um programa WebAssembly) é transferido com a aplicação e constrói a geometria localmente, e os ficheiros são lidos e escritos no seu disco. Nenhum dado da peça passa pela rede. Veja [O kernel de malha](topic:solid-kernels).

Para trabalhar sem qualquer ligação, guarde o PartCraft para utilização offline enquanto estiver online: escolha {{ui:Guardar para offline}} na barra da aplicação e espere enquanto conta ("A guardar 40 de 212") até indicar **Pronto offline**. A cópia guardada inclui a biblioteca 3D e o kernel de malha, por isso depois a modelação, a gravação, todas as exportações e os desenhos funcionam offline. Se disser **Não foi possível guardar**, clique para tentar de novo estando online; **Offline não disponível** significa que esta janela do navegador não consegue manter uma cópia (janelas privadas e alguns computadores geridos). Com a cópia guardada, clicar em **Pronto offline** oferece {{ui:Guardar novamente (obter a versão mais recente)}} e {{ui:Remover a cópia offline}}. Detalhes: [Trabalhar offline](common:offline).

:::online
Está online. Mesmo sem guardar para offline, depois de o PartCraft carregar e de a indicação da barra de estado dizer "Kernel de malha", pode continuar a trabalhar se a ligação cair. Só não recarregue a página até voltar a estar online.
:::

:::offline
Está offline. Se o PartCraft já estiver aberto, continue a trabalhar: guardar e exportar continuam a funcionar. Se a barra da aplicação disser **Pronto offline**, o PartCraft também abre desde o início sem ligação; caso contrário, não recarregue este separador.
:::

## Diferenças entre navegadores

- **Transferências.** Cada navegador tem a sua própria pasta de transferências e a sua forma de perguntar. Se um navegador perguntar se este site pode transferir ficheiros, permita-o; senão, guardar e exportar não funcionam.
- **Arrastar e largar** um ficheiro para a vista funciona no Chrome, Edge, Firefox e Safari.
- **Ficheiros de um telemóvel ou tablet.** No iPhone e no iPad, Abrir mostra a app Ficheiros; os ficheiros guardados vão para Ficheiros, Transferências. No Android vão para a pasta Transferências.

Não há diferença no conteúdo dos ficheiros entre navegadores ou sistemas operativos.
