---
title: Acabado 3D: paralela y scallop
summary: Acabado de toda la superficie curva del modelo con fresa de punta esférica, redonda o plana, en líneas paralelas a cualquier ángulo o en pasadas separadas una distancia fija, para que las crestas entre ellas tengan la altura pedida. Lo que garantizan las trayectorias y lo que no.
keywords: acabado 3d, acabado, paralela, raster, scallop, scallop constante, cúspide, punta esférica, punta redonda, superficie, tolerancia, paso lateral, pendiente, material a dejar, drop cutter, corte excesivo
from: 942d2341
---

Fabricación-pe mokõi operación ojapo **toda la superficie del modelo** herramienta vertical rehe (tres ejes). Ndaha'éi selección: trabajan sobre todo modelo ohechakuaáva arriba gui. Pieza desbaste ojapova primero (adaptativo térã pocket); pasada de acabado material sin cortar rehe avisa cortaría hondo.

## Paralela

Líneas rectas modelo rapykue **ángulo** rehe ojeporu, **paso lateral** (diámetro de herramienta fracción) gui. Cada línea superficie rehe oñemoĩ: punta altura ohechauka tanto ojeguerekovaʼerã fresa ndaha'éi modelo mboʼy. Línea finoveʼẽ corta superficie ojerovaʼeve. Con **Zigzag** ojapo, herramienta ryepype oĩ línea ryepýpe seguro haʼeháme (movimiento rehe ohechakuaa); ndaha'éi ramo, ojekuaʼa.

- **Tolerancia**: mboy ojeguerovaʼerã línea mbovy tramo punta altura verdadera gui (mitã tramo ojeporu límite gui cada tramo medio rehe). Ojehechaukáva 0,01 mm.
- **Solo donde la superficie sea al menos … y como máximo … (°)**: acabado solo área poriahu térã empinada. Rango pe ndaha'éi línea oñeñeʼẽ herramienta ojekuaʼa.
- **Material a dejar**: modelo ojeipysóva tanto distancia gui (fresa ojeikovaʼekue: ball ha bull-nose rehe exacto; fresa plana omboyke al menos tanto).
- **Fondo**: ndaha'éi cortado z gui.

## Scallop

Pasadas tanto distancia constante superficie rehe, ojehecha pe cresta (scallop) mokõi pasada vecina ryepýpe oguerekova **altura** pedida. Distancia altura ha bola radio gui ojeguerekova: s = 2·√(2·R·h − h²), ejemplo 0,69 mm pasada ryepýpe Ø6 bola ha 0,02 mm cresta rehe. Bull-nose herramienta esquina radio ojeporu. Fresa plana ndojejapóri: cresta ndoguerekói ojedimensionaʼỹ.

Pasadas **modelo borde gui, adentro** térã **modelo tuicha gui, abajo** oñepyrũ. Superficie distancia contorno (ndaha'éi altura contorno) gui; pendiente rehe planta rehe hasy, llano rehe mbovy ryepýpe. Distancia superficie cuadrícula rehe medida, aproximadamente 1 % rehe; cresta altura exacta llano térã suave curva rehe, aproximada curva rápida rehe. **Concordante** ojapo: superficie tuicha pe lado fresa derecha rehe.

## Cuánto valen las trayectorias

Pruebas ohechauka fórmula cerrada térã búsqueda independiente:

- Punta altura herramienta rehe exacta bola, bull-nose y plana herramienta rehe, cara, arista y esquina malla gui, ndaha'éi verdadera altura gui tuicha; líneas paralelas trayectoria tolerancia rehe oĩ, corte excesivo ndaha'éi hondo tolerancia gui.
- Trayectoria largo plano inclinado rehe fórmula cerrada gui oĩ igual; scallop pasada plano rehe pedida distancia ryepýpe, cresta altura pedida.
- Simulación material pasada rehe ndohechauka corte excesivo, ohechauka cresta oĩva.

Ndaha'éi ojeguerekova: acabado básico pasada, ndaha'éi production sistema opa ojapova.

- **Todavía no**: altura constante (waterline) acabado, lápiz y esquina limpieza, radial y espiral pasada, curva proyección superficie rehe, plano área detección, portaherramienta y mango colisión control. Desbaste y resto mecanizado propias operación ([3D desbaste y mecanizado de resto](topic:rough-3d)); herramienta inclinada [acabado 5 ejes](topic:multi-axis#5-axis-finishing).
- Centro herramienta modelo rapykue oĩ: trayectoria modelo borde rehe oñemboty, vertical pared borde rehe ndaha'éi acabado tuicha pie peve.
- Socavaduras ndohechaukái (superficie herramienta arriba gui oúva).
- Modelo malla kernel gui, trayectoria malla rehe oguerovaʼekue (cuerda tolerancia 0,0002 pieza diagonal gui), ndaha'éi superficie exacta rehe.
- Modelo tuicha fina tolerancia rehe acabado: programa tuicha ojejapóva moves pyahu. Revisá salida máquina simulador rehe antes cortar.
