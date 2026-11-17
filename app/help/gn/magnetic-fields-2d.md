---
title: Campo magnético 2-D (tutorial)
summary: Electroimán térã imán permanente campo magnético analysis biblioteca-pe ojeikuaa: ejemplo ojapo, densidad de flujo, brecha campo, inductancia ha tracción ojeikuaa, diseño ojeity, ha modelo propio hierro, imán ha bobina-gui.
keywords: magnético, magnetostática, campo magnético, densidad de flujo, tesla, electroimán, solenoide, bobina, amperio-vuelta, núcleo de hierro, brecha de aire, permeabilidad, inductancia, fuerza magnética, reluctancia, circuito magnético, potencial vectorial, electromagnetismo, elementos finitos, fem, motor, actuador, transformador, magnetostatic2d, imán permanente, neodimio, ndfeb, ferrita, remanencia, punto de trabajo, recoil, fuga, imán de retención
from: 215f6601
---

PartCraft analysis biblioteca 2-D-pe electroimán ha hierro campo magnético ojeikuaa: ojehecha'ỹ largo ha mismo largo, electroimán, transformador núcleo, barra ha motor cruce-sección-gui. Ko tutorial electroimán ejemplo ojapo, ojehechauka mba'e ojapo, ojeity, ha modelo propio ojapo, upéi imán permanente ojapo.

Script trabajo ojeporu ha [analysis biblioteca](topic:craftscript-library). CraftScript ndaikuaái ndaipóri'ỹ; ejemplo ha'ehína mba'e línea ojapo.

## Ojapo ha'e

C-forma hierro núcleo, 100 × 80 mm afuera ha 20 mm grueso, derecha pierna-pe 2 mm aire brecha. Bobina 100 vuelta, 10 A corriente (1000 amperio-vuelta) izquierda pierna rededor. Opa largo pantalla ojehecha'ỹ-gui, respuesta **metro profundidad-pe**: imán real-pe profundidad ndive ojapo.

`magnetostatic2d` biblioteca 1 mm cuadrado malla-pe imán rededor aire caja-pe potencial vectorial ojeikuaa, upéi densidad de flujo **B** (tesla) ojapo.

## Ejemplo ojapo

1. **Workspace** caja toolbar izquierda-pe **Script** ojeporavo.
2. Script panel **Library** pestaña, upéi **Examples** › **Electromagnet: field, gap, inductance**.
3. {{ui:Open (read-only)}} clic, upéi {{key:F5}} ojapo.

Peteĩ-mokõi segundo-pe canvas densidad de flujo ojehechauka, consola ojehai:

```
B in the gap 0.5427 T; magnetic circuit 0.5516 T (-1.6 %: fringing and leakage)
inductance 0.1539 H per metre of depth; the circuit gives 0.1103 H/m, missing the flux that leaks past the gap
stored energy 7.694 J/m; |B| peaks at 1.97 T in the window's inner corners (real steel would saturate there)
pull across the gap about 2343 N per metre of depth (117.2 N for 50 mm deep)
```

Canvas rededor gráfico B_y núcleo medio línea-gui, izquierda-derecha: izquierda pierna-pe −0,55 T (flujo abajo), ventana-pe casi nada, derecha pierna ha brecha-pe +0,55 T (flujo arriba). Mismo flujo hierro ha brecha-pe oiko, mokõi pierna ha brecha casi mismo valor.

## Resultado ohechakuaa

- **Brecha campo** 0,543 T. Mano kálkulo núcleo peteĩ magnético circuito-pe, B = μ0 N I / (g + l / μr), g brecha, l hierro camino largo, μr hierro permeabilidad relativa; 0,552 T. Campo ikatu hembiasy kálkulo-gui flujo rededor brecha (fringing) ha ventana-pe atajo (leakage). Brecha ikatu iti térã malla fino, ambos ojekoranduhágui.
- **Inductancia** 100-vuelta bobina 0,154 H metro profundidad-pe, campo energía-gui. Circuito fórmula iti (0,110 H/m) brecha-pe flujo rehe ndaiporãi, brecha pasa flujo ndojehecha'ỹ.
- **Tracción** brecha ojapo B² w / (2 μ0) w brecha cara ancho: 2300 N metro-pe, 117 N imán 50 mm profundidad-pe.
- **Pico** 1,97 T ventana-pe mboyve, flujo ojavira. Modelo hierro lineal ojapo; electroacero 1,5–2 T rupi saturación, upéva rire valor advertencia, ndaha'éi respuesta.

:::note
Biblioteca prueba ejemplo ojapo ha brecha campo magnético-circuito fórmula rehe ojeikuaa cada cambio PartCraft-pe. Método, referencia ha ambue prueba (solenoide largo, hierro solenoide) `magnetostatic2d` cabecera-pe: biblioteca-pe clic.
:::

## Diseño ojeity

1. Read-only script rire {{ui:Make a copy}} clic. Kopia pieza-pe guardava.
2. Ñemomi valor ojeity ha {{key:F5}} jevy ojapo. Ojeporava:
   - `g = 0.001;` — brecha mitã: brecha campo mboyve, tracción ha (B²-pe) hembiasy.
   - `mur = 200;` — iporãite núcleo'ỹ: amperio-vuelta hierro-pe heta mba'e.
   - `N = 200;` — mokõi vuelta: mokõi campo, cuatro inductancia.
   - `h = 0.0005;` — malla fino: ojehai iporãve, tiempo cuatro vez.

Cada ojapo canvas ojeity. Script ojapo variable (`Bgap`, `L`, `F`) **Variables** lista-pe oiko ndive suma-kuéra.

## Ndo-pe ojapo ndive modelo

Ejemplo opa ojapo lista mbohapy-gui, peteĩ valor malla cuadrado-pe, ojapo ojehecha'ỹ forma línea recta malla-pe:

- **Hierro oiko:** `iron` verdadero núcleo cuadrado-pe. Ejemplo rectangle-gui ojapo: `frame & ~window & ~gap` ha'e "marco-pe, ventana-pe ndaipóri, brecha-pe ndaipóri".
- **Permeabilidad:** `1 + (mur - 1) * iron` aire-pe 1 ha hierro-pe `mur`. Heta material ojapo valor-pe mismo.
- **Corriente:** `J` corriente densidad amperio metro cuadrado-pe, pantalla-gui ojehecha'ỹ positivo, ndoje negativo. Bobina mokõi lado signo ndaiporãi; ejemplo `J0` kálkulo N I ojapo.

Upéi `r = magnetostatic2d(m, permeability, J)` ojapo. `r.B` cuadrado densidad (mokõi columna, x ha y), `r.Bmag` tamaño, `r.energy` metro energía. `plot(x, y)` línea ojehecha.

Biblioteca metro-pe, vista milímetro-pe, campo ojehecha'ỹ ojapo mil vez mbeguái ojehecha. Ejemplo grilla kopia milímetro-pe ojehechauka (`mm = quadGrid(…)`, upéi `show(field(mm, …))`): ko mokõi línea kopia.

Ojapo ojehai kaja borde ojeikuaa mbohapy rehe, flujo ndojeheja. Caja borde imán 2–3 vez ojapo, campo ojeñenoi'ỹ. Simétrico imán-pe mitã modelo ojapo ikatu: `magnetostatic2d` cabecera ojehai borde condición simetría línea-pe.

## Imán permanente

Mokõiva ejemplo, **Examples** › **Permanent magnet in an iron core: working point, leakage, pull**: núcleo mismo, bobina ndaipóri, izquierda pierna 10 mm rapykue imán, arriba magnetizado. {{key:F5}} ojapo. Ojehai:

```
the magnet works at B = 1.036 T, H = -124 kA/m (on its recoil line B = Br + μ0 μr H)
B in the gap 0.6778 T; the magnetic circuit without leakage 0.9692 T (-30.1 %)
leakage factor 1.53: of the flux leaving the magnet, 65 % crosses the gap between the pole faces
pull across the gap about 3656 N per metre of depth (182.8 N for 50 mm deep)
```

- **Punto de trabajo.** Imán **remanencia** Br (hierro-pe cortocircuito campo: sinterizado NdFeB imán 1,2 T, ferrita 0,4 T) ha recoil permeabilidad (1,05 ha 1,1). Brecha ojapo imán recoil línea-pe ojeguejy: 1,04 T, H B-pe ojehupyty.
- **Fuga.** Kálkulo fuga'ỹ 0,97 T brecha-pe; modelo 0,68 T. Imán flujo fuerte empuje corto largo-pe, heta ventana-pe ojevy'ỹ brecha ndive. Fuga factor ojehechauka: 1,53. `g = 0;` ojapo cerrado núcleo: imán kálkulo ndive mitã por ciento-pe.
- **Imán propio modelo-pe.** `magnetostatic2d` imán `struct('Br', Br)` ome'ẽ, `Br` cuadrado fila-pe remanencia x ha y tesla-pe (imán ndaipóri cero), imán cuadrado recoil permeabilidad permeabilidad lista-pe:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T upward in the squares where mag is true
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Ángulo imán-pe `Br·cos(angle)` ha `Br·sin(angle)` mokõi columna-pe; anillo imán afuera-pe magnetizado, cada cuadrado posición-gui dirección kálkulo. `r.H` cuadrado H campo intensidad ojehechauka.

Modelo imán recoil línea recta-pe oiko, fuerza omanóva. Imán real, brecha guasu, bobina fuerte térã calor-pe, fuerza parte ojerasa; punto de trabajo fabricante curva ndive grado temperatura-pe ojekoranduhágui.

Biblioteca prueba imán mokõi kálkulo ndive: aire abierto redondo imán (adentro B = Br / (1 + μr)) ha hierro retén ndive (magnético circuito), 1 % rupi.

## Ndojapo'ỹ ko'ágã

- **Saturación.** Hierro lineal: corriente mokõi, campo mokõi, límite ndaipóri.
- **Desimantación.** Imán recta recoil línea-pe oiko (ko'ápe).
- **Corriente remolino** ha **pérdidas** (hierro pérdida, cobre pérdida).
- **Movimiento ha par.** Estator-pe rotor ndojeguejy'ỹ, ángulo rehe par ndaipóri.
- **Redondo forma.** Malla cuadrado igual, curva contorno escalonado.
- **3-D.** Opa largo ojehecha'ỹ cruce sección.

Motor diseño (rotor ojeguejy, 2-D-pe par ha pérdida) upe versión-pe ojehecha'ỹ. Ver [Ndojapo'ỹ áño](topic:not-built-yet).
