---
title: Formatos de ficheiro
summary: Todos os ficheiros que o PartCraft lê e escreve, com extensões, unidades, eixos e o que cada um mantém ou perde.
keywords: formatos, tipos de ficheiro, extensões, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, malha, step, stp, ap242, dxf, r12, pdf, gltf, obj, iges, unidades, z para cima
from: 4d0ecbee
---

| Formato | Extensão | Abrir | Guardar ou exportar | Unidades | Eixo para cima | Mantém |
|---|---|---|---|---|---|---|
| Peça PartCraft | `.partcraft.json` | Sim | {{ui:Guardar}} | mm | Y | O histórico completo: esboços, relações, cotas, operações, supressão, reversão, definição de curvas, definições do desenho e GD&T, texto STEP importado por uma versão anterior |
| Montagem PartCraft | `.partcraft-asm.json` | Sim | {{ui:Guardar}} numa montagem | mm | Y | Cada peça (incorporada), as cópias e as suas posições, as ligações |
| STL (binário ou texto) | `.stl` | Sim, como corpo sólido: [Abrir um STL, OBJ ou 3MF](topic:open-meshes) | {{ui:STL, para impressão 3D}} | mm (perguntado ao abrir) | Z | Apenas os triângulos do sólido |
| 3MF | `.3mf` | Sim, como corpo sólido | {{ui:3MF, para impressão 3D}} | mm (indicado no ficheiro) | Z | O sólido como um objeto de malha |
| OBJ | `.obj` | Sim, como corpo sólido (apenas faces) | Não | perguntado ao abrir | Z ou Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Sim, como corpo sólido lido como triângulos (faces curvas desenhadas como facetas; as faces planas, cilindros, cones, esferas e toros do ficheiro são mantidos para exportação exata): [Abrir um ficheiro STEP](topic:import-step) | | mm (da unidade do ficheiro) | Z, ou Y se indicar | Os sólidos e corpos de superfície, montagens com cada peça no seu lugar; sem cores, nomes, árvore de montagem nem PMI |
| `.3dm` | `.3dm` | Sim, como um corpo sólido a partir das suas malhas e superfícies (malhas de renderização guardadas, ou então teselados): [Abrir um modelo .3dm](topic:open-3dm-files) | | Da unidade do ficheiro | Z, ou Y se indicar | Malhas, polissuperfícies, extrusões e posicionamentos de blocos, como um só corpo; sem curvas, cores, camadas nem nomes |
| STEP AP242, exato | `.step` | | {{ui:STEP AP242 (sólido exato)}} | mm | Z | Um sólido exato: faces planas, cilindros, cones, esferas e toros nas suas superfícies verdadeiras, círculos e retas verdadeiros como arestas; laterais em spline, roscas modeladas, corpos vindos de ficheiros de malha e faces em spline de um ficheiro STEP continuam como facetas. O STEP a usar com outros programas de CAD e CAM |
| STEP AP214, exato | `.step` | | {{ui:STEP AP214 (sólido exato)}} | mm | Z | O mesmo sólido exato no esquema AP214, mais antigo, para programas que só leem esse |
| STEP AP242, facetado | `.step` | | {{ui:STEP (facetado, kernel de malha)}} | mm | Y | Um sólido fechado de faces planas: superfícies redondas como facetas. Para um programa que recuse o ficheiro exato |
| STEP AP214, facetado | `.step` | | {{ui:STEP AP214 (facetado, kernel de malha)}} | mm | Y | O mesmo sólido no esquema AP214, mais antigo, para programas que só leem esse |
| Pacote USD | `.usdz` | Não | {{ui:Pacote USD (.usdz)}} | m | Z | O sólido com o seu material, volume e massa; uma montagem com cada peça uma vez e cada cópia colocada: [Exportar como USD](topic:usd) |
| IFC 4 | `.ifc` | Não | {{ui:IFC 4 (com todas as propriedades)}} | mm | Z | A forma como triângulos, o material, cada parâmetro, a legenda, as quantidades; as peças de uma montagem como tipos e as suas cópias colocadas |
| DXF R12, esboço | `.dxf` | Não | {{ui:DXF do esboço ou da face plana}} com um esboço selecionado | mm | x, y do próprio esboço | Linhas, arcos e círculos verdadeiros, pontos; camadas PROFILE, CONSTRUCTION, POINTS |
| DXF R12, face | `.dxf` | Não | {{ui:DXF do esboço ou da face plana}} com uma face plana escolhida | mm | x, y da própria face | Os contornos da face: furos redondos como círculos verdadeiros, o resto como polilinhas fechadas (arestas redondas como facetas) |
| Desenho PDF | `.pdf` | Não | {{ui:Desenho (PDF): vistas, corte, pormenor, GD&T}} | mm numa folha A3 | | Vistas frontal, de topo, lateral direita, isométrica, de corte e de pormenor, desenhadas a partir de facetas; linhas ocultas, dimensões globais, símbolos GD&T, legenda |

## Os ficheiros do PartCraft

Ambos são texto simples (JSON). O sólido nunca é guardado: o PartCraft reconstrói-o a partir do histórico, por isso os ficheiros ficam pequenos e correspondem sempre ao histórico.

- Cada ficheiro tem um número de versão. Esta versão grava cada ficheiro de peça com a versão mais baixa que contém o que usa (2 a 5; um corpo feito a partir de uma malha precisa de 5) e abre todas as versões anteriores. Um ficheiro de um PartCraft mais recente é recusado, com uma mensagem que indica as duas versões.
- Cada valor é verificado ao abrir um ficheiro. Os nomes perdem os caracteres de controlo; números fora do intervalo, referências a operações inexistentes e tipos de operação desconhecidos são recusados com uma razão simples.
- Não edite estes ficheiros à mão, a não ser que conheça o formato. Um ficheiro que não passe nas verificações não abre.
- Uma peça com um sólido STEP grande importado por uma versão anterior pode passar os 50 MB, o máximo que o PartCraft abre como ficheiro de peça (veja [Resolução de problemas](topic:troubleshooting#file-problems)).

## Facetas e exatidão

STL e 3MF são sempre feitos de facetas, na definição **Curvas**, e o mesmo acontece com o DXF de faces, exceto nos furos redondos, que são círculos verdadeiros. O DXF de esboços tem arcos e círculos verdadeiros, porque vem diretamente do esboço. Esta versão constrói cada peça com o kernel de malha, por isso as vistas do desenho (incluindo os cortes) também são feitas de facetas. A exportação STEP exata é a exceção: o kernel conhece a superfície verdadeira de cada face a partir do esboço (ou do ficheiro STEP de onde um corpo foi aberto), por isso as faces redondas são gravadas como cilindros, cones, esferas e toros verdadeiros, seja qual for a definição de **Curvas** (veja [Exportar para impressão, STEP e DXF](topic:export-files#for-other-cad-programs-step)).

## Não suportado nesta versão

| Formato | Estado |
|---|---|
| glTF, IGES, Parasolid, ACIS (entrada ou saída); exportação OBJ | Não implementado |
| DWG | Escrito apenas pelo [pacote de variantes](topic:variant-pack), como folha de desenho de cada configuração. Não é lido, e não há outra exportação. Exporte DXF; todos os programas de CAD abrem DXF R12 |
| STEP de montagem e o desenho de uma montagem | Ainda não implementados. Exporte cada peça como STEP exato; STL, 3MF e a lista de peças exportam a partir de uma montagem |
| Ficheiros nativos de peça e montagem de outros programas (exceto `.3dm`, que abre como um corpo) | Não implementado |

Veja [O que ainda não está implementado](topic:not-built-yet).
