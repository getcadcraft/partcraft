---
title: Menús, tecles i ratolí
summary: Trieu un estil de menús que encaixi amb la manera en què ja treballeu, doneu a qualsevol comanda la vostra pròpia tecla, moveu comandes entre pestanyes de la cinta i definiu què fan la roda i cada botó del ratolí a la vista 3D.
keywords: estil de menús, menús, cinta, barra d'eines, arbre d'operacions, dreceres de teclat, tecles de drecera, tecles, personalitza, reassigna, ratolí, roda, inverteix, direcció del zoom, botó central, òrbita, desplaça, exporta, importa, canvi, familiar
from: 8445b06c
---

Les comandes de PartCraft són les mateixes per on hi arribeu. Un **estil de menús** només decideix on es troben a la pantalla, com s'anomenen allà i quines tecles les executen. Trieu-ne un a {{ui:Configuració}} ({{key:Mod+,}}) › {{ui:PartCraft}} › {{ui:Menus, tecles i ratolí}}; el canvi és immediat, i aquest navegador el recorda.

## Els dos estils

| Estil | Què obteniu |
|---|---|
| {{ui:PartCraft}} | La barra d'eines pròpia de PartCraft: el selector d'espais de treball, {{ui:Fitxer}}, {{ui:Croquis}}, {{ui:Operacions}}, {{ui:Dibuix}}, {{ui:Conjunt}}, {{ui:Edita}} i {{ui:Vista}}. Tecles {{key:S}} croquis, {{key:F}} ajusta, {{key:M}} mesura, {{key:X}} vista de secció. El punt de partida. |
| {{ui:Arbre d'operacions}} | Una cinta disposada com ho fan els programes de CAD mecànic basat en operacions: un menú {{ui:Fitxer}} (amb totes les exportacions), botons ràpids, i les pestanyes {{ui:Operacions}}, {{ui:Croquis}}, {{ui:Superfícies}}, {{ui:Avalua}}, {{ui:Dibuix}}, {{ui:Conjunt}}, {{ui:Estudis}} (els espais de treball i les seves eines), {{ui:Il·lustra}} (les eines manuals de l'espai Il·lustra; les seves eines hi canvien primer) i {{ui:Vista}}. {{ui:Operacions}} comença amb {{ui:Croquis}}, ja que una peça comença amb un croquis. Tecles addicionals: {{key:E}} extrudeix, {{key:H}} forat, i {{key:V}} seguida d'una lletra per a una vista: {{key:V}} {{key:F}} frontal, {{key:V}} {{key:B}} posterior, {{key:V}} {{key:T}} superior, {{key:V}} {{key:O}} inferior, {{key:V}} {{key:R}} dreta, {{key:V}} {{key:L}} esquerra, {{key:V}} {{key:I}} isomètrica, {{key:V}} {{key:N}} normal a. A la vista 3D el botó central orbita, {{key:Shift}} i el botó central desplacen, el botó dret desplaça i el botó esquerre només tria. |

Tots els estils mantenen {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}} i {{key:Mod+A}}.

Una eina d'un altre espai de treball hi canvia primer; una eina de Disseny triada en un altre espai de treball torna primer a Disseny. Les eines de croquis esperen un croquis, les de dibuix el full de dibuix, les de conjunt un conjunt: la barra d'estat indica què cal fer primer.

:::tip
Dins d'un croquis, al full de dibuix, en un conjunt i en els altres espais de treball, les lletres mantenen el seu propi significat allà ({{key:L}} línia, {{key:R}} rectangle, {{key:J}} unió …) en tots els estils. {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i les fletxes sempre mantenen el seu. Una tecla del disseny de PartCraft que el vostre estil hagi donat a una altra comanda no fa res, i la barra d'estat indica on ha anat la seva comanda.
:::

## Feu-ho vostre

1. Trieu l'estil més proper al que voleu i després feu clic a {{ui:Personalitza…}}.
2. A {{ui:Tecles i menús}}, busqueu una comanda (el quadre de cerca ajuda). {{ui:Afegeix una tecla}} i premeu la tecla, o dues tecles seguides. Feu clic en una tecla per treure-la.
3. Amb la cinta, {{ui:On es troba}} mou la comanda a una altra pestanya i panell, al menú {{ui:Fitxer}}, o a {{ui:Només tecles}}.
4. A {{ui:Ratolí}}, definiu la roda, els botons que desplacen un croquis, i què fa cada botó a la vista 3D.
5. Doneu-li un nom i feu clic a {{ui:Desa}}.

Desar un estil integrat en crea una còpia pròpia ("El meu arbre d'operacions"); l'integrat mai no canvia. Una tecla donada a dues comandes, o una que s'executaria abans que es pugui escriure una tecla de dues lletres, es mostra en vermell i cal corregir-la abans de poder desar.

## Ratolí

- **Roda del ratolí**: {{ui:Desplaçar amunt apropa}} (el valor per defecte) o {{ui:Desplaçar amunt allunya}}, i amb quina velocitat. Un pinçament al panell tàctil sempre fa zoom segons es mouen els dits.
- **Desplaça el croquis amb**: el botó central, el botó dret, o tots dos. Un clic dret en un croquis encara acaba el pas de l'eina.
- **Arrossega a la vista 3D**: {{ui:Propi de cada vista}} manté la configuració de PartCraft ({{ui:Configuració}} › {{ui:PartCraft}}: el botó esquerre orbita, o el central). O bé assigneu cada botó a orbitar, desplaçar, fer zoom o a res; {{key:Shift}} amb el botó d'òrbita desplaça. Un clic sense arrossegar encara tria.

## Porteu-la amb vosaltres

{{ui:Exporta}} desa l'estil en ús com a petit fitxer `.ccinput.json`; {{ui:Importa…}} n'afegeix un, des d'un altre ordinador o d'un company. Un fitxer importat només pot apuntar a les comandes pròpies de PartCraft: qualsevol altra cosa que hi hagi s'omet i es compta a la barra d'estat. {{ui:Suprimeix aquest estil}} elimina un dels vostres.

:::note
Aquests ajustos es queden en aquest navegador. {{ui:Usa aquest estil a totes les aplicacions}} sota les targetes d'estil fa que cada aplicació s'obri amb l'estil corresponent (la seva barra d'eines pròpia, o una cinta), amb els canvis que hàgiu fet a cada aplicació. Triar un altre estil en una aplicació només canvia aquella aplicació.
:::

Relacionat: [Tecles i ratolí](topic:keyboard) · [Configuració de PartCraft](topic:settings) · [Vinc d'un altre modelador paramètric](topic:coming-from)
