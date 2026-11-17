---
title: Anidar piezas planas en hojas
summary: Omoĩ pieza planas placa térã rollo ári, ojeaprovecha material ndaipóri ojeʼỹ, ha ojeʼỹmbaʼe espaciado emoʼẽva; ha ojeñongatu diseño DXF-pe láser, plasma, waterjet térã router-pe.
keywords: anidado, anidar, hoja, placa, rollo, láser, plasma, waterjet, router, corte, aprovechamiento, uso de material, desperdicio, sobra, espaciado, ancho de corte, grano, dirección de laminado, dxf, patrón plano, contornos
from: 8dcce1a6
---

**Anidado** omoĩ hetaiterei pieza planas hoja ári, upéicha ndaipóri heta material ojeʼỹ. PartCraft omoĩ pieza peteĩ-peteĩ, ojehecha mbohapy... ojehechakuaa tenda ohupytýva upe hoja-pe oiko'ẽ ... ha ojapo ojehecha hetaiterei ruguãi ha peteĩ-mokõi segundo-pe, ha oñeñangareko upe iporãvéva. Pieza ikatu oĩ ambue pieza-pe ojeporúva hueco-pe, ha L térã U-pe mboʼy ári.

## Abrir

- {{ui:Export}} › {{ui:Nest flat parts on sheets…}} oñemboguejy, ojapo pieza ojeporúva patrón plano-pe, térã —conjunto-pe— opa chapa metálica pieza ojeporúva patrón plano-pe, mbohapy copia oguereko ramo.
- Chapa metálica pieza-pe, emoĩ {{ui:Lay flat}} ha upéi {{ui:Nest on sheets…}} patrón plano ári.
- {{ui:Add outlines from a DXF…}} omoĩ opa contorno cerrado DXF archivo-pe peteĩ pieza-háicha: plano CadCraft-gui DXF-pe guardado térã archivo cortadora-pe ojapova. Contorno ambue contorno rehe oĩ hueco-háicha. Línea ha arco oĩva punta-pe peteĩ contorno-háicha. Archivo pulgada, centímetro térã metro-pe oñemoambue milímetro-pe.

:::note
Chapa metálica planchada ojapo kuri kernel exacto-pe (ehecha [Chapa metálica](topic:sheet-metal)). Contorno DXF archivo-gui ojeporu kuri ndaipóri mbaʼe mbaʼerechápe.
:::

## Ajuste

Pieza peteĩ-peteĩ emoĩ **cuántas** eʼỹva ha iĝrano: {{ui:Any direction}}, {{ui:Along the sheet (as drawn)}} chapa cepillada térã laminada oho peteĩ ñeʼẽ-pe, térã {{ui:Across the sheet}}.

Ári **Hojas**:

- **Stock**: {{ui:Plates}} tuichave ha ancho (ha mbohapy oguereko; 0 = oĩ ojeporúvape), térã {{ui:A roll}} ancho ojeporúva, tuichave ojeikóvare.
- **Margen de borde** oñemboguejy opa borde hoja ári (mbohapy térã borde hyrũ-pe).
- **Espacio entre piezas** ha'e mboyve punto corte línea mokõi-pe: menos ancho de corte cortadora-pe, ha material ojeporúva.
- **Vueltas**: ángulo pieza ikatu ojevueltáva, 90° peteĩ-peteĩ ojehechakuaa. Vuelta mboyve ojapo mbegue; hetaiterei ojeporu iporãvéva hoja.
- **Pieza ikatu ojevuelta** ojapo pieza ojeʼõ kuri ojere. Ko'ẽrõ chapa metálica-pe ndaipóri: patrón plano ojevuelta ojapo ambue ládo-pe okorva.

Emboguejy {{ui:Nest}}. Vista previa ojehecha opa hoja; datos ohecha mbohapy placa (térã mbaʼépa rollo ojeporu) ha material mboyve oñemoĩva pieza-pe. Mbaʼe ndohupytýi ojeʼe.

## Guardar

{{ui:Save DXF}} ojapo diseño DXF-pe (R12, milímetro), hoja peteĩ-peteĩ ambue rire: hojápe contorno capa SHEET-pe, pieza capa PARTS-pe (arco arco-háicha), ha pieza-pe héra capa LABELS-pe.

:::tip
Pieza hetaiterei ojapo mbegue peteĩ-peteĩ hetaiterei kópe: ti'ũ pieza ojapo espacio tuichave-kuéra ryepýpe.
:::

## Cortar las hojas (G-code)

**Export › Nested sheets to G-code** oheka DXF anidado (ko'ã térã complemento Cabinets-pe hojas CadCraft-pe) ha ojapo peteĩ programa hoja peteĩ-peteĩ-pe post ojeporúva ... Ojapo agujero ha corte interno primero, upéi contorno; herramienta radio ohóva pieza ári, hoja rupi ha 1 mm más. Pestañas ojeporu ojeikóramo. Post lista oguereko ojehechaukáva ha estudio Manufacture ndaʼéi ojapova. Peteĩ-peteĩ programa simulador-pe emboʼe mboyve; taladro ha bolsillo ndaʼéi ojapo.

## Qué revisar

PartCraft oheka peteĩ-peteĩ anidado forma verdadera-pe (ndaha'éi grilla oheka vove): ndaipóri pieza espacio-gui ipukúva, ha ndaipóri mbaʼe margen-pe. Ndaʼéi ojapo corte-ndive: entrada, orden de corte, borde compartido corte peteĩ jey, ha sobra hoja ñongatu ha'e nde cortadora-pe ojapova. Emboʼe DXF upépe antes ojeʼe.
