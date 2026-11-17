---
title: Teclas e rato
summary: Cada atallo de teclado e cada acción do rato en PartCraft, agrupados segundo o lugar onde funcionan: en todas partes, copiar e pegar, na peza, na vista 3D, nun esbozo, no historial e nunha montaxe.
keywords: teclado, atallos, teclas de acceso rápido, teclas, rato, orbitar, xirar, desprazar, zoom, roda, clic dereito, desfacer, refacer, gardar, abrir, escape, eliminar, alt frecha, copiar, pegar, cortar, duplicar, seleccionar todo, botón central
from: 3a59c3a3
---

As teclas non fan nada mentres escribe nunha caixa dun panel, salvo {{key:Mod+S}} e {{key:Mod+O}}, que sempre funcionan. As teclas de letras funcionan sen modificador.

Notas xerais sobre as teclas no navegador e en teclados sen teclas de función: [Teclas, ratos e panos táctiles](common:keys).

## En todas partes

| Tecla | Acción |
|---|---|
| {{key:Mod+S}} | Gardar a peza (nunha montaxe: a montaxe). Pecha antes un esbozo aberto |
| {{key:Mod+O}} | Abrir un ficheiro de peza ou de montaxe (pregunta antes se hai cambios sen gardar) |
| {{key:Mod+Z}} | Desfacer |
| {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} | Refacer |
| {{key:F1}} | Abrir ou pechar esta axuda (tamén {{ui:Help}} na barra de aplicacións). {{key:Esc}} tamén a pecha. Nos portátiles e teclados de Mac moitas veces hai que manter premido Fn |
| {{key:Ctrl+Shift+F}} | Modo de pantalla: normal, pantalla completa, pantalla completa coas barras ocultas. Control tamén nun Mac, non ⌘ |
| {{key:Esc}} | Saír da pantalla completa (cando está en pantalla completa) |
| {{key:Mod+,}} | Configuración, incluída a lapela PartCraft (ver [Configuración de PartCraft](topic:settings)) |

No cadro numérico dun panel, {{key:Mod+Z}} é o desfacer de texto do propio navegador. No cadro numérico sobre unha cota dun esbozo, desfai en PartCraft.

## Copiar, pegar e duplicar

Actúan sobre o que estea traballando: a xeometría seleccionada nun esbozo aberto, o elemento seleccionado no historial ou a peza seleccionada nunha montaxe. Detalles en [Copiar, pegar e duplicar](topic:copy-paste).

| Tecla | Acción |
|---|---|
| {{key:Mod+C}} | Copiar a selección |
| {{key:Mod+X}} | Cortar: copiar e despois eliminar |
| {{key:Mod+V}} | Pegar. Nun esbozo a copia segue o punteiro: faga clic onde debe ir |
| {{key:Mod+Shift+V}} | Pegar no mesmo sitio: mesmas coordenadas (nunha montaxe, o mesmo lugar) |
| {{key:Mod+D}} | Duplicar: copiar e pegar nun só paso, sen tocar o portapapeis |
| {{key:Mod+A}} | Seleccionar todo (nun esbozo) |
| {{key:Esc}} | Non seleccionar nada (e cancelar unha pegada que segue o punteiro) |

Nun cadro numérico, estas teclas copian e pegan texto como de costume. O texto seleccionado nun panel cópiao o navegador.

## Na peza (sen esbozo aberto)

| Tecla | Acción |
|---|---|
| {{key:S}} | Esbozar sobre o plano ou a cara plana seleccionados; sen nada escollido, escoller o lugar facendo clic |
| {{key:F}} | Encaixar a peza na vista |
| {{key:M}} | Medir, en todos os espazos de traballo e nunha montaxe; {{key:Esc}} limpa as seleccións, e outro {{key:Esc}} pecha a ferramenta (ver [Medir distancias, ángulos e masa](topic:measure)) |
| {{key:X}} | Vista de sección activada ou desactivada, en todos os espazos de traballo e nunha montaxe; {{key:Esc}} a pecha (ver [Ver o interior cunha vista de sección](topic:section-view)) |
| {{key:Delete}} | Eliminar o elemento seleccionado (pregunta se outros o usan) |
| {{key:0}} … {{key:9}}, {{key:.}} | Con un elemento seleccionado: escriba o seu número principal (a profundidade dunha extrusión, o diámetro dun burato, o número dun patrón, o raio dun arredondamento …) e despois {{key:Enter}}. {{key:Esc}} mantén o anterior |
| {{key:Backspace}} | Eliminar o elemento seleccionado, cando hai un seleccionado |
| {{key:Esc}} | Deixar de escoller un plano de esbozo, ou limpar a selección (incluídas as arestas ou caras escollidas con {{key:Shift}}) |

## Na vista 3D

Faga clic primeiro na vista para que teña o foco do teclado.

| Tecla | Acción |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Xirar a vista 15 graos |
| {{key:Shift+Left}} e as outras frechas | Desprazar |
| {{key:Plus}} ou {{key:=}} | Aumentar o zoom |
| {{key:Minus}} | Reducir o zoom |

| Rato | Acción |
|---|---|
| Arrastrar co botón esquerdo | Xirar (orbitar) a vista |
| Arrastrar co botón dereito ou central | Desprazar |
| {{key:Shift}}, {{key:Ctrl}} ou ⌘ mantidos mentres se arrastra co botón esquerdo | Desprazar |
| Rodar a roda | Zoom no punteiro (afastando de vostede aumenta o zoom) |
| Desprazamento con dous dedos no panel táctil | Xirar a vista; con {{key:Shift}}, desprazar. O pellizco fai zoom. Defínese con **Desprazamento** en [Configuración de PartCraft](topic:settings) |

Con **Xirar a vista: botón central** en [Configuración de PartCraft](topic:settings), o botón central xira a vista, {{key:Shift}} co botón central ou co botón dereito desprazan, e o botón esquerdo só escolle.
| Clic | Escoller unha cara (iluminase enteira), unha aresta ou un plano |
| {{key:Shift}}+clic nunha aresta ou cara | Reunir varias arestas ou caras |
| Clic no espazo baleiro | Quitar a selección |

## Ao escoller arestas ou caras para un arredondamento, chaflán ou casca

| Tecla ou rato | Acción |
|---|---|
| Clic nunha aresta ou cara | Engadila, ou quitala se xa está |
| {{key:Esc}} ou {{key:Enter}} | Rematar a selección (igual que {{ui:Done}}) |
| {{key:F}} | Encaixar |
| Teclas de frechas, coa vista con foco | Xirar; con {{key:Shift}}, desprazar |

## Na folla de debuxo

| Tecla | Acción |
|---|---|
| {{key:F}} | Encaixar a folla |
| {{key:Plus}} / {{key:Minus}} | Zoom (coa folla con foco) |
| {{key:Shift+Left}} e as outras frechas | Desprazar (coa folla con foco) |
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Mover o símbolo GD&T seleccionado 1 mm |
| {{key:Delete}} ou {{key:Backspace}} | Eliminar o símbolo seleccionado |
| {{key:Esc}} | Deixar de colocar un símbolo; se non, desmarcar; se non, volver ao modelo |

| Rato | Acción |
|---|---|
| Clic nunha vista, con Datum, Marco, Acabado ou Detalle escollido | Colocalo alí (axústase á liña máis próxima) |
| Clic nun símbolo | Seleccionalo |
| Arrastrar un símbolo | Movelo (a liña de referencia queda no seu punto) |
| Rodar a roda | Zoom no punteiro |
| Arrastrar co botón dereito ou central | Desprazar |

## Nun esbozo

| Tecla | Acción |
|---|---|
| {{key:L}} | Liña |
| {{key:R}} | Rectángulo |
| {{key:C}} | Círculo |
| {{key:A}} | Arco (centro, inicio, fin) |
| {{key:P}} | Punto |
| {{key:N}} | Liña de centro |
| {{key:F}} | Arredondar unha esquina |
| {{key:D}} | Cota |
| {{key:B}} | Spline (puntos de axuste) |
| {{key:T}} | Recortar |
| {{key:E}} | Estender |
| {{key:O}} | Desprazamento ({{key:B}} durante o desprazamento: os dous lados) |
| {{key:M}} | Espello |
| {{key:S}} | Seleccionar |
| {{key:Q}} | Pasar as curvas seleccionadas a construción e de novo ao normal |
| {{key:Enter}} | Rematar unha cadea de liñas ou un spline |
| {{key:Delete}} ou {{key:Backspace}} | Eliminar a selección |
| {{key:Mod+A}} | Seleccionar todo o esbozo |
| {{key:Mod+C}} / {{key:Mod+X}} / {{key:Mod+V}} | Copiar, cortar, pegar xeometría (a pegada segue o punteiro) |
| {{key:Mod+Shift+V}} | Pegar coas mesmas coordenadas |
| {{key:Mod+D}} | Duplicar a selección e colocala cun clic |
| {{key:Esc}} | Pasos atrás: cancelar o cadro numérico ou unha pegada, rematar a cadea de liñas, volver a Seleccionar, quitar a selección e, por último, pechar o esbozo |

| Rato | Acción |
|---|---|
| Clic | Colocar puntos cunha ferramenta de debuxo; seleccionar con Seleccionar |
| {{key:Shift}}+clic | Engadir á selección ou quitar dela ({{key:Ctrl}}+clic en Windows e Linux, ⌘+clic nun Mac, fan o mesmo) |
| Arrastrar no espazo baleiro (Seleccionar) | Xanela: selecciona todo o que está completamente dentro |
| Arrastrar un punto, unha liña ou a aresta dun círculo (Seleccionar) | Movelo; as relacións mantéñense |
| Arrastrar o número dunha cota (Seleccionar) | Mover a etiqueta |
| Dobre clic nunha cota | Cambiar o seu valor |
| Dobre clic ou clic dereito mentres se debuxan liñas | Rematar a cadea |
| Arrastrar co botón dereito ou central | Desprazar |
| Rodar a roda | Zoom no punteiro |

### No cadro numérico

| Tecla | Acción |
|---|---|
| {{key:Enter}} | Aplicar o valor |
| {{key:Esc}} | Pechar sen cambiar nada |

Facer clic fóra tamén aplica o valor.

## No historial

| Tecla | Acción |
|---|---|
| {{key:Tab}} | Chegar á lista |
| {{key:Up}} / {{key:Down}} | Moverse entre filas |
| {{key:Enter}} ou {{key:Space}} | Seleccionar a fila |
| {{key:Alt+Up}} / {{key:Alt+Down}} | Subir ou baixar o elemento seleccionado, cando o historial o permite |
| {{key:F2}} | Cambiar o número principal do elemento na súa fila; {{key:Enter}} o fixa, {{key:Esc}} mantén o anterior |

| Rato | Acción |
|---|---|
| Clic | Seleccionar un plano ou un elemento |
| Dobre clic nun esbozo | Abrilo |
| Dobre clic no número dun elemento | Cambialo na fila |

## Nunha montaxe

| Tecla | Acción |
|---|---|
| {{key:J}} | Iniciar unha unión: despois faga clic nunha cara plana de cada dúas pezas |
| {{key:F}} | Encaixar |
| {{key:Esc}} | Cancelar a unión iniciada, ou non seleccionar nada |
| {{key:Delete}} | Quitar a peza ou unión seleccionada |
| {{key:Backspace}} | Quitar a peza ou unión seleccionada |
| {{key:Mod+Z}} / {{key:Mod+Y}} | Desfacer e refacer na lista propia da montaxe |
| {{key:Mod+D}} | Duplicar a peza seleccionada (a mesma peza, xunto ás outras) |
| {{key:Mod+C}}, despois {{key:Mod+V}} ou {{key:Mod+Shift+V}} | Copiar unha peza, pegala xunto ás outras ou no mesmo sitio |

Rato na vista: como na vista 3D de arriba. Faga clic nunha peza para seleccionala. Faga dobre clic nunha peza da lista para editala.

## No espazo de traballo Script

| Tecla | Acción |
|---|---|
| {{key:F5}} | Executar o script (no editor, no panel ou na vista) |
| {{key:Mod+Enter}} | Executar as liñas seleccionadas, ou a liña onde está o cursor |
| {{key:Tab}} / {{key:Shift+Tab}} | Aumentar / reducir a sangría das liñas seleccionadas. Para saír do editor co teclado, prema {{key:Esc}} e despois {{key:Tab}} |
| {{key:Mod+/}} | Comentar as liñas seleccionadas, ou descomentalas |
| {{key:Mod+F}} / {{key:Mod+H}} | Buscar / buscar e substituír no script; {{key:Enter}} ou {{key:F3}} para a seguinte coincidencia, {{key:Shift+Enter}} ou {{key:Shift+F3}} para a anterior, {{key:Esc}} pecha |
| {{key:Mod+Shift+[}} / {{key:Mod+Shift+]}} | Pregar / despregar o bloque onde está o cursor (unha función, if, for, while … end) |
| {{key:Mod+Space}} | Listar as completacións do nome que está a escribir (tamén se abre tras dúas letras); {{key:Up}} / {{key:Down}} escollen, {{key:Enter}} ou {{key:Tab}} toman unha, {{key:Esc}} pecha |
| {{key:Enter}} na liña baixo a consola | Executar esa instrución; {{key:Up}} e {{key:Down}} traen de volta as anteriores |
| {{key:F}} | Encaixar a vista ao que mostran os scripts |

Ver [Escribir e executar scripts](topic:craftscript).

## Atallos que o navegador pode tomar

- {{key:Mod+Y}} en Safari pode abrir o historial: use {{key:Mod+Shift+Z}} para refacer.
- {{key:Mod+D}} é a tecla de marcadores do navegador: PartCraft a toma mentres a aplicación ten o foco, e déixaa en paz mentres escribe nunha caixa.
- {{key:F11}} e {{key:Mod+Plus}} / {{key:Mod+Minus}} son a pantalla completa e o zoom de páxina do navegador, non os de PartCraft. Use {{key:Ctrl+Shift+F}} para a pantalla completa e a roda para o modelo.
- As teclas de función de moitos portátiles e Macs necesitan a tecla Fn: prema Fn+{{key:F1}} para a axuda, ou use o botón {{ui:Help}}.

Xestos táctiles e do panel: [Panel táctil, tacto e pantallas pequenas](topic:trackpad-and-touch).

## Onde está Mover

Mover está no menú {{ui:More}} do grupo Elementos como {{ui:Move body}}, na caixa {{ui:Move}} onde escribe ΔX, ΔY e ΔZ, e como frechas {{ui:Drag to move}} na peza.
