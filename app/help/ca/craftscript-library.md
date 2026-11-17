---
title: La biblioteca d'anàlisi
summary: La biblioteca de scripts d'anàlisi llegibles a l'espai de treball Script: què hi ha a cada grup, obrir una funció en només lectura, la seva capçalera amb mètode, referències i una comprovació, fer-ne la vostra còpia i com una còpia substitueix la funció de la biblioteca.
keywords: biblioteca, craftlib, anàlisi, electroimant, estàtic, modal, tèrmic, optimització topològica, top88, SIMP, electromagnetisme, electroestàtica, magnetostàtica, fluid, lattice Boltzmann, LBM, malla, vòxel, tetraedres, referències, comprovació, verificació, còpia, ombra
from: bf993859
---

La biblioteca d'anàlisi és un conjunt de scripts, cadascun una funció que podeu llegir de dalt a baix: com es munta la matriu de rigidesa, on van les condicions de contorn, quin solucionador s'executa, com es calculen els resultats. No hi ha res amagat en una caixa negra; només els bucles interns ràpids (matrius d'elements, solucionadors dispersos, generació de malles) són integrats.

## Comenceu amb un exemple

El grup **Exemples** conté cinc scripts curts que usen la biblioteca de principi a fi. Feu clic en un, premeu {{ui:Obre (només lectura)}} i després {{key:F5}}: cadascun neteja la vista, mostra un resultat al llenç i un gràfic a les subfinestres.

| Exemple | Què mostra |
|---|---|
| Tensió en un voladís | Una barra d'acer de 100 × 10 × 10 mm sota una càrrega de 100 N a l'extrem: tensió de von Mises a la barra deformada, i la flexió de l'extrem comparada amb la teoria de bigues a quatre mides d'element (en gràfic) |
| Topologia de biga MBB | L'optimització topològica clàssica de 60 × 20: la forma del disseny, la caiguda de la complaença, la disposició final (94 iteracions, complaença 203.19) |
| Camp de condensador | Dues plaques de 4 mm d'amplada, a 1 mm de distància: potencial i camp, la capacitat amb efecte de vora comparada amb el valor ideal i la fórmula de Palmer |
| Flux en canal | Flux Lattice Boltzmann al voltant d'un pilar en un canal: el camp de velocitats i l'historial de convergència |
| Electroimant | Un nucli de ferro en forma de C amb un entreferro i una bobina: la densitat de flux, el camp a l'entreferro comparat amb la fórmula del circuit magnètic, la inductància i la força d'atracció a través de l'entreferro. Explicat pas a pas a [Camps magnètics en 2-D](topic:magnetic-fields-2d) |
| Imant permanent | El mateix nucli amb un imant permanent en lloc de la bobina: el punt de treball de l'imant, el camp a l'entreferro comparat amb el circuit magnètic, quant flux es fuga, la força. A [Camps magnètics en 2-D](topic:magnetic-fields-2d#permanent-magnets) |

## Grups

| Grup | Funcions | Què fan |
|---|---|---|
| Generació de malles | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Caixes i cilindres com a hexaedres, cubs o tetraedres; cubs o tetraedres de qualsevol model (la peça, un cos, un STL carregat); volums i qualitat dels elements; selecció de nodes en un pla o una cara |
| Tensió estàtica | `static_voxel`, `static_tet` | Tensió estàtica lineal en cubs o en tetraedres de 10 nodes: desplaçaments, tensions, von Mises, reaccions |
| Marcs | `frame3d` | Marcs 3D de bigues, pilars i riostres pel mètode de la rigidesa directa: alliberaments als extrems, suports i molles, càrregues al llarg de les barres; desplaçaments, reaccions, forces als extrems de les barres. La funció {{ui:Exporta com a CraftScript}} de DetailCraft i BimCraft escriu un model complet per a aquesta funció. És una eina d'anàlisi, no una comprovació normativa |
| Vibració | `modal_tet` | Freqüències naturals i formes modals |
| Calor | `heat_steady`, `heat_transient`, `heat_system` | Conducció estacionària i transitòria amb temperatures fixes, entrada de calor, generació, flux i convecció |
| Optimització topològica | `top88`, `top99`, `topopt3d` | Els codis 2-D publicats de 88 i 99 línies, i el mateix mètode en 3-D sobre cubs |
| Electromagnetisme | `poisson2d`, `magnetostatic2d` | Electroestàtica 2-D (potencial, camp, capacitat, càrrega) i magnetostàtica 2-D (potencial vectorial, densitat de flux, imants permanents) |
| Flux de fluids | `lbm2d`, `lbm3d` | Flux Lattice Boltzmann: 2-D escrit en el script, 3-D sobre el propi nucli de flux de PartCraft |

La capçalera de cada funció indica els seus arguments exactes. Les unitats són les dels estudis de PartCraft, tret que la capçalera digui el contrari: mil·límetres, newtons, megapascals, tones per mil·límetre cúbic per a la densitat, watts i kelvin per a la calor. Les funcions electromagnètiques i de Lattice Boltzmann treballen en qualsevol unitat coherent; les seves capçaleres ho expliquen.

## Com es comprova la biblioteca

La capçalera de cada funció acaba amb una **comprovació**: un cas petit amb una resposta coneguda. Les proves de PartCraft les executen totes; quan PartCraft té el seu propi estudi per a la mateixa tasca, la resposta de l'script es compara amb aquest estudi sobre la mateixa malla:

- la flexió de l'extrem del voladís comparada amb la teoria de bigues (dins del 0.2 % amb cubs, 0.05 % amb tetraedres), i amb els solucionadors de l'espai de treball **Simulació** sobre la mateixa malla (iguals fins a molts dígits);
- la primera freqüència del voladís comparada amb la teoria de bigues (0.24 % més baixa, com s'espera per a una biga curta) i amb el solucionador modal de **Simulació**;
- calor: una paret plana escalfada exactament, un cos petit que es refreda tal com diu la fórmula de capacitat concentrada, la temperatura d'una llosa que s'esvaeix tal com diu la teoria;
- optimització topològica: `top88` reprodueix les 94 iteracions i la complaença 203.1925 de l'article (i 218.8032 amb el filtre de densitat); `topopt3d` acaba amb la mateixa complaença que l'espai de treball **Generatiu** amb la mateixa configuració;
- la capacitat d'un condensador i el camp d'un solenoide llarg comparats amb els seus valors de llibre de text, el camp a l'entreferro de l'electroimant comparat amb la fórmula del circuit magnètic, i els imants permanents comparats amb un imant rodó a l'aire i amb un imant tancat per una armadura de ferro;
- flux en canal comparat amb el perfil parabòlic exacte.

## Llegiu una funció

1. Obriu la pestanya **Biblioteca** del panell de scripts.
2. Feu clic en una funció. La seva capçalera mostra: què calcula, el mètode, les unitats, les suposicions i límits, les **referències** (llibre o article, amb números d'equació) i una **comprovació**: un cas petit amb una resposta coneguda que les proves pròpies de PartCraft executen.
3. {{ui:Obre (només lectura)}} obre tot el script en una pestanya amb vora discontínua. El podeu executar, seleccionar i executar-ne parts, però no canviar-lo.

## Canvieu-ne una

Premeu {{ui:Fes una còpia}} (o **Fes una còpia per editar** sobre una pestanya de només lectura). La còpia és un script de la vostra peça amb el mateix nom, de manera que es desa amb la peça, i **cada crida a aquesta funció ara usa la vostra còpia**: l'editor ho indica sobre el script. Reanomeneu la còpia per conservar-ne totes dues.

## Useu-ne una

Crideu una funció de la biblioteca des de qualsevol script pel seu nom, com una funció integrada:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Els resultats tornen com a valors a l'espai de treball; els gràfics i els camps que mostri apareixen a la vista i a les subfinestres.

Una anàlisi estàtica de la peça oberta, per exemple, ocupa unes poques línies:

```
v = voxel_mesh(part(), 2);                   % cubs de 2 mm
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % subjecta la part inferior
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N cap avall a la part superior
r = static_voxel(v, 210000, 0.3, bc);       % acer
```

`r` conté els desplaçaments, les tensions i les reaccions; la tensió de von Mises es dibuixa sobre la peça deformada. Per a peces corbes useu `tet_mesh` i `static_tet`, que també poden carregar i subjectar cares senceres (`face_nodes`).

:::note
Les funcions de la biblioteca estan escrites en CraftScript, i un script en Lua les crida a través de `cs` igual que les funcions integrades: `cs.static_tet(t, 200000, 0.3, bc)` (vegeu [Scripts en Lua](topic:craftscript-lua)). Cada funció resol un material i un cas de càrrega; les capçaleres indiquen què més no està cobert.
:::
