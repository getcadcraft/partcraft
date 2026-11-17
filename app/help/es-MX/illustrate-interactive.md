---
title: El archivo 3D interactivo
summary: Exporte el manual como un solo archivo HTML que se abre sin conexión en cualquier navegador, sin instalar nada, sin cuenta ni rastreo: el modelo, las vistas, la lista de piezas (enlazada en ambos sentidos), la animación y la lupa.
keywords: ilustrar, interactivo, archivo 3d, html, sin conexión, visor, compartir, cliente, piso de taller
from: 4de4e074
---

{{ui:Exportar}}, luego {{ui:Como}} {{ui:Archivo 3D interactivo (HTML, se abre sin conexión)}}, guarda un solo archivo `.html`. Envíelo por correo, póngalo en una memoria USB o en una carpeta compartida: se abre en cualquier navegador con WebGL 2, en computadora, tableta o teléfono.

En el archivo:

- Arrastre para girar el modelo; arrastre con el botón derecho o {{key:Shift}}+arrastre para desplazar la vista; use la rueda o pellizque para hacer zoom.
- Haga clic en una vista de la lista: la cámara se mueve hasta ella y las piezas toman las posiciones, aspectos, corte y lupa de esa vista.
- Haga clic en una fila de la lista de piezas para resaltar sus piezas; haga clic en una pieza para resaltar su fila.
- Cuando el manual tiene una animación, una barra debajo del modelo la reproduce, la pausa y permite recorrerla.

El archivo contiene todo lo que necesita (el modelo, el visor y three.js, bajo su licencia MIT) e impide cualquier solicitud: no puede acceder a internet, no tiene cuenta ni rastreo.

El 3D interactivo dentro de un PDF no se ofrece: los navegadores y la mayoría de los lectores de PDF no pueden mostrarlo, y el lector que sí puede lo tiene desactivado por defecto. El archivo HTML es la opción interactiva.
