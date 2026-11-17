---
title: Toolpath ha G-code ojapo (Manufactura)
summary: Stock ha trabajo origen omoĩ, herramienta ojeporu, cara, pocket, contour, taladro ha chaflán operación cara selección-pe, 3D terminación (paralela, scallop), stock modelo ndive simulación (gouge ha ciclo tiempo), G-code ojeipe tres post térã ojapo'ỹ mba'e.
keywords: exact step, step para taller, coordenadas de trabajo, cam handoff, paralela, scallop, terminación 3d, terminación, ball nose, biblioteca de herramientas, editar post, post personalizado, editor de post, adaptive, desbaste adaptativo, compromiso constante, trochoidal, hsm, mecanizado a alta velocidad, manufactura, CAM, toolpath, G-code, NC, CNC, fresadora, fresado, pocket, contour, perfil, refrentado, taladro, peck, G83, G81, G73, chaflán, stock, desfase de trabajo, G54, postprocesador, GRBL, LinuxCNC, avances y velocidades, simulación, gouge, tiempo de ciclo
from: beeb29aa
---

Manufactura workspace pieza toolpath 3-eje fresadora-pe ojapo ha G-code-pe ojeikuaa. Opa operación **2.5-eje**: herramienta vertical oiko, pared recto, piso plano. **Parallel** ha **Scallop** curva superficie 3D-pe terminación (ver [3D terminación](topic:finish-3d)); herramienta vertical ojeikuaa (tres eje, ndaipóri inclinación). Malla kernel ojehechauka cara ojeporu ojapo (ver [Malla kernel](topic:solid-kernels)).

Lab versión: opa program control-pe simulador ojeikuaa, stock ántes aire-pe ojapo.

## Preparación

1. **Manufacture** workspace cambiador-pe ojepyrũ, upéi {{ui:New setup}}.
2. **Setup** pestaña-pe ojapo:
   - **Tool axis (+Z)**: herramienta pieza-pe mba'éichapa ojeikuaa. World +Y (PartCraft arriba) ojepyrũ; máquina X world X, máquina Y world −Z.
   - **Work origin (G54)**: stock esquina térã centro, arriba térã abajo, modelo arriba centro, térã modelo origen.
   - **Stock**: caja térã cilindro, modelo más lado, arriba, abajo, térã tamaño fijo.
   - **Material** (feeds ha velocidad ojepyrũ), **post** (control), máquina spindle máximo, rapid ha herramienta cambio tiempo, refrigerante ha programa número.

## Herramientas

**Tools** pestaña-pe biblioteca: plano, bola ha bull nose end mill, taladro, chaflán fresa ha cara fresa, cada T número, diámetro, flauta ha flauta largo-pe (esquina radio, punta térã chaflán ángulo ojapo jave).

Herramienta propio navegador-pe guardava ha archivo-pe computadora-kuéra mbojojáva: [Herramienta biblioteca](topic:tool-library).

Spindle velocidad ha avance material-gui: n = 1000 × cutting speed / (π × diámetro), avance = n × flauta × chip load (taladro: n × avance rev-pe). Número conservador ojepyrũ publicado rango-gui, máquina-pe ojapo'ỹ; herramienta fabricante cutting speed, chip load, rpm térã avance omoĩ ojeity. Velocidad máximo máquina rupi jave hendy, avance ojeporu, chip load ojejuhu.

## Operación ojapo

Toolbar botón opa operación ojapo, geometría ojeporavo jave, cara térã borde vista-pe clic (clic upéi ojeity), upéi {{ui:Done picking}} térã {{key:Esc}}.

| Operación | Selección | Mba'e ojapo |
|---|---|---|
| {{ui:Face}} | nada | Opa stock-pe zigzag pasada, borde ipuka, modelo arriba-pe |
| {{ui:Pocket}} | plano piso cara, redondo orificio, térã cerrado borde cadena | Offset pasada-pe región ojeipe adentro-afuera, cada paso-pe; islas (piso adentro cara ojeipe) ndojapo; piso afuera abierto (afuera ndaipóri más alto) stock borde-pe ojeipe |
| {{ui:Adaptive}} | Pocket ndive oikoháicha | Región ojeipe pasada-pe, cada pasada ancho ojeporu (**Engagement**, diámetro fracción), cutter ranura ndojeporu'ỹ, esquina-pe avei; helix-pe ingresa ha pared nivel-pe terminación. Estrecho corte profundo paso ha avance alto |
| {{ui:Contour}} | plano cara (contorno), redondo cara, térã borde | Contorno herramienta radio offset-gui ojeipe, afuera térã adentro, lead-in ha lead-out arco ha tab ojeporu |
| {{ui:Drill}} | orificio (orificio pared térã borde clic) | Ciclo fijo-pe orificio ojapo: peck (G83), drill (G81) térã chip break (G73); térã diámetro omoĩ tamaño ndive orificio opa taladro |
| {{ui:Chamfer}} | cara contorno térã borde | Chaflán fresa borde rehe ojapo, ojapo ancho ojehechauka |
| {{ui:Parallel}} | nada (modelo opa) | 3D terminación línea paralela ángulo opa-pe, bola, bull-nose térã plano end mill superficie rehe. Ver [3D terminación](topic:finish-3d) |
| {{ui:Scallop}} | nada (modelo opa) | 3D terminación pasada distancia omoĩva superficie rehe, pasada ndive borde altura omoĩ |

Lista-pe operación selección herramienta, altura (clearance, retract, feed height, top, bottom), step-down, stepover, dejar stock, terminación pasada, entry (helix, ramp térã plunge), climb milling, tabs térã ciclo ojeity. {{ui:Up}} ha {{ui:Down}} ojeity, {{ui:Suppress}} ojapo'ỹ, {{ui:Delete}} eliminar. Opa undo historia-pe ha pieza archivo-pe guardava.

Pocket stepover ojapo mitã herramienta diámetro, piso punto opa pasada herramienta radio-pe. Esquina adentro herramienta radio ojeguerekóva.

**Adaptive clearing** cutter engagement peteĩ valor-pe ojekóva. 0,15 diámetro engagement 46° ángulo: material-pe cutter borde arco. Offset pocket primera pasada full ancho ojapo, esquina adentro más ojevy. Pasada-pe herramienta aire corte-pe ojapo, aire corte ojeporuva upe ojeguejy ha ojeguejy. Pasada fino malla-pe región-pe (celda herramienta radio duodécimo), engagement omoĩva-gui peteĩ celda ancho ojapo ikatu; pared exacto. Región guasu programa mboyve ojapo, moviemiento ojapo tuichave.

## Simulación

Toolpath ojapo cambio rire (pieza avei). {{ui:Simulate}} programa rire stock ojeipe ojehechauka. Panel ojehechauka:

- **Cycle time**: avance movimiento avance-pe, rapid recta línea setup rapid-pe, herramienta cambio tiempo ndive. Máquina real aceleración, heta pe'a.
- **Gouges**: herramienta modelo cara 0,02 mm rupi jave. Vista-pe rojo marca.
- **Stock left on the part**: pieza-pe stock oiko.

Stock arriba altura mapa (Z-map), undercut ndojehechauka. **Playback** ojeity herramienta programa-pe ojeguejy. Vista-pe avance movimiento sólido, rapid guión, operación color peteĩ.

**Show the simulated stock** ojapo jave, stock modelo rehe color: **verde** modelo-pe (0,02 mm-pe), **rojo** herramienta modelo-pe ojeporta, stock modelo-pe oiko jave **amarillo** pe'a mbyky, **naranja** heta, **gris** 1 mm térã más ojeipe. Color ojapo cada cambio, altura mapa ndive panel número-gui, verde ha rojo Gouges línea-pe ojejuhu. Chaflán modelo-pe ojapo ojapo, borde rojo.

## G-code ojeipe

**Post** control ojeporavo ha {{ui:Download G-code}} (térã toolbar {{ui:Post}}) ojapo:

| Control | Archivo | Mba'e |
|---|---|---|
| Fanuc-style ISO | .nc | %, O número, línea número, T M6 G43 H, ciclo fijo |
| GRBL | .nc | Herramienta cambiador ndaipóri, ciclo fijo ndaipóri: herramienta cambio M0-pe omoĩ, taladro movimiento simple-pe |
| LinuxCNC | .ngc | T M6 G43 H, ciclo fijo, M2 |
| Ambue | cualquiera | Ojapo térã ojeity post: {{ui:Edit post…}}, {{ui:New post…}}, {{ui:Import post file…}} |

Opa archivo comentario programa, stock, trabajo desfase ha herramienta-pe ojepyrũ. Coordenada milímetro 3 decimal-pe. {{ui:Toolpath CSV}} ha {{ui:Toolpath JSON}} movimiento-kuéra ojeipe.

**Máquina simulador-pe salida ojehecha ántes cortar, stock rededor aire-pe ojapo ántes.** Mbohapy built-in post ojapo: control ojeporu ojehechauka ojeporu punto; máquina peteĩ-pe ojehecha'ỹ. Post ojeity ojapo, ndojapo propio. Post ojapo: [Postprocesadores](topic:post-processors).

## Exacto STEP taller-pe

**Operations** pestaña G-code botón-pe, {{ui:Exact STEP (work coordinates)}} `<part>-work.step` ojeipe: pieza sólido exacto (orificio cilindro, borde círculo) trabajo origen-pe, Z herramienta eje-pe. G-code coordenadas-pe, taller CAM programa modelo línea-pe mover'ỹ. Archivo pieza ndive, stock ni toolpath ndaipóri.

{{ui:Export}} › {{ui:STEP AP242 (exact solid)}} mismo sólido pieza posición-pe (Z arriba): ver [Impresión, STEP ha DXF exportar](topic:export-files#for-other-cad-programs-step).

## Límite

- Pocket, contour, taladro ha chaflán 2.5-eje. Curva cara 3D-pe terminación ikatu ([paralela ha scallop](topic:finish-3d)) ndaikatúi 3D desbaste (cono escalón-pe oiko terminación peve), resto mecanizado ndaipóri. Adaptive clearing 2D (plano piso).
- Tres eje solamente: inclinación ndaipóri, torno ndaipóri, inspección ndaipóri.
- Soporte ha vástago colisión ndojehechaukáva; flauta largo más corte jave advertencia ojehechauka.
- Avance ha velocidad punto de partida. Post texto ojeity ikatu, movimiento ojapo ojeporu, toolpath ojeity'ỹ, eje ojapo'ỹ, máquina ndojeikuaa ([Postprocesadores](topic:post-processors) ndojapo'ỹ mba'e ojehechauka).

## Programa máquina-pe ohupi

CadCraft Studio desktop-pe, Studio-pe máquina preparación ndive, **Send to a machine…** **Download G-code** rehe ojehechauka; programa máquina-pe ojeipe red-pe. PartCraft-gui ndojapói'ỹ: máquina-pe ojapo ojepyrũ ojeikuaa jave. Navegador-pe botón ndojehecha: programa ojepapa.
