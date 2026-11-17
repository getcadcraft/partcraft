---
title: Extrudeix una protuberància i talla-hi a través
summary: Converteix un croquis en un sòlid amb Extrudeix, defineix profunditats Cec, Pla mitjà, Fins a o de dues direccions, una conicitat o un contorn del croquis; després dibuixa un croquis sobre una cara i Retalla una butxaca o una ranura passant.
keywords: extrudeix, protuberància, protuberància extrudida, retalla, tall extrudit, butxaca, tot a través, cec, pla mitjà, inverteix, profunditat, tall-extrudeix, protuberància-extrudeix, coixinet, pad, fins a una cara, fins a la següent, fins a un vèrtex, desfasament des de la cara, direcció 2, dues direccions, desmotllament en extrudir, conicitat, contorn, regió, contorns seleccionats
from: 3b13ff10
---

{{ui:Extrudeix}} empeny el perfil tancat d'un croquis perpendicularment al seu pla per fer material. {{ui:Retalla}} fa el mateix però treu material. Les dues són la mateixa operació per dins; més tard podeu canviar-ne una per l'altra.

## Extrudeix una protuberància

1. Dibuixeu un perfil tancat i tanqueu el croquis (vegeu [Dibuixa el primer croquis](topic:sketch-basics)). Es mantindrà seleccionat.
2. Trieu {{ui:Extrudeix}}.

Apareix un sòlid de 10 mm, "Extrude1" s'afegeix a l'historial amb el seu croquis sagnat a sota, i la barra d'estat diu "Extrude1 afegit. Canvieu-ne els números a la dreta."

**Quin croquis s'usa:** el croquis que acabeu de tancar, o el croquis seleccionat a l'historial. Si no hi ha res seleccionat, PartCraft agafa el croquis més recent que cap operació encara no fa servir. Si no n'hi ha cap: "Feu primer un croquis: trieu un pla, Croquis, dibuixeu un perfil tancat, Surt."

### Defineix la profunditat i la direcció

Al tauler de la dreta:

| Ajust | Opcions | Per defecte |
|---|---|---|
| **Operació** | Boss (afegeix material), Cut (treu material), Intersect (manté la intersecció), Cos nou (encara no implementat en aquesta versió: necessita un nucli exacte) | Boss |
| **Final** | Cec (una profunditat), Pla mitjà (en ambdós sentits), Tot a través, Fins a una cara o un pla, Fins a la següent cara, Fins a un vèrtex, Desfasament des de la cara | Cec |
| **Profunditat (mm)** | Qualsevol mida superior a zero (es mostra per a Cec i Pla mitjà) | 10 |
| **Inverteix la direcció** | Creix cap a l'altra banda del pla del croquis (no es mostra per a Pla mitjà) | Desactivat |

Escriviu un número i premeu {{key:Enter}} o {{key:Tab}}: la peça es torna a construir de seguida. **Pla mitjà** posa la meitat de la profunditat a cada costat del croquis.

### Fins a una cara, la següent cara o un vèrtex

Encara no implementat en aquesta versió: cada final "fins a" necessita un nucli exacte, i l'operació diu "Extrudint fins a una cara, la següent cara o un vèrtex: encara no implementat (necessita un nucli exacte)." Useu una profunditat Cec que mesureu. Amb un nucli exacte, els finals funcionen així:

- **Fins a una cara o un pla**: **Fins a** pren una cara plana (Seleccioneu i després feu-hi clic) o un pla de referència. Una cara paral·lela al croquis dona una profunditat exacta; una cara inclinada talla el final a la pendent. Si la cara és darrere del croquis: "… Proveu Inverteix la direcció."
- **Fins a la següent cara**: s'atura a la primera cara plana del cos amb què topa l'extrusió (aquí no s'admeten cares corbes: ho indica).
- **Fins a un vèrtex**: s'atura al nivell d'un vèrtex (feu clic a prop del final d'una aresta) o d'una operació de punt.
- **Desfasament des de la cara**: com Fins a una cara, però s'atura **Desfasament (mm)** abans (mesurat perpendicularment a la cara).

### Dues direccions, conicitat, un contorn

- **Segona direcció** (Cec): extrudeix també **Segona profunditat (mm)** cap a l'altre costat del croquis.
- **Conicitat (°)**: els costats s'inclinen cap a dins a mesura que avancen (negatiu: cap a fora), com un desmotllament; només en una direcció. Encara no implementat en aquesta versió (necessita un nucli exacte): deixeu-la a 0.
- **Regions**: **Seleccioneu regions**, i després feu clic dins dels bucles per extrudir; només s'usen aquestes regions (un cercle dins d'un quadrat: feu clic dins del cercle per a un cilindre, i entre tots dos per a una placa amb un forat). **Tot** torna a tots els bucles.

Sota aquests ajustos, **Cotes del croquis** enumera les cotes de control del croquis, de manera que podeu canviar les mides del perfil sense obrir el croquis.

:::note
**Tot a través només és per als talls.** Una protuberància amb Tot a través falla amb "Tot a través és per als talls. Useu una profunditat per a una protuberància." En passar una operació de Cut a Boss, Tot a través canvia a Cec automàticament.
:::

## Talla una butxaca

1. Feu clic a la cara plana on voleu tallar. Es ressalta, i el tauler de la dreta diu **Cara**.
2. Trieu {{ui:Croquis en aquesta cara}} (o {{ui:Croquis}} a la barra d'eines).
3. Dibuixeu el contorn de la butxaca, per exemple un rectangle, i poseu-hi cotes.
4. Trieu {{ui:Surt}}.
5. Trieu {{ui:Retalla}}. Comença com a **Tot a través**: treu material de costat a costat de la peça.
6. Per a una butxaca, definiu **Final** a **Cec (una profunditat)** i escriviu la **Profunditat (mm)**.

Un tall va dins del material, allunyant-se de la cara on heu fet el croquis. Si la barra d'estat diu "No hi ha res per tallar en aquest costat del croquis. Proveu l'altra direcció.", marqueu **Inverteix la direcció**.

Un croquis al fons de la butxaca segueix el fons: si canvieu la profunditat de la butxaca, el croquis es mou amb ella.

## Estira o empeny una cara sencera

Per fer que una cara sobresurti més o s'enfonsi, no cal dibuixar-ne el contorn. Feu clic a la cara plana i després, al tauler de la dreta:

- {{ui:Extrudeix des de la cara}} estira la cara cap a fora: PartCraft hi afegeix un croquis amb el contorn (els forats de la cara continuen sent forats) i una extrusió de 10 mm.
- {{ui:Retalla-la}} empeny la cara cap a dins: el mateix croquis i un Retalla a mig camí dins de la peça.

Les dues són un sol pas: {{key:Mod+Z}} elimina alhora el croquis i l'operació. La nova operació queda seleccionada, de manera que escriviu un número de seguida i premeu {{key:Enter}} per a la seva profunditat. El contorn es copia com a línies i arcs fixos: no segueix els canvis posteriors de la cara. Si part del contorn no es pot copiar (una corba de forma lliure), s'obre el croquis amb el que s'ha pogut copiar; acabeu-lo, i després trieu {{ui:Surt}} i {{ui:Extrudeix}} o {{ui:Retalla}}.

## Perfils amb illes

Un croquis pot contenir diversos bucles tancats. Els bucles un al costat de l'altre es converteixen en protuberàncies (o talls) separats; un bucle dins d'un altre es converteix en un forat a través de la protuberància. Per exemple, un rectangle amb dos cercles a dins s'extrudeix com una placa amb dos forats.

Per usar només alguns bucles, seleccioneu-los amb **Regions** (més amunt); una altra operació pot usar els altres bucles del mateix croquis.

## Edita-la més tard

- Feu clic a "Extrude1" a l'historial per recuperar-ne els ajustos.
- Feu doble clic al seu croquis (sagnat a sota) per obrir-lo; tanqueu-lo per reconstruir.
- Vegeu [Canvia una peça a través del seu historial](topic:edit-history) per desactivar, retrocedir, reordenar i suprimir.

## Missatges habituals

| Missatge | Què cal fer |
|---|---|
| "El croquis no té cap perfil tancat per extrudir." | El croquis no té cap bucle tancat de línies sòlides. Tanqueu els buits, o torneu les línies de construcció a línies normals amb {{key:Q}} |
| "El perfil és obert: un final a (x, y) no està unit a res." | Obriu el croquis i uniu aquell final a la línia següent |
| "Encara no hi ha res per tallar." | Un tall necessita un sòlid per tallar. Feu primer una protuberància |
| "Després d'això no queda res de la peça." | El tall ho ha tret tot. Comproveu-ne la mida i la direcció |

Més a [Resolució de problemes](topic:troubleshooting).
