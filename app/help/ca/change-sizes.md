---
title: Canvia mides sense obrir el croquis
summary: Controla una peça amb els números del tauler dret: cotes de croquis, profunditats, quantitats i angles; com planificar una peça perquè els números adequats la governin, i on prenen el relleu els paràmetres i les equacions.
keywords: paràmetres, cotes de control, intenció de disseny, canvia la mida, equacions, variables globals, taula de disseny, configuracions, redimensiona, modifica cota
from: c2ae1a32
---

Cada mida d'una peça de PartCraft és un número que pots canviar més tard: les cotes dels seus croquis i els ajustos de les seves operacions. No cal obrir un croquis per canviar-ne les cotes.

## Canvia una cota de croquis des del tauler

1. Fes clic a una operació de l'historial, per exemple "Extrude1".
2. Sota els ajustos de l'extrusió, **Cotes del croquis (Sketch1)** llista cada cota del seu croquis: "Distància", "Diàmetre", "Angle (°)" i així successivament.
3. Escriu un valor nou en un camp i prem {{key:Enter}} o {{key:Tab}}.

El croquis es resol amb el valor nou i tota la peça es reconstrueix. Si selecciones el croquis mateix, es mostra la mateixa llista com a **Cotes de control**.

Un radi o diàmetre ha de ser més gran que zero, i un angle està entre 0 i 180 graus; la barra d'estat ho indica si no és així.

:::tip
Quin camp és quin? Els camps es llisten en l'ordre en què es van fer les cotes. Si no n'estàs segur, obre el croquis (fes-hi doble clic), fes doble clic a la cota del llenç i canvia-la allà.
:::

## Escriu el número principal directament

Selecciona una operació a l'historial (o simplement afegeix-la) i escriu un número: va al camp principal de l'operació, el que més canvies (la **Profunditat** d'una extrusió, l'**Angle** d'una revolució, el **Diàmetre** d'un forat, el **Nombre** d'una matriu, el **Radi** d'un arrodoniment, el gruix de paret d'una buida). Prem {{key:Enter}} per definir-lo, o {{key:Esc}} per mantenir l'anterior. En afegir una extrusió, la barra d'estat ho diu: "S'ha afegit Extrude1. Canvia'n els números a la dreta, o escriu ara un número per a la seva profunditat."

## Canvia el número a l'historial

Cada fila de l'historial mostra el seu número principal al costat del nom: "Extrude1 25 mm", "Hole1 Ø6.6 thru", "Fillet1 R2", "LPattern1 4 × 20 mm". Fes doble clic al número (o selecciona la fila i prem {{key:F2}}) i s'obre un camp just allà. Escriu el valor nou i prem {{key:Enter}}; {{key:Esc}} manté l'anterior. Funciona exactament com el camp de l'operació a la dreta: els mateixos límits, `=` per escriure una equació com `=width/2`, i un pas per desfer.

En una extrusió, un forat o una matriu, un doble clic en qualsevol punt de la fila obre el camp. En un arrodoniment, xamfrà, buida, desmotllament o rosca, un doble clic sobre el nom encara va a triar arestes o cares, així que fes doble clic al número en si. Els croquis no tenen número a la fila: un doble clic obre el croquis.

## Arrossega-ho a la vista

Selecciona una extrusió a l'historial (o fes-hi clic a la vista, i després a la seva fila) i apareix una fletxa taronja sobre la seva cara final, amb la profunditat en un camp al costat. Arrossega la fletxa: la peça segueix mentre arrossegues, i en deixar anar, el nou valor es defineix com un sol pas ({{key:Mod+Z}} el torna). Prem {{key:Esc}} mentre arrossegues per tornar al punt d'inici. La profunditat avança en passos d'una desena part de la seva mida: 1 mm en una extrusió de 25 mm, 0.1 mm en una de 3 mm.

Una revolució té una fletxa corba al final del seu gir: arrossega-la al voltant de l'eix per canviar l'angle, en graus sencers d'1° a 360°.

O fes clic al camp al costat de la fletxa, escriu un valor (o `=` i una equació) i prem {{key:Enter}}. No hi ha fletxa en una extrusió que va **Travessa-ho tot** o fins a una cara, ni en un valor que governi una equació: canvia-ho a la dreta.

## Els números que governen una peça

| On | Què pots canviar |
|---|---|
| Croquis | Cada cota: longituds, distàncies, radis, diàmetres, angles |
| Extrusió i retall | Profunditat, condició final, direcció, cos o retall |
| Revolució i tall de revolució | Angle, eix, cos o retall |
| Forat | Diàmetre, profunditat, travessa-ho tot, diàmetre i profunditat de l'avellanat |
| Arrodoniment, Xamfrà, Buida | Radi, distància, gruix de paret i direcció, i quines arestes o cares |
| Lineal i Circular | Nombre, espaiat o angle, direcció o eix |
| Peça | Corbes (com de fines són les formes rodones en facetar-les) |
| Dibuix | On talla la secció, la mida del detall i l'escala, valors GD&T |

## Planifica la peça perquè els números adequats la governin

Els números que dones són els que pots canviar. Alguns hàbits fan que els canvis futurs es comportin bé:

- **Acota el que importa per a la feina.** Si un forat ha de quedar a 15 mm d'una vora, acota-ho des d'aquella vora, no des de l'origen.
- **Defineix del tot els croquis.** Així un canvi només mou el que hauria de moure (vegeu [Defineix del tot un croquis](topic:relations-dimensions)).
- **Fes servir relacions per a la intenció.** Igual en dos forats vol dir que un diàmetre governa tots dos. Per a formes simètriques: posa l'origen a la línia de centre, o fes servir Punt mitjà.
- **Croquis sobre cares fetes per operacions.** Un croquis sobre la cara final d'una extrusió es mou quan canvia la profunditat.
- **Matriu en lloc de copiar.** Un forat repetit vuit vegades amb una matriu té un sol diàmetre per canviar.

## Més enllà dels números individuals

- **Un número que governa diversos:** fes servir paràmetres i equacions: [Controla una peça amb paràmetres](topic:parameters).
- **Diverses mides d'una peça:** desa cadascuna com a [configuració](topic:design-tables); es guarden al fitxer de la peça.
- **Aritmètica en un camp numèric:** escriu `=40/2` o `=width / 2`. Això crea una equació; vegeu [Equacions en tots dos sentits](topic:equations-two-way).
- **Unitats en polzades:** la peça mostra mil·límetres. En un camp numèric amb `=`, o en un paràmetre, `2in` es converteix en 50.8.

Vegeu [Què encara no està implementat](topic:not-built-yet).
