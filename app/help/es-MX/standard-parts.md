---
title: Abrir una pieza normalizada
summary: Inicie una pieza a partir de un perno, tornillo, tuerca, arandela, pasador, rodamiento o chaveta, dimensionada según su norma, con cada tamaño de la tabla de la norma como una configuración.
keywords: pieza normalizada, piezas normalizadas, perno, tornillo, hexagonal, tuerca, arandela, pasador, espiga, rodamiento, rodamiento rígido de bolas, chaveta, chaveta paralela, sujetador, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, plantilla, biblioteca
from: b9e2811f
---

PartCraft abre piezas mecánicas comunes ya hechas: las dimensiones provienen de las tablas de las normas, y cada tamaño de la tabla es una configuración a la que puede cambiar.

## Abrir una

1. Haga clic en {{ui:Pieza normalizada}} en el grupo Archivo.
2. En {{ui:Pieza}}, elija el tipo, por ejemplo {{ui:Tornillo de cabeza hexagonal (ISO 4017)}}.
3. En {{ui:Tamaño}}, elija el tamaño, por ejemplo `M10 × 40`.
4. Haga clic en {{ui:Abrir}}.

La pieza se abre como una pieza nueva, sin guardar. Guárdela para conservarla ({{key:Mod+S}}).

| Pieza | Norma | Parámetros |
|---|---|---|
| Tornillo de cabeza hexagonal, perno hexagonal | ISO 4017, ISO 4014, ASME B18.2.1 (pulgadas) | `d` tamaño de rosca, `s` distancia entre caras, `k` altura de cabeza, `l` longitud |
| Tuerca hexagonal | ISO 4032, ASME B18.2.2 (pulgadas) | `d`, `s`, `height` |
| Arandela lisa | ISO 7089 | `d1` interior, `d2` exterior, `h` espesor |
| Pasador paralelo | ISO 2338 | `d`, `l` |
| Rodamiento rígido de bolas | ISO 15 | `d` diámetro interior, `D` diámetro exterior, `B` ancho |
| Chaveta paralela | DIN 6885-1, forma A | `b` ancho, `h` altura, `l` longitud |

## Cambiar el tamaño

Cada tamaño es una configuración (vea [Configuraciones y tablas de diseño](topic:design-tables)): abra {{ui:Parámetros}} y elija otro, o cambie un parámetro, como `l` para un tornillo más largo, y guárdelo como una configuración propia.

## Qué se modela

- Tornillos y pernos: la cabeza hexagonal y un vástago liso. Tuercas: el hexágono con un agujero del tamaño nominal de la rosca. Las roscas no se modelan; agregue una con {{ui:Rosca}} si la necesita (vea [Roscas](topic:threads)).
- Pasadores: un cilindro liso; se omiten los chaflanes de los extremos.
- Rodamientos: sólo la envolvente exterior (un anillo del diámetro interior, el diámetro exterior y el ancho), que es lo que se necesita para ubicar uno.
- Chavetas: la chaveta de extremos redondeados.

El material de la pieza es acero, así que el panel de masa muestra su peso. Los engranes todavía no están disponibles aquí: PartCraft no tiene una función de dientes, y un disco no es un engrane. CadCraft dibuja engranes con la convención de dibujo, y la biblioteca los tiene como dibujos.
