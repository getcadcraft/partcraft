---
title: La biblioteca de herramientas
summary: Guarde en el navegador las herramientas que usa para que cada pieza pueda tenerlas, y lleve bibliotecas de herramientas de un ordenador a otro como archivo JSON.
keywords: biblioteca de herramientas, herramientas, exportar, importar, JSON, guardar herramientas, número T, fresa de extremo, herramientas de taller
from: 8b9f2483
---

La pestaña **Herramientas** de Fabricación enumera las herramientas de la pieza. Bajo **Biblioteca de herramientas** puede guardar sus propias herramientas más allá de una pieza:

- {{ui:Guardar esta herramienta}} añade la herramienta seleccionada a **Mis herramientas guardadas**; {{ui:Guardar todas las herramientas de esta pieza}} las añade todas. Mis herramientas guardadas se conservan en este navegador y están disponibles para cada pieza. Una herramienta que ya guardó (mismo tipo, tamaño, número de filos y valores modificados) no se guarda dos veces.
- {{ui:Añadir a esta pieza}} lleva a la pieza la herramienta guardada elegida. Si su número T ya lo usa otra herramienta de la pieza, recibe el siguiente número libre y el panel lo indica. {{ui:Quitar de mi biblioteca}} la elimina de la lista guardada (no de las piezas que ya la tienen).
- {{ui:Exportar herramientas…}} escribe las herramientas de la pieza como archivo `.json`; {{ui:Importar herramientas…}} añade las herramientas de ese archivo a la pieza, con las mismas reglas (una herramienta que ya está se omite, y un número T ocupado se desplaza). El archivo guarda tamaños, filos, materiales y los valores de avance y velocidad que haya escrito; no tiene identificadores. Úselo para llevar las herramientas de un taller a otro ordenador o para dárselas a un compañero.

Si el navegador no puede conservar la biblioteca (el almacenamiento está desactivado o lleno), al guardar se indica, y **Exportar herramientas** es la forma de conservar un archivo. Un archivo debe ser una biblioteca de herramientas de PartCraft de esta versión o anterior, con como máximo 500 herramientas de tamaños válidos; cualquier otro se rechaza indicando el motivo.

Las velocidades de corte y los avances por diente que vienen con una herramienta son valores de partida; vea [Crear trayectorias y código G](topic:manufacture).
