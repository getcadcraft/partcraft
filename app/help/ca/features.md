---
title: Operacions i les seves opcions
summary: Cada operació de la barra d'eines amb els seus ajustos, valors per defecte i límits, des d'Extrudeix fins a Arrodoniment, Buida i sòlids STEP importats, les accions que comparteixen totes les operacions i els ajustos de la peça.
keywords: operacions, no implementat, extrudeix, retalla, revolució, tall de revolució, forat, rebaix cilíndric, patró lineal, patró circular, simetria, arrodoniment, xamfrà, buida, importa, opcions, valors per defecte, ajustos, resolució, corbes, facetes, desactiva, retrocés
from: ab3a598e
---

Les operacions es enumeren a l'historial en l'ordre en què es van fer i es tornen a construir de dalt a baix. Cada una es nomena segons el seu tipus amb un número: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft construeix totes les operacions amb el nucli de malla. Arrodoniment i Xamfrà funcionen sobre arestes rectes entre dues cares planes, i Buida obre cares planes. Els sòlids importats necessiten un nucli exacte, que aquesta versió no té: encara no estan implementats, i la seva secció més avall explica que una peça feta en una versió anterior els conserva. Vegeu [El nucli de malla](topic:solid-kernels) i [Què encara no està implementat](topic:not-built-yet).

## Croquis

| Ajust | Notes |
|---|---|
| Pla | Pla Davanter, Superior o Dret, o una cara plana. Es mostra, però no es canvia: per moure un croquis, feu-ne un de nou |
| Estat | Totalment definit, Insuficientment definit (amb els graus de llibertat), Sobredefinit o Buit |
| Geometria, Relacions | Quantes corbes, punts i relacions hi ha |
| Cotes de control | Totes les cotes del croquis, editables |

Botons: {{ui:Edita el croquis}}, {{ui:Exporta com a DXF}}.

## Extrudeix i Retalla

{{ui:Extrudeix}} i {{ui:Retalla}} fan la mateixa operació, que comença amb ajustos diferents.

| Ajust | Opcions | Extrudeix comença a | Retalla comença a |
|---|---|---|---|
| Operació | Boss (afegeix material), Cut (treu material), Intersect (manté la intersecció), Cos nou (encara no implementat en aquesta versió) | Boss | Cut |
| Final | Cec (una profunditat), Pla mitjà (en ambdós sentits), Tot a través | Cec | Tot a través |
| Profunditat (mm) | Superior a 0, fins a 1,000,000 | 10 | 10 |
| Inverteix la direcció | Desactivat / activat | Desactivat | Desactivat |

- Perfil: cada bucle tancat de línies sòlides, cercles i arcs del croquis. Els bucles dins de bucles són forats.
- Tot a través només funciona per als talls. Arriba fins al final de la peça pel costat triat.
- Un tall va dins del material, allunyant-se del costat exterior del pla del croquis; Inverteix la direcció el gira.

## Revolució i tall de revolució

| Ajust | Opcions | Per defecte |
|---|---|---|
| Operació | Boss, Cut | Boss ({{ui:Revolució}}), Cut ({{ui:Més}} › {{ui:Tall de revolució}}) |
| Angle (°) | Superior a 0, fins a 360 | 360 |
| Eix | Primera línia de centre, qualsevol línia o línia de centre del croquis, o una operació d'eix situada al pla del croquis | Primera línia de centre |

- El perfil ha de quedar a un sol costat de l'eix. Pot tocar-lo.
- L'eix d'una revolució el poden usar els patrons circulars i les unions d'un conjunt.

## Forat

| Ajust | Opcions | Per defecte |
|---|---|---|
| Tipus | Simple, Rebaix cilíndric | Simple |
| Diàmetre (mm) | Superior a 0 | 6 |
| Tot a través | Activat / desactivat | Activat |
| Profunditat (mm) | Quan Tot a través està desactivat | 10 |
| Diàmetre del rebaix ⌀ | Més ample que el forat | 11 |
| Profunditat del rebaix | Menys profund que un forat cec | 6 |
| Inverteix la direcció | Desactivat / activat | Desactivat |

- Un forat a cada punt aïllat del croquis (punts fets amb l'eina Punt). El tauler indica quants n'hi ha.
- Els forats es perforen perpendicularment al pla del croquis, dins del material.
- Els eixos de cada forat els poden usar les unions d'un conjunt ("Hole1, forat 2").

## Patró lineal

| Ajust | Opcions | Per defecte |
|---|---|---|
| Operacions a copiar | Qualsevol operació sòlida que hi hagi a sobre | L'operació seleccionada; si no, l'última operació sòlida |
| Direcció | Eix X, eix Y, eix Z; una línia d'un croquis anterior; l'eix d'una revolució; una aresta seleccionada | Eix X (o l'aresta seleccionada en afegir-la) |
| Espaiat (mm) | Qualsevol número | 20 |
| Quantitat | De 1 a 1000, incloent l'original | 3 |
| Inverteix la direcció | Desactivat / activat | Desactivat |

## Patró circular

| Ajust | Opcions | Per defecte |
|---|---|---|
| Operacions a copiar | Com al patró lineal | Com al patró lineal |
| Eix | Com per a Direcció més amunt | L'eix de l'última revolució; si no, l'eix Y (o l'aresta seleccionada) |
| Angle (°) | Superior a 0, fins a 360. 360 reparteix les còpies igualment en tota la volta; menys les reparteix dins de l'angle | 360 |
| Quantitat | De 1 a 1000, incloent l'original | 6 |
| Inverteix la direcció | Desactivat / activat | Desactivat |

## Simetria

| Ajust | Opcions | Per defecte |
|---|---|---|
| Simetria | El cos sencer (tal com s'ha construït fins ara), o les operacions triades | L'operació seleccionada; si no, el cos sencer |
| Pla de simetria | Pla Davanter, Superior o Dret; una cara plana | El pla Dret, o la cara plana seleccionada en afegir-la |

## Arrodoniment i Xamfrà

En aquesta versió el nucli de malla els construeix sobre arestes rectes entre dues cares planes (cantonades exteriors o interiors), amb un sol radi. Una aresta rodona mostra "Arrodoniment: en aquesta versió només arestes rectes entre dues cares planes (les construeix el nucli de malla). Arrodoniu o xamferneu les arestes corbes al croquis."; on les arestes arrodonides es troben en una cantonada, s'ajunten a inglet, i l'operació avisa "Arrodoniment pel nucli de malla: on es troben les arestes arrodonides, s'ajunten a inglet, no es fonen." Tots els tipus de xamfrà (distància igual, dues distàncies, distància i angle, amb **Inverteix els costats**) funcionen. Vegeu [Arrodoneix, bisela i buida](topic:fillet-chamfer-shell).

| Ajust | Opcions | Per defecte |
|---|---|---|
| Radi (mm) (Arrodoniment) | Superior a 0 | 2 |
| Distància (mm) (Xamfrà) | Superior a 0, igual a les dues cares | 1 |
| Arestes | Les arestes seleccionades, cadascuna enumerada per les dues cares que uneix ("Extrude1 end face × Extrude1 side"), amb **Elimina** | Les arestes seleccionades en afegir-la |

- Seleccioneu les arestes abans de triar el botó ({{key:Shift}}+clic per a diverses), o trieu-lo sense res seleccionat i feu clic a les arestes després.
- {{ui:Selecciona arestes}} (o feu doble clic a l'operació) canvia les arestes.
- Les arestes es conserven per les dues cares que uneixen, de manera que resisteixen els canvis de mida anteriors.

## Buida

El nucli de malla la construeix. Només es poden obrir cares planes ("Buida: en aquesta versió només obre cares planes (la construeix el nucli de malla)."); els murs de gruixos diferents encara no estan implementats. Vegeu [Arrodoneix, bisela i buida](topic:fillet-chamfer-shell).

| Ajust | Opcions | Per defecte |
|---|---|---|
| Mur (mm) | Superior a 0 | 2 |
| Els murs creixen cap a fora (les cares es queden a dins) | Desactivat: els murs van cap a dins. Activat: els murs van cap a fora | Desactivat |
| Cares obertes | Les cares eliminades, almenys una, amb **Elimina** | Les cares seleccionades en afegir-la |

{{ui:Selecciona cares}} canvia les cares obertes.

## Sòlid importat

Es crea en obrir un fitxer STEP, STL, OBJ o 3MF: un cos sòlid de triangles sense historial propi ([Obre un fitxer STEP](topic:import-step), [Obre un STL, OBJ o 3MF](topic:open-meshes)). Mostra el fitxer del qual prové i què ha reparat la importació; **Unitats al fitxer**, **Amunt al fitxer** i **Usa-ho per a** continuen sent editables. Un sòlid STEP importat per una versió anterior que tenia el nucli exacte es manté a l'historial marcat com a no implementat; torneu a obrir el fitxer STEP per incorporar-lo com a triangles.

| Ajust | Opcions | Per defecte |
|---|---|---|
| Amunt al fitxer | Z amunt (la majoria de CAD), Y amunt | Z amunt |

Els patrons i les simetries poden copiar un sòlid importat, però no un arrodoniment, un xamfrà o una buida.

## Què té cada operació

A la part inferior del tauler de cada operació:

| Botó | Fa |
|---|---|
| {{ui:Desactiva}} / {{ui:Reactiva}} | La desactiva o l'activa. Les operacions que la necessiten no es construeixen mentre és desactivada |
| {{ui:Retrocedeix fins aquí}} | Construeix només les operacions que hi ha per sobre d'aquesta. Les noves operacions s'afegeixen a la barra de retrocés |
| {{ui:Mou amunt}} / {{ui:Mou avall}} | Reordena, quan cap de les operacions que usa no quedaria per sota. Si no, apareix en gris amb el motiu |
| {{ui:Suprimeix}} | Suprimeix-la, i (després de preguntar) totes les operacions que la usen |
| Nom | Canvia-li el nom (fins a 60 caràcters) |

Les operacions amb croquis també enumeren **Cotes del croquis**, editables al lloc.

## Estats a l'historial

| Estat | Es mostra com a | Significat |
|---|---|---|
| Construïda | Normal | Tot bé |
| Avís | ⚠ | Construïda, amb alguna cosa a comprovar: "Sobredefinit: 1 relació no és necessària." o "Després d'això no queda res de la peça." |
| Error | ⚠ error, en vermell | No s'ha pogut construir; el missatge n'explica el motiu |
| No construïda | ⚠ no implementada | Necessita una operació que ha fallat, està desactivada o retrocedida, o necessita un nucli exacte, que aquesta versió no té ("Escombrat: encara no implementat. …") |
| Desactivada | desactivat | Desactivada |
| Retrocedida | en gris, sota la barra de retrocés | No es construeix fins que avanceu |

## Ajustos de la peça

Feu clic en un espai buit perquè no hi hagi res seleccionat. El tauler de la dreta mostra **Peça**:

- **Nom**: el nom de la peça, que s'usa per als noms de fitxer i el caixetí del dibuix (fins a 120 caràcters).
- **Corbes**: vegeu més avall.

### Resolució de les corbes

El nucli de malla construeix el sòlid a partir de facetes planes, de manera que la vista, STL, 3MF, el STEP facetat, el volum i les vistes del dibuix segueixen totes **Corbes**: quantes facetes hi ha per volta completa.

| Ajust | Facetes per volta | Volum d'una forma rodona |
|---|---|---|
| Gruixuda (32 per volta) | 32 | Uns 0.64 % per sota del valor real |
| Normal (64 per volta) | 64 | Uns 0.16 % per sota (el valor per defecte) |
| Fina (128 per volta) | 128 | Uns 0.04 % per sota |
| Molt fina (256 per volta) | 256 | Uns 0.01 % per sota |

Les corbes més fines donen exportacions i vistes més suaves, i reconstruccions més lentes. El paràmetre es desa al fitxer de la peça.

## Encara no implementat

Els arrodoniments de radi variable, els arrodoniments i xamfrans sobre arestes rodones, les buides que obren cares corbes, el desmotllament sobre cares corbes, l'escombrat, el loft, el nervi, els sòlids STEP amb cares corbes exactes, els cossos nous, les conicitats, "fins a" una cara o un vèrtex, i les referències a les cares i arestes del sòlid necessiten un nucli exacte, que aquesta versió no té. També no estan implementats: els forats amb rosca i els avellanats. Vegeu [Què encara no està implementat](topic:not-built-yet).
