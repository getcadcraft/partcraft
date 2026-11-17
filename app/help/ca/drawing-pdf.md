---
title: Fes un dibuix amb vistes, una secció i GD&T
summary: Obriu el full de dibuix, afegiu una secció i una vista de detall, col·loqueu referències, marcs de control d'elements i símbols d'acabat superficial, trieu la mida del full, ompliu el caixetí i les revisions, i exporteu el full com a PDF.
keywords: taula de forats, posicions dels forats, etiquetes, dibuix, dibuix 2D, full, mida del full, a4, a3, a2, a1, a0, ansi, caixetí, revisió, bloc de revisions, número de plànol, material, pdf, vistes, ortogràfica, tercer diedre, isomètrica, vista de secció, vista de detall, gd&t, referència, marc de control d'elements, tolerància, posició, planor, acabat superficial, rugositat, impressió
from: 39e944c0
---

PartCraft fa un full de dibuix de la peça: vistes frontal, superior i dreta en projecció de tercer diedre, una vista isomètrica, mides generals i un caixetí en un full de la sèrie A4 a A0 o ANSI A a E. A sobre, hi podeu afegir una secció, una vista de detall i símbols GD&T. El full s'actualitza quan canvia la peça, i la seva configuració es desa al fitxer de la peça.

## Obre el full de dibuix

1. Construïu la peça. (Sense res construït: «Primer construïu un sòlid i després feu-ne el dibuix.»)
2. Trieu {{ui:Dibuix}} a la barra d'eines.

La vista 3D es substitueix pel full. La barra d'eines mostra {{ui:Datum}}, {{ui:Marc}}, {{ui:Acabat}}, {{ui:Detall}}, {{ui:PDF}} i {{ui:Enrere}}, i el panell dret porta el títol **Dibuix**. La barra d'estat indica com s'han fet les vistes: «Dibuix (les corbes es dibuixen com a facetes). Datum, Marc i Acabat col·loquen GD&T en una vista; el panell defineix una secció i una vista de detall.» Les vistes es dibuixen a partir de les facetes del nucli de malla, de manera que els cantells arrodonits són trossos rectes curts; els arcs veritables necessiten un nucli exacte, que aquesta versió no té.

Mogueu-vos pel full: gireu la roda per fer zoom, arrossegueu amb el botó dret o el del mig per desplaçar, i premeu {{key:F}} per ajustar el full. Amb el full enfocat, {{key:Plus}} i {{key:Minus}} fan zoom, i {{key:Shift}} amb les tecles de fletxa desplaça.

Trieu {{ui:Enrere}}, {{ui:Enrere al model}} o premeu {{key:Esc}} (sense res seleccionat i sense cap eina activa) per tornar al model 3D.

## Què hi ha al full

- **El full que trieu**, horitzontal (A3 tret que en trieu un altre), amb un marc i un **caixetí**: títol, empresa, número de plànol, revisió, material, dibuixat / revisat / aprovat per, data, escala, mida del full, «Unitats: mil·límetres · Projecció en tercer diedre», i si les vistes són exactes o facetades.
- Un **bloc de revisions** a la cantonada superior dreta quan afegiu una revisió.
- **Vistes frontal, superior i dreta**: la vista superior sobre la frontal, i la dreta a la seva dreta. Arestes ocultes en traç discontinu.
- Una **vista isomètrica** quan hi ha lloc.
- **Mides generals**: amplada i alçada a la vista frontal, profunditat a la vista superior.
- Una **escala** per a les vistes principals de la sèrie ISO (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), triada perquè hi càpiguen.

## Trieu la mida del full

Al full de dibuix, sense res seleccionat, trieu {{ui:Full}} al panell dret: **A4, A3, A2, A1, A0** (ISO 216) o **ANSI A, B, C, D, E** (11 × 8.5 a 44 × 34 in). Les vistes es tornen a disposar a l'escala ISO més gran que hi càpiga, de manera que un full més gran pot mostrar la peça més gran.

## Ompliu el caixetí

Els camps del **Caixetí** del panell dret van directament al full: {{ui:Títol}}, {{ui:Núm. de plànol}}, {{ui:Revisió}}, {{ui:Empresa}}, {{ui:Dibuixat per}}, {{ui:Revisat per}}, {{ui:Aprovat per}}, {{ui:Data}} (any-mes-dia), {{ui:Tolerància general}} i {{ui:Acabat}} (els dos últims s'imprimeixen just sobre el caixetí). Escriviu en una caixa i premeu {{key:Enter}} o feu clic fora. Una caixa buida deixa la cel·la en blanc, excepte:

- **Títol** mostra el nom de la peça fins que n'escriviu un.
- **Data** mostra avui fins que n'escriviu una.
- **Revisió** mostra la revisió més nova de la llista fins que n'escriviu una.

**Material** ve de la peça: feu clic a un espai buit del model i després trieu {{ui:Material}} al panell Peça. El mateix material dona a les propietats de massa de Mesura la densitat.

## Afegiu revisions

Sota **Revisions**, feu clic a {{ui:Afegeix una revisió}}. Cada fila nova pren la lletra següent (A, B, C …; després de Z ve AA) i la data d'avui. Escriviu què ha canviat i qui ho ha fet. {{ui:Suprimeix}} elimina una fila. El bloc de revisions de la cantonada superior dreta del full les llista, la més antiga primer, fins a 20.

La mida del full, el caixetí, les revisions i el material es desen al fitxer de la peça, i cada canvi és un pas de {{ui:Desfés}}.

## Afegiu una vista de secció

La peça es talla amb un pla i el tall s'ombreja amb trama. Igual que les altres vistes, la secció es dibuixa a partir de facetes, de manera que els cantells arrodonits són trossos rectes curts.

1. Al panell dret, poseu **Secció A-A** a **De la vista frontal**, **De la vista superior** o **De la vista dreta**.
2. La secció apareix al full, amb trama on el tall travessa material, amb la línia de tall i les fletxes «A» a la vista d'on es pren.
3. Poseu **Tall a (mm)** per moure el pla de tall. Comença pel mig de la peça.

Poseu **Secció A-A** de nou a **Cap** per eliminar-la.

## Afegiu una vista de detall

1. Poseu **Detall B** a la vista que voleu ampliar (o trieu {{ui:Detall}} a la barra d'eines).
2. Feu clic al centre de la zona a ampliar, en aquella vista. Un cercle amb la lletra «B» la marca, i el «Detall B» ampliat apareix al full amb escala pròpia, per exemple «Detall B (2:1)».
3. Poseu **Radi del detall (mm)** per a la mida del cercle i **Escala del detall** per a l'ampliació: 2, 4, 5 o 10 vegades l'escala del full.

Un detall es pot prendre de la vista frontal, superior, dreta o de secció, però no de la isomètrica. Si no hi ha lloc per a totes les vistes, el panell diu «No hi ha lloc al full per a: detall. Feu el detall més petit o elimineu una vista.»

## Afegiu una taula de forats

Una taula de forats llista els forats de la peça amb les seves posicions, per a perforació o CNC: trieu **Taula de forats** › **De la vista superior** (o frontal, o dreta) al panell.

- Cada forat vist de cantell en aquella vista rep una etiqueta al costat: **A1**, **A2** … per a la primera mida, **B1** … per a la següent.
- La taula llista cada etiqueta, la seva **X** i la seva **Y** en mil·límetres, i la seva mida: «Ø14 PASSANT», «Ø6.6 × 10 PROFUND», un escaiençat o un avellanat, o l'anotació de rosca d'un forat roscat.
- X i Y es mesuren des de la cantonada inferior esquerra del contorn de la vista, marcada **X0 Y0** al full.
- Els forats fets per patrons hi són inclosos. Els forats que no són perpendiculars a la vista es comptent al panell i queden fora de la taula.

La taula va en una zona lliure del full i al PDF.

## Col·loqueu símbols GD&T i d'acabat superficial

1. Trieu {{ui:Datum}}, {{ui:Marc}} (un marc de control d'elements) o {{ui:Acabat}} (un símbol d'acabat superficial).
2. Feu clic al punt d'una vista on s'ha d'enganxar. S'ajusta a la línia dibuixada més propera, a menys de 2.5 mm.
3. El símbol apareix amb una línia de crida, seleccionat, i el panell dret mostra la seva configuració.

Arrossegueu un símbol per moure'l; la seva línia de crida es manté al punt. Amb un símbol seleccionat, les tecles de fletxa el desplacen 1 mm. {{key:Delete}} o {{key:Backspace}} (o {{ui:Suprimeix}} al panell) l'eliminen; {{ui:Fet}} o {{key:Esc}} el desselecciona. Cada canvi és a la llista de desfer.

### Datum

**Lletra**: de la A a la Z, sense I, O i Q (es llegirien com 1, 0 i O). Cada datum nou pren la lletra lliure següent.

### Marc de control d'elements

| Configuració | Opcions |
|---|---|
| **Tolerància** | Rectitud, Planor, Circularitat, Cilindricitat, Perfil d'una línia, Perfil d'una superfície, Perpendicularitat, Angularitat, Paral·lelisme, Posició, Concentricitat i Simetria (les dues eliminades a Y14.5-2018, i marcades com a tals), Oscil·lació circular, Oscil·lació total |
| **Zona (mm)** | El valor de la tolerància, per defecte 0.1 |
| **Zona de diàmetre (⌀)** | Per a característiques amb zona cilíndrica; activada per defecte per a Posició |
| **Material** | RFS (cap), MMC (Ⓜ), LMC (Ⓛ), quan la característica ho permet |
| **Referència primària / secundària / terciària** | Fins a tres lletres de datum, cadascuna amb un **modificador …** (MMB, LMB) quan és permès |

PartCraft comprova el marc amb les regles de ASME Y14.5 i diu què està malament a la part superior del panell, per exemple «La planor és una tolerància de forma: no admet referències de datum.» o «La posició necessita almenys una referència de datum.» La línia **Llegeix** explica el marc amb paraules.

### Acabat superficial

| Configuració | Opcions | Per defecte |
|---|---|---|
| **Ra (µm)** | Mitjana de rugositat | 1.6 |
| **Procés** | qualsevol procés, mecanitzat, sense material eliminat | mecanitzat |
| **Nota** | Fins a 40 caràcters, com una direcció o un procés | |

Sense res seleccionat, el panell llista les **Notes al full**, cadascuna amb **Selecciona**.

## Exporta el PDF

Trieu {{ui:PDF}} a la barra d'eines, {{ui:Exporta PDF}} al panell, o {{ui:Exporta}} i després {{ui:Dibuix (PDF): vistes, secció, detall, GD&T}} des del model. El PDF es baixa com a `<part name> - drawing.pdf`, i la barra d'estat llista què hi ha.

Imprimiu-lo a «Mida real» en paper de la mida del full per mantenir l'escala.

## Límits

| Encara no implementat | Feu-ho avui |
|---|---|
| Cotes diferents de les tres mides generals | Afegiu-les al PDF amb una eina d'anotació, o exporteu un croquis o una cara com a DXF i acoteu-lo en un programa CAD 2D |
| Més d'una secció o un detall; vistes trencades, auxiliars i projectades | No disponible |
| Primer diedre, vistes mòbils, fulls verticals | Tercer diedre, disposició automàtica, horitzontal |
| Notes lliures i taules al full (a part dels blocs de títol i de revisió) | Useu la nota d'acabat, o afegiu text al PDF |
| Dibuixos de conjunts | No disponible |

Els caràcters fora del conjunt de l'Europa occidental s'imprimeixen com a «?» (el PDF usa la Helvetica integrada del lector). Els símbols GD&T es dibuixen com a línies, de manera que s'imprimeixen en qualsevol lector.

## Deixeu que el full ho faci

- **Full › Automàtic** tria el paper per vosaltres: l'escala estàndard més gran fins a 1:1, en el full de mida A més petit que conté les vistes a aquesta escala (la llista indica quin ha triat).
- **Acota els forats** acota els forats a la vista que en veu més de cantell: una marca de centre a cadascun, una anotació per mida («2× Ø6 PASSANT» amb línia de crida), i les posicions mesurades des de la cantonada inferior esquerra de la vista. L'amplada, l'alçada i la profunditat generals sempre hi són.
