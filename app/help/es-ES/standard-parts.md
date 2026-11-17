---
title: Abrir una pieza normalizada
summary: Inicie una pieza a partir de un tornillo, perno, tuerca, arandela, pasador, rodamiento o chaveta con medidas de su norma, con cada tamaño de la tabla de la norma como configuración.
keywords: pieza normalizada, piezas normalizadas, tornillo, perno, hexagonal, tuerca, arandela, pasador, clavija, rodamiento, rodamiento de bolas, chaveta, chaveta paralela, elemento de fijación, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, plantilla, biblioteca
from: b9e2811f
---

PartCraft abre piezas mecánicas habituales ya hechas: las medidas proceden de las tablas de las normas, y cada tamaño de la tabla es una configuración a la que puede cambiar.

## Abrir una

1. Haga clic en {{ui:Pieza normalizada}} en el grupo Archivo.
2. En {{ui:Pieza}}, elija el tipo, por ejemplo {{ui:Tornillo de cabeza hexagonal (ISO 4017)}}.
3. En {{ui:Formato}}, elija el tamaño, por ejemplo `M10 × 40`.
4. Haga clic en {{ui:Abrir}}.

La pieza se abre como una pieza nueva y sin guardar. Guárdela para conservarla ({{key:Mod+S}}).

| Pieza | Norma | Parámetros |
|---|---|---|
| Tornillo de cabeza hexagonal, perno hexagonal | ISO 4017, ISO 4014, ASME B18.2.1 (pulgadas) | `d` diámetro de rosca, `s` entre caras, `k` altura de cabeza, `l` longitud |
| Tuerca hexagonal | ISO 4032, ASME B18.2.2 (pulgadas) | `d`, `s`, `height` |
| Arandela lisa | ISO 7089 | `d1` interior, `d2` exterior, `h` espesor |
| Pasador cilíndrico | ISO 2338 | `d`, `l` |
| Rodamiento rígido de bolas | ISO 15 | `d` diámetro interior, `D` exterior, `B` anchura |
| Chaveta paralela | DIN 6885-1, forma A | `b` anchura, `h` altura, `l` longitud |

## Cambiar el tamaño

Cada tamaño es una configuración (consulte [Configuraciones y tablas de diseño](topic:design-tables)): abra {{ui:Parámetros}} y elija otra, o cambie un parámetro, como `l` para un tornillo más largo, y guárdelo como configuración propia.

## Qué está modelado

- Tornillos y pernos: la cabeza hexagonal y un vástago liso. Tuercas: el hexágono con un taladro del diámetro nominal de la rosca. Las roscas no se modelan; añada una con {{ui:Rosca}} si la necesita (consulte [Roscas](topic:threads)).
- Pasadores: un cilindro liso; se omiten los chaflanes de los extremos.
- Rodamientos: solo el volumen exterior (un anillo del diámetro interior, el diámetro exterior y la anchura), que es lo que necesita para colocar uno.
- Chavetas: la chaveta de extremos redondeados.

El material de la pieza es acero, así que el panel de masa muestra su peso. Los engranajes todavía no están: PartCraft no tiene un elemento de dientes, y un disco no es un engranaje. CadCraft dibuja engranajes según la convención de dibujo, y la biblioteca los tiene como dibujos.
