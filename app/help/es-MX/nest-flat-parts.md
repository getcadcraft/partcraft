---
title: Anidar piezas planas en láminas
summary: Despliegue piezas planas sobre láminas o en un rollo con el menor desperdicio que PartCraft pueda encontrar, nunca más cerca que la separación que indique, y guarde la disposición como DXF para la cortadora láser, de plasma, de chorro de agua o fresadora.
keywords: anidado, anidar, lámina, placa, rollo, láser, plasma, chorro de agua, fresadora, corte, aprovechamiento, uso de material, recorte, desperdicio, separación, ancho de corte, fibra, dirección de laminado, dxf, patrón plano, contornos
from: 8dcce1a6
---

**Anidar** coloca muchas piezas planas sobre una lámina para que quede la menor cantidad posible de material sobrante. PartCraft coloca las piezas una por una, cada una donde deja más corta la longitud usada de la lámina, prueba varios órdenes y termina en unos segundos, y conserva el mejor. Las piezas pueden encajar en los agujeros de otras y en el hueco de una L o de una U.

## Abrirlo

- {{ui:Export}} › {{ui:Nest flat parts on sheets…}} lo abre con el patrón plano de la pieza o, en un ensamblaje, con el patrón plano de cada pieza de chapa metálica, tantas veces como copias haya.
- En una pieza de chapa metálica, {{ui:Lay flat}} y luego {{ui:Nest on sheets…}} bajo el patrón plano.
- {{ui:Add outlines from a DXF…}} agrega como piezas cada contorno cerrado de un archivo DXF: un dibujo de CadCraft guardado como DXF, o un archivo del propio software de su cortadora. Un contorno dentro de otro es un agujero en él. Las líneas y los arcos que se unen extremo con extremo cuentan como un solo contorno. Los archivos en pulgadas, centímetros o metros se convierten a milímetros.

:::note
Desplegar chapa metálica requiere un núcleo geométrico exacto (véase [Chapa metálica](topic:sheet-metal)). Los contornos de un archivo DXF siempre funcionan.
:::

## Configurarlo

Para cada pieza indique **cuántas** necesita y su **fibra**: {{ui:Any direction}}, {{ui:Along the sheet (as drawn)}} para lámina cepillada o laminada que debe ir en un solo sentido, o {{ui:Across the sheet}}.

Bajo **Láminas**:

- **Existencias**: {{ui:Plates}} de un largo y un ancho dados (y cuántas tiene; 0 = tantas como se necesiten), o {{ui:A roll}} de un ancho dado, tan largo como se necesite.
- **Margen del borde** se deja libre en cada borde de la lámina (para las mordazas, o para un borde irregular).
- **Separación entre piezas** es la menor distancia entre dos líneas de corte: al menos el ancho de corte de su cortadora, más lo que requiera el material.
- **Giros**: los ángulos a los que puede girarse una pieza, cada 90° por defecto. Menos giros se ejecutan más rápido; más giros pueden aprovechar mejor la lámina.
- **Se pueden voltear las piezas** permite colocar una pieza boca abajo. Desactívela en chapa metálica: un patrón plano volteado se doblaría en sentido contrario.

Pulse {{ui:Nest}}. La vista previa muestra cada lámina; los datos indican cuántas láminas (o cuánto del rollo) usó y cuánto del material ocupan las piezas. Lo que no cupo se indica por nombre.

## Guardarlo

{{ui:Save DXF}} escribe la disposición como DXF (R12, milímetros), una lámina debajo de la otra: los contornos de las láminas en la capa SHEET, las piezas en PARTS (los arcos se conservan como arcos), y el nombre de cada pieza en LABELS.

:::tip
Mezclar varias piezas suele anidar mejor que muchas copias de una sola: las piezas pequeñas llenan los huecos entre las grandes.
:::

## Cortar las láminas (G-code)

**Exportar › Láminas anidadas a G-code** lee un DXF anidado (este mismo, o las láminas del complemento Cabinets en CadCraft) y genera un programa por lámina mediante el postprocesador que usted elija: primero los agujeros y los recortes, luego los contornos, cada corte a un radio de herramienta por fuera de la pieza, atravesando la lámina y 1 mm más, con pestañas si las pide. La lista de postprocesadores incluye los integrados y los de su propio estudio de Manufacture. Revise cada programa en un simulador antes de ejecutarlo: los taladrados y las cavidades no se realizan.

## Qué revisar

PartCraft vuelve a revisar cada disposición sobre las formas reales (no sobre la rejilla con la que buscó): ninguna pareja de piezas más cerca que la separación, y nada dentro de los márgenes. No planifica el corte: las entradas de corte, el orden de corte, cortar los bordes compartidos una sola vez y conservar la lámina sobrante son tarea del software de su cortadora. Revise el DXF allí antes de cortar.
