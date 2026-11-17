---
title: Lista de piezas, vistas explosionadas y piezas móviles
summary: Pieza ohechauka numero, descripción ha material conjunto-pe; eñembyaty lista de materiales ha descargá; vista explosionada pasos ndive térã automáticamente ojapo; piezas ndaipurihavéva mano-pe muévi; límites de unión ajustá; conjunto STL, 3MF térã lista de materiales-pe exportá.
keywords: lista de materiales, bom, número de pieza, material, densidad, csv, vista explosionada, explosionar, colapsar, líneas de trayectoria, mover pieza, arrastrar, gizmo, trasladar, girar, límites de unión, exportación de conjunto, paso de conjunto, plano de conjunto, globos
from: ebc9f6f3
---

Ko herramienta oĩ panel derecho-pe conjunto-pe (ver [Ensamblá con uniones](topic:build-assembly)).

## Propiedades de pieza

Elegí pieza lista izquierda-pe. **Propiedades de pieza** rupi ajustá:

- **Número de pieza** (40 caracter peve) ha **Descripción** (200 peve).
- **Material**: material común densidad ndive, térã **Densidad personalizada…** g/cm³-pe escribí haguã. Upérõ panel ohechauka pieza masa.

Propiedades pieza-pe oĩ, upévare cada copia ojoavape. Ojeñongatu conjunto archivo-pe.

## Lista de materiales

Ndaipóri nada elegido ({{key:Esc}}), panel ohechauka **Lista de materiales**: pieza cada fila-pe, número de ítem, cantidad (cuántas copia), número de pieza, nombre, material ha masa cada uno. Número de ítem ohechakuaa umi pieza lista-pe primero ojehechahápe. Masa ojepuru pieza volumen (malla sólido facetado, redondo piezas-pe iti'ỹ) ha material; material ndoguerekóiva ndoguerekóiva masa, ha upérõ total ndoiko.

{{ui:Descargar CSV}} lista CSV archivo-pe ohenduka (térã **Exportar › Lista de materiales (CSV)**). Planilla ojeporúva ojeporu porã; = térã + ohóva apóstrofe ha'e, planilla ndoejecutáí fórmula-pe.

## Vistas explosionadas

Vista explosionada piezas apartá ohechauka imágenes haguã. Uniones térã piezas verdadero lugar ndojejapói: guardar, verificación de choques ha exportaciones posición real ojepurúva.

1. Ndaipóri nada elegido, elegí {{ui:Nueva vista}} **Vistas explosionadas**-pe.
2. **Agregar un paso**-pe, marcá paso ojemovéva piezas, elegí **Dirección** (+X … −Z, eleccionado cara normal térã **Arrastrá una flecha en la vista**) ha **Distancia**, upe rire {{ui:Agregar paso}}. **Arrastrar**-pe, flecha arrastrá ha suelta: paso arrastrado dirección ha distancia ojeporuka.
3. Heta paso agregá. Ojehechakuaa umi peteĩ peteĩ rire.
4. Control deslizante **Ensamblado** ha **Explosionado** rapesa ojehechakuaa vista animación haguã. Trazos punteados rejee pieza posición descanso-gui oĩha ko'ágã oĩhápe.

{{ui:Auto (radial)}} pieza tuichave ndaipurihavéva conjunto medio-gui moñe'ẽ. {{ui:Auto (uniones)}} unión ojoavape pieza (umi pieza ijuntaha upérõ) unión cara normal-pe mboyve. Heta vista nombrada guardá ikatu; **Vista**-pe elegí, térã **Ensamblado** pieza jevarã. Vistas conjunto archivo-pe oñeñongatu.

## Mover pieza mano-pe

Pieza unión ndoguerekóiva pieza anclada-gui ndojevy mano-pe (pieza anclada ndojejúi; uniones ótra pieza ombohasa). Elegí ha **Mover a mano**-pe:

- Escribí **ΔX, ΔY, ΔZ** ha elegí {{ui:Trasladar}}, térã eje eleccionar ha **Ángulo** ha {{ui:Girar}} (pieza medio rehe).
- {{ui:Arrastrar para mover}} flecha pieza-pe ohechauka: flecha arrastrá eje rehe ojeho haguã, térã cuadrado plano rehe. {{ui:Arrastrar para girar}} anillo ohechauka pieza jejapo haguã. Cada arrastre oiko un paso de {{ui:Deshacer}}. {{key:Esc}} flecha ocultá.

## Límites de unión

Unión ojemoveva elegí ha **Límites**-pe marcá **Mantener … entre límites** valor cualquiera-pe, upe rire **Mínimo** ha **Máximo** ajustá. Cada valor ipropio límite-pe oĩ, control deslizante ko rango ojehasa, ha **Verificar el movimiento por choques** upe límite-pe anduva. Unión cilíndrica ángulo, desplazamiento térã ambos límite ikatu. Unión tipo ojambiáramo, tipo nuevo ndoguerekóiva valor límite omboguejýta.

## Exportar conjunto entero

Conjunto-pe **Exportar** menú oikuaa conjunto entero pieza tuichave ojehechaháme:

- **STEP AP242 / AP214** ha **Plano (PDF)** esta versión-pe ndojejapói: sólido exacto ojerure, grisado oĩ. Pieza STEP (sólido exacto) pieza-gui exportá.
- **STL**: malla peteĩ umi pieza. **3MF**: pieza peteĩ, copia cada una ojehechaháme.
- **Lista de materiales (CSV)**.

## Límites

- Plano de conjunto ha STEP de conjunto ndojejapóiva esta versión-pe (sólido exacto ojerure). Vistas explosionadas pantalla-pe imágenes haguã.
