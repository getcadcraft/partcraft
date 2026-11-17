---
title: Menús, teclas y ratón
summary: Elija un estilo de menú que encaje con su forma de trabajar, asigne su propia tecla a cualquier comando, mueva comandos entre pestañas de la cinta y defina qué hacen la rueda y cada botón del ratón en la vista 3D.
keywords: estilo de menú, menús, cinta, barra de herramientas, árbol de operaciones, atajos de teclado, teclas de acceso rápido, teclas, personalizar, reasignar, ratón, rueda, invertir, sentido del zoom, botón central, orbitar, desplazar, exportar, importar, cambiar, familiar
from: 8445b06c
---

Los comandos de PartCraft son los mismos sea cual sea la forma de llegar a ellos. Un **estilo de menú** solo decide dónde aparecen en pantalla, cómo se llaman allí y qué teclas los ejecutan. Elíjalo en {{ui:Configuración}} ({{key:Mod+,}}) › {{ui:PartCraft}} › {{ui:Menús, teclas y ratón}}; el cambio es inmediato, y este navegador lo recuerda.

## Los dos estilos

| Estilo | Qué obtiene |
|---|---|
| {{ui:PartCraft}} | La barra propia de PartCraft: el selector de espacios de trabajo, {{ui:Archivo}}, {{ui:Croquis}}, {{ui:Operaciones}}, {{ui:Dibujo}}, {{ui:Ensamblaje}}, Editar y {{ui:Vista}}. Teclas: {{key:S}} croquis, {{key:F}} ajustar, {{key:M}} medir, {{key:X}} vista de sección. El de inicio. |
| {{ui:Árbol de operaciones}} | Una cinta dispuesta como la de los programas de CAD mecánico basados en operaciones: un menú {{ui:Archivo}} (con todas las exportaciones), botones rápidos y las pestañas {{ui:Operaciones}}, {{ui:Croquis}}, {{ui:Superficies}}, {{ui:Evaluar}}, {{ui:Dibujo}}, {{ui:Ensamblaje}}, {{ui:Estudios}} (los espacios de trabajo y sus herramientas), {{ui:Illustrate}} (las herramientas manuales del espacio de trabajo Illustrate; sus herramientas cambian primero a Illustrate) y {{ui:Vista}}. {{ui:Operaciones}} empieza con {{ui:Croquis}}, ya que una pieza empieza con un croquis. Teclas adicionales: {{key:E}} extrusión, {{key:H}} agujero, y {{key:V}} seguida de una letra para una vista: {{key:V}} {{key:F}} alzado, {{key:V}} {{key:B}} posterior, {{key:V}} {{key:T}} planta, {{key:V}} {{key:O}} inferior, {{key:V}} {{key:R}} derecha, {{key:V}} {{key:L}} izquierda, {{key:V}} {{key:I}} isométrica, {{key:V}} {{key:N}} normal a. En la vista 3D, el botón central orbita, {{key:Shift}} con el botón central desplaza, el botón derecho desplaza y el botón izquierdo solo elige. |

Todos los estilos conservan {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}} y {{key:Mod+A}}.

Una herramienta de otro espacio de trabajo cambia primero a él; una herramienta de Diseño elegida en otro espacio de trabajo vuelve primero a Diseño. Las herramientas de croquis esperan a un croquis, las de dibujo a la hoja de dibujo y las de ensamblaje a un ensamblaje: la barra de estado indica qué hacer primero.

:::tip
Dentro de un croquis, en la hoja de dibujo, en un ensamblaje y en los demás espacios de trabajo, las letras conservan su significado ({{key:L}} línea, {{key:R}} rectángulo, {{key:J}} unión …) en todos los estilos. {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} y las flechas conservan siempre el suyo. Una tecla de la disposición propia de PartCraft que su estilo asignó a otro comando no hace nada, y la barra de estado indica adónde fue su comando.
:::

## Hágalo suyo

1. Elija el estilo más parecido a lo que quiere y haga clic en {{ui:Personalizar…}}.
2. En {{ui:Teclas y menús}}, busque un comando (el cuadro de búsqueda ayuda). Haga clic en {{ui:Añadir una tecla}} y pulse la tecla, o dos teclas seguidas. Haga clic en una tecla para quitarla.
3. Con la cinta, {{ui:Dónde está}} mueve el comando a otra pestaña y otro panel, al menú {{ui:Archivo}} o a {{ui:Solo teclas}}.
4. En {{ui:Ratón}}, defina la rueda, los botones que desplazan un croquis y lo que hace cada botón en la vista 3D.
5. Póngale un nombre y haga clic en {{ui:Guardar}}.

Guardar un estilo integrado crea su propia copia («Mi árbol de operaciones»); el estilo integrado nunca cambia. Una tecla asignada a dos comandos, o una que se ejecutaría antes de que pueda escribirse una tecla de dos letras, aparece en rojo y hay que corregirla antes de poder guardar.

## Ratón

- **Rueda del ratón**: {{ui:Girar hacia arriba acerca}} (el de inicio) o {{ui:Girar hacia arriba aleja}}, y a qué velocidad. Pellizcar en el panel táctil siempre hace zoom en el sentido en que se mueven sus dedos.
- **Desplazar el croquis con**: el botón central, el botón derecho o ambos. Un clic derecho en un croquis sigue terminando el paso de la herramienta.
- **Arrastrar en la vista 3D**: {{ui:Propio de cada vista}} mantiene el ajuste de PartCraft ({{ui:Configuración}} › {{ui:PartCraft}}: el botón izquierdo orbita, o el central orbita). O asigne a cada botón orbitar, desplazar, hacer zoom o nada; {{key:Shift}} con el botón de órbita desplaza. Un clic sin arrastrar sigue eligiendo.

## Llévelo consigo

{{ui:Exportar}} guarda el estilo en uso como un pequeño archivo `.ccinput.json`; {{ui:Importar…}} añade uno, desde otro ordenador o de un compañero. Un archivo importado solo puede apuntar a los comandos propios de PartCraft: lo demás se omite y se cuenta en la barra de estado. {{ui:Borrar este estilo}} quita uno de los suyos.

:::note
Estos ajustes se quedan en este navegador. {{ui:Usar este estilo en todas las aplicaciones}}, bajo las tarjetas de estilo, hace que cada aplicación se abra en su estilo correspondiente (su propia barra de herramientas, o una cinta), con los cambios que hizo en cada una. Elegir otro estilo en una aplicación cambia solo esa aplicación.
:::

Relacionado: [Teclas y ratón](topic:keyboard) · [Configuración de PartCraft](topic:settings) · [Venir de otro modelador paramétrico](topic:coming-from)
