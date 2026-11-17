---
title: Datos de saída: folla de datos, campos e mallas
summary: Garde a folla de datos dun corpo xerado como JSON ou PDF, o seu campo como imaxe VTK (.vti) ou como conxunto de nivel OpenVDB (.vdb) e a súa superficie como malla VTK (.vtu) para ParaView e outras ferramentas de análise, e a malla como 3MF cos datos do xerador. A mesma peza produce sempre os mesmos ficheiros.
keywords: exportar, folla de datos, json, pdf, vti, vtu, vtk, paraview, 3mf, campo, distancia con signo, fea, cfd, metadatos, openvdb
from: 817b4579
---

No espazo de traballo {{ui:Enxeñaría}}, ou nas propiedades dun corpo xerado, abra **Datos de saída**:

| Botón | Ficheiro | Para |
|---|---|---|
| Folla de datos (JSON) | `.json` | Cada entrada, cada número coa súa unidade e orixe, as comprobacións, a pegada da malla. Ordenado, sen horas: a mesma peza dá o mesmo ficheiro. |
| Folla de datos (PDF) | `.pdf` | O mesmo en papel, nas páxinas que necesite. |
| Campo (.vti) | `.vti` | A peza como distancia con signo (negativa por dentro) e unha máscara interior sobre unha rede de puntos: un ficheiro de imaxe VTK para ParaView e ferramentas baseadas en VTK. Constrúese a partir da superficie do corpo co tamaño de vóxel das entradas do xerador, así que leva un momento, e un corpo de máis de 400 000 triángulos é demasiado grande para a páxina: no seu lugar, garde o campo desde un script (`field_bake`). |
| Conxunto de nivel (.vdb) | `.vdb` | O mesmo campo como conxunto de nivel OpenVDB: unha árbore esparsa que só conserva a banda fina de vóxeles ao redor da superficie, para ferramentas que len OpenVDB (renderizadores, simulación e programas 3D). O tamaño de vóxel e as unidades son os do xerador (milímetros), a banda estreita é a parte activa, o interior é negativo. Constrúese a partir da superficie como o `.vti`, co mesmo límite de 400 000 triángulos; un ficheiro de máis de 1,5 GB rexéitase (use un tamaño de vóxel maior). O ficheiro é OpenVDB formato 224, sen comprimir salvo o empaquetado de valores activos propio de OpenVDB, así que o abre calquera lector de OpenVDB. |
| Superficie (.vtu) | `.vtu` | Os triángulos, coa área e a normal de cada un. |
| 3MF con datos do xerador | `.3mf` | A malla en milímetros para un software de corte, co xerador, as súas entradas e (para unha retícula graduada) o seu intervalo de paredes como metadatos no ficheiro. |

Nada destes ficheiros procede do reloxo nin da máquina, así que pode comparar dous ficheiros byte a byte: un byte cambiado significa unha peza cambiada.

## Aínda non implementado

- Un `.vti` ou `.vdb` do campo cun tamaño de vóxel distinto do propio do xerador.
- Ler ficheiros `.vdb` (só está implementada a escritura).
