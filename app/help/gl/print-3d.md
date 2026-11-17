---
title: Preparar unha peza para a impresión 3D
summary: Comprobe que unha peza ou un conxunto está pechado, que cabe na súa impresora e que se asenta sobre unha base, e despois descárguea como STL ou 3MF para o seu slicer.
keywords: impresión 3D, impresión 3d, impresora, imprimir, slicer, stl, 3mf, estanco, pechado, manifold, cama, tamaño da cama, placa de impresión, voadizo, soportes, base, milímetros, exportar, roscas, xogo
from: 90d81dff
---

Un slicer necesita unha forma pechada: sen buratos, con cada cara apuntando cara a fóra e sen atravesarse a si mesma. As pezas que PartCraft constrúe están pechadas por construción, así que a comprobación indícalle sobre todo o tamaño, se a peza cabe na cama da súa impresora, se se asenta sobre unha cara plana e canto sobresae.

## Comprobar e descargar

1. Opcional, unha soa vez: estableza a cama da súa impresora en {{ui:Configuración}} › PartCraft › **Impresora 3D**: ancho, fondo e alto en milímetros. Déixeos baleiros para omitir esa comprobación.
2. Escolla {{ui:Exportar}}, e despois {{ui:Comprobar a impresión 3D (STL ou 3MF)…}}.

   O diálogo indica «Listo para imprimir» ou «Non listo para imprimir», enumera o que falla e dá o tamaño sobre a cama (X × Y × Z, en milímetros), o volume e o número de triángulos.

3. Prema en {{ui:Descargar 3MF}} ou {{ui:Descargar STL}}. O ficheiro é o mesmo que {{ui:Exportar}} › {{ui:3MF, para impresión 3D}} ou {{ui:STL, para impresión 3D}}.

Nun conxunto, a comprobación e os ficheiros toman o conxunto completo, cada copia no lugar onde está colocada.

A peza compróbase tal como a escribe a exportación: o que apunta cara arriba en PartCraft (perpendicular ao plano Superior) apunta cara arriba na cama. Unha peza debuxada sobre o plano Superior queda plana.

## Que pode indicar o diálogo

**Non listo para imprimir** (un slicer pode rexeitalo ou imprimilo mal): buratos (arestas cunha cara só dun lado), arestas compartidas por tres ou máis caras, caras que miran en sentidos opostos, un corpo do revés ou un corpo que se atravesa a si mesmo. Unha peza construída en PartCraft non debería mostrar nunca isto; se o fai, vexa [Resolución de problemas](topic:troubleshooting).

**Avisos** (imprime, pero revise antes):

- **Máis grande que a cama da súa impresora**, mesmo xirada 90° sobre ela.
- **Nada se asenta plano na parte inferior**: xire a peza no seu slicer para que unha cara repouse na cama, ou necesitará soportes ou unha base.
- **Inclínase máis de 45° desde a vertical**: esas caras necesitan soporte coa peza tal como está. Outra posición podería necesitar menos.
- **Os corpos separados se solapan** ou **se tocan cara a cara**: os slicers adoitan unilos. {{ui:Combinar}} en Elementos › Máis úneos nun só corpo. Vexa [Corpos](topic:bodies).
- **Menos de 1 mm de lado a lado**: revise os tamaños da peza.

## Roscas que se imprimen

Unha rosca modelada imprímese como unha rosca real. Déalle algo de **Xogo** para que un parafuso impreso entre nunha porca impresa: vexa [Roscas](topic:threads).

## Superficies redondas máis suaves

STL e 3MF están formados por triángulos. Para superficies redondas máis suaves, faga clic nun espazo baleiro para que non haxa nada seleccionado e estableza **Curvas** en **Fina (128 por volta)** ou **Moi fina (256 por volta)** no panel dereito antes de exportar. Máis triángulos producen ficheiros máis grandes.

## Máis grande, máis pequena ou en pezas

- **Exportar › Escalar para impresión (STL ou 3MF)…** garda a peza escalada por eixe sen cambiala: unha **marxe de contracción** en porcentaxe (tamaño × (1 + s), ou o tamaño exacto ÷ (1 − s)) para un patrón de fundición, ou factores simples, ao redor do centro, da esquina inferior, do centro da base ou da orixe.
- **Exportar › Dividir para impresión (un zip de pezas)…** corta unha peza demasiado grande para a súa impresora en pezas que caben cada unha na cama que indique, unidas por pivotes, chavetas, colas de milano, buratos de cavilla ou aloxamentos para imáns (coa holgura que estableza). Cada peza e cada unión van numeradas, e as pezas gárdanse como STL ou 3MF nun zip cunha folla de montaxe. A peza en si non cambia.

## Non comprobado

Espesor de parede, detalles máis pequenos que o seu bico, e como o slicer colocará os soportes. O seu slicer móstrao.
