---
title: Abrir unha malla STL, OBJ ou 3MF como corpo sólido
summary: Converta unha malla dun escáner, dunha web de impresión 3D ou doutro programa nun sólido que poida cortar, engadirlle material e esbozar sobre el; que repara PartCraft polo camiño e o que non pode arranxar.
keywords: stl, obj, 3mf, malla, malla a sólido, converter malla, escaneo, pechada, reparar, furos, fendas, unidades, eixe cara arriba, corpo importado, caras planas
from: 7b948471
---

PartCraft abre mallas STL, OBJ e 3MF como **corpos sólidos**. O corpo comporta-se como calquera sólido: córtese, engádaselle material, fúrese, fágaselle un patrón, úsese nun conxunto ou para mecanizado, e pódense esbozar sobre as súas caras planas. Non ten historial propio: unha malla é só triángulos, así que os seus tamaños non se poden cambiar, só engadir material ou cortar.

## Abrir unha malla

1. Escolla {{ui:Abrir}} ou prema {{key:Mod+O}}, e seleccione o ficheiro `.stl`, `.obj` ou `.3mf`. Ou solte o ficheiro na vista 3D.
2. PartCraft lee o ficheiro, repara o que pode con seguridade e mostra o que atopou: cantos triángulos e puntos hai, cada reparación, e se a malla agora **pecha**.
3. Comprobe **Unidades no ficheiro** e **Orientación no ficheiro** (eixe cara arriba). STL e OBJ non indican as súas unidades, así que milímetros é a suposición; un ficheiro 3MF di as súas. A liña **Tamaño aquí** mostra o tamaño do corpo coa súa elección, así que é doado ver unha peza que entra 25,4 veces máis pequena (estaba en polgadas).
4. Se a peza na pantalla está baleira, escolla {{ui:Abrir como corpo}}. Se xa ten elementos, escolla **Usar para** (engadir á peza, cortar dela, ou manter só a intersección), e despois {{ui:Engadir a esta peza}}, ou {{ui:Nova peza}} para empezar de novo coa malla.

Aparece un elemento **Imported1** no historial. A barra de estado indica, por exemplo: «bracket.stl é un corpo sólido: 15200,512 mm³, 14 caras planas para esbozar.»

## Que repara PartCraft

| Reparación | Que significa |
|---|---|
| Esquinas duplicadas unidas | Un STL repite cada esquina por cada un dos seus triángulos; únense nun só punto |
| Triángulos sen área eliminados | Lascas cuxas esquinas están nunha mesma liña |
| Triángulos duplicados eliminados | Un triángulo escrito dúas veces consérvase unha vez; dous que miran en sentidos opostos (unha parede interior) elimínanse ambos |
| Pequenas fendas pechadas | Bordos que case se tocan (dentro dunha milésima do tamaño da peza) únense |
| Furos cubertos | Unha abertura cuxo bordo está plano cúbrese sexa do tamaño que sexa; unha alabeada só cando é pequena |
| Triángulos xirados cara a fóra | Os triángulos que miran ao revés xíranse para concordar cos veciños, e toda a superficie mira cara a fóra |

## Cando unha malla non pecha

Un sólido necesita unha superficie sen aberturas. Cando PartCraft non pode pechala, o diálogo indica cantas aberturas e bordos abertos quedan, e non hai corpo que engadir. Peche as aberturas no programa que fixo a malla, ou expórtea de novo como malla pechada (estanque), e ábraa outra vez.

PartCraft deixa unha abertura sen tocar cando cubrila podería adiviñar mal: un furo grande e alabeado, ou dúas aberturas no mesmo plano (unha cara en forma de anel que falta, onde encher cada bordo cubriría o burato do centro). Tamén se informa dun bordo compartido por máis de dous triángulos: esa superficie non ten un interior claro.

## Esbozar sobre as súas caras planas

As áreas planas formadas por moitos triángulos únense cada unha nunha **cara plana**, para que se poida esbozar sobre elas: prema a cara e escolla {{ui:Esbozo sobre esta cara}}. Unha cara que se corta ou se lle engade material despois segue sendo cara. As áreas redondas (un furo, un redondeo) quedan como triángulos: non son caras que se poidan escoller, e a vista debuxa o seu contorno a partir do ángulo entre triángulos.

## Cambiala despois

Seleccione **Imported1** para ver o ficheiro de orixe, cantos triángulos ten e o que se reparou. **Unidades no ficheiro**, **Orientación no ficheiro** e **Usar para** pódense cambiar aí; cada cambio é un paso de desfacer.

## Onde se garda

A malla reparada gárdase **dentro** do ficheiro `.partcraft.json`, así que non fai falta o ficheiro da malla outra vez. Un ficheiro de peza cun corpo de malla é a versión 5: unha versión anterior de PartCraft recházao pola súa versión. Unha malla de 200.000 triángulos engade uns 1,2 MB.

## Límites

- Como máximo 3 millóns de triángulos e 200 MB nun ficheiro.
- Un corpo feito dunha malla constrúese co núcleo de malla. Co núcleo exacto activado (só para desenvolvedores) o programa indícao e non o constrúe.
- Os materiais OBJ, as coordenadas de textura e as curvas de forma libre quedan fóra; os cores, materiais e obxectos de soporte 3MF quedan fóra (o diálogo indica cantos obxectos se omitiron).
- O corpo é tan fino como a malla: unha STL grosa dá caras redondas groseiras. Os furos que lle faga nela son tan redondos como os seus propios elementos.
