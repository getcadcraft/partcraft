---
title: Abrir un ficheiro STEP e construír sobre el
summary: Traia un modelo STEP dun provedor ou doutro programa CAD para PartCraft como corpo sólido, como unha peza nova ou engadido á peza actual, defina cara a que lado está arriba, e engada esbozos e elementos.
keywords: step, stp, importar, abrir step, ap203, ap214, ap242, modelo de provedor, sólido mudo, sólido importado, eixe cara arriba, z cara arriba, y cara arriba, triángulos, facetado, paso de conxunto
from: ca0eca5f
---

PartCraft abre ficheiros STEP (`.step` ou `.stp`, AP203, AP214 e AP242) como **corpos sólidos** sobre os que pode esbozar, cortar, perforar e combinar cos seus propios elementos. O corpo non ten historial propio: non se poden cambiar as dimensións coas que foi feito, só engadir ou cortar.

Esta versión constrúe todas as pezas co núcleo de malla, así que un ficheiro STEP **léese como triángulos**: as caras planas quedan planas, e as caras curvas (cilindros, conos, esferas, toros, superficies B-spline) convértense en moitas pequenas planas. O seu volume difire do exacto nunha fracción do un por cento. Manter as caras curvas exactas require un núcleo exacto, que non está nesta versión.

## Abrir un ficheiro STEP

1. Escolla {{ui:Abrir}} ou prema {{key:Mod+O}}, e seleccione o ficheiro `.step` ou `.stp`. Ou solte o ficheiro na vista 3D.
2. PartCraft lee o ficheiro e mostra o que atopou, por exemplo: "Ficheiro AP214: 1 sólido, 10 caras, lido como triángulos." Debaixo aparecen o número de triángulos, calquera cousa que tivese que omitir ou unir, e se o resultado pecha.
3. Comprobe **Cara arriba no ficheiro**. Un ficheiro STEP indica a súa propia unidade (milímetros, polgadas, metros…); PartCraft convérteo a milímetros, así que **Unidades no ficheiro** mostra Milímetros, "o ficheiro así o indica". **Tamaño aquí** mostra o tamaño que terá.
4. Escolla {{ui:Abrir como corpo}} para unha peza baleira, ou {{ui:Engadir a esta peza}} / {{ui:Nova peza}} cando a peza xa ten elementos. Ao engadir pregunta que facer con **Usalo para**: engadir, cortar ou manter só a superposición.

Un elemento **Imported1** aparece no historial, e a barra de estado di, por exemplo, "plate.step é un corpo sólido: 57995.937 mm³, 6 caras planas para esbozar."

## Un STEP de conxunto

Un conxunto entra como **un único corpo** con cada peza onde o ficheiro a coloca ("3 pezas colocadas no ficheiro entran onde están"). Unha peza usada dúas veces entra dúas veces. Os nomes das pezas e a árbore do conxunto non se conservan.

## Definir cara a que lado está arriba

A maioría dos programas CAD usan Z cara arriba; PartCraft usa Y cara arriba. Por defecto PartCraft xira o ficheiro para que o seu Z apunte cara arriba aquí. Se a peza chega deitada de lado, seleccione **Imported1** e defina **Cara arriba no ficheiro** en **Y cara arriba**. **Unidades no ficheiro** e **Usalo para** tamén se poden cambiar aí; cada cambio é un paso de desfacer.

## Construír sobre el

- Prema unha cara plana do corpo e escolla {{ui:Esbozo sobre esta cara}}. As caras planas do modelo STEP conservan o seu lugar ao reconstruír o corpo.
- Engada cortes, furos, saíntes, patróns e espellos como en calquera peza.
- Comprobe o seu tamaño na caixa **Peza**: volume, área superficial e tamaño.

Os redondeos, chanfles e vaciados precisan o núcleo exacto, como en calquera peza desta versión ([O núcleo de malla](topic:solid-kernels)).

## Onde se garda

Os triángulos gárdanse **dentro** do ficheiro `.partcraft.json`, así que o ficheiro da peza é autónomo: non fai falta o ficheiro STEP outra vez.

## Mensaxes

| Mensaxe | Que significa |
|---|---|
| '"part.stp" non é un ficheiro STEP (non comeza por ISO-10303-21).' | O ficheiro non é texto STEP simple. Pida ao remitente un ficheiro STEP AP203, AP214 ou AP242 |
| "Non se puido ler o ficheiro STEP: a súa sección de datos falta ou está danada." | O ficheiro está cortado ou danado. Cópieo de novo |
| "O ficheiro STEP non contén ningún corpo sólido nin de superficie: non hai nada que importar." | O ficheiro só contén debuxos, puntos ou datos. Pida un sólido |
| "Ese ficheiro STEP é demasiado grande (máis de 60 MB) para importalo aquí." e os demais límites do lector (entradas, caras, triángulos) | Simplifique o modelo na orixe, ou envíe as pezas unha a unha |
| "… liñas danadas do ficheiro omitíronse." | Algunhas liñas non se puideron ler; o resto entrou. Revise o corpo |
| "… caras non se puideron converter en triángulos e omitíronse." | Esas caras deixan buratos, que PartCraft tenta pechar; se o corpo non pecha, non se engade |
| "… caras dun tipo que non se le (…) omitíronse." | Un tipo de superficie pouco común. Pida o modelo con superficies simples ou B-spline |
| "Non pecha …" | As caras non forman un sólido pechado (un modelo de superficie, ou caras omitidas). PartCraft mostra as aberturas e non engade nada |

## Límites

- As caras curvas debúxanse e miden como facetas planas, como en todas as pezas desta versión. PartCraft conserva co corpo as caras planas, cilindros, conos, esferas e toros propios do ficheiro, así que {{ui:Exportar}} › {{ui:STEP AP242 (sólido exacto)}} as escribe de volta como superficies verdadeiras, os furos como furos, xunto cos elementos que engada. As caras que o ficheiro dá como splines, barridos ou superficies de revolución seguen sendo facetas na exportación. Unha peza gardada antes da 0.9.1 non ten superficies conservadas: volva abrir o ficheiro STEP para obtelas.
- {{ui:Exportar}} › {{ui:DXF do esbozo ou da cara plana}} con unha cara plana escollida escribe un furo redondo do ficheiro como un círculo verdadeiro.
- Non se leen as cores, os nomes dos corpos, a estrutura do conxunto nin o PMI (tolerancias do ficheiro).
- Ademais de STEP, PartCraft abre malles STL, OBJ e 3MF ([Abrir un STL, OBJ ou 3MF](topic:open-meshes)) e ficheiros `.3dm` ([Abrir un modelo .3dm](topic:open-3dm-files)) como corpos sólidos. IGES e os ficheiros nativos doutros programas non se soportan.
- Unha peza cun sólido STEP importado por unha versión que tiña o núcleo exacto conserva o texto STEP; esta versión omite ese elemento ("non construído"). Volva abrir o ficheiro STEP para traelo como triángulos.
