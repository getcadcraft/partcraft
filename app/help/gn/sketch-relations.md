---
title: Relaciones y cotas de boceto
summary: Cada relación y cota que tiene un boceto de PartCraft, qué seleccionar para cada una, su símbolo y cómo se comporta al resolver.
keywords: relaciones, restricciones, coincidente, horizontal, vertical, paralela, perpendicular, tangente, igual, concéntrica, punto medio, fijar, distancia, distancia horizontal, distancia vertical, radio, diámetro, ángulo, símbolos, glifos
from: 9831e7be
---

Relaciones oñemoĩ mba'éichapa geometría oĩ ambue geometría rehe. Cotas oñemoĩ tamaño. Relación ojapo jave, seleccioná mba'e Seleccionar herramienta ({{key:S}}) rupi ha eiporu botón panel derecho-pe; cota ojapo jave, eiporu Dimension herramienta ({{key:D}}) térã cota botones panel derecho-pe. Mba'éichapa oiporu: [Ajusta boceto completo](topic:relations-dimensions).

"Curva" ko'ápe ohai círculo térã arco. Origen peteĩ punto ojeporakuaa.

## Relaciones

| Botón | Símbolo | Seleccionar | Efecto |
|---|---|---|---|
| {{ui:• Coincident}} | • (ohechauka selección térã problema jave) | Mokõi punto | Punto oñemoĩ |
| {{ui:• Coincident}} | • | Peteĩ punto ha peteĩ línea | Punto oĩ línea-pe (térã iextensión-pe) |
| {{ui:• Coincident}} | • | Peteĩ punto ha peteĩ curva | Punto oĩ círculo térã arco-pe |
| {{ui:H Horizontal}} | H | Peteĩ línea, térã mokõi punto | Línea oĩ horizontal, térã mokõi punto ijyva peteĩ |
| {{ui:V Vertical}} | V | Peteĩ línea, térã mokõi punto | Línea oĩ vertical, térã punto peteĩ ambue ári |
| {{ui:∥ Parallel}} | ∥ | Mokõi línea | Línea mokõi oho peteĩ mbojuehe |
| {{ui:⊥ Perpendicular}} | ⊥ | Mokõi línea | Línea mokõi oñemoĩ ángulo recto-pe |
| {{ui:T Tangent}} | T | Peteĩ línea ha peteĩ curva | Línea curva ojepe ndoñemboguejýi |
| {{ui:T Tangent}} | T | Mokõi curva | Oñepo'i, ruguái térã ndoguái, mba'éichapa ojapóva |
| {{ui:T Tangent}} | T | Peteĩ spline ha peteĩ línea, arco térã spline ojoaporã iñemaño-pe | Spline oho upe ambue curva dirección-pe |
| {{ui:= Equal}} | = | Mokõi línea | Longitud peteĩ |
| {{ui:= Equal}} | = | Mokõi curva | Radio peteĩ |
| {{ui:◎ Concentric}} | ◎ | Mokõi curva | Centro peteĩ |
| {{ui:◎ Concentric}} | ◎ | Peteĩ punto ha peteĩ curva | Punto oĩ curva centro-pe |
| {{ui:M Midpoint}} | M | Peteĩ punto ha peteĩ línea | Punto oĩ línea mboyruguáre |
| {{ui:↔ Symmetric}} | ↔ | Mokõi punto ha peteĩ línea | Punto oĩ espejo ojoaporã línea rehe (Mirror ojapo ko'ãva) |
| {{ui:⚓ Fix}} | ⚓ | Peteĩ punto, peteĩ línea, peteĩ curva térã peteĩ spline | Oñemoĩ hi'ã ko'ágã (spline-pe: iñe'ẽ punto) |

Líneas ko'ápe oguereko eje líneas. Dibujo jave oiporu relaciones ndéve: punto snap-pe oĩ coincidente, curva snap-pe punto oĩ upéi, mbovy horizontal térã vertical línea H térã V oguereko, ha rectángulo mbohapy esquina ojoaporã, mokõi H ha mokõi V.

**Fix** peteĩ jeporu mba'e nomoĩmi, ha pieza ndokokuaái cota cambio. Cota origen-pe mboyve.

## Cotas

| Botón | Seleccionar | Mide | Ohechauka |
|---|---|---|---|
| {{ui:Distance}} | Peteĩ línea | Iñe'ẽ longitud | Distancia 40 |
| {{ui:Distance}} | Mokõi punto | Distancia recta mokõi aja | Distancia 40 |
| {{ui:Distance}} | Peteĩ punto ha peteĩ línea | Distancia punto-gui línea-pe, ángulo recto | Distancia 40 |
| {{ui:Distance}} | Mokõi línea paralela | Espacio mokõi aja | Distancia 40 |
| {{ui:Horizontal distance}} | Mokõi punto térã peteĩ línea | Izquierda-derecha distancia nomás | Distancia horizontal 40 |
| {{ui:Vertical distance}} | Mokõi punto térã peteĩ línea | Arriba-abajo distancia nomás | Distancia vertical 40 |
| {{ui:Radius}} | Peteĩ círculo térã arco | Iradio | Radio R10 |
| {{ui:Diameter}} | Peteĩ círculo térã arco | Idiámetro | Diámetro ⌀20 |
| {{ui:Angle}} | Mokõi línea ndaparalelaiva | Ángulo mokõi jehe, 0 gui 180 grado | Ángulo 30° |

Cota herramienta oiporu jave, PartCraft oñeporavo mba'épa ejapo clic ha mba'épa eremoĩ número:

| Ejapo clic | Oguerohory |
|---|---|
| Peteĩ línea | Longitud; línea oblicua jave horizontal número ruguáre térã ambuépe ha vertical lado-pe |
| Peteĩ círculo | Diámetro |
| Peteĩ arco | Radio |
| Mokõi punto | Distancia; horizontal térã vertical línea oblicua ndahaʼeiháicha |
| Peteĩ punto ha peteĩ línea | Distancia punto-gui línea-pe |
| Mokõi línea | Ángulo, térã distancia paralela jave |
| Peteĩ punto ha peteĩ círculo | Ndaipóri: "No se pueden acotar estos elementos juntos." Círculo centro punto-pe cota ejapo |

**Offset** (ohechauka distancia ramo) Desplazar herramienta ojapo: peteĩ línea kopia ojoaporã paralela upe distancia-pe, térã arco o círculo kopia concéntrica radio hasta upe tamaño-pe guasúva térã mbyky. Ambue offset pedazo **O** relación oguereko ha peteĩ Offset cota ojeheka. Eñehesa [Splines, recorte, desplazamiento ha otras herramientas](topic:sketch-tools).

Cota valores milímetro (térã grado), ndaha'éi negativo. Radio ha diámetro ojehu cero guasúva. Distancia 0 oikoukáva: mokõi punto 0 aja ojoaporã.

## Mba'éichapa solver oiko

- **Menor movimiento.** Valor cambia jave, solver geometría ojemoambue mbykyve. Longitud cambia línea oñemoĩ mokõi punta-pe, ndaipóri ambue oñemoĩ jave.
- **Ndojevýi lado.** Punto-gui línea distancia, horizontal ha vertical distancia, ángulo ha tangencia oñemanduʼa lado oñemoĩva. Valor cambia jave, geometría ndojejeyhái ambue lado-pe.
- **Conflicto oikyhyje.** Relaciones oñembotuicháramo, boceto oikoveha upéicha, relación conflicto pytã-pe ohechauka.
- **Relación redundante** (ambue relación ohechaukáva) barra de estado-pe oñemombe'u ("is already implied. Delete it.") ha función oñemoĩ aviso-ndive.
- **Juntas tangentes.** Redondeo arco oñemoĩ línea ojoaporã punto final-pe, tangencia oñemoĩ mba'eichapa ojapo porã, upévare boceto redondeo ndoñemoĩvéi "sobredefinido".

## Ndaikatúi ko'ágã

Collinear, coradial ha pierce relaciones; punto spline-pe; cota referencia (driven); cota ordenada ha longitud de arco; ecuaciones entre cotas. Collinear línea-pe oiporu Parallel ha 0 distancia.
