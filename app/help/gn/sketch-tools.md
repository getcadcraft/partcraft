---
title: Splines, recorte, desplazamiento y otras herramientas de boceto
summary: Ejapo splines de puntos de ajuste y de puntos de control, recortá y extendé curvas, desplazá una cadena, reflejá respecto a una línea de eje, agregá polígonos y ranuras, hacé patrones de geometría de boceto y proyectá aristas del modelo.
keywords: spline, punto de ajuste, punto de control, b-spline, nurbs, curva, recortar, extender, desplazar, espejo, simétrica, polígono, hexágono, ranura, patrón, patrón lineal, patrón circular, proyectar, proyectar arista, incluir, convertir entidades
from: 3ecb166a
---

Esta herramientas oĩ boceto abierto-pe. {{ui:Spline}} ha {{ui:Trim}} barra-pe oĩ. Ambue oĩ {{ui:More}} rupi boceto herramientas ropapýpe. Herramienta peteĩteĩ peteĩ undo ha {{key:Esc}} omano. Herramienta básica: [Ejapo ne primer boceto](topic:sketch-basics).

## Splines

Spline peteĩ curva ndoporiva. Mokõi kuatiañe oĩ.

| Herramienta | Tecla | Mba'éichapa ejapo |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | Ejapo clic puntos curva ojapo rupi. Eñeʼẽ {{key:Enter}}, {{key:Esc}}, clic derecho térã doble clic. Clic primer punto-pe ojuehe spline ojoaporã |
| {{ui:Control-point spline}} ({{ui:More}} rupi) | | Ejapo clic puntos de control. Curva oñemboʼypy hikuéicha, ha ojapyhy hembiapo primer ha último punto-pe. Línea punteada control polígono ohechauka dibujo jave ha upe rire |

- **Punto oĩ boceto punto.** Arrastrá, térã ome'ẽ relación ha cota ambue punto-icha. Spline primer punto ikatu snap línea punta-pe, upévare coincidente relación ojoaporã.
- **Tangente punta-pe.** Seleccioná línea, arco térã spline oĩva spline peteĩ punta-pe, upéi spline, upéi eiporu {{ui:T Tangent}}. Spline punta dirección línea-gui ojerrepite. Tangencia spline punta-gui hoʼi ndaikatúi: "A tangent to a spline needs the line, arc or spline to meet one end of it."
- **Puntas.** Tangente relación ndaipóri jave, punto de ajuste spline puntas natural (curvatura nomba'apóva puntadero-pe). Curva cúbica ha ojapo ojapo puntos rupi, espacio puntos distancia rupive.
- **Splines cerrados** peteĩ perfil ojapo ijeho. Splines abiertos línea arco ojoaporã bucle cerrado-pe.
- Spline ryepýpe punto eliminaʼỹre punto ojeheʼẽ ha spline ojeikuaaʼỹ, peteĩ ambue ha'e (mokõi punto oĩ ramo, mbohapy cerrado jave).

Extrude ha revolve spline ojapo mesh kernel rupive pedacitos recto rupive (curva verdadera kernel exacto oñeikotevẽ: ko versión-pe ndaipóri). DXF exportación spline polilínea-pe ojapo, 0,01 mm ryepýpe curva-gui, DXF R12-pe spline entidad ndaipóri.

## Recortar ha extender

| Herramienta | Tecla | Mba'éichapa |
|---|---|---|
| {{ui:Trim}} | {{key:T}} | Punto curva-pe: mba'e ojehuséva ohechauka pytã-pe, cruce peve. Clic omboguejy. Cruce ndaiporãiva ohupytýva entero omboguejy |
| {{ui:Extend}} ({{ui:More}} rupi) | {{key:E}} | Ejapo clic línea térã arco punta ári extender-pe. Ohupi próximo curva ohupýva. "There is nothing for that end to reach." ohecha ndaipóri mba'e ojeitýva |

Trim ha Extend línea, arco, círculo ha spline-pe oñembotrabaja (Extend: línea ha arco).

- Recortado **círculo** arco oiko. Radio térã diámetro cota arco-pe oñemoĩ.
- Línea medio recortado mokõi línea oiko, mokõi aja peteĩ línea recta-pe. Arco medio recortado mokõi arco oiko, centro peteĩ ha igual relación.
- Recortado **spline** control-point spline oiko, curva vieja-gui exactamente. Punta tangente relación oñeguerojy jave, oĩ.
- Punta nuevo oñemoĩ cortó curva-pe (línea, arco térã círculo-pe, térã punta ojoaporã). Spline ndoguerekóiva punto, upévare spline cortó jave relación ndoñemoĩ.

**Relaciones ndaporãiva ojeheʼẽ**, ha barra de estado ohechauka cuánto. Por ejemplo, línea recortado longitud cota oñeheʼẽ, pero horizontal térã paralela relación oĩ.

## Desplazar

1. Eiporu {{ui:Offset}} {{ui:More}} rupi térã eprema {{key:O}}.
2. Ejapo clic línea, arco, círculo térã spline. Cadena entero ohechauka: curvas ojoaporã peteĩ peteĩ punta-pe, mbohapy térã más ojoaporã punto peve. Cadena mboyruguái desplazar jave, seleccioná curva kóicha primero, upéi eiporu Offset ha clic peteĩ rehe.
3. Pointer emoambue kopia oho lado-pe. Caja punteada ojogueru. Eprema {{key:B}} ambos lado-pe.
4. Clic, eme'ẽ distancia, eprema {{key:Enter}}.

Línea ha arco exactamente desplazados. Esquinas extendidas térã recortadas oñemboguejy peve. Kopia peteĩ **Offset** cota oguereko, ambue pieza ojeporaka: doble clic cota oñemoambue entero kopia. Distancia cadena-pe ndaikatúi: por ejemplo "That distance is too big for this chain: a side would turn inside out."

**Spline** desplazado punto de ajuste spline 0,001 mm ryepýpe curva verdadero desplazamiento-gui. Kopia ko'ágã oĩ hi'ã: ndojegueruʼái ambue cambio, ha ndoguerekói Offset cota. Cadena spline-pe puntas tangente (liso) ojoaporã oikotevẽ.

## Espejo

1. Seleccionar rupi, eiporu mba'e reflejar.
2. Eiporu {{ui:Mirror}} {{ui:More}} rupi térã eprema {{key:M}}.
3. Ejapo clic línea térã línea de eje reflejar rehe.

Punto reflejado peteĩ **Symmetric** relación oguereko ijuehe, upévare kopia ojeporaka original cambio jave. Punto línea espejo ári oĩ ojeporakuaa, espejo círculo Equal relación oguereko. Ndaipóri seleccionado jave, ejapo clic mba'e reflejar-pe, eprema {{key:Enter}}, upéi clic línea espejo-pe.

## Polígonos y ranuras

| Herramienta | Mba'éichapa |
|---|---|
| {{ui:Polygon}} | Ejapo clic centro, upéi esquina, upéi eme'ẽ lados número (3 gui 64). Lados igual, esquinas oĩ círculo construcción-pe. Polígono tamaño círculo cota rupi |
| {{ui:Slot}} | Ejapo clic peteĩ punta centro, upéi ambue punta centro, upéi clic ancho ajustáramo. Mokõi línea, tangentes mokõi igual medio círculo-pe |

## Patrones de boceto

Geometría primero seleccioná, upéi:

- {{ui:Linear pattern}}: ejapo clic comienzo punto, upéi kopia primera ha'e, upéi eme'ẽ kopia número (original incluido).
- {{ui:Circular pattern}}: ejapo clic centro, upéi eme'ẽ kopia número, parejo peteĩ vuelta entera.

Kopia oguerekoha seleccionado geometría ndive relación (círculo patrón horizontal ha vertical ndaiporiva). Kopia ndoñemboguejýi original-gui: peteĩ cambia, ambue oĩ kóicha.

## Proyectar aristas de la pieza

1. Eiporu {{ui:Project edge}} {{ui:More}} rupi.
2. Ejapo clic borde recto térã circular pieza boceto atrás.

Borde boceto plano-pe exactamente kopia ha fijo (Fix relación). Pieza cambio ndojegueruʼái. Eprema {{key:Q}} construcción geometría-pe ojapo. Círculo boceto plano-pe inclinado elipse-pe ojapo, upévare ndaipóri. Ndoipóri forma libre borde ha boceto-gui straight apunta borde. Proyección kernel exacto oñeikotevẽ: ko versión-pe ndaipóri.
