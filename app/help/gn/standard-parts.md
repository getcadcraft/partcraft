---
title: Ojepyrũ pieza estándar
summary: Ojepyrũ pieza mecánica común tornillo, perno, tuerca, arandela, pasador, rodamiento térã chaveta, tamaño estándar tabla-gui, tamaño peteĩteĩ configuración.
keywords: pieza estándar, piezas estándar, perno, tornillo, hexagonal, tuerca, arandela, pasador, espiga, rodamiento, rodamiento de bolas, chaveta, sujetador, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, plantilla, biblioteca
from: b9e2811f
---

PartCraft oñemoĩ mecánica pieza común ya ojapo: dimensiones estándar tabla-gui, tabla tamaño peteĩteĩ configuración ndejerovia.

## Peteĩ oñepyrũ

1. Ejapo clic {{ui:Standard part}} File grupo-pe.
2. {{ui:Part}}-pe eiporu klase, por ejemplo {{ui:Hex head screw (ISO 4017)}}.
3. {{ui:Size}}-pe eiporu tamaño, por ejemplo `M10 × 40`.
4. Ejapo clic {{ui:Open}}.

Pieza nueva, no guardada oñemoĩ. Guardá ñongatu ({{key:Mod+S}}).

| Pieza | Estándar | Parámetros |
|---|---|---|
| Tornillo cabeza hexagonal, perno hexagonal | ISO 4017, ISO 4014, ASME B18.2.1 (pulgada) | `d` rosca tamaño, `s` entre caras planas, `k` altura cabeza, `l` largo |
| Tuerca hexagonal | ISO 4032, ASME B18.2.2 (pulgada) | `d`, `s`, `height` |
| Arandela lisa | ISO 7089 | `d1` interno, `d2` externo, `h` espesor |
| Pasador paralelo | ISO 2338 | `d`, `l` |
| Rodamiento de bolas ranura profunda | ISO 15 | `d` diámetro interior, `D` exterior, `B` ancho |
| Chaveta paralela | DIN 6885-1, forma A | `b` ancho, `h` altura, `l` largo |

## Cambiá tamaño

Peteĩteĩ tamaño configuración (eñehesa [Configuraciones y tablas de diseño](topic:design-tables)): abrí {{ui:Parameters}} ha eiporu ambue, térã parámetro cambia, por ejemplo `l` tornillo guasúvagui, ha configuración propia-pe ñongatu.

## Mba'e modelado

- Tornillos y pernos: cabeza hexagonal ha caña lisa. Tuercas: hexágono agujero rosca nominal tamaño. Roscas ndaipóri; {{ui:Thread}} ndeikotevẽramo agregá (eñehesa [Roscas](topic:threads)).
- Pasadores: cilindro liso; punta chaflán ndaipóri.
- Rodamientos: solo exterior (anillo interior diámetro, exterior diámetro ha ancho), colocar oikotevẽva.
- Chavetas: chaveta punta redonda.

Pieza material acero, upévare masa panel-pe peso ohechauka. Engranajes ko'ágã ndaipóri: PartCraft-pe diente función ndaipóri, disco ndaha'éi engranaje. CadCraft dibujo convención-pe engranajes ojapo, biblioteca-pe dibujo-pe oĩ.
