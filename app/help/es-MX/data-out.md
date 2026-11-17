---
title: Salida de datos: hoja de datos, campos y mallas
summary: Guarde la hoja de datos de un cuerpo generado como JSON o PDF, su campo como imagen VTK (.vti) o conjunto de nivel OpenVDB (.vdb) y su superficie como malla VTK (.vtu) para ParaView y otras herramientas de análisis, y la malla como 3MF con los datos del generador. La misma pieza siempre escribe los mismos archivos
keywords: exportar, hoja de datos, json, pdf, vti, vtu, vtk, paraview, 3mf, campo, distancia con signo, fea, cfd, metadatos, openvdb
from: 817b4579
---

En el espacio de trabajo {{ui:Ingeniería}}, o en las propiedades de un cuerpo generado, abra **Salida de datos**:

| Botón | Archivo | Para |
|---|---|---|
| Hoja de datos (JSON) | `.json` | Cada entrada, cada número con su unidad y su origen, las verificaciones, la huella de la malla. Ordenado, sin horas: la misma pieza da el mismo archivo. |
| Hoja de datos (PDF) | `.pdf` | Lo mismo en papel, en tantas páginas como necesite. |
| Campo (.vti) | `.vti` | La pieza como distancia con signo (negativa dentro) y una máscara interior en una malla de puntos: un archivo de imagen VTK para ParaView y herramientas basadas en VTK. Se construye a partir de la superficie del cuerpo con el tamaño de vóxel de las entradas del generador, así que tarda un momento; un cuerpo de más de 400 000 triángulos es demasiado grande para la página: guarde el campo desde un script (`field_bake`) en su lugar. |
| Conjunto de nivel (.vdb) | `.vdb` | El mismo campo como conjunto de nivel OpenVDB: un árbol disperso que conserva solo la banda delgada de vóxeles alrededor de la superficie, para herramientas que leen OpenVDB (renderizadores, simulación y programas 3D). El tamaño de vóxel y las unidades son los del generador (milímetros), la banda estrecha es la parte activa, el interior es negativo. Se construye desde la superficie como el `.vti`, con el mismo límite de 400 000 triángulos; un archivo que pasaría de 1.5 GB se rechaza (use un tamaño de vóxel mayor). El archivo es formato OpenVDB 224, sin compresión salvo el empaquetado de valores activos propio de OpenVDB, así que cualquier lector de OpenVDB lo abre. |
| Superficie (.vtu) | `.vtu` | Los triángulos, con el área y la normal de cada uno. |
| 3MF con datos del generador | `.3mf` | La malla en milímetros para un programa de laminado (slicer), con el generador, sus entradas y (para una retícula graduada) su rango de espesor de pared como metadatos en el archivo. |

Nada en estos archivos proviene del reloj ni de la máquina, así que puede comparar dos archivos byte por byte: un byte distinto significa una pieza distinta.

## Pendiente

- Un `.vti` o `.vdb` del campo con un tamaño de vóxel distinto al del propio generador.
- Leer archivos `.vdb` (solo está implementada la escritura).
