---
title: Acumulació de toleràncies
summary: Trieu una cadena de cares a través de les peces d'un conjunt i vegeu quant pot variar la separació al seu extrem, en el cas pitjor i en RSS, amb les dimensions que més hi influeixen classificades primer.
keywords: acumulació de toleràncies, acumulació, anàlisi de toleràncies, cadena de toleràncies, cadena de cotes, bucle, separació, folgança, cas pitjor, rss, arrel de la suma dels quadrats, toleràncies estadístiques, contribuents, sensibilitat, gd&t, tolerància general, iso 2768
from: cbdb3159
---

Una **acumulació de toleràncies** suma les dimensions al llarg d'una cadena que passa per diverses peces, per veure quant pot variar —normalment una separació— quan cada peça es fabrica en qualsevol punt dins de les seves toleràncies.

## Trieu la cadena

1. Obriu un conjunt i trieu {{ui:Acumulació de toleràncies}} al grup {{ui:Conjunt}}. S'obre una targeta sobre la vista.
2. Trieu al llarg de què es mesura la cadena: X, Y o Z del conjunt, o {{ui:La normal de la primera cara}}.
3. Premeu {{ui:Selecciona la cadena}} i feu clic a les cares per les quals passa la cadena, **en ordre**: comenceu a un costat de la separació, passeu per les peces i acabeu a l'altre costat de la separació.
4. Premeu {{ui:Fet}} o {{key:Enter}}. {{key:Backspace}} desfà l'últim clic; {{key:Esc}} cancel·la.

Dos clics a la mateixa peça fan la dimensió d'aquesta peça (la seva distància al llarg de la cadena). Un clic en una altra peça fa una **interfície** entre elles, on les peces es toquen; no té tolerància tret que n'escriviu una. Els enllaços sumen o resten segons el sentit de la cadena, i tanquen el bucle: la separació nominal és la que mostra el model.

També podeu {{ui:Afegeix una baula}} a mà i escriure'n el nominal, la tolerància i si suma (+) o resta (−).

## Doneu a cada enllaç la seva tolerància

Cada enllaç té una desviació **superior** i una **inferior** (per exemple +0.1 i −0.05). **Tolerància des de** les omple des de la peça:

- **Tolerància general**: el camp de Tolerància del quadre de títol de la peça (vegeu [Plànol a PDF](topic:drawing-pdf)), quan diu ±0.1, +0.2/-0.1 o ISO 2768-f, -m, -c o -v (toleràncies lineals ISO 2768-1, segons la mida de l'enllaç). La tolerància general d'una peça s'usa de seguida quan es tria la cadena.
- **GD&T**: qualsevol marc de control de geometria del plànol de la peça. Les zones de posició, perfil i batec donen ± la meitat de la tolerància. Una tolerància d'orientació o de forma sol estar dins de la tolerància de mida ja existent: afegiu-la només on la cadena toca la superfície controlada. Amb Ⓜ o Ⓛ la zona es pren a la seva mida indicada; la tolerància de bonificació no es compta.
- **Escrita**: qualssevol números que escriviu.

## Llegiu els resultats

- **Separació, nominal** i, quan les toleràncies són desiguals, **Separació, mitjana**: +0.2/−0 i +0/−0.1 mouen el centre del rang.
- **Cas pitjor**: totes les toleràncies al seu límit alhora. La separació mai no pot quedar fora d'això.
- **RSS** (arrel de la suma dels quadrats): cada tolerància es pren com tres desviacions estàndard d'una dispersió normal, i se suma com l'arrel quadrada de la suma dels seus quadrats. La majoria de conjunts queden molt dins del cas pitjor; aquesta és l'estimació habitual per a peces fabricades en sèrie.
- Doneu **Separació com a mínim** i **Separació com a màxim** per veure si el cas pitjor sempre queda dins, i quants conjunts d'un milió el RSS preveu fora.
- La columna **#** ordena els enllaços per la seva quota del RSS: ajusteu primer els primers per marcar la diferència més gran.

{{ui:Desa CSV}} escriu els enllaços, les seves quotes i els resultats. Les acumulacions es desen al fitxer del conjunt, i cada canvi és un pas per a {{key:Mod+Z}}.

:::note
Una acumulació té una sola direcció. No segueix angles ni girs al llarg de la cadena, i no llegeix les toleràncies de mida dels croquis: doneu-les escrites o a través del quadre de títol.
:::
