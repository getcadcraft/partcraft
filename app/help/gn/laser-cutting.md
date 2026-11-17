---
title: Plano láser-pe mondo
summary: Eleva mba'e ojapo capa-pe (cortar, marcar, grabar, relleno, imagen), ojehechaukáva movimiento cabezal, ha GRBL láser-mode G-code oñeñongatu térã navegador-gui oñemondo marco upéi.
keywords: láser, cortadora láser, grabador láser, GRBL, G-code, grabar, relleno, dither, grabado de imagen, marcar, cortar, Web Serial, Linux, enmarcar trabajo, potencia, velocidad, pasadas
from: 327b3c46
---

Panel {{ui:Laser}} ojapo plano capa mba'e programa-pe GRBL ojapóva láser-pe (heta hobby ha small-shop diodo ha CO2 controlador). PartCraft-pe, eleva {{ui:Export}} › {{ui:Laser program…}}, upéi {{ui:Add outlines from a DXF…}}: contornos ha orificio CUT capa-pe ojeike. Chapa metálica pieza plana (doblez línea capa BEND-pe) ojerura kernel exacto, ko versión-pe ndaipóri. Configuración archivo pieza térã ensamblaje-pe oñeñongatu.

:::warning
Opa configuración sy desecho-pe ántes ojapo, láser-pe ojapo tembiasakue ojapo, ojapo ojapo láser ojeko ohechakuaa jave ojehecha, ha láser ojapo ndaipóri ndojeheja. Capa oiko número ko'ẽ placeholder, material ndaha'éi recomendación.
:::

## Mba'e ojapo capa-pe

Plano opa capa fila-pe. {{ui:Does}} ojapo **Cut**, **Score**, **Engrave lines**, **Fill shapes**, **Engrave picture** térã **Not sent**, {{ui:Power %}}, {{ui:Speed mm/min}} ha {{ui:Passes}} número ojehai.

- **Fill** cerrado forma ndo-pe línea-pe ojeñuhãrõ, {{ui:Line spacing}} ojehai, {{ui:Angle}}-pe, ambos dirección térã peteĩ, overscan ha cabezal velocidad-pe láser ojeikuaa jave; cross-hatch 90° segundo pasada. Orificio oiko forma ojeipyta orificio-pe.
- **Engrave picture** imagen punto-pe ojapo (Floyd–Steinberg, Atkinson, ordered, térã blanco y negro umbral-pe) térã, *Grey levels*-pe, potencia variable-pe.
- Orden: imagen ha relleno primero, upéi línea grabado, upéi marca, upéi corte, ha corte pieza ndo-pe ojeity grabado ojapo jave. Peteĩ capa-pe ruta **inside-first** (orificio ántes placa ohechakuaa), oiko mboyve ojuhu.

## Ojehechauka, upéi guardar

Vista ojehechauka cabezal ojapo: línea ojapo color-pe, rapydáva movimiento gris-pe, opa ojapo ojeikuaa verde recuadro. Ha'e rapykue tamaño, grabado largo ha tiempo estimado (aceleración ndaipóri; máquina real-pe heta pe'a). {{ui:Save G-code…}} GRBL laser-mode G-code ojapo: `$32=1`, `M4` (térã `M3`) S valor-pe, `G0` ha `G1` movimiento, `M5` ipahápe. X0 Y0 trabajo ijyvy-ñuhã ijyvy-pe, plano origen ojeporavo'ỹ: máquina cero ha'e upépe ojapo. G-code ojeporu GRBL laser-mode ojehechauka; láser real-pe ndojapói'ỹi ojehai.

## Navegador-gui oñemondo

Chrome ha Edge-pe, {{ui:Connect…}} ojeporavo láser USB puerto. Ndaipóri konekta ha mondo ojapo ojeporavo botón. {{ui:Frame the job}} ojapo: cabezal trabajo recuadro ojapo láser **apagado** (térã puntero ojeporavo potencia baja-pe) ojehechaukáva mba'eichapa ojapo. Upéi rire {{ui:Send job}} ojapo, ha cambio ojapo jave ojapo'ỹ. {{ui:Pause}} cabezal omano, {{ui:Stop}} omano, controlador ojapo jevy (láser ojapo apagado) ha `M5` oñemondo. Web Serial ndaipóri (Firefox, Safari ha CadCraft Studio, web view-pe ndaipóri áño), G-code guardar ha máquina programa ndive mondo.

## Ndojapo'ỹ áño

Ambue controlador formato (Ruida, Marlin láser, vendedor archivo), pestaña ha lead-in, kerf offset, material biblioteca, rotary ha Z eje, cámara alineación.
