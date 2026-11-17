---
title: Formatos de arquivo
summary: Todo arquivo que o PartCraft lê e grava, com extensões, unidades, eixos e o que cada um mantém ou perde.
keywords: formatos, tipos de arquivo, extensões, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, malha, step, stp, ap242, dxf, r12, pdf, gltf, obj, iges, unidades, Z para cima
from: 4d0ecbee
---

| Formato | Extensão | Abrir | Salvar ou exportar | Unidades | Eixo para cima | Mantém |
|---|---|---|---|---|---|---|
| Peça do PartCraft | `.partcraft.json` | Sim | {{ui:Salvar}} | mm | Y | O histórico completo: esboços, relações, cotas, recursos, supressão, reversão, configuração de curvas, configurações do desenho e GD&T, texto STEP importado em uma versão anterior |
| Montagem do PartCraft | `.partcraft-asm.json` | Sim | {{ui:Salvar}} em uma montagem | mm | Y | Cada peça (incorporada), as cópias e suas posições, as juntas |
| STL (binário ou texto) | `.stl` | Sim, como corpo sólido: [Abrir um STL, OBJ ou 3MF](topic:open-meshes) | {{ui:STL, para impressão 3D}} | mm (perguntado ao abrir) | Z | Somente os triângulos do sólido |
| 3MF | `.3mf` | Sim, como corpo sólido | {{ui:3MF, para impressão 3D}} | mm (indicado no arquivo) | Z | O sólido como um único objeto de malha |
| OBJ | `.obj` | Sim, como corpo sólido (somente faces) | Não | perguntado ao abrir | Z ou Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Sim, como corpo sólido lido como triângulos (faces curvas desenhadas como facetas; as faces planas, cilindros, cones, esferas e toros do arquivo são mantidos para a exportação exata): [Abrir um arquivo STEP](topic:import-step) | | mm (da unidade do arquivo) | Z, ou Y se você indicar | Os sólidos e corpos de superfície, montagens com cada peça no lugar; sem cores, nomes, árvore de montagem ou PMI |
| `.3dm` | `.3dm` | Sim, como um corpo sólido a partir das suas malhas e superfícies (malhas de renderização salvas, senão tesselado): [Abrir um modelo .3dm](topic:open-3dm-files) | | Da unidade do arquivo | Z, ou Y se você indicar | Malhas, polissuperfícies, extrusões e posicionamentos de blocos como um único corpo; sem curvas, cores, camadas ou nomes |
| STEP AP242, exato | `.step` | | {{ui:STEP AP242 (sólido exato)}} | mm | Z | Um sólido exato: faces planas, cilindros, cones, esferas e toros em suas superfícies verdadeiras, círculos e linhas verdadeiros como arestas; laterais de spline, roscas modeladas, corpos de arquivos de malha e faces de spline de arquivo STEP continuam como facetas. O STEP a usar em outros programas de CAD e CAM |
| STEP AP214, exato | `.step` | | {{ui:STEP AP214 (sólido exato)}} | mm | Z | O mesmo sólido exato no esquema AP214 mais antigo, para programas que leem apenas esse |
| STEP AP242, facetado | `.step` | | {{ui:STEP (facetado, kernel de malha)}} | mm | Y | Um sólido fechado de faces planas: superfícies redondas como facetas. Para um programa que recusa o arquivo exato |
| STEP AP214, facetado | `.step` | | {{ui:STEP AP214 (facetado, kernel de malha)}} | mm | Y | O mesmo sólido no esquema AP214 mais antigo, para programas que leem apenas esse |
| Pacote USD | `.usdz` | Não | {{ui:Pacote USD (.usdz)}} | m | Z | O sólido com seu material, volume e massa; uma montagem com cada peça uma vez e todas as cópias posicionadas: [Exportar como USD](topic:usd) |
| IFC 4 | `.ifc` | Não | {{ui:IFC 4 (com todas as propriedades)}} | mm | Z | A forma em triângulos, o material, cada parâmetro, a legenda, as quantidades; as peças de uma montagem como tipos e suas cópias posicionadas |
| DXF R12, esboço | `.dxf` | Não | {{ui:DXF do esboço ou da face plana}} com um esboço selecionado | mm | x, y próprios do esboço | Linhas, arcos e círculos verdadeiros, pontos; camadas PROFILE, CONSTRUCTION, POINTS |
| DXF R12, face | `.dxf` | Não | {{ui:DXF do esboço ou da face plana}} com uma face plana selecionada | mm | x, y próprios da face | Os contornos da face: furos redondos como círculos verdadeiros, o resto como polilinhas fechadas (arestas redondas como facetas) |
| Desenho em PDF | `.pdf` | Não | {{ui:Desenho (PDF): vistas, corte, detalhe, GD&T}} | mm em folha A3 | | Vistas frontal, superior, direita, isométrica, de corte e de detalhe desenhadas a partir de facetas, linhas ocultas, dimensões gerais, símbolos GD&T, legenda |

## Os arquivos do PartCraft

Ambos são texto simples (JSON). O sólido nunca é salvo: o PartCraft o reconstrói a partir do histórico, então os arquivos ficam pequenos e sempre batem com o histórico.

- Cada arquivo tem um número de versão. Esta versão grava cada arquivo de peça com a menor versão que comporta o que ele usa (2 a 5; um corpo feito de malha precisa de 5) e abre todas as versões anteriores. Um arquivo de um PartCraft mais novo é recusado com uma mensagem que cita as duas versões.
- Cada valor é verificado ao abrir um arquivo. Nomes perdem caracteres de controle; números fora da faixa, referências a recursos inexistentes e tipos de recurso desconhecidos são recusados com um motivo simples.
- Não edite esses arquivos à mão, a não ser que conheça o formato. Um arquivo que não passe nas verificações não será aberto.
- Uma peça com um sólido STEP grande importado em uma versão anterior pode passar de 50 MB, o máximo que o PartCraft abre como arquivo de peça (veja [Solução de problemas](topic:troubleshooting#file-problems)).

## Facetas e exatidão

STL e 3MF são sempre feitos de facetas, conforme a configuração **Curvas**, e o DXF da face também, exceto nos furos redondos, que são círculos verdadeiros. O DXF do esboço tem arcos e círculos verdadeiros, porque vem direto do esboço. Esta versão constrói toda peça com o kernel de malha, então as vistas do desenho (inclusive os cortes) também são facetadas. A exportação STEP exata é a exceção: o kernel conhece a superfície verdadeira de cada face a partir do esboço (ou do arquivo STEP de onde um corpo foi aberto), então as faces redondas são gravadas como cilindros, cones, esferas e toros verdadeiros, qualquer que seja a configuração de **Curvas** (veja [Exportar para impressão, STEP e DXF](topic:export-files#for-other-cad-programs-step)).

## Não suportado nesta versão

| Formato | Situação |
|---|---|
| glTF, IGES, Parasolid, ACIS (entrada ou saída); exportação de OBJ | Não implementado |
| DWG | Gravado somente pelo [pacote de variantes](topic:variant-pack), como a folha de desenho de cada configuração. Não é lido, e não há outra exportação. Exporte DXF; todo programa de CAD abre DXF R12 |
| STEP de montagem e o desenho de uma montagem | Ainda não implementado. Exporte cada peça como STEP exato; STL, 3MF e a lista de materiais são exportados de uma montagem |
| Arquivos nativos de peças e montagens de outros programas (exceto `.3dm`, que abre como um corpo) | Não implementado |

Veja [O que ainda não foi implementado](topic:not-built-yet).
