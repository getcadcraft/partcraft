---
title: Nodos: armar un modelo conectando
summary: Conectá números en puntos, puntos en curvas, curvas en superficies. Cambiá peteĩ número ha opa mbaʼe ojeporúva oñembohéra. Peteĩ-peteĩ nodo ha'e línea CraftScript-pe, ha grafo oñeñongatu archivo-pe.
keywords: nodos, editor de nodos, script visual, paramétrico, grafo, cables, puertos, forma libre, nurbs, loft, extrusión, revolución, círculo, curva, superficie, serie, rango, aleatorio, lista, script, craftscript, grasshopper
from: 3a4625de
---

**Nodos** editor ojapo geometría ojuntáva caja-kuéra. Peteĩ-peteĩ caja (nodo) oipe'a mbaʼe michĩ: ojapo número, punto, círculo, loft. Ojuntá resultado peteĩ-pe ambue entrada-pe, ha modelo oñe'ẽ número mbyrýpe cambiádo rire.

Ojehechakuaa lista workspace-gui: {{ui:Nodes}}. Oñemboguejy ventana editor. Pieza grafo oguerekóva ohechauka workspace oñemboguejy rire. Ventana ojehecha 3D vista ári: mboyru ojevotávo título-pe, ha esquina-pe ojeʼe tamaño-pe.

## Conectar

1. Eiporu nodo lista ryepýpe (escribí búsqueda-pe ohechápa, <kbd>Enter</kbd> ojapo primer ojejuhúva). Ojehecha canvas-pe ryepýpe.
2. Eʼe **salida** punto ojerokýva derecha nodo-gui peteĩ **entrada** punto ojerokýva izquierda ambue-pe. Punto oñemboriahu verde ojapo ojuntáramo, ha pytã oñemboriahu ndaojuntái; ehechávo razón oikuaa.
3. Entrada ndaipóri ojuntáva ohechauka caja valor escrito-pe. Escribí número ha emoĩ <kbd>Tab</kbd>: resultado oñembohéra.
4. Peteĩ michĩ círculo nodo título ryepýpe ha'e **hesa**. Hesa oñemboguejy nodo ohechauka 3D vista-pe: línea curva-kuéra, sombreado superficie-kuéra, punto-kuéra.

Nodo eʼe título-gui. Emboguejy canvas tuichave-pe, aravo'i ojeʼe. {{ui:Tidy}} oñemoĩ nodo columna-pe, {{ui:Fit}} oguenohẽ opa ojehechaukárõ, {{ui:Undo}} ha {{ui:Redo}} oiporu ojejapo mbyrýpe.

## Tipo ha unidad

Puerto oguereko tipo: número, sí/no, punto, vector, curva, superficie, malla, sólido, térã "geometría" opa oúva upéva. Punto ikatu oiporu vector entrada-pe ha upéicha ambue-pe. Número oguereko unidad: **longitud** milímetro-pe ha **ángulo** grado-pe. Longitud ndaikatúi ángulo-pe, ha longitud por longitud (área) ndojeikei: cable ndaʼéi jeikeha ojapo ramo.

Cuadrado punto ha'e **lista**. Lista valor simple entrada-pe oúramo, nodo peteĩ-peteĩ item-pe oñeʼẽ jey, resultado ha'e lista. Lista ti'ũva oʼẽ ohupytýva ítem jey. Por ejemplo, **Serie** altura-kuéra **Mover**-pe ojapo pila copia-kuéra.

## Sólidos y booleanos como nodos

Grupo **Sólidos** ojapo cuerpo cerrado superficie exacta-kuéra panel Superficies-gui: **Sólido caja**, **Sólido cilindro** ha **Sólido esfera** (tamaño mm-pe), **Unión**, **Restar** ha **Intersectar** (segundo sólido oikóva primero-gui; tolerancia ha'e mbo'ehao sólido motor triángulo oĩva superficie exacta-gui), **Redondeo entre caras** (caras número sólido-pe, 1 primera-pe; radio ha, 0 gui más, radio punta-pe), **Volumen del sólido** (mm³) ha **Sólido a malla** (ehecha térã oguarda). Sólido oguereko tipo puerto: punto térã número ndaikatúi sólido entrada-pe conectá, ha punto pytã oĩta. Booleano ha redondeo nodo oiporu PartCraft motor sólido, oñemboguejy editor primera jey.

## Errores

Nodo ndaikatúi ojapo mbaʼe oñemoĩva ojehechauka nombre ryepýpe, pytã-pe ("El radio debe ser mayor que cero."), ha sigiente nodo oñe'ẽ. Mismo mensaje ha'e Problema panel Problemas-pe, upéicha ojeikuaa upégui.

## Peteĩ-peteĩ nodo ha'e línea script

Emoĩ {{ui:Script}} ohechauka grafo CraftScript-pe: línea peteĩ nodo-pe, ohechaukáva `n3 = nd_circle(n2, n1, [0 0 1]);`. Emboʼe texto ha emoĩ {{ui:Make the graph from this script}} ojapo grafo-pe. Mismo `nd_` función oiporu CraftScript-pe PartCraft-pe, upéicha grafo ojapo, oiporu ciclo térã prueba. Aleatorio número siémpre oguereko **semilla**, upéicha mismo grafo mismo resultado opa computadora-pe.

## Archivo-pe oñeñongatu

Grafo oñeñongatu parte archivo-pe (historia-pe ndaʼéi, upévare Deshacer editor-pe ojeʼeva). Nodo ojapo curva, superficie ha malla sólido ndive; ndaʼéi ojapo pieza ojeporu feature-kuéra.
