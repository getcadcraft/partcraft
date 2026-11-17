---
title: Exportar dados: planilha de dados, campos e malhas
summary: Salve a planilha de dados de um corpo gerado em JSON ou PDF, seu campo como imagem VTK (.vti) ou level set OpenVDB (.vdb) e sua superfície como malha VTK (.vtu) para o ParaView e outras ferramentas de análise, e a malha como 3MF com os dados do gerador. A mesma peça sempre grava os mesmos arquivos.
keywords: exportar, planilha de dados, json, pdf, vti, vtu, vtk, paraview, 3mf, campo, distância com sinal, fea, cfd, metadados, openvdb
from: 817b4579
---

Na área de trabalho {{ui:Engenharia}}, ou nas propriedades de um corpo gerado, abra **Exportar dados**:

| Botão | Arquivo | Para |
|---|---|---|
| Planilha de dados (JSON) | `.json` | Cada entrada, cada número com a sua unidade e origem, as verificações, a impressão digital da malha. Ordenado, sem horários: a mesma peça gera o mesmo arquivo. |
| Planilha de dados (PDF) | `.pdf` | A mesma coisa em papel, em quantas páginas forem necessárias. |
| Campo (.vti) | `.vti` | A peça como distância com sinal (negativa por dentro) e uma máscara interna em uma grade de pontos: um arquivo de imagem VTK para o ParaView e ferramentas baseadas em VTK. Ele é construído a partir da superfície do corpo no tamanho de voxel das entradas do gerador, por isso leva um tempo, e um corpo com mais de 400 000 triângulos é grande demais para a página: salve o campo a partir de um script (`field_bake`). |
| Level set (.vdb) | `.vdb` | O mesmo campo como level set OpenVDB: uma árvore esparsa que guarda apenas a faixa fina de voxels em torno da superfície, para ferramentas que leem OpenVDB (renderizadores, simulação e programas 3D). O tamanho do voxel e as unidades são os do gerador (milímetros); a faixa estreita é a parte ativa; o interior é negativo. Construído a partir da superfície como o `.vti`, com o mesmo limite de 400 000 triângulos; um arquivo que passaria de 1.5 GB é recusado (use um tamanho de voxel maior). O arquivo está no formato OpenVDB 224, sem compressão além do empacotamento de valores ativos do próprio OpenVDB, então qualquer leitor OpenVDB o abre. |
| Superfície (.vtu) | `.vtu` | Os triângulos, com a área e a normal de cada um. |
| 3MF com dados do gerador | `.3mf` | A malha em milímetros para um fatiador, com o gerador, suas entradas e (para uma treliça graduada) sua faixa de espessuras de parede como metadados no arquivo. |

Nada nesses arquivos vem do relógio ou da máquina; assim, você pode comparar dois arquivos byte a byte: um byte alterado significa uma peça alterada.

## Ainda não implementado

- Um `.vti` ou `.vdb` do campo com um tamanho de voxel diferente do próprio do gerador.
- Leitura de arquivos `.vdb` (só a gravação está implementada).
