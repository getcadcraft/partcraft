---
title: Mover piezas hacia y desde otros modeladores de piezas
summary: Ehasa peteĩ pieza ambue modelador-pe macro rupive, ojapo ojeporakuaa feature tree-ndive. STEP con nombre ha ábrese lista de funciones ambue modelador ojapo ndaipóri ko versión-pe.
keywords: macro, no construido, swb, vba, árbol de funciones, ida y vuelta, exportar macro, cadcraft-sw.json, step con nombre, ap214, variables globales, ecuaciones, pieza nativa
from: 97ca61da
---

PartCraft SolidWorks-gui oñemboguejy dos camino, archivo formato ambue ndaikuaáiva ndive:

- **Hasýva:** macro (`.swb`, texto llano) SolidWorks oñemboguejy pieza ojapo mbohapy función, boceto, relación, cota, variable global ha ecuaciones ndive. Pieza nativa árbol de funciones vivo ndive oiko, sólido muerto ndaha'éi.
- **Ojevýva:** SolidWorks ndive macro ejecuta función ha pieza ecuaciones `.cadcraft-sw.json` archivo-pe ojapo. Ko archivo PartCraft-pe ábrese ko versión-pe ndaipóri (kernel exacto oikotevẽ).

:::warning
Ko'ã mbaʼe SolidWorks-pe ndojapykuaái. SolidWorks Windows-pe ojapo licencia ndive oikóva, PartCraft ndojapo kóva SolidWorks-pe. Macro API documentación rupi ojapo, estructura ndojehechakuaáiva. Problema ohechauka oikotevẽ; macro registro ohechauka mba'e paso ndojapóiva.
:::

PartCraft ndaikatúi `.sldprt` archivo ojapo: formato cerrado. Macro pieza nativa ojerrekuaa ha.

## Ehasa pieza macro rupive

1. Pieza ábrese.
2. Eiporu {{ui:Export}}, upéi {{ui:Macro for SolidWorks (.swb)}}. PartCraft oñemboguejy `<part>.swb`; barra de estado ohai "written without the exact kernel".
3. Diálogo ohechauka mbohapy función, variable global ha ecuación macro-pe ojapo, ha mba'e ndojeporaka. STEP ko versión-pe ndahasái: eiporu {{ui:Export}}, upéi {{ui:STEP (faceted, mesh kernel)}} ndeikotevẽramo.
4. SolidWorks-pe, eiporu **Tools > Macro > Run**, `.swb` archivo ha eñepytyvõ. Pieza nueva ojapo default pieza plantilla rupi, milímetro ojapo, función entero ojapo.
5. Mboyve mensaje ohai cuántos paso ojapo, cuántos ndojapói ha cuántos PartCraft cuerpo ojeko'ẽ. Registro, `<part> macro log.txt`, macro ryepýpe oñemoĩ.

Macro ojapo:

| PartCraft | Pieza nueva-pe |
|---|---|
| Plano Frontal, Superior o Derecho-pe boceto | Upe plano-pe boceto, líneas, arcos, círculos, puntos, relaciones ha cotas (PartCraft-pe oñemoĩva, `k7` ndive) |
| Cara-pe boceto | Upe mismo cara-pe boceto, punto ojeporakuaa-gui |
| Plano fijo-pe boceto | Plano de referencia mbohapy punto-gui, ha boceto upépe |
| Extrude, corte (ciego, through all, plano medio, mokõi dirección, cónico) | Boss-extrude térã cut-extrude |
| Revolve, revolve corte | Upe eje centro-pe revolve |
| Agujero (simple, avellanado, avellanado cónico, roscado) | Peteĩ térã mokõi corte iboceto ndive (roscado agujero, broca guía; rosca ndaipóri) |
| Patrón lineal ha circular, espejo | Patrón lineal, patrón circular, espejo (funciones térã cuerpo) |
| Redondeo, chaflán, carcasa | Redondeo, chaflán ha carcasa mismo borde ha cara-pe, punto-gui ojeporakuaa |
| Parámetros ha ecuaciones | Variables globales ha ecuaciones cota renombrada-pe |
| Supresión de funciones, barra rollback | Mismo modo suprimido; barra rollback mismo lugar |

Cada sólido función rire, macro cuerpo volumen ha tamaño PartCraft-gui compara. Diferente jave, función dirección peteĩ jey mboyve ojerrovi ha chequea mboyve; ndaiporiri ojerrevértega ha registro-pe "Check" ohai.

### Mba'e ndojeporaka

Diálogo ha macro comienzo ohechauka mba'e ndojeporakáva, razón rehe. Ko versión-pe: sólidos importados (STEP insertá), barridos, lofts, borradores, ejes ha puntos de referencia, "up to" finales, contornos parciales extrude, ha ko'ã ndive ojoaporã. Splines puntos rupi curvas oiko. Kernel exacto ndaipóri, upévare caras-pe boceto ha borde o cara selección ojapo funciones ndojeporakuaa.

## Ehasa STEP con nombre

Ko versión-pe ndaipóri: {{ui:STEP for SolidWorks (named, AP214)}} kernel exacto oikotevẽ, ha ojeporaʼekue "STEP for SolidWorks: not built yet. …". Kernel exacto ndive, archivo pieza nombre, milímetro ha pieza color oguereko, Y arriba-pe ojogueru SolidWorks-icha (STEP AP214 llano {{ui:STEP AP214 (exact solid)}} Z arriba). Acento letra nombre-pe oñeñongatuʼỹ, ASCII ndahaʼeiva ambue caracter `_` oiko.

## Ehasa pieza ojevýva

Archivo PartCraft-pe ábrese (paso 3) ko versión-pe ndaipóri: "Opening a SolidWorks export: not built yet. …". CadCraft dibujo app ábrese archivo ha boceto ojagarra.

1. {{ui:File}} > {{ui:Export}} > {{ui:Export macro to bring parts back (.swb)}} eiporu, `CadCraftExport.swb` oñemboguejy, pieza ryepýpe ejapo.
2. SolidWorks-pe pieza ábrese, **Tools > Macro > Run** ha `CadCraftExport.swb` eiporu. `<part>.cadcraft-sw.json` pieza ryepýpe ojapo, pieza ndojejeaʼỹ.
3. PartCraft-pe {{ui:Open}} eiporu ha upe archivo eiporu, térã 3D vista-pe omoĩ.
4. Kernel exacto ndive, PartCraft pieza función-pe función rekonstruí ha ohechauka mba'e ojapo: por ejemplo "5 of 5 features carried over from SolidWorks (Flange.SLDPRT)", ndojapóva ("Not carried over: Sweep1 (Sweep).") ha volumen SolidWorks-gui oñeme'ẽva oiko.
5. {{ui:Save}} rupive PartCraft pieza-pe ñongatu.

Boceto base plano-pe oĩ jave, ojaporúvo base plano-pe; pieza cara plana jave, upe cara-pe (edición ojeporakuaa); ndaipóri jave plano fijo-pe. Redondeo, chaflán ha carcasa borde ha cara punto-gui ojejuhu, referencia rehegua ojeporaka. Variables globales parámetros-pe oñemoĩ (nombre espacio guión bajo-pe: "Bolt count" `Bolt_count`) ha ecuaciones cota mismo-pe ecuaciones. Ndaipóri adivinanza: ndaipóri ojehupytýva ohechauka.

CadCraft dibujo app archivo ábrese boceto ojagarra.

:::note
Formato `cadcraft-sw-export` versión 1, JSON llano, milímetro ha grado. Macro ambue versión-gui archivo térã ndaporãva ndojeporakuaa, razón ohechauka.
:::
