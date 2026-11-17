---
title: El archivo 3D interactivo
summary: Exporte el manual como un único archivo HTML que se abre sin conexión en cualquier navegador, sin instalación, cuenta ni rastreo: el modelo, las vistas, la lista de piezas (enlazada en ambos sentidos), la animación y la lupa.
keywords: illustrate, interactivo, archivo 3d, html, sin conexión, visor, compartir, cliente, taller
from: 4de4e074
---

{{ui:Exportar}}, luego {{ui:Como}} {{ui:Archivo 3D interactivo (HTML, se abre sin conexión)}}, guarda un único archivo `.html`. Envíelo por correo electrónico, póngalo en una memoria USB o en una carpeta compartida: se abre en cualquier navegador con WebGL 2, en un ordenador, una tableta o un teléfono.

En el archivo:

- Arrastre para girar el modelo, arrastre con el botón derecho o {{key:Shift}}+arrastre para desplazarlo, y use la rueda o el pellizco para acercar y alejar.
- Haga clic en una vista de la lista: la cámara se mueve hasta ella y las piezas adoptan las posiciones, aspectos, cortes y lupa de esa vista.
- Haga clic en una fila de la lista de piezas para iluminar sus piezas; haga clic en una pieza para iluminar su fila.
- Cuando el manual tiene una animación, una barra bajo el modelo la reproduce, la pausa y permite desplazarse por ella.

El archivo contiene todo lo que necesita (el modelo, el visor y three.js, bajo su licencia MIT) y bloquea cualquier solicitud: no puede acceder a internet, no tiene cuenta ni rastreo.

El 3D interactivo dentro de un PDF no se ofrece: los navegadores y la mayoría de lectores de PDF no pueden mostrarlo, y el lector que sí puede lo mantiene desactivado de forma predeterminada. El archivo HTML es la solución interactiva.
