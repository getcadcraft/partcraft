---
title: Menús, teclas y ratón
summary: Elija un estilo de menú que coincida con su forma de trabajar, asigne su propia tecla a cualquier comando, mueva comandos entre pestañas de la cinta y defina qué hace la rueda y cada botón del ratón en la vista 3D.
keywords: estilo de menú, menús, cinta, barra de herramientas, árbol de operaciones, atajos de teclado, teclas de acceso, teclas, personalizar, reasignar, ratón, rueda, invertir, dirección del zoom, botón central, órbita, encuadre, exportar, importar, cambiar, familiar
from: 8445b06c
---

Los comandos de PartCraft son los mismos sea cual sea la forma de llegar a ellos. Un **estilo de menú** solo decide dónde aparecen en pantalla, cómo se llaman allí y qué teclas los ejecutan. Elija uno en {{ui:Configuración}} ({{key:Mod+,}}) › {{ui:PartCraft}} › {{ui:Menús, teclas y ratón}}; el cambio es inmediato, y este navegador lo recuerda.

## Los dos estilos

| Estilo | Qué obtiene |
|---|---|
| {{ui:PartCraft}} | La barra propia de PartCraft: el selector de espacio de trabajo, Archivo, Croquis, Operaciones, Dibujo, Ensamblaje, Editar y Vista. Teclas {{key:S}} croquis, {{key:F}} ajustar, {{key:M}} medir, {{key:X}} vista de sección. Es el predeterminado. |
| {{ui:Árbol de operaciones}} | Una cinta dispuesta como la de los programas de CAD mecánico basados en operaciones: un menú {{ui:Archivo}} (con todas las exportaciones), botones rápidos y las pestañas {{ui:Operaciones}}, {{ui:Croquis}}, {{ui:Superficies}}, {{ui:Evaluar}}, {{ui:Dibujo}}, {{ui:Ensamblaje}}, {{ui:Estudios}} (los espacios de trabajo y sus herramientas), {{ui:Ilustrar}} (las herramientas manuales del espacio Ilustrar; sus herramientas cambian primero a Ilustrar) y {{ui:Vista}}. {{ui:Operaciones}} empieza con {{ui:Croquis}}, ya que una pieza empieza con un croquis. Teclas extra: {{key:E}} extrusión, {{key:H}} agujero, y {{key:V}} seguida de una letra para una vista: {{key:V}} {{key:F}} frente, {{key:V}} {{key:B}} posterior, {{key:V}} {{key:T}} superior, {{key:V}} {{key:O}} inferior, {{key:V}} {{key:R}} derecha, {{key:V}} {{key:L}} izquierda, {{key:V}} {{key:I}} isométrica, {{key:V}} {{key:N}} normal a. En la vista 3D, el botón central órbita, {{key:Shift}} con el botón central encuadra, el botón derecho encuadra y el botón izquierdo solo designa. |

Todos los estilos conservan {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}} y {{key:Mod+A}}.

Una herramienta de otro espacio de trabajo cambia primero a él; una herramienta de Diseño elegida en otro espacio de trabajo vuelve primero a Diseño. Las herramientas de croquis esperan a un croquis, las de dibujo a la hoja de dibujo y las de ensamblaje a un ensamblaje: la barra de estado indica qué hacer primero.

:::tip
Dentro de un croquis, en la hoja de dibujo, en un ensamblaje y en los demás espacios de trabajo, las letras conservan allí su propio significado ({{key:L}} línea, {{key:R}} rectángulo, {{key:J}} unión …) en todos los estilos. {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} y las flechas siempre conservan el suyo. Una tecla del diseño propio de PartCraft que su estilo asignó a otro comando no hace nada, y la barra de estado indica dónde fue a parar su comando.
:::

## Hágalo suyo

1. Elija el estilo más cercano a lo que quiere y luego haga clic en {{ui:Personalizar…}}.
2. En {{ui:Teclas y menús}}, busque un comando (el cuadro de búsqueda ayuda). Haga clic en {{ui:Agregar una tecla}} y pulse la tecla, o dos teclas seguidas. Haga clic en una tecla para quitarla.
3. Con la cinta, {{ui:Dónde está}} mueve el comando a otra pestaña y panel, al menú {{ui:Archivo}}, o a {{ui:Solo teclas}}.
4. En {{ui:Ratón}}, defina la rueda, los botones que encuadran un croquis y lo que hace cada botón en la vista 3D.
5. Póngale un nombre y haga clic en {{ui:Guardar}}.

Guardar un estilo integrado crea su propia copia ("Mi Árbol de operaciones"); el integrado nunca cambia. Una tecla asignada a dos comandos, o una que se ejecutaría antes de que pudiera escribirse una combinación de dos letras, aparece en rojo y debe corregirse antes de guardar.

## Ratón

- **Rueda del ratón**: {{ui:Girar hacia arriba acerca}} (el predeterminado) o {{ui:Girar hacia arriba aleja}}, y qué tan rápido. Un pellizco en el trackpad siempre hace zoom en el sentido en que se mueven sus dedos.
- **Encuadrar el croquis con**: el botón central, el botón derecho o ambos. Un clic derecho en un croquis todavía termina el paso de la herramienta.
- **Arrastrar en la vista 3D**: {{ui:Propia de cada vista}} conserva la configuración de PartCraft ({{ui:Configuración}} › {{ui:PartCraft}}: el botón izquierdo órbita, o bien el central). O asigne a cada botón órbita, encuadre, zoom o nada; {{key:Shift}} con el botón de órbita encuadra. Un clic sin arrastrar sigue designando.

## Llévelo con usted

{{ui:Exportar}} guarda el estilo en uso como un pequeño archivo `.ccinput.json`; {{ui:Importar…}} agrega uno, desde otra computadora o de un colega. Un archivo importado solo puede apuntar a los comandos propios de PartCraft: lo demás se omite y se cuenta en la barra de estado. {{ui:Eliminar este estilo}} quita uno de los suyos.

:::note
Estos ajustes se quedan en este navegador. {{ui:Usar este estilo en todas las apps}} bajo las tarjetas de estilo hace que cada app se abra con su estilo correspondiente (su propia barra o una cinta), con los cambios que hizo en cada una. Elegir otro estilo en una app cambia solo esa app.
:::

Relacionado: [Teclas y ratón](topic:keyboard) · [Configuración de PartCraft](topic:settings) · [Si viene de otro modelador paramétrico](topic:coming-from)
