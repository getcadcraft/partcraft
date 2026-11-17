---
title: Anidar piezas planas en láminas
summary: Desplegar piezas planas sobre láminas o un rollo con el menor desperdicio posible que encuentre PartCraft, sin acercarlas más que la separación indicada, y guardar la disposición como DXF para la cortadora láser, de plasma, de chorro de agua o de router.
keywords: anidado, anidar, lámina, chapa, rollo, láser, plasma, chorro de agua, router, corte, aprovechamiento, uso de material, desperdicio, recorte, separación, ancho de corte, dirección de fibra, dirección de laminado, DXF, patrón plano, contornos
from: 8dcce1a6
---

**Anidado** coloca muchas piezas planas en una lámina para que quede la menor cantidad posible de material sobrante. PartCraft coloca las piezas una a una, cada una donde deja más corta la longitud usada de la lámina, prueba varios órdenes y termina en pocos segundos, y se queda con el mejor resultado. Las piezas pueden encajar en los agujeros de otras y en el hueco de una L o de una U.

## Abrirlo

- {{ui:Export}} › {{ui:Nest flat parts on sheets…}} lo abre con el patrón plano de la pieza o, en un ensamblaje, con el patrón plano de cada pieza de chapa, tantas veces como copias haya.
- En una pieza de chapa, {{ui:Lay flat}} y después {{ui:Nest on sheets…}} bajo el patrón plano.
- {{ui:Add outlines from a DXF…}} añade como pieza cada contorno cerrado de un archivo DXF: un dibujo de CadCraft guardado como DXF, o un archivo del propio software de su máquina de corte. Un contorno dentro de otro es un agujero en él. Las líneas y los arcos que se unen extremo con extremo cuentan como un solo contorno. Los archivos en pulgadas, centímetros o metros se pasan a milímetros.

:::note
Desplegar la chapa requiere un núcleo de geometría exacto (véase [Chapa metálica](topic:sheet-metal)). Los contornos de un archivo DXF siempre funcionan.
:::

## Configurarlo

Para cada pieza indique **cuántas** necesita y su **dirección de fibra**: {{ui:Any direction}}, {{ui:Along the sheet (as drawn)}} para chapa cepillada o laminada que deba ir en un sentido, o {{ui:Across the sheet}}.

En **Láminas**:

- **Existencias**: {{ui:Plates}} de una longitud y anchura dadas (y cuántas tiene; 0 = tantas como haga falta), o {{ui:A roll}} de una anchura dada, tan largo como haga falta.
- **Margen de borde** se deja libre en cada borde de la lámina (para las mordazas o para un borde irregular).
- **Separación entre piezas** es la distancia mínima entre dos líneas de corte: como mínimo el ancho de corte de su máquina, más lo que necesite el material.
- **Giros**: los ángulos a los que puede girarse una pieza, cada 90° por defecto. Menos giros funcionan más rápido; más pueden aprovechar mejor la lámina.
- **Se pueden voltear las piezas** permite colocar una pieza boca abajo. Déjelo desactivado en chapa: un patrón plano colocado volteado se doblaría en sentido contrario.

Pulse {{ui:Nest}}. La vista previa muestra cada lámina; los datos indican cuántas láminas (o cuánto del rollo) usa y cuánto material ocupan las piezas. Lo que no haya cabido se indica por su nombre.

## Guardarlo

{{ui:Save DXF}} escribe la disposición como DXF (R12, milímetros), una lámina debajo de la siguiente: los contornos de las láminas en la capa SHEET, las piezas en PARTS (los arcos se conservan como arcos), y el nombre de cada pieza en LABELS.

:::tip
Mezclar varias piezas suele anidar mejor que muchas copias de una sola: las piezas pequeñas llenan los huecos entre las grandes.
:::

## Cortar las láminas (G-code)

**Exportar › Láminas anidadas a G-code** lee un DXF anidado (este, o las láminas del complemento Cabinets de CadCraft) y genera un programa por lámina con el postprocesador que elija: primero los agujeros y recortes, después los contornos, cada corte desplazado el radio de la herramienta hacia fuera de la pieza, atravesando la lámina y 1 mm más, con lengüetas si las pide. La lista de postprocesadores incluye los integrados y los del estudio Manufacture propio. Compruebe cada programa en un simulador antes de ejecutarlo: no se hacen los taladros ni las cajeras.

## Qué revisar

PartCraft vuelve a comprobar cada disposición con las formas reales (no con la cuadrícula que usó para buscar): ninguna pareja de piezas más cerca que la separación, nada dentro de los márgenes. No planifica el corte: las entradas de corte, el orden de corte, cortar los bordes compartidos una sola vez y conservar la lámina sobrante son tarea del software de su máquina de corte. Revise el DXF allí antes de cortar.
