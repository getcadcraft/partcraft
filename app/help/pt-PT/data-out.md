---
title: Exportar dados: ficha de dados, campos e malhas
summary: Guarde a ficha de dados de um corpo gerado como JSON ou PDF, o seu campo como imagem VTK (.vti) ou conjunto de nível OpenVDB (.vdb) e a sua superfície como malha VTK (.vtu) para o ParaView e outras ferramentas de análise, e a malha como 3MF com os dados do gerador. A mesma peça produz sempre os mesmos ficheiros.
keywords: exportar, ficha de dados, json, pdf, vti, vtu, vtk, paraview, 3mf, campo, distância com sinal, fea, cfd, metadados, openvdb
from: 817b4579
---

Na área de trabalho {{ui:Engenharia}}, ou nas propriedades de um corpo gerado, abra **Exportar dados**:

| Botão | Ficheiro | Para |
|---|---|---|
| Ficha de dados (JSON) | `.json` | Cada entrada, cada número com a sua unidade e origem, as verificações, a impressão digital da malha. Ordenado, sem horas: a mesma peça dá o mesmo ficheiro. |
| Ficha de dados (PDF) | `.pdf` | O mesmo em papel, em tantas páginas quantas forem precisas. |
| Campo (.vti) | `.vti` | A peça como distância com sinal (negativa no interior) e uma máscara interior numa grelha de pontos: um ficheiro de imagem VTK para o ParaView e ferramentas construídas sobre o VTK. É construído a partir da superfície do corpo à dimensão de voxel das entradas do gerador, por isso demora um momento, e um corpo com mais de 400 000 triângulos é grande demais para a página: guarde o campo a partir de um script (`field_bake`) em vez disso. |
| Conjunto de nível (.vdb) | `.vdb` | O mesmo campo como conjunto de nível OpenVDB: uma árvore esparsa que guarda apenas a faixa fina de voxels em torno da superfície, para ferramentas que leem OpenVDB (renderizadores, simulação e programas 3D). A dimensão de voxel e as unidades são as do gerador (milímetros), a faixa estreita é a parte ativa, e o interior é negativo. Construído a partir da superfície como o `.vti`, com o mesmo limite de 400 000 triângulos; um ficheiro com mais de 1.5 GB é recusado (use uma dimensão de voxel maior). O ficheiro é do formato OpenVDB 224, sem compressão além da compactação de valores ativos do próprio OpenVDB, por isso qualquer leitor OpenVDB o abre. |
| Superfície (.vtu) | `.vtu` | Os triângulos, com a área e a normal de cada um. |
| 3MF com dados do gerador | `.3mf` | A malha em milímetros para um fatiador, com o gerador, as suas entradas e (para uma treliça graduada) a sua faixa de paredes como metadados no ficheiro. |

Nada nestes ficheiros vem do relógio ou da máquina, por isso pode comparar dois ficheiros byte a byte: um byte alterado significa uma peça alterada.

## Ainda não implementado

- Um `.vti` ou `.vdb` do campo com uma dimensão de voxel diferente da do próprio gerador.
- Leitura de ficheiros `.vdb` (só a escrita está implementada).
