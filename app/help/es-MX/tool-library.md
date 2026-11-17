---
title: La biblioteca de herramientas
summary: Guarde en el navegador las herramientas que usa para que cada pieza pueda tenerlas, y mueva las bibliotecas de herramientas entre computadoras como archivo JSON.
keywords: biblioteca de herramientas, herramientas, exportar, importar, JSON, guardar herramientas, número T, fresa de punta, herramientas del taller
from: 8b9f2483
---

La pestaña **Herramientas** de Manufactura muestra las herramientas de la pieza. Bajo **Biblioteca de herramientas** puede guardar sus propias herramientas más allá de una sola pieza:

- {{ui:Guardar esta herramienta}} agrega la herramienta seleccionada a **Mis herramientas guardadas**; {{ui:Guardar todas las herramientas de esta pieza}} agrega todas. Mis herramientas guardadas se conservan en este navegador y están disponibles para cada pieza. Una herramienta que ya guardó (mismo tipo, tamaño, filos y ajustes) no se guarda dos veces.
- {{ui:Agregar a esta pieza}} toma la herramienta guardada elegida y la incorpora a la pieza. Si su número T ya lo usa otra herramienta de la pieza, recibe el siguiente número libre y el panel lo indica. {{ui:Quitar de mi biblioteca}} la quita de la lista guardada (no de las piezas que ya la tienen).
- {{ui:Exportar herramientas…}} escribe las herramientas de la pieza como archivo `.json`; {{ui:Importar herramientas…}} agrega las herramientas de ese archivo a la pieza, con las mismas reglas (una herramienta que ya está se omite, y un número T ocupado se mueve). El archivo contiene tamaños, filos, materiales y los ajustes de avance y velocidad que escribió; no tiene identificadores. Úselo para llevar las herramientas de un taller a otra computadora o para dárselas a un colega.

Si el navegador no puede conservar la biblioteca (el almacenamiento está desactivado o lleno), al guardar lo indicará, y **Exportar herramientas** es la forma de conservar un archivo. Un archivo debe ser una biblioteca de herramientas de PartCraft de esta versión o anterior, con como máximo 500 herramientas de tamaños válidos; cualquier otro se rechaza indicando el motivo.

Las velocidades de corte y las cargas de viruta que vienen con una herramienta son valores iniciales; vea [Crear trayectorias y código G](topic:manufacture).
