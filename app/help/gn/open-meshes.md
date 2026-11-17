---
title: Abrir STL, OBJ térã 3MF cuerpo sólido-pe
summary: Emoambue malla escáner, 3D imprimí sitio térã ambue programa-gui sólido-pe peñemboguatáva, peñemoĩvéva ha peñebosquejáva; máva PartCraft ombohasa ha máva ndohasái.
keywords: stl, obj, 3mf, malla, malla a sólido, convertir malla, escaneo, hermético, reparar, agujero, brecha, unidad, eje arriba, cuerpo importado, caras planas
from: 7b948471
---

PartCraft ojepe'a STL, OBJ ha 3MF malla-kuéra **cuerpo sólido**-pe. Cuerpo ojapo sólido ambue haguéicha: peñemboguata, peñemoĩ, peñeperfora, peñepatrón, peñeporu ensamble-pe térã mecanizado-pe ha pebosqueja hemiguáicha cara plano-kuéra. Hembiapo historia propio ndaipóri: malla ha'e triángulo añónte, upévare tamaño ndojejapomíri, térã ojoguapy añónte térã ojeheja.

## Abrir malla

1. Eiporavo {{ui:Abrir}} térã emoñe'ẽ {{key:Mod+O}}, ha eiporavo `.stl`, `.obj` térã `.3mf` archivo. Térã emoñepyrũ 3D vísta-pe.
2. PartCraft ojeporu, ombohasa mbohasa jeporu ojehasa'ỹva ha ohechauka máva ojuhu: mávapiko triángulo ha punto, opa arreglo ha mba'éichapa **cierra** malla ko'ẽrõ.
3. Ehecha **Unidades en el archivo** ha **Arriba en el archivo**. STL ha OBJ ndohechaukái unidad, upévare milímetro ojeguereko; 3MF archivo ojapo imáicha. Línea **Tamaño aquí** ohechauka cuerpo tamaño nde pe'ẽ rupi, upévare pieza 25,4 jeyvu mboriahu ojehecha (pulgadagui oñemoĩ'ía).
4. Pieza pantalla-pe ndaipóri jave, eiporavo {{ui:Abrir como cuerpo}}. Pieza oguereko jau featureeta jave, eiporavo **Usar para** (agregar pieza-pe, cortar hendive térã mantene solo superposición) ha upéi {{ui:Agregar a esta pieza}}, térã {{ui:Pieza nueva}} malla rupi jey emoñepyrũ.

Historia-pe **Imported1** feature ojehechauka. Estado barra-pe ohechauka, ejemplo: "bracket.stl es un cuerpo sólido: 15200.512 mm³, 14 caras planas para bosquejar."

## Mba'e PartCraft ombohasa

| Reparación | Mba'e rembiapo |
|---|---|
| Esquina repetida ojuntáva | STL opuesta triángulo peteĩ-peteĩ-pe esquina opaite ojapo; oñemoĩ peteĩ punto-pe |
| Área'ỹ triángulo oñeheja | Oúva esquina peteĩ línea-pe ojoguapy hína |
| Duplicado triángulo oñeheja | Mokõi jey ojapo triángulo peteĩ-pe oñeguerekojey; mokõi kuéra mboyve ojehecha (pared adentro) oñeheja |
| Pequeño ñorairõ oñemonguéra | Borde-kuéra oñemboguapýva (pieza tamaño mil-ha ndaha'éi-pe) ojuntáva |
| Agujero oñembotuicha | Abertura borde ojojoguáva plano-pe, tamaño ndaha'éiramo oñembotuicha; ñemboheko jave, chico rire chupe |
| Triángulo oñemoĩ hetaʼỹre | Triángulo ndahasy porã oñemoĩ vecino-kuéra ndive ojojoguáva, superficie opa oñemoĩ hetaʼỹre |

## Mba'e jave malla ndojejoaiméi

Solido oikotevẽ superficie abertura'ỹ. PartCraft ndaikatúi ojejoaprová jave, diálogo ohechauka mbohapy abertura ha borde ndojejoaiméva, ha cuerpo ndojuhupytýi. Abertura-kuéra ojejoaprova programa-pe ojapo malla-pe térã malla hermético (watertight) ndive jey emoñe'ẽ, upéi emoñepyrũ jey.

PartCraft abertura ndojejoaiméi hendápe ojejapomíva ojeguerekosé pe'ẽ: ñemboheko agujero mbovy, térã mokõi abertura peteĩ plano-pe (anillo cara ndoguerekóva, opa borde ojejoapa jave hendive mbytépe agujero ojejoavéi). Borde ojepe'a mbohapy triángulo ojuhúva ojehechauka jepe: upéicha superficie ndoguerekói peteĩ clara adentro.

## Bosquejar cara plano-kuéra-pe

Triángulo heta ojejoapa plano área-kuéra peteĩ **cara plano** peteĩ-peteĩ-pe ojejoapa, upéva bosquejo oñemoĩ theaʼẽ: eiporavo cara ha eiporavo {{ui:Boceto sobre esta cara}}. Cara oñemboguatáva térã oñemoĩva ipaʼũvépe cara ojeguereko. Redondo área (agujero, redondeo) triángulo-kuéra oiko: ndaikatúi ojeporavo cara-pe, ha vista ojehechauka borde triángulo-kuéra ndive ángulo rupi.

## Ojeporu upeichaite

Ehecha **Imported1** ohechauka archivo oúva, cuántos triángulo oguereko ha mba'e oñeheja. **Unidades en el archivo**, **Arriba en el archivo** ha **Usar para** upépe ojeporu ojejapomíva; cada cambio peteĩ undo paso.

## Mávapa oñeñongatu

Malla oñeñongatu **adentro** `.partcraft.json` archivo-pe, upévare malla archivo ndoikotevẽvéi jey. Malla cuerpo oguereko pieza archivo versión 5; PartCraft mboyvéva versión-gui ndojeapróvai. 200.000 triángulo malla ojapo 1,2 MB.

## Límite

- Archivo peteĩ-pe mbohapy millón triángulo ha 200 MB peve.
- Malla-gui ojapo cuerpo ojapo malla núcleo-gui. Núcleo exacto oñemboguapy jave (desarrollador-kuéra añónte), ohechauka ha ndojapói.
- OBJ material, textura koʼẽrõ ha curva libre ndoike; 3MF color, material ha soporte objeto ndoike (diálogo ohechauka heta objeto ojeheja).
- Cuerpo ojojogua malla porãicha: malla ñemimi jave, redondo cara ñemimi. Ndepená agujero ndeperfora hendive oñemoĩ redondo ndeprópiogui feature-kuéra porã haguéicha.
