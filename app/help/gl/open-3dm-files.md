---
title: Abrir un modelo .3dm como corpo sólido
summary: Traer as mallas, polisuperficies e bloques dun ficheiro .3dm a PartCraft como un corpo sólido que poida cortar, engadirlle material e esbozar sobre el; de onde veñen os triángulos e o que se omite.
keywords: 3dm, nurbs, polisuperficie, brep, superficies, malla de render, extrusión, bloques, importar, malla a sólido, unidades, corpo importado
from: 8ae9571b
---

PartCraft abre os ficheiros `.3dm` como **corpos sólidos**, do mesmo xeito que abre unha [malla STL, OBJ ou 3MF](topic:open-meshes). O corpo comporta-se como calquera sólido: córtese, engádaselle material, fúrese, fágaselle un patrón e pódense esbozar sobre as súas caras planas. Non ten historial propio.

## Abrir o ficheiro

1. Escolla {{ui:Abrir}} ou prema {{key:Mod+O}}, e seleccione o ficheiro `.3dm`. Ou solte o ficheiro na vista 3D.
2. PartCraft lee o ficheiro e mostra o que atopou: cantos obxectos con caras entran, cantas caras proceden das mallas gardadas no ficheiro e cantas PartCraft teselou, cada reparación, e se o resultado **pecha**.
3. Comprobe **Unidades no ficheiro** (o ficheiro indica as súas; unha unidade que PartCraft non lista, como as yardas, convértese en milímetros) e **Orientación no ficheiro**.
4. Escolla {{ui:Abrir como corpo}}, ou **Usar para** e {{ui:Engadir a esta peza}} cando a peza xa teña elementos.

## De onde veñen os triángulos

PartCraft constrúe corpos a partir de triángulos nesta versión, así que cada superficie do ficheiro convértese en pequenas caras planas. Para cada cara dunha polisuperficie (e de cada extrusión) toma a **malla de render gardada no ficheiro** cando a hai; se non, **tesélaa por si mesmo** (planos, superficies NURBS, superficies de revolución, curvas extruídas e extrusións, recortadas polos seus bordos). As caras dunha mesma polisuperficie comparten os seus puntos de bordo, así que unha polisuperficie pechada entra pechada. Unha cara dun tipo de superficie que PartCraft aínda non le déixase fóra, e o diálogo indica cantas e de que tipo; o resultado adoita non pechar.

## Todo o ficheiro convértese nun só corpo

Cada malla, polisuperficie e extrusión visible, e cada colocación dun bloque, vai a **un** corpo onde o ficheiro o pon. Os obxectos ocultos, ou que están nunha capa desactivada, quedan fóra. Cando o ficheiro contén varios sólidos separados, o corpo ten varias pezas: ábraos cada un desde o seu ficheiro se os quere como corpos separados.

## O que queda fóra (e se indica)

Curvas, puntos, nubes de puntos, texto, cotas, tramas e luces quedan fóra: un corpo só toma caras. Tamén quedan fóra os obxectos SubD (convértaos en mallas ou polisuperficies no programa que creou o ficheiro primeiro), os bloques ligados doutros ficheiros, e as cores, capas e nomes (os corpos de PartCraft non teñen propios aquí).

## Cando non pecha

As polisuperficies e superficies abertas (unha superficie recortada soa, unha forma cunha cara que falta) non teñen interior, así que non poden ser un sólido. O diálogo indica cantas aberturas quedan e non engade nada. Una ou pecha a forma no programa que a creou, garde e ábraa de novo. Ver [Cando unha malla non pecha](topic:open-meshes#when-a-mesh-does-not-close).
