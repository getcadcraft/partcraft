---
title: Abrir archivo STEP ha ojapo ipype
summary: Eru proveedor térã ambue CAD programa-gui STEP modelo PartCraft-pe sólido cuerpo-pe, pieza pyahu térã oĩva-pe ojoapy, dirección arriba fijá, bocetos ha funciones ojoapy.
keywords: step, stp, importar, abrir step, ap203, ap214, ap242, modelo de proveedor, sólido mudo, sólido importado, eje arriba, z arriba, y arriba, triángulos, facetado, paso de conjunto
from: ca0eca5f
---

PartCraft STEP archivo (`.step` térã `.stp`, AP203, AP214 ha AP242) **sólido cuerpo** ramo ojeabre, boceto ojapo, corte, perforar ha ojoapy funciones ndive. Cuerpo ndaiporiva historial ipype: ndaikatúi ojemudá ojapova dimensiones, ojoapy térã ojepe'ẽ nomás.

Ko versión malla núcleo ojapo pieza opavave, upévo STEP archivo **triángulos ramo oñeléi**: caras planas planas oĩ, caras curvas (cilindros, conos, esferas, toros, B-spline superficies) plano pequeño hetave pyahu. Volumen exacto fracción por ciento-pe. Caras curvas exacta oikotevẽ núcleo exacto, ndaipóri ko versión-pe.

## STEP archivo abrir

1. {{ui:Open}} térã {{key:Mod+O}} eporavo, `.step` térã `.stp` archivo eporavo. Térã 3D vista-pe ejerrojo.
2. PartCraft archivo lee ha ohechauka oheka: por ejemplo: "AP214 archivo: 1 sólido, 10 caras, triángulos ramo leído." Abajo triángulos cantidad, omboykéva térã ojoapyva, resultado cerrado térã ndaikatúi.
3. **Arriba archivo-pe** marcá. STEP archivo unidad (milímetros, pulgadas, metros…) ipype; PartCraft milímetros-pe ombohasa, upévo **Unidades archivo-pe** Milímetros ohechauka, "archivo heʼi". **Tamaño aquí** ohechauka tuicha.
4. {{ui:Open as a body}} vacía pieza-pe térã {{ui:Add to this part}} / {{ui:New part}} pieza funciones rire. Agregar ojapo pregunta **Usar para** ojapo: agregar, cortar térã superposición nomás.

**Imported1** función historia-pe ohechaukáva, status bar: "plate.step peteĩ sólido cuerpo: 57995.937 mm³, 6 caras planas boceto-pe."

## STEP conjunto

Conjunto peteĩ **cuerpo** ramo oike, pieza opavave archivo-pe ohupytýva ("archivo-pe ubicadas 3 pieza ojeikóva ohupytýta ha'e"). Pieza jejópe jeýpe oike. Pieza nombres ha conjunto árbol ndojeipapái.

## Arriba-pe ha'e

CAD programas-kuéra Z arriba ojeporu; PartCraft Y arriba. PartCraft archivo gira Z arriba-pe ohupytýva. Pieza ohupytýva ojapo rire, **Imported1** eporavo ha **Arriba archivo-pe** **Y arriba**-pe omoĩ. **Unidades archivo-pe** ha **Usar para** avei upéi cambiá; cada cambio peteĩ deshacer paso.

## Ipype ojapo

- Cuerpo peteĩ plano cara eporavo ha {{ui:Sketch on this face}}. STEP modelo caras planas lugar oguerekóva cuerpo rebuild rire.
- Corte, agujero, resalto, patrón ha espejo ambue pieza-pe ojapo.
- **Pieza** cuadro-pe tamaño: volumen, superficie área, tamaño.

Redondeo, chaflán ha vaciado exacto núcleo ojeikotevẽ, ambue pieza ko versión-pe ([Malla núcleo](topic:solid-kernels)).

## Mba'épe ojeguarda

Triángulos `.partcraft.json` archivo **adentro** ojeguarda: pieza archivo oguereko opavave, STEP archivo ndojeikotevẽ jey.

## Mensajes

| Mensaje | Mba'épe oúva |
|---|---|
| '"part.stp" ndaha'éi STEP archivo (ISO-10303-21 ndoñepyrũi).' | Archivo ndaha'éi STEP texto llano. Remitente-gui AP203, AP214 térã AP242 STEP archivo oporandu |
| "STEP archivo ndojeleíri: datos sección ndoiko térã ojejapo." | Archivo ojepe'ẽ térã ojejapo. Copia jey |
| "STEP archivo sólido térã superficie cuerpo ndoiko: ndaipóri ojeikotevẽva." | Archivo dibujo, punto térã datos nomás. Sólido oporandu |
| "Ko STEP archivo tuicha (60 MB peve) ko'ápe ndojeikeíri." ha lector ambue límite (entradas, caras, triángulos) | Modelo origen-pe simplifica, térã pieza peteĩ peteĩ ombohasa |
| "… archivo dañado líneas omboykérã." | Línea-kuéra ndojeleíri; ambue oike. Cuerpo ojekuaa |
| "… caras triángulo-pe ndojapóri ha omboykérã." | Upe caras yvypóra ojapo; PartCraft mboyve ojepe'ẽ; cuerpo ndocierrái, ndojeikéi |
| "… ndojeleíva tipo caras (…) omboykérã." | Superficie tipo rarovéva. Plana térã B-spline superficie modelo oporandu |
| "Ndocierra …" | Caras sólido cerrado ndojapói (superficie modelo térã caras omboykérã). PartCraft abertura ohechauka ha ndoikéi |

## Límites

- Caras curvas plano facetas-pe ojehechaha ha medidas, ko versión pieza opavave-pe. PartCraft archivo caras planas, cilindros, conos, esferas ha toros cuerpo-pe oguereko, upévo {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} superficies verdaderas-pe ohenói, agujeros agujero-pe, nde funciones ndive. Archivo splines, barridos térã revolución superficies facetas-pe exportación-pe oĩ. 0.9.1 ma-gui oguardava pieza superficies ndoguerekói: STEP archivo jey ombohasa.
- {{ui:Export}} › {{ui:DXF of the sketch or flat face}} plana cara eporavo DXF-pe archivo redondo agujero verdadero círculo-pe ohenói.
- Colores, cuerpo nombres, conjunto estructura ha PMI (archivo tolerancias) ndojeleíri.
- STEP ndive, PartCraft STL, OBJ ha 3MF malla ([Abrir STL, OBJ térã 3MF](topic:open-meshes)) ha `.3dm` archivo ([Abrir .3dm modelo](topic:open-3dm-files)) sólido cuerpo-pe ojeabre. IGES ha ambue programa ojehai archivo ndojeporúi.
- Build exacto núcleo-gui STEP sólido ojeguerekóva pieza STEP texto ombosaraíva; ko versión función ndojeporúi ("ndojapói"). STEP archivo jey ojeabre triángulo-pe ombohasa.
